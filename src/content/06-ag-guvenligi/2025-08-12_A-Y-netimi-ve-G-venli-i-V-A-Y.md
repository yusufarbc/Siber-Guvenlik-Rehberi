# Ağ Yönetimi ve Güvenliği VIII: Ağ Yönetimi, İzleme ve Otomasyon

---

### Ağ Yönetimi ve Güvenliği VIII: Ağ Yönetimi, İzleme ve Otomasyon

![](https://cdn-images-1.medium.com/max/800/1*Iv6EqXHTlTeVgd7LlSNDOQ.png)

Ağ yönetimi, son yirmi yılda köklü bir dönüşüm geçirmiştir. Geçmişte, ağ yönetimi büyük ölçüde manuel, reaktif ve komut satırı arayüzü (CLI) tabanlı bireysel sorun giderme çabalarına dayanıyordu. Ağ mühendisleri, sorunlar ortaya çıktığında müdahale eder, cihazlara tek tek bağlanır ve yapılandırmaları manuel olarak düzenlerdi. Bu yaklaşım, günümüzün karmaşık, dinamik ve iş açısından kritik ağ altyapıları için artık sürdürülebilir değildir. Modern ağ operasyonları, bu eski paradigmanın yerini alan, birbiriyle derinden bağlantılı üç temel sütun üzerine inşa edilmiştir:

1. **Kapsamlı Görünürlük:** Ağın durumunu, sağlığını ve trafik modellerini gerçek zamanlı olarak anlama yeteneği. Bu, yalnızca cihazların “çalışıp çalışmadığını” bilmekten öte, ağdaki her bir konuşmanın doğasını, performans metriklerini ve potansiyel anormallikleri anlamayı içerir.
2. **Akıllı Otomasyon:** Ağın yaşam döngüsünü kontrol etmek, yapılandırmak ve yönetmek için yazılım kullanmak. Otomasyon, insan hatasını azaltır, tekrarlayan görevleri ortadan kaldırır, tutarlılığı sağlar ve ağ değişikliklerinin hızını ve çevikliğini artırır.
3. **Bütünleşik Dayanıklılık:** Performans yönetimi ve güvenlik operasyonlarını birleşik bir stratejide birleştirmek. Bu yaklaşım, ağın yalnızca kullanılabilir ve performanslı olmasını değil, aynı zamanda sürekli gelişen tehditlere karşı güvende olmasını da sağlar.

Bu raporun ana tezi, bu sütunların birbirinden izole disiplinler olmadığı, aksine birbirini besleyen ve güçlendiren entegre bir sistem olduğudur. İzleme araçlarından elde edilen görünürlük, akıllı otomasyonu tetiklemek için gerekli verileri sağlar. Otomasyon ise, güvenlik politikalarını ve performans garantilerini uygulamak için kullanılır. Bu durum, modern NetDevOps felsefesinin özünü oluşturan güçlü bir geri bildirim döngüsü yaratır. Bu kapsamlı teknik rapor, bu üç temel taşı derinlemesine inceleyecek, temel teknolojileri, protokolleri, araçları ve en iyi uygulamaları analiz ederek modern ağ yönetimi, izleme ve otomasyonun bütünsel bir resmini sunacaktır.

---

### Bölüm I: Ağ Görünürlüğü — Yönetimin Temeli

Bu bölüm, sonraki tüm yönetim, otomasyon ve güvenlik faaliyetleri için gerekli olan ham verileri sağlayan teknolojilere odaklanmaktadır. Ağ cihazlarının “ne” durumda olduğunu (cihaz sağlığı), trafiğin “kim” tarafından “nereye” aktığını (akış analizi) ve bu verilerin “nasıl” bir araya getirilip anlamlandırıldığını (izleme platformları) inceleyeceğiz.

### Bölüm 1: SNMP ile Cihaz Sağlığı ve Durum İzleme

Simple Network Management Protocol (SNMP), ağ izlemenin en temel ve yaygın olarak kullanılan protokolüdür. Bu bölümde, SNMP’nin mimarisi, evrimi ve her bir sürümünün kritik güvenlik etkileri ayrıntılı olarak incelenecektir.

#### 1.1. SNMP Mimarisi ve Temel Bileşenleri

SNMP, temel olarak bir yönetici-ajan (manager-agent) modeli üzerine kuruludur. Bu mimari, ağdaki cihazların durumunu ve performansını merkezi olarak izlemek ve yönetmek için tasarlanmıştır.

* **Yönetici-Ajan Modeli:** Bu modelde, **Yönetici** (Manager) veya Ağ Yönetim İstasyonu (NMS) olarak adlandırılan merkezi bir sunucu bulunur. Bu sunucu, ağdaki yönetilen cihazlar (yönlendiriciler, anahtarlar, sunucular, yazıcılar vb.) üzerinde çalışan **Ajan** (Agent) yazılımlarıyla iletişim kurar. Yönetici, ajanlara istekler göndererek bilgi toplar veya yapılandırma değişiklikleri yapar. Ajanlar ise bu isteklere yanıt verir veya belirli olaylar meydana geldiğinde yöneticiye proaktif olarak bildirimler (trap) gönderir.
* **Yönetim Bilgi Tabanı (MIB) ve Nesne Tanımlayıcıları (OID):** Her ajanın üzerinde, o cihazla ilgili yönetilebilir bilgilerin hiyerarşik bir veritabanı olan **Yönetim Bilgi Tabanı (MIB)** bulunur. MIB içindeki her bir bilgi parçası (örneğin, CPU kullanımı, arayüz durumu, bellek miktarı) **Nesne Tanımlayıcısı (OID)** adı verilen benzersiz bir adresle tanımlanır. Yönetici, belirli bir veriyi sorgulamak için bu OID’leri kullanır. Örneğin, bir arayüzün gelen trafik miktarını öğrenmek için ilgili arayüzün `ifInOctets` OID'sini sorgular.

#### 1.2. SNMP’nin Evrimi: Güvenlik ve İşlevsellik Derinlemesine Bakış

SNMP, yıllar içinde önemli ölçüde gelişmiştir. Bu evrim, özellikle güvenlik alanındaki iyileştirmelerle karakterize edilir.

#### **SNMPv1**

Protokolün orijinal versiyonudur. Temel amacı, ağ yönetimi için açık ve standart bir yöntem sağlamaktı. Ancak en büyük zayıflığı, şifrelenmemiş düz metin olarak iletilen ve parola işlevi gören “community string” adı verilen bir yapıya dayanan güvenlik modelidir. Bu, ağ trafiğini dinleyen herhangi birinin bu parolayı ele geçirip cihazlara yetkisiz erişim sağlamasına olanak tanır. Ayrıca, yalnızca 32-bit sayaçları desteklemesi, yüksek hızlı ağlarda sayaçların hızla sıfırlanmasına (rollover) neden olabildiği için bir sınırlamadır.

#### **SNMPv2c**

SNMPv1 üzerine yapılan bir geliştirmedir ve temel olarak performans iyileştirmelerine odaklanır. Özellikle `GetBulkRequest` gibi yeni Protokol Veri Birimleri (PDU) ekleyerek büyük veri bloklarının daha verimli bir şekilde alınmasını sağlar. Ancak güvenlik açısından v1 ile tamamen aynıdır; hala şifrelenmemiş "community string" kullanır. İsmindeki "c" harfi, "community-based" (topluluk tabanlı) anlamına gelerek bu ortak güvenlik modelini vurgular.

#### **SNMPv3**

Önceki sürümlerin bariz güvenlik açıklarını gidermek için özel olarak geliştirilmiş modern ve güvenli standarttır. SNMPv3, sağlam bir güvenlik çerçevesi sunar:

* **Kullanıcı Tabanlı Güvenlik Modeli (USM):** “Community string” yapısını, kullanıcı adları ile değiştirir. Bu, her kullanıcı için ayrı kimlik bilgileri tanımlanmasına ve daha granüler erişim kontrolüne olanak tanır.
* **Güvenlik Seviyeleri:** SNMPv3, üç farklı güvenlik seviyesi sunar:  
  `noAuthNoPriv` (Kimlik Doğrulama Yok, Gizlilik Yok): Kimlik doğrulama veya şifreleme sağlamaz. İşlevsel olarak v1/v2c'ye benzer ancak bir kullanıcı adı gerektirir. Hiçbir güvenlik avantajı sunmadığı ve performans maliyeti olduğu için genellikle önerilmez.  
  `authNoPriv` (Kimlik Doğrulama Var, Gizlilik Yok): Mesajların geçerli bir kaynaktan geldiğini ve değiştirilmediğini doğrulamak için MD5 veya SHA gibi özetleme (hashing) algoritmaları kullanarak mesaj bütünlüğü ve kimlik doğrulama sağlar. Ancak mesajın içeriği (veri yükü) şifrelenmez.  
  `authPriv` (Kimlik Doğrulama Var, Gizlilik Var): En yüksek güvenlik seviyesidir. Hem kimlik doğrulama (MD5/SHA) sağlar hem de DES, 3DES veya AES gibi algoritmalar kullanarak tüm SNMP mesaj yükünü şifreler, böylece verilerin gizliliğini garanti eder.
* **Görünüm Tabanlı Erişim Kontrol Modeli (VACM):** Yöneticilerin, belirli bir kullanıcının MIB ağacının hangi bölümlerine erişebileceğini (sadece okuma veya okuma/yazma) hassas bir şekilde tanımlamasına olanak tanır.

#### **Protokol Veri Birimleri (PDU) ve Operasyonlar**

* **Temel PDU’lar (v1):** `GetRequest`, `GetNextRequest`, `SetRequest`, `Response`, `Trap`.
* **v2c Eklemeleri:** `GetBulkRequest` (büyük veri bloklarını verimli bir şekilde almak için) ve `InformRequest` (yöneticinin bildirimi aldığını teyit eden, onaylanmış bir trap).
* **v3 Eklemeleri:** `Report` PDU'su, güvenlik modeliyle ilgili mesajlaşma için kullanılır.

SNMPv2c ve SNMPv3 arasındaki seçim, yalnızca teknik bir tercih değil, aynı zamanda bir kuruluşun genel güvenlik olgunluğunun ve felsefesinin bir yansımasıdır. SNMPv1/v2c’nin kimlik bilgilerini ve verileri ağ üzerinden açık metin olarak ilettiği gerçeği, modern ağlarda kabul edilemez bir güvenlik açığıdır. SNMPv3, bu açıkları kapatmak için kimlik doğrulama ve şifreleme sunar. Ancak, v3'ün yapılandırılması “oldukça karmaşık” olup, izlenen cihazlarda ek bir teknik yük ve performans (CPU/bellek) maliyeti getirir. Bu durum, basitlik ve performans (v2c) ile güvenlik ve karmaşıklık (v3) arasında doğrudan bir denge kurma zorunluluğu yaratır. Bu nedenle, bir kuruluşun bu konudaki kararı, risk iştahını ortaya koyar. Dağıtım kolaylığını yönetim trafiğinin güvenliğine tercih eden bir şirket, v2c’yi erişim kontrol listeleri (ACL’ler) ile birleştirerek “yeterince iyi” bir önlem olarak görebilir. Sıkı uyumluluk gereksinimleri olan veya olgun bir güvenlik programına sahip bir kuruluş ise, kimlik bilgisi hırsızlığı veya veri manipülasyonu riskini azaltmak için operasyonel ek yükü kabul ederek v3'ün `authPriv` seviyesini zorunlu kılacaktır. Bu, kuruluşun iç tehditleri ve ağ içi dinlemeyi ne kadar ciddiye aldığını gösterir ve sıfır güven (zero-trust) ağına geçişin bir göstergesi olarak kabul edilebilir.

![](https://cdn-images-1.medium.com/max/800/1*psfUsG7oSQeQYJHqnwtiNg.png)

SNMP Sürümlerinin Karşılaştırmalı Analizi (v1, v2c, v3)

---

### Bölüm 2: Trafik Akış Analizi — Ağ Konuşmalarını Anlamak

Bu bölüm, cihaz merkezli izlemeden trafik merkezli analize geçerek, ağ üzerinde kimin kiminle konuştuğunu ortaya çıkaran protokolleri inceler.

#### 2.1. NetFlow: Akış Muhasebesi için Fiili Standart

Cisco tarafından geliştirilen NetFlow, bir arayüze giren veya çıkan IP trafiği hakkında meta veri toplamak için kullanılan bir protokoldür. Paketlerin içeriğini (payload) değil, yalnızca meta verilerini yakalar. Bu özellik, onu tam paket yakalamadan (full packet capture) çok daha az kaynak yoğun hale getirir.

Üç temel bileşenden oluşur :

1. **Exporter (Dışa Aktarıcı):** Paketleri gözlemleyen, onları “akışlar” (flows) halinde toplayan ve akış kayıtlarını dışa aktaran NetFlow özellikli bir cihazdır (yönlendirici, anahtar, güvenlik duvarı).
2. **Collector (Toplayıcı):** Dışa aktarıcılardan UDP üzerinden gönderilen akış kayıtlarını alan, işleyen ve depolayan bir sunucudur.
3. **Analyzer (Analizci):** Toplanan verileri işleyerek trafik modelleri, bant genişliği kullanımı ve potansiyel güvenlik sorunları hakkında insanlar tarafından okunabilir grafikler, raporlar ve uyarılar üreten yazılımdır.

**“Akış” Kaydı:** Bir akış, ortak özellikleri paylaşan tek yönlü bir paket dizisidir. Klasik “5-tuple” (beşli), bir akışı benzersiz şekilde tanımlar: Kaynak IP, Hedef IP, Kaynak Port, Hedef Port ve Katman 3 Protokolü. NetFlow v9 ve onun IETF standardı olan ardılı IPFIX (NetFlow v10), MAC adresleri ve VLAN ID’leri gibi Katman 2 bilgilerini de içeren çok daha fazla alanı dışa aktarabilen şablon tabanlı bir model kullanır.

Akışlar, dışa aktarıcının önbelleğinden belirli koşullar altında dışa aktarılır: belirli bir süre (genellikle 15 saniye) boyunca pasif kaldıklarında (inactive timeout), çok uzun süre aktif kaldıklarında (active timeout) veya bir TCP bayrağı (FIN, RST) oturumun sona erdiğini belirttiğinde.

#### 2.2. sFlow: Yüksek Hızlı Ağlar için İstatistiksel Görünürlük

sFlow (Sampled Flow), yüksek hızlı ağları izlemek için endüstri standardı, çok satıcılı bir teknolojidir. NetFlow’dan farklı olarak sFlow, durum bilgisi tutmaz (stateless) ve istatistiksel örneklemeye dayanır.

**İkili Örnekleme Mekanizması:**

1. **Paket Örnekleme (Flow Sampling):** sFlow ajanı, bir arayüzdeki her N paketten 1'ini rastgele örnekler. Daha sonra örneklenen paketin başlığını (genellikle ilk 64–128 byte) dışa aktarır. Bu, MAC, VLAN ve MPLS bilgileri de dahil olmak üzere Katman 2'den Katman 7'ye kadar görünürlük sağlar. Örnekleme oranı (örneğin, 4000'de 1) yapılandırılabilir.
2. **Sayaç Örnekleme (Counter Sampling):** sFlow ajanı, periyodik olarak (örneğin, her 20–30 saniyede bir) arayüz sayaçlarını sorgular ve bu istatistikleri (toplam paket, byte, hata sayısı) toplayıcıya dışa aktarır. Bu, genel arayüz kullanımı hakkında sürekli ve düşük ek yüklü bir görünüm sağlar.

NetFlow’dan daha basittir. Ağ cihazının donanımına (genellikle CPU yükünü azaltmak için özel bir yonga üzerine) gömülü bir **sFlow Ajanı** ve UDP datagramlarını (genellikle 6343 numaralı port üzerinden) alan bir **sFlow Toplayıcısı**’ndan oluşur.

NetFlow ve sFlow arasındaki temel fark yalnızca teknik (durum bilgili/durum bilgisi olmayan, %100/örneklenmiş) değil, aynı zamanda felsefidir. NetFlow, temel olarak bir *muhasebe* protokolüdür; faturalandırma, güvenlik adli analizi ve hassas kapasite planlaması için *her* konuşmayı izlemek üzere tasarlanmıştır. sFlow ise bir *gözlem* protokolüdür; mutlak hassasiyet yerine düşük ek yük ve ölçeklenebilirliğe öncelik vererek ağ genelindeki davranışın gerçek zamanlı, istatistiksel olarak temsili bir anlık görüntüsünü sağlamak üzere tasarlanmıştır. NetFlow, her akışı durum bilgisiyle izleyerek her biri için bir kayıt oluşturur. Bu, kullanım tabanlı faturalandırma veya bir güvenlik ihlalinden sonra ayrıntılı adli analiz gibi eksiksiz bir geçmiş kaydı gerektiren kullanım durumları için neredeyse mükemmel bir doğruluk sağlar. Buna karşılık sFlow, durum bilgisi tutmaz ve rastgele örnekleme kullanır. Bu, her kısa ömürlü veya düşük hacimli akışı göreceğini garanti edemeyeceği anlamına gelir. Amacı her baytı saymak değil, her akışı izlemenin cihazın CPU ve belleği için engelleyici derecede pahalı olacağı yüksek hızlı (10G, 40G, 100G) bağlantılarda neler olduğuna dair ölçeklenebilir, gerçek zamanlı bir görünüm sağlamaktır. Bu durum, görünürlükte de bir fark yaratır. NetFlow doğası gereği IP merkezlidir (L3/L4) , sFlow’un paket örneklemesi ise gerçek paket başlığını dışa aktardığı için doğal olarak L2-L7 görünürlüğü sağlar. Sonuç olarak, protokol seçimi tamamen izleme hedefine bağlıdır. Bir veri sızıntısının tam yolunu izlemesi gereken bir güvenlik ekibi için örneklenmemiş NetFlow/IPFIX üstündür. Büyük bir veri merkezi yapısında tıkanıklığa neden olan en önemli uygulamaları hızla belirlemesi gereken bir ağ operatörü için sFlow’un düşük ek yüklü, gerçek zamanlı doğası daha uygundur.

Aşağıdaki tablo, bu iki kritik akış protokolü arasındaki genellikle karıştırılan farkları netleştirmekte ve mühendislerin kendi özel kullanım durumları ve ağ ortamları için doğru teknolojiyi seçmelerini sağlamaktadır.

![](https://cdn-images-1.medium.com/max/800/1*Fn_jt2stbWxL_YVnRuYbnQ.png)

Akış Tabanlı İzleme Protokolleri: NetFlow vs. sFlow

---

### Bölüm 3: Merkezi İzleme Platformları: Karşılaştırmalı Bir İnceleme

Bu bölüm, SNMP ve NetFlow/sFlow gibi protokollerden gelen verileri tüketerek birleşik bir izleme deneyimi sunan lider platformları değerlendirmektedir. Odak noktası mimari farklılıklar, kullanım kolaylığı ve genişletilebilirliktir.

#### 3.1. Nagios: Açık Kaynak İzlemenin Duayeni

* **Mimari:** Güçlü **Nagios Core** motoru etrafında inşa edilmiştir. Bu motor, kontrollerin zamanlanması, yürütülmesi ve olayların işlenmesinden sorumludur. **Nagios XI**, Core üzerine inşa edilmiş ticari kurumsal sürümdür ve yönetimi basitleştirmek için web tabanlı bir GUI, panolar, raporlama ve yapılandırma sihirbazları ekler.
* **İzleme Modeli:** Geniş bir **eklenti (plugin)** ekosistemine dayanır. Core motoru, basitçe bir eklenti betiğini çalıştırır ve durumunu (OK, Warning, Critical, Unknown) belirlemek için betiğin çıkış kodunu yorumlar. Bu, onu inanılmaz derecede esnek kılar.
* **Yapılandırma:** Nagios Core, metin tabanlı dosyalar aracılığıyla yapılandırılır. Bu, otomasyon için güçlü olsa da dik bir öğrenme eğrisine sahiptir. Nagios XI, bu yapılandırmayı yönetmek için bir web arayüzü sunarak, doğrudan dosya manipülasyonu yerine kullanım kolaylığına ihtiyaç duyan kurumsal kullanıcıları hedefler.
* **Hedef Kitle:** Core, komut satırına hakim teknik uzmanlar ve hobi amaçlı kullanıcılar için uygundur. XI ise raporlama, pano ve daha az teknik personel için basitleştirilmiş yönetim ihtiyacı duyan işletmeler içindir.

#### 3.2. Zabbix: Hepsi Bir Arada Kurumsal Çözüm

* **Mimari:** Verileri depolayan ve uyarıları yöneten merkezi bir **Zabbix Sunucusu**’na sahiptir. Dağıtık ortamlar için, verileri yerel olarak toplamak ve sunucuya iletmek üzere **Zabbix Proxy**’leri dağıtılabilir. Bu, sunucu üzerindeki yükü azaltır ve güvenlik duvarlarının arkasındaki izlemeyi mümkün kılar. Veriler, **Zabbix Ajanları** (pasif veya aktif kontroller) veya SNMP, IPMI gibi ajansız yöntemlerle toplanır.
* **Temel Özellikler:** Güçlü otomatik keşif yetenekleri, birçok ana bilgisayara kontrolleri dağıtmak için güçlü bir şablonlama sistemi ve proxy’ler için yüksek erişilebilirlik/yük dengeleme (Zabbix 7.0 ile tanıtıldı) özelliklerine sahiptir. Esnekliği ve neredeyse her şeyi izleyebilme yeteneği ile tanınır.
* **Kullanım Kolaylığı:** Kapsamlı özellik seti ve özel terminolojisi nedeniyle kurulumu ve öğrenmesi karmaşık olabilir. Web arayüzü güçlüdür ancak rakiplerine göre daha az sezgisel olabilir.

#### 3.3. PRTG Network Monitor: Kullanıcı Dostu, Sensör Tabanlı Araç

* **Mimari:** Web sunucusu, veri depolama ve bildirim motorunu içeren bir **Core Server** (bir Windows hizmeti) ve asıl izlemeyi gerçekleştiren bir veya daha fazla **Probe**’dan oluşur. Core Server ile birlikte her zaman bir **Local Probe** kurulur. Farklı ağ segmentlerindeki veya müşteri sahalarındaki uzak kaynakları izlemek ve verileri SSL/TLS üzerinden güvenli bir şekilde geri göndermek için **Remote Probe**’lar kurulabilir.
* **“Sensör” Kavramı:** Bu, PRTG’de izlemenin ve lisanslamanın temel birimidir. Bir sensör, bir cihazın tek bir yönünü izler; örneğin bir sunucunun CPU yükü, bir anahtar portunun trafiği veya bir PING testi. Çoğu cihaz, kapsamlı izleme için 5–10 sensör gerektirir.
* **Lisanslama:** Lisanslama, cihaz sayısına göre değil, tamamen sensör sayısına göre yapılır. Bu esneklik sağlar ancak dikkatli planlama gerektirir. PRTG, 100 sensörlük ücretsiz bir sürüme dönüşen 30 günlük ücretsiz bir deneme sürümü ve 500 sensör ve üzeri için ticari lisanslar sunar.
* **Kullanım Kolaylığı:** PRTG, net bir arayüz, yardımcı kurulum sihirbazları ve önceden yapılandırılmış sensörlerle geniş çapta kullanıcı dostu olarak kabul edilir. Bu da onu KOBİ’ler veya derin izleme uzmanlığı olmayan ekipler için güçlü bir seçenek haline getirir.

Nagios, Zabbix ve PRTG arasındaki seçim, “hangisinin en iyi olduğu” ile ilgili değil, üç temel özellik arasındaki bir dengeyi yönetmekle ilgilidir:

1. **Nihai Esneklik (Nagios Core):** Kullanılabilirlik pahasına ve önemli ölçüde “kendin yap” çabası gerektirir.
2. **Hepsi Bir Arada Güç (Zabbix):** Başlangıçtaki karmaşıklık pahasına.
3. **Basitlik ve Kullanılabilirlik (PRTG):** Ticari ve yalnızca Windows tabanlı bir ürün olma pahasına.

Nagios Core ücretsiz ve açık kaynaklıdır ve eklenti mimarisi sayesinde her şeyi yapacak şekilde genişletilebilir. Ancak derin teknik bilgi ve manuel yapılandırma dosyası düzenlemesi gerektirir. Bu, onu “yüksek esneklik, düşük kullanılabilirlik” köşesine yerleştirir. Zabbix de ücretsiz ve açık kaynaklıdır ve temel işlevsellik için harici eklentilere dayanmadan kutudan çıktığı gibi geniş bir özellik yelpazesi (otomatik keşif, şablonlar, proxy mimarisi) sunar. Bu, onu daha çok “hepsi bir arada” bir çözüm yapar, ancak geniş seçenekleri dik bir öğrenme eğrisi yaratır. Bu, onu ortada, yüksek güç sunan ancak bir karmaşıklık engeli olan bir konuma yerleştirir. PRTG, kullanım kolaylığına net bir şekilde odaklanan ticari bir üründür. Sensör tabanlı modeli ve cilalı GUI’si, kullanıcıların hızla izlemeye başlaması için tasarlanmıştır. Ancak bu, parasal bir maliyetle gelir ve çekirdek sunucusu Windows platformuyla sınırlıdır , bu da bazı ortamlar için bir engel olabilir. Bu, onu “yüksek kullanılabilirlik, yüksek ticari maliyet” köşesine yerleştirir. Sonuç olarak, bir kuruluşun seçimi stratejiktir. Bir startup veya Linux uzmanlarından oluşan bir ekip, paradan tasarruf etmek ve teknik becerilerinden yararlanmak için Nagios Core veya Zabbix’i seçebilir. Karma bir ortama ve özel bir izleme ekibine sahip büyük bir kuruluş, gücü ve ölçeklenebilirliği için Zabbix’i seçebilir. Ağırlıklı olarak Windows ortamına sahip ve hızlı sonuçlara ihtiyaç duyan küçük ve orta ölçekli bir işletme, lisans maliyeti yerine zaman tasarrufunu değerlendirerek PRTG’yi seçebilir.

Aşağıdaki tablo, kuruluşların kendi özel teknik gereksinimlerine, bütçelerine ve ekip becerilerine göre bilinçli bir karar vermelerine yardımcı olmak amacıyla üç lider izleme platformunun doğrudan, özellik bazında bir karşılaştırmasını sunmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*8hiUXuINrhx_sc7cJlTO-A.png)

İzleme Platformlarının Özellik Matrisi (Nagios vs. Zabbix vs. PRTG)

---

### Bölüm 4: Ağ Otomasyonu için Betik Yazımı (Scripting)

Betik yazımı, ağ otomasyonunun temel taşıdır. Tekrarlayan görevleri otomatikleştirmek, yapılandırma yedekleri almak veya cihazlardan operasyonel veri toplamak için güçlü bir yöntemdir.

#### 4.1. Python: Ağ Otomasyonunun Fiili Standardı

Python, okunabilir sözdizimi, geniş standart kütüphanesi ve ağ görevleri için özel olarak tasarlanmış zengin ekosistemi sayesinde ağ otomasyonu için en popüler dil haline gelmiştir.

* **Paramiko:** Python’da SSHv2 protokolünü uygulayan düşük seviyeli bir kütüphanedir. Ağ cihazlarına SSH üzerinden bağlanmak için temel işlevselliği sağlar, ancak cihazların komut satırı istemlerini (prompts) yönetmek, ayrıcalıklı moda (enable mode) geçmek ve komut çıktılarını beklemek gibi ağ cihazlarına özgü karmaşıklıkları doğrudan ele almaz. Bu görevlerin geliştirici tarafından manuel olarak kodlanması gerekir.
* **Netmiko:** Paramiko üzerine inşa edilmiş, ağ otomasyonu için özel olarak tasarlanmış bir kütüphanedir. Paramiko’nun karmaşıklıklarını soyutlayarak, ağ mühendislerinin minimum çabayla görevleri otomatikleştirmesine olanak tanır. Netmiko’nun temel avantajları şunlardır:  
  **Cihaz Desteği:** Cisco, Juniper, Arista, HP ve daha birçok farklı üreticinin cihaz türünü destekler. Her cihaz türü için özel olarak tasarlanmış sürücüler içerir.  
  **Basitleştirilmiş Etkileşim:** Cihaz istemlerini (prompt) otomatik olarak algılar, ayrıcalıklı moda geçişi (`secret` parametresi ile) yönetir ve komutların tamamlanmasını bekler.  
  **Sezgisel Metotlar:** `send_command()` ile komut göndermek ve `send_config_set()` ile yapılandırma komutları uygulamak gibi basit ve anlaşılır metotlar sunar.

**Örnek: Netmiko ile Cihazdan Bilgi Alma** Aşağıdaki Python betiği, Netmiko kullanarak bir Cisco IOS cihazına bağlanır, `show ip interface brief` komutunu çalıştırır ve çıktısını ekrana yazdırır :

```
from netmiko import ConnectHandler  
import logging  
  
# Detaylı loglama için ayar  
logging.basicConfig(filename='netmiko.log', level=logging.DEBUG)  
logger = logging.getLogger("netmiko")
```

* **NAPALM (Network Automation and Programmability Abstraction Layer with Multivendor support):** Farklı satıcıların cihazlarından yapılandırılmış veri almak için bir soyutlama katmanı sunar. NAPALM, `get_facts()` (cihaz bilgileri), `get_interfaces()` (arayüz durumu), `get_bgp_neighbors()` (BGP komşuları) gibi standartlaştırılmış fonksiyonlar aracılığıyla, cihazın işletim sisteminden bağımsız olarak tutarlı bir JSON çıktısı döndürür. Bu, çok satıcılı ortamlarda otomasyonu büyük ölçüde basitleştirir.

#### 4.2. Bash: Hızlı ve Basit Görevler için Evrensel Araç

Bash (Bourne-Again SHell), Linux ve macOS sistemlerinde standart olarak bulunan güçlü bir komut satırı kabuğudur. Basit, sıralı görevler için idealdir ve `ssh`, `scp`, `awk` gibi komut satırı araçlarıyla birleştirildiğinde etkili bir otomasyon aracı haline gelir.

**Örnek: Bash ile Cisco Cihaz Yapılandırmasını Yedekleme** Aşağıdaki Bash betiği, `sshpass` kullanarak bir Cisco anahtarının çalışan yapılandırmasını yedekler. `sshpass`, betik içinde SSH parolasını etkileşimli olmayan bir şekilde sağlamak için kullanılır.

```
#!/bin/bash
```

```
### Yapılandırma Bölümü ###  
DATE=$(date "+%Y-%m-%d")  
SWITCH_IP="172.16.177.61"  
HOSTNAME="sw1"  
SSH_USER="cisco"  
SSH_PASS="your_ssh_password"  
ENABLE_PASS="your_enable_password"  
BACKUP_DIR="/var/backups/switches"
```

```
# Yedekleme dizininin var olduğundan emin ol  
mkdir -p ${BACKUP_DIR}
```

```
# Yürütülecek Cisco komutları  
# 1. Ayrıcalıklı moda geç  
# 2. Terminal uzunluğunu sıfırla (sayfalama olmasın)  
# 3. Çalışan yapılandırmayı göster  
CMDS="enable\n${ENABLE_PASS}\nterminal length 0\nshow running-config\nexit"
```

```
echo "Creating config backup of ${HOSTNAME} (${SWITCH_IP})"
```

```
# sshpass ile cihaza bağlan ve komutları çalıştır  
# Çıktıyı temizle ve dosyaya yaz  
sshpass -p "${SSH_PASS}" ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SWITCH_IP} <<<- EOM  
${CMDS}  
EOM | tee "${BACKUP_DIR}/config-${DATE}-${HOSTNAME}.log"
```

```
echo "Backup for ${HOSTNAME} completed."
```

Bu betik, `sshpass`'ın yüklü olmasını gerektirir ve parolaları düz metin olarak içerdiği için güvenli ortamlarda dikkatli kullanılmalıdır. Daha güvenli yaklaşımlar, SSH anahtar tabanlı kimlik doğrulama veya parola yönetimi sistemlerini içerir.

#### 4.3. PowerShell: Windows Merkezli Ortamların Gücü

PowerShell, Windows ortamlarında ağ yönetimi ve otomasyonu için standart haline gelmiş bir komut satırı kabuğu ve betik dilidir. `cmdlet` adı verilen güçlü komutları ve.NET Framework ile derin entegrasyonu sayesinde, Windows tabanlı sistemler ve hizmetler üzerinde kapsamlı kontrol sağlar.

**Örnek: PowerShell ile Ağ Görevleri** PowerShell, ağ bağlantısını test etmek, ağ adaptörlerini yönetmek ve IP yapılandırmasını almak gibi görevler için yerleşik `cmdlet`'ler sunar.

```
# Birden fazla sunucuya bağlantıyı test etme  
$servers = "google.com", "bing.com", "192.168.1.1"  
foreach ($server in $servers) {  
    if (Test-Connection -ComputerName $server -Count 2 -Quiet) {  
        Write-Host "$server is reachable." -ForegroundColor Green  
    } else {  
        Write-Host "$server is NOT reachable." -ForegroundColor Red  
    }  
}  
  
# Yerel makinedeki tüm IP adreslerini listeleme  
Get-NetIPAddress -AddressFamily IPv4 | Select-Object IPAddress, InterfaceAlias  
  
# Belirli bir ağ adaptörünü devre dışı bırakma  
# Get-NetAdapter -Name "Ethernet" | Disable-NetAdapter -Confirm:$false  
  
# Uzak bir bilgisayardan IP yapılandırmasını alma
```

Bu örnekler, PowerShell’in ağ yöneticileri için ne kadar güçlü ve esnek bir araç olduğunu göstermektedir. `Test-Connection` (ping benzeri), `Get-NetIPAddress` ve `Get-NetAdapter` gibi `cmdlet`'ler, ağ sorunlarını gidermek ve envanter toplamak için yaygın olarak kullanılır.

---

### Bölüm 5: Yapılandırma Yönetimi ve Orkestrasyon

Betik yazımı tekil görevler için harika olsa da, büyük ölçekli altyapıları yönetmek için daha yapılandırılmış araçlar gereklidir. Yapılandırma yönetimi araçları, yüzlerce veya binlerce cihazın durumunu tutarlı bir şekilde yönetmeyi, yapılandırma sapmalarını (configuration drift) önlemeyi ve değişiklikleri güvenilir bir şekilde uygulamayı sağlar.

#### 5.1. Ansible: Aracısız ve Basit Yapılandırma Yönetimi

Ansible, basitliği, aracısız (agentless) mimarisi ve YAML tabanlı kolay okunabilir sözdizimi sayesinde ağ otomasyonunda hızla popülerlik kazanmıştır.

* **Control Node (Kontrol Düğümü):** Ansible’ın kurulu olduğu ve `playbook`'ların çalıştırıldığı makinedir. Bu, bir mühendisin dizüstü bilgisayarı veya merkezi bir sunucu olabilir.
* **Managed Nodes (Yönetilen Düğümler):** Ansible tarafından yönetilen hedef cihazlardır (sunucular, ağ anahtarları vb.).
* **Inventory (Envanter):** Yönetilen düğümlerin bir listesidir. Bu liste, statik bir INI veya YAML dosyası olabileceği gibi, dinamik olarak da oluşturulabilir. Envanter, cihazları gruplara ayırmaya ve grup bazında değişkenler atamaya olanak tanır.
* **Playbook:** YAML formatında yazılmış, bir dizi görevi (task) tanımlayan dosyalardır. Bir `playbook`, hangi ana bilgisayar gruplarına (`hosts`) hangi görevlerin uygulanacağını belirtir.
* **Task (Görev):** Bir `playbook` içindeki tek bir eylemdir. Her görev, bir **modül** çağrısıdır.
* **Module (Modül):** Ansible’ın asıl işi yapan birimleridir. Örneğin, `ios_config` modülü Cisco IOS cihazlarında yapılandırma yapmak için, `package` modülü ise bir sunucuya yazılım paketi kurmak için kullanılır.

**Örnek: Ansible Playbook ile VLAN Yapılandırması** Bu `playbook`, envanterdeki `switches` grubunda yer alan tüm Cisco cihazlarında VLAN 20'yi yapılandırır.

* Envanter Dosyası (`inventory.ini`):

```
[switches]  
switch1 ansible_host=192.168.1.10  
switch2 ansible_host=192.168.1.11  
  
[switches:vars]  
ansible_network_os=cisco.ios.ios  
ansible_user=admin  
ansible_password=your_password  
ansible_connection=network_cli  
ansible_become=yes  
ansible_become_method=enable
```

* **Playbook Dosyası (**`configure_vlan.yml`**):**

```
---  
- name: Configure VLANs on Core Switches  
  hosts: switches  
  gather_facts: false  
  
  tasks:  
    - name: Create and name VLAN 20  
      cisco.ios.ios_config:  
        lines:  
          - vlan 20  
          - name Engineering
```

Bu `playbook` çalıştırıldığında, Ansible envanterdeki her bir anahtara SSH ile bağlanır ve `ios_config` modülünü kullanarak belirtilen VLAN'ı oluşturur. Bu yaklaşım, aynı değişikliği onlarca cihaza manuel olarak uygulamaya kıyasla çok daha hızlı, tutarlı ve daha az hataya açıktır.

#### 5.2. Terraform: Kod Olarak Altyapı (Infrastructure as Code)

Terraform, HashiCorp tarafından geliştirilen ve altyapıyı bildirimsel (declarative) bir yaklaşımla yöneten bir IaC aracıdır. “Ne istediğinizi” tanımlarsınız ve Terraform, bu hedefe ulaşmak için gerekli adımları planlar ve uygular.

* **Provider (Sağlayıcı):** Terraform’un etkileşimde bulunacağı altyapı platformu için bir eklentidir (örneğin, AWS, Azure, Google Cloud, VMware).
* **Resource (Kaynak):** Yönetilecek bir altyapı bileşenidir (örneğin, bir AWS VPC, bir Azure sanal makinesi, bir DNS kaydı).
* **State File (Durum Dosyası):** Terraform tarafından yönetilen altyapının mevcut durumunu içeren bir JSON dosyasıdır. Terraform, bir sonraki çalıştırmada neyin oluşturulması, güncellenmesi veya silinmesi gerektiğini belirlemek için bu dosyayı konfigürasyon dosyalarıyla karşılaştırır.

**Örnek: Terraform ile AWS’de VPC Oluşturma** Aşağıdaki `.tf` konfigürasyon dosyası, AWS'de basit bir Sanal Özel Bulut (VPC) oluşturur.

```
# AWS sağlayıcısını yapılandır  
provider "aws" {  
  region = "us-east-1"  
}
```

```
# Bir VPC kaynağı tanımla  
resource "aws_vpc" "main_vpc" {  
  cidr_block       = "10.0.0.0/16"  
  instance_tenancy = "default"
```

```
tags = {  
    Name = "MainVPC"  
  }  
}
```

```
# Oluşturulan VPC'nin ID'sini çıktı olarak ver  
output "vpc_id" {  
  value = aws_vpc.main_vpc.id  
}
```

Bu konfigürasyonu uygulamak için `terraform init`, `terraform plan` ve `terraform apply` komutları kullanılır. Terraform, mevcut durumu (başlangıçta boş) okur, istenen durumu (bir VPC) konfigürasyondan anlar ve aradaki farkı kapatmak için AWS API'sine gerekli çağrıları yapar.

#### 5.3. Ansible ve Terraform: İşbirliği mi, Rekabet mi?

Ansible ve Terraform genellikle rakip olarak görülse de, aslında farklı sorunları çözerler ve birbirlerini tamamlarlar.

* **Terraform, altyapıyı *sağlamak* (provisioning) ve yaşam döngüsünü yönetmek için tasarlanmıştır.** Bir bulut ortamında VPC’leri, alt ağları, sanal makineleri ve güvenlik gruplarını oluşturmak, güncellemek ve yok etmek için idealdir.
* **Ansible, mevcut altyapı üzerinde *yapılandırma yönetimi* (configuration management) ve uygulama dağıtımı yapmak için tasarlanmıştır.** Terraform tarafından oluşturulan bir sanal makineye yazılım yüklemek, hizmetleri yapılandırmak veya bir ağ cihazında VLAN’ları ayarlamak için kullanılır.

Yaygın bir iş akışı, Terraform’un temel altyapıyı (örneğin, sanal makineler) oluşturması ve ardından Ansible’ı çağırarak bu makinelerin yapılandırılmasını sağlamasıdır.

---

### Bölüm 6: Otomasyonun CI/CD Süreçlerine Entegrasyonu (NetDevOps)

NetDevOps, DevOps ilkelerini ve uygulamalarını ağ altyapısına uygulayan bir felsefedir. Temel amacı, ağ değişikliklerini yazılım geliştirme süreçlerine benzer şekilde, otomatikleştirilmiş, test edilmiş ve güvenilir bir şekilde dağıtmaktır. Bu, CI/CD (Sürekli Entegrasyon/Sürekli Dağıtım) işlem hatları aracılığıyla gerçekleştirilir.

#### **NetDevOps CI/CD İş Akışı**

* **Kodlama ve Taahhüt (Commit):** Ağ mühendisi, ağ yapılandırmasını (örneğin, bir Ansible `playbook` veya bir cihaz konfigürasyon şablonu) kod olarak değiştirir ve bu değişikliği bir Git deposuna gönderir (push).
* **Sürekli Entegrasyon (CI):  
  1-Linting ve Doğrulama:** Değişiklik Git’e gönderildiğinde, CI sunucusu (örneğin, Jenkins) otomatik olarak bir işlem hattını tetikler. İlk adım, kodun sözdizimsel olarak doğru olup olmadığını kontrol etmektir (linting).  
  2-**Test Ortamında Dağıtım:** Doğrulanan değişiklik, Cisco CML veya EVE-NG gibi sanal bir laboratuvar ortamına otomatik olarak dağıtılır.  
  3-**Otomatik Test:** pyATS gibi test çerçeveleri, değişikliğin ağın durumunu (örneğin, yönlendirme tabloları, arayüz durumu) beklendiği gibi değiştirdiğini ve mevcut işlevselliği bozmadığını doğrulamak için bir dizi test çalıştırır.
* **Sürekli Dağıtım/Teslimat (CD):  
  1-Onay:** Tüm testler başarıyla geçtiğinde, değişiklik üretim ortamına dağıtılmak üzere onaylanır. Bu adım manuel bir onay gerektirebilir (Sürekli Teslimat) veya tamamen otomatik olabilir (Sürekli Dağıtım).  
  2-**Üretime Dağıtım:** Onaylanan değişiklik, Ansible veya başka bir otomasyon aracı kullanılarak üretim ağına uygulanır.  
  3-**Dağıtım Sonrası Doğrulama:** Değişiklik uygulandıktan sonra, ağın beklendiği gibi çalıştığından emin olmak için son bir dizi doğrulama testi çalıştırılır.

Bu yaklaşım, ağ değişikliklerinin hızını, güvenilirliğini ve tutarlılığını önemli ölçüde artırır, manuel hataları azaltır ve ağ mühendislerinin daha stratejik görevlere odaklanmasını sağlar.

---

### Bölüm 7: Log Yönetimi ve SIEM Entegrasyonu

Ağdaki her cihaz, sunucu ve uygulama, operasyonel durumları, hataları ve güvenlik olayları hakkında değerli bilgiler içeren loglar üretir. Bu logları etkili bir şekilde yönetmek, ağın sağlığını anlamak ve güvenlik tehditlerini tespit etmek için hayati önem taşır.

#### 7.1. Log Toplama, Ayrıştırma (Parsing) ve Analiz

#### **Log Yönetim Yaşam Döngüsü:**

* **Toplama (Collection):** Ağdaki tüm kaynaklardan (yönlendiriciler, güvenlik duvarları, sunucular, uygulamalar) logların merkezi bir konumda toplanmasıdır. Syslog, bu amaçla en yaygın kullanılan protokoldür.
* **Ayrıştırma (Parsing):** Ham, yapılandırılmamış log mesajlarının, analiz edilebilecek yapılandırılmış alanlara (örneğin, zaman damgası, kaynak IP, kullanıcı adı, olay mesajı) ayrılması işlemidir.
* **Normalleştirme (Normalization):** Farklı kaynaklardan ve formatlardan gelen log verilerinin ortak bir şemaya dönüştürülmesidir. Bu, farklı cihazlardan gelen olayların birbiriyle ilişkilendirilmesini (korelasyon) mümkün kılar.
* **Analiz ve Korelasyon:** Yapılandırılmış ve normalleştirilmiş log verilerinin, anormallikleri, eğilimleri ve potansiyel güvenlik tehditlerini belirlemek için analiz edilmesidir.

#### **Regex ile Log Ayrıştırma**

Düzenli İfadeler (Regex), yapılandırılmamış metin verilerinden belirli desenleri eşleştirmek ve ayıklamak için güçlü bir araçtır. Log ayrıştırmada, bir log mesajındaki `hostname`, `process`, `message` gibi alanları çıkarmak için yaygın olarak kullanılır.

**Örnek: Syslog Mesajı için Regex** Aşağıdaki gibi bir syslog mesajı düşünün: `Mar 10 12:34:56 my-firewall ftpd: FTP session closed.`

Bu mesajdan ilgili alanları ayıklamak için kullanılabilecek bir Regex ifadesi şöyledir:

`^(?P<timestamp>\w{3}\s+\d{1,2}\s+\d{2}:\d{2}:\d{2})\s+(?P<hostname>\S+)\s+(?P<process_name>\w+)(?:\[(?P<pid>\d+)\])?:\s+(?P<message>.*)$`

Bu ifade, adlandırılmış yakalama grupları (`?P<group_name>`) kullanarak mesajı aşağıdaki gibi yapılandırılmış alanlara ayırır :

* `timestamp`: `Mar 10 12:34:56`
* `hostname`: `my-firewall`
* `process_name`: `ftpd`
* `pid`: `2116`
* `message`: `FTP session closed.`

#### 7.2. SIEM Olay Korelasyonu ve Alarm Yönetimi

Güvenlik Bilgileri ve Olay Yönetimi (SIEM) sistemleri, kuruluşun BT altyapısındaki çeşitli kaynaklardan gelen log verilerini toplar, birleştirir ve analiz eder. SIEM’in temel gücü, tekil olarak anlamsız görünen olayları birleştirerek anlamlı güvenlik tehditlerini tespit etme yeteneği olan **olay korelasyonudur**.

#### **Korelasyon Nasıl Çalışır?**

Bir korelasyon kuralı, belirli bir zaman diliminde, belirli bir sırada veya mantıksal bir ilişki içinde meydana gelen bir dizi olayı tanımlar. SIEM, gelen tüm olayları bu kurallara göre sürekli olarak değerlendirir ve bir kural eşleştiğinde bir uyarı (alarm) oluşturur.

#### **Örnek Ağ Güvenliği Korelasyon Kuralları:**

* **Kaba Kuvvet (Brute Force) Saldırısı Tespiti:** Bu kural, bir saldırganın bir hesaba erişim kazanmaya çalıştığını gösterebilir.  
  **Kural Mantığı:** “Eğer aynı kaynak IP adresinden aynı hedef sisteme 5 dakika içinde 20'den fazla başarısız oturum açma denemesi olursa **VE** bu olayları aynı kaynak IP’den başarılı bir oturum açma takip ederse, yüksek öncelikli bir alarm oluştur.”. Bu kural, bir kullanıcının şifresini unutmasından kaynaklanan normal başarısız denemeleri, başarılı bir girişle sonuçlanan hedefli bir saldırı girişiminden ayırmaya yardımcı olur.
* **Veri Sızdırma Tespiti:** Bu kural, içeriden bir tehdidin veya ele geçirilmiş bir hesabın hassas verileri ağ dışına aktarmaya çalıştığını gösterebilir.  
  **Kural Mantığı:** “Eğer bir kullanıcı, normal davranış temel çizgisinin (baseline) 3 standart sapma üzerinde bir veri miktarını ağ dışındaki bir hedefe transfer ederse **VE** bu olay, son 24 saat içinde o kullanıcının hesabında bir yetki yükseltme olayı (örneğin, yönetici grubuna eklenme) ile ilişkiliyse, kritik bir alarm oluştur.” Bu tür davranışsal ve durumsal korelasyon, tekil olayların gözden kaçırabileceği karmaşık tehditleri ortaya çıkarır.

#### 7.3. Olay Müdahalesi ve SOAR Entegrasyonu

Güvenlik Orkestrasyonu, Otomasyonu ve Yanıtı (SOAR) platformları, SIEM tarafından oluşturulan uyarılara yanıt verme sürecini otomatikleştirmek için tasarlanmıştır. SOAR, tekrarlayan, manuel müdahale adımlarını otomatikleştirerek güvenlik analistlerinin yükünü azaltır ve müdahale süresini (MTTR — Mean Time to Respond) önemli ölçüde kısaltır.

* **SOAR Playbook İş Akışı:** Bir SIEM uyarısı alındığında, SOAR platformu önceden tanımlanmış bir **playbook**’u (oyun kitabı) tetikler. “Zararlı yazılım tespiti” uyarısı için tipik bir `playbook` aşağıdaki adımları içerebilir :  
  **Zenginleştirme (Enrichment):** SOAR, uyarıdaki göstergeleri (IP adresleri, dosya karmaları, alan adları) alır ve bunları tehdit istihbarat platformları (örneğin, VirusTotal) ve dahili sistemlerle (örneğin, CMDB) karşılaştırarak ek bağlam toplar. Bu, uyarının ciddiyetini ve etkisini belirlemeye yardımcı olur.  
  **Kontrol Altına Alma (Containment):** Tehdit doğrulanırsa, SOAR otomatik olarak kontrol altına alma eylemlerini başlatır. Bu, ağ otomasyonunun kritik bir rol oynadığı yerdir. SOAR, EDR (Uç Nokta Tespiti ve Yanıtı) aracına etkilenen uç noktayı ağdan izole etmesi için komut verebilir veya güvenlik duvarına (firewall) kötü amaçlı IP adresine giden tüm trafiği engellemesi için bir kural eklemesini söyleyebilir.  
  **Yok Etme (Eradication):** Tehdit izole edildikten sonra, SOAR, EDR aracını kullanarak zararlı yazılımı uç noktadan kaldırmak veya etkilenen sistemi temiz bir imajdan yeniden kurmak gibi yok etme adımlarını tetikler.  
  **Kurtarma ve Raporlama (Recovery & Reporting):** Sistem temizlendikten sonra, SOAR sistemi normale döndürür (örneğin, ağ izolasyonunu kaldırır) ve olayın tüm adımlarını, bulguları ve alınan aksiyonları içeren ayrıntılı bir rapor oluşturur.

---

### Bölüm 8: Performans Yönetimi ve SLA Takibi

Ağ performansını proaktif olarak yönetmek, kullanıcı deneyimini sağlamak ve Hizmet Seviyesi Anlaşmalarına (SLA) uymak için kritik öneme sahiptir. Bu, temel performans metriklerini sürekli olarak ölçmeyi, analiz etmeyi ve hizmet kalitesini (QoS) yönetmeyi gerektirir.

#### 8.1. Paket Kaybı, Gecikme ve Jitter Ölçümü ve Analizi

Bu üç metrik, bir ağın performansını ve sağlığını anlamak için temel göstergelerdir.

* **Paket Kaybı (Packet Loss):** Gönderilen ancak hedefe ulaşamayan veri paketlerinin yüzdesidir. Yüksek paket kaybı, özellikle dosya aktarımlarında yeniden iletimlere ve gerçek zamanlı uygulamalarda (VoIP, video konferans) kalitenin düşmesine neden olur.
* **Gecikme (Latency):** Bir veri paketinin kaynaktan hedefe ulaşması için geçen süredir ve genellikle milisaniye (ms) cinsinden ölçülür. Yüksek gecikme, uygulamaların yavaş ve yanıtsız hissedilmesine neden olur.
* **Jitter:** Paketler arasındaki varış süresi gecikmesindeki değişimdir. Başka bir deyişle, gecikmenin tutarsızlığıdır. Yüksek jitter, VoIP ve video akışı gibi gerçek zamanlı iletişimde sesin kesik kesik gelmesine veya görüntünün donmasına neden olur, çünkü paketler düzensiz aralıklarla ulaşır.

#### **Ölçüm Araçları ve Yöntemleri:**

* **Ping:** Bir hedefe ICMP yankı istekleri göndererek gidiş-dönüş süresini (RTT — Round-Trip Time) ölçer ve böylece temel gecikme ve paket kaybı hakkında bilgi verir.
* **Traceroute (tracert):** Bir paketin hedefe ulaşana kadar geçtiği tüm yönlendiricileri (hop) listeler ve her atlamadaki gecikmeyi gösterir. Bu, gecikmenin ağın neresinde meydana geldiğini belirlemek için kullanışlıdır.
* **iPerf/jPerf:** İki nokta arasında maksimum TCP ve UDP bant genişliği performansını ölçmek için kullanılan bir araçtır. Ayrıca bant genişliği, gecikme, jitter ve paket kaybı hakkında ayrıntılı metrikler sağlayabilir.
* **Özel İzleme Araçları:** SolarWinds VNQM veya PRTG gibi araçlar, Cisco IP SLA gibi teknolojileri kullanarak bu metrikleri sürekli olarak izleyebilir, geçmiş verileri saklayabilir ve eşik aşıldığında uyarılar oluşturabilir.

#### 8.2. QoS Yapılandırması ve SLA Raporlama

Hizmet Kalitesi (QoS), ağ kaynaklarının (özellikle bant genişliği) farklı trafik türleri arasında adil ve öncelikli bir şekilde dağıtılmasını sağlayan mekanizmalar bütünüdür. Tıkanıklık anlarında, QoS, kritik uygulamaların (örneğin, sesli arama) daha az önemli trafik (örneğin, e-posta) tarafından boğulmamasını sağlar.

**DiffServ (Differentiated Services) Mimarisi:** Modern ağlarda en yaygın kullanılan QoS modelidir. DiffServ, trafiği sınıflara ayırır ve her sınıfa farklı bir hizmet seviyesi uygular.

* **Sınıflandırma ve İşaretleme (Classification and Marking):** Ağın kenarındaki yönlendiriciler, gelen paketleri inceler (örneğin, kaynak/hedef IP, port numarası, uygulama türü) ve onları bir sınıfa atar. Daha sonra, paketin IP başlığındaki 6-bitlik **Differentiated Services Field (DS field)** alanına bir **DSCP (Differentiated Services Code Point)** değeri yazarak paketi “işaretler”.
* **Per-Hop Behavior (PHB):** Ağ içindeki her yönlendirici, paketin DSCP değerine bakar ve ona göre bir iletme davranışı (PHB) uygular. Bu davranış, paketin hangi kuyruğa yerleştirileceğini, ne kadar bant genişliği alacağını ve tıkanıklık durumunda düşürülme olasılığını belirler.
* Yaygın DSCP Değerleri ve Anlamları:  
  1-**EF (Expedited Forwarding — Hızlandırılmış İletim — DSCP 46):** Düşük gecikme, düşük kayıp ve düşük jitter gerektiren trafik (örneğin, VoIP) için kullanılır. Genellikle en yüksek önceliğe sahip kuyruğa yerleştirilir.  
  2-**AF (Assured Forwarding — Güvenceli İletim):** Farklı öncelik seviyeleri ve düşürme olasılıkları sunan bir sınıflar ailesidir (örneğin, AF41, AF22). İş açısından kritik uygulamalar için kullanılır.  
  3-**CS (Class Selector):** Eski IP Precedence alanı ile geriye dönük uyumluluk için kullanılır.  
  4-**BE (Best Effort — En İyi Çaba — DSCP 0):** Varsayılan trafik sınıfıdır. Öncelikli değildir ve tıkanıklık durumunda ilk olarak bu paketler düşürülür.
* **SLA Raporlama:** Ağ izleme platformları, toplanan performans metriklerini (gecikme, jitter, paket kaybı, kullanılabilirlik) kullanarak Hizmet Seviyesi Anlaşmalarının (SLA) karşılanıp karşılanmadığını gösteren raporlar oluşturur. Bu raporlar, belirli bir hizmet için kararlaştırılan performans hedeflerine (örneğin, aylık %99.95 kullanılabilirlik, 50 ms’den az gecikme) uyulup uyulmadığını kanıtlamak için kullanılır ve hem BT departmanları hem de hizmet sağlayıcılar için kritik öneme sahiptir.

---

### Sonuç

Bu rapor, modern ağ yönetiminin üç temel direğini — görünürlük, otomasyon ve bütünleşik dayanıklılık — ayrıntılı bir şekilde incelemiştir. SNMP ile temel cihaz sağlığı izlemesinden, NetFlow ve sFlow ile karmaşık trafik akışlarının analizine; basit Bash betiklerinden Python, Ansible ve Terraform gibi güçlü otomasyon ve IaC araçlarına; ve son olarak log yönetimi, SIEM/SOAR entegrasyonu ve QoS ile performans yönetiminin birleştirilmesine kadar, ağ operasyonlarının reaktif bir disiplinden proaktif, programatik ve veri odaklı bir stratejiye nasıl dönüştüğü açıkça görülmektedir.

İncelenen teknolojiler ve metodolojiler, birbirinden bağımsız çözümler değil, birbirini tamamlayan ve güçlendiren bir ekosistemin parçalarıdır. Etkili otomasyon, yalnızca kapsamlı ve doğru izleme verileriyle mümkündür. Sağlam bir güvenlik duruşu, hem görünürlük hem de otomatik müdahale yetenekleri gerektirir. Yüksek performanslı bir ağ ise, hem proaktif izleme hem de otomasyonla yönetilen QoS politikalarıyla sağlanır.

Geleceğe bakıldığında, bu entegrasyonun daha da derinleşeceği açıktır. Makine öğrenimi ve yapay zeka (AIOps), anormallikleri daha akıllıca tespit etmek, sorunların temel nedenini otomatik olarak bulmak ve hatta kendi kendini iyileştiren eylemleri tetiklemek için izleme verilerini analiz edecektir. NetDevOps ve CI/CD işlem hatları, ağ değişikliklerini uygulama ve test etme standardı haline gelerek, altyapıyı uygulamalar kadar çevik hale getirecektir.

Nihai hedef, insan müdahalesinin yalnızca stratejik kararlar ve üst düzey niyetler (intent) için gerekli olduğu, büyük ölçüde **otonom bir ağdır**. Bu raporda ele alınan araçlar, protokoller ve felsefeler, bu vizyona ulaşmak için gereken temel yapı taşlarıdır. Bu teknolojilere hakim olan ağ profesyonelleri, yalnızca günümüzün karmaşık ağlarını yönetmekle kalmayacak, aynı zamanda geleceğin kendi kendini yöneten altyapılarını inşa etmede de öncü olacaklardır.