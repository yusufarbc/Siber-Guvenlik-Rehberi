# OWASP ve "Top 10" Projeleri: Derinlemesine Teknik ve Karşılaştırmalı Analiz

## 1. Giriş ve OWASP Genel Değerlendirmesi

OWASP (Open Worldwide Application Security Project; tarihsel adıyla Open Web Application Security Project), 2001'de Mark Curphey tarafından WebAppSec posta listesinde duyurularak kurulmuş, 2004'te ABD'de 501(c)(3) kâr amacı gütmeyen vakıf (OWASP Foundation, Inc.) olarak tescil edilmiş açık topluluk temelli bir yapıdır. Misyonu yazılım güvenliğini iyileştirmektir ve tüm çıktıları (dokümanlar, araçlar, video, eğitim) ücretsiz ve açık kaynaktır.

**Yönetişim ve Finansman:** Vakıf, yedi seçilmiş üyeden oluşan ve iki yıllık dönemler için görev yapan Global Board (Küresel Kurul) tarafından yönetilir; günlük operasyonlar bir Executive Director, çalışanlar ve sözleşmeli personel tarafından yürütülür. Kurul stratejiyi, politikayı, mali denetimi ve fon yaratmayı belirler; rutin operasyonel işler profesyonel kadroya devredilir. Finansman modeli üyelik aidatları (bireysel, öğrenci, lifetime ve kurumsal üyelikler), kurumsal sponsorluklar, Global AppSec konferansları gelirleri ve hibe/bağışlardan oluşur. Projeler, "Incubator → Lab → Production → Flagship" yaşam döngüsü olgunluk seviyeleriyle sınıflandırılır. Komiteler (Projects, Chapter, vb.) ve Grants Policy gibi politikalarla projelere fon ve mentörlük sağlanır.

**"Top 10" metodolojisi ve evrimi:** OWASP'ın amiral gemisi yaklaşımı, bir alandaki "en kritik" riskleri 10 maddelik bir farkındalık dokümanında özetlemektir. Önemli nokta: Top 10 bir *checklist* (uygunluk kontrol listesi) değil, bir farkındalık ve eğitim dokümanıdır; OWASP doğrulama (verification) için ASVS'yi, olgunluk değerlendirmesi için SAMM'i önerir. Metodoloji zaman içinde köklü biçimde değişmiştir:

- **Erken dönem (2003–2010):** Büyük ölçüde uzman görüşü ve sınırlı zafiyet veri setlerine dayalı, sıklık (frequency) odaklı sıralama.
- **2010 dönüşümü:** İlk kez risk-temelli (risk-based) yaklaşım; her kategori için exploitability, detectability/prevalence ve impact ekseninde OWASP Risk Rating metodolojisi.
- **2017 ve sonrası hibrit model:** Veri çağrısı (data call) ile güvenlik satıcıları, danışmanlıklar ve bug bounty platformlarından gelen gerçek bulguların CWE'lere eşlenmesi + topluluk anketi (community survey). 2021'de 8 kategori veriyle, 2 kategori toplulukça belirlenmiştir.
- **2021 ve 2025'te incidence rate (vaka oranı) metriği:** Sıklık yerine, "bir CWE'nin en az bir kez bulunduğu uygulama yüzdesi" hesaplanır; bu, otomatik araçların aynı zafiyeti binlerce kez raporlamasının yarattığı çarpıklığı giderir (manuel test eden bir zafiyeti bir kez listelerken, otomatik araç her oluşumu ayrı sayar). 2021'de yaklaşık 400 CWE, 2025'te 589 CWE analiz edilmiştir; 2025 veri seti yaklaşık 2,8 milyon uygulamayı kapsamış ve exploit/impact ağırlıklandırması yüz binlerce CVE'den türetilmiştir. 2025'te bir kategoriye eşlenen CWE sayısı en fazla 40 ile sınırlandırılmıştır (kategori başına ortalama ~25 CWE).

**Neden alana özgü ayrı Top 10 listeleri?** OWASP'ın tek evrensel liste yerine domain bazında parçalanmaya gitmesinin teknik ve örgütsel gerekçeleri vardır:
1. **Farklı tehdit modelleri ve saldırı yüzeyleri:** Bir API'nin temel riski yetkilendirme mantığı (BOLA) iken, mobil uygulamada saldırı yüzeyi cihaz üzerinde fiziksel erişim, binary tersine mühendislik ve istemci tarafı depolamadır; LLM'lerde ise talimat-veri kanalının ayrılmaması (prompt injection) gibi tamamen yeni bir sınıf vardır.
2. **Farklı hedef kitleler:** Web Top 10 geliştiriciye, Kubernetes/CI/CD Top 10 platform/DevSecOps mühendislerine ve SRE'lere, Privacy Top 10 hukuk/uyum ekiplerine hitap eder.
3. **Test edilebilirlik ve araç ekosistemi farkları:** SAST/DAST web zafiyetlerini bulurken API iş mantığı kusurları büyük ölçüde manuel testle, ML pipeline riskleri ise veri kökeni ve model doğrulama araçlarıyla ele alınır.
4. **Örgütsel sahiplenme:** Her domain ayrı bir çalışma grubu, ayrı GitHub deposu ve ayrı topluluk dinamiğiyle yönetilebilir; bu, hızla evrilen alanlarda (LLM/agentic AI) bağımsız ve hızlı sürüm döngülerine olanak tanır.

---

## 2. Proje Bazlı Detaylı Analizler

### 2.1 OWASP Top 10 Web Application Security Risks

