# Ağ Güvenliği ve Yönetimi I:AĞ TEKNOLOJİLERİNİN TEMELLERİ

---

### Ağ Güvenliği ve Yönetimi I:AĞ TEKNOLOJİLERİNİN TEMELLERİ

![](https://cdn-images-1.medium.com/max/800/1*QsixbjAc424hJKBe9MKq-g.png)

### Giriş

Modern bilgi toplumunun temelini oluşturan bilgisayar ağları, verinin küresel ölçekte anlık olarak paylaşılmasını sağlayan karmaşık ve dinamik sistemlerdir.1 Bu sistemler, yalnızca bağlantı sağlayan pasif altyapılar olmaktan çıkıp, iş süreçlerini, küresel ekonomiyi ve modern toplumu şekillendiren dinamik, programlanabilir ve stratejik varlıklara dönüşmüştür. Bu raporun ilk bölümü, ağ iletişimini yöneten evrensel ilkeleri, standartları ve fiziksel bileşenleri tanıtarak daha karmaşık yönetim ve güvenlik konularına geçmeden önce sağlam bir teorik zemin oluşturmayı amaçlamaktadır.

Bu bölüm, ağ iletişimini yöneten evrensel ilkeleri, standartları ve fiziksel bileşenleri tanıtarak tüm rapor için sağlam bir teorik zemin oluşturmaktadır.

---

### Ana Başlık 1: Ağ Mimarileri ve İletişim Modelleri

Bu ana başlık, ağların soyut ve somut yapısını inceler. Ağların coğrafi ölçekten fiziksel yerleşime, standartlaştırılmış iletişim modellerinden modern veri merkezi tasarımlarına kadar nasıl organize edildiğini ele alır.

#### Alt Başlık 1.1: Ağların Sınıflandırılması: Kapsama Alanına Göre (PAN, LAN, MAN, WAN)

Bilgisayar ağları, kapsadıkları coğrafi alana göre temel olarak dört ana kategoriye ayrılır. Bu sınıflandırma, bir ağın ölçeğini, amacını ve kullanılan teknolojiyi anlamak için temel bir çerçeve sunar.1 Bu ayrım, yalnızca mesafeyle ilgili bir ölçüt olmanın ötesinde, bilişim ihtiyacının kişiselden küresele doğru genişlemesinin bir yansımasıdır. Her bir ölçek, farklı bir teknolojik zorluk ve çözüm seti gerektirdiğinden, bu sınıflandırma aynı zamanda teknolojik evrimin bir haritası olarak da görülebilir.1

* **PAN (Personal Area Network — Kişisel Alan Ağı):** Ağ türleri arasında en dar coğrafi kapsama alanına sahiptir ve genellikle tek bir bireyin etrafındaki birkaç metrelik bir alanı kapsar. Temel amacı, akıllı telefon, kablosuz kulaklık, akıllı saat gibi kişisel elektronik cihazların birbiriyle doğrudan iletişim kurmasını sağlamaktır. Bu ağlar, düşük güç tüketimi ve basit eşleşmeye odaklanan Bluetooth gibi teknolojiler üzerine kuruludur. PAN’ların yükselişi, giyilebilir teknolojilerin ve Nesnelerin İnterneti (IoT) cihazlarının yaygınlaşmasının doğrudan bir sonucudur.1
* **LAN (Local Area Network — Yerel Alan Ağı):** Tek bir bina, ofis, okul veya ev gibi sınırlı bir fiziksel alanda kurulan ağlardır. LAN’lar, yüksek bant genişliği ve düşük gecikme süresi gerektiren yoğun işlemler için tasarlanmıştır ve bu amaçla genellikle kablolu Ethernet veya kablosuz Wi-Fi teknolojilerini kullanır.
* **MAN (Metropolitan Area Network — Metropol Alan Ağı):** Bir şehir veya büyük bir kampüs gibi orta büyüklükteki bir coğrafi alanı kapsayarak, genellikle birden fazla LAN’ı birbirine bağlar. Örneğin, bir şirketin şehirdeki farklı binalarını veya bir üniversitenin farklı kampüslerini birbirine bağlamak için kullanılabilir.1
* **WAN (Wide Area Network — Geniş Alan Ağı):** Ülkeler veya kıtalar arası bağlantıları içeren en geniş coğrafi kapsama alanına sahip ağ türüdür. İnternet, bir WAN’ın en bilinen ve en büyük örneğidir. WAN’lar, coğrafi olarak dağınık haldeki LAN’ları ve MAN’ları birbirine bağlayarak, güvenilirlik ve uzun mesafe bağlantısı gibi zorluklara odaklanan teknolojilerle küresel iletişimi mümkün kılar.1

#### Alt Başlık 1.2: Ağ Topolojileri: Fiziksel ve Mantıksal Yerleşimler

Ağ topolojisi, bir ağdaki cihazların (düğümlerin) ve aralarındaki bağlantıların fiziksel veya mantıksal düzenini tanımlar. Topoloji seçimi, ağın maliyetini, performansını, güvenilirliğini ve ölçeklenebilirliğini doğrudan etkiler.1

**1.2.1. Geleneksel Topolojiler (Bus, Star, Ring, Tree)**

* **Bus (Ortak Yol):** Bu topolojide, tüm cihazlar “omurga” olarak adlandırılan tek bir ana kabloya bağlanır. Kurulumu kolay ve diğer topolojilere göre daha az kablo gerektirdiği için ekonomik bir seçenektir. Ancak, omurga kabloda meydana gelen tek bir arıza tüm ağı devre dışı bırakır ve arıza tespiti zordur.1
* **Star (Yıldız):** Modern LAN’larda en yaygın kullanılan topolojidir. Tüm cihazlar, genellikle bir switch veya hub olan merkezi bir bağlantı noktasına ayrı kablolarla bağlanır. Bir kabloda veya cihazda meydana gelen arıza, genellikle sadece o cihazı etkiler ve ağın geri kalanı çalışmaya devam eder. Bu yüksek güvenilirlik ve yönetim kolaylığı, onu standart haline getirmiştir.1
* **Ring (Halka):** Cihazlar dairesel bir yolda birbirine bağlanır ve veri genellikle tek bir yönde halka etrafında dolaşır. Halkadaki bir cihazın veya kablonun arızalanması tüm ağı durdurabilir.1
* **Tree (Ağaç):** Hiyerarşik bir yapıya sahiptir ve genellikle birden fazla yıldız topolojisini bir omurga üzerinden birbirine bağlayarak ölçeklenebilirlik sağlar. Ağacın kökünde veya ana omurgasında meydana gelen bir arıza, ağın büyük bir bölümünü etkileyebilir.1

**1.2.2. Modern Topolojiler (Mesh, Hybrid)**

* **Mesh (Örgü):** Bu topolojide, cihazlar arasında birden fazla bağlantı yolu bulunur. Bu yapı, bir bağlantı kopsa bile alternatif yollar sunduğu için son derece yüksek hata toleransı ve güvenilirlik sağlar. Ancak, çok fazla kablolama gerektirdiği için kurulumu karmaşık ve maliyetlidir. Bu nedenle genellikle WAN bağlantılarında ve kritik altyapılarda tercih edilir.1
* **Hybrid (Karma):** İki veya daha fazla farklı topolojinin birleştirilmesiyle oluşur. Farklı topolojilerin avantajlarını birleştirerek esneklik ve ölçeklenebilirlik sağlar.1

Ağ mühendisliği tarihinde, operasyonel güvenilirlik ve yönetim kolaylığının, genellikle daha düşük başlangıç maliyetinden daha ağır bastığı görülmektedir. Geleneksel topolojilerden Bus, en az kablo gerektirdiği için en ekonomik seçenekti.1 Ancak, tek bir kablo arızasının tüm ağı çökertmesi ve arıza tespitinin zor olması gibi operasyonel dezavantajları vardı.1 Buna karşılık, daha fazla kablo ve merkezi bir cihaz gerektirdiği için başlangıç maliyeti daha yüksek olan Star topolojisi, bir arızanın sadece tek bir cihazı etkilemesi ve arıza tespitinin kolay olması gibi nedenlerle modern LAN’ların ezici standardı haline gelmiştir.1 Bu durum, ağın kesintisiz çalışmasının getirdiği iş değerinin, başlangıçtaki kablo maliyetinden çok daha önemli olduğunu göstermektedir.

#### Alt Başlık 1.3: Referans Modelleri: OSI ve TCP/IP Karşılaştırması

Farklı üreticiler tarafından geliştirilen donanım ve yazılımların sorunsuz bir şekilde birlikte çalışabilmesi için standartlaştırılmış bir çerçeveye ihtiyaç duyulmuştur. Bu ihtiyaca cevap olarak, ağ iletişimini daha küçük, yönetilebilir ve standartlaştırılmış fonksiyonel katmanlara ayıran referans modelleri geliştirilmiştir. Bu katmanlı mimariler, hem farklı sistemler arasında birlikte çalışabilirliği (interoperability) garanti eder hem de ağ sorunlarının tespitini ve çözümünü sistematik bir hale getirerek kolaylaştırır.1

**1.3.1. OSI Referans Modeli: Yedi Katmanın Ayrıntılı Analizi**

Uluslararası Standartlar Örgütü (ISO) tarafından geliştirilen Açık Sistemler Arası Bağlantı (OSI) modeli, ağ iletişimini yedi soyut katmana ayıran teorik ve kavramsal bir çerçevedir.1 Her katman, belirli ve iyi tanımlanmış işlevlerden sorumludur:

* **Katman 7: Uygulama (Application):** Son kullanıcıya en yakın katmandır. Ağ kaynaklarına erişim sağlayan HTTP, FTP, SMTP gibi protokolleri ve hizmetleri içerir.1
* **Katman 6: Sunum (Presentation):** Verinin, alıcı sistem tarafından anlaşılabilir bir formata dönüştürülmesinden sorumludur. Veri şifreleme, sıkıştırma ve karakter kodlaması gibi işlemleri yönetir.1
* **Katman 5: Oturum (Session):** İki cihaz arasındaki iletişim oturumlarının kurulmasını, yönetilmesini ve sonlandırılmasını sağlar.1
* **Katman 4: Taşıma (Transport):** Uçtan uca (end-to-end) veri iletimini yönetir. TCP ve UDP gibi protokollerle verinin güvenilir veya güvenilmez bir şekilde iletilmesini sağlar, akış kontrolü ve hata denetimi yapar.
* **Katman 3: Ağ (Network):** Farklı ağlar arasında veri paketlerinin en uygun rota üzerinden hedefe ulaştırılmasından sorumludur. Mantıksal adresleme (IP adreslemesi) ve yönlendirme (routing) bu katmanda gerçekleşir.
* **Katman 2: Veri Bağlantı (Data Link):** Aynı fiziksel ağ üzerindeki cihazlar arasında hatasız veri transferini sağlar. Fiziksel adresleme olarak bilinen MAC adreslerini kullanır ve veriyi çerçevelere (frames) dönüştürür.
* **Katman 1: Fiziksel (Physical):** Verinin bit dizileri olarak fiziksel ortama (kablo, fiber optik, radyo dalgaları) aktarılmasından sorumludur. Veriyi elektrik sinyallerine, ışık atımlarına veya radyo dalgalarına dönüştürür.1

**1.3.2. TCP/IP Protokol Paketi: Dört Katmanlı Pratik Yapı**

OSI modelinin aksine, TCP/IP modeli teorik bir çerçeveden ziyade, internetin gelişim sürecinde ortaya çıkmış ve pratikte yaygın olarak kullanılan bir protokoldür. Daha az katmana sahip olmasıyla daha basit ve esnek bir yapı sunar.

* **Uygulama Katmanı:** OSI modelinin Uygulama, Sunum ve Oturum katmanlarının işlevlerini birleştirir.1
* **Taşıma Katmanı:** OSI’deki Taşıma katmanıyla birebir aynı işlevlere sahiptir (TCP, UDP).1
* **İnternet Katmanı:** OSI’deki Ağ katmanına karşılık gelir (IP, ICMP).1
* **Ağ Arayüzü Katmanı:** OSI’deki Veri Bağlantı ve Fiziksel katmanları birleştirir.1

**1.3.3. Veri Kapsülleme (Encapsulation) Süreci: PDU’ların Yolculuğu (Segment, Paket, Çerçeve)**

Veri, gönderici cihazdaki bir uygulamadan başlayıp ağ kablosuna ulaşana kadar katmanlı mimaride aşağı doğru hareket eder. Bu süreçte her katman, bir üst katmandan aldığı veriye kendi kontrol bilgilerini içeren bir başlık (header) ekler. Bu işleme kapsülleme denir.1 Her katmanda verinin aldığı isim, yani Protokol Veri Birimi (PDU), değişir:

1. **Taşıma Katmanı:** Veri, segmentlere bölünür ve her segmente bir TCP veya UDP başlığı eklenir. Bu aşamadaki PDU’ya **Segment** (veya UDP için Datagram) denir.1
2. **İnternet/Ağ Katmanı:** Her segmente, kaynak ve hedef IP adreslerini içeren bir IP başlığı eklenir. Bu aşamadaki PDU’ya **Paket** denir.1
3. **Ağ Arayüzü/Veri Bağlantı Katmanı:** Her pakete, kaynak ve hedef MAC adreslerini içeren bir çerçeve başlığı ve hata kontrolü için bir sonlandırıcı (FCS) eklenir. Bu aşamadaki PDU’ya **Çerçeve** (Frame) denir.1
4. **Fiziksel Katman:** Çerçeve, fiziksel ortama iletilmek üzere bit dizisine dönüştürülür.

Alıcı cihazda bu sürecin tam tersi olan de-kapsülleme (de-encapsulation) işlemi gerçekleşir.

Bu iki modelin tarihsel gelişimi, teknoloji dünyasındaki önemli bir dinamiği gözler önüne serer: pragmatizmin teorik mükemmelliğe karşı zaferi. OSI modelinin yedi katmanlı yapısı, fonksiyonları net bir şekilde ayırarak akademik bir üstünlük sunsa da, TCP/IP’nin daha az katmanlı ve pratik yapısı, internetin öncüsü olan ARPANET projesinde hızla benimsenmiş ve internetin organik büyümesiyle birlikte fiili standart haline gelmiştir.1 Bu durum, genellikle yeterince iyi ve pratik olan çözümün, teorik olarak daha üstün ama karmaşık olan çözüme galip geldiğini gösteren klasik bir “protokol savaşları” örneğidir.1

Dahası, bu katmanlı modeller ve kapsülleme süreci, modern ağ donanımının tasarım felsefesini doğrudan şekillendirmiştir. Modellerin dikte ettiği “iş bölümü”, ağ cihazlarının belirli katmanların başlıklarını işlemek üzere uzmanlaşmasına olanak tanımıştır.1 Örneğin, bir Katman 2 switch, gelen bir çerçevenin sadece Katman 2 MAC adresi başlığını okuyarak iletim kararını verir; paketin içindeki IP adresini anlamasına gerek yoktur. Bu uzmanlaşma, bu işlemi Uygulamaya Özel Entegre Devreler (ASIC’ler) kullanarak son derece hızlı yapmasını sağlar.1 Buna karşılık, bir Katman 3 router, paketin Katman 3 IP başlığını inceleyerek farklı ağlar arasında daha karmaşık yönlendirme kararları vermeye odaklanır.1 Bu sayede, her cihazın kendi özel görevini en verimli şekilde yerine getirmesi sağlanarak modüler, ölçeklenebilir ve yüksek performanslı ağların temeli atılmıştır.

![](https://cdn-images-1.medium.com/max/800/1*FDaZNME-1NddEaSU4DPFhA.png)

OSI Referans Modeli

#### Alt Başlık 1.4: Modern Veri Merkezi Mimarisi: 3 Katmanlıdan Spine-Leaf’e Geçiş

Veri merkezi ağ tasarımları, üzerinde çalışan uygulamaların taleplerine yanıt olarak önemli bir evrim geçirmiştir. Bu değişimin arkasındaki temel itici güç, veri merkezi içindeki trafik akış desenlerindeki köklü bir değişimdir.1

**1.4.1. Geleneksel Üç Katmanlı Mimari (Çekirdek, Dağıtım, Erişim)**

Yıllarca veri merkezi ağlarının standardı olan üç katmanlı mimari, hiyerarşik bir yapıya sahiptir. Bu katmanlar; sunucuların ağa bağlandığı **Erişim Katmanı**, erişim katmanından gelen trafiği toplayan **Dağıtım/Toplama Katmanı** ve ağın omurgasını oluşturan **Çekirdek Katmanı**’dır. Bu mimari, temel olarak veri merkezi dışındaki kullanıcılar ile veri merkezi içindeki sunucular arasındaki “Kuzey-Güney” (North-South) trafik akışı için optimize edilmiştir.1

**1.4.2. Doğu-Batı Trafiği ve Sanallaştırmanın Etkisi**

Sunucu sanallaştırması ve mikroservis mimarilerinin yükselişi, tek bir fiziksel sunucu üzerinde çalışan çok sayıda sanal makinenin (VM) birbiriyle yoğun bir şekilde iletişim kurmasını gerektirmiştir. Bu durum, veri merkezi içindeki sunucudan sunucuya gerçekleşen “Doğu-Batı” (East-West) trafiğinde dramatik bir artışa neden olarak bu trafik desenini baskın hale getirmiştir.1 Geleneksel üç katmanlı mimari, bu yeni trafik deseni için verimsizdir. Bir sunucudan diğerine giden bir paket, erişim katmanından dağıtım katmanına, oradan çekirdeğe ve sonra tekrar aşağıya doğru inmek zorunda kalabilir. Bu durum, gecikmeyi (latency) artırır ve ağda darboğazlar yaratır. Ayrıca, bu mimarinin ağ döngülerini önlemek için kullandığı Spanning Tree Protocol (STP), yedekli yolları bloke ederek mevcut bant genişliğinin yarısının kullanılamamasına neden olur ve sorunu daha da kötüleştirir.1

**1.4.3. Spine-Leaf Mimarisi ve Avantajları (Düşük Gecikme, Ölçeklenebilirlik, ECMP)**

Spine-Leaf mimarisi, Doğu-Batı trafiğinin yarattığı bu zorluklara doğrudan bir yanıt olarak geliştirilmiştir. Bu modern mimari, üç katmanlı hiyerarşiyi iki katmanlı bir “kumaş” (fabric) yapısıyla değiştirir: sunucuların bağlandığı **Yaprak (Leaf)** katmanı ve ağın çekirdeğini oluşturan **Omurga (Spine)** katmanı.1 Temel prensibi, her yaprak switch’in, omurga katmanındaki her bir spine switch’ine bağlanmasıdır.1 Bu tasarımın temel avantajları şunlardır:

* **Düşük ve Öngörülebilir Gecikme:** Herhangi iki sunucu arasındaki yol her zaman aynı sayıda atlamadan (hop) oluşur (Leaf -> Spine -> Leaf), bu da gecikmeyi düşük ve tutarlı kılar.
* **Yüksek Bant Genişliği ve ECMP:** Döngüsel bir topoloji olmadığı için STP’ye gerek yoktur. Bunun yerine, **Eşit Maliyetli Çoklu Yol (Equal-Cost Multipath — ECMP)** gibi yönlendirme protokolleri kullanılarak trafik mevcut tüm yollar arasında yük dengelemesi yapılarak iletilir, bu da bant genişliği kullanımını maksimize eder.
* **Yüksek Ölçeklenebilirlik:** Ağ kapasitesini artırmak için omurga katmanına yeni bir spine switch’i veya port sayısını artırmak için yaprak katmanına yeni bir leaf switch’i kolayca eklenebilir. Bu “yatay ölçeklenme” (scale-out) yaklaşımı, ağın yeniden tasarlanmasını gerektirmez.

Bu mimari değişim, uygulama mimarisindeki bir evrimin (sanallaştırma), ağ mimarisinde bir devrimi (Spine-Leaf) nasıl zorunlu kıldığının en net örneğidir. Ağlar, artık sadece bağlantı sağlamakla kalmayıp, üzerinde çalışan uygulamaların performans ve ölçeklenebilirlik gereksinimlerini karşılamak üzere özel olarak tasarlanmaktadır.

---

### Ana Başlık 2: Temel Ağ Cihazları ve Teknolojileri

Bu ana başlık, teorik modelleri ve mimarileri hayata geçiren somut donanım ve teknolojileri inceler. Veri paketlerini ileten, yönlendiren ve güvence altına alan cihazlardan, bu veriyi taşıyan kablolu ve kablosuz teknolojilere kadar ağın fiziksel ve pratik yönlerine odaklanır.

#### Alt Başlık 2.1: Aktif Ağ Cihazları ve Çalıştıkları Katmanlar

Modern bir ağ altyapısı, her biri OSI modeli bağlamında belirli bir rolü üstlenen çeşitli aktif cihazlardan oluşur.

**2.1.1. Switch (Anahtar): Katman 2 İşlevleri ve MAC Adres Tablosu**

Bir anahtar, OSI modelinin 2. Katmanı olan Veri Bağlantı Katmanı’nda çalışan ve aynı yerel alan ağı (LAN) içindeki cihazları birbirine bağlayan bir cihazdır. Hub’ların aksine akıllı bir iletim yapar. Kendisine bağlı her cihazın fiziksel adresi olan MAC adresini öğrenir ve bu bilgileri bir MAC adres tablosunda (CAM tablosu olarak da bilinir) saklar. Bir cihazdan diğerine veri çerçevesi (frame) gönderildiğinde, anahtar hedef MAC adresini okur ve çerçeveyi yalnızca ilgili hedef porta iletir. Bu sayede gereksiz trafik önlenir ve ağ verimliliği artar.

**2.1.2. Router (Yönlendirici): Katman 3 İşlevleri ve Yönlendirme Tabloları**

Bir yönlendirici, OSI modelinin 3. Katmanı olan Ağ Katmanı’nda çalışır. Temel görevi, farklı ağları (örneğin, bir ofis LAN’ını internete veya farklı IP alt ağlarını) birbirine bağlamaktır. Paketleri MAC adreslerine göre değil, IP adreslerine göre yönlendirir. Bir paketin hedefine ulaşması için en iyi yolu belirlemek amacıyla, statik veya dinamik olarak oluşturulmuş bir yönlendirme tablosu (routing table) kullanır.

**2.1.3. Karşılaştırmalı Analiz: Katman 3 Switch ve Router Farklılıkları**

Ağlar büyüdükçe ve VLAN’lar yaygınlaştıkça, farklı VLAN’lar arasında iletişim kurma ihtiyacı doğmuştur. Bu görevi bir router’a göndermek, router’ı bir performans darboğazı haline getirebildiği için, hem anahtarlama hem de yönlendirme yeteneklerine sahip Katman 3 anahtarlar geliştirilmiştir.1 Her iki cihaz da Katman 3 yönlendirmesi yapabilse de, aralarında donanım tasarımı ve birincil kullanım senaryoları açısından temel farklar bulunur:

* **Katman 3 Switch:** Yönlendirme işlemini donanım tabanlı, yüksek hızlı ASIC’ler kullanarak “wire-speed” (hat hızında) gerçekleştirir. Bu, onu özellikle büyük kurumsal ağlarda veya veri merkezlerinde, farklı VLAN’lar arasında yüksek performanslı yönlendirme (inter-VLAN routing) yapmak için ideal kılar.
* **Router:** Yönlendirme kararlarını genellikle daha esnek olan yazılım tabanlı motorlarla alır. Bu esneklik, ona Ağ Adresi Çevirisi (NAT), Sanal Özel Ağ (VPN) sonlandırma, gelişmiş Hizmet Kalitesi (QoS) ve karmaşık WAN arayüzleri gibi daha zengin özellikler sunma yeteneği kazandırır. Genellikle ağın çevresinde (edge), LAN’ı WAN’a bağlamak için kullanılır.

Bu ayrım, ağ cihazları evrimindeki temel bir ikilemi yansıtır: donanım tabanlı işlemler hızı, yazılım tabanlı işlemler ise esnekliği ve zengin özellikleri temsil eder. Bu nedenle, bir Katman 3 anahtar, bir router’ın tam bir ikamesi değildir; her birinin optimize edildiği farklı görevler vardır.

**2.1.4. Access Point (Erişim Noktası): Kablosuz Ağların Kapısı**

Erişim noktası (AP), kablolu bir Ethernet ağını (IEEE 802.3) kablosuz bir ağa (WLAN — IEEE 802.11) dönüştüren bir cihazdır. Temel olarak, kablolu bir ağa kablosuz erişim sağlamak için Katman 2 seviyesinde bir köprü görevi görür.1

**2.1.5. Firewall (Güvenlik Duvarı): Ağ Çevresinin Koruyucusu**

Güvenlik duvarı, güvenli bir iç ağ ile güvenilmeyen bir dış ağ (genellikle internet) arasında bir bariyer oluşturan bir ağ güvenlik cihazıdır. Önceden tanımlanmış güvenlik kurallarına göre gelen ve giden trafiği denetler ve filtreler. Geleneksel güvenlik duvarları genellikle OSI modelinin 3. ve 4. katmanlarında çalışırken, Yeni Nesil Güvenlik Duvarları (NGFW) uygulama katmanına (Katman 7) kadar denetim yapabilir.1

#### Alt Başlık 2.2: Kablolu Teknolojiler: Ethernet’in Evrimi

Ethernet, IEEE 802.3 standardı ile tanımlanan, on yıllardır yerel alan ağlarının (LAN) tartışmasız standardı olmuş bir teknolojidir. Bu teknolojinin evrimi, hem hız standartlarındaki ilerlemeler hem de bu hızları destekleyen fiziksel medya (kablolama) türlerindeki yeniliklerle el ele gitmiştir.1

**2.2.1. Hız Standartları (10 Mbps’den 100 Gbps’ye)**

Ethernet’in hızı, yıllar içinde katlanarak artmıştır. Bu ilerleme, soyut protokollerin somut fiziksel kısıtlamalara ne kadar bağlı olduğunun ve bir alandaki ilerlemenin diğerinde bir yeniliği nasıl tetiklediğinin bir kanıtıdır.

* **Ethernet (10 Mbps):** Orijinal standart, 10Base-T olarak bilinir ve Kategori 3 (CAT3) UTP kablolar üzerinden çalışır.1
* **Fast Ethernet (100 Mbps):** 100Base-TX standardı, daha yüksek frekansları destekleyen Kategori 5 (CAT5) ve CAT5e kabloların yaygınlaşmasıyla 100 Mbps hıza ulaşmıştır.
* **Gigabit Ethernet (1 Gbps):** 1000Base-T standardı, CAT5e ve Kategori 6 (CAT6) kablolama altyapısının dört çiftini de aynı anda kullanarak 1Gbps hız sunmuştur.
* **10 Gigabit Ethernet ve Ötesi:** 10GBase-T standardı, çapraz karışma (crosstalk) gibi parazitleri daha da azaltan Kategori 6A (CAT6A) veya daha yüksek kaliteli kablolama gerektirir. Veri merkezleri ve servis sağlayıcı altyapılarında ise 40 Gbps ve 100 Gbps gibi daha yüksek hızlar, genellikle fiber optik kablolama üzerinden sağlanmaktadır.

**2.2.2. Kablo Türleri (UTP/STP, Fiber Optik) ve Kategoriler (CAT5e, CAT6/6A)**

* **Bükümlü Çift (Twisted Pair):** En yaygın kullanılan kablo türüdür. Dış elektromanyetik paraziti azaltmak için birbiri etrafına bükülmüş dört çift telden oluşur. **UTP (Unshielded Twisted Pair)** en yaygın türken, **STP (Shielded Twisted Pair)** ek bir metal koruma katmanıyla daha gürültülü ortamlarda kullanılır. **CAT5e, CAT6, CAT6A** gibi kategoriler, kablonun desteklediği maksimum frekansı ve dolayısıyla veri hızını belirtir.1
* **Fiber Optik Kablolar:** Verileri elektrik sinyalleri yerine ışık sinyalleri aracılığıyla iletirler. Bu sayede elektromanyetik parazitlerden etkilenmezler, çok daha yüksek hızlarda ve çok daha uzun mesafelere sinyal kaybı olmadan veri taşıyabilirler. Bu özellikleri nedeniyle özellikle veri merkezleri, kampüs omurgaları ve WAN bağlantılarında tercih edilirler.1

#### Alt Başlık 2.3: Kablosuz Teknolojiler: Wi-Fi ve Mobil Ağlar

Modern iletişim, hareketlilik ve esneklik sağlayan kablosuz teknolojiler olmadan düşünülemez. Bu alandaki en son gelişmeler, sadece hızı artırmakla kalmayıp, aynı zamanda verimliliği ve kapasiteyi de kökten değiştiren yenilikler sunmaktadır.1

**2.3.1. IEEE 802.11 Standartlarının Gelişimi (Wi-Fi 4, 5, 6/6E)**

Wi-Fi teknolojisi, IEEE 802.11 standartları ailesi tarafından tanımlanır. Yıllar içinde bu standartlar, daha yüksek hızlar ve daha iyi verimlilik sunacak şekilde gelişmiştir:

* **802.11n (Wi-Fi 4):** MIMO (Multiple Input, Multiple Output) teknolojisini tanıtarak ve hem 2.4 GHz hem de 5 GHz bantlarını kullanarak hızı teorik olarak 600 Mbps’e kadar artırmıştır.1
* **802.11ac (Wi-Fi 5):** Esas olarak daha az kalabalık olan 5 GHz bandında çalışır ve MU-MIMO (Multi-User MIMO) gibi teknolojilerle gigabit seviyesinde hızlar sunar.1
* **802.11ax (Wi-Fi 6/6E):** Özellikle yoğun cihaz ortamları için tasarlanmıştır ve temel odak noktası verimliliği artırmaktır.

![](https://cdn-images-1.medium.com/max/800/1*nyc2HGIS-z2d_X8Wuq1lMg.png)

Wi-Fi Standartları

**2.3.2. Wi-Fi 6/6E’nin Getirdiği Yenilikler (OFDMA, MU-MIMO, TWT, 6 GHz Bandı)**

Wi-Fi 6'nın evrimi, teknoloji standartlarının pazar ve uygulama taleplerine nasıl yanıt verdiğini gösteren temel bir strateji değişikliğini temsil eder. Önceki standartlar tepe hızına odaklanırken, Wi-Fi 6, akıllı telefon ve IoT cihazlarının patlamasıyla ortaya çıkan yoğunluk sorununa odaklanmıştır. Bu, “ne kadar hızlı?” sorusundan “aynı anda kaç cihaza verimli hizmet verebilirim?” sorusuna geçiştir.

* **OFDMA (Orthogonal Frequency Division Multiple Access):** Wi-Fi 6'nın en devrimci yeniliğidir. Önceki standartların aksine, bir Wi-Fi kanalını Kaynak Birimleri (RU) adı verilen daha küçük alt kanallara böler ve bu alt kanalları aynı anda birden fazla cihaza veri göndermek için kullanır. Bu, özellikle küçük veri paketleri gönderen çok sayıda IoT cihazının olduğu ortamlarda gecikmeyi azaltır ve verimliliği büyük ölçüde artırır.
* **MU-MIMO (Multi-User MIMO):** Bir erişim noktasının (AP) aynı anda birden fazla cihaza veri akışı göndermesine (ve Wi-Fi 6 ile almasına) olanak tanır, bu da toplam ağ kapasitesini artırır.
* **TWT (Target Wake Time):** Pille çalışan mobil ve IoT cihazları için tasarlanmış bir güç tasarrufu mekanizmasıdır. AP, her cihaza veri göndermek veya almak için ne zaman “uyanması” gerektiğini söyleyerek cihazların pil ömrünü önemli ölçüde uzatır.
* **Wi-Fi 6E ve 6 GHz Bandı:** Wi-Fi 6E, Wi-Fi 6'nın tüm bu özelliklerini yeni açılan 6 GHz frekans bandına taşır. Geleneksel 2.4 GHz ve 5 GHz bantlarının aksine, bu “yeşil alan” spektrumu daha az parazit ve yüksek hızlar için gerekli olan çok sayıda geniş kanal sunar. Bu, 8K video akışı ve sanal gerçeklik gibi yüksek bant genişliği gerektiren uygulamalar için idealdir.

**2.3.3. 5G Teknolojisi: Temel Yetenekler (eMBB, URLLC, mMTC) ve Endüstriyel Uygulamalar**

5G, beşinci nesil mobil iletişim teknolojisidir ve 4G’ye (LTE) göre devrim niteliğinde iyileştirmeler sunan bir platformdur. Wi-Fi 6E ve 5G, rakip teknolojiler değil, birbirini tamamlayan teknolojilerdir. Wi-Fi 6E, lisanssız spektrumda çalışarak iç mekanlarda yüksek yoğunluklu, düşük maliyetli LAN dağıtımları için idealken; 5G, lisanslı spektrumda çalışarak geniş coğrafi kapsama alanı, yüksek hızlı mobilite ve ultra güvenilirlik sunar, bu da onu dış mekanlar, WAN bağlantıları ve kritik endüstriyel uygulamalar için vazgeçilmez kılar.1 5G’nin temel yetenekleri üç ana kullanım senaryosu etrafında şekillenir:

1. **eMBB (Enhanced Mobile Broadband — Geliştirilmiş Mobil Geniş Bant):** Çok daha yüksek veri hızları (teorik olarak 10 Gbps’ye kadar) ve artırılmış kapasite sunar.
2. **URLLC (Ultra-Reliable and Low-Latency Communications — Ultra Güvenilir ve Düşük Gecikmeli İletişim):** Gecikme süresini milisaniye seviyelerine (1 ms’ye kadar) düşürür ve son derece yüksek güvenilirlik sağlar. Bu özellik, otonom araçlar, uzaktan cerrahi ve fabrikalardaki robotların gerçek zamanlı kontrolü gibi görevler için hayati öneme sahiptir.
3. **mMTC (Massive Machine-Type Communications — Kitlesel Makine Tipi İletişim):** Kilometrekare başına milyonlarca cihazın (sensörler, akıllı sayaçlar vb.) ağa bağlanmasına olanak tanıyarak Nesnelerin İnterneti’nin (IoT) tam potansiyeline ulaşmasını sağlar.

Bu yetenekler, 5G’yi Endüstri 4.0 için dönüştürücü bir teknoloji haline getirmektedir. Akıllı fabrikalarda esnek üretim hatları, AR destekli uzaktan bakım, otonom lojistik ve akıllı tarım gibi uygulamalar, 5G’nin düşük gecikme ve yüksek güvenilirlik özelliklerinden doğrudan faydalanmaktadır.