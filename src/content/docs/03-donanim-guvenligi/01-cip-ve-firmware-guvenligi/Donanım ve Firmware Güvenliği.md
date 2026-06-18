# **Çip (TPM), Anakart ve Firmware Güvenliği: Kurumsal Savunma Derinliği ve Donanımsal Güven Kökü Güvenlik Mimarisi**

Kurumsal bilgi sistemlerinin güvenliği, geleneksel olarak işletim sistemi ve uygulama katmanlarında kurgulanan mantıksal denetimlerle korunmaya çalışılmaktadır. Ancak siber tehdit aktörlerinin yeteneklerindeki artış, savunma hatlarının daha derinlere, yani donanım ve bellenim (firmware) seviyesine indirilmesini zorunlu kılmaktadır1. İşletim sistemi çekirdeğinden (kernel) veya hipervizörden daha önce çalışan ve sistem üzerinde sınırsız yetkiye sahip olan bellenim bileşenlerinin manipülasyonu, tüm üst katman güvenlik mekanizmalarını tamamen işlevsiz hale getirebilmektedir2. Bu analiz, kurumsal yapılarda "Savunma Derinliği" (Defense in Depth) ilkelerine uygun bir donanım ve bellenim güvenlik altyapısı kurgulamak için gereken teknik temelleri, uluslararası ve ulusal standartları, saldırı senaryolarını ve güvenlik operasyonları merkezi (SOC) seviyesindeki izleme pratiklerini ele almaktadır.

## **Donanımsal Güven Kökü ve Güven Zinciri Mimarisi**

Donanımsal Güven Kökü (Hardware Root of Trust \- RoT), bir bilgisayar platformunun güvenilirliğini başlatan ve kendisinden sonra gelen tüm yazılım katmanlarının bütünlüğünü doğrulamakla görevli olan, değiştirilemez ve taklit edilemez başlangıç noktasıdır4. Güven kökleri, doğası gereği doğruluğu başka bir yazılım tarafından doğrulanamayan, bu nedenle kendilerine "mutlak olarak" güvenilmesi gereken donanım bileşenleridir4.  
Sistemin önyükleme (boot) sürecinde, her bileşen kendisinden sonraki bileşeni çalıştırmadan önce kriptografik olarak doğrular4. Bu bütünlük doğrulama silsilesine "Güven Zinciri" (Chain of Trust) adı verilir4. Kurumsal bir donanım mimarisinde güven kökleri, yerine getirdikleri işlevlere göre sınıflandırılmaktadır:

* **RTM (Root of Trust for Measurement):** Önyükleme sırasında çalıştırılacak bellenim kodlarının (BIOS, UEFI sürücüleri vb.) kriptografik özetlerini (hash) alarak bunları kayıt altına alan güven köküdür7. Genellikle işlemcinin ilk çalıştırdığı kod bloklarında (CRTM \- Core Root of Trust for Measurement) konumlandırılır8. Statik (S-RTM) ve Dinamik (D-RTM) olmak üzere ikiye ayrılır4.  
* **RTS (Root of Trust for Storage):** RTM tarafından gerçekleştirilen bütünlük ölçümlerini ve kriptografik anahtarları dış müdahalelerden izole bir şekilde saklayan güven köküdür7. TPM içerisindeki uçucu olmayan bellek (NVRAM) ve Platform Konfigürasyon Kaydedicileri (PCR) bu görevi üstlenir8.  
* **RTR (Root of Trust for Reporting):** RTS bünyesinde saklanan bütünlük ölçümlerini kriptografik olarak imzalayarak dış dünyaya (örneğin bir uzaktan kanıtlama sunucusuna) güvenli bir şekilde raporlayan birimdir7.  
* **RTV (Root of Trust for Verification):** Önyükleme adımlarındaki veya bellenim güncellemelerindeki dijital imzaları doğrulamakla görevli kriptografik motordur4.  
* **RTU (Root of Trust for Update) ve RTRec (Root of Trust for Recovery):** NIST SP 800-193 standartlarında tanımlanan, sistem belleniminin güncellenmesi aşamasında yeni bellenim imajının dijital imzasını doğrulayan (RTU) ve bir manipülasyon anında sistemi otomatik olarak doğrulanmış bir yedek imajdan geri yükleyen (RTRec) ileri düzey direnç mekanizmalarıdır1.

NIST SP 800-155 standardı çerçevesinde kurumsal cihazların bütünlüğü, istemci tarafındaki donanımsal güven kökleri (RTM, RTS, RTR) ile merkezi ağ bileşenleri arasındaki bir mimari ortaklıkla sağlanır7. İstemci üzerindeki Toplama Ajanı (Collection Agent) ölçümleri toplar, İletim Ajanı (Transmission Agent) bu ölçümleri Ölçüm Değerlendirme Otoritesine (Measurement Assessment Authority \- MAA) iletir7. MAA, gelen ölçümleri kurum tarafından önceden güvenli koşullarda toplanmış "Altın Ölçümler" (Golden Measurements) ile karşılaştırarak doğrular7. Doğrulama başarısız olursa, Ağ Erişim Kontrolü (NAC) veya Mobil Cihaz Yönetimi (MDM) gibi sistemlerle entegre çalışan Müdahale Ajanı (Remediation Agent) cihazı karantinaya alır7.  
Donanım üreticileri, NIST SP 800-193 gereksinimlerini karşılamak için fiziksel SPI flaş yongaları üzerinde özel koruma mekanizmaları geliştirmektedir14. Örneğin, Winbond W77Q Secure Flash gibi güvenli flaş bellek mimarileri, birincil bellenim (Primary Image) ve kurtarma bellenimi (Recovery/Golden Image) olmak üzere çift imaj (Dual Image) desteği sunar15. Birincil bellenimde bir bütünlük bozulması veya yetkisiz değişiklik tespit edildiğinde, donanımsal Root of Trust denetleyicisi (BMC veya CPLD) ana işlemciden veya işletim sisteminden tamamen bağımsız olarak otomatik geçiş (auto-switching) mantığını tetikler15. Bu süreç, "unattended automatic recovery" (müdahalesiz otomatik kurtarma) standardına uygun olarak sistemin güvenli bir duruma dönmesini sağlar ve kalıcı hizmet dışı bırakma (PDOS) saldırılarını engeller1.

| Özellik | Doğrulanmış Önyükleme (Verified Boot) | Ölçümlü Önyükleme (Measured Boot) |
| :---- | :---- | :---- |
| **Temel Mekanizma** | Her önyükleme aşaması çalıştırılmadan önce dijital imza kontrolünden geçirilir4. | Önyükleme bileşenlerinin kriptografik özetleri (hash) alınarak TPM register'larına genişletilir9. |
| **Hata Durumu Tepkisi** | İmza doğrulaması başarısız olursa önyükleme süreci derhal durdurulur17. | Önyükleme durdurulmaz; ancak PCR değerleri değiştiği için kriptografik anahtarlar çözülemez9. |
| **Raporlama Yeteneği** | Yerel bir doğrulama sürecidir; dış sistemlere kanıt sunamaz12. | TPM üzerinden imzalı rapor (Quote) üretilerek uzaktan kanıtlama (Remote Attestation) yapılabilir8. |
| **Temel Standartlar** | UEFI Secure Boot, Chromebook Verified Boot6. | TCG PC Client Platform Firmware Profile, NIST SP 800-15519. |

## **TPM 2.0 Mimari Detayları, Kriptografik Anahtar Hiyerarşisi ve Ölçümlü Önyükleme**

Trusted Platform Module (TPM) 2.0, anakart üzerinde yer alan veya işlemciye entegre (fTPM) olan, ana işlemci ve bellekten tamamen yalıtılmış bir kriptografik mikrodenetleyicidir8. TPM 1.2 mimarisindeki sabit şifreleme algoritmalarının aksine TPM 2.0, "Algoritmik Esneklik" (Algorithm Agility) sunarak SHA-256, SHA-384, RSA-2048, ECC (NIST P-256) ve AES-128/256 algoritmalarını destekler8.  
TPM 2.0 bünyesindeki işlemler, her biri benzersiz bir birincil tohum (Primary Seed) değerinden türetilen bağımsız hiyerarşiler üzerinden yönetilir8. Bu hiyerarşik yapı, kurumsal sistemlerde görevler ayrılığı ilkesinin donanım seviyesinde uygulanmasını sağlar8:

