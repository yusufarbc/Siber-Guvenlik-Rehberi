# **Yönetişim, Risk, Uyumluluk (GRC) ve İş Sürekliliği Planlaması (BCP/BIA) Güvenlik Mimarisi Raporu**

## **Risk Değerlendirme Çerçeveleri ve Tehdit Modelleme Mimarisi**

Modern kurumsal bilgi güvenliği mimarisinde risk yönetimi, rastgele uygulanan yamalardan veya teknoloji odaklı münferit kararlardan ziyade, uluslararası kabul görmüş standartların kurumsal hedeflerle entegre edilmesi esasına dayanır. Fortune 500 ölçeğindeki yapılarda siber güvenlik risklerinin yönetilmesinde iki temel metodolojik çerçeve öne çıkmaktadır: NIST Risk Yönetimi Çerçevesi (NMF \- SP 800-37 / SP 800-30) ve ISO/IEC 27005:2022 Bilgi Güvenliği Risk Yönetimi Standardı1. Bu çerçeveler, organizasyonların güvenlik yatırımlarını optimize etmelerini, yasal uyumluluk sağlamalarını ve operasyonel dayanıklılık oluşturmalarını sağlayan sistematik süreçler sunar1.  
NIST RMF, özellikle sistem yaşam döngüsüne entegre edilmiş, sıkı adımlardan oluşan yedi aşamalı (Hazırlık, Kategorizasyon, Seçim, Uygulama, Değerlendirme, Yetkilendirme, İzleme) bir metodoloji sunar2. NIST yaklaşımında risk, sistem düzeyindeki kontrollerin kurumsal düzeydeki risk iştahı ve operasyonel yetkilendirme (Authorization to Operate \- ATO) süreçleriyle doğrudan ilişkilendirilmesiyle yönetilir2.  
ISO/IEC 27005 ise daha bağlam odaklı, esnek ve yinelemeli (iterative) bir süreç öngörür1. ISO/IEC 27005:2022 revizyonu ile birlikte gelen en büyük yenilik, risk analizinde "varlık tabanlı" (asset-based) yaklaşımın yanı sıra "olay tabanlı" (event-based) senaryo analizlerinin de eşit ağırlıkla sisteme entegre edilmesidir1. Kurumsal bir yapıda bu iki çerçevenin entegrasyonu, NIST RMF’in sunduğu katı teknik kontrol yapılandırması ve yetkilendirme disiplini ile ISO 27005'in sunduğu iş odaklı bağlam analizinin birleştirilmesiyle en optimize sonucu üretir2.

| Boyut | NIST SP 800-30/37 (RMF) | ISO/IEC 27005:2022 |
| :---- | :---- | :---- |
| **Temel Odak** | Sistem yetkilendirmesi (ATO), teknik kontrol seçimi ve yaşam döngüsü takibi2. | ISMS (BGYS) bağlamında risk analizi, işleme ve sürekli iyileştirme döngüsü1. |
| **Metodolojik Yapı** | 7 Adımlı doğrusal ve sistem yaşam döngüsüne entegre süreç2. | Yinelemeli (iterative) 5 ana aşama (Bağlam, Tespit, Analiz, Değerlendirme, İşleme)1. |
| **Risk Analiz Metodu** | Nitel (Qualitative) ve yarı-nicel tehdit/zafiyet analizi1. | Varlık tabanlı (Asset-based) ve Olay tabanlı (Event-based) hibrit analiz1. |
| **Uygulama Alanı** | Regüle endüstriler, kritik altyapılar ve federal standartları hedefleyen yapılar2. | Küresel ölçekteki tüm kurumsal yapılar ve ISO 27001 uyumluluğu hedefleyen kuruluşlar1. |
| **Standart Entegrasyonu** | NIST SP 800-53 güvenlik kontrolleri kataloğu ile doğrudan ilişkilidir. | ISO/IEC 27001:2022 Ek A kontrolleriyle doğrudan entegredir1. |

Tasarım aşamasında siber tehditleri proaktif olarak belirlemek ve sistem mimarisini sertleştirmek amacıyla tehdit modelleme süreçleri işletilmektedir. Microsoft tarafından geliştirilen STRIDE metodolojisi, sistem bileşenlerini veri akış diyagramları (Data Flow Diagram \- DFD) üzerinden analiz ederek potansiyel saldırgan davranışlarını sınıflandırır ve henüz kodlama aşamasına geçilmeden defansif kontrollerin kurgulanmasına olanak tanır5. STRIDE modeli; Spoofing (Kimlik Taklidi), Tampering (Veri Tahrifatı), Repudiation (İnkâr Etme), Information Disclosure (Bilgi İfşası), Denial of Service (Hizmet Dışı Bırakma) ve Elevation of Privilege (Yetki Yükseltme) kategorilerini kapsar5. Bu kategorilerin kurumsal yapılarda ofansif saldırı vektörleri ve defansif mimari kontrollerle dengelenmesi gerekmektedir6.  
Saldırı ve savunma dengesi kurulurken, her bir STRIDE tehdidinin ofansif sömürülme mantığı ile mavi takımın bu tehdidi tespit ve engelleme stratejileri eşit ağırlıkla ele alınmalıdır6. Örneğin, Spoofing (Kimlik Taklidi) kategorisinde bir saldırgan, zayıf oturum yönetimini veya kimlik doğrulama mekanizmalarındaki açıkları kullanarak meşru bir kullanıcının kimliğine bürünebilir (MITRE ATT\&CK T1110 \- Brute Force veya T1556 \- Modify Authentication Process)6.  
Savunma tarafında ise bu durum yalnızca statik şifre kontrolüyle değil, FIDO2 uyumlu donanımsal çok faktörlü kimlik doğrulama (MFA) ve mTLS (Mutual TLS) protokollerinin entegrasyonuyla engellenir6. Benzer şekilde, Tampering (Veri Tahrifatı) tehdidine karşı saldırganlar veritabanı kayıtlarını veya transit haldeki verileri manipüle etmeyi hedeflerken (MITRE ATT\&CK T1565 \- Data Manipulation), mavi takım TLS 1.3 zorunluluğu, SHA-256 tabanlı HMAC bütünlük kontrolleri ve Dosya Bütünlüğü İzleme (FIM) sistemleriyle veri doğruluğunu koruma altına alır6.

                \[ OFANSİF TEHDİT VE SÖMÜRÜ \]  
                             |  
    \+------------------------+------------------------+  
    |                                                 |  
    v (Kimlik Taklidi / T1110)                        v (Veri Tahrifatı / T1565)  
