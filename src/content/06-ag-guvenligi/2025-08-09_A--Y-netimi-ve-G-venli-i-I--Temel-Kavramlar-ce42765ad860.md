# Ağ Yönetimi ve Güvenliği I: Temel Kavramlar

---

### Ağ Yönetimi ve Güvenliği I: Temel Kavramlar

![](https://cdn-images-1.medium.com/max/800/1*-M8PH7FuSJ3sOgJgiKLzCg.png)

Siber güvenlik, dijital çağın başlangıcından bu yana evrim geçiren dinamik bir disiplindir. Geçmişte, güvenlik paradigması büyük ölçüde ağ çevresini (perimeter) korumaya odaklanan statik bir kale savunması anlayışına dayanıyordu. Bu modelde, kurumun dijital varlıkları bir kalenin içindeymiş gibi düşünülür ve güvenlik duvarları gibi kontrollerle bu kalenin duvarları güçlendirilirdi. Ancak bulut bilişim, mobil cihazların yaygınlaşması, Nesnelerin İnterneti (IoT) ve karmaşık tedarik zincirleri gibi teknolojik dönüşümler, bu geleneksel “içerisi güvenli, dışarısı tehlikeli” ayrımını anlamsız kılmıştır. Saldırı yüzeyi genişlemiş, tehditler daha sofistike hale gelmiş ve savunma hatları belirsizleşmiştir.

Bu yeni gerçeklik, siber güvenlikte bir paradigma değişimini zorunlu kılmıştır. Modern yaklaşım, artık kimlik ve veri merkezli, risk odaklı, dinamik ve sürekli bir süreç olarak tanımlanmaktadır. Bu paradigma, tek bir güvenlik kontrolünün er ya da geç başarısız olacağını kabul eder ve dayanıklılığı (resilience) mutlak önlemenin önüne koyar. Bu rapor, bu modern güvenlik paradigmasının temel direklerini, düşman taktiklerini ve dayanıklı bir güvenlik duruşu oluşturmak için gereken operasyonel disiplinleri kapsamlı bir şekilde incelemektedir. Bu belge, bilgi güvenliğinin felsefi temelini oluşturan CIA üçgeninden başlayarak, katmanlı savunma (Defense in Depth) mimarisine, günümüzün karmaşık tehdit manzarasına ve son olarak tüm bu unsurları bir araya getiren yönetişim ve sürekli iyileştirme süreçlerine uzanan dört ana bölümde yapılandırılmıştır. Amacı, siber güvenliğin birbirinden bağımsız görünen bileşenlerinin aslında nasıl entegre ve birbirini besleyen bir ekosistem oluşturduğunu ortaya koymaktır.

---

### Bölüm I: Bilgi Güvenliğinin Felsefi Temelleri: CIA Üçgeni ve Ötesi

Siber güvenliğin üzerine inşa edildiği tüm stratejiler, politikalar ve teknolojiler, temelde üç ana koruma hedefini gerçekleştirmeye yöneliktir. “CIA Üçgeni” olarak bilinen bu temel ilkeler — Gizlilik (Confidentiality), Bütünlük (Integrity) ve Erişilebilirlik (Availability) — bir kurumun güvenlik altyapısının temel taşlarını oluşturur. Bu bölüm, bu üç temel sütunu ve bu ilkelerin pratik politika ve stratejilere nasıl dönüştüğünü ayrıntılı bir şekilde ele almaktadır.

### 1.1. CIA Üçgeni: Ayrıntılı Bir İnceleme

CIA üçgeni, bir bilgi güvenlik planının uygulanması için yol gösterici ilkeler sunar. Her bir bileşen, bilgi varlıklarını farklı bir tehdit türüne karşı korur ve bu üçünün dengesi, sağlam bir güvenlik duruşunun temelini oluşturur.

![](https://cdn-images-1.medium.com/max/800/0*IBuyeYMSXN6R_EB0)

CIA üçgeni

#### Gizlilik (Confidentiality)

Gizlilik, en temel anlamıyla, bilginin yetkisiz *okuma* erişimine karşı korunmasıdır. Amaç, hassas ve gizli verilerin yalnızca yetkili (authorized) kişiler, sistemler veya süreçler tarafından görülebilir olmasını sağlamaktır. Bu ilke, verilerin ifşa olmasına (disclosure) karşı bir güvence sağlar.

**Mekanizmalar:** Gizliliği sağlamanın en temel ve yaygın teknik mekanizması şifrelemedir (encryption). Şifreleme, okunabilir durumdaki düz metni (plaintext) bir algoritma aracılığıyla anlaşılamaz şifreli metne (ciphertext) dönüştürür. Bu sayede, veri ele geçirilse bile içeriği korunmuş olur. Gizliliği destekleyen diğer önemli mekanizmalar arasında, kullanıcılara veya sistemlere belirli kaynaklara erişim izni veren veya vermeyen Erişim Kontrol Listeleri (Access Control Lists — ACLs); hassas verilerin kurum dışına çıkmasını engelleyen Veri Kaybı Önleme (Data Loss Prevention — DLP) sistemleri; ve bulut uygulamalarına erişimi yöneten ve güvence altına alan Bulut Erişim Güvenlik Aracıları (Cloud Access Security Brokers — CASBs) bulunur.

**Tehdit Örneği:** Gizlilik ihlallerinin en somut örneklerinden biri, kredi kartı numaraları, sosyal güvenlik numaraları veya tıbbi kayıtlar gibi Kişisel Tanımlanabilir Bilgilerin (Personally Identifiable Information — PII) çalınmasıdır. Bu tür bir veri sızıntısı, bireyler için kimlik hırsızlığına, kurumlar için ise ciddi yasal yaptırımlara ve itibar kaybına yol açabilir.

#### Bütünlük (Integrity)

Bütünlük, bilginin yetkisiz *yazma* erişimine, yani yetkisiz kişiler tarafından değiştirilmesine, bozulmasına (alteration) veya silinmesine (destruction) karşı korunmasıdır. Bu ilke, verinin yaşam döngüsü boyunca eksiksiz, tam, tutarlı ve doğru kalmasını hedefler.

**Mekanizmalar:** Bütünlüğün teknik temelini kriptografik özet (hashing) fonksiyonları oluşturur. SHA (Secure Hash Algorithm) veya MD5 (Message-Digest 5) gibi algoritmalar, herhangi bir boyuttaki veriden sabit uzunlukta benzersiz bir “parmak izi” (hash değeri) üretir. Verideki en küçük bir değişiklik bile tamamen farklı bir hash değeri üreteceğinden, bu yöntem verinin değiştirilip değiştirilmediğini kontrol etmek için son derece etkilidir. Dosya Bütünlüğü İzleme (File Integrity Monitoring — FIM) araçları, kritik sistem dosyalarının hash değerlerini düzenli olarak kontrol ederek yetkisiz değişiklikleri tespit eder. Ayrıca, bir mesajın hem bütünlüğünü hem de göndericisinin kimliğini doğrulayan HMAC (Hash-based Message Authentication Code) ve dijital imzalar gibi teknolojiler de bütünlük kontrollerinin önemli bir parçasını oluşturur.

**Tehdit Örneği:** Bütünlük ihlalleri iki ana kategoride incelenebilir: veri bütünlüğü ve sistem bütünlüğü. Örneğin, bir öğrencinin üniversitenin not veritabanına sızarak kendi notlarını yükseltmesi, bir

*veri bütünlüğü* ihlalidir. Aynı saldırganın, gelecekte sisteme kolayca erişebilmek için işletim sistemine bir arka kapı (backdoor) yazılımı yüklemesi ise bir *sistem bütünlüğü* ihlalidir.

#### Erişilebilirlik (Availability)

Erişilebilirlik, bilgi ve sistemlerin, yetkili kullanıcılar tarafından ihtiyaç duyulduğunda kullanılabilir ve erişilebilir durumda olmasının sağlanmasıdır. Bu ilke, hizmetlerin kesintiye uğramamasını ve iş sürekliliğinin korunmasını hedefler.

**Mekanizmalar:** Erişilebilirliği sağlamanın anahtarı yedekliliktir (redundancy). Donanım arızalarına karşı yedek güç kaynakları, sunucular ve ağ bileşenleri kullanmak; tek bir sunucu üzerindeki yükü dağıtmak için yük dengeleme (load balancing) sistemleri kurmak; ve bir veri merkezinin tamamen hizmet dışı kalması durumunda operasyonları başka bir coğrafi konuma taşıyabilmek için felaket kurtarma (disaster recovery) planları oluşturmak temel mekanizmalardır. Ayrıca, hizmetin kesintisizliği konusunda yasal bir taahhüt sunan Hizmet Düzeyi Sözleşmeleri (Service-Level Agreements — SLA), erişilebilirlik hedeflerini somutlaştırır.

**Tehdit Örneği:** Erişilebilirliğe yönelik en bilinen ve en doğrudan saldırı türü, bir sistemi veya ağı, meşru kullanıcıların erişimini engelleyecek kadar yoğun bir trafikle boğan Dağıtılmış Hizmet Reddi (Distributed Denial of Service — DDoS) saldırılarıdır. Bu saldırılar, bir web sitesini, bir uygulamayı veya tüm bir ağı saatlerce, hatta günlerce hizmet dışı bırakabilir.

### 1.2. İlkelerin Dengesi: Güvenlik Hedeflerindeki Çatışmalar ve Önceliklendirme

CIA üçgeni, her birinin mutlak olarak maksimize edilmesi gereken hedeflerden ziyade, birbiriyle sürekli denge ve değiş-tokuş (trade-off) içinde olan bir çerçeve sunar. Bir güvenlik ilkesini aşırı derecede vurgulamak, diğerlerini zayıflatabilir. Örneğin, verileri korumak için uygulanan çok katmanlı ve karmaşık şifreleme algoritmaları (yüksek gizlilik), sistem performansını yavaşlatarak ve işlem gücü gereksinimlerini artırarak erişilebilirliği olumsuz etkileyebilir. Benzer şekilde, bir veritabanını tamamen izole edilmiş, ağa bağlı olmayan bir kasada saklamak, gizlilik ve bütünlüğü neredeyse mükemmel bir şekilde sağlarken, verinin erişilebilirliğini tamamen ortadan kaldırır.

Bu doğal gerilim, siber güvenliğin “her şeyi her şeye karşı koru” gibi naif bir yaklaşımla ele alınamayacağını gösterir. Bunun yerine, güvenlik kararları “neyi, neye karşı, ne pahasına koru?” sorusu etrafında şekillenmelidir. Bu noktada CIA üçgeni, teknik bir model olmaktan çıkıp stratejik bir risk yönetimi aracına dönüşür. Bir organizasyonun güvenlik öncelikleri, iş hedefleri, yasal yükümlülükleri ve risk iştahı tarafından belirlenir. Örneğin, bir hastanenin acil servisindeki hasta verileri için en yüksek öncelik, doktorların hayati bilgilere anında ulaşabilmesi için Erişilebilirlik ve verilerin doğruluğu için Bütünlük’tür. Gizlilik önemli olmakla birlikte, bir hayat kurtarma senaryosunda ikinci plana düşebilir. Öte yandan, aynı hastanenin uzun vadeli genetik araştırma verileri için en yüksek öncelik, deneklerin mahremiyetini korumak adına Gizlilik olacaktır. Bu verilerin anlık erişilebilirliği daha az kritiktir. Dolayısıyla, güvenlik politikaları ve uygulanan kontroller, korunacak varlığın iş bağlamındaki değerine ve taşıdığı risklere göre özelleştirilmelidir. Bu durum, siber güvenlikte “tek beden herkese uyar” (one-size-fits-all) yaklaşımının neden temelden kusurlu ve etkisiz olduğunun en temel açıklamasıdır.

### 1.3. Veri Sınıflandırması: Güvenlik Politikalarının Temel Taşı

Güvenlik önceliklerini belirleyebilmek ve kaynakları doğru şekilde yönlendirebilmek için, bir kurumun öncelikle “neyi koruduğunu” bilmesi gerekir. Veri sınıflandırması, bir kurumun sahip olduğu tüm verileri hassasiyet, kritiklik ve yasal gereklilikler gibi kriterlere göre mantıksal kategorilere ayırma sürecidir. Bu süreç, etkili bir güvenlik stratejisinin ve tutarlı güvenlik politikalarının temelini oluşturur, çünkü hangi verinin ne düzeyde bir korumaya ihtiyaç duyduğunu tanımlar. Sınıflandırma yapılmadan uygulanan güvenlik kontrolleri, ya gereksiz yere maliyetli ve kısıtlayıcı olur ya da kritik varlıkları korumada yetersiz kalır.

Bu süreç, özellikle Veri Kaybı Önleme (DLP) gibi teknolojilerin etkinliği için hayati öneme sahiptir. Bir DLP çözümü, hangi verinin “hassas” olarak sınıflandırıldığını bilmeden, hangi verinin kurum dışına çıkmasını engelleyeceğini bilemez. Sınıflandırma, aynı zamanda çalışanlar arasında bir güvenlik farkındalığı kültürü oluşturur; bir belgenin “Gizli” olarak etiketlenmesi, kullanıcıları o belgeyi nasıl ele almaları gerektiği konusunda uyarır.

Sınıflandırma seviyeleri her kuruma göre özelleştirilebilir olsa da, kamu ve özel sektörde yaygın olarak kabul görmüş hiyerarşik bir model mevcuttur. Bu model genellikle dört ana seviyeden oluşur: Çok Gizli, Gizli, Hizmete Özel ve Genel. Her bir seviye, o kategorideki verinin yetkisiz ifşası, değiştirilmesi veya erişilemez hale gelmesi durumunda kuruma vereceği zararın potansiyel etkisini yansıtır. Aşağıdaki tablo, bu sınıflandırma seviyelerini tanımlamakta ve her seviye için CIA ilkeleri doğrultusunda uygulanması gereken tipik güvenlik kontrollerine pratik örnekler sunmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*Z4xvNhUEhoGq9K66T-Laaw.png)

**Veri Sınıflandırma Seviyeleri ve Uygulanan Güvenlik Kontrolleri**

---

### Bölüm II: Dayanıklı Bir Savunma Mimarisi: “Defense in Depth” Stratejisi

Tek bir güvenlik kontrolünün veya savunma hattının eninde sonunda başarısız olacağı veya atlatılacağı varsayımı, modern siber güvenlik stratejisinin temelini oluşturur. Bu varsayıma dayanan “Defense in Depth” (Derinlemesine Savunma veya Katmanlı Güvenlik), siber saldırılara karşı tek bir güçlü duvara güvenmek yerine, çok katmanlı, çeşitli ve yedekli bir savunma hattı oluşturmayı amaçlayan bir mimari felsefedir. Bu bölüm, bu stratejinin kavramsal çerçevesini, temel bileşenlerini ve modern bir teknik mimaride nasıl uygulandığını derinlemesine incelemektedir.

![](https://cdn-images-1.medium.com/max/800/0*C0-mfJeSR-pYtOhO)

Defense in Depth

### 2.1. Kavramsal Çerçeve: Askeri Doktrinden Siber Güvenliğe

Defense in Depth kavramının kökenleri, bir düşman saldırısını tek ve güçlü bir hatla durdurmaya çalışmak yerine, art arda gelen savunma katmanlarıyla düşmanın ilerlemesini yavaşlatmayı, yıpratmayı ve saldırı momentumunu kırmayı amaçlayan askeri stratejilere dayanır. Antik Roma ordularından modern askeri doktrinlere kadar kullanılan bu taktik, siber güvenlik alanına uyarlandığında, bir saldırganın nihai hedefine ulaşmasını zorlaştırmak, yavaşlatmak ve bu süreçte harcadığı zamanı ve bıraktığı izleri artırarak tespit edilme olasılığını maksimize etmek anlamına gelir.

Bu strateji genellikle iki popüler analoji ile açıklanır: “soğan” ve “kale” modeli.

* **Soğan Modeli:** Bu benzetmede, en değerli varlık olan veri, soğanın merkezinde yer alır. Veriyi korumak için etrafı, her biri bir öncekinin başarısız olması durumunda devreye giren çok sayıda koruma katmanıyla sarılır. Bu katmanlar dışarıdan içeriye doğru; ağ güvenliği, ana bilgisayar (host) tabanlı güvenlik, uygulama güvenliği ve en iç katmanlardan biri olarak insan faktörü şeklinde sıralanabilir.
* **Kale Modeli:** Ortaçağ kaleleri, Defense in Depth’in mükemmel bir fiziksel örneğidir. Saldırganlar önce bir hendeği, sonra dış surları, ardından okçuların destek verdiği kuleleri, iç surları ve son olarak en korunaklı yapı olan kalenin merkezindeki ana kuleyi (keep) aşmak zorundadır. Her bir savunma hattı, bir sonrakine zaman kazandırır ve saldırganı farklı türde engellerle karşı karşıya bırakır.

### 2.2. Kontrolün Üç Ayağı: İdari, Teknik ve Fiziksel Güvenlik

Ulusal Standartlar ve Teknoloji Enstitüsü (NIST) tarafından da tanımlandığı gibi, etkili bir Defense in Depth stratejisi yalnızca teknolojik çözümlerden ibaret değildir; insan, süreç ve teknolojiyi entegre eden bütünsel bir yaklaşımdır. Bu yaklaşım, üç temel kontrol kategorisine dayanır :

* **İdari Kontroller (Administrative Controls):** Bunlar, bir kurumun güvenlik duruşunu yöneten politika, standart ve prosedürlerdir. Güvenliğin “ne yapılması gerektiğini” ve “neden yapılması gerektiğini” tanımlayan kurallardır. Örnekler arasında güvenlik politikalarının oluşturulması, risk yönetimi süreçleri, yasal düzenlemelere uyum programları, çalışanlar için güvenlik farkındalığı eğitimleri ve işe alım sırasında yapılan güvenlik soruşturmaları yer alır.
* **Teknik Kontroller (Technical Controls):** Sistemleri ve verileri korumak için kullanılan donanım ve yazılım tabanlı güvenlik çözümleridir. Bunlar, güvenliğin “nasıl yapılacağını” uygulayan mekanizmalardır. Güvenlik duvarları (firewalls), Saldırı Tespit/Önleme Sistemleri (IDS/IPS), şifreleme yazılımları, kimlik doğrulama sistemleri ve antivirüs programları bu kategoriye girer.
* **Fiziksel Kontroller (Physical Controls):** Bilgi teknolojisi altyapısına ve hassas verilere fiziksel erişimi sınırlayan veya engelleyen önlemlerdir. Sunucu odalarına erişimi kontrol eden kilitli kapılar ve kartlı geçiş sistemleri, güvenlik kameraları (CCTV), güvenlik görevlileri, çitler ve yangın söndürme sistemleri fiziksel kontrollere örnektir.

### 2.3. Çok Katmanlı Teknik Mimari: Ağ, Uç Nokta, Uygulama ve Veri

Modern bir Defense in Depth teknik mimarisi, yaygın saldırı vektörleri boyunca çeşitli ve birbirini tamamlayan teknolojileri katmanlar halinde konumlandırır. Amaç, bir katmanın başarısız olması durumunda diğer bir katmanın saldırıyı tespit edip engellemesidir.

#### **Ağ Katmanı**

Genellikle ilk savunma hattı olarak kabul edilir ve kurumun ağına giren ve çıkan trafiği kontrol eder.

* **Güvenlik Duvarları (Firewalls) ve IDS/IPS:** Ağ trafiğini önceden tanımlanmış kurallara göre filtreler ve bilinen kötü amaçlı imzaları veya anormal protokol davranışlarını tespit ederek saldırıları engeller.
* **Ağ Segmentasyonu:** Ağı, farklı iş birimleri veya güvenlik seviyeleri için daha küçük, izole alt ağlara (segmentlere) bölme pratiğidir. Bu, bir saldırganın ağın bir bölümüne sızması durumunda, diğer segmentlere kolayca yayılmasını (lateral movement) engelleyerek saldırının etkisini sınırlar.

#### **Uç Nokta (Endpoint) Katmanı**

Kullanıcıların dizüstü bilgisayarları, sunucular, mobil cihazlar gibi ağa bağlanan son kullanıcı cihazlarını korur.

* **Uç Nokta Tespiti ve Müdahale (EDR):** Geleneksel imza tabanlı antivirüs yazılımlarının ötesine geçerek, uç noktadaki anormal davranışları (örneğin, şüpheli bir sürecin bellekten çalışması veya beklenmedik ağ bağlantıları kurması) analiz ederek sıfır gün (zero-day) saldırıları gibi gelişmiş tehditleri tespit eder ve bunlara müdahale eder.
* **Yama Yönetimi (Patch Management):** İşletim sistemleri ve uygulamalardaki bilinen güvenlik açıklarını kapatmak için düzenli olarak güncellemelerin ve yamaların uygulanması sürecidir. Bu, saldırganların bilinen zafiyetleri istismar etmesini engeller.

#### **Uygulama Katmanı**

Özellikle web tabanlı uygulamaları hedef alan saldırılara karşı koruma sağlar.

* **Web Uygulama Güvenlik Duvarları (WAF):** SQL Injection (SQLi), Cross-Site Scripting (XSS) ve Siteler Arası İstek Sahteciliği (CSRF) gibi yaygın web uygulaması saldırılarını, gelen HTTP trafiğini derinlemesine inceleyerek engeller.

#### **Veri Katmanı**

Savunmanın en içteki ve en kritik katmanıdır. Diğer tüm katmanlar aşılsa bile, doğrudan verinin kendisini korumayı hedefler.

* **Veri Şifreleme:** Verilerin hem depolandığı yerde (durağan — at rest) hem de ağ üzerinde iletilirken (hareketli — in motion) şifrelenmesi, yetkisiz kişilerin verilere erişse bile okuyamamasını sağlar.
* **Veri Kaybı Önleme (DLP):** Hassas verilerin (örneğin, kredi kartı numaraları, sağlık bilgileri) e-posta, USB bellek veya bulut depolama gibi yollarla kurum dışına yetkisiz olarak çıkarılmasını engelleyen politikalar ve araçlar bütünüdür.
* **Ayrıcalıklı Erişim Yönetimi (PAM):** Sistem yöneticileri gibi yüksek yetkilere sahip hesapların (privileged accounts) erişimini sıkı bir şekilde kontrol eder, denetler ve yönetir. Bu, en kritik sistemlere ve verilere erişimin kötüye kullanılmasını önler.

Bu katmanlı yapının etkinliği, sadece katmanların sayısına değil, aynı zamanda bu katmanların çeşitliliğine, yani heterojenliğine bağlıdır. Bir saldırgan, bilinen bir imzaya dayalı çalışan ağ tabanlı bir IDS sistemini, yeni veya değiştirilmiş bir saldırı tekniği kullanarak atlatabilir. Ancak bu saldırgan, hedef uç noktaya ulaştığında, normal dışı bir PowerShell komutu çalıştırırsa, bu davranış imza tabanlı olmayan, tamamen davranışsal analize dayalı bir EDR çözümü tarafından şüpheli olarak işaretlenebilir. Bu durum, her bir güvenlik katmanının, sisteme farklı bir “gözle” bakması ve farklı türde tespit mekanizmaları kullanması gerektiğini ortaya koyar. Bir katmanın kör noktası, bir diğerinin görüş alanına girmelidir. Dolayısıyla, güçlü bir Defense in Depth stratejisi, birbirini tamamlayan, farklı saldırı taktik ve tekniklerine karşı koruma sağlayan, koordine bir savunma mekanizması oluşturma yeteneğine dayanır. Bu, tek bir “sihirli anahtarın” tüm kilitleri açmasını engeller.

### 2.4. Saldırı Yüzeyi Analizi ve Azaltma Stratejileri

Defense in Depth stratejisinin etkin bir şekilde uygulanabilmesi için, öncelikle neyin korunması gerektiğinin ve bu korumanın nerelere odaklanacağının bilinmesi gerekir. Saldırı yüzeyi (attack surface), bir saldırganın bir sisteme veya ağa yetkisiz erişim sağlamak, veri çalmak veya hizmeti kesintiye uğratmak için istismar edebileceği tüm potansiyel giriş noktalarının (saldırı vektörlerinin) toplamıdır. Bu yüzey, internete açık web sunucuları, açık ağ portları, API’ler, çalışanların e-posta hesapları, üçüncü parti yazılımlar ve hatta fiziksel binalar gibi çok çeşitli unsurları kapsar.

Saldırı Yüzeyi Yönetimi (Attack Surface Management — ASM), bir kurumun dijital ve fiziksel varlıklarını bir saldırganın gözünden görerek, bu potansiyel giriş noktalarını sürekli olarak keşfetme, analiz etme, önceliklendirme ve azaltma sürecidir. Bu proaktif bir yaklaşımdır ve temel amacı, saldırganlar tarafından keşfedilmeden önce zayıf noktaları bulup kapatmaktır.

**Saldırı Yüzeyini Azaltma Stratejileri:**

* **Sıfır Güven (Zero Trust) Mimarisi:** Geleneksel “güven ama doğrula” modelinin aksine, “asla güvenme, her zaman doğrula” ilkesine dayanır. Bu modelde, bir kullanıcının veya cihazın ağın içinde (kurumsal LAN) veya dışında (internet) olmasından bağımsız olarak, hiçbirine varsayılan olarak güvenilmez. Bir kaynaktan diğerine her erişim talebi, kimlik doğrulama, yetkilendirme ve cihazın güvenlik durumu gibi faktörlere göre sıkı bir şekilde kontrol edilir. Bu yaklaşım, bir saldırganın ağa sızdıktan sonra yanal olarak hareket etmesini büyük ölçüde zorlaştırarak saldırı yüzeyini önemli ölçüde daraltır.
* **Gereksiz Servis ve Portların Kapatılması:** Bir sistemde çalışan her hizmet ve açık olan her ağ portu, potansiyel bir giriş noktasıdır. Güvenlik duvarı taramaları ve düzenli denetimlerle kullanılmayan hizmetlerin devre dışı bırakılması ve gereksiz portların kapatılması, saldırı yüzeyini temizlemenin en temel adımlarından biridir.
* **Ağ Segmentasyonu ve Mikrosegmentasyon:** Ağı daha küçük, izole segmentlere bölmek, bir saldırganın bir bölüme sızması durumunda tüm ağa yayılmasını engeller. Mikrosegmentasyon ise bu konsepti daha da ileri taşıyarak, aynı ağ segmenti içindeki sunucular veya uygulamalar arasındaki trafiği bile kontrol eder ve sınırlar.
* **Sürekli Zafiyet Taraması ve Yama Yönetimi:** Otomatik araçlarla düzenli olarak zafiyet taramaları yapmak ve tespit edilen bilinen güvenlik açıklarını (CVE’ler) zamanında yamalamak, saldırganların kullanabileceği “düşük asılı meyveleri” yani kolay hedefleri ortadan kaldırır.
* **Çalışan Eğitimi ve Farkındalık:** Çalışanlar, oltalama (phishing) gibi sosyal mühendislik saldırıları yoluyla genellikle saldırı zincirinin ilk halkasıdır. Onları en son tehditler ve en iyi güvenlik uygulamaları konusunda düzenli olarak eğitmek, insan kaynaklı riskleri azaltarak saldırı yüzeyinin bu kritik bileşenini güçlendirir.

Bu stratejiler, özellikle Kişisel Verilerin Korunması Kanunu (KVKK) gibi yasal düzenlemelere uyum açısından da kritik öneme sahiptir. KVKK, veri sorumlularından kişisel verilerin güvenliğini sağlamak için uygun teknik ve idari tedbirleri almalarını talep eder. Saldırı yüzeyinin analizi ve azaltılması, bu teknik tedbirlerin (örneğin, ağ güvenliğinin sağlanması, sızma testi, saldırı tespit ve önleme sistemleri) birçoğunun temelini oluşturur ve kurumun yasal sorumluluklarını yerine getirmesine yardımcı olur.

---

### Bölüm III: Modern Tehdit Manzarası: Düşman Taktik ve Teknikleri

Dayanıklı bir savunma mimarisi oluşturmak, düşmanın kim olduğunu, hangi silahları kullandığını ve nasıl savaştığını anlamayı gerektirir. Modern siber tehdit manzarası, basit virüslerden devlet destekli karmaşık operasyonlara kadar geniş bir yelpazeyi kapsar. Bu bölüm, organizasyonların günümüzde karşı karşıya olduğu en yaygın ve en tehlikeli siber saldırı türlerini, bu saldırıların arkasındaki teknik mekanizmaları ve bunlara karşı geliştirilen savunma stratejilerini detaylı bir şekilde incelemektedir.

### 3.1. Hizmet Reddi (DoS/DDoS) Saldırıları

Dağıtılmış Hizmet Reddi (Distributed Denial of Service — DDoS) saldırılarının temel amacı, bir hedef sunucuyu, hizmeti veya ağı, meşru kullanıcılar için erişilemez hale gelene kadar ezici bir internet trafiği seliyle boğmaktır. Bu saldırılar, CIA üçgenindeki Erişilebilirlik (Availability) ilkesine yönelik en doğrudan ve yıkıcı tehditlerden biridir. Bir DDoS saldırısı, genellikle ele geçirilmiş ve bir botnet’e dönüştürülmüş binlerce, hatta milyonlarca bilgisayar veya IoT cihazı tarafından koordine edilir.

**Saldırı Türleri ve Mekanizmaları:** DDoS saldırıları genellikle hedefin ağ yığınının (network stack) farklı katmanlarını hedef alacak şekilde üç ana kategoriye ayrılır :

* **Volumetrik Saldırılar (Katman 3/4):** Bu saldırıların amacı, hedefin ağ bant genişliğini tamamen tüketmektir. Saldırganlar, botnet’leri kullanarak hedefe devasa boyutlarda (saniyede gigabit — Gbps veya terabit — Tbps cinsinden ölçülen) trafik gönderirler. Yaygın bir teknik olan **DNS Amplifikasyonu**, saldırganın, kurbanın IP adresini sahte kaynak adresi olarak kullanarak açık DNS sunucularına küçük istekler göndermesini içerir. DNS sunucuları bu küçük isteklere çok daha büyük yanıtlarla karşılık verir ve bu yanıtlar doğrudan kurbana yönlendirilir, böylece saldırının hacmi katlanarak artar (amplified).
* **Protokol Saldırıları (Katman 3/4):** Bu saldırılar, ağ bant genişliğini tüketmek yerine, güvenlik duvarları, yük dengeleyiciler veya sunucuların kendisi gibi altyapı bileşenlerinin durum tablolarını (state tables) doldurarak kaynaklarını tüketmeyi hedefler. Örneğin, bir **SYN Flood** saldırısında, saldırgan hedefe çok sayıda TCP “SYN” paketi gönderir, ancak bağlantıyı tamamlamak için gereken “ACK” paketlerini asla göndermez. Bu, sunucunun kaynaklarını yarı açık bağlantılarla meşgul ederek yeni meşru bağlantıları kabul edemez hale gelmesine neden olur. Bu tür saldırılar “state-exhaustion attacks” olarak da bilinir.
* **Uygulama Katmanı Saldırıları (Katman 7):** Tespit edilmesi en zor ve en sinsi DDoS saldırı türüdür. Bu saldırılar, web sunucusunu veya bir uygulamayı meşgul eden ve kaynaklarını tüketen, görünüşte meşru HTTP istekleri (örneğin, GET veya POST istekleri) oluşturarak gerçekleştirilir. Örneğin, bir **HTTP Flood** saldırısında, bir botnet, bir web sitesinin belirli bir sayfasını (genellikle veritabanı sorgusu gerektiren karmaşık bir sayfa) sürekli olarak talep eder. Bu trafik, normal kullanıcı trafiğinden ayırt edilmesi zor olduğu için geleneksel DDoS koruma yöntemlerini atlatabilir.

**Azaltma Stratejileri:** DDoS saldırılarına karşı etkili bir savunma, genellikle katmanlı bir yaklaşım gerektirir. Cloudflare gibi küresel içerik dağıtım ve güvenlik ağları, bu tür saldırıları engellemek için çeşitli gelişmiş teknikler kullanır:

* **Anycast Ağı ve Yüksek Kapasite:** Cloudflare, gelen saldırı trafiğini dünya çapında yüzlerce veri merkezine yayılmış devasa bir ağ (örneğin, 405 Tbps’den fazla kapasite) üzerinde dağıtmak için Anycast yönlendirme teknolojisini kullanır. Bu, hiçbir tekil noktanın volumetrik bir saldırı tarafından boğulmamasını sağlar; saldırı trafiği emilir ve filtrelenir.
* **Web Uygulama Güvenlik Duvarı (WAF):** Özellikle Katman 7 saldırılarına karşı etkilidir. Bir WAF, gelen HTTP/HTTPS trafiğini analiz ederek bilinen saldırı imzalarını, anormal istek kalıplarını veya kötü niyetli bot davranışlarını tespit eder ve bu trafiği hedefe ulaşmadan engeller.
* **Hız Sınırlama (Rate Limiting):** Belirli bir zaman dilimi içinde tek bir IP adresinden veya bir kullanıcıdan gelebilecek istek sayısını sınırlar. Bu, botların veya otomatik araçların sunucuyu yavaş ve sinsi bir şekilde aşırı yüklemesini önlemeye yardımcı olur.

### 3.2. İnsan Faktörü: Sosyal Mühendislik Saldırıları

Teknolojik savunmalar ne kadar güçlü olursa olsun, siber güvenlik zincirinin en zayıf halkası genellikle insandır. Sosyal mühendislik, teknik zafiyetler yerine insan psikolojisindeki doğal eğilimleri ve zafiyetleri — güven, korku, merak, aciliyet, otoriteye saygı ve yardım etme isteği — istismar eden bir manipülasyon sanatıdır. Saldırganlar, kurbanları normalde yapmayacakları eylemleri (bir bağlantıya tıklama, bir dosyayı açma, parola paylaşma, para transfer etme) yapmaya ikna etmek için psikolojik tetikleyiciler kullanır.

**Yaygın Teknikler ve Psikolojik Prensipler:**

#### **Oltalama (Phishing)**

En yaygın sosyal mühendislik tekniğidir. Saldırganlar, genellikle e-posta yoluyla, kurbanın güvendiği bir kurum (banka, kargo şirketi, BT departmanı) veya kişi gibi davranarak hassas bilgileri (kullanıcı adı, parola, kredi kartı detayları) çalmaya çalışır. Bu saldırılar genellikle bir **aciliyet** (“Hesabınız 24 saat içinde kapatılacaktır!”) veya **korku** (“Hesabınızdan şüpheli bir işlem yapıldı!”) hissi yaratarak kurbanın düşünmeden hareket etmesini hedefler.

* ***Spear Phishing:*** Belirli bir kişiyi veya küçük bir grubu hedef alır ve saldırıyı daha inandırıcı kılmak için kurban hakkında önceden toplanmış kişisel bilgileri (adı, pozisyonu, çalıştığı projeler) kullanır.
* ***Whaling:*** Özellikle üst düzey yöneticiler, CEO’lar veya CFO’lar gibi “büyük balıkları” hedef alan spear phishing türüdür.

#### **Yemleme (Baiting)**

Kurbanın **merak** veya **açgözlülük** duygusunu istismar eder. Saldırgan, bir şirketin otoparkına “2025 Yılı Maaş Bilgileri.zip” gibi cazip bir isimle etiketlenmiş virüslü bir USB bellek bırakabilir. Bir çalışanın bu belleği bulup merakla bilgisayarına takması, kötü amaçlı yazılımın bulaşması için yeterlidir. Benzer şekilde, “ücretsiz film” veya “pahalı bir yazılımın kırılmış versiyonu” vaadiyle dolu web siteleri de yemleme saldırıları için kullanılır.

* **Sahte Gerekçe (Pretexting) ve Rol Yapma:** Saldırganın, kurbanın güvenini kazanmak için inandırıcı bir senaryo (pretext) uydurması ve belirli bir role bürünmesidir. Örneğin, bir saldırgan, bir şirketin BT destek personelini taklit ederek bir çalışanı arayabilir ve “sisteminizde kritik bir güvenlik güncellemesi yapmamız gerekiyor, lütfen parolanızı doğrular mısınız?” diyebilir. Burada **otoriteye saygı** ve **yardım etme isteği** psikolojik prensipleri istismar edilir.
* **Korkutma Yazılımı (Scareware):** “Bilgisayarınızda 15 virüs bulundu! Sisteminiz çökme riski altında! Hemen temizlemek için tıklayın!” gibi sahte ve alarmist uyarılarla kullanıcıyı **korkutarak**, aslında gereksiz veya kötü amaçlı olan bir yazılımı satın almaya veya yüklemeye zorlar.

**Korunma Yöntemleri:** Sosyal mühendisliğe karşı en etkili savunma, sürekli eğitim ve farkındalıktır. Kullanıcılara, beklenmedik e-postalara, gerçek olamayacak kadar iyi tekliflere, duygusal baskı yaratan mesajlara ve hassas bilgi talep eden isteklere karşı her zaman **şüpheci** olmaları öğretilmelidir. E-posta filtreleme sistemleri, anti-malware yazılımları ve çok faktörlü kimlik doğrulama (MFA) gibi teknik kontroller, sosyal mühendislik saldırılarının başarılı olma olasılığını azaltan önemli ikinci savunma katmanlarıdır.

### 3.3. Kötü Amaçlı Kod: Malware, Ransomware ve Siber Saldırı Zinciri (Cyber Kill Chain)

Kötü amaçlı yazılım (Malware), bir bilgisayar sistemine zarar vermek, veri çalmak veya kullanıcının haberi olmadan sistemi kontrol etmek için tasarlanmış her türlü yazılımı kapsayan genel bir terimdir. Malware taksonomisi, casus yazılımlar (Spyware), reklam yazılımları (Adware), Truva atları (Trojans), solucanlar (Worms), rootkit’ler ve günümüzün en yıkıcı tehditlerinden biri olan fidye yazılımlarını (Ransomware) içerir.

**Ransomware Operasyonları:** Fidye yazılımları, kurbanın cihazındaki kritik dosyaları veya tüm sistemi güçlü şifreleme algoritmaları kullanarak şifreler ve erişilemez hale getirir. Ardından, dosyaların şifresini çözecek anahtarı vermek karşılığında genellikle kripto para birimleri üzerinden bir fidye talep eder. Modern ransomware grupları, saldırılarının etkinliğini artırmak için genellikle “çifte şantaj” (double extortion) taktiğini uygular: fidye ödenmemesi durumunda, şifreledikleri hassas verileri halka açık olarak internette sızdırmakla tehdit ederler. Bu, kurban üzerindeki baskıyı artırır ve sadece veri kaybı değil, aynı zamanda ciddi bir veri ihlali ve itibar kaybı riski de yaratır.

Bir siber saldırının, özellikle de ransomware gibi karmaşık bir saldırının nasıl gerçekleştiğini anlamak için, Lockheed Martin tarafından geliştirilen **Cyber Kill Chain (Siber Saldırı Zinciri)** modeli son derece faydalı bir çerçeve sunar. Bu model, bir saldırganın hedefine ulaşmak için geçtiği yedi sıralı aşamayı tanımlar.

1. **Keşif (Reconnaissance):** Saldırgan, hedefi hakkında pasif veya aktif olarak bilgi toplar. Bu aşamada e-posta adresleri, çalışanların isimleri, ağ IP aralıkları, kullanılan teknolojiler ve potansiyel zafiyetler araştırılır.
2. **Silahlandırma (Weaponization):** Saldırgan, keşif aşamasında elde ettiği bilgilere dayanarak saldırı aracını oluşturur. Örneğin, bir exploit’i (bir zafiyeti sömüren kod parçası) kötü amaçlı bir yük (payload) ile birleştirir. Bu, bir Microsoft Word belgesine kötü amaçlı bir makro gömmek veya bir PDF dosyasına bir exploit kiti eklemek olabilir.
3. **Teslimat (Delivery):** Silahlandırılmış yük, hedefe bir vektör aracılığıyla ulaştırılır. En yaygın teslimat vektörleri arasında oltalama (phishing) e-postaları, virüslü web siteleri (drive-by download) veya ele geçirilmiş USB bellekler bulunur.
4. **Sömürme (Exploitation):** Yük, hedef sistemdeki bir yazılım veya donanım zafiyetini tetikleyerek saldırganın kodunun çalıştırılmasını sağlar. Bu, saldırganın sisteme ilk adımı attığı andır.
5. **Kurulum (Installation):** Saldırgan, hedef sistemde kalıcılık (persistence) sağlamak için bir arka kapı (backdoor) veya başka bir kötü amaçlı yazılım (örneğin, ransomware yükleyicisi) kurar. Bu, sistem yeniden başlatılsa bile erişimini sürdürmesini sağlar.
6. **Komuta ve Kontrol (Command & Control — C2):** Kurulan kötü amaçlı yazılım, internet üzerinden saldırganın kontrolündeki bir C2 sunucusuyla iletişim kurar. Bu kanal, saldırganın uzaktan komutlar göndermesini, veri çalmasını ve saldırıyı yönetmesini sağlar.
7. **Hedefte Eylemler (Actions on Objectives):** Saldırgan, nihai hedefine ulaşır. Bu, hassas verileri çalmak (data exfiltration), dosyaları fidye için şifrelemek, sistemi sabote etmek veya daha büyük bir saldırı için bir sıçrama tahtası olarak kullanmak olabilir.

Bu model, sadece bir saldırının anatomisini çıkarmak için değil, aynı zamanda bir savunma haritası olarak da işlev görür. Saldırı zincirinin her bir halkası, bir öncekinin başarısına bağımlıdır. Bu bağımlılık, savunmacılar için kritik bir avantaj sağlar. Zincirin herhangi bir halkasını kırmak, tüm saldırıyı durdurma potansiyeline sahiptir. Örneğin, “Teslimat” aşamasında gelişmiş bir e-posta güvenlik ağ geçidi, oltalama e-postasını daha kullanıcıya ulaşmadan engellerse, zincir kırılır. “Kurulum” aşamasında, bir uygulama beyaz listeleme (application whitelisting) politikası, bilinmeyen bir yürütülebilir dosyanın çalışmasını engellerse, zincir yine kırılır. “C2” aşamasında, ağdan dışarı giden (egress) trafiği filtreleyen bir güvenlik duvarı, kötü amaçlı yazılımın saldırganla iletişim kurmasını engelleyerek saldırıyı etkisiz hale getirebilir. Bu nedenle, Kill Chain modeli, savunma stratejilerini ve güvenlik kontrollerini her bir saldırı aşamasına özel olarak eşleştirmek ve proaktif savunma planlamak için paha biçilmez bir araçtır.

### 3.4. Zirvedeki Tehdit: Gelişmiş Kalıcı Tehditler (APT)

Siber tehdit spektrumunun en tepesinde, Gelişmiş Kalıcı Tehditler (Advanced Persistent Threats — APT) yer alır. APT’ler, genellikle devlet destekli veya çok iyi finanse edilen, belirli bir hedefi (bir ülke, kritik bir endüstri veya büyük bir şirket) uzun bir süre boyunca gizlice gözetlemek, veri çalmak veya sabote etmek amacıyla hareket eden, yüksek yetenekli ve kaynaklara sahip tehdit aktörleridir. Amaçları “vur-kaç” tarzı siber suçlardan farklı olarak, hedef ağda mümkün olduğunca uzun süre tespit edilmeden kalmaktır.

![](https://cdn-images-1.medium.com/max/800/0*TjrOi-Q5lZCKQngd)

Advanced Persistent Threats — APT

**Temel Özellikler:** Bir tehdit aktörünü APT olarak sınıflandıran üç temel özellik vardır :

* **Gelişmiş (Advanced):** APT grupları, sıradan siber suçluların erişemediği sofistike araçlar ve teknikler kullanır. Bunlar arasında daha önce bilinmeyen sıfır gün (zero-day) açıkları, özel olarak geliştirilmiş kötü amaçlı yazılımlar (custom malware), karmaşık sosyal mühendislik kampanyaları ve geleneksel istihbarat toplama yöntemleri bulunur.
* **Kalıcı (Persistent):** APT saldırılarının en belirgin özelliğidir. Saldırganlar, hedef ağa bir kez sızdıktan sonra, tespit edilmekten kaçınmak için gizli teknikler kullanarak aylarca, hatta yıllarca içeride kalmayı hedefler. Amaçları, sürekli erişim sağlamak ve hedeflerini yavaş ve dikkatli bir şekilde gerçekleştirmektir.
* **Tehdit (Threat):** APT’ler, sadece teknik yeteneklere değil, aynı zamanda net bir niyete (motivasyon) ve bu niyeti gerçekleştirecek kaynaklara da sahiptir. Motivasyonları genellikle finansal kazançtan ziyade politiktir (casusluk, sabotaj) veya ekonomiktir (fikri mülkiyet hırsızlığı).

**MITRE ATT&CK® Çerçevesi:** APT’lerin ve diğer tehdit gruplarının karmaşık davranışlarını anlamak, analiz etmek ve bunlara karşı savunma geliştirmek için, siber güvenlik topluluğu tarafından yaygın olarak kullanılan bir çerçeve **MITRE ATT&CK®**’dir. ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge), gerçek dünya gözlemlerine dayanan, düşman davranışlarının küresel bir bilgi tabanıdır. Bu çerçeve, saldırganların “ne” yaptıklarına (imzalar, araçlar) odaklanmak yerine, “nasıl” ve “neden” yaptıklarına (davranışlar) odaklanır.

ATT&CK matrisi, Taktikler, Teknikler ve Prosedürlerden (TTPs) oluşur:

* **Taktikler:** Bir saldırı sırasındaki düşman hedeflerini veya amaçlarını temsil eder. Matrisin sütunlarıdır ve “saldırgan neden bu eylemi gerçekleştiriyor?” sorusuna cevap verir. Örnek taktikler arasında *Initial Access* (İlk Erişim), *Persistence* (Kalıcılık), *Credential Access* (Kimlik Bilgisi Erişimi) ve *Exfiltration* (Veri Sızdırma) bulunur.
* **Teknikler:** Bir taktiği başarmak için kullanılan spesifik yöntemlerdir. Matrisin hücreleridir ve “saldırgan bu hedefi nasıl başarıyor?” sorusuna cevap verir. Örneğin, *Initial Access* taktiğini başarmak için *Phishing* (T1566) tekniği kullanılabilir.
* **Prosedürler:** Bir tekniğin, belirli bir tehdit grubu tarafından nasıl uygulandığının somut örnekleridir. Örneğin, APT39 grubunun *Phishing* tekniğini, kötü amaçlı bağlantılar içeren hedefli e-postalar (spearphishing link) aracılığıyla uygulaması bir prosedürdür.

Aşağıdaki tablo, İran destekli olduğu düşünülen APT39 grubunun davranışlarını, MITRE ATT&CK çerçevesini kullanarak somut TTP’lere haritalandırmaktadır. Bu, bir tehdit avcılığı (threat hunting) veya savunma boşluğu analizi sırasında, analistlerin hangi tür davranışları araması gerektiğine dair pratik bir yol haritası sunar.

![](https://cdn-images-1.medium.com/max/800/1*oAJtmJSOS5OCUBxm_WX20A.png)

Örnek APT Grubu (APT39) için MITRE ATT&CK TTP Haritalaması

### 3.5. Birbirine Bağlı Risk: Tedarik Zinciri Saldırıları

Modern dijital ekosistemlerin artan karmaşıklığı ve birbirine bağımlılığı, yeni ve son derece tehlikeli bir saldırı vektörü ortaya çıkarmıştır: tedarik zinciri saldırıları. Bu saldırı türünde, saldırganlar doğrudan ana hedeflerine saldırmak yerine, hedefin güvendiği ancak genellikle daha az güvenli olan iş ortaklarına, yazılım sağlayıcılarına, donanım üreticilerine veya hizmet tedarikçilerine sızar. Saldırganlar, bu güven ilişkisini istismar ederek, güvenilir bir kanal üzerinden ana hedefe ulaşmayı amaçlar. 2020'deki SolarWinds saldırısı, bu türün en bilinen ve en yıkıcı örneklerinden biridir; saldırganlar, bir ağ yönetim yazılımının güncelleme mekanizmasına sızarak, bu yazılımı kullanan binlerce kuruma kötü amaçlı kod dağıtmıştır.

Bu tür saldırılar, bir kurumun sadece kendi güvenlik duruşunu sağlamlaştırmasının yeterli olmadığını, tüm dijital tedarik zincirinin güvenliğini göz önünde bulundurması gerektiğini göstermektedir. Bu, Tedarik Zinciri Risk Yönetimi (Supply Chain Risk Management — SCRM) olarak bilinen disiplinin önemini ortaya koymaktadır.

**Risk Yönetimi ve Çerçeveler:**

ABD Siber Güvenlik ve Altyapı Güvenliği Ajansı (CISA), ICT (Bilgi ve İletişim Teknolojileri) tedarik zinciri risklerini yönetmek için kamu-özel sektör işbirliğini teşvik eden ve çeşitli kaynaklar sunan lider bir kurumdur. CISA’nın yaklaşımı, bir tedarik zincirindeki zafiyetlerin ürün yaşam döngüsünün herhangi bir aşamasında (tasarım, geliştirme, üretim, dağıtım, bakım, imha) ortaya çıkabileceği gerçeğine dayanır.

CISA tarafından önerilen temel SCRM adımları şunlardır:

1. **İnsanları ve Süreçleri Tanımlama:** Kurum içinde siber güvenlik, satın alma, hukuk ve lojistik gibi farklı departmanlardan temsilcilerin yer aldığı bir SCRM ekibi oluşturmak.
2. **Tedarik Zincirini ve Tedarikçileri Tanıma:** Sadece doğrudan çalıştığınız tedarikçileri değil, aynı zamanda onların tedarikçilerini de (ikinci ve üçüncü katman tedarikçiler) mümkün olduğunca haritalandırmak ve anlamak. Bu, özellikle dış kaynak kullanımının yaygın olduğu günümüz dünyasında kritik öneme sahiptir.
3. **Risk Değerlendirmesi ve Tehdit Analizi:** Tedarikçilerinize yönelik potansiyel riskleri analiz etmek. Bu, tedarikçinin bulunduğu coğrafi konum, yabancı hükümetlerle olan potansiyel bağları, finansal durumu ve bilinen siber güvenlik olayları gibi faktörleri içerebilir.
4. **Güven ve Doğrulama:** Tedarikçilerinizin güvenlik kültürünü, politikalarını ve süreçlerini doğrulamak. Bu, onların endüstri standartlarına (örneğin, ISO 27001) uyumunu sorgulamayı veya üçüncü taraf denetim raporlarını talep etmeyi içerebilir. CISA, bu süreci standartlaştırmak için **“Vendor SCRM Template”** gibi şablonlar sunar. Bu şablon, bir tedarikçinin endüstri standartlarını ve en iyi uygulamaları nasıl uyguladığına dair bir dizi soru içerir ve risk planlamasına rehberlik eder.
5. **Donanım ve Yazılım Şeffaflığı:** Tedarik edilen ürünlerin bileşenleri hakkında şeffaflık talep etmek. CISA’nın **Hardware Bill of Materials (HBOM)** ve yazılım dünyasındaki karşılığı olan
6. **Software Bill of Materials (SBOM)** çerçeveleri, bir ürünün içinde hangi bileşenlerin (donanım veya yazılım kütüphaneleri) bulunduğunu listeleyerek, bilinen bir zafiyet ortaya çıktığında hangi ürünlerin etkilendiğini hızla belirlemeye olanak tanır.
7. **Sözleşmesel Yükümlülükler:** Güvenlik gereksinimlerini, bir güvenlik olayı durumunda bildirim sürelerini ve denetim haklarını tedarikçilerle yapılan sözleşmelere açıkça dahil etmek.

Sonuç olarak, tedarik zinciri güvenliği, bir kurumun kontrolünün ötesindeki riskleri yönetmeyi gerektiren karmaşık bir alandır. Proaktif bir SCRM programı, güvene dayalı ancak doğrulamayı esas alan bir yaklaşımla, tüm ekosistemin dayanıklılığını artırmayı hedefler.

---

### Bölüm IV: Yönetişim ve Operasyonel Güvenlik Süreçleri

Etkili bir siber güvenlik duruşu, sadece gelişmiş teknolojiler ve karmaşık mimarilerle sağlanamaz. Teknoloji, denklemin sadece bir parçasıdır. Güvenliği bir kurumun DNA’sına işleyen, onu sürdürülebilir ve sürekli gelişen bir yetenek haline getiren asıl unsurlar; sağlam politikalar, iyi tanımlanmış süreçler ve bilinçli insanlardır. Bu bölüm, teknolojinin ötesine geçerek, güvenliği bir bütün olarak yöneten, proaktif yönetişim, kriz anında müdahale ve sürekli iyileştirme döngülerini ele almaktadır.

### 4.1. Proaktif Yönetişim: Risk Yönetimi ve Tehdit İstihbaratı

Reaktif bir şekilde olaylara yanıt vermek yerine, tehditler ortaya çıkmadan önce onları öngörmeye ve hazırlıklı olmaya dayanan proaktif yönetişim, olgun bir güvenlik programının ayırt edici özelliğidir. Bu yaklaşımın iki temel direği, Risk Yönetimi ve Siber Tehdit İstihbaratıdır.

**Risk Yönetimi:** Siber güvenlik risk yönetimi, bir kurumun bilgi varlıklarına yönelik potansiyel tehditleri ve zafiyetleri sistematik olarak belirleme, değerlendirme, önceliklendirme ve bu riskleri ele almak için stratejiler geliştirme sürecidir. Temel amaç, riski tamamen ortadan kaldırmak değil (ki bu genellikle imkansız ve maliyetli bir hedeftir), onu kurumun risk iştahı dahilinde “kabul edilebilir bir seviyeye” indirmektir. Bu süreç, güvenlik yatırımlarının en kritik alanlara odaklanmasını sağlar ve kaynakların verimli kullanılmasını temin eder. ISACA (Information Systems Audit and Control Association) gibi profesyonel kuruluşlar, bu alanda kapsamlı çerçeveler sunar.

**ISACA’nın Risk IT Framework’ü**, BT ile ilgili riskleri iş hedefleri ve süreçleriyle ilişkilendirerek, riskin uçtan uca yönetilmesi için bir yapı sağlar. Bu çerçeve, risk yönetişimi, risk değerlendirmesi ve risk müdahalesi gibi temel alanları kapsar ve kurumların BT risklerini anlamalarına ve yönetmelerine olanak tanır.

**Siber Tehdit İstihbaratı (Cyber Threat Intelligence — CTI):** CTI, potansiyel veya mevcut tehditler hakkında toplanan ham verilerin, karar alma süreçlerine anlamlı bir bağlam sağlamak üzere analiz edilmiş, yorumlanmış ve zenginleştirilmiş halidir. CTI, sadece “ağımızda kötü amaçlı bir IP adresi görüldü” gibi basit bir göstergeyle (Indicator of Compromise — IoC) ilgilenmez; aynı zamanda “bu IP adresi hangi tehdit grubuna ait, bu grubun motivasyonu ne, genellikle hangi taktik ve teknikleri kullanıyorlar ve bizim sektörümüzü neden hedefliyorlar?” gibi daha derin sorulara yanıt arar. NIST, tehdit istihbaratını “karar verme süreçleri için gerekli bağlamı sağlamak üzere toplanmış, dönüştürülmüş, analiz edilmiş, yorumlanmış veya zenginleştirilmiş tehdit bilgisi” olarak tanımlar.

CTI genellikle üç seviyede ele alınır :

* **Stratejik CTI:** Üst yönetim ve karar vericiler için hazırlanır. Siber tehdit ortamındaki genel eğilimleri, belirli tehdit aktörlerinin motivasyonlarını ve bunların iş stratejileri üzerindeki potansiyel etkilerini analiz eder.
* **Operasyonel CTI:** Güvenlik operasyon merkezleri (SOC) ve olay müdahale ekipleri gibi savunma ekiplerine yöneliktir. Belirli tehdit aktörlerinin Taktikleri, Teknikleri ve Prosedürleri (TTP’ler) hakkında ayrıntılı bilgi sağlar.
* **Taktiksel CTI:** Güvenlik cihazlarının (Firewall, SIEM, IDS) doğrudan kullanabileceği, makine tarafından okunabilir tehdit göstergeleri (IoC’ler) içerir. Bunlar, kötü amaçlı IP adresleri, alan adları, dosya hash değerleri gibi somut ve anında eyleme geçirilebilir verilerdir.

### 4.2. Düzenin Kurulması: NIST CSF 2.0 ile Güvenlik Politikası Geliştirme

Güvenlik politikaları, bir kurumun güvenlik hedeflerini, kurallarını ve sorumluluklarını tanımlayan resmi belgelerdir. Etkili politikalar, tutarlı bir güvenlik duruşu oluşturmanın ve yasal düzenlemelere uyum sağlamanın temelini oluşturur. Bu politikaları geliştirmek için en yaygın kullanılan ve saygı duyulan çerçevelerden biri,

**NIST Siber Güvenlik Çerçevesi (Cybersecurity Framework — CSF)**’dir. CSF, bir kuruluşun siber güvenlik risklerini yönetmesi için esnek, tekrarlanabilir ve maliyet etkin bir yaklaşım sunan bir kılavuzdur. Bu, katı bir standartlar listesi değil, kurumların kendi özel ihtiyaçlarına, risk profillerine ve hedeflerine göre uyarlayabilecekleri bir çerçevedir.

Şubat 2024'te yayınlanan **CSF 2.0**, çerçevenin kapsamını sadece kritik altyapılardan, büyüklüğü veya sektörü ne olursa olsun tüm kuruluşları kapsayacak şekilde genişletmiştir. En önemli yenilik ise, siber güvenliğin sadece bir BT sorunu olmadığını, bir kurumsal yönetişim meselesi olduğunu vurgulayan yeni bir

**“Yönet (Govern)”** işlevinin eklenmesidir. Bu işlev, siber güvenlik stratejisinin, kurumun genel kurumsal risk yönetimi (ERM) stratejisiyle entegre edilmesini hedefler.

Güncellenmiş NIST CSF, altı temel fonksiyondan oluşur :

1. **Yönet (Govern):** Kurumun siber güvenlik risk yönetimi stratejisi, beklentileri, rolleri ve politikaları oluşturulur, iletilir ve izlenir.
2. **Tanımla (Identify):** Kurumsal ortamdaki varlıklar, bu varlıklara yönelik riskler ve genel risk yönetimi stratejisi anlaşılır.
3. **Koru (Protect):** Kritik hizmetlerin sunumunu sağlamak ve siber güvenlik olaylarının etkisini sınırlamak için uygun güvenceler geliştirilir ve uygulanır.
4. **Tespit Et (Detect):** Potansiyel siber güvenlik olaylarının zamanında keşfedilmesini sağlayan faaliyetler tanımlanır.
5. **Müdahale Et (Respond):** Tespit edilen bir siber güvenlik olayına karşı uygun eylemlerin gerçekleştirilmesini sağlayan faaliyetler geliştirilir.
6. **Kurtar (Recover):** Bir siber güvenlik olayı nedeniyle bozulan hizmetleri ve yetenekleri normale döndürmek için planlar geliştirilir ve uygulanır.

### 4.3. Krize Müdahale: Olay Müdahalesi (IR) ve Dijital Adli Bilişim (DFIR)

Tüm önleyici kontrollere rağmen, güvenlik ihlallerinin gerçekleşmesi kaçınılmazdır. Bu noktada, kurumun krize ne kadar hızlı, etkili ve düzenli bir şekilde yanıt verdiği, olayın yaratacağı hasarın boyutunu belirler.

**Olay Müdahalesi (Incident Response — IR):** Bir güvenlik ihlali veya siber saldırı tespit edildiğinde, olayın etkisini sınırlamak, hasarı azaltmak ve kurtarma süresini ve maliyetlerini en aza indirmek için izlenen yapılandırılmış bir yaklaşımdır. Etkili bir IR süreci, kaosu önler ve tüm paydaşların rollerini ve sorumluluklarını bilmesini sağlar. Bu alanda en çok kabul gören iki çerçeve NIST ve SANS Enstitüsü tarafından sunulmaktadır.

**DFIR (Digital Forensics and Incident Response):** Olay müdahale sürecini, delillerin hukuki geçerliliğini koruyacak şekilde dijital adli bilişim teknikleriyle birleştirir. IR’nin temel amacı operasyonları normale döndürmek iken, DFIR aynı zamanda “ne oldu, nasıl oldu, kim yaptı?” sorularına yasal olarak geçerli kanıtlarla yanıt arar. Bu, özellikle yasal işlem, sigorta talebi veya düzenleyici soruşturma olasılığı olan durumlarda kritik hale gelir.

Aşağıdaki tablo, olay müdahalesi alanında endüstri standardı olarak kabul edilen NIST ve SANS modellerini karşılaştırmaktadır. İki model temelde aynı felsefeyi paylaşsa da, SANS modelinin NIST’in bir aşamasını üç ayrı adıma bölmesi gibi notasyonel farklılıklar içerir.

![](https://cdn-images-1.medium.com/max/800/1*ru8AUPaYFU9VIfXTzr-5kQ.png)

NIST ve SANS Olay Müdahale Modellerinin Karşılaştırması

**Dijital Adli Bilişim Süreci:** Bir suçun aydınlatılması veya bir anlaşmazlığın çözülmesi amacıyla, dijital cihazlardaki delillerin bütünlüğü bozulmadan ve yasalara uygun olarak toplanması, korunması, analiz edilmesi ve raporlanması sürecidir. Bu sürecin hukuki önemi, delil bütünlüğünün korunması ilkesine dayanır. Bir delilin mahkemede kabul edilebilir olması için, toplandığı andan mahkemeye sunulduğu ana kadar değiştirilmediğinin kanıtlanması gerekir. Bu genellikle, delilin ilk kopyası alındığında hesaplanan bir hash değerinin, süreç sonunda yeniden hesaplanan hash değeri ile aynı olduğunun gösterilmesiyle sağlanır. Ayrıca, delilin kimin elinde olduğunun ve üzerinde hangi işlemlerin yapıldığının kesintisiz bir kaydını tutan

**Zincir-i Velayet (Chain of Custody)** belgesi de hukuki geçerlilik için mutlak bir ön koşuldur.

### 4.4. Olgunluğa Giden Yol: Sürekli İyileştirme ve Güvenlik Eğitimi

Siber güvenlik, bir kez kurulup unutulacak statik bir yapı değildir. Tehditler, teknolojiler ve iş süreçleri sürekli değiştiği için, güvenlik duruşunun da sürekli olarak gözden geçirilmesi, test edilmesi ve iyileştirilmesi gerekir. Bu, bir “sürekli iyileştirme” kültürünü benimsemeyi gerektirir.

**PUKÖ (PDCA) Döngüsü:** Bu kültürün operasyonel çerçevesi, kalite yönetiminden ödünç alınan ve W. Edwards Deming tarafından popülerleştirilen **Planla-Uygula-Kontrol Et-Önlem Al (Plan-Do-Check-Act)** döngüsüdür.

* **Planla:** Güvenlik hedefleri belirlenir, riskler değerlendirilir ve politikalar oluşturulur.
* **Uygula:** Planlanan güvenlik kontrolleri ve politikaları hayata geçirilir.
* **Kontrol Et:** Uygulanan kontrollerin etkinliği izlenir ve ölçülür. Bu aşama, güvenlik denetimleri ve sızma testleri gibi faaliyetleri içerir.
* **Önlem Al:** Kontrol aşamasında tespit edilen eksikliklere ve zayıflıklara dayanarak süreçler ve kontroller iyileştirilir ve döngü yeniden başlar.

**Güvenlik Denetimleri ve Sızma Testleri:** Bunlar, PUKÖ döngüsünün “Kontrol Et” aşamasının en kritik bileşenleridir.

* **Güvenlik Açığı Denetimleri (Vulnerability Scans):** Genellikle otomatik tarama araçları kullanılarak, sistemlerdeki bilinen zafiyetlerin (örneğin, eksik yamalar, hatalı yapılandırmalar) hızlı bir şekilde tespit edilmesini sağlar.
* **Sızma Testleri (Penetration Testing):** Otomatik taramaların ötesine geçerek, etik bir hackerın (penetration tester) bakış açısıyla, tespit edilen zafiyetlerin gerçekten istismar edilip edilemeyeceğini ve bu istismarın ne kadar hasara yol açabileceğini manuel olarak test eder. Bu testler, bir kurumun savunma mekanizmalarının, tespit sistemlerinin ve olay müdahale süreçlerinin gerçek bir saldırı karşısında ne kadar etkili olduğunu doğrular.
* **Test Türleri:** Farklı senaryoları simüle etmek için çeşitli yaklaşımlar kullanılır. **Black Box** testinde, test ekibine hedef hakkında hiçbir ön bilgi verilmez; tamamen dışarıdan bir saldırganı taklit ederler. **White Box** testinde, kaynak kodları ve mimari diyagramlar dahil olmak üzere tüm bilgiler verilir; bu, içeriden bir tehdidi veya derinlemesine bir kod analizini simüle eder. **Grey Box** ise, sınırlı bilgiyle (örneğin, bir kullanıcı hesabı) yapılan ve her iki senaryonun bir karışımını temsil eden en yaygın yaklaşımdır.

**Sürekli Eğitim ve Farkındalık:** Teknoloji ve politikalar ne kadar güçlü olursa olsun, en zayıf halka genellikle insandır. Çalışanların düzenli olarak en son tehditler (özellikle sosyal mühendislik) ve kurumun güvenlik politikaları hakkında eğitilmesi, güvenlik olaylarının önlenmesinde kritik bir rol oynar. Çalışanların güvenlik süreçlerine katılımını teşvik etmek ve geri bildirimlerini almak, bir “güvenlik kültürü” oluşturur ve bu kültür, sürekli iyileştirmenin en önemli itici gücüdür.

Bu süreçlerin hiçbiri izole bir şekilde işlemez. Aksine, birbirini sürekli olarak besleyen, iyileştiren ve olgunlaştıran döngüsel bir ekosistem oluştururlar. Örneğin, bir “Olay Müdahalesi” sonrasında yapılan “Alınan Dersler” analizi, PUKÖ döngüsünün “Kontrol Et” aşamasıdır. Bu analizden çıkan bulgular (“e-posta filtreleme politikamız yetersizdi” veya “bu sunucudaki loglama kapalıydı”), yeni bir “Risk Değerlendirmesi” için kritik bir girdi oluşturur ve “Güvenlik Politikalarının” güncellenmesini tetikler. Bu, “Önlem Al” ve “Planla” aşamalarına karşılık gelir. Güncellenen politikalar ve devreye alınan yeni kontroller (“Uygula” aşaması), bir sonraki periyodik “Sızma Testi” ile tekrar “Kontrol Edilir”. Bu döngü, siber güvenliğin statik bir durum değil, sürekli evrilen ve olgunlaşan dinamik bir süreç olduğunun en somut kanıtıdır.

---

### Sonuç

Bu kapsamlı teknik rapor, modern ağ güvenliğinin çok katmanlı ve entegre doğasını ortaya koymuştur. Analiz, siber güvenliğin artık sadece teknolojik bir sorun olmaktan çıktığını; strateji, yönetişim ve insan faktörünü içeren bütünsel bir disiplin haline geldiğini göstermektedir.

Raporun temel bulguları şu şekilde sentezlenebilir: Bilgi güvenliğinin temelini oluşturan **CIA üçgeni**, mutlak hedefler sunmaktan ziyade, bir kurumun iş önceliklerine ve risk iştahına göre sürekli olarak dengelenmesi gereken bir risk yönetimi aracı işlevi görmektedir. Etkili bir savunma mimarisi olan **Defense in Depth**, tek bir “sihirli mermi” çözümüne güvenmek yerine, farklı tehdit türlerine karşı farklı mekanizmalarla koruma sağlayan heterojen ve koordine katmanların gücüne dayanmaktadır. Bu, bir katmanın başarısızlığının felaketle sonuçlanmasını engelleyen bir dayanıklılık felsefesidir. Modern tehditlerin (APT, Ransomware) karmaşıklığı karşısında, **Cyber Kill Chain** ve **MITRE ATT&CK** gibi çerçeveler, sadece saldırgan davranışlarını anlamak için değil, aynı zamanda proaktif bir savunma haritası çizmek için de paha biçilmez stratejik araçlar olarak öne çıkmaktadır.

Nihai çıkarım, siber güvenliğin statik bir hedef değil; insan, süreç ve teknolojiyi entegre eden, sürekli öğrenme, adaptasyon ve iyileştirme gerektiren dinamik bir yolculuk olduğudur. **PUKÖ döngüsü** ile formalize edilen bu sürekli iyileştirme süreci, risk yönetimi, olay müdahalesi, politika geliştirme ve denetim gibi tüm güvenlik fonksiyonlarını birbirini besleyen bir ekosistemde birleştirir. Sonuç olarak, dijital çağda en dayanıklı organizasyonlar, en kalın duvarlara sahip olanlar değil, tehdit ortamındaki değişimlere en hızlı öğrenen, en iyi koordine olan ve en çevik şekilde adapte olabilenlerdir. Güvenlik, bir varış noktası değil, sürekli devam eden bir süreçtir.