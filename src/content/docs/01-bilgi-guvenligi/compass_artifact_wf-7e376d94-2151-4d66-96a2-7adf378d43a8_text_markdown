# Bilgi Güvenliği Stratejisi, Temelleri (CIA) ve Maliyet Yönetimi (TCO): Fortune 500 Ölçeğinde Savunma Derinliği Perspektifi

## TL;DR
- **CIA Üçlüsü (Confidentiality–Integrity–Availability)** hâlâ tüm güvenlik mimarisinin çekirdeğidir, ancak modern kurumsal ortamda tek başına yetersizdir: STRIDE (saldırgan perspektifi), Parkerian Hexad (Possession/Authenticity/Utility) ve AAA modelleriyle genişletilmeli; NIST SP 800-53, CIS Controls v8.1 ve ISO 27001:2022 kontrolleri aracılığıyla somut teknik karşılıklara (şifreleme, hashing/FIM, high-availability cluster) bağlanmalıdır.
- **Maliyet tarafında karar netliği**: IBM/Ponemon *Cost of a Data Breach Report 2025*'e göre küresel ortalama ihlal maliyeti 4,88 milyon USD'den **4,44 milyon USD'ye** geriledi (beş yıldaki ilk düşüş, AI destekli daha hızlı tespit kaynaklı); Gordon-Loeb modeli güvenlik yatırımının beklenen kaybın **1/e ≈ %37**'sini aşmamasını matematiksel olarak gösterir; açık kaynak (Wazuh) lisans maliyetini sıfırlasa bile gizli OpEx (mühendis emeği) ile TCO'yu domine eder. **Kritik uyarı: IBM raporu Türkiye'yi ayrı ülke olarak ölçmez** — "Orta Doğu" örneklemi yalnızca Suudi Arabistan ve BAE'den oluşur.
- **Üretici konsolidasyonu** tek cam panel (single pane of glass), düşük MTTD/MTTR ve otomatik korelasyon sağlar (Gartner: kurumlar ortalama 45 güvenlik aracı yönetiyor) ancak vendor lock-in ve single point of failure (CrowdStrike Temmuz 2024 kesintisi örneği) riskleriyle savunma derinliğine gerilim yaratır; karar, risk iştahına ve CISA tedarik zinciri rehberlerine dayandırılmalıdır.

---

## Key Findings

1. **CIA bileşenleri kurumsal topolojide doğrudan teknik kontrollere eşlenir.** Gizlilik → şifreleme/RBAC/DLP; Bütünlük → hashing/dijital imza/FIM; Kullanılabilirlik → HA cluster/yedeklilik/DDoS koruması. FIPS 199 ve NIST SP 800-53 bu üç bileşeni düşük/orta/yüksek olarak derecelendirir ve en yüksek derece kontrol baseline'ını belirler.

2. **CIA tek başına modern tehdit yüzeyini karşılayamaz.** STRIDE, CIA'nın ince taneli ve saldırgan-merkezli karşılığıdır; Authentication ve Non-repudiation gibi CIA'da bulunmayan boyutları ekler. Parkerian Hexad, Fortune 1000 ölçeğinde daha granüler risk analizi için üç ek nitelik sunar.

3. **İş hizalaması, risk iştahı/toleransı ayrımı ve board-seviyesi KPI/KRI ile yönetilir.** NIST CSF 2.0'ın yeni **Govern** fonksiyonu (GV.RM-02) risk iştahı ve tolerans ifadelerinin oluşturulması, iletilmesi ve sürdürülmesini açıkça gerektirir.

4. **Türkiye mevzuatı çok katmanlı ve cezai açıdan ağır yükümlülükler getirir.** KVKK m.12 (teknik/idari tedbirler + 72 saat ihlal bildirimi), 5651 loglama, BDDK BSEBY ve BTK/USOM-SOME yapısı. KVKK 2024'te 862 veri sorumlusuna toplam ~552,7 milyon TL idari para cezası uyguladı.

5. **Konsolidasyon ile savunma derinliği arasındaki denge, risk iştahına göre kurulmalıdır.** Operasyonel sadeleşme gerçek bir kazançtır, ancak kritik katmanlarda tek-üretici bağımlılığı tek hata noktası yaratır.

---

## Details

### 1.1.1 CIA Üçlüsünün Derinlemesine Analizi ve Teknik Karşılıkları

CIA Üçlüsü (Gizlilik, Bütünlük, Kullanılabilirlik), tüm siber güvenliğin merkezî dayanağıdır; her saldırı ve savunma bu üçlü bağlamında değerlendirilebilir. Bir kurumsal topolojide her bileşen somut teknolojilerle hayata geçer:

**Gizlilik (Confidentiality)** — yetkisiz erişime karşı veri ve kaynak koruması:
- **Şifreleme (Encryption)**: Veri durağanken (at-rest) AES-256, veri aktarımda (in-transit) TLS 1.3. KVKK Teknik Tedbirler Rehberi, disk şifreleme yöntemini ve "uluslararası kabul gören şifreleme programları"nın kullanımını; asimetrik şifrelemede anahtar yönetimi süreçlerine özen gösterilmesini açıkça önerir.
- **Erişim Kontrolü**: RBAC (Role-Based Access Control) ve ABAC (Attribute-Based Access Control), "İzin verilmedikçe her şey yasaktır" (deny-by-default) ilkesi ve en az ayrıcalık (least privilege).
- **DLP (Data Loss Prevention)**: Hassas verinin kurum dışına sızdırılmasının (data exfiltration) engellenmesi.

**Bütünlük (Integrity)** — verinin yetkisiz değiştirilmemesi:
- **Hashing / Integrity Checks**: SHA-256 özetleme; **FIM (File Integrity Monitoring)** dosya içeriği, izin ve sahiplik değişikliklerini gerçek zamanlı izler. Örneğin Wazuh'un FIM modülü, değişikliği yapan kullanıcı ve uygulamayı da kaydederek temel bir savunma katmanı sağlar.
- **Dijital imza**: Public-key kriptografi ile köken/yazarlık doğrulama (aynı zamanda authenticity).
- **Zaman damgası**: 5651 ve KVKK kapsamında logların TÜBİTAK kök zaman damgası ile mühürlenerek "değişmezlik" (immutability) ve adli delil niteliğinin sağlanması.

**Kullanılabilirlik (Availability)** — veriye ihtiyaç anında erişilebilirlik:
- **High Availability Clustering**: Active-active/active-passive küme yapıları, otomatik failover.
- **Yedeklilik (Redundancy)** ve felaket kurtarma (Disaster Recovery), düzenli test edilen yedekler.
- **DDoS koruması** ve kapasite/yük dengeleme.

> **Saldırı/savunma dengesi notu — OT/ICS özelinde:** IT ortamı gizliliği öncelerken, Operasyonel Teknoloji (OT) ortamları **kullanılabilirlik → güvenlik (safety) → bütünlük** sırasını izler ve geçici olarak gizlilikten ödün verebilir. Stuxnet (2010) sonrası NIST SP 800-53 (Rev. 4 ve 5) ICS/SCADA rehberliğini içerecek şekilde olgunlaştı. Fortune 500 ölçeğindeki üretim/enerji yapıları için savunma mimarisi bu öncelik tersine dönüşünü dikkate almalıdır.

**Gerçek saldırı senaryolarıyla CIA ihlalleri** (ofansif-defansif eşleme):
- **Ransomware** = Kullanılabilirlik + Bütünlük ihlali (şifreleme verileri erişilemez/değiştirilmiş kılar); çift gasp (double extortion) modelinde **Gizlilik** de ihlal edilir.
- **SQL Injection** = Bütünlük + Gizlilik ihlali (veritabanına yetkisiz okuma/yazma). STRIDE'da bu, Tampering + Information Disclosure'a karşılık gelir.
- **DDoS** = Saf Kullanılabilirlik ihlali (STRIDE: Denial of Service).
- **Credential theft / privilege escalation** = Gizlilik + Yetkilendirme ihlali (STRIDE: Spoofing + Elevation of Privilege).

**NIST SP 800-53 ↔ CIA mapping'i**: Access Control (AC) ailesi → Gizlilik; Audit and Accountability (AU) → Bütünlük/izlenebilirlik; Contingency Planning (CP) → Kullanılabilirlik. NIST SP 800-53 Rev. 5, gizlilik (privacy) kontrollerini güvenlik kataloğuna entegre ederek GDPR/KVKK gibi rejimlerle örtüşmeyi artırmıştır.

**CIS Controls v8.1 ↔ CIA örtüşmesi**: 18 kontrol, **153 safeguard**, üç Implementation Group: **IG1 = 56 safeguard** (temel siber hijyen, her kurum için asgari), IG2 (toplam ~130), IG3 (tümü). Verizon DBIR verisine göre ilk beş temel kontrol yaygın saldırıların ~%85'ini azaltır; CIS Community Defense Model'e göre tüm kontroller MITRE ATT&CK tekniklerinin yaklaşık **%86**'sına karşı savunma sağlar. v8.1 (Haziran 2024) NIST CSF 2.0 ile hizalandı ve yeni bir **Govern** güvenlik fonksiyonu ekledi. Kontroller doğası gereği defense-in-depth (örn. Control 1-2 envanter, 4 yapılandırma sertleştirme, 6 erişim, 8 log, 13 ağ izleme) yapısındadır.