\[Spoofing: Oturum Ele Geçirme\]             \[Tampering: Paket Manipülasyonu\]  
    |                                                 |  
    v                                                 v  
\+-------------------------------------------------------------+  
|               KURUMSAL GÜVENLİK SINIRI                      |  
\+-------------------------------------------------------------+  
    ^                                                 ^  
    |                                                 |  
    | (FIDO2 MFA & mTLS)                              | (TLS 1.3 & SHA-256 HMAC)  
    \+------------------------+------------------------+  
                             |  
                \[ DEFANSİF MİMARİ KONTROL \]

## **Yasal Mevzuatlar, Uyumluluk ve Kurumsal Log Yönetimi**

Kurumsal bilgi güvenliği mimarisinde yasal mevzuatlar, teknik kontrollerin tasarımı ve uygulanmasında en güçlü yönlendirici faktörlerdir. Türkiye sınırları içerisinde faaliyet gösteren veya Türk vatandaşlarının verilerini işleyen organizasyonlar, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK), 5651 Sayılı "İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun" ve BDDK (Bankacılık Düzenleme ve Denetleme Kurumu) tarafından yayınlanan sektörel yönetmeliklere uymakla yükümlüdür10. Küresel operasyonlarda ise bu yükümlülükler Avrupa Birliği'nin Genel Veri Koruma Yönetmeliği (GDPR) kuralları ile paralel yürütülür.

### **KVKK, GDPR ve BDDK Mevzuat Analizi**

KVKK ve GDPR kapsamında, kişisel verilerin korunması ve işlenmesi süreçlerinin uçtan uca izlenebilir olması esastır. Bu doğrultuda, veri tabanı erişimleri, kullanıcı yetkilendirmeleri ve idari işlemler eksiksiz şekilde loglanmalıdır. Herhangi bir veri ihlali durumunda, KVKK kuruluna 72 saat içerisinde bildirim yapılması yasal bir zorunluluktur. Bu durum, adli bilişim analistlerinin ihlalin kapsamını belirleyebilmesi için log verilerinin merkezi, değiştirilemez ve hızlı sorgulanabilir bir yapıda saklanmasını gerektirir (NIST SP 800-61 Olay Müdahale Rehberi ile uyumlu olarak).  
BDDK uyumluluğu çerçevesinde ise finansal kuruluşların bilgi sistemleri üzerindeki denetim izleri çok daha sıkı kontrollere tabidir12. BDDK mevzuatları uyarınca, kullanıcı arayüzü üzerinden hassas verilerin girilmesi esnasında keylogger yazılımlarına karşı önlemler alınması (anti-keylogging) ve mobil SDK'ların çalışma anında dinamik olarak değiştirilmediğinin (runtime integrity verification) kontrol edilmesi zorunludur12.  
Ayrıca gerçekleştirilen finansal işlemlerde, iki faktörlü kimlik doğrulama aşamasının ardından üretilen doğrulama kodları için derhal zaman damgası oluşturulmalı ve banka log sunucusuna aktarılmalıdır12. Replay (tekrarlama) saldırılarını engellemek amacıyla, her bir doğrulama mesajının mutlaka tek kullanımlık rastgele bir değer (nonce) içermesi ve bu işlemlerin iz kayıtlarının dış hizmet sağlayıcılarında dahi olsa bankanın kendi standartlarına uygun ve erişilebilir olması şarttır12.  
5651 Sayılı Kanun ise internet toplu kullanım sağlayıcılarına (şirketler, oteller, üniversiteler vb.), iç ağdan internete erişim sağlayan kullanıcıların IP adresi, MAC adresi, port bilgisi, kullanıcı kimliği ve sistem bağlantı zamanı gibi metaverileri kayıt altına alma ve bu verileri en az 2 yıl boyunca saklama yükümlülüğü yükler10. Logların yasal delil niteliği taşıyabilmesi için SHA-256 gibi güçlü şifreleme algoritmalarıyla özetinin alınması ve TÜBİTAK Kamu SM zaman damgasıyla imzalanması zorunludur10.

| Log Tipi | Kaynak Bileşen | İçerdiği Zorunlu Alanlar | Yasal Geçerlilik Şartı |
| :---- | :---- | :---- | :---- |
| **DHCP Dağıtım Logu** | DHCP Sunucu / Güvenlik Duvarı | Dağıtılan IP, Kiralama Başlangıç ve Bitiş Tarihi, Cihaz MAC Adresi, Ana Bilgisayar Adı (Hostname)18. | TÜBİTAK Kamu SM Zaman Damgası, SHA-256 Hash Bütünlüğü, 2 Yıl Saklama Süresi10. |
| **Hotspot Oturum Logu** | Hotspot Ağ Geçidi / Gateway | Tarih-Saat, Kullanıcı Kimliği (T.C. Kimlik No/Pasaport No/SMS Doğrulama), Kaynak MAC Adresi, Atanan IP18. | Kullanıcı Kimlik Doğrulama Logu ile Eşleştirilmiş Değiştirilemez Log Dosyası imzası10. |
| **URL/Web Trafik Logu** | Proxy / DPI Firewall | Bağlantı Tarih-Saati, Kaynak IP, Kaynak Port, Hedef IP, Hedef Port, Protokol, Talep Edilen URL/Domain10. | Zaman Senkronizasyonu (NTP) yapılmış, dış ortama (SFTP/WORM) günlük aktarılan imzalı arşiv10. |

### **Wazuh Üzerinde 5651 Sayılı Kanun Uyumlu DHCP ve Hotspot Log Analiz Konfigürasyonu**

5651 Sayılı Kanun kapsamındaki DHCP dağıtım ve Hotspot kimlik doğrulama loglarının merkezi olarak toplanması ve analiz edilmesi amacıyla Wazuh SIEM platformu kullanılmaktadır9. Wazuh'un syslog protokolü üzerinden dış cihazlardan log alabilmesi için öncelikle /var/ossec/etc/ossec.conf dosyasına aşağıdaki alıcı konfigürasyonu tanımlanır21:

XML  
\<ossec\_config\>  
  \<remote\>  
    \<connection\>syslog\</connection\>  
    \<port\>514\</port\>  
    \<protocol\>udp\</protocol\>  
    \<allowed-ips\>192.168.10.0/24\</allowed-ips\>  
    \<local\_ip\>192.168.10.50\</local\_ip\>  
  \</remote\>  
\</ossec\_config\>

