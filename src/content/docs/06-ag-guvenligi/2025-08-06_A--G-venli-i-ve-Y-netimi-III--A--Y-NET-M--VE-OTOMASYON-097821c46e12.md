# Ağ Güvenliği ve Yönetimi III: AĞ YÖNETİMİ VE OTOMASYON

---

### Ağ Güvenliği ve Yönetimi III: AĞ YÖNETİMİ VE OTOMASYON

![](https://cdn-images-1.medium.com/max/800/1*-Ly5E9MK-j1Q58Bvn6XnWQ.png)

### Giriş

Modern ağ altyapıları, dijital dönüşümün bel kemiğini oluşturarak, kurumların iş operasyonlarının sürekliliği, performansı ve güvenliği için hayati bir rol oynamaktadır. Bulut bilişim entegrasyonu, Nesnelerin İnterneti (IoT) cihazlarının yaygınlaşması ve dağıtık iş gücü modellerinin benimsenmesiyle birlikte ağlar, benzeri görülmemiş bir karmaşıklık ve ölçeğe ulaşmıştır. Bu dinamik ortamda, geleneksel manuel yönetim yaklaşımları yetersiz kalmakta; insan hatasına açık, yavaş ve ölçeklenemez olmaları nedeniyle iş hedeflerini karşılamada bir darboğaz oluşturmaktadır. Bu durum, ağ operasyonlarında köklü bir paradigma değişimini zorunlu kılmış, sistematik izleme ve programatik otomasyon yaklaşımlarına geçişi kaçınılmaz hale getirmiştir.

Bu bölüm, modern ağ operasyonlarının iki ana eksenini derinlemesine incelemektedir. Birinci eksen, bir ağı “gözlemleme” ve sağlığını anlama bilimi olan **Ağ Yönetimi ve İzleme**’dir. Bu başlık altında, çalışan bir ağın durumunu anlamak, performansını ölçmek ve olası sorunları tespit etmek için kullanılan temel çerçeveler, protokoller ve metodolojiler ele alınacaktır. İkinci eksen ise, bu gözlemlerden elde edilen bilgilere dayanarak ağı “kontrol etme” ve yönetme sanatı olan **Ağ Otomasyonu ve Programlanabilirlik**’tir. Bu başlık altında, ağ yönetiminin yazılım ve kod aracılığıyla yönetilen programatik bir disipline dönüşümü, bu dönüşümü mümkün kılan araçlar ve felsefeler incelenecektir. Bu iki konu, bir bütün olarak, ağ yönetiminin reaktif sorun çözümünden, proaktif ve öngörücü operasyonlara doğru evrimini temsil etmektedir.

---

### Ana Başlık 6: Ağ Yönetimi ve İzleme

Bu ana başlık, çalışan bir ağın durumunu anlamak, performansını ölçmek ve olası sorunları tespit etmek için kullanılan temel çerçeveleri, protokolleri ve metodolojileri derinlemesine inceleyecektir. Etkili izleme, ağın sadece çalışır durumda olmasını değil, aynı zamanda optimum performansta ve öngörülebilir bir şekilde çalışmasını sağlamanın temelini oluşturur.

### Alt Başlık 6.1: Ağ Yönetiminin Temel Çerçevesi: FCAPS Modeli

Ağ yönetiminin karmaşıklığını sistematik bir şekilde ele almak amacıyla Uluslararası Standardizasyon Örgütü (ISO) tarafından geliştirilen FCAPS modeli, uluslararası kabul görmüş standart bir çerçevedir.1 Bu model, ağ operasyonlarını beş temel işlevsel alana ayırarak, Ağ Yönetim Sistemleri (NMS — Network Management Systems) ve Operasyon Destek Sistemleri (OSS) için yapılandırılmış bir yaklaşım sunar ve ağ yöneticilerine kapsamlı bir yol haritası sağlar.1

#### 6.1.1. Hata (Fault), Yapılandırma (Configuration), Muhasebe (Accounting)

* **Fault (Hata) Yönetimi:** Temel amacı, ağ hizmetlerinin kullanılabilirliğini en üst düzeye çıkarmak için ağda meydana gelen hataları proaktif olarak tespit etmek, izole etmek, düzeltmek ve kaydetmektir.1 Bu süreç, ağ bileşenlerinden gelen SNMP trap’leri veya syslog mesajları gibi bildirimlerin sürekli izlenmesini (alarm surveillance), sorunun temel nedeninin analiz edilmesini ve düzeltici eylemlerin başlatılmasını içerir.1 Etkili hata yönetimi, ağ kesintilerini en aza indirerek hizmet sürekliliğini sağlar.
* **Configuration (Yapılandırma) Yönetimi:** Ağdaki tüm donanım ve yazılım bileşenlerinin envanterinin tutulması, yapılandırma bilgilerinin izlenmesi ve yönetilmesi süreçlerini kapsar.1 Ağ sorunlarının önemli bir kısmının yanlış yapılandırmalardan kaynaklandığı göz önüne alındığında, bu alan kritik bir öneme sahiptir. Cihaz keşfi, yapılandırma yedeklemesi, yapılan değişikliklerin takibi ve yapılandırmaların kurumsal standartlara uygunluğunun sağlanması gibi faaliyetleri içerir.1
* **Accounting (Muhasebe/Hesap) Yönetimi:** Ağ kaynaklarının kullanımını izleyerek, ölçerek ve raporlayarak kullanıcıları, departmanları veya iş birimlerini faturalandırmak için gerekli istatistikleri toplama işlevidir.1 Hangi kullanıcının ne kadar bant genişliği tükettiğini belirlemek ve maliyetleri adil bir şekilde paylaştırmak için kullanılır. Faturalandırmanın uygulanmadığı kurumsal ortamlarda bu kategori, kullanıcı hesaplarının, parolaların ve izinlerin yönetimi gibi görevleri içeren “Yönetim” (Administration) olarak da adlandırılabilir.1

#### 6.1.2. Performans (Performance) ve Güvenlik (Security)

* **Performance (Performans) Yönetimi:** Ağ performansının kabul edilebilir ve önceden tanımlanmış seviyelerde kalmasını sağlamayı hedefler.1 Bu, ağın mevcut verimliliğinin ölçülmesini ve gelecekteki ihtiyaçlara hazırlanmasını içerir. Verim (throughput), yanıt süreleri (gecikme), jitter ve paket kaybı gibi temel performans metriklerinin sürekli izlenmesini, potansiyel darboğazların proaktif olarak tespit edilmesini ve gelecekteki kapasite ihtiyaçlarının planlanmasını kapsar.
* **Security (Güvenlik) Yönetimi:** Ağdaki varlıklara erişimi kontrol etmeyi ve ağı iç ve dış tehditlere karşı korumayı amaçlar.1 Bu, ağ kimlik doğrulama, yetkilendirme mekanizmalarının yönetilmesini, güvenlik duvarları ve saldırı tespit/önleme sistemleri gibi güvenlik cihazlarının yapılandırılmasını ve güvenlik ihlallerinin tespiti için günlüklerin (log) tutulmasını içerir.

FCAPS modeli, doğası gereği reaktif bir çerçeve sunar; yani bir olay (hata, performans düşüşü, güvenlik ihlali) meydana geldiğinde ona yanıt verme üzerine kuruludur.1 Ancak modern ağların dinamizmi ve iş kesintilerinin yüksek maliyeti, bu reaktif duruşu yetersiz kılmaktadır. Bu noktada FCAPS, geleneksel rolünün ötesine geçerek bir evrim geçirmiştir. Artık sadece “ne yönetilecek” sorusunun cevabı değil, aynı zamanda “nasıl proaktif yönetilecek” sorusunun temelini oluşturan stratejik bir çerçeve haline gelmiştir. Örneğin, “Hata Yönetimi” artık sadece bir arayüzün kapandığına dair bir alarm almak değil, bu hatayı algılayan bir otomasyon betiğinin trafiği otomatik olarak yedek yola yönlendirmesi anlamına gelebilir. Benzer şekilde, “Yapılandırma Yönetimi”, bir yapılandırma sapmasını tespit edip otomatik olarak düzelten bir Ansible playbook’u ile “proaktif” hale gelir. Bu bağlamda FCAPS, bu raporun ilerleyen bölümlerinde ele alınacak olan otomasyon ve programlanabilirlik teknolojilerinin uygulanması gereken alanları tanımlayan bir yol haritası sunarak, raporun iki ana başlığı arasında mantıksal bir köprü kurar.

### Alt Başlık 6.2: Ağ İzleme Protokolü: SNMP

Basit Ağ Yönetim Protokolü (SNMP — Simple Network Management Protocol), ağa bağlı cihazları izlemek ve yönetmek için kullanılan bir uygulama katmanı protokolüdür. 1980'lerde ağların büyümesiyle ortaya çıkmış ve en yaygın kabul gören ağ izleme standardı haline gelmiştir.1

#### 6.2.1. SNMP Mimarisi (Manager, Agent) ve Versiyonları (v1, v2c, v3)

SNMP, temel olarak bir “yönetici-ajan” (manager-agent) mimarisine dayanır.1

* **SNMP Manager (Yönetici):** Genellikle bir Ağ Yönetim İstasyonu (NMS) üzerinde çalışan ve ağdaki cihazları izleyen, onlardan veri toplayan ve yöneticilere sunan merkezi bir yazılımdır.
* **SNMP Agent (Ajan):** İzlenen cihazların (router, switch, sunucu vb.) üzerinde çalışan bir yazılım modülüdür. Cihazın durumu ve performansı hakkındaki verileri toplar, saklar ve yöneticiden gelen isteklere yanıt verir veya proaktif olarak bildirim gönderir.

SNMP’nin evrimi, özellikle güvenlik yetenekleri açısından kritik farklar gösteren üç ana versiyon üzerinden incelenebilir:

* **SNMPv1 ve SNMPv2c:** Protokolün ilk versiyonlarıdır. Temel yönetim yetenekleri sunarlar ancak güvenlikleri çok zayıftır. Kimlik doğrulama için “community string” adı verilen bir parola kullanırlar, ancak bu parola ağ üzerinde şifrelenmemiş (düz metin) olarak gönderilir.1 Bu durum, ağ trafiğini dinleyen bir saldırganın bu parolayı kolayca ele geçirmesine ve cihazlara yetkisiz erişim sağlamasına olanak tanıyan ciddi bir güvenlik zafiyetidir. Bu nedenle modern ağlarda kullanımları kesinlikle tavsiye edilmez.1
* **SNMPv3:** Önceki sürümlerin güvenlik açıklarını gidermek için geliştirilmiş en modern ve güvenli versiyondur.1 Güçlü güvenlik özellikleri sunar ve modern ağlarda kullanımı zorunlu kabul edilir.1 SNMPv3'ün sunduğu temel güvenlik hizmetleri şunlardır:   
  - **Authentication (Kimlik Doğrulama):** Mesajların yetkili bir kaynaktan geldiğini ve değiştirilmediğini doğrular (mesaj bütünlüğü). Genellikle MD5 veya SHA algoritmaları kullanılır.  
  - **Encryption (Şifreleme):** Mesajların içeriğini gizleyerek ağ üzerinde dinlenmesini engeller ve gizliliği sağlar. Genellikle DES veya AES algoritmaları kullanılır.

Aşağıdaki tablo, SNMP versiyonları arasındaki temel farkları, özellikle güvenlik odaklı olarak özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*uS7J0TK_5kSe1Sm4dn7DPg.png)