**ISO 27001:2022 Annex A ↔ CIA**: **93 kontrol**, dört tema — **Organizational (37), People (8), Physical (14), Technological (34)**. 2013'teki 114 kontrolden konsolide edildi (24 kontrol birleştirildi), **11 yeni kontrol** eklendi: A.5.7 Threat Intelligence, A.5.23 Cloud Security, A.5.30 ICT Readiness for BC, A.7.4 Physical Security Monitoring, A.8.9 Configuration Management, A.8.10 Information Deletion, A.8.11 Data Masking, A.8.12 DLP, A.8.16 Monitoring Activities, A.8.23 Web Filtering, A.8.28 Secure Coding. Statement of Applicability (SoA) ile risk-bazlı seçim ve gerekçelendirme zorunludur. NIST CSF 2.0 ile ISO 27001 Annex A arasındaki örtüşme ~%85 düzeyindedir.

### 1.1.2 CIA Üçlüsünün Ötesi: Genişletmeler

**Parkerian Hexad** (Donn B. Parker, 1998): CIA + **Possession/Control** (sahiplik/kontrol kaybı — örn. şifreli ama çalınmış yedek bant), **Authenticity** (köken/yazarlık doğruluğu) ve **Utility** (verinin kullanılabilir/anlamlı halde olması — örn. kurtarılan ama anahtarı kaybolmuş şifreli veri). CIA'nın aksine insan faktörünü ve hukuki/etik boyutları kapsar; kurumsal-ölçek GRC, red-team modelleme ve olay müdahale planlaması için daha yüksek granülerlik sağlar. Dezavantajı: teknik olmayan paydaşlar için fazla soyut kalabilir.

**STRIDE** (Microsoft; Loren Kohnfelder & Praerit Garg, 1999): Tehdit kategorileri ve ihlal ettikleri güvenlik özellikleri:
- **S**poofing → Authentication ihlali
- **T**ampering → Integrity ihlali
- **R**epudiation → Non-repudiation ihlali
- **I**nformation Disclosure → Confidentiality ihlali
- **D**enial of Service → Availability ihlali
- **E**levation of Privilege → Authorization ihlali

STRIDE, CIA'nın "savunma hedefi" bakışına karşılık **saldırgan perspektifi** sunar ve CIA'da bulunmayan Authentication/Non-repudiation/Authorization boyutlarını ekler. Tasarım aşamasında tehdit modelleme (örn. OWASP Threat Dragon, Microsoft Threat Modeling Tool) için endüstri standardıdır; STRIDE-per-Element ve STRIDE-per-Interaction varyantları mevcuttur.

**AAA** (Authentication, Authorization, Accounting): Kimlik doğrulama, yetkilendirme ve hesap verebilirlik — özellikle ağ erişimi (RADIUS/TACACS+) ve IAM mimarilerinde CIA'yı operasyonel hale getirir.

### 1.1.3 İş Hedefleriyle Siber Güvenlik Stratejisinin Hizalanması

**Business-Aligned Security Strategy — CISO'nun CXO diliyle konuşması**: NIST'e göre risk yönetişimi, güvenlik kararlarını misyon/iş çıktılarına bağladığında en iyi sonucu verir. CISO, teknik metrikleri (örn. zafiyet sayısı) iş diline (örn. "X saatlik müşteri kesintisi riski", "düzenleyici ceza maruziyeti") çevirmelidir. NIST CSF 2.0'da **Govern** fonksiyonunun merkeze alınması, siber güvenliği bir "IT problemi" olmaktan çıkarıp board-seviyesi kurumsal risk konusu haline getirir; bu da bütçe görüşmelerini misyon ve yasal yükümlülüklere bağlanabilir kılar.

**Risk İştahı (Risk Appetite) vs Risk Toleransı (Risk Tolerance)** — NISTIR 8286A:
- **Risk iştahı**: Kurumun stratejik hedefleri peşinde kabul etmeye istekli olduğu **toplam, kurum-geneli, niteliksel** risk seviyesi; üst yönetim/board tarafından beyan edilir.
- **Risk toleransı**: Belirli bir risk kategorisi için kabul edilebilir **ölçülebilir, niceliksel** sapma (dolar eşiği, yüzde, kesinti penceresi).
- Pratik örnek: İştah = "Dijital dönüşümü mümkün kılmak için orta düzey siber risk kabul ederiz"; tolerans = "Hiçbir tek siber olay 4 saatten fazla müşteri-yüzlü kesintiye yol açamaz." NIST CSF 2.0 GV.RM-02 her ikisinin de oluşturulmasını, iletilmesini ve sürdürülmesini zorunlu kılar.