* **Endorsement Hierarchy (EH):** Cihazın kimlik doğrulaması ve gizlilik odaklı kanıtlama süreçleri için kullanılır8. Üretim aşamasında yongaya yazılan ve dışarı sızdırılması imkansız olan Onaylama Anahtarı (Endorsement Key \- EK) bu hiyerarşinin köküdür8.  
* **Storage Hierarchy (SH):** Kurumsal verilerin ve kullanıcı anahtarlarının şifrelenerek saklanması (sealing/binding) görevini üstlenir8. Depolama Kök Anahtarı (Storage Root Key \- SRK), bu hiyerarşinin anahtarıdır8.  
* **Platform Hierarchy (PH):** Sistem bellenimi (UEFI/BIOS) ve OEM denetimleri için ayrılmıştır8. Bellenim güncellemeleri ve platform bütünlüğü bu hiyerarşiyle yönetilir8.  
* **Null Hierarchy:** Sistem her yeniden başlatıldığında sıfırlanan geçici tohumlardan türetilen, oturum bazlı kriptografik işlemler için kullanılan hiyerarşidir8.

Fiziksel güvenlik açısından TPM, LPC veya SPI veri yolları üzerinden ana işlemciyle haberleşirken araya girme (sniffing/interception) saldırılarına maruz kalabilir9. TPM 2.0 bu tehdide karşı, komut ve yanıt parametrelerinin şifrelendiği "Session-Based Encryption" (Oturum Tabanlı Şifreleme) mekanizmasını destekler9. HMAC oturumları ve Policy oturumları kullanılarak, veri yolu üzerindeki trafik kriptografik olarak korunur ve ortadaki adam (MitM) saldırıları donanım seviyesinde engellenir9.  
Sanal ortamlarda ise vTPM (Sanal TPM) mimarisi kurumsal sunucu güvenliğinde kritik bir rol oynar24. Örneğin, EVE-OS gibi mikro-sanallaştırma platformlarında her sanal makineye (VM) izole bir vTPM 2.0 sunulur24. Bu sanal TPM'lerin durumları (NVRAM, anahtarlar, sertifikalar) kalıcı olarak saklanırken, vTPM durum dosyaları ana bilgisayarın (host) fiziksel TPM'inde saklanan 256-bit AES anahtarı ile şifrelenir24. Bu şifre çözme işlemi, host işletim sisteminin bütünlüğünü ölçen bir PCR politikasına bağlıdır; böylece host bellenimi manipüle edilirse sanal makinelerin de açılması engellenmiş olur24.

### **Platform Konfigürasyon Kaydedicileri (PCR) ve Ölçümlü Önyükleme**

Ölçümlü Önyükleme (Measured Boot), sistemin başlangıcındaki her bir kod parçasının kriptografik özetinin bir sonraki aşama çalıştırılmadan önce TPM içerisindeki Platform Konfigürasyon Kaydedicilerine (PCR) "Genişletme" (Extend) işlemiyle yazılmasıdır9. PCR hücreleri doğrudan üzerine yazma işlemine kapalıdır; yeni bir değer yazılmak istendiğinde aşağıdaki matematiksel işlem gerçekleştirilir18:  
![][image1]  
Burada ![][image2] sembolü uç uca ekleme (concatenation) işlemini ifade eder18. Bu matematiksel model, saldırganın önyükleme zincirindeki bir dosyayı manipüle ettikten sonra PCR değerlerini eski haline getirmesini (tampering) engeller9.

| PCR İndeksi | Ölçülen Platform Bileşeni (TCG PC Client Standardı) | Güvenlik İzleme ve SOC Açısından Önemi |
| :---- | :---- | :---- |
| **PCR 0** | Core Root of Trust for Measurement (CRTM), BIOS/UEFI Bellenim Kodu8. | Bellenim güncellemelerinde değişir. Yetkisiz BIOS yazma girişimlerini tespit eder19. |
| **PCR 1** | Anakart Donanım ve Platform Konfigürasyon Değişkenleri19. | Anakart bileşenlerinin veya fiziksel donanımların değişimini izler19. |
| **PCR 2** | Option ROM Sürücüleri ve Genişleme Kartı Bellenimleri6. | PCIe kartları veya RAID denetleyicileri üzerinden gelen tehditleri yakalar19. |
| **PCR 4** | İşletim Sistemi Önyükleyicisi (Boot Manager \- bootmgfw.efi, grubx64.efi)19. | Bootloader seviyesindeki manipülasyonları ve bootkit zararlılarını raporlar19. |
| **PCR 5** | GPT/MBR Bölüm Tablosu ve Disk Konfigürasyon Verileri19. | Bölüm tablosundaki yapısal değişiklikleri ve yetkisiz disk manipülasyonlarını gösterir19. |
| **PCR 7** | UEFI Secure Boot Durumu ve Anahtar Veritabanları (PK, KEK, db, dbx)19. | Secure Boot'un kapatılması veya imza veritabanlarına yetkisiz anahtar eklenmesini izler19. |
| **PCR 11** | Sanallaştırma Tabanlı Güvenlik (VBS) ve BitLocker Erişim Kontrolleri19. | Windows Credential Guard ve çekirdek koruma bütünlüğünü doğrular19. |
| **PCR 12** | İşletim Sistemi Çekirdeği (Kernel) Komut Satırı Parametreleri18. | Çekirdeğe meşru olmayan parametrelerin (örn. hata ayıklama modu) eklenmesini engeller19. |
| **PCR 13** | Başlangıç Aşaması Sürücüleri ve Çekirdek Uzantıları (Extension Images)19. | EDR veya antivirüs gibi erken yüklenen sürücülerin bütünlüğünü korur19. |

## **UEFI Secure Boot Güvenlik Mekanizması ve Anahtar Hiyerarşisi Akışı**

UEFI Secure Boot, platformun yalnızca güvenilen ve kriptografik olarak doğrulanmış yazılımları çalıştırmasını sağlayan bir imza doğrulama çerçevesidir6. Bu güven ilişkisi, NVRAM içerisinde hiyerarşik bir yapıda saklanan dört temel kriptografik veritabanı üzerinden yönetilir17:

1. **Platform Key (PK):** Güven zincirinin en tepesinde yer alan ve platform sahipliğini temsil eden kök anahtardır6. Genellikle anakart üreticisi (OEM) tarafından yazılır6. PK, altındaki Key Exchange Key (KEK) veritabanında değişiklik yapma hakkına sahip olan tek yetkili mercidir6.  
2. **Key Exchange Key (KEK):** PK tarafından doğrulanmış sertifikaları barındırır6. KEK, "İzin Verilenler (db)" ve "Yasaklananlar (dbx)" veritabanlarını güncelleme yetkisine sahip olan işletim sistemi üreticilerinin (Microsoft, Red Hat vb.) anahtarlarını depolar6.  
3. **Allowed Database (db):** Sistem açılışında çalıştırılmasına izin verilen önyükleyicilerin, bellenim sürücülerinin, UEFI uygulamalarının ve çekirdeklerin sertifikalarını veya SHA-256 özet değerlerini saklar6.  
4. **Forbidden Database (dbx):** Güvenilmeyen, zafiyet barındıran veya doğrudan zararlı olduğu tespit edilmiş bellenim bileşenlerinin ve önyükleyicilerin imzalarını içeren kara listedir6. İmza doğrulaması esnasında dbx her zaman önceliklidir; bir dosya db içinde yer alsa bile dbx listesinde eşleşmesi varsa çalıştırılması derhal engellenir17.

