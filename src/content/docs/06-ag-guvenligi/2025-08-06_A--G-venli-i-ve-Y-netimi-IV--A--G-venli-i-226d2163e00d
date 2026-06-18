# Ağ Güvenliği ve Yönetimi IV: Ağ Güvenliği

---

### Ağ Güvenliği ve Yönetimi IV: AĞ GÜVENLİĞİ

![](https://cdn-images-1.medium.com/max/800/1*BZVwBIefZNbdIE6Sn8hDrQ.png)

Tüm siber güvenlik disiplininin üzerine inşa edildiği temel felsefi ve stratejik çerçeveler incelenmektedir. Güvenliğin ne anlama geldiği, nasıl bir stratejiyle uygulanması gerektiği ve hangi tür tehditlere karşı savunma yapıldığı gibi temel sorulara yanıt aranmaktadır. Bu bölüm, reaktif bir “sorun çözme” zihniyetinden, proaktif bir “risk yönetimi” zihniyetine geçişin önemini vurgulamaktadır.

---

### Güvenliğin Temel Kavramları: CIA Üçgeni (Gizlilik, Bütünlük, Erişilebilirlik)

Siber güvenliğin evrensel hedefleri, genellikle CIA Üçgeni olarak bilinen üç temel ilke etrafında tanımlanır: Gizlilik (Confidentiality), Bütünlük (Integrity) ve Erişilebilirlik (Availability). Bu model, bir kuruluşun güvenlik programının ve politikalarının oluşturulması için temel bir çerçeve sunar.1

* **Gizlilik (Confidentiality):** Bu ilke, hassas bilgilerin yalnızca yetkili kullanıcılar, süreçler ve cihazlar tarafından erişilebilir olmasını sağlamayı hedefler. Temel amaç, verilerin yetkisiz ifşasına karşı korunmasıdır.1 Gizliliği sağlamak için kullanılan yaygın mekanizmalar arasında şifreleme, erişim kontrol listeleri (ACL’ler) ve veri sınıflandırması bulunur.1
* **Bütünlük (Integrity):** Verilerin tüm yaşam döngüsü boyunca doğruluğunun, tutarlılığının ve güvenilirliğinin korunması anlamına gelir. Bütünlük, verilerin yetkisiz veya fark edilmeyen bir şekilde değiştirilmesini, silinmesini veya bozulmasını önlemeyi amaçlar.1 Bu ilke, verinin hem depolanırken (at-rest) hem de iletilirken (in-transit) korunmasını kapsar. Bütünlüğü sağlamak için özet (hashing) algoritmaları ve dijital imzalar gibi teknolojiler kullanılır.1
* **Erişilebilirlik (Availability):** Yetkili kullanıcıların, ihtiyaç duydukları anda ağ kaynaklarına, sistemlere ve verilere kesintisiz bir şekilde erişebilmesini garanti etme ilkesidir.1 Erişilebilirlik, Hizmet Reddi (DoS) saldırıları, donanım arızaları veya doğal afetler gibi hizmet kesintilerine karşı sistemlerin dayanıklı olmasını gerektirir. Yüksek kullanılabilirlik sağlamak için yedekli sistemler (redundancy), yük dengeleme (load balancing) ve felaket kurtarma planları gibi önlemler alınır.

Bu üç ilke, statik bir modelden ziyade dinamik bir denge eylemini temsil eder. Bir ilkeyi güçlendirmeye yönelik bir kontrol, diğerini zayıflatabilir. Örneğin, aşırı katı şifreleme kontrolleri (Gizliliği artırır), sistem performansını düşürerek Erişilebilirliği olumsuz etkileyebilir. Benzer şekilde, bir bütünlük ihlali, örneğin kritik bir sistem dosyasının kötü niyetli olarak değiştirilmesi, sistemin çökmesine neden olarak erişilebilirliği de doğrudan etkileyebilir.1 Bu nedenle, etkili bir güvenlik mimarisi, mutlak koruma arayışından ziyade, bu üç ilke arasında kuruluşun risk iştahına ve korunan varlığın değerine göre bilinçli bir ödünleşim (trade-off) ve denge kurma sanatıdır. Bu durum, güvenlik mimarisinin sadece teknik bir uygulama değil, aynı zamanda stratejik bir iş kararı olduğunu ortaya koymaktadır.

### Stratejik Yaklaşımlar: Savunma Derinliği ve Katmanlı Güvenlik

CIA Üçgeni’nde tanımlanan hedeflere ulaşmak için kullanılan temel strateji, Savunma Derinliği’dir (Defense in Depth — DiD). Bu strateji, tek bir güvenlik kontrolünün asla yanılmaz veya yeterli olmayacağı varsayımına dayanır. Bir saldırganın hedefine ulaşmasını engellemek veya yavaşlatmak için birden çok ve çeşitli güvenlik kontrol katmanını bir araya getirir.1 Bir katman atlatılsa bile, diğer katmanların saldırıyı tespit edip durdurması amaçlanır. Bu strateji, genellikle bir kalenin savunmasına benzetilir; hendekler, yüksek duvarlar, okçular ve askerler gibi birden çok savunma hattı bulunur.

Savunma Derinliği stratejisinin tipik katmanları şunları içerir 1:

* **Fiziksel Güvenlik:** Veri merkezlerine ve ağ donanımlarına fiziksel erişimi kontrol eder.
* **Ağ Güvenliği (Çevre ve Dahili):** Ağın çevresini ve iç segmentlerini korur. Güvenlik duvarları (Firewalls), Saldırı Önleme Sistemleri (IPS) ve ağ segmentasyonu gibi teknolojileri kullanır.
* **Uç Nokta (Endpoint) Güvenliği:** Sunucular, dizüstü bilgisayarlar gibi son kullanıcı cihazlarını korur. Antivirüs yazılımları ve Uç Nokta Tespiti ve Yanıtı (EDR) çözümlerini içerir.
* **Uygulama Güvenliği:** Web uygulamaları ve API’ler gibi yazılımları hedef alan saldırılara karşı koruma sağlar. Web Uygulama Güvenlik Duvarları (WAF) bu katmanda yer alır.
* **Veri Güvenliği:** Verinin kendisini şifreleme, veri kaybı önleme (DLP) ve erişim kontrol mekanizmaları ile korur.
* **İdari Kontroller:** Güvenlik politikaları, prosedürler ve kullanıcı güvenlik farkındalığı eğitimleri gibi insan ve süreç odaklı kontrolleri kapsar.

Bu strateji, sadece teknolojik bir yığın oluşturmakla ilgili değildir; aynı zamanda saldırganın maliyetini ve karmaşıklığını artırmakla ilgilidir. Her bir katman, saldırgan için yeni bir engel, yeni bir bulmaca ve tespit edilme riskinin arttığı yeni bir fırsat demektir. Amaç, saldırıyı imkansız kılmaktan ziyade, saldırının maliyetini (zaman, kaynak, uzmanlık) potenşiyel kazançtan daha yüksek hale getirmektir. Ayrıca, bu katmanlı yapı “zaman satın almakla” ilgilidir. Bir katman atlatılsa bile, bir sonraki katman saldırganı yavaşlatır. Bu yavaşlama, güvenlik operasyonları ekibine (Blue Team) saldırıyı tespit etmek, analiz etmek ve müdahale etmek için kritik bir zaman penceresi sağlar ki bu, modern olay müdahale (Incident Response) süreçleri için hayati bir unsurdur.

### Yaygın Saldırı Vektörleri

Saldırı vektörü, bir siber suçlunun bir ağa veya sisteme yetkisiz erişim sağlamak için kullandığı yol veya yöntemdir.1 Bu bölümde teorik prensiplerden pratik tehditlere geçiş yapılarak en yaygın saldırı yöntemleri, çalışma mekanizmaları ve etkileri analiz edilmektedir.

#### Hizmet Reddi (DoS/DDoS) ve Ortadaki Adam (MITM)

* **Hizmet Reddi (DoS/DDoS):** Bu saldırı türü, bir sunucuyu, hizmeti veya ağı, tek bir kaynaktan (DoS) veya botnet adı verilen binlerce ele geçirilmiş cihazdan (DDoS) gelen aşırı miktarda sahte trafik ile boğarak meşru kullanıcılar için erişilemez hale getirme girişimidir.1 Bu saldırılar, doğrudan CIA Üçgeni’nin “Erişilebilirlik” ilkesini hedef alır. Özellikle DNS Yükseltme (Amplification) gibi teknikler, saldırganın küçük bir sorgu paketi göndererek, hedefe onlarca veya yüzlerce kat daha büyük cevap paketleri yansıtmasını sağlar, bu da saldırının etkisini katlayarak artıran sofistike bir DDoS yöntemidir.
* **Ortadaki Adam (Man-in-the-Middle — MITM):** Bu saldırıda, bir saldırgan iki taraf arasındaki bir iletişime gizlice kendini dahil ederek veri akışını dinler, yakalar ve potansiyel olarak manipüle eder. Kurbanlar, doğrudan birbirleriyle iletişim kurduklarını sanarken, aslında tüm trafikleri saldırgan üzerinden geçer. Bu saldırı, hem “Gizlilik” hem de “Bütünlük” ilkelerini ihlal eder. DNS Önbellek Zehirlenmesi (Cache Poisoning), bir DNS sunucusunun önbelleğine sahte kayıtlar enjekte ederek kullanıcıları meşru bir site yerine saldırganın kontrolündeki kötü amaçlı bir siteye yönlendiren klasik bir MITM tekniğidir.

#### Sosyal Mühendislik: Oltalama (Phishing) Saldırıları

Oltalama (Phishing), saldırganların, meşru bir kurum (banka, sosyal medya platformu vb.) gibi davranarak kurbanları kandırdığı ve kullanıcı adları, şifreler, kredi kartı bilgileri gibi hassas verileri ele geçirmeye çalıştığı bir sosyal mühendislik saldırısıdır.1 Genellikle aciliyet hissi yaratan, dilbilgisi hataları içeren ve şüpheli bağlantılar barındıran sahte e-postalar veya web siteleri aracılığıyla gerçekleştirilir. Bu saldırı vektörü, teknik güvenlik kontrollerini atlayarak doğrudan en zayıf halka olan insan faktörünü hedef alır.

#### Kötü Amaçlı Yazılımlar (Malware): Virüs, Solucan, Fidye Yazılımı

Kötü Amaçlı Yazılım (Malware), bir bilgisayar sistemine veya ağa zarar vermek, verileri çalmak veya kontrolü ele geçirmek amacıyla tasarlanmış her türlü yazılım için kullanılan genel bir terimdir.

* **Virüs:** Kendini meşru programlara ekleyerek yayılan kötü amaçlı kod parçasıdır. Yayılması için insan etkileşimi (örneğin, bir dosyayı çalıştırmak) gerektirir.
* **Solucan (Worm):** Virüsten farklı olarak, yayılmak için insan etkileşimine veya bir ana programa ihtiyaç duymaz. Ağdaki güvenlik zafiyetlerinden yararlanarak kendi kendini kopyalar ve diğer sistemlere bulaşır.
* **Fidye Yazılımı (Ransomware):** Bulaştığı sistemdeki dosyaları şifreleyerek erişilemez hale getiren ve dosyaların şifresini çözmek için kurbandan fidye talep eden kötü amaçlı yazılım türüdür.

Bu saldırı vektörleri nadiren tek başlarına hareket ederler; genellikle karmaşık bir saldırı zincirinin (kill chain) parçasıdırlar. Örneğin, bir saldırgan bir oltalama e-postası ile ilk erişimi sağlayabilir, bu erişimi kullanarak bir fidye yazılımı indirebilir ve bu yazılımın ağ içinde yayılması için bir solucan mekanizması kullanabilir. Bu durum, Savunma Derinliği stratejisinin pratik önemini ortaya koyar. Sadece e-posta filtrelemesine odaklanmak yeterli değildir. E-posta filtresi başarısız olursa, uç nokta koruması (malware’i engellemek için) devreye girmelidir. Uç nokta koruması da başarısız olursa, ağ segmentasyonu (solucanın yayılmasını sınırlamak için) saldırının etkisini azaltmalıdır.

Aşağıdaki tablo, yaygın saldırı vektörlerini ve bu saldırıların doğrudan hedef aldığı temel güvenlik ilkelerini özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*FAdKptOhUIKWjicuMUi8JQ.png)