**Yatırım önceliklendirme çerçeveleri**:
- **NIST CSF 2.0** (Şubat 2024, CSWP 29): Altı fonksiyon — **Govern (yeni), Identify, Protect, Detect, Respond, Recover**; 22 kategori, 106 alt kategori. Stratejik "ne" katmanı; ölçeği kritik altyapıdan tüm kurumlara genişletildi.
- **ISO 27001:2022**: Sertifiye edilebilir ISMS — operasyonel "nasıl" katmanı.
- **COBIT**: BT yönetişimi; özellikle Türk bankacılık sektöründe BDDK düzenlemeleriyle birlikte yıllarca esas alınan standart.

**Board-level reporting KPI/KRI metrikleri**: MTTD (Mean Time to Detect), MTTR (Mean Time to Respond/Recover), patch compliance rate, vulnerability density, IG1 safeguard kapsama oranı. IBM 2025'e göre ortalama ihlal yaşam döngüsü **241 güne** düştü (dokuz yılın en düşüğü; ~158 gün tespit + ~83 gün kapsama).

**Türkiye'deki yasal zorunluluklar** (mevzuat entegrasyonu):
- **KVKK m.12 (6698 sayılı Kanun)**: Veri sorumlusu (a) hukuka aykırı işlemeyi, (b) hukuka aykırı erişimi önlemek ve (c) muhafazayı sağlamak amacıyla "uygun güvenlik düzeyini temin etmeye yönelik her türlü teknik ve idari tedbiri" almak zorundadır. Kurul, "teknolojinin ulaştığı seviye" kriterini kullanarak MFA, EDR, SIEM gibi bugün standart kabul edilen teknolojilerin yokluğunu doğrudan "ağır kusur" sayar. İhlal bildirimi: Kurul'un 24.01.2019 tarih ve 2019/10 sayılı kararıyla "en kısa süre" **72 saat** olarak yorumlanır. Yıllık en az bir kez bağımsız sızma testi (pentest) beklentisi mevcuttur. **Yaptırım ölçeği**: KVKK'nın 2024 Yılı Faaliyet Raporu'na göre (Mart 2025, Ankara) 2024'te **862 veri sorumlusu hakkında toplam ~552.668.000 TL** (rapor metninde 552.188.101 TL) idari para cezası uygulanmış; 8.186 ihbar/şikâyetten 6.958'i sonuçlandırılmış, 281 veri ihlal bildirimi Kurula intikal etmiş, 63'ü kamuoyuna ilan edilmiştir.
- **5651 sayılı Kanun**: Erişim sağlayıcılar trafik bilgilerini saklamakla (kanun md. 6/b: "altı aydan az ve iki yıldan fazla olmamak üzere" yönetmelikle belirlenen süre) ve bu kayıtların doğruluğu/bütünlüğü/gizliliğini zaman damgası (HASH) ile sağlamakla yükümlüdür. KVKK logları (kimin/ne zaman/ne amaçla eriştiği) ile 5651 trafik logları karıştırılmamalıdır. Log tutmama: 5651 sk. md. 6/3 uyarınca 10.000–100.000 TL idari para cezası.
- **BDDK BSEBY** (Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik, Resmî Gazete 15.03.2020; uygulama 1 Temmuz 2020): "Bilgi Sistemlerine İlişkin Risk Yönetimi ve İç Kontrollerin Tesisi" başlığı altında yedi bölüm (Bilgi Sistemleri Yönetişimi, Risklerinin Yönetilmesi, Bilgi Güvenliği Yönetimi, Sistem Geliştirme/Değişiklik, Süreklilik ve Erişilebilirlik, Dış Hizmet Alımı, İç Kontrol/İç Denetim). Yönetim kurulunu bilgi varlıklarının gizliliği, bütünlüğü ve erişilebilirliği için etkin kontrollerden sorumlu kılar; md. 34-35'te kimlik doğrulama, işlem güvenliği ve inkâr edilemezlik (non-repudiation) düzenlenir; özel/topluluk bulutu kullanımı ve yerli ürün teşviki içerir.
- **BTK/USOM ve SOME yapısı**: 2013-2014 Ulusal Siber Güvenlik Stratejisi kapsamında BTK bünyesinde kurulan USOM (TR-CERT), kritik sektörlere (enerji, bankacılık/finans, ulaştırma, elektronik haberleşme, su yönetimi, kritik kamu hizmetleri) yönelik koordinasyon yapar; kamu kurumları ve kritik altyapı işletmecileri **Kurumsal SOME** kurmak ve siber olayları USOM'a (Siber Olay Değerlendirme Formu ile) bildirmekle yükümlüdür. **Güncel gelişme**: 12.03.2025 tarihli 7545 sayılı Siber Güvenlik Kanunu ile Siber Güvenlik Başkanlığı (SGB) kurulmuş; BTK'nın siber güvenlik yetkileri SGB'ye devredilmekte, USOM hizmetleri siberguvenlik.gov.tr üzerinden yürütülmektedir. Kanun, kritik altyapılar için yetkilendirilmiş/sertifikalı tedarikçi kullanma ve yerli-milli çözüm önceliği gibi yükümlülükler ile kademeli yaptırımlar (bildirim/tedarik aykırılıkları 1-10 milyon TL; kritik altyapıya saldırılar 8-12 yıl hapis) getirir.