| Veritabanı Değişkeni | Depolandığı Yer | Yetkili Güncelleyici | İçerik Türü |
| :---- | :---- | :---- | :---- |
| **Platform Key (PK)** | NVRAM Değişkeni17 | Sistem Sahibi / OEM6 | X.509 Sertifikası17 |
| **Key Exchange Key (KEK)** | NVRAM Değişkeni17 | PK Sahibi6 | X.509 Sertifikaları17 |
| **Allowed Database (db)** | NVRAM Değişkeni6 | KEK Sahibi6 | X.509 Sertifikaları, SHA-256 İmzaları6 |
| **Forbidden Database (dbx)** | NVRAM Değişkeni17 | KEK Sahibi17 | İptal Edilen Sertifikalar, Zararlı Hashes6 |

Önyükleme sürecinde UEFI bellenimi, disk üzerindeki EFI Sistem Bölümünden (ESP) bir PE/COFF ikili dosyasını (örneğin bootmgfw.efi) belleğe yükler (efi\_load\_pe)17. Dosya çalıştırılmadan önce efi\_image\_authenticate işlevi tetiklenir17. Bu işlev, dosyanın imza tablosunu (Attribute Certificate Table) ayrıştırarak PKCS\#7 imzasını elde eder ve pkcs7\_verify\_one aracılığıyla kriptografik doğrulamayı gerçekleştirir17. Dosyanın imzası db içerisindeki meşru bir anahtarla doğrulanır ve dbx listesinde bulunmuyorsa, yürütme kontrolü ilgili işletim sistemi önyükleyicisine devredilir17.  
Linux tabanlı kurumsal sunucularda ise Microsoft KEK tarafından imzalanmış olan "Shim" isimli ara önyükleyici devreye girer6. Shim, sistem yöneticisinin NVRAM'e eklediği Machine Owner Key (MOK) veritabanını kullanarak GRUB önyükleyicisinin ve Linux çekirdeğinin bütünlüğünü doğrular ve böylece kurumsal özelleştirilmiş çekirdeklerin de güvenle yüklenmesini sağlar6.

## **Bellenim Seviyesindeki Gelişmiş Tehdit Vektörleri ve Ofansif Analiz**

Geleneksel uç nokta koruma çözümlerinin (EDR/AV) bellenim katmanını görememesi, saldırganların bu alanı kalıcılık ve savunmayı atlatma amacıyla kullanmalarına neden olmaktadır2. Aşağıda, kurumsal güvenlik mimarisini derinden etkileyen iki kritik bellenim saldırı vektörü incelenmiştir.

### **BlackLotus Bootkit ve Baton Drop Zafiyeti (CVE-2022-21894)**

BlackLotus, UEFI Secure Boot mekanizmasını tamamen devre dışı bırakabilen, işletim sistemi çekirdeğine sızarak Windows Defender ve sanallaştırma tabanlı güvenlik (VBS) önlemlerini etkisiz hale getiren gelişmiş bir UEFI bootkit yazılımıdır27. Saldırganın bu seviyeye erişebilmesi için sistemde öncelikle yerel yönetici (Administrator) yetkilerine sahip olması gerekmektedir30.  
Saldırı, Windows Boot Manager (bootmgfw.efi) içerisindeki bir mantık hatasından kaynaklanan **CVE-2022-21894 (Baton Drop)** zafiyetini sömürür27. Güvenli önyükleme sürecinde, önyükleyici parametrelerinin ve politikalarının aktarıldığı bellek yapıları, zafiyet barındırıcı eski sürümlerde doğru şekilde doğrulanmamaktadır27. Saldırgan süreçleri şu şekilde işletir:

1. **Sürüm Düşürme (Downgrade):** Saldırgan, EFI Sistem Bölümüne (ESP) Microsoft tarafından imzalanmış olan ancak Baton Drop zafiyetini barındıran eski (Ocak 2022 öncesi) bir bootmgfw.efi kopyalar27. Bu dosya resmi olarak meşru imzalı olduğu için Secure Boot engeline takılmadan yüklenir27.  
2. **Güvenlik Politikalarının Silinmesi:** Eski önyükleyici çalıştırıldığında zafiyet sömürülerek Secure Boot'un yürütme zamanı (runtime) politikaları bellekten temizlenir ve sistem Secure Boot'un devre dışı olduğu yanılgısına düşürülür27.  
3. **Kalıcılık Sağlama:** BlackLotus, NVRAM içerisine kendi oluşturduğu bir Machine Owner Key (MOK) sertifikasını enjekte eder30. Bu adımdan sonra, kendi imzaladığı zararlı UEFI sürücülerini (örneğin modifiye edilmiş bir grubx64.efi) sisteme meşru birer önyükleme bileşeni olarak tanıtır27.  
4. **Güvenlik Sistemlerinin Kapatılması:** Her önyükleme sırasında yüklenen BlackLotus sürücüsü, Windows Kernel yüklenirken bellek üzerinde satır içi kanca (inline hook) teknikleri uygulayarak Sürücü İmzası Zorlamasını (DSE), Windows Defender'ı ve hipervizör tabanlı bellek bütünlüğü korumasını (HVCI) tamamen devre dışı bırakır30.

Microsoft bu zafiyete karşı yamalar yayınlamış olsa da, kurumsal sistemlerdeki NVRAM bellek kısıtlamaları nedeniyle zafiyetli eski meşru dosyaların tümünün imzaları dbx veritabanına eklenememektedir27. Bu durum, güncel işletim sistemlerinde bile bellenim seviyesinde sıkı bir takip yapılmasını zorunlu kılmaktadır27.

### **LogoFAIL: DXE Fazı Görsel Ayrıştırıcı Zafiyetleri**

LogoFAIL, UEFI mimarisinin en kritik aşamalarından biri olan Driver Execution Environment (DXE) fazında çalışan görsel ayrıştırma kütüphanelerini hedef alan bir zafiyetler bütünüdür (CVE-2023-5058, CVE-2023-39538, CVE-2023-39539, CVE-2023-40238)33. Sistem açılırken ekrana yansıtılan üretici logosu (Intel, Lenovo, Asus vb.), UEFI belleniminin içine gömülü olan veya ESP disk bölümünde saklanan resim dosyalarından (BMP, PNG, JPEG) okunur33.  
UEFI bellenimini geliştiren Bağımsız BIOS Sağlayıcıları (IBV; AMI, Phoenix, Insyde gibi), bu resimleri açmak için bellenim seviyesinde çalışan görsel ayrıştırıcı kodlar kullanır34. LogoFAIL zafiyetinin sömürülme aşamaları kurumsal yapılarda şu şekilde gerçekleşir:

1. **Zararlı Görselin Yerleştirilmesi:** Saldırgan, işletim sistemi katmanından veya fiziksel erişim yoluyla ESP bölümündeki meşru logo görselinin yerine, özel olarak yapılandırılmış ve içerisine zararlı kod (shellcode) gizlenmiş bir PNG/BMP dosyası koyar33.  
2. **DXE Fazında Tetiklenme:** Sistem yeniden başlatıldığında, UEFI güvenli önyükleme kontrollerinin bittiği ancak işletim sisteminin henüz yüklenmediği DXE fazında, görsel ayrıştırıcı kütüphane bu manipüle edilmiş resmi okur34.  
3. **Bellek Taşması (Buffer Overflow):** Ayrıştırıcı, resim dosyası içerisindeki IDAT chunk uzunluğu gibi kritik parametreleri eksik doğruladığı için yığın/yığın bellek taşması (heap/stack buffer overflow) oluşur33.  
4. **SMM Yetkileriyle Kod Çalıştırma:** Taşma sonucunda kontrol akışı saldırganın koduna geçer33. DXE fazı doğrudan System Management Mode (SMM) sınırlarına yakın çalıştığı için, enjekte edilen shellcode CPU'nun en yetkili modu olan Ring \-2 (SMM) seviyesinde çalıştırılmış olur33. Secure Boot bu aşamada tamamen bypass edilmiş olur çünkü resim dosyalarının meşruluğu imza kontrolüne tabi tutulmamaktadır2.  
5. **Kalıcı Tehdit:** BlackLotus gibi bootkit'lerin aksine, disk biçimlendirilse veya işletim sistemi tamamen yeniden kurulsa bile LogoFAIL bulaşmış bir sistem temizlenemez; zira saldırganın kontrol ettiği kod doğrudan anakartın bellenim belleğinde veya her açılışta yeniden tetiklenecek şekilde ESP üzerinde kalıcı hale gelmiştir34. Sadece Dell'in geliştirdiği Image Boot Guard veya Apple'ın bellenime sertifikalı olarak gömdüğü sabit logo mekanizmaları bu saldırılara karşı donanımsal koruma sağlayabilmektedir36.