**Yaygın Saldırı Vektörleri ve Hedefledikleri Güvenlik İlkeleri**

### Proaktif Güvenlik: Risk Değerlendirme ve Tehdit Modellemesi

Etkili bir güvenlik programı, sadece gerçekleşen saldırılara yanıt vermekten (reaktif) ibaret olmamalı, aynı zamanda potansiyel saldırıları öngörerek önlem almalıdır (proaktif).

**Risk Değerlendirme:** Bir kuruluşun varlıklarına yönelik tehditleri, bu tehditlerin istismar edebileceği zafiyetleri, tehditlerin gerçekleşme olasılığını ve gerçekleşmesi durumunda ortaya çıkacak potansiyel etkiyi (zararı) tanımlama ve analiz etme sürecidir. Risk, genellikle şu formülle ifade edilir: Risk=Tehdit×Zafiyet×Etki.1 Bu analiz, sınırlı güvenlik kaynaklarının ve yatırımlarının en kritik alanlara yönlendirilmesi için bir önceliklendirme mekanizması sağlar.

**Tehdit Modellemesi (Threat Modeling):** Güvenliği, sistemin tasarım aşamasından itibaren entegre etmeyi amaçlayan proaktif ve yapılandırılmış bir süreçtir.1 Sadece mevcut zafiyetlere odaklanmak yerine, “bir saldırgan bu sisteme nasıl saldırabilir?” sorusunu sorarak potansiyel tehditleri, saldırı vektörlerini ve zafiyetleri sistematik olarak tanımlar. Bu, güvenliği sonradan eklenen bir “yama” olmaktan çıkarıp, sistemin DNA’sına entegre eder. Yaygın kullanılan tehdit modelleme metodolojileri şunlardır:

* **STRIDE:** Microsoft tarafından geliştirilen ve tehditleri altı kategoriye ayıran bir modeldir: **S**poofing (Kimlik Sahtekarlığı), **T**ampering (Kurcalama), **R**epudiation (İnkar Edilemezlik), **I**nformation Disclosure (Bilgi İfşası), **D**enial of Service (Hizmet Reddi), **E**levation of Privilege (Yetki Yükseltme).
* **PASTA (Process for Attack Simulation and Threat Analysis):** İş etkilerini ve riskleri merkeze alan, yedi aşamalı, risk odaklı bir metodolojidir. Teknik zafiyetleri iş hedefleriyle ilişkilendirerek daha bütünsel bir bakış açısı sunar.

Tehdit modellemesi, güvenlik ve yazılım geliştirme/sistem tasarımı ekipleri arasında bir köprü görevi görür. Geliştiricilere “saldırgan gibi düşünmeyi” öğreterek, güvenliği sadece güvenlik ekibinin bir sorumluluğu olmaktan çıkarıp, tüm ürün yaşam döngüsünün bir parçası haline getirir. Bu proaktif yaklaşım, ekonomik olarak da daha verimlidir. Tasarım aşamasında bir güvenlik açığını düzeltmenin maliyeti, ürün piyasaya sürüldükten sonra keşfedilen ve binlerce kullanıcıyı etkileyen bir açığı düzeltmenin maliyetinden kat kat daha düşüktür. Bu nedenle tehdit modellemesi, sadece bir güvenlik pratiği değil, aynı zamanda akıllı bir mühendislik ve iş yatırımıdır.

---

### Güvenli İletişim ve Kriptografi

Bu başlık, modern dijital iletişimin temelini oluşturan kriptografik mekanizmaları ve bu mekanizmaları kullanarak güvenli kanallar oluşturan protokolleri derinlemesine inceleyecektir. Verinin gizliliğinin nasıl sağlandığı, bütünlüğünün nasıl korunduğu ve iletişim kuran tarafların kimliklerinin nasıl doğrulandığı gibi temel sorular, kriptografinin temel yapı taşları üzerinden açıklanacaktır.

### Şifreleme Temelleri

Şifreleme, verileri yetkisiz erişime karşı korumak için okunabilir formattan (düz metin) okunamaz bir formata (şifreli metin) dönüştürme işlemidir.

#### Simetrik Kriptografi (AES)

Simetrik kriptografide, veriyi şifrelemek (encryption) ve şifresini çözmek (decryption) için aynı gizli anahtar kullanılır.1 Bu yöntem, asimetrik şifrelemeye göre çok daha hızlıdır ve daha az hesaplama gücü gerektirir. Bu nedenle, büyük hacimli verilerin (dosyalar, veri akışları, diskler) şifrelenmesi için idealdir. Günümüzde en yaygın ve güvenli simetrik şifreleme standardı, AES’tir (Advanced Encryption Standard).1 Simetrik kriptografinin en büyük zorluğu, bu tek gizli anahtarın taraflar arasında güvenli bir şekilde nasıl paylaşılacağıdır (anahtar dağıtım sorunu).1