**Zero Trust (NIST SP 800-207, Ağustos 2020) vs Perimeter Güvenliği**: Geleneksel perimeter modeli "kale ve hendek" mantığıyla ağ içini güvenli varsayar; perimeter aşıldığında yanal hareket (lateral movement) engelsiz kalır. Zero Trust bu varsayımı tersine çevirir — "asla güvenme, her zaman doğrula" (never trust, always verify); güven ağ konumuna/sahipliğe değil, her erişim isteğinde kimlik, cihaz duruşu ve bağlam doğrulamasına bağlanır. Koruma odağı ağ segmentlerinden **kaynaklara** (varlık, servis, iş akışı) kayar. Kavramsal kökü Jericho Forum'un 2004'teki "de-perimeterization" çalışmasıdır. ZTA, CIA'yı her erişim noktasında sürekli kanıtlanan bir özelliğe dönüştürerek operasyonelleştirir; remote work, BYOD ve bulut varlıkları için perimeter modelinden üstündür.

### 1.1.4 TCO, CapEx/OpEx ve Yatırım Ekonomisi

**CapEx vs OpEx ayrımı**:
- **CapEx (Sermaye Harcaması)**: On-premise donanım — NGFW appliance, SIEM sunucu kümeleri, depolama. Bir kerelik büyük harcama + amortisman.
- **OpEx (İşletme Harcaması)**: SaaS güvenlik abonelikleri, MSSP/MDR hizmetleri, bulut tüketimi, lisans yenilemeleri. Açık kaynak çözümlerde lisans CapEx'i sıfırdır, ancak çözüm operasyonu (mühendis emeği) doğrudan **OpEx'e dönüşür** — bu, açık kaynak TCO'sunun en önemli ve en sık göz ardı edilen gerçeğidir.

**TCO bileşenleri**: Donanım; yazılım lisansı; entegrasyon/profesyonel hizmet; eğitim ve yetkinlik; bakım/tuning; downtime (kesinti) maliyeti; ve ihlal (breach) maliyeti.

**Güvenlik ihlalinin maliyeti — IBM/Ponemon *Cost of a Data Breach Report 2025***:
- **Küresel ortalama 4,44 milyon USD** ("average global costs dropped to USD 4.44 million—down from USD 4.88 million, or 9%, in the year prior") — beş yıldaki ilk düşüş, AI ve otomasyon destekli daha hızlı tespit/kapsama kaynaklı.
- **ABD ortalaması rekor 10,22 milyon USD**; sağlık sektörü 14. yıl üst üste en pahalı sektör (**7,42 milyon USD**); kötü niyetli içeriden tehdit en maliyetli vektör (4,92 milyon USD). Shadow AI ihlal maliyetine ortalama **670.000 USD** ekledi; AI ilişkili ihlallerin %97'sinde uygun erişim kontrolü yoktu.
- **Türkiye verisi mevcut değildir.** IBM raporu Türkiye'yi ayrı ülke olarak ölçmez; raporun "Orta Doğu" örneklemi yalnızca **Suudi Arabistan ve BAE** organizasyonlarından oluşur (2025'te bölge ortalaması SAR 27,00 milyon ≈ 7,29 milyon USD, 2024'teki SAR 32,80 milyon'dan %18 düşüş). Türkiye'ye özgü maliyet kıyaslaması için IBM geçerli bir kaynak değildir; yerel referans olarak KVKK ceza istatistikleri kullanılmalıdır.

