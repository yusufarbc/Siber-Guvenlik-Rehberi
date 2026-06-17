# **Kurumsal Altyapılarda Güvenli Cihaz İmhası, Veri Sanitizasyonu ve Yaşam Döngüsü Güvenliği**

## **Kurumsal Altyapılarda Yaşam Döngüsü Sonu Tehdit Manzarası ve Savunma Derinliği**

Siber güvenlik mimarilerinde "Savunma Derinliği" (Defense in Depth) prensibi, verinin yaşam döngüsünün her evresinde kesintisiz güvenlik kontrollerinin uygulanmasını zorunlu kılar. Ancak kurumsal yapıların en çok ihmal ettiği ve sızıntılara zemin hazırladığı evre, donanımların hizmetten alınma (decommissioning) ve ömür sonu (End-of-Life \- EOL) imha süreçleridir1. Fortune 500 ölçeğindeki bir ağ topolojisinde her gün yüzlerce sabit disk, katı hal sürücüsü (SSD), ağ cihazı ve mobil terminal aktif kullanım dışı kalmaktadır2. Bu cihazların, kurumsal ağ sınırlarının dışına çıkarılmadan veya üçüncü taraf geri dönüşüm süreçlerine tabi tutulmadan önce veri barındırma yeteneklerinin tamamen sıfırlanması, bilgi güvenliğinin temel taşlarından biridir4.

### **Ofansif Perspektif: Artık Veri Analizi ve Adli Bilişim Saldırı Vektörleri**

Bir saldırganın perspektifinden, düzgün imha edilmemiş kurumsal depolama medyaları, doğrudan hassas verilere, ağ topoloji şemalarına, parola veri tabanlarına ve fikri mülkiyet içeren dosyalara ulaşmanın en zahmetsiz yoludur6. Fiziksel olarak ele geçirilen veya yetersiz yöntemlerle silinerek elden çıkarılan medyalara karşı uygulanan ofansif metodolojiler iki ana grupta incelenir:

* **Mantıksal Veri Kazıma (Data Carving) ve Forensik Analiz:** Sadece dosya sistemi düzeyinde indekslerin silindiği veya standart işletim sistemi formatlama komutlarının kullanıldığı durumlarda, ham veri sektörü düzeyinde varlığını sürdürmeye devam eder7. Saldırganlar, adli bilişim standartlarındaki araçları kullanarak ana dosya tablosu (MFT) olmasa dahi ham bayt akışı içerisinden dosya başlık imzalarını (magic bytes) tespit edip verileri yeniden inşa edebilirler3.  
* **Fiziksel Yongadan Okuma (Chip-Off) ve Kontrolcü Baypası:** Katı hal sürücülerinin (SSD) karmaşık iç mimarisini hedef alan bu yöntemde, saldırganlar SSD denetleyicisini (FTL \- Flash Translation Layer) baypas etmek için bellek yongalarını (NAND Flash) anakart üzerinden sökerek doğrudan EPROM okuyuculara yerleştirirler3. Flaş aşınma dengeleme (wear leveling) ve aşırı yapılandırma (over-provisioning) algoritmaları nedeniyle standart üstüne yazma komutlarının erişemediği yedek bloklardaki artık veriler bu yöntemle doğrudan okunabilir3.

Ayrıca, donanımsal olarak kendinden şifrelemeli sürücülerde (Self-Encrypting Drives \- SED) de çeşitli zafiyetlerden faydalanılabilmektedir10. Sürücünün açık durumda bırakıldığı "sıcak sökme" (hot-plug) saldırıları veya sistemin uyku (sleep) modunda olduğu ve kimlik doğrulama anahtarının (AK) RAM üzerinde aktif kaldığı durumlar, saldırganların fiziksel müdahaleyle şifreleme anahtarlarını ele geçirmesine olanak tanır10.

### **Defansif Perspektif: Süreç Odaklı Müdahale ve SOC Log Entegrasyonu**

Mavi takım için savunma, cihazların fiziksel olarak sökülmesinden çok daha önce başlar. Olay müdahale (NIST SP 800-61) ve varlık yönetimi süreçlerinin entegrasyonuyla, bir cihazın ağ topolojisindeki durum değişiklikleri gerçek zamanlı olarak izlenmelidir2. Güvenlik Operasyonları Merkezi (SOC), kritik bir sunucunun veya veri depolama biriminin (SAN/NAS) çevrimdışı olması durumunda anlık alarm mekanizmaları çalıştırmalıdır. Varlığın yetkili bir decommissioning sürecinde olup olmadığı, ITIL uyumlu biletleme sistemleri ve SIEM entegrasyonu üzerinden otomatik doğrulanır. Eğer bir disk veya ağ cihazı yetkisiz bir şekilde yerinden sökülürse, bu durum anında bir fiziksel sızma veya veri hırsızlığı olayı olarak sınıflandırılarak olay müdahale prosedürleri tetiklenir.

## **Veri Sanitizasyon Standartlarının Karşılaştırmalı Analizi**

Uluslararası ve ulusal otoriteler, depolama medyalarının güvenli bir şekilde arındırılması için katı standartlar geliştirmiştir12. Kurumsal mimarilerde en yaygın referans gösterilen standartlar NIST SP 800-88 Rev. 1, ABD Savunma Bakanlığı'nın DoD 5220.22-M yönergesi ve modern yarı iletken cihazları kapsayan IEEE 2883-2022 standardıdır7.

| Parametre / Kriter | DoD 5220.22-M | NIST SP 800-88 Rev. 1 | IEEE 2883-2022 |
| :---- | :---- | :---- | :---- |
| **Yayın / Revizyon Yılı** | 1995 (Son güncelleme 2006\)15 | 2014 (Halen aktif ve geçerli)3 | 2022 (Modern depolama odaklı)7 |
| **Temel Metodoloji** | Çoklu üstüne yazma (3-Pass: sabit karakter, tümleyen karakter ve rastgele desen)15 | Risk ve medya odaklı üç katmanlı yaklaşım: Clear, Purge, Destroy4 | Teknolojiye özel (SATA, SAS, NVMe) mantıksal ve fiziksel arındırma yöntemleri7 |
| **Flaş Bellek / SSD Uyumu** | Uyumsuz (Yalnızca manyetik diskler için tasarlanmıştır; SSD ömrünü kısaltır)3 | Tam uyumlu (Fiziksel blok düzeyinde Secure Erase ve Kriptografik Silme tanımlar)3 | Tam uyumlu (Gelişmiş yarı iletken ve NVMe mimarilerine özel derin kontroller sağlar)7 |
| **Gizli ve Yedek Sektör Erişimi** | Yetersiz (HPA, DCO ve FTL katmanı arkasındaki verilere erişemez)3 | Başarılı (Kontrolcü komutları vasıtasıyla mantıksal sınırların dışına erişim)3 | En Üst Düzey (Tüm adreslenebilir alanlar ve aşınma dengeleme blokları dâhil)7 |
| **Verifikasyon ve Doğrulama** | Sadece son yazma adımının okunarak kontrol edilmesi15 | %100 oranında tüm disk alanının taranması veya örneklem tabanlı forensik analiz7 | Mantıksal ve fiziksel bütünlük doğrulama mekanizmaları ile tam entegrasyon7 |

### **NIST SP 800-88 Rev. 1 Sanitizasyon Sınıflandırması**

NIST standardı, verinin hassasiyet düzeyine ve cihazın gelecekteki kullanım durumuna göre üç temel sanitizasyon seviyesi tanımlamaktadır4:

#### **Clear (Temizleme)**

Bu seviyede, standart veri kurtarma yazılımlarının veya klavye tabanlı basit analiz araçlarının veriyi geri getirmesini engellemek amacıyla, tüm kullanıcı tarafından adreslenebilir mantıksal blok adreslerinin (LBA) üzerine yeni veriler yazılır3. Genellikle cihazın kurum içi farklı bir departmana veya kullanıcıya yeniden tahsis edileceği (redeploy) düşük riskli senaryolarda uygulanır2. Bu işlem için tek geçişli (1-pass) üstüne rastgele veri yazma pratik olarak yeterli kabul edilmektedir8.

#### **Purge (Arındırma)**