## **Defansif Güvenlik Sıkılaştırması: SMM, SPI Denetleyici Kilitleri ve Chipsec Analizi**

Bellenim katmanındaki zararlı aktiviteleri engellemek için kurumsal donanım mimarisinde System Management Mode (SMM) korumalarının ve SPI flaş bellek kilitlerinin doğru yapılandırılması hayati önem taşır38. Anakart üzerindeki SPI flaş çipi, sistemin UEFI kodlarını barındırır28. Bu çipe doğrudan yazma yapılabilmesi, bellenimin kalıcı olarak enfekte edilmesi anlamına gelir38.  
İşlemci mimarilerinde SPI flaş çipine yazma erişimi, chipset düzeyindeki özel kaydediciler ve SMM sınırlandırmaları ile kontrol edilir38. Bu denetimlerin temelini üç kritik bellenim kilit mekanizması oluşturur:

* **BIOSWE (BIOS Write Enable):** Bu bit 1 yapıldığında BIOS bölgesine yazma yapılmasına izin verilir38. Normal çalışma şartlarında bu bitin her zaman 0 olması gerekir38.  
* **BLE (BIOS Lock Enable):** Bu bit aktif edildiğinde (1), herhangi bir yazılım BIOSWE bitini 1 yapmaya çalıştığında işlemci otomatik olarak bir System Management Interrupt (SMI) üretir41. SMI, işletim sistemini askıya alarak kontrolü güvenli SMM koduna devreder ve SMM yazma işleminin meşru olup olmadığına karar verir39.  
* **SMM\_BWP / EISS (SMM BIOS Write Protection):** Sadece BLE tek başına yeterli değildir; saldırganlar ile SMI işleyicileri arasında "Speed Racer" olarak bilinen yarış durumları (race conditions) sömürülerek kilitler aşılabilmektedir41. SMM\_BWP biti etkinleştirildiğinde, SPI flaş belleğin BIOS bölgesine yazma yetkisi tamamen ve sadece SMM içerisinde çalışan kodlarla sınırlandırılır38. SMM dışındaki hiçbir Ring 0 (kernel) süreci flaş belleğe yazamaz38.

| Register Adı | Konumu | Güvenli Değeri | Güvenlik Fonksiyonu |
| :---- | :---- | :---- | :---- |
| **BIOSWE** | BIOS Control Register (Offset 0xDC)42 | 0 (Disabled)38 | BIOS bölgesine doğrudan yazma iznini kapatır38. |
| **BLE** | BIOS Control Register (Offset 0xDC)42 | 1 (Enabled)38 | BIOSWE biti tetiklendiğinde zorunlu SMI üretir41. |
| **SMM\_BWP** | BIOS Control Register (Offset 0xDC)42 | 1 (Enabled)38 | BIOS yazma yetkisini sadece SMM kodlarına kilitler38. |
| **FLOCKDN** | HSFS Register (SPIBAR \+ 0x04)42 | 1 (Locked)42 | SPI Protected Range kaydedicilerinin değiştirilmesini engeller42. |

### **Chipsec ile SPI ve BIOS Yazma Koruması Doğrulama Operasyonları**

Chipsec, kurumsal sistemlerdeki bellenim açıklarını tespit etmek için kullanılan endüstri standardı bir güvenlik değerlendirme aracıdır38. Bir SOC analisti veya çözüm mimarı, sistemlerin bellenim seviyesindeki kilit mekanizmalarını doğrulamak için Chipsec modüllerini kullanmalıdır38.  
Sistem belleniminin yazma koruması durumunu sorgulamak için aşağıdaki komut koşturulur40:

Bash  
\# BIOS Bölgesi Yazma Koruması Analizi  
python chipsec\_main.py \-m common.bios\_wp

Kurumsal düzeyde güvenli yapılandırılmış bir sistemdeki çıktı analizi şu şekildedir:

## **\[x\]\[ \======================================================================= \[x\]\[ Module: BIOS Region Write Protection \[x\]\[ \======================================================================= \[*\] BC \= 0x0000002A \<\< BIOS Control Register (b:d.f 00:31.0 \+ 0xDC) \[05\] SMM\_BWP \= 1 \<\< SMM BIOS Write Protection is enabled \[04\] TSS \= 0 \<\< Top Swap Status \[01\] BLE \= 1 \<\< BIOS Lock Enable is set and locked \[00\] BIOSWE \= 0 \<\< BIOS Write Enable is disabled \[+\] BIOS region write protection is enabled (writes restricted to SMM) \[*\] BIOS Region: Base \= 0x00500000, Limit \= 0x00FFFFFF SPI Protected Ranges**

## **PRx (offset) | Value | Base | Limit | WP? | RP?**

PR0 (74) | 8FFF0F40 | 00F40000 | 00FFF000 | 1 | 0 PR1 (78) | 8EDF0EB1 | 00EB1000 | 00EDF000 | 1 | 0 \[+\] PASSED: BIOS is write protected and SPI Protected Ranges are locked.  
Eğer çıktıdaki SMM\_BWP değeri 0 ise veya PR (Protected Range) kaydedicilerinde WP? (Write Protection) kolonu 0 olarak gözüküyorsa, bu durum sistemin kernel seviyesine sızmış bir saldırgan tarafından kalıcı olarak enfekte edilebileceğini gösterir ve test durumu FAILED olarak raporlanır37.  
Fiziksel olarak SPI flaş bellek bölümlerini ve erişim izinlerini detaylandırmak için ise şu yardımcı programlar koşturulmalıdır38:

Bash  
\# SPI Flaş Bölgeleri Erişim Hakları Analizi  
python chipsec\_util.py spi info

\# Flaş Descriptor (FD) bölgesinin dökümünün alınması ve izinlerin tespiti  
python chipsec\_util.py spi dump fd.bin  
python chipsec\_main.py \-m common.spi\_access

## **SOC İzleme, Log Analitiği ve Olay Müdahale Operasyonları**

Bellenim seviyesindeki bir sömürünün tespiti, doğrudan işletim sistemi olay günlükleri ve ana bilgisayar tabanlı izleme araçları vasıtasıyla gerçekleştirilmelidir12. Bellenim manipüle edildiğinde veya zafiyet sömürüldüğünde, alt katmandaki anomaliler üst katmandaki işletim sistemi loglarına yansır31.

### **Windows Olay Günlükleri Analizi**

Sistem önyükleme aşamasındaki güvenli önyükleme hataları, SBAT (Secure Boot Advanced Targeting) güncellemeleri ve TPM bütünlük sorunları Windows üzerinde belirli olay kimlikleri (Event ID) ile kayıt altına alınır44:

* **Event ID 153 (Microsoft-Windows-Kernel-Boot):** Sanallaştırma Tabanlı Güvenliğin (VBS) durumunu gösterir46. Değerin 0 olması, VBS politikalarının devre dışı kaldığını gösterir ve BlackLotus benzeri çekirdek düzeyindeki manipülasyonların işareti olabilir46.  
* **Event ID 292 (Microsoft-Windows-Kernel-Boot):** Bellenimde SBAT değerinin güncellenemediğini (Failed to update the SBAT value in FW) belirtir45. Zafiyetli eski önyükleyicilerin yüklenmeye çalışıldığı downgrade saldırılarını gösteren yüksek öncelikli bir alarmdır45.  
* **Event ID 154 / 155 (Microsoft-Windows-Kernel-Boot):** MS16-140 güncellemesi sonrasında güvenli önyükleme ilkelerinin geri alınma durumunu raporlar; 154 gelişmiş korumayı, 155 ise temel korumayı ifade eder44.  
* **Event ID 812 (Microsoft-Windows-BitLocker-API):** "BitLocker, UEFI SecureBoot değişkeni okunamadığı için bütünlük doğrulaması amacıyla Güvenli Önyükleme özelliğini kullanamıyor" hatasıdır48. Bu log, önyükleme zincirinin (PCR 7 değerlerinin) bozulduğunu ve disk şifreleme anahtarlarının tehlikede olduğunu gösteren en net göstergelerden biridir48.  
* **Event ID 24620 (BitLocker-Driver):** BitLocker sürücüsünün bir diskin şifreleme bilgilerini okuyamadığını belirtir50. Meşru durumlarda harici disk takıldığında da tetiklenebilse de, sistem sürücüsü (C:) için tetiklenmesi durumunda bir bootkit saldırısına işaret edebilir27.