**Açık kaynak vs ticari çözüm TCO karşılaştırması**:
- **Wazuh (açık kaynak SIEM/XDR)**: Lisans maliyeti sıfır; native FIM, SCA (CIS benchmark kontrolü), zafiyet tespiti. Ancak self-managed dağıtımda gerçek maliyet, kıdemli güvenlik mühendisi emeği ve altyapıdadır. Bağımsız analizlere göre mid-market bir dağıtımın altyapısı yıllık ~15.000–40.000 USD; tespit kurallarını sürdürecek, false-positive ayarlayacak ve indexer kümesini işletecek bir adanmış mühendis ~130.000–160.000 USD. Sadece ticari destek hizmeti bile yıllık ~16.234 USD seviyesine ulaşabilir. Wazuh 4.6+ proprietary SIEM eklentilerini kaldırıp veri yönlendiricilere (Logstash/Splunk Forwarder) geçtiğinden, periyodik polling temelli yapı gerçek zamanlı XDR iş akışlarında gecikme yaratabilir.
- **Splunk (ticari)**: Geleneksel ingest modelinde yaklaşık **GB/gün başına yıllık ~1.800 USD** (100 GB/gün dağıtım ~69.000 USD/yıl temel lisans); workload modeli ise 100 GB/gün için ~200.000–400.000 USD/yıl aralığına çıkabilir.
- **Diğer ticari platformlar** (Palo Alto, CrowdStrike, SentinelOne): Yüksek out-of-the-box olgunluk, vendor-curated tespit içeriği (binlerce saatlik detection engineering) ve AI/ML tabanlı yüksek-fidelite tespit; CrowdStrike Falcon gerçek-zamanlı tespit ve otomatik remediasyonda Wazuh'u geçer.
- **Pratik kural**: ~200 GB/gün üzerinde self-managed açık kaynak TCO'su ticari lisanslara göre avantajlı hale gelir (mühendislik maliyeti sabit kalırken lisans doğrusal artar); ancak bunun ön koşulu güçlü iç mühendislik kapasitesidir. Aksi halde "ücretsiz lisansın" zımni maliyeti açık tasarrufu aşar.

**Cloud güvenlik modeli — MSSP/MDR'nin OpEx etkisi**: Yetenek açığı (global ~3,5–4,8 milyon kişi) nedeniyle MDR/MSSP kullanımı, değişken ve öngörülemeyen iç emek maliyetini sabit, öngörülebilir abonelik OpEx'ine dönüştürür. Wazuh Cloud / partner-managed MDR gibi modeller altyapı, ölçekleme ve 7/24 SOC izlemeyi dışarı taşır. IBM 2025'e göre AI ve otomasyonu yaygın kullanan kurumlar, kullanmayanlara göre ortalama ~1,9 milyon USD daha az ihlal maliyetine maruz kalmıştır.

**ROI hesaplama çerçeveleri**:
- **Gordon-Loeb Modeli (2002, ACM TISSEC)**: Optimal güvenlik yatırımı (z*), beklenen kaybın **1/e ≈ %37**'sini aşmamalıdır (z* < vpℓ/e). Örnek: 1.000.000 €'luk veri, %15 saldırı olasılığı, %80 başarı olasılığı → beklenen kayıp 120.000 €; maksimum yatırım 120.000 × 0,37 ≈ 44.000 €. Azalan marjinal getiri ilkesini ortaya koyar. Eleştiri: statik ve basitleştirilmiş varsayımlar, risk bağımlılıklarını ihmal eder.
- **Ponemon Enstitüsü yöntemleri**: IBM raporunun arkasındaki gerçek-dünya ihlal-maliyeti benchmark metodolojisi (kayıp iş, müdahale, regülatif ceza bileşenleri).

**Bütçe kıyaslama (Gartner)**: Gartner'ın 29 Temmuz 2025 açıklamasına göre (Sr Director Analyst Ruggero Contu) küresel son-kullanıcı bilgi güvenliği harcaması 2024'teki 193 milyar USD'den **2025'te 213 milyar USD'ye**, **2026'da %12,5 artışla 240 milyar USD'ye** ulaşacak (Gartner'ın 4Q25/Şubat 2026 güncellemesinde 2026 rakamı ~244,2 milyar USD'ye revize edildi). Güvenlik yazılımı en hızlı büyüyen segment (bulut geçişi kaynaklı). Sektör/IT bütçesi payı: finans ~%9,6, teknoloji ~%13,3, üretim ~%6,1.

### 1.1.5 Üretici Konsolidasyonu (Vendor Consolidation): Avantajlar ve Riskler

**Konsolidasyon sürücüleri**: Entegrasyon karmaşıklığı, üst üste binen yetenekler (overlap), kör noktalar, lisans maliyetleri ve yetenek açığı. Gartner'ın "Top Cybersecurity Trends for 2025" araştırmasına göre (Ağustos–Ekim 2024, 162 büyük kurum anketi; Snr Principal Analyst Alex Michaels) kurumlar **ortalama 45 siber güvenlik aracı** kullanıyor ve sektörde 3.000'den fazla üretici mevcut. Gartner'ın Mart–Nisan 2022 anketine göre (418 katılımcı; VP Analyst John Watts) kurumların **%75'i 2022'de üretici konsolidasyonu** peşindeydi (2020'de %29); kritik bulgu: kurumların %65'i temel motivasyonu maliyet değil **risk duruşunu iyileştirmek** olarak belirtti, yalnızca %29'u lisans harcamasında azalma bekledi.

