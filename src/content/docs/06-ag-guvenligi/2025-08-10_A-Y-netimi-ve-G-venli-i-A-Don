# Ağ Yönetimi ve Güvenliği III: Ağ Donanımları ve Fiziksel Altyapı Güvenliği

---

### Ağ Yönetimi ve Güvenliği III: **Ağ Donanımları ve Fiziksel Altyapı Güvenliği**

![](https://cdn-images-1.medium.com/max/800/1*0XinYbzhfLKDESwpfYfKIQ.png)

Modern dijital altyapıların görünmez ancak vazgeçilmez temelini oluşturan ağ donanımları ve fiziksel katman, veri akışının ve dijital iletişimin can damarlarıdır. Genellikle siber güvenlik tartışmaları yazılım tabanlı tehditlere ve mantıksal katmanlardaki zafiyetlere odaklansa da, bu altyapıyı oluşturan yönlendiriciler, anahtarlar, kablolar ve bu donanımların barındırıldığı fiziksel ortamın güvenliği, genel güvenlik postürünün en kritik ve temel bileşenidir. Fiziksel katmandaki bir ihlal, üzerine inşa edilen en karmaşık güvenlik mimarilerini dahi anlamsız kılabilir. Bu raporun amacı, ağ donanımları ve fiziksel altyapı güvenliğinin temel teknolojilerini, endüstri standartlarını ve modern güvenlik paradigmalarını derinlemesine incelemektir. Teorik bilgiyi, pratik ve uygulanabilir stratejilerle birleştiren bu çalışma, ağların en temel katmanından başlayarak donanım tabanlı güven köklerine kadar uzanan bütüncül bir güvenlik perspektifi sunmayı hedeflemektedir.

---

### Bölüm 1: Temel Ağ Donanımları ve İşlevsel Mimarileri

Bu bölüm, modern ağları oluşturan temel donanım bileşenlerini ve bu bileşenlerin işlevsel mimarilerini detaylı bir şekilde incelemektedir. Her bir cihazın bireysel görevlerinin ötesinde, günümüz ağlarında nasıl bir araya gelerek daha karmaşık, bütünleşik ve çok fonksiyonlu sistemler oluşturduğu ele alınacaktır.

![](https://cdn-images-1.medium.com/max/800/1*k_j5IYCHQwXfvGfVB-MfRg.png)

Ağ Donanımları

### 1.1. Ağ Trafiğinin Yönlendirilmesi: Yönlendiriciler (Routers)

Yönlendiriciler, OSI (Open Systems Interconnection) modelinin 3. Katmanı olan Ağ Katmanı’nda faaliyet gösteren temel ağ cihazlarıdır. Birincil görevleri, farklı ağları, örneğin bir yerel alan ağını (LAN) geniş alan ağına (WAN) veya internete, birbirine bağlamak ve bu ağlar arasında veri paketi iletimini sağlamaktır.

![](https://cdn-images-1.medium.com/max/800/1*NRUWES15R8BF3M2q5MwyjA.png)

Router

Yönlendirme mekanizması, anahtarlardan (switch) temel bir farkla ayrılır. Anahtarlar kararlarını genellikle MAC adreslerine göre verirken, yönlendiriciler yönlendirme kararlarını IP adreslerine göre alır. Bu yetenek, mantıksal olarak ayrılmış ağ segmentleri arasında akıllı trafik yönetimi ve kontrolü sağlar. Kendisine ulaşan bir veri paketinin hedef IP adresini inceleyen yönlendirici, kendi yönlendirme tablosuna (routing table) başvurarak bu paketi hedefe ulaştıracak en uygun yolu belirler. Bu en iyi yol hesaplaması, OSPF (Open Shortest Path First), BGP (Border Gateway Protocol) veya EIGRP (Enhanced Interior Gateway Routing Protocol) gibi dinamik rotalama protokolleri kullanılarak otomatik olarak yapılır. Hangi protokolün kullanılacağı ve yolun nasıl seçileceği, ağın topolojisine ve kurumun idari politikalarına bağlıdır.

Günümüzdeki ağ donanımları arasındaki geleneksel işlevsel sınırlar giderek belirsizleşmektedir. Modern yönlendiriciler, bu eğilimin bir parçası olarak, temel yönlendirme görevlerinin yanı sıra anahtarlama (switching) ve temel güvenlik duvarı (firewall) gibi ek işlevleri de bünyelerinde barındırabilmektedir. Bu konsolidasyon, özellikle küçük ve orta ölçekli işletmeler (KOBİ) için her bir fonksiyon için ayrı donanım alma maliyetini ve yönetim karmaşıklığını azalttığı için önemli bir avantaj sunar. Ancak bu durum, cihazı daha karmaşık hale getirirken, bir arıza veya güvenlik ihlali durumunda birden fazla ağ fonksiyonunun aynı anda etkilenmesi riskini de beraberinde getirir.

### 1.2. Yerel Ağ Anahtarlaması: Anahtarlar (Switches) — Katman 2 ve Katman 3 Yetenekleri

Anahtarlar, OSI modelinin 2. Katmanı olan Veri Bağı Katmanı’nda çalışarak aynı yerel ağ içerisindeki bilgisayarlar, sunucular, yazıcılar gibi cihazları birbirine bağlayan kritik donanımlardır. Geçmişte kullanılan Hub’ların aksine, anahtarlar akıllı cihazlardır. Gelen veri çerçevelerini (frames) ağdaki tüm portlara göndermek yerine, kaynak MAC adreslerini öğrenerek bir MAC adresi tablosu (CAM tablosu) oluştururlar. Bu tablo sayesinde, gelen bir çerçeveyi yalnızca hedef cihazın bağlı olduğu porta yönlendirirler. Bu mekanizma, gereksiz ağ trafiğini ve veri çarpışmalarını (collisions) büyük ölçüde önleyerek ağ performansını artırır.

![](https://cdn-images-1.medium.com/max/800/1*dVrvRAvKIIWiuLKOWG80sg.png)

Switch

Anahtarlar temel olarak iki kategoride incelenir:

* **Katman 2 (L2) Anahtarlar:** Bu anahtarlar, temel işlevlerini MAC adreslerine dayalı olarak gerçekleştirir. Ancak modern L2 anahtarlar, basit çerçeve yönlendirmenin çok ötesinde yeteneklere sahiptir. Sanal LAN (VLAN) oluşturarak tek bir fiziksel anahtar üzerinde birden fazla mantıksal ağ segmenti yaratabilirler. Bu, ağ trafiğini izole etmek ve güvenliği artırmak için kullanılır. Ayrıca, bir porta yalnızca belirli MAC adreslerinin bağlanmasına izin veren Port Güvenliği (Port Security) ve bir porttaki trafiği analiz amacıyla başka bir porta kopyalayan Port Yansıtma (Port Mirroring) gibi önemli güvenlik ve yönetim özellikleri sunarlar.
* **Katman 3 (L3) Anahtarlar (Multilayer Switches):** Bu gelişmiş anahtarlar, hem Katman 2 anahtarlama hem de Katman 3 yönlendirme yeteneklerini bir araya getirir. L3 anahtarlar, farklı VLAN’lar arasındaki yönlendirme (Inter-VLAN routing) işlemini, harici bir yönlendiriciye ihtiyaç duymadan, donanım tabanlı olarak çok yüksek hızlarda gerçekleştirebilirler. Bu özellikleri, onları özellikle büyük kurumsal ağlarda omurga (backbone) veya dağıtım katmanı cihazı olarak ideal kılar.

Anahtarlar, CLI (Komut Satırı Arayüzü) veya web tabanlı arayüzler üzerinden yönetilebilir. Fiziksel olarak, “stacking” (istifleme) teknolojisi sayesinde birden fazla anahtar tek bir mantıksal birim gibi yönetilebilir, bu da yönetim kolaylığı ve yedeklilik sağlar. “Uplink” portları ise anahtarların hiyerarşik bir yapıda (örneğin, kenar anahtarların dağıtım anahtarına bağlanması) birbirine bağlanmasını mümkün kılar.

### 1.3. Ağ Güvenliğinin Bekçileri: Güvenlik Duvarları (Firewalls) ve Birleşik Tehdit Yönetimi (UTM)

Güvenlik duvarları, kurumun iç ağı (güvenilir bölge) ile dış ağlar (genellikle internet gibi güvenilmeyen bölgeler) arasında bir bariyer görevi görür. Temel işlevi, önceden tanımlanmış bir dizi güvenlik kuralına dayanarak gelen ve giden ağ trafiğini denetlemek, filtrelemek ve kontrol etmektir. Hem özel olarak bu iş için tasarlanmış donanım tabanlı cihazlar (appliances) hem de bir sunucu veya işletim sistemi üzerinde çalışan yazılım tabanlı çözümler olarak bulunabilirler.

![](https://cdn-images-1.medium.com/max/800/1*VrtyRsOk1XkW05VTKClE4A.png)

Firewall

Geleneksel güvenlik duvarları, paketleri IP adresi ve port numarası gibi bilgilere göre filtrelerken (stateful packet inspection), modern güvenlik duvarları çok daha gelişmiş yeteneklere sahiptir. **Birleşik Tehdit Yönetimi (Unified Threat Management — UTM)** olarak adlandırılan cihazlar, bu evrimin en somut örneğidir. UTM’ler, standart güvenlik duvarı işlevselliğini; Saldırı Tespit ve Önleme Sistemleri (IDS/IPS), antivirüs/anti-malware taraması, web ve içerik filtreleme, Sanal Özel Ağ (VPN) sonlandırma ve Uygulama Kontrolü gibi çok sayıda güvenlik özelliğini tek bir platformda birleştirir.

Bu fonksiyon birleşmesi, donanım konsolidasyonu yoluyla maliyet ve yönetim karmaşıklığını azaltma yönündeki güçlü bir endüstri trendini yansıtmaktadır. Ancak bu yaklaşımın stratejik sonuçları dikkatle değerlendirilmelidir. Birleşik bir UTM cihazı, ağın tüm temel işlevlerini (yönlendirme, güvenlik, erişim kontrolü) tek bir noktada topladığı için, “tek bir sepetin tüm yumurtaları taşıması” riskini doğurur. Cihazın arızalanması veya başarılı bir siber saldırıya uğraması, ağın neredeyse tamamen çökmesine neden olabilir. Bu, her fonksiyon için ayrık (dedicated) cihazların kullanıldığı bir mimariye göre çok daha yüksek bir risk profili oluşturur. Bu nedenle, UTM cihazlarının seçimi ve yapılandırılması, bir kurumun risk toleransı ve iş sürekliliği planları göz önünde bulundurularak yapılmalıdır. Etkin bir koruma için, bu cihazların bir sistem yöneticisi tarafından doğru ve titiz bir şekilde yapılandırılması kritik öneme sahiptir, zira yanlış bir yapılandırma ciddi güvenlik açıklarına yol açabilir.

### 1.4. Kablosuz Erişimin Temelleri: Erişim Noktaları (Access Points — AP)

Erişim Noktaları (AP’ler), kablosuz cihazların (dizüstü bilgisayarlar, akıllı telefonlar, tabletler) kablolu ağ altyapısına bağlanmasını sağlayan bir köprü görevi görür. Radyo frekansları (RF) aracılığıyla Wi-Fi sinyalleri yayarak, kullanıcıların fiziksel bir kabloya ihtiyaç duymadan ağa erişebildiği bir kablosuz yerel alan ağı (WLAN) oluştururlar.

![](https://cdn-images-1.medium.com/max/800/1*BB5o1ZHqGc3_CcdfBvEBoQ.png)

Access Points

AP’ler genellikle iki temel modda çalışır:

* **Altyapı Modu (Infrastructure Mode):** Bu, en yaygın kullanılan moddur. AP, merkezi bir bağlantı noktası olarak işlev görür ve kapsama alanındaki tüm kablosuz cihazlardan gelen trafik bu cihaz üzerinden geçer. Ev, ofis, kafe gibi ortamlardaki standart Wi-Fi ağları bu modda çalışır.
* **Ad-hoc Modu:** Bu modda, cihazlar bir AP’ye ihtiyaç duymadan doğrudan birbirleriyle iletişim kurar. Bu, merkezi olmayan bir ağ yapısıdır ve genellikle az sayıda cihaz arasında geçici dosya paylaşımları için kullanılır. Bluetooth veya Wi-Fi Direct teknolojileriyle yapılan aktarımlar bu moda iyi birer örnektir.

### 1.5. Merkezi Kablosuz Ağ Yönetimi: Wireless LAN Controller (WLC) ve Mesh Ağ Yapıları

Büyük ölçekli kablosuz ağların yönetimi, iki temel ve zıt felsefeye dayanan mimariler etrafında şekillenir: WLC tabanlı sistemlerin sunduğu katı merkeziyetçilik ve Mesh ağların benimsediği dağıtık, merkezi olmayan yapı. Bu, sadece bir teknoloji seçimi değil, aynı zamanda kontrol, esneklik ve dayanıklılık arasında yapılan stratejik bir tercihtir.

#### **Wireless LAN Controller (WLC)**

![](https://cdn-images-1.medium.com/max/800/1*fGB8KjJIihKfecVgZq_WwQ.png)

Wireless LAN Controller

**Mimari:** Özellikle onlarca veya yüzlerce AP’nin bulunduğu kurumsal kampüsler, hastaneler ve büyük ofisler gibi ortamlarda, tüm bu AP’lerin yönetimini tek bir noktadan merkezileştirmek için kullanılan bir cihazdır. Bu mimaride, AP’ler “hafif” (Lightweight Access Points — LAP) olarak adlandırılır. LAP’ler, üzerlerinde çok az yapılandırma barındıran ve zekanın büyük kısmını WLC’ye devreden “aptal” terminaller olarak çalışır.

**Protokoller ve Çalışma Prensibi:** LAP’ler, WLC ile iletişim kurmak, yapılandırma dosyalarını, firmware güncellemelerini ve güvenlik politikalarını almak için LWAPP (Lightweight Access Point Protocol) veya onun daha modern ardılı olan CAPWAP (Control and Provisioning of Wireless Access Points) protokolünü kullanır. Bir LAP enerji aldığında, ağda bir WLC’yi bulmak için DHCP veya DNS sorguları gibi yöntemlerle bir keşif süreci başlatır. WLC’yi bulduğunda ona katılır (join) ve tüm operasyonel direktifleri ondan almaya başlar.

**Merkezi Yönetimin Avantajları:** Bu merkeziyetçi yaklaşım, büyük ağlarda önemli yönetimsel faydalar sunar: AP’lerin toplu olarak yapılandırılması, tüm ağ genelinde tutarlı güvenlik politikalarının (örneğin, WPA3, 802.1X kimlik doğrulama) uygulanması, RF yönetiminin otomasyonu (WLC, AP’lerin kanal ve güç ayarlarını çevresel koşullara göre dinamik olarak optimize eder), kullanıcılar arasında yük dengeleme (bir AP çok yoğunlaştığında kullanıcıları yakındaki daha az yoğun AP’lere yönlendirme) ve kullanıcıların AP’ler arasında kesintisiz bir şekilde geçiş yapmasını sağlayan sorunsuz dolaşım (roaming). Ayrıca, bir AP arızalandığında, WLC komşu AP’lerin sinyal gücünü artırarak oluşan kapsama alanı boşluğunu otomatik olarak kapatmaya çalışabilir.

#### **Kablosuz Mesh Ağları**

![](https://cdn-images-1.medium.com/max/800/1*u2SR48AvAhMUAm5WLa8sbA.png)

Kablosuz Mesh Ağı

**Mimari:** Mesh ağlar, WLC’nin merkezi kontrol felsefesinin tam tersi bir yaklaşım sunar. Bu ağlar, merkezi bir kontrolcüye dayanmayan, kendi kendini organize eden ve kendi kendini iyileştiren ad-hoc bir yapıya sahiptir. Ağdaki her bir düğüm (node), diğer düğümlerle doğrudan iletişim kurma yeteneğine sahiptir ve veri paketlerini hedefe ulaştırmak için en verimli ve en az tıkalı yolu dinamik olarak seçer.

**Avantajları:**

* **Dayanıklılık ve Güvenilirlik:** Mesh yapısının en büyük avantajı, yüksek hata toleransıdır. Ağdaki bir düğüm veya düğümler arasındaki bir bağlantı kopsa bile, ağ trafiği otomatik olarak alternatif yollara yönlendirilir ve iletişim kesintiye uğramaz. Bu, onu hat çöküntülerine karşı son derece dayanıklı kılar.
* **Kolay Genişletilebilirlik ve Esneklik:** Kapsama alanını genişletmek, ağa yeni bir mesh düğümü eklemek kadar basittir. Bu, özellikle kablolamanın zor veya imkansız olduğu geniş fabrika sahaları, depolar, dış mekanlar veya çok katlı betonarme binalar için ideal bir çözüm sunar.
* **Kesintisiz Bağlantı Deneyimi:** Mesh sistemleri, tek bir ağ adı (SSID) altında çalışır. Kullanıcılar veya otonom araçlar gibi mobil cihazlar ağ içinde hareket ederken, sistem onları otomatik olarak en güçlü sinyali sağlayan düğüme kesintisiz bir şekilde aktarır. Bu, her biri ayrı bir ağ oluşturan menzil genişleticilerin (range extenders) neden olduğu bağlantı kopmalarını ve manuel ağ değiştirme zorunluluğunu ortadan kaldırır.

**Dezavantajları:**

* **Performans ve Gecikme:** Kablosuz mesh ağlarda, bir veri paketi hedefe ulaşmak için birden fazla kablosuz düğüm üzerinden “atlamak” (hop) zorunda kalabilir. Her atlama, gecikmeyi (latency) artırır ve toplam veri çıkış hızını (throughput) düşürür. Bu nedenle, mesh ağlar yüksek bant genişliği ve düşük gecikme gerektiren video konferans veya online oyun gibi uygulamalar için her zaman en iyi performansı sunmayabilir.
* **Maliyet ve Karmaşıklık (Kablolu Mesh):** Her düğümün diğer tüm düğümlere fiziksel olarak bağlandığı tam kablolu bir mesh topolojisi, gereken kablo ve port sayısı nedeniyle son derece maliyetli ve karmaşıktır. Bu nedenle bu yapı, kablosuz mesh ağlardan farklı olarak, genellikle kritik WAN omurgaları dışında nadiren kullanılır.

Sonuç olarak, “en iyi” kablosuz mimari diye bir kavram yoktur; yalnızca “belirli bir senaryo için en uygun” mimari vardır. Güvenlik politikalarının sıkı bir şekilde uygulanması gereken ve yüksek kullanıcı yoğunluğuna sahip kurumsal bir ofis, WLC’nin merkezi kontrolünden faydalanırken; kablolamanın zor olduğu geniş bir alan veya kesintisiz kapsama istenen bir ev, mesh ağların esnekliğinden ve dayanıklılığından yararlanır.

### 1.6. Yük Dengeleme Stratejileri: Yük Dengeleyiciler (Load Balancers)

Yük Dengeleyiciler, gelen uygulama ve ağ trafiğini birden fazla sunucudan oluşan bir sunucu havuzuna (server farm/pool) akıllıca dağıtan cihazlardır. Temel amaçları, tek bir sunucunun aşırı yüklenmesini önlemek, böylece uygulamanın yanıt verebilirliğini (responsiveness) ve kullanılabilirliğini (availability) en üst düzeye çıkarmaktır. Bu cihazlar, genellikle Uygulama Dağıtım Kontrolcüleri (Application Delivery Controllers — ADC) olarak adlandırılan daha geniş bir ürün kategorisinin temel bir bileşenidir. Yük dengeleyicilerin evrimi, basit ağ cihazlarından karmaşık uygulama dağıtım kontrolcülerine doğru bir geçişi temsil etmektedir ve bu evrim, en net şekilde Katman 4 ve Katman 7 yük dengeleme arasındaki farkla anlaşılabilir.

![](https://cdn-images-1.medium.com/max/800/1*XIicX2GoNfM2aNxStwWaNA.png)

Load Balancer

#### **Katman 4 (Transport Layer) Yük Dengeleme**

* **Çalışma Prensibi:** Bu tür yük dengeleyiciler, OSI modelinin 4. Katmanı olan Taşıma Katmanı’nda çalışır. Yönlendirme kararlarını, paketin içeriğine bakmaksızın, yalnızca IP adresi ve port numarası (TCP/UDP) gibi ağ katmanı bilgilerine dayanarak verir.
* **İşlem ve Performans:** Katman 4 yük dengeleyici, gelen paketleri neredeyse hiç incelemeden, önceden belirlenmiş bir algoritmaya (örneğin, Round Robin) göre sunucu havuzundaki bir sunucuya çok hızlı bir şekilde iletir. Bu “hafif” işlem, onu çok hızlı ve daha az CPU-yoğun bir çözüm yapar. UDP tabanlı video akışı veya DNS gibi hızın kritik olduğu servisler için etkilidir.
* **Sınırlılıklar:** Paket içeriğine “kör” olduğu için, gelen isteğin türüne göre (örneğin, bir resim isteği mi, bir video isteği mi, yoksa bir API çağrısı mı) akıllı yönlendirme yapma yeteneğinden yoksundur.

#### **Katman 7 (Application Layer) Yük Dengeleme**

* **Çalışma Prensibi:** Bu gelişmiş yük dengeleyiciler, OSI modelinin en üst katmanı olan 7. Katman’da (Uygulama Katmanı) çalışır ve bir ters proxy (reverse proxy) gibi davranır. İstemciden gelen ağ bağlantısını kendi üzerinde sonlandırır, paketin içeriğini (HTTP başlıkları, URL, çerezler, vb.) tamamen inceler ve bu uygulama katmanı bilgilerine dayanarak çok daha akıllı yönlendirme kararları verir.
* **Gelişmiş Yetenekler ve Stratejik Önemi:** Katman 7 yük dengelemenin yükselişi, doğrudan modern uygulama mimarilerindeki (monolitik yapılardan mikroservislere geçiş) değişimin bir yansımasıdır. Modern bir web sayfası isteği, aslında onlarca farklı mikroservise (kullanıcı kimlik doğrulama, ürün kataloğu, resim sunucusu, ödeme ağ geçidi) yapılan çağrılardan oluşabilir. Katman 4 yük dengeleyici bu farklı istekleri ayırt edemezken, Katman 7 yük dengeleyici aşağıdaki gibi yeteneklerle “uygulama akıcılığı” (application fluency) sağlar:
* **İçerik Tabanlı Yönlendirme:** Gelen isteğin URL’sine (`/api/payment` veya `/images/product.jpg`) bakarak her isteği, o işi yapmak için özel olarak optimize edilmiş ilgili sunucu grubuna yönlendirebilir. Bu, kaynakların verimli kullanılmasını sağlar.
* **Oturum Kalıcılığı (Session Persistence / Sticky Sessions):** Bir kullanıcının oturumu boyunca tüm isteklerinin aynı sunucuya yönlendirilmesini sağlamak için HTTP çerezlerini (cookies) okuyabilir ve yönetebilir. Bu, oturum bilgilerinin sunucu tarafında tutulduğu e-ticaret siteleri gibi uygulamalar için kritik öneme sahiptir.
* **SSL Boşaltma (SSL Offload):** Gelen şifreli HTTPS trafiğinin şifresini çözme (decryption) işlemini kendi üzerine alarak, arka plandaki uygulama sunucularını bu CPU-yoğun işlemden kurtarır ve genel uygulama performansını artırır.
* **Modern Protokoller İçin Zorunluluk:** HTTP/2 ve gRPC gibi tek bir TCP bağlantısı üzerinden birden fazla isteği eş zamanlı olarak çoğullayan (multiplexing) modern protokoller için Katman 7 yük dengeleme bir seçenek değil, bir zorunluluktur. Katman 4, bu tek bağlantı içindeki bireysel istekleri ayırt edemez ve dolayısıyla etkili bir yük dengeleme yapamaz.

Bu evrim, yük dengeleyici yapılandırmasının artık sadece bir ağ görevi olmaktan çıkıp, uygulamanın nasıl dağıtıldığı ve çalıştığıyla ilgili derin bilgi gerektiren bir uygulama mimarisi görevi haline geldiğini göstermektedir. Bu durum, ağ ve uygulama ekipleri (DevOps) arasında sıkı bir işbirliğini zorunlu kılmaktadır.

Aşağıdaki tablo, iki yük dengeleme yaklaşımı arasındaki temel farkları ve stratejik etkilerini özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*uCCf5zODV3BjKEh5ls8_Dg.png)

**Katman 4 ve Katman 7 Yük Dengeleyicilerin Karşılaştırmalı Analizi**

---

### Bölüm 2: Fiziksel Altyapı: Kablolama Standartları ve Ağ Topolojileri

Bu bölüm, ağların somut temelini oluşturan fiziksel altyapıyı, yani kablolama ve ağ topolojilerini mercek altına almaktadır. Verilerin üzerinde seyahat ettiği iletim ortamlarının özelliklerinden, bu bağlantıların endüstri genelinde nasıl standartlaştırıldığına ve ağların fiziksel olarak nasıl şekillendirildiğine kadar tüm konuları kapsayacaktır. Fiziksel katman, genellikle göz ardı edilse de, bir ağın performansını, güvenilirliğini ve hatta güvenliğini temelden etkileyen stratejik kararların alındığı bir alandır.

### 2.1. Veri İletim Ortamları: Kablo Tiplerinin Karşılaştırmalı Analizi

Ağ altyapısı için kablo seçimi, sadece bağlantı sağlamanın ötesinde, ağın performansını, maliyetini, gelecekteki genişletilebilirliğini ve güvenliğini doğrudan etkileyen temel bir karardır. Her kablo tipinin kendine özgü avantajları ve dezavantajları vardır.

#### 2.1.1. Bakır Kablolar: Korumasız (UTP) ve Korumalı (STP) Bükümlü Çift

Bükümlü çift kablolar, içlerindeki iletken tellerin çiftler halinde birbirine bükülmesiyle elektromanyetik girişimi (crosstalk) azaltan, günümüz LAN altyapısının en yaygın bileşenidir.

![](https://cdn-images-1.medium.com/max/800/1*JjKobkLx8NHNLFO0uwsqYw.png)

UTP vs STP

* **UTP (Unshielded Twisted Pair — Korumasız Bükümlü Çift):** Ethernet ağlarında en yaygın kullanılan kablo türüdür. Düşük maliyeti, kurulum kolaylığı ve esnekliği nedeniyle ofis ve ev ağlarında standart haline gelmiştir. CAT5e, CAT6, CAT6a ve CAT7 gibi farklı kategorilere ayrılırlar; bu kategoriler, destekledikleri veri aktarım hızı ve bant genişliği kapasitelerini belirtir. Ancak, UTP kabloların dışında ek bir koruma kılıfı bulunmadığından, elektrik motorları, floresan lambalar veya diğer güç kablolarının neden olduğu elektromanyetik girişime (EMI) ve radyo frekansı girişimine (RFI) karşı hassastırlar.
* **STP (Shielded Twisted Pair — Korumalı Bükümlü Çift):** UTP’nin temel yapısına ek olarak, içindeki bükümlü tel çiftlerinin etrafında metal bir folyo veya örgü şeklinde bir koruma katmanı (kalkan) içerir. Bu kalkan, kabloyu dış kaynaklı EMI ve RFI’ye karşı çok daha dirençli hale getirir. Bu özelliği sayesinde, EMI seviyesinin yüksek olduğu endüstriyel ortamlar, fabrikalar, hastaneler veya veri merkezleri gibi yerlerde tercih edilir. Sağladığı üstün koruma, onu UTP’ye göre daha pahalı, daha sert ve kurulumu daha zor bir seçenek yapar.

Fiziksel katman, sadece bağlantı değil, aynı zamanda bir güvenlik temelidir. UTP gibi korumasız kablolar, içlerinden geçen elektrik sinyallerini zayıf da olsa dışarıya sızdırabilir. Bu sızıntılar, “Tempest” olarak bilinen gelişmiş dinleme teknikleriyle yakalanarak verilerin çalınmasına olanak tanıyabilir. STP’nin metal koruması bu sinyal sızıntısını büyük ölçüde engelleyerek dinlemeyi zorlaştırır ve fiziksel katmanda ek bir güvenlik seviyesi sağlar.

#### 2.1.2. Koaksiyel (Coaxial) Kablolar

Koaksiyel kablolar, merkezi bir bakır iletken, bu iletkeni çevreleyen yalıtkan bir dielektrik katman, bu katmanın üzerinde metal bir örgü zırh ve en dışta koruyucu bir plastik kılıftan oluşan katmanlı bir yapıya sahiptir. Bu yapı, ona bükümlü çift kablolara göre doğal olarak daha iyi bir parazit direnci kazandırır. Geçmişte, özellikle Otobüs (Bus) topolojisine sahip Ethernet ağlarında yaygın olarak kullanılmış olsalar da, günümüzde bu alandaki yerlerini büyük ölçüde UTP kablolara bırakmışlardır. Modern kullanımları daha çok kablolu TV (CATV) dağıtımı ve kablolu internet (Cable Modem) bağlantılarıyla sınırlıdır. Koaksiyel kabloların en büyük dezavantajı, sinyalin mesafe arttıkça zayıflaması (yüksek zayıflama/attenuation), bu da onları uzun mesafeli veri aktarımları için verimsiz kılmasıdır.

![](https://cdn-images-1.medium.com/max/800/1*fRrKBRjjuUeNfndzLucPzA.png)

Koaksiyel Kablo

#### 2.1.3. Işık Hızında İletişim: Fiber Optik Kablolar

Fiber optik kablolar, verileri geleneksel bakır kablolar gibi elektrik sinyalleriyle değil, ışık darbeleriyle iletir. Bu iletim, cam veya plastikten yapılmış, insan saçı kalınlığındaki ince fiber teller aracılığıyla gerçekleşir.

![](https://cdn-images-1.medium.com/max/800/1*hjf5jibnEtvo-EZkRRwOmA.png)

Fiber Optik Kablo

Işıkla çalıştıkları için, elektromanyetik girişime (EMI) ve radyo frekansı girişimine (RFI) karşı tamamen bağışıktırlar. Bu temel özellik, onlara bir dizi üstün avantaj sağlar:

* **Yüksek Bant Genişliği ve Hız:** Işık, elektrik sinyallerinden çok daha fazla veri taşıyabilir, bu da fiber optik kabloların terabit/saniye seviyelerine varan muazzam bir bant genişliği sunmasını sağlar.
* **Uzun Mesafe İletimi:** Sinyal kaybı (zayıflama) çok düşüktür, bu da verilerin kilometrelerce uzağa güçlendiriciye (repeater) ihtiyaç duymadan taşınabilmesini mümkün kılar.
* **Üstün Güvenlik:** Elektromanyetik sinyal yaymadıkları için, dışarıdan dinlenmeleri (eavesdropping) neredeyse imkansızdır. Veri çalmak için kabloya fiziksel olarak müdahale etmek gerekir ki bu da tespit edilmesi çok daha kolay bir eylemdir. Bu, onu en güvenli kablolama seçeneği yapar.

Bu avantajlar, fiber optik kabloları özellikle veri merkezleri arası bağlantılar, kampüs ve şehir omurgaları (backbone), uzun mesafeli telekomünikasyon hatları ve yüksek performans gerektiren tüm ağ uygulamaları için vazgeçilmez kılar. Ancak bu üstünlüklerin bir bedeli vardır: Fiber optik kablolar, bakır kablolara göre daha pahalıdır ve sonlandırılması (termination) ile birleştirilmesi (splicing) özel ekipman ve eğitimli personel gerektirir.

Aşağıdaki tablo, temel kablo tiplerinin kritik özelliklerini karşılaştırmalı olarak sunmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*uCCf5zODV3BjKEh5ls8_Dg.png)

**Ağ Kablo Tiplerinin Özellik ve Performans Karşılaştırması**

### 2.2. Yapısal Kablolama Standartları: TIA/EIA-568

TIA/EIA-568, ticari binalardaki yapısal kablolama sistemleri için pin dizilimlerini, kablo mesafelerini, performans özelliklerini ve kurulum pratiklerini tanımlayan bir endüstri standartları setidir. Bu standartların varlığı, farklı üreticiler tarafından üretilen kablo, konnektör, patch panel ve diğer ağ bileşenlerinin birbiriyle sorunsuz ve uyumlu bir şekilde çalışmasını garanti eder.

#### 2.2.1. T568A ve T568B Standartları

Bu iki standart, UTP kabloların ucuna takılan 8 pinli RJ-45 konnektör içindeki sekiz renkli telin hangi pinlere bağlanacağını kesin olarak belirler. İki standart arasındaki tek fiziksel fark, yeşil ve turuncu renkli tel çiftlerinin yerlerinin (Pin 1&2 ile Pin 3&6) değiştirilmiş olmasıdır. İşlevsel olarak her iki standart da aynı performansı sunar.

![](https://cdn-images-1.medium.com/max/800/1*MFqXd6X5BvGRGqlGFiws-g.png)

T568A vs T568B

* **T568B:** Günümüzde ticari ve konutsal kablolama projelerinde fiili standart haline gelmiştir ve en yaygın kullanılan şemadır.
* **T568A:** ABD federal hükümeti tarafından yürütülen projelerde zorunlu olarak kullanılır. Ayrıca, eski tek ve iki çiftli USOC telefon sistemleriyle geriye dönük uyumluluk sağlaması gibi tarihsel bir avantaja sahiptir.

En önemli kural, bir ağ kurulumu boyunca tutarlılığın korunmasıdır. Bir binadaki tüm kablolama, ya T568A ya da T568B standardına göre yapılmalıdır.

#### 2.2.2. RJ-45 Konnektör Pin Dizilimleri: Düz (Straight-Through) ve Çapraz (Crossover) Bağlantılar

Kabloların her iki ucunun hangi standartla sonlandırıldığı, kablonun işlevini belirler:

* **Düz Kablo (Straight-Through):** Kablonun her iki ucu da aynı standartla (her ikisi de T568A veya her ikisi de T568B) sonlandırılır. Bu, ağdaki en yaygın kablo türüdür ve farklı katmanlarda çalışan cihazları birbirine bağlamak için kullanılır; örneğin, bir bilgisayarı (Host) bir anahtara (Switch) veya bir yönlendiriciyi bir anahtara bağlamak gibi.

![](https://cdn-images-1.medium.com/max/800/1*8x3tbnjjQcnOsQUtYbHyNw.png)

* **Çapraz Kablo (Crossover):** Kablonun bir ucu T568A, diğer ucu ise T568B standardına göre sonlandırılır. Bu işlem, gönderim (Transmit — TX) ve alım (Receive — RX) pinlerini çaprazlar. Bu kablo türü, aynı türdeki iki cihazı, aralarında bir anahtar veya hub gibi bir aracı cihaz olmadan doğrudan birbirine bağlamak için kullanılır; örneğin, iki bilgisayarı veya iki anahtarı birbirine bağlamak gibi. Ancak, modern ağ anahtarlarının ve ağ kartlarının çoğunda bulunan

![](https://cdn-images-1.medium.com/max/800/1*b-6qOmahXSlEtJrMwuqYMw.png)

* **Auto-MDI/MDIX** özelliği, kablo tipini otomatik olarak algılayıp portun pin yapılandırmasını kendiliğinden ayarlayabildiği için, çapraz kablolara olan ihtiyaç büyük ölçüde ortadan kalkmıştır.

### 2.3. Ağların Fiziksel Mimarisi: Ağ Topolojileri

Ağ topolojisi, bir ağdaki cihazların (düğümlerin) ve aralarındaki bağlantıların fiziksel veya mantıksal düzenini tanımlayan mimari bir plandır. Topoloji seçimi, sadece cihazların nasıl bağlandığını gösteren bir şema olmanın çok ötesindedir; bu seçim, ağın maliyetini, performansını, ölçeklenebilirliğini ve en önemlisi arızalara karşı ne kadar dayanıklı olacağını belirleyen stratejik bir risk yönetimi kararıdır. Her topoloji, kendine özgü bir “hata alanı” (failure domain) ve “tek hata noktası” (single point of failure — SPoF) profiline sahiptir.

#### 2.3.1. Merkezi Bağlantı: Yıldız (Star) Topolojisi

![](https://cdn-images-1.medium.com/max/800/1*xq6KRi9mFmHc3JHk47i-Ig.png)

Star Topology

* **Yapı:** Tüm ağ cihazları, bir anahtar (switch) veya hub gibi merkezi bir cihaza ayrı kablolarla bağlanır. Günümüz Ethernet LAN’larında kullanılan en popüler ve yaygın topolojidir.
* **Avantajları:** Kurulumu, yönetimi ve sorun gidermesi oldukça kolaydır. Bir uç cihaza giden kabloda veya cihazın kendisinde bir arıza meydana gelirse, bu durum yalnızca o cihazı etkiler; ağın geri kalanı normal şekilde çalışmaya devam eder. Bu, hata alanını tek bir bağlantıyla sınırlar.
* **Dezavantajları:** En büyük zayıflığı, merkezi cihaza olan bağımlılığıdır. Eğer merkezi anahtar veya hub arızalanırsa, tüm ağ iletişimi durur. Bu, merkezi cihazı kritik bir tek hata noktası (SPoF) haline getirir. Ayrıca, her cihazın merkeze ayrı bir kabloyla bağlanması gerektiğinden, diğer bazı topolojilere göre daha fazla kablo gerektirir.

#### 2.3.2. Paylaşımlı Hat: Otobüs (Bus) Topolojisi

![](https://cdn-images-1.medium.com/max/800/1*v1rYev12y5WXk0UAZ08ASQ.png)

Bus Topology

* **Yapı:** Tüm cihazlar, “omurga” (backbone) adı verilen tek bir ana kablo hattına T-konnektörler aracılığıyla bağlanır. Sinyal yansımalarını önlemek için ana kablonun her iki ucu bir sonlandırıcı (terminator) ile kapatılmalıdır.
* **Avantajları:** Az kablo kullandığı ve merkezi bir cihaza ihtiyaç duymadığı için kurulumu basit ve ekonomiktir.
* **Dezavantajları:** Bu topoloji, modern ağlarda neredeyse hiç kullanılmaz çünkü son derece kırılgandır. Omurga kablosunun herhangi bir yerindeki bir kopukluk veya arıza, tüm ağı çalışmaz hale getirir. Hata alanı tüm ağı kapsar ve omurga kablosu tek bir hata noktasıdır. Ayrıca, ağdaki cihaz sayısı arttıkça veri çarpışmaları artar ve performans önemli ölçüde düşer.

#### 2.3.3. Döngüsel Veri Akışı: Halka (Ring) Topolojisi

![](https://cdn-images-1.medium.com/max/800/1*OSqknuwFEXaUj_4WeJg1pg.png)

Ring Topology

* **Yapı:** Cihazlar, kapalı bir dairesel döngü oluşturacak şekilde ardışık olarak birbirine bağlanır. Veriler, genellikle “jeton” (token) adı verilen bir mekanizma ile halka etrafında tek bir yönde dolaşır.
* **Avantajları:** Merkezi bir cihaza ihtiyaç duymaması ve düzenli veri akışı sayesinde çarpışma olasılığının düşük olması gibi avantajları vardır.
* **Dezavantajları:** Otobüs topolojisi gibi, halka topolojisi de kırılgandır. Halkadaki tek bir cihazın veya kablonun arızalanması, tüm halkanın iletişimini keserek ağı çökertebilir. Ağa yeni bir cihaz eklemek veya çıkarmak, halkayı geçici olarak kırmak gerektiğinden tüm ağı kesintiye uğratır.

#### 2.3.4. Yüksek Dayanıklılık: Örgü (Mesh) Topolojisi

![](https://cdn-images-1.medium.com/max/800/1*mjKnxAD_DhYVPgP2WFBbjA.png)

Mesh Topology

* **Yapı:** Her cihazın ağdaki diğer birden çok cihaza veya ideal durumda diğer tüm cihazlara doğrudan bağlı olduğu bir yapıdır. Her düğümün diğer tüm düğümlere bağlı olduğu yapıya “tam mesh” (full mesh), sadece bazı kritik düğümlere bağlı olduğu yapıya ise “kısmi mesh” (partial mesh) denir.
* **Avantajları:** En büyük avantajı, sunduğu olağanüstü hata toleransı ve dayanıklılıktır. Bir bağlantı veya düğüm arızalansa bile, trafik için her zaman alternatif yollar mevcuttur, bu da teorik olarak tek bir hata noktasının olmamasını sağlar. Veri iletimi, ara cihazlardan geçmek zorunda kalmadığı için hızlı ve güvenlidir.
* **Dezavantajları:** Tam mesh bir yapı, her cihaz arasında ayrı bir kablo gerektirdiği için (N cihaz için N(N−1)/2 bağlantı) kurulumu son derece maliyetli, karmaşık ve yönetimi zordur. Bu nedenle, tam mesh LAN’larda nadiren kullanılır; daha çok internet omurgası, WAN bağlantıları ve kesintinin kabul edilemez olduğu kritik altyapılarda (örneğin, askeri ağlar) kısmi mesh yapıları tercih edilir.

#### 2.3.5. Entegre Yapılar: Hibrit (Hybrid) ve Ağaç (Tree) Topolojileri

* **Hibrit Topoloji:** İki veya daha fazla temel topolojinin bir araya getirilmesiyle oluşturulan karma bir yapıdır. Örneğin, farklı departmanlardaki yıldız topolojisine sahip ağların, bir otobüs topolojisi omurgasıyla birbirine bağlanması bir “Yıldız-Otobüs” hibrit topolojisidir. Amacı, farklı topolojilerin avantajlarını birleştirmektir. Esnek ve ölçeklenebilir olsalar da tasarımları karmaşık ve maliyetli olabilir.
* **Ağaç Topolojisi (Tree):** Hiyerarşik bir yıldız topolojisi olarak da düşünülebilir. Birden fazla yıldız topolojisindeki ağın, bir ana omurga hattına (genellikle otobüs veya yıldız) bağlanmasıyla oluşur. Geniş coğrafi alanlara yayılmış ağları mantıksal segmentlere ayırmak ve yönetimi kolaylaştırmak için kullanılır.

Topoloji seçimi, bir kurumun iş sürekliliği ve felaket kurtarma planlarının temel bir parçasıdır. Ağın topolojik yapısı, bir arıza durumunda hangi servislerin ne kadar süreyle etkileneceğini doğrudan belirler. Bu nedenle, ağ mimarları, topoloji kararlarını alırken sadece teknik gereksinimleri değil, aynı zamanda işin risk toleransını ve operasyonel önceliklerini de göz önünde bulundurmalıdır. Aşağıdaki tablo, bu topolojilerin temel mimari özelliklerini özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*oVZ5_j48uuqEPLf3dz2xxA.png)

**Ağ Topolojilerinin Avantaj ve Dezavantajları**

---

### Bölüm 3: Fiziksel ve Donanım Tabanlı Güvenlik Stratejileri

Siber güvenliğin genellikle en çok göz ardı edilen, ancak en temel ve kritik katmanı fiziksel ve donanım güvenliğidir. En gelişmiş şifreleme algoritmaları ve en karmaşık güvenlik duvarı kuralları bile, bir saldırganın ağ cihazlarına fiziksel olarak erişebilmesi durumunda etkisiz kalabilir. Bu son bölüm, savunma derinliği (defense-in-depth) stratejisinin ilk adımı olan fiziksel erişim kontrolünden, kriptografik işlemlerin donanım tabanlı kaleleri olan HSM ve TPM modüllerine kadar uzanan geniş bir yelpazede güvenlik önlemlerini incelemektedir.

### 3.1. Fiziksel Erişim Kontrolü ve İzleme

Fiziksel güvenlik ve mantıksal (siber) güvenlik, birbirinden ayrı disiplinler değil, iç içe geçmiş ve birbirini tamamlayan katmanlardır. Fiziksel güvenlik, siber savunmanın ilk ve en önemli hattını oluşturur.

#### 3.1.1. Ağ Cihazlarının ve Kabinetlerin Güvenliği

Ağ altyapısının kalbini oluşturan sunucular, anahtarlar, yönlendiriciler ve depolama üniteleri gibi kritik cihazlar, yetkisiz erişime karşı korunmalıdır. Bu korumanın ilk adımı, bu cihazları kilitli sunucu odaları, veri merkezleri veya en azından kilitli ağ kabinetleri içinde muhafaza etmektir. Bu güvenli alanlara erişim, yalnızca yetkili personel ile sınırlandırılmalı ve bu erişim, kartlı geçiş sistemleri, biyometrik okuyucular (parmak izi, retina taraması) ve PIN kodları gibi modern kimlik doğrulama yöntemleriyle kontrol edilmelidir. Ayrıca, bu alanları sürekli olarak izleyen güvenlik kameraları (CCTV) ve tüm giriş-çıkış olaylarını kaydeden erişim logları, hem caydırıcı bir etki yaratır hem de olası bir güvenlik ihlalinin ardından adli analiz için değerli kanıtlar sunar.

#### 3.1.2. Güvenli Kablolama ve Cihaz Yerleşimi İçin En İyi Uygulamalar

Fiziksel güvenlik, sadece cihazların bulunduğu odaları değil, aynı zamanda bu cihazları birbirine bağlayan kablolama altyapısını da kapsar.

* **Planlama, Etiketleme ve Belgeleme:** Güvenli bir kablolama altyapısı, kurulumdan önce dikkatli bir planlama ile başlar. Tüm kablolar, patch panellerdeki portlar ve duvar prizleri, standartlaştırılmış ve tutarlı bir şemaya göre net bir şekilde etiketlenmelidir. Bu etiketleme, ağ yöneticilerinin sorunları hızla teşhis etmesini ve yönetimi kolaylaştırmasını sağlamanın yanı sıra, yetkisiz bir kablonun veya cihazın ağa eklenmesi gibi durumların kolayca tespit edilmesine de olanak tanır.
* **Kablo Yolları ve Kanalları:** Veri kabloları, açıkta ve korumasız bir şekilde bırakılmamalıdır. Bunun yerine, yetkisiz fiziksel erişimi, kazara hasar görmeyi ve çevresel faktörleri önlemek için güvenli kablo kanalları (cable trays), kablo merdivenleri veya binaların yapısına entegre edilmiş kablo bacaları (şaftlar) içinden geçirilmelidir. TEDAŞ’ın Yapılarda Kullanılacak Elektrik Tesisatına Ait Tip Projeler yönetmeliği gibi resmi standartlar, bu kablo bacalarının malzeme türü, boyutları, kilitli kapıları ve katlar arasında yangının yayılmasını önleyen yangın durdurucu malzemelerin kullanımı gibi konularda detaylı ve bağlayıcı kurallar içerir. Bu kurallar, sadece elektrik güvenliğini değil, aynı zamanda içinden geçen veri kablolarının da fiziksel bütünlüğünü ve güvenliğini korumayı hedefler.
* **Cihaz ve Priz Yerleşimi:** Ağ cihazları ve kullanıcıların eriştiği ağ prizleri, nem, doğrudan güneş ışığı, aşırı sıcaklık gibi çevresel faktörlerden ve insanların takılıp düşmesi, eşya çarpması gibi fiziksel risklerden uzak, güvenli noktalara monte edilmelidir. Prizlere aşırı yüklenmekten kaçınılmalı, hasarlı veya yıpranmış kablolar yangın ve güvenlik riski oluşturmadan derhal değiştirilmelidir.

### 3.2. Fiziksel Arayüz Güvenliği: Port Güvenliği (Port Security)

Port güvenliği, fiziksel ve mantıksal güvenlik arasındaki yakın ilişkinin en somut örneklerinden biridir. Bu, bir anahtarın (switch) portuna yetkisiz cihazların fiziksel olarak bağlanmasını önlemek için tasarlanmış bir Katman 2 güvenlik özelliğidir. Temel amacı, bir çalışanın kişisel dizüstü bilgisayarını, bir misafirin cihazını veya daha kötüsü bir saldırganın ağa erişim sağlamak için getirdiği bir cihazı ağa dahil etmesini engellemektir.

Port güvenliği yapılandırıldığında, anahtar her bir port için aşağıdaki kuralları uygular:

#### **MAC Adresi Sınırlaması**

Bir porta bağlanmasına izin verilen maksimum MAC adresi sayısı belirlenir. Örneğin, bu sayı ‘1’ olarak ayarlanırsa, o porta yalnızca tek bir cihaz bağlanabilir. İkinci bir cihaz bağlanmaya çalışıldığında, bu bir ihlal olarak kabul edilir.

#### **MAC Adresi Öğrenme**

Anahtar, porta bağlanan cihazların MAC adreslerini statik (manuel olarak yönetici tarafından tanımlanır) veya dinamik olarak öğrenebilir. “Sticky MAC” özelliği, anahtarın porta bağlanan ilk cihazın MAC adresini otomatik olarak öğrenip yapılandırmasına kaydetmesini sağlar. Bu, yönetimi kolaylaştırırken güvenliği de artırır.

#### **İhlal (Violation) Modları**

Bir güvenlik ihlali gerçekleştiğinde (örneğin, izin verilenden fazla MAC adresi algılandığında veya yetkisiz bir MAC adresi görüldüğünde), portun nasıl davranacağı belirlenir. Yaygın modlar şunlardır:

* **Shutdown:** Port otomatik olarak kapatılır ve yönetici tarafından manuel olarak açılana kadar devre dışı kalır.
* **Restrict:** Port açık kalır, ancak yetkisiz cihazdan gelen tüm trafiği engeller ve bir güvenlik uyarısı (log) oluşturur.
* **Protect:** Restrict modu gibidir, ancak güvenlik uyarısı oluşturmaz.

Port güvenliği, Cisco ve Extreme gibi yönetilebilir anahtarlarda, genellikle CLI (Komut Satırı Arayüzü) üzerinden `switchport port-security` gibi komutlarla port bazında kolayca etkinleştirilebilir.

### 3.3. Görsel Güvenlik ve Uyarı Sistemleri: Güvenlik Etiketleri

Güvenlik etiketleri ve levhaları, fiziksel güvenlik stratejisinin görsel iletişim araçlarıdır. Hem personeli potansiyel tehlikelere karşı proaktif olarak uyaran hem de bir müdahale durumunda reaktif bir kanıt sunan çift yönlü bir amaca hizmet ederler.

#### **Uyarı Levhaları ve Renk Kodları**

Uluslararası standartlara göre renkler, belirli anlamlar taşır. Ağ altyapısı ve veri merkezleri bağlamında:

* **Sarı:** “Dikkat! Yüksek Gerilim” veya “Statik Elektriğe Duyarlı Alan” gibi potansiyel bir tehlikeye karşı uyarıda bulunur.
* **Kırmızı:** “Girilmez” gibi bir yasağı veya “Yangın Söndürücü” gibi yangınla mücadele ekipmanının yerini belirtir.
* **Mavi:** “Baret Takmak Zorunludur” gibi uyulması zorunlu bir eylemi veya kişisel koruyucu donanım kullanımını emreder.
* **Yeşil:** “Acil Çıkış” veya “İlk Yardım Kiti” gibi güvenli durumları ve kaçış yollarını gösterir.

#### **Kurcalama Kanıtı (Tamper-Evident) Etiketleri**

Bu özel etiketler, bir cihazın kasası, bir sunucu kabinetinin kapısı veya kullanılmayan bir ağ portu üzerine yapıştırılır. Etiket sökülmeye veya kurcalanmaya çalışıldığında, geri döndürülemez bir şekilde zarar görür; örneğin yırtılır, parçalanır veya altında “VOID” (Geçersiz) gibi bir yazı bırakır. Bu etiketler, bir cihaza yetkisiz bir fiziksel müdahale yapılıp yapılmadığını net bir şekilde gösteren görsel bir kanıt sağlar. Hologramlar, mikro yazılar ve UV ile görülebilen mürekkepler gibi ek özellikler, bu etiketlerin kopyalanmasını zorlaştırarak orijinalliği ve güvenliği artırır.

### 3.4. Kriptografik İşlemlerin Donanım Kalesi: Hardware Security Module (HSM)

Bir sistemde güvenin bir yerden başlaması gerekir. Eğer bir şifreleme anahtarı, kendisi de saldırıya açık olabilen bir işletim sisteminin belleğinde veya diskinde duruyorsa, güven zinciri en başından kırıktır. Hardware Security Module (HSM), bu soruna çözüm getiren ve dijital güvenin fiziksel dünyadaki somut dayanağı olan bir “güven kökü” (root of trust) teknolojisidir.

HSM, kriptografik anahtarları oluşturmak, yönetmek ve güvenli bir şekilde saklamak; ve şifreleme, deşifreleme, dijital imzalama gibi hassas kriptografik işlemleri gerçekleştirmek için tasarlanmış, özel bir donanım cihazıdır.

#### **Güvenlik Özellikleri**

* **Fiziksel Koruma:** HSM’ler, kurcalamaya karşı son derece dayanıklı (tamper-resistant) ve kurcalama kanıtı (tamper-evident) sunan, güçlendirilmiş bir kasa içinde gelir. Cihaza yönelik delme, sökme, aşırı sıcaklık/soğukluk veya voltaj dalgalanması gibi herhangi bir fiziksel müdahale girişimini algılayan sensörlere sahiptir. Böyle bir saldırı algılandığında, HSM içindeki tüm hassas kriptografik anahtarları anında ve geri döndürülemez bir şekilde silerek kendini imha eder (zeroization).
* **Sertifikasyon:** Genellikle ABD hükümetinin FIPS 140–2 Seviye 3 veya Seviye 4 gibi çok sıkı güvenlik standartlarına göre bağımsız laboratuvarlar tarafından test edilir ve sertifikalandırılır. Bu sertifikasyon, cihazın hem fiziksel hem de mantıksal güvenlik mekanizmalarının en üst düzeyde olduğunu garanti eder.
* **Mantıksal İzolasyon:** Kriptografik anahtarlar HSM’nin korumalı belleğinden asla ayrılmaz. Bir uygulama bir şifreleme işlemi yapmak istediğinde, veriyi HSM’e gönderir; işlem HSM’in içindeki özel kripto işlemcisi tarafından yapılır ve sonuç uygulamaya geri döndürülür. Anahtar hiçbir zaman güvensiz ortama (ana sunucunun belleği veya ağı) çıkmaz.

#### **Kullanım Alanları ve Ölçek**

HSM’ler, yüksek hacimli ve yüksek güvenlik gerektiren, genellikle “bire-çok” (one-to-many) olarak tanımlanan merkezi senaryolarda kullanılır. Yani, tek bir HSM veya HSM kümesi, ağdaki yüzlerce veya binlerce sunucuya ve uygulamaya hizmet verir. Yaygın kullanım alanları şunlardır:

* **Ödeme Sistemleri ve Finans:** Kredi kartı işlemlerinin doğrulanması, PIN şifrelemesi ve finansal mesajların dijital olarak imzalanması.
* **Açık Anahtar Altyapısı (PKI):** Bir Sertifika Otoritesinin (CA) en değerli varlığı olan kök (root) özel anahtarının korunması.
* **Veritabanı Şifreleme, Kod İmzalama, DNSSEC ve Dijital Hak Yönetimi** gibi kurumsal uygulamalar.

HSM’ler, ağa bağlanan bağımsız bir cihaz (network-attached appliance), bir sunucunun içine takılan bir PCIe kartı veya daha küçük ölçekli ihtiyaçlar için bir USB cihazı gibi farklı form faktörlerinde bulunabilir.

### 3.5. Platform Bütünlüğünün Güvencesi: Trusted Platform Module (TPM)

Trusted Platform Module (TPM), HSM ile aynı “güven kökü” felsefesini paylaşan, ancak farklı bir ölçek ve amaç için tasarlanmış bir teknolojidir. TPM, genellikle bir bilgisayarın, sunucunun veya başka bir akıllı cihazın anakartına lehimlenmiş veya doğrudan işlemciye entegre edilmiş bir mikrodenetleyicidir. Temel amacı, üzerinde bulunduğu platformun (ana bilgisayarın) donanım bütünlüğünü sağlamak ve o platforma özgü kriptografik sırları (anahtarlar, parolalar, sertifikalar) güvenli bir şekilde saklamaktır.

#### **Temel İşlevleri**

* **Güvenli Önyükleme (Secure Boot):** TPM, cihazın açılış sürecinin güvenliğini sağlar. Yalnızca donanım üreticisi tarafından dijital olarak imzalanmış ve güvenilir kabul edilen yazılımların (firmware, UEFI, işletim sistemi yükleyicisi) çalıştırılmasına izin verir. Bu, önyükleme sürecini hedef alan rootkit ve bootkit gibi en tehlikeli kötü amaçlı yazılım türlerini etkili bir şekilde engeller.
* **Ölçülü Önyükleme (Measured Boot):** Cihaz açılırken yüklenen her bir yazılım bileşeninin (BIOS, sürücüler, vb.) kriptografik bir özetini (hash) alır ve bu özetleri TPM’in içindeki Platform Yapılandırma Kayıtları’na (PCR) güvenli bir şekilde kaydeder. Bu kayıtlar daha sonra sistemin açılış sırasında herhangi bir değişikliğe veya sahtekarlığa uğrayıp uğramadığını doğrulamak için kullanılabilir.
* **Disk Şifreleme Desteği:** Microsoft BitLocker veya Linux’taki LUKS gibi tam disk şifreleme çözümleri için şifreleme anahtarlarını güvenli bir şekilde depolar. Anahtar, TPM’in donanım bariyerinin arkasında korunduğu için, bilgisayar çalınsa ve sabit diski sökülüp başka bir bilgisayara takılsa bile verilere erişim sağlanamaz.
* **Kimlik Doğrulama:** Windows Hello gibi biyometrik kimlik doğrulama sistemleri için parmak izi veya yüz verileri gibi hassas bilgileri güvenle saklar.

#### **Kullanım Alanları ve Ölçek**

TPM, “bire-bir” (one-to-one) bir güvenlik modeli sunar. Yani, tek bir TPM yalnızca üzerinde bulunduğu tek bir cihazı korur. Microsoft’un Windows 11 işletim sistemi için TPM 2.0'ı zorunlu kılması, bu teknolojinin artık sadece kurumsal cihazlarda değil, son kullanıcı güvenliğinin de temel bir standardı haline geldiğini göstermektedir.

### 3.6. TPM ve HSM Arasındaki Temel Farklar

TPM ve HSM, her ikisi de donanım tabanlı güven kökleri olsalar da, birbirlerinin rakibi değil, farklı sorunlara çözüm getiren tamamlayıcı teknolojilerdir. Aralarındaki temel farklar, hizmet ettikleri ölçek, performans beklentileri ve yönetim modellerinden kaynaklanır.

* **Ölçek ve Amaç:** TPM, tek bir ana bilgisayarı (host) korumak ve platform bütünlüğünü sağlamak için tasarlanmış, düşük maliyetli, dağıtık bir çözümdür. HSM ise bir ağdaki birden çok uygulamaya veya istemciye merkezi bir kriptografik hizmet sunan, yüksek performanslı bir ağ kaynağıdır.
* **Performans:** HSM’ler, saniyede on binlerce şifreleme veya dijital imza işlemini gerçekleştirebilecek özel donanım hızlandırıcılarına sahiptir. TPM’lerin kriptografik işlem kapasitesi ise çok daha düşüktür ve yüksek hacimli, sunucu taraflı işlemler için tasarlanmamıştır.
* **Yönetim ve API:** HSM’ler, PKCS#11 veya JCE/JCA gibi standart kriptografi API’leri aracılığıyla uygulamalara hizmet veren genel amaçlı ve programlanabilir cihazlardır. TPM’ler ise genellikle işletim sistemi ve platformun kendisiyle daha sıkı bir şekilde entegre çalışır ve daha spesifik görevler için kullanılır.

Aşağıdaki tablo, bu iki kritik güvenlik teknolojisi arasındaki temel farkları ve ideal kullanım alanlarını özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*c_ZQKlfDV_isCps7fxyH8A.png)

**HSM ve TPM Arasındaki Temel Farkların ve Kullanım Alanları**

---

### Sonuç

Bu teknik rapor, modern ağ altyapılarının güvenliğinin, genellikle göz ardı edilen ancak en temel katman olan fiziksel ve donanım seviyesinde başladığını ortaya koymaktadır. Analizler, ağ donanımları, fiziksel altyapı ve donanım tabanlı güvenlik mekanizmaları arasında katmanlı ve ayrılmaz bir ilişki olduğunu göstermiştir.

Temel bulgular, birkaç ana tema etrafında toplanmaktadır. İlk olarak, ağ cihazları arasındaki geleneksel rollerin birleştiği, UTM gibi “hepsi bir arada” çözümlerin yönetim kolaylığı sunarken, aynı zamanda tek hata noktası gibi yeni risk profilleri oluşturduğu görülmüştür. İkinci olarak, kablosuz ağ mimarilerinde WLC tabanlı merkeziyetçi kontrol ile Mesh ağların dağıtık dayanıklılığı arasında, her senaryonun kendi gereksinimlerine göre değerlendirilmesi gereken stratejik bir denge olduğu anlaşılmıştır.

Fiziksel katmanda, kablo tipi seçiminin sadece performansı değil, aynı zamanda elektromanyetik dinlemeye karşı güvenliği de doğrudan etkilediği ve ağ topolojisi kararının, bir ağın arızalara karşı direncini ve hata alanlarını belirleyen temel bir risk yönetimi adımı olduğu vurgulanmıştır. En nihayetinde, güvenliğin en sağlam temeli donanımda yatmaktadır. TPM ve HSM gibi donanım tabanlı güven kökleri, kriptografik anahtarları ve işlemleri yazılım tabanlı zafiyetlerden izole ederek, üzerine inşa edilen tüm dijital güven sistemleri için fiziksel olarak kanıtlanabilir bir başlangıç noktası sunmaktadır.

Sonuç olarak, sürdürülebilir ve dayanıklı bir ağ mimarisi inşa etmek, yalnızca gelişmiş yazılımlar veya karmaşık kurallar ile değil, en dıştaki kilitli kapıdan ve etiketlenmiş kablodan başlayıp, donanımın çekirdeğindeki kriptografik modüllere kadar uzanan bütüncül ve derinlemesine bir savunma stratejisi gerektirir. Güvenlik, bir zincir ise, bu zincirin ilk ve en güçlü halkaları fiziksel ve donanım katmanında dövülmelidir.