Gelişmiş laboratuvar araçları (manyetik kuvvet mikroskopisi, çiplerin fiziksel analizi vb.) kullanan saldırganların dahi veriyi kurtaramamasını hedefleyen, fiziksel veya mantıksal derin temizleme seviyesidir8. Cihazın kurumsal denetim alanının dışına çıkacağı (satış, kiralama iadesi, bağış veya üçüncü taraf ITAD süreçleri) durumlarda uygulanması zorunludur2. ATA Secure Erase, NVMe Sanitize ve Kriptografik Silme (Crypto-shredding) işlemleri bu kategorinin en temel bileşenleridir3.

#### **Destroy (İmha)**

Cihazın fiziksel bütünlüğünün tamamen ortadan kaldırılarak tekrar çalışamaz duruma getirilmesidir4. Sürücünün arızalı olması ve yazılımsal arındırma komutlarına yanıt vermemesi durumunda ya da en üst düzey gizlilik derecesine sahip verilerin barındırıldığı askeri veya finansal sistemlerde uygulanması tek geçerli seçenektir2. Parçalama (shredding), toz haline getirme (pulverizing), eritme (melting) ve yakma (incineration) bu kapsamda değerlendirilir3.  
Standartlar sadece elektronik medyalarla sınırlı değildir. Örneğin, IRS Publication 1075 ve NIST SP 800-88 uyumluluğuna göre kâğıt ve mikroform dokümanların imhasında, parçacık boyutunun en fazla ![][image1] olacak şekilde çapraz kesim (cross-cut) yapan endüstriyel imha cihazlarının kullanılması zorunludur12. Benzer şekilde, CD ve DVD gibi optik medyaların güvenli imhası için sadece koruyucu katmanın soyulması yetersiz olup, optik diskin özel öğütücülerle nominal kenar ölçüsü en fazla ![][image2] ve yüzey alanı en fazla ![][image3] olacak partiküllere ayrılması veya tamamen yakılması gerekmektedir17.

## **Fiziksel ve Kriptografik Veri Yok Etme Metodolojileri**

Veri yok etme operasyonlarında seçilecek teknoloji, medyanın fiziksel karakteristiklerine doğrudan bağımlıdır1. Manyetik tabanlı geleneksel diskler ile yarı iletken flaş belleklerin fiziksel yapıları taban tabana zıt olduğundan, her iki kategori için ayrı metodolojiler geliştirilmiştir1.

### **Manyetik Depolama Birimleri ve Degaussing (Manyetik Giderim)**

Geleneksel sabit diskler (HDD) ve manyetik teypler (LTO), verileri disk plakaları veya şeritler üzerindeki ferromanyetik malzemenin manyetik polarizasyonunu değiştirerek kaydeder1. Bu düzenli manyetik alan yapısını tamamen bozarak rastgele hale getirme işlemine degaussing denir1.  
Bir malzemenin manyetik giderime karşı gösterdiği direnç gücü koersivite (coercivity) olarak tanımlanır ve birimi Oersted (Oe) cinsinden ifade edilir19. Fiziksel prensipler gereğidir ki, bir depolama medyasındaki verinin tamamen sıfırlanabilmesi için uygulanması gereken asgari manyetik alan gücü (![][image4]), hedef medyanın koersivite değerinin (![][image5]) en az iki katı olmak zorundadır18:  
![][image6]  
Günümüz modern kurumsal manyetik diskleri (HDD) yaklaşık olarak 5.000 Oe koersivite değerine sahiptir19. Bu doğrultuda, kurumsal veri merkezlerinde kullanılacak degaussing cihazlarının anlık üreteceği manyetik alan şiddetinin asgari 10.000 Gauss (Oersted) gücünde olması gerekir18. NSA onaylı degausser cihazları, bu sınırın çok üzerine çıkarak 20.000 ila 40.000 Gauss seviyesinde manyetik darbe uygulayabilirler20.  
Degaussing işlemi, diskin üzerinde yer alan ve okuma/yazma kafasının konumlanmasını sağlayan fabrikasyon "servo izlerini" (servo tracks) de kalıcı olarak yok eder1. Bu nedenle, degausse edilmiş bir hard disk bir daha asla formatlanamaz, işletim sistemi kurularak çalıştırılamaz veya fabrikasyon kalibrasyon araçları olmadan geri kazanılamaz1. Bu yönüyle degaussing, manyetik medyalar için geri dönüşümsüz bir Purge seviyesi sanitizasyondur1.

### **Yarı İletken (SSD) Medyalar ve Kriptografik İmha (Crypto-shredding)**

Katı hal sürücülerinde (SSD) degaussing yöntemi kesinlikle işlevsel değildir; çünkü veri elektrik yükü olarak NAND hücrelerinde depolanır1. Ayrıca flaş kontrolcülerinin (FTL) dinamik adres haritalama ve yedekleme (over-provisioning) işlemleri, standart yazılımların tüm fiziksel hücrelere erişmesini engeller3. Bu mimari çıkmazı aşmak için en etkin çözüm **Kriptografik İmha (Crypto-shredding)** olarak adlandırılır3.  
Crypto-shredding, sürücünün fabrikasyon düzeyinde tüm verileri donanımsal olarak şifreleyerek kaydettiği Kendinden Şifreli Sürücü (Self-Encrypting Drive \- SED) mimarisi üzerine kurgulanır11. Mimaride veri güvenliği, hiyerarşik bir anahtar yapısıyla sağlanır22:

1. **Medya Şifreleme Anahtarı (Media Encryption Key \- MEK):** Sürücü denetleyicisi tarafından donanımsal rastgele sayı üreteci kullanılarak üretilen ve verinin NAND hücrelerine yazılırken AES-256 algoritmasıyla şifrelenmesini sağlayan birincil anahtardır10.  
2. **Anahtar Şifreleme Anahtarı (Key Encryption Key \- KEK):** Kullanıcının belirlediği parola veya harici bir Key Management Service (KMS) üzerinden sağlanan, MEK'in kendisini şifreleyen koruyucu üst katman anahtarıdır10.

Crypto-shredding işlemi tetiklendiğinde, disk içindeki Secure Enclave (Güvenli Bölge) üzerinde yer alan MEK ve KEK fiziksel olarak sıfırlanır (zeroization) veya üzerine rastgele bitler yazılarak yok edilir22. Bu anahtarlar yok edildiğinde, disk üzerindeki trilyonlarca baytlık şifreli veri (ciphertext) anında matematiksel olarak çözülemez bir gürültüye dönüşür11. Bu işlem milisaniyeler seviyesinde tamamlanır ve disk kapasitesinden bağımsız olarak en hızlı Purge yöntemidir3.

### **nvme-cli Aracılığıyla Linux Altında Güvenli Silme Uygulamaları**

Kurumsal veri merkezi altyapılarında veya bulut depolama sunucularında doğrudan NVMe SSD sürücülerin güvenli imhası için nvme-cli yardımcı programı kullanılır23. Aşağıdaki komutlar ve parametreler, gerçek bir sistem yöneticisinin veya SOC analistinin terminal üzerinde uygulayacağı adımları temsil eder:

#### **1\. Sürücü Yeteneklerinin Analiz Edilmesi (Sanitize capabilities)**

Herhangi bir silme işleminden önce, sürücünün hangi sanitizasyon komutlarını desteklediğini görmek amacıyla denetleyici özellikleri incelenir25:

Bash  
sudo nvme id-ctrl /dev/nvme0 | grep sanicap

Çıktıda yer alan sanicap alanının bit değerleri analiz edilmelidir. Örneğin, dönen değer 0x3 ise bu sürücünün hem Block Erase hem de Crypto Erase yeteneklerinin olduğunu gösterir25.

#### **2\. Kriptografik Silme (Crypto Erase) Uygulaması**

Eğer sürücü donanımsal şifrelemeyi destekliyorsa, en hızlı Purge seviyesi olan kriptografik silme eylemi (-a 0x04 veya start-crypto-erase) aşağıdaki komutla çalıştırılır26:

Bash  
sudo nvme sanitize /dev/nvme0n1 \-a 0x04 \--force

* \-a 0x04: Sürücü kontrolcüsüne doğrudan Crypto Erase sanitize komutu gönderir26.  
* \--force: Sürücü üzerinde aktif işlem olsa dahi işletim sisteminin uyarılarını baypas ederek komutu icra eder26.

#### **3\. Blok Temizleme (Block Erase) Uygulaması**

