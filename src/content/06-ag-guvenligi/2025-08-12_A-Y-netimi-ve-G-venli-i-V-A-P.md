# Ağ Yönetimi ve Güvenliği VI: Ağ Protokolleri Güvenliği ve Analizi

---

### Ağ Yönetimi ve Güvenliği VI: Ağ Protokolleri Güvenliği ve Analizi

![](https://cdn-images-1.medium.com/max/800/1*4B83QjV-QTWjVqB0z6ktug.png)

Bu yazı, modern dijital iletişimin dört temel sütununu — e-posta, web, Alan Adı Sistemi (DNS) ve dosya transferi — kapsamlı bir şekilde analiz etmek üzere yapılandırılmıştır. Her bölüm, ilgili protokol ailesinin tarihsel gelişimini, tasarımından kaynaklanan doğal zafiyetlerini, bu zafiyetleri gidermek için geliştirilen modern güvenlik mekanizmalarını ve günümüzün karmaşık tehdit ortamındaki yerlerini derinlemesine inceleyecektir. Raporun temel amacı, sadece protokolleri ve güvenlik eklentilerini ayrı ayrı tanımlamak değil, aynı zamanda aralarındaki karmaşık etkileşimleri, bağımlılıkları ve birleşik bir güvenlik mimarisi içindeki rollerini ortaya koymaktır. Örneğin, güvenli bir e-posta altyapısının, güvenilir bir DNS altyapısına nasıl bağımlı olduğu veya güvenli web trafiğinin, hem taşıma katmanında hem de uygulama katmanında nasıl katmanlı bir savunma gerektirdiği gibi konular, bütüncül bir bakış açısıyla ele alınacaktır. Bu metodoloji, okuyucuya izole bilgi parçaları yerine, birbiriyle entegre, stratejik bir protokol güvenliği anlayışı sunmayı hedeflemektedir.

---

### Bölüm 1: E-posta İletişiminin Güvenlik Mimarisi

E-posta, kurumsal ve kişisel iletişimin en kritik araçlarından biri olmaya devam etmektedir. Ancak temelini oluşturan SMTP protokolünün güvenliği göz ardı edilerek tasarlanmış olması, onu siber saldırganlar için birincil hedef haline getirmiştir. Bu bölüm, e-posta iletişiminin temel taşı olan SMTP’den başlayarak, modern e-posta güvenliğini tanımlayan kimlik doğrulama ve politika uygulama katmanlarına kadar uzanan bütüncül bir analiz sunmaktadır.

### 1.1. SMTP: E-postanın Temel Taşı ve Doğal Zafiyetleri

#### SMTP’nin Temel Mimarisi ve İşleyişi

Basit Posta Aktarım Protokolü (Simple Mail Transfer Protocol — SMTP), TCP/IP protokol takımının uygulama katmanında çalışan ve e-posta mesajlarının sunucular arasında aktarımını sağlayan temel protokoldür. Bu protokolün işleyişi, bir Posta Kullanıcı Aracısı (Mail User Agent — MUA), örneğin Outlook veya bir Gmail web arayüzü, tarafından oluşturulan bir e-postanın, bir Posta Aktarım Aracısı’na (Mail Transfer Agent — MTA), yani e-posta sunucusuna gönderilmesi ve bu sunucunun mesajı alıcının MTA’sına iletmesi sürecini yönetir.

İletişim, genellikle 25, 465 (SMTPS) veya 587 (Submission) numaralı portlar üzerinden kurulan bir TCP bağlantısı ile başlar. Bağlantı kurulduktan sonra, istemci ve sunucu arasında bir dizi komut ve yanıt alışverişi gerçekleşir. Temel komut dizisi şu adımlardan oluşur:

1. `HELO` veya daha modern `EHLO` (Extended HELO): İstemci sunucuyu selamlar ve iletişim oturumunu başlatır.
2. `MAIL FROM`: E-postanın "zarf göndericisini" (envelope sender) belirtir. Bu adres, e-postanın teslim edilememesi durumunda geri sekme (bounce) mesajlarının gönderileceği adrestir.
3. `RCPT TO`: E-postanın bir veya daha fazla alıcısını tanımlar. Her alıcı için bu komut tekrarlanır.
4. `DATA`: Mesajın başlık (header) ve gövde (body) kısmının başlayacağını bildirir. Mesaj içeriği, tek bir nokta (`.`) içeren bir satırla sonlandırılır.

E-posta alıcı sunucuya başarıyla ulaştıktan sonra, alıcının MUA’sı tarafından gelen kutusundan okunması için Posta Ofisi Protokolü (POP3) veya İnternet Mesaj Erişim Protokolü (IMAP) gibi farklı protokoller kullanılır. SMTP yalnızca giden ve sunucular arası posta aktarımından sorumludur.

#### Tarihsel Güvenlik Zafiyetleri: Tasarımdan Gelen Riskler

SMTP, 1980'lerde, internetin bugünkü gibi küresel ve potansiyel olarak düşmanca bir ortam olmadığı, daha küçük ve güvene dayalı bir ağ olduğu varsayımıyla tasarlanmıştır. Bu tarihsel bağlam nedeniyle, protokolün orijinal spesifikasyonlarında yerleşik kimlik doğrulama veya şifreleme mekanizmaları bulunmamaktadır. Bu temel tasarım eksikliği, günümüzde hala etkileri hissedilen iki kritik zafiyete yol açmıştır:

* **Open Relay (Açık Röle):** Yanlış yapılandırılmış bir SMTP sunucusunun, ne göndericisi ne de alıcısı kendi yerel yetki alanında olmayan e-postaları kabul edip üçüncü taraflara iletmesi durumudur. Bu zafiyet, sunucunun kimliği belirsiz kişiler tarafından büyük hacimli spam, phishing veya kötü amaçlı yazılım içeren e-postalar göndermek için bir araç olarak kötüye kullanılmasına olanak tanır. Bir kurumun sunucusunun açık röle olarak kullanılması, o sunucunun IP adresinin ve alan adının itibarını ciddi şekilde zedeler ve DNS tabanlı kara delik listelerine (DNS-based Blackhole Lists — DNSBL) girmesine neden olarak meşru e-posta iletişiminin de engellenmesine yol açabilir. Modern e-posta sunucuları, bu riski bertaraf etmek için varsayılan olarak yalnızca kimliği doğrulanmış kullanıcılardan veya önceden tanımlanmış güvenilir IP aralıklarından gelen e-postaları aktaracak şekilde yapılandırılır.
* **Kimlik Sahtekarlığı (Spoofing):** SMTP protokolü, `MAIL FROM` komutunda belirtilen gönderici adresinin veya daha önemlisi, son kullanıcının e-posta istemcisinde gördüğü `From:` başlığındaki adresin doğruluğunu kontrol etmek için herhangi bir mekanizma içermez. Bu durum, bir saldırganın e-posta başlıklarını kolayca manipüle ederek, e-postanın güvenilir bir kaynaktan (örneğin, bir CEO, bir banka veya bir devlet kurumu) geliyormuş gibi görünmesini sağlamasına olanak tanır. Bu temel zafiyet, günümüzün en yaygın ve en tehlikeli siber saldırı türleri olan oltalama (phishing) ve İş E-postası Sahtekarlığı (Business Email Compromise - BEC) saldırılarının temelini oluşturur.

#### Modern Tehditler ve Saldırı Vektörleri

SMTP’nin temel zafiyetleri üzerine inşa edilen daha sofistike ve modern saldırı teknikleri de ortaya çıkmıştır:

* **SMTP Smuggling (SMTP Kaçakçılığı):** Bu gelişmiş saldırı tekniği, farklı SMTP sunucu yazılımlarının, bir e-postanın veri (DATA) bölümünün sonunu belirten karakter dizisini (`<LF>.<CR><LF>` gibi) farklı yorumlamasından kaynaklanan bir zafiyeti sömürür. Bir saldırgan, giden (outbound) ve gelen (inbound) sunucular arasındaki bu yorumlama farkından yararlanarak, tek bir meşru e-posta mesajı içine gizlenmiş ikinci, sahte bir e-posta mesajı "kaçırabilir". Giden sunucu bunu tek bir e-posta olarak görürken, gelen sunucu bunu iki ayrı e-posta olarak yorumlar. Bu ikinci, sahte e-posta, giden sunucunun güvenlik kontrollerinden (örneğin SPF) hiç geçmediği için, saldırganın bu koruma mekanizmalarını atlayarak güvenilir bir alan adı adına sahte e-postalar göndermesine olanak tanır. Bu saldırı, Postfix gibi popüler MTA'ları etkilemiş ve bu tür belirsizlikleri ortadan kaldırmak için `smtpd_forbid_bare_newline=yes` gibi özel yapılandırma direktifleriyle önlem alınmasını gerektirmiştir.
* **CRLF Injection:** Web uygulamaları veya posta istemcileri gibi kaynaklardan gelen kullanıcı girdilerinin (örneğin, e-posta konu satırı veya alıcı adresleri) düzgün bir şekilde temizlenmemesi (sanitization) durumunda, saldırganların SMTP komut dizisine Satır Başı (Carriage Return — CR, `\r`) ve Yeni Satır (Line Feed - LF, `\n`) karakterleri enjekte etmesine olanak tanır. Bu karakterler SMTP komutlarını birbirinden ayırmak için kullanıldığından, saldırgan mevcut bir komutu erken sonlandırıp `RCPT TO` veya `DATA` gibi yeni ve yetkisiz SMTP komutları ekleyebilir. Bu durum, mesajın alıcılarını değiştirmeye, içeriğini manipüle etmeye veya sunucuyu tamamen farklı bir spam mesajı göndermek için kullanmaya yol açabilir.

### 1.2. E-posta Kimlik Doğrulama Üçgeni: SPF, DKIM ve DMARC

SMTP’nin doğasında bulunan kimlik doğrulama eksikliğini gidermek amacıyla, her biri farklı bir sorunu çözmeye odaklanan ve DNS üzerine inşa edilmiş üç temel protokol geliştirilmiştir. Bu protokoller, SPF, DKIM ve DMARC, tek başlarına tam bir koruma sağlamazlar; ancak bir araya geldiklerinde e-posta sahtekarlığına karşı katmanlı ve güçlü bir savunma mekanizması oluştururlar. Bu üçlü yapı, modern e-posta güvenliğinin temelini teşkil eder.

#### 1.2.1. SPF (Sender Policy Framework): Zarf Göndericisinin Doğrulanması

#### Çalışma Prensibi

Gönderen Politikası Çerçevesi (Sender Policy Framework — SPF), bir alan adı sahibinin, kendi alan adı adına e-posta göndermeye yetkili olan posta sunucularının IP adreslerini kamuya açık bir şekilde beyan etmesine olanak tanıyan bir e-posta kimlik doğrulama yöntemidir. Bu beyan, alan adının DNS ayarlarında özel olarak biçimlendirilmiş bir TXT kaydı olarak yayınlanır.

Bir alıcı e-posta sunucusu, bir alan adından geldiğini iddia eden bir e-posta aldığında, aşağıdaki adımları izler:

1. E-postayı gönderen sunucunun kaynak IP adresini tespit eder.
2. SMTP oturumu sırasında kullanılan `MAIL FROM` (zarf göndericisi) komutundaki alan adını alır.
3. Bu alan adının DNS’ini sorgulayarak SPF kaydını bulur.
4. Gönderen sunucunun IP adresinin, SPF kaydında listelenen yetkili IP adresleri veya mekanizmalar arasında olup olmadığını kontrol eder.

Bu kontrol sonucuna göre, e-postanın meşru bir kaynaktan gelip gelmediğine dair bir karar verilir.

#### DNS Kayıt Yapısı ve Söz Dizimi

Bir SPF kaydı, her zaman sürüm bilgisi olan `v=spf1` etiketiyle başlar. Ardından, yetkili göndericileri tanımlayan bir veya daha fazla mekanizma gelir. Yaygın olarak kullanılan mekanizmalar şunlardır:

* `ip4:` ve `ip6:`: Belirli IPv4 veya IPv6 adreslerini veya CIDR aralıklarını yetkilendirir.
* `a`: Alan adının A veya AAAA kaydında bulunan IP adresini yetkilendirir.
* `mx`: Alan adının MX kayıtlarında tanımlı olan posta sunucularını yetkilendirir.
* `include:`: Başka bir alan adının SPF kaydını mevcut politikaya dahil eder. Bu, e-posta gönderimi için üçüncü taraf hizmetler (örn. Google Workspace, SendGrid) kullanıldığında yaygın olarak kullanılır.

Her SPF kaydının sonunda, listedeki mekanizmalarla eşleşmeyen tüm diğer kaynaklar için ne yapılacağını belirten bir “niteleyici” (qualifier) bulunur :

* `-all` (Hard Fail): Yetkisiz IP adreslerinden gelen e-postaların reddedilmesini şiddetle önerir. Bu, en güvenli ve en çok tavsiye edilen seçenektir.
* `~all` (Soft Fail): E-postaların reddedilmek yerine kabul edilmesini ancak şüpheli olarak işaretlenmesini (örneğin, spam klasörüne taşınmasını) önerir. Genellikle DMARC'a geçiş dönemlerinde kullanılır.
* `?all` (Neutral): Politika hakkında herhangi bir görüş belirtmez. Genellikle test amaçlıdır ve üretim ortamlarında önerilmez.

#### Sınırlılıklar ve Zorluklar

SPF, e-posta kimlik doğrulamasına önemli bir katkı sağlasa da, tek başına tam bir çözüm değildir ve bazı önemli sınırlılıklara sahiptir:

* `From:` **Başlığı Doğrulaması Eksikliği:** SPF'nin en temel sınırlılığı, yalnızca SMTP zarfındaki `MAIL FROM` (RFC 5321) adresini doğrulamasıdır. Son kullanıcının e-posta istemcisinde gördüğü ve genellikle sahtekarlığın yapıldığı `From:` (RFC 5322) başlığını kontrol etmez. Bu nedenle, bir saldırgan `MAIL FROM` adresinde kendi kontrolündeki bir alan adını kullanırken, `From:` başlığında hedeflediği kurumun alan adını taklit edebilir ve bu durumda e-posta SPF kontrolünü geçebilir.
* **E-posta Yönlendirme Sorunları:** Bir e-posta, bir sunucudan diğerine yönlendirildiğinde (forwarding), mesajı yeniden gönderen sunucu yönlendiren sunucudur. Alıcı sunucu, SPF kontrolünü bu yönlendiren sunucunun IP adresi üzerinden yapar. Yönlendiren sunucunun IP adresi, orijinal gönderenin SPF kaydında yer almadığı için, bu meşru e-posta SPF kontrolünden başarısız olur.
* **10 DNS Sorgu Limiti:** Bir SPF kaydının doğrulanması sırasında, `include:`, `a:`, `mx:` gibi mekanizmalar nedeniyle yapılan toplam DNS sorgu sayısı 10'u geçemez. Bu limitin aşılması, "PermError" (Kalıcı Hata) olarak bilinen bir duruma yol açar ve SPF doğrulamasının tamamen başarısız olmasına neden olur. Bu durum, özellikle çok sayıda üçüncü taraf e-posta hizmeti kullanan büyük kuruluşlar için bir zorluk teşkil etmektedir.

#### 1.2.2. DKIM (DomainKeys Identified Mail): Mesaj Bütünlüğünün Kriptografik Olarak Mühürlenmesi

#### Çalışma Prensibi

DomainKeys Identified Mail (DKIM), e-postanın içeriğinin taşıma sırasında değiştirilmediğini (bütünlük) ve e-postanın gerçekten iddia edilen alan adından sorumlu bir sunucu tarafından gönderildiğini (kaynak doğruluğu) doğrulamak için açık anahtar kriptografisi kullanan bir yöntemdir.

DKIM’in çalışma süreci şu şekildedir:

1. **İmzalama:** Gönderen e-posta sunucusu, giden her e-posta için benzersiz bir dijital imza oluşturur. Bu imza, e-postanın belirli başlıklarının (örneğin, `From:`, `To:`, `Subject:`) ve e-posta gövdesinin bir özetini (body hash) içerir.
2. **Kriptografik Mühür:** Sunucu, bu özeti kendi alan adına ait özel bir anahtar (private key) ile şifreler.
3. **Başlık Ekleme:** Oluşturulan bu şifreli imza, e-postanın başlıklarına `DKIM-Signature` adında yeni bir başlık olarak eklenir.

#### Doğrulama Süreci

Alıcı e-posta sunucusu, DKIM imzalı bir e-posta aldığında, aşağıdaki doğrulama adımlarını gerçekleştirir:

1. `DKIM-Signature` başlığını e-postadan okur.
2. Bu başlık içinde yer alan `d=` (domain - imzalayan alan adı) ve `s=` (selector - anahtar seçici) etiketlerini kullanarak, imzalayan alan adının DNS'inde belirli bir TXT kaydını sorgular. Sorgu adresi `s._domainkey.d` formatındadır (örneğin, `google._domainkey.example.com`).
3. DNS’ten, imzalama için kullanılan özel anahtarın karşılığı olan genel anahtarı (public key) alır.
4. Alıcı sunucu, e-postanın aynı başlıklarını ve gövdesini kullanarak kendi özetini hesaplar.
5. DNS’ten aldığı genel anahtarı kullanarak `DKIM-Signature` başlığındaki şifreli imzayı çözer ve orijinal özeti elde eder.
6. Kendi hesapladığı özet ile imzadan çözdüğü özeti karşılaştırır. Eğer iki özet eşleşirse, DKIM doğrulaması başarılı olur. Bu, mesajın belirtilen alan adı tarafından gerçekten gönderildiğini ve yolda değiştirilmediğini kanıtlar. Bu protokolün detayları RFC 6376 standardında tanımlanmıştır.

#### Yapılandırma ve Anahtar Yönetimi

DKIM’in uygulanması, DNS’te bir genel anahtar yayınlamayı gerektirir. “Seçici” (selector) kavramı, bir alan adının aynı anda birden fazla DKIM anahtarı kullanmasına olanak tanır. Bu, farklı e-posta gönderme hizmetlerinin (örneğin, kurumsal sunucular, pazarlama otomasyon platformları) aynı alan adı adına e-posta gönderirken kendi ayrı anahtar çiftlerini kullanmalarını sağlar. Ayrıca, anahtar rotasyonunu, yani eski anahtarları geçersiz kılarken yenilerini devreye almayı, hizmet kesintisi olmadan kolaylaştırır.

#### 1.2.3. DMARC (Domain-based Message Authentication, Reporting, and Conformance): Politika, Hizalama ve Raporlama

#### Çalışma Prensibi

Alan Adı Tabanlı Mesaj Doğrulama, Raporlama ve Uygunluk (Domain-based Message Authentication, Reporting, and Conformance — DMARC), SPF ve DKIM’in üzerine inşa edilmiş bir politika ve raporlama katmanıdır. DMARC’ın temel amacı, bir alan adı sahibinin, kendi alan adından geliyormuş gibi görünen ancak SPF veya DKIM kimlik doğrulama kontrollerinden geçemeyen e-postalara ne yapılması gerektiği konusunda alıcı sunuculara net talimatlar vermesini sağlamaktır. Bu talimatlar, alan adının DNS’inde`_dmarc.example.com` adresinde yayınlanan tek bir TXT kaydı aracılığıyla iletilir. DMARC, RFC 7489 standardı ile tanımlanmıştır.

#### Hizalama (Alignment)

DMARC’ın en kritik ve güçlü konsepti “hizalama”dır (alignment). Bir e-postanın DMARC kontrolünü geçebilmesi için, sadece SPF veya DKIM doğrulamalarından birini geçmesi yeterli değildir; aynı zamanda bu doğrulamanın, son kullanıcının gördüğü `From:` başlığındaki alan adıyla "hizalanmış" olması gerekir.

* **SPF Hizalaması:** E-postanın DMARC için SPF’i geçmesi, gönderen sunucu IP’sinin `MAIL FROM` (zarf göndericisi) adresindeki alan adının SPF kaydında bulunması VE `MAIL FROM` adresindeki alan adının, `From:` başlığındaki alan adıyla eşleşmesi (veya bir alt alan adı olması) anlamına gelir.
* **DKIM Hizalaması:** E-postanın DMARC için DKIM’i geçmesi, DKIM imzasının geçerli olması VE `DKIM-Signature` başlığındaki `d=` etiketinde belirtilen alan adının, `From:` başlığındaki alan adıyla eşleşmesi (veya bir alt alan adı olması) anlamına gelir.

Bu hizalama kontrolü, SPF ve DKIM’in tek başlarına etkili bir şekilde çözemediği `From:` başlığı sahtekarlığı sorununu doğrudan hedefler ve engeller.

#### Politika Uygulama ve Raporlama

Bir DMARC kaydı, `p` (policy) etiketi aracılığıyla alıcı sunuculara üç farklı eylem talimatı verebilir:

* `p=none`: "İzleme modu" olarak da bilinir. Alıcı sunucudan, DMARC kontrolünden başarısız olan e-postalar üzerinde herhangi bir işlem yapmamasını, sadece onları teslim etmesini ister. Ancak bu modda bile, alan adı sahibi `rua` etiketiyle belirtilen adrese toplu raporlar alır. Bu, DMARC'ı ilk kez uygularken e-posta akışını analiz etmek ve meşru gönderim kaynaklarını tespit etmek için kullanılır.
* `p=quarantine`: Alıcı sunucudan, DMARC kontrolünden başarısız olan e-postaları reddetmek yerine şüpheli olarak işaretlemesini ve genellikle kullanıcının spam veya gereksiz posta klasörüne taşımasını talep eder.
* `p=reject`: En katı politikadır. Alıcı sunucudan, DMARC kontrolünden başarısız olan e-postaları tamamen reddetmesini ve teslim etmemesini talep eder. Bu, alan adı sahtekarlığına karşı en güçlü korumayı sağlar ve tüm kuruluşlar için nihai hedeftir.

DMARC’ın raporlama özelliği, alan adı sahipleri için paha biçilmezdir. `rua` (Reporting URI for Aggregate data) etiketi, alıcı sunucuların günlük olarak gönderdiği, hangi IP'lerden ne kadar e-postanın SPF/DKIM/DMARC kontrollerini geçtiğini veya geçemediğini özetleyen XML tabanlı toplu raporların gönderileceği e-posta adresini belirtir. `ruf` (Reporting URI for Forensic data) etiketi ise, kimlik doğrulama hatalarının spesifik örneklerini içeren adli raporların gönderileceği adresi tanımlar. Bu raporlar, bir kurumun e-posta ekosisteminin sağlığını izlemek, yapılandırma hatalarını gidermek ve kendi alan adını kullanarak yapılan sahtekarlık girişimlerini tespit etmek için kritik öneme sahiptir.

SPF ve DKIM, e-posta güvenliğini artırmak için bağımsız teknolojiler olarak ortaya çıkmıştır. Ancak, politika uygulama mekanizmalarının olmaması ve `From:` başlığı sahtekarlığına karşı tek başlarına yetersiz kalmaları, benimsenmelerini sınırlamıştır. DMARC'ın ortaya çıkışı bu denklemi temelden değiştirmiştir. DMARC, SPF ve DKIM'in doğrulama sonuçlarını alıp onlara bir "anlam" ve "eylem" (yani bir politika) yüklemiştir. `p=reject` gibi katı bir DMARC politikası uygulamak isteyen bir kurum, artık SPF ve DKIM'i doğru bir şekilde yapılandırmak *zorundadır*; aksi takdirde kendi meşru e-postalarının da engellenmesi riskiyle karşı karşıya kalır. Bu durum, DMARC'ın kendisinin bir "politika motoru" olarak hareket ederek, kendisinden önceki iki protokolün hem daha yaygın bir şekilde benimsenmesini hem de daha doğru bir şekilde yapılandırılmasını teşvik eden bir katalizör görevi görmesine yol açmıştır. Bu, bir üst katman standardının, kendisini oluşturan temel bileşenlerin benimsenmesini ve olgunlaşmasını nasıl zorunlu kılabileceğine dair siber güvenlikte önemli bir örnektir.

![](https://cdn-images-1.medium.com/max/800/1*-0B-a2lIL3ynJWniGhKLgg.png)

SPF, DKIM, DMARC

### 1.3. Gelişmiş E-posta Tehditleri ve Bütüncül Korunma Stratejileri

SPF, DKIM ve DMARC gibi protokol düzeyindeki kontroller, e-posta sahtekarlığının teknik temelini zayıflatmada kritik bir rol oynasa da, saldırganlar sürekli olarak bu savunmaları aşmaya veya insan faktörünü hedef almaya yönelik yeni yöntemler geliştirmektedir.

#### Saldırı Anatomisi: Phishing, Spear Phishing ve BEC

* **Phishing (Oltalama):** Geniş bir kitleye yönelik olarak gerçekleştirilen, genellikle tanınmış ve güvenilir bir kurum (banka, sosyal medya platformu, kargo şirketi) taklit edilerek gönderilen sahte e-postalardır. Bu e-postalar, genellikle kullanıcıda bir aciliyet veya panik hissi yaratarak (örneğin, “hesabınız askıya alındı”, “şüpheli bir giriş tespit edildi”) onları sahte bir web sitesine yönlendiren bir bağlantıya tıklamaya veya kötü amaçlı bir eki açmaya teşvik eder. Amaç, kullanıcıların kimlik bilgileri, kredi kartı numaraları veya diğer hassas verilerini çalmaktır.
* **Spear Phishing (Hedefli Oltalama):** Belirli bir kişiyi, grubu veya kurumu hedef alan, çok daha kişiselleştirilmiş ve dolayısıyla daha inandırıcı olan oltalama saldırılarıdır. Saldırgan, saldırıyı gerçekleştirmeden önce hedef hakkında sosyal medya, kurumsal web siteleri veya diğer açık kaynaklardan bilgi toplar. Bu bilgiler (örneğin, hedefin adı, pozisyonu, çalıştığı projeler, iş arkadaşları) e-postayı daha meşru ve kişiye özel göstermek için kullanılır, bu da hedefin tuzağa düşme olasılığını önemli ölçüde artırır.
* **Business Email Compromise (BEC — İş E-postası Sahtekarlığı):** Finansal motivasyonu en yüksek ve en sofistike e-posta saldırı türlerinden biridir. BEC saldırılarında, saldırgan genellikle kurum içindeki üst düzey bir yöneticiyi (CEO, CFO) veya güvenilir bir iş ortağını (avukat, tedarikçi) taklit eder. Hedef, genellikle finans veya insan kaynakları departmanında para transferi yapma veya hassas verilere erişme yetkisine sahip bir çalışandır. Saldırı, genellikle kötü amaçlı bir bağlantı veya ek içermez; bunun yerine, sosyal mühendislik teknikleri kullanarak hedefi acil ve gizli bir para transferi yapmaya veya çalışanların maaş bilgileri gibi hassas verileri paylaşmaya ikna etmeye odaklanır. Saldırganlar, hedefin güvenini kazanmak için benzer alan adları (örneğin, `example.com` yerine `examp1e.com`), ele geçirilmiş meşru e-posta hesapları veya sahte `From:` başlıkları kullanabilirler.

#### Bütüncül Savunma Katmanları

Etkili bir e-posta güvenliği stratejisi, yalnızca teknik kontrollere dayanmaz; teknolojiyi, insan faktörünü ve kurumsal süreçleri bir araya getiren katmanlı bir savunma (defense-in-depth) yaklaşımı gerektirir.

#### **Teknik Önlemler**

* **Temel Kimlik Doğrulama:** SPF, DKIM ve DMARC’ın `p=reject` politikasıyla tam olarak ve doğru bir şekilde uygulanması, alan adı sahtekarlığına dayalı saldırıların büyük çoğunluğunu daha gelen kutusuna ulaşmadan engeller. Bu, temel ve vazgeçilmez bir ilk savunma hattıdır.
* **Güvenli E-posta Ağ Geçitleri (Secure Email Gateways — SEG):** Bu çözümler, e-posta trafiğini kurumsal ağa girmeden önce analiz ederek ek güvenlik katmanları sunar. Gelişmiş Tehdit Koruması (Advanced Threat Protection — ATP) modülleri, bilinmeyen kötü amaçlı yazılımları tespit etmek için sanal alan (sandbox) analizi yapar. İçerik filtreleme özellikleri, hassas verilerin sızmasını önlerken, spam ve phishing filtreleri bilinen tehditleri engeller.
* **Protokol Güvenliği:** SMTP iletişiminin kendisi, STARTTLS kullanılarak şifrelenmelidir. Bu, istemci ile sunucu arasındaki iletişimin gizliliğini ve bütünlüğünü sağlayarak ortadaki adam (man-in-the-middle) saldırılarına karşı koruma sağlar.

#### **İnsan Faktörü ve Kullanıcı Eğitimi**

Teknik kontroller ne kadar güçlü olursa olsun, sosyal mühendislik saldırıları en zayıf halka olan insanı hedef alır. Bu nedenle, son savunma hattı her zaman kullanıcıdır.

* **Farkındalık Eğitimleri:** Çalışanlara yönelik düzenli ve sürekli siber güvenlik farkındalık eğitimleri düzenlenmelidir. Bu eğitimler, şüpheli e-postaların ortak özelliklerini (ani aciliyet hissi, beklenmedik talepler, dilbilgisi ve yazım hataları, gönderici adresindeki tutarsızlıklar) tanıma ve bildirme becerilerini artırmalıdır.
* **Simüle Edilmiş Phishing Saldırıları:** Kurum içinde periyodik olarak kontrollü ve simüle edilmiş phishing saldırıları düzenlemek, çalışanların farkındalık seviyesini ölçmek ve eğitimlerin etkinliğini değerlendirmek için kritik bir araçtır. Bu testlerin sonuçları, zayıf alanları belirleyerek gelecekteki eğitim programlarını şekillendirmek için kullanılmalıdır.

#### **Prosedürel Kontroller**

* **Bant Dışı Doğrulama (Out-of-Band Verification):** Özellikle para transferi, ödeme bilgilerinin değiştirilmesi veya hassas verilerin paylaşılması gibi kritik talepler için, e-posta dışında ikinci bir doğrulama kanalı zorunlu kılınmalıdır. Örneğin, bir yöneticiden gelen acil bir para transferi talebi, e-posta ile yanıtlanmak yerine, önceden bilinen bir telefon numarasından sözlü olarak teyit edilmelidir. Bu basit prosedür, BEC saldırılarına karşı en etkili önlemlerden biridir.

SPF, DKIM ve DMARC gibi protokoller, SMTP oturumunun temel yapısını, yani kimin kiminle konuştuğunu ve mesajın ne olduğunu doğru bir şekilde varsayar. Ancak SMTP Smuggling saldırısı , bu temel varsayıma meydan okur. Saldırgan, iki MTA arasındaki protokol yorumlama farklılıklarını kullanarak, tek bir SMTP oturumunun içine ikinci, sahte bir oturum “saklar”. Giden sunucu bunu tek bir e-posta olarak görür ve güvenlik kontrollerini uygular. Ancak gelen sunucu, veri akışındaki bir belirsizlikten dolayı bunu iki ayrı e-posta olarak yorumlar. İkinci (sahte) e-posta, giden sunucunun SPF/DKIM kontrollerinden hiç geçmediği için bu korumaları etkili bir şekilde atlatır. Bu durum, en sağlam güvenlik katmanlarının bile, altındaki temel protokolün en ince ve beklenmedik uygulama farklılıklarındaki zafiyetlerden etkilenebileceğini göstermektedir. Güvenlik, sadece protokolün teorik tanımında değil, aynı zamanda onun heterojen uygulamalarının kesişim noktasında da sağlanmalıdır. Bu, protokol standartlarının ve uygulamalarının sürekli olarak gözden geçirilmesi ve sıkılaştırılması gerektiğini ortaya koyan önemli bir bulgudur.

---

### Bölüm 2: Web İletişiminin Güvenlik Mimarisi

Web, modern bilgi alışverişinin, ticaretin ve sosyal etkileşimin merkez üssüdür. Bu ekosistemin temelini oluşturan HTTP protokolü, başlangıçta güvenlik kaygıları olmaksızın tasarlanmıştır. Bu bölüm, web’in temel iletişim protokolü olan HTTP’nin güvenli hali HTTPS’i, bu güvenliği sağlayan temel kriptografik protokol olan TLS’i, tarayıcı düzeyinde ek güvenlik katmanları sunan HSTS ve diğer OWASP güvenlik başlıklarını ve son olarak uygulama katmanındaki kritik zafiyetleri ve önleme tekniklerini derinlemesine incelemektedir.

### 2.1. HTTP’den HTTPS’e Evrim: Güvenli Web’in Temelleri

#### HTTP’nin Güvensiz Doğası

Köprü Metni Aktarım Protokolü (Hypertext Transfer Protocol — HTTP), web tarayıcıları (istemciler) ve web sunucuları arasındaki iletişimi sağlayan temel uygulama katmanı protokolüdür. Ancak, HTTP’nin orijinal tasarımı, verileri ağ üzerinde şifrelenmemiş, yani düz metin (cleartext) olarak iletir. Bu, istemci ile sunucu arasındaki ağ trafiğini dinleyebilen herhangi bir üçüncü tarafın (örneğin, aynı Wi-Fi ağındaki bir saldırgan veya bir internet servis sağlayıcısı), iletilen tüm verileri — kullanıcı adları, şifreler, kredi kartı bilgileri, kişisel mesajlar — kolayca okuyabileceği ve hatta değiştirebileceği anlamına gelir. Bu tür bir saldırı, Ortadaki Adam (Man-in-the-Middle — MitM) saldırısı olarak bilinir ve HTTP’nin en temel güvenlik zafiyetidir.

#### HTTPS’in Sağladığı Güvenlik Üçgeni

HTTPS (HTTP Secure), HTTP protokolünün Güvenli Soket Katmanı (Secure Sockets Layer — SSL) veya onun modern halefi olan Taşıma Katmanı Güvenliği (Transport Layer Security — TLS) protokolü ile şifrelenmiş halidir. URL’deki “S” harfi “Secure” (Güvenli) anlamına gelir ve üç temel güvenlik garantisi sunarak HTTP’nin zafiyetlerini giderir:

1. **Gizlilik (Confidentiality):** İstemci ve sunucu arasındaki tüm veri alışverişi, güçlü kriptografik algoritmalar kullanılarak şifrelenir. Bu, ağ trafiğini dinleyen bir saldırganın, ele geçirdiği verinin içeriğini anlamasını engeller. Veri, anlamsız bir karakter dizisi olarak görünür.
2. **Bütünlük (Integrity):** İletilen verinin, gönderildiği andan alındığı ana kadar değiştirilip değiştirilmediği, mesaj kimlik doğrulama kodları (MAC) aracılığıyla kontrol edilir. Bu, bir saldırganın yoldaki veriyi (örneğin, bir para transferi miktarını) fark edilmeden değiştirmesini önler.
3. **Kimlik Doğrulama (Authentication):** Kullanıcının, gerçekten iletişim kurmak istediği sunucuya bağlandığını (örneğin, `banka.com` yerine sahte bir `banka-dolandirici.com` sitesine değil) doğrular. Bu, sunucunun, tarayıcılar tarafından güvenilen bir Sertifika Otoritesi (Certificate Authority - CA) tarafından verilmiş bir dijital sertifika (SSL/TLS sertifikası) sunmasıyla sağlanır. Modern web tarayıcıları, güvenli bir HTTPS bağlantısını, adres çubuğunda belirgin bir kilit simgesi göstererek kullanıcıya bildirir ve bu da kullanıcı güvenini artırır.

### 2.2. TLS Protokolünün Derinlemesine Analizi

HTTPS’in sağladığı güvenliğin temelinde yatan teknoloji TLS protokolüdür. TLS, istemci ve sunucu arasında güvenli bir iletişim kanalı kurmak için karmaşık bir kriptografik süreç işletir.

#### 2.2.1. TLS El Sıkışması (Handshake): Güvenli Kanalın Kurulumu

#### Genel Amaç

TLS el sıkışması (handshake), istemci ve sunucunun asıl şifreli veri alışverişine başlamadan önce gerçekleştirdiği bir müzakere ve kimlik doğrulama sürecidir. Bu sürecin temel hedefleri şunlardır:

* Kullanılacak TLS protokolü sürümünde (örneğin, TLS 1.2, TLS 1.3) anlaşmak.
* Kullanılacak şifreleme algoritmaları setinde (cipher suite) anlaşmak.
* Sunucunun kimliğini, dijital sertifikası aracılığıyla doğrulamak.
* Oturum boyunca verileri simetrik olarak şifrelemek için kullanılacak olan ve her oturum için benzersiz olan “oturum anahtarlarını” (session keys) güvenli bir şekilde oluşturmak ve paylaşmak.

#### TLS 1.2 El Sıkışması Adımları

TLS 1.2 ve önceki sürümlerdeki el sıkışma süreci, genellikle iki tam gidiş-dönüş süresi (Round-Trip Time — RTT) gerektirir ve şu adımlardan oluşur:

1. **ClientHello:** İstemci (tarayıcı), sunucuya bir `ClientHello` mesajı gönderir. Bu mesaj, desteklediği en yüksek TLS sürümünü, desteklediği şifre takımlarının bir listesini ve "istemci rastgele" (client random) adı verilen 32 byte'lık rastgele bir veri parçasını içerir.
2. **ServerHello:** Sunucu, istemcinin listesinden ortaklaşa desteklenen en yüksek TLS sürümünü ve en güçlü şifre takımını seçer. Kendi “sunucu rastgele” (server random) verisini oluşturur ve istemciye bir `ServerHello` mesajı ile yanıt verir.
3. **Certificate & ServerHelloDone:** Sunucu, kimliğini kanıtlamak için dijital sertifikasını (ve gerekirse ara sertifikaları) istemciye gönderir. Ardından, el sıkışmasının kendi tarafındaki ilk bölümünü tamamladığını bildiren bir `ServerHelloDone` mesajı gönderir. Bu, ilk gidiş-dönüşü tamamlar.
4. **ClientKeyExchange & ChangeCipherSpec & Finished:** İstemci, sunucunun sertifikasını doğrular. Ardından, “pre-master secret” adı verilen bir başka rastgele sır oluşturur. Bu sırrı, sunucunun sertifikasından aldığı genel anahtar (public key) ile şifreler ve bir `ClientKeyExchange` mesajı ile sunucuya gönderir. Daha sonra, hem istemci hem de sunucu, bu üç rastgele veriyi (istemci rastgele, sunucu rastgele, pre-master secret) kullanarak bağımsız olarak aynı oturum anahtarlarını hesaplar. İstemci, bundan sonraki tüm iletişimin bu yeni anahtarlarla şifreleneceğini bildiren bir `ChangeCipherSpec` mesajı ve el sıkışmasının kendi tarafında bittiğini belirten şifreli bir `Finished` mesajı gönderir.
5. **ChangeCipherSpec & Finished (Sunucu):** Sunucu da istemciden aldığı `ChangeCipherSpec` ve `Finished` mesajlarından sonra kendi `ChangeCipherSpec` ve şifreli `Finished` mesajlarını göndererek el sıkışmayı tamamlar. Bu, ikinci gidiş-dönüşü tamamlar.

#### TLS 1.3 (RFC 8446) ile Gelen Yenilikler

Ağustos 2018'de yayınlanan RFC 8446 ile standartlaştırılan TLS 1.3, protokolün yirmi yıllık tarihindeki en önemli güncellemelerden biridir ve el sıkışma sürecini hem daha hızlı hem de daha güvenli hale getirmiştir.

**Hızlandırılmış El Sıkışması (1-RTT):** TLS 1.3'ün en büyük performans iyileştirmesi, el sıkışmasını tek bir gidiş-dönüşe (1-RTT) indirmesidir. Bu, şu şekilde başarılır: İstemci, `ClientHello` mesajında artık sadece desteklediği şifre takımlarını listelemekle kalmaz, aynı zamanda en olası anahtar değişim algoritmasını (genellikle Eliptik Eğri Diffie-Hellman - ECDHE) tahmin eder ve bu algoritma için gerekli olan kendi anahtar paylaşım verisini de peşinen gönderir. Bu sayede sunucu, `ServerHello` mesajını gönderdiği anda oturum anahtarlarını hesaplamak için yeterli bilgiye sahip olur ve el sıkışmasını kendi tarafında tamamlayabilir. Bu optimizasyon, ikinci gidiş-dönüş ihtiyacını ortadan kaldırarak, özellikle yüksek gecikmeli mobil ağlarda bağlantı kurma süresini önemli ölçüde azaltır.

**Artırılmış Güvenlik:** TLS 1.3, güvenliği çeşitli yollarla artırır:

* **Eski Algoritmaların Kaldırılması:** MD5, SHA-1 gibi zayıf hash algoritmaları ve RC4, 3DES gibi güvensiz simetrik şifreler tamamen kaldırılmıştır. Ayrıca, RSA anahtar değişimi gibi “ileriye dönük gizlilik” (forward secrecy) sağlamayan mekanizmalar da protokolden çıkarılmıştır.
* **İleriye Dönük Gizlilik (Forward Secrecy) Zorunluluğu:** TLS 1.3, yalnızca her oturum için geçici ve benzersiz anahtarlar oluşturan anahtar değişim algoritmalarını (ECDHE gibi) destekler. Bu, bir saldırganın gelecekte sunucunun uzun vadeli özel anahtarını ele geçirmesi durumunda bile, geçmişte kaydedilmiş şifreli oturumları çözememesini sağlar.
* **Daha Fazla Şifreleme:** TLS 1.2'de sunucu sertifikası gibi bazı el sıkışma mesajları şifresiz gönderilirken, TLS 1.3 el sıkışmasının daha büyük bir bölümünü şifreleyerek gizliliği artırır ve ağ üzerindeki analizleri zorlaştırır.

#### 2.2.2. Dijital Sertifika Yaşam Döngüsü Yönetimi

#### Sertifika Otoriteleri (CA) ve Güven Zinciri

Dijital sertifikalar, bir web sitesinin kimliğini ve sahipliğini doğrulayan elektronik belgelerdir. Bu sertifikalar, tarayıcıların ve işletim sistemlerinin “kök deposunda” (root store) önceden güvenilir olarak tanımlanmış olan Sertifika Otoriteleri (CA) tarafından verilir. Güven modeli, hiyerarşik bir “güven zinciri” (chain of trust) üzerine kuruludur. Bir son kullanıcı sertifikası (örneğin, `www.example.com` için), genellikle doğrudan bir kök CA tarafından değil, o kök CA tarafından imzalanmış bir veya daha fazla ara CA (intermediate CA) tarafından imzalanır. Tarayıcı, sertifikanın geçerliliğini, bu zinciri takip ederek güvendiği bir kök CA'ya ulaşana kadar her bir imzayı doğrulayarak kontrol eder.

#### Sertifika Türleri

Sertifikalar, doğrulama seviyelerine göre farklılık gösterir:

* **Alan Adı Doğrulamalı (Domain Validated — DV):** En temel seviyedir. CA, sadece sertifika talebinde bulunan kişinin alan adını kontrol etme yetkisine sahip olduğunu doğrular.
* **Kuruluş Doğrulamalı (Organization Validated — OV):** CA, alan adı sahipliğine ek olarak, talepte bulunan kuruluşun yasal varlığını da doğrular.
* **Genişletilmiş Doğrulama (Extended Validation — EV):** En katı doğrulama sürecini içerir ve geçmişte tarayıcılarda yeşil adres çubuğu ile gösterilirdi.

Ayrıca, bir alan adının tüm alt alan adlarını (`*.example.com`) tek bir sertifika ile güvence altına alan **Wildcard** sertifikalar da mevcuttur.

#### Yaşam Döngüsü

Sertifikaların sınırlı bir geçerlilik süresi vardır (şu anda genellikle bir yıl). Bu nedenle, sertifika yönetimi kritik bir operasyonel süreçtir. Bu yaşam döngüsü; sertifikaların ağ içinde keşfedilmesi, yeni sertifikaların üretilmesi veya satın alınması, sunuculara yüklenmesi, envanterinin tutulması, geçerlilik sürelerinin izlenmesi ve en önemlisi, süresi dolmadan önce zamanında yenilenmesi adımlarını içerir. Süresi dolmuş bir sertifika, kullanıcıların web sitesine erişirken güvenlik uyarıları almasına ve sitenin erişilemez hale gelmesine neden olur. Bu tür hizmet kesintilerini ve insan hatalarını önlemek için, Azure Key Vault veya diğer sertifika yönetimi platformları aracılığıyla yenileme süreçlerinin otomatikleştirilmesi, modern altyapılar için en iyi uygulama olarak kabul edilmektedir.

### 2.3. Tarayıcı ve Sunucu Güvenliğini Artıran Politikalar

HTTPS, taşıma katmanında güvenliği sağlarken, sunucular tarafından gönderilen ek HTTP başlıkları, modern tarayıcıların güvenlik özelliklerini etkinleştirerek ek savunma katmanları oluşturabilir.

#### 2.3.1. HSTS (HTTP Strict Transport Security): Protokol Düşürme Saldırılarına Karşı Savunma

#### Çalışma Prensibi

Bir kullanıcı bir web sitesini ilk kez güvenli bir şekilde (HTTPS üzerinden) ziyaret ettiğinde, sunucu yanıtıyla birlikte `Strict-Transport-Security` HTTP başlığını gönderebilir. Bu başlık, tarayıcıya şu talimatı verir: "Bu alan adına, belirtilen süre (`max-age` direktifi ile saniye cinsinden tanımlanır) boyunca yalnızca ve yalnızca HTTPS kullanarak bağlan.". Tarayıcı bu politikayı aldıktan sonra, yerel deposuna kaydeder. Bu süre zarfında, kullanıcı bu siteye `http://` protokolü ile erişmeye çalışsa veya güvensiz bir HTTP bağlantısına tıklasa bile, tarayıcı herhangi bir ağ isteği yapmadan önce bu isteği otomatik olarak ve dahili olarak `https://` protokolüne yükseltir.

#### Koruma Mekanizması

HSTS’nin temel amacı, “SSL-stripping” olarak da bilinen protokol düşürme (protocol downgrade) saldırılarını engellemektir. Bu tür bir MitM saldırısında, saldırgan kullanıcı ile sunucu arasına girer ve kullanıcının tarayıcısına güvensiz bir HTTP bağlantısı sunarken, kendisi sunucu ile güvenli bir HTTPS bağlantısı kurar. Bu sayede, kullanıcı ile arasındaki şifrelenmemiş trafiği dinleyebilir. HSTS politikası aktif olan bir tarayıcı, siteye yönelik tüm bağlantıları zorunlu olarak HTTPS’e yükselttiği için bu tür bir düşürme saldırısına izin vermez ve bağlantıyı sonlandırır.

`includeSubDomains` ve `preload`

HSTS başlığı, iki önemli ek direktif içerebilir:

* `includeSubDomains`: Bu direktif, HSTS politikasının yalnızca ana alan adı için değil, tüm alt alan adları için de geçerli olmasını sağlar.
* `preload`: HSTS'nin zayıf noktası, politikanın etkili olabilmesi için kullanıcının siteyi en az bir kez güvenli bir şekilde ziyaret etmesi gerekliliğidir. Bu "ilk bağlantı" anında kullanıcı hala bir SSL-stripping saldırısına karşı savunmasızdır. `preload` direktifi bu sorunu çözer. Bu direktife sahip siteler, tarayıcı üreticileri (Google, Mozilla vb.) tarafından yönetilen ve doğrudan tarayıcılara gömülü olan bir "HSTS önyükleme listesine" dahil edilmek için başvurabilirler. Bir alan adı bu listede yer aldığında, tarayıcı o siteyi daha önce hiç ziyaret etmemiş olsa bile, ona her zaman HTTPS ile bağlanması gerektiğini bilir. Bu, ilk bağlantı zafiyetini tamamen ortadan kaldırır.

#### 2.3.2. OWASP Güvenlik Başlıkları: Tarayıcı Davranışını Yönlendirme

Open Web Application Security Project (OWASP), web uygulaması güvenliğini artırmak için bir dizi HTTP yanıt başlığının kullanılmasını önermektedir. Bu başlıklar, tarayıcının belirli davranışlarını kısıtlayarak çeşitli saldırı türlerine karşı koruma sağlar.

* **Content-Security-Policy (CSP):** Bir web sayfasının hangi tür kaynakları (JavaScript, CSS, resimler, fontlar vb.) ve bu kaynakları hangi konumlardan (URL’ler) yükleyebileceğini ayrıntılı bir şekilde tanımlayan son derece güçlü bir güvenlik mekanizmasıdır. Düzgün yapılandırılmış bir CSP, Siteler Arası Betik Çalıştırma (Cross-Site Scripting — XSS) ve veri enjeksiyonu saldırılarının etkisini büyük ölçüde azaltabilir veya tamamen engelleyebilir. Örneğin,`script-src 'self' https://apis.google.com` direktifi, tarayıcının yalnızca sayfanın kendi kaynağından veya `apis.google.com` adresinden gelen JavaScript dosyalarını çalıştırmasına izin verir, diğer tüm kaynakları engeller.
* **X-Frame-Options:** Bir web sayfasının `<frame>`, `<iframe>`, `<embed>` veya `<object>` gibi etiketler kullanılarak başka bir site içine gömülüp gömülemeyeceğini kontrol eder. Bu başlığın temel amacı, kullanıcının farkında olmadan zararlı bir eylem gerçekleştirmesini sağlamak için sayfanın görünmez bir çerçeve içine yerleştirildiği "clickjacking" saldırılarını önlemektir. `DENY` değeri çerçevelemeyi tamamen engellerken, `SAMEORIGIN` yalnızca aynı kaynaktan gelen sayfaların çerçevelemesine izin verir. Bu başlığın işlevselliği, modern tarayıcılarda CSP'nin `frame-ancestors` direktifi tarafından devralınmıştır ve bu direktifin kullanılması tavsiye edilir.
* `X-Content-Type-Options: nosniff`: Tarayıcının, bir kaynağın MIME türünü, sunucunun gönderdiği `Content-Type` başlığından farklı olarak "tahmin etmesini" (MIME-sniffing) engeller. Bu, örneğin bir metin dosyasının çalıştırılabilir bir betik olarak yorumlanmasını önleyerek güvenlik risklerini azaltır.
* `Referrer-Policy`: Bir kullanıcı bir siteden diğerine bir bağlantı aracılığıyla geçtiğinde, tarayıcının `Referer` başlığında kaynak URL hakkında ne kadar bilgi göndereceğini kontrol eder. Bu, hassas bilgilerin URL'ler aracılığıyla sızmasını önlemeye yardımcı olabilir.

### 2.4. Web Uygulama Zafiyetleri ve Önleme Teknikleri (OWASP Top 10)

HTTPS ve diğer güvenlik başlıkları, veriyi taşıma katmanında ve tarayıcı düzeyinde korurken, uygulamanın kendisindeki mantık hatalarını veya kodlama zafiyetlerini düzeltmezler. OWASP Top 10, web uygulamalarında en sık karşılaşılan ve en kritik güvenlik risklerini belgeleyen, endüstri standardı bir farkındalık dokümanıdır.

#### A03:2021 — Injection (Enjeksiyon)

Enjeksiyon zafiyetleri, güvenilmeyen kullanıcı girdisinin, bir komut veya sorgunun bir parçası olarak bir yorumlayıcıya (örneğin, bir SQL veritabanı veya işletim sistemi kabuğu) gönderilmesiyle ortaya çıkar.

#### **SQL Injection (SQLi)**

En bilinen enjeksiyon türüdür. Bir saldırgan, bir web formu veya URL parametresi aracılığıyla, uygulamanın arka planda çalıştırdığı SQL sorgusunu manipüle edecek şekilde özel olarak hazırlanmış SQL komutları enjekte eder. Başarılı bir SQLi saldırısı, saldırganın veritabanındaki tüm verileri okumasına, değiştirmesine veya silmesine, kimlik doğrulama mekanizmalarını atlamasına ve hatta bazı durumlarda temel işletim sistemi üzerinde komut çalıştırmasına olanak tanıyabilir.

* **Önleme:** SQL enjeksiyonunu önlemenin en etkili ve standart yolu, kullanıcı girdisini doğrudan sorgu dizesine birleştirmek yerine **parametreli sorgular (prepared statements)** kullanmaktır. Bu teknikte, SQL sorgusu önce bir şablon olarak veritabanına gönderilir ve kullanıcı girdisi daha sonra ayrı bir parametre olarak iletilir. Bu yöntem, veritabanının, kullanıcı girdisini her zaman veri olarak ele almasını ve asla çalıştırılabilir bir komut olarak yorumlamamasını sağlar, bu da enjeksiyonu temelden imkansız hale getirir.

#### Cross-Site Scripting (XSS)

XSS, bir enjeksiyon zafiyetidir ve saldırganın, güvenilmeyen bir girdiyi (genellikle JavaScript kodu) bir web sayfasına enjekte etmesi ve bu kodun başka bir kullanıcının tarayıcısında çalıştırılmasını sağlamasıyla gerçekleşir. Başarılı bir XSS saldırısı, saldırganın kurban kullanıcının oturum çerezlerini (session cookies) çalmasına, sayfa içeriğini değiştirmesine, hassas bilgileri ele geçirmesine veya kullanıcı adına eylemler gerçekleştirmesine olanak tanır.

#### **Türleri:**

* **Reflected (Yansıtılan) XSS:** Zararlı betik, genellikle bir URL parametresi aracılığıyla sunucuya gönderilir ve sunucu bu betiği hemen yanıtın bir parçası olarak geri “yansıtır”. Saldırı, kurbanın özel olarak hazırlanmış bir bağlantıya tıklamasıyla tetiklenir.
* **Stored (Depolanan) XSS:** En tehlikeli türdür. Saldırgan, zararlı betiği web sitesinin veritabanına (örneğin, bir yorum, forum gönderisi veya kullanıcı profili aracılığıyla) kaydeder. Bu zararlı betik, daha sonra bu içeriği görüntüleyen her kullanıcının tarayıcısında çalışır.
* **DOM-based XSS:** Zafiyet, sunucu tarafı kodda değil, sayfanın istemci tarafı JavaScript kodundadır. Betik, URL’nin bir parçasını (örneğin, `location.hash`) güvensiz bir şekilde okuyup DOM'a yazdığında ortaya çıkar.

#### **Önleme Yöntemleri:**

* **Çıktı Kodlaması (Output Encoding):** XSS’e karşı en temel ve en önemli savunma, kullanıcıdan gelen tüm verileri, HTML’de görüntüleneceği bağlama göre uygun şekilde kodlamaktır. Örneğin, HTML gövdesine yazdırılacak bir veri için `<` karakteri `&lt;`, `>` karakteri `&gt;` olarak kodlanmalıdır. Bu, tarayıcının bu karakterleri HTML etiketi olarak değil, düz metin olarak yorumlamasını sağlar.
* **Content Security Policy (CSP):** İkinci bir savunma hattı olarak, güçlü bir CSP, yetkisiz betiklerin çalışmasını engelleyerek, kodlama hatası olsa bile bir XSS zafiyetinin sömürülmesini önleyebilir.
* `HttpOnly` **Cookie Bayrağı:** Oturum çerezleri `HttpOnly` bayrağı ile ayarlandığında, bu çerezlere istemci tarafı betikleri (JavaScript) aracılığıyla erişilemez. Bu, bir XSS zafiyeti başarılı olsa bile, saldırganın en değerli hedef olan oturum çerezini çalmasını engeller.

Web güvenliği, iki temel ve birbirinden ayrı katmanda ele alınmalıdır: taşıma katmanı ve uygulama katmanı. HTTPS ve TLS, verinin istemci ile sunucu arasında *taşınması* sırasındaki güvenliğini, yani gizliliğini ve bütünlüğünü sağlar. Ancak bu, verinin sunucuya ulaştıktan sonra *uygulama* tarafından nasıl işlendiği ve yorumlandığı konusunda hiçbir güvence vermez. SQL Injection ve XSS gibi kritik zafiyetler, tamamen güvenli ve şifreli bir HTTPS kanalı üzerinden sömürülebilir. Bu durum, siber güvenlikteki “derinlemesine savunma” (defense-in-depth) ilkesinin web mimarisindeki en net ve en önemli örneklerinden biridir. Güvenlik, tek bir noktada sağlanan bir özellik değil, sistemin her katmanında (ağ, taşıma, uygulama, veri) uygulanması gereken bir süreçtir.

Geleneksel web modelinde sunucu, içeriği gönderir ve tarayıcı bu içeriği kendi varsayılan kurallarına göre işler. Ancak CSP ve diğer OWASP güvenlik başlıkları , bu dinamiği kökten değiştirir. Sunucu artık sadece içerik göndermekle kalmaz, aynı zamanda o içeriğin tarayıcıda *nasıl* işleneceğine, hangi kaynakları yükleyebileceğine ve hangi eylemleri gerçekleştirebileceğine dair katı kurallar içeren bir “politika belgesi” de gönderir. Örneğin, `Content-Security-Policy: script-src 'self'` başlığı, tarayıcıya "Sana gönderdiğim bu HTML belgesinin içinde, benden (aynı kaynaktan) gelmeyen hiçbir JavaScript kodunu çalıştırmana izin vermiyorum" talimatını verir. Bu, sunucunun, istemci tarafındaki (tarayıcı) yürütme ortamının güvenlik sınırlarını dinamik olarak ve her yanıt için özel olarak tanımlamasını sağlar. Sunucu, bu modelde tarayıcının güvenlik motoru için bir nevi uzaktan kural yapılandırıcısı haline gelir. Bu, sunucu ve istemci arasındaki sorumluluk paylaşımında önemli bir paradigma değişikliğidir ve güvenliğin sorumluluğunu daha proaktif bir şekilde sunucu tarafına yükler.

![](https://cdn-images-1.medium.com/max/800/1*C_77zQqrn-BGzkE5DYFK1A.png)

TLS Türleri

---

### Bölüm 3: DNS Altyapısının Güvenlik Mimarisi

Alan Adı Sistemi (DNS), internetin temel bir bileşeni olarak, kullanıcıların karmaşık IP adresleri yerine hatırlanabilir alan adları kullanarak web sitelerine ve diğer hizmetlere erişmesini sağlar. İnternetin bu “telefon rehberi”, işleyişi açısından kritik olduğu kadar, tarihsel olarak güvenlik kaygıları ikinci planda tutularak tasarlandığı için siber saldırganlar için de cazip bir hedef olmuştur. Bu bölüm, DNS’in temel işleyişini, onu hedef alan klasik saldırıları ve bu saldırılara karşı geliştirilen iki temel ve birbirini tamamlayan güvenlik katmanını inceler: DNSSEC ile veri bütünlüğü ve DoH/DoT ile sorgu gizliliği.

### 3.1. DNS Protokolü ve Klasik Saldırı Vektörleri

#### DNS’in Hiyerarşik Yapısı ve Temel Kayıtlar

Alan Adı Sistemi (DNS), insan tarafından okunabilir alan adlarını (örneğin, `www.example.com`) makinelerin ağ üzerinde iletişim kurmak için kullandığı IP adreslerine (örneğin, `192.0.2.1`) çeviren, dünya çapında dağıtık ve hiyerarşik bir veritabanı sistemidir. Bu hiyerarşi, en tepede bulunan kök (`.`) sunuculardan başlar ve sırasıyla Üst Düzey Alan Adı (Top-Level Domain - TLD) sunucularına (örneğin, `.com`, `.org`, `.tr`) ve son olarak belirli bir alan adının kayıtlarını barındıran yetkili (authoritative) ad sunucularına kadar uzanır.

Ağ yönetimi ve hizmetlerin doğru çalışması için DNS’te çeşitli kayıt türleri kullanılır. En temel ve yaygın olanları şunlardır:

* `A` **ve** `AAAA` **Kayıtları:** Bir alan adını sırasıyla bir IPv4 ve bir IPv6 adresine eşler. Bu, en temel DNS kaydıdır.
* `CNAME` **(Canonical Name) Kaydı:** Bir alan adını başka bir alan adına yönlendiren bir takma ad (alias) oluşturur. Örneğin, `www.example.com` adresi `example.com` adresine bir CNAME kaydı ile yönlendirilebilir.
* `MX` **(Mail Exchange) Kaydı:** Belirli bir alan adına gönderilen e-postaların hangi posta sunucusu tarafından işlenmesi gerektiğini belirtir. Birden fazla MX kaydı olabilir ve öncelik (priority) değeri daha düşük olan sunucu önce denenir.
* `TXT` **(Text) Kaydı:** Alan adıyla ilgili metin tabanlı bilgileri depolamak için kullanılır. Modern internette en önemli kullanım alanlarından biri, SPF, DKIM ve DMARC gibi e-posta kimlik doğrulama politikalarını yayınlamaktır.
* `NS` **(Name Server) Kaydı:** Bir alan adı veya alt alan adı için yetkili olan ad sunucularını tanımlar.
* `SOA` **(Start of Authority) Kaydı:** Bir DNS bölgesinin (zone) birincil ad sunucusu, yönetici e-posta adresi, seri numarası ve yenileme zamanlamaları gibi temel yetki bilgilerini içerir.

#### DNS Spoofing ve Cache Poisoning Saldırıları

DNS, SMTP gibi, güvenliğin birincil tasarım hedefi olmadığı bir dönemde geliştirilmiştir. Bu nedenle, DNS protokolü, özellikle DNS önbellek zehirlenmesi (cache poisoning) olarak bilinen saldırı türüne karşı doğal olarak savunmasızdır.

* **Çalışma Mekanizması:** Bir kullanıcı bir web sitesini ziyaret etmek istediğinde, bilgisayarı bu alan adının IP adresini öğrenmek için bir DNS çözümleyicisine (resolver), genellikle internet servis sağlayıcısının (İSS) sunucusuna, bir sorgu gönderir. Çözümleyici, bu bilgiyi kendi önbelleğinde (cache) bulamazsa, DNS hiyerarşisini takip ederek yetkili ad sunucusundan doğru bilgiyi alır. Performansı artırmak için, çözümleyici bu yanıtı belirli bir süre (Time-to-Live — TTL) boyunca kendi önbelleğinde saklar. DNS önbellek zehirlenmesi saldırısında, bir saldırgan, çözümleyicinin yetkili sunucudan gerçek yanıtı almasını beklemeden, o sorguya karşılık gelen sahte bir DNS yanıtı gönderir. Saldırgan, bu sahte yanıtın kabul edilmesi için işlem ID’si (transaction ID) ve kaynak port numarası gibi bazı teknik detayları doğru tahmin etmelidir. Eğer sahte yanıt, gerçek yanıttan önce çözümleyiciye ulaşır ve bu parametreler eşleşirse, çözümleyici bu sahte bilgiyi meşru kabul ederek önbelleğine alır.
* **Sonuç:** Önbellek bir kez “zehirlendiğinde”, o çözümleyiciyi kullanan tüm kullanıcılar, meşru bir siteye (örneğin, bir online bankacılık sitesi) gitmeye çalıştıklarında, farkında olmadan saldırganın kontrolündeki kötü amaçlı bir sunucuya yönlendirilirler. Bu sahte site, genellikle orijinal sitenin birebir kopyasıdır ve kullanıcıların kimlik bilgilerini, parolalarını veya finansal verilerini çalmak (phishing), bilgisayarlarına kötü amaçlı yazılım yüklemek veya daha karmaşık saldırılar başlatmak için kullanılır.

### 3.2. DNS Veri Bütünlüğü ve Kaynak Doğrulama: DNSSEC

DNS önbellek zehirlenmesi gibi saldırıların temel nedeni, standart DNS protokolünün gelen yanıtlarda herhangi bir kimlik doğrulama veya bütünlük kontrolü yapmamasıdır. DNS Güvenlik Eklentileri (DNS Security Extensions — DNSSEC), bu temel zafiyeti gidermek için tasarlanmıştır.

#### Çalışma Prensibi

DNSSEC, DNS verilerinin kaynağını doğrulamak (origin authentication) ve bu verilerin taşıma sırasında değiştirilmediğini garanti etmek (data integrity) için DNS protokolüne açık anahtar kriptografisi tabanlı bir dijital imza mekanizması ekler. Önemli bir nokta, DNSSEC’in DNS sorgularını ve yanıtlarını şifrelememesidir; veriler hala düz metin olarak görülebilir. DNSSEC’in sağladığı tek güvence, alınan verinin gerçekten yetkili sunucudan geldiği ve bütünlüğünün bozulmadığıdır.

#### Güven Zinciri (Chain of Trust)

DNSSEC’in güven modeli, DNS’in kendi hiyerarşik yapısını takip eden bir “güven zinciri” üzerine kuruludur. Bu zincir, en tepede bulunan ve tüm DNSSEC uyumlu çözümleyiciler tarafından önceden güvenilen DNS kök bölgesinin (root zone) genel anahtarı ile başlar. Bu anahtar, “güven çapası” (trust anchor) olarak işlev görür.

Süreç şu şekilde işler:

1. Her DNS bölgesi (örneğin, `.com` veya `example.com`), kendi kayıtlarını imzalamak için bir anahtar çifti (genel ve özel) oluşturur.
2. Bir alt bölge (örneğin, `example.com`), kendi genel anahtarının bir özetini (hash) içeren bir `DS` (Delegation Signer) kaydı oluşturur ve bu kaydı üst bölgesine (`.com`) kaydettirir.
3. Üst bölge (`.com`), bu `DS` kaydını kendi özel anahtarıyla imzalayarak alt bölgenin anahtarının geçerliliğini onaylar. Bir DNS çözümleyicisi, bir alan adının kaydını doğrulamak istediğinde, kök bölgesinin güvenilir anahtarından başlayarak bu `DS` ve `DNSKEY` kayıt zincirini adım adım takip eder. Her adımda, bir üst bölgenin imzası, bir alt bölgenin anahtarını doğrular ve bu süreç, sorgulanan kayda ulaşana kadar devam eder. Bu kesintisiz kriptografik zincir, yanıtın her seviyede doğrulanmasını sağlar.

#### DNSSEC Kayıt Türleri (RFC 4034)

DNSSEC, işlevselliğini sağlamak için DNS’e yeni kaynak kaydı türleri ekler :

* `DNSKEY`**:** Bir bölgenin imzalanmasında kullanılan genel anahtarı (public key) içerir. Genellikle biri anahtar imzalama anahtarı (Key Signing Key - KSK), diğeri ise bölge imzalama anahtarı (Zone Signing Key - ZSK) olmak üzere iki anahtar kullanılır.
* `RRSIG` **(Resource Record Signature):** Belirli bir DNS kayıt setinin (örneğin, bir alan adının A kayıtları) dijital imzasını içerir. Çözümleyici, bu imzayı ilgili `DNSKEY` ile doğrular.
* `DS` **(Delegation Signer):** Bir alt bölgenin `DNSKEY` kaydının özetini (hash) içerir ve üst bölgede bulunur. Güven zincirinin en kritik halkasıdır.
* `NSEC`**/**`NSEC3`**:** Bir alan adının veya kaydın "var olmadığını" kriptografik olarak kanıtlamak için kullanılır (authenticated denial of existence). Bu, saldırganların var olmayan alt alan adları için sahte yanıtlar enjekte etmesini önler.

### 3.3. DNS Sorgularında Gizlilik: DoH ve DoT Karşılaştırması

DNSSEC, DNS yanıtlarının doğruluğunu ve bütünlüğünü garanti altına alırken, DNS sorgularının kendisi hala şifresiz, düz metin olarak gönderilir. Bu durum, bir internet servis sağlayıcısının (İSS), ağ yöneticisinin veya ağ trafiğini dinleyen herhangi birinin, bir kullanıcının hangi web sitelerini ziyaret ettiğini görmesine ve bu bilgiyi toplamasına olanak tanır. TLS üzerinden DNS (DNS over TLS — DoT) ve HTTPS üzerinden DNS (DNS over HTTPS — DoH), bu gizlilik sorununu çözmek için geliştirilmiş iki modern protokoldür.

#### DNS over TLS (DoT)

* **Teknik Yapı:** DoT, standart DNS sorgularını ve yanıtlarını, doğrudan bir Taşıma Katmanı Güvenliği (TLS) tüneli içinde şifreler. Bu amaçla, IANA tarafından özel olarak atanmış olan **TCP Port 853**'ü kullanır. İletişim, temel olarak hala DNS protokolüdür, sadece güvenli bir TLS katmanıyla sarmalanmıştır.
* **Avantajlar ve Dezavantajlar:** DoT’nin kendine özgü bir port kullanması, ağ yöneticilerinin DNS trafiğini kolayca tanımlamasını, izlemesini ve filtrelemesini sağlar. Bu, kurumsal ağlarda güvenlik politikalarını (örneğin, kötü amaçlı sitelere erişimi engelleme) uygulamak için önemli bir avantajdır. Ancak, bu belirginlik aynı zamanda DoT trafiğinin sansür veya engelleme amacıyla da kolayca hedef alınabileceği anlamına gelir.

#### DNS over HTTPS (DoH) (RFC 8484)

* **Teknik Yapı:** DoH, DNS sorgularını ve yanıtlarını standart bir HTTPS `GET` veya `POST` isteği olarak biçimlendirir. Bu istekler, tüm diğer web trafiği ile aynı olan **TCP Port 443** üzerinden gönderilir. Bu mimari, DNS sorgularının, normal web'de gezinme, API çağrıları veya video akışı gibi diğer HTTPS trafiği arasında tamamen gizlenmesini ve onlardan ayırt edilemez hale gelmesini sağlar.
* **Avantajlar ve Dezavantajlar:** DNS trafiğini diğer web trafiği içinde kamufle etmesi, DoH’u kullanıcı gizliliğini en üst düzeye çıkarmada ve ağ düzeyinde sansür veya engellemeyi atlatmada son derece etkili kılar. Ancak bu durum, kurumsal ağ yöneticileri için ciddi bir zorluk yaratır. Tarayıcılar veya uygulamalar, işletim sisteminin veya ağın DNS ayarlarını tamamen atlayarak kendi yerleşik DoH çözümleyicilerini kullanabilirler. Bu, kurumsal güvenlik filtrelerini, ebeveyn kontrollerini ve içerik filtreleme politikalarını etkisiz hale getirebilir. Bu durum, ağ yöneticileri için önemli bir “kör nokta” ve ağ üzerindeki kontrolün kaybı anlamına gelir.

DNS güvenliği, iki ayrı ama birbiriyle ilişkili problemi çözmek üzere iki farklı teknolojiye ayrılmıştır. DNSSEC, “Bu DNS yanıtı doğru mu ve gerçekten yetkili sunucudan mı geliyor?” sorusuna cevap vererek **bütünlük** ve **kimlik doğrulama** sağlar. DoH ve DoT ise, “Bu DNS sorgusunu kimin yaptığını ve ne sorduğunu üçüncü bir taraf görebilir mi?” sorusuna cevap vererek **gizlilik** sağlar. Bu iki teknoloji birbirinin alternatifi değildir; tam tersine, bütüncül ve modern bir DNS güvenliği mimarisi için her ikisinin de bir arada kullanılması gerekmektedir. Birinin varlığı diğerini gereksiz kılmaz.

DoH’un temel tasarım felsefesi, DNS trafiğini standart HTTPS trafiği içinde “kamufle etmektir”. Bu, bireysel kullanıcı gizliliği ve sansürü aşma açısından bir zaferken, kurumsal ağ yönetimi ve güvenliği açısından bir kabustur. Geleneksel olarak, ağ yöneticileri DNS sorgularını izleyerek kötü amaçlı yazılım komuta-kontrol (C2) iletişimini, veri sızıntısı girişimlerini ve kurumsal politika ihlallerini tespit ederdi. DoH, bu görünürlüğü ortadan kaldırarak, kullanıcıların veya uygulamaların kurumsal politikaları atlayarak kendi DNS çözümleyicilerini kullanabildiği bir “gölge BT” (shadow IT) durumu yaratır. Bu durum, siber güvenlik dünyasındaki en temel gerilimlerden birini temsil eder: bireysel gizlilik ile kurumsal kontrol ve güvenlik arasındaki denge. Bu çatışma, internetin gelecekteki mimarisini ve yönetimini şekillendirecek en önemli tartışma konularından biridir.

![](https://cdn-images-1.medium.com/max/800/1*EH_7Ex7NamcxzJeldgLUEQ.png)

DoT vs DoH

---

### Bölüm 4: Dosya Transfer Protokollerinin Güvenlik Mimarisi

Dosya Aktarım Protokolü (FTP), internetin en eski ve en temel protokollerinden biri olarak, makineler arasında dosya transferi için onlarca yıldır kullanılmaktadır. Ancak, güvenlik düşünülerek tasarlanmamış olması, onu modern ağlar için büyük bir risk haline getirmiştir. Bu bölüm, eski FTP protokolünün doğal zafiyetlerini, bu sorunları çözmek için ortaya çıkan iki farklı ve sıkça karıştırılan güvenli yaklaşımı (FTPS ve SFTP) ve bu iki protokol arasındaki temel mimari farkları derinlemesine incelemektedir.

### 4.1. Eski FTP Protokolünün Güvenlik Riskleri

#### Temel İşleyiş ve Zafiyetler

Dosya Aktarım Protokolü (File Transfer Protocol — FTP), bir istemci ile sunucu arasında dosya yükleme (upload) ve indirme (download) işlemleri için tasarlanmış standart bir ağ protokolüdür. Ancak, en temel ve kritik zafiyeti, tüm iletişimi — kullanıcı adı, parola ve aktarılan dosya verileri dahil — ağ üzerinde şifresiz, yani düz metin olarak gerçekleştirmesidir. Bu durum, ağ trafiğini dinleyen herhangi bir saldırganın, kimlik bilgilerini ve transfer edilen dosyaların içeriğini kolayca ele geçirebileceği anlamına gelir. Bu temel güvenlik eksikliği nedeniyle, PCI DSS (Ödeme Kartı Sektörü Veri Güvenliği Standardı) ve HIPAA (Sağlık Sigortası Taşınabilirlik ve Sorumluluk Yasası) gibi modern güvenlik ve uyumluluk standartları tarafından hassas verilerin transferi için kullanımı kesinlikle kabul edilmez.

#### Komut ve Veri Kanalları Sorunu

FTP’nin mimarisi, işleyişini ve güvenliğini karmaşıklaştıran bir diğer önemli özelliğe sahiptir: iki ayrı TCP bağlantısı kullanması.

* **Komut Kanalı (Control Channel):** Genellikle standart olarak 21 numaralı port üzerinden kurulur. Bu kanal, istemcinin sunucuya bağlanması, kimlik doğrulaması yapması ve `LIST` (dosyaları listele), `RETR` (dosya indir), `STOR` (dosya yükle) gibi komutları göndermesi için kullanılır.
* **Veri Kanalı (Data Channel):** Gerçek dosya içeriğinin veya dizin listelerinin aktarıldığı kanaldır. Bu kanalın port numarası, komut kanalı üzerinden dinamik olarak belirlenir ve her transfer için yeni bir bağlantı kurulur.

Bu çift kanallı yapı, özellikle modern ağlarda yaygın olarak kullanılan güvenlik duvarları (firewall) ve Ağ Adresi Çevirimi (Network Address Translation — NAT) cihazları arkasında ciddi yapılandırma zorluklarına yol açar. Güvenlik duvarlarının, bu dinamik olarak açılan veri kanalı portlarına izin verecek şekilde özel olarak yapılandırılması gerekir, bu da hem karmaşıklığı artırır hem de ağın saldırı yüzeyini genişleterek potansiyel güvenlik riskleri oluşturur.

### 4.2. Güvenli Alternatifler: FTPS ve SFTP’nin Karşılaştırmalı Analizi

FTP’nin doğal güvensizliğini gidermek için, her ikisi de güvenli dosya transferi sağlayan ancak temelde tamamen farklı teknolojilere dayanan iki ana protokol geliştirilmiştir: FTPS ve SFTP.

#### 4.2.1. FTPS (FTP over SSL/TLS): FTP’nin Güvenli Hale Getirilmesi

#### Mimari

FTPS (FTP Secure), mevcut standart FTP protokolünün üzerine, web trafiğini güvence altına almak için de kullanılan Güvenli Soket Katmanı (SSL) veya onun modern halefi Taşıma Katmanı Güvenliği (TLS) protokolünün bir güvenlik katmanı olarak eklenmesiyle çalışır. FTPS, temelde hala FTP’dir; aynı komutları kullanır ve aynı çift kanallı mimariye sahiptir, ancak bu kanallar üzerinden geçen iletişim artık şifrelenmiştir. Bu yapı, HTTPS’in HTTP’ye olan ilişkisine oldukça benzerdir.

#### Explicit vs. Implicit Mod

FTPS’in iki farklı çalışma modu vardır:

* **Explicit (Açık) FTPS (FTPES):** Bu modda, istemci standart FTP portu olan 21 üzerinden sunucuya şifresiz bir bağlantı başlatır. Ardından, `AUTH TLS` veya `AUTH SSL` komutunu göndererek sunucudan bağlantıyı güvenli bir TLS oturumuna yükseltmesini "açıkça" talep eder. Bu mod, hem güvenli hem de güvensiz bağlantılara aynı port üzerinden izin verebildiği için daha esnek ve modern uygulamalarda daha yaygın olarak kullanılır.
* **Implicit (Örtük) FTPS:** Bu eski modda, istemci doğrudan FTPS için ayrılmış özel bir port (genellikle 990) üzerinden sunucuya bağlanır. Bağlantı kurulduğu anda, herhangi bir FTP komutu gönderilmeden önce bir TLS el sıkışması beklenir. Bu modda, tüm oturumun baştan sona şifreli olması zorunludur. Günümüzde kullanımı azalmıştır ve genellikle eski sistemlerle uyumluluk için desteklenir.

#### Zorluklar

FTPS, FTP’nin çift kanal (komut ve veri) yapısını miras aldığı için, onunla ilişkili sorunları da devralır. Veri kanalı için hala dinamik olarak portlar açılması gerektiğinden, güvenlik duvarı yapılandırması karmaşık olabilir ve ağ yöneticilerinin geniş bir port aralığına izin vermesini gerektirebilir. Bu durum, hem operasyonel zorluklara hem de potansiyel güvenlik risklerine yol açabilir.

#### 4.2.2. SFTP (SSH File Transfer Protocol): SSH Üzerinden Dosya Aktarımı

#### Mimari

SFTP, ismindeki “FTP” kısaltmasına rağmen, teknik olarak FTP ile hiçbir ilişkisi olmayan, tamamen farklı bir protokoldür. SFTP, Güvenli Kabuk (Secure Shell — SSH) protokolünün bir uzantısı olarak, güvenli dosya transferi sağlamak amacıyla sıfırdan tasarlanmıştır. FTP’nin metin tabanlı komut yapısının aksine, SFTP paket tabanlı bir protokoldür, bu da onu daha verimli hale getirebilir.

#### Tek Port Üzerinden Çalışma

SFTP’nin en büyük mimari avantajı, tüm iletişimi — kimlik doğrulama, komutlar ve veri aktarımı — standart SSH portu olan **TCP Port 22** üzerinden tek bir şifreli kanal kullanarak gerçekleştirmesidir. Bu, FTPS’in çoklu port sorununu tamamen ortadan kaldırır ve güvenlik duvarı yapılandırmasını büyük ölçüde basitleştirir. Ağ yöneticilerinin sadece tek bir portu açması yeterlidir, bu da ağın saldırı yüzeyini önemli ölçüde azaltır.

#### Gelişmiş Özellikler ve Kimlik Doğrulama

SFTP, temelini oluşturan SSH protokolünün güçlü güvenlik ve işlevsellik özelliklerini miras alır:

* **Kimlik Doğrulama:** Standart kullanıcı adı/parola ile kimlik doğrulamaya ek olarak, SFTP çok daha güvenli kabul edilen **SSH anahtar tabanlı kimlik doğrulamasını** (public key authentication) destekler. Bu yöntemde, kullanıcılar parolalar yerine kriptografik anahtar çiftleri kullanarak kimliklerini doğrularlar, bu da kaba kuvvet (brute-force) saldırılarına karşı çok daha yüksek bir koruma sağlar.
* **Dosya Yönetimi:** SFTP, basit dosya transferinin ötesinde, uzak dosya sistemi üzerinde daha zengin işlemler yapılmasına olanak tanır. Dosya kilitleme, sembolik link oluşturma ve dosya izinlerini (permissions) düzenleme gibi gelişmiş dosya sistemi işlemleri için standartlaştırılmış komutlar sunar.

### 4.3. Modern ve Güvenli Dosya Transferi için En İyi Uygulamalar

#### Protokol Seçimi

Modern ağ altyapıları için protokol seçimi yapılırken, SFTP genellikle FTPS’e göre daha üstün bir seçenek olarak kabul edilir. Tek port kullanımı sayesinde güvenlik duvarı yönetiminin daha basit ve güvenli olması, SSH anahtar tabanlı kimlik doğrulamanın sağladığı üstün güvenlik ve daha zengin dosya yönetimi yetenekleri, SFTP’yi çoğu senaryo için tercih edilen protokol yapmaktadır. FTPS, özellikle kurumun mevcut altyapısında zaten bir PKI (Açık Anahtar Altyapısı) ve SSL/TLS sertifika yönetimi süreçleri varsa veya eski sistemlerle uyumluluk bir zorunluluksa geçerli bir alternatif olabilir. Standart, şifresiz FTP ise, hassas olmayan verilerin aktarıldığı ve güvenlik riskinin bilinçli olarak kabul edildiği çok sınırlı iç ağ senaryoları dışında kesinlikle kullanılmamalıdır.

#### Sunucu Sıkılaştırma (Hardening)

Hangi güvenli protokol seçilirse seçilsin, sunucunun kendisinin güvenli bir şekilde yapılandırılması esastır. En iyi uygulamalar şunları içerir:

* Anonim girişlerin (anonymous login) devre dışı bırakılması.
* Güçlü parola politikalarının zorunlu kılınması ve düzenli olarak değiştirilmesi.
* Belirli bir süre içinde yapılan başarısız giriş denemelerinin sınırlandırılması (brute-force saldırılarını yavaşlatmak için).
* Kullanılmayan veya eski kullanıcı hesaplarının düzenli olarak temizlenmesi.
* Erişimin yalnızca belirli IP adresleri veya ağlarla sınırlandırılması.

#### Bulut Tabanlı Dosya Transfer Hizmetleri

Geleneksel dosya transferi protokollerinin yanı sıra, özellikle büyük dosyaların güvenli ve kolay bir şekilde paylaşılması için modern alternatifler de mevcuttur. Filemail, WeTransfer, Dropbox ve TransferNow gibi Yönetilen Dosya Transferi (Managed File Transfer — MFT) ve bulut tabanlı hizmetler, kullanıcı dostu arayüzler sunar. Bu hizmetler genellikle protokollerin karmaşıklığını kullanıcıdan soyutlar ve ek güvenlik özellikleri sağlar. Bu özellikler arasında uçtan uca şifreleme, paylaşılan dosyalar için parola koruması, erişim kontrolü, indirme takibi ve dosyalar için otomatik son kullanma tarihi belirleme gibi yetenekler bulunur. Bu platformlar, özellikle teknik olmayan kullanıcıların güvenli bir şekilde dosya paylaşımı yapması için etkili çözümler sunar.

FTPS ve SFTP, güvensiz bir protokol olan FTP’nin güvenlik sorunlarına yönelik iki farklı felsefeyi temsil eder. FTPS, mevcut ve yaygın olarak kullanılan bir protokolü (FTP) alıp, üzerine bir güvenlik katmanı (SSL/TLS) “yamayarak” **evrimsel** bir çözüm sunar. Bu yaklaşım, mevcut sistemlerle geriye dönük uyumluluğu kolaylaştırır ancak temel mimarinin zayıf yönlerini (örneğin, çift kanallı yapı ve bunun getirdiği güvenlik duvarı karmaşıklığı) miras alır. Buna karşılık SFTP, problemi sıfırdan ele alarak, güvenli bir temel (SSH) üzerine inşa edilmiş **devrimsel** bir çözüm sunar. Bu yaklaşım, geriye dönük uyumluluk kaygısı olmadan, daha temiz, daha verimli ve doğası gereği daha güvenli bir mimariyle sonuçlanır. Bu durum, siber güvenlikte sıkça karşılaşılan bir ikilemi göstermektedir: Mevcut bir sistemi iyileştirmek mi, yoksa sıfırdan güvenli bir alternatif inşa etmek mi? SFTP’nin modern ağlarda daha çok tercih edilmesi, genellikle ikinci yaklaşımın uzun vadede daha sürdürülebilir ve güvenli olduğunu göstermektedir.

![](https://cdn-images-1.medium.com/max/800/1*7ANigANBbyhJp_SS0wNP2A.png)

FTP, FTPS, SFTP

---

### Sonuç:

Bu kapsamlı teknik inceleme, modern dijital iletişimin temelini oluşturan e-posta, web, DNS ve dosya transferi protokollerinin güvenlik mimarilerini derinlemesine analiz etmiştir. Analizler, iki temel ve birbiriyle ilişkili stratejik sonucu ortaya koymaktadır: protokoller arası bağımlılık ve katmanlı savunma zorunluluğu.

Rapor boyunca incelenen protokollerin, izole ve bağımsız sistemler olmadığı açıkça görülmüştür. Aksine, bir protokolün güvenliği, bir diğerinin güvenilirliğine ve doğru yapılandırılmasına sıkı sıkıya bağlıdır. Güvenli bir e-posta kimlik doğrulama çerçevesi (DMARC), politikalarını yayınlamak ve doğrulamak için güvenilir ve bütünlüğü korunmuş bir DNS’e (DNSSEC) mutlak surette ihtiyaç duyar. Güvenli bir web sitesi (HTTPS), kimliğini doğrulamak için güvenilir bir sertifika otoritesi (CA) altyapısına ve kullanıcıları doğru sunucuya yönlendirmek için sahtekarlığa karşı korunmuş bir DNS’e bağlıdır. Bu karmaşık ilişkiler ağı, protokol güvenliğinin, en zayıf halkası kadar güçlü olan, birbiriyle kenetlenmiş bir zincir olduğunu göstermektedir. Bir alandaki güvenlik açığı, görünüşte ilgisiz başka bir alanda zincirleme bir etkiyle feci sonuçlara yol açabilir. Bu nedenle, protokol güvenliği bütüncül bir yaklaşımla ele alınmalı, her bir bileşenin diğerleri üzerindeki etkisi göz önünde bulundurularak tasarlanmalıdır.

Analiz edilen her bir alanda, hiçbir teknolojinin veya protokolün tek başına siber tehditlere karşı tam bir koruma sağlayamadığı sonucuna varılmıştır. Etkili bir siber güvenlik duruşu, “derinlemesine savunma” (defense-in-depth) ilkesini benimsemeyi gerektirir. Bu strateji, saldırganın hedefine ulaşmasını zorlaştırmak için birbiri ardına sıralanmış, farklı nitelikteki güvenlik kontrollerinden oluşan katmanlı bir mimari oluşturmayı hedefler. Bu rapor bağlamında, etkili bir katmanlı savunma stratejisi şu bileşenleri içermelidir:

* **Taşıma Katmanı:** Tüm iletişim kanallarında (web, e-posta, DNS) verinin gizliliğini ve bütünlüğünü sağlamak için TLS gibi güçlü şifreleme protokollerinin zorunlu kılınması.
* **Kimlik Doğrulama Katmanı:** Verinin ve kaynakların kimliğini doğrulamak için SPF, DKIM, DMARC ve DNSSEC gibi güçlü ve standartlaşmış mekanizmaların eksiksiz bir şekilde uygulanması.
* **Uygulama Katmanı:** Taşıma katmanının koruyamadığı, uygulamanın kendi mantığındaki zafiyetleri gidermek için OWASP Top 10 gibi kılavuzlara dayalı güvenli kodlama pratiklerinin benimsenmesi ve CSP gibi tarayıcı düzeyinde politikaların uygulanması.
* **İnsan Katmanı:** Teknik kontrollerin kaçınılmaz olarak yetersiz kalacağı sosyal mühendislik saldırılarına karşı en kritik savunma hattı olan kullanıcıların, sürekli ve uygulamalı farkındalık eğitimleri ile güçlendirilmesi.
* **Prosedürel Katman:** Özellikle finansal işlemleri hedef alan BEC gibi sofistike saldırılara karşı, teknolojiye ek olarak bant dışı doğrulama gibi kurumsal süreçlerin ve politikaların hayata geçirilmesi.

Sonuç olarak, ağ protokollerinin güvenliği, statik bir hedef değil, sürekli bir süreçtir. Tehditler evrildikçe, protokoller ve savunma stratejileri de buna adapte olmalıdır. Kurumlar için stratejik hedef, bu katmanların her birini sürekli olarak değerlendirmek, güçlendirmek ve birbiriyle uyumlu bir şekilde çalışmalarını sağlayarak dijital iletişimin temel taşlarını sağlamlaştırmaktır.