| Kaynak Kanalı | Olay Kimliği (Event ID) | Önem Derecesi | SOC Müdahale Anlamı |
| :---- | :---- | :---- | :---- |
| **Kernel-Boot** | 153 \[cite: 46, 47\] | Bilgi / Uyarı47 | Sanallaştırma Tabanlı Güvenliğin (VBS) kapalı olduğunu veya kapatıldığını gösterir46. |
| **Kernel-Boot** | 292 \[cite: 45\] | Yüksek (Error)45 | SBAT değişkenlerinin güncellenemediğini ve eski sürüme düşürme girişimi olduğunu gösterir45. |
| **BitLocker-API** | 812 \[cite: 48\] | Kritik (Critical)48 | UEFI Secure Boot değişkenlerinin korumasının aşıldığını veya okunamadığını gösterir48. |
| **BitLocker-Driver** | 24620 \[cite: 50\] | Orta / Yüksek51 | Disk şifreleme bütünlüğünün sarsıldığını veya yetkisiz erişim denendiğini belirtir27. |

### **Wazuh ile UEFI Değişkenleri ve ESP Bütünlüğü İzleme**

Açık kaynaklı XDR ve SIEM platformu olan Wazuh, uç noktalardan topladığı envanter ve olay verileri sayesinde bellenim anomalilerini merkezi olarak izleyebilir53. Wazuh Syscollector modülü, sistemdeki donanım ve bellenim özelliklerini otomatik olarak toplar53.  
Kurumsal bir mimaride, UEFI Secure Boot durumunu ve ESP (EFI System Partition) içerisindeki dosya tahrifatlarını izlemek için aşağıdaki Wazuh konfigürasyonları uygulanmalıdır.  
/var/ossec/etc/shared/default/agent.conf içerisine eklenecek sistem izleme yapılandırması55:

XML  
\<agent\_config\>  
  \<\!-- Sistem Envanteri ve Donanım Analizi \--\>  
  \<syscollector\>  
    \<interval\>1h\</interval\>  
    \<scan\_on\_start\>yes\</scan\_on\_start\>  
    \<hardware\>yes\</hardware\>  
    \<os\>yes\</os\>  
    \<packages\>yes\</packages\>  
  \</syscollector\>

  \<\!-- EFI Bölümü Dosya Bütünlük İzleme (FIM) \--\>  
  \<syscheck\>  
    \<disabled\>no\</disabled\>  
    \<frequency\>43200\</frequency\> \<\!-- 12 saatte bir tam tarama \--\>  
    \<scan\_on\_start\>yes\</scan\_on\_start\>  
      
    \<\!-- Windows için EFI Bölümü İzleme \--\>  
    \<directories realtime\="yes" check\_all\="yes"\>C:\\Windows\\Boot\\EFI\</directories\>  
      
    \<\!-- Linux için mount edilmiş EFI Bölümü İzleme \--\>  
    \<directories realtime\="yes" check\_all\="yes"\>/boot/efi\</directories\>  
      
    \<\!-- Kritik Güvenlik Değişkenlerinin İndekslerini İzleme \--\>  
    \<ignore type\="sregex"\>.log$\</ignore\>  
  \</syscheck\>  
\</agent\_config\>

Uç noktalardan gelen olayları değerlendirmek ve Secure Boot bypass girişimlerini (Event ID 812\) yakalamak için Wazuh yöneticisi (manager) tarafında tanımlanması gereken özel kural seti şu şekildedir:  
/var/ossec/etc/rules/local\_rules.xml içerisine eklenecek SOC tespit kuralı56:

XML  
\<group name\="firmware,security\_compliance,"\>  
  \<\!-- BitLocker Secure Boot Hata Tespiti (Event ID 812\) \--\>  
  \<rule id\="100150" level\="12"\>  
    \<if\_sid\>60000\</if\_sid\> \<\!-- Genel Windows Olay Kimliği üst kuralı \--\>  
    \<field name\="win.system.eventID"\>^812$\</field\>  
    \<field name\="win.system.providerName"\>^Microsoft-Windows-BitLocker-API$\</field\>  
    \<description\>Kritik Hata: BitLocker, Secure Boot değişkenlerini okuyamıyor. Potansiyel UEFI Bootkit veya Baton Drop Saldırı Girişimi\!\</description\>  
    \<mitre\>  
      \<id\>T1542.003\</id\> \<\!-- Pre-OS Boot: Bootkit \--\>  
    \</mitre\>  
  \</rule\>

  \<\!-- UEFI SBAT Güncelleme Hatası (Event ID 292\) \--\>  
  \<rule id\="100151" level\="10"\>  
    \<if\_sid\>60000\</if\_sid\>  
    \<field name\="win.system.eventID"\>^292$\</field\>  
    \<field name\="win.system.providerName"\>^Microsoft-Windows-Kernel-Boot$\</field\>  
    \<description\>Sistem Uyarısı: Bellenim seviyesinde SBAT güncelleme hatası. Eski sürüme düşürme (Downgrade) saldırısı şüphesi.\</description\>  
    \<mitre\>  
      \<id\>T1542.001\</id\> \<\!-- System Firmware \--\>  
    \</mitre\>  
  \</rule\>  
\</group\>

## **Ulusal ve Uluslararası Mevzuat Uyumlaştırma Süreçleri**

Kurumsal seviyedeki donanım ve bellenim güvenliği yapılandırmaları, sadece teknik bir gereksinim değil, aynı zamanda uluslararası standartlar ve yerel kanunlar çerçevesinde yasal bir zorunluluktur57.

### **Uluslararası Standartlar: NIST SP 800-193 ve SP 800-155**

* **NIST SP 800-193 (Platform Firmware Resiliency Guidelines):** Kurumsal cihazların (istemci, sunucu, ağ cihazları) bellenim seviyesindeki siber direnç (resiliency) kriterlerini belirleyen ana kılavuzdur58. Standart, "Protect-Detect-Recover" (Koru-Tespit Et-Kurtar) üçlü sacayağı üzerine kuruludur15. Bellenim güncellemelerinin sadece imza doğrulamasıyla yapılması (Koru), her açılışta bellenim bütünlüğünün kontrol edilmesi (Tespit Et) ve bir manipülasyon anında insan müdahalesi olmadan doğrulanmış yedek imajdan sistemin geri yüklenmesi (Kurtar) zorunluluğunu getirir1. Bu kapsamda platformlar koruma (Protected), kurtarılabilirlik (Recoverable) ve dirençlilik (Resilient) durumlarına göre sertifikalandırılmalıdır10.  
* **NIST SP 800-155 (BIOS Integrity Measurement Guidelines):** Sistemlerin önyükleme ölçümlerini (Measured Boot) güvenli bir şekilde gerçekleştirmesi, depolaması ve bu ölçümleri merkezi bir Ölçüm Değerlendirme Otoritesine (MAA) raporlaması için gereken mimariyi tanımlar7. Bu rehber, Zero Trust ve Ağ Erişim Kontrolü (NAC) sistemlerinin cihaz bütünlüğüne göre karar vermesini sağlar7.

### **Türkiye Yasal Mevzuatı ve Düzenleyici Kurumların Şartları**

Türkiye Cumhuriyeti sınırları içerisindeki kurumsal yapılarda donanım ve bellenim seviyesinde uyulması gereken zorunlu yasal mevzuatlar şu şekildedir:

* **Cumhurbaşkanlığı Dijital Dönüşüm Ofisi Bilgi ve İletişim Güvenliği Rehberi:** Rehberin "Taşınabilir Cihaz ve Donanım Güvenliği" ile "Sistem Güvenliği" başlıkları altında, kurumsal düzeydeki tüm cihazlarda "Güvenli Önyükleme (Secure Boot)" özelliğinin zorunlu olarak aktif edilmesi (Tedbir Seviyesi 3\) amirdir57. Ayrıca bellenim güncellemelerinin yalnızca dijital imza kontrolü yapan güvenilir kanallar üzerinden gerçekleştirilmesi zorunlu kılınmıştır57.  
* **6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK):** KVKK teknik tedbirler kılavuzunda yer alan "Veri Güvenliğinin Sağlanması" yükümlülüğü, hassas kişisel verileri barındıran tüm kurumsal dizüstü ve taşınabilir cihazların disk şifreleme (BitLocker, LUKS) ile korunmasını gerektirir62. Disk şifreleme anahtarlarının fiziksel olarak çalınmaya karşı korunması ise yalnızca TPM 2.0 entegrasyonu ile sağlanabilmektedir21.  
* **BDDK Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik:** Bankacılık sektöründe kullanılan tüm masaüstü, dizüstü ve sunucu cihazlarının disk bütünlüğünün donanımsal şifreleme ile korunması zorunludur63. Ayrıca bankaların müşterilerine sunduğu mobil bankacılık uygulamalarında, hassas anahtarların (şifreleme gizli anahtarları) cihaz üzerindeki izole donanımsal kriptografik birimlerde (TPM, Secure Enclave, Android Strong Box, iOS Strong Box) saklanması ve bu anahtarların taklit edilemez olması şart koşulmuştur64. Güvenli donanım modüllerinin (HSM) kullanımı zorunlu olup, bu birimlerde saklanan gizli anahtarlara erişim için kullanılacak olan PIN gibi hassas doğrulama unsurlarının yerel cihazda değil, banka sistemlerinde çevrimiçi (online) doğrulanması yasal bir zorunluluktur64.

## **Sonuç ve Kurumsal Çözüm Mimarisi Önerileri**

Kurumsal "Savunma Derinliği" stratejisinde donanım ve bellenim güvenliği, zincirin en kritik halkasını oluşturmaktadır. Yazılım katmanında ne kadar güçlü önlemler alınırsa alınsın, bellenim seviyesindeki bir sızıntı tüm altyapının kontrolünün kaybedilmesine yol açmaktadır2. Fortune 500 ölçeğindeki bir yapıda bellenim ve donanım güvenliğini sağlamak amacıyla şu mimari adımların atılması önerilmektedir:

1. **Sıfır Güven (Zero Trust) Cihaz Kanıtlaması:** Ağ erişim denetimlerinde (NAC) ve bulut kimlik doğrulama süreçlerinde (Azure/Entra Conditional Access) sadece kullanıcı kimliği değil, TPM 2.0 üzerinden cihazın Measured Boot özetleri doğrulanarak cihaz sağlığı sorgulanmalıdır12.  
2. **Sıkılaştırılmış BIOS Konfigürasyonu:** Tüm kurumsal bilgisayarlarda UEFI Secure Boot varsayılan olarak aktif edilmeli, BIOS arayüzleri güçlü yönetici parolalarıyla kilitlenmeli ve Chipsec analizleri ile SMM\_BWP ve BLE bitlerinin aktifliği denetlenmelidir38.  
3. **Bellenim Güncelleme Yönetimi:** BIOS ve bellenim güncellemeleri, tıpkı işletim sistemi yamaları gibi merkezi bir sistem üzerinden takip edilmeli, üretici tarafından imzalanmamış güncellemelerin donanım seviyesinde reddedilmesi sağlanmalıdır1.  
4. **SOC Seviyesinde İzleme:** SOC ekipleri, uç noktalardan gelen Windows Kernel-Boot olaylarını ve EFI sistem bölümündeki (ESP) dosya değişikliklerini SIEM/XDR entegrasyonları vasıtasıyla gerçek zamanlı olarak izlemelidir31.

#### **Alıntılanan çalışmalar**

