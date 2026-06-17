# **Fortune 500 Ölçeğinde Savunma Derinliği Mimarisi: Güvenlik Politikaları, Beşeri Risk Yönetimi ve Oltalama Simülasyonu Mühendisliği**

## **Kabul Edilebilir Kullanım Politikası ve İnsan Güvenlik Duvarı Altyapısı**

Modern kurumsal siber savunma stratejileri, katmanlı bir güvenlik mimarisi olan "Savunma Derinliği" (Defense in Depth) prensibi üzerine inşa edilmektedir. Teknolojik kontroller ne kadar gelişmiş olursa olsun, siber saldırganlar hedef sisteme sızmak için ekseriyetle en esnek ve manipüle edilebilir katman olan insan faktörünü hedef almaktadır1. Bu doğrultuda, Kabul Edilebilir Kullanım Politikası (Acceptable Use Policy \- AUP), kurumsal bilgi varlıklarının, ağ altyapısının ve uç noktaların hangi sınırlar dahilinde kullanılacağını belirleyen en temel idari kontrol mekanizmasıdır3. AUP, yalnızca yasal bir sorumluluk reddi belgesi olmanın ötesinde, her çalışanın aktif birer savunma unsuruna dönüştürülmesini amaçlayan "İnsan Güvenlik Duvarı" (Human Firewall) konseptinin operasyonel temelini oluşturur5.  
Sistem mimarisi perspektifinden ele alındığında, AUP'nin kurumsal topolojideki izdüşümü, uç nokta (endpoint) ve ağ erişim kontrolü katmanlarında şekillenir4. Statik bir politika metninde yer alan kurallar, kurumsal ağ topolojisinde yer alan teknik bileşenler aracılığıyla dinamik olarak zorunlu kılınmaktadır.

\+---------------------------------------------------------------------------------+  
|                                KURUMSAL AĞ TOPOLOJİSİ                           |  
|                                                                                 |  
|  \[Kullanıcı Cihazı (Uç Nokta)\]                                                  |  
|         │                                                                       |  
|         ▼                                                                       |  
|  \[802.1X NAC (Ağ Erişim Kontrolü)\] ───► Kimlik Doğrulama & Profilleme (AUP)     |  
|         │                                                                       |  
|         ▼                                                                       |  
|  \[Secure Email Gateway (SEG)\] ────────► SPF/DKIM/DMARC & Link Analizi           |  
|         │                                                                       |  
|         ▼                                                                       |  
|  \[Next-Gen Firewall (NGFW)\] ──────────► SSL/TLS Deşifre & Web Filtreleme        |  
|         │                                                                       |  
|         ▼                                                                       |  
|  \[Merkezi SIEM / Wazuh Sunucusu\] ◄────► Log Korelasyonu & Anomali Tespiti       |  
\+---------------------------------------------------------------------------------+

Kullanıcının şahsi bir cihazı (BYOD) kurumsal ağa bağlama girişimi, 802.1X Ağ Erişim Kontrolü (NAC) sistemleri tarafından tespit edilerek engellenir veya izole bir misafir VLAN'ına yönlendirilir3. Benzer şekilde, Next-Generation Firewall (NGFW) üzerinde uygulanan SSL/TLS deşifre (Decryption) ve kategori bazlı web filtreleme politikaları, kullanıcının AUP dışı zararlı veya yetkisiz adreslere erişmesini teknik olarak imkansız hale getirir3. Uç noktalarda konumlandırılan Veri Kaybı Önleme (DLP) ajanları ise hassas verilerin şahsi bulut depolama alanlarına veya USB aygıtlara aktarılmasını AUP direktifleri doğrultusunda engeller4.  
Uluslararası standartlar, AUP ve beşeri güvenlik katmanını yapısal olarak zorunlu kılmaktadır. NIST SP 800-53 Revizyon 5 standardında yer alan "Farkındalık ve Eğitim" (Awareness and Training \- AT) kontrol ailesi, kurumların kapsamlı bir güvenlik bilinci politikası oluşturmasını (AT-1), genel farkındalık eğitimleri düzenlemesini (AT-2) ve rol tabanlı spesifik eğitim süreçleri kurgulamasını (AT-3) şart koşar9. ISO/IEC 27001 standardı ise "Varlıkların Kabul Edilebilir Kullanımı" (Control A.8.1.3) ve "Bilgi Güvenliği Farkındalığı" (Control A.7.2.2) maddeleriyle bu idari kontrollerin teknik altyapıyla bir bütün olarak işletilmesini öngörür.  
Yerel mevzuat uyumluluğu açısından bakıldığında, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca hazırlanan Kişisel Veri Güvenliği Rehberi, çalışanların farkındalığının artırılmasını ve eğitilmesini "İdari Tedbirler" arasında birinci sırada konumlandırmaktadır4. Veri ihlallerinin büyük bir kısmının iç unsurlar ve insan hatası kaynaklı olduğu göz önünde bulundurulduğunda, çalışanların veri güvenliği hükümlerini içeren disiplin yönetmelikleriyle desteklenmiş bir AUP'yi imzalamış olması yasal bir zorunluluktur8.  
Bankacılık Düzenleme ve Denetleme Kurumu (BDDK) tarafından yayımlanan Bilgi Sistemleri Yönetmeliği ise finans kuruluşlarının tüm çalışanları, taşeronları ve dış hizmet sağlayıcıları için yıllık olarak güncellenen, kabul edilebilir kullanım sınırlarını net bir şekilde çizen eğitim programları yürütmesini zorunlu kılar3. Bu bağlamda, teknik kontrollerle desteklenmeyen idari politikaların kurumu siber tehditlere ve yasal yaptırımlara karşı korumasız bırakacağı açıktır4.

## **Güvenlik Farkındalığı Eğitimlerinin Tasarımı, Rol Tabanlı Eğitim ve SANS Olgunluk Modeli**

Etkili bir siber güvenlik farkındalık programı oluşturmanın ilk adımı, mevcut durumun nesnel metriklerle ölçülmesi ve olgunluk seviyesinin belirlenmesidir. Bu alandaki en prestijli metodoloji olan SANS Güvenlik Farkındalığı ve Kültür Olgunluk Modeli (SANS Security Awareness & Culture Maturity Model), kurumlara siber güvenlik bilincini ölçmek, değerlendirmek ve optimize etmek için beş aşamalı bir yol haritası sunar1.