**SNMP Versiyonlarının Karşılaştırmalı Analizi**

#### 6.2.2. Yönetim Bilgi Tabanı (MIB) ve Nesne Tanımlayıcı (OID)

SNMP tabanlı ağ yönetiminin temelinde Yönetim Bilgi Tabanı (MIB) ve Nesne Tanımlayıcı (OID) kavramları yer alır.

* **MIB (Management Information Base — Yönetim Bilgi Tabanı):** Bir ağ cihazının yönetilebilen tüm nesnelerinin (parametrelerinin) hiyerarşik bir veritabanıdır.1 Bir MIB, bir SNMP yöneticisinin bir ajandan hangi bilgileri isteyebileceğini ve hangi parametreleri değiştirebileceğini tanımlayan bir “harita” veya “sözlük” olarak düşünülebilir.1 MIB’ler, tüm SNMP uyumlu cihazlarda ortak olan standart MIB’ler ve bir üreticinin cihazına özgü özellikleri yönetmek için kullanılan özel (kurumsal) MIB’ler olarak ikiye ayrılır.
* **OID (Object Identifier — Nesne Tanımlayıcı):** MIB içindeki her bir yönetilen nesne, OID adı verilen benzersiz bir sayısal adresle tanımlanır.1 OID’ler, isimsiz bir kökten başlayan ve farklı kuruluşlar tarafından atanan seviyelerden oluşan ağaç yapılı bir hiyerarşiye sahiptir.1 Örneğin, bir arayüzün durumu, CPU kullanımı veya sistemin çalışma süresi gibi her bir parametrenin kendine özgü bir OID’si vardır. Bir OID, noktalarla ayrılmış bir sayı dizisinden oluşur (örneğin,  
  1.3.6.1.2.1.1.1.0 sysDescr nesnesini temsil eder).1 Bir NMS’in bu sayısal verileri anlamlı bilgilere çevirebilmesi için ilgili MIB dosyalarına sahip olması gerekir.

