# **Fiziksel ve Mantıksal Güvenlikte Savunma Derinliği: Sosyal Mühendislik, RFID Klonlama Tehditleri ve Gelişmiş SOC Korelasyon Mekanizmaları**

Modern bilgi güvenliği mimarileri kurgulanırken, mantıksal ve ağ seviyesindeki güvenlik önlemleri ne kadar gelişmiş olursa olsun, fiziksel çevre korumasının yetersiz kaldığı senaryolarda tüm altyapının çökeceği gerçeği kabul edilmelidir. Kurumsal veri merkezlerine, sistem odalarına ve Ar-Ge laboratuvarlarına yetkisiz fiziksel erişim sağlayan bir saldırgan, doğrudan "cold boot" saldırıları düzenleyebilir, ağ anahtarlarına fiziksel dinleme cihazları (hardware tap) yerleştirebilir veya yerel ağ üzerinden doğrudan sızma gerçekleştirebilir. Bu nedenle, fiziksel güvenlik ve kimlik doğrulama altyapısı, kurumsal "Savunma Derinliği" (Defense in Depth) stratejisinin ilk ve en kritik katmanını oluşturur. Bu raporda, Red Team operasyonlarında sıkça kullanılan sosyal mühendislik ve fiziksel sızma metodolojileri, RFID tabanlı kart sistemlerindeki kriptografik zafiyetler, bu zafiyetleri giderecek yeni nesil şifreli geçiş kartı mimarileri ve bu süreçlerin Güvenlik Operasyon Merkezi (SOC) bünyesinde SIEM sistemleri ile nasıl izlenip korele edileceği derinlemesine analiz edilmektedir.

## **Fiziksel Sızma ve Sosyal Mühendislik Dinamikleri**

Fiziksel sızma testleri, teknik bariyerleri aşmak yerine insan psikolojisindeki bilişsel önyargıları ve kurumsal süreçlerdeki operasyonel boşlukları hedef alır1. Saldırganların hedef binalara sızmak için kullandığı yöntemler, taktiksel düzeyde son derece planlı ve istihbarat odaklıdır.

### **Sızma Yöntemleri ve Saldırı Dinamikleri**

| Saldırı Vektörü | Temel Hedef ve Psikolojik Tetikleyici | Operasyonel Senaryo ve Gerçekleştirme Biçimi |
| :---- | :---- | :---- |
| **Tailgating** | Sosyal uyum, dikkat dağınıklığı, turnike/kapı mekaniği sınırları. | Saldırgan, elinde ağır kurumsal kargo kolileri veya kahve tepsileri taşıyan bir teslimatçı kılığına girer. Kartını okutup turnikeden geçen personelin hemen arkasından, turnike mekanizmasının kapanma süresi dolmadan (turnike salınım aralığı) içeri sızar. |
| **Piggybacking** | Yardımseverlik, nezaket güdüsü, sosyal baskı2. | Saldırgan, kapı önünde "Kartımı ofiste unuttum", "Geçici kartım aktif edilmemiş" gibi bahaneler üretir. Yetkili personel, nezaket göstererek ve toplumsal normların baskısıyla kendi kartını okutup saldırganın da geçmesine izin verir2. |
| **Pretexting** | Otoriteye itaat, resmiyet algısı, güven oluşturma. | Saldırgan, hedef kuruma ait taşeron temizlik firmasının üniformasını giyer veya binaya denetim amacıyla gelen bir kamu müfettişi/yangın sistemleri teknisyeni kimliğine bürünür. Sahte kimlik kartları ve profesyonel ekipman çantalarıyla resepsiyondaki personeli ikna ederek refakatsiz geçiş hakkı kazanır. |
| **Baiting** | Merak, açgözlülük, yardım etme arzusu3. | Üzerinde "Yönetim Kurulu Maaş Planlaması Q3" veya "Gizli Ar-Ge Şemaları" yazan, içine zararlı yazılım (BadUSB, Rubber Ducky veya Truva atı) gömülmüş şık USB bellekler kurumsal otoparklara, dinlenme alanlarına veya tuvaletlere bırakılır3. |
| **Reverse Social Engineering** | Sorun çözücü güvenilirliği, muhtaçlık ilişkisi. | Saldırgan öncelikle hedef departmandaki bir yazıcının kablosunu çıkararak veya ağ anahtarındaki bir portu geçici olarak devre dışı bırakarak hafif bir teknik sorun yaratır. Kısa bir süre sonra "tesadüfen" oradan geçen bir IT destek elemanı olarak ortaya çıkar, sorunu çözer ve müteakip süreçler için kritik sistemlere refakatsiz erişim izni alır. |

Sosyal mühendislik ve fiziksel sızma testleri gerçekleştirilirken, operasyonun hukuki ve etik sınırlarını belirleyen, yönetim tarafından imzalanmış bir "Angajman Kuralları" (Rules of Engagement \- RoE) belgesinin varlığı zorunludur. RoE olmaksızın yapılan testler, yerel ceza kanunları kapsamında suç teşkil eder ve ciddi hukuki sorumluluklar doğurur.

## **Standartlar ve Yasal Mevzuat Entegrasyonu**

Fiziksel güvenliğin tasarlanması ve işletilmesi süreçleri, hem uluslararası siber güvenlik çerçeveleriyle hem de Türkiye Cumhuriyeti'ndeki yasal düzenlemelerle doğrudan ilişkilidir.

### **Uluslararası Standartlar ve Kontrol Eşleşmeleri**

* **ISO/IEC 27001 Annex A (Kontrol A.11):** Fiziksel ve çevresel güvenlik sınırlarının belirlenmesini, fiziksel giriş kontrollerinin uygulanmasını, ofislerin ve odaların güvenliğini, dış tehditlere karşı fiziksel koruma tasarlanmasını şart koşar4. Tesislerin ve hassas alanların giriş loglarının tutulması ve periyodik olarak incelenmesi bu standardın temel gereksinimlerindendir5.  
* **NIST SP 800-53 Rev. 5 (Physical and Environmental Protection \- PE ailesi):** PE-2 (Fiziksel Erişim Yetkilendirmesi), PE-3 (Fiziksel Erişim Kontrolleri) ve PE-6 (Erişim Günlükleri) kontrollerini tanımlar7. Tesislerin kritik noktalarına yapılan tüm girişlerin doğrulanabilir kimlikler üzerinden kayıt altına alınmasını, yetkisiz geçiş denemelerinin anında alarm üretmesini ve bu verilerin mantıksal ağ loglarıyla ilişkilendirilmesini zorunlu kılar7.  
* **CIS Controls (Kontrol 14):** Güvenlik farkındalığı eğitimi kapsamında personelin sosyal mühendislik, kuyruğa takılma (tailgating) ve fiziksel yemleme (baiting) saldırılarına karşı eğitilmesini, şüpheli fiziksel hareketlerin raporlanması için kurumsal bir süreç tanımlanmasını önerir8.

### **Türkiye'deki Yasal Mevzuat ve Yükümlülükler**

#### **KVKK ve Biyometrik Veri İşleme Sınırları**

Kişisel Verileri Koruma Kurulu’nun **29.04.2026 Tarihli ve 2026/921 Sayılı İlke Kararı** uyarınca, çalışanların mesai takibi (PDKS) amacıyla parmak izi, yüz tanıma, el geometrisi, iris veya retina gibi biyometrik verilerinin işlenmesi, çalışanın **açık rızası alınmış olsa dahi** ölçülülük, gereklilik ve veri minimizasyonu ilkelerine aykırıdır2.  
Biyometrik verilerin geri döndürülemez ve taklit edilemez niteliği nedeniyle, bu yöntemlerin yerine şifreli kart, PIN veya RFID tabanlı kart sistemleri gibi daha az müdahaleci alternatiflerin kullanılması yasal bir zorunluluk haline getirilmiştir2. Biyometrik verilere uzaktan erişim zorunluysa, en az iki kademeli doğrulama (MFA) kullanılmalı, ayrılan personelin yetkileri derhal kaldırılmalı ve geçmiş kapı geçiş logları en az **2 yıl** süreyle saklanmalıdır6.

#### **CCTV (Kamera Kayıt) Muhafaza Süreleri ve İmha Politikaları**

CCTV kamera kayıtlarının muhafaza süresi, KVKK'nın "amaçla sınırlılık" ilkesi kapsamında belirlenmelidir15. Genel kurumsal binalarda CCTV kayıtlarının **15 ila 30 gün** arasında tutulması genel teamül olarak makul kabul edilirken, bu sürenin ardından kayıtların üzerine otomatik olarak yazılması (overwrite) teknik olarak tanımlanmalı ve bu işlem imha politikası belgelerine eklenmelidir15. Bankalar ve finansal kuruluşlar için BDDK/Özel mevzuatlar gereği bu sürelerin daha uzun tutulması zorunlu kılınabilir5.

#### **BDDK/Siber Güvenlik Düzenlemeleri ve Sistem Odası Standartları**

Bankalar ve kritik altyapı sağlayıcıları için sistem odaları ve veri merkezlerinin fiziksel güvenliği hayati önem taşır5. Sistem odalarında yedekli enerji hattının bulunması, sıcaklık, nem ve duman takibinin yapılması, jeneratör ve UPS bakımlarının periyodik olarak raporlanması yasal zorunluluktur17. Sistem odası kapıları yalnızca çift katmanlı doğrulama (kart \+ PIN veya kart \+ yetkili personel refakati) ile açılmalı ve bu kapılara ait tüm erişim olayları saniye hassasiyetinde merkezi bir log sunucusuna iletilmelidir5.

#### **5651 Sayılı Kanun ve Zaman Damgası Entegrasyonu**

Erişim kontrol sistemlerine ait syslog kayıtlarının ve geçiş olaylarının bütünlüğü, olası bir adli soruşturmada delil niteliği taşıması açısından 5651 Sayılı Kanun’un ruhuna uygun olarak zaman damgasıyla imzalanmalıdır. Altyapıdaki tüm PACS kontrol panelleri, kameralar ve SIEM sunucuları, ortak bir NTP (Network Time Protocol) sunucusu üzerinden senkronize edilmeli, logların zaman damgası tutarlılığı garanti altına alınmalıdır.

## **RFID ve Kart Teknolojilerinde Kriptografik Tehditler**

Geçiş kontrol sistemlerinde kullanılan kart teknolojileri, fiziksel güvenliğin temel kimlik doğrulama katmanıdır. Ancak, eski nesil kartlarda kullanılan zayıf tasarımlar, saldırganların bu kartları saniyeler içinde kopyalamasına olanak tanımaktadır.

### **MIFARE Classic ve CRYPTO1 Zafiyet Analizi**

