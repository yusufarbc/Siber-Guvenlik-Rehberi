# Ağ Güvenliği ve Yönetimi V: MODERN DİJİTAL ALTYAPI

---

### Ağ Güvenliği ve Yönetimi V: MODERN DİJİTAL ALTYAPILAR

![](https://cdn-images-1.medium.com/max/800/1*aBV-V0NvCXaSMoVRhcmT9w.png)

Bu bölüm, ağ yönetimi ve güvenliğinin en ileri ve dinamik alanlarına odaklanarak, modern dijital altyapıların temelini oluşturan kritik teknolojileri derinlemesine incelemektedir. Geleneksel ağ paradigmalarının ötesine geçerek, internetin temel isim çözümleme mekanizması olan DNS’in güvenlik katmanlarını, kurumsal hareketliliğin bel kemiği olan kablosuz ağların karmaşık yönetim ve güvenlik mimarilerini ve son olarak, bilişimin geleceğini şekillendiren bulut tabanlı, yazılım tanımlı ve sıfır güvene dayalı modern ağ mimarilerini ele alacağız. Bu konular, günümüz ağ ve güvenlik profesyonellerinin yüzleştiği en güncel zorlukları ve fırsatları temsil etmektedir.

---

### Modern Ağ Mimarileri

Ağ teknolojilerinin geleceğini şekillendiren en dönüştürücü güçleri ele almaktadır. Sanallaştırma ve bulut bilişimin ağları nasıl yeniden tanımladığından, “asla güvenme, her zaman doğrula” felsefesine dayanan Sıfır Güven mimarisine ve ağ ile güvenliğin bulutta birleştiği SASE gibi yeni çerçevelere kadar uzanan bir yelpazede, geleceğin ağlarının temel prensipleri ve bu evrimin ağ mühendisinin rolü üzerindeki etkileri incelenecektir.

### Sanallaştırma ve Bulut Bilişimin Etkisi

#### Ağ Sanallaştırma: VLAN’dan VXLAN’a

Ağ sanallaştırma, tek bir fiziksel ağ altyapısı üzerinde birden çok mantıksal, yalıtılmış sanal ağ oluşturma pratiğidir. Geleneksel ağ segmentasyonu için kullanılan **VLAN (Virtual Local Area Network)**, Ethernet çerçevesine eklediği 12 bitlik bir ID alanı nedeniyle teorik olarak yaklaşık 4000 sanal ağ segmenti ile sınırlıdır. Bu sayı, binlerce müşteriye hizmet veren büyük veri merkezleri ve bulut sağlayıcıları için ciddi bir ölçeklenebilirlik sınırı oluşturmuştur.

Bu sınırı aşmak için **VXLAN (Virtual Extensible Local Area Network)** geliştirilmiştir. VXLAN, bir **ağ katmanlama (network overlay)** protokolüdür. Çalışma prensibi, orijinal Katman 2 Ethernet çerçevesini alıp, onu bir Katman 3 UDP paketi içine sarmalamaktır (encapsulation). Bu yaklaşımın getirdiği en büyük avantajlar şunlardır:

* **Devasa Ölçeklenebilirlik:** VLAN’ın 12 bitlik ID’si yerine, VXLAN 24 bitlik bir VXLAN Network Identifier (VNI) kullanır. Bu, 16 milyondan (224) fazla benzersiz sanal ağ segmenti oluşturulmasına olanak tanır.
* **Esneklik:** VXLAN, Katman 3 IP ağı üzerinde çalıştığı için, aynı sanal ağa ait sanal makineler fiziksel olarak farklı raflarda, hatta farklı coğrafi konumlarda olabilir.

![](https://cdn-images-1.medium.com/max/800/1*3b1rG2nxmQE_BzL1LsBfhA.png)

*VLAN ve VXLAN Teknolojilerinin Karşılaştırması*

#### Yazılım Tanımlı Ağ (SDN) ve OpenFlow Protokolü

Yazılım Tanımlı Ağ (Software-Defined Networking — SDN), ağ yönetiminde devrim niteliğinde bir yaklaşımdır. Geleneksel ağ cihazlarında, ağın zekası (ne yapılacağına karar veren **kontrol düzlemi**) ve paketleri fiziksel olarak ileten donanım (bu kararı uygulayan **veri düzlemi**) aynı kapalı kutu içinde birleşiktir. SDN’nin temel felsefesi, bu iki düzlemi birbirinden ayırmaktır.

SDN mimarisinde, ağdaki tüm zeka, tüm ağın topolojisini gören ve politika kararlarını alan merkezi bir yazılım tabanlı **SDN denetleyicisine (controller)** taşınır. Ağ cihazları ise, paketleri iletmekten sorumlu basit donanımlara dönüşür ve ne yapacaklarına dair talimatları merkezi denetleyiciden alırlar. Bu mimari, ağı tamamen programlanabilir hale getirir.

**OpenFlow Protokolü**, kontrol düzlemi ile veri düzlemi arasındaki bu iletişimi standartlaştıran en yaygın “güneye yönelik” (southbound) arayüzdür. OpenFlow, SDN denetleyicisinin, veri düzlemindeki switch’lerin **akış tablolarını (flow tables)** programlamasına olanak tanır. Bir switch’e bir paket geldiğinde, switch bu paketi akış tablosundaki kurallarla eşleştirmeye çalışır. Eğer bir eşleşme bulunamazsa, switch paketi ne yapacağını sormak için merkezi denetleyiciye gönderir. Bu mekanizma, ağ davranışının merkezi ve dinamik bir şekilde kontrol edilmesini sağlar.

#### Bulut Ağ Hizmetleri (AWS, Azure, GCP)

Büyük bulut sağlayıcıları (AWS, Azure, Google Cloud), SDN ve ağ sanallaştırma ilkelerini küresel ölçekte uygulayarak, müşterilerine API’ler ve web arayüzleri aracılığıyla, kullanımı kolay ağ hizmetleri sunarlar. Bu hizmetler, müşterilerin kendi özel, yalıtılmış sanal ağlarını (örneğin, **Amazon VPC, Azure VNet, Google VPC**) bulut üzerinde dakikalar içinde oluşturmalarına olanak tanır.

Bu hizmetlerin geleneksel ağ yönetimine etkisi derindir. Artık odak noktası, fiziksel cihazların manuel olarak yapılandırılması değildir. Bunun yerine, ağ mühendisleri, otomasyon araçları kullanarak, uygulamanın gereksinimlerine uygun ağ topolojilerini, güvenlik politikalarını ve bağlantı kurallarını **“Kod olarak Altyapı” (Infrastructure as Code — IaC)** prensibiyle tanımlar ve dağıtır. Bu, ağ yönetimini daha hızlı, daha tekrarlanabilir ve daha az hataya açık hale getirmiştir.

### Ağ Erişim Kontrolü (NAC) Çözümleri

Ağ Erişim Kontrolü (NAC), Sıfır Güven mimarisinin temel uygulama araçlarından biridir. Ağa bağlanmaya çalışan her cihazın ve kullanıcının kimliğini doğrulayan ve önceden tanımlanmış güvenlik politikalarına uygunluğunu denetleyen bir çözümdür. Temel amacı, yalnızca yetkili ve “sağlıklı” (güvenlik standartlarına uygun) cihazların ağ kaynaklarına erişmesini sağlamaktır.

Bir NAC çözümü, ağa erişimi dört temel aşamada kontrol eder:

1. **Kimlik Doğrulama (Authentication):** Cihazın veya kullanıcının kimliğini doğrular (genellikle 802.1X veya MAC adresi ile).
2. **Güvenlik Taraması (Posture Assessment):** Cihazın güvenlik duruşunu analiz eder (antivirüs güncel mi, yamalar tam mı vb.).
3. **Yetkilendirme (Authorization):** Kimlik ve güvenlik taraması sonuçlarına göre politikalar uygulanır: Tam Erişim, Kısıtlı Erişim (Karantina) veya Erişim Engellendi.
4. **İyileştirme (Remediation):** Karantinaya alınan cihazlara, güvenlik eksikliklerini gidermeleri için kaynaklar sunulur.

### Sıfır Güven (Zero Trust) Mimarisi ve Mikro-Segmentasyon

Geleneksel güvenlik modelleri, genellikle “kale ve hendek” yaklaşımını benimser; yani kurumun iç ağını güvenli, interneti ise güvensiz kabul eder. Ancak uzaktan çalışma ve bulut bilişimle birlikte bu “güvenilir iç ağ” kavramı geçerliliğini yitirmiştir. **Sıfır Güven (Zero Trust)**, bu eski yaklaşıma bir yanıttır ve temel felsefesi **“asla güvenme, her zaman doğrula” (never trust, always verify)** ilkesine dayanır.

Bu modelde, bir isteğin ağın içinden veya dışından gelmesine bakılmaksızın, her erişim talebi potansiyel bir tehdit olarak kabul edilir ve kaynaklara erişim izni verilmeden önce kimliği ve cihaz durumu sürekli olarak doğrulanır. Sıfır Güven’in üç ana ilkesi vardır:

1. **Açıkça Doğrula (Verify Explicitly):** Her erişim isteğini, kullanıcı kimliği, cihaz sağlığı, konum gibi tüm mevcut veri noktalarına dayanarak doğrula.
2. **En Az Ayrıcalıklı Erişimi Kullan (Use Least-Privileged Access):** Kullanıcılara sadece işlerini yapmak için mutlak surette ihtiyaç duydukları kaynaklara erişim hakkı tanı.
3. **İhlal Varsay (Assume Breach):** Bir saldırının zaten gerçekleştiğini varsayarak, saldırganların ağ içinde yanal olarak hareket etmesini engellemek için erişimi segmente et.

**Mikro-segmentasyon (Micro-segmentation)**, Sıfır Güven mimarisini hayata geçiren temel teknolojilerden biridir. Geleneksel ağ segmentasyonunda ağı büyük parçalara (VLAN’lar gibi) ayırmak yerine, mikro-segmentasyon ağı çok daha küçük, granüler güvenlik bölgelerine, hatta tek bir iş yükü veya uygulamaya kadar böler. Her bir mikro-segmentin etrafına sanal bir güvenlik duvarı yerleştirilir ve bu segmentler arasındaki tüm trafik akışı sıkı bir şekilde denetlenir. Bu yaklaşım, bir saldırganın ağın bir bölümünü ele geçirmesi durumunda, diğer segmentlere **yanal olarak hareket etmesini (lateral movement)** son derece zorlaştırarak saldırının etki alanını (blast radius) önemli ölçüde sınırlar.

### Ağ ve Güvenliğin Yakınsaması: SD-WAN ve SASE

Geleneksel WAN mimarilerinde, şubelerden gelen tüm internet ve bulut trafiği, güvenlik denetimlerinden geçmek üzere önce merkezi veri merkezine yönlendirilir (backhauling). Bu yaklaşım, özellikle bulut uygulamaları için ek gecikme (latency) yaratarak kullanıcı deneyimini olumsuz etkiler.

**SD-WAN (Software-Defined WAN)**, SDN prensiplerini WAN’a uygulayarak bu sorunu çözer. Farklı WAN bağlantı türlerini (MPLS, internet, 5G) tek bir havuzda birleştirir ve uygulama farkındalığı ile trafiği anlık olarak en iyi yola dinamik bir şekilde yönlendirir. Bu, güvenilir olmayan bulut trafiğinin doğrudan şubeden internete çıkarılmasına olanak tanıyarak performansı optimize eder.

**SASE (Secure Access Service Edge)**, ağ ve güvenliğin yakınsamasının bir sonraki adımıdır. Gartner tarafından tanımlanan SASE, SD-WAN’ın ağ yeteneklerini, bulut tabanlı bir güvenlik hizmetleri yığını ile tek bir birleşik, bulut tabanlı hizmette birleştiren bir mimari çerçevedir. SASE’nin temel felsefesi, güvenlik kontrollerini veri merkezinden alıp kullanıcıya veya cihaza en yakın “kenar” (edge) noktasına taşımaktır.

![](https://cdn-images-1.medium.com/max/800/1*05xI3WYS5avJ1qxcB7x3Jw.png)

*SASE Mimarisi Bileşenleri ve İşlevleri*

### Ağ Mühendisinin Gelişen Rolü ve Gelecek Trendler

Ağ mühendisinin rolü, son yıllarda önemli bir evrim geçirmiştir. Geleneksel olarak fiziksel cihazların (router, switch) kurulumu ve Komut Satırı Arayüzü (CLI) ile yapılandırılmasına odaklanan bu rol, bulut bilişim, sanallaştırma ve yazılım tanımlı ağların yükselişiyle birlikte stratejik bir mimari ve otomasyon uzmanlığına dönüşmüştür.

Modern bir ağ mühendisi, sadece donanımı yöneten bir teknisyen değil, aynı zamanda işletmenin hedeflerine ulaşması için ağı stratejik bir varlık olarak tasarlayan ve güvenliğini sağlayan bir mimardır. Bu yeni rol, geleneksel ağ bilgisinin yanı sıra yeni yetkinlikler gerektirmektedir. Otomasyon için **Python** gibi betik dilleri, bulut platformları (**AWS, Azure**), **API entegrasyonu** ve “Kod olarak Altyapı” (IaC) prensiplerine hakimiyet artık standart beklentiler haline gelmiştir.1 Rol, bir “ağ operatöründen” bir “ağ otomasyon geliştiricisine” veya “NetDevOps mühendisine” evrilmektedir.

Modern ağ mimarilerinin evrimi, **soyutlama (abstraction)** ve **yakınsama (convergence)** olmak üzere iki temel güç tarafından yönlendirilmektedir. Soyutlama, karmaşıklığı yönetilebilir kılarken (VLAN->VXLAN->SDN->Bulut API’leri), yakınsama, siloları yıkarak (Ağ+Güvenlik=SASE) daha bütünsel ve verimli sistemler oluşturur. Bu iki gücün birleşimi, ağ altyapısını donanım merkezli bir maliyet kaleminden, iş hedeflerini doğrudan destekleyen, yazılım tanımlı ve stratejik bir varlığa dönüştürmektedir. Bu dönüşümün merkezinde ise, beceri setini bu yeni paradigmaya adapte etmek zorunda olan ağ mühendisi bulunmaktadır. Geleceğin ağları, yapay zeka destekli operasyonlar (AIOps), daha fazla otomasyon ve ağ ile güvenliğin SASE gibi çerçeveler altında tamamen bütünleşmesi yönünde ilerleyecektir.

---

### FTP Güvenliği ve Analizi

Dosya Aktarım Protokolü’nün (FTP) güvenlik mimarisini, yaygın zafiyetlerini ve modern siber güvenlik tehditleri karşısındaki yerini kapsamlı bir şekilde analiz etmektedir. 1971'de ARPANET için tasarlanan ve 1985'te RFC 959 ile standartlaşan FTP, internetin temel taşlarından biri olmasına rağmen, günümüzün güvenlik beklentilerini karşılamaktan uzaktır.1 Rapor, standart FTP’nin doğası gereği şifresiz iletişim kurmasının getirdiği riskleri, bu durumun Ortadaki Adam (MitM) saldırıları ve veri sızıntılarına nasıl zemin hazırladığını detaylandırmaktadır. Ayrıca, kaba kuvvet (brute-force) ve parola püskürtme (password spraying) gibi modern kimlik doğrulama saldırılarına karşı savunmasızlığı incelenmektedir.

Protokolün temel zayıflıklarını gidermek amacıyla geliştirilen FTPS (FTP over SSL/TLS) ve SFTP (SSH File Transfer Protocol) gibi güvenli alternatiflerin teknik üstünlükleri karşılaştırmalı olarak ele alınmaktadır. FTPS’nin mevcut FTP altyapısına şifreleme eklemesine karşın, SFTP’nin SSH protokolü üzerine inşa edilmiş bütünleşik ve daha yönetilebilir bir güvenlik mimarisi sunduğu vurgulanmaktadır.

Güvenlik denetimi ve olay müdahalesi süreçleri, Nmap ile keşif, Nessus/OpenVAS ile zafiyet taraması, Wireshark ile ağ trafiği analizi ve Snort/Suricata gibi saldırı tespit sistemleri için kural geliştirme pratikleriyle somutlaştırılmıştır. Özellikle, yakın zamanda sömürülen Wing FTP Server zafiyeti (CVE-2025–47812) üzerinden bir vaka çalışması sunularak, bir güvenlik ihlalinin adli bilişim analizi adımları gösterilmektedir.

Son olarak, rapor PCI DSS, HIPAA ve SOX gibi önemli uyumluluk standartlarının FTP kullanımını nasıl kısıtladığını, IoT ve konteyner (Docker/Kubernetes) gibi modern altyapılarda FTP güvenliğinin getirdiği yeni zorlukları ve TLS 1.3 ile QUIC gibi geleceğin teknolojilerinin dosya transferi üzerindeki potansiyel etkilerini değerlendirmektedir. Bu kapsamlı analiz, kuruluşların dosya transferi altyapılarını güvence altına almaları için stratejik bir yol haritası sunmayı amaçlamaktadır.

### FTP Protokolünün Teknik Anatomisi ve Güvenlik Temelleri

FTP’nin modern ağlarda doğası gereği neden sorunlu olduğunu anlamak, protokolün temel mimari kararlarının günümüz güvenlik beklentileriyle nasıl çeliştiğini kavramaktan geçer. Bu bölüm, FTP’nin teknik temelini ve bu temelin getirdiği yapısal güvenlik zorluklarını incelemektedir.

### FTP Mimarisi: Kontrol ve Veri Kanallarının Rolü

Dosya Aktarım Protokolü, bir istemci-sunucu modeline dayanır ve diğer birçok yaygın protokolün aksine, iletişim için iki ayrı TCP bağlantısı kullanır: Komut (Kontrol) Kanalı ve Veri Kanalı.1 Bu çift kanallı mimari, protokolün esnekliğini artırmak için tasarlanmış olsa da, modern ağ güvenliği uygulamalarında önemli karmaşıklıklara yol açmaktadır.

**Komut Kanalı (Port 21):** Bu kanal, istemci ile sunucu arasındaki tüm etkileşimin yönetildiği yerdir. Bağlantı, istemcinin sunucunun standart 21 numaralı portuna bir TCP bağlantısı kurmasıyla başlar. Bu kanal, Telnet protokolü prensiplerini takip eder ve tüm komutlar ile sunucu yanıtları bu kanal üzerinden düz metin olarak iletilir. Kullanıcı kimlik doğrulaması (USER, PASS komutları), dosya ve dizin yönetimi komutları (LIST, STOR, RETR, MKD vb.) ve sunucunun bu komutlara verdiği durum kodları (örneğin, 230 Login successful) bu kanal üzerinden akar. Komut kanalı, FTP oturumu boyunca açık kalır ve oturumun durumunu yönetir.

**Veri Kanalı (Dinamik Portlar):** Bu kanal, asıl dosya içeriğinin veya dizin listelemelerinin aktarıldığı tam çift yönlü (full duplex) bir bağlantıdır. Komut kanalından farklı olarak, veri kanalı kalıcı değildir. Her bir dosya transferi veya dizin listelemesi için geçici olarak kurulur ve transfer tamamlandığında kapatılır. Bu kanalın kullandığı portlar dinamiktir ve bağlantının kurulma şekli, kullanılan moda (Aktif veya Pasif) bağlı olarak değişir. Bu dinamik port kullanımı, FTP’nin en karmaşık ve güvenlik duvarları için en sorunlu yönlerinden biridir.

Protokolün temelini oluşturan RFC 959 standardı, bu mimariyi 1985 yılında tanımlamıştır. Bu tasarımın yapıldığı dönemdeki internet, günümüzün karmaşık ve güvenlik odaklı ağ altyapısından çok farklıydı. Bu nedenle, FTP’nin temel tasarım felsefesi, modern güvenlik paradigmalarıyla doğal bir uyumsuzluk içindedir.

### Bağlantı Modları: Aktif ve Pasif Modun Güvenlik Duvarları ve NAT Üzerindeki Etkileri

FTP’nin çift kanallı mimarisinin modern ağ topolojileriyle, özellikle Ağ Adresi Çevirimi (NAT) ve durum bilgisi olan (stateful) güvenlik duvarları ile uyumsuzluğu, Aktif ve Pasif olmak üzere iki farklı veri bağlantı modunun geliştirilmesine yol açmıştır.

#### Aktif Mod (PORT Komutu)

Aktif mod, orijinal FTP spesifikasyonunda tanımlanan yöntemdir.4 Bu modda, veri bağlantısının kurulmasında istemci “aktif” bir rol oynar gibi görünse de, bağlantıyı başlatan taraf sunucudur.

1. İstemci, rastgele bir kaynak porttan (N>1023) sunucunun komut portuna (21) bağlanır.
2. Bir dosya transferi veya dizin listelemesi gerektiğinde, istemci kendi tarafında veri alımı için başka bir rastgele port (N+1) açar ve bu port bilgisini PORT N+1 komutuyla sunucuya bildirir.
3. Sunucu, kendi veri portundan (genellikle 20) istemcinin bildirdiği N+1 portuna doğru **yeni bir TCP bağlantısı başlatır**.

Bu mekanizma, günümüz internet altyapısında ciddi bir soruna yol açar. İstemci tarafındaki bir güvenlik duvarı veya NAT cihazı, dışarıdan (sunucudan) gelen bu beklenmedik ve istenmemiş bağlantı girişimini kötü niyetli bir aktivite olarak algılayıp engelleyecektir. Bu durum, Aktif modun modern ağlarda neden genellikle başarısız olduğunun ve tercih edilmediğinin temel nedenidir.

#### Pasif Mod (PASV Komutu)

Pasif mod, Aktif modun neden olduğu güvenlik duvarı sorunlarını aşmak için geliştirilmiştir. Bu modda, veri bağlantısının kurulmasındaki tüm sorumluluk istemciye aittir; istemci pasif bir şekilde sunucudan bilgi bekler.

1. İstemci, sunucunun komut portuna (21) bağlanır.
2. Veri transferi gerektiğinde, istemci PASV komutunu sunucuya gönderir.
3. Sunucu, kendi tarafında, genellikle yapılandırma dosyasında belirtilen bir aralıktan rastgele bir port (P>1023) açar ve bu port bilgisini istemciye geri bildirir.
4. İstemci, kendi rastgele portundan sunucunun bildirdiği P portuna doğru **yeni veri bağlantısını başlatır**.

Bu yöntem, istemci tarafındaki güvenlik duvarı sorununu çözer, çünkü giden bağlantılar genellikle güvenlik duvarları tarafından daha az kısıtlanır. Ancak bu, sorunu sunucu tarafına taşır. Artık sunucu yöneticisinin, pasif mod için yapılandırılan tüm dinamik port aralığına (örneğin, 40000–40100) gelen bağlantılara güvenlik duvarında izin vermesi gerekir. Bu durum, sunucunun saldırı yüzeyini önemli ölçüde genişletir ve potansiyel bir güvenlik riski oluşturur.

FTP’nin mimari tasarımı, günümüzün “varsayılan olarak engelle” (default deny) güvenlik felsefesiyle temelden çelişmektedir. Hem Aktif hem de Pasif mod, güvenlik duvarlarında istisnalar veya “delikler” açılmasını gerektirir. Bu durum, protokolün kendisinin bir güvenlik riski taşıdığını ve yönetimini karmaşıklaştırdığını göstermektedir. Bu karmaşıklık, SFTP’nin tek bir port üzerinden çalışmasının neden bu kadar büyük bir operasyonel ve güvenlik avantajı olduğunun altını çizer.

### FTP’nin Zafiyet Profili: Klasik ve Modern Saldırı Vektörleri

FTP’nin mimari zayıflıkları, pratikte çeşitli saldırı vektörleri aracılığıyla istismar edilmektedir. Bu bölüm, standart FTP’nin en kritik güvenlik açıklarını ve bu açıkların saldırganlar tarafından nasıl kullanıldığını somut senaryolarla incelemektedir.

### Şifresiz İletişim: Ortadaki Adam (MitM) ve Veri Sızıntısı Riski

Standart FTP’nin en temel ve affedilemez güvenlik zafiyeti, tüm iletişimi şifresiz, yani düz metin (clear-text) olarak gerçekleştirmesidir. Bu, hem kimlik doğrulama bilgilerini (kullanıcı adı ve parola) hem de aktarılan dosya içeriklerini kapsar. Bu durum, iki ana saldırı türüne zemin hazırlar:

* **Ağ Dinleme (Sniffing):** Bir saldırgan, istemci ile sunucu arasındaki ağ trafiğini dinleyebildiği herhangi bir noktada (örneğin, halka açık bir Wi-Fi ağında), Wireshark gibi paket analiz araçlarını kullanarak FTP paketlerini kolayca yakalayabilir.17 Yakalanan paketler incelendiğinde,  
  USER komutunu takip eden kullanıcı adı ve PASS komutunu takip eden parola açıkça görülebilir. Aynı şekilde, RETR (indirme) veya STOR (yükleme) komutları sırasında veri kanalından geçen tüm dosya içeriği de okunabilir veya kaydedilebilir. Bu durum, hassas verilerin gizliliğini tamamen ortadan kaldırır.
* **Ortadaki Adam (Man-in-the-Middle — MitM) Saldırıları:** Şifrelemenin olmaması, saldırganın sadece trafiği dinlemekle kalmayıp, aynı zamanda aktif olarak manipüle etmesine de olanak tanır.20 ARP zehirlenmesi gibi teknikler kullanarak, saldırgan kendini istemci ile sunucu arasına konumlandırabilir ve tüm trafiği kendi sistemi üzerinden geçirebilir. Bu konumda saldırgan:  
  -Aktarılan dosyalara anında zararlı yazılım (malware) enjekte edebilir.  
  -Finansal raporlar veya kişisel veriler gibi hassas bilgileri anlık olarak değiştirebilir.  
  -Sunucudan gelen yanıtları değiştirerek istemciyi sahte bir sunucuya yönlendirebilir (spoofing).

Bu riskler, standart FTP’yi güvenilmeyen ağlar üzerinde veri transferi için tamamen uygunsuz hale getirmektedir.

### Kimlik Doğrulama Zafiyetleri: Brute-Force, Parola Püskürtme ve Anonim Erişim Tehlikeleri

FTP’nin kimlik doğrulama mekanizması, modern tehditlere karşı yetersiz kalmaktadır. Zayıf veya varsayılan parolalar, yanlış yapılandırılmış erişim politikalarıyla birleştiğinde, sunucuları kolay hedefler haline getirir.

#### **Kaba Kuvvet (Brute-Force) Saldırıları**

Bu yöntemde saldırganlar, belirli bir kullanıcı adı için olası tüm parola kombinasyonlarını deneyerek doğru parolayı bulmayı hedefler. Saldırı genellikle şu adımları izler:

1. **Keşif:** Nmap gibi araçlarla ağ taranarak açık FTP portuna (21) sahip sunucular tespit edilir.
2. **Kullanıcı Adı Toplama:** Kuruluşun e-posta formatlarından veya sosyal mühendislik ile geçerli kullanıcı adları listesi oluşturulur.
3. **Otomatik Deneme:** Hydra veya benzeri araçlar kullanılarak, toplanan kullanıcı adları için yaygın parola listeleri (wordlists) veya tüm kombinasyonlar otomatik olarak denenir.
4. FTP sunucularında genellikle başarısız giriş denemelerine karşı yetersiz koruma mekanizmaları olması, bu saldırıları etkili kılar.

#### **Parola Püskürtme (Password Spraying) Saldırıları**

Geleneksel kaba kuvvet saldırılarından daha sinsi bir yöntem olan parola püskürtme, “düşük ve yavaş” (low-and-slow) bir tekniktir.24 Bu saldırıda, tek bir yaygın veya mevsimsel parola (örneğin, “Password123”, “Summer2025!”) çok sayıda farklı kullanıcı hesabına karşı denenir.25 Bu yaklaşımın temel amacı, tek bir hesap için belirlenmiş olan başarısız giriş denemesi limitlerini (account lockout) tetiklemekten kaçınmaktır. Bu sayede saldırı, geleneksel güvenlik sistemleri tarafından fark edilmeden uzun süre devam edebilir.24 Bu saldırının etkinliği, kurumsal ortamlarda genellikle standartlaştırılmış kullanıcı adı formatları ve tahmin edilebilir parola karmaşıklığı politikaları olmasından kaynaklanır. Saldırganlar, bu politikaları tahmin ederek “en olası” karmaşık parolaları denerler.

#### **Anonim FTP Yükleme Zafiyetleri**

Anonim FTP erişimi (anonymous\_enable=YES), herkese açık dosya dağıtımı için meşru bir kullanım alanına sahip olsa da, yazma izni (write\_enable=YES) ile birlikte yanlış yapılandırıldığında ciddi bir güvenlik açığına dönüşür. Bu yapılandırma, FTP sunucusunu herhangi birinin dosya yükleyebileceği kontrolsüz bir depolama alanına çevirir. Saldırganlar bu durumu şu amaçlarla istismar edebilir:

* Yasa dışı veya telif hakkıyla korunan içerikleri (warez) barındırmak ve dağıtmak.
* Zararlı yazılımları (malware, ransomware) depolamak ve diğer kurbanlara yaymak için bir merkez olarak kullanmak.
* Diğer sistemlere yönelik saldırılar için bir sıçrama tahtası (staging area) olarak kullanmak.
* Bu riskler o kadar ciddidir ki, FBI gibi kurumlar özellikle sağlık ve dişçilik tesislerini, korunan sağlık bilgilerinin (PHI) çalınmasına yol açabilecek anonim FTP sunucuları konusunda uyarmıştır.

### Protokol Düzeyi İstismarlar

Uygulama ve kimlik doğrulama katmanındaki zafiyetlerin yanı sıra, FTP protokolünün kendi tasarımından kaynaklanan istismarlar da mevcuttur.

#### **Dizin Geçişi (Directory Traversal / Path Traversal)**

Bu saldırı, bir uygulamanın kullanıcıdan aldığı dosya yolu girdisini yeterince doğrulamamasından kaynaklanır. Saldırgan, dosya adı yerine  
../../etc/passwd gibi özel karakter dizileri göndererek, kullanıcının normalde erişememesi gereken dizinlere (chroot jail dışına) çıkabilir ve hassas sistem dosyalarını okuyabilir. FTP sunucularında bu,  
RETR (indirme) veya STOR (yükleme) gibi dosya adı parametresi alan komutların manipülasyonu ile gerçekleştirilebilir. Bu, sunucu yazılımındaki bir zafiyetten veya sunucu üzerindeki bir betikten kaynaklanabilir.

#### **FTP Sıçrama (Bounce) Saldırısı**

Bu, FTP protokolünün PORT komutunun tasarımındaki bir zayıflığı istismar eden eski bir saldırı türüdür. Normalde  
PORT komutu, sunucunun veri bağlantısı için istemcinin IP adresine ve portuna bağlanmasını söyler. Ancak, protokol bu IP adresinin istemcinin kendi adresi olup olmadığını doğrulamaz. Saldırgan bu zayıflıktan faydalanarak:

1. Zafiyetli bir FTP sunucusuna bağlanır.
2. PORT komutunu, üçüncü bir kurban makinenin IP adresi ve port numarası ile gönderir.
3. Ardından bir LIST veya RETR komutu gönderdiğinde, FTP sunucusu veri bağlantısını saldırgana değil, belirtilen kurban makineye kurmaya çalışır. Bu yöntem, saldırganın kendi kimliğini gizleyerek FTP sunucusunu bir proxy gibi kullanmasına olanak tanır. Bu sayede, güvenlik duvarlarının arkasındaki sistemlere port taraması yapabilir (örneğin, nmap -b <ftp\_sunucusu> <hedef> komutu ile), diğer servislere saldırabilir veya e-posta sunucularına spam gönderebilir. Neyse ki, modern FTP sunucularının neredeyse tamamı, PORT komutunun bağlantıyı başlatan istemci dışındaki bir hedefe yönlendirilmesini varsayılan olarak engelleyerek bu saldırıya karşı koruma sağlamaktadır.

Bu saldırı vektörlerinin analizi, tehditlerin zamanla evrildiğini göstermektedir. Başlangıçta protokolün kendi mantık hataları (FTP Bounce) istismar edilirken, zamanla tehditler daha çok kimlik doğrulama katmanına (Brute-Force, Password Spraying) ve uygulama mantığına (Directory Traversal) kaymıştır. Bu durum, saldırganların her zaman en zayıf halkayı, yani genellikle insan faktörünü (zayıf parolalar) ve yazılım geliştirme hatalarını (yetersiz girdi doğrulama) hedefleme eğilimini doğrulamaktadır.

### Güvenli Dosya Transferi Protokolleri

Standart FTP’nin doğasında var olan ciddi güvenlik açıkları, verilerin şifreli ve güvenli bir şekilde aktarılmasını sağlayacak alternatif protokollerin geliştirilmesini zorunlu kılmıştır. Bu alanda öne çıkan iki ana çözüm FTPS ve SFTP’dir. Her ikisi de güvenli dosya transferi sağlasa da, temel mimarileri, çalışma prensipleri ve operasyonel özellikleri açısından önemli farklılıklar gösterirler.

### FTPS: SSL/TLS ile Güvenlik Katmanı (Explicit vs. Implicit Modlar)

FTPS (FTP Secure), standart FTP protokolünün üzerine, web sitelerini güvence altına almak için de kullanılan Güvenli Soket Katmanı (SSL) veya daha modern haliyle Taşıma Katmanı Güvenliği (TLS) şifreleme katmanının eklenmesiyle oluşturulmuştur. Bu yaklaşım, FTP’nin temel çift kanallı (kontrol ve veri) mimarisini korur ancak bu kanallar üzerinden akan veriyi şifreler. FTPS’in iki farklı uygulama modu bulunmaktadır:

* **Implicit FTPS (Örtük):** Bu, FTPS’in daha eski ve artık kullanımı önerilmeyen (deprecated) bir yöntemidir. Bu modda, güvenlik baştan itibaren “örtük” olarak varsayılır. İstemci, standart FTP portu olan 21 yerine, doğrudan FTPS için ayrılmış özel bir güvenli porta (genellikle kontrol kanalı için 990, veri kanalı için 989) bağlanır. Bağlantı kurulduğu anda bir TLS el sıkışması (handshake) beklenir ve tüm oturum baştan sona şifrelenir. Eğer istemci güvenli bir bağlantı başlatmazsa, sunucu bağlantıyı anında reddeder. Bu mod, şifresiz iletişime hiçbir şekilde izin vermez.
* **Explicit FTPS (Açık — FTPES):** Bu, günümüzde standart olarak kabul edilen ve daha yaygın desteklenen yöntemdir. Bu modda, istemci standart FTP portu olan 21 üzerinden normal, şifresiz bir bağlantı başlatır. Kimlik doğrulama bilgilerini göndermeden önce, istemci sunucuya AUTH TLS komutunu göndererek bağlantıyı güvenli bir TLS oturumuna yükseltmeyi “açıkça” talep eder. Sunucu bu talebi kabul ederse, iki taraf arasında bir TLS el sıkışması gerçekleşir ve kontrol kanalı şifrelenir. Bu modun en büyük avantajı esnekliğidir; aynı sunucu ve port üzerinden hem güvenli (FTPS) hem de güvensiz (FTP) bağlantılara hizmet verilebilir. Ancak bu esneklik, sunucunun şifresiz bağlantılara izin verecek şekilde yanlış yapılandırılması durumunda bir güvenlik riski de oluşturabilir. Ayrıca, kontrol kanalı şifrelendikten sonra veri kanalının şifrelenip şifrelenmeyeceği de istemci ve sunucu arasında ayrıca müzakere edilebilir.

### SFTP: SSH Üzerinden Tünelleme ve Bütünleşik Güvenlik

SFTP (SSH File Transfer Protocol), adındaki benzerliğe rağmen FTP ile teknik bir ilişkisi olmayan, tamamen farklı bir protokoldür. FTPS gibi mevcut bir protokole güvenlik eklemek yerine, SFTP sıfırdan güvenli olacak şekilde, Güvenli Kabuk (SSH) protokolünün bir alt sistemi olarak tasarlanmıştır.

* **Tek Kanal Mimarisi:** FTPS’nin karmaşık çift kanal yapısının aksine, SFTP hem komutları (dosya listeleme, silme vb.) hem de verileri (dosya içerikleri) tek bir güvenli SSH bağlantısı üzerinden paketler halinde iletir.9 Bu bağlantı varsayılan olarak TCP port 22'yi kullanır. Bu mimari, güvenlik duvarı yapılandırmasını büyük ölçüde basitleştirir ve Aktif/Pasif mod karmaşasını ortadan kaldırır.51
* **Güvenlik ve Kimlik Doğrulama:** SFTP’nin güvenliği, temel aldığı SSH protokolünün kanıtlanmış kriptografik mekanizmalarından gelir. Bu, AES ve Triple DES gibi güçlü şifreleme algoritmaları ile veri gizliliğini, kriptografik hash fonksiyonları ile veri bütünlüğünü ve hem sunucunun hem de kullanıcının kimliğinin doğrulanmasını sağlar.14 SFTP, standart kullanıcı adı/parola kimlik doğrulamasına ek olarak, çok daha güvenli kabul edilen ve otomasyon senaryoları için ideal olan  
  **genel anahtar (public key) kimlik doğrulamasını** da destekler.51
* **Dosya Yönetimi Yetenekleri:** SFTP, basit dosya transferinin ötesinde, uzaktaki bir dosya sistemi üzerinde çalışıyormuş gibi zengin işlevsellik sunar. Kesilen transferleri devam ettirme, dizin listeleme, dosya silme, yeniden adlandırma ve sembolik linkler gibi Unix dosya sistemi özelliklerini destekler.50

### Kapsamlı Karşılaştırma: Güvenlik Mimarisi, Performans Ölçütleri ve Operasyonel Farklılıklar

FTPS ve SFTP arasındaki seçim, genellikle bir kuruluşun mevcut altyapısı, güvenlik gereksinimleri ve operasyonel tercihleri tarafından belirlenir. Aşağıdaki tablo ve analiz, bu iki protokol arasındaki temel farkları özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*Gkg9LdRs7aUgCFgrIVuXbA.png)

Bu karşılaştırma, iki protokol arasındaki tasarım felsefesi farkını ortaya koymaktadır. FTPS, “mevcut olanı yamama” (bolting on) yaklaşımını temsil ederken, SFTP “doğru olanı sıfırdan tasarlama” (secure by design) felsefesini yansıtır. Teknik olarak SFTP’nin daha zarif, yönetimi kolay ve bütünleşik bir çözüm olduğu açıktır. Ancak FTPS’nin hala varlığını sürdürmesinin nedeni, web sunucularını yöneten sistem yöneticilerinin zaten aşina olduğu SSL/TLS sertifika altyapısını kullanması ve bazı eski sistemlerle uyumluluk gereksinimleridir.

Performans açısından, genel kanı FTPS’nin daha az protokol yükü nedeniyle SFTP’den biraz daha hızlı olabileceği yönündeydi. Ancak, yapılan detaylı benchmark testleri bu algının her zaman doğru olmadığını göstermiştir. Performans; dosya boyutu, dosya sayısı, ağ gecikmesi ve özellikle kullanılan istemci yazılımı (*curl* vs *lftp* gibi) gibi birçok faktöre bağlı olarak önemli ölçüde değişmektedir. Bazı senaryolarda SFTP, özellikle çok sayıda küçük dosya transferinde daha hızlı olabilirken, FTPS daha az sayıda büyük dosyada avantajlı olabilir. Bu nedenle, performansın protokolden çok, implementasyona ve çevre koşullarına bağlı olduğu ve her senaryo için ayrı test edilmesi gerektiği sonucuna varılabilir.

### FTP Sunucularını Sıkılaştırma (Hardening)

Teorik zafiyetleri anlamak ve güvenli protokolleri tanımak önemli olsa da, mevcut bir FTP sunucusunu fiilen güvence altına almak, bir dizi pratik ve katmanlı güvenlik önleminin uygulanmasını gerektirir. “Sıkılaştırma” veya “hardening” olarak bilinen bu süreç, sunucunun saldırı yüzeyini en aza indirmeyi ve potansiyel istismarlara karşı direncini artırmayı hedefler.

### Genel Sıkılaştırma Prensipleri

Etkili bir sıkılaştırma stratejisi, belirli yapılandırma ayarlarından önce gelen temel güvenlik felsefelerine dayanır:

* **En Az Ayrıcalık Prensibi (Principle of Least Privilege):** FTP servisini çalıştıran kullanıcıya ve FTP üzerinden bağlanan kullanıcılara, görevlerini yerine getirmek için gereken mutlak minimum izinler verilmelidir. Hiçbir kullanıcı veya süreç, gereğinden fazla yetkiye sahip olmamalıdır.
* **Saldırı Yüzeyini Azaltma:** Gereksiz FTP komutları, sunucu modülleri ve kullanılmayan servisler devre dışı bırakılmalıdır. Sunucu ne kadar az özellik sunarsa, istismar edilebilecek potansiyel zafiyet sayısı da o kadar azalır.
* **Katmanlı Savunma (Defense-in-Depth):** Güvenlik, tek bir kontrol noktasına (örneğin, sadece güçlü bir parola) emanet edilmemelidir. Bunun yerine, ağ güvenlik duvarları, sunucu yapılandırması, kullanıcı izolasyonu ve kimlik doğrulama kontrolleri gibi birden çok savunma katmanı bir arada kullanılmalıdır.
* **Düzenli Güncelleme ve Yama Yönetimi:** Kullanılan FTP sunucu yazılımı (vsftpd, ProFTPD vb.) ve temel işletim sistemi, bilinen güvenlik açıklarına karşı korunmak için düzenli olarak güncellenmeli ve güvenlik yamaları uygulanmalıdır.

### Sunucuya Özel Yapılandırmalar

En yaygın kullanılan iki FTP sunucusu olan vsftpd ve ProFTPD için kritik güvenlik ayarları aşağıda detaylandırılmıştır.

#### vsftpd Güvenlik Yapılandırması (vsftpd.conf)

vsftpd (Very Secure FTP Daemon), adından da anlaşılacağı gibi güvenlik odaklı tasarlanmış bir sunucudur. Ancak güvenli bir operasyon için doğru yapılandırılması esastır. Aşağıdaki tablo, vsftpd.conf dosyasındaki en kritik güvenlik direktiflerini özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*OeZJlSJK2eHzJb485cCaSw.png)

Güvenlik duvarı kurallarını basitleştirir ve saldırı yüzeyini daraltır.

#### 4.2.2. ProFTPD Güvenlik Yapılandırması (proftpd.conf)

ProFTPD, Apache benzeri yapılandırma dosyasıyla yüksek esneklik sunar. Bu esneklik, güvenlik için dikkatli bir yapılandırma gerektirir.

* **Kaynak Limitleri:** Brute-force ve Denial-of-Service (DoS) saldırılarını yavaşlatmak için kullanıcı ve IP başına bağlantı limitleri getirilmelidir. MaxClientsPerUser 2, MaxClientsPerHost 5, MaxLoginAttempts 3 gibi direktifler, bir kullanıcının veya IP’nin sunucuyu aşırı yüklemesini engeller.
* **Erişim Kontrolleri (<Limit>):** ProFTPD’nin en güçlü özelliklerinden biridir. Bu direktif, belirli FTP komutları (LOGIN, STOR, RETR vb.) için detaylı erişim kontrolü sağlar. Örneğin, bir uploads dizini içinde dosya indirmeyi engellemek için şu kural kullanılabilir:

> <Directory /path/to/uploads>  
>  <Limit READ DELE>  
>  DenyAll  
>  </Limit>  
> </Directory>

Bu, kullanıcıların sadece dosya yüklemesine (STOR) izin verirken, okuma (READ) ve silme (DELE) işlemlerini engeller.

* **TLS Yapılandırması:** mod\_tls modülü aracılığıyla FTPS etkinleştirilir. TLSEngine on direktifi modülü aktif ederken, TLSRequired on direktifi tüm bağlantıların şifreli olmasını zorunlu kılar. Bu, istemcilerin güvensiz FTP moduna düşmesini engeller.
* **Kullanıcı Yönetimi:** FTP erişimi olan kullanıcıların sisteme kabuk (shell) erişimi kazanmasını önlemek için, bu kullanıcıların login shell’i /bin/false veya /usr/sbin/nologin olarak ayarlanmalıdır. Bu, RequireValidShell off direktifi ile birlikte kullanılmalıdır.

### İzolasyon ve Erişim Kontrolü

Sunucu yazılımı yapılandırmasına ek olarak, işletim sistemi seviyesinde de güçlü izolasyon ve erişim kontrol mekanizmaları uygulanmalıdır.

#### Chroot Jail Tekniği

“Change root” kelimesinden türetilen chroot, bir kullanıcının oturumunun kök dizinini (/) kendi ev dizini olarak değiştiren bir Unix/Linux güvenlik mekanizmasıdır. FTP bağlamında bu, bir kullanıcının bağlandığında sadece kendi dosyalarını görmesini ve sistemin geri kalanından (/etc, /var gibi kritik dizinler) tamamen izole edilmesini sağlar. Bu, bir kullanıcının hesabının ele geçirilmesi durumunda zararın yayılmasını önleyen en etkili yöntemlerden biridir. vsftpd’de

chroot\_local\_user=YES, ProFTPD’de ise DefaultRoot ~ direktifi ile kolayca etkinleştirilebilir.

#### Güvenli Dosya ve Dizin İzinleri (Permissions)

Chroot jail içinde bile, dosya ve dizin izinlerinin doğru ayarlanması kritiktir. Linux’un standart dosya izinleri (okuma, yazma, çalıştırma) kullanılarak, kullanıcıların sadece gerekli dosyalara erişmesi ve sadece gerekli eylemleri yapabilmesi sağlanmalıdır. Örneğin, bir kullanıcının sadece dosya indirebildiği ancak yükleyemediği bir dizin için izinler r-xr-xr-x (755) olarak ayarlanabilirken, dosya yükleyebileceği bir “incoming” dizini için izinler daha kısıtlayıcı (-wx-wx-wx veya 333) olabilir, bu da kullanıcıların yükledikleri dosyaları görmesini veya değiştirmesini engeller.

#### TCP Wrappers ile IP Bazlı Kısıtlama

TCP Wrappers, çekirdek bir Linux güvenlik özelliğidir ve /etc/hosts.allow ile /etc/hosts.deny dosyalarını kullanarak belirli servislere ağ seviyesinde erişim kontrolü sağlar. FTP sunucusuna erişimi sadece bilinen ve güvenilir IP adresleriyle sınırlamak için etkili bir yöntemdir. Yapılandırma şu şekilde yapılır:

1. vsftpd.conf dosyasına tcp\_wrappers=YES eklenir.
2. /etc/hosts.deny dosyasına vsftpd: ALL kuralı eklenerek varsayılan olarak tüm bağlantılar reddedilir.
3. /etc/hosts.allow dosyasına vsftpd: 192.168.1.10,.example.com gibi kurallar eklenerek sadece izin verilen IP adreslerine veya alan adlarına erişim sağlanır.

#### PAM Entegrasyonu ile Gelişmiş Kimlik Doğrulama

Takılabilir Kimlik Doğrulama Modülleri (PAM), Linux sistemlerinde kimlik doğrulama süreçlerini yönetmek için esnek bir çerçeve sunar. FTP sunucuları, kimlik doğrulama için PAM’ı kullanacak şekilde yapılandırılabilir. Bu entegrasyon, brute-force saldırılarına karşı ek bir savunma katmanı sağlar.

pam\_tally2 modülü, /etc/pam.d/vsftpd gibi servise özel bir dosyada yapılandırılarak, belirli sayıda (örneğin 3) başarısız giriş denemesinden sonra bir kullanıcı hesabını geçici olarak (örneğin 15 dakika) kilitleyebilir. Bu, otomatik saldırı araçlarının etkinliğini önemli ölçüde azaltır.

Bu sıkılaştırma tekniklerinin bir arada uygulanması, tek bir güvenlik önlemine güvenmek yerine çok katmanlı bir savunma stratejisi oluşturur. Bir katman (örneğin, güvenlik duvarı) atlatılsa bile, diğer katmanlar (chroot, dosya izinleri, PAM) saldırganın ilerlemesini engelleyebilir veya yavaşlatabilir.

### FTP Güvenlik Analizi ve Denetim Araç Seti

Bir FTP sunucusunun güvenliğini sağlamak, sadece ilk yapılandırma ve sıkılaştırma ile biten bir süreç değildir. Güvenlik duruşunun sürekli olarak değerlendirilmesi, potansiyel zafiyetlerin proaktif olarak tespit edilmesi ve saldırı girişimlerinin anında fark edilmesi, sürdürülebilir bir güvenlik için kritik öneme sahiptir. Bu bölümde, bu amaçla kullanılan endüstri standardı araçlar ve teknikler incelenmektedir.

### Keşif ve Zafiyet Taraması: Nmap, Nessus ve OpenVAS ile Proaktif Analiz

Proaktif güvenlik analizinin ilk adımı, bir saldırganın gözünden kendi sistemlerinize bakmaktır. Bu, keşif ve zafiyet tarama araçlarıyla gerçekleştirilir.

#### **Nmap (Network Mapper)**

Ağdaki cihazları ve servisleri keşfetmek için temel bir araçtır. Bir FTP sunucusunu analiz ederken Nmap, aşağıdaki amaçlar için kullanılır :

* **Port Taraması:** Sunucuda FTP portunun (genellikle 21) açık olup olmadığını doğrulamak. nmap -p 21 <hedef\_ip>
* **Servis ve Versiyon Tespiti:** Açık portta çalışan FTP sunucu yazılımının adını ve sürüm numarasını belirlemek. Bu bilgi, bilinen zafiyetleri araştırmak için kritik öneme sahiptir. nmap -p 21 -sV <hedef\_ip>.81
* **Zafiyet Tespiti (NSE):** Nmap Scripting Engine (NSE) kullanarak, anonim giriş izni, FTP bounce saldırısı zafiyeti gibi yaygın yanlış yapılandırmaları ve zafiyetleri otomatik olarak kontrol etmek. nmap — script ftp-anon,ftp-bounce -p 21 <hedef\_ip>.81
* Aşağıdaki tablo, çeşitli FTP tarama senaryoları için kullanılabilecek Nmap komutlarını özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*yVNOZ3Pyn_2nBdGy1ioNhA.png)