### Alt Başlık 6.3: Ağ Trafik Analizi

SNMP, cihaz sağlığı hakkında “ne” olduğunu (örneğin, CPU kullanımı %70) söylerken, ağ trafik analizi “neden” olduğunu (hangi uygulama veya kullanıcının bu CPU yüküne neden olduğu) anlamak için gereklidir. Bu analiz, ağ kaynaklarının nasıl kullanıldığını anlamak ve performansı optimize etmek için derinlemesine bir görünürlük sağlar.

#### 6.3.1. Temel Performans Metrikleri (Bant Genişliği, Gecikme, Jitter, Paket Kaybı)

Ağ performansını nicel olarak değerlendirmek için dört temel metrik kullanılır. Bu metrikler birbirleriyle yakından ilişkilidir ve birindeki bir değişiklik diğerlerini etkileyebilir.1

* **Bant Genişliği (Bandwidth):** Bir iletişim kanalının teorik olarak maksimum veri aktarım kapasitesidir ve genellikle saniyedeki bit sayısı (bps) olarak ölçülür.1 Bu, bir ağ bağlantısının ne kadar “geniş” olduğunu ifade eder. Bant genişliği ile sıkça karıştırılan  
  **verim (throughput)** ise, belirli bir süre içinde başarıyla aktarılan gerçek veri miktarıdır ve her zaman teorik bant genişliğinden daha düşüktür.1