Milyonlarca tesiste kullanılmaya devam eden MIFARE Classic kartlar, tescilli (proprietary) ve gizli tutulan **CRYPTO1** akış şifreleme (stream cipher) algoritmasını kullanır18. Güvenliğini gizlilik esasına (security by obscurity) dayandıran bu algoritma, tersine mühendislik çalışmalarıyla tamamen deşifre edilmiş ve üzerinde ciddi tasarımsal zafiyetler bulunmuştur18.  
CRYPTO1 algoritması, iç durumunu (internal state) güncellemek için 48-bitlik bir Doğrusal Geri Beslemeli Kayma Kaydedicisi (LFSR) kullanır19. Bu LFSR'ın ilkel üreteç polinomu matematiksel olarak şu şekilde tanımlanmıştır:  
![][image1]  
\[cite: 19, 21\]  
Her bir saat çevriminde, LFSR'ın durumu sola kaydırılır ve en sağdaki boş bit, aşağıdaki geri besleme fonksiyonu ![][image2] tarafından hesaplanan değer ile doldurulur:  
![][image3]  
\[cite: 20, 22\]  
LFSR'ın 48-bitlik durumundan seçilen 20 adet tek bit (9. bitten başlayıp 47\. bite kadar giden belirli pozisyonlar), iki katmanlı doğrusal olmayan filtre fonksiyonuna (![][image4]) beslenerek her çevrimde 1 bitlik şifreleme akışı (keystream) üretilir21. Bu filtre yapısı, ilk katmanda iki adet 4-girişli doğrusal olmayan fonksiyon (![][image5] ve ![][image6]) ve ikinci katmanda bir adet 5-girişli doğrusal olmayan fonksiyon (![][image7]) barındırır20:  
![][image8]  
\[cite: 20, 22\]  
Bu kriptografik tasarımda tespit edilen zayıf yönler ve bunlara yönelik geliştirilen saldırı tipleri şu şekildedir:

* **MFCUK (Darkside) Saldırısı:** Kart üzerindeki hiçbir sektör anahtarı (Sektör Key A veya B) bilinmediğinde kullanılır1. CRYPTO1'in Pseudo-Random Number Generator (PRNG) yapısındaki zayıflıklar ve hatalı parite yanıtları (error responses) analiz edilerek, her denemede anahtar akışının belirli bitleri sızdırılır1. Bu sızıntılar birleştirilerek en az bir sektör anahtarı elde edilir1.  
* **MFOC (Nested) Saldırısı:** Kartın en az bir sektörünün anahtarı biliniyorsa (veya fabrika varsayılanı olan 0xFFFFFFFFFFFF gibi anahtarlar geçerliyse) uygulanır1. Bilinen anahtarla başarılı bir şekilde kimlik doğrulama yapıldıktan sonra, diğer sektörlere yönelik şifreli meydan okumalar (nested nonces) tetiklenir1. PRNG'nin öngörülebilir yapısı ve parite bitlerinin yeniden kullanılan anahtar akışıyla şifrelenmesi nedeniyle, saniyeler içinde tüm sektör anahtarları ele geçirilir1.  
* **Hard-nested Saldırısı:** MIFARE Classic EV1 gibi kartlarda PRNG zayıflığı giderilmiş ve sahte rastgele sayı üretimi gerçekten rastgele 32-bitlik ![][image9] değerlerine dayandırılmıştır1. Hard-nested saldırısı, bu iyileştirmeye rağmen protokolün temelinde yer alan parite sızıntılarını hedef alır1. Saldırgan, bilinen tek bir anahtar üzerinden kartla 1600 ila 2200 arasında şifreli oturum başlatarak topladığı veriler üzerinde yoğun matematiksel denklem analizleri yürütür ve en zorlu anahtarları dahi kırabilir1.  
* **Static Nested Saldırısı:** Bazı üreticilerin geliştirdiği uyumlu klon kartlarda yer alan donanımsal arka kapıları (backdoor) hedef alır ve herhangi bir ön koşul olmaksızın tüm anahtarların birkaç dakika içinde deşifre edilmesini sağlar1.

### **Donanımsal Kopyalama Araçlarının Karşılaştırılması**

Saldırganlar, yukarıda açıklanan kriptografik zafiyetleri istismar etmek amacıyla Proxmark3 ve Flipper Zero gibi ticari ve açık kaynaklı donanımları kullanırlar24.

| Özellik / Kriter | Proxmark3 (Professional / RDV4) | Flipper Zero |
| :---- | :---- | :---- |
| **Çalışma Frekansları** | 125 kHz (LF) ve 13.56 MHz (HF)24. | 125 kHz, 13.56 MHz, Sub-GHz, NFC, Infrared, Bluetooth, GPIO. |
| **Kriptografik Kırma Kapasitesi** | Son derece yüksek; donanımsal FPGA mimarisi sayesinde Hard-nested ve Darkside saldırılarını bağımsız yürütebilir1. | Düşük; üzerinde gelişmiş kripto analizleri yapacak FPGA barındırmaz. Yalnızca basit okuma, simülasyon ve bilinen anahtarlarla yazma işlemlerini yapar. |
| **Donanımsal Sınırlamalar** | Proxmark3 Easy modelinin **256K flash** bellekli versiyonları, Hard-nested saldırıları için gerekli kod bloklarını depolayamaz25. Tam işlevsellik için **512K AVR** mikrokontrolcülü modelleri şarttır25. | Sınırlı RFID anten gücü ve kısıtlı işlemci kapasitesi nedeniyle gelişmiş sızma testlerinde tek başına yetersiz kalır. |
| **Anten ve Konumlandırma Hassasiyeti** | Okuma esnasında anten kuplajı (coupling) kritiktir. Yanlış konumlandırmada Auth1 veya kart seçilememe hataları alınır27. hf tune ve hf 14a reader komutları ile voltaj ve sinyal kararlılığı anlık izlenerek en kararlı okuma noktası bulunmalıdır27. | Anten tasarımı kompakt olduğundan kartın cihaza tam olarak sıfırlanması ve doğru açıyla yaklaştırılması gerekir. |

## **Yeni Nesil Şifreli Geçiş Kartı Teknolojileri**

Klonlama risklerini tamamen ortadan kaldırmak için kurumsal yapıların, gizlilik odaklı ve açık standartlara dayalı güçlü kriptografik kart teknolojilerine geçiş yapması elzemdir4.

### **MIFARE DESFire EV2/EV3 ve AuthenticateEV2First**

NXP'nin geliştirdiği MIFARE DESFire EV3, AES-128 şifreleme algoritmasını donanımsal olarak destekleyen ve Common Criteria EAL5+ güvenlik seviyesine sahip modern bir akıllı karttır4. Kart ile okuyucu arasındaki tüm veri alışverişi, "AuthenticateEV2First" karşılıklı kimlik doğrulama (mutual authentication) protokolü ile güvenceye alınır30.

#### **Üç Adımlı Karşılıklı Kimlik Doğrulama (Mutual 3-Pass Authentication) İşlem Adımları**

1. **Oturum Başlatma (APDU Gönderimi):** Okuyucu (PCD), karta (PICC) belirli bir uygulama anahtarı numarasını (örneğin anahtar 4\) kullanarak kimlik doğrulamak istediğini belirten 0x71 komutunu içeren APDU paketini gönderir30:  
   ![][image10]  
   \[cite: 30\]  