#### **Nessus ve OpenVAS**

Bunlar, otomatik zafiyet tarayıcılarıdır. Nmap ile elde edilen servis versiyon bilgisini alıp, bu versiyonla ilişkili bilinen tüm Ortak Zafiyetler ve Etkilenmeler (CVE) listesini kendi güncel veritabanlarında ararlar. Örneğin, Nessus vsftpd 3.0.2 sürümünün çalıştığını tespit ederse, bu sürümle ilişkili tüm RCE (Uzaktan Kod Çalıştırma) veya DoS (Hizmet Reddi) zafiyetlerini otomatik olarak raporlar. Bu araçlar, manuel olarak takip edilmesi zor olan binlerce zafiyeti proaktif olarak tespit ederek yama yönetimi süreçlerine girdi sağlar.

### Ağ Trafiği Analizi: Wireshark ile Derinlemesine Paket İncelemesi

Wireshark, ağ trafiğini paket seviyesinde yakalayan ve protokollerin iç işleyişini detaylı bir şekilde analiz etmeyi sağlayan vazgeçilmez bir araçtır. FTP güvenliği bağlamında Wireshark, özellikle standart FTP’nin şifresiz doğasını göstermek için güçlü bir eğitim ve denetim aracıdır.

Standart bir FTP oturumu sırasında ağ trafiği yakalandığında, belirli filtreler kullanılarak kimlik doğrulama süreci kolayca izlenebilir:

* ftp filtresi, sadece FTP kontrol kanalı trafiğini gösterir.
* ftp.request.command == “USER” filtresi, istemcinin kullanıcı adını gönderdiği paketi izole eder.
* ftp.request.command == “PASS” filtresi ise parolayı içeren paketi gösterir.88

Bu paketlerin içeriği incelendiğinde, hem kullanıcı adı hem de parolanın ağ üzerinde şifrelenmeden, düz metin olarak gönderildiği net bir şekilde görülür. Bu pratik gösterim, şifreli protokollerin (FTPS/SFTP) neden zorunlu olduğunu paydaşlara anlatmanın en etkili yollarından biridir.

### Saldırı Tespit ve Önleme

Saldırı Tespit Sistemleri (IDS) ve Saldırı Önleme Sistemleri (IPS), ağ trafiğini sürekli olarak izleyerek kötü niyetli aktiviteleri tespit eden ve engelleyen güvenlik mekanizmalarıdır.

#### **Snort (IDS/IPS)**

Snort, ağ trafiğini önceden tanımlanmış kurallara (imzalara) göre analiz eder. Bir paket bir kuralın tanımına uyduğunda, Snort bir uyarı (alert) üretebilir veya trafiği aktif olarak engelleyebilir (drop). FTP sunucularını korumak için özel kurallar yazılabilir:

* **Brute-Force Tespiti:** Sunucudan istemciye gönderilen Login incorrect yanıtını izleyen bir kural, belirli bir kaynaktan kısa sürede çok sayıda başarısız giriş denemesi olduğunda uyarı üretebilir. Bu, bir brute-force saldırısının erken bir göstergesi olabilir.
* **Şüpheli Dosya Erişimi:** authorized\_keys gibi hassas bir dosyaya FTP üzerinden erişim girişimini tespit etmek için content:”authorized\_keys”; içeren bir kural oluşturulabilir.

#### **Suricata (IDS/IPS/NSM)**

Snort’a benzer bir kural yapısına sahip olan Suricata, çoklu iş parçacığı desteği sayesinde daha yüksek performans sunan modern bir alternatiftir.Suricata’nın IPS modunda drop eylemi, tespit edilen tehditleri aktif olarak engellemek için kullanılır.Örneğin, bir FTP dizin geçişi saldırısını engellemek için şu şekilde bir kural yazılabilir:  
drop ftp $EXTERNAL\_NET any -> $HOME\_NET 21 (msg:”ET WEB\_SERVER FTP Directory Traversal Attempt”; flow:to\_server,established; content:”../”; classtype:web-application-attack; sid:2002900; rev:6;)

* Bu kural, FTP kontrol kanalında ../ dizgisini içeren herhangi bir paketi tespit eder ve anında düşürerek saldırının sunucuya ulaşmasını engeller.96 Linux sistemlerde bu engelleme,  
  iptables ve NFQUEUE kullanılarak paketlerin çekirdekten Suricata’ya yönlendirilmesi ve Suricata’nın verdiği karara göre işlenmesiyle sağlanır.

Bu araçların bir arada kullanılması, reaktif ve proaktif güvenlik arasında bir döngü oluşturur. Nessus gibi araçlarla proaktif olarak zafiyetler tespit edilip kapatılırken, Snort/Suricata gibi sistemler bilinmeyen veya henüz yaması uygulanmamış saldırıları reaktif olarak tespit eder ve engeller. Bu döngü, FTP sunucularının güvenliğini sağlamada kapsamlı bir yaklaşım sunar.

### Sonuç

Dosya Aktarım Protokolü’nün (FTP) tarihsel kökenlerinden modern güvenlik zorluklarına ve gelecekteki evrimine kadar uzanan kapsamlı bir analiz sunmuştur. Analizler sonucunda elde edilen temel bulgular ve sonuçlar aşağıda özetlenmiştir:

1. **Standart FTP, Modern Güvenlik İhtiyaçları İçin Yetersizdir:** 1980'lerin ağ mimarisi için tasarlanan standart FTP’nin çift kanallı yapısı ve şifresiz iletişim modeli, günümüzün tehdit ortamında kabul edilemez riskler barındırmaktadır. Kimlik bilgilerinin ve verilerin düz metin olarak iletilmesi, onu ağ dinleme (sniffing) ve Ortadaki Adam (MitM) saldırılarına karşı tamamen savunmasız bırakmaktadır. Bu temel tasarım kusuru, standart FTP’nin güvenli olmayan ağlarda kullanımını kesinlikle uygunsuz kılmaktadır.
2. **SFTP, Teknik ve Operasyonel Olarak Üstün Bir Alternatiftir:** Güvenli alternatifler olan FTPS ve SFTP karşılaştırıldığında, SFTP’nin mimari olarak daha üstün olduğu açıktır. SSH üzerine inşa edilmiş olması, ona tek port üzerinden çalışma, basit güvenlik duvarı yapılandırması, güçlü ve esnek kimlik doğrulama mekanizmaları (özellikle public key) gibi önemli avantajlar kazandırmaktadır. FTPS, mevcut SSL/TLS altyapılarına entegre olabilme avantajı sunsa da, çift kanallı yapısının getirdiği karmaşıklık ve potansiyel yapılandırma hataları nedeniyle SFTP’nin gerisinde kalmaktadır. Bu nedenle, yeni dağıtımlar için kesinlikle SFTP tercih edilmelidir.
3. **Güvenlik, Sürekli ve Katmanlı Bir Süreçtir:** Bir FTP sunucusunu güvence altına almak, sadece güvenli bir protokol seçmekle bitmez. Bu rapor, sunucu yazılımının sıkılaştırılması (hardening), kullanıcıların chroot jail ile izole edilmesi, en az ayrıcalık ilkesine dayalı dosya izinlerinin uygulanması, ağ seviyesinde erişim kontrolleri (TCP Wrappers) ve gelişmiş kimlik doğrulama politikaları (PAM) gibi çok katmanlı bir savunma stratejisinin zorunlu olduğunu göstermiştir. Güvenlik, tek seferlik bir kurulum değil, sürekli denetim, yama yönetimi ve proaktif zafiyet taraması gerektiren bir yaşam döngüsüdür.
4. **Uyumluluk Standartları Güvenli Protokolleri Zorunlu Kılar:** PCI DSS, HIPAA ve SOX gibi düzenleyici standartlar, hassas verilerin (kredi kartı, sağlık, finansal) aktarımı sırasında şifreleme, denetim ve güçlü erişim kontrollerini kesin bir dille zorunlu kılmaktadır. Bu durum, standart FTP’yi bu sektörlerde faaliyet gösteren kuruluşlar için yasal olarak kullanılamaz hale getirmekte ve SFTP/FTPS kullanımını fiili bir standart haline getirmektedir.
5. **Modern Altyapılar Yeni Güvenlik Paradigmaları Gerektirir:** FTP’nin IoT cihazları ve konteynerize ortamlar gibi yeni platformlarda kullanılması, riskin doğasını değiştirmektedir. IoT’de güvensiz FTP, geniş ölçekli botnetlere ve ağ sızıntılarına yol açabilirken, konteyner ortamlarında risk, platformun kendisinin (host veya orkestrasyon katmanı) ele geçirilmesine kadar uzanabilir. Bu, güvenliğin sadece uygulamanın kendisinde değil, çalıştığı platformun (örneğin, Kubernetes SecurityContext ve NetworkPolicy) tamamında düşünülmesi gerektiğini ortaya koymaktadır.

Sonuç olarak, standart FTP’nin dosya transferi arenasındaki rolü, tarihsel bir referans olmaktan öteye geçmemelidir. Kuruluşlar, veri güvenliğini ve uyumluluğu sağlamak için istisnasız olarak SFTP veya en azından doğru yapılandırılmış FTPS gibi modern ve güvenli protokollere geçiş yapmalıdır. Dosya transfer altyapısının güvenliği, genel siber güvenlik duruşunun ayrılmaz bir parçası olarak ele alınmalı ve bu raporda detaylandırılan katmanlı savunma, proaktif denetim ve sürekli izleme prensipleriyle yönetilmelidir.

---

### SMTP Güvenliği ve Analizi

Basit Posta Aktarım Protokolü (SMTP), 1982'de ortaya çıkışından bu yana dijital iletişimin temel taşı olmuştur ve internet üzerinden e-posta aktarımının bel kemiğini oluşturmaktadır. Ancak, güvenin varsayıldığı bir dönemde tasarlanan temel protokol, doğası gereği kimlik doğrulama veya gizlilik mekanizmalarından yoksundur. Bu mimari eksiklik, SMTP’yi e-posta sahtekarlığı (spoofing), kimlik avı (phishing), kötü amaçlı yazılım dağıtımı ve hizmet reddi (DoS) saldırıları da dahil olmak üzere siber tehditler için birincil bir vektör haline getirmiştir. Bu rapor, SMTP güvenliğinin kapsamlı bir teknik analizini sunmakta, protokolün temel mekaniklerinden başlayarak modern, çok katmanlı savunma stratejilerine, yaygın saldırı vektörlerine, pratik sunucu sıkılaştırma kılavuzlarına ve operasyonel izleme ve olay müdahale prosedürlerine kadar geniş bir yelpazeyi ele almaktadır.

SMTP güvenliği tek bir çözümle değil, derinlemesine bir savunma modeliyle sağlandığıdır. Bu model üç ana katmandan oluşur:

1. **Kanal Güvenliği:** Aktarım Katmanı Güvenliği (TLS) ile iletişim kanalının şifrelenmesi ve SMTP Kimlik Doğrulaması (SMTP-AUTH) ile gönderen istemcinin doğrulanması.
2. **Gönderen Kimlik Doğrulaması:** Gönderen Politika Çerçevesi (SPF), Alan Adı Anahtarlarıyla Tanımlanmış Posta (DKIM) ve Alan Adı Tabanlı Mesaj Doğrulama, Raporlama ve Uygunluk (DMARC) protokolleri aracılığıyla, kullanıcının gördüğü “Kimden:” adresinin meşruiyetinin kriptografik ve ilke tabanlı olarak doğrulanması.
3. **Gelişmiş Güven ve Bütünlük Mekanizmaları:** Doğrulanmış Alınan Zincir (ARC), DANE ve MTA-STS gibi protokoller aracılığıyla, e-posta yönlendirmesinden kaynaklanan kimlik doğrulama sorunlarının çözülmesi ve ortadaki adam (MITM) saldırılarına karşı kanal güvenliğinin güçlendirilmesi.

Yanlış yapılandırılmış açık geçiş (open relay) sunucularının ve zayıf TLS şifreleme takımlarının yaygınlığından, SMTP kaçakçılığı (smuggling) gibi protokol yorumlama farklılıklarını istismar eden sofistike saldırıların ortaya çıkışına kadar bir dizi kritik bulguyu ortaya koymaktadır. Tehdit ortamının, altyapısal zafiyetlerin (açık geçişler) istismarından, kimlik ve güvenin (sahte görünen adlar, benzer alan adları) manipülasyonuna doğru evrildiği gözlemlenmektedir.

Bu bulgular ışığında, sağlam bir e-posta güvenlik duruşu elde etmek için aşağıdaki stratejik öneriler sunulmaktadır:

* **Kapsamlı DMARC Uygulaması:** Tüm meşru gönderim kaynaklarını belirlemek için `p=none` politikasıyla başlayarak, kademeli olarak `p=quarantine` ve nihayetinde en katı koruma olan `p=reject` politikasına geçiş yapılmalıdır.
* **Modern TLS Standartlarının Zorunlu Kılınması:** TLS 1.2 ve üzeri sürümlerin kullanımı zorunlu hale getirilmeli, eski ve güvensiz protokoller (SSLv3, TLS 1.0, 1.1) devre dışı bırakılmalı ve Mükemmel İletim Gizliliği (Perfect Forward Secrecy) sağlayan güçlü şifreleme takımları tercih edilmelidir.
* **Sürekli İzleme ve Analiz:** DMARC raporları ve posta sunucusu günlükleri, yanlış yapılandırmaları, yetkisiz göndericileri ve aktif tehditleri tespit etmek için proaktif bir şekilde analiz edilmelidir. Bu verilerin bir Güvenlik Bilgi ve Olay Yönetimi (SIEM) sistemine entegre edilmesi, korelasyon ve tehdit avcılığı yeteneklerini artırır.
* **Proaktif Olay Müdahalesi:** Tehlikeye girmiş bir SMTP sunucusuna müdahale etmek için önceden tanımlanmış ve test edilmiş bir olay müdahale planı (playbook) bulundurulmalıdır.

Sonuç olarak, SMTP güvenliği statik bir yapılandırma değil, gelişen tehditlere ve standartlara sürekli adaptasyon gerektiren dinamik bir süreçtir. Bu rapor, e-posta altyapısının bütünlüğünü, gizliliğini ve güvenilirliğini sağlamak için gerekli teknik derinliği ve pratik rehberliği sunmayı amaçlamaktadır.

### SMTP Protokolü: Mimari ve Temel Mekanizmalar

SMTP güvenliğini anlamak, öncelikle protokolün kendisinin ve içinde çalıştığı ekosistemin mimari bileşenlerini ve temel işleyişini kavramayı gerektirir. 1980'lerde tasarlanan SMTP, temel olarak güvene dayalı bir model üzerine inşa edilmiştir; bu model, gönderen istemcinin kimliğini sorgusuz sualsiz kabul eder. Bu temel tasarım kararı, protokolün en büyük zafiyetini oluşturur ve sonraki tüm güvenlik katmanlarının geliştirilmesinin ana nedenidir.

### E-posta Ekosisteminin Temel Bileşenleri

E-posta gönderimi, tek bir monolitik süreç değil, her biri belirli bir role sahip farklı ajanların etkileşimde bulunduğu bir zincirdir. Bu bileşenlerin ayrımı, modern e-posta güvenliğinde kritik bir mimari sınırdır.

* **Posta Kullanıcı Aracısı (Mail User Agent — MUA):** Son kullanıcıların e-posta göndermek, almak ve okumak için kullandığı istemci uygulamasıdır. Örnek olarak Microsoft Outlook, Mozilla Thunderbird veya Gmail’in web arayüzü verilebilir.
* **Posta Gönderim Aracısı (Mail Submission Agent — MSA):** Bir MUA’dan e-posta alan sunucudur. Genellikle 587 numaralı bağlantı noktasını dinler ve kullanıcının kimliğini doğrulamasını (authentication) gerektirir. MSA, e-postanın posta aktarım sürecindeki ilk resmi adımıdır ve yetkisiz gönderimleri engellemek için birincil kontrol noktası olarak hizmet eder.
* **Posta Aktarım Aracısı (Mail Transfer Agent — MTA):** İnternetin “postanesi” olarak kabul edilen çekirdek bileşendir. Postfix, Exim gibi MTA’lar, DNS MX (Mail Exchanger) kayıtlarına dayanarak sunucular arasında e-postaları yönlendirir (relay). Sunucudan sunucuya iletişim için SMTP’yi kullanan birincil bileşen budur.
* **Posta Teslim Aracısı (Mail Delivery Agent — MDA):** E-postayı alıcının posta kutusuna yerleştiren son bileşendir. Alıcı, MUA’sını kullanarak (genellikle POP3 veya IMAP protokolleri aracılığıyla) bu posta kutusundan e-postayı alır.

Bu bileşenlerin ayrımı, özellikle MSA’nın (port 587) MTA’dan (port 25) ayrılması, modern güvenlik mimarisi için temel bir adımdır. Bu ayrım, farklı güvenlik politikalarının uygulanmasına olanak tanır: e-posta gönderimi (submission) katı kimlik doğrulaması (`SMTP-AUTH`) gerektirirken, e-posta aktarımı (relaying) IP itibarı ve gönderen kimlik doğrulama protokollerine dayanır. Bu mimari ayrım, bir kullanıcının hesabının ele geçirilmesi gibi tehditlerin kaynağında kontrol altına alınmasına yardımcı olur ve kurumun sunucularının kolayca açık geçiş (open relay) olarak kötüye kullanılmasını önler.

### SMTP İşlemi: Protokol Düzeyinde Bir Bakış

Bir e-postanın aktarımı, istemci ve sunucu MTA’ları arasında bir dizi komut ve yanıttan oluşan bir TCP oturumu üzerinden gerçekleşir.

#### **Bağlantı Kurulumu**

Süreç, istemci MTA’nın sunucu MTA’ya bir TCP bağlantısı açmasıyla başlar. Sunucudan sunucuya aktarım için bu genellikle 25 numaralı bağlantı noktasında gerçekleşir. Sunucu, bağlantının başarılı olduğunu ve komutları kabul etmeye hazır olduğunu belirten bir `220 Ready` mesajıyla yanıt verir.

#### **Standart Bağlantı Noktaları ve Rolleri**

* **Port 25:** Geleneksel olarak MTA’dan MTA’ya aktarım için kullanılan şifrelenmemiş bağlantı noktasıdır. Birçok internet servis sağlayıcısı (ISP), spam’ı önlemek amacıyla istemci gönderimleri için bu bağlantı noktasını engeller.
* **Port 587:** E-posta gönderimi (MSA) için ayrılmış standart bağlantı noktasıdır. Genellikle kimlik doğrulaması gerektirir ve STARTTLS ile şifrelemeye yükseltme için tercih edilen porttur.
* **Port 465:** SMTPS (SMTP over SSL/TLS) için kullanılan, örtük (implicit) TLS sağlayan eski bir standarttır. Bir dönem kullanımdan kaldırılmış olsa da, basitliği ve güvenliği nedeniyle RFC 8314 tarafından yeniden önerilmiştir ve yaygın olarak desteklenmektedir.

#### **SMTP Zarfı ve Mesaj Başlıkları**

E-posta sahtekarlığını ve buna karşı geliştirilen mekanizmaları anlamak için kritik bir ayrım, SMTP zarfı ile mesaj başlıkları arasındadır.

* **SMTP Zarfı (Envelope):** `MAIL FROM` ve `RCPT TO` komutlarıyla tanımlanır ve e-postanın sunucular arasında nasıl taşınacağını belirler. Bu bilgiler genellikle son kullanıcı tarafından görülmez. SPF kontrolleri bu zarf üzerindeki gönderen adresini (`MAIL FROM`) doğrular.
* **Mesaj Başlıkları (Headers):** `DATA` komutuyla iletilen yükün bir parçasıdır ve son kullanıcının e-posta istemcisinde gördüğü `From:`, `To:`, `Subject:` gibi alanları içerir. DMARC, bu başlıklardaki `From:` alanının zarftaki alanla uyumlu olmasını sağlayarak sahtekarlığı önler.

### Protokol Komut ve Yanıt Analizi

Bir SMTP oturumu, belirli bir diyalog yapısını takip eder. Aşağıda temel komutlar ve sunucu yanıt kodları incelenmektedir.

* **HELO/EHLO:** İstemcinin sunucuya kendini tanıtma komutudur. `HELO` orijinal komuttur. `EHLO` (Extended Hello) ise istemcinin ESMTP (Genişletilmiş SMTP) uzantılarını desteklediğini belirtir. `EHLO` komutuna yanıt olarak sunucu, `STARTTLS` (şifrelemeyi başlat), `AUTH` (kimlik doğrulama) ve `SIZE` (mesaj boyutu limiti) gibi desteklediği yetenekleri listeler. Modern standart
* `EHLO`'dur; `HELO` ise eski sistemlerle uyumluluk için bir geri dönüş seçeneği olarak kalmıştır.
* **MAIL FROM:** Zarf gönderen adresini (Return-Path veya geri dönen posta adresi olarak da bilinir) belirtir. Bu adres, SPF kontrolleri için kullanılır.
* **RCPT TO:** Alıcının adresini belirtir. Tek bir mesaj için bu komut birden çok kez kullanılabilir.
* **DATA:** Mesaj içeriğinin (başlıklar ve gövde) aktarımının başlayacağını bildirir. Sunucu `354` koduyla yanıt verdikten sonra, istemci mesajı gönderir ve aktarımı yalnızca bir nokta (`.`) içeren bir satırla (`<CRLF>.<CRLF>`) sonlandırır.
* **QUIT:** Oturumu nazikçe sonlandırır. Sunucu `221 Bye` yanıtı verir.

#### **Diğer Önemli Komutlar:**