#### Asimetrik Kriptografi (RSA)

Asimetrik kriptografi (veya açık anahtar kriptografisi), birbiriyle matematiksel olarak ilişkili bir anahtar çifti kullanır: bir genel anahtar (public key) ve bir özel anahtar (private key).1 Genel anahtar, herkesle serbestçe paylaşılabilir ve veriyi şifrelemek için kullanılır. Özel anahtar ise yalnızca sahibi tarafından bilinir ve genel anahtarla şifrelenmiş verinin şifresini çözmek için kullanılır. Bu yöntem, anahtar dağıtım sorununu çözer çünkü şifreleme için kullanılan genel anahtarın gizli olmasına gerek yoktur. Ancak, simetrik şifrelemeye göre çok daha yavaştır ve daha fazla hesaplama gücü gerektirir.1 En bilinen asimetrik algoritmalardan biri RSA’dır (Rivest-Shamir-Adleman).1

#### Hibrit Yaklaşım: TLS/SSL El Sıkışması (Handshake)

Pratikte, simetrik ve asimetrik şifrelemenin en iyi yönleri bir hibrit modelde birleştirilir.1 TLS/SSL (Transport Layer Security/Secure Sockets Layer) protokolü bu yaklaşımın en bilinen örneğidir. Bir TLS el sıkışması (handshake) sırasında, taraflar kimliklerini doğrulamak ve güvenli bir şekilde geçici bir “oturum anahtarı” (simetrik anahtar) üzerinde anlaşmak için yavaş olan asimetrik kriptografiyi kullanır. Anlaşma sağlandıktan sonra, oturum boyunca tüm veri aktarımı, bu hızlı simetrik oturum anahtarı kullanılarak şifrelenir.1 Bu hibrit modelin altında yatan mühendislik prensibi, kaynakları en verimli şekilde kullanarak maksimum güvenliği sağlamaktır: “Pahalı olan işlemi (asimetrik) sadece bir kez yap, ucuz olan işlemi (simetrik) ise sürekli tekrarla.”

Aşağıdaki tablo, iki temel şifreleme yönteminin temel özelliklerini karşılaştırmalı olarak özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*uLkJ1fxvGAvAmTITuC3VVA.png)

**Kriptografik Yöntemlerin Karşılaştırması**

### Veri Bütünlüğü ve Kimlik Doğrulama

Şifreleme gizliliği sağlarken, verinin değiştirilmediğini ve doğru kaynaktan geldiğini doğrulamak için ek mekanizmalara ihtiyaç vardır.

#### Özet Fonksiyonları (Hashing — SHA-256)

Kriptografik özet fonksiyonu (hashing), herhangi bir boyuttaki bir girdiyi (mesaj, dosya vb.) alıp, sabit uzunlukta benzersiz bir çıktıya (hash değeri veya mesaj özeti) dönüştüren tek yönlü bir matematiksel algoritmadır.1 “Tek yönlü” olması, hash değerinden orijinal veriyi geri elde etmenin hesaplama açısından imkansız olduğu anlamına gelir. Verideki en küçük bir değişiklik bile tamamen farklı bir hash değeri üretecektir. Bu özellik, bir dosyanın indirme sırasında bozulup bozulmadığını veya bir mesajın iletim sırasında değiştirilip değiştirilmediğini kontrol etmek (bütünlük doğrulaması) için kullanılır. SHA-256 (Secure Hash Algorithm 256-bit), günümüzde güvenli kabul edilen standart bir hash algoritmasıdır.

#### Dijital İmzalar

Dijital imzalar, bir mesajın veya belgenin bütünlüğünü, kimden geldiğini (kimlik doğrulama) ve gönderenin mesajı gönderdiğini inkar edememesini (inkar edememe — non-repudiation) sağlayan kriptografik bir mekanizmadır.1 Bu mekanizma, asimetrik kriptografi ve hash fonksiyonlarını birleştirir.

Oluşturma ve doğrulama süreci şu şekilde işler:

1. **İmzalama:** Gönderici, göndereceği mesajın bir hash’ini alır. Bu hash değerini kendi **özel anahtarı** ile şifreler. Bu şifrelenmiş hash, dijital imzadır ve orijinal mesaja eklenerek alıcıya gönderilir.
2. **Doğrulama:** Alıcı, göndericinin **genel anahtarını** kullanarak dijital imzanın şifresini çözer ve orijinal hash değerini elde eder. Ardından, gelen mesajın hash’ini kendisi de aynı hash fonksiyonuyla hesaplar. Eğer iki hash değeri eşleşiyorsa, mesajın yolda değişmediği (bütünlük) ve gerçekten o özel anahtarın sahibinden geldiği (kimlik doğrulama) kanıtlanmış olur.

Bu süreç, asimetrik kriptografinin “ters” kullanımıdır. Normalde gizlilik için alıcının genel anahtarıyla şifreleme yapılırken, burada kimlik kanıtlama için göndericinin özel anahtarıyla imzalama yapılır.

### Açık Anahtar Altyapısı (PKI) ve Sertifika Yönetimi

Açık Anahtar Altyapısı (PKI), dijital sertifikalar aracılığıyla genel anahtarların belirli kimliklere (kişiler, sunucular, şirketler) güvenli bir şekilde bağlanmasını sağlayan roller, politikalar, donanımlar, yazılımlar ve prosedürlerden oluşan bir çerçevedir.1 Asimetrik kriptografinin temel sorunu olan “bir genel anahtarın gerçekten iddia ettiği kişiye ait olup olmadığını nasıl bilebiliriz?” sorusuna çözüm getirir.

