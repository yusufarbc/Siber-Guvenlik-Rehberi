# Savunma Derinliği için Donanım, Firmware, Tedarik Zinciri ve Yan Kanal Güvenliği — Fortune 500 Ölçeği Teknik Mimari Kılavuzu

## TL;DR
- Donanımsal Güven Kökü (TPM 2.0 + UEFI Secure Boot + Measured Boot) kurumun en alt savunma katmanıdır; LoJax (APT28) gibi firmware implantları işletim sistemi yeniden kurulumunu ve hatta sabit disk değişimini atlatarak kalıcılık sağlar — savunma NIST SP 800-193 dirençlilik üçlüsü (koruma/tespit/kurtarma) ile inşa edilmelidir.
- Tedarik zinciri riski (MITRE T1195) hem fiziksel donanım Truva atları hem de "Big Hack" gibi kanıtlanamayan iddialarla gündemdedir; gerçek savunma NIST SP 800-161 C-SCRM, CMMC, OEM güvenilir donanım kökleri (Pluton/Titan M2/T2) ve Türkiye'de 7545 sayılı Kanun'un "yerli ve milli ürün önceliği" ilkesiyle sağlanır.
- Yan kanal saldırıları (Spectre/Meltdown ve türevleri Downfall, Inception, MDS, Hertzbleed) mimari değil mikromimari kusurlardır; tek bir tam çözüm yoktur — savunma mikrokod + çekirdek izolasyonu (KPTI, retpoline, eIBRS) + sabit-zamanlı kriptografi + FIPS 140-3 Seviye 3/4 HSM katmanlarıyla yapılır.

## Key Findings

1. **Güven kökü zinciri kırılırsa üst katmanların hiçbiri anlamlı değildir.** TPM 2.0'ın PCR ölçüm zinciri CRTM'den (Core Root of Trust for Measurement) başlar; bu zincirin altındaki firmware ele geçirilirse Secure Boot, BitLocker ve uzaktan tasdik (remote attestation) güvenceleri çöker.
2. **Firmware implantları artık teorik değildir.** LoJax (2018, ilk vahşi-ortam UEFI rootkit), MosaicRegressor, CosmicStrand ve MoonBounce, APT gruplarının SPI flash seviyesinde kalıcılık sağladığını kanıtlamıştır.
3. **"Big Hack" iddiası kanıtlanamadı ama tehdit modeli gerçektir.** Bloomberg'in Supermicro çip iddiası Apple, Amazon, NSA ve DHS tarafından reddedildi; ancak NSA ANT kataloğu (DEITYBOUNCE, IRONCHEF, COTTONMOUTH) devlet düzeyinde donanım implantlarının gerçekliğini gösterir.
4. **Spectre/Meltdown bir sınıf açtı, kapanmadı.** 2018'den bu yana Foreshadow, MDS (ZombieLoad/RIDL/Fallout), Downfall, Inception ve Hertzbleed gibi türevler düzenli olarak ortaya çıkıyor; mimari yeniden tasarım olmadan tam çözüm yok.
5. **Türkiye mevzuatı 2025'te köklü değişti.** 7545 sayılı Siber Güvenlik Kanunu (Resmî Gazete 19 Mart 2025, Sayı 32846) Siber Güvenlik Başkanlığı'nı kurdu, yerli/milli ürün önceliğini ve yetkilendirilmiş tedarik zorunluluğunu yasalaştırdı.

---

# KONU 1: Donanım Güvenliği — Çip (TPM), Anakart ve Firmware (Secure Boot)

## 1.1 Teorik Temel: Donanımsal Güven Kökü (Hardware Root of Trust)

Donanımsal Güven Kökü, sistemin bütünlüğünü doğrulamak için kendisinden önce hiçbir bileşene güvenmek zorunda olmayan, doğası gereği güvenilen ve kendi kendini ölçen/raporlayan bileşendir. Ölçüm zinciri bir yerden başlamalıdır; bu başlangıç noktası **CRTM (Core Root of Trust for Measurement)** olarak adlandırılır — çünkü kendisinden önce ölçülecek bir bileşen yoktur, dolayısıyla "inherently trusted" kabul edilir.

NIST SP 800-193 (Platform Firmware Resiliency Guidelines, Mayıs 2018), güven kökünü işlevsel olarak ayırır:
- **RTU (Root of Trust for Update):** firmware güncellemelerinin dijital imza ile doğrulanması
- **RTD (Root of Trust for Detection):** boot sırasında firmware bütünlüğünün doğrulanması
- **RTRec (Root of Trust for Recovery):** bozulma tespitinde kurtarma sürecinin tetiklenmesi

Belge üç ilke etrafında kurulur: **Koruma (Protection), Tespit (Detection), Kurtarma (Recovery)**. NIST'in ifadesiyle: *"A successful attack on platform firmware could render a system inoperable, perhaps permanently, or requiring reprogramming by the original manufacturer, resulting in significant disruptions to users."* Detection mekanizması ayrı bir katman olmalıdır çünkü ele geçirilmiş kod kendisini veya kendi verisini test etmek için güvenilir değildir.

**Kurumsal topolojideki konum:** Güven kökü, savunma derinliği piramidinin en altındadır — endpoint'ler (dizüstü/masaüstü), sunucular, ağ cihazları ve BMC (Baseboard Management Controller) seviyesinde. Üst katmanlardaki (OS, uygulama, ağ) tüm güvenlik kontrolleri, bu katmanın bütünlüğü varsayımına dayanır. NIST'in vurguladığı gibi platform yalnızca CPU/BIOS değil; depolama ve ağ denetleyicileri, GPU'lar ve service processor'lar da yüksek ayrıcalıklı firmware barındırır.

## 1.2 TPM 2.0 Mimarisi

**TCG (Trusted Computing Group)** standartlarına göre TPM 2.0 anahtar hiyerarşisi:

| Anahtar | İşlev | Konum |
|---|---|---|
| **EK (Endorsement Key)** | Kalıcı asimetrik anahtar çifti; cihaz kimliği ve TPM'in gerçekliğini ispat. Özel kısım TPM'i hiç terk etmez; üretim sırasında oluşur. Üretici/CA imzalı Endorsement Certificate ile gelir. | Persistent Memory |
| **SRK (Storage Root Key)** | Diğer anahtarları (child keys) ve hassas verileri şifreleyip korur. Sahiplik (ownership) alındığında oluşur; sahiplik bırakılırsa flush edilir. | Persistent Memory |
| **AIK / AK (Attestation Identity Key)** | PCR değerleri gibi tasdik verilerini imzalar; EK tarafından imzalanır ama Storage Hierarchy'de (storage seed → SRK → AIK) yaşar. | Versatile Memory |

**PCR (Platform Configuration Register):** Platform yapılandırmasını saklayan özel registerlar. Sadece **hash extend** mekanizmasıyla değiştirilebilir: `PCR_yeni = Hash(PCR_eski || yeni_ölçüm)`. Bilinen yapılandırmadan herhangi bir sapma, platform bütünlüğünün ihlal edildiğini gösterir.

**Sealed Storage:** Veriler belirli PCR değerlerine "mühürlenir"; platform durumu mühürleme anındaki PCR değerleriyle eşleşmezse veri açılamaz (PCR Binding tabanlı erişim kontrolü).

**Remote Attestation (Uzaktan Tasdik) akışı:**
1. Doğrulayıcı (verifier), cihazın EK ve AK sertifikalarını ister ve Kurumsal Kök CA'ya karşı doğrular.
2. Doğrulayıcı; anahtar kimliği, PCR seçimi ve rastgele nonce içeren bir challenge oluşturur.
3. Tasdikleyici (attester), AK'yi referans alarak `TPM2_Quote` komutu verir; TPM, PCR'lar geçerli durumdaysa `TPMS_ATTEST` yapısını imzalar.
4. Doğrulayıcı, Event Log'u bilinen-iyi (known-good) duruma karşı karşılaştırır.

**Privacy CA modeli:** EK benzersiz olduğundan doğrudan imzalama mahremiyeti bozar; bu yüzden AIK'ları EK'ye bağlayabilen tek güvenilen üçüncü taraf olan Privacy CA kullanılır.

**BitLocker entegrasyonu:** Windows'ta disk şifreleme anahtarı (VMK) PCR değerlerine mühürlenir; boot bileşenleri değişirse TPM anahtarı serbest bırakmaz ve kurtarma anahtarı (recovery key) istenir.

**Linux dm-crypt/LUKS + TPM2 entegrasyonu** (örnek komut satırı):
```bash
# LUKS2 anahtarını TPM2'ye, PCR 7 (Secure Boot durumu) ve PCR 0'a (UEFI firmware) bağla
systemd-cryptenroll --tpm2-device=auto --tpm2-pcrs=0+7 /dev/sda2

# tpm2-tools ile manuel mühürleme
tpm2_createprimary -C o -g sha256 -G rsa -c primary.ctx
tpm2_create -C primary.ctx -i secret.dat -u key.pub -r key.priv -L pcr.policy
```

### Örnek log çıktısı (Measured Boot — event log):
```
PCR-00: 3D 45 8C FE 55 CC 03 EA 1F 44 3F 15 62 BE EC 8D ...  [UEFI firmware/CRTM]
PCR-04: 6A 2E 95 ...  [Bootloader/shim]
PCR-07: 8B 1A ...      [Secure Boot state - PK/KEK/db/dbx]
```

## 1.3 UEFI Secure Boot Mekaniği

**Anahtar hiyerarşisi (kimlik doğrulanmış UEFI değişkenleri):**
- **PK (Platform Key):** Platform sahibi. PK kayıtlı değilse sistem **Setup Mode**'dadır; herhangi bir kimlik-doğrulamalı değişken imzasız yazılabilir. PK kayıtlıysa **User Mode**'dadır; sonraki KEK/db/dbx güncellemeleri uygun anahtarla imzalı olmalıdır.
- **KEK (Key Exchange Key):** db ve dbx'i imzalama yetkisi.
- **db (Allow DB):** İzin verilen yükleyicilerin/EFI uygulamalarının hash ve anahtarları.
- **dbx (Disallow DB):** İptal edilmiş/güvenilmeyen/ele geçirilmiş hash ve anahtarlar.

**Shim bootloader (Linux):** Lisans uyumsuzlukları nedeniyle distrolar, Microsoft 3rd Party UEFI CA tarafından imzalanmış küçük bir "shim" kullanır; shim kendi gömülü sertifikasıyla GRUB2'yi doğrular ve onu yükler. **MOK (Machine Owner Key)** veritabanı, kullanıcı yönetimli kernel modülü/out-of-tree sürücü imzalamaya izin verir — ancak saldırı yüzeyini genişletir (root erişen saldırgan kalıcı MOK anahtarı kaydedebilir).

### Saldırı Senaryosu: BootHole (CVE-2020-10713)
Eclypsium tarafından keşfedilen BootHole, GRUB2'nin `grub.cfg` ayrıştırıcısındaki bir buffer overflow'dur. Eclypsium'un doğrulamasıyla CVSS taban skoru **8.2 (High)**, vektör `CVSS:3.1/AV:L/AC:L/PR:H/UI:N/S:C/C:H/I:H/A:H`. `grub.cfg` genellikle imzalanmaz/ölçülmez/şifrelenmez ve EFI System Partition'da yönetici tarafından imzalı vendor shim/GRUB2 bütünlüğünü bozmadan değiştirilebilir. İmzalı GRUB binary'si geçerli kalırken keyfi kod çalıştırılarak Secure Boot atlatılır ve imzasız kernel/OS yüklenebilir.

Çözüm ekosistem çapında dbx revokasyonu gerektirdi. Oracle Linux mühendislerinin (Daniel Kiper vd.) aktarımına göre koordinasyon eforu *"around 100 individuals from 18 companies"* (18 şirketten yaklaşık 100 kişi) içerdi; Eclypsium'a göre *"more than 80 shims are known to be affected"* (80'den fazla shim etkilendi). İlgili ek CVE'ler: CVE-2020-15705 (shim'siz doğrudan boot'ta imzasız kernel), CVE-2020-15706 (use-after-free), CVE-2020-15707 (initrd integer overflow), CVE-2020-7205. **LogoFAIL** (Aralık 2023), POST sırasında OEM logosu ayrıştıran (Secure Boot doğrulamasından önce çalışan) BMP/JPEG/GIF görüntü ayrıştırıcılarındaki açıklardır; ESP'ye yerleştirilen kötücül logo dosyası imza gerektirmez.

