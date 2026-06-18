# Ağ Yönetimi ve Güvenliği V: Kimlik ve Erişim Yönetimi (IAM)

---

### Ağ Yönetimi ve Güvenliği V: Kimlik ve Erişim Yönetimi (IAM)

![](https://cdn-images-1.medium.com/max/800/1*6OkxmUjEoOjEZW17jo7E8w.png)

Kimlik ve Erişim Yönetimi (Identity and Access Management — IAM), bir organizasyonun dijital kimlikleri ve bu kimliklerin kritik sistemlere, uygulamalara ve verilere erişim haklarını yönetmek için kullandığı iş süreçleri, politikalar ve teknolojiler bütünüdür. Temel amacı, doğru kişilerin veya hizmetlerin, doğru kaynaklara, doğru zamanda ve doğru nedenlerle erişmesini sağlamaktır. Bu çerçeve, yalnızca bir teknoloji yığınından ibaret olmayıp, aynı zamanda bir kurumun güvenlik duruşunu ve operasyonel verimliliğini temelden şekillendiren stratejik bir yönetişim disiplinidir. IAM, bir organizasyon içindeki çalışanlar, sözleşmeli personel, iş ortakları ve hatta müşteriler gibi tüm kullanıcı kimliklerini kapsar ve her bir kimliğin yaşam döngüsünü (oluşturma, yönetme, silme) kontrol eder.

Dijital dönüşüm, bulut bilişimin yaygınlaşması ve uzaktan çalışma modellerinin kalıcı hale gelmesiyle birlikte, geleneksel ağ çevreleri (perimeter) giderek anlamını yitirmiştir. Bu yeni “sınırsız” dünyada, kimlik, güvenliğin yeni çevresi haline gelmiştir. IAM sistemleri, bu modern mimaride merkezi bir rol oynayarak, hem şirket içi (on-premises) hem de bulut tabanlı altyapılara güvenli ve sorunsuz erişim sağlar, bu sırada kimlik hırsızlığı ve hesap ele geçirme gibi siber tehdit risklerini önemli ölçüde azaltır.

IAM’in stratejik faydaları üç ana başlıkta toplanabilir: otomasyon, güvenlik ve yönetişim. Kullanıcı erişimlerinin manuel olarak yönetilmesi için gereken zamanı ve insan hatası riskini azaltan otomasyon, operasyonel verimliliği artırır. Güvenlik katmanında, IAM, hassas verilere yetkisiz erişimi önler ve risk tabanlı, bağlama duyarlı politikalarla (örneğin, kullanıcının konumu veya kullandığı cihaz gibi faktörlere dayalı) güvenlik duruşunu güçlendirir. Yönetişim ve uyumluluk açısından ise, IAM çözümleri, Genel Veri Koruma Yönetmeliği (GDPR) ve Sarbanes-Oxley (SOX) gibi düzenlemelere uyumu basitleştirir, denetim izleri oluşturur ve erişim haklarının düzenli olarak gözden geçirilmesini sağlayarak kurumsal politikaların uygulanmasını garanti altına alır. Okta gibi modern, bulut tabanlı IAM platformları, bu karmaşık gereksinimleri karşılamak için gelişmiş sunucu erişimi, tek oturum açma (SSO) ve çok faktörlü kimlik doğrulama (MFA) gibi yetenekler sunarak kuruluşların dijital varlıklarını daha etkin bir şekilde korumalarına yardımcı olur.

Başlangıçta yalnızca kullanıcı hesaplarını ve parolaları yöneten bir BT aracı olarak görülen IAM, günümüzde iş sürekliliği, operasyonel verimlilik ve yasal uyumluluk gibi kritik iş hedeflerini doğrudan etkileyen stratejik bir fonksiyona evrilmiştir. Artık IAM, “kimin neye erişebileceği” sorusunun ötesine geçerek, “hangi koşullar altında, hangi cihazdan ve hangi risk seviyesinde” erişim sağlanabileceğini yöneten dinamik ve akıllı bir yapıya dönüşmüştür. Bu dönüşüm, IAM’i modern siber güvenlik stratejilerinin vazgeçilmez bir temel taşı yapmaktadır.

---

### Bölüm 1: Temel Erişim Yönetimi Çerçeveleri

### AAA Modeli: Kimlik Doğrulama, Yetkilendirme ve Muhasebe

AAA (Authentication, Authorization, and Accounting), bilgisayar ağlarında erişimi akıllıca kontrol etmek, politikaları uygulamak, kullanımı denetlemek ve hizmetler için faturalandırma yapmak üzere gerekli bilgileri sağlamak için kullanılan temel bir güvenlik çerçevesidir. Bu model, ağ kaynaklarına erişim sürecini üç ayrı ve sıralı adıma bölerek yönetir. Bu adımlar kronolojik ve birbirine bağımlıdır; bir sonraki adıma geçilebilmesi için bir önceki adımın başarıyla tamamlanması gerekir.

* **Authentication (Kimlik Doğrulama):** Bu, sürecin ilk adımıdır ve bir kullanıcının veya cihazın kimliğinin doğrulanmasını içerir. Kullanıcı, “ben kimim” iddiasını kanıtlamak zorundadır. Bu genellikle kullanıcı adı ve parola gibi geleneksel kimlik bilgileriyle yapılır. Ancak modern sistemlerde bu süreç, donanım token’ları, dijital sertifikalar veya parmak izi gibi biyometrik verilerle de desteklenebilir. AAA sunucusu, istemciden (erişim talep eden cihaz) gelen kimlik bilgilerini kendi veritabanında saklanan bilgilerle karşılaştırır. Eşleşme sağlanırsa, kimlik doğrulama başarılı olur ve süreç bir sonraki adıma geçer. Eşleşme olmazsa, erişim reddedilir.
* **Authorization (Yetkilendirme):** Kimlik doğrulama başarıyla tamamlandıktan sonra, yetkilendirme adımı devreye girer. Bu aşama, kimliği doğrulanmış kullanıcının “neler yapabileceğini” belirler. AAA sunucusu, önceden tanımlanmış politikalara ve kullanıcının rolüne veya grubuna göre, hangi ağ kaynaklarına (örneğin, belirli bir sunucu, veritabanı veya uygulama) erişebileceğini ve bu kaynaklar üzerinde hangi işlemleri (okuma, yazma, silme, çalıştırma vb.) gerçekleştirebileceğini tanımlar. Bu süreç, en az ayrıcalık ilkesinin (principle of least privilege) uygulanmasında kritik bir rol oynar ve kullanıcılara yalnızca görevlerini yerine getirmek için gerekli olan minimum erişim haklarının verilmesini sağlar.
* **Accounting (Muhasebe/Hesap Yönetimi):** Çerçevenin son adımı olan muhasebe, kullanıcının oturumu sırasında “neler yaptığını” izler ve kaydeder. Bu süreç, kullanıcının oturum başlangıç ve bitiş zamanları, oturum süresi, eriştiği kaynaklar, aktardığı veri miktarı gibi bilgileri toplar ve bir denetim kaydı (audit trail) oluşturur. Toplanan bu veriler, güvenlik denetimleri, uyumluluk raporlaması (compliance), sorun giderme, ağ kapasite planlaması ve gerekirse hizmetler için faturalandırma gibi çeşitli amaçlar için kullanılır.

AAA modeli, genellikle bir AAA sunucusu üzerinde çalışan istemci/sunucu mimarisiyle uygulanır. Ağ erişim sunucusu (Network Access Server — NAS) gibi bir istemci, kullanıcıdan gelen erişim talebini AAA sunucusuna iletir ve sunucudan gelen yanıtlara göre erişimi yönetir. Bu merkezi yapı, özellikle büyük ve dağıtık ağlarda erişim politikalarının tutarlı bir şekilde uygulanmasını ve denetlenmesini kolaylaştırır.

### AAA Protokolleri: RADIUS ve TACACS+ Karşılaştırmalı Analizi

AAA çerçevesini uygulamak için kullanılan iki yaygın protokol RADIUS ve TACACS+’tır. Her ikisi de kullanıcı erişimini merkezi olarak yönetmeyi amaçlasa da, mimarileri, güvenlik özellikleri ve ideal kullanım senaryoları açısından önemli farklılıklar gösterirler.

#### **Mimari, Taşıma Protokolü ve Şifreleme Farklılıkları**

* **RADIUS (Remote Authentication Dial-In User Service):** IETF tarafından standartlaştırılmış, açık bir protokoldür. Genellikle Wi-Fi ağları, VPN’ler ve çevirmeli bağlantılar gibi ağ erişim senaryolarında kullanılır. RADIUS, taşıma katmanında bağlantısız bir protokol olan
* **UDP (User Datagram Protocol)** kullanır; kimlik doğrulama ve yetkilendirme için genellikle 1812, muhasebe için ise 1813 numaralı portları tercih eder. En önemli özelliklerinden biri,
* **kimlik doğrulama ve yetkilendirme süreçlerini tek bir pakette birleştirmesidir**. Güvenlik açısından, RADIUS yalnızca paketin içindeki **parolayı şifreler**; kullanıcı adı, istenen hizmet ve muhasebe bilgileri gibi diğer tüm veriler düz metin olarak iletilir. Bu durum, onu belirli saldırı türlerine karşı daha savunmasız hale getirir.
* **TACACS+ (Terminal Access Controller Access-Control System Plus):** Cisco tarafından geliştirilmiş tescilli bir protokoldür, ancak yaygın olarak benimsenmiştir. Özellikle yönlendiriciler (routers), anahtarlar (switches) ve güvenlik duvarları gibi ağ cihazlarına yapılan yönetici erişimini kontrol etmek için kullanılır. TACACS+, taşıma katmanında güvenilir ve bağlantı odaklı bir protokol olan
* **TCP (Transmission Control Protocol)** ve 49 numaralı portu kullanır. Bu, paket iletiminin daha güvenilir olmasını ve sunucu çökmeleri gibi durumların anında tespit edilmesini sağlar. RADIUS’un aksine, TACACS+
* **AAA süreçlerini birbirinden ayırır**. Kimlik doğrulama, yetkilendirme ve muhasebe için ayrı istek ve yanıt paketleri kullanılır. Güvenlik açısından en büyük üstünlüğü, parola dahil olmak üzere **tüm paketin içeriğini şifrelemesidir**. Bu, iletişim sürecini çok daha güvenli hale getirir.

#### **Kullanım Senaryoları ve Felsefi Ayrım**

Protokol seçimi, sadece teknik bir tercih değil, aynı zamanda bir organizasyonun güvenlik felsefesini ve kontrol ihtiyacını da yansıtır. RADIUS, temel olarak “Bu kullanıcı ağa girebilir mi?” sorusuna odaklanır. Kimlik doğrulama ve yetkilendirmenin birleşik olması, onun bir “kapı bekçisi” gibi çalışmasını sağlar. Bu nedenle, geniş kullanıcı kitlelerine (çalışanlar, misafirler) ağ erişimi sağlamak için idealdir ve basit erişim kontrolünün yeterli olduğu senaryolarda (örneğin, 802.1X tabanlı Wi-Fi kimlik doğrulaması) yaygın olarak kullanılır.

* TACACS+ ise daha derin bir soru sorar: “Ağa giren bu yönetici, cihaz üzerinde *hangi komutları* çalıştırabilir?”. AAA süreçlerini ayırması, ona bir “operasyon denetçisi” yeteneği kazandırır. Bu sayede bir ağ yöneticisinin kimliği doğrulandıktan sonra, ona yalnızca `show interface` gibi izleme komutlarını çalıştırma yetkisi verilirken, `configure terminal` gibi yapılandırma komutlarını çalıştırma yetkisi engellenebilir. Bu granüler kontrol seviyesi, en az ayrıcalık ilkesinin ağ cihazı yönetimi katmanında hassas bir şekilde uygulanmasını sağlar. Bu nedenle TACACS+, finans, savunma ve telekomünikasyon gibi yüksek güvenlik gerektiren sektörlerde ve ağ altyapısının yönetiminde tercih edilen protokoldür.

![](https://cdn-images-1.medium.com/max/800/1*p7VHlJuCXv1f6irJuqfB_g.png)

iki protokol arasındaki temel farkları

---

### Bölüm 2: Erişim Kontrolünün Mimari Modelleri

Erişim kontrol modelleri, bir sistemdeki öznelerin (kullanıcılar, süreçler) nesnelere (dosyalar, veritabanları, uygulamalar) erişimini yöneten kurallar ve politikalar bütünüdür. Bu modeller, bir organizasyonun güvenlik gereksinimleri, esneklik ihtiyacı ve yönetimsel kapasitesine göre seçilir ve uygulanır.

### Klasik Modeller: İsteğe Bağlı (DAC) ve Zorunlu (MAC) Erişim Kontrolü

**Discretionary Access Control (DAC — İsteğe Bağlı Erişim Kontrolü):** DAC, en esnek ve yaygın olarak bilinen erişim kontrol modelidir. Bu modelde, bir kaynağın (nesnenin) sahibi, o kaynağa kimlerin erişebileceğini ve hangi izinlere (okuma, yazma, çalıştırma) sahip olacağını belirleme yetkisine sahiptir. Erişim kararları, kullanıcının kimliğine dayalıdır ve genellikle Erişim Kontrol Listeleri (Access Control Lists — ACLs) aracılığıyla uygulanır. Örneğin, bir kullanıcının kendi oluşturduğu bir dosyayı başka bir kullanıcıyla paylaşması ve ona sadece “okuma” izni vermesi tipik bir DAC uygulamasıdır.

* **Avantajları:** Yüksek esneklik, kullanım kolaylığı ve kaynak sahiplerine kendi verileri üzerinde tam kontrol imkanı sunmasıdır.
* **Dezavantajları:** Merkezi bir kontrol mekanizması olmaması, güvenlik yönetimini dağınık hale getirir. En büyük zafiyeti ise, bir programın, onu çalıştıran kullanıcının izinlerini miras almasıdır. Bu durum, bir kullanıcının farkında olmadan kötü amaçlı bir yazılım (malware) çalıştırması halinde, bu yazılımın kullanıcının sahip olduğu tüm erişim haklarını kötüye kullanmasına olanak tanır.

#### **Mandatory Access Control (MAC — Zorunlu Erişim Kontrolü)**

MAC, DAC’nin tam tersi bir yaklaşıma sahiptir ve en kısıtlayıcı model olarak kabul edilir. Bu modelde, erişim kararları kaynak sahibi tarafından değil, sistemin kendisi tarafından merkezi olarak uygulanır. Sistem yöneticisi, hem öznelere (kullanıcılar) hem de nesnelere (dosyalar) güvenlik etiketleri veya sınıflandırmalar (örneğin, “Halka Açık”, “Gizli”, “Çok Gizli”) atar. Erişim, yalnızca öznenin güvenlik seviyesi nesnenin güvenlik seviyesine eşit veya daha yüksekse verilir. Kullanıcılar veya kaynak sahipleri bu kuralları değiştiremez.

* **Avantajları:** Yüksek düzeyde veri gizliliği ve bütünlüğü sağlar. Merkezi kontrol, tutarlı ve katı güvenlik politikalarının uygulanmasını garanti eder.
* **Dezavantajları:** Son derece katıdır, esnek değildir ve yönetimi karmaşıktır. Tüm sistem varlıklarının etiketlenmesini gerektirir, bu da büyük ortamlarda pratik olmayabilir. Bu nedenlerle, genellikle askeri, devlet kurumları ve kritik altyapılar gibi maksimum güvenlik gerektiren ortamlarda kullanılır.

### Modern Kurumsal Modeller: Rol Tabanlı (RBAC) ve Nitelik Tabanlı (ABAC) Erişim Kontrolü

Kurumsal ortamların karmaşıklığı ve ölçeği, DAC’nin esnekliğinden faydalanırken MAC’in merkezi kontrol avantajlarını sunan daha gelişmiş modellerin ortaya çıkmasına neden olmuştur.

#### **Role-Based Access Control (RBAC — Rol Tabanlı Erişim Kontrolü)**

RBAC, günümüz kurumsal dünyasında en yaygın kullanılan erişim kontrol modelidir. Bu modelde, izinler doğrudan bireysel kullanıcılara atanmaz. Bunun yerine, izinler organizasyon içindeki belirli iş rollerine (örneğin, “Finans Analisti”, “İK Yöneticisi”, “Sistem Yöneticisi”) atanır. Kullanıcılar daha sonra bu rollere dahil edilir ve o rolün sahip olduğu tüm izinleri miras alırlar.

* **Avantajları:** Yönetimi büyük ölçüde basitleştirir. Yüzlerce kullanıcıya tek tek izin atamak yerine, sadece birkaç rolü yönetmek yeterlidir. Yeni bir çalışan işe başladığında veya bir çalışan rol değiştirdiğinde, sadece ilgili role atanması veya rolden çıkarılması yeterlidir. Bu yapı, en az ayrıcalık ilkesinin uygulanmasını kolaylaştırır ve denetlenebilirliği artırır.
* **Dezavantajları:** Organizasyon yapısı çok karmaşıklaştığında veya çok sayıda istisnai erişim talebi olduğunda, bu durum “rol patlaması” (role explosion) olarak bilinen bir soruna yol açabilir. Yüzlerce veya binlerce özel rolün oluşturulması ve yönetilmesi, RBAC’nin yönetim kolaylığı avantajını ortadan kaldırabilir.

#### **Attribute-Based Access Control (ABAC — Nitelik Tabanlı Erişim Kontrolü)**

ABAC, en dinamik ve granüler erişim kontrol modelidir. Bu modelde, erişim kararları sadece kullanıcının rolüne değil, bir dizi niteliğin (attribute) birleşimine dayalı olarak anlık olarak verilir. Bu nitelikler dört ana kategoriye ayrılabilir:

1. **Özne (Kullanıcı) Nitelikleri:** Rol, departman, güvenlik izni seviyesi, yaş, uyruk.
2. **Nesne (Kaynak) Nitelikleri:** Dosya türü, veri hassasiyet seviyesi, oluşturulma tarihi, sahibi.
3. **Eylem Nitelikleri:** Okuma, yazma, silme, kopyalama, onaylama.
4. **Çevresel Nitelikler:** Erişim zamanı, coğrafi konum, kullanılan cihazın türü ve güvenlik durumu, ağ bağlantısı. ABAC, bu nitelikleri “EĞER [koşullar] DOĞRU İSE, O ZAMAN [eyleme] İZİN VER/REDDET” şeklinde ifade edilen politikalar içinde değerlendirir. Örneğin, “Bir kullanıcı, EĞER rolü ‘Doktor’ İSE ve erişim saati ‘çalışma saatleri içinde’ İSE ve erişilen kayıt ‘kendi hastasına ait’ İSE, o zaman hasta kaydını ‘okuyabilir’” gibi karmaşık bir kural oluşturulabilir.

* **Avantajları:** Son derece esnek, dinamik ve bağlama duyarlıdır. RBAC’nin yetersiz kaldığı karmaşık, dağıtık ve sürekli değişen ortamlar için idealdir. Çok ince taneli (fine-grained) erişim kontrolü sağlar.
* **Dezavantajları:** Politikaların tasarlanması, uygulanması ve yönetimi oldukça karmaşıktır. Erişim kararlarının anlık olarak birden çok niteliği değerlendirmesi gerektiğinden, daha fazla işlem gücü gerektirebilir.

Erişim kontrol modellerinin evrimi, güvenlik sorusunun odağının nasıl değiştiğini göstermektedir. DAC, erişimi “kimin” kontrol ettiğine odaklanırken, RBAC bu soruyu “kullanıcının rolü ne?” şeklinde soyutlar. ABAC ise bir paradigma değişimi sunarak soruyu “kim, hangi kaynaktaki veriye, hangi eylemi, günün hangi saatinde, hangi coğrafi konumdan, hangi cihazın güvenlik durumuyla yapmaya çalışıyor?” haline getirir. Bu evrim, statik kimlik kontrollerinin modern, bağlam-bağımlı riskleri yönetmek için yetersiz kaldığını ve güvenliğin artık dinamik koşullara adapte olması gerektiğini ortaya koymaktadır.

### En Az Ayrıcalık İlkesi (Principle of Least Privilege — PoLP)

En Az Ayrıcalık İlkesi (PoLP), bir siber güvenlik temel taşıdır ve bir kullanıcıya, uygulamaya veya sürece, görevini yerine getirmesi için gereken mutlak minimum izinlerin, ayrıcalıkların ve kaynakların verilmesini öngörür. Bu ilke, “bilmesi gereken” (need-to-know) prensibinin teknik uygulamasıdır.

**Sıfır Güven (Zero Trust) Mimarilerindeki Temel Rolü:** PoLP, “asla güvenme, her zaman doğrula” felsefesine dayanan Sıfır Güven (Zero Trust) güvenlik modelinin ayrılmaz bir parçasıdır. Sıfır Güven, ağ içindeki veya dışındaki hiçbir varlığa varsayılan olarak güvenilmemesini ve her erişim talebinin kimlik, cihaz durumu, konum ve diğer bağlamsal faktörlere göre doğrulanmasını gerektirir. PoLP, bu doğrulama süreci başarıyla tamamlandıktan sonra devreye girer ve kimliği doğrulanmış varlığa bile gereğinden fazla yetki verilmemesini sağlar. Bir hesabın veya sistemin ele geçirilmesi durumunda, PoLP, saldırganın ağ içinde yanal olarak hareket etme (lateral movement) kabiliyetini ve hassas verilere erişim potansiyelini önemli ölçüde sınırlar, böylece olası hasarı en aza indirir.

**Pratik Uygulama Adımları ve Erişim Kontrol Modelleriyle Entegrasyonu:** PoLP’nin etkili bir şekilde uygulanması, sürekli bir çaba gerektiren sistematik bir süreçtir. Temel adımlar şunları içerir:

1. **Ayrıcalık Denetimi:** Mevcut tüm kullanıcı hesaplarının, hizmet hesaplarının ve grupların izinlerini kapsamlı bir şekilde denetleyerek aşırı ayrıcalıklı hesapları tespit etmek.
2. **Varsayılan Olarak Reddet (Default Deny):** Tüm erişim taleplerini varsayılan olarak reddeden ve yalnızca açıkça tanımlanmış ve gerekçelendirilmiş izinleri veren bir politika benimsemek.
3. **Rollerin ve Sorumlulukların Tanımlanması:** Her iş rolü için gerekli olan minimum erişim haklarını net bir şekilde tanımlamak.
4. **Ayrıcalıkların Ayrılması (Separation of Privileges):** Yönetici hesaplarını standart kullanıcı hesaplarından ayırmak ve yüksek ayrıcalıklı görevler için ayrı hesaplar kullanmak.
5. **Tam Zamanında (Just-in-Time — JIT) Erişim:** Yüksek ayrıcalıkları kalıcı olarak atamak yerine, bu ayrıcalıkları yalnızca belirli bir görev için, sınırlı bir süreyle ve talep üzerine geçici olarak yükseltmek.
6. **Düzenli Gözden Geçirme:** Kullanıcı rolleri değiştikçe veya zamanla gereksiz hale geldikçe biriken izinleri (privilege creep) önlemek için erişim haklarını periyodik olarak gözden geçirmek ve iptal etmek.

Erişim kontrol modelleri, PoLP’nin uygulanmasında temel araçlardır. **RBAC**, rollere minimum düzeyde izinler atayarak bu ilkeyi yapısal olarak destekler ve yönetimi kolaylaştırır.

**ABAC** ise, erişim kararlarını anlık bağlama göre dinamik olarak ayarlayarak PoLP’yi daha da ileri bir seviyeye taşır ve yalnızca belirli koşullar sağlandığında erişim izni vererek ilkeyi en granüler düzeyde uygular.

Aşağıdaki tablo, erişim kontrol modellerini temel özellikleri açısından karşılaştırmaktadır:

![](https://cdn-images-1.medium.com/max/800/1*nVP5oHjzybYftBsE0y9dnQ.png)

Erişim Kontrol Modelleri

---

### Bölüm 3: Gelişmiş Kimlik Doğrulama ve Federasyon

### Çok Faktörlü Kimlik Doğrulama (MFA)

Çok Faktörlü Kimlik Doğrulama (Multi-Factor Authentication — MFA), bir kullanıcının kimliğini doğrulamak için birden fazla kanıt (faktör) talep eden bir güvenlik sürecidir. Temel amacı, bir faktörün (genellikle parolanın) ele geçirilmesi durumunda bile yetkisiz erişimi engelleyerek ek bir güvenlik katmanı sağlamaktır. Tüm 2FA (İki Faktörlü Kimlik Doğrulama) sistemleri MFA’nın bir alt kümesidir, ancak MFA ikiden fazla faktör içerebilir. Bu faktörler genellikle üç ana kategoride sınıflandırılır:

1. **Bildiğiniz Bir Şey (Knowledge Factor):** Parola, PIN kodu veya güvenlik sorusunun cevabı gibi kullanıcının zihninde tuttuğu bilgiler.
2. **Sahip Olduğunuz Bir Şey (Possession Factor):** Akıllı telefon, donanım güvenlik anahtarı (token), akıllı kart gibi kullanıcının fiziksel olarak sahip olduğu bir nesne.
3. **Olduğunuz Bir Şey (Inherence Factor):** Parmak izi, yüz tanıma, retina taraması veya ses deseni gibi kullanıcıya özgü biyometrik özellikler.

#### **SMS/Sesli Arama ile OTP (Tek Kullanımlık Parola)**

Kullanıcının telefonuna SMS veya sesli arama ile gönderilen geçici bir kodun girilmesine dayanır.

* **Güvenlik:** En az güvenli MFA yöntemlerinden biridir. SIM kart kopyalama (SIM swapping) ve SS7 gibi telekomünikasyon protokolü zafiyetleri aracılığıyla kodların ele geçirilmesine karşı savunmasızdır. Ayrıca, SMS mesajları şifrelenmediği için iletim sırasında ele geçirilebilir.
* **Kullanılabilirlik ve Maliyet:** Kurulumu ve kullanımı son derece kolaydır, çünkü neredeyse herkesin bir cep telefonu vardır. Ancak, özellikle büyük kuruluşlar için SMS gönderim maliyetleri zamanla artabilir.

#### **Authenticator Uygulaması (TOTP — Time-based One-Time Password)**

Google Authenticator veya Microsoft Authenticator gibi uygulamalar, belirli bir zaman dilimi (genellikle 30–60 saniye) için geçerli olan ve sürekli değişen kodlar üretir.

* **Güvenlik:** SMS’e göre daha güvenlidir çünkü SIM kart kopyalama saldırılarından etkilenmez. Ancak, kullanıcıları sahte bir web sitesine yönlendirerek hem parolalarını hem de o anki TOTP kodunu çalan gelişmiş kimlik avı (phishing) ve ortadaki adam (Adversary-in-the-Middle — AiTM) saldırılarına karşı hala savunmasızdır.
* **Kullanılabilirlik ve Maliyet:** Genellikle ücretsizdir ve çevrimdışı çalışabilir. Ancak, kullanıcıların bir uygulama yüklemesini ve kodu manuel olarak girmesini gerektirir.

#### **Push Bildirimleri**

Kullanıcının akıllı telefonuna “Girişi Onayla/Reddet” şeklinde bir bildirim gönderilir.

* **Güvenlik:** TOTP’den daha kullanıcı dostu olsa da, “MFA yorgunluğu” (MFA fatigue) veya “push bombing” olarak bilinen saldırı türüne açıktır. Bu saldırıda, saldırgan sürekli olarak giriş denemesi yaparak kullanıcıyı bildirim bombardımanına tutar ve sonunda kullanıcının yanlışlıkla veya bıkkınlıkla onayı vermesini hedefler.
* **Kullanılabilirlik ve Maliyet:** Tek bir dokunuşla onaylama imkanı sunduğu için son derece yüksek bir kullanılabilirliğe sahiptir. Genellikle düşük maliyetlidir.

#### **Donanım Güvenlik Anahtarları (FIDO2/U2F)**

YubiKey gibi USB veya NFC tabanlı fiziksel cihazlardır.

* **Güvenlik:** En güvenli MFA yöntemlerinden biri olarak kabul edilir. Açık anahtar kriptografisi kullanarak çalıştığı için kimlik avı ve AiTM saldırılarına karşı neredeyse tamamen dirençlidir. Kimlik bilgileri, web sitesinin alan adıyla kriptografik olarak ilişkilendirilir, bu nedenle sahte bir sitede çalışmaz.
* **Kullanılabilirlik ve Maliyet:** Kullanıcıların fiziksel bir cihaz taşımasını gerektirir. Cihazın kaybolması veya çalınması durumunda erişim sorunları yaşanabilir. Başlangıç maliyeti (cihaz başına 20–100 USD) ve dağıtım lojistiği, özellikle büyük kuruluşlar için bir dezavantaj olabilir.

#### **Biyometrik Doğrulama**

Parmak izi, yüz veya iris taraması gibi yöntemlerdir.

* **Güvenlik:** Biyometrik veriler kişiye özgü olduğu için kopyalanması zordur ve yüksek güvenlik sağlar. Ancak, biyometrik veritabanlarının sızdırılması durumunda bu veriler kalıcı olarak ifşa olmuş olur (parola gibi değiştirilemez). Ayrıca, yüksek kaliteli sahte parmak izleri veya fotoğraflarla atlatılabilen (spoofing) sistemler mevcuttur.
* **Kullanılabilirlik ve Maliyet:** Son derece hızlı ve kullanıcı dostudur. Gerekli donanım (parmak izi okuyucu, kamera) artık birçok modern cihazda standart olarak bulunmaktadır. Ancak, özel tarayıcılar daha yüksek maliyetli olabilir.

#### **Uyarlanabilir (Adaptive) MFA**

Modern IAM sistemleri, her giriş denemesinde aynı MFA yöntemini zorunlu kılmak yerine, risk tabanlı bir yaklaşım benimser. Uyarlanabilir MFA, kullanıcının coğrafi konumu, giriş saati, kullandığı cihazın güvenlik durumu ve davranışsal biyometri gibi bağlamsal bilgileri analiz eder. Eğer giriş denemesi düşük riskli olarak değerlendirilirse (örneğin, bilinen bir ofis ağından, mesai saatleri içinde, kayıtlı bir cihazdan yapılıyorsa), MFA adımı atlanabilir. Ancak, deneme şüpheli veya yüksek riskli olarak değerlendirilirse (örneğin, bilinmeyen bir ülkeden, gece yarısı, daha önce kullanılmamış bir cihazdan), sistem ek ve daha güçlü bir doğrulama adımı (örneğin, donanım anahtarı) talep edebilir. Bu yaklaşım, güvenlikten ödün vermeden kullanıcı deneyimini optimize eder.

Aşağıdaki tablo, farklı MFA yöntemlerini pratik karar verme kriterlerine göre karşılaştırmaktadır:

![](https://cdn-images-1.medium.com/max/800/1*8TTOg_EU2ai3ZII65l_vMQ.png)

MFA yöntemleri

### Tek Oturum Açma (SSO) ve Federe Kimlik Mimarileri

Tek Oturum Açma (Single Sign-On — SSO), kullanıcıların tek bir kimlik bilgisi setiyle birden fazla ilişkili ancak bağımsız uygulamaya ve hizmete erişmesine olanak tanıyan bir kimlik doğrulama şemasıdır. Bu, kullanıcı deneyimini iyileştirir ve parola yorgunluğunu azaltırken, erişim yönetimini merkezileştirerek güvenliği artırır. SSO’yu mümkün kılan üç temel protokol bulunmaktadır: SAML, OAuth 2.0 ve OpenID Connect.

#### **SAML (Security Assertion Markup Language)**

Özellikle kurumsal (enterprise) ortamlarda yaygın olarak kullanılan, XML tabanlı olgun bir kimlik doğrulama ve yetkilendirme standardıdır. SAML akışı üç ana aktör arasında gerçekleşir: kullanıcı (user agent/browser), Kimlik Sağlayıcı (Identity Provider — IdP) ve Servis Sağlayıcı (Service Provider — SP).

* **Mimari ve Akış:**

1. Kullanıcı, bir SP’ye (örneğin, Salesforce) erişmeye çalışır.
2. SP, kullanıcının kimliğinin doğrulanmadığını görür ve kullanıcıyı bir SAML İsteği (SAML Request) ile IdP’ye (örneğin, şirketin Active Directory’si) yönlendirir.
3. IdP, kullanıcıdan kimlik bilgilerini girmesini ister (eğer zaten bir oturumu yoksa).
4. Kimlik doğrulama başarılı olduğunda, IdP, kullanıcının kimliğini, niteliklerini (adı, e-posta, departmanı vb.) ve yetkilendirme bilgilerini içeren, dijital olarak imzalanmış bir XML belgesi olan **SAML Assertion**’ı (SAML İddiası) oluşturur.
5. IdP, bu SAML Assertion’ı içeren bir SAML Yanıtı (SAML Response) ile kullanıcıyı tekrar SP’ye yönlendirir.
6. SP, IdP’nin dijital imzasını doğrulayarak SAML Assertion’ın geçerliliğini ve bütünlüğünü kontrol eder. Başarılı olursa, kullanıcıya erişim izni verir.

* **Kullanım Senaryoları:** Kurumsal SSO, özellikle farklı kuruluşlar arasında güven ilişkisi kurarak kimlik federasyonu sağlamak için idealdir.

#### **OAuth 2.0 (Open Authorization)**

OAuth 2.0, bir kimlik doğrulama protokolü değil, bir **yetkilendirme (authorization)** çerçevesidir. Temel amacı, bir kullanıcının, bir uygulamaya (Client), başka bir uygulamadaki (Resource Server) kendi kaynaklarına, parolasını paylaşmadan sınırlı erişim izni vermesini sağlamaktır.

* **Mimari ve Akış (Authorization Code Flow):** En yaygın ve güvenli akış olan “Authorization Code Flow” şu adımları içerir:

1. Uygulama (Client), kullanıcıyı bir yetkilendirme isteğiyle Yetkilendirme Sunucusuna (Authorization Server) yönlendirir. Bu istek, uygulamanın kimliğini (`client_id`) ve talep ettiği izinleri (`scope`, örn. "takvimi oku") içerir.
2. Kullanıcı, Yetkilendirme Sunucusunda kimliğini doğrular ve uygulamanın talep ettiği izinleri onaylar.
3. Yetkilendirme Sunucusu, kullanıcıyı tek kullanımlık bir **Authorization Code** (Yetkilendirme Kodu) ile uygulamaya geri yönlendirir.
4. Uygulama, arka planda (server-to-server) bu Authorization Code’u, kendi kimlik bilgileriyle (`client_id` ve `client_secret`) birlikte Yetkilendirme Sunucusuna gönderir.
5. Yetkilendirme Sunucusu kodu ve istemci kimlik bilgilerini doğrular ve uygulamaya bir **Access Token** (Erişim Belirteci) döndürür.
6. Uygulama, bu Access Token’ı kullanarak Kaynak Sunucusundaki (Resource Server) API’lere istekte bulunarak kullanıcının korunan kaynaklarına erişir.

* **Kullanım Senaryoları:** “Connect with Facebook” gibi üçüncü taraf uygulamalara veri erişim izni vermek, mobil uygulamaların bir arka uç API’sine güvenli bir şekilde erişmesi gibi senaryolarda kullanılır.

#### **OpenID Connect (OIDC)**

OIDC, OAuth 2.0'ın üzerine inşa edilmiş basit bir kimlik katmanıdır. OAuth 2.0'ın sadece yetkilendirme sağlaması ve kullanıcı kimliği hakkında standart bir yol sunmaması sorununu çözer. OIDC, OAuth 2.0 akışlarını kullanarak hem kimlik doğrulama hem de yetkilendirme sağlar.

* **Mimari ve Akış:** OIDC akışı, OAuth 2.0'ın Authorization Code Flow’una çok benzer. Temel fark, yetkilendirme isteğinde `scope` parametresine `openid` değerinin eklenmesidir. Akışın sonunda, Yetkilendirme Sunucusu (bu durumda aynı zamanda bir OpenID Provider - OP'dir), Access Token'a ek olarak bir **ID Token** da döndürür.
* **ID Token:** JWT (JSON Web Token) formatında olan bu belirteç, kullanıcının kimliği (benzersiz bir ID, adı, e-postası vb.) hakkında standartlaştırılmış “claim”ler (iddialar) içerir ve dijital olarak imzalanmıştır. Uygulama (Client), bu ID Token’ın imzasını doğrulayarak kullanıcının kimliğini güvenilir bir şekilde teyit edebilir.
* **Kullanım Senaryoları:** “Sign in with Google” veya “Login with Microsoft” gibi modern web ve mobil uygulamalarda SSO sağlamak için fiili standart haline gelmiştir.

Bu protokoller arasındaki ilişki, modern API ekonomisinin ve mikroservis mimarilerinin temelini oluşturur. SAML, monolitik kurumsal uygulamalar arasında SSO sağlamak için tasarlanmışken, OAuth 2.0, bir uygulamanın başka bir uygulama adına “ne yapabileceğini” (yetki) yönetir. OIDC ise bu iki ihtiyacı birleştirerek, tek bir akış içinde hem kullanıcının kimliğini doğrulamayı (`ID Token`) hem de API'lere erişim için bir yetki belirteci (`Access Token`) almayı mümkün kılar. Bu ayrım ve birleşim, kimliğin merkezi bir yerden geldiği ancak her servisin kendi yetkilendirme kararlarını verdiği modern mimarilerin güvenliğinin temelini oluşturur.

### Parolasız Gelecek: FIDO2 ve WebAuthn

Parolalar, modern siber güvenliğin en zayıf halkalarından biridir. Kolay tahmin edilebilir olmaları, yeniden kullanılmaları ve kimlik avı (phishing) saldırılarıyla kolayca çalınabilmeleri, onları büyük bir risk haline getirmektedir. FIDO2 projesi, bu sorunu kökten çözmeyi amaçlayan ve parolaları tamamen ortadan kaldıran yeni nesil bir kimlik doğrulama standardıdır.

#### **Açık Anahtar Kriptografisi ile Güvenli Kimlik Doğrulama**

FIDO2, FIDO Alliance tarafından geliştirilen bir dizi spesifikasyondur. Bu projenin temel bileşeni, World Wide Web Consortium (W3C) tarafından standartlaştırılan **WebAuthn (Web Authentication)** API’sidir. Bu teknoloji, geleneksel “paylaşılan sırlar” (shared secrets) modelini (parola gibi) terk eder ve bunun yerine **açık anahtar kriptografisi (public-key cryptography)** kullanır. Bu modelde, sunucularda parola hash’leri gibi çalınabilecek değerli veriler tutulmaz. Güvenliğin en kritik unsuru olan **özel anahtar (private key)**, kullanıcının kişisel cihazında (akıllı telefon, dizüstü bilgisayarın TPM çipi, YubiKey gibi bir güvenlik anahtarı) donanım destekli güvenli bir alanda saklanır ve asla bu cihazdan ayrılmaz. Bu, güvenliğin merkezini sunucudan, kullanıcının sahip olduğu ve kontrol ettiği uç noktaya kaydırır.

#### **Kayıt (Registration) ve Doğrulama (Authentication) Süreçleri**

FIDO2/WebAuthn’ın çalışma prensibi iki ana aşamadan oluşur:

**Kayıt (Registration) Süreci:**

* Bir kullanıcı yeni bir hizmete kaydolmak istediğinde, hizmetin web sitesi (Relying Party), tarayıcı aracılığıyla WebAuthn API’sini çağırır (`navigator.credentials.create()`).
* Kullanıcının cihazı (Authenticator), bu istek üzerine yeni bir **genel/özel anahtar çifti** oluşturur.
* **Özel anahtar**, cihazın güvenli elementinde (örneğin, Secure Enclave, TPM) saklanır ve asla dışarı sızdırılmaz.
* **Genel anahtar** ise, kullanıcının kimliğiyle birlikte hizmetin sunucusuna gönderilir ve orada saklanır. Bu, sunucunun gelecekte bu kullanıcıyı tanımasını sağlar.

**Doğrulama (Authentication) Süreci:**

* Kullanıcı hizmete giriş yapmak istediğinde, sunucu tarayıcıya rastgele ve tek kullanımlık bir **“challenge” (meydan okuma)** mesajı gönderir.
* Tarayıcı, WebAuthn API’sini (`navigator.credentials.get()`) çağırarak bu challenge'ı kullanıcının cihazına iletir.
* Cihaz, kullanıcıdan yerel bir doğrulama ister (parmak izi, yüz tanıma, PIN). Bu, cihazın gerçekten sahibi tarafından kullanıldığını teyit eder.
* Doğrulama başarılı olduğunda, cihaz, sunucudan gelen challenge’ı cihazda saklanan **özel anahtarı** ile dijital olarak imzalar
* Bu imzalanmış challenge, sunucuya geri gönderilir.
* Sunucu, daha önce kaydettiği kullanıcının **genel anahtarı** ile bu imzanın geçerliliğini kontrol eder. İmza geçerliyse, kullanıcının kimliği doğrulanmış olur ve oturum açılır.

Bu mimari, kimlik avı saldırılarına karşı doğası gereği dirençlidir. Çünkü kimlik bilgileri (özel anahtar) asla sunucuya gönderilmez ve her kimlik bilgisi, oluşturulduğu web sitesinin alan adıyla kriptografik olarak ilişkilidir. Bu, bir saldırgan kullanıcıyı sahte bir siteye yönlendirse bile, tarayıcının o site için doğru kimlik bilgilerini kullanmayacağı anlamına gelir.

---

### Sonuç

Bu yazı, Kimlik ve Erişim Yönetimi’nin (IAM) modern kurumsal siber güvenlik stratejilerinin merkezinde yer alan dinamik ve çok katmanlı bir disiplin olduğunu ortaya koymuştur. Analiz edilen temel bulgular şunlardır:

* **AAA Modeli ve Protokolleri:** Erişim kontrolünün temel mantığını oluşturan Kimlik Doğrulama, Yetkilendirme ve Muhasebe süreçleri, RADIUS ve TACACS+ gibi protokollerle uygulanır. Bu protokoller arasındaki seçim, bir organizasyonun sadece teknik gereksinimlerini değil, aynı zamanda güvenlik olgunluğunu ve granüler kontrol ihtiyacını da yansıtmaktadır.
* **Erişim Kontrol Modelleri:** Erişim kontrolü, DAC ve MAC gibi klasik modellerden, kurumsal ihtiyaçlara daha iyi yanıt veren RBAC ve ABAC gibi modern, dinamik modellere doğru evrilmiştir. Bu evrim, güvenlik sorusunun “kim?” sorusundan “hangi koşullar altında?” sorusuna kaydığını göstermektedir. En Az Ayrıcalık İlkesi, tüm bu modellerin etkinliğini artıran temel bir prensip olarak öne çıkmaktadır.
* **Gelişmiş Kimlik Doğrulama:** Parola tabanlı güvenliğin zayıflıkları, MFA’nın benimsenmesini zorunlu kılmıştır. Gelecek, kimlik avına karşı dirençli, kullanıcı dostu ve güvenliği sunucudan uç noktaya taşıyan FIDO2/WebAuthn gibi parolasız teknolojilere doğru ilerlemektedir.

Gelecekteki eğilimler, IAM’in statik, parola tabanlı ve çevre odaklı yaklaşımlardan; dinamik, bağlama duyarlı, parolasız ve kimliği yeni çevre olarak kabul eden Sıfır Güven (Zero Trust) felsefesine dayalı bir yapıya doğru kaydığını net bir şekilde göstermektedir.