**Platform yaklaşımı örnekleri**:
- **Palo Alto Cortex XSIAM**: SIEM + XDR + SOAR + ASM + threat intelligence'ı tek AI-odaklı SOC platformunda birleştirir; ML tabanlı alert gruplama, hacim-temelli olmayan lisanslama; Palo Alto'nun 2024'te IBM QRadar yazılım varlıklarını satın almasıyla kurumsal ayak izi genişledi.
- **CrowdStrike Falcon (Next-Gen SIEM)**: Hafif tek-ajan mimarisi, Falcon Data Fabric üzerinde petabayt ölçeğinde ingest, Charlotte AI ile doğal dil tehdit avı.
- **Microsoft Security Suite**: Sentinel + Defender; Copilot for Security ile doğal dil sorgulama.
- **Fortinet Security Fabric**: Ağ-merkezli entegre platform.

**Somut avantajlar**: Tek cam panel (single pane of glass), düşük MTTD/MTTR, otomatik korelasyon (binlerce uyarının aksiyon alınabilir olaylara gruplanması), basitleşmiş satın alma ve daha iyi entegrasyon kaynaklı iyileştirilmiş güvenlik duruşu.

**Riskler**: 
- **Vendor lock-in**: Tek üreticinin DNA'sına gömülü SIEM/XDR'ı değiştirmek zorlaşır; XSIAM gibi platformlar geceden kurulamaz.
- **Single point of failure**: **CrowdStrike Temmuz 2024 kesintisi**, tek bir EDR ajanı güncellemesinin küresel ölçekte operasyonel kesintiye yol açabileceğini gösterdi; bu olay sonrası kurumlar EPP/EDR yedekliliğini ve operasyonel dayanıklılığı yeniden değerlendirdi.
- **Pazar monopolleşmesi** ve fiyatlandırma gücü.

**Multi-vendor mimarisi ve Defense-in-Depth gerilimi**: Savunma derinliği, bir katman aşıldığında bağımsız bir başka katmanın savunmayı sürdürmesi ilkesine dayanır. Aşırı konsolidasyon, tüm katmanları tek üreticinin teknolojisine bağlayarak bu bağımsızlığı zayıflatabilir — özellikle aynı zafiyet veya tedarik zinciri kompromisi tüm katmanları aynı anda etkileyebilir. Buna karşın *fazla* parçalı bir multi-vendor mimarisi de entegrasyon boşlukları, yanlış yapılandırmalar ve kör noktalar yaratır. **Doğru denge**: olgun teknoloji alanlarında (örn. endpoint) konsolide ol, ancak kritik kontrol noktalarında (örn. ikinci bir tespit kaynağı, bağımsız yedek/immutable backup, farklı üreticiden e-posta güvenliği) kasıtlı çeşitlilik koru. Konsolidasyon kararı kurumun **risk iştahına** ve olgunluğuna göre verilmelidir.

**Gartner Magic Quadrant / pazar trendleri (2024–2026)**: Konsolidasyonun en hızlı olduğu kategoriler SASE (SWG/CASB/FWaaS/ZTNA birleşmesi) ve SOC tooling (SIEM-XDR-SOAR yakınsaması). İki büyük pazar olayı vendor seçimini yeniden şekillendirdi: **Cisco'nun Splunk'ı** ve **Palo Alto'nun IBM QRadar yazılım varlıklarını (2024)** satın alması. QRadar müşterileri için 2026, Cortex XSIAM'a veya alternatif platforma göç yolunu tanımlama yılı olarak konumlanıyor.

**CISA tedarik zinciri (SCRM) tavsiyeleri**: CISA, Aralık 2018'de kurulan **ICT Supply Chain Risk Management (SCRM) Task Force** aracılığıyla (60 üye; federal + IT/Communications sektör koordinasyon konseyleri) somut araçlar sunar: **Vendor SCRM Template** (tedarikçilerin endüstri standartlarını/iyi uygulamalarını standart biçimde değerlendiren soru seti), Hardware Bill of Materials (HBOM) framework, Qualified Bidder/Manufacturer Lists rehberi. Temel adımlar: ekibi oluştur (siber, IT, satın alma, hukuk, lojistik), bileşenleri envanterle, tedarikçileri ve onların upstream kaynaklarını tanı, üçüncü-taraf güvencesini doğrula (tedarikçinin SCRM programı ve güvenlik kültürü), politika/prosedürleri dokümante et. Bu yaklaşım, üretici konsolidasyon kararlarına ve Türkiye'deki 7545 sayılı Kanun'un sertifikalı/yerli tedarikçi yükümlülüklerine doğrudan girdi sağlar.

---

## Recommendations