* **AUTH:** Kimlik doğrulama sürecini başlatır.
* **STARTTLS:** Mevcut şifrelenmemiş bağlantıyı şifreli bir TLS oturumuna yükseltmek için kullanılır.
* **RSET:** Mevcut işlem bilgilerini (gönderen, alıcılar) sıfırlar ancak bağlantıyı sonlandırmaz.
* **VRFY:** Bir e-posta adresinin sunucuda geçerli olup olmadığını kontrol eder. Güvenlik açığı oluşturabileceği için (adres toplama) çoğu modern sunucuda devre dışı bırakılmıştır.

### SMTP Güvenliği için Katmanlı Bir Model

SMTP’nin temel tasarımındaki güvenlik eksiklikleri, zamanla geliştirilen ve birbirini tamamlayan çok katmanlı bir savunma mimarisini zorunlu kılmıştır. Bu model, tek bir güvenlik mekanizmasının yetersiz olduğu ve gerçek dayanıklılığın, kanal güvenliği, gönderen kimlik doğrulaması ve gelişmiş güven protokollerinin birleşiminden geldiği ilkesine dayanır. Her katman, belirli bir tehdit vektörünü ele alırken, aynı zamanda e-postanın karmaşık ve merkezi olmayan doğası gereği işlevsellik ile güvenlik arasında bir denge kurmaya çalışır. Bu denge arayışı, STARTTLS gibi protokollerin neden geriye dönük uyumluluk adına güvenlik açıklarına sahip olduğunu ve ARC gibi daha yeni protokollerin bu gerilimleri çözmek için nasıl ortaya çıktığını açıklamaktadır.

### Katman 1: Kanalın Güvenliği — Şifreleme ve Kimlik Doğrulama

Bu katmanın temel amacı, SMTP iletişiminin geçtiği kanalı meraklı gözlerden ve aktif saldırganlardan korumaktır. E-posta içeriğinin ve kimlik bilgilerinin gizliliğini ve bütünlüğünü sağlar.

#### Aktarım Katmanı Güvenliği (TLS)

TLS (ve öncülü SSL), SMTP oturumunu şifreleyerek pasif dinlemeyi (eavesdropping) ve ortadaki adam (MITM) saldırılarını önler. Zamanla protokol gelişmiş, TLS 1.0 ve 1.1 gibi eski sürümler bilinen zafiyetler nedeniyle kullanımdan kaldırılmıştır. SMTP’de TLS uygulamasının iki ana yöntemi vardır:

* **Örtük TLS (Implicit TLS — SMTPS):** Bu yöntemde, bağlantı en başından itibaren şifrelidir. İstemci, özel olarak bu amaç için ayrılmış 465 numaralı bağlantı noktasına bağlanır ve hemen bir TLS el sıkışması (handshake) gerçekleşir. Bu yaklaşım daha basittir ve indirgeme (downgrade) saldırılarına karşı daha dirençlidir. Bir zamanlar kullanımdan kaldırılmış olmasına rağmen, RFC 8314 tarafından artık basitliği ve sağladığı güvenlik nedeniyle yeniden tavsiye edilmektedir.
* **Açık TLS (Explicit TLS — STARTTLS):** Bu mekanizma, düz metin bir bağlantıyı şifreli bir bağlantıya yükseltmek için kullanılır. Bağlantı, genellikle 25 veya 587 numaralı bağlantı noktasında şifresiz olarak başlar. İstemci `EHLO` komutunu gönderir, sunucu `STARTTLS` yeteneğini tanıtır ve istemci TLS el sıkışmasını başlatmak için `STARTTLS` komutunu gönderir.
* **STARTTLS Zafiyeti (STRIPTLS):** STARTTLS’in en büyük zafiyeti, ilk `EHLO` ve `STARTTLS` müzakeresinin şifresiz düz metin olarak gerçekleşmesidir. Aktif bir MITM saldırganı, sunucunun yanıtını yakalayıp `STARTTLS` yeteneği reklamını kaldırabilir. Bu, istemciyi şifrelemenin desteklenmediğine inandırarak kandırır ve oturumun şifresiz devam etmesine neden olur. Bu durumda, hem kimlik bilgileri hem de e-posta içeriği saldırgana açık hale gelir. Bu zafiyet, DANE ve MTA-STS gibi daha gelişmiş mekanizmaların geliştirilmesindeki en önemli motivasyon kaynaklarından biridir.

#### SMTP Kimlik Doğrulaması (SMTP-AUTH)

SMTP-AUTH, bir istemcinin sunucuya kimliğini doğrulamasını sağlayan bir ESMTP uzantısıdır (RFC 4954). Genellikle, yetkisiz aktarımı (unauthorized relaying) önlemek için posta gönderiminde (MSA, port 587) zorunludur. Bu işlem, farklı kimlik doğrulama mekanizmaları için bir çerçeve sağlayan Basit Kimlik Doğrulama ve Güvenlik Katmanı (SASL) kullanılarak gerçekleştirilir.

#### **Yaygın SASL Mekanizmaları**

* **PLAIN:** Kullanıcı adı ve parolayı tek bir Base64 kodlu dizede gönderir. Verimlidir ancak TLS şifrelemesi olmadan güvensizdir.
* **LOGIN:** Sunucunun kullanıcı adı ve parolayı ayrı adımlarda istediği benzer bir düz metin mekanizmasıdır. Bu da TLS olmadan güvensizdir.
* **CRAM-MD5:** Sunucu tarafından sağlanan bir sınama (challenge) ve kullanıcının parolasının HMAC-MD5 karmasını kullanarak parolayı açık metin olarak göndermekten kaçınan bir sınama-yanıt mekanizmasıdır. Düz metinden daha iyi olsa da, çevrimdışı kaba kuvvet saldırılarına karşı savunmasızdır ve karşılıklı kimlik doğrulama veya ileriye dönük gizlilik (forward secrecy) sağlamaz. Artık eski bir mekanizma olarak kabul edilmektedir.

#### TLS Yapılandırması ve Şifreleme Takımı En İyi Uygulamaları (2025)

Güçlü bir kanal güvenliği sağlamak için modern standartlara ve en iyi uygulamalara uymak esastır.

* **Protokol Sürümleri:** TLS 1.2 ve tercihen TLS 1.3 kullanımı zorunlu kılınmalıdır. Bilinen önemli zafiyetleri nedeniyle SSLv3, TLS 1.0 ve TLS 1.1 gibi kullanımdan kaldırılmış sürümler kesinlikle devre dışı bırakılmalıdır.
* **Önerilen Şifreleme Takımları (Cipher Suites):** NCSC ve IETF (BCP 195 / RFC 9325) gibi kuruluşların rehberliğine uygun olarak, Mükemmel İletim Gizliliği (Perfect Forward Secrecy — PFS) ve İlişkili Veri ile Doğrulanmış Şifreleme (Authenticated Encryption with Associated Data — AEAD) sağlayan şifreleme takımlarına öncelik verilmelidir.  
  - **TLS 1.3 için:** `TLS_AES_256_GCM_SHA384`, `TLS_AES_128_GCM_SHA256`, `TLS_CHACHA20_POLY_1305_SHA256`.  
  - **TLS 1.2 için:** Statik `RSA` yerine `ECDHE` anahtar değişimine ve `CBC` modu yerine `AES-GCM` şifrelemelerine öncelik verilmelidir. Örnek: `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`, `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`.
* **Yaygın Yanlış Yapılandırmalar:** Süresi dolmuş/kendinden imzalı sertifikalar kullanmak, sertifika adı uyuşmazlıkları, eksik sertifika zincirleri ve zayıf/ihraç sınıfı şifrelemeleri desteklemek gibi yaygın ve tehlikeli hatalar, TLS’nin sağladığı güvenliği tamamen ortadan kaldırabilir.

### Katman 2: Gönderenin Kimliğini Doğrulama — SPF, DKIM ve DMARC

Bu katman, kanalın güvenliğinden ziyade, mesajın *içeriğinin* ve *iddia edilen kimliğinin* meşruiyetini doğrulamaya odaklanır. DMARC’ın ortaya çıkışı, bu alanda paradigmayı değiştirmiş, e-posta güvenliğini alıcının bir sorunundan gönderenin bir sorumluluğuna dönüştürmüştür. DMARC’tan önce SPF ve DKIM, alıcıya sinyaller sağlayan pasif mekanizmalardı. DMARC ile gönderen, `p=reject` gibi bir politika yayınlayarak tüm alıcılara kimliği doğrulanmamış postaları engellemeleri için aktif bir talimat verir. Bu, alan adı sahiplerini e-posta kimliklerinin güvenliğinden doğrudan sorumlu hale getirmiştir.

#### Gönderen Politika Çerçevesi (SPF)

* **Mekanizma:** SPF (RFC 7208), bir alan adı sahibinin, kendi alan adı adına e-posta göndermeye yetkili IP adreslerinin bir listesini bir DNS TXT kaydında yayınlamasına olanak tanır. Alıcı sunucu, gelen e-postanın bağlanan IP adresini,
* `MAIL FROM` (zarf gönderen) adresindeki alan adı için yayınlanmış bu listeye göre kontrol eder.
* **Sözdizimi ve Mekanizmalar:** Bir `v=spf1` kaydı, mekanizmalar (`a`, `mx`, `ip4`, `ip6`, `include`, `exists`, `all`) ve niteleyicilerden (`+`, `-`, `~`, `?`) oluşur. Bu bileşenler, yetkili göndericilerin esnek bir şekilde tanımlanmasını sağlar.

**Sınırlamalar ve Tuzaklar:**

* **Yönlendirme (Forwarding):** SPF, basit e-posta yönlendirmesi durumunda bozulur, çünkü yönlendiren sunucunun IP adresi, orijinal gönderenin SPF kaydında yer almaz.
* **10-DNS-Arama Sınırı:** Bir SPF kontrolü, DNS sunucularına yönelik DoS saldırılarını önlemek için 10'dan fazla DNS aramasıyla sonuçlanmamalıdır. Bu sınırın aşılması, bir `PermError` (kalıcı hata) ile sonuçlanır ve doğrulama başarısız olur.
* `From:` **Başlığının Korunmaması:** SPF yalnızca zarf gönderenini (`MAIL FROM`) doğrular, kullanıcının gördüğü `From:` başlığını doğrulamaz. Bu, DMARC kullanılmadığı takdirde sahtekarlığa açık bir kapı bırakır.
* **Kullanımdan Kaldırılan** `ptr` **Mekanizması:** `ptr` mekanizmasının kullanılması, yavaş, güvenilmez olması ve DNS altyapısına aşırı yük bindirmesi nedeniyle RFC 7208 tarafından şiddetle tavsiye edilmemektedir. Bu durum genellikle doğrulama hatalarına yol açar.

#### Alan Adı Anahtarlarıyla Tanımlanmış Posta (DKIM)

* **Mekanizma:** DKIM (RFC 6376), e-posta başlığına kriptografik bir imza ekleyerek mesaj bütünlüğü ve kimlik doğruluğu sağlar. Gönderen, mesajı (veya belirli başlıkları ve gövdeyi) özel bir anahtarla imzalar. Alıcı, imzayı doğrulamak için ilgili genel anahtarı DNS’ten (imzadaki `s=` seçicisi ve `d=` alan adını kullanarak) alır.
* **Yönlendirmeye Karşı Dayanıklılık:** DKIM imzaları, mesajın imzalanan kısımları (gövde ve önemli başlıklar gibi) aracı sunucu tarafından değiştirilmediği sürece genellikle yönlendirmeden etkilenmez. Bu özellik, onu SPF’nin kritik bir tamamlayıcısı yapar.

#### Alan Adı Tabanlı Mesaj Doğrulama, Raporlama ve Uygunluk (DMARC)

* **Mekanizma:** DMARC (RFC 7489), SPF ve DKIM üzerine inşa edilmiş bir politika ve raporlama katmanıdır. Alıcı sunuculara, kimlik doğrulama kontrollerini geçemeyen mesajlarla ne yapacakları konusunda talimat verir ve bir geri bildirim mekanizması sunar.
* **Tanımlayıcı Hizalama (Identifier Alignment):** DMARC’ın temel konseptidir. SPF tarafından doğrulanan alan adının (`MAIL FROM` adresinden) veya DKIM tarafından doğrulanan alan adının (imzadaki `d=` etiketinden) kullanıcının gördüğü `From:` başlığındaki alan adıyla eşleşmesini gerektirir. Bu, kimlik doğrulamasını son kullanıcının gördüğü kimliğe bağlayarak sahtekarlığı nihayetinde önleyen mekanizmadır.

**Hizalama Modları (Strict vs. Relaxed):**

* **Relaxed (varsayılan):** Alt alan adlarının ana organizasyonel alan adıyla eşleşmesine izin verir (örneğin, `mail.example.com` ile `example.com` hizalanır). Bu mod daha esnektir ve üçüncü taraf göndericilerin olduğu karmaşık ortamlar için uygundur.
* **Strict:** Alan adlarının tam olarak eşleşmesini gerektirir. Biraz daha yüksek güvenlik sunar ancak mükemmel şekilde yapılandırılmazsa alt alan adlarından gelen meşru postaların başarısız olmasına neden olabilir. `adkim=s` ve `aspf=s` etiketleriyle belirtilir.

**Politika Ayarları (**`p=` **etiketi):**

* `p=none`: İzleme modu. Başarısız e-postalara hiçbir işlem uygulanmaz, ancak raporlar gönderilir. Bu, herhangi bir DMARC dağıtımının temel ilk adımıdır.
* `p=quarantine`: Alıcılara, başarısız e-postaları şüpheli olarak değerlendirmeleri, genellikle spam klasörüne yerleştirmeleri talimatını verir.
* `p=reject`: En katı politikadır. Alıcılara, başarısız e-postaları tamamen engellemeleri talimatını verir.

Aşağıdaki tablo, DMARC kayıtlarını yapılandırırken yöneticiler için kapsamlı bir referans sağlamaktadır. Yanlış yapılandırmalar yaygın bir başarısızlık kaynağı olduğundan, bu tablo bu tür hataları önlemek için kesin bir kılavuz görevi görür.