Sistem ağ geçidinden (Firewall/DHCP sunucusu) gelen Coslat veya benzeri formatlardaki standart dışı logları anlamlandırmak için öncelikle bir özel dekoder yazılmalıdır9. /var/ossec/etc/decoders/local\_decoder.xml dosyasına eklenecek olan dekoder yapısı şu şekildedir:

XML  
\<decoder name\="compliance\_5651"\>  
  \<prematch\>^\\d+-\\d+-\\d+ \\d+:\\d+:\\d+ \\w+ LOG:\</prematch\>  
\</decoder\>

\<decoder name\="compliance\_5651\_dhcp"\>  
  \<parent\>compliance\_5651\</parent\>  
  \<regex\>(\\d+.\\d+.\\d+.\\d+)\\s+(\\d+/\\d+/\\d+ \\d+:\\d+:\\d+)\\s+(\\d+/\\d+/\\d+ \\d+:\\d+:\\d+)\\s+(\[a-fA-F0-9:\]+)\\s+(\\S+)\</regex\>  
  \<order\>assigned\_ip, lease\_start, lease\_end, srcmac, hostname\</order\>  
\</decoder\>

Dekoder tarafından ayrıştırılan alanların, korelasyon motorunda kurallarla eşleştirilmesi ve alarm üretilmesi için /var/ossec/etc/rules/local\_rules.xml dosyasına tanımlanacak özel GRC ve 5651 kuralları aşağıda sunulmuştur9:

XML  
\<group name\="syslog,5651\_compliance,"\>  
  \<\!-- Ana Kural: 5651 Loglarının Filtrelenmesi \--\>  
  \<rule id\="110000" level\="0"\>  
    \<decoded\_as\>compliance\_5651\</decoded\_as\>  
    \<description\>5651 Sayılı Kanun Kapsamındaki Ağ Erişim İzleri\</description\>  
  \</rule\>

  \<\!-- DHCP IP Dağıtım Olayı Tespiti \--\>  
  \<rule id\="110001" level\="3"\>  
    \<if\_sid\>110000\</if\_sid\>  
    \<match\>DHCP LOG\</match\>  
    \<description\>5651: Yeni DHCP IP Adresi Ataması Gerçekleşti\</description\>  
    \<group\>5651\_dhcp,network\_access\</group\>  
  \</rule\>

  \<\!-- Hotspot Kullanıcı Giriş Olayı Tespiti \--\>  
  \<rule id\="110002" level\="5"\>  
    \<if\_sid\>110000\</if\_sid\>  
    \<match\>HOTSPOT LOG\</match\>  
    \<description\>5651/KVKK: Kullanıcı Hotspot Ağ Geçidinde Başarıyla Kimlik Doğruladı\</description\>  
    \<group\>authentication\_success,5651\_hotspot\</group\>  
  \</rule\>

  \<\!-- Saldırganın Log Sistemine Müdahale Etmesi (Ofansif Müdahale Algılama) \--\>  
  \<rule id\="110003" level\="12"\>  
    \<if\_sid\>110000\</if\_sid\>  
    \<match\>failed to write log|log service stopped|audit log cleared\</match\>  
    \<description\>KRİTİK GÜVENLİK ALARMI: 5651 Log Servisi Durduruldu veya Log Dosyası Silinmeye Çalışılıyor\!\</description\>  
    \<group\>service\_failure,compliance\_breach,tampering\</group\>  
  \</rule\>  
\</group\>

Değişikliklerin sunucuda aktif hale gelmesi için Wazuh servisinin yeniden başlatılması zorunludur9:

Bash  
systemctl restart wazuh-manager

### **RFC 3161 Uyumlu Güvenilir Zaman Damgası Süreci ve Kriptografik Doğrulama**

Kayıt altına alınan logların değiştirilemezliğini ispat etmek ve yasal süreçlerde delil bütünlüğünü korumak adına, RFC 3161 standardına uygun dijital zaman damgalama mimarisi işletilmelidir10. Bu standart kapsamında, logların doğrulanma süreci asimetrik kriptografi altyapısına dayanır23.

\[ Log Dosyası \]   
       |  
       v (SHA-256)  
\[ Log Özeti (Hash) \] \+ \[ Nonce \] \===\> (TimeStampReq) \===\> \[ TSA Sunucusu (Kamu SM) \]  
                                                                  |  
                                                                  v (TSA Özel Anahtarı)  
\[ Log Doğrulama \] \<=== (Verification: OK) \<=== (TimeStampResp) \<==+

Aşağıdaki komut dizilimleri, kurumsal log dosyalarının RFC 3161 uyumlu olarak zaman damgasıyla imzalanması ve doğrulama süreçlerini adım adım açıklamaktadır25:

1. **Log Dosyasının Kriptografik Özetinin (Hash) Çıkarılması ve Zaman Damgası Talebinin (TSQ) Üretilmesi:** Saldırganların araya girerek sahte zaman damgası mühürleri üretmesini ve replay saldırılarını engellemek adına, isteğe 64-bitlik rastgele bir değer (nonce) eklenir ve SHA-256 hash algoritması kullanılarak istek dosyası oluşturulur23:  
   Bash  
   openssl ts \-query \-data /var/log/5651/dhcp\_leases\_20261026.log \-sha256 \-cert \-out /var/log/5651/dhcp\_leases\_20261026.tsq

2. **Zaman Damgası Talebinin Zaman Damgası Otoritesine (TSA) Gönderilmesi ve İmzalı Yanıtın (TSR) Alınması:** Oluşturulan .tsq dosyası, HTTP/POST protokolü aracılığıyla akredite zaman damgası sağlayıcısına (örneğin TÜBİTAK Kamu SM) gönderilerek, karşılığında dijital olarak imzalanmış olan .tsr dosyası elde edilir16:  
   Bash  
   curl \-s \-H "Content-Type: application/timestamp-query" \--data-binary "@/var/log/5651/dhcp\_leases\_20261026.tsq" http://tsa.kamusm.gov.tr \-o /var/log/5651/dhcp\_leases\_20261026.tsr

3. **Elde Edilen Zaman Damgası Yanıtının (TSR) Log Bütünlüğü ile Birlikte Doğrulanması:** Mavi takım veya adli merciler, zaman damgalı log dosyasının orijinalliğini doğrulamak için TSA'nın halka açık kök sertifika zincirini kullanarak doğrulama işlemini gerçekleştirir25:  
   Bash  
   openssl ts \-verify \-in /var/log/5651/dhcp\_leases\_20261026.tsr \-data /var/log/5651/dhcp\_leases\_20261026.log \-CAfile /etc/ssl/certs/kamusm\_root\_ca.pem \-untrusted /etc/ssl/certs/kamusm\_sub\_ca.pem

   Eğer log dosyası üzerinde tek bir karakter dahi değiştirilmişse veya zaman damgası geçersiz kılınmışsa doğrulama başarısız olacaktır. Başarılı doğrulama durumunda konsol çıktısı Verification: OK şeklinde döner25.  