2. **Kart Yanıtı (Adım 1 \- RndB Gönderimi):** Kart, 16-baytlık kriptografik olarak güvenli bir rastgele sayı (![][image11]) üretir30. Bu sayıyı, seçilen anahtar ve sıfır değerli başlangıç vektörü (![][image12]) ile AES-CBC-128 modunda şifreleyerek okuyucuya iletir30.  
3. **Okuyucu Doğrulaması (Adım 2 \- RndA ve RndB' Gönderimi):** Okuyucu, gelen şifreli bloku kendi tarafındaki anahtar ile deşifre ederek ![][image11] değerini elde eder30. ![][image11] değerini 1 bayt sola dairesel olarak kaydırarak ![][image13] değerini oluşturur30. Ardından, kendi tarafında 16-baytlık rastgele bir ![][image14] sayısı üretir30. Okuyucu, ![][image14] ile ![][image13] değerlerini ardışık olarak birleştirir (![][image15]), bu 32-baytlık veriyi AES-128-CBC ile şifreler ve 0xAF komutuyla karta gönderir30:  
   ![][image16]  
   \[cite: 30\]  
4. **Kart Doğrulaması (Adım 3 \- RndA' Gönderimi):** Kart, gelen 32-baytlık bloku deşifre eder30. İçindeki ![][image13] değerinin, kendi gönderdiği ![][image11] sayısının sola kaydırılmış hali olduğunu teyit ederek okuyucunun meşruiyetini doğrular4. Ardından, deşifre ettiği ![][image14] değerini 1 bayt sola dairesel kaydırarak ![][image17] oluşturur, bunu şifreler ve okuyucuya gönderir30. Okuyucu bu bloku deşifre edip doğrulayarak kartın meşru olduğunu anlar4. Bu sayede, gizli anahtar hiçbir zaman havaya maruz kalmadan karşılıklı kimlik doğrulama tamamlanır30.

#### **Oturum Anahtarı Türetimi (KDF)**

Kimlik doğrulama bittikten sonra, NIST SP 800-108 standardına uygun olarak Counter Mode ve CMAC (NIST SP 800-38B) yardımıyla geçici oturum anahtarları türetilir30. Bu süreçte kullanılan ![][image18] ve ![][image19] oturum vektörleri şu şekilde inşa edilir30:

* ![][image18] (Bütünlük ve MAC için): Label olarak 0xA55A, Counter 0x0001, Uzunluk 0x0080 (128-bit) ve takiben ![][image14] ile ![][image11]'nin belirli bitlerinin XOR kombinasyonu30.  
* ![][image19] (Şifreleme için): Label olarak 0x5AA5, Counter 0x0001, Uzunluk 0x0080 (128-bit) ve takiben aynı kombinasyon30.

Bu vektörlerin KDF fonksiyonuna beslenmesiyle **SesAuthENCKey** (şifreleme oturum anahtarı) ve **SesAuthMACKey** (bütünlük oturum anahtarı) elde edilir30. Bu anahtarlar, oturum boyunca kullanılacak benzersiz bir **İşlem Tanımlayıcı (TI \- Transaction Identifier)** ve her operasyonda bir artırılan **Komut Sayacı (Command Counter)** ile ilişkilendirilerek replay ve ortadaki adam (MitM) saldırılarını tamamen engeller30.

### **HID SEOS Teknolojisi ve Mimari Avantajları**

HID Global'in geliştirdiği iCLASS SEOS mimarisi, geleneksel donanım odaklı kart tasarımlarını yazılımsal güvenlik katmanlarıyla birleştirir8.

* **Secure Identity Object (SIO):** SEOS, kimlik verilerini kartın silikon mimarisindeki ham sektörlerde saklamak yerine, açık standartlara dayalı (ISO/IEC 14443\) şifrelenmiş ve dijital olarak imzalanmış birer "Güvenli Kimlik Nesnesi" (SIO) içinde barındırır8. Bu soyutlama katmanı, SEOS'un sadece plastik kartlarda değil, akıllı telefonlar (NFC/Bluetooth) ve giyilebilir cihazlarda da aynı yüksek güvenlik standartlarıyla çalışmasına olanak tanır8.  
* **Gizlilik ve İzlenme Koruması (Privacy Mode):** SEOS kartlar, kapı okuyucularıyla iletişim kurarken statik ve izlenebilir bir UID yayınlamazlar8. Her kart okuma seansında, havadan geçen tüm kimlik tanımlayıcıları şifrelenir33. Bu sayede, saldırganların binadaki personeli takip etmesi, geçiş alışkanlıklarını analiz etmesi veya kart izlerini havadan toplaması engellenir8.  
* **TÜV SEAL-5 Standart Uyumluluğu:** Seos 16K gibi gelişmiş varyantlar, bağımsız test kuruluşları tarafından TÜV SEAL-5 sertifikasyonu ile tescillenmiştir35. Bu sertifikasyon, kartların yaşam döngüsü yönetim süreçlerinin, güvenli anahtar dağıtım mekanizmalarının ve donanımsal sızıntı korumalarının en yüksek IT güvenlik seviyesinde olduğunu garanti eder35.

## **Fiziksel Erişim Denetimi ve SOC Entegrasyonu**

Bir fiziksel sızma girişiminin veya klon kart kullanımının gerçek zamanlı tespiti, Fiziksel Erişim Kontrol Sisteminin (PACS) merkezi Güvenlik Operasyon Merkezi (SOC) ve SIEM altyapısına entegre edilmesiyle mümkündür3.

### **PACS Entegrasyonu ve Log Toplama Altyapısı**

PACS kontrol üniteleri ve yönetim sunucuları (Lenel OnGuard vb.), geçiş hareketlerini, kapı açık kalma alarmlarını ve zorlama (duress) kodlarını anlık olarak Syslog protokolü üzerinden dışarı aktarabilir37. Bu logların SIEM'e güvenli iletimi için Wazuh Agent yüklü bir rsyslog sunucusu veya doğrudan Wazuh Manager syslog dinleyicisi konumlandırılır39.

XML  
\<\!-- Wazuh Manager Syslog Listener Yapılandırması (/var/ossec/etc/ossec.conf) \--\>  
\<ossec\_config\>  
  \<remote\>  
    \<connection\>syslog\</connection\>  
    \<port\>514\</port\>  
    \<protocol\>tcp\</protocol\>  
    \<allowed-ips\>192.168.20.10/32\</allowed-ips\> \<\!-- PACS Sunucu IP Adresi \--\>  
    \<local\_ip\>192.168.10.15\</local\_ip\> \<\!-- Wazuh Manager IP Adresi \--\>  
  \</remote\>  
\</ossec\_config\>

Kurumsal yapılarda, PACS yazılımlarından (örneğin Lenel OpenAccess API üzerinden) logları çekip normalize eden aracı servisler (Logstash vb.) kullanılıyorsa, Wazuh Agent'ın bu dosyayı anlık izlemesi için aşağıdaki lokal dosya izleme yapılandırması uygulanmalıdır37:

XML  
\<\!-- Wazuh Agent Yapılandırması (/var/ossec/etc/ossec.conf) \--\>  
\<localfile\>  
  \<location\>/var/log/pacs\_events.log\</location\>  
  \<log\_format\>syslog\</log\_format\>  
\</localfile\>

### **PACS Olayları İçin Dekoder (Decoder) ve Kural Tasarımı**

PACS sunucusunun /var/log/pacs\_events.log dosyasına yazdığı ham log formatı şu şekildedir:

Kod snippet'i  
Jun 10 14:23:45 pacs-srv01 PACS\_EVENT: BADGE\_ACCEPTED \- User: ahmet.yilmaz \- CardID: 94C20C2 \- Gate: Gate\_04\_ArGe \- Dept: ResearchAndDev

Bu log biçimini anlamlandırmak ve gerekli alanları süzmek için yazılması gereken özel dekoder yapısı şu şekildedir43:

XML  
\<\!-- /var/ossec/etc/decoders/pacs\_decoders.xml \--\>  
\<decoder name\="pacs-custom"\>  
  \<prematch\>^PACS\_EVENT: \</prematch\>  
\</decoder\>

\<decoder name\="pacs-fields"\>  
  \<parent\>pacs-custom\</parent\>  
  \<\!-- Düzenli ifade ile timestamp, aksiyon, kullanıcı, kart ID ve kapı bilgilerini yakala \--\>  
  \<regex\>^PACS\_EVENT:\\s+(\\S+)\\s+-\\s+User:\\s+(\\S+)\\s+-\\s+CardID:\\s+(\\S+)\\s+-\\s+Gate:\\s+(\\S+)\\s+-\\s+Dept:\\s+(\\S+)\</regex\>  
  \<order\>pacs\_action, pacs\_user, pacs\_card\_id, pacs\_gate, pacs\_dept\</order\>  
\</decoder\>

Yakalanan alanlar üzerinden güvenlik alarmları üretecek kurallar local\_rules.xml dosyasına tanımlanır44:

XML  
\<\!-- /var/ossec/etc/rules/local\_rules.xml \--\>  
\<group name\="pacs,physical\_security,"\>  
  \<\!-- Temel Kural: Herhangi bir PACS Olayı \--\>  
  \<rule id\="110100" level\="0"\>  
    \<decoded\_as\>pacs-custom\</decoded\_as\>  
    \<description\>PACS: Geçiş kontrol sistemi olayı algılandı.\</description\>  
  \</rule\>

  \<\!-- Şüpheli Durum: Reddedilen Geçiş Kartı \--\>  
  \<rule id\="110101" level\="5"\>  
    \<if\_sid\>110100\</if\_sid\>  
    \<field name\="pacs\_action"\>BADGE\_REJECTED\</field\>  
    \<description\>PACS: Yetkisiz veya geçersiz kart geçiş denemesi reddedildi.\</description\>  
    \<group\>access\_control,pci\_dss\_10.2.4,\</group\>  
  \</rule\>

  \<\!-- Kritik Durum: Aynı Kapıda Arka Arkaya Başarısız Denemeler (Olası Klon Kart Denemesi) \--\>  
  \<rule id\="110102" level\="9"\>  
    \<if\_sid\>110101\</if\_sid\>  
    \<frequency\>3\</frequency\>  
    \<timeframe\>60\</timeframe\>  
    \<description\>PACS: Aynı geçiş noktasında 1 dakika içinde 3 kez geçersiz kart denendi\! Olası klon denemesi veya kaba kuvvet saldırısı.\</description\>  
    \<group\>reconnaissance,attack\_pattern,\</group\>  
  \</rule\>

  \<\!-- Kritik Durum: Mesai Dışı Sistem Odası Erişimi \--\>  
  \<rule id\="110103" level\="8"\>  
    \<if\_sid\>110100\</if\_sid\>  
    \<field name\="pacs\_action"\>BADGE\_ACCEPTED\</field\>  
    \<field name\="pacs\_gate"\>Gate\_Sistem\_Odasi\</field\>  
    \<time\>18:00 \- 08:00\</time\> \<\!-- Mesai saatleri dışı \--\>  
    \<description\>PACS: Kritik sistem odasına mesai saatleri dışında fiziksel erişim sağlandı\!\</description\>  
    \<group\>security\_anomaly,privilege\_abuse,\</group\>  
  \</rule\>  
\</group\>

## **Gelişmiş Tehdit Algılama: "Impossible Travel" (İmkansız Seyahat) Korelasyonu**

"İmkansız Seyahat" (Impossible Travel) analitiği, fiziksel güvenlik ile mantıksal (siber) güvenliği birleştiren en gelişmiş korelasyon senaryolarından biridir45. Bu senaryo, aynı kullanıcı hesabının fiziksel olarak seyahat edilmesi imkansız olan iki farklı coğrafi konumdan çok kısa zaman aralıklarıyla hem fiziksel geçiş kartını kullanmasını hem de mantıksal ağda (VPN, Cloud Portal vb.) oturum açmasını tespit etmeyi amaçlar45.

### **İmkansız Seyahat Tespit Pipeline Aşamaları**

1. **Olay Çiftlerinin Oluşturulması:** Sisteme düşen tüm başarılı fiziksel kart geçiş olayları (PACS) ile kullanıcıların harici ağlardan yaptığı başarılı VPN/bulut portalı bağlantı olayları kullanıcı adı bazında gruplanır46.  
2. **Örtük Hızın (Implied Velocity) Hesaplanması:** İki olay arasındaki coğrafi mesafe (kilometre cinsinden) ve iki olayın gerçekleşme zamanları arasındaki fark (![][image20]) hesaplanır46. Buradan yola çıkılarak kullanıcının iki konum arasındaki teorik hızı (![][image21]) elde edilir46.  
3. **Fiziksel Seyahat Limitlerinin Kontrolü:** Hesaplanan hızın, ticari bir uçakla seyahat hızı limitlerini (örneğin saatte 800 km) aşması durumunda olay "fiziki olarak imkansız" kabul edilir46.  
4. **Kullanıcı Alışkanlıklarının Değerlendirilmesi:** Kullanıcının geçmiş VPN bağlantı noktaları ve kullandığı kurumsal statik VPN tünelleri analiz edilerek, olayın meşru bir proxy/VPN veya kurumsal hat üzerinden kaynaklanıp kaynaklanmadığı doğrulanır46.  
5. **Risk Puanlaması:** Anomalinin büyüklüğüne, coğrafi mesafenin uzaklığına (farklı kıtalar arası olması güvenilirlik katsayısını artırır) göre olaya dinamik bir risk skoru atanır46.  
6. **Gereksiz Alarmların Süzülmesi (False Positive Suppression):** Seyahat halindeki çalışanların kullandığı uçak içi Wi-Fi servisleri veya mobil hücresel ağların IP adresleri elenerek gürültü azaltılır46.

### **Wazuh Entegrasyonu ve Stateful SQLite Durum Veritabanı Mimarisi**

Wazuh, mimarisi gereği durum bilgisi barındırmayan (stateless) bir kural motoruna sahiptir3. Geçmişteki bir olay ile yeni gelen bir olayı ilişkilendirebilmek için harici bir durum takibi veri katmanına ihtiyaç duyulur26. Bu amaçla, Wazuh Manager üzerinde çalışan bir Python entegrasyon betiği ve lokal bir SQLite veritabanı kurgulanır26.

Python  
\#\!/var/ossec/framework/python/bin/python3  
\# \-\*- coding: utf-8 \-\*-  
\# Dosya Konumu: /var/ossec/integrations/custom-impossible\_traveler.py

import sys  
import json  
import sqlite3  
import os  
from datetime import datetime  
from geopy.distance import geodesic

DB\_PATH \= "/var/ossec/var/db/DB\_Impossible\_traveler.db"

def init\_database():  
    """Durum tablosunu hazırlar."""  
    conn \= sqlite3.connect(DB\_PATH)  
    cursor \= conn.cursor()  
    cursor.execute('''  
        CREATE TABLE IF NOT EXISTS access\_logs (  
            username TEXT PRIMARY KEY,  
            last\_timestamp TEXT,  
            last\_lat REAL,  
            last\_lon REAL,  
            last\_source TEXT  
        )  
    ''')  
    conn.commit()  
    conn.close()

def evaluate\_travel(username, current\_time\_str, current\_lat, current\_lon, current\_source):  
    """  
    Kullanıcının son bilinen konumu ile mevcut konumunu karşılaştırır.  
    Hız limitleri aşılmışsa anomali detaylarını döner.  
    """  
    conn \= sqlite3.connect(DB\_PATH)  
    cursor \= conn.cursor()  
    cursor.execute("SELECT last\_timestamp, last\_lat, last\_lon, last\_source FROM access\_logs WHERE username \= ?", (username,))  
    row \= cursor.fetchone()  
      
    anomaly\_detected \= False  
    details \= {}  
      
    current\_time \= datetime.strptime(current\_time\_str, "%Y-%m-%d %H:%M:%S")  
      
    if row:  
        last\_time\_str, last\_lat, last\_lon, last\_source \= row  
        last\_time \= datetime.strptime(last\_time\_str, "%Y-%m-%d %H:%M:%S")  
          
        \# Zaman farkını saat cinsinden hesapla  
        time\_delta \= (current\_time \- last\_time).total\_seconds() / 3600.0  
          
        \# Farklı kaynaklardan (PACS ve VPN) gelen oturumları analiz et  
        if time\_delta \> 0 and last\_source \!= current\_source:  
            distance \= geodesic((last\_lat, last\_lon), (current\_lat, current\_lon)).kilometers  
              
            if distance \> 10.0: \# Minimum anomali mesafesi 10 km  
                implied\_velocity \= distance / time\_delta  
                  
                \# Saatte 800 km'den hızlı hareket edildiyse imkansız kabul et  
                if implied\_velocity \> 800.0:  
                    anomaly\_detected \= True  
                    details \= {  
                        "previous\_location": {"lat": last\_lat, "lon": last\_lon, "source": last\_source, "time": last\_time\_str},  
                        "current\_location": {"lat": current\_lat, "lon": current\_lon, "source": current\_source, "time": current\_time\_str},  
                        "distance\_km": round(distance, 2),  
                        "time\_delta\_hours": round(time\_delta, 3),  
                        "calculated\_velocity\_kmh": round(implied\_velocity, 2)  
                    }  
      
    \# Yeni durumu kaydet veya eskisini güncelle  
    cursor.execute("""  
        INSERT OR REPLACE INTO access\_logs (username, last\_timestamp, last\_lat, last\_lon, last\_source)  
        VALUES (?, ?, ?, ?, ?)  
    """, (username, current\_time\_str, current\_lat, current\_lon, current\_source))  
    conn.commit()  
    conn.close()  
      
    return anomaly\_detected, details

def main():  
    if len(sys.argv) \< 2:  
        sys.exit(1)  
          
    init\_database()  
    alert\_file \= sys.argv\[1\]  
      
    with open(alert\_file, 'r') as f:  
        alert\_data \= json.load(f)  
      
    \# Log içerisinden gerekli alanları çıkar  
    try:  
        username \= alert\_data\['data'\]\['pacs\_user'\]  
        \# Standart timestamp formatı dönüşümü  
        raw\_timestamp \= alert\_data\['data'\]\['timestamp'\] \# Örn: "2026-06-10 14:23:45"  
        lat \= float(alert\_data\['data'\]\['pacs\_lat'\])  
        lon \= float(alert\_data\['data'\]\['pacs\_lon'\])  
        source \= alert\_data\['data'\]\['pacs\_source'\] \# "PHYSICAL" veya "VIRTUAL\_VPN"  
    except KeyError:  
        \# Gerekli alanları barındırmayan logları yoksay  
        sys.exit(0)  
          
    anomaly, details \= evaluate\_travel(username, raw\_timestamp, lat, lon, source)  
      
    if anomaly:  
        \# Wazuh Manager olay analiz motoruna geri besleme olarak anomali uyarısı gönder  
        \# Bu uyarı Wazuh Dashboard üzerinde 'Impossible Travel Alert' olarak filtrelenecektir  
        syslog\_socket \= "/var/ossec/queue/ossec/queue"  
        alert\_payload \= {  
            "pacs\_anomaly": "IMPOSSIBLE\_TRAVEL\_DETECTED",  
            "username": username,  
            "details": details  
        }  
        \# Adli analiz ve müdahale süreçleri için yerel log dosyasına yaz  
        with open("/var/ossec/logs/active-responses.log", "a") as ar\_log:  
            ar\_log.write(f"{datetime.now().strftime('%Y-%m-%d %H:%M:%S')} IMPOSSIBLE\_TRAVEL: {json.dumps(alert\_payload)}\\n")

if \_\_name\_\_ \== "\_\_main\_\_":  
    main()

Uygulanan bu betik sayesinde, bir saldırgan kopyaladığı RFID geçiş kartıyla Ankara'daki Ar-Ge merkezine fiziksel olarak giriş yaptığı sırada, aynı personelin kullanıcı hesabıyla İstanbul lokasyonlu kurumsal VPN sunucusundan başarılı bir kimlik doğrulaması gerçekleştirilirse, SOC analistlerinin ekranına anında en yüksek ciddiyet seviyesinde (Level 12\) alarm düşmesi garanti altına alınır45.

## **Sonuç ve Stratejik Tavsiyeler**

Kurumsal fiziksel sınırların ve mantıksal varlıkların korunması, birbirinden izole süreçler olarak değil, birbirini tamamlayan birer koruma katmanı olarak tasarlanmalıdır. Sosyal mühendislik ve gelişmiş donanım araçları vasıtasıyla fiziksel perimeterin aşılması riskine karşı alınması gereken temel mimari aksiyonlar şunlardır:

* **Zayıf Kart Altyapısının Tasfiyesi:** Kurum bünyesinde aktif olarak kullanılan tüm düşük frekanslı (125 kHz EM/HID Prox) ve MIFARE Classic kartlar derhal envanterden silinmelidir1. Yerlerine, AES-128 tabanlı kriptografik güvenliğe ve AuthenticateEV2First protokolüne sahip **MIFARE DESFire EV3** veya donanım bağımsız mimari avantajları ve gizlilik modu barındıran **HID SEOS** kart teknolojileri konumlandırılmalıdır4.  
* **Fiziksel Güvenlik Altyapısının SOC Entegrasyonu:** Tesis girişlerinde kullanılan PACS sistemleri, turnikeler ve kritik kapı kilitlerinin ürettiği loglar sadece yerel veritabanlarında bırakılmamalıdır3. Kurumsal SIEM (Wazuh vb.) mimarisine dahil edilerek mantıksal ağ olayları, VPN oturum açma günlükleri ve kullanıcı hareketleriyle korelasyon süreçlerine tabi tutulmalıdır36.  
* **Yasal Uyumluluk ve Biyometri Dönüşümü:** KVKK'nın mesai takibinde biyometrik veri işlenmesini yasaklayan 2026/921 sayılı ilke kararına tam uyum sağlanmalı, parmak izi ve yüz tanıma sistemleri kaldırılarak şifreli akıllı kartlar ve PIN tabanlı çok katmanlı geçiş kontrol altyapılarına geçiş tamamlanmalıdır2.  
* **Farkındalık Seviyesinin Artırılması:** Personelin sosyal mühendislik ve tailgating saldırılarına karşı koyabilmesi amacıyla, pratik uygulamaları içeren interaktif eğitimler ve haber vermeksizin gerçekleştirilecek Red Team sızma tatbikatları düzenlenmeli, güvenlik kültürü organizasyon genelinde içselleştirilmelidir8.

#### **Alıntılanan çalışmalar**

1. MIFARE Classic: exposing the static encrypted nonce variant, [https://2024.cesar-conference.org/program-media/CESAR-2024\_keynote-MiFare.pdf](https://2024.cesar-conference.org/program-media/CESAR-2024_keynote-MiFare.pdf)  
2. Mesai Takibinde Biyometrik Veri İşlenmesine Yeni İlke Kararı \- KVKK \- Alomaliye.com, [https://www.alomaliye.com/2026/06/02/mesai-takibinde-biyometrik-veri-islenmesine-yeni-ilke-karari-kvkk/](https://www.alomaliye.com/2026/06/02/mesai-takibinde-biyometrik-veri-islenmesine-yeni-ilke-karari-kvkk/)  
3. Setting Up Wazuh on AWS: Two EC2 Instances, Real-Time File Monitoring, and What Actually Went Wrong | by Nikhil Shakya \- Medium, [https://medium.com/@nikhilshakya0905/setting-up-wazuh-on-aws-two-ec2-instances-real-time-file-monitoring-and-what-actually-went-wrong-b491ef570622](https://medium.com/@nikhilshakya0905/setting-up-wazuh-on-aws-two-ec2-instances-real-time-file-monitoring-and-what-actually-went-wrong-b491ef570622)  
4. MIFARE DESFire readers provide highest open standard security \- Idesco, [https://idesco.fi/mifare-desfire/](https://idesco.fi/mifare-desfire/)  
5. BANKALARDA TEKNOLOJİRİSKİ VE YÖNETİMİ YÜKSEK LİSANS TEZİ \- Marmara Üniversitesi Kütüphaneleri, [https://katalog.marmara.edu.tr/veriler/yordambt/cokluortam/6A/T0053614.pdf](https://katalog.marmara.edu.tr/veriler/yordambt/cokluortam/6A/T0053614.pdf)  
6. Biyometrik Veriler ile İşe Giriş-Çıkış Kontrolü \- BA Hukuk, [https://www.bahukuk.com/Haberler/biyometrik-veriler-ile-is%CC%A7e-giris%CC%A7-cikis-kontrolu/83](https://www.bahukuk.com/Haberler/biyometrik-veriler-ile-is%CC%A7e-giris%CC%A7-cikis-kontrolu/83)  
7. Using Wazuh for TSC compliance, [https://documentation.wazuh.com/current/compliance/tsc/index.html](https://documentation.wazuh.com/current/compliance/tsc/index.html)  
8. HID Seos Cards: Security, Benefits & Migration Guide \- Groove Identification Solutions, [https://groovebadges.com/a/blog/hid-seos-cards-security-benefits-migration-guide](https://groovebadges.com/a/blog/hid-seos-cards-security-benefits-migration-guide)  
9. KVKK'den "mesai takibi için biyometrik veri işlenmesin" kararı \- Anadolu Ajansı, [https://www.aa.com.tr/tr/gundem/kvkkden-mesai-takibi-icin-biyometrik-veri-islenmesin-karari/3953766](https://www.aa.com.tr/tr/gundem/kvkkden-mesai-takibi-icin-biyometrik-veri-islenmesin-karari/3953766)  
10. KVKK'dan Işverenlere Biyometrik Mesai Takibi Uyarısı: Parmak Izi Ve Yüz Tanıma Sistemleri Hukuka Aykırı | Marketing Türkiye, [https://www.marketingturkiye.com.tr/haberler/kvkkdan-isverenlere-biyometrik-mesai-takibi-uyarisi-parmak-izi-ve-yuz-tanima-sistemleri-hukuka-aykiri/](https://www.marketingturkiye.com.tr/haberler/kvkkdan-isverenlere-biyometrik-mesai-takibi-uyarisi-parmak-izi-ve-yuz-tanima-sistemleri-hukuka-aykiri/)  
11. Rıza Dahi Olsa Parmak İziyle Mesai Takibi Yasak\! \- Memurlar.Net, [https://www.memurlar.net/haber/1168847/riza-dahi-olsa-parmak-iziyle-mesai-takibi-yasak.html](https://www.memurlar.net/haber/1168847/riza-dahi-olsa-parmak-iziyle-mesai-takibi-yasak.html)  
12. “Belediyede memur olarak görev yapan ilgili kişinin, veri sorumlusu bünyesinde işe giriş çıkış takibinin biyometrik veri işlenerek yapılması” hakkında Kişisel Verileri Koruma Kurulunun 01/12/2020 tarihli ve 2020/915 sayılı Karar Özeti, [https://www.kvkk.gov.tr/Icerik/6872/2020-915](https://www.kvkk.gov.tr/Icerik/6872/2020-915)  
13. “İlgili kişinin 'el geometrisi' bilgisinin bir işletmenin hizmet binasına giriş yapabilmek amacıyla veri sorumlusu tarafından açık rıza alınmaksızın işlenmesi” hakkındaki Kişisel Verileri Koruma Kurulunun 07/07/2022 tarihli ve 2022/662 sayılı Karar Özeti, [https://www.kvkk.gov.tr/Icerik/7399/2022-662](https://www.kvkk.gov.tr/Icerik/7399/2022-662)  
14. Kişisel Verileri Koruma Politikası \- İstanbul \- İİB, [https://www.iib.org.tr/kisisel-verileri-koruma-politikasi-1694802392087](https://www.iib.org.tr/kisisel-verileri-koruma-politikasi-1694802392087)  
15. Kapalı Devre Kamera Sistemi (CCTV) Vasıtasıyla Kişisel Veri İşleme Aydınlatma Metni, [https://www.vodatech.com.tr/kamera-aydinlatma-metni/](https://www.vodatech.com.tr/kamera-aydinlatma-metni/)  
16. İş Yerlerinde Güvenlik Kamerası KullanımıUygulamalar Rehberi \- Nesil Teknoloji, [https://www.nesilteknoloji.com/kamerasi-sistemi-kullaniminda-dikkat-edilecek-hususlara/](https://www.nesilteknoloji.com/kamerasi-sistemi-kullaniminda-dikkat-edilecek-hususlara/)  
17. Bilgi Sistemleri Güvenliği \- SPL, [https://spl.com.tr/wp-content/uploads/2025/02/1023\_MKT\_31122024\_202401160903-1.pdf](https://spl.com.tr/wp-content/uploads/2025/02/1023_MKT_31122024_202401160903-1.pdf)  
18. Study of vulnerabilities in MIFARE Classic cards \- Tempest Security Intelligence, [https://www.tempest.com.br/sidechannel/en/mifare-classic-2](https://www.tempest.com.br/sidechannel/en/mifare-classic-2)  
19. Crypto-1 \- Grokipedia, [https://grokipedia.com/page/Crypto-1](https://grokipedia.com/page/Crypto-1)  
20. A practical attack on patched MIFARE Classic, [https://troll.iis.sinica.edu.tw/by-publ/recent/patched-mifare.pdf](https://troll.iis.sinica.edu.tw/by-publ/recent/patched-mifare.pdf)  
21. Strengthening Crypto-1 Cipher Against Algebraic Attacks \- Semantic Scholar, [https://pdfs.semanticscholar.org/1e28/293652f130b61824696dbe65a0c7b85053c1.pdf](https://pdfs.semanticscholar.org/1e28/293652f130b61824696dbe65a0c7b85053c1.pdf)  
22. A Practical Attack on Patched MIFARE Classic, [https://archive.ymsc.tsinghua.edu.cn/pacm\_download/672/12640-dingjt-c47.pdf](https://archive.ymsc.tsinghua.edu.cn/pacm_download/672/12640-dingjt-c47.pdf)  
23. Keystream generation of CRYPTO 1 \[1\] | Download Scientific Diagram \- ResearchGate, [https://www.researchgate.net/figure/Keystream-generation-of-CRYPTO-1-1\_fig1\_331162004](https://www.researchgate.net/figure/Keystream-generation-of-CRYPTO-1-1_fig1_331162004)  
24. Mifare Smart Card Security {By Kevin Larson} \- INCYBER NEWS, [https://incyber.org/en/article/mifare-smart-card-security-by-kevin-larson/](https://incyber.org/en/article/mifare-smart-card-security-by-kevin-larson/)  
25. HardwareAllTheThings/docs/protocols/rfid-nfc/hf-mifare-classic.md at main \- GitHub, [https://github.com/swisskyrepo/HardwareAllTheThings/blob/main/docs/protocols/rfid-nfc/hf-mifare-classic.md](https://github.com/swisskyrepo/HardwareAllTheThings/blob/main/docs/protocols/rfid-nfc/hf-mifare-classic.md)  
26. Impossible traveller \-Wazuh 4.12.0 \- Reddit, [https://www.reddit.com/r/Wazuh/comments/1llmt88/impossible\_traveller\_wazuh\_4120/](https://www.reddit.com/r/Wazuh/comments/1llmt88/impossible_traveller_wazuh_4120/)  
27. Noob needs help with Proxmark3 on Mifare Classic 1k \- Support \- Dangerous Things Forum, [https://forum.dangerousthings.com/t/noob-needs-help-with-proxmark3-on-mifare-classic-1k/27974](https://forum.dangerousthings.com/t/noob-needs-help-with-proxmark3-on-mifare-classic-1k/27974)  
28. Secure Credentials with Verkada MIFARE DESFire EV3, [https://www.verkada.com/blog/secure-credentials-with-verkada-mifare-desfire-ev3/](https://www.verkada.com/blog/secure-credentials-with-verkada-mifare-desfire-ev3/)  
29. MIFARE DESFire Light contactless application IC \- NXP Semiconductors, [https://www.nxp.com/docs/en/data-sheet/MF2DLHX0.pdf](https://www.nxp.com/docs/en/data-sheet/MF2DLHX0.pdf)  
30. Mifare DESFire EV3 Run “AuthenticateEV2First” on a Mifare DESFire EV2/EV3 NFC tag in detail | by AndroidCrypto | Medium, [https://medium.com/@androidcrypto/mifare-desfire-ev3-run-authenticateev2first-on-a-mifare-desfire-ev2-ev3-nfc-tag-in-detail-00e698fd3e0a](https://medium.com/@androidcrypto/mifare-desfire-ev3-run-authenticateev2first-on-a-mifare-desfire-ev2-ev3-nfc-tag-in-detail-00e698fd3e0a)  
31. Mifare DESFire EV3 — a beginner tutorial (Android Java) using the DESFire for Android tools. | by AndroidCrypto | Medium, [https://medium.com/@androidcrypto/mifare-desfire-ev3-a-beginner-tutorial-android-java-using-the-desfire-for-android-tools-00aaecb8fa93](https://medium.com/@androidcrypto/mifare-desfire-ev3-a-beginner-tutorial-android-java-using-the-desfire-for-android-tools-00aaecb8fa93)  
32. What is HID Seos®? Understanding the technology \- Digital ID, [https://www.digitalid.co.uk/blog/what-is-hid-seos/](https://www.digitalid.co.uk/blog/what-is-hid-seos/)  
33. iCLASS® Seos™ Card \- ColorID, [https://www.colorid.com/uploads/4/2/2/9/42295857/hid\_seos.pdf](https://www.colorid.com/uploads/4/2/2/9/42295857/hid_seos.pdf)  
34. Glossary \> iCLASS and Seos Credentials R 8, [https://cdn.service.inepro.com/web-manuals/HID%20OmniKey%20Mobile%20and%20Elite%20Keys%20EN/tag.html](https://cdn.service.inepro.com/web-manuals/HID%20OmniKey%20Mobile%20and%20Elite%20Keys%20EN/tag.html)  
35. HID Global Introduces New Seos Credentials \- Dark Reading, [https://www.darkreading.com/physical-security/hid-global-introduces-new-seos-credentials](https://www.darkreading.com/physical-security/hid-global-introduces-new-seos-credentials)  
36. Wazuh SIEM Implementation with Agent and pfSense Integration \- Everant Journals, [https://everant.org/index.php/etj/article/view/2805](https://everant.org/index.php/etj/article/view/2805)  
37. Collect LenelS2 OnGuard logs | Google Security Operations, [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/lenel-onguard](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/lenel-onguard)  
38. Wireless/Ethernet reader for wired 'door' control (HID formats, Lenel? infrastructure) : r/accesscontrol \- Reddit, [https://www.reddit.com/r/accesscontrol/comments/1t14l1e/wirelessethernet\_reader\_for\_wired\_door\_control/](https://www.reddit.com/r/accesscontrol/comments/1t14l1e/wirelessethernet_reader_for_wired_door_control/)  
39. Configuring syslog on the Wazuh server \- Log data collection, [https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/syslog.html](https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/syslog.html)  
40. Forward syslog events \- Your environment \- Wazuh documentation, [https://documentation.wazuh.com/current/cloud-service/your-environment/send-syslog-data.html](https://documentation.wazuh.com/current/cloud-service/your-environment/send-syslog-data.html)  
41. Monitoring network devices with Wazuh, [https://wazuh.com/blog/monitoring-network-devices/](https://wazuh.com/blog/monitoring-network-devices/)  
42. Configuration for monitoring log files \- Log data collection \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/monitoring-log-files.html](https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/monitoring-log-files.html)  
43. Command output analysis \- Command monitoring \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/command-monitoring/command-output-analysis.html](https://documentation.wazuh.com/current/user-manual/capabilities/command-monitoring/command-output-analysis.html)  
44. Custom rules \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/ruleset/rules/custom.html](https://documentation.wazuh.com/current/user-manual/ruleset/rules/custom.html)  
45. Microsoft cloud security benchmark v2 \- Logging and Threat Detection, [https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-v2-logging-threat-detection](https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-v2-logging-threat-detection)  
46. Time Travelers Busted: How to Detect Impossible Travel \- Huntress, [https://www.huntress.com/blog/time-travelers-busted-how-to-detect-impossible-travel-](https://www.huntress.com/blog/time-travelers-busted-how-to-detect-impossible-travel-)  
47. M365 Identity Login from Impossible Travel Location | Prebuilt detection rules reference, [https://www.elastic.co/docs/reference/security/prebuilt-rules/rules/integrations/o365/initial\_access\_entra\_id\_portal\_login\_impossible\_travel](https://www.elastic.co/docs/reference/security/prebuilt-rules/rules/integrations/o365/initial_access_entra_id_portal_login_impossible_travel)  
48. socfortress/OFFICE365-IMPOSSIBLE-TRAVEL \- GitHub, [https://github.com/socfortress/OFFICE365-IMPOSSIBLE-TRAVEL](https://github.com/socfortress/OFFICE365-IMPOSSIBLE-TRAVEL)  
49. Office365 Impossible Travel Detection with Wazuh, Graylog, and a Custom Python API, [https://socfortress.medium.com/office365-impossible-travel-detection-with-wazuh-graylog-and-a-custom-python-api-0a0a383d1603](https://socfortress.medium.com/office365-impossible-travel-detection-with-wazuh-graylog-and-a-custom-python-api-0a0a383d1603)

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAaCAYAAABRhnV8AAAEuklEQVR4Xu2aa8hURRjHHymhsKxUjC6QXQikQEUrDCuDiiIi6AJREYmoH4QIxW4QvBHhl4zID0Z2wb70oSAiioighcCKggrsQhBoRH0I+hAWXij7/5gz7uw0Z8/unrPn3cX5wZ+z78zZM2dmnpnnmWdfs0wmkzmROEOaGxdmJh7mjLmbKG6Vdlg2qGmEOXteuiOuqMMt0rEB9Je0sviOZ4X0sbQ4Ks9MDwul96Ur44q67JGOSmui8pOkjdKv0tKg/FTpHemeoCwzndwsfSidFleMylnSF9JP0tlRHSyS3pPOCcp4iW8sfX9muiCO2msNbg7LpD+lt6STi7I50rziMwa1y7oWTN1r0gvF35np5xnrnf9a3GcuTtoSlOHenjVnPGdKdxefAQP71qqDOSz/Juk2c756HLTRxqQwzr4SSx+Qzo8rRuFl642fiJu2S5uO39ELwfnPxbUMjA03+oD0oPSZdFl4QwO00cakMO6+Mpe/SFfEFcPi4yd2KALvg8Xnv6384ayQ36SL4ooC4qovrWug+OZ/pBuO31GfNtqYFNroK/ExOxRzWwssk5RA6D9xdx+Zc20paJTGwyA9xD/zFelicwOy1rq5qvnSNulp6VrrutJhqGoD2GnZypcHZdPIIH0FxvFh6xra7dJj0l2B1lo6TvIGRfhTCx8/PRqUhfFTiiqDIi+1z7o5rN+la4o6Avs3pavMDciL0o1F3TD0awOekN61hlbdLFPVVw9jiuH5/mJMeB3CE/SH9Lil59UbVBhHD40/rcX5Jyban/BSVBkUsAvdL71tbhDY8Xgm7ZBI8ydGnjXq6aKsDQ9tdGz6DQqq+krAzo6Pa6S/zO1D0ulB/ZPFNUUjLq8q/1QGRoHlk26I2WDOv5On8nAkJY91irlAv2O9BsU78C4eDJpVGW/pnqo2PP0MCndIG+H9MQz+uZZe0cAzlli9ZzTRV569zly2u2P/7y/1m6VLovIQ4mHmlBBhZFLx0yDgEmk8FRRyYvxBurT4m0n9wNzqAlxrpyiH1G63w9wqnAnKQqra8PQzqPXm2njD0n3nWE7i9rC0OqrzNPGMJvrKwiZQL+sv7vGRqCyGAxgbS/hryMBgCBiE98kI/8qLLgjuK8O/eCqtsMrcIO6RXjJ3vCUA9ytwEIMisPzX3Lbu7wupasNTNsBA2SFzg5hy3XwX1/yjdEFU5/HPYLJSO5B/xvdWnt+p21e+Q7zINdVfDJ3vphZ/CLF0x9Lv0AozVr6zeXeC+BxCPqVjvQb1iXV9vYcT5k4rj+X6teFJDXAILoM2hnH346BOX6+XPjfXz73SEek76d6i/jzpK+ufM2QO2WVnovJWwR9/LV0eV1TA/eyEPmZil0v9hIOLqNqmq6gyqAvNnWZTi6JNmugrpAJr4l3K+rky5pKdj+usslV6ztLbfRncy5b9lHS1uVNL7FIwhFetXiaY4PJ1czHip+baDINnVjrGNErKokma6CsskXabi9f4zwEfXHPdb2m3DswHc1HmtlsFP85WfWdcMQD8PoirieMeYDVdFxc2DANM4m+2B3HcfWV8iYvL+knATuhSlk5oHfw++Y+yn2EykwvxFSmIiTGmTCaTyWQymROF/wAAoATRwqZGSQAAAABJRU5ErkJggg==>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAbCAYAAABIpm7EAAAA6UlEQVR4Xu3Sr2tCURjG8XdoGKiIIANBsAnCwGTSqk1YHPgHiE2MJotgdqAgFoPN/2BrNrWuLLtosYmI+x6O4Z5XL3faBB/4hMtzDvf8Erm7RFBBFk+qO0sGc/Twi7Jbn6cjdkIXR7w7rUoCS4yRRB4hZ4RKDhu0dKHzjBRqOIhdhvmOegd5U8QIK+wwPX0XvIMuZSJ2D2YvgYmJPZ0Zwqq7mDTWaOvCL1dPKGGPqi78UsdW7GX9K318i73hwJjX+SU3nJBZlm/MO2/iE29iJ7w6I1Re8CP2ZgcYSsByzB8aWOADcbd+RP4ASKIkGi8vM6QAAAAASUVORK5CYII=>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAaCAYAAACwwaJoAAAEtUlEQVR4Xu2ZaahuUxjH/0KZ50gRyXQNkbFruhIikVDXmA/3w43IVEQ+nBsyfSCKkvEDMhVlKKSDL0IZcpEhQ4YkKUUuif/Ps1d77XX2+56939PtPbL/9a/zrrX32ms9z3r+z7PWkQYMGDBgwBhsbB5v7m6uU/QNWETYyXzdvMn81jyu2T117GHeYt5jnm1u2OzuhXysK8ztm92dcLHCVrsp3s+5rblu9Ryb/lDzDvMu86iqbUGYUTjrBvNv88xG73Rxuvmhub+5iXmd+ZK5ef5QRzDWU+Z+5pHmO+Yf5mn5Qx3wkMJObVxtbmOur7Drm+a+5hLzVXOVFuCwLc23zHsVH2EhaWdMGzuan5rnZG1pvhdlbV2wnWJDHqvaWLua3ym+wbe6gA3znPmwIjoTHzS/V2wIwAZgI5xQ/QZHmD+ZS7O2XsDjDHB52bEIgJN+NQ/M2jA0hppVGK4rGIOxPlc4DqSxiIgTq7b5gNQhaRsU7cvNWxVj0odDy7nz7lcKWewFBuRlDPKXQvr43ccAaxssqlwwQIbYxbuYW6iZM5h/WlvehmwigQ9UvxOSpJ2ctQEibaVCtsjhKU9uZR6QHqqwt/mIamlm/FnNnXtyFn297Hy4InzfNteoDuuD84emDAxZLrhsv9D8TGFwNt355jKFBNFG36nx2hwkSf1BUXgAcs215hcKKdvT/MB8Ue0Gpu0JRSGRt81q7tyTs/Lo7gUWzoSZ+EKA/uP4r3vwrH/fbMeoBYPSiUjP1ebP5iHm1grjHlb1jwLShYOvVJ3HaMtzDWO9V5G/S5yriKr1ivYZ8zc1Nz8560+Fw3BcL2yqSLpPau7Hpg3OfS+rm7MAEsTzr5i3K4w+DhxXPlIYlWgCaYOsVhRbCUlaS/DNNxRyWYLxP1FsIjYC36CII9onctYO5jfmNWXHIkGbU8a1kzt+VETVRkVfDoxMAXCJmpVv35xC9DEPIqYNOys2EGdXjgnnqd/4DaSwLJPrJGDRHAjzxD4f55sw5742p+AsNhmbLQdSTH75XXUJXSI5ishL0sdhlXNcX2eNKoBGIVXevatBQPj+ojhbldhLUTmtMo9RVEHjgGydZJ7Rg0x+HE5R5BTORgmpLIa5NOGEx1UXTpyfcF4OpAiJLA/B1ytyC6ngUdWVZg4KjdwGSabbngXY9F01ixvWQx5bmrV1Bh4u9RkwKGUuu4tFfKz2Ca1tkNC5AZjJ2nAAUZXfsmymqGaTnFNpkY8wZiqn043CGjWLHMb6UvX6KFAoVG5ULZHM436FciRgM2w3Kv+gVuSnmep3yql3a4L6IO2Msrhg0NdUV0Ps6hcUz08DBynKaCo2opHK9WaF8ZnTM6qvelJJzAE3tRGZjykkH8lK7TnLaniZ4laDPHOf+bxCJnPwHb43yllINNUx12Mrqr9RqonsmIqLspJBf99XnQ+uUuSOaYIF8h8BJKXrtdBCQT4jovKL2RLc+SF3KfeVQKaP1oTzZtBLFRehDICz9mk8Ec56WiGBnNrZVcgih8+JdsWAycAuofYn7LnfatNPnESCvsy8zXxW8exiuon/X4DIukCRtO/U+H8zcGAm/HlniKgBAwYMGDBgwID/Ov4B0uQL449AhhoAAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAaCAYAAACwwaJoAAAEoUlEQVR4Xu2ZeahtYxjGH6EIGTOE7iFDQuYkkuKayhCu+Q+lDCHiD2MRKUOEG0oyJENR0u3+RTkohCIZiiQy/CGUUGbP77z7tdf6zlrnrL33dTa1nno67e9b61vre593+taRevTo0aPHAtjAPNLcxVyrmOvxH8Iy8xXzFvNLc3l9empY3zzTfMC8zdy1Pj0WWIO1WPNkc+369Byqz73Z3K4+/Q+491RzphgHlyjsubO5TcEt1fzcTrhBIRYv9pd5em12OtjYfN68ydzQ3Nv8QGHgcbCueZ35prmfuaO5yrygepGxm/mOebVCpBXmGwoDA4Q8zrxb4dg/KdYr8ajClk1839xieGl3bKrYwIOKBfbSBKqvQVypeC/eL3GW+aG5VWWsKxDlYw2j4BiF4TBqAkHeUwhFKaA0vKC6IIjFvYeZ1xdzCZxrtfm4IjqTj5hfa3yHm/Okb83Ly4kpIh2oakhwgPmjeXwxvhi2Vwh1T2WMyCXSDqyM4SDYApskDjevUohUguubxCLV3WeuV4yfZt6uMXoCFmJRvPUPRerjN14xbaQDlWJhFIxDuiatEWHVOrCOuXkxRpZgb0QRe819l/tEvNcVTsIacLHa0ibWZua+xdju5hOK54yMgxWh+Zb5i4Yhi/dOGylKm1iMz5jPKSINIV41tzWfHvxm/ClzE0VEMUb9e8y8SFGXblWIDtJBEOxe81pzpaK+UC+b0CZWCRyD96pG8Vhg42VtGBVnmJ+PQBxkp7k7m0EBL+sJaBJxxvxE4WgY/hxF/a2mrSz2sxpGFF0a9eOKwe9c+0/zpMEY6QpBqZNNHWFXsc5WRBWRPzY2UnSBz6i+0I3m7+b5lbGlRFPxB01iAQo249eYT2p+qkmxqvtBtFkNO7NcO38n0nGabNFFrEyvTfePBLzlC8UmqyDKXjIPKcaXCm2itI0TAXcpouLYYg4QaRgcwydSrDQ2XfAPg7FqPWuLctBFrKMV10xsSxb4TfVNAF6ciOt6Fsii3ZU0BlkrmsAZiBRVGijFKp0LsejsmKPVLiOLTncxsXgn0ilja1Is6uVi13QCoYk3IU4VdE0vK076d5hb16fnYZl5ygg8QdExtSENuVr19vcI89fB3ypIgysVTdP3ikYCARMHKZoo9pUo0yBlgBRa1u9J0mCe03A8HHAioHqZo3M8CzbF9mGNcTaYEBRlmpEdBr95PiKQ/zNyGDvKfFvDBuBixVEEARM0G6sU6TBrc9lggOXmNxoan/UXazB+VnsHjV2x72eKjDI2UvWyuSjrFd44q/nnkn8bOMr95ovmiQqh2Hi20Xx0RhS8HpLqck859p2GUUhrzueqh8xzzXcV61fTcX6S+tQ8TxGt1PT9K9fwDI4ErJ3PgV+Zd1auA5laJxYrm4syvNnUaxp+0iHKqif/pQSezX8BSJ2HauE61wXczzqsx7pt2YIvHjgIDoE4k2BPRZlpe1YruOEyxQdSXgax9qhdEQs/q4gkBKN27VO7oseSgM8nHymKKN+uSAPlQQ3vI09fqjjtc+bpMQUQWRcqPvmTj8sWN8F11K6Fvov16NGjR48ePXr0+D/hb5jwFh1I/VimAAAAAElFTkSuQmCC>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,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>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAABRklEQVR4Xu3TPyhGURjH8Ucoev2nZJAogxllsCiKgcFEMgmTxaJYXhOLlM1kY1HvYLBYZBGTweLPoKwGAyUp36fzHPe494263fH+6tP7nuecuuc+5x6RPHny+DRgAp02rsYAJtHuF6VNHfaxiWfM4wRL2MArRn9Wp8g4ltGPN5yh0eY68IQ1G6fKIvowjU+MBHNaf8FqUFvBHc5xhUdc2FjrC9HS39nDLdqC2gw+MGxjfbNdtNh4DtdotvGsuLNMpF7cLo5RZTX9PcKlRC0bwpT9r8CBuI356Jy2OpFyregWd+hF1GILvSjYvO5ad69v4dMlbm0ivv++FRr9RN8xiDGsB3Ma3em9uM39myJu0BrUevCAUxxK1CafeP//TI24+xCPXjg99MpYvVz/M40+VL+4sP+ZRC/eDkr4Ete+bTSFi/LkyTbfGRY0pGvUIVEAAAAASUVORK5CYII=>

[image10]: <data:image/png;base64,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>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAaCAYAAAAT6cSuAAADAklEQVR4Xu2WS8hNURTHl1CEEIWQDAyUUp7JowiZkCiPMBIGJh4hlL6JgZhgoDySgYnIQB4ZCYlMSXnkkYhCKQbk8f+1zuqeu8++19fnDs+/fnXOXufss9Y6a+29zWrVqtVGQ8Qw0Ss1dErzxXvxp8RH8UP8Eg/EStE7XuiANpnPzbdOJ7a14nNhC7jHJ67x65QYGS90R3zkp5hTGiOgzeaO7LbOZni6+C7WpQapn7gq3ooxiW22+CZuioGJLatB4o54IUYktlHidQvb/4igcHJqapBGi1fmARJoWQR0y1q/W9FE8UlcFH0SW2T4sRie2HoqKuCstZ6T6qGK9qQGawTOXx3fbMprmXk9b0kNUpe5bWdxj2OTxTzRtxjjjy4V00pjqRjHvti81B6aB5grdYL6LRYm4zy719yfbYmtpY5Ztd9wZqP5H91V3COCOCxuizPigDgh1oh74pLoXzwbWiCemScIKHH6OJdMKocKYpGbYt4WMEGcNJ+H+XJJqShqmFUI57h+Yp4dnGapDuH0UfM/dc7cQVbSEBmnP3EmNEN8EKuLe5w6ZK17JsrupXkwAd/Dr61WTV5L5fotfj/OLyrG0FixXQw2X4AuW3MZUgHlhYfn7hdwjf6n32aaJyVXHVlFv+1IxskqE6X7EIqElMsqAikniZ6hdw7GQ9JQ61m/oaiyr+Z9/0/l+g2xVBN02bHQCqu+M8t8VaX3QjlHI2m5fmu3vyEqgtIksSS4rdrtbwRNcLnySMsPdVljeaaUSQ7vpllmnCSwxdCH5Z5tt7+h9dZYC9Itq6JJ4otV9zeuL1hzcPvN/0AkpPxOlMt5McD84wS5xPzoFAvHOPHUfNGhf49b8x+IMt5XGkP0dRzZrlujf7Oaa/4BnA84u9F/ITLKZAS5wfw8RxPjIH+IbSJE73SJ5+KGWF6M49QRcdd8tbtiPu8bcc18r+Jd5o+zI7By8wy8M/fjkVhlHTzjUnbsa5RZrE44w6KQ+win/Nx5Lz39U3Ll+1q1atWqVatWN/QXvOvAc2PnaYYAAAAASUVORK5CYII=>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAAAbCAYAAAB4Br2gAAAD20lEQVR4Xu2ZS6hNURjHP6HI25VHSITCFSVKHgO5xQCFREpmDEgZEKNbMjCRV5GUDESREmJgcEtJCAOikEeiCBEKeXw/ay9nn3W2c9Zm33PI96t/Z+21/qez97e+9djriBiGYRiGYRgxbFd9Un1L6Z1qnepYUI92uq/9ZF+qDXFt/OccEJcMG4P6JtVl1QfV5KDNs0R1QdU3bKgjY1WnVfdV21Q9y5t/UqSvo7hnv5GIMnV/C11Va1V3xPXPTFWHMocj1hcNSUQyrQoblFZxbXxm0apaE1bWkYXiZtd7qhNJ+byqV9okxfo6q/aqvqraxHUC5Q3yhx1RENzrWdUX1UnVzaS8KG2SeF8ufDLNCxuUZtVr1SWpDDzXBHxEUF8vhqruqo6LG2EwRdz97pBSxxbtI+EI+sqkDpFIn1UtiaeR0J8fVbOSa5J/v+qFapw3SbwvF9WSiaCeEzfyZgdtXB9SdQrq6wUzKcGYmqqjY1mankkpyYv0dVGdkcrBxZbgmrhEbFQ8oJ/qluqIlN/HKNVz1dbkOtaXm2rJBASZ9j1SGp187lbN96Y6w+8fVl1R9QnaSHKSn+cp2jdE9USyg71L9Ug1KGyoI+xt2eMuD+r9IGhTdZd4X25qJdNwcQG8rRqQ1PHJKPTXtVimepxDV1Ujf3wzGx60TbJngkmq9+Keq2ifL4edALTThqdR0Icst9PDBnGriE/2WF9uaiUTwWU6xLM0qeOTfUSjiO38on2WTDWolUwwR9xUT1Kxj+I4Ib23qDfdxL1l8SbVI2gjQASKDi/aN0H1VrW5zOFg6UvvwRrBXHF9yUtCGgYIA8Uv47G+3MQkE8sZy9xL1WLVKal8u6sGazGZHit+j7eLatB5vGk1B/XhDFGkjwATaF5K/Bsf+JkNUW4UJDIJnd7fwmDVQ9XBpD7WlxufTGy0q0Gw8T2Q/GdLw8QlYawWSO2DUGbGj6otUnrw/uLOS9KdXbSvVZxvRnINLeKOC7Liwqy3SbVeyhMwJNY3UFxfrJDKg1K/JXkq5XvO1eLujxUGYn25YckiSUiqavhgZ43eRkCHs2/j4emE8eIO37g/zofay+cTjBcFgo4oh4ebHr+kIMq/ItZHsuFhuWXZDeGMiLOi6+JmU5KOmZUzpPRsH+uLgv/mXknpARBnDGRnFtU2qY2Ch+YcyN//G8nuiKJ9HBFclJKPMnVZjBb3dwUJOCxoSxPrmybuvs5KdvLCRHGn+P7+jkq2N9bXLjBax4SVfwEkesw+q0gfM1lTot/aX7QzLIHMor3DhoBYn2EYhmEYhmEYhmEYhmEYxr/Bd1FXXkDyxMjrAAAAAElFTkSuQmCC>

[image13]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAaCAYAAADrCT9ZAAADO0lEQVR4Xu2XS6iOaxTHl1CEXAshGaijlHJNLkXIhEQ5RxgJAwYuIZT2xEBMMFAuycBEZCCXDHRCp3MyJeWSSyIKpY4Bufx/rXf5nv187977+/beA/T+61ff+zzP+75rrWet9byfWaVKv5p6imGidz7xs2mQGCp65BNNarb4LJbkE2WaJ16JbwlvxCfxRfwnVphHsbu03vzZvOtkNrdKvCvmAq6xid/YdUKMiBukbeKFGJeMdSheTJSIVggnN5gbt9O6vhOppomPYnU+IfURl82dGJ3NzRL/i+uiv+glzovT1oR9A8Qt8VgMz+ZGimdtzHVFOIrhU/IJaZR4au40zqfCyb+tdi823ReLkzUdaoJ4ax4pIpYqduKeeWPoDrET7Ehbz4ya3JVPWC0YkcKsvSEGJms61FLz+tiYT0gt5nPbi2uMnSTmWq0rEmUaxtRkLBfjzC8yT9M71nYa4uhXsSAbZ+1uc3u2FGPYvPnHigZ1xOrrFwPXme/8juIa4dhBcVOcEvvEMfGX+EdcEH2LtaH54qF50IDyoC+UBThqkkY62bykYLw4bv4cnheB+kMMKX43pKgJuh8G85uaIIo4wrERwpHD5jt6xtxoOniInaHeMTA0XbwWfxbXGHrAOq7fJ+YOBrwPuzZZfUCbUln9Rurg0MJiDI0RW83rhSZ30VqnMJmSNjfW/VsQNdaV+p1hHqiyLGpYUb+cZamIPg/Pz0kUQUpTMpxLA0cNUov7Y5E02DpXvyiy8YN5H+mUyuoXcWwQiNTY0HKrv2emeTenlkNlxkcgy+q3vfMXkTmkNcEm6E2rvfOXQOBwWWrlqYtarHZUUAYEjHvz3WCcwHDcUddpD2jv/EVrrNZb8uOzIU0U763+/OX3OWvt8F7znYogpfdEqp0V/cwNwnE+BvgsjOY0Vjwwb2z0g6PWeqeiBPYkY4g+EZ+jV63JMxfNMX8pDgV8q1LPISLPC3B8rfn3K40Co9lJjqwQtdgiHolrYlkxjqGHxG3zLnvJ/LnPxRXzs5R7eX58KwMnBmvgpbkdd8VK695v+jqRspy7pGh0RQyk8ZS9mH8/7Hau/F8R6ZpeV6pUqVKlSpV+U30Hy93IJrueMfcAAAAASUVORK5CYII=>

[image14]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAaCAYAAAD8K6+QAAAC+ElEQVR4Xu2WS8hNURTHl1CEEJHyzkSUgUcpFCETEgMkI3kMPUIS3YmBGHgMDJAMJCIDJQNJSGRiIuUxIBKFEgbk8f9ZZ/Xtu79z7z19zJx//eqcs87Ze6+111r7mNWqVSvTEDFM9MoNJZostop+uaGV5os34lfCO/FN/BD3xUrROz74B9pgPjZzncxsZeorLojbYlBm6ygm+C7mJM9wZqP5InZatchW1UzxVazNDSVaIX6KF2JUZmsrokA0nouRmY2BGLDM9jfCoS9iem7INELcEG/NM2tis7m9yN/34qLok9kiso/E8MzWU7Hzp63amDvEZnHGqgWiScvM831TbpAa5rbtxT2Lmibmmec+YieXihnJs1w8x75YjBYPzJ1rl95TxHkx0NyxvFQ66qh1/4iFrDffSaIWC8aBg+KWOCX2ieNitbgrLon+xbuhBeKpeXCAtKZuywIZInOOiLnF/S7zADN/JRGNm+ZdkIVx/dh8EBZMOw6xYCZjh4ggi6Njhpg8L/BZ5vWxqrhnhw5Y57RaJA5bV2mEY1WazR+V1ReT7zZfOBOExpifJYPNm81la049dj5tMrx3r4BrVKW+ePecmJQ8wyEcw8FKivralj0nmkS17JyJYKSpFE6kAVpo3qb3x0vSUOtcXzSL9FxNIXiVVFZfKCKULirEuZJ/M9u8e1JrIaKLYzgYioC1qq/x5ruVlgCK7yiBjmp3fuFwq63PUw41xCsxwTx9CQzffjLvoiGeEwCOEeourVF2mrpK0z8Ujl0XAzJbN00VH637+cU1vzCpY3vMIx/BSL+JBnTWfFKaDg4uER+sq0mME0/MGwz1esw8rRF/OWvMx4l6TDVWvDa3M1+paKEMnuYu/4fUW4hI0jxwcJ04Yd4VWRw7w1EQolYa4pm4JpYXz2ksh8Qd8xS6Yj7uS3FVbDH/lvHpyrGWh9bVWAgUZxlrCftnsbew90ikGucGqRFnEwuhAZT9FPO3XhbN/C+eP/T0vlatWrVq1frv9RuxbbEaGXcIGgAAAABJRU5ErkJggg==>

[image15]: <data:image/png;base64,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>

[image16]: <data:image/png;base64,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>

[image17]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAaCAYAAAAJ1SQgAAADKklEQVR4Xu2XS8hNURTHl1CEEJHyzkQU5VEKRciExADJSB5DfCGJvomBGHgMDJAMJCIDJQNJSGRiIuUxIBKFEgbk8f+17upu+557v+NzB746//rVPXvfs89ea6/HOWaVKvUE9RXDRe984n/TEDFM9MonCjRZbBP9svF14ouYkY0XaoF4I34lvBPfxA9xX6yy9npuo/naPOtkNlckTu+CuC0GZXPcf08MzsZbipu+i7nJGAZuMt/YTit3AmU1S3w1P5mutFL8FC/EqGR8qHggdiVjXQpv4bXnYmQ2x+I8pGjuX1Q2/EaIG+KteQROTOamiadiajLWpciH9+Ki6JPNxQk8Mi8E7RARctrKrblDbBFnrNE5OOycNe65pZab58/mfELqNJ/rqF2zUTw63zyXECe+TMxMxnIxzvwSMdo8/DC4VWpMEefFQHNj8zQ7JJYm16V01BoXYnMbzE8c74YRGHVQ3BKnxD5xXKwRd8Ul0b/239BC83DDYUBKUAeKnBvitI6IebVr8hKn83yEk6Zb47NaCq/dNK++bJbfj80XxghaQ4iF2QAniafZMJU6xIbyIjLbPN9W167Z5AFrDMlci8Vhq4doGFumoDVVUb6yod3mxvDQ0BjzXkeZp6Bdtj/DlghJCxn/oy2kraFMvvJfcnFSMoaRGPtXlTdX5Ov2bByv4/2iPhgOSsMwDEudtsi8ZeyPP1m9XbTKVwpS2vdTcGi3VZSvKDyZbjRE38vvmWNetcndEKeAsRgdCic2y9fx5qeapg+K+0ifbqlVf8UJzcImD1fUKV6JCeahj7O495N59Q4xjlNoaeRxmvNEBHmapk4ojL0uBmRzpUQz/miN/ZXfvJ6lxu4xP6FwUHpPFLmz5huhsGE0beGD1QvROPHEvIiR/8fMUwLxtrbWfJ2iV7+x4rX5PM8rLco5D0xzgfdh8jeExylQGL1enDCvxmyYE6Qthci9TvFMXBMrauMUL3rhHfPwu2K+7ktxVWw1v5f16Qaxl4dWL144j17LXmL+s9hbm2+bCFP6GmEV/YzNUWSKPgz4iinyev51w5dLel2pUqVKlSpV6oH6Ddm2uMmCrjjRAAAAAElFTkSuQmCC>

[image18]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAaCAYAAAAqjnX1AAACK0lEQVR4Xu2WTUtVURSG36jAKAorhSBBpElSSBRE6qBBiQ76gIKUHAgNBAeOikqcNAgRHYQNmhYRSdCoaYg0iMhRggRBUNAfUHQUZu/rOtvW2e57b+dOnJwHHu69a5+PdfZee50LlJRscoBepD30UBY7QpvCATvJXjpOv9NROkIX6DT9QE/SdvqVbjh/0dP4x2H6yY2v02tuPNBK++NgNfbQZ3SW7ndxzeBnOg+b4cB9WAL6TKEVmKcDdLeL60H18HOw5F+4sZpcoD/pqXiAjNGZKHYFluTjKB64RaforiiuJK/TTtgKFEpSN9NJx+MBco9ejWLd9DfSN2mmb5C+VuAYbFJS51dEB2tmHiK/POIErM48HXQF28tAM/eIDrpYirqSVAH7QlfN3KEH/UGOcJMletTFz9OXdJ+LpagrSe3sCViCfud+QXrZGmE735eIEntOz2S/q1FXkgEttYp7ki7DEh3OHWGoA7yna/RsFtMSP8D2zZKiUJJKSjWXunAv/YPKbSbUcR+s572Gtaz/oVCSbfQprE/GaIY0U7fjgQy1JiU5RJ/Qy7nR6hRKUq3lHW2IB2DL9422xAMZKgMl+RGWZOpBK1EoSfVHzZZ2pUcloE1zI4p7QkPXa7Q1P1STkOQrpEttC/W3t/QurJXou9qOZuUH7K1R7QIqB/XKWj3RcwnWEXwXWaWLyL//t1DL0IwJtaBz9CbsH1Bq+WO0w7tg55aUlJSU7AB/AXbebqlYGKAKAAAAAElFTkSuQmCC>

[image19]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAaCAYAAAAqjnX1AAACcElEQVR4Xu2VTahOURSGX6GIyG8p6iYTIolIqDshBigUYnBjoAyUn5ufGBhIIvkZkBEZkCglA5G+DCRGBlJKIWWmKCby877WWe7a++yPo5TJeerpfnfv3T77rLX2OkBLy09G0l66jI6uxsbRCb7gfzKUHqQv6Q66nT6hJ+gDOp3OoM/p9+BbOgsDjKWPwvxXujrMT6KH6AV6mE4Lc79lCD1Hr9IRYVwRfEw7sAg7e2EH0N8SykCHbqSDw/h8epcuobPpbdg+u+mgsK7IQvqazswnyAF6JhtbCdv8SDburKfHkT54OL1Jt2Dg4B6ET3RuNdYVPUxpm5xPkH66KhtbTL/QS9m4mEivob6X0qxAfIRF0VEQ9MK7wlgRPUwL9yNNj1DNqM4ieoge1kFaBoqc6mxzGHNU86fpHdiBnT+Vzi82IC30+3QrHRUXBTwqz+j4ML6AXoaltgm6C9dhz+xNp+roLY/CFseb+xT1tIkxsJsfS0QHu0jnVP83QS+letRN1xkaoVSr1RyjH2AH3ZasMNQB7iEteKV4Hxrc0gp1AO2hyMeOUkOHUs2VNl5Ov6F7rXgdr6A99ArstjZBUTtPT6JBaUylZ2G1kaMIKVKb8okKv5V99BRdmsx2xw8YL6mypy9cEbWWW3RYPgFL3ws6JZ+oUBnokA9hhyy9aI4ypsa9s/rtaK814f8E9UdFSwUcUQno0qzNxiPe0PUZ7UmniuhQffQz7MK9Cb6H9d4a6m836B5YK9FvtR1F5RXsq1GqVUfloF5Z6oklvG3F7uG+g5VeDRWsf9xVJ/PoOli/KqU/RzdyEf6idbS0tLS0/Ft+ANBAeumC1h/OAAAAAElFTkSuQmCC>

[image20]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAABI0lEQVR4XmNgGAWDHiQB8W4gFkaXIAdwAPFWKAaxKQYyQPwEiFvRJUgFPEAsCcShQPwbiCOAWByIWZEVkQLigXgWEN8H4p9AvBSIJwGxMrIiUgGx4ccNxKrogtgAseGXA8TXGSBBghe4APEvKI0LgAxZDsSvGCAG4wVUN7AKiJ8DsRK6BBJIBGIrIG4G4itALIYqjQCwCNnDAAl0UHLpYoCEKwyAXNcAxCxArMIACe8MJHkUIALEVxkQERIExAVAzAhXwcAQB8Q2UDZIfAIDHleCFDQC8R0gXgllIydqkKYGNDFtIH4JxDFIYhhAAIrRQTADwnUwAHLEFCA+xUBiQQJS3M8AiSxQ9kTGzkD8kQGSVYkGIMX/CeATQMwP0zAKRgIAAIF0NJgOnuK0AAAAAElFTkSuQmCC>

[image21]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAaCAYAAADG+xDjAAADS0lEQVR4Xu2YS8gNYRjH/3LJrVwjkZCN2EhIiIVcEgsUYu+yklxyq4MkFkKUIj6EBcVCsrA4ZYesyALlk0iyURRy+f+/50zzzntmxpzpnO8M5lf/OmeemXPeeea5vQOUlJQUix7UAP9gSTI9qRHUQN/gMIU6AHNuyxlO3ad+OfpGLXDO6UNd887Z4djbRX/qOsI1LYmaI+yhFvsHW80y2MIu+oYaioar1G6qt2drN1rTO2qCb6gxiDoPCyAXRe0hqoPqGzU1h2nUZ+oG1cuziZnUZaqfb2gzWqvWXEVy+ivrKv5BmJOfUid9Q7PQU9bTrqJ+cXJkBzXVO14ERlOvkOwYReNRapZvINOpL9Q639AsRlIvqU5qlGdbT+1HNxX5DCidF8Kyax71lVoeOSNE93UBdk3AYNg9bqc+UfNhjU4lrqkoOqvUR2qSc3wcdRP2p+1GtXwv9RAWXeeot6hfs8saarPzXU13K8zRH2rS5yPUMOe8phDUJqWD0kIoMvVnSVGQxETqEfW6Aa3tujIZrUUTx3PYgxZywmPElyyhezoNG6d8stbTMahvcA2hJ68JQJOAmEudQjG6vWqi0rziHPtTPVWfOIv4zp6lnqqX3IX5IHfp2wlzqtJDNUizqaKuCMhx36k5zjF9TqunG5DsNNnSyoZYRN2BnRcX7ZlYAXOqZjc5Vn+ch2CHo2aQVXHpGxDUe6Wrm4oKgiTHKMqUeeN9AyzqrsBq8xDPFqDrD8Ki/QF1HDmjVfPcT+oZbCZNu9E0tMdeSq1qQHGOCQiceg/h/j3oAdoNDoWNTWNrNqHJ4ATiHRHUUzldqDYfQ/R+FaVal9D0856aHJqzE2wAJA37RUGOUV2rIrzxldQP2A5Q0XgG0dqZti3VA1SEqzTot7fAsjRAUVpBOA0o654gZ7QqDTthYd/wxS1GXVhRqei8RR2GjVcvqNvUjPDUrn6gMUkzahxy2iXYhKLf24To/SpjVzvfxUbqDXL0GHX52SjuK7K4t1Ea5P0ypQYmh6chJyoS/Wvlg101m4sekMpiEQOuW1AUawTLg8bIbahvpNI+WLTGNb9/mrhtaVbU/PxXnHGq1M7/b1BzyjsKliSgjp42npWUlJSU/EX8BmC9oHSgjQgQAAAAAElFTkSuQmCC>