* **Gecikme (Latency):** Bir veri paketinin kaynaktan hedefe ulaşması için geçen süredir. Genellikle milisaniye (ms) cinsinden ölçülür ve gidiş-dönüş süresi (Round-Trip Time — RTT) olarak da ifade edilir.1 Yüksek gecikme, özellikle video konferans ve online oyunlar gibi interaktif uygulamalarda kullanıcı deneyimini olumsuz etkiler.1
* **Jitter:** Paket gecikmesindeki değişimdir; başka bir deyişle, bir veri akışındaki paketlerin varış aralıklarındaki tutarsızlıktır.1 Yüksek jitter, ses (VoIP) ve video gibi gerçek zamanlı akışlarda bozulmalara, kesintilere ve kalite düşüşüne neden olabilir.1
* **Paket Kaybı (Packet Loss):** Gönderilen veri paketlerinin hedefe hiç ulaşamaması durumudur. Ağ tıkanıklığı, donanım arızaları veya hatalı yapılandırmalar nedeniyle meydana gelebilir.1 TCP gibi güvenilir protokoller, kaybolan paketleri yeniden göndererek bu sorunu telafi etmeye çalışır, ancak bu durum gecikmeyi artırır ve performansı düşürür. UDP tabanlı uygulamalarda ise paket kaybı doğrudan kalitede düşüşe neden olur.1

#### 6.3.2. Akış Tabanlı Analiz: NetFlow, sFlow ve IPFIX Karşılaştırması

Ağ trafiğinin kim tarafından, ne zaman ve nasıl kullanıldığına dair derinlemesine analiz için akış tabanlı (flow-based) protokoller kullanılır. Bu protokoller, ağ üzerinde mevcut olan trafiği pasif olarak izleyerek ağa ek bir yük getirmezler.1

* **NetFlow:** Cisco tarafından geliştirilen, “durum bilgili” (stateful) bir teknolojidir. Bir “akış” (flow), aynı kaynak/hedef IP adresi, port numaraları ve protokol gibi ortak özelliklere sahip bir dizi paket olarak tanımlanır.1 Yönlendiriciler veya anahtarlar, bu akışlar hakkındaki meta verileri bir önbellekte toplar ve periyodik olarak bir “NetFlow Collector”a gönderir. Yüksek doğruluk sunar ancak yüksek trafikli ağlarda cihaz kaynaklarını (CPU, bellek) yoğun kullanabilir.1
* **sFlow (sampled Flow):** NetFlow’dan farklı olarak, “durum bilgisi olmayan” (stateless) bir paket örnekleme teknolojisidir.1 Bir akış kavramını takip etmek yerine, ağ trafiğinden istatistiksel olarak paket örneklemesi (packet sampling) yapar (örneğin, her X paketten biri) ve bu paketlerin başlıklarını analiz için bir toplayıcıya gönderir.1 Bu yöntem, özellikle çok yüksek hızlı (10 Gbps ve üzeri) ağlarda donanım üzerinde daha az yük oluşturur, ancak akış tabanlı teknolojilere göre daha az ayrıntı ve doğruluk sunar.1
* **IPFIX (IP Flow Information Export):** NetFlow v9'u temel alarak IETF tarafından standartlaştırılmış, üreticiden bağımsız bir protokoldür.1 Bu nedenle “geleceğe dönük NetFlow” olarak da adlandırılır.1 IPFIX’in en büyük avantajı, şablonlar (templates) kullanarak esnek ve genişletilebilir olmasıdır. Bu, satıcıların özel veri alanlarını tanımlamasına ve dışa aktarmasına olanak tanır, bu da onu modern, çok satıcılı ortamlarda trafik analizi için en güçlü çözüm haline getirir.1