Crypto Erase desteği olmayan veya ek bir fiziksel doğrulama istenen durumlarda, tüm flaş bloklarına toplu yüksek voltaj uygulayarak onları fabrikasyon sıfır durumuna getiren Block Erase (-a 0x02 veya start-block-erase) komutu yürütülür3:

Bash  
sudo nvme sanitize /dev/nvme0n1 \-a 0x02 \--force

* \-a 0x02: NAND hücrelerindeki tüm elektrik yükünü sıfırlayarak fiziksel blok düzeyinde temizlik gerçekleştirir3.

#### **4\. Süreç Takibi ve Log Doğrulama**

Sanitizasyon işlemleri asenkron olarak arka planda yürütülür. İşlemin o anki durumunu, hata kodlarını ve tamamlanma yüzdesini izlemek için log sayfası dinamik olarak sorgulanmalıdır25:

Bash  
sudo nvme sanitize-log /dev/nvme0n1

Çıktı içerisinde Sanitize Status (Sanitize Durumu) alanı takip edilir. 0x102 başarıyla tamamlandığını gösterirken, aksi durumlar işlemin başarısız olduğuna veya kesintiye uğradığına işaret eder; bu durumda diskin fiziksel imha sürecine sevk edilmesi şarttır5.

## **Fiziksel Donanım İmhası, Sorumluluk Zinciri ve E-Atık Yönetimi**

Yazılımsal olarak temizlenemeyen hasarlı depolama birimleri veya en üst seviye gizlilik kategorisindeki varlıklar için fiziksel imha adımları uygulanır2. Fiziksel imha süreçlerinin her bir adımı belgelenebilir ve denetlenebilir olmalıdır4.

### **DIN 66399 Standardı ve Parçacık Boyutları**

Almanya kökenli olan ve tüm Avrupa ile uluslararası siber güvenlik topluluklarında standart kabul edilen **DIN 66399** (ISO/IEC 21964), imha edilen cihazların geride bırakacağı maksimum parça boyutunu yasal kurallara bağlamıştır13. Standartta depolama medyaları kategorilere ayrılır13:

* **H Sınıfı (Sabit Disk Sürücüleri \- HDD):** Manyetik plakaların parçalanma boyutunu tanımlar13.  
* **E Sınıfı (Elektronik Medyalar \- SSD, SIM, Akıllı Kart):** Yarı iletken yongaların parçalanma boyutunu tanımlar13.  
* **O Sınıfı (Optik Medyalar \- CD, DVD, Blu-Ray) ve T Sınıfı (Manyetik Teyp Kartuşları):** Diğer depolama birimlerini kapsar13.

| Medya Türü / Sınıfı | Güvenlik Seviyesi | İzin Verilen Azami Partikül / Parça Boyutu | Uygulama ve Güvenlik Derecesi |
| :---- | :---- | :---- | :---- |
| **HDD (Manyetik Plakalar \- H Sınıfı)** | H-4 | ![][image7] | Standart kurumsal verilerin imhası |
|  | H-5 | ![][image8] | Gizli ticari ve finansal veriler |
|  | H-6 | ![][image9] | Çok gizli devlet ve askeri sırlar13 |
|  | H-7 | ![][image10] | En üst düzey stratejik istihbarat verileri |
| **SSD / Flaş Yongalar (E Sınıfı)** | E-4 | ![][image9] | Standart kullanıcı depolama birimleri |
|  | E-5 | ![][image9] | Kurumsal sunucu ve veritabanı sürücüleri |
|  | E-6 | ![][image10] (Veya max 2 mm nominal boyut)13 | Çok gizli kurumsal ve askeri flaş medyalar13 |
|  | E-7 | Kum benzeri, tamamen ayrıştırılmış partiküller29 | Adli tıp analizlerini imkânsız kılan en üst düzey imha29 |

### **Flaş Belleklerde 2 mm Parçalama Hassasiyeti**

SSD’lerin imha sürecinde en büyük mühendislik hatası, bu sürücülerin manyetik sabit diskler için tasarlanmış geniş ağızlı endüstriyel öğütücülere atılmasıdır3. Standart bir HDD parçalayıcı diski ![][image11] boyutundaki parçalara ayırabilir31. Ancak bir SSD yongasının (NAND Flash TSOP/BGA paketi) fiziksel boyutu genellikle ![][image12] veya daha küçüktür31. Bu durumda, bir bellek yongası fiziksel olarak hiçbir hasar almadan öğütücü bıçaklarının arasından tek parça halinde düşebilir31. Saldırganların bu yongayı kurtarıp veri elde etmesini engellemek için, SSD parçalayıcıların ve dezentegratörlerin bıçak açıklıklarının **en fazla 2 mm** olması ve materyali un ufak etmesi şarttır29.

### **Sorumluluk Zinciri (Chain of Custody) Prosedürü**

Fiziksel imha süreci, cihazın depodan çıkıp geri dönüşüm fırınına girene kadar her aşamada sıkı güvenlik kontrolleri altında tutulmalıdır5:

1. **Güvenli Depolama ve Kilitli Taşıma:** Kullanım dışı kalan diskler, imha anına kadar yetkisiz personelin erişemeyeceği, çift aşamalı biyometrik erişim kontrollü depolarda saklanır5. Sevk esnasında kurşun geçirmez, GPS vericili ve kilit sistemi SOC tarafından uzaktan izlenen özel taşıma çantaları kullanılır32.  
2. **Mühür ve Teslim Tutanağı:** Her sevkiyat öncesinde konteyner kapaklarına benzersiz seri numarasına sahip tek kullanımlık güvenlik mühürleri takılır ve bu numaralar teslimat tutanağına işlenir32.  
3. **İmha Sertifikası (Certificate of Destruction \- CoD) Kriterleri:** İmha işleminin ardından yasal olarak bağlayıcı olan CoD belgesi düzenlenir4. Bu belgede en az şu detayların bulunması denetim uyumluluğu için mecburidir4:  
   * İmha edilen her bir diskin markası, modeli ve seri numarası4.  
   * Uygulanan sanitizasyon seviyesi (Clear, Purge, Destroy) ve teknik detayları4.  
   * Uygulamanın yapıldığı tarih, saat ve tam lokasyon4.  
   * İmha işlemini yapan sertifikalı teknisyenin ve işlemi yerinde gözlemleyen kurum yetkilisinin imzaları4.

## **Yerel ve Uluslararası Mevzuatlar, Denetim ve Kurumsal Uyum**

Kurumsal şirketler için veri imhası sadece teknik bir gereksinim değil, aynı zamanda ağır cezai müeyyideleri olan yasal bir zorunluluktur13.

### **KVKK (6698 Sayılı Kanun) Uyum Parametreleri**

Kişisel Verileri Koruma Kurumu (KVKK) tarafından yayımlanan "Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik" doğrultusunda, veri sorumluları saklama süreleri dolan verileri silmekle yükümlüdür34.

* **Periyodik İmha Süreleri:** Kurumlar kişisel veri içeren medyaları en geç **6 ayda bir** düzenli olarak periyodik imha sürecine tabi tutmalıdır34. Ancak, KVKK kapsamında yer alan **özel nitelikli kişisel veriler** (biyometrik veriler, sağlık verileri, ceza mahkûmiyeti bilgileri vb.) söz konusu olduğunda, bu süre en geç **3 ayda bir** olacak şekilde daha sıkı uygulanmalıdır36.  
* **İspat Yükümlülüğü ve Tutanaklar:** Yapılan her türlü silme ve imha işlemine ilişkin kayıtlar, loglar ve tutanaklar, diğer kanuni saklama süreleri saklı kalmak kaydıyla **en az 3 (üç) yıl** boyunca güvenli ortamlarda saklanmalı ve denetimlerde ibraz edilmelidir.

### **BDDK Bilgi Sistemleri Yönetmeliği Uyum Koşulları**

Bankacılık Düzenleme ve Denetleme Kurumu (BDDK) mevzuatları uyarınca, finansal verilerin barındırıldığı tüm donanımların imha ve elden çıkarma süreçleri bağımsız denetçiler tarafından denetlenmektedir35:

* **Erişim ve İşlem İz Kayıtları:** Müşteri sırrı veya hassas finansal veri barındıran tüm sistemlerde gerçekleştirilen erişim, kopyalama, değiştirme ve silme operasyonlarına ait iz kayıtları (audit logs) **en az 5 (beş) yıl** boyunca güvenilir ve yetkisiz müdahalelere karşı korumalı ortamlarda muhafaza edilmelidir37.  
* **Hizmet Dışı Bırakma Protokolü:** Bankacılık verisi taşımış olan bir depolama ünitesi (SAN diskleri vb.) veri merkezinden çıkarılmadan önce mutlaka degausse edilmeli veya yerinde (on-site) parçalanarak fiziksel bütünlüğü bozulmalıdır2.

### **5651 Sayılı Kanun Kapsamında Log Yönetimi**

5651 Sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Kanunu uyarınca, kurumsal iç ağlarda kullanıcılara sağlanan internet erişimine ait trafik verileri (DHCP logları, NAT kayıtları, hedef IP bilgileri) **en az 2 (iki) yıl** süreyle zaman damgasıyla imzalanarak saklanmak zorundadır34. Bu saklama süresinin dolmasının ardından ilgili logların barındığı disk bölümleri, KVKK ilkelerine uygun olarak güvenli biçimde silinmeli ve yeni log alanlarına yer açılmalıdır34.

### **ISO/IEC 27001:2022 ve CIS Controls Entegrasyonu**

Bilgi Güvenliği Yönetim Sistemi (BGYS) standardı kapsamında, veri sanitizasyonu süreçleri doğrudan denetim kriteridir7:

* **Kontrol A.7.14 (Ekipmanların Elden Çıkarılması veya Yeniden Kullanılması):** Cihazların elden çıkarılmadan önce üzerlerindeki tüm hassas bilgilerin güvenli yöntemlerle arındırıldığının doğrulanmasını zorunlu kılar7.  
* **Kontrol A.8.10 (Bilgilerin Silinmesi):** Bilgilerin silinmesine yönelik standart prosedürlerin bulunmasını ve bu silme operasyonlarının takip edilebilir olmasını şart koşar7.

CIS Controls (Control 3: Data Protection) yönergelerinde ise, tüm veri imha süreçlerinin merkezi bir varlık yönetim sistemiyle (CMDB) ilişkilendirilmesi ve imha kayıtlarının otomatik olarak güncellenmesi gerektiği belirtilmiştir5.

## **Güvenlik Operasyonları Merkezi (SOC) İzleme Mimarisi ve Wazuh Entegrasyonu**

Veri sanitizasyonu ve cihaz imha işlemlerinin izlenebilir ve denetlenebilir olması için uç noktalarda yürütülen imha süreçlerinin merkezi SIEM/SOC altyapısına raporlanması gerekir5. Bu doğrultuda kurulan mimaride, uç noktalardaki sanitizasyon betikleri veya donanımsal imha aparatları, gerçekleştirdikleri işlemlerin sonuçlarını şifreli kanallar üzerinden merkezi log sunucusuna iletir.

### **Uç Noktadan Gönderilen Örnek JSON Log Çıktısı**

Aşağıdaki JSON verisi, bir Linux sunucu üzerinde nvme-cli ile başarıyla tamamlanan bir Kriptografik Silme (Crypto Erase) işleminin ardından otomatik olarak üretilen ve Wazuh ajanına yönlendirilen standart olay kaydını göstermektedir:

JSON  
{  
  "timestamp": "2026-03-30T14:22:15.890Z",  
  "event\_source": "firmware\_sanitizer\_daemon",  
  "operator\_id": "SYS-ADMIN-104",  
  "action": "media\_sanitization\_execute",  
  "target\_device": {  
    "type": "NVMe\_Enterprise\_SSD",  
    "path": "/dev/nvme1n1",  
    "serial\_number": "SN-MZVLB1T0HALR-00000",  
    "model": "Samsung\_PM981\_1TB"  
  },  
  "parameters": {  
    "requested\_method": "NIST\_800\_88\_Purge\_Crypto\_Erase",  
    "cli\_command": "nvme sanitize /dev/nvme1n1 \-a 0x04 \--force"  
  },  
  "status": "success",  
  "verification": {  
    "sectors\_scanned": 1953525168,  
    "readable\_data\_found": false,  
    "ftl\_map\_check": "key\_zeroization\_verified",  
    "integrity\_check": "passed"  
  }  
}

### **Wazuh Kuralları Yapılandırması (/var/ossec/etc/rules/local\_rules.xml)**

SOC analistlerinin SIEM panelinde gerçek zamanlı uyarılar üretebilmesi ve mevzuata uygun log üretebilmesi için aşağıdaki özel Wazuh kuralları tanımlanmıştır:

XML  
\<group name\="media\_sanitization,compliance\_audit,"\>

  \<\!-- Temel Sanitizasyon Olay Algılama Kuralı \--\>  
  \<rule id\="100350" level\="3"\>  
    \<decoded\_as\>json\</decoded\_as\>  
    \<field name\="event\_source"\>^firmware\_sanitizer\_daemon$\</field\>  
    \<field name\="action"\>^media\_sanitization\_execute$\</field\>  
    \<description\>SOC Bilgi: Sistemde depolama medyası sanitizasyon işlemi tetiklendi. Hedef Cihaz: $(target\_device.path) (Seri No: $(target\_device.serial\_number))\</description\>  
  \</rule\>

  \<\!-- Başarılı ve Doğrulanmış Arındırma Olayı (KVKK/BDDK Uyumlu) \--\>  
  \<rule id\="100351" level\="5"\>  
    \<if\_sid\>100350\</if\_sid\>  
    \<field name\="status"\>^success$\</field\>  
    \<field name\="verification.readable\_data\_found"\>^false$\</field\>  
    \<description\>SOC Bilgi: Veri sanitizasyon işlemi başarıyla tamamlandı ve doğrulandı. Cihaz güvenle elden çıkarılabilir. (Seri No: $(target\_device.serial\_number))\</description\>  
    \<mitre\>  
      \<id\>T1070\</id\>  
    \</mitre\>  
  \</rule\>

  \<\!-- KRİTİK UYARI: Başarısız Sanitizasyon Teşebbüsü (Veri Kalıntı Riski) \--\>  
  \<rule id\="100352" level\="12"\>  
    \<if\_sid\>100350\</if\_sid\>  
    \<field name\="status"\>^failed$\</field\>  
    \<description\>Kritik Alarm: Veri arındırma işlemi başarısız oldu\! Sürücüde veri kalıntısı (data remanence) riski. Cihazı fiziksel olarak izole edin ve fiziksel imha (Shredding) departmanına yönlendirin\!\</description\>  
    \<mitre\>  
      \<id\>T1561\</id\>  
    \</mitre\>  
  \</rule\>

  \<\!-- GÜVENLİK ALARMI: Şüpheli Temizleme Doğrulama Hatası \--\>  
  \<rule id\="100353" level\="13"\>  
    \<if\_sid\>100350\</if\_sid\>  
    \<field name\="verification.readable\_data\_found"\>^true$\</field\>  
    \<description\>Yüksek Öncelikli Alarm: Veri sanitizasyonu başarılı raporlandı ancak yapılan taramada okunabilir veri tespit edildi\! Olay müdahale sürecini (Incident Response) başlatın.\</description\>  
    \<mitre\>  
      \<id\>T1561.002\</id\>  
    \</mitre\>  
  \</rule\>

\</group\>

## **Sonuç ve Mimari Tavsiyeler**

Fortune 500 ölçeğindeki yapılarda sızıntıları önlemek amacıyla güvenli cihaz imhası ve veri yok etme süreçleri için şu mimari adımlar izlenmelidir:

1. **SED ve TCG Opal Standartlaştırması:** Satın alınacak tüm sunucu ve kullanıcı uç nokta donanımlarında Kendinden Şifreli Sürücü (SED) desteği aranmalı, anahtar yönetimi merkezi bir KMIP uyumlu KMS/HSM mimarisine bağlanmalıdır11.  
2. **Aşamalı Sanitizasyon Prosedürü:** Donanımların elden çıkarılmasında, önce nvme-cli ile Kriptografik Silme (Crypto-shredding) yapılarak veri anlamsızlaştırılmalı, ardından fiziksel hasarlı veya kritik tüm medyalar DIN 66399 standartlarına uygun olarak en fazla 2 mm boyutunda parçalanmalıdır23.  
3. **SOC ve Log Tabanlı Doğrulama:** Tüm sanitizasyon işlemleri otomatize edilmeli, elde edilen yazılımsal doğrulama raporları ve imha sertifikaları merkezi SIEM sistemine (Wazuh vb.) aktarılarak KVKK ve BDDK gereksinimlerine uygun olarak en az 3 ile 5 yıl süreyle silinemez şekilde arşivlenmelidir34.  
4. **ITAD Denetimi:** Üçüncü taraf geri dönüşüm ve imha firmalarıyla yapılan sözleşmelerde Sorumluluk Zinciri (Chain of Custody) kuralları işletilmeli, GPS takipli sevkiyat ve video kayıtlı imha sertifikası (CoD) teslimatı zorunlu tutulmalıdır5.