4. **Zaman Damgası Paket İçeriğinin Teknik Detaylarının İncelenmesi:** Zaman damgası içerisindeki sertifika zinciri, tescillenen zaman bilgisi ve hash algoritmaları analiz edilmek istendiğinde aşağıdaki komut kullanılır23:  
   Bash  
   openssl ts \-reply \-in /var/log/5651/dhcp\_leases\_20261026.tsr \-text

## **İş Etki Analizi (BIA) ve Operasyonel Dayanıklılık Metrikleri**

Kurumsal iş sürekliliğinin ve operasyonel dayanıklılığın (Operational Resilience) sağlanması, iş süreçlerinin kesintiye uğraması durumunda organizasyonun katlanabileceği finansal, yasal, operasyonel ve itibari kayıpların matematiksel sınırlarının belirlenmesini gerektirir. Bu sınırların tespit edildiği çalışma İş Etki Analizi (Business Impact Analysis \- BIA) olarak adlandırılır.  
BIA süreçleri, felaket kurtarma ve iş sürekliliği tasarımlarına doğrudan girdi sağlayan dört temel zaman tabanlı metriğe dayanır:

* **Recovery Point Objective (RPO \- Kurtarma Noktası Hedefi):** Bir kesinti anında kabul edilebilir maksimum veri kaybı miktarını zaman cinsinden ifade eder. RPO, veri tabanı replikasyon sıklığını ve yedekleme politikalarını doğrudan belirler28. Matematiksel olarak, yedekleme periyodu (![][image1]) ile RPO arasındaki ilişki aşağıdaki gibi olmalıdır:  
  ![][image2]  
* **Recovery Time Objective (RTO \- Kurtarma Süresi Hedefi):** Bir sistemin veya iş sürecinin kesintiye uğradıktan sonra teknik olarak tekrar çalışır hale getirilmesi için hedef belirlenen maksimum süredir28. RTO, sunucuların ayağa kalkma süreleri, ağ yapılandırmaları ve sistem mimarisinin yedeklilik kapasitesiyle sınırlıdır28.  
* **Work Recovery Time (WRT \- Çalışma Kurtarma Süresi):** Sistemlerin teknik olarak ayağa kaldırılmasının (RTO bitişinin) ardından, iş süreçlerinin tam olarak işlevsel hale gelmesi, veri bütünlüğü kontrollerinin tamamlanması ve manuel yapılan işlemlerin sisteme girilmesi için gereken operasyonel kurtarma süresidir.  
* **Maximum Tolerable Downtime (MTD / MAO \- Maksimum Tolere Edilebilir Kesinti Süresi):** Bir iş sürecinin, organizasyona telafi edilemez bir zarar vermeden kesintide kalabileceği toplam azami süredir. Kurumsal iş sürekliliği planlamasının geçerli olabilmesi için, teknik kurtarma (RTO) ve operasyonel normalleşme (WRT) sürelerinin toplamı, hiçbir koşulda maksimum tolere edilebilir süreyi (MTD) aşmamalıdır. Bu durum aşağıdaki formülle ifade edilir:  
  ![][image3]

İş süreçlerinin önceliklendirilmesi ve bu metriklere göre doğru felaket kurtarma yatırımlarının yapılabilmesi adına, kurumsal BT varlıkları önem derecelerine göre katmanlandırılır (Tiering).

| Kritiklik Katmanı | Hedeflenen İş Süreçleri | Örnek Sistemler | RTO Hedefi | RPO Hedefi | Yedeklilik ve DR Stratejisi |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Tier 0: Kritik Ötesi** | Kesintisi anında finansal ve yasal çöküşe neden olan süreçler | Çekirdek Bankacılık İşlem Motoru, Yetkilendirme Sistemleri | ![][image4] Dakika | ![][image5] (Sıfır Veri Kaybı) | Aktif-Aktif Coğrafi Senkron Replikasyon, Stretched Cluster28. |
| **Tier 1: Yüksek Kritik** | Kısa süreli kesintisi operasyonları ciddi şekilde aksatan süreçler | Kurumsal E-Posta, CRM, Dijital Bankacılık Kanalları12 | ![][image4] Saat | ![][image6] Dakika | Aktif-Pasif Sürekli Asenkron Replikasyon (RBD Mirroring)28. |
| **Tier 2: Orta Kritik** | Günlük operasyonları etkileyen ancak alternatifi olan süreçler | ERP, İnsan Kaynakları Sistemleri, Dosya Sunucuları | ![][image4] Saat | ![][image4] Saat | Proxmox Backup Server (PBS) ile Günlük Artımlı Yedek Senkronizasyonu30. |
| **Tier 3: Düşük Kritik** | Kesintisi iş akışını doğrudan durdurmayan destek süreçleri | Eğitim Portalları, Arşiv Veritabanları, Analitik Raporlama | ![][image6] Saat | ![][image6] Saat | Cold Site, Haftalık/Aylık Bant veya Bulut Tabanlı Yedeklerden Kurtarma. |

## **Felaket Kurtarma (DR) Stratejileri ve Hiper-Bütünleşik Sanallaştırma Altyapısı**

Felaket Kurtarma (Disaster Recovery \- DR) planlamasında, ana veri merkezinin tamamen kaybedildiği senaryolar için coğrafi olarak yedeklenmiş istasyonların kurulması gerekmektedir. BDDK uyumluluk kılavuzları ve GRC en iyi pratiklerine göre, Olağanüstü Durum Merkezi (ODM) lokasyonunun seçiminde belirli asgari kriterlerin gözetilmesi zorunludur32.

### **Olağanüstü Durum Merkezi (ODM) Seçim Kriterleri**