NetFlow/IPFIX ve sFlow arasındaki seçim, temel bir mühendislik ödünleşimini yansıtır: %100 doğruluk mu, yoksa sınırsız ölçeklenebilirlik mi? NetFlow, her bir “konuşmayı” (akışı) başından sonuna kadar izleyerek, güvenlik adli bilişimi veya faturalandırma gibi her bir baytın önemli olduğu senaryolar için mükemmel olan detaylı bir kayıt oluşturur. Ancak bu, cihazın belleğinde ve CPU’sunda on binlerce aktif akışın durumunu takip etmesini gerektirir. 100 Gbps hızında çalışan bir veri merkezi omurgasında, saniyede milyonlarca yeni akış başlayabilir ve bu ölçekte her akışı takip etmek donanım için imkansız hale gelir. sFlow bu sorunu, “Trafiğin tamamını görmeme gerek yok, genel eğilimi anlamak için istatistiksel olarak geçerli bir örneklem yeterli” diyerek çözer. Bu, kaynak tüketimini büyük ölçüde azaltır ve en yüksek hızlarda bile çalışmasını sağlar. Ancak bu örnekleme, kısa süren bir mikro-patlamayı (microburst) veya sinsi bir siber saldırının ilk adımlarını temsil eden küçük bir akışı kaçırma riski taşır. Bu nedenle, bir ağ mimarı, kurumsal WAN kenarında güvenlik analizi için IPFIX’in doğruluğunu tercih ederken, bir bulut sağlayıcısı veri merkezi omurgasındaki genel trafik desenlerini anlamak için sFlow’un ölçeklenebilirliğini seçebilir. Seçim, teknik üstünlükten ziyade kullanım senaryosuna ve iş gereksinimlerine bağlıdır.

Aşağıdaki tablo, bu üç teknoloji arasındaki temel farkları ve ödünleşimleri özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*BUDYZKZ43rAN7rz3qf8FWw.png)

**Akış Analiz Teknolojilerinin Karşılaştırması**

### Alt Başlık 6.4: Log Yönetimi ve Syslog Protokolü

Ağ cihazları, işletim sistemleri ve uygulamalar, çalışmaları sırasında meydana gelen olayları (hatalar, uyarılar, kullanıcı girişleri vb.) kaydetmek için log (günlük) dosyaları oluşturur. Bu logların toplanması, saklanması ve analiz edilmesi, sorun giderme, performans izleme ve güvenlik denetimi için kritik öneme sahiptir.

* **Merkezi Log Yönetiminin Önemi:** Farklı kaynaklardan gelen tüm logların tek bir merkezi konumda (genellikle bir SIEM — Security Information and Event Management sistemi) toplanması esastır.1 Bu yaklaşım, olayları araştırmak için tek bir noktadan hızlı arama yapmayı sağlar, farklı sistemlerden gelen logları birbiriyle ilişkilendirerek (korelasyon) karmaşık olayları tespit etmeyi mümkün kılar, yasal uyumluluk için uzun süreli saklama imkanı sunar ve bir saldırganın yerel logları silerek izlerini kaybettirmesini zorlaştırır.1
* **Syslog Protokolü:** Ağ cihazlarından ve Unix/Linux sistemlerinden log mesajlarını merkezi bir sunucuya göndermek için kullanılan standart bir protokoldür.1 Syslog mimarisi basittir: log üreten cihazlar (client), bu logları bir Syslog sunucusuna (collector) gönderir. Mesajlar genellikle UDP port 514 üzerinden şifresiz olarak gönderilir.1

**Syslog Mesaj Yapısı:** Bir syslog mesajı genellikle üç bölümden oluşur:

1. **PRI (Priority):** Mesajın hem kaynağını (Facility) hem de önem derecesini (Severity) belirten bir değerdir. PRI=(Facility×8)+Severity formülüyle hesaplanır.
2. **Facility (Kaynak):** Mesajı üreten sistemin türünü belirtir (örneğin, kern, mail, auth).
3. **Severity (Önem Derecesi):** Mesajın önem seviyesini belirtir. 0'dan (Emergency) 7'ye (Debug) kadar 8 seviye vardır.
4. **Header (Başlık):** Genellikle bir zaman damgası ve mesajı gönderen cihazın ana bilgisayar adını (hostname) içerir.
5. **MSG (Mesaj):** Olayın kendisini açıklayan asıl metni içerir.

---

### Ana Başlık 7: Ağ Otomasyonu ve Programlanabilirlik

Bu ana başlık, ağ yönetiminin manuel, Komut Satırı Arayüzü (CLI) tabanlı operasyonlardan, yazılım ve kod aracılığıyla yönetilen programatik bir disipline dönüşümünü ele alacaktır. Bu dönüşüm, verimliliği artırmak, insan hatasını azaltmak ve ağ altyapısını iş hedefleriyle daha uyumlu hale getirmek için zorunludur.

### Alt Başlık 7.1: Kod Olarak Altyapı (Infrastructure as Code — IaC) Prensibi

Kod Olarak Altyapı (IaC), altyapının (ağ cihazları, sunucular, yük dengeleyiciler vb.) manuel süreçler veya interaktif yapılandırma araçları yerine, makine tarafından okunabilir tanım dosyaları (kod) aracılığıyla yönetilmesi ve sağlanması pratiğidir.1 Bu yaklaşım, altyapıyı bir yazılım geliştirme projesi gibi ele alarak, ağ yönetiminde devrim yaratmıştır.

IaC’nin temel faydaları şunlardır:

* **Tekrarlanabilirlik ve Tutarlılık:** Aynı yapılandırma kodu, her seferinde birebir aynı altyapı ortamını oluşturur. Bu, geliştirme, test ve üretim ortamları arasında tutarlılık sağlayarak “benim makinemde çalışıyordu” sorununu ortadan kaldırır.
* **Otomasyon ve Hız:** Altyapı sağlama ve yapılandırma süreçleri tamamen otomatikleştirilerek manuel müdahaleler ve bunlardan kaynaklanan hatalar en aza indirilir. Bu, yeni hizmetlerin veya uygulamaların devreye alınması için gereken süreyi haftalardan dakikalara indirir.
* **Sürüm Kontrolü:** Altyapı kodu, Git gibi sistemlerde saklandığı için tüm değişiklikler izlenir, denetlenebilir ve gerektiğinde kolayca bir önceki kararlı sürüme geri alınabilir. Bu, altyapı için bir “geri al” (undo) yeteneği sağlar.

### Alt Başlık 7.2: Otomasyon Araçları ve Dilleri

Ağ otomasyonunu ve programlanabilirliğini hayata geçirmek için çeşitli araçlar ve programlama dilleri kullanılmaktadır.

#### 7.2.1. Ansible: Ajansız Mimari ve Playbook’lar

Ansible, basitliği, gücü ve geniş ekosistemi sayesinde ağ otomasyonu alanında en popüler araçlardan biri haline gelmiştir.

* **Ajansız Mimari (Agentless Architecture):** Ansible’ın en ayırt edici özelliğidir. Yönetilecek ağ cihazlarına herhangi bir özel yazılım (ajan) yüklenmesini gerektirmez.1 İletişimi genellikle standart ve hemen hemen tüm ağ cihazlarında bulunan SSH (Secure Shell) protokolü üzerinden kurar. Bu, dağıtımı ve yönetimi büyük ölçüde basitleştirir.
* **Playbook’lar:** Otomasyon görevleri, insan tarafından okunabilir YAML (YAML Ain’t Markup Language) formatında yazılan “Playbook”lar aracılığıyla tanımlanır.1 Bir playbook, hangi cihazlarda (hosts), hangi görevlerin (tasks) hangi modüller kullanılarak yürütüleceğini adım adım belirten bir plandır. YAML’ın basit sözdizimi, programlama geçmişi olmayan ağ mühendislerinin bile otomasyon iş akışları oluşturmasını kolaylaştırır.

#### 7.2.2. Python: Betik Dili ve Kütüphaneler (Paramiko, Netmiko)

Python, esnekliği, okunabilirliği ve güçlü kütüphane ekosistemi sayesinde ağ otomasyonu için fiili standart programlama dili haline gelmiştir.1 Ansible gibi araçların yetersiz kaldığı özel veya karmaşık otomasyon senaryoları için betikler (scripts) yazma imkanı sunar.