**Savunma komutu (dbx güncellemesi ve doğrulama):**
```bash
fwupdmgr get-updates | grep -i "dbx\|revocation"
fwupdmgr update          # UEFI Secure Boot dbx'i de günceller
mokutil --sb-state       # Secure Boot durumunu doğrula
grub-install --version   # GRUB 2.06+ (post-BootHole) olmalı
```

## 1.4 Firmware Güncelleme Süreçleri ve Kurumsal Özellikler

- **UEFI Capsule Update:** İmzalı firmware capsule'ları OS üzerinden teslim edilir.
- **Intel PFR (Platform Firmware Resilience):** NIST SP 800-193'ün PFR mimarisini bir CPLD/FPGA (örn. Lattice Semiconductor, Winbond TrustME Secure Flash) ile uygular — koruma/tespit/kurtarma; immutable koda dayalı, rollback koruması ve atomik operasyon sağlar.
- **OEM kurumsal özellikleri:** Dell BIOSConnect, **HP Sure Start** (firmware'i sürekli doğrulayıp otomatik kurtaran 4. nesil; HP'nin LoJax analizine göre özellikle UEFI rootkit'lere karşı tasarlandı), Lenovo ThinkShield. Vendor imzalama mekanizmaları (OEM'in fabrikada provisioned anahtarıyla GRUB2'yi doğrudan imzalaması) bazı sistemlerde kullanılır.

## 1.5 MITRE ATT&CK: T1542 (Pre-OS Boot)
- **T1542.001 System Firmware:** BIOS/UEFI firmware manipülasyonu
- **T1542.003 Bootkit:** MBR/VBR/bootloader manipülasyonu

## 1.6 Gerçek Dünya: Firmware-Seviyesi APT'ler

**LoJax (APT28/Fancy Bear/Sednit, ESET, Ağustos 2018):** Vahşi ortamda tespit edilen ilk UEFI rootkit. ESET kıdemli araştırmacısı Jean-Ian Boutin'in sözleriyle: *"Although, in theory we were aware that UEFI rootkits existed, our discovery confirms they are used by an active APT group."* Meşru LoJack (eski adı Computrace, Absolute Software) anti-hırsızlık yazılımının trojanize türevidir. Çalışma mantığı:
- Kötücül DXE modülü her boot'ta DXE fazında çalışır, Windows kullanıcı-modu payload'ı diske bırakır ve başlangıçta çalıştırır.
- SPI flash yazma için RWEverything aracının `RwDrv.sys` çekirdek sürücüsünü kullanır (geçerli sertifika ile imzalı).
- Yazma korumalı sistemlerde, ESET'in tespitiyle CVE-2014-8273 yarış koşulu açığını istismar eder.
- BIOS yazma koruma bitleri (BIOSWE, PRR) düzgün yapılandırılmamış sistemleri hedefler; korumalı sistemlerde SPI flash writer başarısız olur. Sednit Balkanlar ile Orta/Doğu Avrupa hükümet kurumlarını hedefledi.

Diğerleri: **MosaicRegressor**, **CosmicStrand**, **MoonBounce** (Kaspersky, Ocak 2022; Winnti/APT41 ile ilişkili). Önemli savunma değeri: Bu rootkit'ler OS yeniden kurulumunu ve sabit disk değişimini atlatır; temizleme firmware reflash bilgisi gerektirir.

## 1.7 Savunma Araçları
- **CHIPSEC (Intel, ilk sürüm Mart 2014):** PC platform güvenlik analiz framework'ü; SPI flash erişim kontrolü, BIOS yazma koruması, SMRAM koruması, Secure Boot, SMRR programlama testleri ve forensic yetenekler. Windows/Linux/macOS/UEFI shell'de çalışır. **Uyarı:** Bazı modüller Secure Boot'un kapatılmasını ve imzasız çekirdek modülü yüklenmesini gerektirir — üretim sistemlerinde dikkatli kullanılmalıdır.
  ```bash
  python chipsec_main.py                    # otomatik güvenlik test paketi
  python chipsec_main.py -m common.bios_wp  # BIOS yazma koruması testi
  ```
- **fwupd/LVFS (Linux Vendor Firmware Service):** Firmware envanteri ve güncelleme; `HostSecurityId` ve `GetHostSecurityAttrs()` üzerinden **HSI (Host Security ID)** seviyelerini raporlar. (ESET'in eski AV'lerin SPI flash içeriğini tarayamadığını belirtmesi, bu firmware-farkındalıklı araçların değerini gösterir.)
- **VirusTotal firmware tarama**, **Windows Device Guard / Measured Boot / Attestation**.
- Ek araçlar: UEFITool, FwHunt, EMBA, FACT, Intel CSME Version Detection Tool.

## 1.8 Standart/Mevzuat Eşlemesi
- **NIST SP 800-193** (firmware dirençlilik), **NIST SP 800-155** (BIOS bütünlük ölçümü), **NIST SP 800-147** (BIOS koruma — 800-193'ün koruma ilkesinin temeli)
- **NIST SP 800-53:** SI-7 (Software/Firmware Integrity), SC-51 (Hardware-based Protection)
- **CIS Controls v8:** Control 4 (Secure Configuration), Control 2 (Software inventory)
- **ISO 27001:2022:** A.8.9 (Configuration Management), A.8.7 (Malware koruması)

---

# KONU 2: Donanım Tedarik Zinciri Riskleri ve Sahte Bileşenler

## 2.1 Teorik Temel: Donanımsal Truva Atları
Donanımsal Truva atları iki ana yöntemle yerleştirilir:
- **Çip üretimi (fabrication) seviyesinde:** Mask/netlist manipülasyonu — final cihaza "mimari olarak işlenmiş" (architected onto the final device) implantlar.
- **PCB manipülasyonu:** Kart üzerine ek bileşen ekleme/değiştirme.

## 2.2 Saldırı Senaryosu: "The Big Hack" ve Akademik Gerçeklik
Bloomberg Businessweek (Jordan Robertson & Michael Riley, 4 Ekim 2018), iddiasını şu ifadeyle ortaya koydu: *"The attack by Chinese spies reached almost 30 U.S. companies, including Amazon and Apple, by compromising America's technology supply chain"* — yani pirinç tanesi büyüklüğünde casus çiplerin Supermicro anakartlarına yerleştirildiği ve ABD soruşturmasına yakın bir kaynağın nihai sayıyı "neredeyse 30 şirket" olarak belirttiği iddia edildi.

**Reddedişler:** Apple CEO'su Tim Cook *"It is 100 percent a lie, there is no truth to it"* dedi; Amazon ve Supermicro net biçimde reddetti; Supermicro'nun görevlendirdiği bağımsız soruşturma firması (Nardello & Co) *"absolutely no evidence of malicious hardware"* bulduğunu açıkladı; DHS Senato oturumunda ve NSA ("befuddled") reddetti. Hiçbir fiziksel casus çip kamuya çıkmadı. Bloomberg Şubat 2021'de "The Long Hack" devamıyla iddiasını sürdürdü ancak hâlâ fiziksel kanıt sunulamadı.

**Değerlendirme (pozisyon):** İddia kanıtlanamamıştır ve bu raporda doğrulanmış bir olay değil, tehdit modeli örneği olarak ele alınmaktadır. Ancak tehdit modelinin teorik fizibilitesi gerçektir.

## 2.3 NSA/TAO ANT Katalog Sızıntısı (2013, Der Spiegel/Jacob Appelbaum)
Devlet seviyesinde donanım implantlarının **kanıtlanmış** gerçekliği (EFF tarafından yayımlanan orijinal katalog):
- **DEITYBOUNCE:** Dell PowerEdge sunucularda anakart BIOS + SMM (System Management Mode) üzerinden yazılım implantı; OS yüklenirken periyodik çalışma sağlar. ARKSTREAM ile BIOS uzaktan veya interdiction yoluyla yeniden flashlanır. Birim maliyet: $0 (devlet içi).
- **IRONCHEF:** HP Proliant sunucularda BIOS + SMM ile iki yönlü RF iletişimli donanım implantı; StraitBizarre/UnitedRake ve REGIN casus yazılımıyla ilişkilendirildi.
- **COTTONMOUTH-I/II/III:** USB/Ethernet konnektör implantları; HOWLERMONKEY RF transceiver, TRINITY dijital çekirdek. COTTONMOUTH-I: 50 birim için ~$1M (2008). COTTONMOUTH-II USB soket: 50 birim $200K. COTTONMOUTH-III: 50 birim ~$1.25M.
- **IRATEMONK:** Maxtor/Samsung/Seagate/WD sabit disk firmware'i. **FEEDTROUGH:** Juniper Netscreen firewall. **JETPLOW:** Cisco PIX/ASA firewall.

## 2.4 Tedarik Zinciri Müdahalesi (Interdiction)
ANT kataloğu implantları açıkça *"Through remote access or interdiction"* yoluyla yerleştirir — paket sevkiyat sırasında ele geçirilip değiştirilir. Bu, sevkiyat bütünlüğü ve tamper-evident ambalaj kontrollerini kritik kılar.

## 2.5 Sahte (Counterfeit) Bileşen Tespiti
- **X-ray tomografi:** İç yapı/bağlantı doğrulama (tahribatsız)
- **SEM (Scanning Electron Microscopy):** Die seviyesi inceleme
- **Elektriksel test, optik/markaj doğrulama (decapsulation)**
- Standartlar: CISA tedarik zinciri rehberleri, JEDEC standartları, SAE AS6171 (sahte bileşen testi).

## 2.6 Güvenli Donanım Tedariki ve SCRM
**NIST SP 800-161 Rev. 1** (Cybersecurity Supply Chain Risk Management Practices, son güncelleme 1 Kasım 2024): NIST'in tanımıyla C-SCRM, *"the systematic process for managing cyber supply chain risk exposures, threats and vulnerabilities throughout the supply chain."* Çok-seviyeli, risk-tabanlı yaklaşım; C-SCRM olgunluk modeli üç seviye içerir: **foundational, sustaining, enhancing**. NIST SP 800-53r5 SR (Supply Chain Risk Management) kontrol ailesiyle tamamlayıcıdır. **CMMC (Cybersecurity Maturity Model Certification)**, ABD DoD'nin daha geniş C-SCRM programının alt bileşenidir; GSA OASIS+ J-3 teslimatları 800-161 R1 uyumu gerektirir.

## 2.7 Kurumsal Güvenilir Donanım Kökleri
- **Microsoft Pluton:** TPM 2.0 işlevselliğini ve ötesini CPU die'ına entegre eder — discrete TPM'in CPU-TPM bus'ı üzerindeki MITM saldırısı yüzeyini kapatır; firmware güncellemeleri Windows Update üzerinden gelir. AMD Zen 3 ile x86'ya geldi.
- **Google Titan M2:** Pixel'lerde hardware root of trust; ana uygulama işlemcisinden fiziksel olarak izole, bağımsız boot, bootloader/boot chain doğrulama, Common Criteria sertifikalı. Titan ailesi 2017'den beri Google veri merkezlerinde server root-of-trust olarak da kullanılır.
- **Apple T2/Secure Enclave:** Bağımsız coprocessor; rastgele üretilen UID üretim sırasında fuse'a yazılır ve enclave'i hiç terk etmez; FileVault anahtarı SE içinde tutulur, SE dışından adreslenemez; PIN brute-force'a karşı UID + PBKDF.
- **Huawei yasakları:** Ulusal güvenlik endişeleriyle ABD ve müttefiklerinde tedarik kısıtlamaları (Supermicro'nun aksine, kanıta dayalı bir devlet politikası niteliğinde).

## 2.8 MITRE ATT&CK: T1195 (Supply Chain Compromise)
- T1195.001 (yazılım bağımlılıkları), T1195.002 (yazılım tedarik zinciri), T1195.003 (donanım tedarik zinciri).

## 2.9 Türkiye Bağlamı (Tedarik Zinciri ve Donanım Güvenliği Mevzuatı)

**7545 Sayılı Siber Güvenlik Kanunu** (Resmî Gazete 19 Mart 2025, Sayı 32846; kabul 12/3/2025, aynı gün yürürlük): Siber Güvenlik Başkanlığı'nı ve Siber Güvenlik Kurulu'nu kurar.
- **Temel ilke (yerli/milli ürün):** *"Siber güvenliğin sağlanmasına yönelik çalışmalarda öncelikle yerli ve milli ürünler tercih edilir."*
- **MADDE 7(c) — yetkilendirilmiş tedarik:** *"Kamu kurumları ve kuruluşları ile kritik altyapılarda kullanılacak siber güvenlik ürün, sistem ve hizmetleri Başkanlık tarafından yetkilendirilmiş ve belgelendirilmiş siber güvenlik uzmanlarından, üreticilerden veya şirketlerden tedarik etmek."*
- **Yaşam döngüsü ilkesi (7/ç):** *"Siber güvenlik tedbirlerinin, hizmet ve ürünlerin tüm yaşam döngüsü boyunca uygulanması esastır."*
- **MADDE 18:** donanım dahil siber güvenlik ürünlerinin yurt dışı satışı ve üretici şirket kontrol devirleri Başkanlık onayına tabidir; onaysız işlemler hukuki geçerlilik kazanmaz.
- **Cezalar:** bilgi/belge/donanım/yazılım talebini karşılamama veya engelleme 1–3 yıl hapis + 500–1.500 gün adli para; izinsiz faaliyet 2–4 yıl hapis + 1.000–2.000 gün adli para; sır saklama ihlali 4–8 yıl hapis. *Not: İdari para cezası tutarları ikincil kaynaklarda farklılık gösterir; kesin rakamlar Resmî Gazete tam metninden teyit edilmelidir.*

**Bilgi ve İletişim Güvenliği Rehberi (BİGR):** 2019/12 sayılı Cumhurbaşkanlığı Genelgesi doğrultusunda Dijital Dönüşüm Ofisi tarafından hazırlandı (24.07.2020 onay, yürürlük 27 Temmuz 2020); kritik altyapılar için ISO/IEC 27001 uyumlu BGYS, varlık gruplandırma, sıkılaştırma tedbirleri ve "yerli ve milli ürün kullanımının teşvik edilmesi".

**USOM (TR-CERT):** BTK bünyesinde 27/05/2013'te kuruldu (dayanak: 20/10/2012 tarih 28447 sayılı Bakanlar Kurulu Kararı); 7/24 olay müdahalesi, Zararlı Bağlantı Listesi, SİP platformu. Operasyonel görevler 2025-2026'da yeni kurulan Siber Güvenlik Başkanlığı'na devredildi; kritik altyapı sektör sayısı 6'dan 15'e çıkarıldı (resmî karar metniyle teyit önerilir).

**TSE / Ortak Kriterler (Common Criteria, TS EN ISO/IEC 15408; metodoloji ISO/IEC 18045):** Donanım/yazılım/firmware değerlendirmesi; EAL1–EAL7 güvence seviyeleri (EAL2 en yaygın ticari seviye). TSE Bilişim Teknolojileri Test ve Belgelendirme Dairesi yürütür; test laboratuvarı TÜBİTAK BİLGEM OKTEM. Örnek: AKİS v2.5.2N akıllı kart OS CC EAL4+; yerli HSM "DIRAK NHSM" kripto algoritmaları OKTEM doğrulamalı.

**KVKK (6698) — Kişisel Veri Güvenliği Rehberi (Yayın No: 72), MADDE 12 dayanaklı:**
- Disk şifreleme (md. 25): *"Cihazlar içerisinde bulunan kişisel veriler disk şifreleme yöntemi ile şifrelenmeli veya cihazda bulunan önemli veriler dosya halinde şifrelenmelidir."*
- Donanım imhası (md. 33): üçüncü taraflara (üretici/servis) gönderilen arızalı cihazlarda *"veri saklama ortamının sökülerek saklanması, sadece arızalı parçaların gönderilmesi, içerisinde bulunan verilerin şifrelenmesi"*.
- Fiziksel güvenlik (md. 23): sunucu/yedekleme/USB cihazlarının kilitli odada tutulması, giriş-çıkış kaydı. Kurul 2018/10 kararı: taşınabilir medyada kriptografik şifreleme + anahtarın ayrı ortamda tutulması.

**BDDK Yönetmeliği** (Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik, Resmî Gazete 15 Mart 2020, Sayı 31069; yürürlük 1 Temmuz 2020; dayanak 5411 sayılı Kanun md. 93):
- **MADDE 9 (kriptografik kontroller):** kullanımdan kaldırılan medyanın güvenli imhası; "güncel durum itibarıyla güvenilirliğini yitirmemiş" algoritmalar; masaüstü/dizüstü/mobil cihaz içeriğinin şifrelenmesi; uçtan uca güvenli iletim.
- **MADDE 16:** "Sağlayıcı veya üretici desteği biten" (EOL) sistem/cihazların kullanımdan kaldırılması.
- **MADDE 17 (fiziksel güvenlik):** veri merkezi varlığını açık eden işaret bulundurmama; kör nokta barındırmayan, en az bir yıl kayıt saklayan kamera sistemi.
- **MADDE 25:** birincil ve ikincil sistemlerin yurt içinde bulundurulması (veri/sistem lokalizasyonu).
- BDDK duyurusuna göre yönetmelikte "yerli ürün ve hizmetlerin kullanımını teşvik eden" hükümler yer alır.

**5651 Sayılı Kanun** (Resmî Gazete 23 Mayıs 2007, Sayı 26530): yer sağlayıcı trafik bilgisini "bir yıldan az ve iki yıldan fazla olmamak üzere" saklar (md. 5/3); erişim sağlayıcı trafik bilgisini saklar ve dosya bütünlük değerlerini zaman damgası (HASH) ile muhafaza eder. Bu, zaman damgalı/değiştirilemez (immutable) log saklama donanım altyapısı gerektirir.

---

# KONU 3: Yan Kanal Saldırıları ve Donanımsal Sıkılaştırma

## 3.1 Teorik Temel: Yan Kanal Kategorileri
- **Güç analizi:** SPA (Simple Power Analysis), DPA (Differential Power Analysis)
- **Elektromanyetik:** EMA/DEMA
- **Timing attack, cache side-channel (Flush+Reload, Prime+Probe)**
- **Acoustic attack, fault injection (glitching)**

## 3.2 TEMPEST / Van Eck Phreaking
TEMPEST (NSA tarafından EMSEC olarak da adlandırılır), elektronik cihazlardan yayılan istemsiz elektriksel sinyal/ses/titreşimden bilgi sızmasını engeller; NATO **SDIP-27** standardında tanımlıdır (2006 öncesi AMSG 720B/788A/784 olarak biliniyordu, hâlâ gizli). Wim van Eck (1985), CRT yayılımının uzaktan yeniden oluşturulabileceğine dair ilk gizli-olmayan teknik analizi yayımladı.

**NATO Zone/Level sınıflandırması:**
| NATO Level | NSA Level | Zone | Mesafe Varsayımı |
|---|---|---|---|
| SDIP-27 Level A | NSTISSAM Level I | Zone 0 | ~1 m / komşu oda (en sıkı) |
| SDIP-27 Level B | NSTISSAM Level II | Zone 1 | ~20 m |
| SDIP-27 Level C | NSTISSAM Level III | Zone 2 | ~100 m (taktik) |

Deklasifiye edilmiş NSA shielded-enclosure spesifikasyonu: 1 kHz–10 GHz arası min. 100 dB ekleme kaybı (insertion loss). Emisyon limitlerinin gerçek değerleri ve test prosedürleri gizlidir; kamuya açık metinler (NSTISSAM TEMPEST/1-92, NACSIM 5000) redakte edilmiştir.

## 3.3 Saldırı Senaryosu: Spectre ve Meltdown
3 Ocak 2018'de Google Project Zero ve diğer araştırmacılarca açıklanan spekülatif yürütme açıkları:
- **Variant 1 — Bounds Check Bypass (CVE-2017-5753, Spectre):** Sınır kontrolü atlatma
- **Variant 2 — Branch Target Injection (CVE-2017-5715, Spectre):** Dal hedefi enjeksiyonu; hem syscall hem sanallaştırma misafir/host sınırını geçebilir
- **Variant 3 — Rogue Data Cache Load (CVE-2017-5754, Meltdown):** Sadece Intel'i etkiler (AMD/ARM etkilenmez); yetkisiz kullanıcı tüm çekirdek (ve fiziksel) belleğini okuyabilir — paylaşımlı/bulut sistemlerde özellikle yıkıcıdır

**Mikromimari mekanizma:** Modern CPU'lar dal sonuçlarını tahmin ederek (branch prediction) ve sıra-dışı (out-of-order) spekülatif çalıştırarak pipeline'ı dolu tutar. Yanlış tahmin sonuçları geri alınır (retire edilmez) ama **L1 veri cache'indeki mikromimari yan etkiler geri alınmaz**. Saldırgan, gizli belleği spekülatif eriştirip Flush+Reload cache zamanlamasıyla okur.

### Türev Saldırılar (sınıf kapanmadı):
| Saldırı | CVE | Hedef |
|---|---|---|
| Foreshadow / L1TF | CVE-2018-3615/3620/3646 | Intel SGX, kernel, VMM |
| MDS — Fallout (MSBDS) | CVE-2018-12126 | Store Buffer (CVSS 6.5) |
| MDS — ZombieLoad (MFBDS) | CVE-2018-12130 | Fill Buffer (CVSS 6.5) |
| MDS — RIDL (MLPDS) | CVE-2018-12127 | Load Port (CVSS 6.5) |
| MDS — RIDL (MDSUM) | CVE-2019-11091 | Uncacheable Memory (CVSS 3.8) |
| TAA (ZombieLoad v2) | CVE-2019-11135 | TSX Async Abort |
| Downfall (GDS) | CVE-2022-40982 | Intel Gather (AVX2/AVX-512), SGX |
| Inception (SRSO) | CVE-2023-20569 | Tüm AMD Zen (Zen 4 dahil) |
| Zenbleed | CVE-2023-20593 | AMD Zen 2 |
| Collide+Power | CVE-2023-20583 | Tüm CPU (paylaşımlı güç) |
| Hertzbleed | CVE-2022-24436 (Intel) / CVE-2022-23823 (AMD) / CVE-2022-35888 (Ampere) | DVFS frekans yan kanalı |
| LVI, RETBleed, BHI | — / CVE-2022-0001 | Yük enjeksiyonu / RSB / Branch History |

**Downfall (Daniel Moghimi, Google):** Gather komutu spekülatif yürütme sırasında iç vektör register dosyasını sızdırır; Skylake'ten Tiger Lake'e (11. nesil) kadar etkiler, Intel SGX'i baltalar. Moghimi Intel'e Ağustos 2022'de bildirdi, kamuya açıklama 9 Ağustos 2023. **Inception (ETH Zurich):** RET dönüş adresi tahminini manipüle eder; Phantom speculation (CVE-2022-23825) + Training in Transient Execution (TTE) kombinasyonu; tüm AMD Zen CPU'larda keyfi kernel belleği sızdırır. **Hertzbleed (USENIX Security 2022; Texas/Illinois/Washington üniversiteleri):** DVFS (Dynamic Voltage and Frequency Scaling) güç tüketimine bağlı frekans değişimini uzaktan timing'e çevirir; sabit-zamanlı kripto bile etkilenebilir. Intel "tüm Intel işlemciler etkilenmiştir" dedi; ne Intel ne AMD yama yayımlamadı — savunma uygulama seviyesindedir (masking/key rotation).

## 3.4 Mikrokod Güncelleme Mekanizması
Intel `intel-microcode` ve AMD mikrokod paketleri OS seviyesinde dağıtılır; kalıcı yamalar firmware (UEFI/AGESA) üzerinden gelir. Çoğu Spectre v2 ve MDS düzeltmesi mikrokod + OS + hipervizör birlikte yamayı gerektirir.
```bash
# Linux'ta zafiyet/mitigasyon durumu kontrolü
grep . /sys/devices/system/cpu/vulnerabilities/*
# Örnek çıktı:
# spectre_v2:     Mitigation: Enhanced IBRS, IBPB: conditional, RSB filling
# meltdown:       Mitigation: PTI
# mds:            Mitigation: Clear CPU buffers; SMT disabled
```

## 3.5 Çekirdek Seviyesinde İzolasyon
- **KPTI (Kernel Page Table Isolation / KAISER):** Meltdown önlemi; kernel ve user-space sayfa tablolarını ayırır. Performans maliyeti I/O-yoğun işlerde erken ölçümlerde %5–30 (Windows Server 2016 yüksek-IOPS depolamada Microsoft telemetrisine göre %30'a kadar); PCID/INVPCID (Westmere 2010 / Haswell 2013) ile azaltılır. Modern CPU'larda overhead çok daha düşüktür.
- **Retpoline:** Spectre v2 yazılım önlemi; indirect call/jump'ları "return trampoline" ile değiştirir (Microsoft tarifi: `call RP2; mov [rsp], <target>; ret`). Mikrokod gerektirmez, derleyici desteği gerektirir; Linux, Windows ve büyük derleyici zincirlerinde uygulanır. eIBRS destekli CPU'larda çalışma zamanında otomatik devre dışı kalır.
- **IBRS/IBPB/STIBP:** Mikrokod tabanlı (MSR: SPEC_CTRL); Indirect Branch Restricted Speculation / Prediction Barrier / Single Thread Indirect Branch Predictors. **eIBRS (Enhanced IBRS):** boot'ta bir kez set edilir, her ayrıcalık geçişinde değil — modern Intel CPU'larda overhead düşüktür; STIBP'yi de etkinleştirir.
- **SMEP/SMAP:** Supervisor Mode Execution/Access Prevention.
- **CET (Control-flow Enforcement Technology):** ROP/JOP'a karşı shadow stack + indirect branch tracking.

## 3.6 Kriptografik Donanımda Yan Kanal Önlemleri
- **AES-NI:** Donanım AES; tablo aramaları (cache timing açan T-table) yerine sabit-zamanlı yürütme — cache-timing saldırılarına karşı avantaj.
- **Constant-time programming:** Gizli veriye bağımlı dallanma/bellek erişimi yok.
- **Masking/Blinding:** DPA/DEMA ve Hertzbleed türü güç-tabanlı sızıntılara karşı rastgele maskeleme + key rotation (AMD'nin Hertzbleed için önerdiği yöntemler).

## 3.7 HSM (Hardware Security Module) ve FIPS 140-3
Thales Luna, Entrust nShield (nCipher), AWS CloudHSM. **FIPS 140-3** (ISO/IEC 19790:2012 ve ISO/IEC 24759:2017 hizalı) seviyeleri:
- **Level 3:** Tamper-detection ve tepki (tespit anında CSP — Critical Security Parameters — zeroization), identity-based authentication, kritik güvenlik parametrelerinin giriş/çıkış arayüzlerinin fiziksel/mantıksal ayrımı; özel anahtarlar yalnız şifreli giriş/çıkış. EFP (Environmental Failure Protection) veya EFT — voltaj/sıcaklık dışı durum tespiti/tepkisi.
- **Level 4:** Tam koruyucu zarf (her yönden tamper tespiti), çevresel arıza koruması ve **fault injection'a karşı koruma** (yeni gereksinim), çok-faktörlü kimlik doğrulama. FIPS 140-3'te yan kanal testi (non-invasive security) opsiyonel gereksinim olarak eklendi.

Finansal/ödeme HSM'leri ve CA özel anahtarları tipik olarak Level 3 hedefler; Level 4 yüksek mühendislik maliyeti nedeniyle savunma/istihbarat ile sınırlıdır. **Uyarı:** Keysight'ın belirttiği gibi, FIPS 140-3 Level 4 bile yüksek-mertebeli yan kanal veya lazer fault injection gibi tüm saldırı türlerini kapsamaz; düzenli güvenlik değerlendirmesi şarttır.

## 3.8 ROCA (CVE-2017-15361) — Infineon TPM
Infineon RSALib 1.02.013'ün "Fast Primes" RSA asal üretimi, "Return of Coppersmith's Attack" ile yalnızca genel anahtardan özel anahtarın hesaplanmasına izin verir. 512, 1024 ve 2048-bit anahtarlar etkilenir. Qualys'in doğrulamasıyla *"The vulnerability affects NIST FIPS 140-2 and CC EAL 5+ certified devices from 2012"* — yani 2012'den itibaren üretilen sertifikalı cihazlar.

Masaryk Üniversitesi araştırma ekibi (Matúš Nemec, Marek Sýs; ACM CCS '17, 2 Kasım 2017), açığın *"around one-quarter of all current TPM devices globally"* (küresel ölçekte tüm güncel TPM cihazlarının yaklaşık dörtte biri) etkilediğini tahmin etti. Estonya hükümeti ROCA nedeniyle yaklaşık 750.000–760.000 e-kimlik (eID) kartını askıya aldı/yeniledi.

**Faktörizasyon maliyeti (saldırının pratikliğini gösterir):** Enigma Bridge'den Dan Cvrcek'in The Register'a (16 Ekim 2017) verdiği rakamlarla: *"The current indicative processor times for 1,024 and 2,048 bit keys are 97 vCPU days ($40 to $80) and 51,400 vCPU days ($20,000 to $40,000), respectively."* — yani 1024-bit anahtar ~97 vCPU günü ($40–80), 2048-bit anahtar ~51.400 vCPU günü ($20.000–40.000).

Windows TPM.MSC, zafiyetli firmware için Event ID 1794 üretir. NSA tespit aracı: `nsacyber/Detect-CVE-2017-15361-TPM`. Etkilenenler arasında BitLocker (TPM 1.2), YubiKey 4 (4.3.5 öncesi) ve Chrome OS Cached User Data bulunur. ROCA, Common Criteria sertifikasyonunun homegrown algoritmalara izin verme ve sertifika iptal edememe gibi zaaflarını da gözler önüne serdi.

## 3.9 Savunma Araçları (İzolasyon)
- **AMD SEV (Secure Encrypted Virtualization), Intel TDX (Trust Domain Extensions):** VM bellek şifreleme/izolasyon — çok-kiracılı bulutta cross-VM Spectre yüzeyini daraltır.
- **Intel CET, eBPF tabanlı tespit.** Not: BHI gibi açıklar unprivileged eBPF ile istismar edilebildiğinden, unprivileged eBPF'in kapatılması bir mitigasyondur.

## 3.10 MITRE ATT&CK ve Standartlar
- **T1600 (Weaken Encryption)**, T1622 (Debugger Evasion).
- **NIST SP 800-53:** SC-28 (Protection of Information at Rest), SC-12/13 (Cryptographic key establishment/management).
- **ISO 27001:2022:** A.8.24 (Use of cryptography).

---

## Recommendations

**Aşama 0 — Görünürlük (0-30 gün):**
1. Tüm filoda CHIPSEC + fwupd/LVFS ile firmware envanteri çıkarın; HSI seviyelerini ölçün. *Eşik:* HSI:1 altındaki cihazlar acil yükseltme listesine; CHIPSEC modülleri Secure Boot kapatma gerektirdiğinden izole test ortamı kullanın.
2. `grep . /sys/devices/system/cpu/vulnerabilities/*` taramasıyla CPU zafiyet/mitigasyon durumunu envanterleyin (özellikle `Mitigation: None` görülen hostları işaretleyin).
3. TPM 2.0 + Secure Boot + Measured Boot etkinliğini doğrulayın (`mokutil --sb-state`, `tpm2_pcrread`).

**Aşama 1 — Sertleştirme (30-90 gün):**
4. BootHole/LogoFAIL için dbx güncellemelerini `fwupdmgr` ile dağıtın; GRUB 2.06+ doğrulayın.
5. BitLocker/LUKS'ü PCR 0+7'ye mühürleyin (`systemd-cryptenroll --tpm2-pcrs=0+7`); ROCA testini (nsacyber aracı) tüm TPM'lerde çalıştırın — 2048-bit faktörizasyonun ~$20-40K'ya düşmesi nedeniyle zafiyetli Infineon firmware'i öncelikli güncelleyin.
6. Mikrokod + OS + hipervizör Spectre/MDS/Downfall/Inception yamalarını eşzamanlı uygulayın; eIBRS destekli modern CPU'larda overhead minimumdur — KPTI/mitigasyonları kapatmayın (MITRE değerlendirmesi yerel ayrıcalık yükseltme başarısını dramatik artırdığını gösterir).

**Aşama 2 — Mimari (90-180 gün):**
7. Yeni donanım alımlarında Pluton/Titan M2/T2 entegre güven köküne öncelik verin; discrete TPM'in bus-MITM yüzeyini kapatın.
8. Kripto operasyonlarını FIPS 140-3 Level 3 (finansal/CA) HSM'lere taşıyın; sabit-zamanlı kütüphaneleri (AES-NI) zorunlu kılın.
9. Çok-kiracılı bulutta en hassas yükleri dedicated host'a alın (Spectre cross-VM yüzeyini elimine eder); SEV/TDX değerlendirin.

**Aşama 3 — Yönetişim ve uyum (sürekli):**
10. NIST SP 800-161 C-SCRM programını foundational→sustaining→enhancing olgunluğuyla kurun; OEM güvenilir tedarik sertifikaları ve tamper-evident sevkiyat (interdiction karşıtı) talep edin.
11. Türkiye: 7545 sayılı Kanun kapsamında kritik altyapı/kamu için Siber Güvenlik Başkanlığı yetkilendirmeli tedarik (MADDE 7/c) ve yerli/milli ürün önceliği; BDDK MADDE 9/16/17/25 uyumu (finansal sektör); KVKK disk şifreleme (md. 25) + güvenli imha (md. 33); TSE Common Criteria sertifikalı (TÜBİTAK BİLGEM OKTEM doğrulamalı) donanım tercihi.

**Eşikleri değiştiren tetikleyiciler:** Yeni transient-execution CVE'si yayınlandığında 1. ve 6. adımları tekrarlayın; firmware-seviyesi APT IOC'si (LoJax/MoonBounce türü) yayınlandığında remote attestation'ı zorunlu kılın; yeni dbx revokasyon listesi (UEFI Forum) çıktığında 4. adımı yenileyin.

## Caveats
- **"Big Hack" iddiası kanıtlanmamıştır** — rapor boyunca bu, doğrulanmış bir olay değil, tehdit modeli örneği olarak ele alınmıştır. Apple/Amazon/Supermicro/NSA/DHS reddetti ve aksini gösteren fiziksel kanıt kamuya çıkmadı.
- 7545 sayılı Kanun'un **idari para cezası tutarları** ikincil kaynaklarda farklılık göstermektedir; kesin rakamlar için Resmî Gazete (19.03.2025, Sayı 32846) tam metni esas alınmalıdır. Aynı şekilde "15 kritik altyapı sektörü" geçişi yorum kaynaklıdır, resmî kararla teyit edilmelidir.
- Hertzbleed ve ROCA türü açıklarda **OS/mikrokod yaması yoktur veya sınırlıdır**; Hertzbleed için Intel/AMD yama yayımlamadı, savunma uygulama/kripto kütüphane seviyesindedir (masking, key rotation, Turbo/Precision Boost devre dışı bırakma — yüksek performans maliyetiyle).
- NATO SDIP-27 ve TEMPEST emisyon limitleri **gizlidir**; kamuya açık değerler yalnızca redakte edilmiş özetlerdir (100 dB shielding gibi parçalı bilgiler hariç).
- TPM 2.0 PCR mühürleme, meşru firmware güncellemeleri sonrası PCR değişiminden etkilenir; kurtarma anahtarı (recovery key) yönetimi operasyonel olarak kritiktir.
- MDS CVE'leri için SMT (Hyper-Threading) devre dışı bırakma tam mitigasyon gerektirebilir; bu, ciddi performans etkisi taşır ve kapasite planlamasında hesaba katılmalıdır.
- Estonya eID rakamı kaynaklarda 750.000–760.000 aralığında değişmektedir; ROCA'nın etkilediği toplam anahtar sayısının "iki-üç kat daha fazla" olabileceği araştırmacılarca belirtilmiştir.