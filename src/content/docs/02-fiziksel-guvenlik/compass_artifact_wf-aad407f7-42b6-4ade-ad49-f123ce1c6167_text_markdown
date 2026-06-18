# BÖLÜM 2: FİZİKSEL GÜVENLİK
## Defense in Depth Mimarisinde Fiziksel Katman: Kurumsal Tasarım, Saldırı/Savunma Perspektifleri ve Türkiye Mevzuatı

> **Yazarın Notu:** Bu metin, Fortune 500 ölçeğindeki kurumlar için Defense in Depth (Katmanlı Savunma) mimarisi kurgulayan bir Siber Güvenlik Çözüm Mimarı ve SOC Analisti perspektifiyle hazırlanmıştır. Fiziksel güvenlik, siber güvenliğin en sık ihmal edilen ancak en temel katmanıdır: "Bir saldırgan donanıma fiziksel erişim sağlayabiliyorsa, hiçbir yazılımsal kontrol mutlak değildir" ilkesi (NIST ve SANS literatüründe sıkça vurgulanır) bu bölümün çıkış noktasıdır. Her firewall kuralı, her şifreli veritabanı, her MFA gereksinimi; donanıma fiziksel erişen bir saldırgan tarafından atlatılabilir.

---

## 2.1. Fiziksel Çevre, Tesis ve Veri Merkezi (Data Center) Güvenliği

### 2.1.1. Katmanlı Fiziksel Güvenlik ve CPTED

Fiziksel güvenlik mimarisi, ağ güvenliğindeki "Defense in Depth" prensibinin fiziksel dünyadaki karşılığıdır. Tasarımın temel felsefesi **CPTED (Crime Prevention Through Environmental Design — Çevresel Tasarım Yoluyla Suç Önleme)** olup, kavram Florida State University kriminoloğu Dr. C. Ray Jeffery tarafından 1971'de aynı adlı kitabıyla (*Crime Prevention Through Environmental Design*, SAGE Publications, 1971) literatüre kazandırılmıştır. CPTED, mekanik ve emek-yoğun "bolt-on" (sonradan eklenen) güvenlik önlemlerine başvurmadan önce, doğal suç önleme stratejilerinin tasarıma gömülmesini savunur. Üç temel ilkesi vardır:

- **Doğal Gözetim (Natural Surveillance):** Aydınlatma, görüş hatları (sightlines) ve alçak çalılandırma ile davetsiz misafirlerin kolayca gözlemlenebilir olması. Bir saldırgan, görülmeyeceği alanlardan giriş arar; görünürlüğü maksimize etmek onu "davetsiz misafir" olarak işaretler.
- **Doğal Erişim Kontrolü (Natural Access Control):** Yolların, girişlerin ve çitlerin insanları kontrollü giriş noktalarına yönlendirecek şekilde tasarlanması. Çarpışma testli bollardlar (M30/M50 ratingli — sırasıyla farklı araç hız/kütlelerinde durdurma kapasitesi) araç saldırılarını engellerken yaya akışını korur.
- **Bölgesel Pekiştirme (Territorial Reinforcement):** Net sınırlar, tabela ve peyzaj ile özel alanların ve "sahiplik" hissinin işaretlenmesi.