* **Paramiko:** SSHv2 protokolünü uygulayan temel bir Python kütüphanesidir. Ağ cihazlarına SSH bağlantısı kurmak, komutları uzaktan çalıştırmak ve dosya transferi yapmak için kullanılır.1 Düşük seviyeli bir kütüphane olup, SSH etkileşimleri üzerinde tam kontrol sağlar.
* **Netmiko:** Paramiko üzerine inşa edilmiş, ağ cihazlarına özel olarak geliştirilmiş bir kütüphanedir.1 Farklı üreticilerin (Cisco, Juniper, Arista vb.) CLI farklılıklarını (örneğin, komut istemi (prompt), sayfalama ve hata mesajları) soyutlayarak komut göndermeyi ve yapılandırma yapmayı büyük ölçüde basitleştirir. Bu, ağ mühendislerinin farklı cihaz türleri için ayrı ayrı kod yazma yükünü ortadan kaldırır ve otomasyon betiklerini daha taşınabilir hale getirir.

### Alt Başlık 7.3: Modern Yönetim Protokolü: NETCONF ve SNMP’ye Göre Avantajları

SNMP, ağ izleme için endüstri standardı olmasına rağmen, yapılandırma yönetimi için (özellikle SET komutuyla) ilkel, güvensiz ve hataya açık kalmıştır. NETCONF (Network Configuration Protocol), bu boşluğu doldurmak ve ağ cihazlarının programatik kontrolünü sağlamak için tasarlanmış modern bir protokoldür.1

**NETCONF Mimarisi:** NETCONF, yapılandırma verilerini ve protokol mesajlarını yapılandırılmış, **XML tabanlı** bir formatta taşır. Güvenli bir taşıma katmanı olarak ise standart **SSH** protokolünü kullanır. Bu, hem verinin yapısal tutarlılığını hem de iletişim güvenliğini garanti altına alır.

**SNMP’ye Göre Temel Avantajlar:**

* **İşlemsel (Transactional) Yetenekler:** NETCONF’un en devrimci özelliğidir. Bir dizi yapılandırma değişikliğinin tek bir **atomik işlem** olarak gönderilmesine olanak tanır. Bu, ya tüm değişikliklerin başarılı bir şekilde uygulanmasını ya da herhangi bir hata durumunda hiçbirinin uygulanmamasını garanti eder. Bu sayede, cihazın yarı yapılandırılmış, kararsız bir duruma düşmesi engellenir.1
* **Güvenilir Geri Alma (Rollback):** İşlemsel doğası sayesinde, başarısız olan veya sorun yaratan bir yapılandırma değişikliğinin tamamının tek bir komutla güvenilir bir şekilde geri alınabilmesini sağlar. SNMP’de ise her SET işlemi bağımsız olduğu için böyle bir mekanizma yoktur ve hatalı bir değişiklik sonrası cihazı eski haline getirmek karmaşık manuel müdahaleler gerektirebilir.1
* **Yapılandırma Veri Depolarının Ayrımı:** NETCONF, running-config (aktif yapılandırma) ve startup-config (başlangıç yapılandırması) gibi farklı yapılandırma veri depoları arasında net bir ayrım yapar. Bu, değişikliklerin canlı sisteme uygulanmadan önce doğrulanmasına ve test edilmesine olanak tanır.

Aşağıdaki tablo, SNMP’nin yapılandırma (SET operasyonu) yetenekleri ile NETCONF arasındaki felsefi ve teknik farkları özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*k9H5BU4Vg5vNEkVIK0IKUg.png)

**Yönetim Protokolleri: SNMP vs. NETCONF**

### Alt Başlık 7.4: Yapılandırma Yönetimi: Yedekleme ve Sürüm Kontrolü (Git)

Etkili yapılandırma yönetimi, ağ kararlılığını artırır, kesinti sürelerini azaltır ve sorun gidermeyi hızlandırır. Bu sürecin iki temel taşı, düzenli yedekleme ve modern sürüm kontrolüdür.