* **Sismik ve Doğal Afet Güvenliği:** Ana veri merkezi ile aynı deprem fay hattı, sel yatağı veya fırtına rotası üzerinde yer almayan, jeolojik olarak kararlı bir bölge seçilmelidir32.  
* **Telekomünikasyon Altyapısı:** Birbirinden bağımsız farklı telekom operatörlerinin omurgalarından beslenen, yüksek kapasiteli ve düşük gecikmeli karanlık fiber hat erişimine sahip olmalıdır32.  
* **Demografik Faktörler ve Nitelikli İş Gücü:** Afet anında ana merkezdeki iş gücü kaybını telafi edebilecek, siber olay müdahale ve sistem yönetimi süreçlerini devralabilecek nitelikli teknik personelin hızlıca konuşlandırılabileceği bir demografik yapıda bulunmalıdır32.  
* **Gelişmiş Ulaşım ve Konaklama:** Teknik personelin kriz anında hızlıca intikal edebilmesi için havalimanı, otoban ve demiryolu ağlarına yakın, barınma ve lojistik ihtiyaçları karşılayabilecek gelişmiş olanaklara sahip olmalıdır32.  
* **Maliyet Optimizasyonu:** Yalnızca kriz anında tam kapasiteyle kullanılacak bu yapının vergi, emlak, kira ve işletme maliyetleri rasyonel düzeyde olmalıdır32.

### **Proxmox VE ve Ceph Depolama Tabanlı DR Mimari Tasarımı**

Modern veri merkezi mimarilerinde siber güvenlik çözümleri mimarları, yüksek lisans maliyetleri olan ticari hipervizörler yerine açık kaynaklı, güvenliği sıkılaştırılmış ve hiper-bütünleşik (HCI) yapılara olanak tanıyan Proxmox VE ve Ceph mimarilerini tercih etmektedir30. Proxmox ve Ceph ikilisi, esnek yedekleme ve replikasyon yetenekleriyle kurumsal yapılara Hot ve Warm site çözümleri sunar28.

\+------------------------------------+             \+------------------------------------+  
|  PROXMOX CLUSTER A (Ana Merkez)    |             |    PROXMOX CLUSTER B (DR Merkez)   |  
|  \[Node 1\]   \[Node 2\]   \[Node 3\]    |             |  \[Node 4\]   \[Node 5\]   \[Node 6\]    |  
|  \+------------------------------+  |             |  \+------------------------------+  |  
|  |       Ceph Pool (Primary)    |  |             |  |      Ceph Pool (Secondary)   |  |  
|  \+------------------------------+  |             |  \+------------------------------+  |  
\+------------------------------------+             \+------------------------------------+  
                 |                                                   |  
                 \+===========\> \[ Asenkron WAN Replikasyonu \] \========\>+  
                                (rbd-mirror daemon / mTLS)

#### **Tasarım 1: Active-Active Stretched Ceph Cluster (Hot Site Mimarisi)**

Aralarında 5 milisaniyeden daha az gecikme (RTT \< 5ms) bulunan iki veri merkezi arasında kesintisiz ve sıfır veri kayıplı (RPO ![][image5]) bir Hot Site kurgulamak için Stretched Ceph Cluster konfigürasyonu uygulanır28. Bu mimaride, Lokasyon A'da 3 node, Lokasyon B'de 3 node konumlandırılır29. Ağ bölünmelerinde tarafların split-brain olmasını engellemek adına, gecikme hassasiyeti düşük, bağımsız bir üçüncü lokasyonda (Lokasyon C) kararları oylayacak bir "Witness" (Tanık Monitor) çalıştırılması zorunludur28.  
Ceph üzerinde veri replikasyonunun her iki siteye eşit dağılmasını garanti altına almak için özelleştirilmiş CRUSH Map kuralları tanımlanır. CRUSH haritası, yazılan her verinin en az bir kopyasının Lokasyon A'daki OSD disklerinde, diğer kopyasının ise Lokasyon B'deki OSD disklerinde saklanmasını zorunlu kılar29.

#### **Tasarım 2: Ceph RBD Asynchronous Mirroring (Warm Site Mimarisi)**

Veri merkezleri arasındaki mesafenin uzak olduğu ve ağ gecikmesinin senkron replikasyona izin vermediği WAN koşullarında, asenkron imaj tabanlı aynalama (RBD Mirroring) yöntemiyle Warm Site tasarımı gerçekleştirilir28. Bu yapıda, her iki lokasyondaki Ceph havuzları bağımsız çalışır ve arka planda çalışan rbd-mirror servisleri üzerinden veriler asenkron olarak aktarılır28.  
Aşağıdaki adımlar, siber güvenlik mimarının Proxmox VE altındaki Ceph kümesinde asenkron mirroring kurması için uygulaması gereken CLI komut dizilimini göstermektedir29:

1. **Her İki Ceph Kümesinde Havuz Seviyesinde Mirroring Özelliğinin Aktif Edilmesi:** Öncelikle sanal makinelerin disk imajlarının tutulduğu pve-storage isimli havuzda imaj tabanlı asenkron mod etkinleştirilir:  
   Bash  
   rbd mirror pool enable pve-storage image

2. **Ana Küme Üzerinde Güvenli Erişim Token'ının Üretilmesi:** İki kümenin mTLS protokolü üzerinden güvenle haberleşmesini sağlayacak bootstrap token anahtarı ana veri merkezinde üretilir:  
   Bash  
   rbd mirror pool peer bootstrap create pve-storage \> /etc/pve/priv/ceph\_mirror\_token.txt

3. **Üretilen Token'ın DR Kümesine İthal Edilmesi ve Peer Bağlantısının Kurulması:** Token dosyası güvenli yollarla DR merkezine aktarılarak buradaki Ceph kümesine tanıtılır:  
   Bash  
   rbd mirror pool peer bootstrap import \--direction rx-only pve-storage /etc/pve/priv/ceph\_mirror\_token.txt

4. **Kritik Sanal Makine Disk İmajının Aynalama Sürecine Dahil Edilmesi:** Seçilen kritik bir sanal makinenin disk imajı için asenkron replikasyon başlatılır:  
   Bash  
   rbd mirror image enable pve-storage/vm-200-disk-0

Bu asenkron replikasyon mimarisi sayesinde, ana veri merkezinde meydana gelebilecek bir siber saldırı veya donanım felaketi anında, en son replike edilen veri kümesi üzerinden sanal makineler DR merkezindeki Proxmox sunucuları üzerinde saniyeler içinde ayağa kaldırılarak iş sürekliliği güvence altına alınır28.

#### **Alıntılanan çalışmalar**