| Olgunluk Seviyesi | Tanım | Odak Noktası ve Operasyonel Yapı | Temel Performans Göstergeleri (KPIs) |
| :---- | :---- | :---- | :---- |
| **Seviye 1** | Mevcut Olmayan (Nonexistent) | Herhangi bir planlı eğitim veya farkındalık faaliyeti yoktur. Çalışanlar siber tehditlere karşı tamamen savunmasızdır17. | Ölçülebilen bir veri yoktur; olay müdahale süreçlerinde insan hatası tespiti yapılamaz1. |
| **Seviye 2** | Uyum Odaklı (Compliance-Focused) | Eğitimler yalnızca yasal mevzuatları (KVKK, BDDK vb.) veya sektörel standartları karşılamak amacıyla yılda bir kez statik olarak verilir13. | Eğitime katılım oranları, tamamlanma yüzdeleri, sınav başarı skorları15. |
| **Seviye 3** | Aktif Teşvik ve Katılım (Promoting Awareness) | Eğitimler yıl boyunca sürdürülür. Oltalama simülasyonları, video içerikler ve interaktif materyallerle çalışanların davranış değişikliği tetiklenir1. | Oltalama tıklama oranları (Click-through Rate), şüpheli e-postaları raporlama oranları1. |
| **Seviye 4** | Kültür Entegrasyonu (Culture Integration) | Güvenlik, kurumsal kültürün bir parçası haline gelir. Çalışanlar kendilerini siber güvenliğin bir parçası olarak görür ve "İnsan Sensörü" rolünü benimser5. | Şüpheli olay bildirim süreleri, güvenlik ihlali sıklığındaki azalma, çalışanların tutum anketleri1. |
| **Seviye 5** | Metrik Odaklı ve Optimize (Metrics-Driven) | Program, toplanan nicel veriler doğrultusunda sürekli optimize edilir. Beşeri risk haritaları çıkarılarak yönetim kuruluna düzenli raporlanır5. | Yatırımın geri dönüşü (ROI), ortalama tespit süresi (MTTD), ortalama müdahale süresi (MTTR) iyileşme oranları5. |

SANS olgunluk modelinde Seviye 3 ve üzerine geçebilmek için, kurum genelinde tek tip eğitim yaklaşımı terk edilerek NIST SP 800-53 AT-3 kontrolünde tanımlanan "Rol Tabanlı Güvenlik Eğitimi" (Role-Based Security Training) mimarisine geçiş yapılmalıdır10. Her kurumsal rolün karşı karşıya kaldığı tehdit vektörü ve sahip olduğu erişim yetkileri farklılık gösterdiğinden, eğitim içerikleri de bu risklere göre özelleştirilmelidir11.

* **Üst Yönetim ve C-Suite Karar Vericiler:** Bu profil, doğrudan finansal transferleri veya kritik kurumsal verileri hedef alan "Balina Avı" (Whaling) ve "Kurumsal E-posta Dolandırıcılığı" (BEC) saldırılarının birincil hedefidir2. Eğitimlerinde, halka açık kaynaklardan (OSINT) toplanabilecek kişisel bilgiler, sosyal mühendislik senaryoları ve aciliyet hissi uyandıran sahte senaryolar üzerinde durulmalı, derinlemesine analizler sunulmalıdır1.  
* **Ayrıcalıklı Hesap Sahipleri ve Sistem Yöneticileri:** BT operasyon ekipleri ve sistem yöneticileri, kurumsal altyapının anahtarlarına sahiptir11. Bu gruba yönelik eğitimler; kimlik bilgisi hırsızlığı (Credential Dumping), yetki yükseltme (Privilege Escalation), Active Directory güvenliği ve güvenli uzaktan erişim protokollerini (MFA bypass mekanizmaları dahil) kapsamalıdır11.  
* **Yazılım Geliştiriciler (DevSecOps):** Yazılım mühendislerinin eğitim odağı, kaynak kod güvenliğidir. OWASP Top 10 zafiyetleri, güvenli kütüphane kullanımı, API güvenliği ve kod içine gömülü (hardcoded) kimlik bilgilerinin engellenmesi gibi Secure SDLC (Güvenli Yazılım Geliştirme Yaşam Döngüsü) prensipleri işlenmelidir.  
* **Finans ve İnsan Kaynakları Departmanları:** Bu departmanlar, sosyal mühendislik yoluyla sahte fatura ödemeleri yaptırma veya çalışanların kişisel verilerini (özlük dosyaları vb.) sızdırma girişimlerine maruz kalır12. Eğitimleri, kurumsal onay süreçlerinin işletilmesi ve veri paylaşım yöntemlerinin doğrulanması üzerine kurulmalıdır3.

Bu eğitimlerin otomasyonu ve sürdürülebilirliği için Kaspersky Automated Security Awareness Platform (Kaspersky ASAP) veya benzeri kurumsal SaaS platformları konumlandırılmaktadır15. Kaspersky ASAP, çalışanın mevcut bilgi seviyesine ve departmanına göre otomatik öğrenme yolları (learning paths) çizer. Çalışanı uzun ve sıkıcı eğitimlerle boğmak yerine, 5-10 dakikalık mikro-öğrenme (micro-learning) modülleri ve ardından yapılan anlık testlerle bilginin kalıcı olmasını sağlar19. Bu süreç, SANS modelinde Seviye 4 olan "Kültür Entegrasyonu" aşamasına ulaşmak için gerekli olan sürekli tekrar ve pekiştirme ihtiyacını karşılar5.

## **Oltalama Simülasyonu Mühendisliği: Ofansif ve Defansif Altyapı Tasarımı**

Oltalama simülasyonları, bir kurumun beşeri risk seviyesini ölçümlemede en etkili pratik yöntemdir15. Ancak, modern savunma sistemlerinin var olduğu bir kurumsal ağda gerçekçi bir simülasyon gerçekleştirmek, ileri düzey teknik yapılandırmalar gerektirir7.

### **Ofansif Perspektif: GoPhish ve Evilginx3 Entegrasyonu ile Gelişmiş Tehdit Emülasyonu**

Açık kaynaklı bir oltalama çerçevesi olan GoPhish, kurumsal testlerde orkestrasyonu sağlamak amacıyla yaygın olarak kullanılır7. Ancak varsayılan haliyle GoPhish, modern e-posta ağ geçitleri (SEG) tarafından statik imzaları nedeniyle kolaylıkla engellenir7. Profesyonel bir sızma testi veya simülasyon çalışmasında, OPSEC (Operations Security) standartlarını korumak amacıyla GoPhish kaynak kodu derlenmeden önce değiştirilmelidir7.  
GoPhish e-postalarının üstbilgi (header) kısmında yer alan ve e-postanın bir simülasyon aracından geldiğini açıkça gösteren alanlar temizlenmelidir7. gophish/config/config.go ve diğer kaynak kod dosyalarında yer alan imzalar şu şekilde modifiye edilir7:

Bash  
\# GoPhish özgün üstbilgi imzalarının silinmesi  
find . \-type f \-exec sed \-i.bak 's/X-Gophish-Contact/X-Contact/g' {} \+  
find . \-type f \-exec sed \-i.bak 's/X-Gophish-Signature/X-Signature/g' {} \+

\# config.go içerisindeki sunucu imzasının gizlenmesi  
\# Varsayılan "gophish" değeri yerine alakasız bir sunucu adı tanımlanır  
sed \-i 's/const ServerName \= "gophish"/const ServerName \= "Apache\\/2.4.41 (Ubuntu)"/g' config/config.go