* **Yapılandırma Yedekleme:** Ağ cihazlarının (yönlendiriciler, anahtarlar, güvenlik duvarları) yapılandırma dosyalarının düzenli olarak yedeklenmesi, en temel ve en kritik yönetim görevlerinden biridir.1 Bir cihaz arızalandığında veya hatalı bir yapılandırma değişikliği yapıldığında, bilinen son iyi yapılandırmanın yedeğinden hızlıca geri dönmek, hizmet kesintisini dakikalara indirebilir.1
* **Sürüm Kontrolü ile Devrim: Git:** IaC felsefesinin bir uzantısı olarak, ağ yapılandırmalarının artık birer “kod” olarak ele alınması ve **Git** gibi bir Sürüm Kontrol Sistemi’nde (VCS) saklanması, modern ağ yönetimi için en iyi pratiklerden biri haline gelmiştir.1 Git kullanmanın temel faydaları şunlardır:
* **Değişiklik Takibi:** Yapılandırma dosyasında kimin, ne zaman ve neyi değiştirdiğini tam olarak izlemeyi sağlar. Bu, denetlenebilirlik ve hesap verebilirlik için bir temel oluşturur.1
* **Karşılaştırma ve Geri Alma:** İki farklı sürüm arasındaki farkları (diff) net bir şekilde göstererek hatalı yapılandırmaların tespitini kolaylaştırır ve sorunlu bir değişikliği kolayca geri almayı (revert) mümkün kılar.1
* **İşbirliği ve Denetim:** Birden fazla ağ mühendisinin aynı anda ve koordineli bir şekilde yapılandırmalar üzerinde çalışmasına olanak tanır. Değişikliklerin (örneğin, “pull request”ler aracılığıyla) dağıtımdan önce gözden geçirilmesine ve onaylanmasına imkan tanıyarak kaliteyi artırır.

Bu bölümde ele alınan IaC, Ansible, Python, NETCONF ve Git gibi teknolojiler, tekil araçlardan ziyade, ağ mühendisliği disiplinini temelden değiştiren, birbiriyle ilişkili bir kültürel dönüşümü temsil etmektedir: **NetDevOps**. Geleneksel ağ mühendisi, CLI aracılığıyla cihazları tek tek yöneten bir “operatör” iken, uygulama dağıtım hızının artmasıyla manuel olarak yönetilen ağ, birincil “darboğaz” haline gelmiştir. Bu darboğazı aşmak için, ağ dünyası DevOps araçlarını ve felsefelerini benimsemeye başlamıştır. Ağ yapılandırmaları artık kod olarak ele alınmakta, Git’te saklanmakta ve Ansible/Python ile otomatik olarak dağıtılmaktadır. Sonuç olarak, modern ağ mühendisinin rolü bir “ağ operatöründen” bir “ağ otomasyon geliştiricisine” evrilmiştir. Artık sadece ağ protokollerini bilmek yeterli değil; Python, API’ler ve Git gibi yazılım geliştirme becerileri de zorunlu hale gelmiştir.

### Sonuç

Bu bölüm, modern ağ yönetiminin iki temel ve birbiriyle iç içe geçmiş yönünü ortaya koymuştur: izleme ve otomasyon. FCAPS modeli ve SNMP gibi geleneksel yönetim çerçeveleri, bir ağın sağlığını anlamak için temel bir zemin sunarken, NetFlow ve IPFIX gibi akış analiz teknolojileri, bu anlayışı “ne oluyor?” sorusundan “neden oluyor?” sorusuna taşıyarak çok daha derin bir görünürlük katmanı eklemektedir. Bu izleme yetenekleri, reaktif sorun çözümünün temelini oluşturur.

Ancak, günümüzün dinamik ve ölçekli ağları için reaktif bir duruş artık yeterli değildir. Ağ otomasyonu ve programlanabilirliği, bu noktada bir verimlilik aracı olmanın ötesinde, stratejik bir zorunluluk olarak ortaya çıkmaktadır. Kod Olarak Altyapı (IaC) felsefesi, Git ile birleştiğinde, ağ yapılandırmalarını denetlenebilir, tekrarlanabilir ve güvenilir hale getirir. Ansible ve Python gibi araçlar, bu felsefeyi hayata geçirerek manuel müdahaleyi ve insan hatasını ortadan kaldırır. NETCONF gibi modern protokoller ise, işlemsel yetenekleriyle bu otomasyonun sağlam ve güvenilir bir temel üzerinde çalışmasını sağlar.

Sonuç olarak, ağ yönetimi ve otomasyon, birbirinden ayrı disiplinler değil, birbiriyle simbiyotik bir ilişki içinde olan iki süreçtir. Etkili izleme, neyin otomatize edilmesi gerektiği konusunda veri sağlarken; otomasyon, izleme verilerine dayanarak ağı proaktif olarak yönetir, kendi kendini düzelten ve iş hedeflerine dinamik olarak adapte olan bir altyapı vizyonunu gerçeğe dönüştürür. Bu dönüşüm, sadece teknolojiyi değil, aynı zamanda ağ mühendisinin rolünü ve yetkinlik setini de temelden değiştirerek, onları altyapı operatörlerinden otomasyon geliştiricilerine dönüştürmektedir.