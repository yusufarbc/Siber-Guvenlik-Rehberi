# Ağ Güvenliği ve Yönetimi II: AĞ PROTOKOLLERİ VE ADRESLEME

---

### Ağ Güvenliği ve Yönetimi II: AĞ PROTOKOLLERİ VE ADRESLEME

![](https://cdn-images-1.medium.com/max/800/1*6rU6oXi2MLCrzFEvgSY-_g.png)

### Giriş

Bu bölüm, bilgisayar ağlarının temelini oluşturan iki hayati unsuru derinlemesine incelemektedir: protokoller ve adresleme. Protokoller, ağa bağlı cihazların birbirleriyle nasıl iletişim kuracağını, veri alışverişinde bulunacağını ve hataları nasıl yöneteceğini tanımlayan kurallar ve standartlar bütünüdür; bir nevi ağın evrensel “dili”dir.1 Adresleme ise, bu ağ üzerindeki her bir cihaza benzersiz bir “kimlik” atayarak, gönderilen verinin doğru hedefe ulaşmasını sağlayan mekanizmadır.1 Bu bölümde, TCP/IP modelinin çekirdek protokollerinden başlayarak, modern internetin performans ve güvenlik ihtiyaçlarına cevap veren yenilikçi protokollere kadar geniş bir yelpaze ele alınacaktır. Ardından, internetin ilk günlerinden kalma IPv4 adreslemesinin getirdiği zorluklar ve bu zorlukları aşmak için geliştirilen tekniklerden, geleceğin internetini şekillendiren IPv6 mimarisine geçiş incelenecektir. Son olarak, internetin devasa “ağlar ağı” yapısını bir arada tutan ve veri paketlerinin kıtalar arasında en uygun yolları bulmasını sağlayan karmaşık yönlendirme protokolleri ve bu protokollerin ardındaki teknik ve politik mantık analiz edilecektir.

---

### Ana Başlık 3: Temel ve Modern Ağ Protokolleri

Bu ana başlık, ağ iletişiminin temel yapı taşlarından, günümüzün yüksek performans ve güvenlik beklentilerini karşılamak üzere geliştirilmiş en yeni protokollere uzanan bir evrimi ele almaktadır.

### Alt Başlık 3.1: Çekirdek Protokoller ve Görevleri

Bu alt başlık, TCP/IP yığınının en temel ve vazgeçilmez protokollerini, çalışma mekanizmalarını ve ağdaki rollerini detaylandıracaktır. Bu protokoller olmadan modern ağ iletişimi düşünülemez.

#### 3.1.1. Adres Çözümleme (ARP) ve Dinamik Yapılandırma (DHCP)

**ARP (Address Resolution Protocol):** Bu protokol, TCP/IP modelinin İnternet Katmanı (OSI Katman 3) ile Ağ Arayüzü Katmanı (OSI Katman 2) arasında kritik bir “çevirmen” görevi görür. Bir cihaz, aynı yerel ağdaki başka bir cihaza veri göndermek istediğinde, hedef cihazın mantıksal IP adresini bilir, ancak veriyi fiziksel olarak iletmek için hedef cihazın donanım adresi olan MAC adresine ihtiyaç duyar.1 ARP, yerel ağa bir “ARP Request” yayını (broadcast) yaparak, “Bu IP adresine sahip olan cihaz, MAC adresini bana bildirsin” der. İlgili cihaz, bir “ARP Response” ile kendi MAC adresini doğrudan istek yapan cihaza (unicast) gönderir.1 Bu IP-MAC eşleşmeleri, gelecekteki iletişimleri hızlandırmak için cihazın ARP önbelleğinde (ARP cache) geçici olarak saklanır.1

**DHCP (Dynamic Host Configuration Protocol):** Bu protokol, bir ağdaki cihazlara IP adresi, alt ağ maskesi, varsayılan ağ geçidi ve DNS sunucusu gibi temel ağ yapılandırma bilgilerinin merkezi ve otomatik olarak atanmasını sağlar.1 Bu, ağ yönetimini büyük ölçüde basitleştirir ve manuel yapılandırmadan kaynaklanabilecek hataları ortadan kaldırır. DHCP süreci,

**DORA** olarak bilinen dört adımlı bir mekanizma ile çalışır 1:

1. **Discover (Keşfet):** Ağa yeni katılan istemci, bir DHCP sunucusu bulmak için ağa bir DHCPDISCOVER yayın mesajı gönderir.
2. **Offer (Teklif Et):** Ağdaki DHCP sunucuları, istemciye bir IP adresi ve diğer yapılandırma bilgilerini içeren bir DHCPOFFER mesajı ile yanıt verir.
3. **Request (Talep Et):** İstemci, gelen tekliflerden birini seçer ve bu IP adresini kullanmak istediğini belirten bir DHCPREQUEST yayın mesajı gönderir.
4. **Acknowledge (Onayla):** Seçilen DHCP sunucusu, IP adresinin kiralandığını onaylayan ve kiralama süresi gibi son bilgileri içeren bir DHCPACK mesajı gönderir.

ARP ve DHCP, bir IP ağının “tak ve çalıştır” (plug-and-play) doğasının temelini oluşturan simbiyotik bir ikilidir. Bir cihaz ağa fiziksel olarak bağlandığında, ilk eylemi bir IP adresi almak için bir DHCP Discover yayını yapmaktır. DHCP sunucusu, cihaza bir IP adresi, alt ağ maskesi ve en önemlisi, dış dünya ile iletişim kurabilmesi için bir varsayılan ağ geçidi (router) IP adresi verir. Cihaz artık bir IP adresine sahiptir, ancak varsayılan ağ geçidine bir paket göndermek için onun fiziksel (MAC) adresini bilmesi gerekir. Bu noktada ARP devreye girer. Cihaz, varsayılan ağ geçidinin IP adresi için bir ARP isteği yayınlar ve ağ geçidinin MAC adresini öğrenir. Bu iki protokolün ardışık ve başarılı bir şekilde çalışması, bir cihazın ağa katıldıktan saniyeler sonra internete erişebilmesinin temel nedenidir. Birinin başarısızlığı, diğerinin sağladığı bilginin işlevsiz kalmasına neden olur. Bu, ağ otomasyonunun en temel ve en eski, ancak en kritik örneğidir.

#### 3.1.2. Taşıma Katmanı: TCP (Güvenilir) ve UDP (Hızlı) Karşılaştırması

**TCP (Transmission Control Protocol):** Güvenilir, sıralı ve hata kontrolü yapılmış bir veri akışı sağlamak için tasarlanmış, “bağlantı odaklı” (connection-oriented) bir protokoldür.1 Güvenilirliği, üç temel mekanizma ile sağlar:

1. **Üçlü El Sıkışma (Three-Way Handshake):** Veri aktarımı başlamadan önce, istemci ve sunucu arasında sanal bir devre kurar. Süreç şu adımlardan oluşur: İstemci bir SYN (senkronizasyon) paketi gönderir, sunucu bir SYN-ACK (senkronizasyon-onay) paketiyle yanıtlar ve son olarak istemci bir ACK (onay) paketi göndererek bağlantıyı kurar.1
2. **Sıra ve Onay Numaraları (Sequence & Acknowledgment Numbers):** Gönderilen her veri segmentine bir sıra numarası atanır. Alıcı, aldığı her segment için bir onay (ACK) numarası gönderir. Kaybolan veya bozulan segmentler bu mekanizma sayesinde tespit edilir ve yeniden gönderilir.1
3. **Akış Kontrolü (Flow Control):** Alıcının, göndericiyi yavaşlatmasını sağlayan “pencereleme” (windowing) mekanizması ile alıcının arabelleğinin (buffer) taşmasını önler.1

**UDP (User Datagram Protocol):** “Bağlantısız” (connectionless) ve “güvenilmez” bir protokoldür.1 Üçlü el sıkışma, sıralama veya hata kontrolü gibi mekanizmalara sahip olmadığı için çok daha az başlık bilgisi (overhead) içerir ve bu da onu son derece hızlı yapar.1 Veri paketlerini “ateşle ve unut” (fire and forget) mantığıyla gönderir. DNS sorguları, VoIP, online oyunlar ve video akışı gibi hızın, veri bütünlüğünden daha kritik olduğu uygulamalarda tercih edilir.1

Aşağıdaki tablo, bu iki protokol arasındaki temel farkları özetlemektedir. Bu karşılaştırma, ağ mühendisliğindeki en temel ödünleşimlerden birini (güvenilirlik ve hız arasındaki denge) net bir şekilde ortaya koyar ve belirli bir uygulama için neden bir taşıma protokolünün diğerine tercih edildiğini anlamak için kritik bir referanstır.

![](https://cdn-images-1.medium.com/max/800/1*dVjq0Id2Id8E3HTP5kP_zg.png)

**TCP ve UDP Protokollerinin Karşılaştırmalı Analizi**

#### 3.1.3. Kontrol ve Hata Mesajlaşması (ICMP): Ping ve Traceroute

**ICMP (Internet Control Message Protocol):** IP’nin ayrılmaz bir parçası olan ICMP, ağdaki cihazların (router’lar ve ana bilgisayarlar) hata durumlarını ve operasyonel bilgileri raporlaması için kullanılır.1 IP, “en iyi çaba” (best-effort) bir protokol olduğu ve paket teslimatını garanti etmediği için, bir paket hedefe ulaşamadığında (örneğin, hedef ana bilgisayar kapalıysa veya bir yönlendiricinin TTL değerini sıfırlamasıyla paket atılırsa), bu durumu kaynağa bildirmek için ICMP mesajları kullanılır.1

**Ping:** Ağ tanılama için en temel araçtır. Bir hedefin ağ üzerinde erişilebilir olup olmadığını ve kaynak ile hedef arasındaki gidiş-dönüş süresini (RTT) test etmek için ICMP’nin “Echo Request” (Tip 8) ve “Echo Reply” (Tip 0) mesajlarını kullanır.1

**Traceroute (Windows’ta tracert):** Bir paketin kaynaktan hedefe giderken izlediği yolu (yani geçtiği yönlendiricileri veya “hop”ları) haritalamak için akıllı bir mekanizma kullanır. Kaynak cihaz, hedefe doğru TTL (Time to Live) değeri 1 olan bir paket gönderir. Yol üzerindeki ilk yönlendirici paketi aldığında TTL değerini 1 azaltarak 0 yapar, paketi atar ve kaynağa bir ICMP “Time Exceeded” (Tip 11) mesajı gönderir.1 Kaynak, bu mesajdan ilk yönlendiricinin IP adresini öğrenir. Ardından TTL değeri 2 olan yeni bir paket gönderir ve bu süreç, paket hedefe ulaşana kadar her atlama noktası için tekrarlanır. Bu sayede, yol üzerindeki tüm yönlendiricilerin kimliği ve her atlamadaki gecikme süresi belirlenir.1

### Alt Başlık 3.2: Modern Güvenlik ve Performans Protokolleri

Bu alt başlık, geleneksel protokollerin modern web’in talepleri karşısında yetersiz kaldığı noktalarda ortaya çıkan yenilikçi çözümleri inceler.

#### 3.2.1. TLS 1.3: Daha Hızlı ve Güvenli El Sıkışma

RFC 8446 ile standartlaştırılan TLS 1.3, önceki sürümlerine göre önemli güvenlik ve performans iyileştirmeleri sunar.

* **Performans İyileştirmesi:** En büyük yeniliği, el sıkışma (handshake) sürecini optimize etmesidir. TLS 1.2'de güvenli bir bağlantı kurmak için iki gidiş-dönüş süresi (2-RTT) gerekirken, TLS 1.3 bu süreci tek bir gidiş-dönüşe (1-RTT) indirir.1 Bu, özellikle yüksek gecikmeli mobil ağlarda web sayfalarının yüklenme süresini önemli ölçüde azaltır. Ayrıca, daha önce bir siteye bağlanılmışsa, 0-RTT özelliği sayesinde bazı veriler ilk mesajda güvenli bir şekilde gönderilebilir, bu da gecikmeyi daha da azaltır.
* **Güvenlik Sıkılaştırması:** TLS 1.3, POODLE ve ROBOT gibi saldırılara yol açan RC4, CBC modu şifreleri ve RSA anahtar değişimi gibi eski ve güvensiz kriptografik algoritmaları tamamen kaldırarak saldırı yüzeyini daraltır.1 Bu yaklaşım, “mükemmel ileriye dönük gizlilik” (perfect forward secrecy) özelliğini varsayılan olarak zorunlu kılarak güvenliği artırır.

#### 3.2.2. QUIC ve HTTP/3: TCP’nin Sınırlarını Aşmak

**Temel Sorun: Head-of-Line (HOL) Blocking:** TCP tabanlı HTTP/2, çoklama (multiplexing) özelliği ile performansı artırsa da, TCP’nin doğasından kaynaklanan bir sorundan muzdaripti. TCP, paketlerin sıralı teslimini garanti ettiği için, bir akışa ait tek bir paket kaybolduğunda, o paket yeniden iletilene kadar arkasından gelen tüm akışlara ait paketler bekletilir. Bu duruma “hat başı bloklaması” (head-of-line blocking) denir.1

**QUIC’in Çözümü:** Google tarafından geliştirilen ve IETF tarafından standartlaştırılan QUIC (Quick UDP Internet Connections), bu sorunu çözmek için TCP yerine UDP üzerinde çalışan yeni bir taşıma katmanı protokolüdür.1 QUIC, her bir HTTP akışını (stream) kendi içinde bağımsız olarak yönetir. Bu sayede, bir akışa ait bir paket kaybolduğunda, diğer akışlar etkilenmeden veri iletimine devam edebilir, böylece HOL bloklamasını ortadan kaldırır.1

**Ek Avantajlar:** QUIC, taşıma (TCP) ve kriptografik (TLS) el sıkışmalarını tek bir adımda birleştirerek bağlantı kurulumunu 1-RTT veya 0-RTT’ye indirir. Ayrıca, bir kullanıcının Wi-Fi’den mobil ağa geçmesi gibi IP adresi değişikliklerinde bağlantının kopmamasını sağlayan “bağlantı geçişi” (connection migration) özelliğine sahiptir.1

**HTTP/3:** HTTP protokolünün, taşıma katmanı olarak TCP yerine QUIC kullanacak şekilde tasarlanmış en yeni sürümüdür.1 Bu sayede QUIC’in tüm performans ve güvenlik avantajlarını web uygulamalarına taşır.

TLS 1.3, QUIC ve HTTP/3'ün yükselişi, internet mimarisinde önemli bir paradigma kaymasını temsil etmektedir. Zeka ve kontrol, geleneksel olarak işletim sistemi çekirdeğinde ve ağın ortasındaki (middlebox) cihazlarda bulunan yavaş evrimleşen katmanlardan, hızla yenilik yapılabilen uygulama katmanına (tarayıcılar, sunucu yazılımları) taşınmaktadır. Geleneksel TCP/TLS yığını, işletim sistemlerinin çekirdeğinde yer alır ve bu katmanlarda bir değişiklik yapmak, tüm işletim sistemi satıcılarının güncellemeleri benimsemesini gerektiren yavaş bir süreçtir. Büyük teknoloji şirketleri, web performansını artırmak için bu yavaş evrime mahkum kalmak istemediler. Çözüm, TCP’yi tamamen baypas etmek ve zaten her işletim sisteminde bulunan ve uygulama katmanından programlanabilen UDP’yi bir temel olarak kullanmaktır. QUIC, güvenilirlik, akış kontrolü ve şifreleme gibi TCP ve TLS’in tüm iyi özelliklerini alır ve bunları UDP üzerinde, uygulama katmanında yeniden uygular.1 Bu stratejik hamle, uygulama geliştiricilerinin işletim sistemi güncellemelerini beklemeden, sadece tarayıcılarını ve sunucu yazılımlarını güncelleyerek yeni bir taşıma protokolünü dünyaya yaymasını sağlamıştır. Bu, inovasyonun hızını artırmış ve kontrolü ağ operatörlerinden uygulama geliştiricilerine kaydırmıştır.

---

### Ana Başlık 4: IP Adresleme ve Ağ Tasarımı

Bu ana başlık, ağdaki cihazlara benzersiz kimlikler atama sanatı ve bilimini, IPv4'ün tarihsel mirası ve getirdiği çözümlerden IPv6'nın geleceğe yönelik mimarisine kadar kapsamlı bir şekilde inceler.

### Alt Başlık 4.1: IPv4 Adresleme ve Yönetimi

#### 4.1.1. Adres Yapısı, Sınıflar ve Özel IP Aralıkları (RFC 1918)

Bir IPv4 adresi, 32 bitten oluşur ve genellikle noktalarla ayrılmış dört ondalık sayı (oktet) şeklinde gösterilir (örneğin, 192.168.1.1).1 Başlangıçta, adresler ilk oktetlerinin değerine göre A, B ve C gibi katı sınıflara ayrılmıştı. Bu sınıflı (classful) yapı, IP adresi tahsisinde büyük bir verimsizliğe yol açtığı için artık kullanılmamaktadır.1 IPv4 adres alanının tükenmesini yavaşlatmak için, internet üzerinde yönlendirilmeyen ve kuruluşların iç ağlarında serbestçe kullanılabilen üç özel adres aralığı RFC 1918 ile ayrılmıştır:

10.0.0.0/8, 172.16.0.0/12 ve 192.168.0.0/16.1

#### 4.1.2. Alt Ağlara Ayırma (Subnetting): Performans ve Güvenlik İçin Ağ Bölümleme

Alt ağlara ayırma (subnetting), büyük bir IP adres bloğunu daha küçük ve yönetilebilir alt ağlara (subnets) bölme işlemidir.1 Bu işlemin temel amaçları şunlardır:

* **Performans Artışı:** Ağı daha küçük yayın alanlarına (broadcast domains) bölerek gereksiz yayın trafiğini azaltır ve ağ verimliliğini artırır.
* **Güvenlik Artışı:** Farklı departmanları veya sunucu türlerini ayrı alt ağlara yerleştirmek, aralarına güvenlik duvarı kuralları veya Erişim Kontrol Listeleri (ACL’ler) koyarak aralarındaki trafiği kontrol etmeyi ve yanal hareketi (lateral movement) kısıtlamayı kolaylaştırır.1

Teknik olarak bu işlem, alt ağ maskesi (subnet mask) kullanılarak yapılır. Maskedeki ‘1’ bitleri ağ kısmını, ‘0’ bitleri ise ana bilgisayar kısmını temsil eder. Ana bilgisayar kısmından bitler “ödünç alınarak” ağ kısmı genişletilir ve bu sayede yeni alt ağlar oluşturulur.

#### 4.1.3. CIDR ve VLSM: Esnek ve Verimli Adres Kullanımı

**CIDR (Classless Inter-Domain Routing):** 1993 yılında tanıtılan CIDR, sınıfların katı sınırlarını ortadan kaldırır ve bir IP adresinin ağ ve ana bilgisayar kısımlarını belirtmek için bir önek uzunluğu (prefix length) kullanır (örneğin, 192.168.1.0/24).1 Bu, IP adreslerinin ihtiyaca göre çok daha verimli bir şekilde tahsis edilmesini sağlamıştır.

**VLSM (Variable Length Subnet Mask):** CIDR’ın sağladığı esneklik sayesinde, bir ağ bloğunu farklı boyutlardaki alt ağlara bölme tekniğidir.1 Örneğin, 100 ana bilgisayara ihtiyaç duyan bir alt ağ için /25 maskesi kullanılırken, iki yönlendirici arasındaki noktadan noktaya bağlantı için sadece 2 adrese ihtiyaç duyan /30 maskesi kullanılabilir. Bu, IP adresi israfını en aza indirir.

#### 4.1.4. Ağ Adresi Çevirisi (NAT)

NAT (Network Address Translation), genellikle bir yönlendirici veya güvenlik duvarı üzerinde çalışarak, iç ağdaki çok sayıda özel IP adresini (RFC 1918) tek bir genel (public) IP adresi arkasında gizler ve çeviri yapar.1 Bu mekanizma, IPv4 adreslerinin tükenmesini on yıllarca geciktiren bir “yama” olmuştur. Ancak NAT, internetin temel mimari prensiplerinden biri olan uçtan uca (end-to-end) bağlantı modelini bozar. İç ağdaki bir cihaza dışarıdan doğrudan erişim sağlamayı zorlaştırır ve bazı uygulamalar (özellikle peer-to-peer) için sorunlar yaratır.1

### Alt Başlık 4.2: IPv6 Mimarisi ve Geleceğin İnterneti

#### 4.2.1. 128-bit Adres Alanı, Gösterim ve Kısaltma Kuralları

IPv6'nın en belirgin özelliği, 128 bitlik devasa adres alanıdır. Bu, teorik olarak 2128 (yaklaşık 340 undesilyon) adres anlamına gelir ve IP adresi kıtlığı sorununu kalıcı olarak çözer.1 Bir IPv6 adresi, iki nokta üst üste (:) ile ayrılmış sekiz adet 16-bitlik onaltılık (hexadecimal) blok şeklinde yazılır.1 Yazımı kolaylaştırmak için iki temel kural vardır:

1. Bir blok içindeki baştaki sıfırlar atılabilir (örneğin, 0db8 -> db8).
2. Ardışık sıfır blokları, adreste yalnızca bir kez olmak üzere :: ile kısaltılabilir (örneğin, 2001:0db8:0000:0000:8a2e:00ff:fe28:9c5a adresi 2001:db8::8a2e:ff:fe28:9c5a şeklinde yazılabilir).1

#### 4.2.2. IPv6 Adres Türleri (Global Unicast, Link-Local, Multicast)

IPv6, IPv4'teki broadcast kavramını kaldırarak yerine daha verimli ve spesifik adres türleri getirmiştir:

* **Global Unicast:** İnternet üzerinde yönlendirilebilen genel adreslerdir (IPv4 public IP karşılığı). Genellikle 2000::/3 önekiyle başlarlar.1
* **Link-Local:** Sadece aynı fiziksel bağlantı (link) üzerindeki cihazlar arasında iletişim için kullanılır ve yönlendiricileri geçemez. fe80::/10 önekiyle başlarlar. Cihazlar ağa bağlandığında otomatik olarak bir link-local adresi oluşturur.1
* **Unique Local:** IPv4'teki özel IP adreslerine benzer şekilde, bir kuruluşun iç ağında kullanılır ve internette yönlendirilmez. fc00::/7 önekiyle başlarlar.1
* **Multicast:** Bir grup arayüzü tanımlar. Bu adrese gönderilen bir paket, grubun tüm üyelerine iletilir. IPv4'teki broadcast’in yerini daha verimli bir şekilde alır.1

#### 4.2.3. Otomatik Yapılandırma (SLAAC) ve Basitleştirilmiş Başlık Yapısı

**SLAAC (Stateless Address Autoconfiguration):** Cihazların bir DHCP sunucusuna ihtiyaç duymadan kendi Global Unicast IP adreslerini otomatik olarak yapılandırmasına olanak tanır.1 Cihaz, yerel yönlendiriciden aldığı 64-bitlik ağ önekini, kendi 48-bitlik MAC adresinden türettiği 64-bitlik arayüz ID’si ile birleştirerek 128-bitlik benzersiz bir adres oluşturur. Bu, ağ yönetimini büyük ölçüde basitleştirir ve özellikle büyük ölçekli IoT dağıtımları için kritik bir özelliktir.

**Basitleştirilmiş Başlık:** IPv6 başlığı, IPv4'e göre daha az alana sahiptir ve bazı alanlar isteğe bağlı “uzantı başlıklarına” taşınmıştır. Bu, yönlendiricilerin paketleri daha hızlı ve verimli işlemesini sağlar, çünkü başlık sabit boyutludur ve her pakette gereksiz alanlar için işlem yapılması gerekmez.

#### 4.2.4. IPv4'ten IPv6'ya Geçiş Mekanizmaları (Dual-Stack, Tünelleme)

İki protokolün uzun bir süre bir arada var olacağı bir geçiş dönemi için çeşitli mekanizmalar geliştirilmiştir:

* **Dual-Stack (İkili Yığın):** En yaygın ve basit yöntemdir. Ağ cihazları ve işletim sistemleri hem IPv4 hem de IPv6 protokol yığınlarını aynı anda çalıştırır. Bir hedefle iletişim kurulacağı zaman, mümkünse IPv6 üzerinden, değilse IPv4 üzerinden iletişim kurulur.
* **Tünelleme (Tunneling):** IPv6 trafiğinin, henüz IPv6 desteği olmayan IPv4 ağları üzerinden taşınmasını sağlar. Bu teknikte, bir IPv6 paketi, bir IPv4 paketinin veri kısmına yerleştirilerek sarmalanır (encapsulate). 6to4, Teredo ve ISATAP gibi çeşitli otomatik ve manuel tünelleme teknikleri mevcuttur.

IPv6'nın tasarımı, sadece adres kıtlığını çözmekle kalmayıp, aynı zamanda IPv4'ün zamanla biriktirdiği “teknik borcu” temizlemeye yönelik bilinçli bir mühendislik çabasını yansıtır. IPv4'ün karmaşık manuel veya DHCP tabanlı yapılandırma sorununa IPv6, SLAAC ile yanıt verir. IPv4'ün uçtan uca bağlantıyı bozan NAT sorununa IPv6, geniş adres alanı sayesinde NAT’a gerek bırakmayarak çözüm bulur. IPv4'ün işlemciyi yoran karmaşık paket başlığına karşılık IPv6, yönlendiriciler tarafından daha hızlı işlenebilen basitleştirilmiş, sabit boyutlu bir başlık sunar. Sonuç olarak, IPv6 sadece “daha fazla IP adresi” sunmakla kalmaz; aynı zamanda ağ yönetimini basitleştirmeyi, performansı artırmayı ve internetin orijinal mimari vizyonunu yeniden tesis etmeyi amaçlayan bütünsel bir yeniden tasarımdır.

---

### Ana Başlık 5: Yönlendirme Protokolleri ve İnternetin Omurgası

Bu ana başlık, veri paketlerinin bir ağ içinde veya dünya genelindeki ağlar arasında hedeflerine nasıl ulaştığını yöneten protokolleri inceler.

### Alt Başlık 5.1: Yönlendirme Prensipleri

#### 5.1.1. Statik ve Dinamik Yönlendirme Karşılaştırması

**Statik Yönlendirme:** Ağ yöneticisinin her bir rotayı yönlendiricilere manuel olarak girmesidir.1 Küçük ve topolojisi değişmeyen ağlarda güvenli ve kaynak verimli bir çözümdür. Ancak, ağ büyüdüğünde yönetimi imkansızlaşır ve ağdaki değişikliklere (örneğin bir hattın kopması) otomatik olarak uyum sağlayamaz, yani hata toleransı yoktur.

**Dinamik Yönlendirme:** Yönlendiricilerin, yönlendirme protokolleri (RIP, OSPF, BGP vb.) kullanarak birbirleriyle iletişim kurup ağ topolojisini otomatik olarak öğrenmesi ve yönlendirme tablolarını güncellemesidir.1 Bu yaklaşım, büyük ve karmaşık ağlar için ölçeklenebilirlik, esneklik ve hata toleransı sağlar.

#### 5.1.2. İdari Mesafe (Administrative Distance) ve Metrik Kavramları

Bir yönlendirici, aynı hedefe giden bir yolu birden fazla kaynaktan (örneğin, hem statik bir rota hem de OSPF protokolü üzerinden) öğrendiğinde, yönlendirme tablosuna hangi yolu ekleyeceğine karar vermek için iki aşamalı bir süreç işler:

1. **İdari Mesafe (AD — Administrative Distance):** İlk olarak, yönlendirme bilgisinin kaynağının güvenilirlik derecesini belirten AD değerine bakılır. Değeri daha düşük olan kaynak daha güvenilir kabul edilir ve o kaynaktan öğrenilen yol tercih edilir. Örneğin, Cisco cihazlarda statik bir rotanın AD değeri 1 iken, OSPF’nin 110'dur. Bu durumda, statik rota her zaman OSPF’e tercih edilir.
2. **Metrik:** Eğer yollar aynı dinamik protokolden öğrenilmişse (yani AD değerleri eşitse), bu kez protokolün kendi içindeki en iyi yolu belirlemek için kullandığı metrik değerine bakılır. Metriği en düşük olan yol, en iyi yol olarak seçilir ve yönlendirme tablosuna eklenir.1 Metrik hesaplaması protokole göre değişir: RIP için hop sayısı, OSPF için bant genişliğine dayalı maliyet, EIGRP için ise bant genişliği ve gecikme gibi birden çok parametrenin birleşimidir.

### Alt Başlık 5.2: İç Ağ Geçidi Protokolleri (IGP — Otonom Sistem İçi)

IGP’ler, tek bir Otonom Sistem (AS) içindeki yönlendiricilerin birbirleriyle rota bilgilerini paylaşması için kullanılır.1

#### 5.2.1. Mesafe Vektörü: RIPv1 ve RIPv2

**Çalışma Mantığı:** En eski ve en basit mesafe vektörü (distance vector) protokolüdür. Metrik olarak sadece “hop sayısını” (atlama sayısı) kullanır ve en fazla 15 hop’a izin verir.1 Yönlendiriciler periyodik olarak yönlendirme tablolarının tamamını komşularına gönderir.

**RIPv1 ve RIPv2 Farkları:** RIPv1 sınıflı (classful) bir protokoldür ve yönlendirme güncellemelerinde alt ağ maskesi bilgisini göndermez. RIPv2 ise sınıfsızdır (classless), Değişken Uzunluklu Alt Ağ Maskesi’ni (VLSM) destekler ve güncellemelerini broadcast yerine daha verimli olan multicast ile yapar.1 Yavaş yakınsama süresi ve basit metriği nedeniyle modern ağlarda kullanımı kalmamıştır.

#### 5.2.2. Bağlantı Durumu: OSPF ve Dijkstra Algoritması

**Çalışma Mantığı:** OSPF (Open Shortest Path First), bir bağlantı durumu (link-state) protokolüdür. Her yönlendirici, ağın tamamının topolojik bir haritasını (link-state database) oluşturur. Bu harita üzerinde Dijkstra’nın en kısa yol öncelikli (Shortest Path First — SPF) algoritmasını çalıştırarak kendisinden ağdaki diğer tüm hedeflere giden en hızlı (en düşük maliyetli) yolları hesaplar.

**Avantajları:** Ağdaki değişikliklere çok hızlı bir şekilde uyum sağlar (hızlı yakınsama) ve ölçeklenebilirlik için ağı “alanlara” (areas) bölme yeteneğine sahiptir. Bu hiyerarşik yapı, büyük ağlarda yönlendiriciler üzerindeki işlem yükünü azaltır.

#### 5.2.3. Hibrit: EIGRP ve DUAL Algoritması

**Çalışma Mantığı:** EIGRP (Enhanced Interior Gateway Routing Protocol), Cisco’nun geliştirdiği, hem mesafe vektörü hem de bağlantı durumu özelliklerini birleştiren bir protokoldür. En iyi yolu bulmak ve döngüsüz (loop-free) bir topoloji sağlamak için DUAL (Diffusing Update Algorithm) algoritmasını kullanır.

**Hızlı Yakınsama:** EIGRP’nin en büyük avantajlarından biri, birincil yola (Successor) ek olarak, döngüye neden olmayacağı garanti edilen en iyi yedek yolu (Feasible Successor) önceden hesaplayıp hazır tutmasıdır. Birincil yol çöktüğünde, yönlendirici anında yedek yola geçerek çok hızlı bir yakınsama sağlar.

### Alt Başlık 5.3: Dış Ağ Geçidi Protokolü (EGP — Otonom Sistemler Arası)

#### 5.3.1. İnternetin Yönlendirme Protokolü: BGP

İnternet, binlerce bağımsız ağın (Otonom Sistemler — AS) bir araya gelmesiyle oluşur. BGP (Border Gateway Protocol), bu farklı AS’ler arasındaki yönlendirme için kullanılan tek Dış Ağ Geçidi Protokolü’dür (EGP).1 BGP, bir “yol vektörü” (path-vector) protokolü olarak sınıflandırılır.

#### 5.3.2. Otonom Sistem Numarası (ASN) ve Rolü

Otonom Sistem Numarası (ASN), internet üzerindeki her bir otonom sistemi (büyük bir ISP, bir üniversite, bir bulut sağlayıcı ağı gibi) benzersiz şekilde tanımlayan bir numaradır.1 BGP, yönlendirme bilgilerini AS’ler arasında değiş tokuş etmek ve yönlendirme politikalarını uygulamak için bu numaraları kullanır.

#### 5.3.3. Politika Tabanlı Yönlendirme: AS-PATH ve Diğer BGP Öznitelikleri

OSPF gibi IGP’lerin amacı bir AS içinde teknik metriklere (bant genişliği, maliyet) dayalı *en hızlı* yolu bulmakken, BGP’nin amacı AS’ler arasında *politika tabanlı en iyi* yolu bulmaktır.1 Bu politikalar genellikle hızdan ziyade ticari anlaşmalara (peering, transit), maliyetlere ve güvenlik kaygılarına dayanır.1 İnternet tek bir şirkete ait değildir; rakip ISP’ler ve bulut sağlayıcıları gibi kendi çıkarlarına göre hareket eden kuruluşlardan oluşur. Bu kuruluşların birincil amacı küresel ağı değil, kendi ağlarını optimize etmek ve kâr etmektir. Bir ISP, trafiğini daha hızlı ama pahalı bir “transit” bağlantı yerine, daha yavaş ama ücretsiz bir “peering” bağlantısı üzerinden göndermeyi tercih edebilir. BGP, bu ticari kararları teknik olarak uygulayabilmek için gerekli araçları sunar.

**AS-PATH Özniteliği:** BGP’nin en temel özniteliğidir. Bir hedefe ulaşmak için geçilmesi gereken AS’lerin bir listesini içerir. İki temel işlevi vardır 1:

1. **Döngü Önleme:** Bir yönlendirici, gelen bir rota duyurusunun AS-PATH listesinde kendi AS numarasını görürse, bu rotanın bir döngü oluşturduğunu anlar ve onu reddeder.
2. **Yol Seçimi ve Politika:** Varsayılan olarak, en kısa AS-PATH’e sahip yol tercih edilir. Ancak yöneticiler, “AS-PATH prepending” tekniği ile bu listeye kendi ASN’lerini birden çok kez ekleyerek yolu yapay olarak uzatabilir ve diğer AS’lerin o yolu daha az tercih etmesini sağlayabilirler. Bu, hızla ilgili değil, tamamen bir politika aracıdır.

LOCAL\_PREF ve MED gibi diğer BGP öznitelikleri de, bir AS’nin hangi yolları tercih edeceğini veya komşularının kendi ağlarına nasıl ulaşacağını etkilemek için kullanılan politika araçlarıdır.1 İnternetteki bir paketin izlediği yol, her zaman teknik olarak en verimli yol değildir; genellikle bir dizi ticari ve politik kararın sonucudur. Bu felsefi ayrımı anlamak, küresel internetin gerçekte nasıl çalıştığını anlamanın anahtarıdır.1

Aşağıdaki tablo, bir AS içi yönlendirme protokolü olan OSPF ile AS’ler arası yönlendirme protokolü olan BGP arasındaki temel felsefi ve teknik farkları özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*FlgrJqdasUCOHJ1RQvVpGQ.png)

**OSPF (IGP) ve BGP (EGP) Arasındaki Felsefi ve Teknik Farklar**