Kurumsal topolojide bu, **eş-merkezli güvenlik halkaları (concentric security rings)** olarak uygulanır: (1) Çevre/Perimeter (çit, bollardlar, CCTV, aydınlatma) → (2) Bina kabuğu (resepsiyon, ziyaretçi yönetimi, turnikeler) → (3) Kat/bölge erişimi (badge'li kapılar) → (4) Veri merkezi/sunucu odası (mantrap + biyometrik) → (5) Kabinet/rack seviyesi (kilitli kabinetler, smart-lock). Her halka NIST SP 800-53 PE (Physical and Environmental Protection) kontrol ailesinin farklı bir kontrolüne karşılık gelir.

**Mimari diyagram açıklaması (kavramsal):**
```
[Şehir/Cadde]
  └── HALKA 1: PERİMETER ─ çit + M50 bollard + CCTV + aydınlatma (PE-3)
        └── HALKA 2: BİNA KABUĞU ─ resepsiyon + turnike + ziyaretçi kaydı (PE-2, PE-8)
              └── HALKA 3: KAT/OFİS ─ badge'li kapı + clear-desk (PE-6)
                    └── HALKA 4: VERİ MERKEZİ ─ MANTRAP + biyometri + anti-passback (PE-3(2))
                          └── HALKA 5: RACK ─ kilitli kabinet + smart-lock + log (PE-3(5) tamper)
```

### 2.1.2. Biyometrik Geçiş Kontrolleri

Çok faktörlü fiziksel kimlik doğrulama (*something you have* = kart, *something you are* = biyometri, *something you know* = PIN) kritik alanlarda standarttır. Başlıca modlar:

- **Parmak izi (fingerprint):** Düşük maliyet, yaygın; ancak gabar/latent kopyalama ve hijyen endişeleri zayıflıktır.
- **Retina/İris tanıma (iris recognition):** Yüksek doğruluk, düşük FAR (False Acceptance Rate); LenelS2 OnGuard gibi platformlar iris ve el geometrisi (hand geometry) entegrasyonunu destekler.
- **Yüz tanıma (facial recognition):** Temassız; VMS analitiği ile entegre olduğunda "person of interest" takibine olanak tanır.
- **Palm vein (avuç içi damar deseni):** Damar haritası yüzeyde olmadığı için kopyalanması son derece zordur; bankacılıkta ve yüksek güvenlikli veri merkezlerinde tercih edilir.

**Kritik tasarım prensibi:** Biyometri, KVKK kapsamında **özel nitelikli kişisel veridir**. KVKK md. 6 ve Kurul'un 31/01/2018 tarih ve 2018/10 sayılı kararı uyarınca biyometrik şablonların şifrelenerek saklanması, erişim yetkisinin net tanımlanması ve şablonun ham görüntü yerine matematiksel template olarak tutulması zorunludur. Bu nedenle olgun mimarilerde biyometrik template, merkezi sunucuda değil, kart üzerinde (**Match-on-Card**) veya şifreli yerel controller'da tutulur — bu hem mahremiyeti korur hem de tek-nokta-ihlali (single point of compromise) riskini azaltır.

### 2.1.3. Tailgating/Piggybacking Önlemleri

**Tailgating** (yetkili kişinin hemen arkasından izinsiz geçiş) ve **Piggybacking** (yetkili kişinin bilerek/aldatılarak kapıyı tutması) fiziksel güvenliğin en yaygın insan-faktörü zafiyetidir. Önlemler:

- **Mantrap / Airlock (hava kilidi) kapı sistemleri:** İki kapılı, ara hacimli sistem. Birinci kapı kapanmadan ikinci açılmaz. Tek-kişi geçiş kontrolü (anti-passback) ile bütünleşir.
- **Turnike ve hız kapıları (speed gates):** Tek kişilik geçişi fiziksel olarak zorlar.
- **Anten/sensör algılayıcılar:** Çok-kişi tespiti için kızılötesi/3D tavan sensörleri.
- **Anti-passback mantığı:** Aynı kartla art arda "in-in" veya "out-out" işlemini reddeden yazılımsal kural; klonlanmış kart tespitinde de kritiktir.

NIST SP 800-53 **PE-3 (Physical Access Control)** kontrolü ve enhancement'ları; iki kişilik kuralı (two-person rule), kilitlenebilir muhafazalar (PE-3(5)) ve tamper koruması (PE-3(5)) gibi gereksinimleri tanımlar. **PE-6 (Monitoring Physical Access)** ise erişimin izlenmesini ve anomali raporlamasını zorunlu kılar.

### 2.1.4. Veri Merkezi İklimlendirme (HVAC), Hot/Cold Aisle ve ASHRAE

Veri merkezi soğutması, **sıcak koridor / soğuk koridor (Hot Aisle / Cold Aisle)** mimarisi üzerine kuruludur: rack'ler sırt sırta dizilir, soğuk hava ön yüzlerden (cold aisle) emilir, ısınan hava arka yüzlerden (hot aisle) tahliye edilir. Koridor kapatma (containment) ile sıcak/soğuk hava karışımı engellenir, soğutma verimliliği artar.

**ASHRAE TC 9.9 Thermal Guidelines for Data Processing Environments (5. Edisyon, Mart 2021)** sektör referansıdır:
- **Önerilen (recommended) sıcaklık zarfı:** 18°C–27°C (64.4°F–80.6°F) — uzun ömür ve enerji verimliliği için ideal.
- **İzin verilen (allowable) zarflar:** A1–A4 sınıfları; A4 sınıfı 5°C–45°C aralığına kadar genişler (free-air ekonomizör için, daha az termal marjla).
- **Bağıl nem (recommended):** %50–%70 aralığı (çiy noktası -9°C ila 15°C, düşük-kirletici koşulda max %60–70). **İzin verilen:** minimum -12°C çiy noktası veya %8 RH; maksimum A1/A2 sınıfları için %80, A4 için %90. Düşük nemde ESD (elektrostatik boşalım) riski nedeniyle alt sınır kritiktir.
- Ölçüm **sunucu giriş noktasında (inlet)** yapılır; raised-floor ortamında taban-tavan arası 5–10°C fark olabileceğinden sensör konumu önemlidir. AI/HPC sıvı-soğutma iş yükleri için yeni **H1** sınıfı tanımlanmıştır.

**PUE (Power Usage Effectiveness):** Toplam tesis enerjisi / BT ekipman enerjisi oranıdır. İdeal değer 1.0'a yaklaşır; hyperscale tesisler 1.1–1.2 seviyelerine ulaşır. PUE, The Green Grid metriğidir ve **ISO/IEC 30134** serisinde standartlaştırılmıştır.

### 2.1.5. Kesintisiz Güç (UPS/Jeneratör/PDU) ve Yangın Söndürme

**Güç zinciri:** Şebeke → **UPS** (kesintisiz güç kaynağı, batarya köprüleme) → **Jeneratör** (uzun kesinti) → **PDU** (Power Distribution Unit, rack dağıtımı). NIST SP 800-53 **PE-11 (Emergency Power)**, **PE-12 (Emergency Lighting)**, **PE-9 (Power Equipment and Cabling)** ve **PE-10 (Emergency Shutoff — EPO)** bu zinciri kapsar. Redundans seviyeleri **N, N+1, 2N** olarak ifade edilir: N=redundans yok, N+1=bir yedek bileşen, 2N=tam çift yol.

**Yangın söndürme:** Su bazlı sprinkler BT ekipmanına zarar verdiğinden, NFPA 75/NFPA 2001 temiz gazlı (clean agent) sistemleri önerir. Pre-action sprinkler (iki bağımsız tetik gerektiren) bir alternatiftir.

| Ajan | Tip | Söndürme mekanizması | GWP | Notlar |
|------|-----|----------------------|-----|--------|
| **FM-200 (HFC-227ea)** | Halokarbon | Isı emilimi | ~3.220 (IPCC AR5; NIST belgesi 3.500, atmosferik ömür ~36,5 yıl) | Hızlı, kompakt; AIM Act kapsamında HFC kademeli kısıtlaması altında (ABD'de 2036'ya kadar %85 azaltım) |
| **Novec 1230 / FK-5-1-12** | Fluoroketon | Isı emilimi | **1** (atmosferik ömür ~5 gün) | Çevresel açıdan üstün. 3M, ürünü 2025 sonunda PFAS portföyünden çıkardı; jenerik FK-5-1-12 (Fike SF 1230, Kidde Fluoro-K) sürüyor |
| **IG-541 (Inergen) / IG-55 (Argonite)** | Inert gaz | O₂'yi ~%12'ye düşürme | 0 | ~140 dB deşarj gürültüsü dönen-disk HDD'lere zarar verebilir; FM Global Data Sheet 5-32, <110 dB akustik nozül gerektirir |

> **Tarihsel not:** Halon 1301, ozon-tüketici özelliği nedeniyle Montreal Protokolü kapsamında 1 Ocak 1994 itibarıyla ABD'de yeni kurulumlarda yasaklanmıştır.

**VESDA (Very Early Smoke Detection Apparatus):** Aspirasyon bazlı çok erken duman algılama. Veri merkezlerinde **cross-zoned (çapraz bölgeli) çift-tetik** mantığı kullanılır: iki bağımsız dedektör devresi (tipik olarak VESDA + fotoelektrik) alarm vermeden gaz deşarj olmaz; tek dedektör alarmı uyarı verir ama deşarjı tetiklemez. Bu, tek dedektör arızası/toz/yoğuşmadan kaynaklı yanlış deşarjı önler. Sistem BMS (Bina Yönetim Sistemi), HVAC kapatma ve güç izolasyonu ile entegre edilir.

### 2.1.6. Uptime Institute Tier Seviyeleri ve TIA-942

İki ayrı çerçeve mevcuttur ve karıştırılmamalıdır:

**Uptime Institute Tier I–IV** (1990'larda Ken Brill tarafından, 1995'te resmî olarak tanıtıldı) — hedef-odaklı (outcome-based), esnek:
- **Tier I (Basic Capacity):** Tek dağıtım yolu, redundans yok.
- **Tier II (Redundant Capacity Components):** Yedek bileşenler, tek yol.
- **Tier III (Concurrently Maintainable):** Çoklu dağıtım yolu; bakım sırasında kesinti olmaz.
- **Tier IV (Fault Tolerant):** Bağımsız çift-beslemeli sistemler; tam hata toleransı.

**Tarihsel availability yüzdeleri (KRİTİK UYARI):** Piyasada hâlâ yaygın olarak alıntılanan şu rakamlar — Tier I: **%99,671** (~28,8 saat/yıl kesinti), Tier II: **%99,741** (~22 saat/yıl), Tier III: **%99,982** (~1,6 saat/yıl), Tier IV: **%99,995** (~26,3 dakika/yıl) — **Uptime Institute tarafından 2009'da Tier Standardından çıkarılmıştır.** Güncel standart tier seviyelerine herhangi bir availability tahmini atamaz; çünkü gerçek erişilebilirlik, tasarımdan çok operasyonel uygulamalara bağlıdır. Bu rakamlar metne yalnızca *tarihsel/legacy* referans olarak ve bu çekince ile dâhil edilmelidir. Uptime, 122'den fazla ülkede 4.000'den fazla Tier sertifikası verdiğini bildirmektedir.

**ANSI/TIA-942 Rated 1–4** — katı teknik spesifikasyon; dört domain (Telecommunications, Architectural, Mechanical, Electrical) üzerinde **ayrı** değerlendirilir (bir tesis farklı domainlerde farklı rating alabilir). En güncel sürüm **ANSI/TIA-942-C**'dir. Uptime'ın aksine TIA, standardı standart kurumu tarafından değil, akredite bağımsız denetçilerce sertifikalandırır. Uptime ve TIA, marka karışıklığını önlemek için "Tier" teriminin kullanımını ayrıştırma konusunda resmen anlaşmışlardır (TIA "Rated" terimine geçmiştir).

> **Sertifikasyon nüansı:** Uptime üç ayrı sertifika verir — TCDD (tasarım dokümanı), TCCF (inşa edilmiş tesis), TCOS (operasyonel sürdürülebilirlik). "Tier III sertifikalı" bir tesis yalnızca tasarım seviyesinde sertifikalı olup inşa/operasyon olarak hiç denetlenmemiş olabilir; tedarik sürecinde hangi seviyenin geçerli olduğu doğrulanmalıdır.

### 2.1.7. Türkiye Mevzuatı: KVKK, BDDK ve ISO 27001

- **KVKK md. 12:** Veri sorumlusu, kişisel verilerin hukuka aykırı işlenmesini/erişilmesini önlemek ve muhafazasını sağlamak için "her türlü teknik ve idari tedbiri" almakla yükümlüdür. KVKK *Kişisel Veri Güvenliği Rehberi (Teknik ve İdari Tedbirler)*, somut olarak şunları sayar: kâğıt/sunucu/yedekleme cihazlarının (CD, DVD, USB) ek güvenlikli odalara alınması, kullanılmadığında kilit altında tutulması, giriş-çıkış kayıtlarının tutulması, fiziksel ortamların yangın/sel gibi dış risklere karşı korunması ve veri yedeklerinin ağ dışında, fiziksel güvenliği sağlanmış ortamda tutulması.
- **BDDK** *Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik* (15 Mart 2020 tarih ve 31069 sayılı RG, yürürlük 1 Temmuz 2020): Bankaların **birincil sistemleri (altyapı, donanım, yazılım, veri bütünü) ile ikincil sistemlerini (kesintisiz erişim sağlayan yedekler) yurt içinde** bulundurma zorunluluğu; birincil sistemlerin tamamen devre dışı kaldığı felaket senaryolarında dahi en geç **24 saat** içinde faaliyetin sürdürülebilir olması; kritik donanım için yedekli/standby düzenler; dış hizmet/bulut alınsa bile sağlayıcının kullandığı sistemlerin de yurt içinde tutulması.
- **ISO 27001:2022 Annex A** fiziksel kontroller artık **A.7** başlığı altında (eski A.11) 14 kontrolden oluşur: A.7.1 (fiziksel güvenlik çevreleri), A.7.2 (fiziksel giriş), A.7.3 (ofis/oda/tesis güvenliği), **A.7.4 (fiziksel güvenlik izleme — 2022'de eklenen yeni kontrol; sürekli izleme ile davetsiz misafir tespiti)**, A.7.10 (depolama medyası), A.7.14 (ekipmanın güvenli imhası/yeniden kullanımı). ISO 27001:2022, 93 kontrolü dört temada toplar (Organizational 37, People 8, Physical 14, Technological 34).

### 2.1.8. Somut Araç/Teknoloji Mimarisi

- **HID Global:** Kart/credential (Seos, iCLASS SE), okuyucu ve mobil credential ekosistemi.
- **LenelS2 OnGuard:** Kurumsal PACS (Physical Access Control System); biyometri (el geometrisi, parmak izi, iris) entegrasyonu; Mercury/HID controller'ları; DataConduIT/OpenAccess API'leri.
- **Genetec Synergis:** Birleşik (unified) ACS+VMS platformu (Security Center); Synergis CloudLink controller'ları (proprietary), OSDP v2.2 Secure Channel desteği. 2006'da Genetec tarafından geliştirilmiştir.
- **Milestone XProtect (VMS):** Açık mimari, 1.000+ üçüncü taraf entegrasyonu; LenelS2 OnGuard ile OAAP (OpenAccess Alliance Program) sertifikalı çift-yönlü entegrasyon (XProtect Access — alarm görüntüleme, kapı kilitleme/açma, harita üzerinde durum, mobil istemciden açma).

**Mimari mantık ve config örneği:** PACS controller'ları, okuyucuya **OSDP (Open Supervised Device Protocol, Secure Channel ile AES-128 şifreli)** ile bağlanır — eski **Wiegand** protokolü şifresiz ve sniff edilebilir olduğundan terk edilmektedir (NIST SP 800-116 Rev.1 PACS rehberi ve UL 294 referansları). PACS olayları VMS ile korele edilir, ardından SIEM'e beslenir:

```
# Kavramsal SIEM korelasyon kuralı (sözde-kod)
RULE "Fiziksel-Siber Anomali Korelasyonu":
  IF  PACS.event = "ACCESS_DENIED" (badge red)
  AND PACS.location = "DataCenter_Mantrap"
  WITHIN 10m OF
      VPN.event = "AUTH_FAILURE" (aynı user_id, brute-force)
  THEN ALERT severity=HIGH, action="SOC_investigate + lock_account"
```

---

## 2.2. Güvenli Cihaz İmhası ve Veri Yok Etme (Degaussing/Shredding)

### 2.2.1. NIST SP 800-88 Rev.1: Clear, Purge, Destroy

NIST medya sanitizasyonunu "verinin belirli bir çaba seviyesi için erişilemez kılınması" olarak tanımlar ve üç metot belirler:
- **Clear:** Standart okuma/yazma komutlarıyla üzerine yazma (overwrite); basit yazılımsal kurtarmaya karşı korur. Aynı güvenlik ortamında yeniden kullanım için uygun.
- **Purge:** Laboratuvar düzeyinde kurtarmaya karşı korur. Cryptographic Erase, Block Erase, ATA Secure Erase, degausing içerir.
- **Destroy:** Fiziksel imha (shredding, disintegration, pulverization, incineration); en yüksek güvence.

Temel prensip: Odak "medyanın kendisi" değil, "medyada *saklanmış olabilecek bilgi*" olmalıdır. NIST SP 800-88 Rev.1 (Aralık 2014), 2006 sürümünü SSD/mobil/flash teknolojilerini kapsayacak şekilde güncellemiştir; FISMA kapsamında federal kurumlar için zorunludur ve HIPAA, PCI-DSS, SOX tarafından de facto endüstri standardı olarak benimsenmiştir.

> **Önemli güncelleme:** NIST SP 800-88 **Rev.2** Eylül 2025'te yayımlandı; tüm spesifik teknikleri kaldırıp **IEEE 2883-2022**'ye yönlendiriyor. Kurumsal politikalarda her iki sürüm de referans alınmalı, yeni politikalar IEEE 2883'e doğru evrilmelidir.

### 2.2.2. DoD 5220.22-M ve Neden Artık Önerilmediği

DoD 5220.22-M (1995 NISPOM), 3-pass (sıfır → bir → rastgele, her geçişte doğrulama) veya 7-pass overwrite öngörüyordu. NIST'in artık önermemesinin teknik nedenleri:

1. **Modern manyetik diskler için tek geçiş yeterli:** NIST SP 800-88 Rev.1 açıkça belirtir: *"Manyetik medya içeren depolama cihazları için, ikili sıfırlar gibi sabit desenli tek bir overwrite geçişi, son teknoloji laboratuvar teknikleri uygulansa bile veri kurtarmayı tipik olarak engeller."* Çoklu geçiş gereksiz zaman/enerji/maliyettir (1 TB disk: tek geçiş ~2–4 saat, 3-pass ~6–12 saat, 7-pass ~14–28 saat).
2. **SSD/flash için yapısal olarak yetersiz:** Wear-leveling, flash translation layer (FTL) ve over-provisioning nedeniyle host'un adreslediği logical block, fiziksel NAND hücresine karşılık gelmez; overwrite "taze" bloklara yazılır, eski veri başka yerde kalır. Ayrıca çoklu yazma SSD ömrünü kısaltır. DoD standardı HPA (Host Protected Area) ve DCO (Device Configuration Overlay) gizli alanları da kapsamaz.
3. **DoD'un kendisi terk etti:** 2007'den itibaren DoD, medya sanitizasyonu için NIST SP 800-88'e atıf yapmaktadır; 24 Şubat 2021'de DoD 5220.22-M, NISPOM Rule ile değiştirildi. DoD, kendi sınıflandırılmış verisi için wiping + degausing + fiziksel imha kombinasyonu ister.

**Pratik sonuç:** Bir sözleşme/regülasyon adıyla "DoD 5220.22-M" talep etmedikçe NIST SP 800-88 (artık Rev.2/IEEE 2883) izlenmelidir.

### 2.2.3. Degaussing (Manyetik Silme)

Degausser, manyetik domain'leri nötralize eden güçlü bir manyetik alan uygular (capacitive-discharge/pulse veya permanent-magnet tipleri). Etkinlik, medyanın **coercivity** (zorlayıcılık — yeniden mıknatıslanmaya direnç) değerini — **Oersted (Oe)** cinsinden — sağlıklı bir marjla aşmaya bağlıdır. Modern sabit diskler genellikle **5.000 Oe+** degausser gerektirir; LTO teyp gibi yüksek-coercivity medya **7.000 Oe+** ister. Degausing sonrası sürücü, servo track'leri ve firmware verisi de silindiğinden **kalıcı olarak çalışmaz hale gelir** (yani reuse mümkün değildir).

**Kritik kısıtlama — SSD'lerde çalışmaz:** SSD'ler veriyi manyetik domain'lerde değil, NAND flash hücrelerinde elektriksel yük olarak saklar. Manyetik alanın bu hücrelere etkisi **sıfırdır**. SSD'yi degausserdan geçirmek "tehlikeli bir yanlış güven duygusu" yaratır: sürücü controller hasarından dolayı bozulmuş/boot etmiyor görünebilir ama flash çipler veriyi korur. NIST güncel rehberliği, manyetik-olmayan medya (SSD/flash) için degausing'i açıkça önermez. Bu nedenle imha hattında SSD ve HDD'nin **ayrıştırılması** operasyonel bir zorunluluktur.

### 2.2.4. Kriptografik Silme (Crypto-shredding / Cryptographic Erase)

Tam disk şifreleme (**SED — Self-Encrypting Drive**, TCG Opal/IEEE 1667, AES-256) + anahtar imhası kombinasyonudur. Veri zaten şifreli depolandığından, **Media Encryption Key (MEK)** imha edildiğinde tüm veri anında erişilemez hale gelir (teknik olarak veri silinmez, "okunamaz" kılınır). Avantajı: saniyeler içinde tamamlanır.
- **ATA Secure Erase:** SATA sürücülerde firmware düzeyinde komut; tüm kullanıcı alanını, reallocated sektörleri ve standart yazma komutlarıyla erişilemeyen alanları içerir.
- **NVMe Sanitize / Format:** NVMe sürücülerde; **Crypto Erase** modu kendi-şifreleyen sürücülerde **2 saniyenin altında** tamamlanır, **Block Erase** ise 4–6 saat sürebilir.

**Uyarı:** ATA Secure Erase, tüketici SSD'lerinin kayda değer bir kısmında (sektör verilerine göre ~%33) firmware hatası nedeniyle başarısız olabilir; bu nedenle **doğrulama (verification)** ve kritik veride fiziksel imha şarttır. Doğrulama için sanitizasyon sonrası forensic recovery araçları (PhotoRec, R-Studio) ile örnekleme ve raw-sektör (dd) analizi yapılmalı; sürücünün "başarılı" raporuna tek başına güvenilmemelidir.

### 2.2.5. Fiziksel İmha (Shredding) ve NSA/CSS EPL

Gizli/sınıflandırılmış veri için **NSA/CSS Evaluated Products List (EPL)**'de yer alan onaylı makineler kullanılmalıdır. **NSA/CSS Policy Manual 9-12 (Storage Device Sanitization and Destruction Manual)** esastır. EPL kategorileri: HDD destruction devices, magnetic degaussers, optical destruction, paper shredders/disintegrators, solid-state disintegrators.

- **SSD parçacık boyutu: 2 mm** kenar boyutu (disintegration). Flash çipler küçük alanda yoğun veri sakladığından 2 mm'den büyük parçacık veri içerebilir. (2026 EPL güncellemesi, kâğıt shredder'ları 1mm×5mm ile SSD disintegratörlerini 2mm kenar boyutu olarak kesin biçimde ayırmıştır; SSD için kâğıt shredder kullanmak hem bıçakları bozar hem standardı sağlamaz.)
- **HDD:** Manyetik medya **iki aşamalıdır** — önce NSA-onaylı degausser ile degauss, sonra fiziksel deformasyon/parçalama (crush/shred). SSD ise **tek aşamalıdır**: 2 mm'ye disintegration (degauss edilemez).
- NSA, sınıflandırılmış medya imhasının **en az iki yetkili personel** tarafından izlenmesini ister.
- Örnek EPL-listeli ekipman (referans): yüksek hacimli HDD shredder'lar, ~5.000 Oe permanent-magnet degausser'lar, 2mm²'lik kurumsal SSD disintegratörleri.

**DIN 66399 / P-7** endüstriyel standardı bir referanstır ancak NSA yalnızca kendi EPL'sini tanır; bir cihaz P-7 olabilir ama NSA-onaylı olmayabilir. Sınıflandırılmış işler için yalnızca EPL geçerlidir.

### 2.2.6. Güvenli E-Atık Yönetimi ve Türkiye Mevzuatı

- **WEEE direktifi uyumu:** Türkiye'de **AEEE (Atık Elektrikli ve Elektronik Eşyaların Kontrolü) Yönetmeliği** ve **2872 sayılı Çevre Kanunu** kapsamında düzenlenir.
- **ISO 14001** (Çevre Yönetim Sistemi) ve **R2 (Responsible Recycling)** sertifikası, atık alıcısının (downstream vendor) yetkinlik kanıtıdır.
- **Chain of Custody (Zincir-i Muhafaza):** Cihazın söküm/teslim/imha aşamalarının her birinin tarih-kullanıcı damgalı kaydı; üçüncü taraf imha sertifikaları (**Certificate of Destruction**) ve seri-numarası bazlı doğrulama. ISO 27001:2022 A.7.14 denetiminde "irretrievable" (geri getirilemez) olduğunun — gerekirse ileri forensic recovery dahi başarısız olacak şekilde — kanıtlanması zorunludur. Auditor, canlı bir varlık kayıt defteri, sertifikalı silme/imha belgeleri ve harici tedarikçi kullanılıyorsa chain-of-custody dokümanı arar.

### 2.2.7. Kurumsal Medya İmha Politikası (Media Sanitization Policy)

Olgun bir Media Sanitization Policy şu adımları içerir: (1) Varlık envanteri ve veri sınıflandırması → (2) Disposition kararı (reuse/recycle/destroy) → (3) Veri hassasiyetine göre metot seçimi (**Clear** düşük-risk iç yeniden kullanım, **Purge** kurum dışına çıkış, **Destroy** en yüksek güvence) → (4) Doğrulanmış uygulama → (5) Doğrulama (mümkünse orijinal işlemi yapmayan personelce örnekleme) → (6) Belgelendirme (imha sertifikası, chain of custody) → (7) Periyodik denetim. **KVKK Kişisel Veri Saklama ve İmha Politikası** (silme/yok etme/anonim hale getirme teknikleri ile), Türkiye'de bu sürecin yasal karşılığıdır ve veri sorumlularına re'sen veya talep üzerine imha yükümlülüğü getirir.

---

## 2.3. Sosyal Mühendislik ile Fiziksel Sızma ve Red Team Operasyonları

### 2.3.1. Fiziksel Sızma Yöntemleri

- **Tailgating/Piggybacking:** En yaygın giriş vektörü (bkz. 2.1.3).
- **Pretexting (bahane kurgusu):** Sahte kimlik senaryosu — temizlik görevlisi, teknisyen, teslimat görevlisi, denetçi kılığı. OSINT ile toplanan isim/unvan/badge görünümü ile inandırıcılık kurulur.
- **Shoulder Surfing:** PIN/parola/ekranı omuz üstünden gözleme; ekran filtreleri (privacy screen), clear-screen politikası ve ekranların pencerelere arka dönük yerleştirilmesi ile önlenir.
- **Dumpster Diving:** Çöpten/geri dönüşümden hassas belge, eski donanım, ağ diyagramı toplama; medya imha politikasının (Bölüm 2.2) neden kritik olduğunun doğrudan kanıtı.

**Sosyal mühendislik döngüsü** dört aşamadır: (1) OSINT toplama (isim, unvan, e-posta, badge görüntüsü) → (2) keşif/recon (bina planı, güvenlik vardiyaları, yoğun saatler) → (3) tuzak/etkileşim → (4) çıkış. Saldırgan, bina planlarını, nöbetçi programını ve yüksek-trafik saatlerini inceleyerek yaklaşımını kişiselleştirir ve sahte badge üretir.

### 2.3.2. RFID/Badging Güvenliği — Ofansif Perspektif

**Zayıf (klonlanabilir) kartlar:**
- **HID Prox (125 kHz), EM4100, Indala:** Veri şifresiz; UID neyse okunan o. **Proxmark3, Flipper Zero** veya **iCopy-X** ile saniyeler içinde klonlanabilir (~30 USD'lik cihazla). Yalnızca hassas-olmayan çevre/perimeter için önerilir. Flipper, kartı okuyup boş bir T5577/125 kHz karta yazarak çalışan bir klon üretebilir.
- **MIFARE Classic (13.56 MHz, Crypto-1):** Crypto-1 şifresi **Radboud University Nijmegen** ekibince (de Koning Gans, Hoepman, Garcia — *"A Practical Attack on the MIFARE Classic"*, CARDIS 2008 ve *"Dismantling MIFARE Classic"*, ESORICS 2008) kırılmıştır; ESORICS 2008'de cipher "0,1 saniye kadar kısa sürede" kırılabilmiş ve o dönem ~200 milyon kart dolaşımdaydı. Sektör anahtarları dakikalar içinde kurtarılabilir. 15+ yıldır yaygın kullanımda olması (milyonlarca kartı/okuyucuyu değiştirmenin lojistik zorluğu nedeniyle) kalıcı bir zafiyet penceresi yaratır.

**Güvenli (kopyalanamaz) alternatifler:**
- **MIFARE DESFire EV2/EV3:** AES-128 şifreleme, **karşılıklı kimlik doğrulama (mutual authentication)**, diversified (türetilmiş) anahtarlar. Doğru uygulandığında bilinen pratik klonlama saldırısı yoktur.
- **HID iCLASS SE / SEOS:** SEOS, AES-128 tabanlı Secure Identity Object çerçevesidir. iCLASS SE/SEOS kopyalamaya dayanıklı kabul edilir. iCopy-X gibi gelişmiş klonlayıcılar bile **MIFARE DESFire ve özel-anahtarlı iCLASS Elite'i desteklemez**.

**Neden kopyalanamaz?** AES-128/3DES kriptografisi + karşılıklı kimlik doğrulama (hem kart hem okuyucu birbirini kriptografik challenge-response ile doğrular) + her karta özgü türetilmiş anahtar. Saldırgan yan kanaldan UID okusa bile, gizli anahtar olmadan challenge-response'u taklit edemez; bu nedenle klonlama hesaplama açısından infeasible'dır.

**Savunma — en yüksek etkili tek teknik kontrol:** 125 kHz ve MIFARE Classic altyapısını **DESFire EV3 veya iCLASS Seos'a yükseltmek**; ardından kart + ikinci faktör (PIN/biyometri/mobil credential) ile çok-faktörlü fiziksel kimlik doğrulama. Klonlanmış bir kart tek başına çok-faktörlü doğrulamayı geçemez.

### 2.3.3. Red Team Metodolojisi: PTES ve OSSTMM

- **PTES (Penetration Testing Execution Standard):** 7 fazlı, müşteriye dönük dokümantasyonda en yaygın referans: (1) **Pre-engagement Interactions** (kapsam, Rules of Engagement, yazılı yetkilendirme), (2) **Intelligence Gathering** (pasif OSINT + aktif recon), (3) **Threat Modeling**, (4) **Vulnerability Analysis**, (5) **Exploitation**, (6) **Post-Exploitation**, (7) **Reporting**.
- **OSSTMM (Open Source Security Testing Methodology Manual, ISECOM):** Operasyonel güvenliği nicel olarak ölçer; 5 kanal: **HUMSEC** (insan/sosyal mühendislik), **PHYSSEC** (fiziksel erişim — badge'den tailgating'e), **SPECSEC** (kablosuz/RFID/Bluetooth), **COMSEC** (telekom/VoIP), **DATASEC** (veri ağları). **RAV (Risk Assessment Values)** ile metrik üretir. Kritik altyapı testlerinde ve ISO 27001 destekleyici referansı olarak değerlidir.

Fiziksel pentest ayrıca **NIST SP 800-115** (Technical Guide to Information Security Testing) ve **MITRE ATT&CK** ile hizalanabilir.

### 2.3.4. Gerçek Dünya Vakaları

Bu vakalar, fiziksel sızmanın teorik değil somut bir tehdit olduğunu gösterir (tümü yetkili, profesyonel angajmanlardır):

**Vaka 1 — Jayson E. Street, Beyrut Banka Operasyonu:** Profesyonel sosyal mühendis Jayson E. Street, Lübnan'da bankalar için yetkili bir fiziksel kompromisyon angajmanında, kendisine 3 şubeyi test edip bir kullanıcı kimliği, parola, smartcard, bir bilgisayar ve ağ erişimi getirme görevi verildiğinde bunların tümünü elde etti; banka çalışanlarını bilgisayarlarına **Hak5 USB Rubber Ducky** takmaya ikna ederek banka müdür yardımcısının kullanıcı kimliği, parolası ve smartcard'ını aldı ve çalınan bilgiyle başka şubeleri kompromize etti. Ünlü "yanlış banka" follow-up vakasında, hedeflemesi gereken bankanın yanındaki *yanlış* bankaya girip teller hattındaki tüm bilgisayarları "binaya ilk kez girişinden itibaren 2,5 dakika içinde" kompromize etti. İmzası: **"Eğer resepsiyonisti atlatabilirsem firewall'ınızı atlatmama gerek yok."** (Kaynak: Darknet Diaries Ep. 6, *"The Beirut Bank Job"*.)

**Vaka 2 — "JekHyde" (Sophie Daniel), Üretim Şirketi HQ:** Red team operatörü, palisade çit (üç-uçlu aşılması zor topper'lı), 7/24 üç manlı nöbetçi kabini, turnike ve badge okuyuculu bir uluslararası üretim şirketi HQ'sini hedefledi. Fiziksel sızma seçenekleri (çit aşma, badge klonlama) elenince, **idealizmiyle seçilen bir çalışana** lookalike domain (`sirket-communityresources.com`) ve bir hayır kurumu/gıda bankası temalı pretext e-postası ile yaklaşıp rogue **"dropbox"** ağ implant cihazını planladı. Empati istismarı için kılık (peruk, gözlük, prostetik ben, hatta **silikon hamilelik protezi**) kullandığını ve "kapıyı tutar mısınız?" talebinin "**%100 işe yaradığını**" anlatır. (Kaynak: Darknet Diaries Ep. 41, *"Just Visiting"*.)

### 2.3.5. MITRE ATT&CK: Fiziksel Sızmanın Siber Saldırı Zincirine Bağlanması

**TA0001 (Initial Access)** taktiği, saldırganın ağda ilk dayanağı kurduğu — en sık kullanılan — aşamadır. Fiziksel sızma şu tekniklere bağlanır:
- **T1078 (Valid Accounts):** Klonlanmış badge ile fiziksel erişen veya kimlik bilgisi çalan saldırgan, sistemlere "ön kapıdan" meşru kimlikle girer; geleneksel perimeter savunması bunu göremez — yalnızca davranışsal analiz/anomali tespiti tespit eder. 2024'te akademik literatürde öne çıkan teknik.
- **T1566 (Phishing):** JekHyde vakasındaki pretext e-postası bu tekniğin örneğidir. (Verizon 2025 DBIR'a göre phishing, ihlallerin başlangıç vektörü olarak yaklaşık **%16**'sını oluşturur; çalınan kimlik bilgileri **%22** ile birinci sıradadır ve insan unsuru ihlallerin **%60**'ında rol oynar — 22.052 olay / 12.000+ ihlal analizi.)
- **T1200 (Hardware Additions):** Rogue dropbox, BadUSB, ağ implantı fiziksel olarak yerleştirilir.
- **T1091 (Replication Through Removable Media):** Dumpster diving / parking-lot USB drop ile bulaşma.

**Saldırı zinciri:** Fiziksel erişim (tailgating/badge klonu) → ağ implantı (T1200) → meşru kimlikle oturum (T1078) → lateral hareket → domain ele geçirme. Raxis gibi firmalar bu zincirleri MITRE ATT&CK-hizalı senaryolarda göstermektedir (örn. ters çevrilmiş hava spreyi ile request-to-exit sensörünü tetikleyerek veri merkezi kapısını açma dâhil).

### 2.3.6. Mavi Takım (Blue Team) Perspektifi

- **CCTV/VMS analitiği:** Davranışsal analiz (loitering/oyalanma, ters yönde hareket), yüz tanıma, anomali tespiti. Milestone XProtect / Genetec Security Center analitik modülleri.
- **Geçiş kontrol log korelasyonu:** Anti-passback ihlali, mesai-dışı erişim, ardışık badge-reddi sıçramaları.
- **"Person of interest" takibi:** VMS + ACS birleşik sorgu ile kişinin tesis içi hareketinin izlenmesi.
- **SIEM entegrasyonu:** PACS olaylarının (badge-red, zorlanmış kapı, mantrap ihlali) SIEM'e beslenmesi ve siber olaylarla korelasyonu — örn. fiziksel badge-red + aynı kullanıcının VPN brute-force'u (bkz. 2.1.8 config). ManageEngine Log360 gibi platformlar, TA0001 için Windows Security Event, e-posta gateway, firewall/IPS, bulut audit ve VPN loglarını içeren çok-kaynaklı korelasyon kuralları sunar.

### 2.3.7. Türkiye Bağlamı: 7545 Sayılı Siber Güvenlik Kanunu ve Hukuki Sınırlar

**7545 sayılı Siber Güvenlik Kanunu**, 19 Mart 2025 tarih ve 32846 sayılı Resmî Gazete'de yayımlanarak yürürlüğe girdi — Türkiye'nin siber güvenlik alanındaki **ilk kapsamlı yasal çerçevesidir**.
- **Siber Güvenlik Başkanlığı**, "zafiyet ve sızma testleri yapmak veya yaptırmak" görevini üstlenir; bağımsız denetçileri ve denetim kuruluşlarını yetkilendirme/iptal etme yetkisine sahiptir.
- **Yetkilendirme zorunluluğu:** Siber güvenlik alanında faaliyet gösteren tüm firmalar (red team/pentest hizmeti dâhil), ikincil düzenlemelerin yürürlüğünden itibaren **12 ay içinde** Başkanlık onaylı sertifikasyon/yetkilendirme süreçlerini tamamlamak zorundadır; aksi halde siber güvenlik alanında faaliyette bulunulamaz.
- **Cezai çerçeve:** Bilgi/belge vermeyenlere 1–3 yıl hapis ve adli para cezası; yetkisiz faaliyet, sır saklama ihlali ve veri sızıntısı için hapis cezaları; idari para cezaları (uyumsuzlukta 1 milyon TL'den başlayan ve zarar/menfaatin 3–5 katına çıkabilen) öngörülmüştür. İdari para cezası, ilgilinin savunması alınmadan (30 gün içinde sunulmazsa feragat sayılır) verilemez; kararlara karşı idari yargı yolu açıktır.
- **Etik ve hukuki sınırlar:** Fiziksel sızma testi **mutlaka yazılı yetkilendirme** (Rules of Engagement, net scope, yetkili imza) ile yapılmalıdır. Yetkisiz fiziksel sızma; **TCK md. 116** (konut/işyeri dokunulmazlığının ihlali), **md. 243-245 ve 245/A** (bilişim sistemlerine girme, verileri değiştirme/silme, sistemi engelleme) kapsamına girer. Red team senaryoları, otomatik taramaların gözden kaçırdığı sosyal mühendislik/insan-faktörü risklerini kapatarak Kanun'un "test ve denetim" sorumluluğunu somut delille karşılar.

**5651 sayılı Kanun ile bağlantı:** Fiziksel güvenlik logları (badge giriş-çıkış) ile ağ trafik logları birlikte ele alınmalıdır. 5651 sayılı Kanun, yer sağlayıcılara trafik bilgisini **bir yıldan az iki yıldan fazla olmamak üzere** (uygulamada erişim/yer sağlayıcılar için yaygın olarak 1–2 yıl) saklama, bu kayıtların doğruluğunu/bütünlüğünü/gizliliğini **zaman damgası (HASH)** ile koruma yükümlülüğü getirir; ihlalde 10.000–100.000 TL idari para cezası uygulanır. KVKK md. 12(5) denetim yükümlülüğü ile birlikte, tüm loglar zaman damgalı imzalanıp değiştirilemez biçimde (tercihen merkezi SIEM'de) saklanmalıdır.

---

## SONUÇ VE ÖNERİLER

**Bottom Line:** Fiziksel güvenlik, Defense in Depth mimarisinin temel katmanıdır ve siber katmanlarla kopuk değil **entegre** kurgulanmalıdır. En yüksek getirili tek teknik kontrol, eski 125 kHz / MIFARE Classic kart altyapısının AES tabanlı DESFire EV3 veya iCLASS Seos'a yükseltilmesidir; en kritik operasyonel açık ise tailgating ve yetersiz medya imhasıdır. Kurumsal topolojide eş-merkezli halkalar (perimeter → bina → bölge → veri merkezi → rack) her biri NIST SP 800-53 PE kontrollerine eşlenerek tasarlanmalı; PACS-VMS-SIEM korelasyonu ile fiziksel olaylar siber olaylarla birlikte izlenmelidir.

**Aşamalı eylem planı:**

1. **0–3 ay (Hızlı kazanımlar):** Kart envanteri çıkar; 125 kHz/MIFARE Classic kullanımını tespit et. Mantrap/anti-passback'i kritik alanlarda doğrula. Medya imha politikasını ve chain-of-custody'yi belgele; HDD/SSD imha hatlarını ayrıştır. KVKK md. 12 fiziksel tedbir kontrol listesini denetle.
2. **3–12 ay (Yapısal):** DESFire EV3 / iCLASS Seos'a geç (en yüksek etkili tek kontrol); okuyucu bağlantısını Wiegand'dan OSDP Secure Channel'a taşı. PACS olaylarını SIEM'e besle ve fiziksel-siber korelasyon kuralları yaz. 7545 kapsamında pentest tedarikçisinin Başkanlık yetkilendirmesini doğrula. NIST SP 800-88 Rev.2/IEEE 2883'e geçiş için politika güncelle.
3. **12+ ay (Olgunluk):** ISO 27001:2022 Annex A.7 sertifikasyonu/iç denetimi; Uptime Institute Tier veya TIA-942-C hizalaması; yıllık fiziksel red team angajmanı (PTES/OSSTMM hizalı, yazılı yetki ile, OSSTMM PHYSSEC+HUMSEC kanalları dâhil).

**Kararı değiştirecek eşik göstergeleri (benchmark/threshold):**
- Badge-red oranında ani artış veya mesai-dışı erişim anomalileri → SOC incelemesi + olası fiziksel kompromisyon araştırması.
- **ATA Secure Erase başarısızlık oranı > %30** → ilgili SSD modelinde overwrite/crypto-erase'i bırakıp fiziksel imhaya (2 mm disintegration) geç.
- **PUE > 1.5** → soğutma verimsizliği; Hot/Cold Aisle containment ve ASHRAE inlet sensör yerleşimini gözden geçir.
- VESDA tek-bölge alarm sıklığı artışı → toz/yoğuşma kaynağını araştır, çift-tetik (cross-zoned) mantığını doğrula.

---

## ÖNEMLİ ÇEKİNCELER (CAVEATS)

- **Uptime Tier availability yüzdeleri** (%99,671 / %99,741 / %99,982 / %99,995) 2009'da resmî standarttan çıkarılmıştır ve yalnızca tarihsel referans olarak verilmiştir; gerçek erişilebilirlik tasarımdan çok operasyona bağlıdır ve hiçbir güncel Uptime belgesi bu rakamları tier'a atamaz.
- **FM-200 GWP değeri** kaynaklara göre değişir (IPCC AR5: ~3.220; NIST belgesi: 3.500); her iki değer de yüksek-GWP sınıfını doğrular.
- **NIST SP 800-88 Rev.2** (Eylül 2025) henüz benimsenme aşamasındadır; teknik seçimi IEEE 2883-2022'ye devretmiştir. Mevcut sözleşmeler hâlâ Rev.1'e atıf yapıyor olabilir.
- **NSA/CSS EPL** listeleri periyodik güncellenir (2026 itibarıyla en son sürümler yayımlanmıştır); imha öncesi cihazın güncel EPL'de olduğu mutlaka doğrulanmalıdır.
- **7545 sayılı Kanun'un ikincil mevzuatı** (yönetmelik/tebliğ) bu metnin hazırlandığı tarihte henüz tam olgunlaşmamıştır; sertifikasyon/yetkilendirme detayları Başkanlık düzenlemeleriyle netleşecektir.
- **Verizon DBIR yüzdeleri** yıldan yıla değişir; burada verilen 2025 raporu rakamlarıdır.
- RFID klonlama, degausing parametreleri ve imha araçları yalnızca **yetkili, yazılı kapsamlı (scoped)** angajmanlarda kullanılmalıdır; yetkisiz kullanım TCK ve 7545 kapsamında suç teşkil eder.