#### **Alıntılanan çalışmalar**

1. Degaussing Hard Drive: How It Works & Can It Be Reused? \- Green Wave Electronics, [https://greenwaveelectronics.com/blog/degaussing-hard-drive-how-it-works-can-it-be-reused](https://greenwaveelectronics.com/blog/degaussing-hard-drive-how-it-works-can-it-be-reused)  
2. NIST 800-88 Data Sanitization: Wipe vs Purge vs Destroy \- Excess I.T. Hardware, [https://excessithardware.com/nist-800-88-checklist/](https://excessithardware.com/nist-800-88-checklist/)  
3. NIST 800-88 Media Sanitization Complete Guide: Clear, Purge, and Destroy Methods Explained \- Inventive HQ, [https://inventivehq.com/blog/nist-800-88-media-sanitization-complete-guide](https://inventivehq.com/blog/nist-800-88-media-sanitization-complete-guide)  
4. A Comprehensive Guide to NIST SP 800-88 Data Sanitization for Businesses, [https://www.beyondsurplus.com/nist-sp-800-88/](https://www.beyondsurplus.com/nist-sp-800-88/)  
5. NIST 800-88 Purge Certification: Key Audit Requirements \- Hummingbird International, [https://hummingbirdinternational.net/blog/compliance-regulations/nist-800-88-purge-certification/](https://hummingbirdinternational.net/blog/compliance-regulations/nist-800-88-purge-certification/)  
6. NIST 800-88 Data Destruction Houston | Secure Media Sanitization | EverTrade, [https://evertradeelectronics.com/services/nist-800-88-data-destruction](https://evertradeelectronics.com/services/nist-800-88-data-destruction)  
7. NIST 800-88 Method Selector: Clear, Purge or Destroy? \- Nanosoft, [https://www.nanosoftltd.com/tools/nist-800-88-data-destruction-method-selector](https://www.nanosoftltd.com/tools/nist-800-88-data-destruction-method-selector)  
8. NIST Special Publication 800-88 Revision 1 Guidelines for Media Sanitization: Working Summary \- DestructData, [https://destructdata.squarespace.com/s/nist-sp-800-88-summary-rev1.pdf](https://destructdata.squarespace.com/s/nist-sp-800-88-summary-rev1.pdf)  
9. SSD Data Recovery | $200 | NVMe, M.2 & SATA \- Rossmann Repair Group, [https://rossmanngroup.com/services/ssd-data-recovery](https://rossmanngroup.com/services/ssd-data-recovery)  
10. Hardware-based full disk encryption \- Wikipedia, [https://en.wikipedia.org/wiki/Hardware-based\_full\_disk\_encryption](https://en.wikipedia.org/wiki/Hardware-based_full_disk_encryption)  
11. Downloadable Official CompTIA CASP+ Student Guide | PDF | Risk Management \- Scribd, [https://www.scribd.com/document/815268981/Downloadable-Official-CompTIA-CASP-Student-Guide](https://www.scribd.com/document/815268981/Downloadable-Official-CompTIA-CASP-Student-Guide)  
12. Media sanitization guidelines | Internal Revenue Service, [https://www.irs.gov/privacy-disclosure/media-sanitization-guidelines](https://www.irs.gov/privacy-disclosure/media-sanitization-guidelines)  
13. What Is DIN 66399 and Why Does It Matter for Data Destruction in Sweden?, [https://phiston.com/what-is-din-66399-why-it-matters-sweden/](https://phiston.com/what-is-din-66399-why-it-matters-sweden/)  
14. Data Sanitization Explained: Methods, Standards & What Most Companies Forget \- Jetico, [https://jetico.com/blog/data-sanitization-explained-methods-standards-what-most-companies-forget/](https://jetico.com/blog/data-sanitization-explained-methods-standards-what-most-companies-forget/)  
15. DoD 5220.22-M Vs. NIST 800-88: Which Data Erasure Standard is Better? | ITAMG, [https://www.itamg.com/data-destruction-guides/dod-5220-22-m-vs-nist-800-88/](https://www.itamg.com/data-destruction-guides/dod-5220-22-m-vs-nist-800-88/)  
16. What is NIST 800-88, and What Does “Media Sanitization” Really Mean? \- Blancco, [https://blancco.com/resources/blog-what-is-nist-800-88-media-sanitization/](https://blancco.com/resources/blog-what-is-nist-800-88-media-sanitization/)  
17. Data and Media Sanitization | Cybersecurity | Information Technology Services (ITS), [https://www.uthsc.edu/its/cybersecurity/sanitization.php](https://www.uthsc.edu/its/cybersecurity/sanitization.php)  
18. Degaussing for Magnetic Media \- Lifespan Technology, [https://www.lifespantechnology.com/pdf/Lifespan\_TechnicalBrief\_Degaussing.pdf](https://www.lifespantechnology.com/pdf/Lifespan_TechnicalBrief_Degaussing.pdf)  
19. Degauss with Confidence \- Data Security, Inc., [https://datasecurityinc.com/wp-content/uploads/2023/07/Degauss-with-Confidence.pdf](https://datasecurityinc.com/wp-content/uploads/2023/07/Degauss-with-Confidence.pdf)  
20. How To Select the Right Degausser? A Comprehensive Guide. \- Garner Products, [https://garnerproducts.com/degaussing-101/how-to-select-the-right-degausser-a-comprehensive-guide](https://garnerproducts.com/degaussing-101/how-to-select-the-right-degausser-a-comprehensive-guide)  
21. Degaussing made easy, [http://www.akl-it.com/manual/Media%20gauss%20level%20whitePaper\_ABCofDegaussing.pdf](http://www.akl-it.com/manual/Media%20gauss%20level%20whitePaper_ABCofDegaussing.pdf)  
22. Crypto-shredding \- Grokipedia, [https://grokipedia.com/page/Crypto-shredding](https://grokipedia.com/page/Crypto-shredding)  
23. How to \*secure erase\* a NVMe SSD \- Ask Ubuntu, [https://askubuntu.com/questions/1310338/how-to-secure-erase-a-nvme-ssd](https://askubuntu.com/questions/1310338/how-to-secure-erase-a-nvme-ssd)  
24. \[Solved\] securely erase ssd on command line \- Debian User Forums, [https://forums.debian.net/viewtopic.php?t=165905](https://forums.debian.net/viewtopic.php?t=165905)  
25. How to Format an NVMe Drive? How to Permanently Erase Data from an NVMe Drive? \- Serverparts.pl, [https://www.serverparts.pl/en/blog/how-to-format-an-nvme-drive-how-to-permanently-erase-data-from-an-nvme-drive](https://www.serverparts.pl/en/blog/how-to-format-an-nvme-drive-how-to-permanently-erase-data-from-an-nvme-drive)  
26. nvme-sanitize(1) \- Arch manual pages, [https://man.archlinux.org/man/nvme-sanitize.1](https://man.archlinux.org/man/nvme-sanitize.1)  
27. nvme-cli/Documentation/nvme-sanitize.txt at master \- GitHub, [https://github.com/linux-nvme/nvme-cli/blob/master/Documentation/nvme-sanitize.txt](https://github.com/linux-nvme/nvme-cli/blob/master/Documentation/nvme-sanitize.txt)  
28. intimus | The Shredder Company, [https://www.intimus.com/](https://www.intimus.com/)  
29. KOBRA SSD, [https://www.kobra.com/en-US/products/electronic-shredders/kobra-ssd](https://www.kobra.com/en-US/products/electronic-shredders/kobra-ssd)  
30. What are Paper Shredders Security Levels? \- Whitaker Brothers, [https://www.whitakerbrothers.com/pages/paper-shredders-security-levels-reference-chart](https://www.whitakerbrothers.com/pages/paper-shredders-security-levels-reference-chart)  
31. SSD Shredder Machines for High-Security Data Destruction \- Phiston Technologies, [https://phiston.com/ssd-shredder/](https://phiston.com/ssd-shredder/)  
32. NIST 800-88 Data Destruction Guide \- CyberCrunch, [https://ccrcyber.com/nist-800-88-data-destruction](https://ccrcyber.com/nist-800-88-data-destruction)  
33. Must Have Elements of a Data Destruction Certificate \- Blancco, [https://blancco.com/resources/blog-must-have-elements-of-a-data-destruction-certificate/](https://blancco.com/resources/blog-must-have-elements-of-a-data-destruction-certificate/)  
34. Veri Saklama, Anonimleştirme ve İmha Politikası \- Seniorah, [https://seniorah.com/pages/veri-saklama-anonimlestirme-ve-i%CC%87mha-politikasi](https://seniorah.com/pages/veri-saklama-anonimlestirme-ve-i%CC%87mha-politikasi)  
35. KVKK \- İstanbul Faktoring, [https://istanbulfaktoring.com.tr/kvkk/](https://istanbulfaktoring.com.tr/kvkk/)  
36. Kişisel Veri Saklama ve İmha Politikası \- Forwardie, [https://forwardie.com/saklama-ve-imha-politikasi](https://forwardie.com/saklama-ve-imha-politikasi)  
37. Bankaların Teknik Güvenlik ve Kimlik Doğrulama Yükümlülüğü \- İzmir Avukatlık ve Hukuki Danışmanlık Hizmetleri \- Kotan & Gökce Hukuk Bürosu, [https://kotangokce.com/post/bankalarin-teknik-guvenlik-ve-kimlik-dogrulama-yukumlulugu/](https://kotangokce.com/post/bankalarin-teknik-guvenlik-ve-kimlik-dogrulama-yukumlulugu/)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAZCAYAAAAc5SFpAAADfElEQVR4Xu2YTahNURTHl1CEyDehm4EiQj6KfA30Iin5CJG8KJIokjAjAwYIA0lJknyUqSSuFDJQREYGRAZihHzk4/9vndVd97zz7r37njt49779q3/vvfX22Wft9d9n732OSCQSiUQikValAK1LB7sxa6C5UH+oBzQc2ghN842akYnQDuge9Ae6VP7vbksv6Dr0L6Ub0EDXrimh6StEZ/R7iaZ7LkAvoXfQTWgZ1LOsRZMzCnorzW16P2hEOujgEj1aajfuDDQjHWwlQkzvLVrc2dCi5O+C6IrBIllRh0DLkzZ9khjhHjkGahNdaXj9TNHrxyZtaNAEaHXSphajhokuyewrDfvbLGok71cLoaYzR+77k6GlUF/ROrEGC6R0X05Ojp3yW0XeugYTYnoBeiC6xz2BzkF7oE3QG9FlcTd0VvRgeAd6Lmo04SA+iF5/HroMbYAOQd+grUmcfW5P2rIv7rPV4D1uixbOqMdwwnuehJ6Jbn2PoellLcoZJDrpeDZi+2PQEdEaPILuQutFx8sYa/0JmsqLJX9dgwkxnbCQV6C/0BIXPyiaNAfLNmQe9Ft0dhpMlIV5LaUleQD0EPoJzU9i5KhobsyxFrzx9RpOLkIHpPSE8eT+RconVBZWg50utjKJcVJYHuOhj9B+ayT56xpEqOmEbV9BQ12MA/gOzXIxLk18gn1ydr/TLsZlvyhqPCeAwT5DTCdmPJ+KegwnzMFvKzZRr0rlVYf5fhbdlgyOnabRfMNq4E0neeoaRL2mF0XNMpgcE/F7YVZyWQM206l0n6Gm82ng0sjlk28mjcBy5lJb6cCYla+ZXq0GJE9dg2gl02k4l1Y+4eOgW1J9SU7TLrrE8kxhWM7VcsnKN5ou2QNuhOnecFvSR0q48bwnTfKm2/JelPL80mTl26VN5yGChasG27Bt1v7bWXLbXMwKyAOKUcn09B6ZBXPi18VT0nEPDzV+juh5wPezFvoBrXKxLDgmjs2fqiuZ7s81eetaE4tFE+Rrhn1q/Aq9gKa4dh7Gua/59jzZ8pXGYr+gE4n4u8X5GXNXKvY0uZ4nY4vx96w+/ZOXZhJ0WDoabgyGjic/q8Hi74XuQ1tEjeHE46Tq7KHgOzrH4vPdB12TUn35k38zzrr5GiyUfHXl+3+kAfBjEb8rtEkLfHOPRCKRSCQSiUQikUiX5T9m4hzmMDOYDgAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAZCAYAAACFHfjcAAACs0lEQVR4Xu2WTahOURSGl1Dk3y0icq9EiigMDBhJGZD8lL8hZSBKoRjeDBhKKTNJYSpShFKIUgYoJT+RgRgxoMT7tPbq7m875/s+DG6fzltP55x19jln7ffsvfY2a9SoUaPuNFbsEGfFSbGg9XatFoutYpoYIcaLVWJn3qhXNEncEIPmHVkqnonNeaMabRM/C96av6PndEQ8ElOyGH/0uZiexaq0XrxMPBAHxMSWFj0iOo8J54r4CvFFbCjipTACI3teC8Un+92IZeKrOF7ES/2NEUy/WWKt+fdHi+Vio5id2lBv5ostqc3IFOdIPVok1pnXNkYteaw2fxcaZ/5+YOp3VHS4zogyXooEaHPdfHq8EntsKPEq0eH35vWE4nzefCoeM//m7hQ/KPamtqfFKDFZXBY/xDtxwry2UavuiZtiu/k7iZHbR7HEOoiOkFDZ4T8x4paYmq7nmSd42Pyv1okRQbu8Dk0Qd8U385UnxKh8I2ZksaPmee/LYptSDKNiZMwVH6yLUcvw+hcjxiRCdP6CeScHsngpOkXnTmUxpswdczMwJUQnSiOIMaWZNqH4qRgSiu90NKKuw3XxbsQzJITJdapKMIwAzkN1RpSxMIJjqOo7lYqhU3Y4jGAI1olixvy9Yl60QmFEnlCpqgSH1Yj4+FVrHeJrxPd0DFF9Z9rQ3A+zciO4x9Qgzv06VSU4rEagXea7wYF0TWeoxGyQYunpE0/MC9nKFOMene5P14hzVg+qfhSsKkWxzEdcOyPKesBzPM97Qu2MyGtRrUj4jLhtvrRhwlNr3SaT2DXxQszJ4qz/j80T2y9ei4vWfu1mSWS0kTQ8NP8Zn7MY58TuZzGeOZTal7FL5ksqMY5cE2dTmH+HPUhbMQpiA5NvTLpRbF4wsd/aL5uNGjVq1KhRo/9DvwDYd7dE9ZwO7wAAAABJRU5ErkJggg==>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAZCAYAAACvrQlzAAADw0lEQVR4Xu2XW6iOWRjHH6EIDW0lIntkTETIKTnkAnFhmlAjxIXjFaIcL+zChUOaRCTlFDXNuHBBMVO2XDhdSDnUSDENcoEbFHL4/3re1bved3/vtzd7py3vv/5937fWs07/tZ7DZ1aixFfEIHFPQr6XaAaGi6vEtuI48T9xfMaixGdhnXhf7CG2E/8SD2UsGkFHca54UNwh/pztrgpsGcPYNWLPbLd1EBeIg5Pv3HpvcalYm5q1KnQXR4ttzPd8xtz1m4QfxL/FLWJncZh4R5wVGxUAm1PiUHGCeEN8K86MbLqKV8WPOe4S20d2rRUjzF8rYaBJ4HlfF7tFbfPEu+ZPvgj0XRInm98k6C8+Fu+JfZI2LokbvmW+sSPiGEvHtGbw2E6KY/MdRUBExDyaax8lvhR/ybXH4OZeWRprACKdMH+B05M2BGX+fCho7UDMneJA8zj6U7a7MjB+Zg0FDWJty7XHYEHc/bC5aAHMhaAzkt9fIiihgEsijk1KfteKv5rvjTgMaszXwYZYF8CaxOmp5mdk/Ejz8cFzuPwB4uzEJswJsN9s/jLZN/tYEvUXIghXJGi+vTGEF//U0sTG4f4Qd5u7/SPxtFVPSLXiRfOLuSIeEFebJzc8goy7UtwrzhHPizfNRQQIxzqMJ1keNw9jm8zPtThpZ87liS1z8RLBImsY8+O8UAhuF+O8cF8q6G/ie3GtpTESQc8lfbRBEuC/Yt/EphKwI3x8EKdF7RvN98wcYQ1qxHeWegVA3P8tmwu6mMf9N+ZJNABPfGif50UVQZxrKUERh83XWTZ7c2gOEg4PiNGvzW2rgfVvm5cxASRRxjJHQNhvLCjiIFJc7nC59eaisqcA5mwRQYuEK2ovAvGUTI4bxrGoCGH+f8ROub4YrF9v2RjN4RnLHAHVBMU+IAgK83O2iKD9xCfWULiwQdyrMQQxg0uDieb1LNhu7o5Tkt8gzF9v2YPl8c0JGhZAkDhLUltSoPMZgHC9LOu6uPbv1jBgb7XUJRGFuBoLSh9uS4UQz5fHNycomG/+5//H5DcHJOCTXRER1JhnUYI5pQRAzLqkjfGBJIIH5q8fkIXXWyocnxvEF+blSBGwIylVindFgi6L2kJSir2smqCUj5RPzQbC7BcvmJcbiHnbUpcFLH7Wspk5HCJfXsD4nxfz7zOvWReKx8w3Hwr/ShhiXh6F+fiTwcVfjtrwIEoxyPfQ/qe4Itd2LRn/PGrje6U5KaOaDV5DKHKJf3GWbgnE80+ybHgpUaJEiRIlSpQo8X3hE1rv7vLmRn7rAAAAAElFTkSuQmCC>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAaCAYAAAADiYpyAAACyklEQVR4Xu2XWchNURTHlwzJmCFDMpUhD5KQTEVRFJKhCBEeZHhAUaa+SBmeTMkQIVMIZXigTC9KSR69+J4I8SBezP+ftU/33N253NLFd5x//TrnrLX3uXuvvfY6+5oVKlSoUPUaJ16Lbyneivmio7grvqR878VZ0ZLOedQR8VWMjx3mNnzHRKPIlyu1Ew9FvehW7vqhdebZMDd25E0DxBtxQTSJfDxjx0+7XIuVZsVZ+VhkSL15xpA5udYe8VlME10jZpnXB9rkWkl9+CBOiEMRz6yoD1XVh9HiubgjWpW7GpaS+rA6dlj19WGK5SAQnB8+ma9sLGz4flUfGnwgfuf8MMr8hEkgd1l5IPBx+DojZpgfwtqILeKK2CgOi72itdggtoc+9EW9xD5xVXQSk8Q5sST4+4kd5v1OioEVbFVpiHmRzKoPzcU18U4MinxjxHXRNjwvtFIgBgdfhwD3DIhJEVCCclQsE93N3/00XDuLW6K/uYaJJ+ZfL/oxyeQTz/vwo6nmc8my/VQcmSlw6f8Xr8Qc88HfFB9TPu5PiRZ0Ns+CbeEepbcG9ntiZoB7PsFMkHaINun+jc2L8TzxwEoT4PrYPBCIICSBqDMf80Ex3DxQWbaa6riVH77SgSBI+GPxJ440XyQuiZ7BzvW+eRDai8tWXSD40zdW7BYvxYQKtppqhZVvp+lWCsRE8yxItk1f861RJ3qY16X0SjGxJHD4yEaCNcLKA0EfakgSCOoKWwnx+9izbDUVk2TwpPdiccO81mwyX5U14rxYIDaH9rPNT6jJVqOQdhFDxSOxVKwVF8Vt8yAQ2NNipVge7C/EZLFf7DR/7wHzYGfZ/ogYKEW1mWga+XhOsqK3eQZRfxA1YZWV6gTP+LhmiffwPmpU0oZs5D6dYVm2f0p8/ghEn/DMYNebZ8F/J84R1JY6sVWMtMoZUKhQob+n74T+p8YoPe8ZAAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAABN0lEQVR4Xu2UPy8FQRTFryDh0QgFUbxapaDUSDQ6jYSIT/A6DV9AqZFoRCIkEoVEpVKIWuEj2EpBKITG/99xSWZvFO/tW4mXvJP8sjtzZjZ3zsyOWVv/TdNwCx8J97AMQ3AOb4n3CIfQp8mNaAfeYSYa5n3ydqEjeHVpAC4gg9G89aVV8+qXolGvxuAOjqAreGqrX77GFZIqU4WqNEorysxXqJUW0ia8whyMBObN89eYQvrJ/wn2YTtwZa2S/0o0rKT8df5fYCoa5n3yms4/s8bPfzcswDFswHDedk2Yb+5v+ffACTzAePD08S1YNL9OLmE2HaBf/9ry98+N+YRBOIXnxNP7AVQ02bzyM+iHzu85epamPViPnWVKB6OWtJV/NWk3rUnzzVVUOghr0JsbUYL+JPu2WkSfyMZLgUrfR4YAAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAAxCAYAAABnGvUlAAADjElEQVR4Xu3cTaitYxQH8CUfEfJxfUaEJDcfydeERCkmBjJQBpSBiYHcMKPIABNhQspAShEmPpK6O4qBKRMZyEQpBsKAwlo979t59nPP3cfJOe6O36/+7f0873v3OfuOVmu9z4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBbbs08N+x9mTlr2DtUXs6cN25u4a3MBZnHMu9nTli+/I/8lHm3Wx+d+SVzZbcHALCjqvg4f9j7c1ivgyra9mcOGy9sov/9f8181K1nx44b0T778HFz8Hvmum5d78eCFwBgR32XOa5bV9FSRck62pP5JHPTeGFQHcJZdb8W3Xp2auaqbl3f+57Mkd3e6KTMN7HcfXwkc1e3BgDYcdWNeqnLh5k3l+5YT19lnhg3BzUKrfvOHS9Mzs5cE61Yez5WF2ulCrPPYuP/6u3MH9EKOQCAXVHPX1WHrVdFyX3DXo39FsPeoXJR5o3MZbF6PFrXHs5cPF4YfJB5IbYu1kqNPsdx6Lp2IwGA/4g6cPBkt65O0eeZU7q92WLc+BdV8XVttMLq76rDBidHG/cebGQ5d9bOidZpW+XyaAcOjuj2qhP5Q7cGANhRVcgsYvnAQXXW+gf2r4+NE5aLzBWZ96I9S1avt0QrYG7LXJg5MfNgtCLo3szx0Z45K3V//cyrp3Wdqrx9en/z9LqZ12LzAwKrfJ35dsqPsVyUzqpYe7ZbnxFtxHkwr8SB3bQah9Yp1lkVfVUk1nff7u8MALDktMxv0YqznzNHZR6f1pUvpvv6YmQRrfD5OHPH9FrFWanR4Pwc1+nRiqx6GH8uCss70/r7zIvRCqb62XXvViczt2v+HnM267DtjQPHoFVsVUavx8Zn1Qi17qnvMe/dON336fTaH+IAANhV98fGCHARraNWhVqpjlqNVKsDNxc+1TU7M1phVwVgX7Dtn9ZV0JUq6C6Z3q8adVbXrj5zs6xbYTQXbFWM9qNTAIBdU8VYFV814qs/j1Fjvn2ZuzOPRhunzl2mG6b7n5ky/2mNB6J1uOr5r/qspzN3Zi6N1sGr96tGog/F8inWPvVv10mNWOu71kgYAGAtPBUbJzVfzRzTXQMAYA3Us2c1+qy/h+YhewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n/oLNap/2DZW2hoAAAAASUVORK5CYII=>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAWCAYAAAA7FknZAAAAwklEQVR4Xu3WMQ4BURCH8RFRiEQjIUohkah0eheQqFSu4AJuIC4gcQIHsDWNymGcwH/yKN5W27x9It8v+arpjNldMwAA8De6aq9ualyaoQY9dVB3tVTNeIzURups4QIWqhGPkdpUXT7NjAXUyn9s/9dfLVyBXwMyWKmXWhsXkB0v5R/z/Ux9WLgUFpJZR+3UU21VOx6jbi21sbAQX4wvCBn5I8ofVYWalGYAkIC/BwZqWKG+8SWVzFydKna0sBAASOQNAU8Zc1h0XcYAAAAASUVORK5CYII=>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAWCAYAAABEx1soAAAAwElEQVR4Xu3WMQ4BURCH8RFRiEQjIUohkah0eheQqFSu4AJuIC4gcQIHoKZROYwT+E8exdtqrbeKzfdLvmq6yeTtmgEAAGurrbqqYWaGH3TUTt3UXNXjMYoaqKOFi52pWjxGUWN1ejcxFpuEL9Gv9Gzhav16kdBCPdXSuNjS8DH7k8/v2N3CZbPokrTURj3UWjXjMVJpqJWFRfvCffEogT8V/mRc1CgzA1Bp/s72VD9HXePP4mtTdcjZ3sKiAVTeCwoMGXPXAqk8AAAAAElFTkSuQmCC>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAWCAYAAACBtcG5AAAAv0lEQVR4Xu3WTQpBYRSH8SMZSJkoMhSljMzMbUAZGdmCDdiBbEBZgQUwZmJkMVbgf3oZvLcrr9uNyfOrZ3Rmp3M/zAAAKFlTrdVZ9TMzvNFSG3VRU1WNx8jTU3sLlzZRlXiMPEN1eDYylvaRL8iv62jh2vzqkGim7mpuXFohfBhK8PoluVq4SJZYQEOt1E0tVT0eI0VNLSws0ZfpS8WX/PH1x/ikBpkZgJ/z91pHdRNqG1/gyFjtEttaWCKAv3gAxRIZc01Q5LQAAAAASUVORK5CYII=>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAWCAYAAAB9oOpzAAAAuklEQVR4Xu3VQQpBYRTF8SMZSJkoMhSljMzMbUAZGdmCDdiBbEBZgQV4YyZGFmMFznWR70t5Q3XPr/6jO3q3+94DRETkrzXZmp1YP5uF1GIbdmZTVk3H8fTYHn4hE1ZJx/EM2eHZCMEXYg9vV3GEX4ldi9CM3dgcwS/kG31kf3j9li/wS9KCMg22Yle2ZPV0LDW2gC/IFmULkw/2StmrVbBBNhORB/uOdFi3RG0E+lON2a5kW/iCROTtDoAnGXNLS9KHAAAAAElFTkSuQmCC>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAZCAYAAABtnU33AAACZElEQVR4Xu2Wz4uNURjHvzKKjCgTacgsbCwUiSILi2lSUiJRpCQ/splhmmS2mu0oZjGLqcliIvwBsuDKgpUiNsqCZIeNmUTMfL/znNOc93XOe+/iTnl1vvXp3vvc5z3P85wfz3mBrKys/0095ETZ6HSM7CWdZAlZR06R7aFTHbSVXCKPyW9yu/j3vDrIPTJb4j5ZHfjVQir4MGz1PiFesDRB3pCP5AE5SJYWPGqmDeQD0gXfIjvLxjprMQpeQzaTQ6SbLCf73e+1zke7RONql/XA+oO0jKwnu2HP6Lf+l5/8/e7SOBpPPhq/ZTUreIzcIC9hW/852VHw+FuXyTfYeR8hk7CmeJN8JUfJXXKeDJFpMjD/pBX3FPbsCzJOrpDT5D3siPXD8tKYj8grshEtqlnBSvYaFmZWHVpJawWqtIvMkIdkhbMpKU3aZ7LF2dQY1RsasJtA0mpPkT/kgLNJw7CJuO58pH3kF2y1W1Kzgleh2KR80ndgyaak7aeVuxDYfCwV4xOWFLuBhYK97S3pCmxXYZOoyfTycdpWcFneX9tLZy2lWCKpWKmCyzYVrDHDnhKLU6lUEtIZ2La6GNi8v9D3lGKJpGLFiovZFr1gBdCZCQv2W7qBYjJlxRJJxYoVF7O1teDyuZL2wLqhrgav4+QHrNNWyTetI4GtquDwvCoP5fMM1kO8qgoOe0VUvbCV0mulf2X8Tl6Tbc5HgQfJE3IWdq18gb2SlicnlK6xcFy9ig7Bxve2d+Sk+wzjn4P1h9Cmm0HXobf9JKMOfQ/jrEQbtAl28fehhu/QWVlZWVlZ/5DmANfppNKa7m+nAAAAAElFTkSuQmCC>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAAZCAYAAAAxO8yWAAAEjklEQVR4Xu2ZbeifUxjHr4UiE9ny0Gj/PLba2gsPKwkvEMlDLA8j7c1Mkj1oUyJKXvACoSUpT5GnkniBpGGxTLJlkXhBomi8wQsyvp9d99X/3Gfnvvf77d5sfzuf+vbf77ofzn2u8z3nXPc9s0qlUqlUKpVKiQnp6jzYsJ90kbSm0ULpoNYZFfKxWDosiwcnS/dLj0vXSQe3D09d5kg3Se9Kf0tPtw9v4wDpEeku6XhpifS79Lk0OzlvX+Rw6SrpKelX6Vvp6PSEhiukl8zzfYx0i7TB/if5o1OXSWdI31vZRBdI70izkhgz6R/pCWn/JL6vgYkulU6VXrCyiY6U3jQ3TzBNelS6O4lNeeg4CSiZ6DabNExAQjDdN+ZJmkoca766dsE2MyMPjgC5K5noFOlL6cQsTl7TnE55+kzELPtMuiGJxfmlpAXUBizXF5uvYgdK5zS/Y5CotUgyq+GE+QwFBhlznm5+Db85znmcz3XAfbgf53D/UWAVfcjKRjpKetW83XHpMtFx0o/S19LZTexQ6W3pkjipwJD8ET9CmitdaF6vkU+uPcsm+86EOb8RzzSIPhOVOFP6yzzhXYO3wrxOYBW7V3rSvHB/WPrFvE5gC8Ccq8zrrOXbrvSEvGd+7XrpMWmldL356scMXma+JXBPBmSjtbeMLkj0zeZ1XmqkIQaCLhPR3mrzviDy8Jp0a3OsiyH5w4DUYNS57Bj3SfeYX/+heXlyjfRsE+PZf5bmc/HOMo6JSDwdooM7Svhp0h/mNUG8zcVW+IN0QhOjrnpFWitNb2Ik+Dlpq3ldFtxunliSEoMQpmamjUJupKEGgi4TASsDRggjMWDnWb+JYEj+IHJFX4PLmxgmi0kUqyVb7E4zjomYATR4bn6gAEstM2RpEou2MEiaRNpea+0kENsszUxidJTEkuAg2hnVRBBGIpmv2zADQZeJoh1WS15gWIUYRFYJVtY+huaPXG0xf4EKyBHtY6Yg7vmfmIhEf2rtAeyjNLhdbZWSUIrRUe7JvYNSO6NAkU2994yVa6Rx6DIRKw6fQ2gLWJUWmT/vF9b/YlLq1zj5I1f5M4WJSvfc7SbCQOusvYRSpHZ9XIOhSSjFdpWJ2BbYJhaYfyTMa6Rx6TIR9Rt1TA5bNLVN2o+cUr/Gyd9eZaLZ5nsufwO2GL6+HpLEcoYmoRTbFSYKA8UWNs2GG6nLRMSph3J4hk+svdXklPo1Tv72iInyfRYoOt83nzXfJfrJvJ7o+9jItkf9Utp/S0nYbJP1D8/B83xgbaP2mSitHbpg8N4w/3SRMtRIPD8Fb/6GyGs8/ZpIYtHW87b78gcU1vkz9ZmotGLuEIpjGqHIizeH36RN0rzmHAYtjuUqzbDgQWvf92XzV1HuH7GvpGubv2n7S8xf5dMYW+dHSexP6YFG/Dttp+//pe607Q0UMLgLpSvzAx3wLQaTp32K1+obm3OogXjF3yLdYd5fnvEt8wnaxZD80YePkxj54doXbfKe/OV3fk+uo1+VvZAZ5rOfAT7Jtl/xK5VKpVKpVCqVSqVSqVT2BP8Cz2ZhNjUI+ewAAAAASUVORK5CYII=>