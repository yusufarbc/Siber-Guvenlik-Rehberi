# Ağ Yönetimi ve Güvenliği II: Ağ Protokolleri, Yönlendirme ve Adresleme

---

### Ağ Yönetimi ve Güvenliği II: Ağ Protokolleri, Yönlendirme ve Adresleme

![](https://cdn-images-1.medium.com/max/800/0*1gN6tP9Nv5sf9IGl.png)

Günümüzün hiper-bağlantılı dünyasında, küresel ekonomiden günlük sosyal etkileşimlerimize kadar her şeyin temelinde karmaşık ve devasa bir bilgisayar ağları altyapısı yatmaktadır. Bu altyapı, farklı kıtalardaki veri merkezlerinden evimizdeki akıllı cihazlara kadar milyarlarca bileşenin uyum içinde çalışmasını gerektiren, görünmez bir omurgadır. Peki, farklı üreticiler tarafından üretilmiş, farklı teknolojileri kullanan bu cihazlar birbirleriyle nasıl bu kadar sorunsuz, hızlı ve güvenli bir şekilde iletişim kurabilmektedir? Bu sorunun cevabı, ağ mühendisliğinin temelini oluşturan standartlaştırılmış protokoller, hiyerarşik adresleme sistemleri ve akıllı yönlendirme algoritmalarında saklıdır.

Bu teknik makale, modern ağların işleyişinin ardındaki temel prensipleri derinlemesine incelemek amacıyla hazırlanmıştır. Teorik bir çerçeve sunan OSI modelinden, internetin bel kemiği olan TCP/IP protokol yığınına; ağdaki her cihaza kimlik kazandıran IPv4 ve IPv6 adreslemeden, veri paketlerinin en verimli yolları bulmasını sağlayan dinamik yönlendirme protokollerine ve internetin küresel yol haritasını çizen BGP’ye kadar tüm kritik konular ele alınacaktır. Ayrıca, yerel ağlarda verimliliği ve güvenliği sağlayan anahtarlama teknolojileri, VLAN yönetimi ve döngü önleme mekanizmalarına da detaylı bir bakış sunulacaktır. Bu yazı, ağ teknolojilerine ilgi duyan öğrenciler, bilişim profesyonelleri ve mühendisler için temel bir başvuru kaynağı olmayı hedeflemektedir.

---

### Bölüm 1: Ağ İletişiminin Temel Modelleri ve Veri Akışı

Modern bilgisayar ağları, farklı üreticilerin cihazlarının ve yazılımlarının sorunsuz bir şekilde birlikte çalışabilmesini sağlayan standartlaştırılmış protokoller ve kavramsal modeller üzerine kuruludur. Bu bölüm, ağ iletişiminin temelini oluşturan OSI ve TCP/IP referans modellerini, verinin ağ katmanları arasındaki yolculuğunu ve bu süreçte karşılaşılan hataların nasıl yönetildiğini derinlemesine incelemektedir.

### 1.1 Referans Modelleri: OSI ve TCP/IP Karşılaştırması

Ağ iletişiminin karmaşıklığını yönetilebilir parçalara ayırmak için iki temel referans modeli geliştirilmiştir: teorik olarak kapsamlı olan OSI modeli ve pratik uygulamada standart haline gelen TCP/IP modeli.

#### OSI Modelinin Yedi Katmanı: Teorik Bir Başyapıt

Uluslararası Standartlar Örgütü (ISO) tarafından geliştirilen Açık Sistemler Bağlantısı (Open Systems Interconnection — OSI) modeli, ağ işlevlerini yedi mantıksal katmana ayıran kavramsal bir çerçevedir. Her katman, belirli bir görevi yerine getirir ve altındaki katmandan hizmet alırken üstündeki katmana hizmet sunar. Bu katmanlar aşağıdan yukarıya şunlardır:

1. **Fiziksel Katman (Physical Layer):** Veriyi bitler halinde (0'lar ve 1'ler) kablolar, fiber optikler veya radyo dalgaları gibi fiziksel bir ortam üzerinden iletir. Konektörler ve voltaj seviyeleri gibi elektriksel ve fiziksel özellikleri tanımlar.
2. **Veri Bağlantısı Katmanı (Data Link Layer):** Fiziksel katmandaki hataları düzelterek verinin güvenilir bir şekilde aynı ağ segmentindeki cihazlar arasında aktarılmasını yönetir. MAC adreslerini kullanarak çerçeveler (frames) oluşturur.
3. **Ağ Katmanı (Network Layer):** Farklı ağlar arasında paketlerin (packets) yönlendirilmesinden ve adreslenmesinden sorumludur. IP adresleri bu katmanda çalışır.
4. **Taşıma Katmanı (Transport Layer):** Uçtan uca bağlantı, veri bütünlüğü ve akış kontrolü sağlar. Veriyi segmentlere (segments) ayırır ve TCP (bağlantı odaklı) veya UDP (bağlantısız) gibi protokoller aracılığıyla iletir.
5. **Oturum Katmanı (Session Layer):** Cihazlar arasındaki iletişim oturumlarını kurar, yönetir ve sonlandırır.
6. **Sunum Katmanı (Presentation Layer):** Veriyi uygulamaların anlayabileceği bir formata çevirir. Veri sıkıştırma ve şifreleme gibi görevler bu katmanda gerçekleştirilir.
7. **Uygulama Katmanı (Application Layer):** Son kullanıcı uygulamalarına (web tarayıcıları, e-posta istemcileri vb.) doğrudan ağ hizmetleri sağlar.

OSI modelinin en büyük gücü, protokollerden bağımsız (protocol-agnostic) yapısı ve her katmanın işlevini net bir şekilde ayırmasıdır. Bu modülerlik, ağ sorunlarını giderme sürecini büyük ölçüde basitleştirir, çünkü her katman bağımsız olarak incelenebilir.

#### TCP/IP Protokol Yığını: Pragmatik Bir Gerçeklik

OSI modelinin aksine, TCP/IP modeli teorik bir çerçeve olarak değil, interneti inşa eden çalışan protokoller etrafında geliştirilmiş pratik bir modeldir. Genellikle dört katmanlı bir yapı olarak kabul edilir:

1. **Ağ Erişimi Katmanı (Network Access Layer):** OSI’nin Fiziksel ve Veri Bağlantısı katmanlarını birleştirir. Cihazlar arasındaki fiziksel ve mantıksal bağlantılardan sorumludur.
2. **İnternet Katmanı (Internet Layer):** OSI’nin Ağ katmanına karşılık gelir. IP (İnternet Protokolü) bu katmanın temelidir ve paketlerin farklı ağlar arasında en iyi yolu bularak yönlendirilmesini sağlar.
3. **Taşıma Katmanı (Transport Layer):** OSI’nin Taşıma katmanıyla aynı işlevleri yerine getirir. TCP ve UDP protokolleri ile güvenilir veya hızlı veri iletimi sağlar.
4. **Uygulama Katmanı (Application Layer):** OSI’nin Oturum, Sunum ve Uygulama katmanlarını tek bir katmanda birleştirir. HTTP, FTP, SMTP gibi son kullanıcı protokollerini içerir.

TCP/IP’nin başarısı, onun basitliğinden ve pragmatik yaklaşımından kaynaklanır. Model resmileştirilmeden önce bile, internet zaten bu protokoller üzerine inşa ediliyordu. Bu durum, mühendislik pragmatizminin, komite temelli teorik idealizme karşı bir zaferi olarak görülebilir. OSI, ağı inşa etmeden *önce* mükemmel bir çerçeve oluşturmaya çalışan “yukarıdan aşağıya” bir yaklaşımken, TCP/IP acil bir sorunu çözen, çalışan ve “yeterince iyi” olan “aşağıdan yukarıya” bir çözümdü. Teknoloji tarihinde sıkça görüldüğü gibi, çalışan ve erken benimsenen bir çözüm, teorik olarak daha üstün ancak karmaşık ve geç gelen bir alternatife üstün gelmiştir.

![](https://cdn-images-1.medium.com/max/800/0*0uu7t1OYMiHTQNyo.png)

OSI Modeli vs TCP/IP Modeli

### 1.2 Veri Kapsülleme (Encapsulation) ve Kapsülden Çıkarma (De-encapsulation)

Verinin bir ağ üzerinde gönderilmesi, her katmanın kendi kontrol bilgilerini eklediği katmanlı bir paketleme sürecini içerir. Bu sürece **kapsülleme** denir. Alıcı tarafta bu bilgilerin sırayla çıkarılması ise **kapsülden çıkarma** olarak adlandırılır.

Kapsülleme süreci, mekanik bir paketleme işleminden çok daha fazlasını ifade eder; katmanlı ağ mimarisinde *protokol bağımsızlığını ve modülerliği* sağlayan temel soyutlama mekanizmasıdır. Her katman, bir alt katmanın karmaşıklığını tamamen gizleyerek bir üst katmana bir “hizmet” sunar. Örneğin, bir web geliştiricisi, HTTP protokolünü kullanırken TCP’nin segmentasyonundan veya IP’nin yönlendirmesinden haberdar olmak zorunda değildir. Bu soyutlama, internetin en büyük güçlerinden biridir; fiziksel katmanda Ethernet’i Wi-Fi ile değiştirmek, üst katmanlarda hiçbir değişiklik gerektirmez.

Veri akışı şu adımları izler :

1. **Uygulama Katmanı:** Kullanıcı tarafından oluşturulan veri (örneğin bir e-posta metni) Taşıma katmanına iletilir. Bu aşamadaki veri birimine genellikle **Veri (Data)** denir.
2. **Taşıma Katmanı:** Gelen veriyi daha küçük parçalara böler (segmentasyon) ve her parçanın başına bir **TCP** veya **UDP başlığı** ekler. Bu başlık, kaynak ve hedef port numaraları gibi bilgileri içerir. Bu yeni veri birimine **Segment** denir.
3. **İnternet Katmanı:** Her segmente bir **IP başlığı** ekler. Bu başlık, paketin ağlar arasında yönlendirilebilmesi için kaynak ve hedef IP adreslerini içerir. Bu aşamadaki veri birimi **Paket (Packet)** veya **Datagram** olarak adlandırılır.
4. **Ağ Erişimi Katmanı:** Paketin başına bir **çerçeve başlığı** (kaynak ve hedef MAC adreslerini içeren) ve sonuna bir **çerçeve kuyruğu** (hata denetimi için CRC değerini içeren) ekler. Bu veri birimi **Çerçeve (Frame)** olarak bilinir.
5. **Fiziksel İletim:** Son olarak, çerçeve fiziksel ortama (örneğin bakır kabloya) iletilecek **Bitlere** dönüştürülür.

Alıcı cihazda bu süreç tersine işler (kapsülden çıkarma). Her katman, kendi eş katmanının gönderici tarafta eklediği başlığı okur, işler, kaldırır ve verinin geri kalanını bir üst katmana iletir. Bu “eş katman etkileşimi” ilkesi, katmanların birbirinden bağımsız olarak geliştirilip güncellenebilmesini sağlar.

### 1.3 Ağ İletişiminde Hata Yönetimi

Veri iletimi sırasında sinyaller bozulabilir ve bit hataları oluşabilir. Ağ protokolleri bu hataları yönetmek için çeşitli mekanizmalar kullanır. İki temel yaklaşım vardır: hata tespiti ve hata düzeltme.

#### Hata Tespiti (Error Detection)

Bu yaklaşımın amacı, bir hata olup olmadığını belirlemektir. Hata tespit edilirse, hatalı veri paketi genellikle atılır ve güvenilir protokoller (TCP gibi) tarafından yeniden gönderilmesi istenir. En yaygın yöntemler şunlardır:

* **Checksum (Sağlama Toplamı):** Gönderici, verinin içeriğine dayalı olarak matematiksel bir değer (checksum) hesaplar ve bunu pakete ekler. Alıcı, aynı hesaplamayı yapar ve kendi sonucuyla paketteki değeri karşılaştırır. Değerler eşleşmezse, paketin bozulduğu anlaşılır. TCP ve UDP başlıklarında kullanılır.
* **Döngüsel Artıklık Denetimi (Cyclic Redundancy Check — CRC):** Checksum’dan daha karmaşık ve güvenilir bir yöntemdir. Veri Bağlantısı katmanında, özellikle Ethernet çerçevelerinin kuyruğunda (FCS — Frame Check Sequence) kullanılır. Birkaç bitlik hataları tespit etmede çok etkilidir.

#### Hata Düzeltme (Error Correction)

Bu yaklaşım, hataları sadece tespit etmekle kalmaz, aynı zamanda ek verileri kullanarak düzeltmeye çalışır. Bu, genellikle veriyi yedekli bir şekilde kodlayarak yapılır. Ancak bu yöntemler, hata tespitine göre çok daha fazla ek yük (overhead) getirir.

Hata tespiti ve ardından yeniden iletim, internet gibi yeniden göndermenin nispeten ucuz ve hızlı olduğu ağlar için daha verimlidir. Hata düzeltme ise, yeniden iletimin çok maliyetli veya imkansız olduğu durumlarda (örneğin, uydu iletişimi veya tek yönlü yayınlar) tercih edilir.

---

### Bölüm 2: IP Adresleme ve Alt Ağ Yönetimi

IP adresleme, cihazların bir ağ üzerinde benzersiz bir şekilde tanımlanmasını ve küresel olarak iletişim kurmasını sağlayan temel mekanizmadır. Bu bölüm, IPv4'ün yapısını, adres kıtlığı sorununu hafifleten teknikleri, geleceğin protokolü olan IPv6'yı ve adreslerin dinamik olarak atanmasını sağlayan DHCP’yi ele almaktadır.

### 2.1 IPv4 Adresleme Mimarisi

IPv4, 32-bitlik bir adresleme şeması kullanır ve bu da teorik olarak yaklaşık 4.3 milyar benzersiz adres sağlar. Bu adresler genellikle nokta ile ayrılmış ondalık formatta (örneğin, 192.168.1.1) gösterilir.

* **Sınıflı Adresleme (Tarihsel Bir Bakış):** Başlangıçta, IPv4 adresleri A, B ve C gibi sınıflara ayrılmıştı. Bu sınıflar, adresin ne kadarının ağ (network) kısmını ve ne kadarının ana bilgisayar (host) kısmını temsil ettiğini sabit bir şekilde belirliyordu. Örneğin, A Sınıfı ağlar çok az sayıda ağa ancak milyonlarca ana bilgisayara izin verirken, C Sınıfı ağlar milyonlarca ağa ancak her birinde sadece 254 ana bilgisayara izin veriyordu. Bu katı yapı, adreslerin verimsiz kullanılmasına ve büyük bir israfa yol açıyordu, çünkü bir kuruluşun ihtiyacından çok daha büyük veya çok daha küçük bloklar tahsis ediliyordu.
* **Özel ve Genel IP Adres Aralıkları (RFC 1918):** IPv4 adreslerinin hızla tükenmesini yavaşlatmak için, İnternet Tahsisli Sayılar Kurumu (IANA), yerel alan ağlarında (LAN) kullanılmak üzere özel IP adresi aralıkları ayırmıştır. Bu aralıklar şunlardır :  
  `10.0.0.0` - `10.255.255.255` (`10.0.0.0/8`)  
  `172.16.0.0` - `172.31.255.255` (`172.16.0.0/12`)  
  `192.168.0.0` - `192.168.255.255` (`192.168.0.0/16`)  
  Bu özel adresler, genel internet üzerinde yönlendirilemez (non-routable) ve herhangi bir kuruluş tarafından izne gerek olmadan kullanılabilir.
* **Ağ Adresi Çevirisi (NAT):** Özel IP adresleri kullanan cihazların internete erişebilmesi için **NAT (Network Address Translation)** kullanılır. NAT, genellikle bir yönlendirici veya güvenlik duvarı üzerinde çalışır ve yerel ağdaki birden fazla özel IP adresini tek bir genel (public) IP adresine eşler. Bu sayede, yüzlerce cihaz tek bir genel IP adresi üzerinden internete çıkabilir. NAT, IPv4 adres kıtlığı sorununu önemli ölçüde hafifleten kritik bir teknoloji olmuştur.

### 2.2 Sınıfsız Alanlar Arası Yönlendirme (CIDR) ve Alt Ağ Maskeleri

Sınıflı adreslemenin getirdiği verimsizlik ve katılık, 1990'ların başında interneti bir krizin eşiğine getirmişti. Çözüm, **CIDR (Classless Inter-Domain Routing)** ile geldi. CIDR, sadece bir IP adresleme tekniği değil, IPv4 tabanlı interneti çöküşten kurtaran devrimci bir müdahaleydi. Bu teknoloji, birbiriyle bağlantılı iki hayati sorunu aynı anda çözdü: verimsiz adres tahsisinden kaynaklanan *adres kıtlığı* ve global yönlendirme tablolarının kontrolsüz büyümesinden kaynaklanan *yönlendirme altyapısı krizi*.

* **CIDR Notasyonu ve VLSM:** CIDR, ağ ve ana bilgisayar kısımlarını ayıran sınırı esnek hale getirir. Bu, IP adresinin sonuna eklenen bir eğik çizgi (`/`) ve ardından gelen bir sayı ile ifade edilir (örneğin, `192.168.1.0/24`). Bu sayı (prefix uzunluğu), adresin kaç bitinin ağ kısmına ait olduğunu belirtir. Bu esneklik, **Değişken Uzunluklu Alt Ağ Maskesi (Variable Length Subnet Mask — VLSM)** kullanımına olanak tanır. VLSM ile bir ağ bloğu, farklı boyutlardaki alt ağlara verimli bir şekilde bölünebilir, böylece adres israfı en aza indirilir. Örneğin, 500 ana bilgisayara ihtiyaç duyan bir kuruma, sınıflı sistemde 65,534 adreslik bir B sınıfı blok vermek yerine, CIDR ile 512 adreslik bir `/23` bloğu tahsis edilebilir.
* **Alt Ağlara Ayırma (Subnetting) ve Süper Ağ Oluşturma (Supernetting):** CIDR, adres tahsisini optimize etmenin yanı sıra, yönlendirme tablolarını da basitleştirmiştir. **Supernetting** (veya rota birleştirme), birden fazla ardışık küçük ağ bloğunu tek bir büyük rota duyurusunda birleştirme işlemidir. Örneğin, bir internet servis sağlayıcısı, 16 farklı `/24` (eski C sınıfı) ağını, internetin geri kalanına 16 ayrı rota yerine tek bir `/20` rotası olarak duyurabilir. Bu, internetin omurgasındaki yönlendiricilerin yönlendirme tablolarının boyutunu yönetilebilir seviyelerde tutarak yönlendirme altyapısı krizini önlemiştir.

### 2.3 IPv6 Adresleme: Geleceğin İnternet Protokolü

IPv4 adres alanının tükenmesiyle birlikte, internetin uzun vadeli büyümesini sağlamak için **IPv6** geliştirilmiştir.

#### IPv6 Mimarisi ve Avantajları

IPv6, 32-bit yerine **128-bitlik** bir adres alanı kullanır. Bu, `2^128` yani yaklaşık 340 undesilyon (3.4 x `10^38`) adres anlamına gelir ki bu da "neredeyse sonsuz" bir kapasite sunar. IPv6 adresleri, iki nokta üst üste ile ayrılmış sekiz adet 16-bitlik onaltılık gruptan oluşur (örneğin, `2001:0db8:85a3:0000:0000:8a2e:0370:7334`). IPv6'nın temel avantajları şunlardır :

* **Devasa Adres Alanı:** NAT ihtiyacını ortadan kaldırır ve her cihaza benzersiz bir genel adres atanmasını sağlar.
* **Basitleştirilmiş Başlık:** IPv6 başlığı, IPv4'e göre daha az alana sahiptir ve yönlendiriciler tarafından daha verimli işlenir.
* **Otomatik Yapılandırma (SLAAC):** Cihazların bir DHCP sunucusuna ihtiyaç duymadan kendi kendilerine bir IP adresi oluşturmasına olanak tanır.
* **Yerleşik Güvenlik:** IPsec protokolü desteği, IPv6 standardının bir parçasıdır ve uçtan uca güvenlik sağlar.

#### Geçiş Mekanizmaları

IPv4'ten IPv6'ya geçiş bir anda gerçekleşmeyeceği için, iki protokolün bir arada çalışmasını sağlayan mekanizmalar gereklidir. En yaygın yaklaşım **Çift Yığın (Dual Stack)** mimarisidir. Bu yöntemde, ağ cihazları ve işletim sistemleri hem IPv4 hem de IPv6 protokol yığınlarını aynı anda çalıştırır. Bir uygulama bir hedefe bağlanmaya çalıştığında, DNS’ten hem IPv4 (A kaydı) hem de IPv6 (AAAA kaydı) adreslerini sorgular ve genellikle IPv6'yı tercih eder. Bu yaklaşım, kademeli bir geçiş sağlarken, ağ yöneticileri için iki ayrı ağı yönetme ve güvenlik politikalarını uygulama gibi ek yükler getirir.

### 2.4 Dinamik Ana Bilgisayar Yapılandırma Protokolü (DHCP)

Ağdaki cihazlara manuel olarak IP adresi atamak, özellikle büyük ağlarda, hem zahmetli hem de hataya açıktır. **DHCP (Dynamic Host Configuration Protocol)**, bu süreci otomatikleştiren bir istemci-sunucu protokolüdür.

#### DORA Süreci

Bir istemci ağa bağlandığında, bir IP adresi ve diğer ağ yapılandırma bilgilerini (alt ağ maskesi, ağ geçidi, DNS sunucusu) almak için dört adımlı bir süreçten geçer. Bu sürece **DORA** denir :

1. **Discover (Keşfet):** İstemci, ağdaki bir DHCP sunucusunu bulmak için bir `DHCPDISCOVER` yayın (broadcast) mesajı gönderir.
2. **Offer (Teklif Et):** Ağdaki DHCP sunucuları, istemciye bir IP adresi ve kiralama süresi içeren bir `DHCPOFFER` tek noktaya yayın (unicast) mesajı ile yanıt verir.
3. **Request (İste):** İstemci, gelen tekliflerden birini seçer ve bu adresi istediğini belirtmek için bir `DHCPREQUEST` yayın mesajı gönderir.
4. **Acknowledge (Onayla):** Seçilen sunucu, IP adresi atamasını ve diğer yapılandırma parametrelerini onaylayan bir `DHCPACK` tek noktaya yayın mesajı ile işlemi tamamlar.

#### DHCP Güvenliği ve Sahtekarlık (Snooping)

DHCP, doğası gereği güvenli bir protokol değildir. Bir saldırgan, ağa yetkisiz bir (**Rogue**) DHCP sunucusu kurarak istemcilere yanlış ağ geçidi veya DNS bilgileri verebilir ve böylece trafiği kendi üzerinden geçirerek bir “ortadaki adam” (man-in-the-middle) saldırısı gerçekleştirebilir. Bu tehdide karşı en etkili önlem **DHCP Snooping**’dir. Bu özellik, ağ anahtarlarında (switch) etkinleştirilir ve DHCP mesajlarını izler. Anahtar, portlarını **güvenilir (trusted)** ve **güvenilmez (untrusted)** olarak ayırır. Güvenilir portlar, meşru DHCP sunucularına bağlı olan portlardır. Güvenilmez portlardan gelen `DHCPOFFER` ve `DHCPACK` gibi sunucu mesajları engellenir, böylece sadece yetkili sunucuların IP adresi dağıtmasına izin verilir.

---

### Bölüm 3: Yönlendirme Protokolleri ve İnternet Omurgası

Yönlendirme, veri paketlerinin kaynak cihazdan hedef cihaza ulaşmak için ağlar arasında izleyeceği yolu belirleme sürecidir. Bu süreç, ya ağ yöneticisi tarafından manuel olarak tanımlanan statik rotalarla ya da yönlendiricilerin birbirleriyle iletişim kurarak en iyi yolları dinamik olarak öğrendiği protokollerle yönetilir. Bu bölüm, bu iki temel yaklaşımı, kurumsal ağlarda kullanılan İç Ağ Geçidi Protokollerini (IGP) ve internetin küresel omurgasını oluşturan Sınır Ağ Geçidi Protokolünü (BGP) incelemektedir.

### 3.1 Yönlendirmenin Temelleri: Statik ve Dinamik Yaklaşımlar

![](https://cdn-images-1.medium.com/max/800/0*8Q5DoM_nd0PtJKLk.png)

Statik ve Dinamik Yaklaşımlar

**Statik Yönlendirme:** Bu yöntemde, ağ yöneticisi her yönlendiricinin yönlendirme tablosuna rotaları elle girer. Bu rotalar, yönetici tarafından değiştirilene kadar sabit kalır. Küçük ve topolojisi değişmeyen ağlar için basit, güvenli ve kaynak açısından verimli bir çözümdür. Çünkü yönlendiriciler arasında protokol trafiği oluşmaz ve hangi yolların kullanılacağı tam olarak kontrol edilir. Ancak, ağ büyüdükçe veya bir bağlantı koptuğunda, tüm rotaların manuel olarak güncellenmesi gerektiğinden yönetimi imkansız hale gelir ve ağın hatalara karşı dayanıklılığı düşüktür.

* **Dinamik Yönlendirme:** Bu yaklaşımda, yönlendiriciler özel yönlendirme protokolleri kullanarak birbirleriyle topoloji bilgilerini paylaşır ve en iyi yolları otomatik olarak hesaplar. Ağda bir değişiklik (örneğin yeni bir yönlendirici eklenmesi veya bir bağlantının kopması) olduğunda, protokoller bu değişikliği algılar ve yönlendirme tablolarını hızla güncelleyerek trafiği alternatif yollara yönlendirir. Bu, büyük ağlarda ölçeklenebilirlik ve yüksek erişilebilirlik sağlar. Dezavantajları ise yönlendiriciler üzerinde daha fazla CPU ve bellek tüketmesi ve yapılandırmasının daha karmaşık olmasıdır.

### 3.2 İç Ağ Geçidi Protokolleri (Interior Gateway Protocols — IGP)

IGP’ler, tek bir otonom sistem (AS), yani tek bir idari alan (genellikle bir şirket veya servis sağlayıcı ağı) içindeki yönlendirmeyi yönetmek için kullanılır. İki ana kategoriye ayrılırlar: Mesafe-Vektör ve Bağlantı-Durumu.

* **RIP (Routing Information Protocol):** En eski Mesafe-Vektör protokollerinden biridir. Metrik olarak yalnızca **atlama sayısını (hop count)** kullanır, yani hedefe ulaşmak için geçilmesi gereken yönlendirici sayısını sayar. Bu basitlik, bant genişliği veya gecikme gibi önemli faktörleri göz ardı etmesine neden olur. Maksimum 15 atlama limiti ve yavaş yakınsama süresi nedeniyle modern ağlarda kullanımı neredeyse tamamen terk edilmiştir.
* **OSPF (Open Shortest Path First):** En yaygın kullanılan Bağlantı-Durumu (Link-State) protokolüdür. OSPF’de her yönlendirici, tüm ağın topolojik bir haritasını (Link-State Database — LSDB) oluşturur ve bu harita üzerinde **Dijkstra’nın en kısa yol öncelikli (SPF)** algoritmasını çalıştırarak hedeflere giden en iyi yolları hesaplar. Metrik olarak **maliyet (cost)** kullanır, bu da genellikle bağlantının bant genişliği ile ters orantılıdır. Hiyerarşik bir tasarıma olanak tanıyan **alan (area)** yapısı sayesinde büyük ağlarda son derece ölçeklenebilirdir.
* **EIGRP (Enhanced Interior Gateway Routing Protocol):** Cisco tarafından geliştirilen bu protokol, hem Mesafe-Vektör hem de Bağlantı-Durumu protokollerinin en iyi özelliklerini birleştiren bir “hibrit” veya “gelişmiş mesafe-vektör” protokolü olarak kabul edilir. **DUAL (Diffusing Update Algorithm)** sayesinde, birincil yol çöktüğünde önceden hesaplanmış yedek yolları anında devreye sokarak çok hızlı yakınsama sağlar. Metrik olarak bant genişliği, gecikme, yük ve güvenilirlik gibi birden fazla parametreyi içeren **kompozit bir metrik** kullanır, bu da daha akıllı yol seçimleri yapmasına olanak tanır.

![](https://cdn-images-1.medium.com/max/800/0*KO7-ySH9na-aDkyD.png)

Ağ Geçidi Protokolleri

### 3.3 Sınır Ağ Geçidi Protokolü (Border Gateway Protocol — BGP)

BGP, internetin temelini oluşturan protokoldür. Bir IGP’den farklı olarak, tek bir ağ içinde değil, interneti oluşturan on binlerce bağımsız **Otonom Sistem (AS)** arasında yönlendirme bilgisi alışverişi yapmak için kullanılan bir **Dış Ağ Geçidi Protokolü’dür (EGP)**. Her AS, benzersiz bir **ASN (Otonom Sistem Numarası)** ile tanımlanır.

BGP, temel olarak teknik bir protokolden çok, bir **politika uygulama** protokolüdür. IGP’ler bir ağ içindeki *en hızlı* veya *en verimli* yolu bulmaya odaklanırken, BGP, AS’ler arasındaki *tercih edilen* yolu, genellikle teknik metriklerden ziyade iş, ekonomi ve politika anlaşmalarına dayalı olarak belirler. Örneğin, bir servis sağlayıcı, daha hızlı olsa bile rakip bir şirketin ağından geçmek yerine, trafiğini anlaşmalı olduğu daha yavaş ama daha ucuz bir ağ üzerinden göndermeyi tercih edebilir.

**Yol Vektör (Path Vector) Protokolü ve Yol Nitelikleri (Path Attributes):** BGP, bir hedefe ulaşmak için geçilen AS’lerin tam listesini (`AS-PATH` niteliği) taşıyan bir "Yol Vektör" protokolüdür. Bu, BGP'nin temel döngü önleme mekanizmasıdır; bir yönlendirici, bir rota güncellemesinde kendi ASN'sini görürse o rotayı reddeder. BGP'nin yol seçimi, bir dizi **yol niteliğine** dayanır. Bu nitelikler, rotanın özelliklerini tanımlar ve politika uygulamak için kullanılır. Başlıca nitelikler şunlardır :

* **AS\_PATH:** Geçilen AS’lerin listesi. En kısa olan tercih edilir. Kasıtlı olarak uzatılarak (`AS-Path Prepending`) bir yol daha az çekici hale getirilebilir.
* **NEXT\_HOP:** Rotaya ulaşmak için bir sonraki yönlendiricinin IP adresi.
* **LOCAL\_PREF:** Bir AS’nin dışarıya giden trafiği için hangi çıkış noktasını tercih ettiğini belirler. Daha yüksek değer tercih edilir.
* **MED (Multi-Exit Discriminator):** Komşu bir AS’den içeriye gelen trafiği etkilemek için kullanılır. Düşük değer tercih edilir.
* **COMMUNITY:** Rotaları etiketleyerek gruplamak ve bu gruplara toplu politikalar uygulamak için kullanılır.

**Route Reflector (RR):** Bir AS içindeki BGP yönlendiricileri (iBGP) arasında, bir komşudan öğrenilen rotanın diğer komşulara iletilmesini engelleyen bir “split-horizon” kuralı vardır. Bu kural, her yönlendiricinin diğer tüm yönlendiricilerle komşuluk kurmasını (full-mesh) gerektirir, bu da büyük ağlarda yönetilemez bir durum yaratır. **Route Reflector**, bu sorunu çözer. Belirli yönlendiriciler “istemci” olarak yapılandırılır ve tüm istemciler yalnızca RR ile komşuluk kurar. RR, bir istemciden öğrendiği rotayı diğer tüm istemcilere “yansıtarak” full-mesh ihtiyacını ortadan kaldırır.

### 3.4 BGP Güvenliği

BGP’nin orijinal tasarımında güvenlik ön planda değildi. Bu durum, **BGP Rota Kaçırma (Hijacking)** gibi ciddi güvenlik tehditlerine yol açmıştır. Rota kaçırma, bir AS’nin kendisine ait olmayan bir IP önekini (prefix) sahiplenerek internet trafiğini yasa dışı bir şekilde kendi üzerine çekmesidir. Bu, veri hırsızlığına, hizmet kesintilerine veya geniş çaplı dolandırıcılıklara neden olabilir.

Bu tehdide karşı en etkili modern çözüm **RPKI (Resource Public Key Infrastructure)** sistemidir. RPKI, bir IP önekinin hangi ASN tarafından yasal olarak duyurulabileceğini kriptografik olarak doğrulayan bir altyapıdır. Bölgesel İnternet Kayıt Kurumları (RIR’ler), IP adresi sahiplerinin **Rota Kaynak Yetkilendirmeleri (ROA)** oluşturmasına olanak tanır. Bir ROA, belirli bir IP önekini, o öneği duyurma yetkisine sahip ASN’yi ve maksimum önek uzunluğunu birbirine bağlayan dijital olarak imzalanmış bir nesnedir. BGP yönlendiricileri, RPKI’yı destekleyen ağlarda, gelen bir rota duyurusunu bu ROA veritabanına karşı kontrol eder (**Rota Kaynak Doğrulaması — ROV**). Eğer duyuru geçersizse (örneğin, yanlış ASN tarafından yapılmışsa), rota reddedilir ve hijacking önlenmiş olur. RPKI’nin yaygınlaşması, YouTube ve Twitter gibi büyük platformları hedef alan kaçırma saldırılarının etkisini önemli ölçüde azaltmıştır.

---

### Bölüm 4: Anahtarlama Teknolojileri ve Yerel Alan Ağı (LAN) Yönetimi

Yerel Alan Ağları (LAN), modern ağların temel yapı taşlarıdır. Bu bölümde, LAN’ların verimli ve güvenli bir şekilde çalışmasını sağlayan Katman 2 anahtarlama (switching) teknolojileri, ağları mantıksal olarak bölümlere ayıran VLAN’lar ve yedekli bağlantılarda döngüleri önleyen Spanning Tree Protokolü ele alınmaktadır.

### 4.1 Katman 2 Anahtarlama ve Adres Çözümleme

Katman 2 anahtarlar (switch’ler), OSI modelinin Veri Bağlantısı katmanında çalışır ve çerçeveleri (frames) MAC adreslerine göre ileterek LAN’larda verimli bir iletişim sağlar.

**MAC Adres Tablosu (CAM Table):** Bir anahtarın zekası, **MAC adresi tablosunda** yatar. Bu tablo, anahtarın hangi MAC adresinin hangi portuna bağlı olduğunu kaydeder. Anahtar, bu tabloyu dinamik olarak oluşturur :

* **Öğrenme (Learning):** Anahtar, bir portundan bir çerçeve aldığında, çerçevenin **kaynak MAC adresini** inceler. Eğer bu MAC adresi tabloda yoksa, MAC adresini ve geldiği port numarasını tabloya yeni bir giriş olarak ekler. Eğer adres zaten tabloda varsa, o girişin yaşlanma zamanlayıcısını (aging timer) sıfırlar. Bu zamanlayıcı genellikle 300 saniye (5 dakika) olup, bu süre içinde o adresten yeni bir çerçeve gelmezse giriş tablodan silinir.

**Çerçeve İletme Mantığı:** Anahtar, bir çerçeveyi iletmek için **hedef MAC adresini** tablosunda arar ve üç olası karar verir :

1. **Yönlendirme (Forwarding):** Hedef MAC adresi tabloda bulunursa, anahtar çerçeveyi yalnızca o MAC adresinin kayıtlı olduğu porta gönderir. Bu, gereksiz trafiği önler.
2. **Taşkın (Flooding):** Hedef MAC adresi tabloda bulunmazsa (bilinmeyen bir unicast ise), anahtar çerçeveyi geldiği port hariç **tüm diğer portlara** kopyalar. Bu işleme “flooding” denir. Hedef cihaz yanıt verdiğinde, anahtar onun MAC adresini öğrenir ve bir sonraki sefer flooding yapmaz.
3. **Yayın (Broadcasting):** Hedef MAC adresi `FF:FF:FF:FF:FF:FF` olan bir yayın (broadcast) çerçevesi gelirse, anahtar bu çerçeveyi geldiği port hariç tüm portlara gönderir.

**Adres Çözümleme Protokolü (ARP):** Cihazlar genellikle birbirleriyle IP adresleri üzerinden iletişim kurmak isterler, ancak yerel ağda fiili veri iletimi için MAC adresleri gereklidir. **ARP (Address Resolution Protocol)**, bu Katman 3 (IP) ve Katman 2 (MAC) adresleri arasındaki köprüyü kurar. Bir cihaz (A), aynı ağdaki başka bir cihazın (B) IP adresini bilip MAC adresini bilmediğinde şu süreci başlatır :

1. A cihazı, “Bu IP adresine sahip olan cihazın MAC adresi nedir?” diye soran bir **ARP Request** mesajını ağa yayın (broadcast) olarak gönderir.
2. Ağdaki tüm cihazlar bu isteği alır, ancak yalnızca IP adresi eşleşen B cihazı yanıt verir.
3. B cihazı, kendi MAC adresini içeren bir **ARP Reply** mesajını doğrudan A cihazına tek noktaya yayın (unicast) olarak gönderir.
4. A cihazı, aldığı bu bilgiyi kendi **ARP önbelleğine (cache)** kaydederek gelecekteki iletişimler için kullanır.

### 4.2 Sanal Yerel Alan Ağları (VLAN) Yönetimi

**VLAN (Virtual LAN)**, tek bir fiziksel anahtarı, mantıksal olarak birden fazla bağımsız anahtar gibi davranacak şekilde sanal bölümlere ayırma teknolojisidir. Farklı VLAN’lerdeki cihazlar, araya bir yönlendirici girmeden birbirleriyle iletişim kuramazlar. VLAN’ların temel faydaları şunlardır :

* **Güvenlik:** Farklı departmanları (örneğin, Muhasebe ve Mühendislik) veya kullanıcı gruplarını (örneğin, misafirler ve çalışanlar) birbirinden izole eder.
* **Performans:** Her VLAN kendi yayın alanını (broadcast domain) oluşturur. Bu, yayın trafiğini sınırlar ve ağ genelindeki tıkanıklığı azaltır.
* **Esneklik:** Cihazlar fiziksel konumlarından bağımsız olarak mantıksal ağlara gruplanabilir.
* **Trunking ve 802.1Q Standardı:** Birden fazla VLAN’a ait trafiğin anahtarlar arasında tek bir fiziksel bağlantı üzerinden taşınması için **trunk** portları kullanılır. Bu işlemi standartlaştıran protokol **IEEE 802.1Q**’dur. 802.1Q, bir çerçeve trunk portundan geçerken Ethernet başlığına 4 byte’lık bir **etiket (tag)** ekler. Bu etiket, çerçevenin hangi VLAN’a ait olduğunu belirten bir VLAN ID içerir. Karşıdaki anahtar bu etiketi okur ve çerçeveyi doğru VLAN’a yönlendirir. **Native VLAN** ise bir trunk portu üzerinden etiketsiz olarak iletilen trafiğin ait olduğu VLAN’dır.

**VLAN Hopping Saldırıları ve Önlemleri:** Saldırganlar, VLAN’ların sağladığı izolasyonu aşmak için çeşitli teknikler kullanabilir. En yaygın iki saldırı türü şunlardır :

1. **Switch Spoofing:** Saldırgan, kendi cihazını bir anahtar gibi davranacak şekilde yapılandırır ve anahtarın portunu otomatik olarak trunk moduna geçmesi için kandırmaya çalışır. Bu genellikle, varsayılan olarak etkin olan **DTP (Dynamic Trunking Protocol)**’den yararlanılarak yapılır. Port trunk moduna geçtiğinde, saldırgan tüm VLAN’lerden gelen trafiği dinleyebilir.
2. **Double Tagging:** Bu saldırıda, saldırgan kendi çerçevesine iki adet 802.1Q etiketi ekler. Dış etiket, saldırganın bulunduğu Native VLAN’ın ID’sini, iç etiket ise hedef VLAN’ın ID’sini taşır. İlk anahtar, çerçeveyi Native VLAN’da olduğu için etiketsiz olarak görür, dış etiketi kaldırır ve trunk hattına iletir. İkinci anahtar ise artık sadece iç etiketi görür ve çerçeveyi hedef VLAN’a yanlışlıkla yönlendirir.

Bu saldırılara karşı alınacak temel önlemler şunlardır: Kullanıcı portlarında DTP’yi devre dışı bırakmak (`switchport nonegotiate`), tüm erişim portlarını manuel olarak erişim moduna ayarlamak, Native VLAN'ı kullanılmayan bir ID'ye atamak ve kullanılmayan tüm portları kapatmak.

### 4.3 Döngü Önleme (Loop Prevention) Mekanizmaları

Ağlarda yüksek erişilebilirlik sağlamak için anahtarlar arasında yedekli bağlantılar kurmak yaygın bir uygulamadır. Ancak, Katman 2'de döngüler, yayın fırtınalarına (broadcast storms) ve MAC adresi tablosunun kararsızlaşmasına yol açarak ağı tamamen çalışmaz hale getirebilir. **Spanning Tree Protocol (STP)** ve gelişmiş versiyonları, bu döngüleri önlemek için tasarlanmıştır. Bu protokollerin evrimi, ağ tasarımındaki *dayanıklılık (redundancy)* ile *verimlilik (efficiency)* arasındaki temel dengeyi daha iyi bir noktaya taşıma çabasını yansıtır.

**Spanning Tree Protocol (STP — IEEE 802.1D):** Orijinal STP, ağdaki tüm anahtarlar arasında döngüsüz bir mantıksal topoloji oluşturur. Bunu, bir **Kök Köprü (Root Bridge)** seçerek ve her anahtarın Kök Köprü’ye giden en düşük maliyetli tek bir yolu aktif bırakıp diğer tüm yedekli yolları **bloke ederek** yapar. Bu, döngüleri etkili bir şekilde önler ancak iki büyük dezavantajı vardır:

1. **Yavaş Yakınsama:** Ağ topolojisinde bir değişiklik olduğunda (örneğin aktif bir link koptuğunda), bloke edilmiş bir portun tekrar iletim durumuna geçmesi 30 ila 50 saniye sürebilir. Bu, modern uygulamalar için kabul edilemez bir kesinti süresidir.
2. **Verimsizlik:** Tüm VLAN’lar tek bir Spanning Tree örneğini paylaştığı için, yedekli bir bağlantı tamamen atıl durumda kalır. Yüksek bant genişliğine sahip bir link, birincil link çalıştığı sürece hiç kullanılmaz.

**Rapid Spanning Tree Protocol (RSTP — IEEE 802.1w):** RSTP, STP’nin yavaş yakınsama sorununu çözmek için geliştirilmiştir. Port durumlarını basitleştirerek (Blocking, Listening, Disabled yerine tek bir **Discarding** durumu) ve yeni port rolleri (birincil kök portu çöktüğünde anında devralan **Alternate Port** gibi) ekleyerek yakınsama süresini saniyeler mertebesine indirir. RSTP, STP ile geriye dönük uyumludur ancak hala tüm VLAN’lar için tek bir ağaç oluşturduğundan bant genişliği verimsizliği sorununu çözmez.

**Multiple Spanning Tree Protocol (MSTP — IEEE 802.1s):** MSTP, hem RSTP’nin hızını korur hem de STP/RSTP’nin verimsizlik sorununu çözer. MSTP, VLAN’ları mantıksal **örneklere (instances)** gruplandırır ve her örnek için ayrı bir Spanning Tree çalıştırır. Bu, VLAN bazlı yük dengelemesine olanak tanır. Örneğin, bir bağlantı VLAN 10–20 grubu için aktif (forwarding) durumdayken, aynı bağlantı VLAN 30–40 grubu için bloke (discarding) durumda olabilir. Bu sayede, tüm yedekli bağlantılar bir kısım trafik için aktif olarak kullanılır, bant genişliği israfı önlenir ve ağ kaynakları en verimli şekilde değerlendirilir.

![](https://cdn-images-1.medium.com/max/800/0*iZqupuFz_XXG4e9n.png)

Loop Prevention

Bu evrimsel yol, ağ mühendisliğinin temel hedefini özetler: temel güvenliği (döngü önleme) sağlamak, ardından hızı (hızlı yakınsama) eklemek ve son olarak zeka ve verimliliği (yük dengeleme) getirmek.

---

### Sonuç

Bu teknik inceleme, modern bilgisayar ağlarının temelini oluşturan protokolleri, adresleme şemalarını ve yönetim mekanizmalarını kapsamlı bir şekilde ele almıştır. Analiz, ağ teknolojilerinin basit ve katı modellerden, günümüzün karmaşık, esnek ve politika odaklı sistemlerine doğru evrimini açıkça ortaya koymaktadır.

* **Modeller ve Veri Akışı:** OSI ve TCP/IP modellerinin karşılaştırılması, teorik idealizm ile mühendislik pragmatizmi arasındaki farkı göstermiştir. TCP/IP’nin çalışan protokollere dayalı pragmatik yaklaşımı, onu internetin fiili standardı haline getirmiştir. Veri kapsülleme süreci ise sadece bir paketleme tekniği değil, aynı zamanda ağların modülerliğini ve protokol bağımsızlığını sağlayan temel bir soyutlama mekanizması olarak öne çıkmaktadır.
* **Adresleme ve Yönlendirme:** CIDR’ın tanıtılması, IPv4 tabanlı interneti hem adres kıtlığı hem de yönlendirme tablosu patlaması krizinden kurtaran devrimci bir adım olmuştur. Bu, teknolojinin sadece ilerlemekle kalmayıp, aynı zamanda kendi kendini sürdürülebilir kılmak için nasıl adapte olduğunun güçlü bir örneğidir. BGP’nin incelenmesi, internet omurgasındaki yönlendirmenin salt teknik bir optimizasyon olmadığını, aynı zamanda iş ve politika ilişkilerini yansıtan bir “politika uygulama” mekanizması olduğunu göstermiştir. BGP güvenliğinde RPKI’nin yükselişi, internetin temel altyapısını korumak için kriptografik doğrulamaya doğru artan bir eğilimi işaret etmektedir.
* **LAN Yönetimi:** Anahtarlama ve döngü önleme teknolojilerinin evrimi, dayanıklılık ve verimlilik arasındaki sürekli dengeyi gözler önüne sermektedir. STP’nin kaba engelleme mantığından MSTP’nin akıllı yük dengeleme yeteneklerine geçiş, ağ kaynaklarının daha verimli kullanılmasına yönelik sürekli bir arayışı temsil etmektedir. Benzer şekilde, VLAN teknolojisi ve VLAN hopping gibi saldırılara karşı geliştirilen önlemler, ağ segmentasyonunun güvenlik ve performans için ne kadar kritik olduğunu, ancak bu güvenliğin sürekli bir dikkat ve doğru yapılandırma gerektirdiğini vurgulamaktadır.

Nihayetinde, bu teknolojiler birbiriyle derinden bağlantılıdır. Bir Katman 2 anahtarının MAC adresini öğrenmesi, ARP’nin bir IP adresini çözümlemesine bağlıdır; bir yönlendiricinin bir paketi iletmesi, hem hedef IP adresini hem de o hedefe giden en iyi yolu bilmesini gerektirir; ve tüm bu sistemin küresel ölçekte çalışması, BGP’nin karmaşık politika tabanlı kararlarına dayanır. Bu karmaşık ve katmanlı yapı, modern dijital dünyanın temelini oluşturan esnek, ölçeklenebilir ve sürekli gelişen bir altyapı meydana getirmektedir.