GoPhish sunucusunun yönetim arayüzü (port 3330\) hiçbir şekilde dış dünyaya açılmamalıdır7. Sunucu, dışarıya yalnızca HTTPS (port 443\) üzerinden oltalama sayfalarını sunacak şekilde yapılandırılır7. Bu mimaride, Apache veya Nginx bir ters proxy (reverse proxy) olarak konumlandırılır ve SSL/TLS sertifikasyon süreci ACME (Let's Encrypt) ile otomatikleştirilir7.  
DNS yapılandırma aşamasında, simülasyon için satın alınan alan adının (domain) meşruiyetini kanıtlamak adına SPF, DKIM ve DMARC kayıtları eksiksiz girilmelidir7. Gönderim profili (Sending Profile) için SendGrid gibi saygın bir SMTP Relay servisinin API entegrasyonu kullanılır7.  
Saldırganlar artık kullanıcı şifrelerinin yanı sıra Çok Faktörlü Kimlik Doğrulama (MFA) kodlarını ve oturum çerezlerini (session cookies) de ele geçirebilen AitiM (Adversary-in-the-Middle) mimarilerini kullanmaktadır7. Bu tehdit emülasyonunu gerçekleştirmek için GoPhish ile Evilginx3 entegre bir şekilde çalıştırılır7.

\+───────────────────+             \+───────────────────+             \+───────────────────+  
|   Hedef Kullanıcı | ──(Link)──► | Evilginx3 Proxy   | ──(İstek)─► | Özgün Kimlik Sağ. |  
| (E-posta Alıcısı) | ◄──(MFA)─── | (Ters Proxy)      | ◄──(MFA)──  | (M365 / AD FS)    |  
\+───────────────────+             \+───────────────────+             \+───────────────────+  
                                            │  
                                            ▼ (Oturum Çerezleri & Şifre)  
                                  \+───────────────────+  
                                  | GoPhish Sunucusu  |  
                                  | (Veri Kaydı & Sim)|  
                                  \+───────────────────+

Evilginx3, hedef kullanıcı ile özgün kimlik sağlayıcı (örneğin Microsoft 365\) arasında bir proxy görevi görür7. GoPhish'ten gönderilen benzersiz link (https://login.kurumsaloltalama.com/?id={{.Id}}), kullanıcıyı Evilginx3 üzerinde tanımlı olan "phishlet" şablonuna yönlendirir7. Kullanıcı gerçek giriş ekranının birebir aynısını görür, parolasını girer ve telefonuna gelen SMS veya Authenticator onay kodunu sisteme yazar7. Evilginx3, bu verileri arka planda gerçek sunucuya iletip doğrulatırken, başarılı oturum açma işlemi sonrasında oluşan "Oturum Çerezlerini" (Session Tokens / Cookies) yakalar ve diske kaydeder7. Bu sayede saldırgan/simülasyon ekibi, kullanıcının şifresini bilmesine veya MFA cihazına sahip olmasına gerek kalmadan kullanıcının hesabına doğrudan erişim elde eder7.

### **Defansif Perspektif: SEG İstisnaları ve Tarayıcı Bot Süzme Mühendisliği**

Güvenlik ekiplerinin oltalama simülasyonu başlatmadan önce, e-postaların kurumsal gelen kutularına (inbox) sorunsuz ulaşabilmesi için Secure Email Gateway (SEG) sistemlerinde ve e-posta sunucularında beyaz liste (whitelisting) tanımlamaları yapması gerekir6.  
Microsoft Defender for Office 365 üzerinde, simülasyon e-postalarının engellenmesini önlemek ve güvenli link (Safe Links) tarama motorlarının simülasyon linklerini bozmasını engellemek için şu politikalar uygulanır22:

* **Gelişmiş Teslimat (Advanced Delivery) Yapılandırması:** Microsoft 365 Güvenlik Portalı üzerinden "Gelişmiş Teslimat" ayarlarına girilir ve "Oltalama Simülasyonu" (Phishing Simulation) sekmesine simülasyonda kullanılan gönderici IP adresleri ile alan adları (domain) eklenir. Bu sayede e-postalar, spam filtresi ve sistem taramaları bypass edilerek doğrudan alıcıya ulaştırılır22.  
* **Mail Akış Kuralları (Transport Rules):** Gelen e-postaların başlığına (header) X-MS-Exchange-Organization-SkipSafeLinksProcessing \= 1 değeri eklenir22. Bu kural, Safe Links özelliğinin simülasyon URL'lerini taramasını ve yeniden yazmasını engeller, böylece kullanıcının tıkladığı özgün simülasyon adresi korunur22.

| E-posta Güvenlik Platformu | Uygulanacak İstisna Tipi | Yapılandırma Detayı |
| :---- | :---- | :---- |
| **Microsoft Defender for Office 365** | Advanced Delivery & Transport Rule | IP ve Domain tanımlaması, SkipSafeLinksProcessing header eklenmesi (Değer: 1\)22. |
| **FortiMail** | IP Bypass & Antispam Policy | Gönderici IP adreslerinin "Safelist" içerisine alınması, Antispam profillerinde "Bypass" tanımlanması6. |
| **Mimecast** | Impersonation Bypass & URL Protection | "Permitted Senders" listesine alan adının eklenmesi, simülasyon IP'lerinin URL tarama muafiyetine alınması6. |

Simülasyon süreçlerinde karşılaşılan en büyük teknik sorun, e-posta güvenlik duvarlarının (SEG) veya uç nokta antivirüs yazılımlarının, e-posta teslim edilir edilmez içerikteki linkleri otomatik olarak taraması (sandbox analizi) ve bu durumun GoPhish tarafında "kullanıcı tıkladı" olarak hatalı kaydedilmesidir21. Bu "Yapay Tıklama" (False Click) problemini çözmek için şu mühendislik yaklaşımları uygulanır21:

1. **Görünmez Honeypot Link Entegrasyonu:** E-posta şablonunun HTML koduna, normal bir kullanıcının göremeyeceği şekilde gizlenmiş bir link yerleştirilir (Örn: style="display:none; width:0px; height:0px;")21. Otomatik tarayıcı botlar e-postadaki tüm linkleri agresif bir şekilde tarayacağı için bu gizli linke de istek atacaktır21. GoPhish önündeki proxy sunucusunda, bu honeypot URL'ine gelen tüm istekler yakalanır ve bu istekleri gerçekleştiren IP adresleri o anki simülasyon istatistiklerinden düşülür21.  
2. **User-Agent ve IP Analizi:** Tarayıcı botların (örneğin Microsoft, Barracuda veya Zscaler tarayıcıları) kullandığı User-Agent bilgileri, standart kullanıcı tarayıcılarından (Chrome, Firefox vb.) farklıdır21. GoPhish önünde çalışan Nginx ters proxy katmanında, gelen isteklerin User-Agent değerleri regex kontrolleriyle taranır ve bilinen güvenlik botu imzaları içeren istekler GoPhish veritabanına yansıtılmadan doğrudan 200 OK veya 404 Not Found dönülerek sonlandırılır7.  
3. **Zaman Aralığı (Timing) Filtrelemesi:** E-postanın gönderildiği milisaniye ile linke tıklanma anı arasındaki süre hesaplanır. Eğer tıklama e-postanın ulaştığı ilk 3 saniye içinde gerçekleştiyse, bu durum insan doğasına aykırı kabul edilerek "tarayıcı bot tıklaması" olarak etiketlenir21.

## **SOC Perspektifinden Tespit Mühendisliği: Wazuh ve Sysmon ile Tehdit Avcılığı**

Bir siber saldırgan, oltalama e-postasını başarıyla teslim ettikten sonra, kurbanı e-posta ekindeki makrolu bir Excel belgesini açmaya veya bir PDF içerisindeki linkten zararlı bir dosya indirip çalıştırmaya ikna eder26. Bu aşama, MITRE ATT\&CK matrisinde T1204.002 (User Execution: Malicious File) tekniğine karşılık gelir26. SOC analistleri için bu aşamada amaç, tehdidin uç noktada çalıştırıldığı anda (Execution) hızlı bir şekilde tespit edilip izole edilmesidir26.

### **Loglama Altyapısının Yapılandırılması: Sysmon ve PowerShell Gelişmiş Loglama**

Bir Office belgesi (Excel, Word) açıldığında, makro kodunun (VBA) doğrudan işletim sistemi üzerinde komut koşturması beklenmeyen bir durumdur26. Genellikle makrolar, arka planda gizli bir PowerShell veya Command Prompt (cmd.exe) süreci başlatarak komut kontrol (C2) sunucusundan zararlı yazılım indirir26.  
Bu anormal süreci yakalamak için uç noktalarda Microsoft Sysinternals Sysmon aracı kurulmalı ve süreci izleyecek bir konfigürasyon dosyası deklare edilmelidir27. Aşağıdaki Sysmon XML kural şablonu, Microsoft Office uygulamalarından türeyen tüm alt süreçleri (child processes) özellikle izlemek üzere yapılandırılmıştır32:

XML  
\<Sysmon schemaversion\="4.30"\>  
  \<HashAlgorithms\>md5,sha256\</HashAlgorithms\>  
  \<EventFiltering\>  
    \<\!-- SYSMON EVENT ID 1: PROCESS CREATION \--\>  
    \<ProcessCreate onmatch\="include"\>  
      \<\!-- Ebeveyn süreci Office uygulaması olan ve şüpheli alt süreç başlatan durumlar \--\>  
      \<ParentImage condition\="image"\>excel.exe\</ParentImage\>  
      \<ParentImage condition\="image"\>winword.exe\</ParentImage\>  
      \<ParentImage condition\="image"\>outlook.exe\</ParentImage\>  
    \</ProcessCreate\>  
      
    \<ProcessCreate onmatch\="exclude"\>  
      \<\!-- Bilinen güvenli alt süreçlerin elenmesi (Gereksiz log üretimini önlemek için) \--\>  
    \</ProcessCreate\>  
  \</EventFiltering\>  
\</Sysmon\>

Uç noktalardaki Wazuh Agent, bu Sysmon olaylarını ve PowerShell operasyonel loglarını yakalayarak merkezi SIEM (Wazuh Manager) sunucusuna taşır27.

### **Wazuh Üzerinde Tespit Kurallarının Yazılması ve Analiz Mühendisliği**

Wazuh Manager tarafında, uç noktalardan gelen Sysmon Event ID 1 (Süreç Oluşturma) loglarını analiz eden ve ebeveyn-çocuk ilişkisini denetleyen kurallar tasarlanmalıdır26. /var/ossec/etc/rules/local\_rules.xml içerisine eklenecek aşağıdaki kural mimarisi, bir Office belgesinden PowerShell veya CMD türediği anda kritik seviyede (Level 12\) alarm üretir26:

XML  
\<group name\="windows,sysmon,office\_exploitation,"\>  
  \<\!-- Ana Kural: Office Uygulaması Tarafından Başlatılan Herhangi Bir Süreç \--\>  
  \<rule id\="100600" level\="3"\>  
    \<if\_sid\>61603\</if\_sid\> \<\!-- Wazuh yerleşik Sysmon Event ID 1 kuralı \--\>  
    \<field name\="win.eventdata.parentImage"\>excel\\.exe|winword\\.exe|outlook\\.exe|powerpnt\\.exe\</field\>  
    \<description\>Şüpheli Davranış: Bir Microsoft Office uygulaması yeni bir alt süreç tetikledi.\</description\>  
    \<group\>office\_child\</group\>  
  \</rule\>

  \<\!-- Alt Kural: Office Uygulamasının PowerShell, CMD veya Script Host Başlatması \--\>  
  \<rule id\="100601" level\="12"\>  
    \<if\_parent\>100600\</if\_parent\>  
    \<field name\="win.eventdata.image"\>powershell\\.exe|cmd\\.exe|wscript\\.exe|cscript\\.exe|mshta\\.exe|control\\.exe|regsrv32\\.exe\</field\>  
    \<description\>Kritik Alarm: Office Uygulaması ($(win.eventdata.parentImage)) Üzerinden Komut Satırı veya Script Motoru Tetiklendi: $(win.eventdata.image)\</description\>  
    \<mitre\>  
      \<id\>T1204.002\</id\>  
      \<id\>T1059.001\</id\>  
      \<id\>T1218.005\</id\>  
    \</mitre\>  
    \<group\>malicious\_macro,initial\_access\_detected\</group\>  
  \</rule\>

  \<\!-- PowerShell Script Block Log Analizi (Event ID 4104\) \--\>  
  \<\!-- Saldırganın PowerShell kodlarını gizlemek için Base64 veya IEX (Invoke-Expression) kullanması durumunda tetiklenir \--\>  
  \<rule id\="100602" level\="10"\>  
    \<if\_sid\>60011\</if\_sid\> \<\!-- Windows PowerShell Event Kanalı Eşleşmesi \--\>  
    \<field name\="win.eventdata.scriptBlockText" type\="pcre2"\>(?i)(iex|invoke-expression|downloadstring|downloadfile|-enc|-encodedcommand|frombase64string)\</field\>  
    \<description\>PowerShell Şüpheli Kod Blok Çalıştırma: Obfuskasyon veya Dosya İndirme Teşebbüsü Algılandı\</description\>  
    \<mitre\>  
      \<id\>T1027\</id\>  
      \<id\>T1059.001\</id\>  
    \</mitre\>  
    \<group\>powershell\_abuse,obfuscation\_detected\</group\>  
  \</rule\>  
\</group\>

Eğer bir kullanıcı oltalama e-postasındaki Excel makrosunu çalıştırırsa ve bu makro powershell.exe \-ExecutionPolicy Bypass \-WindowStyle Hidden \-EncodedCommand ... komutunu tetiklerse, yazılan bu kural yapısı sayesinde28:

1. Uç noktadaki Sysmon, excel.exe tarafından tetiklenen powershell.exe sürecini yakalar26.  
2. Windows PowerShell loglama servisi, çalıştırılan Base64 kodunun içeriğini Event ID 4104 altında deşifre ederek kaydeder26.  
3. Wazuh Agent bu logları merkezi SIEM'e gönderir27.  
4. Wazuh Manager'daki 100601 ve 100602 numaralı kurallar aynı anda tetiklenerek SOC analistinin ekranına MITRE ATT\&CK eşleşmeli alarmları yansıtır26. Bu korelasyon, saldırganın ağda kalıcılık (persistence) elde etmesini veya yanal hareket (lateral movement) başlatmasını engeller26.

## **Adli Bilişim Standartlarında Log Yönetimi, Zaman Damgası ve Yasal Mevzuat Uyumluluğu**

Kurumsal savunma mimarisinde toplanan tüm logların güvenliği, bütünlüğü ve yasal geçerliliği en az saldırıların tespiti kadar kritiktir4. Türkiye Cumhuriyeti sınırları içerisinde faaliyet gösteren Fortune 500 ölçeğindeki bir şirket, loglama süreçlerinde iki temel kanuni düzenlemeye doğrudan tabidir12.

### **5651 Sayılı Kanun ve Zaman Damgası Mimarisi**

5651 Sayılı "İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun", kurumlara iç ağlarında internet erişimi sağladıkları tüm kullanıcılara ait trafik bilgilerini (IP, MAC adresi, erişim zamanı, port bilgileri vb.) kaydetme ve bu kayıtların doğruluğunu garanti etme yükümlülüğü getirmektedir38.

* **Trafik Bilgisi (Log) Saklama Süresi:** Erişim sağlayıcılar, yer sağlayıcılar ve kurumsal toplu kullanım sağlayıcılar (hotspot, misafir ağları vb.), ağ erişim kayıtlarını (DHCP, Firewall, Active Directory oturum açma logları vb.) en az 2 (iki) yıl süreyle saklamakla yükümlüdür38.  
* **Bütünlük ve Zaman Damgası Zorunluluğu:** Log dosyalarının adli merciler önünde delil niteliği taşıyabilmesi için, logların üretildikten hemen sonra kriptografik olarak imzalanması ve bütünlüğünün değiştirilmediğinin kanıtlanması gerekir37. Bu işlem için RFC 3161 standartlarına uygun bir Zaman Damgası (Timestamp Token) kullanılır37.

Matematiksel olarak zaman damgası, log dosyasının verisi olan ![][image1]'in kriptografik hash değeri ![][image2] ile zaman damgası otoritesinin sağladığı güvenilir zaman bilgisi ![][image3] değerlerinin birleştirilerek otoritenin özel anahtarı ![][image4] ile imzalanması işlemidir:  
![][image5]  
Söz konusu bütünlük doğrulama işlemi, adli bilişim standartlarında OpenSSL araçları kullanılarak şu şekilde gerçekleştirilir37:

Bash  
\# Step 1: Zaman Damgası İsteğinin (TSQ \- Time Stamp Request) Oluşturulması  
\# Log dosyasının SHA-256 hash değeri çıkarılarak bir istek dosyası hazırlanır  
openssl ts \-query \-data /var/log/dhcp\_5651\_access.log \-sha256 \-cert \-out /imza/dhcp\_request.tsq

\# Step 2: Zaman Damgası İstek Dosyasının Zaman Damgası Otoritesi (TSA) Tarafından İmzalanması  
\# Kurum içi kurulan TSA sunucusu veya yetkili harici otorite üzerinden imzalı TSR (Time Stamp Response) üretilir  
openssl ts \-reply \-queryfile /imza/dhcp\_request.tsq \-inkey /sertifikalar/tsakey.pem \-signer /sertifikalar/tsacert.pem \-out /imza/dhcp\_response.tsr

\# Step 3: Zaman Damgasının Log Dosyası Üzerinden Doğrulanması (Bütünlük Testi)  
\# Log dosyası üzerinde en ufak bir değişiklik (örn. bir IP adresinin silinmesi) yapılması durumunda doğrulama başarısız olacaktır  
openssl ts \-verify \-queryfile /imza/dhcp\_request.tsq \-in /imza/dhcp\_response.tsr \-CAfile /sertifikalar/tsaca.pem \-untrusted /sertifikalar/tsacert.pem

Doğrulama başarılı olduğunda sistem Verification: OK çıktısını üretir, bu da log dosyasının imzalandığı tarihten itibaren hiçbir tahrifata uğramadığını yasal olarak kanıtlar37.

### **KVKK Teknik Tedbirleri ve Log Güvenliği Standartları**

Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında yayımlanan Veri Güvenliği Rehberi, kişisel verilere erişimi denetlemek ve veri sızıntılarını önlemek amacıyla "Kullanıcı işlem hareketleri kaydının düzenli olarak tutulması" tedbirini zorunlu kılmaktadır4. Bu doğrultuda kurulan log altyapısının siber güvenlik mimarisi şu standartları karşılamalıdır4:

1. **Erişim Kontrolü ve Yetki Matrisi:** Veritabanları ve dosya sunucuları üzerindeki tüm okuma (SELECT), değiştirme (UPDATE) ve silme (DELETE) işlemleri kullanıcı bazlı olarak kaydedilmelidir4. Loglama mekanizması, "görevler ayrılığı" (segregation of duties) prensibine göre tasarlanmalı; sistem yöneticileri (domain admin vb.) kendi erişim loglarını silemeyecek veya devre dışı bırakamayacak şekilde merkezi bir WORM (Write Once Read Many) depolama alanına logları göndermelidir4.  
2. **Yedekleme ve Ağ Dışı Depolama (Air-Gapped Backup):** Fidye yazılımı (Ransomware) saldırılarında saldırganlar ilk olarak kurumsal logları ve yedekleme sunucularını hedef alarak şifrelemektedir4. KVKK uyumluluğu ve iş sürekliliği açısından yedekleme stratejileri, yedeklenen verilerin ağ dışında (Air-Gapped) veya bulut ortamında izole edilmiş, sadece sistem yöneticisinin sınırlı yetkiyle erişebileceği şifreli depolama alanlarında saklanmasını öngörür4.

## **Tehdit Önleme ve Operasyonel Siber Dayanıklılık Stratejisi**

Fortune 500 ölçeğinde bir siber savunma derinliği mimarisi, teknoloji, süreç ve insan katmanlarının kusursuz koordinasyonuyla sağlanabilir5. İdari politikaların teknik kontrollerle desteklenmesi, beşeri risklerin sürekli ölçülüp iyileştirilmesi ve tespit mühendisliğinin uç noktalara kadar indirilmesi, operasyonel siber dayanıklılığın temelidir5.  
Kurumsal siber güvenlik postürünü en üst düzeye çıkarmak adına şu stratejik adımların atılması gerekmektedir:

* **Dinamik Politika Entegrasyonu:** Kabul Edilebilir Kullanım Politikası (AUP), yılda bir kez imzalatılan statik bir metin olmaktan çıkarılarak NAC, DLP ve NGFW gibi ağ bileşenleri üzerinden gerçek zamanlı olarak deklare edilmelidir3.  
* **Sürekli Beşeri Risk Analizi:** SANS olgunluk modelinde Seviye 4 ve 5'e ulaşmak amacıyla, Kaspersky ASAP gibi platformlarla kişiselleştirilmiş, mikro-öğrenme odaklı rol tabanlı eğitimler yıl boyunca sürdürülmeli ve şüpheli e-postaları "raporlama oranı" temel bir performans göstergesi olarak kabul edilmelidir1.  
* **İleri Düzey Oltalama Tehdidi Emülasyonu:** Güvenlik ekipleri, Evilginx3 gibi MFA bypass yeteneğine sahip güncel AitiM saldırı tekniklerini kullanarak gerçekçi simülasyonlar planlamalı, bu süreçte SEG sistemlerinin otomatik link tarama anomalilerini honeypot yöntemleriyle elimine etmelidir7.  
* **Aktif SOC İzleme Altyapısı:** Uç noktalarda Sysmon ve gelişmiş PowerShell loglama mimarisi (Event ID 4104\) kurgulanarak, Office belgelerinden türeyen şüpheli alt süreçler Wazuh SIEM üzerinden anlık olarak korele edilmeli ve olası ihlaller ilk saniyelerde izole edilmelidir26.  
* **Yasal Güvence ve Adli Kanıt Bütünlüğü:** 5651 Sayılı Kanun ve KVKK gereksinimlerini karşılamak amacıyla, ağ trafik kayıtları ile kullanıcı hareket logları, RFC 3161 uyumlu zaman damgasıyla kriptografik olarak imzalanmalı ve ağ dışı izole edilmiş yedekleme alanlarında bütünlüğü korunarak muhafaza edilmelidir4.

Bu bütüncül yaklaşım, siber tehditlere karşı reaktif bir savunma yerine, proaktif bir siber güvenlik kültürü ve güçlü bir kurumsal siber dayanıklılık altyapısı tesis edecektir5.

#### **Alıntılanan çalışmalar**

1. Managing Human Risk with SANS Model | PDF | Computer Security \- Scribd, [https://www.scribd.com/document/869326166/SANS-Security-awareness-Maturity-Model](https://www.scribd.com/document/869326166/SANS-Security-awareness-Maturity-Model)  
2. Oltalama Nedir ? Nasıl Önlem Alınır ? \- Beyaz.Net, [https://www.beyaz.net/tr/guvenlik/makaleler/oltalama\_nedir\_nasil\_onlem\_alinir.html](https://www.beyaz.net/tr/guvenlik/makaleler/oltalama_nedir_nasil_onlem_alinir.html)  
3. Bilgi Teknolojileri Aracılığı ile Hizmet Sunan Tedarikçiler için Bilgi Güvenliği Standartları, [https://tedarikciportali.akbank.com/pages/assets/BT\_Hizmet\_Bilgi\_Guvenligi\_Standartlari.pdf](https://tedarikciportali.akbank.com/pages/assets/BT_Hizmet_Bilgi_Guvenligi_Standartlari.pdf)  
4. KİŞİSEL VERİ GÜVENLİĞİ REHBERİ (Teknik ve İdari Tedbirler) \- KVKK, [https://www.kvkk.gov.tr/yayinlar/veri\_guvenligi\_rehberi.pdf](https://www.kvkk.gov.tr/yayinlar/veri_guvenligi_rehberi.pdf)  
5. The SANS Security Awareness & Culture Maturity Model – Now Easier to Use and More Actionable, [https://www.sans.org/blog/sans-security-awareness-culture-maturity-model-easier-actionable](https://www.sans.org/blog/sans-security-awareness-culture-maturity-model-easier-actionable)  
6. PhishRod Cloud Whitelisting Guide | PDF | Internet Ethics | Telecommunications \- Scribd, [https://www.scribd.com/document/788290748/Whitelisting-Requirements-for-Phishrod-Cloud-2024](https://www.scribd.com/document/788290748/Whitelisting-Requirements-for-Phishrod-Cloud-2024)  
7. Evilginx & Gophish: How hackers launch phishing campaigns \- Outpost24, [https://outpost24.com/blog/phishing-better-proxy-than-story/](https://outpost24.com/blog/phishing-better-proxy-than-story/)  
8. Veri Sorumlusunun Alması Gereken İdari ve Teknik Tedbirler Nelerdir?, [https://nitelikliveri.com/diger-konular/veri-sorumlusunun-almasi-gereken-idari-ve-teknik-tedbirler-nelerdir/](https://nitelikliveri.com/diger-konular/veri-sorumlusunun-almasi-gereken-idari-ve-teknik-tedbirler-nelerdir/)  
9. NIST SP 800-53: What It Is, Controls & Implementation Guide \- Metricstream, [https://www.metricstream.com/learn/nist-sp-800-53.html](https://www.metricstream.com/learn/nist-sp-800-53.html)  
10. AT: Awareness And Training \- CSF Tools, [https://csf.tools/reference/nist-sp-800-53/r4/at/](https://csf.tools/reference/nist-sp-800-53/r4/at/)  
11. NIST SP 800-53: Controls, Families, and Implementation Tips \- Hyperproof, [https://hyperproof.io/nist-800-53/](https://hyperproof.io/nist-800-53/)  
12. Kişisel Veri Güvenliği Rehberi (Teknik ve İdari Tedbirler) \- KVKK, [https://kvkk.gov.tr/SharedFolderServer/CMSFiles/7512d0d4-f345-41cb-bc5b-8d5cf125e3a1.pdf](https://kvkk.gov.tr/SharedFolderServer/CMSFiles/7512d0d4-f345-41cb-bc5b-8d5cf125e3a1.pdf)  
13. KVKK Uyum Süreci ve Kişisel Veri Temel Farkındalık Eğitimi \- Coorbiz Akademi, [https://coorbizakademi.com/tr/egitim/kvkk-uyum-sureci-ve-kisisel-veri-temel-farkindalik-egitimi/](https://coorbizakademi.com/tr/egitim/kvkk-uyum-sureci-ve-kisisel-veri-temel-farkindalik-egitimi/)  
14. kişisel vERİLERİN KORUNMASI ve siber güvenlik \- KVKK, [https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/9a224548-1876-4065-aba8-24a0acb5bff6.pdf](https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/9a224548-1876-4065-aba8-24a0acb5bff6.pdf)  
15. AWARE Bilgi Güvenliği Farkındalık Hizmetleri \- Forcerta, [https://www.forcerta.com/profesyonel-hizmetler/aware-bilgi-guvenligi-farkindaligi/](https://www.forcerta.com/profesyonel-hizmetler/aware-bilgi-guvenligi-farkindaligi/)  
16. BDDK Sızma Testi Zorunluluğu: Bankalar Ne Yapmalı? \- Nordis Global, [https://www.nordisglobal.com/blog/bddk-sizma-testi-zorunlulugu-bankalar-ne-yapmali/](https://www.nordisglobal.com/blog/bddk-sizma-testi-zorunlulugu-bankalar-ne-yapmali/)  
17. SANS Security Awareness and Culture Maturity Model™ eBook, [https://www.sans.org/white-papers/security-awareness-maturity-model](https://www.sans.org/white-papers/security-awareness-maturity-model)  
18. SANS Security Awareness & Culture Maturity Model, [https://www.sans.org/for-organizations/workforce/security-awareness-training/ssa-ebook-maturity-model](https://www.sans.org/for-organizations/workforce/security-awareness-training/ssa-ebook-maturity-model)  
19. Cybersecurity Awareness Maturity Model Guide \- TechClass, [https://www.techclass.com/resources/learning-and-development-articles/cybersecurity-awareness-maturity-model-where-does-your-organization-stand](https://www.techclass.com/resources/learning-and-development-articles/cybersecurity-awareness-maturity-model-where-does-your-organization-stand)  
20. Upgrade Your Workflow, Part 2: Building Phishing Checklists \- TrustedSec, [https://trustedsec.com/blog/upgrade-your-workflow-part-2-building-phishing-checklists](https://trustedsec.com/blog/upgrade-your-workflow-part-2-building-phishing-checklists)  
21. Managing False Clicks in Phishing Simulations Effectively \- Keepnet Labs, [https://keepnetlabs.com/blog/how-to-manage-false-clicks-in-phishing-simulations-for-security-awareness-training](https://keepnetlabs.com/blog/how-to-manage-false-clicks-in-phishing-simulations-for-security-awareness-training)  
22. Whitelisting in Microsoft 365 \- Support Centre \- Help Scout, [https://goldphish.helpscoutdocs.com/article/116-whitelisting-in-microsoft-365](https://goldphish.helpscoutdocs.com/article/116-whitelisting-in-microsoft-365)  
23. How to Conduct an Effective Phishing Audit? \- Security Boulevard, [https://securityboulevard.com/2024/01/how-to-conduct-an-effective-phishing-audit/](https://securityboulevard.com/2024/01/how-to-conduct-an-effective-phishing-audit/)  
24. Detection and Detection Evasion with Man-in-the-Middle Phishing \- Institute for Computing and Information Sciences, [https://www.cs.ru.nl/masters-theses/2024/F\_Valentijn\_\_\_Detection\_and\_detection\_evasion\_with\_man-in-the-middle\_phishing.pdf](https://www.cs.ru.nl/masters-theses/2024/F_Valentijn___Detection_and_detection_evasion_with_man-in-the-middle_phishing.pdf)  
25. Is preventing phishing a hopeless pursuit? : r/sysadmin \- Reddit, [https://www.reddit.com/r/sysadmin/comments/zq4bhd/is\_preventing\_phishing\_a\_hopeless\_pursuit/](https://www.reddit.com/r/sysadmin/comments/zq4bhd/is_preventing_phishing_a_hopeless_pursuit/)  
26. Custom Rules Of Wazuh for Windows PowerShell | by Soban Malik | Medium, [https://sobanmalikk.medium.com/custom-rules-of-wazuh-for-windows-powershell-802fbe605d21](https://sobanmalikk.medium.com/custom-rules-of-wazuh-for-windows-powershell-802fbe605d21)  
27. Detecting hoaxshell with Wazuh, [https://wazuh.com/blog/detecting-hoaxshell-with-wazuh/](https://wazuh.com/blog/detecting-hoaxshell-with-wazuh/)  
28. Detecting XWorm malware with Wazuh, [https://wazuh.com/blog/detecting-xworm-malware-with-wazuh/](https://wazuh.com/blog/detecting-xworm-malware-with-wazuh/)  
29. Detecting Windows persistence techniques with Wazuh, [https://wazuh.com/blog/detecting-windows-persistence-techniques-with-wazuh/](https://wazuh.com/blog/detecting-windows-persistence-techniques-with-wazuh/)  
30. Detecting defense evasion techniques with Wazuh, [https://wazuh.com/blog/detecting-defense-evasion-techniques-with-wazuh/](https://wazuh.com/blog/detecting-defense-evasion-techniques-with-wazuh/)  
31. Detecting Peaklight malware with Wazuh, [https://wazuh.com/blog/detecting-peaklight-malware-with-wazuh/](https://wazuh.com/blog/detecting-peaklight-malware-with-wazuh/)  
32. sysmon/sysmon\_rules.xml at master \- GitHub, [https://github.com/sametsazak/sysmon/blob/master/sysmon\_rules.xml](https://github.com/sametsazak/sysmon/blob/master/sysmon_rules.xml)  
33. Using Wazuh to monitor Sysmon events, [https://wazuh.com/blog/using-wazuh-to-monitor-sysmon-events/](https://wazuh.com/blog/using-wazuh-to-monitor-sysmon-events/)  
34. Detecting PowerShell exploitation techniques in Windows using Wazuh, [https://wazuh.com/blog/detecting-powershell-exploitation-techniques-in-windows-using-wazuh/](https://wazuh.com/blog/detecting-powershell-exploitation-techniques-in-windows-using-wazuh/)  
35. Wazuh-Complete-Guide/Docs/Integrations/Threat-Hunting/Powershell-detection.md at main, [https://github.com/Esther7171/Wazuh-Complete-Guide/blob/main/Docs/Integrations/Threat-Hunting/Powershell-detection.md](https://github.com/Esther7171/Wazuh-Complete-Guide/blob/main/Docs/Integrations/Threat-Hunting/Powershell-detection.md)  
36. Use cases \- Log data collection \- Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/use-cases.html](https://documentation.wazuh.com/current/user-manual/capabilities/log-data-collection/use-cases.html)  
37. OpenSSL ile 5651 Sayılı Kanun Gereği Log Imzalamak \- Syslogs, [https://www.syslogs.org/openssl-ile-5651-sayili-kanun-geregi-log-imzalamak/](https://www.syslogs.org/openssl-ile-5651-sayili-kanun-geregi-log-imzalamak/)  
38. Güncel 5651, 6518 sayılı kanun, ilişkili kanun ve yönetmelikler çerçevesinde kayıt tutma süreleri, | SiberSAN, [https://www.sibersan.com/guncel-5651-6518-sayili-kanun-iliskili-kanun-ve-yonetmelikler-cercevesinde-kayit-tutma-sureleri/](https://www.sibersan.com/guncel-5651-6518-sayili-kanun-iliskili-kanun-ve-yonetmelikler-cercevesinde-kayit-tutma-sureleri/)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAABTUlEQVR4Xu2ULUsEURSGj2BQ0KKCQcNiM4pY/ACDRo3rD7CYLWrbYhBEMBtFLEYFEYN/wigYXDaJIGpQ/HjeOfeye/cDdwymeeBhhz2HM2feubtmBf/NLNbwO3iLI0lHyjJ+mvfq8xqHk44m9rGKDzjeVItowCk+4xn2puVWBvAYD/EVp9NyRg9u4A5+4WZabs8EHmHZ/BFX0nLGlPngbfzA+bTcnlXzTWbwzVq36ccKjuEF3uFoY0MnKriEk/iIu0nVbM28rsH3ljNfvTBtoW1OzDMVJdwyH6ThufPtM7/JTVDXGqahJW/NrnPnK7Slto0ZakPFIHTjP+UbUb7KeRH3zF+cUFQ6413nqwOvOCLKTydDA3TEIrnyncNzHGz4TmdYZ1nxxBco9CS/5ruAT1b/f3jH9VDTr+7K6r//A3wJfbH3EodCvaCgoBt+AHZzRnAvsxTcAAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAaCAYAAAANIPQdAAADEUlEQVR4Xu2XS6hNURjHP3nkmURKSHQnogzEiEIMDEgkyWMmBkoYKKNbkkxFHpFHySOGQuSRgYEppSTXhCIGwsD7/7vfWcfayz5779u5+5Q6v/rXPutbe+29vsde3zHr0qWM4dL4dHCQGCpNkIakhk7C5k5KC1PDIMHm9kq7G9cDYqn0Xvod6aO0RZokPZR+RrbP0mVpDDc3GCYdk3ZEYzEbze8La9yQRmZmZGGdMPebdM58PplyQVrXnDlATku/pOWpwXwM21nL9+IK6YEVpyovecXcoY+kcVlzkx7ptvRdOpjYYK70WJqeGsog159IfdLUrKmffeZe3ZQaxCjplrQzNSSwLlG4Lr2WpmTN/RCp/dIh8+etzJr7IWsuSb3JeCmzpQ/SNfNFYvjNOHbmpcyXXli+LWaRdNjcYV/M70thU2vNM+atNCtrboKzCQrBqQw34TleIIUI9FnrRbdbcfoFWJsNoLwoTTaPDs97Jt21bN3HzDPPhgWpoYgj0g9pjXkaxVpvXo/MyeN8Q0WQDcfNox3qO0596nyXNMc8wkQ6rx4DvBebxGGVCPXIwtTMqUSvrHU9jjX/4BS9EIR6JNpE4ZN57QU4drY1rsmMvEjHhOfmZV4u7dRj1YeFeoQQhRB91ug1/zIT0bJ6hKrObRLqcU9qsPJ6rLrJUI9ANKnhUHNbzZ0AnMtl9QjhuRx7lWAiZ1J4UAxj2FrVY5VNxvUYfpMdbGaJedqGs5cPyVcrj1CV5zZp53yE8MJFHmXdq5bNBOa/M0/ZadF4lXqE8N552fcP4UuWV490KLRffCT4WLSCKLdq04gQLV3aKeE8vrAborHgsLJ6BBzz0vK7syYY39jf/hDhWV5oonTHvGcMNq4vSqO5OWG19NS8nmLofeM1cBZ9Mqwyjy4dDrVHLxzPpc89I41ozE+hjEj3vOyrhZnSc8uv6broNW/t0uyrDdLwgHS0cV03ZNo9aXFqqBtq5L55x1I3m6UT5qnecehaqLOiv1vt0iPdlGakhk6yzLwHrQOaCM7P+Mjp0qXLf8IfNdKzme3EmHoAAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAAAvklEQVR4XmNgGLnACYjvAvEjIrELRBsDAyMQTwHilUCsAOWDwBwg/gfEHlA+MxDbA/EDIDaFijGIA/EqIBaDCQCBIBCfZoAolEYS5wHixUAsAxMAOaEQLg0B+kD8CYjXADELkjjI0ElAzAsTCAViNbg0BEQD8X8gLkcTFwbiNAaE17ACkH9/A7ENugQhgMu/RAFjIP7KgOlfogAu/xIEoICYzzAk/AuK43NA/I4B4lcY/gLE1xkgBo6CUUAeAAAc6iv7Yi1TmwAAAABJRU5ErkJggg==>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAaCAYAAAAAPoRaAAAC2UlEQVR4Xu2XW4iNURTH/0K5lVvjEuUSStGYkBRCFA8kJHKZaSbUEFKSeCDkEol4wQNPLrkkRCie3MuLUkpGiSI8eZLL/9/au7PPGklnHJ355vvXr3POWvv7zrfXZZ91gFy5crVlTSMfyc+Ez2R5sman818hXRN/q9dJ8oPM8A5qOHlElpFOztfq1ZM8IU1kQLEL08k1MtjZM6OR5BO5jkJm25N1ZA/pHGyZ1FJYL28On9XPx2B93y4uyqqOkG9kEhlBnpGHpHu6KIuK/f6GrCFnYBvX4TcrWZdJxX7/TraSjmQxrA0UiA6FpSVLrbOC1If3FaPY71tQeLC+5AX5QkYFW0ukAB4ku9GyzY+HzSX/TPp9j/2eajssKHqtFK0lc7yxVMV+fwXLdiplXJlXBXhfA7lDNsIyqjlgHiyrY8g5WFD3kwNkAjkN+9nsQfaS4+G1H9kUPs8mVWRXuFb30AGsymkkX8ktchiFuUPXHyKnYJPoX0+eY2E3vIDmva3Psiv7muxS6Vy4TLbB5gE9wFMyN/jrYEGbQs6T3mQ+LACS5oabwSYpcHWw4OmQfQkLuBKgIOt6Sdenme8Ge47JsGu1eVXHH6UR9h2K5/UPZEnw9yGPnf85GRb8kn8Q9XMMouxxo1Hethp2oCqQ61FcXbKNIythldk/2P13qlXfwtYtJPvCmrLLP4gGJGVJZec3KnnbENg8oUyrjaK0af2PmEkGkntovvlesASpTZoS/3+THiSWbWyDOCH6jf7OpjI9CgtYTWLXmnifoeQ+WUBGB5/uo3adCqsWVejEsF7tpICUXXqQG7Cs6bA6Acu6DrwH5DXsQNMBJ5sOqvewco9S1q+i+L+DAqrM18LmjtvkIhkEK+9LZAOsKiRt/C5ZRXaQ6mAvq2IWdOiIUqTDsos3wipJpa3q8FKA5U+ldfrl0v3KLn3JWbLIO9qC9B9fp6vGYPVlrly5Kle/AKMRj3ZOVF56AAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,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>