1. The ISO 27005 Approach to Information Security Risk Management: 2022 Updates Explained \- Secureframe, [https://secureframe.com/blog/iso-27005](https://secureframe.com/blog/iso-27005)  
2. Security risk management: frameworks, best practices, impact \- ATTACK Simulator, [https://attacksimulator.com/blog/security-risk-management-frameworks-best-practices/](https://attacksimulator.com/blog/security-risk-management-frameworks-best-practices/)  
3. Cybersecurity Risk Assessment Frameworks Compared: NIST, ISO, FAIR, and More, [https://riskaware.io/cybersecurity-risk-assessment-frameworks/](https://riskaware.io/cybersecurity-risk-assessment-frameworks/)  
4. Comparison between ISO 27005, OCTAVE & NIST SP 800-30 \- SISA, [https://sisa.ai/resource/cyberpedia/comparison-between-iso-27005-octave-nist-sp-800-30-sisa-blog](https://sisa.ai/resource/cyberpedia/comparison-between-iso-27005-octave-nist-sp-800-30-sisa-blog)  
5. Using the STRIDE Threat Model: Tutorial & Best Practices \- Drata, [https://drata.com/learn/risk/stride-threat-model](https://drata.com/learn/risk/stride-threat-model)  
6. What Is the STRIDE Threat Model? Beginner's Guide \- 2026 \- Practical DevSecOps, [https://www.practical-devsecops.com/what-is-stride-threat-model/](https://www.practical-devsecops.com/what-is-stride-threat-model/)  
7. Threat Modeling Data Flow Diagrams in 2026 \- Practical DevSecOps, [https://www.practical-devsecops.com/threat-modeling-data-flow-diagrams/](https://www.practical-devsecops.com/threat-modeling-data-flow-diagrams/)  
8. Threat Modeling Process (Historical) \- OWASP Foundation, [https://owasp.org/www-community/Threat\_Modeling\_Process](https://owasp.org/www-community/Threat_Modeling_Process)  
9. Custom rules \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/ruleset/rules/custom.html](https://documentation.wazuh.com/current/user-manual/ruleset/rules/custom.html)  
10. Sophos Firewall ile 5651 Sayılı Kanuna Uygun Loglama Nasıl Yapılır?, [https://firewallpartner.com/sophos-firewall-ile-5651-sayili-kanuna-uygun-loglama-nasil-yapilir/](https://firewallpartner.com/sophos-firewall-ile-5651-sayili-kanuna-uygun-loglama-nasil-yapilir/)  
11. How to Build STRIDE Threat Models for Real-World Applications \- Cyber Sierra, [https://cybersierra.co/blog/stride-threat-modeling/](https://cybersierra.co/blog/stride-threat-modeling/)  
12. T.C. BANKACILIK DÜZENLEME VE DENETLEME KURUMU Sayı: 77574904-010.06.02 Konu: Elektronik Bankacılık Hizmetlerinde ve Elektron \- BDDK, [https://www.bddk.org.tr/Mevzuat/DokumanGetir/1171](https://www.bddk.org.tr/Mevzuat/DokumanGetir/1171)  
13. 5651 Sayılı Kanun 5651 Sayılı Kanun Maddesinin Amacı 5651 Kanun maddesi kimleri kapsamaktadır? \- DPU-WEB, [https://birimler.dpu.edu.tr/app/views/panel/ckfinder/userfiles/2/files/mevzuatlar/5651\_Say\_l\_\_Kanun.pdf](https://birimler.dpu.edu.tr/app/views/panel/ckfinder/userfiles/2/files/mevzuatlar/5651_Say_l__Kanun.pdf)  
14. Bankacılık Düzenleme ve Denetleme Kurumundan: BİLGİ SİSTEMLERİ VE İŞ SÜREÇLERİNİN DENETİMİ HAKKINDA YÖNETMELİK \- BDDK, [https://www.bddk.org.tr/Duyuru/EkGetir/850?ekId=778](https://www.bddk.org.tr/Duyuru/EkGetir/850?ekId=778)  
15. Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik, [https://www.lexpera.com.tr/mevzuat/yonetmelikler/bankalarin-bilgi-sistemleri-ve-elektronik-bankacilik-hizmetleri-hakkinda-yonetmelik/1](https://www.lexpera.com.tr/mevzuat/yonetmelikler/bankalarin-bilgi-sistemleri-ve-elektronik-bankacilik-hizmetleri-hakkinda-yonetmelik/1)  
16. 5651 Loglama Kanunu Çözümleri \- Unna Bilişim A.Ş \- Yeniliklerle Geleceğe Doğru, [https://unna.com.tr/bilisim-guvenligi-cozumleri/5651-loglama-kanunu-cozumleri/](https://unna.com.tr/bilisim-guvenligi-cozumleri/5651-loglama-kanunu-cozumleri/)  
17. log \- Yerli Firewall ve Loglama, [https://xlog.com.tr/docs/tag/log](https://xlog.com.tr/docs/tag/log)  
18. 5651 Coslat Log Kayıt Örneği, [https://blog.coslat.com/2017/03/5651-coslat-log-kayt-ornegi.html](https://blog.coslat.com/2017/03/5651-coslat-log-kayt-ornegi.html)  
19. Klog Server Nedir? | Sophos Firewall | 5651 Sayılı Kanun, [https://www.firewallsophos.com/klog-server/](https://www.firewallsophos.com/klog-server/)  
20. Writing Custom Rules in Wazuh | by Nihat Asadov \- Medium, [https://nihatasadovv.medium.com/writing-custom-rules-in-wazuh-36a018860fce](https://nihatasadovv.medium.com/writing-custom-rules-in-wazuh-36a018860fce)  
21. Configuring syslog on the Wazuh server \- Log data collection, [https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/syslog.html](https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/syslog.html)  
22. Configuring log collection for different operating systems \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/configuration.html](https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/configuration.html)  
23. Verify RFC 3161 trusted timestamp \- Stack Overflow, [https://stackoverflow.com/questions/19528456/verify-rfc-3161-trusted-timestamp](https://stackoverflow.com/questions/19528456/verify-rfc-3161-trusted-timestamp)  
24. Veselin Kolev / tsa-server-rfc3161 \- GitLab, [https://gitlab.discoverer.bg/vkolev/tsa-server-rfc3161](https://gitlab.discoverer.bg/vkolev/tsa-server-rfc3161)  
25. sigstore/timestamp-authority \- GitHub, [https://github.com/sigstore/timestamp-authority](https://github.com/sigstore/timestamp-authority)  
26. openssl-ts, [https://docs.openssl.org/3.4/man1/openssl-ts/](https://docs.openssl.org/3.4/man1/openssl-ts/)  
27. kakwa/uts-server: Micro RFC 3161 Time-Stamp server written in C. \- GitHub, [https://github.com/kakwa/uts-server](https://github.com/kakwa/uts-server)  
28. Replication Proxmox and Ceph \- Reddit, [https://www.reddit.com/r/Proxmox/comments/1ncvhqe/replication\_proxmox\_and\_ceph/](https://www.reddit.com/r/Proxmox/comments/1ncvhqe/replication_proxmox_and_ceph/)  
29. Proxmox cluster duel DC : Disaster recovery \- Reddit, [https://www.reddit.com/r/Proxmox/comments/1k7sf9j/proxmox\_cluster\_duel\_dc\_disaster\_recovery/](https://www.reddit.com/r/Proxmox/comments/1k7sf9j/proxmox_cluster_duel_dc_disaster_recovery/)  
30. Talk on DRP with Proxmox and Ceph \- ASLAN 2025 \- SOLTECSIS During the ASLAN 2025 event, our colleague Víctor Rodríguez, a specialist in virtualization and high availability at Soltecsis, delivered a technical talk focused on the importance of having an effective Disaster Recovery Plan (DRP) using open-source technologies such as Proxmox VE, Ceph,, [https://soltecsis.com/en/talk-on-drp-with-proxmox-and-ceph-aslan-2025/](https://soltecsis.com/en/talk-on-drp-with-proxmox-and-ceph-aslan-2025/)  
31. Proxmox Cluster Disaster Recovery Implementation and Cluster Replication Plan, [https://forum.proxmox.com/threads/proxmox-cluster-disaster-recovery-implementation-and-cluster-replication-plan.165894/](https://forum.proxmox.com/threads/proxmox-cluster-disaster-recovery-implementation-and-cluster-replication-plan.165894/)  
32. İŞ SÜREKLİLİĞİ YÖNETİM SİSTEMİ VE BANKACILIK SEKTÖRÜNE YÖNELİK MODEL YÜKSEK LİSANS TEZİ, [https://openaccess.izu.edu.tr/bitstreams/f09fbb67-5163-4978-b7ac-3c82b2fcad0e/download](https://openaccess.izu.edu.tr/bitstreams/f09fbb67-5163-4978-b7ac-3c82b2fcad0e/download)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAaCAYAAAAe97TpAAACRklEQVR4Xu2WQUgWQRTH/5FJYiVSpFGHL4iwk0V0MUGwgrp4qISgLlLUJSIJiToVGXRVgqCEsIgoKoM6iARZpyCI8KKXKDoKdYg6RKD+/74Zdtpvt08+Vtgv9g8/lnm7b2fezHszAxQqVChJ3eQT+bpE9ptbfrSC3CSPSMm1pREyRw669krSRb6QPc6WG7WQx2RjYGsm72ED3hzY15D7ZEtgy4WUGv0xWzv5QZ6QusCu4IbJ2sCWC/WS7THbcTJPLsbs68lpRCmXa6ke/pDO+ItaUVo91JR2k18or4csdIX8Rnmahmoj02QStpFUpbR6yEqjqPxvbeEvUGUQKti7WN56WEoQyobnqDKIf9XDajJAbpMh2MF40rX11AQchp0jD8jeRS9gFTlDXsLS6TWiINJ8fBAbEPWpp8ZQUZXqwZ/u111by34edpr3kHuwQW8jE6SVXCOXYL56N4YoiCQfHb4+CG3pg+SI+yZVOiM+kO+wWvD8hBWYfhhKafYGtmrHyA5YwApcs3mUnCDvyAEy5Xy8fDql+ag/MU7uuHeZq4m8hQWgJdZgGskrlOf6JvIRf0+EDyLNR9L38rsAS+/wSpSZzpJvZF/M9hBRGu6CbZeaUe14klJKM+8HnuRTQpRO62DpeCv4JjNtJc9gKeXVALtXqcNTsPuY8ngnbMZ1XdHgP5MZcijFR7XxlMySy+QG7DatS2oJGageNjAFoUElSTtIfGvUCihgbQBKI7VDJfksi7Scmo1zpA82YzWpDnLVPQsV+h+1AOQDdzaPuKJoAAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAAzCAYAAAAq0lQuAAADmElEQVR4Xu3dS6huYxgH8Fco5JJLyW1AIhFJrqFIIjGQiQxFJxlISUyEJJEkEuWWlKSYKSlKGVBCMcGARDlhgkjh+bfWOt/b2t8+7S32d3b9fvXvfGs9a59v7dnT875r7dYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2n8Mrl1dOqew9qwEArMT+lZcq36yTVxaX7pEOqLxc+XvMD+O/T1aO7a67pLvmp/G6XyqPdddcXHmzckPlrcoXXQ0AYGVuqezojtPQ3Dl+vrpyd1fbas+2oYHaa15YIvd9e3ec3yHneu9VvuqOD6y8W7mi8lTlnK4WmbI90Tb2/QAA/5tMoo7pjv+sXDh+zqTp2q62VU5vQ6N28rywG/19xzR16/1Yea07PrTyYeWRyl/d+Unqn1WOmBcAAFbljDY0NPvMC1sg+8UyAXt4XtiATML6+z6+8kHlpF1XDOZN3duVnW1o7B7ozk9OqHxdOWpeAABYlUzUpuXQrXZHW7skuVHXVL5sw/Lmb5Xv29oHBrL8+UcbJm/PVF6sPN+GKV6ma5ctLt0l59JEHjQvAACswrQ82C+PbsbHbfkkKg1S9sJtVP6PdyrnzgvrmPahHdmdSzOWaWEvTd2y/Xj5vmVTtOPa8NDBqbPzAAArc1bl1/bvl0PXa9jSPG2mYYu8WiNLo1e1tZOyuSyHZm/adN9T45nlzN7jbfkULfvTljVsd7W1e+AAAFYqy4PZ49U7rfJpG56SvL8N06zXu+MT2zDdis/b0PSkftFYv7UtGrYsQx49XrsZee3IG5XD5oVRnuLs7/uCNix95l6yl22/NvweP4+fl0ktv//k0sqjbfhuAICVu6/ybVu8o+y7Njw5GplaZTN/lhvTfGXDfq69rvJQG16jMT11OU3YUr9prKdZS+6tHDJe919J8/VCW9x3GsWD2/A9eZgg+/Gea0Pz2L9/7ca21tlt2AOXn8nTqVOTCgCwLaRZe7UN06Z8ztOXkeO8v+z98ThNThq21M8f61e2xYTtk8qZ47XLpAHLzy9Llkg1UAAAu5HJ0yTN2M1tmJrtW3mwcn3l98rTYz0PDaSejf95YjN/NSATrOwVW0+auyybLss9bViOBQBg5qPKec10CwBgj3XbGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2g38Ag1SUGRpC5rUAAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAAzCAYAAAAq0lQuAAAFHElEQVR4Xu3cT6htVR0H8CUaZKaRhhElaopgJgYRQdikTFJSRBMEQ7CJ4kRyEpkUBRGlA/sjQYlmIoiE4iCIdPDMgaHgQMxCkp4SCooFYoL4d31Ze3nXW+/cc9+VK/Iunw/8uGf/9j57r3Pu4Pz4rbV3KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO+ND9T4Zo2z5x0AAO+n+2q8VePNeUd1bI3HS9v/bI1n1sQRy3s+VuOB5T2J/9R4o7TzXLQcs5Pm6/23xt4aP1r2H172H+sYdy7HXV/jqdIKtuuW7bx3JzxUNsb3+RqfGrafrHFKjW8NuXvb28qHatwx5J9f/t5U2jniK2X/zzQGALBLfLfGS3Oy+n6Nv5dWjF015C8trXDozhtedykAzxq2D6nx6xqfHXKjo2r8rcYF844DlPGcM2zftmxvNe5ra7xQWndt9Msa/5tyszNq3DAnN5Hr5nvuct1xLPl+UiiukuOuGbZznuQ+XuOuIf9IjU8urz9c4/ZhHwBwEDusxm9qPD3l84P/1Rr/r/HB0ro63c01Xhu2UwiNcvxzNT495VMgXTHlRikMr67x7bK97tZ8vSNrPFjj3LL1uC8vrfs3m4u7VdIt+9Wc3ETOlSKtSzdvPP9pNX4+bI8y5jOH7d51S0H8nSGfojv/z/hoaUUnALALpBD4WY0/lfYjHyeX1sW5tbRCaJbC4I9zcpBC4idzsrQu0dhlWufQ0jpu6bxtZbxeOlVP1Lh7Y/c75nGfWNqU7VxYRs63kwVbCt90/SLvu7Dse/7vlTb22amljbkXYhnzw6VNo87GYhQA2EVSQKV4SPepr4tKJyivMx16/5IbzdN7s+wbp0MjxUgKwLkbt06fJj163jHJ9R6rsafG6zVOL6uLn3nc5y+5dOhmKWB3umDLd5mp11+U9t7kIt3M45bXs4zxX6V9tldKK6BTzM5SbO+dkwDA7vCH0qYQU7RlzVduNOjruVKwjOvCohcGfa3ULPm9Zf8i6OulrWvrnaJ1suA/U5qrCpNZv16/6SHFT6Ybs75rtGrcfS3YKsnfOCdLG9tvl7inxj+H7cT8fXWZcs4as1tK+47TOXuxxkll32nbUT7LnrLvZ0mXLmvnZimE1xXRAMBBLNOhkanRK8vGOqt0qFatQ0tnaJyim6WztuqO07+UdkfkOp8o7caEL5bVHbJV5utlvCmM+vRut2rcWU+3qmA7ocY/ykbHcTPb6bBlTCnaLl6281mz/YMaX+sHTXpRN65Ly3nm/0nvXo7r3ACAXSJTjV9YXqeA+GuNjyzb+fGf16EdSGHw57LvurfPlDa9+LkhN8uNBr+bkwdovt4lpXWl0p366ZLbbNz9hosUiF2O2ztsr7Odgi3Toa8O2717lnNsJsXruC7tS6WdI/+rrGXrXcw+vbpZEQ0AHKRSnKW7lMizyFJAfHnZ15/3lfj3kvtxac9T6/k8l22csjymbDzTLZFngGVBf+7AvGw4bqfM18u0YsZzfGmdqzweJB2qrcadu1GzNqw/fy13Vh7IjQ6xnYItU5lZJ9j1gm2zTuLvy8aYM/WaMaWYTuGX6c9MrebGg0eH414u6wtAAIB3LZ2idI1WRQqzzYqa91vG9405CQCwG2Wh/rhwf4wfltaNAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBi9DRZUB0uvXnC0AAAAAElFTkSuQmCC>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAAn0lEQVR4XmNgGAWjYDgCbiBmRRekBVAH4tVAvAyIRdHkqAYYgdgciPcD8RQglkWVph5gBmInID4MxN1ALIwqTT0AssgfiE8AcQ0Q86FKUw+AEkEEEJ8D4nwGSMKgKXAE4gdAnAHEnKhStAPIvixjoGFwogNYPJ5moHGCQQfoWUISVZp2AGSxHhBvB+K5QKyIKk1bALKsC4hV0CVGwcgBAOc5EUgX07EAAAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZCAYAAABQDyyRAAABi0lEQVR4Xu2UPyhHURTHj6TID8kgRSGlTIrVIlmUFMMPMwuRxWBSMjAabQZlUgYTwysDMVhkYLAosRv9+X6793Heee/6LZ4M71OfXr/zbr9z7rnnPpGCgnzphdtwF87AuuTrfJmEt7AfluAGPIFNelFedMB7OKtizfAKLqpYClbaAqvsC0OtDRiY+BUOqBj/cx9G4vIkYFsO4If3BU7Dar3I0wAXbNCwI+kCyB58gt06yMq24Bys8bEueAgvYJ+PxfBs10zMwkShAlJxns2KpNvO38PizvJa3CRH4opq/16Wgu2NJCORBArg1ejUAQO7wkK4az7jLoWoh6eSkUgCBcQMipsD7nAZNiZff8EBHLNBQyhRKC7j8A4uwbK4hc+SPYi8YpVmYFOyE/F/H8UcIVvGrxWvn4aLjuAlHIJt/nnmnz/BDb3BERVj5469iWvcCud1QMHds93n8B3eiJsDO7AWboaFr6tYj7jds8N/AmfqAa7CKXFfQV73SkP8q/B4R+GEuNkpKCj4f3wCwb9FSu80v+0AAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAWCAYAAABHcFUAAAAApElEQVR4XmNgGAWjYBQMHcANxKzoggMF1IF4NRAvA2JRNDm6AkYgNgfi/UA8BYhlUaXpC5iB2AmIDwNxNxALo0rTF4Ac4w/EJ4C4Boj5UKXpC0AJNwKIzwFxPgMkMQ84cATiB0CcAcScqFIDC5BDq4xhgKMOHcDS1WmGQZDI0QF6cSCJKj2wAOQ4PSDeDsRzgVgRVXrgAchBXUCsgi4xCkbBYAYAxfARSPZkaxYAAAAASUVORK5CYII=>