Bu güven ilişkisi, **Sertifika Otoritesi (CA — Certificate Authority)** adı verilen güvenilir üçüncü taraflar tarafından sağlanır. Bir CA, bir sertifika talep eden kişinin veya kuruluşun kimliğini doğruladıktan sonra, o kimliğin genel anahtarını ve diğer bilgilerini içeren bir **dijital sertifikayı** (en yaygın standardı X.509'dur) kendi özel anahtarıyla imzalar. Bu imza, sertifikanın geçerliliğinin ve güvenilirliğinin bir kanıtıdır.1 Bir web tarayıcısı bir HTTPS sitesine bağlandığında, sunucunun sertifikasını kontrol eder ve bu sertifikayı imzalayan CA’nın tarayıcının güvendiği kök sertifikalar listesinde olup olmadığını doğrular.

### Güvenli Protokoller (TLS 1.3, IPsec, SSH)

Bu protokoller, yukarıda açıklanan kriptografik temel taşlarını kullanarak ağ üzerinde güvenli iletişim kanalları oluşturur.

* **TLS 1.3 (Transport Layer Security):** Web trafiğini (HTTPS) güvence altına almak için kullanılan en modern protokoldür. Önceki sürümlere göre daha hızlı bir el sıkışma süreci ve daha güçlü, güncel şifreleme algoritmaları sunar, eski ve güvensiz olanları ise kaldırır.
* **IPsec (Internet Protocol Security):** OSI modelinin Ağ Katmanı’nda (Katman 3) çalışır ve IP paketleri için güvenlik sağlar. Genellikle Sanal Özel Ağlar (VPN) oluşturmak için kullanılır ve üzerindeki tüm uygulama trafiğini (TCP, UDP fark etmeksizin) şeffaf bir şekilde korur.
* **SSH (Secure Shell):** Güvenli olmayan bir ağ üzerinden güvenli uzaktan komut satırı erişimi, dosya transferi ve diğer ağ hizmetlerini sağlamak için kullanılan bir uygulama katmanı protokolüdür. Telnet gibi eski ve güvensiz protokollerin yerini almıştır.
* **DNSSEC, DoT, DoH:** Özellikle DNS trafiğini güvence altına almak için geliştirilmiş protokollerdir. DNSSEC, DNS yanıtlarının bütünlüğünü ve kimliğini doğrulamak için dijital imzaları kullanırken; DoT (DNS over TLS) ve DoH (DNS over HTTPS), DNS sorgularının gizliliğini sağlamak için trafiği şifreler.

Bu protokollerin evrimi, ağ güvenliği ile kullanıcı gizliliği arasındaki artan gerilimi de yansıtmaktadır. Kurumsal ağ yöneticileri, güvenlik politikalarını uygulamak için DNS trafiğini izlemek ve kontrol etmek isterken, DoH gibi protokoller bu trafiği standart HTTPS trafiği içinde gizleyerek bu izlemeyi zorlaştırır. Bu durum, teknik bir protokol seçiminin ötesinde, kontrolün kimde olacağına dair felsefi bir mücadeleyi de beraberinde getirmektedir: ağ yöneticisi mi, yoksa son kullanıcı/uygulama mı?

---

### Ağ Savunma Teknolojileri

Bu başlık, teorik güvenlik prensiplerinin ve kriptografik mekanizmaların, ağları korumak için kullanılan somut teknolojiler ve mimarilerle nasıl hayata geçirildiğini ele almaktadır. Savunma teknolojilerinin basit filtrelemeden, bağlama duyarlı ve akıllı önleme sistemlerine doğru evrimi incelenecek ve ağları izole edilmiş segmentlere ayırmanın stratejik önemi vurgulanacaktır.

### Güvenlik Duvarları (Firewalls)

Güvenlik duvarları, ağ çevresinin en temel güvenlik bileşenidir ve ağ trafiğini önceden tanımlanmış kurallara göre filtreler. Teknolojinin evrimiyle birlikte, güvenlik duvarları daha karmaşık ve akıllı hale gelmiştir.

#### Durumsuz (Stateless) ve Durum Bilgili (Stateful) Karşılaştırması

* **Durumsuz (Stateless) Firewall:** Bu en temel güvenlik duvarı türüdür. Her bir ağ paketini, önceki paketlerden bağımsız olarak, yalnızca başlık bilgilerine (kaynak/hedef IP adresi, port numarası) bakarak değerlendirir. Hızlıdır ve yüksek trafik yükleri altında iyi performans gösterir, ancak bir bağlantının genel bağlamını (state) izlemediği için karmaşık saldırılara karşı sınırlı koruma sağlar.
* **Durum Bilgili (Stateful) Firewall:** Bu güvenlik duvarları, ağ bağlantılarının durumunu bir “durum tablosunda” (state table) izler. Bir bağlantı kurulduğunda, bu bağlantıya ait tüm paketlerin durumunu takip eder. Bu sayede, meşru bir isteğe yanıt olarak gelmeyen veya bağlantı sırasına uymayan paketleri tespit edip engelleyebilir. Durumsuz güvenlik duvarlarına göre çok daha güvenlidirler ve modern ağların standardını oluştururlar.

#### Yeni Nesil Güvenlik Duvarları (NGFW) ve Uygulama Farkındalığı

Yeni Nesil Güvenlik Duvarları (NGFW), durum bilgili denetimin ötesine geçen gelişmiş özellikler sunar. Saldırganlar, kötü amaçlı yazılımları izin verilen portlar (örneğin, web trafiği için port 80/443) üzerinden tünelleyerek geleneksel güvenlik duvarlarını atlatmaya başlayınca, savunma da trafiğin “içeriğine” bakabilen ve “uygulama bağlamını” anlayan NGFW’lere evrilmek zorunda kalmıştır. NGFW’lerin temel özellikleri şunlardır:

* **Uygulama Farkındalığı (Application Awareness):** Trafiği port ve protokole göre değil, trafiği oluşturan uygulamaya (örneğin, Facebook, BitTorrent, Skype) göre tanımlama ve kontrol etme yeteneği.
* **Derin Paket Denetimi (Deep Packet Inspection — DPI):** Paketlerin sadece başlıklarını değil, aynı zamanda içeriklerini (payload) de inceleyerek kötü amaçlı yazılımları, istismarları ve diğer tehditleri tespit etme.
* **Entegre Saldırı Önleme Sistemi (IPS):** Bilinen güvenlik açıklarını ve istismarları aktif olarak tespit edip engelleme.
* **Kimlik Tabanlı Farkındalık:** Kullanıcı kimliklerini (örneğin, Active Directory entegrasyonu ile) ağ trafiğiyle ilişkilendirerek, IP adresleri yerine belirli kullanıcılara veya kullanıcı gruplarına göre politikalar oluşturma.

#### Web Uygulama Güvenlik Duvarı (WAF)

Web Uygulama Güvenlik Duvarı (WAF), özellikle web uygulamalarını hedef alan saldırılara karşı koruma sağlamak için tasarlanmış, OSI modelinin 7. katmanında (Uygulama Katmanı) çalışan özel bir güvenlik duvarı türüdür. OWASP (Open Web Application Security Project) Top 10 listesinde yer alan en kritik web uygulama güvenlik risklerine karşı koruma sağlamada etkilidir. Bunlar arasında SQL Enjeksiyonu (SQLi) ve Siteler Arası Betik Çalıştırma (XSS) gibi saldırılar bulunur.1 Bir WAF ve NGFW birbirinin yerine geçmez, aksine birbirini tamamlar. Bir NGFW genel ağ trafiği için geniş bir koruma sağlarken, bir WAF web sunucusunun önünde duran ve sadece HTTP/HTTPS dilindeki en ince hileleri bile anlayan bir uzmandır.

### Saldırı Tespit ve Önleme Sistemleri (IDS/IPS)

Saldırı Tespit Sistemleri (IDS) ve Saldırı Önleme Sistemleri (IPS), ağ trafiğini veya sistem aktivitelerini kötü niyetli faaliyetler veya politika ihlalleri açısından izleyen güvenlik çözümleridir. Temel fark, IDS’nin pasif olarak dinleyip sadece uyarı üretmesi, IPS’nin ise trafiğin içinden geçerek (in-line) tehditleri aktif olarak engellemesidir.1

#### İmza Tabanlı ve Anomali Tabanlı Tespit Yöntemleri

IDS/IPS sistemleri, tehditleri tespit etmek için iki temel yöntemi kullanır:

* **İmza Tabanlı Tespit:** Gözlemlenen trafiği, bilinen saldırıların (virüsler, istismarlar) benzersiz desenlerini veya “imzalarını” içeren bir veritabanıyla karşılaştırır. Bilinen tehditleri tespit etmede çok etkilidir, ancak yeni (sıfır gün) saldırılara karşı kördür.
* **Anomali Tabanlı Tespit:** Ağın “normal” davranış profilini (baseline) oluşturmak için makine öğrenimini kullanır. Bu normal profilden sapan herhangi bir aktiviteyi potansiyel bir tehdit olarak işaretler. Yeni ve bilinmeyen saldırıları tespit etme potansiyeline sahiptir, ancak yanlış pozitif (false positive) uyarılar üretme eğilimi daha yüksektir.

Bu iki yöntem arasındaki seçim, “kesinlik” ve “kapsam” arasında bir ödünleşimdir. İmza tabanlı sistemler, “bildiğimiz kötülere” karşı yüksek kesinlik sunarken, anomali tabanlı sistemler “bilmediğimiz kötülere” karşı daha geniş bir kapsama alanı sunar. Modern güvenlik sistemleri, bu iki yaklaşımı hibrit bir modelde birleştirerek her ikisinin de avantajlarından yararlanmaya çalışır.

![](https://cdn-images-1.medium.com/max/800/1*IwTYwOqFbmnzoAnDVPl8DA.png)

**IDS/IPS Tespit Yöntemlerinin Karşılaştırması**

### Sanal Özel Ağlar (VPN) Mimarileri

Sanal Özel Ağ (VPN), genel bir ağ (genellikle internet) üzerinden güvenli ve şifreli bir bağlantı tüneli oluşturarak özel bir ağın genişletilmesini sağlayan bir teknolojidir.

#### Uzaktan Erişim (Remote Access) ve Siteden Siteye (Site-to-Site) VPN

* **Uzaktan Erişim (Remote Access) VPN:** Bireysel kullanıcıların (örneğin, evden çalışanlar, seyahat eden personel) şirket ağına güvenli bir şekilde bağlanmasını sağlar. Kullanıcının cihazına bir VPN istemci yazılımı yüklenir. Bu senaryo için genellikle esneklikleri nedeniyle SSL/TLS VPN’ler tercih edilir.
* **Siteden Siteye (Site-to-Site) VPN:** Bir kuruluşun coğrafi olarak farklı konumlardaki ofislerini (örneğin, merkez ofis ile şubeler) internet üzerinden güvenli bir şekilde birbirine bağlamak için kullanılır. Her sitede bir VPN ağ geçidi bulunur ve bu ağ geçitleri arasında kalıcı bir şifreli tünel oluşturulur. IPsec, ağ katmanında çalıştığı ve tüm IP trafiğini koruyabildiği için siteden siteye VPN’ler için fiili standart haline gelmiştir.

### Güvenlik Bilgi ve Olay Yönetimi (SIEM)

Güvenlik Bilgileri ve Olay Yönetimi (SIEM), bir kuruluşun BT altyapısındaki çeşitli kaynaklardan (ağ cihazları, sunucular, uygulamalar, güvenlik sistemleri) gelen güvenlik verilerini ve olay günlüklerini (log) merkezi olarak toplayan, analiz eden ve ilişkilendiren bir teknolojidir.

SIEM, Savunma Derinliği stratejisinin “beyni” veya “sinir merkezi” olarak işlev görür. Farklı katmanlardaki savunma teknolojileri (firewall, IPS, EDR) “sensörler” ise, SIEM bu sensörlerden gelen tüm sinyalleri toplayan, anlamlandıran ve bir tehdit algıladığında alarm üreten merkezi birimdir.

SIEM’in en güçlü yeteneği, farklı kaynaklardan gelen olayları **ilişkilendirerek (korelasyon)**, tek başlarına anlamsız veya düşük öncelikli görünen ancak bir araya geldiklerinde bir saldırı modelini ortaya çıkaran desenleri tespit etmektir.1 Örneğin, bir güvenlik duvarı logundaki port taraması, bir Active Directory logundaki çok sayıda başarısız giriş denemesi ve bir antivirüs logundaki malware tespiti tek başlarına farklı olaylar olabilir. SIEM, bu üç olayın aynı kaynaktan, kısa bir süre içinde gerçekleştiğini ilişkilendirerek bunu yüksek öncelikli bir saldırı girişimi olarak işaretleyebilir. Bir SIEM platformunun değeri, sadece teknolojiye değil, aynı zamanda üzerine inşa edilen “zeka”ya (korelasyon kuralları, tehdit istihbaratı akışları, analistlerin uzmanlığı) bağlıdır.

---

### Kablosuz Ağ (WLAN) Yönetimi ve Güvenliği

Kurumsal ortamlarda kablosuz ağlar, verimlilik ve esneklik için vazgeçilmez hale gelmiştir. Ancak yüzlerce, hatta binlerce erişim noktasının (Access Point — AP) bulunduğu bu ortamlarda yönetim, güvenlik ve performans optimizasyonu ciddi zorluklar barındırır. Bu bölümde, modern WLAN mimarileri, kurumsal düzeyde kimlik doğrulama yöntemleri, güvenlik tehditleri ve performans optimizasyonu stratejileri detaylı olarak ele alınacaktır.

### Merkezi AP Yönetim Mimarileri

Çok sayıda AP’nin bulunduğu bir ağda, her bir cihazı tek tek yapılandırmak ve izlemek operasyonel olarak imkansızdır. Bu nedenle, tüm AP’lerin tek bir merkezden yönetilmesini, izlenmesini ve yapılandırılmasını sağlayan merkezi yönetim çözümleri kullanılır.12 Bu çözümler temel olarak iki mimari modelde sunulmaktadır: yerleşik (on-premise) ve bulut tabanlı.

#### On-Premise WLC (Yerleşik Denetleyici)

Bu modelde, Kablosuz LAN Denetleyicisi (Wireless LAN Controller — WLC) adı verilen fiziksel bir cihaz, kurumun kendi veri merkezinde barındırılır. AP’ler, bu merkezi WLC’ye bağlanır ve tüm yönetim, yapılandırma ve genellikle veri trafiği bu cihaz üzerinden akar.

**Avantajları:**

* **Tam Kontrol ve Veri Gizliliği:** Tüm ağ trafiği ve yönetim verileri kurumun kendi ağı içinde kaldığı için veri gizliliği ve güvenlik üzerinde maksimum kontrol sağlanır. Bu, özellikle finans ve sağlık gibi yüksek regülasyona tabi sektörler için kritik bir avantajdır.13
* **Derin Entegrasyon:** Yerel Active Directory, RADIUS sunucuları ve güvenlik duvarları gibi diğer kurumsal sistemlerle derin ve özelleştirilmiş entegrasyonlar yapılabilir.14
* **Performans:** Trafiğin yerel olarak işlenmesi, internet bağlantısının durumundan etkilenmeyen, tutarlı ve düşük gecikmeli bir performans sunabilir.

**Dezavantajları:**

* **Yüksek Başlangıç Maliyeti:** Fiziksel WLC cihazlarının satın alınması ve kurulumu önemli bir başlangıç yatırımı (CapEx) gerektirir.
* **Bakım Sorumluluğu:** WLC’nin donanım bakımı, yazılım güncellemeleri ve yedekliliği tamamen kurumun BT ekibinin sorumluluğundadır.13
* **Sınırlı Ölçeklenebilirlik:** Ağ büyüdükçe, mevcut WLC’nin kapasitesi (desteklediği AP ve kullanıcı sayısı) aşılabilir ve bu da yeni donanım yatırımlarını gerektirir.

#### Cloud-Managed WLC (Bulut Tabanlı Yönetim)

Bu modern mimaride, AP’lerin yönetim ve kontrol düzlemi, Cisco Meraki veya Aruba Central gibi bir bulut platformu üzerinden sağlanır. AP’ler internet üzerinden bu bulut platformuna bağlanarak yapılandırmalarını alır ve durumlarını raporlar. Veri trafiği ise genellikle doğrudan internete çıkar (split-tunneling), bu da merkezi veri merkezindeki darboğazları önler.

**Avantajları:**

* **Kolay Kurulum ve Yönetim:** Zero Touch Provisioning (ZTP) özelliği sayesinde, AP’ler herhangi bir ön yapılandırma olmadan doğrudan şubelere gönderilebilir. Cihaz internete bağlandığı anda buluttan yapılandırmasını otomatik olarak alır ve çalışmaya başlar. Bu, özellikle çok sayıda şubesi olan kurumlar için dağıtımı büyük ölçüde basitleştirir.14
* **Düşük Başlangıç Maliyeti:** Fiziksel bir denetleyiciye ihtiyaç duyulmadığı için başlangıç maliyeti düşüktür. Model, genellikle abonelik tabanlı bir operasyonel harcama (OpEx) modeline dayanır.13
* **Yüksek Ölçeklenebilirlik:** Bulut altyapısı sayesinde, ağa yeni AP’ler eklemek son derece kolaydır ve sistem binlerce cihazı sorunsuzca yönetebilir.14
* **Merkezi Görünürlük:** Coğrafi olarak dağınık tüm lokasyonlardaki ağ, tek bir web arayüzünden izlenebilir ve yönetilebilir.14

**Dezavantajları:**

* **İnternet Bağımlılığı:** Yönetim platformuna erişim ve AP’lerin yapılandırma alması için sürekli bir internet bağlantısı gereklidir.
* **Veri Gizliliği Endişeleri:** Yönetim verileri bulutta saklandığı için, bazı kurumlar için veri gizliliği ve uyumluluk endişeleri doğurabilir.
* **Abonelik Maliyeti:** Sürekli bir abonelik ücreti gerektirir ve bu, uzun vadede toplam sahip olma maliyetini artırabilir.

Bu iki model arasındaki seçim, sadece teknik bir karar değil, aynı zamanda kurumun BT stratejisi, bütçe yapısı (CapEx vs. OpEx), büyüme hedefleri, personel yetkinliği ve risk toleransı ile doğrudan ilişkili stratejik bir karardır.

#### Otomasyon ve Optimizasyon Özellikleri

Merkezi yönetim platformları, kablosuz ağın performansını ve kararlılığını artırmak için çeşitli otomasyon özellikleri sunar:

**RF (Radyo Frekansı) Optimizasyonu:** Platformlar, RF ortamını sürekli izleyerek AP’lerin kanal ve yayın gücü ayarlarını dinamik olarak optimize eder. Bu, komşu AP’ler arasındaki paraziti (co-channel interference) en aza indirir.

**İstemci Yönetimi:**

* **Band Steering:** Çift bant (2.4 GHz ve 5 GHz) destekleyen istemcileri, daha az yoğun ve daha yüksek performanslı olan 5 GHz bandına yönlendirir.
* **Load Balancing:** Bir AP’ye çok fazla istemci bağlandığında, bu istemcilerden bazılarını yakındaki daha az yoğun olan diğer AP’lere yönlendirerek yükü dengeler.

### Kurumsal Düzeyde Güvenli Kimlik Doğrulama

Ev veya küçük ofis ağlarında yaygın olarak kullanılan WPA-Personal (PSK — Önceden Paylaşılmış Anahtar) güvenlik yöntemi, tüm kullanıcıların aynı parolayı paylaştığı bir modeldir. Bu parolanın bir çalışandan sızması, tüm ağın güvenliğini tehlikeye atar. Bu nedenle, kurumsal ortamlar için kesinlikle yetersiz ve güvensizdir.15 Kurumsal ağlar, her kullanıcının kendi benzersiz kimlik bilgileriyle doğrulandığı WPA2/WPA3-Enterprise standardını kullanır. Bu standardın temelini IEEE 802.1X protokolü oluşturur.

#### 802.1X Port Tabanlı Ağ Erişim Kontrolü

802.1X, bir cihazın kablolu veya kablosuz ağa erişim izni almadan önce kimliğinin merkezi bir sunucu tarafından doğrulanmasını sağlayan bir IEEE standardıdır. Bu mimari üç temel bileşenden oluşur:

1. **Supplicant (İstemci):** Ağa bağlanmak isteyen son kullanıcı cihazıdır (örneğin, bir dizüstü bilgisayar veya akıllı telefon).
2. **Authenticator (Kimlik Doğrulayıcı):** Ağa fiziksel erişim sağlayan cihazdır. Kablosuz ağlarda bu rolü Access Point (AP), kablolu ağlarda ise switch üstlenir. Authenticator, istemci ile kimlik doğrulama sunucusu arasında bir aracı görevi görür.
3. **Authentication Server (Kimlik Doğrulama Sunucusu):** Genellikle RADIUS (Remote Authentication Dial-In User Service) protokolünü kullanan bir sunucudur. Kullanıcı kimlik bilgilerinin saklandığı veritabanına (örneğin, Microsoft Active Directory) erişerek kimlik doğrulama işlemini gerçekleştirir ve erişim kararını verir.

#### Teknik İşleyiş ve Akış Süreci

802.1X kimlik doğrulama süreci, Genişletilebilir Kimlik Doğrulama Protokolü (Extensible Authentication Protocol — EAP) kullanılarak gerçekleştirilir. Süreç adımları aşağıdaki gibidir:

1. **Başlatma (Initiation):** İstemci (Supplicant), AP’ye (Authenticator) bir bağlantı talebi gönderir. AP, bu istemcinin bağlı olduğu sanal portu “yetkisiz” (unauthorized) duruma getirir ve sadece EAP kimlik doğrulama trafiğinin geçişine izin verir. Diğer tüm ağ trafiği (HTTP, DNS vb.) engellenir.
2. **EAP İletişimi:** AP, istemciye bir “EAP-Request/Identity” paketi göndererek kimliğini sorar. İstemci, kullanıcı adını içeren bir “EAP-Response/Identity” paketi ile yanıt verir.
3. **RADIUS Yönlendirme:** AP, istemciden aldığı EAP yanıtını bir RADIUS “Access-Request” paketi içine koyarak RADIUS sunucusuna (Authentication Server) iletir. AP, EAP paketlerinin içeriğini anlamak zorunda değildir; sadece bir aracıdır.18
4. **Kimlik Doğrulama:** RADIUS sunucusu, istemci ile arasında güvenli bir tünel (örneğin, PEAP veya EAP-TLS kullanılarak) oluşturur ve istemciden asıl kimlik bilgilerini (parola veya dijital sertifika) talep eder. RADIUS sunucusu, bu bilgileri Active Directory gibi bir kimlik deposunda doğrular.18
5. **Yetkilendirme:** Doğrulama başarılı olursa, RADIUS sunucusu AP’ye bir RADIUS “Access-Accept” mesajı gönderir. Bu mesaj, kimlik doğrulamanın başarılı olduğunu bildirir. Başarısız olursa “Access-Reject” mesajı gönderilir.
6. **Ağ Erişimi:** AP, “Access-Accept” mesajını aldığında, istemcinin bağlı olduğu portu “yetkili” (authorized) duruma getirir ve istemcinin ağa tam erişimine izin verir. Bu aşamadan sonra, istemci ile AP arasında veri trafiğini şifrelemek için WPA2/WPA3 tarafından kullanılan şifreleme anahtarları oluşturulur ve tüm veri trafiği AES (Advanced Encryption Standard) ile şifrelenir.

802.1X’in gücü, sadece kimlik doğrulaması yapmasından değil, aynı zamanda dinamik politikalar uygulama yeteneğinden gelir. RADIUS sunucusu, “Access-Accept” mesajıyla birlikte VLAN ID, Erişim Kontrol Listeleri (ACL’ler) veya Bant Genişliği Sınırlamaları gibi yetkilendirme nitelikleri (attributes) gönderebilir. Örneğin, bir mühendis bağlandığında “Mühendislik VLAN’ına”, bir misafir bağlandığında ise internete kısıtlı erişimi olan “Misafir VLAN’ına” otomatik olarak atanabilir. Bu, “kimlik ağın yeni çevresidir” (identity is the new perimeter) konseptinin ve Sıfır Güven felsefesinin temel bir uygulamasıdır.

### 2.3. Rogue AP Tespiti ve Engellenmesi

Rogue AP (Yetkisiz Erişim Noktası), bir ağ yöneticisinin izni olmadan kurumsal ağa bağlanan herhangi bir kablosuz erişim noktasıdır. Bu cihazlar, genellikle çalışanlar tarafından kendi kolaylıkları için (örneğin, daha iyi sinyal almak amacıyla) iyi niyetle kurulabileceği gibi, bir saldırgan tarafından ağı dinlemek veya ağa sızmak amacıyla da kurulabilir. Her iki durumda da, bu cihazlar ağda ciddi bir güvenlik açığı oluşturur ve veri ihlallerine, kötü amaçlı yazılım (malware) yayılımına ve Ortadaki Adam (Man-in-the-Middle) saldırılarına zemin hazırlar.

#### Tespit Yöntemleri

Etkili bir Rogue AP tespiti, proaktif ve çok katmanlı bir yaklaşım gerektirir:

* **Wireless Intrusion Detection/Prevention Systems (WIDS/WIPS):** Modern kurumsal WLAN sistemleri, bu özelliği yerleşik olarak sunar. Yetkili AP’ler, normal hizmet vermenin yanı sıra, periyodik olarak RF ortamını tarayarak kendi ağlarına ait olmayan diğer AP’leri dinlerler. Kurumsal ağa kabloyla bağlı olduğu tespit edilen yetkisiz bir AP bulunduğunda, sistem alarm üretir. WIPS sistemleri, bu Rogue AP’ye bağlı istemcilere sahte de-authentication (kimlik doğrulamasını sonlandırma) paketleri göndererek bağlantılarını koparmaya çalışabilir.
* **RF Tarama Araçları:** Ekahau veya AirMagnet gibi özel RF tarama araçları, RF spektrumunu detaylı bir şekilde analiz ederek, standart WIDS sistemlerinin gözden kaçırabileceği gizlenmiş veya düşük güçlü AP’leri bile tespit edebilir. Bu araçlar, yetkisiz cihazın fiziksel konumunu üçgenleme (triangulation) yöntemiyle bulmaya da yardımcı olur.23
* **Manuel Ağ Denetimleri:** BT ekipleri, onaylanmış ve envanterde kayıtlı AP’lerin bir listesini tutmalıdır. Periyodik olarak yapılan fiziksel denetimler ve ağ taramaları ile bu liste dışındaki cihazlar tespit edilebilir.23

#### Engelleme ve Önleme Stratejileri

Rogue AP’leri tespit etmek kadar, kurulmalarını en başından engellemek de önemlidir:

* **Ağ Erişim Kontrolü (NAC):** En etkili önleme yöntemidir. 802.1X tabanlı NAC uygulandığında, bir ağ portuna bağlanan herhangi bir cihazın (bir Rogue AP dahil) kimliği doğrulanmadan ağa erişmesi engellenir. Cihaz yetkili değilse, port aktif hale gelmez.
* **Kullanılmayan Portların Kapatılması:** Ofislerdeki ve toplantı odalarındaki kullanılmayan tüm ethernet portları switch üzerinden kapatılmalıdır. Bu, bir saldırganın veya çalışanın kolayca bir cihaz bağlamasını engeller.
* **Fiziksel Güvenlik:** Ağ anahtarlarının ve diğer altyapı cihazlarının bulunduğu iletişim dolapları ve sistem odaları her zaman kilitli tutulmalıdır.
* **Hızlı Müdahale Prosedürü:** Bir Rogue AP tespit edildiğinde, güvenlik ekibi derhal harekete geçmelidir. İlk adım, cihazın bağlı olduğu switch portunu tespit edip uzaktan kapatmaktır. Ardından, cihazın fiziksel konumu bulunarak ağdan kalıcı olarak kaldırılmalıdır.

### Performans ve Kapsama Alanı Optimizasyonu (Wireless Site Survey)

Yüksek performanslı ve güvenilir bir kablosuz ağ, sadece güçlü AP’ler satın alarak kurulamaz. AP’lerin sayısı, yerleşimi ve yapılandırması, binanın fiziksel yapısı ve RF ortamının durumu gibi birçok faktöre bağlıdır. Wireless Site Survey (Kablosuz Alan Taraması), bu faktörleri bilimsel olarak analiz ederek optimum ağ tasarımını oluşturma sürecidir.26

#### Süreç Adımları

Profesyonel bir site survey süreci genellikle aşağıdaki adımları içerir:

1. **Gereksinimlerin Belirlenmesi (Pre-Survey):** Bu aşama, projenin temelini oluşturur. Müşteri ile görüşülerek iş ve teknik hedefler netleştirilir. Desteklenmesi gereken kullanıcı ve cihaz sayısı, kullanılacak uygulamaların türü (örneğin, yüksek çözünürlüklü video konferans, sesli görüşme (VoIP), standart veri), istenen minimum sinyal gücü (RSSI, genellikle -67 dBm veya daha iyi), sinyal-gürültü oranı (SNR) ve kapasite ihtiyaçları gibi kritik metrikler belirlenir.26
2. **Fiziksel Alanın İncelenmesi ve Haritaların Hazırlanması:** Kurulum yapılacak alanın kat planları (tercihen CAD veya yüksek çözünürlüklü resim formatında) temin edilir. Bu planlar, site survey yazılımına yüklenir ve doğru bir şekilde ölçeklendirilir. Alanın fiziksel bir turu atılarak duvarların yapıldığı malzeme (beton, alçıpan, cam), büyük metal objeler, asansör boşlukları ve sinyal yayılımını etkileyebilecek diğer potansiyel engeller not edilir.26
3. **Veri Toplama (On-site Survey):** Bu aşamada, Ekahau veya Hamina gibi profesyonel site survey yazılımları ve bu yazılımlarla uyumlu bir Wi-Fi adaptörü (örneğin, Ekahau Sidekick) kullanılır. Analist, kat planı üzerinde önceden belirlenmiş yollarda yürüyerek aktif olarak veri toplar. Bu süreçte aşağıdaki metrikler ölçülür:  
   **Sinyal Gücü (RSSI):** AP’lerden gelen sinyalin gücü.  
   **Sinyal-Gürültü Oranı (SNR):** Sinyalin ortamdaki RF gürültüsüne oranı.  
   **Parazit (Interference):** Diğer Wi-Fi ağları, mikrodalga fırınlar, kablosuz kameralar gibi Wi-Fi dışı kaynaklardan gelen parazitler.  
   **Kanal Çakışması:** Komşu AP’lerin aynı veya bitişik kanalları kullanarak birbirini engellemesi.
4. **Veri Analizi ve Tasarım:** Toplanan veriler, yazılım tarafından işlenerek “ısı haritaları” (heatmaps) oluşturulur. Bu haritalar, sinyal kapsama alanını, SNR seviyelerini, kanal çakışmalarını ve veri hızlarını renk kodlarıyla görselleştirir. Bu analiz sonucunda, kapsama ve kapasite hedeflerini karşılayacak en uygun AP yerleri, AP modelleri, anten tipleri, kanal planı ve güç ayarları belirlenir.
5. **Doğrulama (Post-Installation Survey):** AP’ler, tasarıma uygun olarak kurulduktan sonra, ağın planlanan hedeflere ulaşıp ulaşmadığını doğrulamak için son bir survey yapılır. Bu doğrulama taraması, olası kör noktaları veya performans sorunlarını tespit etme ve son ince ayarları yapma imkanı tanır.

---

### Bölüm III: Kablolu Ağ Mimarisi ve Güvenliği

Kablolu ağlar, kurumsal altyapının temelini oluşturarak yüksek hız, kararlılık ve güvenlik sunar. Kablosuz teknolojilerin yaygınlaşmasına rağmen, sunucular, masaüstü bilgisayarlar ve kritik altyapı cihazları için kablolu bağlantılar hala birincil tercihtir. Bu bölümde, modern kablolu ağların güvenliğini ve verimliliğini artırmak için kullanılan temel teknolojiler olan VLAN ile ağ segmentasyonu, Ağ Erişim Kontrolü (NAC) ve DMZ mimarisi incelenecektir.

### VLAN ile Ağ Segmentasyonu

Ağ segmentasyonu, büyük bir ağı daha küçük, yönetilebilir ve izole alt ağlara bölme işlemidir. Bu işlemin en yaygın ve temel uygulama yöntemi Sanal Yerel Alan Ağları (Virtual Local Area Networks — VLAN) kullanmaktır.

#### Tanım ve Amaç

VLAN, fiziksel olarak aynı ağ anahtarına (switch) bağlı olan cihazları, mantıksal olarak farklı ağ gruplarına ayırma teknolojisidir. Her VLAN, kendi başına ayrı bir yayın alanı (broadcast domain) olarak çalışır. VLAN kullanmanın temel amaçları şunlardır:

* **Güvenliği Artırmak:** Farklı departmanlara (örneğin, Finans, İnsan Kaynakları) veya farklı kullanıcı türlerine (örneğin, Kurumsal, Misafir) ait cihazları ayrı VLAN’lara yerleştirerek aralarındaki iletişimi kısıtlamak. Bu, bir segmentteki güvenlik ihlalinin diğer segmentlere yayılmasını (yanal hareket — lateral movement) zorlaştırır.
* **Performansı İyileştirmek:** Ağdaki yayın (broadcast) trafiği, sadece ait olduğu VLAN içinde kalır ve diğer VLAN’lara iletilmez. Bu, özellikle büyük ağlarda gereksiz trafiği azaltarak ağ genelindeki performansı artırır.
* **Yönetimi Kolaylaştırmak:** Cihazları fiziksel konumlarından bağımsız olarak mantıksal gruplara ayırma esnekliği sağlar. Örneğin, farklı katlardaki tüm muhasebe departmanı bilgisayarları aynı VLAN’ın bir parçası olabilir.

#### Çalışma Prensibi (IEEE 802.1Q)

VLAN’ların switch’ler arasında taşınabilmesi için IEEE 802.1Q standardı kullanılır. Bu standart, switch’ler arası bağlantılarda (trunk port) iletilen her Ethernet çerçevesine 4 byte’lık bir “VLAN etiketi” ekler. Bu etiket, çerçevenin hangi VLAN’a ait olduğu bilgisini (VLAN ID) içerir. Alıcı switch, bu etikete bakarak çerçeveyi doğru VLAN’a yönlendirir. Son kullanıcı cihazlarına bağlı olan portlar (access port) ise genellikle tek bir VLAN’a atanır ve bu portlardan gelen/giden trafik etiketlenmez.29

#### Yapılandırma Adımları

Tipik bir VLAN yapılandırması şu adımları içerir:

1. **İhtiyaçların Belirlenmesi:** Ağı hangi mantıksal gruplara ayırmak istediğinizi planlayın (örneğin, departmanlar, sunucular, IP telefonlar, misafirler).28
2. **VLAN’ların Oluşturulması:** Ağdaki tüm switch’lerde ihtiyaç duyulan VLAN’ları, benzersiz bir VLAN ID (1–4094 arası bir sayı) ve açıklayıcı bir isimle oluşturun (örneğin, VLAN 10 NAME Yonetim).
3. **VLAN’lar Arası Yönlendirme (Inter-VLAN Routing):** Varsayılan olarak, farklı VLAN’lardaki cihazlar birbirleriyle iletişim kuramazlar. İletişimi sağlamak için bir Katman 3 (Layer 3) cihaza ihtiyaç vardır. Bu genellikle bir L3 Switch veya bir router’dır. Bu cihaz üzerinde her VLAN için bir Sanal Switch Arayüzü (Switched Virtual Interface — SVI) oluşturulur ve bir IP adresi atanır. Bu SVI’lar, o VLAN’daki cihazlar için varsayılan ağ geçidi (default gateway) görevi görerek VLAN’lar arası trafiği yönlendirir.
4. **Port Atamaları:**

* **Access Portlar:** Son kullanıcı cihazlarının (PC, yazıcı vb.) bağlanacağı portları, ilgili VLAN’a “access” modunda atayın (örneğin, switchport mode access, switchport access vlan 10).29
* **Trunk Portlar:** Switch’ler arası veya switch ile router/firewall arası bağlantıları sağlayacak portları “trunk” modunda yapılandırın. Bu portlar üzerinden birden fazla VLAN’ın trafiği taşınacaktır. Güvenlik için, trunk üzerinden geçmesine izin verilen VLAN’ları manuel olarak belirtmek en iyi uygulamadır (örneğin, switchport mode trunk, switchport trunk allowed vlan)

#### En İyi Uygulamalar (Best Practices)

* **VLAN 1'i Kullanmaktan Kaçının:** Tüm switch’lerde varsayılan olarak gelen VLAN 1, genellikle varsayılan yönetim ve native VLAN olarak ayarlanmıştır. Bu durum, VLAN atlama gibi çeşitli saldırılara karşı bir zafiyet oluşturur. Bu nedenle, VLAN 1 kullanıcı veya yönetim trafiği için kullanılmamalı, tüm portlar başka VLAN’lara atanmalıdır.
* **Ayrı Yönetim ve Native VLAN’lar Oluşturun:** Ağ cihazlarının (switch, router, AP) yönetimi için ayrı bir “Yönetim VLAN’ı” oluşturulmalı ve bu VLAN’a erişim sıkı bir şekilde kontrol edilmelidir. Trunk portlarda etiketlenmemiş trafiğin ait olduğu “Native VLAN” ise kullanılmayan, izole bir “kara delik” (black hole) VLAN olarak ayarlanmalıdır. Bu, çift etiketleme (double tagging) saldırılarını önlemeye yardımcı olur.
* **Kullanılmayan Portları Güvenli Hale Getirin:** Switch’lerdeki kullanılmayan tüm portlar kapatılmalı (shutdown) ve güvenlik amacıyla kullanılmayan ölü bir VLAN’a atanmalıdır. Bu, yetkisiz bir kişinin porta bir cihaz takarak ağa sızmasını engeller.
* **VLAN’ları Yerel Tutun (Limit VLAN Spanning):** Mümkün olduğunca, bir VLAN’ın birden fazla erişim katmanı switch’ine yayılmasından kaçınılmalıdır. VLAN’ları tek bir switch veya kabinet ile sınırlamak, Spanning Tree Protocol (STP) karmaşıklığını azaltır ve potansiyel yayın fırtınalarının (broadcast storms) etkisini sınırlar.

### Ağ Erişim Kontrolü (NAC)

Ağ Erişim Kontrolü (NAC), Sıfır Güven mimarisinin temel uygulama araçlarından biridir. Ağa bağlanmaya çalışan her cihazın ve kullanıcının kimliğini doğrulayan ve önceden tanımlanmış güvenlik politikalarına uygunluğunu denetleyen bir çözümdür. Temel amacı, yalnızca yetkili ve “sağlıklı” (güvenlik standartlarına uygun) cihazların ağ kaynaklarına erişmesini sağlamaktır.36

#### Çalışma Prensibi ve Aşamaları

Bir NAC çözümü, ağa erişimi dört temel aşamada kontrol eder:

1. **Kimlik Doğrulama (Authentication):** Ağa bağlanmaya çalışan cihazın veya kullanıcının kimliğini doğrular. Bu işlem için genellikle 802.1X protokolü, MAC adresi doğrulama veya web tabanlı bir captive portal kullanılır.
2. **Güvenlik Taraması (Posture Assessment):** Cihazın güvenlik duruşunu analiz eder. Bu kontrol, cihazın işletim sistemi sürümü ve yama seviyesi, antivirüs yazılımının kurulu ve güncel olup olmadığı, güvenlik duvarının aktif olup olmadığı gibi bir dizi kriteri içerebilir.
3. **Yetkilendirme ve Politika Uygulama (Authorization):** Cihazın kimliği ve güvenlik taramasının sonuçlarına göre, önceden tanımlanmış politikalar uygulanır. Olası sonuçlar şunlardır:  
   **Tam Erişim:** Cihaz tüm politikalara tam uyumluysa, kurumsal ağa tam erişim izni verilir.  
   **Kısıtlı Erişim (Karantina):** Cihaz kısmen uyumluysa (örneğin, antivirüs imzaları eski), sadece internet erişimi olan veya iyileştirme sunucularına erişebilen izole bir “karantina VLAN’ına” yönlendirilir.  
   **Erişim Engellendi:** Cihaz politikalara uyumsuzsa veya yetkisizse, ağa erişimi tamamen engellenir.
4. **İyileştirme (Remediation):** Karantinaya alınan cihazlara, güvenlik eksikliklerini gidermeleri için gerekli kaynaklar (örneğin, yazılım güncelleme sunucuları) sunulur. Cihaz uyumlu hale geldikten sonra tekrar taranır ve başarılı olursa tam ağ erişimi verilir.

NAC çözümlerinin uygulanması, özellikle mevcut altyapı ve çeşitli cihaz türleri (BYOD, IoT) ile entegrasyon zorlukları nedeniyle karmaşık olabilir. Başarılı bir NAC projesi, sadece teknoloji dağıtımı değil, aynı zamanda kapsamlı bir envanter çalışması, net politika tanımı ve farklı BT ekipleri (ağ, güvenlik, sistem) arasında sıkı bir işbirliği gerektiren stratejik bir girişimdir.

### DMZ (Askerden Arındırılmış Bölge) Mimarisi

#### Tanım ve Rolü

DMZ (Demilitarized Zone), bir kuruluşun güvenli iç ağı (LAN) ile güvenilmeyen dış ağ (internet) arasında konumlandırılan, kontrollü bir tampon ağ segmentidir. DMZ’nin temel amacı, web sunucusu, e-posta sunucusu ve harici DNS sunucusu gibi internetten erişilebilir olması gereken hizmetleri barındırmaktır. Bu sunucular DMZ’ye yerleştirilerek, olası bir saldırıda bu sunuculardan birinin ele geçirilmesi durumunda bile saldırganın doğrudan hassas verilerin bulunduğu iç ağa sızması engellenir. DMZ, iç ağa ek bir güvenlik katmanı sağlar.

#### Mimari Tasarımlar

DMZ oluşturmak için en yaygın iki mimari yaklaşım vardır:

* **Tek Güvenlik Duvarı (Three-Legged Model):** Bu tasarımda, en az üç ağ arayüzüne sahip tek bir güvenlik duvarı kullanılır. Bir arayüz internete, bir arayüz iç ağa ve üçüncü arayüz DMZ’ye bağlanır. Güvenlik duvarı, bu üç bölge arasındaki tüm trafiği yönetir. Daha düşük maliyetli bir çözüm olmasına rağmen, güvenlik duvarının kendisi tek bir hata ve saldırı noktası (single point of failure) haline gelir.42
* **Çift Güvenlik Duvarı (Dual Firewall Model):** Bu, daha güvenli ve tavsiye edilen yaklaşımdır. Bir “dış” güvenlik duvarı internet ile DMZ arasına, bir “iç” güvenlik duvarı ise DMZ ile iç ağ arasına yerleştirilir. Bu mimaride, bir saldırganın iç ağa ulaşabilmesi için iki farklı güvenlik duvarını birden aşması gerekir, bu da güvenliği önemli ölçüde artırır.42

#### Trafik Akış Kuralları (En İyi Uygulamalar)

Güvenli bir DMZ mimarisi için güvenlik duvarlarında uygulanması gereken temel trafik akış kuralları şunlardır:

1. **İnternetten DMZ’ye:** Yalnızca DMZ’deki sunucuların sunduğu belirli hizmetlere (örneğin, web sunucusuna giden TCP port 80 ve 443) izin verilir. Diğer tüm trafik engellenir.
2. **İnternetten İç Ağa:** Her zaman ve koşulda engellenmelidir.
3. **İç Ağdan DMZ’ye:** Genellikle yöneticilerin DMZ’deki sunucuları yönetmesi (örneğin, SSH veya RDP ile) için kontrollü bir şekilde izin verilir.
4. **DMZ’den İç Ağa:** **Bu en kritik kuraldır ve kesinlikle engellenmelidir.** DMZ’deki bir sunucunun, iç ağdaki bir kaynağa bağlantı başlatmasına asla izin verilmemelidir. Bu kural, DMZ’deki bir sistemin ele geçirilmesi durumunda saldırının iç ağa yayılmasını önler.
5. **İç Ağdan İnternete:** Genellikle izin verilir, ancak güvenlik ve izleme amacıyla bir proxy sunucu üzerinden yönlendirilmesi tavsiye edilir.43
6. **DMZ’den İnternete:** DMZ’deki sunucuların işlevlerini yerine getirebilmesi için (örneğin, yazılım güncellemeleri, DNS sorguları) genellikle izin verilir.

VLAN ile başlayan ağ segmentasyonu yolculuğu, DMZ ile daha katmanlı bir hal almış ve günümüzün dinamik veri merkezi ve bulut ortamlarında, her bir uygulamayı veya iş yükünü kendi güvenli segmentine yerleştiren “mikro segmentasyon” felsefesine evrilmiştir. Bu granüler yaklaşım, Sıfır Güven ilkelerinin en ileri uygulamalarından biridir ve saldırı yüzeyini minimuma indirir.