![](https://cdn-images-1.medium.com/max/800/1*BTspc1ihDHP1TnCDshFk1Q.png)

**DMARC Etiket Referans Kılavuzu**

### Katman 3: Gelişmiş Güven ve Bütünlük Mekanizmaları

Bu katman, standart kimlik doğrulama protokollerinin sınırlarını zorlayan ve özellikle kanal güvenliğini kriptografik olarak doğrulanabilir hale getiren en modern savunma hatlarını içerir. Bu mekanizmaların benimsenmesi, e-posta ekosisteminin en güçlü güvenlik seviyesine ulaşması için kritik öneme sahiptir.

#### Doğrulanmış Alınan Zincir (Authenticated Received Chain — ARC)

**Amaç:** ARC (RFC 8617), özellikle meşru aracılar (posta listeleri, e-posta yönlendirme hizmetleri) tarafından DMARC hatalarına neden olan sorunu çözmek için geliştirilmiştir. Yönlendirme, SPF’yi bozar ve içerik değişiklikleri (örneğin, konu satırına `[liste-adı]` eklenmesi) DKIM'i geçersiz kılar.

**Mekanizma:** Bir mesajı değiştiren veya yönlendiren bir aracı, bir ARC başlık seti ekleyebilir. Bu set, orijinal kimlik doğrulama sonuçlarını (`Authentication-Results` başlığı) kriptografik olarak mühürler ve bir "gözetim zinciri" (chain of custody) oluşturur. Her bir sonraki aracı, zincire kendi mührünü ekler. ARC başlıkları şunlardır:

* **ARC-Authentication-Results (AAR):** Orijinal SPF, DKIM ve DMARC sonuçlarını saklar.
* **ARC-Message-Signature (AMS):** AAR dahil olmak üzere mesajın bir anlık görüntüsünü imzalar.
* **ARC-Seal (AS):** Önceki ARC başlıklarının bütünlüğünü doğrulayan bir imza zinciri oluşturur.

**Doğrulama:** Bir DMARC hatası gören alıcı sunucu, ARC zincirini doğrulamayı seçebilir. Eğer zincir bozulmamışsa ve aracı imzalayanlar güvenilirse, alıcı DMARC hatasını geçersiz kılabilir ve mesajı teslim edebilir.

#### DANE ve MTA-STS

Her iki mekanizma da, bir alan adının TLS şifrelemesi gereksinimini güvenli bir şekilde bant dışı (out-of-band) bir yöntemle bildirmesini sağlayarak STARTTLS indirgeme (STRIPTLS) saldırısını önlemeyi amaçlar. Ancak bu hedefe ulaşmak için farklı temel teknolojilere dayanırlar.

* **SMTP için DANE (RFC 7672):** DNSSEC (Alan Adı Sistemi Güvenlik Uzantıları) kullanarak DNS’te TLSA kayıtları yayınlar. Bu kayıtlar, bir sunucunun TLS sertifikasını alan adına güvenli bir şekilde bağlar. DANE destekleyen bir SMTP istemcisi, sunucu tarafından sunulan sertifikanın orijinal olduğunu ve bir MITM saldırganı tarafından değiştirilmediğini doğrulayabilir. Bu, hem gönderen hem de alıcı alan adlarının DNS altyapısında DNSSEC’in dağıtılmasını gerektirir.
* **MTA-STS (RFC 8461):** DNSSEC gerektirmeyen bir alternatiftir. Bir alan adı, politikasını iyi bilinen bir HTTPS uç noktası ve bir DNS TXT kaydı aracılığıyla yayınlar. Gönderen sunucular bu politikayı alır ve önbelleğe alır; bu politika, belirtilen bir süre boyunca TLS’yi zorunlu kılarak indirgeme saldırılarını önler. Bağlantı hatalarını bildirmek için SMTP TLS Raporlaması (TLS-RPT) ile birlikte kullanılır.

Ekosistemin DNSSEC’i yavaş benimsemesi, en güçlü seviyedeki taşıma güvenliği için birincil darboğazı oluşturmaktadır. DANE, MITM ve indirgeme saldırılarına karşı kriptografik olarak MTA-STS’den daha üstün bir çözüm sunar çünkü DNSSEC güven zincirine dayanır. Ancak, uçtan uca DNSSEC dağıtımına olan bağımlılığı, benimsenmesini engellemiştir. 2024 itibarıyla Global 2000 şirketleri arasında DNSSEC benimseme oranı hala %9 gibi düşük bir seviyededir. Bu durum, ekosistemi, mevcut ve yaygın olarak dağıtılmış olan HTTPS için PKI’dan yararlanan daha pragmatik bir alternatif olan MTA-STS’yi geliştirmeye zorlamıştır. Bu, altyapısal ataletin güvenlik protokollerinin evrimini nasıl şekillendirebileceğini gösteren pratik bir örnektir; dağıtım fizibilitesi, teknik saflığın önüne geçebilmektedir.

### Tehdit Ortamı: SMTP Saldırı Vektörleri ve Zafiyetler

SMTP’nin evrensel doğası ve temel protokoldeki güvenlik eksiklikleri, onu siber saldırganlar için kalıcı bir hedef haline getirmektedir. Tehdit ortamı, basit altyapısal zafiyetlerin istismarından, insan psikolojisini ve kurumsal güveni manipüle eden sofistike kimlik tabanlı saldırılara doğru sürekli bir evrim göstermektedir. Bu bölümde, modern SMTP altyapılarını hedef alan en yaygın ve etkili saldırı vektörleri teknik ayrıntılarıyla incelenmektedir.

### Açık Geçiş (Open Relay) İstismarı

**Tanım ve Mekanizma:** Açık geçiş, herhangi bir kaynaktan gelen e-postayı herhangi bir hedefe kimlik doğrulaması olmaksızın kabul edip ileten (forward eden) bir SMTP sunucusudur. Bu durum genellikle varsayılan bir yapılandırma hatasından veya yönetici ihmalinden kaynaklanır. Saldırganlar, interneti sürekli olarak bu tür yanlış yapılandırılmış sunucular için tarar ve bulduklarında bunları büyük hacimli spam ve kimlik avı e-postaları göndermek için kullanırlar.

**Sonuçları:**

* **Kara Listeye Alınma (Blacklisting):** Sunucunun IP adresi ve alan adı, hızla DNS tabanlı kara delik listelerine (DNSBLs) eklenir. Bu, o sunucudan gelen tüm meşru e-postaların da engellenmesine neden olur.
* **İtibar Kaybı:** Kuruluşun markası spam ile ilişkilendirilerek müşteri ve iş ortakları nezdinde güveni sarsar.
* **Kaynakların Kötüye Kullanımı:** Spam göndericileri, sunucunun bant genişliğini ve işlem gücünü tüketerek performans düşüşüne veya hizmet reddine yol açabilir.
* **Yasal Sorumluluk:** Açık bir geçiş işletmek, ABD’deki CAN-SPAM Yasası ve AB’deki GDPR gibi düzenlemeler kapsamında yasal sonuçlar doğurabilir. Bu yasalar, istenmeyen ticari e-postaların sorumluluğunu göndericiye (ve altyapı sahibine) yükler.

### SMTP Kaçakçılığı ve Enjeksiyon Saldırıları

Bu saldırı türü, saldırganların protokolün kendisindeki belirsizlikleri veya uygulama katmanındaki doğrulama eksikliklerini istismar etmesine dayanır. Özellikle SMTP kaçakçılığı, tek bir sunucunun değil, e-posta ekosistemindeki farklı sistemler arasındaki “dikiş yerlerinin” istismar edildiği sofistike bir saldırı vektörüdür. Bu, bir sistemin güvenliğinin sadece kendi yapılandırmasına değil, etkileşimde bulunduğu tüm ekosistemin tutarlılığına bağlı olduğunu göstermektedir. Bir sistemdeki zararsız gibi görünen bir uyumluluk özelliği, başka bir sistemle birleştiğinde kritik bir zafiyete dönüşebilir.

* **SMTP Kaçakçılığı (SMTP Smuggling — örn. CVE-2023–51764):** Bu saldırı, farklı MTA’ların SMTP `DATA` bölümündeki standart olmayan satır sonlarını (örneğin, `<CR><LF>` yerine sadece `<LF>`) farklı yorumlamasındaki tutarsızlıkları istismar eder. Bir saldırgan, bir sunucunun tek bir e-posta olarak gördüğü, ancak bir sonraki sunucunun bir e-postanın sonu ve ikinci, "kaçırılmış" bir e-postanın başlangıcı olarak yorumladığı bir mesaj oluşturabilir.
* **Etkisi:** Bu teknik, bir saldırganın meşru ve güvenilir bir sunucudan geliyormuş gibi görünen sahte bir e-posta göndermesine olanak tanır, böylece SPF kontrollerini atlatır ve kimlik avı kampanyalarına yüksek bir meşruiyet kazandırır. Bu zafiyet, Black Hat ve DEF CON gibi önde gelen güvenlik konferanslarında sunulmuştur.
* **E-posta Başlığı/SMTP Enjeksiyonu:** Saldırganın, düzgün bir şekilde temizlenmemiş kullanıcı tarafından sağlanan veri alanlarına (örneğin, bir “Bize Ulaşın” formu) ek SMTP komutları (örneğin `BCC:` veya yeni bir `RCPT TO`) enjekte ettiği bir zafiyettir. Bu genellikle giriş alanlarına CRLF karakterleri (`\r\n`) eklenerek gerçekleştirilir.

### Kimlik Doğrulama ve Kimlik Bilgisi Saldırıları

**Kaba Kuvvet (Brute-Force) ve Parola Püskürtme (Password Spraying):** Genellikle gönderim portu (587) üzerindeki SMTP-AUTH için kullanıcı parolalarını sistematik olarak tahmin etme girişimleridir.

* **Kaba Kuvvet:** Tek bir hesap için birçok parolayı art arda denemek.
* **Parola Püskürtme:** Hesap kilitlenmelerini önlemek için birçok farklı hesaba karşı bir veya birkaç yaygın parola denemek.

**Tespit ve Azaltma:** Bu saldırılar, posta günlüklerindeki yüksek hacimli başarısız kimlik doğrulama girişimleriyle tespit edilebilir. Azaltma yöntemleri arasında hesap kilitleme politikaları, hız sınırlaması, IP tabanlı engelleme (örneğin, fail2ban) ve güçlü parolalar ile çok faktörlü kimlik doğrulamanın (MFA) zorunlu kılınması yer alır.

### DMARC/SPF/DKIM için Kaçınma Teknikleri

* **Yanlış Yapılandırma Yoluyla SPF Atlatma:** Aşırı izin veren SPF kayıtlarını (örneğin, `+all`, `?all`) istismar etmek veya SPF'nin `From:` başlığını korumaması gerçeğinden yararlanmak. Bir saldırgan, `MAIL FROM`'da kendi alan adını kullanabilir (bu SPF'yi geçer) ve görünür `From:` başlığında hedefin alan adını taklit edebilir. DMARC'ın hizalama kontrolü, bu saldırıya karşı özel bir savunmadır.
* **Alt Alan Adı İstismarı:** Kuruluş, alt alan adlarını kapsayan kapsamlı bir DMARC politikası ( `sp=` etiketini kullanarak) uygulamadıysa, saldırganlar hedefin alan adının alt alan adlarını kaydedip kullanabilirler.
* **Benzer Alan Adları (Cousin Domains):** Kullanıcıları kandırmak için hedef alan adına görsel olarak benzeyen alan adları kaydetmek (örneğin, `micros0ft.com` yerine `microsoft.com`). DMARC, alan adı teknik olarak farklı olduğu ve saldırgan tarafından kontrol edildiği için buna karşı koruma sağlayamaz.
* **Görünen Ad Sahtekarlığı (Display Name Spoofing):** Meşru görünen bir görünen ad (örneğin, “CEO John Doe”) kullanırken, altta yatan e-posta adresinin tamamen farklı olması. Bu sosyal mühendislik taktiği, bu protokoller yalnızca alan adını doğruladığı, görünen adı doğrulamadığı için DMARC/SPF/DKIM’i tamamen atlar.

### Hizmet Reddi (Denial of Service — DoS)

* **Bağlantı Seli (Connection Flooding):** SMTP sunucusunu yüksek oranda yeni bağlantıyla boğarak meşru trafiği işleme kapasitesini tüketmek (örneğin, SYN selleri).
* **Kaynak Tüketimi:** Disk alanı, bellek ve işlem gücünü tüketmek için çok sayıda veya büyük ekli e-postalar göndermek. SMTP, kuyruğa alınan postayı diske senkronize etme ihtiyacı nedeniyle bu tür saldırılara karşı özellikle savunmasızdır.
* **DNS Tabanlı Saldırılar:** DNS Water Torture gibi saldırılar, posta sunucusunun MX aramaları yapma yeteneğini hedef alarak e-posta almasını veya göndermesini engelleyebilir.
* **Azaltma:** Hız sınırlaması, kaynak IP başına bağlantı limitleri, sağlam güvenlik duvarı kuralları ve yeterli DNS altyapısı kullanmak temel savunma yöntemleridir.

### Pratik Sıkılaştırma ve Uygulama Kılavuzları

Teorik bilgi ve tehdit analizinin ötesinde, SMTP güvenliği, posta sunucularının titizlikle yapılandırılmasını ve en iyi uygulamaların tutarlı bir şekilde uygulanmasını gerektirir. Bu bölüm, en yaygın kullanılan Posta Aktarım Aracıları (MTA) olan Postfix ve Exim’in yanı sıra Microsoft Exchange ortamları için somut, eyleme geçirilebilir sıkılaştırma adımları sunmaktadır. Ayrıca, TLS sertifika yönetimi ve içerik tarayıcı entegrasyonu gibi evrensel en iyi uygulamaları da ele almaktadır.

### En İyi Uygulamalar

Bu uygulamalar, kullanılan MTA platformundan bağımsız olarak tüm e-posta altyapıları için temel teşkil eder.

**TLS Sertifika Yönetimi:**

* **Let’s Encrypt ile Otomasyon:** ACME istemcileri (örneğin, Certbot) kullanarak TLS sertifikalarının verilmesi ve yenilenmesi sürecinin otomasyonu kritik öneme sahiptir. Let’s Encrypt’in 90 günlük sertifika geçerlilik süresi, manuel yönetimi pratik olmaktan çıkarır ve otomasyonu zorunlu kılar.
* **En İyi Uygulamalar:** Güçlü anahtarlar (örneğin, 3072-bit RSA veya ECC P-384) kullanmak, tam sertifika zincirinin doğru bir şekilde sunulduğundan emin olmak ve son kullanma tarihlerini sürekli izlemek esastır.

**DNS Kayıt Hijyeni:** Doğru ve güvenli DNS kayıtlarını sürdürmek hayati önem taşır. Bu, doğru MX kayıtlarını, güncel SPF kayıtlarını ve düzgün biçimlendirilmiş DKIM ve DMARC kayıtlarını içerir. DNS sahtekarlığına karşı koruma sağlamak için DNSSEC kullanımı şiddetle tavsiye edilir ve DANE için bir ön koşuldur.

**En Az Ayrıcalık İlkesi:** Posta sunucusu süreçleri, olası bir tehlike durumunda etkiyi sınırlamak için ayrıcalıklı olmayan bir kullanıcı (örneğin, `postfix` kullanıcısı) olarak çalışmalıdır. Ağ erişimi, güvenlik duvarları aracılığıyla yalnızca gerekli bağlantı noktaları (25, 465, 587 vb.) ile sınırlandırılmalıdır.

### Postfix Sıkılaştırma

Postfix, güvenliğe odaklı modüler mimarisiyle bilinir. Sıkılaştırma, büyük ölçüde `main.cf` ve `master.cf` dosyalarındaki direktiflerin yapılandırılmasıyla gerçekleştirilir.

**Açık Geçişlerin Önlenmesi:** `mynetworks` direktifini yalnızca güvenilir ana bilgisayarları (örneğin, `127.0.0.0/8`) içerecek şekilde yapılandırmak ve harici istemciler için kimlik doğrulamasını zorunlu kılmak üzere `smtpd_relay_restrictions` kullanmak (`permit_sasl_authenticated`, `reject_unauth_destination`) temel adımdır.

**TLS’nin Zorunlu Kılınması:**

* Gelen ve giden posta için fırsatçı (opportunistic) TLS’yi etkinleştirmek için `smtpd_use_tls = yes` ve `smtp_use_tls = yes`.
* Zorunlu TLS için `smtpd_tls_security_level = encrypt` ve `smtp_tls_security_level = encrypt`.
* Sertifika ve anahtar dosyalarını belirtmek: `smtpd_tls_cert_file`, `smtpd_tls_key_file`.
* Zayıf protokolleri ve şifreleri devre dışı bırakmak: `smtpd_tls_protocols =!SSLv2,!SSLv3,!TLSv1,!TLSv1.1` ve `smtpd_tls_ciphers = high` gibi ayarlar.

**SASL Kimlik Doğrulamasının Yapılandırılması:** Güçlü SMTP-AUTH için Dovecot veya Cyrus SASL ile entegrasyon. Bu, `smtpd_sasl_auth_enable = yes` direktifi ve SASL türü ile yolunun yapılandırılmasıyla yapılır.

**HELO/EHLO Kısıtlamaları:** `smtpd_helo_required = yes` ve `smtpd_helo_restrictions` kullanarak geçersiz veya uyumsuz HELO adlarına sahip istemcileri reddetmek, spam ve botnet trafiğini azaltmada etkilidir.

**DMARC Entegrasyonu:** Gelen postaları DMARC politikalarına göre kontrol etmek için OpenDMARC gibi bir milter kullanmak. Bu, `main.cf` dosyasındaki `smtpd_milters` direktifi aracılığıyla yapılandırılır.

### Exim Sıkılaştırma

Exim, son derece esnek yapılandırma yetenekleriyle bilinir ve güvenliği büyük ölçüde Erişim Kontrol Listeleri (ACL’ler) aracılığıyla yönetilir.

* **Açık Geçişlerin Önlenmesi:** `hostlist relay_from_hosts` direktifi ve ACL'ler içinde `accept` veya `deny` koşullarıyla geçiş izinlerini tanımlamak. Varsayılan yapılandırma genellikle güvenlidir, ancak her zaman doğrulanmalıdır.
* **TLS’nin Zorunlu Kılınması:** `tls_advertise_hosts = *` ile TLS'yi etkinleştirmek ve sertifika/anahtar dosyalarını (`tls_certificate`, `tls_privatekey`) belirtmek. Akıllı ana bilgisayar (smarthost) bağlantıları için TLS'yi zorunlu kılmak`REMOTE_SMTP_SMARTHOST_HOSTS_REQUIRE_TLS = *` ile yapılabilir.
* **Kimlik Doğrulamasının Yapılandırılması:** Yapılandırma dosyasında, genellikle bir parola dosyasına veya sistem hesaplarına bağlı olan `LOGIN` ve `PLAIN` mekanizmalarını işlemek için kimlik doğrulayıcılar (authenticators) tanımlamak.
* **DMARC Entegrasyonu:** Exim, ACL’lerde etkinleştirilebilen yerleşik DMARC desteğine sahiptir. `dmarc_...` ile başlayan değişkenler davranışını kontrol eder. Alternatif olarak,`rspamd` gibi harici doğrulayıcılarla da entegre olabilir.

Aşağıdaki tablo, yöneticilerin Postfix ve Exim arasındaki temel güvenlik yapılandırmalarını karşılaştırmasına yardımcı olmak için tasarlanmıştır. Bu, heterojen ortamları yöneten veya bir MTA’dan diğerine geçiş yapanlar için pratik bir referans sağlar.

![](https://cdn-images-1.medium.com/max/800/1*MPd54_ipO2OgxqoNSDr3AQ.png)

**Postfix ve Exim Güvenlik Yapılandırması Karşılaştırması**

### 4.4. Microsoft Exchange Ortamlarını Güvenli Hale Getirme

* **Exchange Online Protection (EOP):** Tüm Microsoft 365 posta kutularını koruyan bulut tabanlı filtreleme hizmetidir.
* **Spam Filtreleme:** EOP, mesajları Spam Güvenilirlik Düzeyi (SCL) ile puanlar. Yöneticiler, SCL puanlarına göre mesajları işlemek için posta akışı kuralları yapılandırabilir, örneğin yüksek SCL’li postaları karantinaya yönlendirebilirler. En iyi uygulamalar arasında beyaz listeler (güvenli gönderenler) ve kara listeler yapılandırmak yer alır.
* **Kötü Amaçlı Yazılım İşleme:** EOP, imza tabanlı kötü amaçlı yazılım taraması gerçekleştirir. Sıfır gün koruması için, dosyaları bir sanal alan ortamında (sandbox) patlatmak üzere “Güvenli Ekler” özelliğini kullanan Office 365 için Microsoft Defender (eski adıyla ATP) gereklidir.
* **Mesaj İzleme ve Tehdit Analizi:** Yöneticiler, posta akışı sorunlarını ve güvenlik olaylarını araştırmak için Exchange Yönetim Merkezi’ndeki (EAC) Mesaj İzleme özelliğini veya PowerShell cmdlet’lerini (`Get-MessageTrackingLog`) kullanabilirler. Office 365 için Defender, gelişmiş raporlama ve tehdit avcılığı yetenekleri sunar.

### İçerik Tarayıcılarını Entegre Etme (SpamAssassin & ClamAV)

* **Milter Protokolü:** Milter (Mail Filter) API, Postfix ve Sendmail gibi MTA’larla harici içerik tarayıcılarını entegre etmek için yaygın bir yöntemdir. MTA, mesajı milter’a (örneğin,`spamass-milter`, `clamav-milter`) iletir, milter mesajı tarar ve bir karar (kabul et, reddet, karantinaya al) döndürür.
* **Kuyruk Sonrası İçerik Filtreleme:** MTA’nın mesajı önce kendi kuyruğuna kabul ettiği ve ardından farklı bir porttaki bir tarayıcıya (Amavisd-new gibi) ilettiği son derece güvenilir bir yöntemdir. Tarayıcı, mesajı SpamAssassin ve ClamAV aracılığıyla işler ve ardından son teslimat için MTA’ya geri enjekte eder. Bu yöntem, kuyruk öncesi filtrelemeden daha sağlamdır ancak bir miktar gecikme ekler.

### İzleme, Analiz ve Olay Müdahalesi

Güçlü bir SMTP güvenlik duruşu, yalnızca sağlam bir yapılandırmayla elde edilmez; aynı zamanda sürekli izleme, derinlemesine analiz ve hızlı olay müdahalesi gerektiren dinamik bir süreçtir. Bu bölüm, DMARC raporlarının yorumlanmasından, sunucu günlüklerinin adli analizine ve tehlikeye girmiş bir SMTP sunucusuna müdahale etmek için yapılandırılmış bir plana kadar operasyonel güvenlik uygulamalarını ele almaktadır. Geleneksel olarak, günlük analizi reaktif bir sorun giderme aracı olarak görülürken, modern güvenlik yaklaşımı, bu verileri anormallikleri ve potansiyel tehditleri proaktif olarak avlamak için kullanır.

### DMARC Raporlaması ve Analizi

DMARC, yalnızca bir politika uygulama mekanizması değil, aynı zamanda bir istihbarat toplama aracıdır. RUA ve RUF raporları, küresel e-posta alıcı ağını, bir alan adı sahibinin kendi e-posta ekosistemini izlemesi için bir sensör ağına dönüştürür. Bu, bir kuruluşun kendi alan adının internette nasıl kullanıldığına (veya kötüye kullanıldığına) dair, yalnızca dahili izleme ile elde edilemeyecek kadar geniş bir görünürlük sağlar.

* **RUA (Toplu) Raporları:** Genellikle günlük olarak gönderilen ve alan adınızdan geldiğini iddia eden e-postalar hakkında istatistiksel veriler içeren XML tabanlı raporlardır. Gönderen IP’leri, SPF/DKIM sonuçlarını, hizalama durumunu ve mesaj sayılarını içerirler. Bu raporlar, meşru gönderim kaynaklarını (üçüncü taraf hizmetler dahil) belirlemek ve DMARC dağıtım ilerlemesini izlemek için vazgeçilmezdir.
* **RUF (Adli) Raporları:** DMARC’ı geçemeyen tekil mesajlar için neredeyse gerçek zamanlı olarak gönderilen raporlardır. Genellikle redakte edilmiş mesaj başlıklarını ve bazen de gövdenin bir kısmını içerirler. Bu raporlar, belirli kimlik doğrulama hatalarını teşhis etmek veya kimlik avı saldırılarını analiz etmek için paha biçilmez olabilir. Gizlilik endişeleri nedeniyle, tüm alıcılar RUF raporu göndermez.
* **Analiz İş Akışı:** DMARC dağıtımının en iyi uygulaması, `p=none` politikasıyla başlamak, tüm gönderim kaynaklarını belirlemek için RUA raporlarını toplamak, meşru kaynaklar için SPF/DKIM/hizalama sorunlarını düzeltmek ve ardından kademeli olarak `p=quarantine` ve son olarak `p=reject` politikalarına geçmektir. Ham XML verilerini insan tarafından okunabilir panolara dönüştüren DMARC analiz araçlarının kullanılması, etkili bir analiz için kritik öneme sahiptir.

### Adli Günlük Analizi

Posta sunucusu günlükleri, anormallikleri tespit etmek, saldırı yollarını izlemek ve kanıt toplamak için birincil kaynaktır. Bu verilerin bir SIEM platformuna yönlendirilmesi, güvenlik ekiplerinin geleneksel reaktif sorun gidermeden proaktif tehdit avcılığına geçmesini sağlar; burada amaç, bir sorun bildirilmeden önce anormallikleri tespit etmektir.

**Postfix (**`/var/log/mail.log`**):**

* **Anahtar Arama Terimleri:** `status=sent` (başarılı teslimat), `status=deferred` (geçici hata; alıcı sunucu veya ağ ile ilgili potansiyel sorun), `status=bounced` (kalıcı hata; örn. geçersiz adres), `status=reject` (yerel politika tarafından reddedildi), `authentication failed` (kaba kuvvet saldırısı göstergesi).
* **Araçlar:** Hızlı aramalar için `grep` ve günlük posta etkinliği, en çok gönderen/alıcı ve hataların özet raporlarını oluşturmak için `pflogsumm` kullanılır.

**Exim (**`/var/log/exim_mainlog`**):**

* **Günlük Sembolleri:** Günlük satırı sembollerinin anlamını bilmek anahtardır: `<=` (mesajın gelişi), `=>` (başarılı teslimat), `==` (ertelenmiş), `**` (teslimat başarısız/geri döndü).
* **Güvenlik Olayları:** Kimliği doğrulanmış kullanıcı etkinliğini izlemek için `A=login:[email protected]` ve güvenlik uyarıları için `authentication failed` aranır.

**Microsoft Exchange (Mesaj İzleme Günlükleri):**

* **Araçlar:** EAC’nin Mesaj İzleme özelliğini veya `Get-MessageTrace` gibi PowerShell cmdlet'lerini kullanarak göndericiye, alıcıya, mesaj kimliğine veya IP adresine göre mesajları aramak.
* **Tehdit Analizi:** Kimlik avı kampanyalarını, kötü amaçlı yazılım dağıtımını ve tehlikeye girmiş hesapları belirlemek için mesaj izleme verilerini Office 365 için Defender raporlarıyla ilişkilendirmek.

---

### HTTP Güvenliği ve Analizi

Köprü Metni Aktarım Protokolü (HTTP), World Wide Web’in temel taşıdır ve web üzerindeki tüm veri alışverişinin temelini oluşturur. HTML belgeleri, resimler ve betikler gibi kaynakların istemciler ve sunucular arasında aktarılmasını sağlayan bu protokol, modern dijital etkileşimin omurgasıdır. Ancak, HTTP’nin ilk tasarımı işlevselliğe odaklanmıştı ve güvenlik ikincil bir endişeydi. Protokolün doğası gereği “durumsuz” (stateless) olması, yani her isteği bir öncekinden bağımsız olarak ele alması, ve başlangıçta iletişimi şifrelenmemiş düz metin (plaintext) olarak gerçekleştirmesi, günümüzün karmaşık siber tehdit ortamında önemli güvenlik zorluklarını beraberinde getirmiştir.

Bu durum, web güvenliğinin reaktif bir evrim geçirmesine yol açmıştır. HTTP’nin orijinal tasarımındaki güvenlik eksiklikleri, zamanla ortaya çıkan tehditlere karşı geliştirilen bir dizi ek katman ve mekanizma ile giderilmeye çalışılmıştır. Güvenli olmayan HTTP’den, Taşıma Katmanı Güvenliği (TLS) ile şifrelenmiş HTTPS’e geçiş, bu evrimin en temel adımıdır. Bu rapor, HTTP’nin temel anatomisinden başlayarak, bu katmanlı güvenlik anlayışını derinlemesine incelemektedir. Protokolün kendi içindeki güvenlik mekanizmalarından, uygulama katmanındaki zafiyetlere ve bu zafiyetleri gidermek için kullanılan modern savunma stratejilerine kadar geniş bir yelpazeyi ele alarak, HTTP güvenliğinin bütüncül bir analizini sunmayı amaçlamaktadır. Bu analiz, güvenliğin “tasarımın bir parçası olması” (security by design) prensibinin önemini, HTTP’nin tarihsel gelişimi üzerinden gözler önüne sermektedir.

### HTTP Protokolünün Anatomisi ve Evrimi

HTTP’nin güvenliğini anlamak, öncelikle protokolün nasıl çalıştığını, bileşenlerini ve zaman içindeki gelişimini kavramayı gerektirir. Bu bölüm, HTTP’nin temel mimarisini, mesajlaşma yapısını ve evrimsel adımlarını detaylandırmaktadır.

### İstemci-Sunucu Mimarisi ve Durumsuz (Stateless)

HTTP, temel olarak bir istemci-sunucu protokolüdür. Bu modelde, istekler her zaman “kullanıcı aracısı” (user-agent) olarak adlandırılan istemci tarafından başlatılır. Genellikle bu istemci bir web tarayıcısıdır, ancak arama motoru botları veya mobil uygulamalar gibi farklı yazılımlar da olabilir. İstemcinin isteği, bir web sunucusuna gönderilir; sunucu bu isteği işler ve bir “yanıt” (response) mesajı ile geri döner. İstemci ile sunucu arasında, iletişimi yönlendiren, önbelleğe alan veya değiştiren proxy’ler, ağ geçitleri ve önbellek sunucuları gibi çok sayıda aracı varlık bulunabilir.

Protokolün en belirleyici özelliklerinden biri “durumsuz” (stateless) olmasıdır. Bu, sunucunun iki ardışık istek arasında istemci hakkında herhangi bir bilgi veya durum tutmadığı anlamına gelir. Her istek, önceki tüm isteklerden tamamen bağımsız olarak ele alınır. Bu basitlik, protokolün ölçeklenmesini kolaylaştırsa da, e-ticaret sepetleri veya kullanıcı oturumları gibi durum bilgisi gerektiren uygulamalar için bir zorluk teşkil eder. Bu sorunu aşmak için, HTTP çerezleri (cookies) gibi mekanizmalar kullanılarak durum bilgisi istemci tarafında saklanır ve her istekle birlikte sunucuya gönderilir, böylece bir “oturum” (session) simüle edilir.

### HTTP Mesaj Yapısı: İstek (Request) ve Yanıt (Response) Döngüsü

Tüm HTTP iletişimi, bir istek-yanıt döngüsü üzerine kuruludur. İstemci bir kaynak talep etmek için bir istek mesajı gönderir ve sunucu bu isteğe bir yanıt mesajı ile karşılık verir. HTTP/1.x sürümlerinde bu mesajlar, insan tarafından kolayca okunabilen metin tabanlı bir yapıya sahiptir. Ancak, performans iyileştirmeleri amacıyla HTTP/2 ile birlikte bu yapı, ikili (binary) formatta kodlanmış “çerçevelere” (frames) dönüştürülmüştür, ancak temel mantık aynı kalmıştır.

Bir HTTP mesajı, hem istekler hem de yanıtlar için benzer olan dört ana bölümden oluşur :

1. **Başlangıç Satırı (Start-Line):** Mesajın ilk satırıdır. İsteklerde metodu, hedeflenen kaynağın URI’sini ve HTTP sürümünü içerir. Yanıtlarda ise HTTP sürümünü, isteğin sonucunu belirten durum kodunu ve bu kodun metinsel açıklamasını içerir.
2. **Başlıklar (Headers):** İsteği veya yanıtı tanımlayan anahtar-değer çiftlerinden oluşan bir dizi metin satırıdır. İstemcinin türü, kabul edilen içerik formatları veya yanıtın içeriği gibi meta verileri taşır.
3. **Boş Satır (Empty Line):** Başlık bölümünün sonlandığını ve mesaj gövdesinin başladığını belirtir.
4. **Gövde (Body):** İsteğe bağlı bir bölümdür ve asıl veriyi içerir. Örneğin, bir POST isteğinde gönderilen form verileri veya bir GET yanıtında dönen HTML içeriği bu bölümde yer alır.

### HTTP Metotları (Fiiller): Anlamsal ve Güvenlik Farklılıkları

HTTP metotları, istemcinin sunucu üzerinde gerçekleştirmek istediği eylemi belirten “fiiller” olarak düşünülebilir. Her metodun belirli bir anlamsal amacı vardır ve bu amaçlara uygun kullanılmaları, hem RESTful API tasarımı hem de güvenlik açısından önemlidir.

![](https://cdn-images-1.medium.com/max/800/1*AfRW74G2s4kd4qoKZWUNcA.png)

HTTP Method

### HTTP Durum Kodları: Başarı, Yönlendirme ve Hata Sınıflarının Analizi

HTTP durum kodları, sunucunun bir istemci isteğine verdiği yanıtın sonucunu bildiren üç basamaklı sayılardır. Bu kodlar, iletişimin başarılı olup olmadığını, ek bir eylem gerekip gerekmediğini veya bir hata oluşup oluşmadığını anlamak için kritik öneme sahiptir. Beş ana sınıfa ayrılırlar :

* **1xx (Bilgilendirme):** İstek alındı ve süreç devam ediyor. Örneğin, `100 Continue` kodu, sunucunun isteğin ilk bölümünü aldığını ve istemcinin gövdeyi göndermeye devam etmesi gerektiğini belirtir.
* **2xx (Başarı):** İstek başarıyla alındı, anlaşıldı ve kabul edildi. `200 OK`, en yaygın başarı kodudur ve genellikle istenen kaynağın yanıt gövdesinde döndürüldüğünü gösterir. `201 Created`, bir kaynağın başarıyla oluşturulduğunu, `204 No Content` ise isteğin başarılı olduğunu ancak yanıt gövdesinde içerik olmadığını belirtir. SEO ve web sitesi işlevselliği için hedeflenen kodlar bu sınıftadır.
* **3xx (Yönlendirme):** İsteği tamamlamak için istemcinin ek bir eylem yapması gerektiğini belirtir. `301 Moved Permanently`, bir kaynağın kalıcı olarak yeni bir URI'ye taşındığını ve arama motorlarının dizinlerini güncellemesi gerektiğini belirtir. `302 Found`, geçici bir yönlendirmeyi ifade eder. `304 Not Modified` ise, önbelleğe alınmış bir kaynağın değişmediğini ve istemcinin kendi kopyasını kullanabileceğini bildirir.
* **4xx (İstemci Hatası):** İstek, hatalı sözdizimi içeriyor veya yerine getirilemiyor. Bu hatalar genellikle istemci tarafındaki bir sorundan kaynaklanır. `400 Bad Request` genel bir istemci hatasıdır. `401 Unauthorized` kimlik doğrulaması gerektiğini, `403 Forbidden` kimlik doğrulaması yapılmış olsa bile kaynağa erişim izni olmadığını, `404 Not Found` ise istenen kaynağın sunucuda bulunamadığını belirtir.
* **5xx (Sunucu Hatası):** Sunucu, görünüşte geçerli bir isteği yerine getiremedi. Bu hatalar sunucu tarafında beklenmedik bir durum olduğunu gösterir. `500 Internal Server Error` genel bir sunucu hatasıdır. `502 Bad Gateway`, bir proxy veya ağ geçidinin yukarı akış sunucusundan geçersiz bir yanıt aldığını, `503 Service Unavailable` ise sunucunun geçici olarak (aşırı yük veya bakım nedeniyle) hizmet veremediğini belirtir.

### 1.5. Protokol Evrimi: HTTP/1.1'den HTTP/2 ve HTTP/3'e Geçişin Güvenlik ve Performans Etkileri

HTTP, web’in artan karmaşıklığına ve performans taleplerine yanıt olarak önemli bir evrim geçirmiştir. Bu evrim, sadece hızı değil, aynı zamanda güvenliği de temelden etkilemiştir.

**HTTP/1.0 ve HTTP/1.1:** HTTP/1.0, her bir kaynak (resim, CSS dosyası vb.) için ayrı bir TCP bağlantısı kuruyordu, bu da ciddi performans sorunlarına yol açıyordu. HTTP/1.1, “kalıcı bağlantılar” (persistent connections) ve “pipeline” mekanizmalarını getirerek aynı TCP bağlantısının birden fazla istek için yeniden kullanılmasına olanak tanıdı ve gecikmeyi önemli ölçüde azalttı. Ancak, hala “head-of-line blocking” sorunundan muzdaripti; yani bir paketin kaybolması, o bağlantı üzerindeki tüm sonraki istekleri bloke ediyordu.

**HTTP/2:** Bu sürüm, web performansını kökten değiştirmeyi amaçladı. Metin tabanlı protokolden ikili (binary) bir protokole geçerek daha verimli ve daha az hataya açık hale geldi. En önemli yenilikleri şunlardır:

* **Çoklama (Multiplexing):** Tek bir TCP bağlantısı üzerinden birden fazla isteği ve yanıtı eşzamanlı olarak gönderip almayı sağlar. Bu, uygulama katmanındaki head-of-line blocking sorununu çözer.
* **Başlık Sıkıştırması (HPACK):** Tekrarlayan HTTP başlıklarını sıkıştırarak iletilen veri miktarını azaltır.
* **Sunucu İtme (Server Push):** Sunucunun, istemcinin henüz talep etmediği ancak ihtiyaç duyacağını bildiği kaynakları proaktif olarak göndermesine olanak tanır. Pratikte, büyük tarayıcıların HTTP/2'yi yalnızca şifreli (HTTPS) bağlantılar üzerinden desteklemesi, bu performans artışının aynı zamanda şifrelemenin daha geniş çapta benimsenmesini teşvik etmesini sağlamıştır.

**HTTP/3:** HTTP evrimindeki en son adımdır ve taşıma katmanında devrim niteliğinde bir değişiklik getirir. TCP yerine, UDP üzerinde çalışan **QUIC (Quick UDP Internet Connections)** protokolünü kullanır. Bu değişikliğin temel faydaları şunlardır:

* **TCP Head-of-Line Blocking’in Ortadan Kaldırılması:** QUIC, akışları (streams) taşıma katmanında bağımsız olarak yönetir. Bir paketin kaybolması, yalnızca o paketin ait olduğu akışı etkiler, diğer akışlar devam eder.
* **Daha Hızlı Bağlantı Kurulumu:** QUIC, taşıma ve kriptografik el sıkışmalarını birleştirerek bağlantı kurulumu için gereken gidiş-dönüş süresini (round-trip time) azaltır. Bu, özellikle daha önce bağlanılmış sunucular için “0-RTT” (sıfır gidiş-dönüş) bağlantılarına olanak tanır.
* **Geliştirilmiş Güvenlik:** QUIC, TLS 1.3'ü varsayılan olarak entegre eder ve şifrelemeyi zorunlu kılar. Bu, güvenliği protokolün temel bir bileşeni haline getirir.

Bu evrim, performans ve güvenliğin artık birbirinden ayrı düşünülemeyeceğini göstermektedir. HTTP/3'ün tasarımı, modern, yüksek performanslı bir web’in aynı zamanda varsayılan olarak güvenli olması gerektiği felsefesini yansıtmaktadır. Bu, güvenlik analizinde önemli bir paradigma değişikliğidir; artık soru “güvenli mi?” değil, “ne kadar güvenli ve bu güvenliğin yan etkileri neler?” şekline dönüşmüştür.

### İletişimin Güvence Altına Alınması: HTTPS ve Taşıma Katmanı Güvenliği (TLS)

HTTP’nin orijinal tasarımı, verileri ağ üzerinde şifrelenmemiş düz metin olarak gönderir. Bu durum, iletişimin araya giren herhangi bir tarafça kolayca okunmasına, değiştirilmesine ve çalınmasına olanak tanır. HTTPS, bu temel güvenlik açığını gidermek için geliştirilmiştir.

### HTTP’nin Güvensizliği: Düz Metin (Plaintext) İletişimin Riskleri

Şifrelenmemiş HTTP üzerinden yapılan iletişim, doğası gereği güvensizdir. İstemci (tarayıcı) ve sunucu arasında gönderilen her veri paketi, ağ üzerindeki herhangi bir aracı (örneğin, internet servis sağlayıcısı, halka açık bir Wi-Fi noktasını kontrol eden bir saldırgan) tarafından okunabilir. Bu durum, ciddi güvenlik riskleri doğurur:

* **Gizliliğin İhlali:** Kullanıcı adları, şifreler, kredi kartı bilgileri ve kişisel mesajlar gibi hassas veriler, ağ trafiğini dinleyenler tarafından kolayca ele geçirilebilir.
* **Ortadaki Adam (Man-in-the-Middle — MitM) Saldırıları:** Bir saldırgan, istemci ve sunucu arasına girerek iletişimi sadece dinlemekle kalmaz, aynı zamanda aktif olarak değiştirebilir. Örneğin, bir bankacılık sitesine gönderilen para transferi talimatını değiştirerek alıcı hesabını kendi hesabıyla değiştirebilir.
* **Oturum Kaçırma (Session Hijacking):** Saldırganlar, ağ trafiğinden kullanıcının oturum çerezini (session cookie) çalarak, o kullanıcının kimliğine bürünebilir ve yetkili olduğu tüm işlemleri gerçekleştirebilir.

### HTTPS’e Giriş: Şifreleme, Kimlik Doğrulama ve Bütünlük

HTTPS (Hypertext Transfer Protocol Secure), HTTP protokolünün Taşıma Katmanı Güvenliği (TLS) veya onun öncülü olan Güvenli Soket Katmanı (SSL) ile şifrelenmiş halidir. HTTPS, HTTP’nin üzerine bir güvenlik katmanı ekleyerek üç temel güvenlik garantisi sunar:

1. **Şifreleme (Encryption):** İstemci ve sunucu arasındaki tüm verileri şifreleyerek, ağ trafiğini dinleyen üçüncü tarafların veriyi okumasını engeller. Bir saldırgan trafiği yakalasa bile, eline geçecek olan anlamsız, rastgele karakterlerden oluşan bir yığın olacaktır.
2. **Kimlik Doğrulama (Authentication):** İstemcinin, gerçekten iletişim kurmak istediği sunucuyla (örneğin, `banka.com`) konuştuğunu doğrular. Bu, sunucunun bir Sertifika Otoritesi (CA) tarafından verilmiş bir dijital sertifika sunmasıyla sağlanır. Bu sayede, sahte veya taklit sitelere yönlendiren DNS sahtekarlığı veya alan adı sahtekarlığı gibi saldırılar önlenir.
3. **Bütünlük (Integrity):** Verilerin istemciden sunucuya (veya tersi yönde) iletilirken değiştirilmediğini garanti eder. Şifreleme işlemi, veriye eklenen bir mesaj doğrulama kodu (MAC) sayesinde, verideki en küçük bir değişikliğin bile tespit edilmesini sağlar.

### 2.3. TLS El Sıkışması (Handshake) Sürecinin Derinlemesine Analizi

HTTPS bağlantısının kurulmasından önce, istemci ve sunucunun güvenli bir iletişim kanalı oluşturmak için bir dizi mesaj alışverişi yapması gerekir. Bu sürece TLS El Sıkışması (TLS Handshake) denir. Bu süreç, tarafların birbirlerini doğrulamalarını, kullanılacak şifreleme algoritmaları üzerinde anlaşmalarını ve gelecekteki iletişimi şifrelemek için kullanılacak oturum anahtarlarını oluşturmalarını sağlar. TLS 1.2 için tipik bir el sıkışma süreci aşağıdaki adımlardan oluşur:

1. **Client Hello:** İstemci, el sıkışmasını başlatmak için sunucuya bir `ClientHello` mesajı gönderir. Bu mesaj, istemcinin desteklediği en yüksek TLS sürümünü, desteklediği şifreleme takımlarının (cipher suites) bir listesini ve "client random" olarak bilinen 32 baytlık rastgele bir veri içerir.
2. **Server Hello:** Sunucu, istemcinin listesinden seçtiği bir TLS sürümü ve şifreleme takımı ile yanıt verir. Ayrıca, kendi dijital sertifikasını ve “server random” olarak bilinen kendi 32 baytlık rastgele verisini de gönderir.
3. **Sertifika Doğrulama:** İstemci, sunucudan gelen sertifikayı alır ve bir dizi kontrol gerçekleştirir: Sertifikanın güvendiği bir Sertifika Otoritesi (CA) tarafından imzalanıp imzalanmadığını, sertifikanın geçerlilik süresinin dolup dolmadığını ve sertifikadaki alan adının bağlandığı alan adıyla eşleşip eşleşmediğini kontrol eder.
4. **Anahtar Değişimi (Key Exchange):** Sertifika doğrulandıktan sonra, istemci “pre-master secret” adı verilen bir başka rastgele veri oluşturur. Bu veriyi, sunucunun sertifikasından aldığı genel anahtar (public key) ile şifreler ve sunucuya gönderir. Sunucu, bu şifrelenmiş mesajı yalnızca kendisinin sahip olduğu özel anahtar (private key) ile çözebilir. Bu adım, yalnızca sunucunun özel anahtara sahip olduğunu ve dolayısıyla sertifikanın meşru sahibi olduğunu kanıtlar.
5. **Oturum Anahtarları (Session Keys) Oluşturma:** Bu noktada hem istemci hem de sunucu aynı üç bilgiye sahiptir: client random, server random ve pre-master secret. Bu üç değeri kullanarak, her ikisi de birbirinden bağımsız olarak aynı simetrik “oturum anahtarlarını” (session keys) hesaplar. Bundan sonraki tüm HTTP trafiği, bu oturum anahtarları kullanılarak simetrik şifreleme ile şifrelenir ve çözülür.
6. **Finished Mesajları:** Son olarak, her iki taraf da el sıkışma sürecinde gönderilen tüm mesajların bir özetini içeren ve yeni oluşturulan oturum anahtarıyla şifrelenmiş bir `Finished` mesajı gönderir. Karşı taraf bu mesajı başarıyla deşifre edip doğrulayabilirse, el sıkışma başarılı olmuş ve güvenli iletişim kanalı kurulmuş demektir.

TLS 1.3, bu süreci önemli ölçüde basitleştirerek ve hızlandırarak, genellikle sadece bir gidiş-dönüş (round-trip) ile el sıkışmayı tamamlar ve daha güvenli olmayan eski kriptografik algoritmaları kaldırır.

### Sertifika Otoriteleri (CA) ve Güven Zinciri Mimarisi

HTTPS’in kimlik doğrulama mekanizması, Sertifika Otoriteleri (CA’lar) tarafından yönetilen bir kamu anahtar altyapısına (PKI) dayanır. CA’lar, dijital sertifikaları yayınlayan, doğrulayan, yenileyen ve iptal eden güvenilir üçüncü taraf kuruluşlardır. Bir web sitesi sahibi bir SSL/TLS sertifikası almak istediğinde, bir CA’ya başvurur. CA, başvuranın kimliğini ve talep edilen alan adını kontrol etme hakkına sahip olduğunu doğrular.

Doğrulama seviyesine göre üç ana sertifika türü vardır:

* **Alan Adı Doğrulaması (Domain Validation — DV):** En temel seviyedir ve sadece başvuranın alan adını kontrol ettiğini doğrular. Genellikle otomatik olarak ve hızlı bir şekilde verilir.
* **Kuruluş Doğrulaması (Organization Validation — OV):** Alan adı kontrolüne ek olarak, başvuran kuruluşun yasal varlığını (örneğin, şirket kayıtlarını kontrol ederek) doğrular.
* **Genişletilmiş Doğrulama (Extended Validation — EV):** En sıkı doğrulama seviyesidir. CA, kuruluşun yasal, fiziksel ve operasyonel varlığını kapsamlı bir şekilde araştırır. Eskiden tarayıcılarda yeşil adres çubuğu ile gösterilen bu sertifikalar, en yüksek düzeyde güven sağlar.

Tarayıcılar ve işletim sistemleri, “kök CA’lar” olarak bilinen, varsayılan olarak güvendikleri bir CA listesiyle birlikte gelir. Bir sunucunun sunduğu sertifika, tarayıcının güvenmesi için bu kök CA’lardan birine kadar uzanan kesintisiz bir “güven zinciri” (chain of trust) oluşturmalıdır.

Ancak bu modelin kendisi, sistemin en zayıf halkası olabilir. HTTPS’in güvenliği, dünya çapında yüzlerce farklı CA’ya kolektif olarak güvenilmesine dayanır. Eğer bu CA’lardan herhangi biri (özellikle daha az denetlenen veya daha az güvenli bir kuruluşa ait olan) ele geçirilirse veya kötü niyetli davranırsa, bir saldırgan bu CA’yı kullanarak herhangi bir alan adı için (örneğin, `google.com`) sahte ama teknik olarak "geçerli" bir sertifika üretebilir. Bir MitM saldırısı sırasında bu sahte sertifika kullanıcıya sunulduğunda, tarayıcı bunu geçerli kabul edecek ve hiçbir uyarı göstermeyecektir. Bu, HTTPS'in kriptografik temelinin sağlam olmasına rağmen, pratik uygulamasının insan ve kurumsal güvene dayalı olmasının getirdiği temel bir zafiyettir.

### Yaygın HTTP Tabanlı Saldırı Vektörleri ve Zafiyetler

HTTP protokolü ve üzerine inşa edilen web uygulamaları, çeşitli saldırı vektörlerine açıktır. Bu saldırılar genellikle uygulamanın kullanıcı girdilerini nasıl işlediği, oturumları nasıl yönettiği ve iletişim kanalını nasıl güvence altına aldığıyla ilgili zafiyetlerden kaynaklanır.

### Enjeksiyon Saldırıları: SQL Enjeksiyonu ve Siteler Arası Komut Dosyası Çalıştırma (XSS)

Enjeksiyon saldırıları, bir saldırganın güvenilmeyen verileri bir komut veya sorguya göndererek uygulamanın yorumlayıcısını kandırmasıyla gerçekleşir.

#### SQL Enjeksiyonu (SQLi)

SQL enjeksiyonu, bir saldırganın, uygulamanın arka uç veritabanına gönderdiği SQL sorgularını manipüle etmesine olanak tanıyan bir kod enjeksiyonu tekniğidir. Bu, genellikle kullanıcıdan alınan girdinin (örneğin, bir form alanından veya URL parametresinden) yeterince doğrulanmadan veya temizlenmeden doğrudan bir SQL sorgusuna eklenmesiyle mümkün olur. Başarılı bir SQLi saldırısı, saldırganın hassas verileri (kullanıcı bilgileri, parolalar, kredi kartı numaraları) çalmasına, veritabanındaki verileri değiştirmesine veya silmesine ve hatta bazı durumlarda temel işletim sisteminde komut çalıştırmasına olanak tanıyabilir.

* **GET İsteği Üzerinden SQLi:** Saldırılar genellikle URL parametreleri aracılığıyla gerçekleştirilir. Örneğin, bir ürün kategorisini gösteren bir URL `https://example.com/products?category=Gifts` şeklinde olabilir. Arka planda çalışan sorgu muhtemelen şuna benzer: `SELECT * FROM products WHERE category = 'Gifts'`. Bir saldırgan, URL'yi şu şekilde değiştirerek sorgunun mantığını bozabilir: `https://example.com/products?category=Gifts'+OR+1=1--`. Bu durumda, arka uçtaki sorgu `SELECT * FROM products WHERE category = 'Gifts' OR 1=1--'` haline gelir. `OR 1=1` ifadesi her zaman doğru olduğundan, `WHERE` koşulu tüm ürünler için geçerli olur ve `--` karakteri sorgunun geri kalanını yorum satırı haline getirerek olası ek filtreleri (örneğin `AND released = 1`) devre dışı bırakır.
* **POST İsteği Üzerinden SQLi:** Bu tür saldırılar genellikle giriş formları gibi HTTP POST isteğiyle veri gönderen alanlarda meydana gelir. Örneğin, bir giriş formunda kullanıcı adı ve parola alanları bulunur. Arka uç sorgusu `SELECT * FROM users WHERE username = '...' AND password = '...'` şeklinde olabilir. Saldırgan, kullanıcı adı alanına `administrator'--` ve parola alanını boş bırakarak giriş yapabilir. Bu durumda sorgu `SELECT * FROM users WHERE username = 'administrator'--' AND password = ''` haline gelir. `--` yorumlayıcısı, sorgunun parola kontrolü yapan kısmını etkisiz hale getirir ve sistem, sadece kullanıcı adının doğru olmasıyla saldırganın yönetici olarak giriş yapmasına izin verir.

SQLi’ye karşı en etkili savunma, **parametreli sorgular (prepared statements)** kullanmaktır. Bu teknikte, SQL sorgusu ve kullanıcı girdisi ayrı ayrı veritabanına gönderilir, böylece girdi hiçbir zaman çalıştırılabilir kod olarak yorumlanmaz.

#### Siteler Arası Komut Dosyası Çalıştırma (XSS)

XSS, bir saldırganın, başka bir kullanıcının tarayıcısında kötü amaçlı bir betik (genellikle JavaScript) çalıştırmasına olanak tanıyan bir enjeksiyon zafiyetidir. Bu, web uygulamasının kullanıcıdan aldığı girdiyi güvenli bir şekilde işlemeden (sanitize etmeden) doğrudan bir web sayfasına yerleştirmesiyle ortaya çıkar. Başarılı bir XSS saldırısı, saldırganın kurban adına eylemler gerçekleştirmesine, oturum çerezlerini çalmasına, sayfanın içeriğini değiştirmesine veya kullanıcıyı kötü amaçlı bir siteye yönlendirmesine olanak tanır. OWASP, XSS’i üç ana kategoriye ayırır:

![](https://cdn-images-1.medium.com/max/800/1*ij2B5LDXI_43PvmcqF0ioA.png)

XSS Türleri

### Oturum Yönetimi Zafiyetleri

HTTP’nin durumsuz doğası nedeniyle, uygulamalar oturumları yönetmek için genellikle oturum kimlikleri (session IDs) kullanır. Bu kimliklerin güvenliği, kullanıcı hesaplarının güvenliği için hayati öneme sahiptir.

#### Oturum Kaçırma (Session Hijacking)

Bu saldırıda, bir saldırgan meşru bir kullanıcının aktif oturum kimliğini ele geçirir ve bu kimliği kullanarak o kullanıcının oturumunu devralır. Oturum kimliği ele geçirildikten sonra, saldırgan kullanıcının yapabileceği her şeyi yapabilir. Oturum kimlikleri şu yollarla çalınabilir:

* **Ağ Dinleme (Sniffing):** Şifrelenmemiş (HTTP) bir ağda, saldırgan oturum çerezini trafikten kolayca yakalayabilir.
* **XSS Zafiyetleri:** Bir XSS saldırısı, kurbanın tarayıcısında çalışan bir betiğin `document.cookie` aracılığıyla oturum çerezini okumasına ve saldırgana göndermesine olanak tanır.
* **Tahmin Edilebilir Oturum Kimlikleri:** Eğer oturum kimlikleri yeterince rastgele değilse, saldırganlar geçerli bir kimlik tahmin edene kadar kaba kuvvet saldırısı yapabilirler.

OWASP’in önerdiği önlemler arasında, tüm trafiğin HTTPS ile şifrelenmesi, çerezlerde `Secure` (çerezin sadece HTTPS üzerinden gönderilmesini sağlar) ve `HttpOnly` (çerezin JavaScript tarafından erişilmesini engeller) niteliklerinin kullanılması, kriptografik olarak güçlü ve rastgele oturum kimlikleri oluşturulması ve kullanıcı kimlik doğrulaması gibi önemli olaylardan sonra oturum kimliğinin yeniden oluşturulması yer alır.

#### Siteler Arası İstek Sahtekarlığı (CSRF/XSRF)

CSRF, kimliği doğrulanmış bir kullanıcının, kendi bilgisi ve rızası dışında, bir web uygulamasında istenmeyen bir eylem gerçekleştirmesi için kandırıldığı bir saldırıdır. Saldırı, tarayıcıların bir web sitesine yapılan her istekte, o siteye ait tüm çerezleri (oturum çerezleri dahil) otomatik olarak göndermesi gerçeğinden yararlanır. Saldırgan, kurbanı kötü amaçlı bir web sitesini ziyaret etmeye veya bir e-postadaki bir bağlantıya tıklamaya ikna eder. Bu eylem, kurbanın tarayıcısının, kimliğinin doğrulandığı hedef siteye (örneğin, banka sitesi) sahte bir istek göndermesine neden olur. Tarayıcı oturum çerezini isteğe otomatik olarak eklediği için, hedef site bu isteği meşru bir kullanıcıdan geliyormuş gibi kabul eder ve işlemi gerçekleştirir (örneğin, para transferi).

CSRF’ye karşı en yaygın ve etkili savunma yöntemleri şunlardır:

* **Synchronizer Token Pattern:** Sunucu, her kullanıcı oturumu için benzersiz ve tahmin edilemez bir “CSRF token” oluşturur. Bu token, kullanıcının tarayıcısına gönderilir ve durum değiştiren her istekte (örneğin, bir form gönderiminde gizli bir alan olarak veya bir AJAX isteğinde özel bir başlık olarak) sunucuya geri gönderilmesi gerekir. Sunucu, gelen isteği işlemeden önce bu token’ın oturumla ilişkili doğru token olup olmadığını kontrol eder. Saldırgan bu token’ı bilemeyeceği için sahte istekleri başarısız olur.
* **SameSite Çerez Niteliği:** Bu modern tarayıcı özelliği, bir çerezin siteler arası (cross-site) bağlamlarda gönderilip gönderilmeyeceğini kontrol eder. `SameSite=Strict` olarak ayarlandığında, tarayıcı çerezi hiçbir siteler arası istekte göndermez. `SameSite=Lax` (birçok tarayıcıda varsayılan) ise, `GET` gibi üst düzey gezinmelerde çerezin gönderilmesine izin verirken, `POST` gibi daha riskli metotlarda engeller. Bu, CSRF saldırılarına karşı çok etkili bir savunma katmanıdır.

### İletişim Kanalına Yönelik Saldırılar: Ortadaki Adam (MitM) ve SSL Stripping

Bu saldırılar, istemci ve sunucu arasındaki iletişim kanalının kendisini hedefler.

* **Ortadaki Adam (MitM):** Saldırgan, iki taraf arasındaki iletişimin ortasına gizlice girer ve her iki tarafa da kendisini diğer taraf gibi gösterir. Bu, saldırganın tüm trafiği dinlemesine, kaydetmesine ve anında değiştirmesine olanak tanır. MitM saldırıları genellikle güvenli olmayan halka açık Wi-Fi ağlarında, DNS sahtekarlığı (kullanıcıyı sahte bir siteye yönlendirme) veya ARP sahtekarlığı (yerel ağdaki trafiği yönlendirme) gibi tekniklerle gerçekleştirilir. HTTPS, veriyi şifreleyerek ve sunucuyu doğrulayarak MitM saldırılarına karşı temel savunmayı sağlar.
* **SSL Stripping:** Bu, MitM saldırısının özel bir türüdür. Kullanıcı bir siteye `http://` ile bağlanmaya çalıştığında (veya tarayıcıya sadece `example.com` yazdığında), sunucu genellikle kullanıcıyı güvenli `https://` sürümüne yönlendirir. SSL Stripping saldırısında, ortadaki adam bu yönlendirmeyi engeller. Saldırgan, kullanıcı ile güvensiz bir HTTP bağlantısı kurarken, kendisi sunucu ile güvenli bir HTTPS bağlantısı kurar. Bu şekilde, kullanıcı ile arasındaki tüm trafik düz metin olarak akar ve saldırgan tarafından okunabilir hale gelir. Bu saldırıya karşı en etkili savunma, **HTTP Strict Transport Security (HSTS)** başlığını kullanmaktır.

### Mantıksal Zafiyetler: Clickjacking ve Bilgi İfşası

* **Clickjacking (UI Redress Attack):** Bu saldırıda, saldırgan kurbanı, tıkladığını düşündüğü bir şeyden (örneğin, “Komik Kedi Videosunu Oynat” düğmesi) farklı bir eylemi tetikleyen bir şeye (örneğin, “Hesabımı Sil” düğmesi) tıklaması için kandırır. Bu genellikle, saldırganın sitesinde şeffaf bir `<iframe>` içinde hedef siteyi yüklemesi ve meşru görünen bir düğmenin altına hedef sitedeki kritik bir düğmeyi hizalamasıyla yapılır. Kullanıcı görünürdeki düğmeye tıkladığında, aslında görünmez çerçevedeki düğmeye tıklar. Bu saldırıyı önlemek için `X-Frame-Options` HTTP başlığı veya daha modern ve esnek olan `Content-Security-Policy` (CSP) `frame-ancestors` direktifi kullanılır. Bu mekanizmalar, bir web sayfasının başka bir site tarafından bir çerçeve içine yerleştirilip yerleştirilemeyeceğini kontrol eder.
* **Bilgi İfşası (Information Disclosure):** Uygulamalar, hata mesajlarında, HTTP başlıklarında (`Server` başlığı gibi) veya `Referer` başlığında istemeden hassas bilgileri (yazılım sürümleri, dahili dosya yolları, oturum kimlikleri) sızdırabilir. Özellikle `Referer` başlığı, bir kullanıcı bir siteden diğerine tıkladığında, geldiği sayfanın tam URL'sini yeni siteye gönderir. Eğer bu URL'de hassas veriler (örneğin, bir şifre sıfırlama token'ı) varsa, bu bilgi sızdırılmış olur. Bu riski yönetmek için `Referrer-Policy` başlığı kullanılır.

### Modern HTTP Güvenlik Mekanizmaları ve Başlıkları

Modern web güvenliği, sunucuların tarayıcılara belirli güvenlik politikalarını zorunlu kılmasını sağlayan HTTP yanıt başlıklarına büyük ölçüde dayanmaktadır. Bu başlıklar, reaktif savunmalardan proaktif, “varsayılan olarak reddet” (deny-by-default) prensibine dayalı kontrollere geçişi temsil eder. Bu yaklaşım, bilinmeyen veya karmaşık saldırı vektörlerine karşı çok daha dayanıklı bir temel oluşturur.

### HTTP Strict Transport Security (HSTS): HTTPS Kullanımını Zorunlu Kılma

HTTP Strict Transport Security (HSTS), bir web sunucusunun, tarayıcılara kendisiyle yalnızca güvenli HTTPS bağlantıları üzerinden iletişim kurması gerektiğini bildirmesini sağlayan bir güvenlik politikası mekanizmasıdır. Bir tarayıcı, bir alan adı için geçerli bir HSTS başlığı aldığında, o alan adına gelecekte yapılacak tüm HTTP isteklerini otomatik olarak HTTPS’e yükseltir.

Bu mekanizmanın en önemli faydası, **SSL Stripping** gibi Ortadaki Adam (MitM) saldırılarını etkisiz hale getirmesidir. HSTS politikası aktif olduğunda, tarayıcı güvensiz bir HTTP isteği göndermeyi denemez bile; bağlantıyı doğrudan HTTPS üzerinden kurar. Ayrıca, geçersiz bir sertifika gibi güvenli bağlantı hatalarında kullanıcının uyarıyı atlayıp devam etmesine izin vermez.

HSTS politikası, `Strict-Transport-Security` yanıt başlığı aracılığıyla iletilir ve şu direktifleri içerir:

* `max-age=<saniye>`: Tarayıcının bu politikayı ne kadar süreyle (saniye cinsinden) hatırlaması gerektiğini belirtir. Tipik olarak bir veya iki yıl gibi uzun bir süre ayarlanır.
* `includeSubDomains`: Bu isteğe bağlı direktif, politikanın sadece mevcut alan adına değil, tüm alt alan adlarına da uygulanmasını sağlar.
* `preload`: Bu direktif, alan adının tarayıcı üreticileri tarafından yönetilen ve doğrudan tarayıcılara gömülen bir HSTS "ön yükleme" listesine dahil edilmek istendiğini belirtir. Bu, bir kullanıcının siteyi ilk kez ziyaret ettiğinde bile korunmasını sağlayarak "ilk kullanımda güven" (Trust on First Use) zafiyetini ortadan kaldırır.

### Content Security Policy (CSP): XSS ve Veri Enjeksiyonuna Karşı Derinlemesine Savunma

Content Security Policy (CSP), siteler arası komut dosyası çalıştırma (XSS) ve diğer kod enjeksiyonu saldırılarının etkisini azaltmak için tasarlanmış ek bir güvenlik katmanıdır. CSP, web geliştiricilerinin bir web sayfasının yükleyebileceği kaynaklar (JavaScript, CSS, resimler, fontlar vb.) üzerinde ayrıntılı kontrol sahibi olmasını sağlar. Bunu, sunucunun gönderdiği bir

`Content-Security-Policy` HTTP başlığı aracılığıyla yapar.

CSP, XSS’e karşı şu şekillerde savunma sağlar :

* **Satır İçi Kodları Engelleme:** Varsayılan olarak, CSP satır içi `<script>` bloklarının ve `onclick` gibi satır içi olay işleyicilerinin çalışmasını engeller. Bu, en yaygın XSS saldırı vektörlerinden birini ortadan kaldırır.
* **Kaynakları Beyaz Listeye Alma:** Yalnızca güvenilen alan adlarından betik, stil veya diğer kaynakların yüklenmesine izin verir. Örneğin, `script-src 'self' https://apis.google.com` direktifi, betiklerin yalnızca kendi alan adından ve `apis.google.com`'dan yüklenmesine izin verir.
* **Güvensiz JavaScript’i Kısıtlama:** `eval()` gibi metinden kod üreten tehlikeli JavaScript fonksiyonlarının kullanımını engeller.
* **Raporlama:** Bir politika ihlali olduğunda, tarayıcının belirtilen bir URI’ye bir JSON raporu göndermesini sağlayarak geliştiricilerin potansiyel saldırıları tespit etmesine ve politikalarını iyileştirmesine olanak tanır.

Bazı önemli CSP direktifleri şunlardır :

* `default-src`: Diğer kaynak türleri için bir direktif belirtilmemişse kullanılacak varsayılan kaynaktır.
* `script-src`: JavaScript dosyalarının yüklenebileceği kaynakları tanımlar.
* `style-src`: CSS dosyalarının yüklenebileceği kaynakları tanımlar.
* `img-src`: Resimlerin yüklenebileceği kaynakları tanımlar.
* `connect-src`: `fetch`, `XMLHttpRequest`, `WebSocket` gibi betik arayüzlerinin bağlanabileceği kaynakları kısıtlar.
* `frame-ancestors`: Bir sayfanın `<iframe>`, `<frame>` gibi etiketler içinde hangi kaynaklar tarafından gömülebileceğini kontrol eder.
* `object-src`: `<object>`, `<embed>` ve `<applet>` gibi eklenti kaynaklarını kısıtlar.

### Clickjacking Savunması: X-Frame-Options ve CSP `frame-ancestors`

Clickjacking saldırılarını önlemek için kullanılan iki ana HTTP başlığı vardır.

* `X-Frame-Options`**:** Bu başlık, bir sayfanın bir `<frame>`, `<iframe>`, `<embed>` veya `<object>` içinde görüntülenip görüntülenemeyeceğini tarayıcıya bildirir. Üç olası değeri vardır:
* `DENY`: Sayfanın herhangi bir çerçeve içinde görüntülenmesini tamamen engeller.
* `SAMEORIGIN`: Sayfanın yalnızca aynı kökene (origin) sahip bir çerçeve içinde görüntülenmesine izin verir.
* `ALLOW-FROM uri`: Sayfanın yalnızca belirtilen URI'den bir çerçeve içinde görüntülenmesine izin verir. Ancak bu direktif artık güncel değildir ve tarayıcı desteği sınırlıdır.
* **CSP** `frame-ancestors` **Direktifi:** Bu direktif, `X-Frame-Options` başlığının modern ve daha esnek bir alternatifidir. Hangi kaynakların sayfayı gömebileceğini belirten bir kaynak listesi (örneğin, `'self' https://example.com`) tanımlamaya olanak tanır. `X-Frame-Options`'a göre önceliklidir ve ikisi de mevcutsa, tarayıcılar genellikle `frame-ancestors`'ı uygular.

### Bilgi Sızıntısını Kontrol Etme: Referrer-Policy

Bir kullanıcı bir web sayfasındaki bir bağlantıya tıkladığında, tarayıcı genellikle yeni sayfaya yapılan istekte `Referer` adlı bir başlık gönderir. Bu başlık, kullanıcının geldiği sayfanın URL'sini içerir. Bu bilgi analitik için yararlı olsa da, URL'de hassas veriler (oturum kimlikleri, kişisel bilgiler, şifre sıfırlama token'ları vb.) varsa bir gizlilik ve güvenlik riski oluşturabilir.

`Referrer-Policy` başlığı, sunucuların `Referer` başlığında ne kadar bilgi gönderileceğini kontrol etmesine olanak tanır. Güvenlik ve gizliliği artırmak için önerilen bazı politikalar şunlardır:

* `no-referrer`: `Referer` başlığı hiçbir zaman gönderilmez.
* `same-origin`: Başlık yalnızca aynı kökene (same-origin) yapılan istekler için gönderilir. Siteler arası (cross-origin) isteklerde gönderilmez.
* `strict-origin`: Her zaman yalnızca köken (origin) gönderilir (örneğin, `https://example.com/`), tam yol ve sorgu dizesi kaldırılır. Güvenli bir kökenden (HTTPS) güvensiz bir kökene (HTTP) geçişte başlık gönderilmez.
* `strict-origin-when-cross-origin`: Aynı kökene yapılan isteklerde tam URL gönderilir. Siteler arası isteklerde ise yalnızca köken gönderilir. Güvenli bir kökenden güvensiz bir kökene geçişte başlık gönderilmez. Bu, birçok modern tarayıcının varsayılan politikasıdır.

### Diğer Kritik Güvenlik Başlıkları ve Çerez Nitelikleri

Yukarıda belirtilen ana başlıklara ek olarak, kapsamlı bir “derinlemesine savunma” stratejisi için uygulanması gereken başka başlıklar ve çerez ayarları da vardır.

![](https://cdn-images-1.medium.com/max/800/1*jw25Q0zcB_7U5Ls_Zz2Nyg.png)

### HTTP Trafik Analizi ve Güvenlik Testi Metodolojileri

Web uygulamalarının güvenliğini sağlamak, yalnızca savunma mekanizmaları uygulamakla kalmaz, aynı zamanda bu mekanizmaların etkinliğini doğrulamak ve potansiyel zafiyetleri proaktif olarak tespit etmek için HTTP trafiğini analiz etmeyi de gerektirir. Bu süreçte, özel olarak tasarlanmış araçlar ve metodolojiler kullanılır.

### Analiz Araçları ve Proxy’ler: OWASP ZAP ve Burp Suite

Hem OWASP ZAP hem de Burp Suite, bir güvenlik test uzmanının tarayıcısı ile hedef web uygulaması arasına bir “ortadaki adam” (manipulator-in-the-middle) proxy’si olarak yerleşerek çalışır. Bu, test uzmanının istemci ile sunucu arasındaki tüm HTTP ve HTTPS trafiğini yakalamasına, incelemesine, değiştirmesine ve yeniden göndermesine olanak tanır.

**OWASP ZAP (Zed Attack Proxy):**

* OWASP tarafından geliştirilen, ücretsiz ve açık kaynaklı, popüler bir web uygulaması güvenlik tarayıcısıdır.
* **Pasif Tarama:** ZAP, proxy’sinden geçen her isteği ve yanıtı, trafiği değiştirmeden analiz eder. Bu, güvenlik başlıklarının eksikliği, önbelleğe alınabilir hassas veriler veya yazılım sürüm bilgileri gibi “düşük asılı meyve” zafiyetlerini tespit eder.
* **Aktif Tarama:** ZAP, keşfedilen sayfalara, parametrelere ve işlevlere karşı bilinen saldırı vektörlerini (örneğin, SQLi, XSS payload’ları) otomatik olarak gönderir ve uygulamanın tepkisini analiz eder.
* **Örümcek (Spider):** Uygulamanın site haritasını çıkarmak için URL’leri ve bağlantıları otomatik olarak gezer.
* **Fuzzer:** Belirli bir isteğin parametrelerine büyük miktarda geçersiz, beklenmedik veya rastgele veri göndererek uygulamanın nasıl tepki verdiğini test eder.
* **Proxy ve Manuel Keşif:** Test uzmanının uygulamayı manuel olarak gezerken trafiği yakalamasına ve istekleri anında değiştirmesine olanak tanır.

**Burp Suite:**

* PortSwigger tarafından geliştirilen ve web uygulaması sızma testleri için endüstri standardı olarak kabul edilen ticari bir araçtır (ücretsiz bir Community Edition’ı da mevcuttur).
* **Proxy:** ZAP’e benzer şekilde, HTTP/HTTPS trafiğini yakalamak ve manipüle etmek için kullanılır. “Intercept” özelliği, isteklerin sunucuya ulaşmadan önce durdurulup değiştirilmesine olanak tanır.
* **Repeater:** Yakalanan bir isteği manuel olarak düzenleyip tekrar tekrar göndererek sunucunun farklı girdilere nasıl yanıt verdiğini ayrıntılı olarak analiz etmeyi sağlar.
* **Intruder:** Bir isteğin çeşitli bölümlerine (parametreler, başlıklar vb.) önceden tanımlanmış veya özel payload listeleri göndererek kaba kuvvet, numaralandırma veya fuzzing saldırılarını otomatize eder.
* **Scanner:** Otomatik olarak güvenlik açıklarını tarar (Professional sürümde mevcuttur).
* **Sequencer:** Oturum belirteçleri veya CSRF token’ları gibi rastgele olması beklenen veri öğelerinin entropisini ve tahmin edilemezliğini analiz eder.

Bu araçlar, otomatik tarayıcıların bulamayacağı iş mantığı hatalarını veya karmaşık erişim kontrolü zafiyetlerini tespit etmek için vazgeçilmezdir. Otomatik tarama verimlilik sağlarken, gerçek analiz, bu araçlardan gelen ham verileri yorumlama, uygulama bağlamını anlama ve bir saldırgan gibi düşünme yeteneğinden gelir. Dolayısıyla, bu araçlar insan sezgisinin ve uzmanlığının yerini almaz, aksine onu güçlendirir.

### Pasif ve Aktif Güvenlik Testi Yaklaşımları

HTTP güvenlik testi genellikle iki ana yaklaşıma ayrılır:

**Pasif Analiz:** Bu yaklaşımda, test uzmanı uygulamaya herhangi bir kötü amaçlı veya anormal istek göndermez. Sadece uygulamayı normal bir kullanıcı gibi gezerken arka planda çalışan proxy aracıyla trafiği izler. Amaç, uygulamanın normal işleyişi hakkında bilgi toplamaktır. Pasif analiz sırasında şunlar tespit edilebilir:

* Eksik veya yanlış yapılandırılmış güvenlik başlıkları (HSTS, CSP vb.).
* Hata mesajlarında veya yorum satırlarında sızan hassas bilgiler.
* Tahmin edilebilir oturum kimlikleri veya token’lar.
* Uygulamanın kullandığı teknolojiler, framework’ler ve API uç noktaları.

**Aktif Analiz:** Bu yaklaşımda, test uzmanı uygulamayı kasıtlı olarak hatalı, beklenmedik veya kötü amaçlı girdilerle test ederek zafiyetleri tetiklemeye çalışır. Aktif analiz, aşağıdakiler gibi zafiyetleri bulmak için kullanılır:

* SQL Enjeksiyonu ve Komut Enjeksiyonu.
* Siteler Arası Komut Dosyası Çalıştırma (XSS).
* Siteler Arası İstek Sahtekarlığı (CSRF).
* Bozuk Erişim Kontrolü (örneğin, başka bir kullanıcının verilerine erişmeye çalışmak).
* Sunucu Tarafı İstek Sahtekarlığı (SSRF).

### Güvenlik Başlıklarının ve Yapılandırmalarının Doğrulanması

Bir web uygulamasının güvenlik duruşunu hızlı bir şekilde değerlendirmenin en etkili yollarından biri, HTTP yanıt başlıklarını incelemektir. Bu, hem manuel olarak hem de otomatik araçlarla yapılabilir.

**Manuel Kontrol:**

* **Tarayıcı Geliştirici Araçları:** Herhangi bir modern tarayıcıda F12 tuşuna basarak açılan geliştirici araçlarının “Ağ” (Network) sekmesi, her bir istek ve yanıtın başlıklarını görüntülemek için kullanılabilir. Bu, HSTS, CSP, X-Frame-Options gibi başlıkların varlığını ve değerlerini hızlıca kontrol etmek için en kolay yoldur.
* **Komut Satırı Araçları:** `curl -I https://example.com` veya `wget -S https://example.com` gibi komut satırı araçları, bir URL'nin yalnızca yanıt başlıklarını getirmek için kullanılabilir. Bu, betik tabanlı veya otomatik kontroller için kullanışlıdır.

**Otomatik Araçlar:**

* **Çevrimiçi Tarayıcılar:** Security Headers, Mozilla Observatory gibi ücretsiz çevrimiçi hizmetler, bir web sitesinin URL’sini analiz ederek güvenlik başlıklarının varlığını, doğruluğunu ve genel bir güvenlik puanını raporlar.
* **CSP Değerlendiricileri:** Google CSP Evaluator gibi araçlar, mevcut bir İçerik Güvenlik Politikasının ne kadar güçlü olduğunu analiz eder, potansiyel atlatma (bypass) risklerini belirler ve iyileştirme önerileri sunar.
* **ZAP ve Burp Suite:** Bu araçlar, pasif tarama sırasında eksik veya zayıf yapılandırılmış güvenlik başlıkları için otomatik olarak uyarılar oluşturur.

Bu kontroller, bir uygulamanın “derinlemesine savunma” stratejisinin ne kadar iyi uygulandığını anlamak için kritik bir ilk adımdır.

### Sonuç ve Stratejik Öneriler

Bu rapor, HTTP protokolünün World Wide Web’in temel iletişim mekanizması olarak rolünü ve bu rolün getirdiği güvenlik zorluklarını kapsamlı bir şekilde analiz etmiştir. Analiz, HTTP’nin başlangıçta güvensiz, düz metin tabanlı bir protokol olarak tasarlandığını ve modern web güvenliğinin, bu orijinal tasarımdaki eksiklikleri gidermek için geliştirilen reaktif ve katmanlı bir savunma yapısı üzerine inşa edildiğini ortaya koymaktadır. HTTPS’in şifreleme ve kimlik doğrulama sağlaması, bu yapının temel taşıdır. Ancak, enjeksiyon saldırıları, oturum yönetimi zafiyetleri ve iletişim kanalına yönelik tehditler gibi riskler, yalnızca şifrelemenin yeterli olmadığını göstermektedir.

Modern HTTP güvenliği, HSTS ve CSP gibi proaktif mekanizmalar aracılığıyla “varsayılan olarak reddet” felsefesini benimsemiştir. Bu yaklaşım, sunucuların tarayıcılara katı güvenlik politikaları dayatmasına olanak tanıyarak, bilinmeyen tehditlere karşı bile dayanıklılığı artırmaktadır. Son olarak, OWASP ZAP ve Burp Suite gibi analiz araçları, bu savunmaların etkinliğini test etmek ve hem bilinen hem de mantıksal zafiyetleri ortaya çıkarmak için vazgeçilmezdir. Ancak bu araçlar, bir güvenlik uzmanının analitik becerilerinin ve bağlamsal anlayışının yerini tutmaz, yalnızca onu güçlendirir. HTTP güvenliği, tek bir teknoloji veya çözümden ziyade, protokol, uygulama ve altyapı katmanlarında dikkatlice uygulanan bir “derinlemesine savunma” (defense-in-depth) stratejisidir.

### Stratejik Öneriler (Best Practices)

Güçlü bir HTTP güvenlik duruşu oluşturmak ve sürdürmek için, farklı rollerdeki paydaşların belirli en iyi uygulamaları benimsemesi gerekmektedir.

#### Geliştiriciler İçin:

1. **HTTPS’i Varsayılan Olarak Kullanın:** Tüm yeni projelerde ve mevcut projelerin tüm sayfalarında HTTPS’i zorunlu kılın. Geliştirme ortamlarında bile HTTPS kullanmak, üretim ortamıyla tutarlılığı sağlar.
2. **Güvenli Kodlama Pratiklerini Benimseyin:** OWASP Top 10 gibi endüstri standartlarını öğrenin ve uygulayın. Özellikle girdi doğrulama, çıktı kodlama ve erişim kontrolü konularına odaklanın.
3. **Parametreli Sorgular Kullanın:** Veritabanı etkileşimlerinde SQL enjeksiyonunu önlemek için her zaman parametreli sorgular (prepared statements) veya güvenli ORM’ler kullanın. Kullanıcı girdisini asla doğrudan SQL sorgularına birleştirmeyin.
4. **Modern ve Güvenilir Framework’lerden Yararlanın:** Modern web framework’leri, genellikle XSS’e karşı otomatik çıktı kodlama ve CSRF’ye karşı yerleşik token koruması gibi birçok güvenlik özelliğini varsayılan olarak sunar. Bu özelliklerden tam olarak yararlanın ve bunları devre dışı bırakmaktan kaçının.
5. **Güvenlik Başlıklarını Proaktif Olarak Uygulayın:** Uygulama kodunuzun bir parçası olarak `Content-Security-Policy`, `Referrer-Policy` ve diğer kritik güvenlik başlıklarını yapılandırın. CSP'yi başlangıçta sıkı bir politika ile uygulayın ve yalnızca gerekli kaynaklara izin verecek şekilde gevşetin.

#### Sistem Yöneticileri ve DevOps Ekipleri İçin

1. **Web Sunucularını Güvenli Yapılandırın:** Web sunucularını (Nginx, Apache vb.) veya ağ geçitlerini (load balancer, CDN) `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options` gibi güvenlik başlıklarını tüm yanıtlara ekleyecek şekilde yapılandırın.
2. **TLS Yapılandırmasını Güçlendirin:** Yalnızca güçlü ve güncel TLS sürümlerini (TLS 1.2 ve tercihen TLS 1.3) ve şifreleme takımlarını (cipher suites) etkinleştirin. Zayıf ve eski protokolleri (SSLv3, TLS 1.0/1.1) ve şifreleri (RC4, 3DES) devre dışı bırakın.
3. **Otomatik Güvenlik Taramalarını Entegre Edin:** CI/CD işlem hatlarınıza OWASP ZAP veya Burp Suite gibi Dinamik Uygulama Güvenliği Testi (DAST) araçlarını entegre ederek, her dağıtımdan önce bilinen güvenlik açıklarını otomatik olarak tarayın.
4. **Sertifika Yönetimini Otomatize Edin:** SSL/TLS sertifikalarının süresinin dolmasını önlemek ve kısa ömürlü sertifikaları (daha iyi güvenlik sağlar) pratik hale getirmek için Let’s Encrypt gibi hizmetler ve ACME protokolü kullanarak sertifika yenileme süreçlerini otomatize edin.

### Gelecek Perspektifi

Web’in geleceği, HTTP/3 ve temelindeki QUIC protokolünün yaygınlaşmasıyla şekillenecektir. Bu geçiş, performansı ve güvenliği artırırken yeni zorlukları da beraberinde getirecektir. QUIC’in UDP üzerinde çalışması ve trafiği varsayılan olarak şifrelemesi, geleneksel ağ güvenlik cihazları (güvenlik duvarları, IDS/IPS sistemleri) için bir “görünürlük” sorunu yaratmaktadır. Bu cihazlar, şifreli UDP trafiğini TCP gibi kolayca inceleyemezler, bu da kötü amaçlı yazılım tespiti ve trafik analizi gibi görevleri zorlaştırabilir. Güvenlik endüstrisi, bu yeni paradigmaya uyum sağlamak için yeni denetim ve analiz yöntemleri geliştirmek zorunda kalacaktır. HTTP/3'ün getirdiği karmaşıklık, aynı zamanda yeni uygulama ve yapılandırma hatalarına, dolayısıyla yeni saldırı yüzeylerine yol açma potansiyeli taşımaktadır. Bu nedenle, HTTP’nin evrimi devam ederken, güvenlik profesyonellerinin ve geliştiricilerin sürekli öğrenme ve adaptasyon içinde olmaları kritik önem taşımaya devam edecektir.

---

### DNS Güvenliği ve Analizi

Bu başlık, internetin görünmez ama vazgeçilmez altyapısı olan Alan Adı Sistemi’ni (DNS) mercek altına almaktadır. DNS’in temel çalışma prensiplerinden başlayarak, kurumsal ortamlardaki kritik rolüne, en yaygın siber saldırı vektörlerine ve bu tehditlere karşı geliştirilen modern savunma mekanizmalarına kadar kapsamlı bir analiz sunulacaktır.

### DNS’in Temelleri ve Hiyerarşik Çözümleme Süreci

Alan Adı Sistemi (Domain Name System — DNS), en temel işleviyle, insanlar tarafından kolayca hatırlanabilen alan adlarını (örneğin, [www.example.com)](http://www.example.com%29) makinelerin ağ üzerinde birbirlerini bulmak için kullandığı sayısal İnternet Protokolü (IP) adreslerine (örneğin, 93.184.216.34) çeviren, internetin küresel ölçekte dağıtık veritabanı ve “telefon rehberidir”.1 DNS olmasaydı, her bir web sitesi için karmaşık IP adreslerini ezberlemek gerekecek, bu da internetin bugünkü yaygın kullanımını imkansız kılacaktı.

DNS’in güvenlik mimarisini anlamak için tarihsel bağlamını kavramak esastır. Protokol, 1980'lerde, internetin bugünkünden çok daha küçük ve büyük ölçüde güvene dayalı bir ortam olduğu varsayımıyla tasarlanmıştır. Bu tasarım felsefesi, hız ve verimlilik adına bazı temel güvenlik mekanizmalarından feragat edilmesine yol açmıştır. Örneğin, temel taşıma katmanı olarak genellikle bağlantısız ve durumsuz (stateless) bir protokol olan UDP’nin kullanılması, kaynak IP adresinin sahte olarak değiştirildiği (spoofed) paketlerin kolayca gönderilmesine olanak tanır. Bu durum, DNS Yükseltme (Amplification) gibi Dağıtılmış Hizmet Reddi (DDoS) saldırılarının temelini oluşturur. Benzer şekilde, standart DNS sorguları ve cevapları şifrelenmemiş düz metin olarak iletilir. Bu, ağ trafiğini izleyen herhangi bir aktörün kullanıcıların internet aktivitelerini görmesine olanak tanır ve Ortadaki Adam (Man-in-the-Middle) saldırılarına zemin hazırlar. Bu temel tasarım kararları, DNS’i siber saldırganlar için verimli bir hedef haline getirmiş ve DNSSEC, DoT, DoH gibi güvenlik mekanizmalarının sonradan geliştirilmesini zorunlu kılmıştır.

#### **Sorgu Türleri ve Hiyerarşik Çözümleme Süreci**

Bir alan adının IP adresine çevrilmesi süreci, “DNS çözümlemesi” olarak adlandırılır ve bu süreçte iki temel sorgu türü kullanılır. Birincisi, bir son kullanıcı cihazının bir DNS çözümleyiciye (resolver) yaptığı ve karşılığında nihai bir cevap beklediği **Recursive Query (Özyinelemeli Sorgu)**’dur. İstemci, çözümleyiciye “bana [www.example.com](http://www.example.com) adresinin IP’sini bul ve başka bir şeyle uğraştırma” der. İkincisi ise genellikle DNS sunucularının kendi aralarındaki iletişimde kullanılan **Iterative Query (Yinelemeli Sorgu)**’dur. Bu sorguda, bir sunucu tam cevabı bilmiyorsa, “cevabı bilmiyorum ama sana yardımcı olabilecek bir sonraki sunucunun adresi bu” şeklinde bir yönlendirme yapar.

Önbellekte (cache) hiçbir bilginin olmadığı varsayıldığında, [www.example.com](http://www.example.com) için yapılan bir DNS çözümlemesi tipik olarak şu 8 adımı izler:

1. **Kullanıcı Sorgusu:** Kullanıcı, tarayıcısına [www.example.com](http://www.example.com) yazar. Bu istek, işletim sistemi aracılığıyla genellikle İnternet Servis Sağlayıcısı (İSS) tarafından atanan Recursive DNS Resolver’a (Özyinelemeli DNS Çözümleyici) gönderilir.
2. **Kök Sunucu Sorgusu:** Resolver, alan adı hakkında hiçbir bilgiye sahip olmadığı için hiyerarşinin en tepesindeki Kök DNS Sunucularından (.) birine [www.example.com](http://www.example.com) adresini sorar.
3. **Kök Sunucu Yanıtı:** Kök sunucu, tam IP adresini bilmez ancak sorgunun .com ile bittiğini görerek, .com alan adlarından sorumlu olan TLD (Top-Level Domain) Sunucularının adreslerini resolver’a bildirir.
4. **TLD Sunucu Sorgusu:** Resolver, bu bilgiyle .com TLD sunucularından birine [www.example.com](http://www.example.com) adresini sorar.
5. **TLD Sunucu Yanıtı:** TLD sunucusu, example.com alan adının yönetiminden sorumlu olan Yetkili Ad Sunucusunun (Authoritative Name Server) adresini resolver’a iletir.
6. **Yetkili Ad Sunucusu Sorgusu:** Resolver, son olarak example.com’un yetkili ad sunucusuna [www.example.com'un](http://www.example.com%27un) IP adresini sorar.
7. **Yetkili Ad Sunucusu Yanıtı:** Yetkili ad sunucusu, kendi kayıtlarını kontrol eder ve [www.example.com'a](http://www.example.com%27a) karşılık gelen IP adresini içeren A kaydını resolver’a gönderir.
8. **Nihai Yanıt:** Resolver, elde ettiği bu IP adresini kullanıcının işletim sistemine iletir ve tarayıcı artık bu IP adresini kullanarak web sunucusuyla bağlantı kurabilir.

Bu sürecin verimliliğini artırmak için, çözümlemenin her aşamasında elde edilen bilgiler, belirli bir geçerlilik süresi (Time-to-Live — TTL) boyunca önbelleğe alınır. Bir sonraki sorguda, eğer istenen bilgi önbellekte mevcutsa, tüm bu adımlar atlanır ve cevap doğrudan önbellekten sunularak hem süreç hızlandırılır hem de küresel DNS altyapısı üzerindeki yük azaltılır.

### Temel DNS Kayıt Türleri (A, AAAA, MX, CNAME, TXT, SRV)

Bir DNS zone dosyası, farklı amaçlara hizmet eden çeşitli kaynak kayıtlarından (Resource Records — RR) oluşur. Her kayıt, alan adıyla ilgili belirli bir bilgiyi depolar. En yaygın kullanılan DNS kayıt türleri ve işlevleri aşağıdaki tabloda özetlenmiştir.

![](https://cdn-images-1.medium.com/max/800/1*-P4ySoKUyIhAnuhgi_59jg.png)

DNS kayıt türleri ve işlevleri

### Active Directory ve DNS Entegrasyonu (SRV Kayıtları, Güvenli DDNS)

Microsoft’un Active Directory Domain Services (AD DS) altyapısı, işlevselliği için tamamen ve vazgeçilmez bir şekilde DNS’e bağımlıdır. DNS, Active Directory’nin merkezi sinir sistemi olarak kabul edilebilir; onsuz, etki alanındaki istemci bilgisayarların kimlik doğrulaması yapacakları etki alanı denetleyicilerini (Domain Controller — DC) bulmasından, DC’lerin kendi aralarında replikasyon verilerini senkronize etmesine kadar hiçbir temel işlem gerçekleştirilemez.

Bu sıkı entegrasyonun en önemli avantajlarından biri, **Active Directory Entegre Zone’lar** kavramıdır. Geleneksel DNS yapılandırmasında, zone verileri sunucu üzerinde metin tabanlı dosyalarda tutulurken, AD Entegre Zone’larda DNS verileri doğrudan Active Directory veritabanının bir parçası olarak saklanır. Bu yaklaşım, zone verilerinin tüm etki alanı denetleyicileri arasında AD’nin kendi çoklu ana (multi-master) replikasyon mekanizması ile çoğaltılmasını sağlar. Bu sayede, her DC zone için birincil sunucu gibi davranabilir, bu da gelişmiş hata toleransı ve basitleştirilmiş yönetim sağlar.

Active Directory gibi karmaşık ve dağıtık bir hizmet ortamında, istemcilerin ihtiyaç duydukları hizmetleri sağlayan sunucuları dinamik olarak bulabilmesi gerekir. Bu işlev, **SRV (Service) kayıtları** aracılığıyla gerçekleştirilir. Bir istemci Active Directory etki alanına oturum açmak istediğinde, kimlik doğrulama (Kerberos) ve dizin sorgulama (LDAP) gibi temel hizmetleri bulmak için \_kerberos.\_tcp.dc.\_msdcs.<domain\_name> veya \_ldap.\_tcp.dc.\_msdcs.<domain\_name> gibi spesifik SRV kayıtlarını sorgular. Bu sorguya verilen cevap, istemciye hizmeti sunan sunucunun adını, çalıştığı port numarasını ve sunucular arası öncelik/ağırlık değerlerini bildirir.

Geleneksel DNS’te kayıtlar manuel olarak yönetilirken, binlerce istemcinin bulunduğu dinamik bir AD ortamında bu sürdürülebilir değildir. **Dinamik DNS (DDNS)**, istemci bilgisayarların kendi DNS kayıtlarını (A ve PTR) DNS sunucusu üzerinde otomatik olarak kaydetmelerine olanak tanır. AD Entegre Zone’ların en önemli güvenlik özelliklerinden biri, varsayılan olarak **Güvenli Dinamik Güncellemeleri (Secure Dynamic Updates)** zorunlu kılmasıdır. Bu mekanizmada, bir istemci DNS kaydını güncellemek istediğinde, bu isteği kendi makine hesabının kimlik bilgileriyle (Kerberos aracılığıyla) imzalar. DNS sunucusu, isteği yapan makinenin kimliğini doğrular ve yalnızca o makinenin kendi adıyla ilişkili kaydı değiştirmesine izin verir. Bu süreç, yetkisiz bir cihazın, ağdaki başka bir makinenin DNS kaydını değiştirerek trafiği kendi üzerine yönlendirmesini (DNS sahtekarlığı) engeller.

### DNS Saldırı Vektörleri ve Paket Seviyesinde Analizi

DNS’in internet altyapısındaki merkezi rolü ve temel tasarımındaki güvenlik eksiklikleri, onu siber saldırganlar için cazip bir hedef haline getirmektedir. Bu saldırıların evrimi, protokolün meşru özelliklerinin (açık resolver’lar, büyük cevap paketleri, port 53'ün güvenilirliği) birer silaha dönüştürülmesini göstermektedir. Bu durum, tespit yöntemlerinin de basit imza tabanlı kontrollerden, davranışsal anomali ve istatistiksel analiz gibi daha gelişmiş tekniklere evrilmesini gerektirmiştir.

![](https://cdn-images-1.medium.com/max/800/1*jDadlG2PZV67wFY3Xsk3EQ.png)

*DNS Saldırı Vektörleri Karşılaştırması*

#### DNS Önbellek Zehirlenmesi (Cache Poisoning)

Bu saldırıda amaç, bir DNS çözümleyicisinin önbelleğine sahte bilgiler enjekte ederek, o çözümleyiciyi kullanan kullanıcıları meşru bir siteye (örneğin, banka.com) erişmeye çalıştıklarında saldırganın kontrolündeki kötü amaçlı bir siteye yönlendirmektir. Saldırganın başarılı olması için, resolver’ın önbelleğinde olmayan bir alan adı için sorgu yapmasını tetiklemesi, resolver’ın yetkili sunucuya gönderdiği sorgunun Transaction ID’sini ve kaynak portunu doğru tahmin etmesi ve kendi sahte cevabını gerçek cevaptan önce resolver’a ulaştırması gerekir. Bu bir “yarış durumu” (race condition) yaratır. Ağ trafiği analizinde bu saldırı, hedef resolver’a yönelik, çok sayıda farklı ve rastgele kaynak portundan gelen, farklı Transaction ID’lere sahip yoğun bir UDP paketi seli olarak kendini gösterir. Başarılı bir saldırı, aynı Transaction ID’ye sahip birden fazla DNS cevabının (biri gerçek, biri sahte) görülmesiyle tespit edilebilir.

#### DNS Yükseltme (Amplification) DDoS Saldırıları

Bu saldırı, az miktarda bant genişliği kullanarak hedefe çok daha büyük miktarda trafik göndermeyi amaçlayan yansıtmalı (reflection-based) bir DDoS türüdür. Saldırgan, kaynak IP adresini kurbanın IP adresi olarak taklit ettiği (spoofing) DNS sorguları oluşturur. Bu sahte sorgular, mümkün olan en büyük cevabı üretecek şekilde (örneğin, ANY türünde veya DNSSEC etkin bir alana yönelik) tasarlanır ve internet üzerindeki yanlış yapılandırılmış “açık DNS resolver’lara” gönderilir. Bu resolver’lar, aldıkları büyük boyutlu cevapları, sorgunun kaynağı olarak gördükleri kurbanın IP adresine yansıtır. Sonuç olarak, saldırganın gönderdiği her küçük sorgu yüzlerce kat büyüyerek kurbanın ağını hedefler ve hizmet kesintisine neden olur.1 Kurbanın ağ trafiği analiz edildiğinde, bu saldırı, çok sayıda farklı kaynaktan gelen, istenmemiş (unsolicited), büyük boyutlu ve genellikle IP katmanında parçalanmış (fragmented) DNS cevap paketleri olarak görülür. En önemli kanıt, bu devasa gelen cevap trafiğine karşılık gelen herhangi bir giden DNS sorgusunun olmamasıdır.

#### DNS Tünelleme (Tunneling) ile Veri Sızdırma

DNS Tünelleme, siber saldırganların veri sızdırmak veya gizli bir komuta-kontrol (C2) kanalı kurmak için DNS protokolünü standart dışı bir amaçla kullandığı gelişmiş bir tekniktir. Saldırganlar, güvenlik duvarları tarafından genellikle daha az denetlenen ve serbestçe geçişine izin verilen DNS trafiğini (UDP/TCP port 53) istismar eder. Taşınacak veri (örneğin, çalınan bir dosya) küçük parçalara bölünür, kodlanır (örneğin, Base64 ile) ve DNS sorgularının alt alan adı kısmına (<kodlanmis\_veri>.attacker-c2.com) veya TXT kayıtlarına gömülür. Saldırganın kontrolündeki yetkili DNS sunucusu bu sorguları alarak veriyi birleştirir. Paket seviyesinde bu aktivite, anlamsız, rastgele görünen ve normalden çok daha uzun alt alan adı sorguları, şüpheli bir istemciden kaynaklanan DNS sorgu hacminde ani bir artış ve özellikle veri taşıma kapasitesi daha yüksek olan TXT kayıtlarının yoğun kullanımı ile tespit edilebilir.

#### Zone Transfer (AXFR) Zafiyeti

Zone Transfer, birincil bir DNS sunucusundaki tüm zone verilerinin ikincil sunuculara kopyalanmasını sağlayan meşru bir mekanizmadır. AXFR, tüm zone’un tam bir kopyasını isteyen protokoldür. Eğer bir DNS sunucusu, bu isteklere kimlik doğrulaması yapmadan veya isteğin geldiği IP adresini kontrol etmeden cevap verecek şekilde yanlış yapılandırılmışsa, bir saldırgan tek bir AXFR isteği ile bir şirketin iç ağındaki sunucuların adları, IP adresleri ve hizmetleri dahil olmak üzere tüm DNS kayıtlarını ele geçirebilir. Bu bilgiler, daha sonraki saldırılar için bir yol haritası niteliğindedir. AXFR transferleri, DNS’in genellikle kullandığı UDP yerine TCP protokolü üzerinden 53 numaralı porttan gerçekleşir. Ağ trafiğinde bu zafiyetin istismarı, hedef DNS sunucusunun 53 numaralı TCP portuna bir üçlü el sıkışma (SYN, SYN-ACK, ACK) ile başlayan bir bağlantı, ardından

Type: AXFR (252) içeren bir DNS sorgusu ve son olarak sunucudan gelen, tüm zone dosyasını içeren büyük bir TCP veri akışı olarak gözlemlenir.

### DNS Güvenlik Mekanizmaları

Standart DNS protokolünün doğasında var olan güvenlik ve gizlilik zafiyetlerini gidermek amacıyla bir dizi teknoloji ve protokol uzantısı geliştirilmiştir. DNS güvenliğindeki bu evrim, iki temel soruna çözüm arayışını yansıtır. İlk olarak DNSSEC, “Aldığım DNS cevabı doğru kaynaktan mı geliyor ve yolda değiştirildi mi?” sorusuna odaklanarak veri bütünlüğü ve kimlik doğrulama sorununu çözmeyi hedefler. Ancak DNSSEC, sorguların içeriğini şifrelemediği için “DNS sorgularımı ağ üzerinde kimler görebiliyor?” sorununa bir çözüm sunmaz. İkinci aşamada ortaya çıkan DoT ve DoH ise tam olarak bu gizlilik açığını kapatmaya odaklanır.

#### DNSSEC: Yanıtların Kriptografik Olarak Doğrulanması

Domain Name System Security Extensions (DNSSEC), DNS’e bir güvenlik katmanı ekleyerek, DNS istemcilerinin aldıkları DNS verilerinin kaynağını doğrulamasını ve bu verilerin aktarım sırasında değiştirilmediğini garanti etmesini sağlayan bir teknolojidir. Temel amacı, DNS Önbellek Zehirlenmesi gibi sahte veriye dayalı saldırıları engellemektir.

DNSSEC, açık anahtar kriptografisi prensibine dayanır ve DNS’e yeni kayıt türleri ekleyerek çalışır:

* **RRSIG (Resource Record Signature):** Bir zone içerisindeki her bir kayıt setinin (örneğin, bir alan adına ait tüm A kayıtları) dijital imzasını içerir.
* **DNSKEY (DNS Public Key):** Dijital imzaları doğrulamak için kullanılan genel anahtarları içerir.
* **DS (Delegation Signer):** Bir üst zone’un, bir alt zone’un anahtarının güvenilir olduğunu teyit etmesini sağlayan kayıttır.

Bu kayıtlar, kök DNS sunucularından başlayarak TLD sunucularına ve oradan da bireysel alan adlarının yetkili sunucularına kadar uzanan kırılmaz bir **güven zinciri (chain of trust)** oluşturur. Bir çözümleyici, DNSSEC ile korunan bir alan adı için cevap aldığında, bu zinciri takip ederek cevabın her aşamada kriptografik olarak geçerli olduğunu doğrular.

#### 11.5.2. Şifreli DNS: DoT (DNS over TLS) ve DoH (DNS over HTTPS)

DNSSEC veri bütünlüğünü sağlarken, DNS sorgularının gizliliğini sağlamaz. DoT ve DoH, bu açığı kapatmak için istemci ile DNS resolver arasındaki DNS trafiğini şifreleyen iki farklı protokoldür. Her ikisi de ağdaki üçüncü partilerin (İSS’ler dahil) hangi web sitelerinin ziyaret edildiğini görmesini engeller.

İki protokol arasındaki temel fark, gizlilik ve kontrol arasındaki dengeyi yansıtır:

* **DNS over TLS (DoT):** DNS sorgularını doğrudan bir TLS tüneli üzerinden taşır ve kendine özgü **TCP Port 853**'ü kullanır. Bu standart port kullanımı, ağ yöneticilerinin DoT trafiğini kolayca tespit etmesine, izlemesine ve politikalarına göre engellemesine olanak tanır. Bu, daha şeffaf ve yönetilebilir bir yaklaşım sunar.
* **DNS over HTTPS (DoH):** DNS sorgularını bir HTTPS oturumu içine paketler ve standart web trafiği ile aynı olan **TCP Port 443**'ü kullanır. Bu, DoH trafiğinin diğer şifreli web trafiğinden ayırt edilmesini çok zorlaştırır. Bu gizlenme yeteneği, DoH’u sansüre ve engellemeye karşı daha dirençli kılar ancak aynı zamanda kurumsal ağlarda DNS tabanlı güvenlik denetimlerini ve görünürlüğü azaltarak yeni zorluklar ortaya çıkarır.

DNS güvenliğinin evrimi, internet protokolü tasarımındaki temel bir gerilimi yansıtmaktadır: performans, güvenlik ve gizlilik arasındaki sürekli denge arayışı. Başlangıçta performansa odaklanan bir protokol, sonradan güvenlik (DNSSEC) ve ardından gizlilik (DoT/DoH) yamalarıyla güçlendirilmiştir. Ancak son adım olan DoH, kontrolü ağ yöneticisinden alıp uygulama (tarayıcı) geliştiricisine vererek, kurumsal ağ yönetimi ve güvenliği için yeni ve karmaşık zorluklar ortaya çıkarmıştır. Bu, sadece teknik bir evrim değil, aynı zamanda internetin kontrolünün kimde olacağına dair felsefi bir güç kaymasıdır.