**Doğuş ve amaç:** 2003'te yayımlanan ilk liste, OWASP'ın en uzun ömürlü ve en çok atıf alan projesidir. Amaç, web uygulama güvenliğindeki en kritik riskler konusunda geliştiricilerde ortak bir farkındalık tabanı oluşturmaktı.

**Tüm sürümler ve tarihleri:** 2003, 2004, 2007, 2010, 2013, 2017, 2021 (24 Eylül 2021, OWASP'ın 20. yıl dönümüne denk getirildi) ve 2025 (Release Candidate; Kasım 2025'te Washington DC'deki Global AppSec konferansında duyuruldu).

**2017 listesi:** A1 Injection, A2 Broken Authentication, A3 Sensitive Data Exposure, A4 XML External Entities (XXE), A5 Broken Access Control, A6 Security Misconfiguration, A7 Cross-Site Scripting (XSS), A8 Insecure Deserialization, A9 Using Components with Known Vulnerabilities, A10 Insufficient Logging & Monitoring.

**2021 listesi:** A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures, A10 Server-Side Request Forgery (SSRF).

**2025 (RC) listesi:** A01 Broken Access Control, A02 Security Misconfiguration, A03 Software Supply Chain Failures, A04 Cryptographic Failures, A05 Injection, A06 Insecure Design, A07 Authentication Failures, A08 Software or Data Integrity Failures, A09 Security Logging and Alerting Failures, A10 Mishandling of Exceptional Conditions.

**Sürümler arası değişimler ve TEKNİK NEDENLERİ:**
- **Broken Access Control'ün #5'ten (2017) #1'e (2021) yükselmesi:** OWASP'ın resmi A01:2021 verisine göre, test edilen uygulamaların ortalama %3,81'i bir veya daha fazla CWE içeriyordu ve bu kategoriye eşlenen 34 CWE, "318 binden fazla oluşumla diğer tüm kategorilerden daha fazla uygulamada görüldü." Erişim kontrolü kusurları derinden bağlamsaldır (User A'nın Record B'ye erişip erişmemesi gerektiği iş mantığına bağlıdır); statik araçlarla tespiti zordur, bu yüzden hem yaygın hem de kalıcıdır. **2025'te de #1 kalmıştır** – OWASP Top 10:2025 A01 sayfasına göre test edilen uygulamaların %100'ünde bir tür broken access control bulunmuş, 40 CWE eşlenmiş ve ortalama vaka oranı %3,73 olmuştur.
- **Injection'ın 2010'dan beri ilk kez tepeyi kaybetmesi (#1→#3, 2021):** Modern framework'lerin parametreli sorgu/ORM ile injection'a karşı yerleşik koruma sağlaması yaygınlığı azalttı. XSS bu sürümde Injection kategorisine dahil edildi (XSS de aslında bir enjeksiyon biçimidir). 2025'te #5'e geriledi.
- **Cryptographic Failures (eski "Sensitive Data Exposure") yeniden adlandırması:** "Sensitive Data Exposure" bir *semptomdu*; OWASP semptom yerine kök nedene (kriptografi başarısızlığı) odaklanmak için adı değiştirdi. 2025'te #2'den #4'e geriledi (32 CWE, ortalama %3,80 vaka oranı).
- **Insecure Design (A04:2021) – yeni kategori:** "Shift-left" hareketinin olgunlaşmasıyla, mükemmel uygulama (implementation) ile dahi düzeltilemeyen tasarım kusurlarına (threat modeling, güvenli tasarım desenleri eksikliği) ayrı bir kategori açıldı. 2025'te threat modeling konusundaki sektörel iyileşmeler nedeniyle #4'ten #6'ya geriledi.
- **Software and Data Integrity Failures (A08:2021) – yeni:** SolarWinds gibi tedarik zinciri saldırıları ve CI/CD pipeline'larında bütünlük doğrulamasının yapılmaması nedeniyle eklendi; Insecure Deserialization (2017 A8) bu kategoriye dahil edildi.
- **SSRF (A10:2021) – yeni:** Veride düşük vaka oranına sahip olmasına rağmen topluluk anketinde #1 çıktı; mikroservis/bulut mimarilerinde yüksek exploit ve impact potansiyeli nedeniyle eklendi.
- **XXE'nin kaybolması (2021):** Ayrı bir kategori olmaktan çıkıp Security Misconfiguration içine alındı.
- **2025'teki büyük yapısal değişiklikler:** (1) **Software Supply Chain Failures'ın A03'e yükselmesi** – eski "Vulnerable and Outdated Components" kategorisinin bağımlılıklar, build sistemleri ve dağıtım altyapısını kapsayacak şekilde genişletilmiş hali. OWASP'ın resmi tanımına göre bu kategori yalnızca 5 CWE içerir ve toplanan veride sınırlı bir varlığa sahiptir, ancak topluluk anketinde "ezici çoğunlukla en önemli endişe olarak oylanmıştır"; düşük veri varlığına karşın CVE'lerden gelen en yüksek ortalama exploit ve impact skorlarına sahiptir, çünkü tedarik zinciri ihlalleri çoğu zaman kod hatası değil güven ihlalidir ve CVE modeline tam uymaz. (2) **Security Misconfiguration'ın #5'ten #2'ye yükselmesi** – yazılımın giderek daha fazla davranışının konfigürasyona dayanması; test edilen uygulamaların %3,00'ünde bu kategorideki 16 CWE'den biri veya daha fazlası bulunmuştur ve misconfiguration verisi bu döngüde daha yaygın hale gelmiştir. (3) **SSRF'nin A01 (Broken Access Control) içine konsolide edilmesi** – SSRF temelde sunucunun yetkisiz bir iç kaynağa erişmesidir, yani bir erişim kontrolü/güven sınırı ihlalidir. (4) **Mishandling of Exceptional Conditions (A10:2025) – yeni** – hatalı hata/istisna yönetimi, "fail-open" senaryoları, verbose hata mesajlarıyla bilgi sızıntısı (CWE-209), securely fail etmeme (CWE-636); daha önce "kod kalitesi" altında dağınık olan 24 CWE bu dirençlilik (resilience) odaklı kategoride toplandı.

**Olgunluk (2026):** Flagship; en olgun ve en yaygın benimsenen OWASP projesi. 2025 RC1 yayımda; OWASP yalnızca küçük rötuşlar beklendiğini belirtmiştir. Veri katkıları 31 Temmuz 2025'e kadar (2021–2024 dönemi verisi için) toplanmıştır.

### 2.2 OWASP Mobile Top 10

**Doğuş ve amaç:** İlk olarak 2014'te yayımlandı; mobil uygulamaların kendine özgü saldırı yüzeyine (cihaz üzerinde depolama, ikili dosya koruması, platform API'leri) odaklanır. Kökleri 2011'de ENISA'nın "Smartphone Secure Development Guideline" çalışmasına dayanır.

**Sürümler:** 2014, 2016 ve 2024 (ilk büyük revizyon, 8 yıl aradan sonra). Tamamlayıcı MASVS (Mobile Application Security Verification Standard) projesi de 2023'te v2.0.0, 18 Ocak 2024'te v2.1.0 ile güncellenmiştir.

**2016 listesi:** M1 Improper Platform Usage, M2 Insecure Data Storage, M3 Insecure Communication, M4 Insecure Authentication, M5 Insufficient Cryptography, M6 Insecure Authorization, M7 Client Code Quality, M8 Code Tampering, M9 Reverse Engineering, M10 Extraneous Functionality.

**2024 listesi:** M1 Improper Credential Usage, M2 Inadequate Supply Chain Security, M3 Insecure Authentication/Authorization, M4 Insufficient Input/Output Validation, M5 Insecure Communication, M6 Inadequate Privacy Controls, M7 Insufficient Binary Protections, M8 Security Misconfiguration, M9 Insecure Data Storage, M10 Insufficient Cryptography.

**Değişimler ve NEDENLERİ:**
- **Improper Credential Usage (M1) en tepeye:** Hardcoded API anahtarları, AWS kimlik bilgileri ve OAuth secret'larının APK/IPA içinde gömülü bulunması, yıllardır mobil pentest'lerin en sık #1 bulgusudur; bu ampirik gerçeklik sıralamaya yansıdı.
- **Inadequate Supply Chain Security (M2) – yeni:** Üçüncü taraf SDK ve kütüphanelerin mobil uygulamalara kötücül kod enjekte etme vektörü haline gelmesi; SBOM (CycloneDX) ihtiyacı.
- **Inadequate Privacy Controls (M6) ve Insufficient Input/Output Validation (M4) – yeni/yeniden çerçevelenmiş.**
- **Insecure Data Storage'ın M2'den M9'a, Insufficient Cryptography'nin M5'ten M10'a düşmesi:** Hâlâ önemli olmakla birlikte, kimlik bilgisi ve tedarik zinciri risklerinin ampirik olarak daha baskın çıkması.
- M7 Client Code Quality, M9 Reverse Engineering, M10 Extraneous Functionality (2016) ya Insufficient Binary Protections altında konsolide edildi ya da yeniden çerçevelendi.

**Olgunluk (2026):** Orta-yüksek; 2024 güncellemesiyle veri-temelli metodolojiyle tazelendi ancak Web Top 10 kadar sık güncellenmiyor. MASVS ile birlikte kullanılması önerilir.

### 2.3 OWASP API Security Top 10

**Doğuş ve amaç:** Aralık 2019'da ilk sürüm; web uygulamalarının API'lere kayması ve API'lerin iş mantığını/PII'yi doğrudan ifşa ederek çok daha geniş bir saldırı yüzeyi yaratmasıyla, web Top 10'un kapsamadığı API'ye özgü riskleri ele almak için kuruldu.

**Sürümler:** 2019 ve 2023 (5 Haziran 2023; 2023'ün ilk RC'si Mart 2023'te).

**2019 listesi:** API1 Broken Object Level Authorization (BOLA), API2 Broken User Authentication, API3 Excessive Data Exposure, API4 Lack of Resources & Rate Limiting, API5 Broken Function Level Authorization (BFLA), API6 Mass Assignment, API7 Security Misconfiguration, API8 Injection, API9 Improper Assets Management, API10 Insufficient Logging & Monitoring.

**2023 listesi:** API1 BOLA, API2 Broken Authentication, API3 Broken Object Property Level Authorization (BOPLA), API4 Unrestricted Resource Consumption, API5 BFLA, API6 Unrestricted Access to Sensitive Business Flows, API7 Server-Side Request Forgery (SSRF), API8 Security Misconfiguration, API9 Improper Inventory Management, API10 Unsafe Consumption of APIs.

**Değişimler ve NEDENLERİ:**
- **BOPLA (API3:2023) = Excessive Data Exposure (API3:2019) + Mass Assignment (API6:2019) birleşimi:** Her ikisinin de kök nedeni nesne özelliği (property) düzeyinde yetkilendirme doğrulaması eksikliğidir; semptom yerine kök nedene odaklanma.
- **Unrestricted Resource Consumption (API4:2023):** Eski "Lack of Resources & Rate Limiting" yeniden adlandırıldı; semptom yerine kök nedene (kaynak tüketimi) ve bulut maliyet patlaması ("denial of wallet") boyutuna vurgu.
- **Unrestricted Access to Sensitive Business Flows (API6:2023) – yeni:** API'ler kusursuz çalışsa bile iş mantığının otomasyonla kötüye kullanımı (ör. bilet/stok kapatma, kötüye kullanılan deneme süreleri); "tehdit aktörü gibi düşün" felsefesi.
- **SSRF (API7:2023) – yeni:** Kubernetes/Docker'ın HTTPS API tabanlı haberleşmesi, webhook'lar, SSO entegrasyonları ve URL tabanlı dosya getirmenin SSRF'yi API'ler için baskın hale getirmesi.
- **Unsafe Consumption of APIs (API10:2023) – yeni:** Geliştiricilerin üçüncü taraf API'lerden gelen veriye kullanıcı girdisinden daha fazla güvenmesi; saldırganların hedefin entegre servislerini ele geçirme eğilimi.
- **Injection (API8:2019) ve Insufficient Logging & Monitoring (API10:2019) çıkarıldı:** Injection, API'lere özgü olmadığı ve Security Misconfiguration'ın doğru yapılandırma ile zaten kapsaması beklendiği için çıkarıldı – bu, API güvenlik topluluğunda tartışmalı bir karardı.
- **BOLA'nın 2019'dan beri kalıcı #1 olması:** Nesne düzeyi yetkilendirme mekanizmalarının karmaşık ve çeşitli olması, otomatik tarayıcılara büyük ölçüde görünmez kalması. Not: API Security Top 10, ana Web Top 10'un aksine veri-temelli değildir; 2019 sonrası API güvenlik olay raporlarının analizi ve sektör uzmanlarıyla istişare üzerine kuruludur.

**Olgunluk (2026):** Yüksek; sektörde hızla benimsenmiş, kritik bir proje. crAPI gibi tamamlayıcı eğitim araçları mevcut.

### 2.4 OWASP Top 10 for Large Language Model (LLM) Applications

**Doğuş ve amaç:** 2023'te, ChatGPT patlamasının ardından LLM uygulamalarına özgü güvenlik açığını kapatmak için küçük bir uzman grubu tarafından başlatıldı; OWASP'ın resmi proje sayfasına göre "18'den fazla ülkeden 600'ün üzerinde katkı veren uzman ve yaklaşık 8.000 aktif topluluk üyesi" bulunan küresel bir topluluğa dönüştü. Şimdi daha geniş OWASP GenAI Security Project çatısı altında.

**Sürümler:** v1.0 (Ağustos 2023), v1.1 (16 Ekim 2023) ve 2025 sürümü (18 Kasım 2024'te yayımlandı; OWASP çekirdek ekibi geçerliliğine güven sinyali vermek için "2025" olarak etiketledi). LLM listesi diğer OWASP listelerinden çok daha hızlı güncellenmektedir.

**2023 (v1.0/1.1) listesi:** LLM01 Prompt Injection, LLM02 Insecure Output Handling, LLM03 Training Data Poisoning, LLM04 Model Denial of Service, LLM05 Supply Chain Vulnerabilities, LLM06 Sensitive Information Disclosure, LLM07 Insecure Plugin Design, LLM08 Excessive Agency, LLM09 Overreliance, LLM10 Model Theft.

**2025 listesi:** LLM01 Prompt Injection, LLM02 Sensitive Information Disclosure, LLM03 Supply Chain, LLM04 Data and Model Poisoning, LLM05 Improper Output Handling, LLM06 Excessive Agency, LLM07 System Prompt Leakage, LLM08 Vector and Embedding Weaknesses, LLM09 Misinformation, LLM10 Unbounded Consumption.

**Değişimler ve NEDENLERİ:**
- **Prompt Injection (LLM01) iki sürümde de #1:** LLM'lerin talimat ile veriyi aynı kanalda, ayrım yapmadan işlemesi; mimari olarak çözülmemiş temel sorun. 2025'te tanım doğrudan + dolaylı (indirect) prompt injection'ı kapsayacak şekilde genişletildi.
- **Sensitive Information Disclosure #6'dan #2'ye:** RAG ve ajan mimarilerinin LLM'lere daha fazla hassas veri (sağlık, finans, şirket sırları) erişimi vermesi; listede en büyük sıçramayı yapan kategori.
- **Supply Chain #5'ten #3'e:** Hugging Face gibi model hub'larından alınan önceden eğitilmiş modeller, fine-tuning veri setleri; LoRA/PEFT gibi yeni fine-tuning yöntemlerinin yeni saldırı vektörleri açması.
- **System Prompt Leakage (LLM07) – yeni:** Gerçek dünya olaylarının, sistem prompt'larının izole/gizli sanılmasına rağmen sızdığını ve güvenlik kontrolü olarak kullanılmasının hatalı olduğunu göstermesi.
- **Vector and Embedding Weaknesses (LLM08) – yeni:** RAG'ın ana akım olmasıyla, vektör veritabanı zehirlenmesi ve tenant sınırları arası veri sızıntısı risklerinin öne çıkması.
- **Misinformation (LLM09)** = eski "Overreliance"ın yeniden çerçevelenmiş hali; odak, sadece kullanıcının fazla güvenmesinden modelin yanlış bilgi üretip yayması ve halüsinasyona kaydı.
- **Unbounded Consumption (LLM10)** = eski "Model Denial of Service"in genişletilmiş hali; DoS + "denial of wallet" (API maliyeti şişirme) + model extraction/çalma.
- **Training Data Poisoning → Data and Model Poisoning (LLM04):** Kapsam, yalnızca eğitim verisinden fine-tuning ve embedding aşamalarındaki manipülasyonlara genişletildi.
- **Insecure Plugin Design ve Model Theft'in ayrı kategori olmaktan çıkması:** Plugin riskleri Excessive Agency/Supply Chain altında, model çalma Unbounded Consumption/Supply Chain altında daha geniş kategorilerde eritildi.

**Olgunluk (2026):** Yüksek görünürlük, çok hızlı evrim. En aktif OWASP girişimlerinden biri; GenAI Security Project altında cheat sheet'ler, AIBOM generator, governance checklist gibi çıktılarla zenginleşiyor.

### 2.5 OWASP Machine Learning Security Top 10

**Doğuş ve amaç:** ML sistemlerinin (LLM uygulama katmanından farklı olarak) model ve pipeline düzeyindeki güvenlik sorunlarına genel bir bakış sunmak. İlk liste Sagar Bhure ve Shain Singh tarafından katkılandı. Hedef kitle: ML mühendisleri, MLOps uygulayıcıları ve AppSec uzmanları.

**Sürümler:** 2023 sürümü, v0.3 Draft (taslak). Proje 2023'ten beri aynı taslak sürümde kalmıştır.

**Liste (ML01–ML10, 2023):** ML01 Input Manipulation Attack, ML02 Data Poisoning Attack, ML03 Model Inversion Attack, ML04 Membership Inference Attack, ML05 Model Theft, ML06 ML Supply Chain Attacks, ML07 Transfer Learning Attack, ML08 Model Skewing, ML09 Output Integrity Attack, ML10 Model Poisoning.

**Kapsam farkı:** Bu liste, LLM Top 10'un aksine uygulama katmanı (prompt injection vb.) yerine ML modelinin matematiksel/istatistiksel saldırı yüzeyine (adversarial örnekler, eğitim verisi zehirleme, model tersine çevirme, üyelik çıkarımı) odaklanır.

**Olgunluk (2026):** Düşük; hâlâ v0.3 taslak halinde ve durağan görünmektedir. LLM/GenAI ekosistemine olan ilgi, klasik ML güvenliği projesinin önüne geçmiştir. Aktif olarak güncellenmemektedir.

### 2.6 OWASP Kubernetes Top 10

**Doğuş ve amaç:** 2022'de, organizasyonların monolitik mimarilerden bulut-doğal mikroservis iş yüklerine geçişiyle, Kubernetes ekosistemine özgü riskleri güvenlik uygulayıcıları, sistem yöneticileri ve geliştiriciler için önceliklendirmek üzere oluşturuldu. Orijinal lider Jimmy Mesta (KSOC); 2022 ortasında Cloud Native SecurityCon NA'da tanıtıldı.

**Sürümler:** 2022 edisyonu ve 2025 edisyonu. (Not: OWASP, her iki edisyon için de gün düzeyinde resmi yayın tarihi yayımlamamıştır; 2022 = "2022'de yayımlandı", 2025 edisyonu göstergeler ışığında geç 2025/erken 2026'da canlıya alınmış görünmektedir ve GitHub'da resmi release tag'i yoktur.) Güncel liderler Rory McCune (Datadog) ve Cailyn Edwards (Okta); Mesta "Emeritus".

**2022 listesi:** K01 Insecure Workload Configurations, K02 Supply Chain Vulnerabilities, K03 Overly Permissive RBAC Configurations, K04 Lack of Centralized Policy Enforcement, K05 Inadequate Logging and Monitoring, K06 Broken Authentication Mechanisms, K07 Missing Network Segmentation Controls, K08 Secrets Management Failures, K09 Misconfigured Cluster Components, K10 Outdated and Vulnerable Kubernetes Components.

**2025 listesi:** K01 Insecure Workload Configurations, K02 Overly Permissive Authorization Configurations, K03 Secrets Management Failures, K04 Lack Of Cluster Level Policy Enforcement, K05 Missing Network Segmentation Controls, K06 Overly Exposed Kubernetes Components, K07 Misconfigured And Vulnerable Cluster Components, K08 Cluster To Cloud Lateral Movement, K09 Broken Authentication Mechanisms, K10 Inadequate Logging And Monitoring.

**Değişimler ve NEDENLERİ:**
- **Cluster to Cloud Lateral Movement (K08:2025) – tamamen yeni:** Yönetilen/bulut-barındırmalı kümelerin yaygınlaşmasıyla en kritik blast-radius riski küme↔bulut sınırı haline geldi. Ele geçirilmiş bir pod, node'un IAM rollerini, statik bulut kimlik bilgilerini veya metadata servisini (169.254.169.254) kötüye kullanarak bulut hesabına yanal hareket edebilir. Önlem: workload-specific bulut kimlikleri (IRSA/EKS Pod Identity, GKE/AKS Workload Identity), IMDSv2, metadata IP'sini engelleyen NetworkPolicy.
- **Overly Permissive RBAC → Overly Permissive Authorization Configurations (K02):** Yalnızca RBAC değil, tüm Kubernetes yetkilendirme modlarını (Webhook authorizer'lar dahil) kapsayacak şekilde genişletildi; "Shadow RBAC" (üçüncü taraf Helm chart/Operator'lardan), ClusterRole aggregation ve JIT (Just-In-Time) erişim eklendi. #3'ten #2'ye yükseldi.
- **Misconfigured Cluster Components (K09:2022) + Outdated and Vulnerable Kubernetes Components (K10:2022) → tek kategori K07:2025 (Misconfigured And Vulnerable Cluster Components) olarak birleştirildi.**
- **Supply Chain Vulnerabilities (K02:2022) listeden çıkarıldı:** OWASP resmi gerekçe açıkça yayımlamamış; muhtemelen tedarik zinciri riskinin ana Web Top 10:2025'te A03'e yükselmesi ve SLSA/SBOM/CNCF gibi adanmış çerçevelerin bu alanı kapsaması nedeniyle K8s listesi küme/bulut operasyonel risklerine yeniden odaklandı (çıkarım).
- **Overly Exposed Kubernetes Components (K06:2025) – yeni/yeniden çerçevelenmiş:** Ağa açık Kubernetes bileşenleri/dashboard/API'lere odak.
- Yeniden sıralamalar: Secrets Management #8→#3'e yükseldi; Logging/Monitoring #5→#10'a, Broken Authentication #6→#9'a düştü.

**Olgunluk (2026):** Orta; aktif olarak yenilendi (2025 refresh) ancak "feedback welcome / PR açın" durumunda, henüz resmi release tag'i yok. Veri-temelli olmaktan çok uzman/uygulayıcı görüşüne dayalı.

### 2.7 OWASP Top 10 CI/CD Security Risks

**Doğuş ve amaç:** 2022'de (başlangıçta Cider Security tarafından), CI/CD pipeline'larının yazılım tedarik zinciri saldırıları için bir giriş noktası haline gelmesine yanıt olarak; savunucuların mühendislik hızından ödün vermeden CI/CD ekosistemini güvenceye almasına yardımcı olmak için.

**Sürümler:** v1.0 ilk yayın Eylül 2022; stabil v1.0 Ekim 2022. Tek sürüm.

**Liste (CICD-SEC-1 … 10):** CICD-SEC-1 Insufficient Flow Control Mechanisms, CICD-SEC-2 Inadequate Identity and Access Management, CICD-SEC-3 Dependency Chain Abuse, CICD-SEC-4 Poisoned Pipeline Execution (PPE), CICD-SEC-5 Insufficient PBAC (Pipeline-Based Access Controls), CICD-SEC-6 Insufficient Credential Hygiene, CICD-SEC-7 Insecure System Configuration, CICD-SEC-8 Ungoverned Usage of 3rd Party Services, CICD-SEC-9 Improper Artifact Integrity Validation, CICD-SEC-10 Insufficient Logging and Visibility.

**Bağlam ve gerekçe:** Liste; SolarWinds, Codecov, PHP backdoor, Dependency Confusion ve ua-parser-js/coa/rc NPM paketlerinin ele geçirilmesi gibi yüksek profilli ihlallerin analizine dayanır. Veri-temelli değil; yüzlerce CI/CD ortamının mimari/güvenlik duruşu analizi ve uzman görüşüne dayanır.

**Olgunluk (2026):** Orta; tek sürüm, 2022'den beri güncellenmedi ancak OWASP Cheat Sheet Series ile destekleniyor ve DevSecOps topluluğunda yaygın referans. İçerik hâlâ büyük ölçüde güncel.

### 2.8 OWASP Top 10 Privacy Risks

**Doğuş ve amaç:** Web uygulamaları için en önemli 10 teknik ve örgütsel mahremiyet riskini belirlemek; "yerel" yasalardan bağımsız olarak OECD Privacy Principles temelinde, geliştirici, iş mimarı ve hukukçuları eğitmek. Kapsam dışı: kullanıcıların kendini koruması.

**Sürümler:** v1.0 (2014) ve v2.0 (2021); Countermeasures v2.0 üzerinde çalışılmıştır. 5+ dilde mevcut. OWASP Lab Project.

**v2.0 (2021) listesi:** P1 Web Application Vulnerabilities, P2 Operator-sided Data Leakage, P3 Insufficient Data Breach Response, P4 Consent on Everything (yeni), P5 Non-transparent Policies, Terms and Conditions, P6 Insufficient Deletion of User Data, P7 Insufficient Data Quality (yeni), P8 Missing or Insufficient Session Expiration, P9 Inability of Users to Access and Modify Data, P10 Collection of Data Not Required for the User-Consented Purpose.

**Değişimler:** 2014→2021'de iki yeni kategori (P4 Consent on Everything, P7 Insufficient Data Quality) GDPR sonrası rıza ve veri kalitesi vurgusuyla eklendi; P9 (kullanıcıların verisine erişip değiştirememesi) 2014'teki 13. sıradan 2021'de 9'a yükseldi – veri sahibi haklarının (GDPR DSAR) önem kazanması.

**Olgunluk (2026):** Orta-düşük; Lab seviyesi. 2021'den beri büyük güncelleme yok; Countermeasures çalışması devam ediyordu. GDPR/CCPA uyum bağlamında niş ama değerli.

### 2.9 OWASP Serverless Top 10

**Doğuş ve amaç:** 1 Eylül 2018'de Protego Labs tarafından OWASP'a bağışlandı; serverless (FaaS) mimarisinin geleneksel uygulamalardan farklı saldırı vektörlerini ele almak için. Temelde, PureSec'in "Serverless Architectures Security Top 10" (SAS-1…10) çalışmasına dayanır.

**Sürümler:** Tek çıktı – "OWASP Top 10: Serverless Interpretation" (v1.0, GitHub release 20 Kasım). Bu bir "yorum" (interpretation) dokümanıdır: mevcut Web Top 10'un serverless bağlamında nasıl değiştiğini inceler; bağımsız, veri-temelli bir resmi liste değildir. Planlanan açık veri çağrısı ve resmi liste hiçbir zaman tamamlanmamıştır.

**İçerik yaklaşımı:** Injection (event-data injection olarak; yalnızca doğrudan kullanıcı girdisiyle sınırlı değil), broken authentication, insecure deployment configuration, 3. taraf bağımlılıkları, yetersiz logging/monitoring gibi riskler serverless özelinde yorumlanır.

**Olgunluk (2026):** Çok düşük / büyük ölçüde durağan-terk edilmiş. Resmi veri-temelli liste hiç yayımlanmadı; serverless güvenliği büyük ölçüde Web/API Top 10 ve bulut-doğal çerçevelere devredildi. Proje aktif olarak sürdürülmüyor.

### 2.10 OWASP Low-code/No-code Security Risks (Citizen Development Top 10)

**Doğuş ve amaç:** LCNC platformlarının (grafik arayüzle, geleneksel kodlama olmadan uygulama geliştirme) yaygınlaşması ve "citizen developer"ların güvenlik gözetimi olmadan uygulama üretmesiyle ortaya çıkan riskler için farkındalık oluşturmak.

**Sürümler:** 2022 edisyonu. Tek sürüm.

**Liste (LCNC-SEC-01 … 10):** LCNC-SEC-01 Account Impersonation, LCNC-SEC-02 Authorization Misuse, LCNC-SEC-03 Data Leakage and Unexpected Consequences, LCNC-SEC-04 Authentication and Secure Communication Failures, LCNC-SEC-05 Security Misconfiguration, LCNC-SEC-06 Injection Handling Failures, LCNC-SEC-07 Vulnerable and Untrusted Components, LCNC-SEC-08 Data and Secret Handling Failures, LCNC-SEC-09 Asset Management Failures, LCNC-SEC-10 Security Logging and Monitoring Failures.

**Bağlam:** LCNC platformlarındaki "app store"/marketplace bileşenleri, harici sistemlere bağlanan connector'lar ve gömülü kimlikler gibi LCNC'ye özgü riskler vurgulanır. Web Top 10 kategorilerinin (injection, misconfiguration, logging) LCNC bağlamına uyarlanmış halidir.

**Olgunluk (2026):** Düşük; "Lab" statüsünde (Incubator'ı geçmiş ancak henüz Production/Flagship olgunluğunda değil). 2022'den beri tek sürüm; topluluk meetup'ları ve görece düşük ivme.

---

## 3. Projeler Arası Karşılaştırma ve İlişkiler

**Olgunluk ve benimsenme spektrumu:** En olgun ve en yaygın: Web Top 10 (Flagship) ve API Security Top 10. Yüksek görünürlük + hızlı evrim: LLM Top 10 ve yeni Agentic AI Top 10. Orta olgunluk: Mobile Top 10, Kubernetes Top 10, CI/CD Top 10. Niş/durağan: Privacy Risks (Lab), LCNC (Lab), ML Security (v0.3 taslak), Serverless (terk edilmiş).

**Web vs API vs Mobile – neden ayrı çerçeveler?**
- **Web Top 10:** Tarayıcı tabanlı, sunucu tarafı render eden uygulamalardaki geniş risk yelpazesi (XSS, injection, misconfiguration). Veri-temelli, geniş CWE havuzu.
- **API Security Top 10:** Saldırı yüzeyi yetkilendirme mantığı ve iş akışı kötüye kullanımı etrafında yoğunlaşır. Kritik fark: birçok API zafiyeti geçerli istekler ve HTTP 200 yanıtlarıyla gerçekleşir – geleneksel tarayıcılar bunları göremez; BOLA/BFLA gibi iki-hesap testi gerektiren bağlamsal kusurlar manuel test ister. Injection'ın çıkarılması bu farkın altını çizer.
- **Mobile Top 10:** Saldırgan cihaza fiziksel/yerel erişebilir; bu nedenle binary koruması, tersine mühendislik, istemci tarafı depolama ve hardcoded credential riskleri öne çıkar – web/API'de olmayan bir tehdit modeli.

**LLM Top 10 vs ML Security Top 10 – sıkça karıştırılır, netleştirme:**
- **LLM Top 10:** *Uygulama katmanı* riskleri – prompt injection, system prompt leakage, insecure output handling, excessive agency. LLM'i bir bileşen olarak kullanan uygulamayı hedefler.
- **ML Security Top 10:** *Model/pipeline ve model tedarik zinciri* riskleri – adversarial input manipulation, data poisoning, model inversion, membership inference, model theft. ML modelinin kendi matematiksel/istatistiksel saldırı yüzeyini hedefler.
- Özetle: LLM Top 10 "LLM uygulaması nasıl kötüye kullanılır?", ML Security Top 10 "model ve eğitim hattı nasıl saldırıya uğrar?" sorusuna yanıt verir. İkisi tamamlayıcıdır; LLM'ler ML risklerini miras alır ama üretken doğaları nedeniyle yeni riskler ekler.

**CI/CD Top 10 ve Kubernetes Top 10'un DevSecOps ekosistemindeki rolü:** Bu ikisi, "shift-left"in ötesine geçip *pipeline ve runtime altyapısını* güvenceye alır. CI/CD Top 10 build/deploy hattını (kaynak, akış kontrolü, kimlik, secret hijyeni, artefakt bütünlüğü) korurken; Kubernetes Top 10 çalışma zamanı orkestrasyon katmanını (workload config, RBAC/authorization, network segmentation, küme↔bulut sınırı) korur. Birlikte, yazılım tedarik zincirinin uçtan uca (kod→build→artefakt→küme→bulut) savunmasını oluştururlar; biri olmadan diğeri eksik kalır (sertleştirilmiş bir pipeline olmadan tedarik zinciri kontrolleri atlatılabilir; güvenli build olmadan da küme güvenliği yetersizdir).

---

## 4. Genel Değerlendirme ve Öneriler

**Top 10 yaklaşımının etkinliği:** OWASP Top 10 yaklaşımı, farkındalık ve ortak dil yaratmada son derece etkilidir – "A01:2021" gibi kodlar sektörde ortak bir referans haline gelmiştir. Ancak OWASP'ın kendisi de vurguladığı gibi, Top 10 bir *başlangıç noktası*dır, tam bir güvenlik programı değildir. Pass/fail checklist gibi kullanılması en yaygın hatadır. Doğrulama için ASVS, olgunluk için SAMM, SDLC entegrasyonu için NIST SSDF ile tamamlanmalıdır.

**Öncelik sıralaması (organizasyonlar için):**
1. **Mutlaka benimsenmeli:** Web Top 10 (2021 resmi + 2025 RC'ye geçiş planı), API Security Top 10 (API-ağırlıklı/mikroservis mimariler için kritik).
2. **Stack'e göre yüksek öncelik:** Kubernetes Top 10 ve CI/CD Top 10 (bulut-doğal/DevSecOps benimseyenler için); Mobile Top 10 (mobil uygulama üreticileri); LLM Top 10 ve Agentic AI Top 10 (GenAI entegre edenler).
3. **Uyum/bağlama göre:** Privacy Risks (GDPR/CCPA), LCNC (yaygın citizen development olan kurumlar).

**Eşik ve sinyaller (önceliği değiştirecek):** Eğer mimariniz büyük ölçüde API/mikroservise kayıyorsa API Security Top 10'u Web ile eşit önceliğe taşıyın; üretimde her gün deploy edip aralıklı taradığınız (continuous deployment / intermittent scanning) bir durumdaysanız, Security Misconfiguration ve Software Supply Chain (2025) kategorilerine SBOM + IaC tarama ile öncelik verin; GenAI/ajan benimsemesi pilot aşamasından üretime geçtiyse LLM ve Agentic AI Top 10'u zorunlu okuma listesine ekleyin.

**Boşluklar ve iyileştirme alanları:**
- **Tutarsız metodoloji:** Yalnızca Web Top 10 ve (kısmen) Mobile gerçek veri-temelli; API, CI/CD, Kubernetes, LLM büyük ölçüde uzman görüşüne dayanır. Bu, bazı listelerin "en kritik" iddiasını zayıflatır.
- **Bakım eşitsizliği:** ML Security (v0.3 taslak), Serverless (terk edilmiş) ve Privacy/LCNC (durağan) projeleri, hızlı evrilen AI projelerinin gölgesinde kalmıştır.
- **Örtüşme ve kafa karışıklığı:** LLM vs ML, Web vs API arasındaki kapsam sınırları kullanıcılar için her zaman net değil.
- **Sürüm senkronizasyonu:** Aynı kökten gelen kategorilerin (SSRF, supply chain) farklı listelerde farklı yerlerde olması koordinasyon ihtiyacı doğuruyor.

**Gelecekteki olası Top 10 projeleri:** OWASP zaten **Top 10 for Agentic Applications 2026**'yı (9 Aralık 2025'te, Black Hat Europe/London Agentic Security Summit'te yayımladı; 100'den fazla uzmanın katkısıyla, NIST/Microsoft/NVIDIA gibi kuruluşların gözden geçirmesiyle; ASI01 Agent Goal Hijack, ASI02 Tool Misuse, ASI03 Identity & Privilege Abuse … ASI06 Memory & Context Poisoning … ASI10 Rogue Agents) ve **Top 10 for Non-Human Identities (NHI)** girişimini başlatmıştır. Ayrıca yeni "Agentic Skills Top 10 (AST10)" gibi alt girişimler ortaya çıkmaktadır. Gelecekte muhtemel alanlar: IoT/gömülü cihaz güvenliği, Web3/blockchain-smart contract güvenliği ve kuantum-sonrası (post-quantum) kriptografi hazırlığı. AI ve kimlik (özellikle NHI) en aktif genişleme yönüdür.

---

## 5. Özet Tablo

| Proje | İlk Çıkış | Son Versiyon | Versiyon Sayısı | Olgunluk Seviyesi |
|---|---|---|---|---|
| Web Application Top 10 | 2003 | 2025 (RC) | 8 (2003, 2004, 2007, 2010, 2013, 2017, 2021, 2025) | Çok yüksek (Flagship) |
| Mobile Top 10 | 2014 | 2024 | 3 (2014, 2016, 2024) | Orta-yüksek |
| API Security Top 10 | 2019 | 2023 | 2 (2019, 2023) | Yüksek |
| LLM Applications Top 10 | 2023 | 2025 (yay. Kasım 2024) | 3 (v1.0 2023, v1.1 2023, 2025) | Yüksek, hızla evriliyor |
| ML Security Top 10 | 2023 | 2023 v0.3 (taslak) | 1 (taslak) | Düşük (durağan) |
| Kubernetes Top 10 | 2022 | 2025 | 2 (2022, 2025) | Orta |
| CI/CD Security Top 10 | 2022 | 2022 (v1.0) | 1 | Orta |
| Privacy Risks Top 10 | 2014 | 2021 (v2.0) | 2 (2014, 2021) | Orta-düşük (Lab) |
| Serverless Top 10 | 2018 | 2018 (v1.0 Interpretation) | 1 | Çok düşük (terk edilmiş) |
| Low-code/No-code Top 10 | 2022 | 2022 | 1 | Düşük (Lab) |

---

*Not: 2025 tarihli Web Top 10 hâlâ Release Candidate aşamasındadır; OWASP yalnızca küçük rötuşlar beklendiğini belirtmiştir. Kubernetes Top 10 2025 edisyonu ve bazı küçük projeler için OWASP gün düzeyinde resmi yayın tarihi yayımlamamıştır; bu tarihler "edisyon/yıl" düzeyinde alınmalıdır. ML Security, Serverless, Privacy ve LCNC projeleri 2026 itibarıyla aktif/güncel bakım sinyali göstermemektedir.*