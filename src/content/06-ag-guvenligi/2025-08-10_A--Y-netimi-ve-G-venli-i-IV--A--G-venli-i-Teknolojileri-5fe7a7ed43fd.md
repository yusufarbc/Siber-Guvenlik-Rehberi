# Ağ Yönetimi ve Güvenliği IV: Ağ Güvenliği Teknolojileri

---

### Ağ Yönetimi ve Güvenliği IV: Ağ Güvenliği Teknolojileri

![](https://cdn-images-1.medium.com/max/800/1*Fhet-NIJbKlNzPESUc1Ttw.png)

Dijital altyapıların karmaşıklığı ve siber tehditlerin sofistike doğası, ağ güvenliği yaklaşımlarında köklü bir dönüşümü zorunlu kılmıştır. Geleneksel “kale ve hendek” (castle and moat) olarak bilinen çevre güvenliği modeli, ağın sınırlarını güçlü bir şekilde koruyarak içerideki her varlığa örtük bir güven atfederdi. Ancak, bulut bilişim, mobilite, uzaktan çalışma ve Nesnelerin İnterneti (IoT) gibi modern IT paradigmalarının yükselişiyle birlikte, bu net bir şekilde tanımlanmış ağ çevresi giderek belirsizleşmiştir. Bu dağıtık ve dinamik ortamlarda, geleneksel modelin tehditleri engellemedeki yetersizliği, savunma-derinlik (defense-in-depth) ve Sıfır Güven (Zero Trust) gibi daha bütünleşik ve kimlik merkezli mimarilerin benimsenmesini sağlamıştır.

Bu evrim, reaktif savunma mekanizmalarından proaktif kontrol stratejilerine doğru temel bir geçişi temsil etmektedir. Başlangıçta, tehditlerin büyük ölçüde dış kaynaklı olduğu varsayımıyla, ağın çevresine bir güvenlik duvarı (firewall) yerleştirmek yeterli görülüyordu. Ancak saldırganlar, bu savunmayı aşmak için uygulama katmanını (OSI Layer 7) hedef almaya başladığında, Web Uygulama Güvenlik Duvarları (WAF) ve Saldırı Önleme Sistemleri (IPS) gibi daha derine inebilen ve içeriği analiz edebilen araçlara ihtiyaç duyuldu. Tehdit aktörlerinin kimlik bilgilerini çalma ve içeriden gelen tehditleri (insider threats) istismar etme yeteneklerinin artmasıyla, ağın içindeki bir kullanıcı veya cihazın dahi varsayılan olarak güvenilir olamayacağı anlaşıldı. Bu farkındalık, her erişim talebinin, kimden ve nereden geldiğine bakılmaksızın, dinamik olarak doğrulanması ve yetkilendirilmesi gerektiğini öngören Sıfır Güven mimarisinin temel felsefesini oluşturmuştur. Dolayısıyla, ağ güvenliği teknolojilerinin evrimi, yalnızca teknik bir ilerleme değil, aynı zamanda “güven” kavramına yönelik felsefi bir değişimin somut bir yansımasıdır. Bu rapor, günümüzün ağ güvenliği teknolojilerini, bu modern paradigmalar çerçevesinde, mimari, protokol ve strateji düzeyinde kapsamlı bir şekilde incelemeyi amaçlamaktadır.

---

### Bölüm 1: Ağ Sınır Güvenliğinin Temel Taşı: Güvenlik Duvarı (Firewall) Teknolojileri

Güvenlik duvarları, ağ güvenliği mimarilerinin en temel ve vazgeçilmez bileşenleridir. Görevleri, önceden tanımlanmış güvenlik kurallarına dayanarak gelen ve giden ağ trafiğini izlemek ve kontrol etmektir. Teknolojinin evrimi, bu temel görevin giderek daha sofistike yöntemlerle yerine getirilmesini sağlamıştır.

### 1.1. Evrimsel Bir Bakış: Paket Filtrelemeden Durum Denetimine (Stateful Inspection)

Güvenlik duvarlarının ilk nesli, **durum bilgisi olmayan (stateless) paket filtreleme** teknolojisine dayanıyordu. Bu yaklaşım, OSI modelinin 3. (Ağ) ve 4. (Taşıma) katmanlarında çalışarak, her bir ağ paketini diğerlerinden bağımsız olarak değerlendirir. Karar mekanizması, paketin başlığında yer alan statik bilgilere dayanır: kaynak IP adresi, hedef IP adresi, kaynak port numarası, hedef port numarası ve kullanılan protokol. Bu basit ve hızlı yöntem, temel erişim kontrolü sağlasa da önemli zafiyetler barındırır. En büyük zayıflığı, bağlantının bağlamını anlayamamasıdır. Örneğin, bir saldırgan, kaynak IP adresini taklit ederek (IP spoofing) veya bir TCP oturumunun ortasına sahte bir “yanıt” paketi ekleyerek bu tür bir güvenlik duvarını kolayca aldatabilir.

Bu zafiyetlere çözüm olarak **durum denetimli (stateful inspection)** veya diğer adıyla **dinamik paket filtreleme** teknolojisi geliştirilmiştir. Bu teknoloji, ağ güvenliğine “hafıza” ve “bağlam” kavramlarını getirerek bir devrim yaratmıştır. Stateless firewall’lar her paketi yalıtılmış olarak değerlendirirken, stateful firewall’lar ağ bağlantılarının durumunu aktif olarak takip eder. Bu işlemi, **durum tablosu (state table)** veya **bağlantı tablosu (connection table)** adı verilen bir yapıda, devam eden tüm oturumların bilgilerini saklayarak yapar.

Bir TCP bağlantısı örneğinde bu süreç şu şekilde işler:

1. İç ağdaki bir istemci, dış ağdaki bir sunucuya bağlantı başlatmak için bir `SYN` paketi gönderir. Stateful firewall bu giden paketi görür ve durum tablosuna yeni bir giriş ekler. Bu giriş, kaynak ve hedef IP/port bilgileri, protokol (TCP) ve bağlantının durumu (`SYN_SENT`) gibi bilgileri içerir.
2. Sunucu, bu isteğe bir `SYN-ACK` paketi ile yanıt verir. Firewall, gelen bu paketin durum tablosundaki mevcut bir girişe karşılık gelip gelmediğini kontrol eder. Eşleşme bulduğunda, paketin geçişine izin verir ve tablodaki bağlantı durumunu `ESTABLISHED` olarak günceller.
3. Eğer dışarıdan, içeride başlatılmış bir bağlantıya karşılık gelmeyen, istenmeyen bir `SYN-ACK` paketi gelirse, firewall durum tablosunda bir eşleşme bulamayacağı için bu paketi otomatik olarak reddeder. Bu, stateless firewall'ların savunmasız olduğu birçok saldırı türünü engeller.
4. Bağlantı `FIN` veya `RST` paketleriyle sonlandırıldığında, ilgili giriş durum tablosundan kaldırılır ve portlar tekrar kapatılır.

Bu “hafıza” mekanizması, güvenlik duvarının sadece statik kurallara değil, aynı zamanda ağdaki meşru iletişim akışlarının mantıksal bütünlüğüne dayalı kararlar vermesini sağlar. Bu, daha sonraki anomali tespiti ve davranışsal analiz teknolojilerinin de temelini atan bir konsepttir.

### 1.2. Yeni Nesil Güvenlik Duvarları (NGFW): Uygulama Katmanında Derinlemesine Analiz

Stateful inspection, ağ güvenliğini önemli ölçüde artırmış olsa da, uygulama katmanındaki (Layer 7) tehditlere karşı kör kalmaktadır. Geleneksel bir stateful firewall, 80 veya 443 portundan geçen trafiğin HTTP veya HTTPS olduğunu varsayar, ancak bu trafiğin içeriğinde ne olduğunu veya hangi spesifik uygulamaya (örneğin Facebook, YouTube, Skype) ait olduğunu anlayamaz. Bu boşluğu doldurmak üzere **Yeni Nesil Güvenlik Duvarları (Next-Generation Firewalls — NGFW)** geliştirilmiştir.

NGFW’ler, stateful inspection’ın tüm yeteneklerini barındırmakla birlikte, en ayırt edici özelliği olarak **Derinlemesine Paket İncelemesi (Deep Packet Inspection — DPI)** teknolojisini kullanır. DPI, ağ paketlerinin sadece başlık bilgilerini değil, aynı zamanda veri yükünü (payload) de analiz eder. Bu sayede, port numarasından bağımsız olarak trafiğin hangi uygulamaya ait olduğunu, hatta uygulamanın hangi özelliğinin kullanıldığını tespit edebilir. Bu yetenek, **uygulama farkındalığı (application awareness)** olarak adlandırılır ve güvenlik politikalarında devrim niteliğinde bir granülerlik sağlar. Örneğin, “80 portundan gelen tüm trafiğe izin ver” gibi geniş bir kural yerine, bir NGFW ile “Tüm çalışanların LinkedIn kullanmasına izin ver, ancak dosya yüklemesini engelle” veya “YouTube erişimine izin ver, ancak video indirmeyi yasakla” gibi çok daha spesifik ve etkili politikalar oluşturulabilir.

Ayrıca, modern NGFW’ler genellikle **Saldırı Önleme Sistemi (Intrusion Prevention System — IPS)** gibi ek güvenlik modüllerini de entegre bir platformda sunar. Bu, bilinen zafiyetleri istismar etmeye yönelik saldırı imzalarını tespit edip proaktif olarak engelleyerek ek bir koruma katmanı sağlar.

### 1.3. NGFW’nin Gelişmiş Yetenekleri: SSL/TLS Denetimi ve Sandbox Analizi

Tehdit aktörleri, zararlı yazılımları ve komuta-kontrol (C2) iletişimlerini gizlemek için giderek daha fazla şifreli trafik (SSL/TLS) kullanmaktadır. Bu durum, DPI ve IPS gibi içerik tabanlı denetim mekanizmalarını etkisiz hale getirir, çünkü şifreli paketin içeriği görülemez. NGFW’ler bu sorunu **SSL/TLS Denetimi (SSL/TLS Inspection)** yeteneği ile aşar.

SSL/TLS denetimi, NGFW’nin istemci ile sunucu arasında meşru bir “aradaki adam” (Man-in-the-Middle — MitM) olarak konumlanması prensibine dayanır. Süreç şu şekilde işler:

1. İstemci, bir HTTPS sunucusuna bağlantı talebi gönderir.
2. NGFW, bu talebi yakalar ve istemci adına sunucuyla bir SSL/TLS oturumu kurar. Sunucu, sertifikasını NGFW’ye gönderir.
3. NGFW, sunucunun sertifikasını doğrular. Ardından, sunucunun kimliğini taklit eden ve kendi kök sertifikası (Root CA) ile anında imzaladığı yeni bir sertifika üretir ve bunu istemciye sunar.
4. İstemcinin bu sahte sertifikayı kabul etmesi için, NGFW’nin kök sertifikasının istemcinin “Güvenilir Kök Sertifika Yetkilileri” deposunda önceden yüklü olması gerekir.
5. İstemci sertifikayı kabul ettiğinde, NGFW ile istemci arasında ikinci bir şifreli tünel kurulur.
6. Bu noktadan sonra NGFW, istemciden gelen trafiğin şifresini çözer, içeriği güvenlik politikalarına (DPI, IPS, Antivirüs vb.) göre denetler, zararlı bir içerik yoksa tekrar şifreler ve sunucuya iletir. Aynı işlemi sunucudan gelen yanıtlar için de ters yönde gerçekleştirir.

Bu mekanizma, şifreli trafik içinde gizlenen tehditlere karşı tam görünürlük sağlarken, aynı zamanda önemli bir gizlilik ve yönetim sorununu da beraberinde getirir. Güvenliği artırmak için gizliliğin teknik olarak “kırılması”, özellikle finans ve sağlık gibi sıkı regülasyonlara tabi sektörlerde yasal ve etik tartışmalara yol açmaktadır.

Sıfır gün (zero-day) tehditleri ve geleneksel imza tabanlı yöntemlerle tespit edilemeyen gelişmiş zararlı yazılımlarla mücadele etmek için NGFW’ler, **Sandbox Analizi (Korumalı Alan)** teknolojisini kullanır. Bu teknoloji, ağa giren şüpheli veya bilinmeyen dosyaları (örneğin, e-posta ekleri, web indirmeleri), ana üretim ağından tamamen yalıtılmış, kontrollü bir sanal ortamda (sandbox) çalıştırır. Bu sanal ortamda dosyanın davranışları (dosya sistemi değişiklikleri, ağ bağlantı denemeleri, kayıt defteri (registry) manipülasyonları, anormal işlem başlatma vb.) detaylı olarak izlenir. Eğer dosya zararlı bir davranış sergilerse, bu bir tehdit olarak işaretlenir, ağa girişi engellenir ve bu yeni tehdit için bir imza oluşturularak tehdit istihbaratı veritabanı güncellenir. Ancak, gelişmiş zararlı yazılımlar, içinde bulundukları ortamın bir sandbox olup olmadığını anlamaya yönelik **sandbox’tan kaçınma (sandbox evasion)** teknikleri kullanabilirler. Bu teknikler arasında sanal makine artefaktlarını (belirli sürücüler, MAC adresleri) kontrol etme, zaman tabanlı gecikmelerle (örneğin, zararlı eylemi 10 dakika sonra başlatarak sandbox’ın analiz süresini aşma) veya kullanıcı etkileşimi (fare hareketi, klavye girişi) bekleyerek analizi atlatma gibi yöntemler bulunur.

### 1.4. Politika ve Kural Yönetiminin Bilimi: Etkinlik, Optimizasyon ve NIST Çerçevesi

Etkili bir güvenlik duvarı, sadece donanım ve yazılımdan ibaret değildir; aynı zamanda iyi yapılandırılmış, düzenli olarak gözden geçirilen ve optimize edilen bir kural ve politika setine dayanır. Güvenlik duvarı yönetiminin temel ilkesi, **“varsayılan olarak reddet, istisnai olarak izin ver” (deny-all, allow-by-exception)** yaklaşımıdır. Bu, yalnızca iş için kesinlikle gerekli olan trafiğe açıkça izin verildiği ve geri kalan her şeyin varsayılan olarak engellendiği anlamına gelir.

Zamanla, kurumsal ağların büyümesi ve uygulama sayısının artmasıyla güvenlik duvarı kural setleri karmaşıklaşır. Bu durum, **gölge kurallar** (daha üstteki bir kural tarafından etkisiz hale getirilen kurallar), **gereksiz kurallar** (artık kullanılmayan sistemlere veya uygulamalara ait kurallar) ve **çakışan kurallar** gibi anormalliklere yol açabilir. Bu tür kural anormallikleri, hem güvenlik duvarının performansını düşürür hem de potansiyel güvenlik açıkları yaratır. Bu nedenle, kural setlerinin düzenli olarak (örneğin, üç ayda bir) denetlenmesi, kullanılmayan veya gereksiz kuralların temizlenmesi ve kuralların mantıksal bir sıraya konulması (en sık eşleşen kuralların en üste yerleştirilmesi gibi) kritik bir en iyi uygulamadır.

![](https://cdn-images-1.medium.com/max/800/0*MyFNGDm32b4GFCmw)

NIST

ABD Ulusal Standartlar ve Teknoloji Enstitüsü (NIST) gibi kuruluşlar, güvenlik duvarı politikalarının oluşturulması ve yönetilmesi için kapsamlı çerçeveler sunar. Bu çerçeveler, kural değişikliklerinin belgelenmesi, her kuralın amacının açıkça belirtilmesi, en az ayrıcalık ilkesine (principle of least privilege) uyulması ve düzenli denetimlerin yapılması gibi konuları kapsar.

### 1.5. Log Analizi ve Adli Bilişim: Güvenlik Duvarı Kayıtlarından Anlam Çıkarmak

Güvenlik duvarı logları, bir ağdaki güvenlik duruşunun anlaşılması, tehditlerin tespit edilmesi ve bir güvenlik ihlali sonrası adli analizin (forensics) yapılabilmesi için hayati öneme sahiptir. Her bir log kaydı, ağdaki bir trafik akışına ilişkin değerli bilgiler içerir. Tipik bir log kaydı şu alanları barındırır: zaman damgası, eylem (izin verildi/engellendi), protokol, kaynak IP adresi, kaynak portu, hedef IP adresi ve hedef portu.

Bu logların sistematik olarak analiz edilmesiyle, çeşitli kötü niyetli aktiviteler tespit edilebilir :

* **Port Taraması:** Tek bir kaynaktan çok sayıda farklı porta veya hedefe yönelik kısa sürede çok sayıda engellenen bağlantı denemesi, bir keşif faaliyetine işaret eder.
* **Yetkisiz Erişim Denemeleri:** Kritik sunuculara veya servislere yönelik sürekli engellenen bağlantı logları, bir kaba kuvvet (brute-force) saldırısı veya yetkisiz erişim girişimi olabilir.
* **Anormal Bant Genişliği Kullanımı:** Belirli bir kaynaktan veya hedefe doğru beklenmedik derecede yüksek hacimli izin verilen trafik, bir veri sızıntısı veya DDoS saldırısının parçası olabilir.
* **Kötü Amaçlı Yazılım Faaliyetleri:** Bilinen kötü amaçlı IP adreslerinden veya komuta-kontrol sunucularından gelen bağlantı denemeleri, ağ içinde bir sistemin ele geçirildiğini gösterebilir.

Etkili bir log analizi için, tüm güvenlik duvarlarından ve diğer ağ cihazlarından gelen logların **Syslog** gibi standart bir protokol kullanılarak merkezi bir **Güvenlik Bilgi ve Olay Yönetimi (SIEM)** platformuna gönderilmesi esastır. Syslog mesajları genellikle `<PRI>TIMESTAMP HOSTNAME: MESSAGE` formatını takip eder; burada `<PRI>` değeri, mesajın hem önem (severity) hem de kaynak (facility) bilgisini içerir. Örneğin, bir Cisco ASA güvenlik duvarı tarafından üretilen `%ASA-6-106100` gibi bir mesaj, cihazın türünü (ASA), önem seviyesini (6 - Informational) ve spesifik olay kimliğini (106100) içerir. Bu yapılandırılmış veriler, SIEM platformlarında olay korelasyonu ve otomatik uyarı üretimi için temel oluşturur.

![](https://cdn-images-1.medium.com/max/800/1*B1xzRwD1QjcobyhgHaewZQ.png)

**Firewall Teknolojileri Karşılaştırması**

### 1.6. DMZ Tasarım Desenleri: Tek ve Çift Güvenlik Duvarı Mimarileri

**DMZ (Demilitarized Zone — Askerden Arındırılmış Bölge)**, bir kuruluşun iç ağı (LAN) ile dış dünya (genellikle internet) arasında konumlandırılan, güvenlik duvarları ile korunan bir ara ağ katmanıdır. Temel amacı, dışarıdan erişilmesi gereken sunucuları (web sunucusu, e-posta sunucusu gibi) iç ağdaki kritik sistemlerden izole ederek ek bir güvenlik katmanı oluşturmaktır. Bu sayede, olası bir siber saldırıda saldırganların doğrudan iç ağa sızması engellenir.

DMZ oluşturmak için temel olarak iki popüler tasarım deseni bulunmaktadır:

#### **Tek Güvenlik Duvarı (Üç Bacaklı Model — Three-Legged Model):**

Bu mimaride, en az üç ağ arayüzüne sahip tek bir güvenlik duvarı kullanılır. Her bir arayüz farklı bir ağa bağlanır:

* **Dış Bacak (External Leg):** İnternete bağlıdır.
* **İç Bacak (Internal Leg):** Kuruluşun özel iç ağına (LAN) bağlıdır.
* **DMZ Bacağı (DMZ Leg):** DMZ ağındaki sunuculara bağlıdır.

Güvenlik duvarı, bu üç bacak arasındaki trafiği önceden tanımlanmış kurallara göre yönetir. Örneğin, internetten gelen taleplerin yalnızca DMZ’deki web sunucusunun belirli portlarına (örn. HTTP için 80, HTTPS için 443) erişmesine izin verilirken, DMZ’den iç ağa doğru başlatılan bağlantılar genellikle engellenir.

![](https://cdn-images-1.medium.com/max/800/0*MY9iINeS9IzeD6mt)

Three-Legged Model

**Avantajları:**

* Daha düşük maliyetlidir.
* Kurulumu ve yönetimi daha basittir.

**Dezavantajları:**

* Tek bir güvenlik duvarı, tüm ağın güvenliği için tek bir hata noktası (single point of failure) oluşturur. Güvenlik duvarının ele geçirilmesi durumunda tüm ağ riske girer.

#### **Çift Güvenlik Duvarı Modeli (Dual-Firewall Model):**

Bu daha güvenli olan yaklaşımda, iki ayrı güvenlik duvarı kullanılır:

* **Dış Güvenlik Duvarı (Frontend Firewall):** İnternet ile DMZ arasına yerleştirilir. İnternetten gelen trafiğin yalnızca DMZ’deki sunuculara erişmesine izin verecek şekilde yapılandırılır.
* **İç Güvenlik Duvarı (Backend Firewall):** DMZ ile iç ağ arasına konumlandırılır. Bu güvenlik duvarı, iç ağdan DMZ’ye ve daha da önemlisi DMZ’den iç ağa olan erişimi çok daha sıkı kurallarla denetler. Genellikle, yalnızca iç ağdan başlatılan ve DMZ’deki sunuculara yapılan belirli isteklere izin verilir.

![](https://cdn-images-1.medium.com/max/800/0*RYT2WgTFAYQUGQ8s)

Dual-Firewall Model

**Avantajları:**

* Katmanlı bir güvenlik yaklaşımı sunar. Bir saldırganın dış güvenlik duvarını aşması durumunda, iç ağa ulaşmak için ikinci bir engelle daha karşılaşması gerekir.
* Farklı üreticilerin güvenlik duvarları kullanılarak (vendor diversity) tek bir zafiyetin her iki duvarı da etkileme olasılığı azaltılabilir.

**Dezavantajları:**

* Daha yüksek maliyetlidir.
* Yapılandırması ve yönetimi daha karmaşıktır.

### 1.7. Güvenli Sunucu Yerleşimi: Hangi Sunucular DMZ’de Olmalı?

Genel kural, dış dünyadan doğrudan bağlantı kabul etmesi gereken tüm sunucuların DMZ’ye yerleştirilmesidir. İç ağda bulunan ve hassas verileri barındıran sunucuların ise kesinlikle DMZ’de olmaması gerekir.

#### **DMZ’ye Yerleştirilmesi Yaygın Sunucu Türleri:**

* **Web Sunucuları:** Kurumun web sitesini barındıran sunuculardır ve internetten gelen ziyaretçi trafiğini karşılamalıdır.
* **E-posta Sunucuları (Mail Gateway/Relay):** Dışarıdan gelen e-postaları alan ve iç ağdaki posta sunucusuna ileten veya iç ağdan gönderilen e-postaları dış dünyaya ileten sunuculardır. Gerçek posta kutuları ve hassas e-postalar iç ağdaki sunucularda tutulmalıdır.
* **FTP Sunucuları:** Dış kullanıcılarla dosya alışverişi için kullanılan sunuculardır.
* **DNS Sunucuları (Harici):** Alan adlarını IP adreslerine çeviren ve dış dünyadan erişilebilir olması gereken DNS sunucularıdır.
* **Proxy Sunucuları (Ters Proxy — Reverse Proxy):** İnternetten gelen istekleri alıp iç ağdaki uygun uygulama sunucusuna yönlendiren ve ek bir güvenlik katmanı sağlayan sunuculardır.
* **VPN Sunucuları:** Uzaktan erişim için kullanılan VPN sonlandırma noktaları DMZ’de konumlandırılabilir.

#### **Güvenli Sunucu Yerleşimi İçin En İyi Uygulamalar:**

* **Minimum Yetki Prensibi:** DMZ’deki sunucuların iç ağa erişimi mutlak minimumda tutulmalıdır. Yalnızca gerekli olan belirli portlar ve protokoller üzerinden, belirli iç ağ sunucularına erişime izin verilmelidir. Örneğin, bir web sunucusunun iç ağdaki bir veritabanı sunucusuna yalnızca veritabanı portu üzerinden erişmesi gibi.
* **Trafik Akış Yönü:** Güvenlik duvarı kuralları, bağlantıların hangi yönde başlatılabileceğini sıkı bir şekilde kontrol etmelidir. İdeal olarak, DMZ’deki bir sunucunun iç ağa doğru yeni bir bağlantı başlatmasına asla izin verilmemelidir.
* **Veritabanı Sunucuları İç Ağda Tutulmalıdır:** Müşteri bilgileri, finansal veriler gibi hassas bilgileri içeren veritabanı sunucuları kesinlikle DMZ’ye yerleştirilmemelidir. Bu sunucular, iç ağın daha da güvenli bir segmentinde tutulmalı ve yalnızca DMZ’deki uygulama sunucularından gelen belirli isteklere yanıt vermelidir.
* **Sürekli İzleme ve Güncelleme:** DMZ’deki sunucular sürekli olarak izlenmeli, güvenlik yamaları ve güncellemeleri gecikmeden uygulanmalıdır. DMZ, saldırılara en açık bölge olduğu için bu sunucuların güvenliğinin sağlanması kritik öneme sahiptir.
* **Sertifikasyon ve Kimlik Doğrulama:** DMZ ve iç ağ arasındaki iletişimde güçlü kimlik doğrulama mekanizmaları ve şifreleme kullanılmalıdır.

Sonuç olarak, doğru tasarlanmış bir DMZ mimarisi ve dikkatli bir sunucu yerleşim stratejisi, bir kuruluşun siber güvenlik duruşunu önemli ölçüde güçlendirir. Bu, dışarıya açık hizmetler sunarken aynı zamanda içerdeki değerli varlıkları korumak için hayati bir adımdır.

---

### Bölüm 2: Web Uygulamalarının Koruyucu Kalkanı: Web Application Firewall (WAF)

Web uygulamalarının ve API’lerin iş dünyasının merkezine yerleşmesiyle, bu platformları hedef alan saldırılar da giderek artmış ve sofistike hale gelmiştir. Geleneksel ağ güvenlik duvarları (NGFW’ler dahil), genel ağ trafiğini korumada etkili olsalar da, web uygulamalarının karmaşık mantığına ve işleyişine özgü tehditleri anlamada yetersiz kalabilirler. Bu noktada, OSI modelinin 7. katmanında, özellikle HTTP ve HTTPS protokollerine odaklanarak çalışan **Web Application Firewall (WAF)** devreye girer.

### 2.1. WAF Mimarisi ve Çalışma Prensipleri: Pozitif ve Negatif Güvenlik Modelleri

Bir WAF, tipik olarak web sunucusunun önünde bir **ters proxy (reverse proxy)** olarak konumlandırılır. Bu mimaride, dış dünyadan gelen tüm kullanıcı istekleri önce WAF tarafından karşılanır, güvenlik denetiminden geçirilir ve yalnızca güvenli kabul edilen istekler arka plandaki web sunucusuna iletilir. Bu denetim, iki temel güvenlik modelinden birine veya her ikisinin birleşimine (hibrit model) dayanır :

1. **Negatif Güvenlik Modeli (Blocklisting):** Bu model, “varsayılan olarak izin ver” (default allow) ilkesiyle çalışır ve bilinen kötü niyetli kalıpları veya imzaları içeren bir engelleme listesi kullanır. Örneğin, bir WAF, SQL enjeksiyon saldırılarında sıkça kullanılan `' OR '1'='1'` gibi dizeleri veya siteler arası betik çalıştırma (XSS) saldırılarında kullanılan `<script>` etiketlerini içeren istekleri tespit edip engeller. Bu modelin uygulanması daha kolaydır ve meşru trafiği yanlışlıkla engelleme (false positive) riski daha düşüktür. Ancak en büyük zayıflığı, yalnızca bilinen saldırı türlerine karşı koruma sağlaması ve daha önce görülmemiş, yani imzası olmayan sıfır gün (zero-day) saldırılarına karşı etkisiz kalmasıdır.
2. **Pozitif Güvenlik Modeli (Allowlisting):** Bu model, “varsayılan olarak reddet” (default deny) gibi çok daha katı bir ilkeyi benimser. Sadece önceden tanımlanmış, bilinen ve meşru olan trafik desenlerine izin verir. Bu, uygulamanın tüm geçerli URL’lerini, parametrelerini, izin verilen karakter setlerini ve beklenen değer aralıklarını WAF’a “öğretmeyi” gerektirir. Bu model, tanımlanmamış her şeyi potansiyel bir tehdit olarak gördüğü için sıfır gün saldırılarına karşı doğası gereği çok daha güçlü bir koruma sağlar. Ancak, uygulama her güncellendiğinde veya yeni bir fonksiyon eklendiğinde WAF politikasının da güncellenmesini gerektirdiği için yapılandırması ve bakımı çok daha zordur ve yanlış pozitif riski daha yüksektir.

Bu iki model arasındaki seçim, bir bilgi asimetrisi ve yönetim yükü tercihidir. Negatif model, “düşmanın neye benzediğini biliyorum” varsayımına dayanırken, pozitif model “dostun neye benzediğini biliyorum” varsayımını temel alır. Güvenlik etkinliği ile operasyonel esneklik arasındaki bu denge, WAF stratejisinin temelini oluşturur.

### 2.2. OWASP Top 10 Tehditlerine Karşı Proaktif Savunma Mekanizmaları

WAF’ların en temel ve kritik görevlerinden biri, Open Web Application Security Project (OWASP) tarafından düzenli olarak yayınlanan en kritik 10 web uygulama zafiyetine karşı koruma sağlamaktır. WAF’lar, bu yaygın saldırı vektörlerini hedef alan özelleşmiş denetim mekanizmalarına sahiptir :

* **A03:2021 — Injection:** Bu kategori, SQL, NoSQL, OS komutu ve LDAP enjeksiyonu gibi saldırıları içerir. Bir WAF, HTTP isteklerinin gövdesini, başlıklarını ve URL parametrelerini analiz ederek, veritabanı sorgularını veya işletim sistemi komutlarını manipüle etmeye yönelik zararlı karakterleri (örneğin, tek tırnak, noktalı virgül, tire) ve kalıpları tespit eder. Örneğin, `username=admin'--` gibi bir girdiyi, bir SQL sorgusunun mantığını bozmaya yönelik bir girişim olarak algılayıp engeller. Benzer şekilde, Siteler Arası Betik Çalıştırma (XSS) saldırılarına karşı, kullanıcı girdilerinde `<script>`, `onerror`, `onload` gibi tehlikeli HTML etiketlerini ve JavaScript olaylarını filtreler.
* **A01:2021 — Broken Access Control (Bozuk Erişim Kontrolü):** Bu zafiyet, kullanıcıların yetkileri dışındaki verilere veya fonksiyonlara erişebilmesi durumunda ortaya çıkar. Bir WAF, kullanıcı oturumlarını ve rollerini takip ederek bu tür zafiyetlere karşı koruma sağlayabilir. Örneğin, bir kullanıcının URL’yi manuel olarak değiştirerek (`/view?invoice_id=123` yerine `/view?invoice_id=124` yazarak) başka bir kullanıcının faturasına erişmeye çalışmasını (Insecure Direct Object References - IDOR) tespit edebilir. WAF, `invoice_id=124`'ün o anki oturuma ait kullanıcıyla ilişkili olup olmadığını kontrol eden kurallarla bu tür yetkisiz erişimleri engelleyebilir.

### 2.3. Otomatize Tehditlerle Mücadele: Gelişmiş Bot Yönetimi ve Rate Limiting

Günümüz web trafiğinin önemli bir bölümü, insan kullanıcılar yerine otomatik yazılımlar olan **botlar** tarafından oluşturulmaktadır. Bu botlar, arama motorlarının siteleri indekslemesi gibi meşru amaçlarla kullanılabileceği gibi, web sitelerinden veri kazıma (web scraping), kimlik bilgisi doldurma (credential stuffing), envanter tüketme ve uygulama katmanı hizmet reddi (DDoS) saldırıları gibi kötü niyetli amaçlarla da kullanılabilir.

Modern WAF’lar, bu otomatize tehditlerle mücadele etmek için gelişmiş **bot yönetimi (bot management)** yetenekleri sunar. Bu yetenekler, basit IP engellemenin ötesine geçerek çok katmanlı bir tespit mekanizması kullanır:

* **İmza ve İtibar Analizi:** Bilinen iyi botları (Googlebot gibi) ve kötü botları IP adresleri, User-Agent dizeleri ve davranışsal imzaları aracılığıyla tanır.
* **Davranışsal Analiz:** Bir istemcinin fare hareketleri, sayfa gezinme hızı ve istekler arasındaki zamanlama gibi davranışlarını analiz ederek insan ile bot arasında ayrım yapar.
* **Cihaz Parmak İzi (Device Fingerprinting):** Tarayıcı türü, sürümü, kurulu eklentiler ve ekran çözünürlüğü gibi bilgileri toplayarak her bir istemci için benzersiz bir parmak izi oluşturur ve bu izi takip eder.
* **Meydan Okuma (Challenge) Mekanizmaları:** Şüpheli görülen trafiğe CAPTCHA gibi testler sunarak insan doğrulamasını zorunlu kılar.

**Rate Limiting (Hız Sınırlama)**, özellikle kaba kuvvet (brute-force) saldırıları ve uygulama katmanı DDoS saldırılarına karşı kullanılan bir diğer kritik WAF özelliğidir. Bu mekanizma, belirli bir zaman aralığında tek bir kaynaktan (genellikle IP adresi, ancak oturum kimliği veya API anahtarı gibi daha granüler tanımlayıcılar da olabilir) gelen istek sayısını sınırlar. Örneğin, bir giriş (login) sayfası için “her IP adresinden dakikada en fazla 10 istek” gibi bir kural tanımlanabilir. Bu eşiği aşan sonraki istekler, belirli bir süre boyunca engellenir (mitigation timeout) veya yavaşlatılır (throttling). Bu, otomatize saldırı araçlarının saniyede yüzlerce veya binlerce deneme yapmasını etkili bir şekilde önler.

### 2.4. Hassas Ayar (Tuning) Sanatı: Yanlış Pozitif (False Positive) Oranını Minimize Etme Stratejileri

Bir WAF’ın en büyük operasyonel zorluklarından biri, meşru ve geçerli kullanıcı trafiğini yanlışlıkla saldırı olarak tanımlamasıdır. Bu durum **yanlış pozitif (false positive)** olarak adlandırılır ve hem son kullanıcı deneyimini olumsuz etkiler (meşru işlemlerin engellenmesi) hem de güvenlik ekipleri için **alarm yorgunluğuna (alert fatigue)** yol açar.

Bu sorunu çözmek için WAF politikalarının, koruduğu spesifik uygulamaya göre **hassas ayarlanması (tuning)** gerekir. Bu, sürekli ve döngüsel bir süreçtir. OWASP Core Rule Set (CRS) gibi standart kural setleri, genel bir koruma sağlasa da her uygulama için özelleştirilmelidir. Tuning süreci genellikle şu adımları içerir :

1. **Gözlem Modu:** WAF, başlangıçta trafiği engellemek yerine sadece loglama ve uyarı üretme modunda çalıştırılır.
2. **Analiz:** Belirli bir süre boyunca toplanan loglar incelenerek, hangi kuralların hangi meşru istekler için yanlışlıkla tetiklendiği tespit edilir.
3. **İstisna (Exclusion) Oluşturma:** Yanlış pozitiflere neden olan kurallar tamamen devre dışı bırakmak yerine, bu kurallar için istisnalar tanımlanır. Örneğin, belirli bir URL yolunda, belirli bir parametrede veya belirli bir kaynak IP adresinden gelen istekler için spesifik bir kuralın atlanması sağlanabilir. Bu, güvenliği tehlikeye atmadan meşru trafiğe izin vermenin en etkili yoludur.
4. **Engelleme Moduna Geçiş:** Yanlış pozitif oranı kabul edilebilir bir seviyeye indirildikten sonra WAF, aktif engelleme moduna alınır ve süreç düzenli olarak tekrarlanır.

Doğrudan kural dosyalarını değiştirmek, gelecekteki güncellemelerde yapılan özelleştirmelerin kaybolmasına neden olacağı için kesinlikle önerilmez. Bunun yerine, WAF platformlarının sunduğu istisna mekanizmaları kullanılmalıdır.

---

### Bölüm 3: Ağ Trafiğindeki Anormalliklerin Tespiti: Saldırı Tespit ve Önleme Sistemleri (IDS/IPS)

Ağ trafiğini derinlemesine analiz ederek kötü niyetli aktiviteleri ve politika ihlallerini tespit etmek amacıyla tasarlanan Saldırı Tespit Sistemleri (Intrusion Detection Systems — IDS) ve Saldırı Önleme Sistemleri (Intrusion Prevention Systems — IPS), modern siber savunma mimarilerinin kritik bileşenleridir. IDS, pasif bir izleme ve uyarı mekanizmasıyken (out-of-band), IPS aktif bir şekilde trafiğin içinde yer alarak (in-line) tehditleri tespit ettiği anda engelleme yeteneğine sahiptir.

### 3.1. Tespit Metodolojilerinin Derinlemesine İncelenmesi: İmza, Anomali ve Davranış Analizi

IDS/IPS sistemleri, tehditleri tespit etmek için temel olarak üç farklı metodoloji kullanır. Bu metodolojilerin her birinin kendine özgü avantajları ve dezavantajları vardır:

1. **İmza Tabanlı Tespit (Signature-based Detection):** Bu yöntem, bilinen saldırıların, zararlı yazılımların veya zafiyet istismarlarının ağ trafiğinde bıraktığı benzersiz desenleri (imzaları) arar. Tıpkı bir antivirüs yazılımının bilinen virüsleri imzalarıyla tanıması gibi, IDS/IPS de gelen/giden paketleri geniş bir saldırı imzası veritabanıyla karşılaştırır. Bir eşleşme bulunduğunda, bir uyarı üretilir (IDS) veya paket engellenir (IPS). Bu yöntem, bilinen tehditlere karşı son derece hızlı ve etkilidir ve yanlış pozitif oranı düşüktür. Ancak en büyük zayıflığı, daha önce hiç görülmemiş, yani imzası henüz oluşturulmamış **sıfır gün (zero-day)** saldırılarına karşı tamamen kör olmasıdır.
2. **Anomali Tabanlı Tespit (Anomaly-based Detection):** Bu yaklaşım, belirli bir saldırı imzası aramak yerine, ağın “normal” davranışını öğrenir ve bu normalden sapmaları potansiyel bir tehdit olarak işaretler. Sistem, belirli bir süre boyunca ağ trafiği metriklerini (örneğin, bant genişliği kullanımı, kullanılan protokoller, bağlantı sayıları) gözlemleyerek bir **temel profil (baseline)** oluşturur. Bu temel profilden istatistiksel olarak anlamlı bir sapma tespit edildiğinde (örneğin, gece yarısı beklenmedik bir FTP trafiği artışı), bir anomali uyarısı tetiklenir. Bu yöntemin en büyük avantajı, imzası olmayan yeni ve bilinmeyen saldırıları tespit etme potansiyelidir. Ancak, meşru ama beklenmedik ağ aktivitelerini (örneğin, yeni bir uygulamanın devreye alınması) de anomali olarak işaretleyebileceği için **yüksek yanlış pozitif (false positive)** oranına sahip olma eğilimindedir.
3. **Davranışsal Analiz (Behavioral Analysis):** Bu, anomali tabanlı tespitin daha gelişmiş bir formudur. Sadece trafik hacmi gibi istatistiksel sapmalara odaklanmak yerine, protokollerin ve uygulamaların davranışsal mantığını analiz eder. Örneğin, bir DNS sunucusunun normalde yapmaması gereken bir şekilde dışarıya doğru büyük miktarda veri transferi yapması veya bir web sunucusunun bir komut satırı (shell) başlatmaya çalışması gibi protokol ihlallerini veya beklenmedik eylem dizilerini tespit eder. Bu yöntem, daha fazla bağlam bilgisi kullandığı için anomali tabanlı tespitten daha isabetli sonuçlar üretebilir.

![](https://cdn-images-1.medium.com/max/800/1*PjPS0Bfp8Mb94zqFwP74Dw.png)

**IDS/IPS Tespit Yöntemleri Karşılaştırması**

### 3.2. Açık Kaynak IDS/IPS Motorlarının Mimarisi: Snort, Suricata ve Zeek (Bro) Karşılaştırması

Açık kaynak topluluğu, IDS/IPS alanında son derece yetenekli ve yaygın olarak kullanılan araçlar geliştirmiştir. Bu araçlar, ticari çözümlere güçlü alternatifler sunar ve farklı mimari yaklaşımları temsil ederler:

#### **Snort**

1998'de geliştirilen Snort, dünyanın en yaygın kullanılan NIDS/IPS’idir ve endüstri standardı haline gelmiştir. Mimarisi temel olarak üç bileşenden oluşur:

* **Paket Çözücü (Packet Decoder)**, ağdan gelen ham paketleri analiz için hazırlar; **Tespit Motoru (Detection Engine)**, bu paketleri tanımlı kurallara göre analiz eder; ve **Loglama/Uyarı Alt Sistemi**, tespit edilen olayları kaydeder veya uyarı üretir. Snort, kural tabanlı bir sistemdir ve geleneksel olarak
* **tek iş parçacıklı (single-threaded)** bir mimariye sahiptir. Bu, tüm işlemlerin tek bir CPU çekirdeği üzerinde sıralı olarak yapılması anlamına gelir ve bu durum, yüksek hızlı modern ağlarda performans darboğazlarına neden olabilir.

#### **Suricata**

Snort’un performans sınırlamalarına bir yanıt olarak geliştirilen Suricata, en önemli mimari farkı olan **çoklu iş parçacıklı (multi-threaded)** yapısıyla öne çıkar. Bu mimari, Suricata’nın modern çok çekirdekli işlemcilerin gücünden tam olarak yararlanmasını sağlar. Gelen paketleri farklı iş parçacıklarına dağıtarak paralel işleme yapar, bu da çok daha yüksek trafik hacimlerini paket kaybı olmadan analiz etmesine olanak tanır. Ayrıca, Suricata’nın

* **otomatik protokol tespiti** yeteneği vardır. Snort gibi trafiği port numarasına göre (örn. 80 portu HTTP’dir) sınıflandırmak yerine, Suricata paket içeriğini analiz ederek protokolü kendisi tanır. Bu, standart dışı portlarda çalışan kötü amaçlı yazılım trafiğini tespit etmede önemli bir avantaj sağlar.

#### **Zeek (eski adıyla Bro)**

Zeek, geleneksel imza tabanlı IDS/IPS’lerden temelde farklı bir felsefeye sahiptir. O, bir saldırı tespit aracından çok, bir **ağ analiz çerçevesidir (Network Analysis Framework)**. Zeek’in mimarisi iki ana katmandan oluşur:

* **Olay Motoru (Event Engine)** ve **Betik Yorumlayıcısı (Script Interpreter)**. Olay motoru, ham ağ trafiğini yakalar ve onu yüksek seviyeli, anlamlı **olaylara** dönüştürür; örneğin, `http_request`, `dns_query`, `ssl_certificate` veya `new_connection` gibi. Bu olaylar daha sonra, esnek ve güçlü bir betik diliyle yazılmış politikaları yürüten betik yorumlayıcısına gönderilir. Sonuç olarak Zeek, basit "uyarı" mesajları yerine, ağda gerçekleşen her aktiviteye dair son derece zengin, bağlamsal ve yapılandırılmış loglar (örneğin, `conn.log`, `http.log`, `dns.log`, `files.log`) üretir.

Bu mimari fark, tespit araçlarının evriminde önemli bir adımı temsil eder. Snort ve Suricata gibi sistemler, “Bilinen bir kötü olay (imza) gerçekleşti mi?” sorusuna odaklanırken, Zeek, “Ağımda tam olarak ne tür aktiviteler (olaylar) yaşanıyor?” sorusuna yanıt arar. Bu, güvenlik analizini reaktif alarm takibinden, bir olayın tüm bağlamını ve potansiyel nedenlerini anlamaya yönelik proaktif **tehdit avcılığına (threat hunting)** dönüştürür.

### 3.3. Olay Yönetimi ve Alarm Korelasyonu: Sinyal-Gürültü Oranını İyileştirme

Yüksek hacimli ağlarda, IDS/IPS sistemleri günde on binlerce, hatta milyonlarca uyarı üretebilir. Bu uyarıların büyük bir kısmı yanlış pozitif veya düşük öncelikli olaylar olabilir. Bu durum, güvenlik analistleri için **alarm yorgunluğu (alert fatigue)** adı verilen ciddi bir operasyonel soruna yol açar. Bu gürültü içinde gerçek ve önemli tehdit sinyallerini ayırt etmek imkansız hale gelebilir.

Bu sorunu çözmek için IDS/IPS’ten gelen uyarıların merkezi bir **SIEM** platformuna gönderilmesi ve burada diğer güvenlik sistemlerinden (firewall, proxy, endpoint vb.) gelen loglarla birleştirilmesi esastır. SIEM, **olay korelasyonu** adı verilen bir teknik kullanarak farklı kaynaklardan gelen, tek başlarına anlamsız görünen olayları ilişkilendirerek daha büyük bir saldırı zincirini ortaya çıkarabilir. Örneğin, bir SIEM korelasyon kuralı şu şekilde bir senaryoyu tespit edebilir :

1. **Olay A:** IDS, dışarıdan gelen bir IP adresinin (`1.2.3.4`) iç ağdaki bir sunucuyu (`10.0.0.5`) taradığını belirten bir "Port Taraması" uyarısı üretir.
2. **Olay B:** Birkaç dakika sonra, firewall logları aynı kaynak IP’den (`1.2.3.4`) aynı hedef sunucuya (`10.0.0.5`) yönelik çok sayıda engellenmiş bağlantı denemesi kaydeder.
3. **Olay C:** Kısa bir süre sonra, IPS, yine aynı kaynak ve hedefe yönelik, bilinen bir web sunucusu zafiyetini (örneğin, Apache Struts) istismar etmeye çalışan bir saldırı imzasını tespit eder ve engeller.

Bu üç olay tek tek ele alındığında farklı seviyelerde risk taşısa da, SIEM tarafından birleştirildiğinde, bir saldırganın keşif, deneme ve istismar aşamalarından oluşan çok adımlı bir saldırı girişiminde bulunduğunu net bir şekilde gösterir.

### 3.4. Yanlış Pozitif ve Yanlış Negatif Dengesi: Tespit Etkinliğini Optimize Etme

IDS/IPS sistemlerinin etkinliği, iki tür hata arasındaki dengeyi ne kadar iyi yönettiğine bağlıdır:

* **Yanlış Pozitif (False Positive):** Meşru bir ağ aktivitesinin yanlışlıkla kötü niyetli olarak işaretlenmesi. Bu durum, gereksiz alarmlara ve IPS sistemlerinde meşru trafiğin engellenmesine yol açarak iş süreçlerini kesintiye uğratabilir.
* **Yanlış Negatif (False Negative):** Gerçek bir saldırının tespit edilemeden ağdan geçmesi. Bu, en tehlikeli durumdur çünkü güvenlik sisteminin başarısız olduğu ve bir ihlalin gerçekleşmiş olabileceği anlamına gelir.

Bu iki hata türü arasında genellikle ters bir ilişki vardır. Sistemi daha hassas hale getirmek (daha fazla kuralı etkinleştirmek, anomali eşiklerini düşürmek) yanlış negatifleri azaltma eğilimindeyken, yanlış pozitifleri artırır. Tersi durumda, yanlış pozitifleri azaltmak için sistemi daha az hassas hale getirmek, gerçek saldırıları kaçırma riskini (yanlış negatif) artırır.

Bu dengeyi optimize etmek, sürekli bir **ayar (tuning)** süreci gerektirir. Bu süreç, organizasyonun özel ağ ortamına ve risk iştahına göre kural setlerini özelleştirmeyi, anomali tabanlı sistemler için temel profilleri (baseline) düzenli olarak güncellemeyi ve harici tehdit istihbaratı gibi bağlamsal verileri kullanarak alarmları zenginleştirmeyi içerir.

---

### Bölüm 4: Güvenli İletişim Tünelleri: Sanal Özel Ağlar (VPN)

Sanal Özel Ağlar (VPN), güvenli olmayan genel ağlar (örneğin, internet) üzerinden özel bir ağa güvenli bir şekilde erişim sağlamak için kullanılan teknolojilerdir. VPN’ler, verileri şifreleyerek ve kimlik doğrulaması yaparak gizlilik, bütünlük ve erişim kontrolü sağlar. Temel olarak iki farklı protokol ailesi üzerine inşa edilmişlerdir: IPSec ve SSL/TLS.

### 4.1. IPSec Protokol Ailesi: AH ve ESP’nin Kriptografik Analizi, Tünel ve Taşıma Modları

**Internet Protocol Security (IPSec)**, OSI modelinin 3. katmanı olan Ağ Katmanı’nda çalışan ve IP paketleri için güvenlik sağlayan bir protokoller bütünüdür. Bu, IPSec’in üzerinde çalışan tüm uygulama ve protokollerden (TCP, UDP, HTTP vb.) şeffaf bir şekilde koruma sağladığı anlamına gelir. IPSec, iki ana güvenlik protokolü kullanır:

1. **Authentication Header (AH):** RFC 2402'de tanımlanan AH, **bağlantısız veri bütünlüğü**, **veri kaynağı kimlik doğrulaması** ve **tekrar oynatma (replay) saldırılarına karşı koruma** sağlar. Bunu, paketin içeriği ve IP başlığının değişmeyen kısımları üzerinden hesaplanan bir HMAC (Hash-based Message Authentication Code) değeri ile yapar. Ancak AH, veri gizliliği, yani **şifreleme sağlamaz**.
2. **Encapsulating Security Payload (ESP):** RFC 4303'te tanımlanan ESP, AH’nin sağladığı tüm güvenlik hizmetlerine ek olarak **veri gizliliği (şifreleme)** de sunar. ESP, hem şifreleme hem de kimlik doğrulama, sadece şifreleme veya sadece kimlik doğrulama modlarında çalışabilir, ancak şifrelemenin kimlik doğrulama olmadan kullanılması kesinlikle önerilmez.

Bu protokoller, iki farklı modda uygulanabilir:

* **Taşıma Modu (Transport Mode):** Bu modda, güvenlik protokolü (AH veya ESP) orijinal IP başlığı ile IP yükü (payload) arasına eklenir. Sadece IP yükü (yani Taşıma Katmanı segmenti) korunur, orijinal IP başlığına dokunulmaz. Bu mod, daha az başlık bilgisi (overhead) eklediği için daha verimlidir ve genellikle iki uç nokta (host-to-host) arasındaki iletişimi güvence altına almak için kullanılır.
* **Tünel Modu (Tunnel Mode):** Bu modda, orijinal IP paketinin tamamı (başlık ve yük) şifrelenir ve/veya kimliği doğrulanır. Ardından bu korunan paket, yeni bir dış IP başlığı ile tamamen kapsüllenir. Bu mod, genellikle iki ağ geçidi (örneğin, iki ofis router’ı) arasında güvenli bir tünel oluşturmak (site-to-site VPN) veya uzaktaki bir kullanıcının kurumsal ağa bağlanması (remote access VPN) için kullanılır.

### 4.2. SSL/TLS Tabanlı VPN Çözümleri: Mimarisi ve IPSec ile Karşılaştırmalı Analizi

**SSL/TLS VPN’ler**, adından da anlaşılacağı gibi, web trafiğini güvence altına almak için geliştirilen Secure Sockets Layer (SSL) ve onun halefi Transport Layer Security (TLS) protokollerini kullanır. IPSec’in aksine, SSL/TLS VPN’ler OSI modelinin daha üst katmanlarında, genellikle Uygulama Katmanı’nda (Layer 7) çalışır.

Bu mimari fark, iki teknoloji arasında önemli işlevsel ayrımlara yol açar:

* **Erişim Granülerliği:** IPSec, Ağ Katmanı’nda çalıştığı için bir istemciye bağlandığında ona tüm ağa tam erişim sağlar. Bu, “her şey ya da hiçbir şey” yaklaşımıdır. SSL/TLS VPN ise Uygulama Katmanı’nda çalıştığı için çok daha granüler erişim kontrolü sunar. Yöneticiler, kullanıcılara tüm ağ yerine yalnızca belirli web uygulamalarına veya dosya paylaşımlarına erişim izni verebilir.
* **İstemci Yazılımı:** IPSec VPN’ler genellikle istemci cihazlara özel bir VPN yazılımının kurulmasını gerektirir. SSL/TLS VPN’ler ise genellikle standart bir web tarayıcısı üzerinden çalıştığı için istemci tarafında ek bir yazılım kurulumuna ihtiyaç duymaz (clientless VPN), bu da dağıtımı ve kullanımı kolaylaştırır.
* **Ağ Uyumluluğu:** IPSec, belirli protokoller (ESP için protokol 50, AH için 51) ve portlar (IKE için UDP 500) kullandığından, kısıtlayıcı firewall’lar veya NAT (Network Address Translation) cihazları tarafından engellenebilir. SSL/TLS VPN ise standart HTTPS trafiği (TCP port 443) gibi göründüğü için bu tür ağ engellerini daha kolay aşar.

### 4.3. Modern Bir Alternatif: WireGuard Protokolünün Mimarisi ve Kriptografik Avantajları

IPSec ve OpenVPN gibi eski ve karmaşık protokollere modern bir alternatif olarak geliştirilen **WireGuard**, basitlik, yüksek performans ve güçlü güvenlik özellikleriyle öne çıkmaktadır. WireGuard, kasıtlı olarak küçük bir kod tabanına (yaklaşık 4,000 satır C kodu) sahip olacak şekilde tasarlanmıştır, bu da onu denetlemeyi ve güvenlik açıklarını bulmayı çok daha kolay hale getirir.

Mimarisi, işletim sistemi çekirdeğinde (kernel) çalışan sanal bir ağ arayüzü (örneğin, `wg0`) oluşturmaya dayanır. Bu, standart işletim sistemi ağ araçları (`ip`, `ifconfig` vb.) ile kolayca yapılandırılıp yönetilebilmesini sağlar. WireGuard, kriptografi alanındaki en son gelişmelerden yararlanır ve "Crypto-Agility" (farklı şifreleme algoritmaları arasında pazarlık yapma) kavramını reddederek, mevcut en güçlü ve modern kabul edilen tek bir algoritma setini kullanır. Bu set, şifreleme için **ChaCha20**, mesaj kimlik doğrulaması için **Poly1305**, anahtar değişimi için **Curve25519** (eliptik eğri Diffie-Hellman), ve hashing için **BLAKE2s**'i içerir. Bu yaklaşım, yanlış yapılandırma riskini ortadan kaldırır ve varsayılan olarak güçlü bir güvenlik duruşu sağlar.

### 4.4. Gelişmiş VPN Konfigürasyonları: Always-On VPN, Split Tunneling ve NAT Traversal

#### **Always-On VPN**

Özellikle kurumsal mobil ve uzaktan çalışanlar için tasarlanmış bir özelliktir. Cihaz internete bağlandığı anda, kullanıcı müdahalesi olmadan otomatik olarak güvenli bir VPN tüneli kurar ve bu bağlantıyı sürekli aktif tutar. Bu, verilerin her zaman şifreli bir tünel üzerinden iletilmesini garanti altına alır. Genellikle iki tür tünel kullanılır:

* **Cihaz Tüneli (Device Tunnel)**, kullanıcı oturum açmadan önce cihazın kendisini doğrular ve yönetim sunucularına (Active Directory, SCCM vb.) erişim sağlar; **Kullanıcı Tüneli (User Tunnel)** ise kullanıcı oturum açtıktan sonra kurulur ve kurumsal kaynaklara erişim sağlar.

#### **Split Tunneling**

Bir VPN kullanıcısının trafiğini ikiye bölen bir tekniktir. Kurumsal kaynaklara yönelik trafik şifreli VPN tüneli üzerinden gönderilirken, genel internet trafiği (örneğin, video akışı, sosyal medya) doğrudan kullanıcının yerel internet bağlantısı üzerinden yönlendirilir. Bu, VPN sunucusu üzerindeki yükü ve bant genişliği tüketimini azaltarak performansı artırır. Ancak, ciddi güvenlik riskleri barındırır. Tünel dışına çıkan trafik, kurumun güvenlik politikalarından (URL filtreleme, IPS, DLP vb.) ve izleme mekanizmalarından kaçmış olur. Bu durum, kullanıcının cihazının internetten bir zararlı yazılım kapmasına ve ardından bu zararlı yazılımın VPN tüneli üzerinden kurumsal ağa sızmasına olanak tanıyan bir “arka kapı” oluşturabilir.

#### **NAT Traversal (NAT-T)**

IPSec, paketlerin bütünlüğünü doğrulamak için IP başlıklarını kullandığından, NAT cihazları tarafından kaynak IP adresinin veya portunun değiştirilmesi kimlik doğrulama sürecini bozar. **NAT Traversal**, bu sorunu çözmek için geliştirilmiş bir mekanizmadır. NAT-T, IPSec (özellikle ESP) paketlerini bir UDP başlığı içine kapsüller. Bu UDP paketleri genellikle 4500 portunu kullanır. NAT cihazları bu UDP paketlerinin port bilgisini değiştirerek yönlendirme yapsa bile, içindeki orijinal ESP paketi bozulmadan kalır ve hedefteki VPN ağ geçidi tarafından doğru bir şekilde işlenebilir.

![](https://cdn-images-1.medium.com/max/800/1*qcfN3w9nucr_-rFUjvihHg.png)

**VPN Protokolleri Karşılaştırması**

---

### Bölüm 5: Güvenlik Operasyonlarının Merkezi Sinir Sistemi: SIEM ve SOAR

Modern siber güvenlik operasyonları, büyük miktarda verinin toplanması, anlamlandırılması ve bu verilere dayalı olarak hızlı ve etkili kararlar alınması üzerine kuruludur. Bu sürecin merkezinde, Güvenlik Bilgi ve Olay Yönetimi (SIEM) ve Güvenlik Orkestrasyonu, Otomasyonu ve Müdahalesi (SOAR) platformları yer alır. Bu iki teknoloji, bir güvenlik operasyon merkezinin (SOC) beyni ve sinir sistemi gibi çalışır.

### 5.1. SIEM Mimarisi: Log Toplama, Normalizasyon, Korelasyon ve Anomali Tespiti

Bir **SIEM** platformunun temel amacı, bir kuruluşun tüm IT altyapısından (ağ cihazları, sunucular, uç noktalar, uygulamalar, bulut servisleri vb.) gelen log verilerini ve olayları tek bir merkezi noktada toplamaktır. Bu, güvenlik ekiplerine tüm ortam üzerinde bütünsel bir görünürlük sağlar. SIEM’in iş akışı genellikle şu adımlardan oluşur:

1. **Log Toplama (Collection/Aggregation):** Farklı kaynaklardan üretilen loglar, ajanlar (agents) aracılığıyla veya Syslog gibi standart protokoller kullanılarak SIEM platformuna güvenli bir şekilde iletilir.
2. **Normalizasyon ve Ayrıştırma (Normalization & Parsing):** Ham log verileri, farklı cihazlar ve uygulamalar tarafından farklı formatlarda üretilir. Normalizasyon, bu heterojen verileri analiz edilebilir, ortak ve yapılandırılmış bir formata dönüştürme işlemidir. Örneğin, farklı sistemlerdeki zaman damgaları evrensel bir formata (UTC) çevrilir, “login failed”, “authentication error”, “user logon failure” gibi farklı ifadeler tek bir standart olay kimliğine (`Failed_Logon`) eşlenir.
3. **Korelasyon (Correlation):** Bu, SIEM’in en güçlü yeteneğidir. Korelasyon motoru, normalleştirilmiş veriler üzerinde önceden tanımlanmış kurallar çalıştırarak, tek başlarına şüpheli görünmeyen ancak bir araya geldiklerinde kötü niyetli bir aktiviteye işaret eden olaylar zincirini tespit eder. Örneğin, bir korelasyon kuralı, “bir kullanıcıdan 5 dakika içinde 10'dan fazla başarısız oturum açma denemesi gelmesi ve ardından aynı IP’den başarılı bir oturum açılması” durumunu bir kaba kuvvet saldırısı olarak işaretleyebilir.
4. **Uyarı (Alerting) ve Raporlama:** Bir korelasyon kuralı tetiklendiğinde, SIEM bir uyarı (alert) oluşturur ve bunu güvenlik analistlerinin incelemesi için bir arayüze (dashboard) yansıtır. Ayrıca, uyumluluk (compliance) denetimleri ve yönetim için düzenli raporlar üretir.

### 5.2. SOAR ile Otonom Savunma: Orkestrasyon, Otomasyon ve Otomatik Olay Müdahalesi (Playbook’lar)

SIEM, tehditleri tespit etme ve uyarı üretme konusunda mükemmel olsa da, bu uyarılara müdahale etme süreci genellikle manuel ve zaman alıcıdır. Bir analistin, bir uyarıyı doğrulamak, bağlamını anlamak ve müdahale etmek için birden fazla güvenlik aracı arasında geçiş yapması gerekebilir. **SOAR** platformları, bu müdahale sürecini otomatize ederek ve kolaylaştırarak SIEM’in yeteneklerini bir sonraki seviyeye taşır. SOAR, üç temel kavram üzerine kuruludur:

1. **Orkestrasyon (Orchestration):** Farklı güvenlik araçlarının (SIEM, firewall, EDR, tehdit istihbaratı platformu vb.) API’ler aracılığıyla birbiriyle konuşmasını ve entegre bir şekilde çalışmasını sağlar. Bu, analistlerin tek bir konsoldan tüm araçları yönetebilmesine olanak tanır.
2. **Otomasyon (Automation):** Tekrarlayan, düşük seviyeli ve manuel görevlerin makineler tarafından otomatik olarak gerçekleştirilmesidir. Örneğin, bir IP adresinin itibarını kontrol etme, bir dosya hash’ini sandbox’a gönderme veya bir destek bileti açma gibi işlemler otomatize edilebilir.
3. **Müdahale (Response) ve Playbook’lar:** SOAR’ın kalbi **playbook**’lardır. Bir playbook, belirli bir güvenlik olayı türü (örneğin, phishing e-postası, zararlı yazılım tespiti) için önceden tanımlanmış, adım adım bir iş akışıdır. Bu adımlar hem otomatik görevleri (örneğin, “E-postadaki URL’yi tehdit istihbaratı veritabanında kontrol et”) hem de manuel adımları (örneğin, “Analist, URL’nin kötü niyetli olduğunu onaylarsa devam et”) içerebilir. Bir SIEM uyarısı playbook’u tetiklediğinde, SOAR platformu tanımlı adımları otomatik olarak yürüterek müdahale sürecini saniyeler veya dakikalar içinde tamamlayabilir.

### 5.3. Platform Karşılaştırması: Önde Gelen SIEM ve SOAR Çözümlerinin Mimarileri ve Yetenekleri

SIEM ve SOAR, birbirinin yerine geçen değil, birbirini tamamlayan teknolojilerdir. SIEM “tespit” ve “analiz” odaklıyken, SOAR “müdahale” ve “otomasyon” odaklıdır. Bir SOC’nin olgunluk yolculuğunda genellikle önce sağlam bir SIEM altyapısı kurulur, ardından operasyonel verimliliği artırmak için SOAR yetenekleri eklenir.

Piyasada bu hizmetleri sunan birçok platform bulunmaktadır ve her birinin farklı mimari yaklaşımları vardır:

* **Splunk:** Genellikle büyük ölçekli, şirket içi (on-premise) dağıtımlar için güçlü bir seçenek olarak kabul edilir. Esnek veri alımı ve güçlü arama dili (SPL) ile bilinir. Ancak, lisanslama modeli genellikle veri hacmine dayalı olduğu için maliyetli olabilir.
* **IBM QRadar:** Köklü ve olgun bir SIEM platformudur. Özellikle kural tabanlı korelasyon ve uyumluluk raporlaması konularında güçlüdür. Genellikle Splunk’a göre daha uygun maliyetli bir seçenek olarak görülür, ancak arayüzü bazı kullanıcılar tarafından daha eski olarak değerlendirilebilir.
* **Microsoft Sentinel:** Bulut tabanlı (cloud-native) bir SIEM ve SOAR çözümüdür. Özellikle Azure bulut hizmetleriyle derin entegrasyonu ve yapay zeka destekli analiz yetenekleri ile öne çıkar. Altyapı yönetimi gerektirmediği ve ölçeklenebilir olduğu için modern bulut ortamları için popüler bir seçenektir.

![](https://cdn-images-1.medium.com/max/800/1*pGGWBXfh3FmW4dBdnSiGIA.png)

**SIEM ve SOAR Arasındaki Temel Farklar**

---

### Bölüm 6: Ağa Erişimde Sıfır Güven: Ağ Erişim Kontrolü (NAC)

Ağ Erişim Kontrolü (Network Access Control — NAC), bir ağa bağlanan cihazların ve kullanıcıların kimliğini doğrulayan ve bu cihazların önceden tanımlanmış güvenlik politikalarına uygunluğunu denetleyen bir güvenlik yaklaşımıdır. NAC’ın temel amacı, yalnızca yetkili ve “sağlıklı” cihazların ağ kaynaklarına erişmesini sağlayarak saldırı yüzeyini azaltmaktır. Bu, Sıfır Güven mimarisinin “asla güvenme, her zaman doğrula” ilkesinin ağa ilk giriş noktasında uygulanmasıdır.

### 6.1. Cihaz Güvenlik Durumu Değerlendirmesi (Posture Assessment): Kriterler ve Politikalar

NAC’ın en temel yeteneklerinden biri, ağa bağlanmaya çalışan her bir cihaz için **duruş değerlendirmesi (posture assessment)** yapmasıdır. Bu süreç, cihazın kurumsal güvenlik standartlarını karşılayıp karşılamadığını kontrol eden bir dizi denetimden oluşur. Bu denetimler sırasında kontrol edilen yaygın kriterler şunlardır :

* **Antivirüs/Antimalware Durumu:** Cihazda kurumsal standartlara uygun bir antivirüs yazılımının kurulu olup olmadığı, çalışır durumda olup olmadığı ve imza veritabanının güncel olup olmadığı kontrol edilir.
* **İşletim Sistemi ve Yama Seviyesi:** Cihazın işletim sisteminin güncel olup olmadığı ve kritik güvenlik yamalarının yüklenip yüklenmediği doğrulanır.
* **Güvenlik Duvarı Durumu:** Cihazın yerel güvenlik duvarının etkin olup olmadığı denetlenir.
* **Yazılım Varlığı:** Cihazda yetkisiz veya yasaklanmış yazılımların (örneğin, P2P dosya paylaşım uygulamaları) bulunup bulunmadığı kontrol edilebilir.
* **Disk Şifrelemesi:** Hassas verilerin korunması için cihazın sabit diskinin şifrelenmiş olup olmadığı doğrulanabilir.

Bu denetimlerin sonucuna göre, cihaz **uyumlu (compliant)** veya **uyumsuz (non-compliant)** olarak sınıflandırılır. Uyumsuz cihazlar için NAC çözümleri çeşitli eylemler uygulayabilir :

* **Karantinaya Alma (Quarantine):** Cihaz, ağın geri kalanından yalıtılmış, sınırlı erişime sahip bir ağ segmentine (VLAN) yerleştirilir.
* **İyileştirme (Remediation):** Karantina ağındayken, cihaza eksik yamaları veya güncellemeleri alabileceği sunuculara (örneğin, WSUS, antivirüs sunucusu) erişim izni verilir. Cihaz uyumlu hale geldikten sonra tekrar denetlenir ve tam ağ erişimi sağlanır.
* **Erişimi Engelleme:** Kritik uyumsuzluklar durumunda cihazın ağa erişimi tamamen engellenebilir.

### 6.2. IEEE 802.1X Standardı: Port Tabanlı Kimlik Doğrulama Mekanizması

**IEEE 802.1X**, hem kablolu (Ethernet) hem de kablosuz (Wi-Fi) ağlarda port tabanlı kimlik doğrulama sağlayan bir standarttır ve NAC çözümlerinin temelini oluşturur. Bu standart, bir cihazın fiziksel veya mantıksal bir porta bağlanır bağlanmaz kimliğini kanıtlamasını gerektirir. 802.1X mimarisi üç ana bileşenden oluşur:

1. **Supplicant (İstemci):** Ağa erişim talep eden uç cihazdır (örneğin, bir dizüstü bilgisayar veya akıllı telefon). Bu cihazda 802.1X kimlik doğrulamasını destekleyen bir yazılım çalışır.
2. **Authenticator (Kimlik Doğrulayıcı):** İstemcinin fiziksel olarak bağlandığı ağ cihazıdır (örneğin, bir switch veya kablosuz erişim noktası — AP). Authenticator, istemci ile kimlik doğrulama sunucusu arasında bir aracı görevi görür ve kimlik doğrulama başarılı olana kadar istemcinin portunu kapalı tutar.
3. **Authentication Server (Kimlik Doğrulama Sunucusu):** Genellikle bir **RADIUS (Remote Authentication Dial-In User Service)** sunucusudur. İstemciden gelen kimlik bilgilerini kontrol eden, kimlik doğrulama kararını veren ve bu kararı Authenticator’a bildiren merkezi otoritedir.

Kimlik doğrulama süreci, **Genişletilebilir Kimlik Doğrulama Protokolü (Extensible Authentication Protocol — EAP)** kullanılarak gerçekleştirilir ve bu EAP mesajları, istemci ile authenticator arasında **EAP over LAN (EAPoL)** çerçeveleri içinde taşınır. Temel akış şu şekildedir:

1. İstemci (Supplicant) ağa bağlanır. Port başlangıçta sadece EAPoL trafiğine izin verecek şekilde kapalıdır.
2. İstemci bir `EAPoL-Start` mesajı göndererek kimlik doğrulama sürecini başlatır.
3. Authenticator, istemciden kimliğini talep eden bir `EAP-Request/Identity` mesajı gönderir.
4. İstemci, kimliğini (kullanıcı adı veya sertifika gibi) bir `EAP-Response/Identity` mesajıyla yanıtlar.
5. Authenticator, bu EAP mesajını bir RADIUS `Access-Request` paketi içine kapsülleyerek Kimlik Doğrulama Sunucusu'na (RADIUS) iletir.
6. RADIUS sunucusu, kendi veritabanı veya Active Directory gibi bir kimlik deposu üzerinden kimlik bilgilerini doğrular.
7. Doğrulama başarılı olursa, RADIUS sunucusu Authenticator’a bir `RADIUS Access-Accept` mesajı gönderir. Başarısız olursa `Access-Reject` gönderir.
8. Authenticator, `Access-Accept` mesajını aldığında, istemcinin bağlı olduğu portu açar ve normal ağ trafiğine izin verir. Aynı zamanda istemciye bir `EAP-Success` mesajı gönderir.

### 6.3. Misafir Ağ Yönetimi ve Uyumsuz Cihazların İyileştirilmesi (Remediation)

NAC çözümleri, kurumsal ağa geçici olarak erişmesi gereken misafirler, danışmanlar veya iş ortakları için güvenli ve kontrollü bir erişim sağlamada kritik bir rol oynar. NAC, bu tür kullanıcılar için genellikle internet erişimi olan ancak iç kurumsal kaynaklara erişimi olmayan, tamamen yalıtılmış bir **misafir ağı (guest network)** oluşturur. Misafir kullanıcılar, genellikle bir web portalı (captive portal) üzerinden kendilerini kaydederek veya geçici kimlik bilgileri alarak bu ağa bağlanabilirler.

Daha önce bahsedildiği gibi, uyumsuz (non-compliant) kurumsal cihazlar için **iyileştirme (remediation)** süreci, NAC’ın en önemli faydalarından biridir. Bir cihazın güvenlik duruşu değerlendirmesinden geçememesi durumunda, cihaz otomatik olarak bir iyileştirme VLAN’ına yönlendirilir. Bu VLAN’da, cihazın sadece Windows Update sunucuları, antivirüs imza sunucuları veya yama yönetimi sistemleri gibi iyileştirme için gerekli olan kaynaklara erişimi vardır. Cihaz, gerekli güncellemeleri alıp uyumlu hale geldikten sonra, NAC tarafından yeniden değerlendirilir ve başarılı olursa tam ağ erişimi verilir. Bu otomatik süreç, hem ağ güvenliğini sağlar hem de IT departmanının manuel müdahale yükünü önemli ölçüde azaltır.

---

### Bölüm 7: Kablosuz Ağların Güvenlik Protokolleri

Kablosuz ağlar, sağladıkları esneklik ve mobilite nedeniyle modern IT altyapılarının ayrılmaz bir parçası haline gelmiştir. Ancak bu kolaylık, doğru güvenlik protokolleri ve yapılandırmaları olmadan ciddi güvenlik risklerini de beraberinde getirir. Kablosuz ağ güvenliği, WEP’in zayıflıklarından WPA3'ün gelişmiş kriptografik korumalarına kadar uzun bir evrim geçirmiştir.

### 7.1. WPA2'den WPA3'e Geçiş: Kriptografik Gelişmeler ve SAE El Sıkışması

**Wi-Fi Protected Access 2 (WPA2)**, uzun yıllar boyunca kablosuz ağ güvenliğinin standardı olmuştur. AES (Advanced Encryption Standard) şifrelemesini kullanarak güçlü bir koruma sağlasa da, zamanla önemli zafiyetleri ortaya çıkmıştır. En bilinen zafiyetlerinden biri, **KRACK (Key Reinstallation Attacks)**’tir. Bu saldırı, WPA2'nin 4 yönlü el sıkışma (4-way handshake) sürecindeki bir zayıflıktan faydalanarak şifreleme anahtarlarının yeniden kullanılmasına ve trafiğin çözülmesine olanak tanır. Ayrıca, WPA2-Personal modunda kullanılan Önceden Paylaşılmış Anahtar (Pre-Shared Key — PSK), zayıf parolalar kullanıldığında **çevrimdışı sözlük saldırılarına (offline dictionary attacks)** karşı savunmasızdır. Bir saldırgan, 4 yönlü el sıkışma trafiğini yakalayarak, ağa bağlı olmadan, kendi sisteminde parola denemeleri yapabilir. Bu zafiyetleri gidermek amacıyla 2018 yılında **Wi-Fi Protected Access 3 (WPA3)** standardı tanıtılmıştır. WPA3, WPA2'ye göre bir dizi temel kriptografik yenilik getirir :

* **Simultaneous Authentication of Equals (SAE) El Sıkışması:** WPA3-Personal modunun en önemli yeniliğidir. PSK’nın yerine geçen SAE (Dragonfly olarak da bilinir), güvenli bir parola tabanlı anahtar değişim protokolüdür. WPA2'nin aksine, SAE el sıkışması sırasında saldırganın çevrimdışı sözlük saldırısı yapmasını imkansız hale getirir. Çünkü her kimlik doğrulama denemesi, ağ ile aktif bir etkileşim gerektirir. Bir saldırgan trafiği yakalasa bile, parolayı kırmak için erişim noktasıyla (AP) her bir deneme için ayrı ayrı etkileşime girmek zorundadır. Bu, AP’nin belirli bir sayıda başarısız denemeden sonra saldırganı engellemesine olanak tanır ve kaba kuvvet saldırılarını pratik olarak olanaksız kılar.
* **Daha Güçlü Şifreleme:** WPA3-Enterprise modu, 128-bit AES şifrelemesine ek olarak, daha yüksek güvenlik gerektiren ortamlar için 192-bit’lik bir güvenlik paketi seçeneği sunar.
* **İleri Gizlilik (Forward Secrecy):** SAE, doğası gereği ileri gizlilik sağlar. Bu, bir oturumun şifreleme anahtarı bir şekilde ele geçirilse bile, geçmişteki veya gelecekteki oturumların şifresinin çözülemeyeceği anlamına gelir, çünkü her oturum için benzersiz, geçici anahtarlar kullanılır.
* **Açık Ağlar için Geliştirilmiş Güvenlik (Enhanced Open):** WPA3, parola gerektirmeyen halka açık Wi-Fi ağlarında bile bireysel veri şifrelemesi sağlayan **Opportunistic Wireless Encryption (OWE)**’ı tanıtır. Bu, her kullanıcı ile erişim noktası arasında benzersiz bir şifreleme anahtarı oluşturarak, aynı açık ağdaki diğer kullanıcıların trafiğinizi dinlemesini engeller.

### 7.2. Genişletilebilir Kimlik Doğrulama Protokolü (EAP) Türleri: EAP-TLS ve PEAP Karşılaştırması

Kurumsal ortamlarda kullanılan WPA2/WPA3-Enterprise modu, her kullanıcı için ayrı kimlik bilgileri gerektirir ve kimlik doğrulama için 802.1X çerçevesini kullanır. Bu çerçeve içinde, kimlik doğrulama yöntemini belirleyen çeşitli **Genişletilebilir Kimlik Doğrulama Protokolü (EAP)** türleri bulunur. En yaygın kullanılan iki EAP türü EAP-TLS ve PEAP’tır :

* **EAP-TLS (EAP-Transport Layer Security):** En güvenli EAP yöntemi olarak kabul edilir.
* **Karşılıklı kimlik doğrulaması** gerektirir; yani hem kimlik doğrulama sunucusu (RADIUS) hem de istemci cihaz, kimliklerini kanıtlamak için dijital sertifikalar kullanır. Bu, parola tabanlı saldırıları (phishing, kaba kuvvet) tamamen ortadan kaldırır. Ancak, her istemci cihaza bir sertifika dağıtılmasını ve yönetilmesini gerektirdiği için bir **Açık Anahtar Altyapısı (Public Key Infrastructure — PKI)** gerektirir, bu da kurulum ve yönetim karmaşıklığını artırır.
* **PEAP (Protected EAP):** Dağıtımı daha kolay olduğu için yaygın olarak kullanılır. PEAP, istemci ile sunucu arasında güvenli bir TLS tüneli oluşturur. Bu tünelin içinde, asıl kimlik doğrulama başka bir yöntemle (iç yöntem) yapılır. En yaygın iç yöntem **MS-CHAPv2**'dir ve kullanıcı adı/parola tabanlıdır. Bu modelde sadece sunucunun bir sertifikaya ihtiyacı vardır; istemci ise kimlik bilgilerini (kullanıcı adı/parola) gönderir. Bu, PKI yönetimi gerektirmediği için daha basittir, ancak parola tabanlı olduğu için EAP-TLS’e göre daha az güvenlidir ve kimlik bilgisi hırsızlığına karşı savunmasızdır.

### 7.3. Sahte Erişim Noktası Tehditleri: Rogue AP ve Evil Twin Saldırılarına Karşı Korunma

Kablosuz ağlar, fiziksel erişim gerektirmedikleri için belirli saldırı türlerine karşı daha savunmasızdır. Bunlardan en tehlikelileri, yetkisiz erişim noktalarıyla ilgilidir:

* **Rogue AP (Sahte Erişim Noktası):** Bir çalışanın bilgisi dahilinde veya dışında, kurumsal ağa yetkisiz bir kablosuz erişim noktasının (AP) bağlanmasıdır. Bu AP, genellikle güvenlik yapılandırmalarından yoksundur ve kurumsal ağın güvenlik politikalarını atlayarak saldırganlar için bir arka kapı oluşturur.
* **Evil Twin (Şeytan İkizi):** Meşru bir kablosuz ağın (örneğin, “Ofis\_WiFi”) SSID’sini (ağ adını) kopyalayan kötü niyetli bir erişim noktasıdır. Saldırgan, kendi AP’sinin sinyal gücünü meşru AP’den daha yüksek ayarlayarak, yakındaki kullanıcıların cihazlarının otomatik olarak kendi sahte ağına bağlanmasını sağlar. Kullanıcı sahte ağa bağlandığında, saldırgan kullanıcı ile internet arasında bir **aradaki adam (Man-in-the-Middle)** konumuna geçer ve tüm trafiği dinleyebilir, manipüle edebilir veya kullanıcıları sahte giriş sayfalarına yönlendirerek kimlik bilgilerini çalabilir.

Bu tehditlere karşı korunmak için çok katmanlı bir yaklaşım gereklidir :

#### **Teknik Önlemler**

* **Kablosuz Saldırı Önleme Sistemleri (WIPS):** Bu sistemler, radyo frekansı spektrumunu sürekli olarak tarayarak yetkisiz AP’leri ve Evil Twin’leri tespit eder. Tespit ettiklerinde, bu cihazların yerini belirleyebilir ve hatta meşru istemcilerin bu sahte AP’lere bağlanmasını engelleyen de-authentication paketleri göndererek aktif olarak müdahale edebilirler.
* **802.1X Kimlik Doğrulaması:** WPA2/WPA3-Enterprise ve 802.1X kullanmak, Evil Twin saldırılarına karşı güçlü bir savunma sağlar. Bir istemci bir Evil Twin AP’ye bağlansa bile, Evil Twin’in meşru RADIUS sunucusunun sertifikasına sahip olmaması nedeniyle kimlik doğrulama süreci başarısız olur ve istemci ağa tam erişim sağlayamaz.

#### **İdari Önlemler**

* **Düzenli Ağ Taramaları:** Ağın düzenli olarak taranarak yetkisiz cihazların tespit edilmesi önemlidir.
* **Kullanıcı Eğitimi:** Kullanıcıları, bilinmeyen veya şüpheli Wi-Fi ağlarına bağlanmanın riskleri, sertifika uyarılarına dikkat etme ve halka açık ağlarda VPN kullanmanın önemi konusunda eğitmek, en önemli savunma hatlarından biridir.

![](https://cdn-images-1.medium.com/max/800/1*1MluVyG6UZhxsJniWxTz2g.png)

**WPA2 ve WPA3 Karşılaştırması**

---

### Sonuç

Bu kapsamlı teknik yazı, modern ağ güvenliği teknolojilerinin evrimini ve mevcut durumunu ortaya koymaktadır. Analizler göstermektedir ki, güvenlik duvarlarından kablosuz protokollere kadar her alanda, yalıtılmış ve reaktif çözümlerden, entegre, proaktif ve bağlam farkındalığı yüksek sistemlere doğru net bir kayma yaşanmaktadır. Artık Firewall, WAF, IPS, VPN, NAC ve SIEM/SOAR gibi teknolojiler, birbirinden bağımsız çalışan silolar olarak değil, bütünleşik bir savunma mimarisinin birbirini tamamlayan bileşenleri olarak görülmektedir.

Bu modern mimarinin temel felsefesi, Sıfır Güven (Zero Trust) ilkeleri etrafında şekillenmektedir: ağın hiçbir bölümüne (iç veya dış) varsayılan olarak güvenilmemesi ve her erişim talebinin, kimlik, cihaz sağlığı, konum ve diğer bağlamsal veriler kullanılarak sürekli olarak doğrulanması. Bu yaklaşım, NGFW’lerin uygulama ve kullanıcı bazlı politikalarından, NAC’ın cihaz duruşu değerlendirmesine ve WAF’ın pozitif güvenlik modeline kadar incelenen birçok teknolojinin temel mantığını oluşturmaktadır.

Geleceğe bakıldığında, bu entegrasyonun yapay zeka ve makine öğrenimi ile daha da derinleşeceği açıktır. SIEM platformları, anomali tespitinde daha isabetli hale gelirken, SOAR çözümleri, karmaşık tehditlere karşı insan müdahalesi olmadan otonom müdahale senaryoları (playbook’lar) yürütebilecektir. Tehditleri daha hızlı ve doğru bir şekilde tespit etme (MTTD — Mean Time to Detect) ve bu tehditlere daha hızlı yanıt verme (MTTR — Mean Time to Respond) hedefleri, bu akıllı ve otomatize sistemlerin başarısının temel ölçütleri olmaya devam edecektir. Sonuç olarak, geleceğin ağ güvenliği, insan analistlerin stratejik tehdit avcılığı ve olay müdahalesi gibi üst düzey görevlere odaklanmasını sağlayan, rutin ve tekrarlayan görevleri ise akıllı otomasyon sistemlerine devreden, dinamik ve kendi kendini iyileştiren bir ekosisteme doğru evrilmektedir.