**Aşama 1 — Temel (0–3 ay):**
1. CIA bileşenlerini envanterdeki her kritik varlık için FIPS 199 mantığıyla (düşük/orta/yüksek) derecelendirin ve **CIS Controls v8.1 IG1'in 56 safeguard'ını** asgari baseline olarak uygulayın. Eşik: IG1 kapsama oranı %100'e ulaşmadan IG2'ye geçmeyin.
2. Tehdit modellemeyi **STRIDE** ile kurumsallaştırın; her STRIDE kategorisini CIA + Authentication/Non-repudiation/Authorization'a eşleyerek tespit kuralı boşluklarını belirleyin.
3. Türkiye uyumu için zorunlu temel: KVKK m.12 teknik tedbirleri (MFA, EDR, merkezi SIEM, disk şifreleme), 72 saatlik ihlal bildirim süreci, 5651 zaman damgalı loglama ve (varsa kritik altyapı/banka) BSEBY + Kurumsal SOME yapısı. Eşik: yılda en az bir bağımsız pentest.

**Aşama 2 — Hizalama ve Ekonomi (3–9 ay):**
4. **Risk iştahı ve tolerans ifadelerini** NIST CSF 2.0 Govern (GV.RM-02) altında yazılı hale getirip board onayına sunun; board raporlamasını MTTD/MTTR/patch compliance/vuln density KPI'larıyla standartlaştırın.
5. Her güvenlik yatırımı için TCO modelinde **gizli emek maliyetini** (mühendis FTE'leri) açıkça hesaplayın; **Gordon-Loeb** ile yatırım tavanını (beklenen kaybın ~%37'si) belirleyin. Yetenek açığı varsa kritik tespit/yanıt katmanlarını **MDR/MSSP** ile OpEx'e çevirin.
6. Açık kaynak (Wazuh/Graylog/Suricata/OpenVAS) vs ticari kararını veri hacmine bağlayın: <100 GB/gün ve sınırlı mühendislik → ticari veya managed; >200 GB/gün ve güçlü mühendislik → self-managed açık kaynak ekonomik avantajlı.

**Aşama 3 — Konsolidasyon ve Dayanıklılık (9–18 ay):**
7. Olgun alanlarda (endpoint, SOC tooling) konsolide olun; ancak **immutable backup, ikinci bağımsız tespit kaynağı ve e-posta güvenliğini** farklı üreticilerde tutarak savunma derinliğini koruyun. CrowdStrike Temmuz 2024 dersini bir SPOF tatbikatına dönüştürün.
8. Tüm stratejik tedarikçileri **CISA Vendor SCRM Template** ile değerlendirin ve 7545 sayılı Kanun'un sertifikalı/yerli tedarikçi gerekliliklerine hazırlanın.

**Kararı değiştirecek eşikler/benchmark'lar:** Veri hacmi 200 GB/gün eşiğini aşarsa açık-kaynak lehine TCO yeniden hesaplanmalı; bir konsolide platform tek hata noktası riski tolerans ifadesini (örn. >4 saat kesinti) tehdit ediyorsa multi-vendor yedeklilik şart olur; KVKK/SGB ceza maruziyeti beklenen kaybı yükseltirse Gordon-Loeb yatırım tavanı yukarı revize edilmelidir.

---

## Caveats
- **IBM rakamları Türkiye'yi kapsamaz.** "Orta Doğu" örneklemi yalnızca Suudi Arabistan ve BAE'dir; küresel 4,44 milyon USD ortalaması Türkiye için doğrudan benchmark olarak kullanılmamalıdır. Yerel referans olarak KVKK ceza istatistikleri (2024: ~552,7 milyon TL) tercih edilmelidir.
- **Gordon-Loeb statik bir modeldir**; risk bağımlılıklarını, dış etkileri (externalities) ve dinamik tehdit ortamını ihmal eder; bazı senaryolarda optimal yatırım %50'ye çıkabilir. Bir tavan yol göstericisi olarak kullanılmalı, mutlak kural olarak değil.
- **Gartner harcama rakamları** son-kullanıcı tahminleridir ve revize edilebilir (2026 için 240→244 milyar USD revizyonu örneğindeki gibi); Cybersecurity Ventures gibi kaynaklar farklı kapsam nedeniyle çok daha yüksek (2026 için 522 milyar USD) rakamlar verir.
- **Türkiye mevzuatı geçiş halindedir**: 7545 sayılı Siber Güvenlik Kanunu (Mart 2025) ile BTK/USOM yetkileri Siber Güvenlik Başkanlığı'na devredilmektedir; SOME bildirim kanalları ve ikincil düzenlemeler henüz tam oturmamıştır. Uyum süreçleri SGB'nin yayımlayacağı yeni yönetmeliklere göre güncellenmelidir.
- **5651 saklama süresi** mevzuatta "altı aydan az iki yıldan fazla olmamak" aralığında yönetmelikle belirlenir; kaynaklarda 1 yıl, 2 yıl ve daha uzun süreler için farklı yorumlar mevcuttur — kurum kendi yer/erişim/toplu kullanım sağlayıcı sınıflandırmasına göre güncel yönetmeliği esas almalıdır.