1. NIST SP 800-193, Platform Resiliency Guidelines, [https://csrc.nist.gov/CSRC/media/Presentations/Draft-NIST-SP-800-193-Platform-Firmware-Resiliency/images-media/Day\_2\_AM\_1\_Draft\_NIST\_SP\_800-193\_Regenscheid.pdf](https://csrc.nist.gov/CSRC/media/Presentations/Draft-NIST-SP-800-193-Platform-Firmware-Resiliency/images-media/Day_2_AM_1_Draft_NIST_SP_800-193_Regenscheid.pdf)  
2. Peacock: UEFI Firmware Runtime Observability Layer for Detection and Response \- arXiv, [https://arxiv.org/html/2601.07402v1](https://arxiv.org/html/2601.07402v1)  
3. Enhanced Threat Detection: Bootloaders, Bootkits, and Secure Boot \- Eclypsium, [https://eclypsium.com/blog/threat-detection-bootloaders-bootkits-secureboot/](https://eclypsium.com/blog/threat-detection-bootloaders-bootkits-secureboot/)  
4. verified-boot/verified\_boot\_main.md at master \- GitHub, [https://github.com/3mdeb/verified-boot/blob/master/verified\_boot\_main.md](https://github.com/3mdeb/verified-boot/blob/master/verified_boot_main.md)  
5. System Firmware: The Emerging Malware Battlefront | NIST CSRC, [https://csrc.nist.gov/CSRC/media/Presentations/System-Firmware-The-Emerging-Malware-Battlefront/images-media/day1\_trusted-computing\_100-150.pdf](https://csrc.nist.gov/CSRC/media/Presentations/System-Firmware-The-Emerging-Malware-Battlefront/images-media/day1_trusted-computing_100-150.pdf)  
6. Secure Boot Explained. Securing a device's firmware isn't… | by ijlal | Medium, [https://medium.com/@sekyourityblog/secure-boot-explained-every-system-boot-is-a-negotiation-of-trust-be32fb023439](https://medium.com/@sekyourityblog/secure-boot-explained-every-system-boot-is-a-negotiation-of-trust-be32fb023439)  
7. Basic Input/Output System (BIOS) Security \- Andrew \- NIST CSRC, [https://csrc.nist.gov/csrc/media/projects/forum/documents/2012/fcsm\_june2012\_regenscheid.pdf](https://csrc.nist.gov/csrc/media/projects/forum/documents/2012/fcsm_june2012_regenscheid.pdf)  
8. Trusted Platform Module (TPM) and its Uses in Windows Operating System \- Cyber Raiden, [https://cyberraiden.wordpress.com/2025/03/28/trusted-platform-module-tpm-and-its-uses-in-windows-operating-system/](https://cyberraiden.wordpress.com/2025/03/28/trusted-platform-module-tpm-and-its-uses-in-windows-operating-system/)  
9. TPM on Embedded Systems: Pitfalls and Caveats \- sigma star, [https://sigma-star.at/blog/2026/01/tpm-on-embedded-systems-pitfalls-and-caveats/](https://sigma-star.at/blog/2026/01/tpm-on-embedded-systems-pitfalls-and-caveats/)  
10. NIST requirements | Fundamentals \- Samsung Knox Documentation, [https://docs.samsungknox.com/admin/fundamentals/whitepaper/samsung-knox-for-pc/nist-requirements/](https://docs.samsungknox.com/admin/fundamentals/whitepaper/samsung-knox-for-pc/nist-requirements/)  
11. American Megatrends Announces New Solution Compatible with NIST SP 800-155 'BIOS Integrity Measurement Guidelines' for Aptio V UEFI Firmware \- PR Newswire, [https://www.prnewswire.com/news-releases/american-megatrends-announces-new-solution-compatible-with-nist-sp-800-155-bios-integrity-measurement-guidelines-for-aptio-v-uefi-firmware-300107720.html](https://www.prnewswire.com/news-releases/american-megatrends-announces-new-solution-compatible-with-nist-sp-800-155-bios-integrity-measurement-guidelines-for-aptio-v-uefi-firmware-300107720.html)  
12. Understanding TPM Attestation \- ITInnovationStation, [https://itinnovationstation.com/2025/10/29/understanding-tpm-attestation/](https://itinnovationstation.com/2025/10/29/understanding-tpm-attestation/)  
13. What is Device Attestation? Secure Access Explained, [https://blog.scalefusion.com/what-is-device-attestation/](https://blog.scalefusion.com/what-is-device-attestation/)  
14. Technical Articles \- White Paper: NIST SP 800-193 Resiliency \- Winbond, [https://www.winbond.com/hq/support/online-learning/articles-item/NIST-SP800-193-Resiliency?\_\_locale=en](https://www.winbond.com/hq/support/online-learning/articles-item/NIST-SP800-193-Resiliency?__locale=en)  
15. Firmware attacks escalate \- platform firmware resiliency becomes the critical line of defense, [https://www.digitimes.com/news/a20250826PR201/bmc-cybersecurity-winbond.html\&chid=9](https://www.digitimes.com/news/a20250826PR201/bmc-cybersecurity-winbond.html&chid=9)  
16. HP Sure Start \- WHITEPAPER, [https://h20195.www2.hp.com/v2/getpdf.aspx/4AA7-6645ENW.pdf](https://h20195.www2.hp.com/v2/getpdf.aspx/4AA7-6645ENW.pdf)  
17. How UEFI Secure Boot Works in U-Boot | Raymond Mao, [https://raymo200915.github.io/2022/12/20/How-UEFI-Secure-Boot-works.html](https://raymo200915.github.io/2022/12/20/How-UEFI-Secure-Boot-works.html)  
18. Understand PCR banks on TPM 2.0 devices \- Microsoft Learn, [https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/switch-pcr-banks-on-tpm-2-0-devices](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/switch-pcr-banks-on-tpm-2-0-devices)  
19. UAPI.7 Linux TPM PCR Registry | UAPI Group Specifications, [https://uapi-group.org/specifications/specs/linux\_tpm\_pcr\_registry/](https://uapi-group.org/specifications/specs/linux_tpm_pcr_registry/)  
20. SP 800-155, BIOS Integrity Measurement Guidelines | CSRC, [https://csrc.nist.gov/pubs/sp/800/155/ipd](https://csrc.nist.gov/pubs/sp/800/155/ipd)  
21. Leveraging Trusted Platform Modules for Hardware‑Rooted Security and Robust Device Encryption, [https://ijeret.org/index.php/ijeret/article/download/450/429](https://ijeret.org/index.php/ijeret/article/download/450/429)  
22. Control the health of Windows devices | Microsoft Learn, [https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/protect-high-value-assets-by-controlling-the-health-of-windows-10-based-devices](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/protect-high-value-assets-by-controlling-the-health-of-windows-10-based-devices)  
23. Trusted Platform Module Technology Overview \- Microsoft Learn, [https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/trusted-platform-module-overview](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/trusted-platform-module-overview)  
24. EVE-OS Virtual TPM \- ZEDEDA Help Center, [https://help.zededa.com/hc/en-us/articles/41090636354587-EVE-OS-Virtual-TPM](https://help.zededa.com/hc/en-us/articles/41090636354587-EVE-OS-Virtual-TPM)  
25. GPS: Configure TPM platform validation profile for native UEFI firmware configurations \- Group Policy Search, [https://gpsearch.azurewebsites.net/default.aspx?policyid=8151\&lang=en-US](https://gpsearch.azurewebsites.net/default.aspx?policyid=8151&lang=en-US)  
26. TPM PCR Index Security Implications \- ZEDEDA Help Center, [https://help.zededa.com/hc/en-us/articles/43295940828827-TPM-PCR-Index-Security-Implications](https://help.zededa.com/hc/en-us/articles/43295940828827-TPM-PCR-Index-Security-Implications)  
27. BlackLotus Mitigation Guide, [https://media.defense.gov/2023/Jun/22/2003245723/-1/-1/0/CSI\_BlackLotus\_Mitigation\_Guide.PDF](https://media.defense.gov/2023/Jun/22/2003245723/-1/-1/0/CSI_BlackLotus_Mitigation_Guide.PDF)  
28. The Certificate Nobody Checked \- DEV Community, [https://dev.to/isms-core-adm/the-certificate-nobody-checked-145c](https://dev.to/isms-core-adm/the-certificate-nobody-checked-145c)  
29. A 15-Year Shield is Being Renewed: A Deep Technical Dive into the Secure Boot Certificate 2026 Problem \- note, [https://note.com/snake\_dragon/n/n425700572bdb?hl=en](https://note.com/snake_dragon/n/n425700572bdb?hl=en)  
30. BlackLotus malware bypasses Windows Secure Boot \- Hexnode, [https://www.hexnode.com/blogs/blacklotus-malware-bypasses-windows-secure-boot-tips-to-maximize-security/](https://www.hexnode.com/blogs/blacklotus-malware-bypasses-windows-secure-boot-tips-to-maximize-security/)  
31. Guidance for investigating attacks using CVE-2022-21894: The BlackLotus campaign | Microsoft Security Blog, [https://www.microsoft.com/en-us/security/blog/2023/04/11/guidance-for-investigating-attacks-using-cve-2022-21894-the-blacklotus-campaign/](https://www.microsoft.com/en-us/security/blog/2023/04/11/guidance-for-investigating-attacks-using-cve-2022-21894-the-blacklotus-campaign/)  
32. UEFI Bootkit Hunting: In-Depth Search for Unique Code Behavior \- Binarly, [https://www.binarly.io/blog/uefi-bootkit-hunting-in-depth-search-for-unique-code-behavior](https://www.binarly.io/blog/uefi-bootkit-hunting-in-depth-search-for-unique-code-behavior)  
33. Emulating & Exploiting UEFI: Unveiling Vulnerabilities in Firmware Security \- NetSPI, [https://www.netspi.com/blog/technical-blog/hardware-and-embedded-systems-penetration-testing/emulating-and-exploiting-uefi/](https://www.netspi.com/blog/technical-blog/hardware-and-embedded-systems-penetration-testing/emulating-and-exploiting-uefi/)  
34. LogoFAIL: Widespread firmware vulnerabilities unveiled \- Quorum Cyber, [https://www.quorumcyber.com/threat-intelligence/logofail-widespread-firmware-vulnerabilities-unveiled-in-major-device-brands/](https://www.quorumcyber.com/threat-intelligence/logofail-widespread-firmware-vulnerabilities-unveiled-in-major-device-brands/)  
35. Understand and Ward off the Logofail Exploit With These Common Security Practices, [https://www.pugetsystems.com/support/guides/logofail-guide/](https://www.pugetsystems.com/support/guides/logofail-guide/)  
36. LogoFAIL Attack Exploits UEFI Logos, Posing Risks to Enterprise and Consumer Devices, [https://petri.com/logofail-attack-consumer-enterprise-devices/](https://petri.com/logofail-attack-consumer-enterprise-devices/)  
37. Discovery of new UEFI rootkit exposes an ugly truth: The attacks are invisible to us \- Reddit, [https://www.reddit.com/r/hardware/comments/w8lual/discovery\_of\_new\_uefi\_rootkit\_exposes\_an\_ugly/](https://www.reddit.com/r/hardware/comments/w8lual/discovery_of_new_uefi_rootkit_exposes_an_ugly/)  
38. CHIPSEC: Platform Security Assessment Framework \- Black Hat, [https://blackhat.com/docs/us-14/materials/arsenal/us-14-Bulygin-CHIPSEC-Slides.pdf](https://blackhat.com/docs/us-14/materials/arsenal/us-14-Bulygin-CHIPSEC-Slides.pdf)  
39. Firmware Security Realizations \- Part 3 \- SPI Write Protections \- Eclypsium, [https://eclypsium.com/blog/firmware-security-realizations-part-3-spi-write-protections/](https://eclypsium.com/blog/firmware-security-realizations-part-3-spi-write-protections/)  
40. 1 About security assessment framework “CHIPSEC” FFRI,Inc. Monthly Research 2016.7, [https://www.ffri.jp/assets/files/monthly\_research/MR201607\_About\_security\_assessment\_framework\_CHIPSEC\_ENG.pdf](https://www.ffri.jp/assets/files/monthly_research/MR201607_About_security_assessment_framework_CHIPSEC_ENG.pdf)  
41. chipsec.modules.common.bios\_wp module \- CHIPSEC documentation, [https://chipsec.github.io/modules/chipsec.modules.common.bios\_wp.html](https://chipsec.github.io/modules/chipsec.modules.common.bios_wp.html)  
42. Ivy Bridge Lenovo ThinkPad Internal Flashing \- the coreboot documentation, [https://doc.coreboot.org/mainboard/lenovo/ivb\_internal\_flashing.html](https://doc.coreboot.org/mainboard/lenovo/ivb_internal_flashing.html)  
43. UEFI Test Tools for Linux Developers, [https://uefi.org/sites/default/files/resources/S3\_LinuxTestTools\_UEFILinuxCon\_FINAL\_Aug.%2021.pdf](https://uefi.org/sites/default/files/resources/S3_LinuxTestTools_UEFILinuxCon_FINAL_Aug.%2021.pdf)  
44. Microsoft Security Bulletin MS16-140 \- Important, [https://learn.microsoft.com/en-us/security-updates/securitybulletins/2016/ms16-140](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2016/ms16-140)  
45. Weird boot issue with my laptop \- Microsoft Q\&A, [https://learn.microsoft.com/en-us/answers/questions/3992297/weird-boot-issue-with-my-laptop](https://learn.microsoft.com/en-us/answers/questions/3992297/weird-boot-issue-with-my-laptop)  
46. Computer Hangs on Restart During Windows 10 Updates \- Microsoft Learn, [https://learn.microsoft.com/en-us/answers/questions/3253849/computer-hangs-on-restart-during-windows-10-update](https://learn.microsoft.com/en-us/answers/questions/3253849/computer-hangs-on-restart-during-windows-10-update)  
47. Computer keeps randomly restarting without BSOD \- Microsoft Q\&A, [https://learn.microsoft.com/en-us/answers/questions/4239997/computer-keeps-randomly-restarting-without-bsod](https://learn.microsoft.com/en-us/answers/questions/4239997/computer-keeps-randomly-restarting-without-bsod)  
48. Bitlocker Event ID 812 \- Can't encrypt computers when running from Logon Computer GPO (PS script) \- Microsoft Learn, [https://learn.microsoft.com/en-us/answers/questions/1164072/bitlocker-event-id-812-cant-encrypt-computers-when](https://learn.microsoft.com/en-us/answers/questions/1164072/bitlocker-event-id-812-cant-encrypt-computers-when)  
49. BitLocker problem | Event 812 \- Microsoft Q\&A, [https://learn.microsoft.com/en-us/answers/questions/1417805/bitlocker-problem-event-812](https://learn.microsoft.com/en-us/answers/questions/1417805/bitlocker-problem-event-812)  
50. Event 24620 BitLocker Error | PC Review, [https://www.pcreview.co.uk/threads/event-24620-bitlocker-error.3420864/](https://www.pcreview.co.uk/threads/event-24620-bitlocker-error.3420864/)  
51. Bitlocker-Drive Error \- Microsoft Q\&A, [https://learn.microsoft.com/en-us/answers/questions/2477055/bitlocker-drive-error](https://learn.microsoft.com/en-us/answers/questions/2477055/bitlocker-drive-error)  
52. Bitlocker error when inserting any USB device, error event ID 24620, [https://forums.tomshardware.com/threads/bitlocker-error-when-inserting-any-usb-device-error-event-id-24620.2684279/](https://forums.tomshardware.com/threads/bitlocker-error-when-inserting-any-usb-device-error-event-id-24620.2684279/)  
53. How it works \- Vulnerability detection · Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/vulnerability-detection/how-it-works.html](https://documentation.wazuh.com/current/user-manual/capabilities/vulnerability-detection/how-it-works.html)  
54. Viewing system inventory data \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/system-inventory/viewing-system-inventory-data.html](https://documentation.wazuh.com/current/user-manual/capabilities/system-inventory/viewing-system-inventory-data.html)  
55. Configuration \- Vulnerability detection \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/vulnerability-detection/configuring-scans.html](https://documentation.wazuh.com/current/user-manual/capabilities/vulnerability-detection/configuring-scans.html)  
56. Monitoring Logs in Wazuh \- SOC Lab Guide \- Sarath G, [https://sarathg.me/wazuh.html](https://sarathg.me/wazuh.html)  
57. Sürüm No: 2021 / 1.0, [https://bidb.ozal.edu.tr/subdomain\_files/bidb.ozal.edu.tr/files/1/ISO27001%20-%20BGRehberEslestirmeTablosu%20(1).pdf](https://bidb.ozal.edu.tr/subdomain_files/bidb.ozal.edu.tr/files/1/ISO27001%20-%20BGRehberEslestirmeTablosu%20\(1\).pdf)  
58. SP 800-193, Platform Firmware Resiliency Guidelines \- NIST CSRC, [https://csrc.nist.gov/pubs/sp/800/193/final](https://csrc.nist.gov/pubs/sp/800/193/final)  
59. NIST SP 800-193 (Draft), Platform Firmware Resiliency Guidelines \- NIST CSRC, [https://csrc.nist.gov/csrc/media/publications/sp/800-193/draft/documents/sp800-193-draft.pdf](https://csrc.nist.gov/csrc/media/publications/sp/800-193/draft/documents/sp800-193-draft.pdf)  
60. Platform Firmware Resiliency Guidelines \- NIST Technical Series Publications, [https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-193.pdf](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-193.pdf)  
61. NIST SP 800-155, BIOS Integrity Measurement Guidelines (Draft) \- CSRC, [https://csrc.nist.rip/publications/drafts/800-155/draft-SP800-155\_Dec2011.pdf](https://csrc.nist.rip/publications/drafts/800-155/draft-SP800-155_Dec2011.pdf)  
62. Bilgi ve İletişim Güvenliği Rehberi, [https://cdn.siberguvenlik.gov.tr/public/docs/bg\_rehber.pdf](https://cdn.siberguvenlik.gov.tr/public/docs/bg_rehber.pdf)  
63. Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik, [https://www.lexpera.com.tr/mevzuat/yonetmelikler/bankalarin-bilgi-sistemleri-ve-elektronik-bankacilik-hizmetleri-hakkinda-yonetmelik/1](https://www.lexpera.com.tr/mevzuat/yonetmelikler/bankalarin-bilgi-sistemleri-ve-elektronik-bankacilik-hizmetleri-hakkinda-yonetmelik/1)  
64. T.C. BANKACILIK DÜZENLEME VE DENETLEME KURUMU Sayı: 77574904-010.06.02 Konu: Elektronik Bankacılık Hizmetlerinde ve Elektron \- BDDK, [https://www.bddk.org.tr/Mevzuat/DokumanGetir/1171](https://www.bddk.org.tr/Mevzuat/DokumanGetir/1171)  
65. BİLİŞİM VE BİLGİ GÜVENLİĞİ İLERİ TEKNOLOJİLER ARAŞTIRMA MERKEZİ KRİPTO VARLIK HİZMET SAĞLAYICILARIN BİLGİ S \- Tübitak Bilgem, [https://bilgem.tubitak.gov.tr/wp-content/uploads/sites/8/TUBITAK-KVHS-Bilgi-Sistemleri-ve-Teknolojik-Altyapilarina-iliskin-Kriterler\_r1\_2.pdf](https://bilgem.tubitak.gov.tr/wp-content/uploads/sites/8/TUBITAK-KVHS-Bilgi-Sistemleri-ve-Teknolojik-Altyapilarina-iliskin-Kriterler_r1_2.pdf)

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAaCAYAAACO5M0mAAAASklEQVR4XmNgoCVgA2JWJD43EDMi8eEgC4hNoWweIF4IxJIIaQQoB2JfKHtUIQYYVThYFZYCsSeUjVdhEBDrQtkcQFzIANEw0AAAkUIeLwcKv5kAAAAASUVORK5CYII=>