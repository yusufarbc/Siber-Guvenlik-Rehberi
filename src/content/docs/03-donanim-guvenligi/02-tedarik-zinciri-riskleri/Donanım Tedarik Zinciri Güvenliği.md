# **Donanım Tedarik Zinciri Güvencesi ve Sahte Bileşen Yönetimi: Kurumsal Savunma Derinliği Mimarisi**

## **Giriş: Donanım Katmanındaki Sinsi Tehditler ve Mimari Zorunluluklar**

Modern kurumsal siber güvenlik stratejileri, geleneksel olarak yazılım tabanlı zafiyetlerin kapatılmasına, ağ sınırlarının korunmasına ve uç nokta algılama sistemlerinin sıkılaştırılmasına odaklanmaktadır. Ancak, Fortune 500 ölçeğindeki bir yapının savunma hattı ne kadar kusursuz kurgulanırsa kurgulansın, altyapıyı oluşturan fiziksel donanımların kendisi güvenilmez olduğunda tüm bu güvenlik mekanizmaları anlamsız hale gelmektedir1. Donanım tedarik zinciri riskleri, entegre devrelerin (IC) tasarım aşamasından başlayarak dökümhanelerde üretilmesi, üçüncü parti lojistik kanallarıyla taşınması ve nihayetinde kurumsal veri merkezlerinde konumlandırılmasına kadar uzanan son derece geniş ve kontrolü güç bir saldırı yüzeyini temsil etmektedir3.  
Saldırganların donanım seviyesinde gerçekleştirdiği manipülasyonlar, işletim sistemi ve hipervizör katmanlarının tamamen altında (Ring \-2 ve Ring \-3 seviyelerinde) çalıştığı için standart güvenlik yazılımları tarafından tespit edilememektedir2. Bu durum, siber güvenlik çözüm mimarlarını "Asla Güvenme, Her Zaman Doğrula" (Zero Trust) felsefesini donanım seviyesine indirmeye ve silikon katmanından bulut servislerine kadar uzanan kesintisiz bir donanımsal güven zinciri inşa etmeye zorlamaktadır2.

## **1\. Donanımsal Truva Atları (Hardware Trojans) ve Çip Seviyesi Manipülasyon**

### **Ofansif Saldırı Mekanizmaları ve Aktivasyon Dinamikleri**

Donanımsal Truva Atı (Hardware Trojan \- HT), entegre devrelerin tasarımı veya üretimi (dökümhane) aşamasında silikon şablonuna kasıtlı olarak eklenen kötü niyetli fiziksel modifikasyonlardır1. Kırmızı takımların ve devlet destekli tehdit aktörlerinin (APT) bu yöntemi tercih etmesinin temel sebebi, donanımsal Truva atlarının bellenim (firmware) güncellemeleri veya işletim sistemi formatlamalarıyla ortadan kaldırılamayan kalıcı bir yapıya sahip olmasıdır2.  
Bir HT'nin anatomisi temel olarak iki ana bileşene ayrılmaktadır: tetikleyici (trigger) ve zararlı yük (payload)1. Tetikleyiciler, sistemin normal fonksiyonel test döngülerinde (bireysel çip düzeyinde yapılan otomatik test ekipmanı \- ATE testleri) Truva atının uyku (dormant) modunda kalmasını sağlamak üzere tasarlanmaktadır1. Bu sayede çip, kalite kontrol aşamalarını başarıyla geçmektedir1.

                                  \[ Tetikleyici Girişleri \]  
                                             |  
                                             v  
\+-------------------------+      \+-----------------------+  
|  Asıl Entegre Devre     |      |  Tetikleyici Devresi  |  
|  (Benign Circuitry)     |      |  (Nadir Olay Sayacı)  |  
\+-------------------------+      \+-----------------------+  
             |                               |  
             |                               v (Trigger Enable \= 1\)  
             |                      \+-----------------------+  
             \+---------------------\>|  Zararlı Yük Devresi  |  
                                    |  (XOR / Mantık Kapısı)|  
                                    \+-----------------------+  
                                             |  
                                             v  
                                   \[ Manipüle Çıktı / \]  
                                   \[ Bilgi Sızıntısı  \]

Şema 1: Donanımsal Truva Atı Mantıksal Aktivasyon Akışı1  
Tetikleme mekanizmaları dijital veya analog yöntemlerle çalışabilmektedir:

* **Dijital Tetikleyiciler:** Belirli bir Boolean lojik kombinasyonuna (kombinasyonel) veya ardışıl (sequential) olarak çalışan dahili durum makinelerine dayanmaktadır1. Örneğin, sistemin ![][image1] durum geçişi gerçekleştiren nadir bir döngü sayacına ulaşması durumunda tetiklenen yapılar, fonksiyonel testlerde asla aktive olmamaktadır1.  
* **Analog Tetikleyiciler:** Çevresel fiziksel parametreleri izlemektedir7. Ortam sıcaklığının belirli bir eşiği aşması, güç hattındaki kasıtlı voltaj dalgalanmaları veya çipin elektromanyetik yaşlanma seviyesi tetikleyici olarak kullanılabilmektedir4.

Tetikleme gerçekleştikten sonra devreye giren zararlı yük (payload), sisteme doğrudan zarar vermektedir1. Bu durum, kriptografik donanım hızlandırıcıların (örneğin AES motoru) ürettiği gizli anahtarları güç dalgalanmaları (power side-channel) veya elektromanyetik emisyonlar üzerinden dışarı sızdırmak (covert channel) olabileceği gibi, işlemcinin güvenli mod sınırlarını (SMRAM) ihlal ederek yetki yükseltme kapıları açmak veya sistemi tamamen devre dışı bırakan fiziksel bir imha anahtarını (kill-switch) çalıştırmak şeklinde de gerçekleşebilir7.

### **S3 Boot Script Manipülasyonu ile Donanımsal Kilitlerin Aşılması**

Saldırganlar tarafından kullanılan ileri düzey bir saldırı yöntemi, sistemin güç geçiş durumlarını (özellikle S3 uyku modu) hedef alarak donanımsal koruma kilitlerini devredışı bırakmaktır9. Sistem S3 uyku durumuna geçtiğinde, CPU gücü kesilmekte ancak RAM'deki veriler korunmaktadır. Sistem tekrar uyandırıldığında (resume), anakart bellenimi sistemi hızlıca ayağa kaldırmak için RAM'de saklanan "S3 Boot Script Table" üzerindeki opkodları (işlem kodlarını) sırayla yürütmektedir9.  
Eğer bu tablo kurumsal işletim sistemi katmanından erişilebilir durumdaysa ve bellek yazma korumaları (DMA korumaları veya korumalı aralıklar) yanlış yapılandırılmışsa, saldırgan bellek üzerindeki bu script tablosunu modifiye edebilmektedir9. Saldırgan tabloya, SPI Flash denetleyicisinin yazma kilidini (FLOCKDN biti) veya bellenim yazma korumasını (SMM\_BWP) devredışı bırakan özel MMIO (Memory-Mapped I/O) yazma opkodları enjekte eder11. Sistem uykudan uyandığında, bellenim bu modifiye edilmiş adımları doğrulamadan çalıştırır9. Sonuç olarak, donanımsal kilitler açılır ve saldırgan kalıcı bellenim rootkit'lerini (bootkit) doğrudan SPI Flash ROM belleğine yazma hakkı elde eder9.

### **Defansif Yaklaşımlar: Tahribatsız Yan Kanal Analizleri ve AI Tabanlı Tespit**

Mavi takımın donanımsal Truva atlarını tespit etmesi, çipler üzerinde fiziksel gözle muayene yapmanın imkansızlığı sebebiyle son derece zordur1. Tahribatlı (destructive) yöntemler çipin asitlerle soyulmasını ve Taramalı Elektron Mikroskobu (SEM) ile taranmasını gerektirmektedir ki bu süreç hem test edilen çipi kullanılmaz hale getirmekte hem de milyonlarca adetlik sevkiyatlarda ölçeklenememektedir15.  
Bu doğrultuda geliştirilen modern defansif yaklaşımlar, tahribatsız (non-destructive) fiziksel Yan Kanal Analizi (SCA) yöntemlerine odaklanmaktadır4. Bir entegre devrenin çalışırken tükettiği dinamik akım veya yaydığı elektromanyetik (EM) radyasyon, içindeki lojik kapıların aktivitesine göre milisaniyeler seviyesinde değişim göstermektedir4.  
Gelişmiş tespit çerçeveleri, çipin EM ve güç izlerini yüksek çözünürlüklü osiloskoplar vasıtasıyle toplayarak analiz etmektedir15. Kısa Zamanlı Fourier Dönüşümü (Short-Time Fourier Transform \- STFT) ile zaman-frekans düzlemine aktarılan bu sinyaller, Gauss Karışım Modelleri (GMM) ve Bayesian Bilgi Kriteri (BIC) kullanılarak modellenir10. HT içermeyen temiz bir çip, yürüttüğü farklı iş yüklerine (bellek erişimleri, kesme kontrolleri vb.) bağlı olarak yüksek frekans değişkenliği ve dalgalanan istatistiksel yapılar sunarken; her zaman aktif (always-on) veya sinsi tetikleme devrelerine sahip modifiye edilmiş çipler, EM emisyonlarında parazitik bir spektral iz bırakarak GMM varyansını baskılamakta ve bileşen tutarlılığını sabitlemektedir10.  
Ayrıca, Siyam Sinir Ağları (Siamese Neural Networks \- SNN), Uzun Kısa Süreli Bellek (LSTM) ve Gated Recurrent Unit (GRU) gibi derin öğrenme mimarileri, çiplerin güç tüketim izleri üzerinde eğitilmektedir8. Bu modeller, geleneksel "altın referans çip" ihtiyacını ortadan kaldırarak, şüpheli çiplere ait dinamik güç tüketim dalgalanmalarını temiz veritabanlarıyla karşılaştırmakta ve anomali tespiti yöntemiyle donanımsal Truva atlarının varlığını %97'nin üzerinde bir doğrulukla raporlayabilmektedir8.

## **2\. Tedarik Zincirine Müdahale (Supply Chain Interdiction) ve Sahte (Counterfeit) Bileşen Yönetimi**

### **Tedarik Zincirine Müdahale (Supply Chain Interdiction) Tehdidi ve Operasyonel Boyutları**

Tedarik zincirine müdahale (interdiction), bir donanım ürününün (kurumsal sunucu, omurga yönlendirici, donanımsal firewall vb.) üretici tesisinden çıktıktan sonra hedef kuruma ulaşana kadar geçen lojistik ve nakliye aşamalarında, devlet destekli tehdit aktörleri (APT) tarafından gizlice ele geçirilmesi ve modifiye edilmesi sürecidir3. Lojistik depolarında veya gümrük geçiş noktalarında paketleri açan saldırganlar, anakart üzerindeki veri hatlarına (örneğin PCIe veya SMBus yolları) casus mikroçipler entegre edebilmekte ya da doğrudan bellenim (firmware) chiplerini modifiye edilmiş bellenimlerle değiştirmektedir3.  
NSA'in "Sentry Eagle" programı kapsamında yürütülen "Off-Net Operations" faaliyetleri, lojistik süreçlerinde hedef kurumlara gidecek olan ağ cihazlarının (Cisco, Juniper vb.) gümrük ambarlarında durdurularak içlerine casus bellenimler ve uzaktan erişim imkanı veren donanımsal implantların yerleştirildiğini belgelemiştir18. Bu donanımsal arka kapılar kurulduktan sonra, kurumsal ağda çalışmaya başlayan cihaz, dış dünyaya şifreli gizli kanallar üzerinden sinyal göndermekte (beaconing) ve saldırganın kurumsal ağ sınırlarını zahmetsizce aşmasını sağlamaktadır18.

### **Sahte (Counterfeit) Bileşen Sınıflandırması**

Donanım tedarik zincirinde karşılaşılan bir diğer önemli tehdit ise sahte (counterfeit) elektronik bileşenlerin kurumsal ağlara sızmasıdır21. Sahte bileşenler, sistemlerin aniden bozulmasına yol açarak operasyonel sürekliliği baltalamanın ötesinde, içlerinde gizli açıklar barındırma riski taşımaktadır1. Elektronik bileşenlerin sahtecilik yöntemleri çeşitlilik göstermektedir16:

* **Geri Dönüştürülmüş (Recycled) Parçalar:** Elektronik atıklardan sökülen eski entegre devrelerin kimyasal temizlikle parlatılması, bacaklarının yeniden lehimlenmesi (reballing) ve sıfır ürün gibi kutulanması işlemidir16. Bu parçalar metal yorgunluğuna bağlı olarak operasyonel yük altında aniden arızalanmaktadır25.  
* **Yeniden Markalanmış (Remarked) Çipler:** Düşük performanslı veya hatalı (out-of-spec) çiplerin üzerindeki orijinal marka ve model bilgilerinin zımparalanarak asitle silinmesi; üzerlerine sahte lazer baskıyla yüksek segment model numaralarının yazılmasıdır16.  
* **Klonlanmış (Cloned) Devreler:** Orijinal üreticinin fikri mülkiyet haklarının yasa dışı olarak kopyalanmasıyla üretilen, kalite güvencesi olmayan taklit ürünlerdir16.  
* **Sahte Belgeli (Forged Documentation) Ürünler:** Standart ticari kullanım için üretilmiş çiplerin, askeri veya endüstriyel standartlara uygun olduğuna dair sahte uygunluk sertifikaları (CoC) ile piyasaya sürülmesidir16.

### **Sektörel Güvence Standartları**

Mavi takımın ve kurumsal satın alma departmanlarının sahte bileşen riskini yönetmek adına entegre etmesi gereken sektörel standartlar mevcuttur21:

| Standart Kodu | Temel Amacı ve Kapsamı | Uygulama Sahası |
| :---- | :---- | :---- |
| **SAE AS6081** | Distribütörler için sahte parça önleme, tespit, azaltma ve bertaraf kurallarını belirler21. | Satın alma süreçleri, tedarikçi denetimleri ve lot izlenebilirliği yönetimi21. |
| **SAE AS6171** | Şüpheli sahte parçaların tespiti için akredite laboratuvarlarca uygulanacak teknik test yöntemlerini tanımlar26. | Fiziksel, kimyasal, elektriksel ve malzeme analizi test aşamaları17. |
| **IDEA-STD-1010** | Açık pazardan tedarik edilen elektronik bileşenlerin görsel kabul kriterlerini standardize eder23. | Mikroskop altında dış yüzey muayenesi ve paketleme kontrolleri16. |
| **CCAP-101** | Distribütörlerin kalite yönetim sistemlerinin sahte parça tespit kapasitesini doğrulayan denetim çerçevesidir27. | Yıllık gözetim denetimleri ve sertifikasyon süreçleri27. |

Tablo 1: Sahte Bileşen Önleme ve Tespit Standartları Karşılaştırması21.

### **Fiziksel ve İstatistiki Doğrulama Metodolojisi**

Gelişmiş donanım doğrulama süreçlerinde mavi takım, SAE AS6171 laboratuvar standartları doğrultusunda şu teknik analiz adımlarını işletmelidir17:

1. **Agresif Aseton ve Kimyasal Solvent Resurfacing Testleri (AS6171/2):** Çipin dış kaplamasının (blacktopping) sahte olup olmadığını anlamak için aseton ve Dynasolve (özellikle Dynasolve 750 veya NMP-free alternatifleri) gibi sert solventler mikroskop altında yüzeye agresif bir şekilde sürtülür21. Orijinal olmayan kaplamalar çözünerek alt katmandaki zımpara izlerini ve orijinal marka yazılarını ortaya çıkarır16.  
2. **Radyolojik Muayene (2D/3D Real-Time X-Ray \- AS6171/5):** Entegre devrenin iç yapısı tahribatsız olarak taranır16. X-Ray analizinde, tüm parça grubunun (lot) içindeki die boyutu, altın bağlantı tellerinin (wire bonds) geometrisi ve kurşun çerçeve (lead frame) yapısı karşılaştırılarak partinin homojenliği (lot conformity) doğrulanır16. BGA paketlerindeki yetersiz veya hatalı yeniden lehimleme (reballing) işlemleri bu aşamada tespit edilir16.  
3. **X-Ray Floresan Spektroskopisi (XRF \- AS6171/3):** Bileşen bacaklarının kaplama malzemesini analiz eder17. RoHS kurşunsuz standartlarına uygunluk ve bacaklardaki kurşun/tin alaşım oranları doğrulanarak eski parçaların yeniymiş gibi satılmasının önüne geçilir17.

SAE AS6171 standardı, test edilen örnek sayısının güvenilirliğini matematiksel Lot Tolerans Yüzdesi Defektif (Lot Tolerance Percent Defective \- LTPD) modeli üzerinden hesaplar29. Bu istatistiki yaklaşım, Tüketici Riskini (Beta riski) ![][image2] (%10) seviyesinde sabit tutarak, kabul edilebilir maksimum hata oranına (![][image3]) göre gerekli minimum test örneklem sayısını (![][image4]) binom dağılımı formülüyle belirler29:  
![][image5]  
Eğer satın alınan bir kurumsal ağ kartı partisindeki sahte bileşen oranının en fazla ![][image6] (%5) olması hedefleniyorsa, rastgele seçilerek laboratuvarda tahribatsız teste tabi tutulması gereken asgari parça sayısı (![][image4]) şu şekilde hesaplanır29:  
![][image7]  
Kritiklik seviyesi yüksek askeri veya finansal Fortune 500 altyapıları, bu doğrultuda daha geniş örneklem boyutlarını (örneğin daha düşük hata toleransı sunan Series 2 veya Series 3 planlarını) kullanmakla yükümlüdür29.

## **3\. Donanımsal Güven Kökü (Hardware Root of Trust) ve Güvenli Satın Alma Yönetimi**

### **Güvenli Satın Alma Prosedürleri ve Tedarikçi Kontrolleri**

Tedarik zinciri risklerini en aza indirmek için idari ve teknik satın alma prosedürleri bir araya getirilmelidir25. Kurumsal satın alma politikalarında, kritik ağ ve sistem bileşenleri yalnızca Yetkili Üretici Distribütörleri (Authorized Distributors) üzerinden tedarik edilmeli; ikinci el pazarlar veya belirsiz üçüncü parti distribütörler tedarik listesinden tamamen çıkarılmalıdır22.  
Cihazlar kurumsal depoya ulaştığında, fiziksel bütünlük kontrolleri kapsamında Kurcalamaya Karşı Hassas Güvenlik Mühürleri (Tamper-Evident Seals) kontrol edilmelidir21. Bu mühürler, kurcalandığında geride kalıcı "VOID" ibaresi bırakan, üzerinde üreticiye özel benzersiz holografik karekodlar ve seri numaraları barındıran fiziksel güvenlik etiketleridir21.  
Ek olarak, kritik kriptografik donanımların teslimatında "Ağırlık Kontrolü Protokolü" uygulanmalıdır17. Orijinal üretim spesifikasyon belgesinde belirtilen referans ağırlık ile teslim alınan cihazın ağırlığı arasında miligram seviyesindeki sapmalar (![][image8]), lojistik aşamasında cihazın içine yabancı bir casus modülün (örneğin donanımsal lojik analizör veya arka kapı yongası) yerleştirildiğinin kritik bir göstergesidir17.

### **Donanımsal Güven Kökü (HRoT): Intel Boot Guard ve AMD Platform Secure Boot**

Yazılım katmanının bellenimi doğrulayabilmesi için doğrulamayı başlatan ilk kodun değiştirilemez bir donanım alanında saklanması gerekir2. Bu alana Donanımsal Güven Kökü (Hardware Root of Trust \- HRoT) adı verilir2.

\+-----------------------------------------------------------------+  
|               Hardware Root of Trust (HRoT / OTP Fuses)         |  
|               \[ AMD PSP Security Block / Intel FPF Key \]        |  
\+-----------------------------------------------------------------+  
                                    |  
                                    v (Kriptografik Doğrulama)  
\+-----------------------------------------------------------------+  
|       Security Processor / Boot Guard Boot ROM (SEC Phase)      |  
\+-----------------------------------------------------------------+  
                                    |  
                                    v (Measures & Verifies PEI Code)  
\+-----------------------------------------------------------------+  
|                Pre-EFI Initialization (PEI Phase)               |  
\+-----------------------------------------------------------------+  
                                    |  
                                    v (Measures & Verifies DXE)  
\+-----------------------------------------------------------------+  
|             Driver Execution Environment (DXE Phase)            |  
\+-----------------------------------------------------------------+  
                                    |  
                                    v (TPM PCR 0/4/10'a Ölçümleri Yazar)  
\+-----------------------------------------------------------------+  
|            Trusted Platform Module (TPM PCR Ölçümleri)          |  
\+-----------------------------------------------------------------+  
                                    |  
                                    v (Sistem Önyükleyiciyi Başlatır)  
\+-----------------------------------------------------------------+  
|                 UEFI Secure Boot / OS Bootloader                |  
\+-----------------------------------------------------------------+  
                                    |  
                                    v (IMA Kernel Doğrulamasını Tetikler)  
\+-----------------------------------------------------------------+  
|               Operating System & IMA Active Checks              |  
\+-----------------------------------------------------------------+

Şema 2: Donanımsal Güven Kökünden İşletim Sistemine Uzanan Güven Zinciri2  
Modern x86 platformlarında bu zincir şu mimarilerle kurulur2:

* **Intel Boot Guard:** İşlemcinin içinde yer alan ve yalnızca bir kez programlanabilen (One-Time Programmable \- OTP) Field Programmable Fuse (FPF) sigortalarına, anakart üreticisinin (OEM) bellenim imzalama anahtarının SHA-256 hash bilgisi kalıcı olarak yazılır (fuse)2. Sistem ilk açıldığında CPU, bu donanımsal sigortadaki hash'i kullanarak anakarttaki SPI Flash ROM'da yer alan ilk bellenim bloğunu (Initial Boot Block \- IBB) doğrular2. İmza uyuşmazsa, CPU önyükleme sürecini derhal durdurur2.  
* **AMD Platform Secure Boot (PSB):** İşlemci kalıbı (die) içerisine entegre edilmiş, ana x86 çekirdeklerinden tamamen izole çalışan ARM tabanlı bir yardımcı işlemci olan AMD Secure Processor (PSP) mimarisine dayanır14. PSP, sistem sıfırlandığı anda anakarttaki bellenim imzalama anahtarını kendi içerisindeki SHA-256 hash sigortalarıyla doğrular ve bellenimin SEC ve PEI fazlarının güvenliğini garanti altına alır14.

#### **Üretici Kilitleme (Vendor Locking) ve Risk Analizi**

AMD PSB'nin uygulanmasında en kritik operasyonel detay "Üretici Kilitleme" (Vendor Locking) mekanizmasıdır31. Fabrikadan kilitsiz olarak çıkan AMD EPYC işlemciler, PSB özelliği etkinleştirilmiş bir anakarta (örneğin Dell veya Lenovo sunucuları) takılıp ilk kez çalıştırıldığında, anakart belleniminde yer alan üreticiye özel kriptografik anahtar bilgisini kendi işlemci içi OTP sigortalarına otomatik olarak yazar (fusing)14.  
Bu işlem kalıcıdır; fuse edilen bir işlemci bir daha başka bir üreticinin (örneğin HPE) anakartında çalıştırılamaz31. Bu durum donanımsal hırsızlığı ve sahte işlemci tedarikini engellese de, veri merkezi operasyonlarında yedek parça esnekliğini azaltmakta ve yanlışlıkla fuse edilmiş işlemcilerin kullanılamaz hale gelmesine (ekonomik kayıp) yol açabilmektedir31.

### **CHIPSEC ile Donanımsal Güvence Denetimleri**

Mavi takım, satın alınan yeni sunucu donanımlarını üretim ortamına almadan önce donanımsal kilitlerin ve bellenim yapılandırmalarının doğruluğunu test etmekle yükümlüdür32. Bu doğrulama süreçleri için Intel tarafından geliştirilen açık kaynaklı bellenim ve donanım güvenlik analiz çerçevesi **CHIPSEC** kullanılmalıdır32.  
Yeniden kurulumu yapılmış bir kurumsal sunucuda, BIOS yazma korumalarını, SPI denetleyici kilitlerini ve SMM (System Management Mode) yapılandırmalarını doğrulamak için şu CHIPSEC komutu çalıştırılmalıdır32:

Bash  
sudo python3 chipsec\_main.py \-m common.bios\_wp \-m common.spi\_lock \-m common.smm

Doğrulama işlemi tamamlandıktan sonra, sistemin güvenli olduğunu gösteren başarılı bir analiz çıktısı şu şekilde elde edilmelidir11:  
\[x\]\[ \======================================================================= \[x\]\[ Module: BIOS Region Write Protection (common.bios\_wp) \[x\]\[ \======================================================================= \[\*\] BC \= 0x0000002A \<\< BIOS Control Register (BDF 0:31:0 \+ 0xDC) \[00\] BIOSWE \= 0 \<\< BIOS Write Enable: Disabled \[01\] BLE \= 1 \<\< BIOS Lock Enable: Enabled (SMI raised on write) \[05\] SMM\_BWP \= 1 \<\< SMM BIOS Write Protection: Enabled (Restricted to SMM) \[+\] PASSED: BIOS region write protection is enabled and properly locked down.  
\[x\]\[ \======================================================================= \[x\]\[ Module: SPI Flash Controller Configuration Locks (common.spi\_lock) \[x\]\[ \======================================================================= \[\*\] HSFS \= 0x0000E009 \<\< Hardware Sequencing Flash Status Register (SPIBAR \+ 0x4) \[15\] FLOCKDN \= 1 \<\< Flash Configuration Lock-Down: Locked \[+\] PASSED: SPI Flash Controller configuration is locked (PR0-PR4 are read-only).  
\[x\]\[ \======================================================================= \[x\]\[ Module: SMM Memory (SMRAM) Lock (common.smm) \[x\]\[ \======================================================================= \[\*\] SMRAM Register \= 0x1A \[03\] D\_LCK \= 1 \<\< SMRAM Lock Bit: Locked \[04\] D\_OPEN \= 0 \<\< SMRAM Aperture: Closed (Access restricted to SMM) \[+\] PASSED: SMRAM protection against cache-poisoning attacks is correctly configured.  
Bellenim görüntüsünü (firmware image) tamamen fiziksel çip seviyesinden okuyup analiz etmek ve UEFI değişkenlerinin (Secure Boot anahtarları, DB, DBX vb.) doğruluğunu offline olarak denetlemek için şu komutlar işletilmelidir12:

Bash  
\# SPI Flash bellek içeriğini tamamen yedekleme (Dump)  
sudo chipsec\_util spi dump verified\_bios\_backup.bin

\# UEFI NVRAM değişken listesini çıkarma  
sudo chipsec\_util uefi var-list

Bu dump dosyası daha sonra uefi-firmware-parser veya binwalk araçlarıyla parse edilerek bellenimin içine gizlice enjekte edilmiş yabancı UEFI sürücülerinin (DXE) varlığına karşı incelenmelidir36.

## **4\. Operasyonel Güvence, SOC Analitiği ve SIEM Entegrasyonu**

### **Ölçümlü Önyükleme (Measured Boot) ve Linux IMA Mimarisi**

Donanımın ilk açılışından işletim sisteminin yüklenmesine kadar geçen süreçte güvenliğin izlenmesi, Ölçümlü Önyükleme (Measured Boot) mimarisine dayanmaktadır37. Bu mimaride, bellenim ve işletim sistemi bileşenlerinin hash değerleri sırasıyla hesaplanarak TPM (Trusted Platform Module) çipi üzerindeki Platform Yapılandırma Kaydedicilerine (PCR \- Platform Configuration Registers) gönderilir37.

* **PCR 0:** Anakart BIOS/UEFI bellenim kodunu ve konfigürasyonunu ölçer37.  
* **PCR 4:** Sistem önyükleyicisini (GRUB, Shim vb.) ölçer30.  
* **PCR 10 (Linux IMA):** Linux çekirdeğinin (Kernel) "Integrity Measurement Architecture (IMA)" modülü tarafından kullanılan ölçüm alanıdır38. IMA, sistemde çalıştırılan her ikili dosyayı (binary), yüklenen kernel modülünü ve okunan kritik sistem konfigürasyonlarını çalıştırılmadan önce hash'leyerek doğrular ve bu ölçümleri PCR 10'a kaydeder37.

### **Wazuh SIEM Entegrasyonu ve Aktif Log Toplama Yapılandırması**

Kurumsal SOC mimarisinde, uç noktalardan (sunucular) gelen donanımsal bütünlük loglarının merkezi SIEM platformuna aktarılması gerekmektedir37. Bu amaçla açık kaynaklı XDR/SIEM platformu olan **Wazuh** kullanılmalıdır39.  
Wazuh ajanlarının yüklü olduğu Linux sunucularda, TPM PCR değişimlerini ve Linux IMA bütünlük ihlali loglarını toplamak amacıyla /var/ossec/etc/ossec.conf dosyasına şu aktif log izleme blokları eklenmelidir39:

XML  
\<\!-- Linux IMA Günlük Loglarının Takibi \--\>  
\<localfile\>  
  \<log\_format\>syslog\</log\_format\>  
  \<location\>/var/log/ima\_measurements.log\</location\>  
\</localfile\>

\<\!-- Sistem Açılışındaki TPM PCR Değerlerinin FIM ile Doğrulanması \--\>  
\<localfile\>  
  \<log\_format\>full\_command\</log\_format\>  
  \<alias\>tpm\_pcr\_check\</alias\>  
  \<command\>tpm2\_pcrread sha256:0,4,10\</command\>  
  \<frequency\>3600\</frequency\> \<\!-- Her saat başı donanımsal taban çizgisi doğrulaması \--\>  
\</localfile\>

### **Wazuh Özel Kuralları (XML) ve MITRE ATT\&CK Eşleştirmesi**

Toplanan bu ham logların anlamlandırılması ve donanımsal anomali durumlarında SOC analistlerine anlık uyarı üretilmesi için Wazuh yöneticisinde /var/ossec/etc/rules/local\_rules.xml dosyasına şu özel kurallar (custom rules) tanımlanmalıdır41:

XML  
\<group name\="hardware\_integrity,tpm,ima\_rules"\>

  \<\!-- Donanım Güvenliği Ana Kuralı \--\>  
  \<rule id\="200100" level\="3"\>  
    \<decoded\_as\>syslog\</decoded\_as\>  
    \<match\>tpm2\_pcrread|ima\_measurements\</match\>  
    \<description\>Donanım Güven Kökü (TPM) ve Bütünlük Ölçüm (IMA) verileri algılandı.\</description\>  
  \</rule\>

  \<\!-- KRİTİK SEVİYE: TPM PCR Değişimi (Bellenim Müdahalesi) \--\>  
  \<rule id\="200101" level\="13"\>  
    \<parent\>200100\</parent\>  
    \<match\>PCR validation failed|pcr-mismatch|TPM PCR 0 change\</match\>  
    \<description\>Kritik Alarm: Donanımsal Taban Çizgisi Bozuldu\! TPM PCR 0 (BIOS) değeri uyuşmuyor. Yetkisiz bellenim (firmware) güncellemesi veya SPI Flash müdahalesi şüphesi\!\</description\>  
    \<mitre\>  
      \<id\>T1542.001\</id\> \<\!-- System Firmware Backdoor \--\>  
      \<id\>T1495\</id\>     \<\!-- Firmware Damage \--\>  
    \</mitre\>  
  \</rule\>

  \<\!-- YÜKSEK SEVİYE: IMA İmza Doğrulama Hatası (Çekirdek Düzeyinde Müdahale) \--\>  
  \<rule id\="200102" level\="10"\>  
    \<parent\>200100\</parent\>  
    \<match\>IMA: signature verification failed|IMA: hash validation failed\</match\>  
    \<description\>Yüksek Alarm: Çalıştırılabilir Dosya Bütünlük İhlali\! Linux IMA imza doğrulaması başarısız oldu. Kernel seviyesinde yetkisiz dosya yürütme girişimi.\</description\>  
    \<mitre\>  
      \<id\>T1542.002\</id\> \<\!-- Bootkit \--\>  
      \<id\>T1059\</id\>     \<\!-- Command and Scripting Interpreter \--\>  
    \</mitre\>  
  \</rule\>

\</group\>

### **SOC Analisti Olay Müdahale (Incident Response) Playbook'u**

Wazuh SIEM panelinde 200101 (TPM PCR 0 Sapması) veya 200102 (IMA İmza Hatası) alarmlarından biri tetiklendiğinde, SOC Analistlerinin anlık olarak işletmesi gereken olay müdahale adımları şunlardır40:

\[ WAZUH SIEM ALARMI \] (Rule ID: 200101 \- PCR Mismatch)  
         |  
         v  
\[ ADIM 1: OTOMATİK İZOLASYON \]  
  \* Sunucuyu Ağdan İzole Et (Quarantine VLAN)  
  \* iLO/iDRAC Portlarını Koru / Yönetim Ağını Kapat  
         |  
         v  
\[ ADIM 2: ADLİ ANALİZ VE KANIT TOPLAMA \]  
  \* TPM Günlüklerini İncele (tpm2\_eventlog)  
  \* SPI Flash Belleği CHIPSEC ile Dump Et  
  \* S3 Boot Script Değişikliklerini Kontrol Et  
         |  
         v  
\[ ADIM 3: TEHLİKE BELİRLEME \]  
  \* Bellenim Hash Değerlerini OEM Kataloğu ile Karşılaştır  
  \* Donanım Bileşenlerini Miligram Düzeyinde Tart  
         |  
         v  
\[ ADIM 4: FİZİKSEL DOĞRULAMA (Şüpheli Çip Varlığı) \]  
       /   \\  
      /     \\  (Doğrulandı)  
     /       \\-------------\> \[ ADIM 5B: SİSTEMİ İMHA ET \]  
    /                         \* Fiziksel Casus Çipi Raporla  
   / (Bellenim Bozulması)     \* Donanımı Tamamen Hizmet Dışı Bırak  
  /-------------------------\> \[ ADIM 5A: GÜVENLİ KURULUM \]  
                              \* Donanımsal SPI Flaşör ile Temiz BIOS Yaz  
                              \* OTP Fuses / Boot Guard Kilitlerini Kontrol Et

Şema 3: SOC Olay Müdahale İş Akış Şeması11

1. **Ağ Seviyesinde İzolasyon:** Etkilenen fiziksel sunucu, veri merkezi omurga anahtarı üzerinden anında ağdan yalıtılmalıdır (Quarantine VLAN). Sunucunun iLO/iDRAC gibi bant dışı (out-of-band) yönetim arayüzlerinin ağ erişimleri, bellenim seviyesindeki saldırganın bu kanalları kullanarak yanal hareket etmesini engellemek için durdurulmalıdır.  
2. **Adli Bilişim Kanıtlarının Toplanması:** Sunucunun mevcut TPM olay günlüğü (tpm2\_eventlog) çekilmeli, CHIPSEC çerçevesi çalıştırılarak bellenim alanı tamamen dump edilmeli (verified\_bios\_backup.bin) ve S3 boot script tablosunun bütünlüğü kontrol edilmelidir11.  
3. **Tehlike Analizi (Threat Hunting):** Elde edilen BIOS dump dosyası, üreticinin (OEM) sağladığı kriptografik olarak imzalanmış resmi bellenim dosyaları ile bayt düzeyinde karşılaştırılmalıdır2.  
4. **Fiziksel Doğrulama ve İade:** Eğer donanım üzerinde fiziksel bir manipülasyon (interdiction) şüphesi doğrulanırsa (örneğin eklenmiş bir entegre devre veya ağırlık farkı), cihaz prodüksiyondan tamamen çıkarılmalı ve adli raporlama yapılarak üreticiye geri gönderilmelidir17. Eğer sorun bellenim seviyesinde bir bozulma ise, temiz bellenim donanımsal bir flash programlayıcı vasıtasıyla çipe doğrudan yazılmalıdır2.

## **5\. Regülatif Uyum ve Standartlar Matrisi**

### **Yerel Mevzuata Uyum Süreçleri ve Loglama Yükümlülükleri**

Türkiye siber güvenlik ekosisteminde faaliyet gösteren kurumsal organizasyonlar, donanımsal ve tedarik zinciri güvenlik süreçlerini yerel yasal mevzuatlarla ilişkilendirmek zorundadır:

* **T.C. Cumhurbaşkanlığı Bilgi ve İletişim Güvenliği Rehberi (Kısım 3.2 ve 4.1):** Rehber kapsamında kamu kurumları ve kritik altyapı işletmecileri, "Ağ ve Sistem Güvenliği" ve "Tedarikçi İlişkileri Güvenliği" tedbirlerini uygulamakla yükümlüdür44. Satın alınan donanımların yerli ve milli sertifikasyon kontrollerinden geçmesi, teslimatta paket bütünlüğünün doğrulanması ve sistemlerin donanımsal güven kökü (TPM/Boot Guard) doğrulaması yapılmadan kritik ağlara dahil edilmemesi rehberin 3\. Seviye tedbirleri kapsamında zorunludur44. Kuruluşlar, bu rehbere uyum durumlarını yıllık bağımsız denetim raporlarıyla belgelemek zorundadır48.  
* **Kişisel Verilerin Korunması Kanunu (KVKK) Madde 12:** Veri sorumlularına, kişisel verilerin hukuka aykırı olarak erişilmesini önlemek üzere gerekli her türlü teknik ve idari tedbiri alma zorunluluğu getirmektedir50. Tedarik zinciri aşamasında donanımsal Truva atı yerleştirilmiş bir sunucu üzerinden gerçekleşebilecek veri sızıntıları, veri sorumlusunun teknik tedbirleri alma yükümlülüğünü ihlal ettiğini gösterir ve KVKK kurulu tarafından yüksek miktarda idari para cezalarının uygulanmasına yol açar.  
* **BDDK Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik:** Bankacılık sektöründe kullanılacak tüm donanım ve bellenim edinim süreçlerinin risk analizine tabi tutulmasını, tedarikçi ilişkilerinin ve alt yüklenicilerin siber güvenlik süreçlerinin periyodik olarak denetlenmesini (sızma testleri ve denetim anketleri vasıtasıyla) zorunlu kılmaktadır51.

### **Uluslararası Standartlar ile Eşleştirme Matrisi**

Tedarik zinciri ve donanım güvencesi kapsamında uygulanan kontrollerin, uluslararası standartlardaki karşılıkları şu şekilde eşleştirilmelidir:

| Uygulanan Kurumsal Kontrol | NIST SP 800-53 Rev. 5 Eşleşmesi | ISO/IEC 27001:2022 Kontrolü | CIS Controls v8 Karşılığı |
| :---- | :---- | :---- | :---- |
| **Tedarikçi Doğrulaması ve OEM Yetkilendirmesi** | SR-3 (Tedarik Zinciri Kontrolleri ve Süreçleri) SR-5 (Tedarik Zinciri Edinimi) | A.5.19 (Bilgi güvenliği için tedarikçi ilişkileri) A.5.20 (Tedarikçi anlaşmalarında güvenliğin ele alınması) | Control 15.1 (Hizmet Sağlayıcı Envanterinin Çıkarılması) Control 15.2 (Hizmet Sağlayıcı Değerlendirmesi) |
| **Fiziksel Kurcalama Kontrolleri (Mühür ve Ağırlık)** | PE-3 (Fiziksel Erişim Kontrolleri) SR-9 (Kurcalamaya Karşı Koruma) | A.7.4 (Fiziksel güvenlik izleme) A.8.14 (Fiziksel güvenlik ve tesislerin korunması) | Control 15.3 (Tedarikçi Hizmet Seviyelerinin İzlenmesi) |
| **Donanımsal Güven Kökü ve Boot Guard** | SI-7 (Yazılım ve Bilgi Bütünlüğü) SC-37 (Güvenli Önyükleme) | A.8.19 (Sistemlerin kurulumu ve yönetimi) A.8.20 (Ağ güvenliği kontrolleri) | Control 4.1 (Güvenli Yapılandırma Yönetimi) Control 4.4 (Bellenim Güncelleme Yönetimi) |
| **Sürekli Bütünlük İzleme (Wazuh, TPM, IMA)** | AU-2 (Olay İzleme ve Kayıt Oluşturma) SI-7(1) (Bütünlük Doğrulama Araçları) | A.8.8 (Teknik açıklıkların yönetimi) A.8.16 (Olay günlüklerinin izlenmesi) | Control 8.5 (Bütünlük Doğrulama Araçlarının Kullanılması) Control 8.7 (Merkezi Log Toplama ve Analiz) |

*Tablo 2: Kurumsal Donanım Güvencesi Standartlar Eşleştirme Matrisi*

## **6\. Sonuç ve Stratejik Öneriler**

Fortune 500 ölçeğindeki organizasyonların siber güvenlik çözüm mimarları ve SOC liderleri, donanımsal ve bellenimsel riskleri azaltmak amacıyla şu stratejik adımları ivedilikle hayata geçirmelidir:

1. **Donanımsal Zero Trust Politikası:** Donanım ürünlerinin yalnızca yetkili kanallardan temin edilmesi kuralı tavizsiz bir şekilde uygulanmalı; kurumsal depolara giren her yeni cihaz fiziksel kurcalama ve hassas ağırlık testlerine tabi tutulmalıdır17.  
2. **Bellenim Seviyesinde Sıkılaştırma:** Altyapıda kullanılan tüm sunucu ve iş istasyonlarında Intel Boot Guard, AMD PSB gibi donanımsal güven kökü mekanizmaları etkinleştirilmeli; bellenim güncellemeleri yalnızca üretici tarafından kriptografik olarak imzalanmış imajlarla gerçekleştirilmelidir2.  
3. **Ölçümlü Önyükleme ve Sürekli Telemetri:** Tüm linux tabanlı sunucu altyapısında TPM ve IMA modülleri aktif edilerek, önyükleme süreci ile çekirdek katmanındaki değişimler izlenmeli; anomali gösteren PCR değerleri kurumsal SIEM mimarisine aktarılarak anlık alarm üretilmesi sağlanmalıdır37.  
4. **CHIPSEC Entegrasyonu:** Sunucu kabul test süreçlerine CHIPSEC gibi bellenim analiz araçları standart kontrol adımı olarak dahil edilmeli; bellenim kilit mekanizmaları tam olarak kapatılmamış donanımların prodüksiyon ağlarına alınması engellenmelidir32.

#### **Alıntılanan çalışmalar**

1. Understanding Hardware Trojans | PDF | Computing | Technology & Engineering \- Scribd, [https://www.scribd.com/document/771505829/1-hardware-trojan](https://www.scribd.com/document/771505829/1-hardware-trojan)  
2. Bootloader Trust: The Critical Role of Firmware Signing | Encryption Consulting, [https://www.encryptionconsulting.com/importance-of-firmware-signing/](https://www.encryptionconsulting.com/importance-of-firmware-signing/)  
3. TOUGHBOOK Guard locks hardware before boot \- \- Enterprise Times, [https://www.enterprisetimes.co.uk/2026/04/30/toughbook-guard-locks-hardware-before-boot/](https://www.enterprisetimes.co.uk/2026/04/30/toughbook-guard-locks-hardware-before-boot/)  
4. An AI-Enabled Side Channel Power Analysis Based Hardware Trojan Detection Method for Securing the Integrated Circuits in Cyber-P \- arXiv, [https://arxiv.org/pdf/2411.12721](https://arxiv.org/pdf/2411.12721)  
5. Explainability Methods for Hardware Trojan Detection: A Systematic Comparison \- arXiv, [https://arxiv.org/html/2601.18696v4](https://arxiv.org/html/2601.18696v4)  
6. No Rescue Mode \- \#17 by Patrick \- Development \- Kicksecure Forums, [https://forums.kicksecure.com/t/no-rescue-mode/1171/17](https://forums.kicksecure.com/t/no-rescue-mode/1171/17)  
7. Trojan taxonomy based on trigger and payload mechanisms. \- ResearchGate, [https://www.researchgate.net/figure/Trojan-taxonomy-based-on-trigger-and-payload-mechanisms\_fig4\_264124590](https://www.researchgate.net/figure/Trojan-taxonomy-based-on-trigger-and-payload-mechanisms_fig4_264124590)  
8. A Siamese deep learning framework for efficient hardware Trojan detection using power side-channel data \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC11156655/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11156655/)  
9. CHIPSEC Modules, [https://chipsec.github.io/development/Vulnerabilities-and-CHIPSEC-Modules.html](https://chipsec.github.io/development/Vulnerabilities-and-CHIPSEC-Modules.html)  
10. Reference-Free Spectral Analysis of EM Side-Channels for Always-on Hardware Trojan Detection \- arXiv, [https://arxiv.org/html/2601.20163v1](https://arxiv.org/html/2601.20163v1)  
11. Ivy Bridge Lenovo ThinkPad Internal Flashing \- the coreboot documentation, [https://doc.coreboot.org/mainboard/lenovo/ivb\_internal\_flashing.html](https://doc.coreboot.org/mainboard/lenovo/ivb_internal_flashing.html)  
12. CHIPSEC: Platform Security Assessment Framework \- Black Hat, [https://blackhat.com/docs/us-14/materials/arsenal/us-14-Bulygin-CHIPSEC-Slides.pdf](https://blackhat.com/docs/us-14/materials/arsenal/us-14-Bulygin-CHIPSEC-Slides.pdf)  
13. December 2019 \- coreboot-gerrit \- mail.coreboot.org \- List Index, [https://mail.coreboot.org/archives/list/coreboot-gerrit@coreboot.org/2019/12/?page=64](https://mail.coreboot.org/archives/list/coreboot-gerrit@coreboot.org/2019/12/?page=64)  
14. Exploring AMD Platform Secure Boot \- IOActive, [https://www.ioactive.com/exploring-amd-platform-secure-boot/](https://www.ioactive.com/exploring-amd-platform-secure-boot/)  
15. Hardware Trojan Detection Based on Side-Channel Analysis Using Power Traces and Machine Learning \- Annals of Computer Science and Information Systems, [https://annals-csis.org/Volume\_27/drp/pdf/26.pdf](https://annals-csis.org/Volume_27/drp/pdf/26.pdf)  
16. How to Detect Counterfeit Components? \- Circuitnet, [https://www.circuitnet.com/experts/88362.html](https://www.circuitnet.com/experts/88362.html)  
17. Counterfeit Mitigation \- Defense Logistics Agency, [https://www.dla.mil/Portals/104/Documents/LandAndMaritime/V/VA/PSMC/Spring%2017/LM\_Counterfeit%20Mitigation\_CALCE\_Univ%20of%20Md\_Spring%202017%20PSMC170526.pdf](https://www.dla.mil/Portals/104/Documents/LandAndMaritime/V/VA/PSMC/Spring%2017/LM_Counterfeit%20Mitigation_CALCE_Univ%20of%20Md_Spring%202017%20PSMC170526.pdf)  
18. Executive Summary \- ESG Research Portal, [https://research.esg-global.com/chapters/CyberSupplyChainRevisited/ExecutiveSummary](https://research.esg-global.com/chapters/CyberSupplyChainRevisited/ExecutiveSummary)  
19. Leak suggests NSA used secret agents to infiltrate networks \- iTnews, [https://www.itnews.com.au/news/leak-suggests-nsa-used-secret-agents-to-infiltrate-networks-396686](https://www.itnews.com.au/news/leak-suggests-nsa-used-secret-agents-to-infiltrate-networks-396686)  
20. NSA reportedly installing spyware on US-made hardware \- CNET, [https://www.cnet.com/news/privacy/nsa-reportedly-installing-spyware-on-us-made-hardware/](https://www.cnet.com/news/privacy/nsa-reportedly-installing-spyware-on-us-made-hardware/)  
21. AS6081 Counterfeit Avoidance & Detection Services \- AAA Test Lab, [https://aaactl.com/services/counterfeit-mitigation/as6081/](https://aaactl.com/services/counterfeit-mitigation/as6081/)  
22. AS 6081 – ANAB, [https://anab.ansi.org/standard/as6081/](https://anab.ansi.org/standard/as6081/)  
23. Counterfeit Electronic Part Detection and Avoidance \- Policy Library, [https://policylibrary.gatech.edu/business-finance/counterfeit-electronic-part-detection-and-avoidance](https://policylibrary.gatech.edu/business-finance/counterfeit-electronic-part-detection-and-avoidance)  
24. SAE AS6171: \- ANSI, [https://share.ansi.org/Shared%20Documents/Standards%20Activities/Microelectronics%20Supply%20Chain%20Security/October%2026-28,%202022%20Workshop/30%20September%202022%20Standards%20Briefings/AS6171%20Overview%20for%20ANSI%20Meeting\_Azarian\_30Sep2022.pdf](https://share.ansi.org/Shared%20Documents/Standards%20Activities/Microelectronics%20Supply%20Chain%20Security/October%2026-28,%202022%20Workshop/30%20September%202022%20Standards%20Briefings/AS6171%20Overview%20for%20ANSI%20Meeting_Azarian_30Sep2022.pdf)  
25. How Technology Advancements Are Accelerating the Proliferation of Counterfeit Electronic Components \- SMT Corp., [https://smtcorp.com/technology-counterfeit-electronic-components-proliferation/](https://smtcorp.com/technology-counterfeit-electronic-components-proliferation/)  
26. Company Overview \- AS6171 COMPARISON TO AS6081 \- ERAI, [https://www.erai.com/CustomUploads/ca/wp/AS6171\_Benefits\_White\_Paper\_062017\_7.pdf](https://www.erai.com/CustomUploads/ca/wp/AS6171_Benefits_White_Paper_062017_7.pdf)  
27. AS6081 vs AS6171 Counterfeit Standards | Cosolvic, [https://cosolvic.com/blog/as6081-as6171-idea-std-1010-ccap-101-counterfeit-standards-comparison/](https://cosolvic.com/blog/as6081-as6171-idea-std-1010-ccap-101-counterfeit-standards-comparison/)  
28. Tech Topic Series: Counterfeit Components Session 2 \- Counterfeit Management & Best Practices \- iNEMI, [https://thor.inemi.org/webdownload/2023/Tech\_Topics/Counterfeit-2.pdf](https://thor.inemi.org/webdownload/2023/Tech_Topics/Counterfeit-2.pdf)  
29. AS6171 \- Google Search | PDF | Poisson Distribution | Teaching Mathematics \- Scribd, [https://www.scribd.com/document/1003163242/AS6171-Google-Search](https://www.scribd.com/document/1003163242/AS6171-Google-Search)  
30. adrelanos/verified-boot \- GitHub, [https://github.com/adrelanos/verified-boot](https://github.com/adrelanos/verified-boot)  
31. AMD PSB Vendor Locks EPYC CPUs for Enhanced Security at a Cost \- ServeTheHome, [https://www.servethehome.com/amd-psb-vendor-locks-epyc-cpus-for-enhanced-security-at-a-cost/](https://www.servethehome.com/amd-psb-vendor-locks-epyc-cpus-for-enhanced-security-at-a-cost/)  
32. CHIPSEC 1.13.8 Platform Security Guide | PDF | Device Driver | Microsoft Windows \- Scribd, [https://www.scribd.com/document/939702561/chipsec-manual](https://www.scribd.com/document/939702561/chipsec-manual)  
33. UEFI for Blue Teams \- Firmware Security, [https://firmwaresecurity.com/wp-content/uploads/2015/10/bsidespdx-20151017.pdf](https://firmwaresecurity.com/wp-content/uploads/2015/10/bsidespdx-20151017.pdf)  
34. Writing CHIPSEC Modules & Tools \- GitHub, [https://raw.githubusercontent.com/wiki/chipsec/chipsec/files/training/OSFC\_2018\_CHIPSEC\_Workshop.pdf](https://raw.githubusercontent.com/wiki/chipsec/chipsec/files/training/OSFC_2018_CHIPSEC_Workshop.pdf)  
35. Running CHIPSEC, [https://chipsec.github.io/usage/Running-Chipsec.html](https://chipsec.github.io/usage/Running-Chipsec.html)  
36. UEFI firmware analysis & research on known vulnerabilities in early boot components \- GitHub, [https://github.com/TheMalwareGuardian/UEFI-Firmware-Analysis](https://github.com/TheMalwareGuardian/UEFI-Firmware-Analysis)  
37. Implementing and validating MITRE D3FEND Countermeasures using Wazuh EDR. Part I: HARDEN \- SOCFortress, [https://socfortress.medium.com/implementing-and-validating-mitre-d3fend-countermeasures-using-wazuh-edr-b7b4561ac5ff](https://socfortress.medium.com/implementing-and-validating-mitre-d3fend-countermeasures-using-wazuh-edr-b7b4561ac5ff)  
38. kayranfatih/awesome-embedded-linux-security \- GitHub, [https://github.com/kayranfatih/awesome-embedded-linux-security](https://github.com/kayranfatih/awesome-embedded-linux-security)  
39. Cyber Hub \- Athena OS, [https://athenaos.org/en/resources/cyber-hub/](https://athenaos.org/en/resources/cyber-hub/)  
40. Day 23: I Built a Fully Functional SOC Home Lab From Scratch | by Oyeniyioluwanifemi, [https://medium.com/@oyeniyioluwanifemi/day-23-i-built-a-fully-functional-soc-home-lab-from-scratch-b14f4f49e3c6](https://medium.com/@oyeniyioluwanifemi/day-23-i-built-a-fully-functional-soc-home-lab-from-scratch-b14f4f49e3c6)  
41. Vulnerability Dashboard won't show : r/Wazuh \- Reddit, [https://www.reddit.com/r/Wazuh/comments/1dggzvq/vulnerability\_dashboard\_wont\_show/](https://www.reddit.com/r/Wazuh/comments/1dggzvq/vulnerability_dashboard_wont_show/)  
42. Issue with custom wazuh rule / detection logic \- Reddit, [https://www.reddit.com/r/Wazuh/comments/1t3ljv9/issue\_with\_custom\_wazuh\_rule\_detection\_logic/](https://www.reddit.com/r/Wazuh/comments/1t3ljv9/issue_with_custom_wazuh_rule_detection_logic/)  
43. Wazuh Alerts \- Reddit, [https://www.reddit.com/r/Wazuh/comments/1isc12b/wazuh\_alerts/](https://www.reddit.com/r/Wazuh/comments/1isc12b/wazuh_alerts/)  
44. Uygulamalı Bilgi Sistemleri Denetimi | LisanslıEğitim, [https://lisansliegitim.com.tr/etkinlik/7fb470ce-b0b4-4c6e-bd2a-9504f367154e](https://lisansliegitim.com.tr/etkinlik/7fb470ce-b0b4-4c6e-bd2a-9504f367154e)  
45. T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisinin Hazırladığı “Bilgi ve İletişim Güvenliği Rehberi” Yayınlandı \- Bilgi Teknolojileri Genel Müdürlüğü, [https://btgm.ktb.gov.tr/TR-271803/tc-cumhurbaskanligi-dijital-donusum-ofisinin-hazirladigi-bilgi-ve-iletisim-guvenligi-rehberi-yayinlandi.html](https://btgm.ktb.gov.tr/TR-271803/tc-cumhurbaskanligi-dijital-donusum-ofisinin-hazirladigi-bilgi-ve-iletisim-guvenligi-rehberi-yayinlandi.html)  
46. Bilgi ve İletişim Güvenliği Rehberi Nedir ? \- Beyaz.Net, [https://www.beyaz.net/tr/guvenlik/makaleler/bilgi\_ve\_iletisim\_guvenligi\_rehberi\_nedir.html](https://www.beyaz.net/tr/guvenlik/makaleler/bilgi_ve_iletisim_guvenligi_rehberi_nedir.html)  
47. Bilgi ve İletişim Güvenliği Rehberine Uyum Önerileri \- Türk Telekom, [https://kurumsal.turktelekom.com.tr/tt-bilisim-teknolojileri/Documents/bilgi-ve-iletisim-guvenligi-rehberi-brosuru.pdf](https://kurumsal.turktelekom.com.tr/tt-bilisim-teknolojileri/Documents/bilgi-ve-iletisim-guvenligi-rehberi-brosuru.pdf)  
48. BİLGİ VE İLETİŞİM GÜVENLİĞİ DENETİM REHBERİ \- T.C. Hazine ve Maliye Bakanlığı, [https://ms.hmb.gov.tr/uploads/2021/12/BG\_Denetim\_Rehberi-1.pdf](https://ms.hmb.gov.tr/uploads/2021/12/BG_Denetim_Rehberi-1.pdf)  
49. Bilgi ve İletişim Güvenliği Rehberi \- DGRNET, [https://www.dgrnet.com.tr/2024/09/bilgi-ve-iletisim-guvenligi-rehberi/](https://www.dgrnet.com.tr/2024/09/bilgi-ve-iletisim-guvenligi-rehberi/)  
50. Bilgi ve İletişim Güvenliği: Dijital Dünyada Güvende Kalın \- Turbay Danışmanlık, [https://www.turbaydanismanlik.com/uncategorized/there-are-many-variations-of-passages-of-lorem/](https://www.turbaydanismanlik.com/uncategorized/there-are-many-variations-of-passages-of-lorem/)  
51. Bilgi Teknolojileri Aracılığı ile Hizmet Sunan Tedarikçiler için Bilgi Güvenliği Standartları, [https://tedarikciportali.akbank.com/pages/assets/BT\_Hizmet\_Bilgi\_Guvenligi\_Standartlari.pdf](https://tedarikciportali.akbank.com/pages/assets/BT_Hizmet_Bilgi_Guvenligi_Standartlari.pdf)  
52. Sır Niteliğindeki Bilgilerin Paylaşılması Hakkında Yönetmelik, BDDK tarafından yayınlandı, [https://www.pwc.com.tr/sir-niteligindeki-bilgilerin-paylasilmasi-hakkinda-yonetmelik](https://www.pwc.com.tr/sir-niteligindeki-bilgilerin-paylasilmasi-hakkinda-yonetmelik)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAABoElEQVR4Xu3UwSulURzG8Z+wmCwojGY1kpIsKJOJKAspC7PwB0gkGykkRqmxsLGYaGYhs7STYmOBKcrOQlKWCik7C0Up4vt03nPvubfc2zVXZnGf+tR9z3nf83vPPee8Zv9pPmAQ8/iGvMRuK8YvfExqzygaZBUtqMMhqoJ+Ff2Oc3wK2jPOMH6bG7AcA+Zm6PMFCziyNIXUOYNlzKI66CvC36h9BFMoC/o12wm0WppCTdhBG+qxiSeMm5tBBU7NFdOgDdi1+Fr0ohaNlqKQpr+BfuRHbaU4wK25h32hyahfA52Z2xB6MT2rpCykRi3gjbmHfKbNzWrM4n9dWEjPDGEO+9jDMR6wjZro3lgKsYgtS3wTDapCfvAf5ooruu8EzdG1T7dluOsKsIZHtEdtn7GODnObQosfnqMuczO5xx9UBn0v5qu59dEO1Ix99FvrVRK0vTraVVqPFXNr8ybRGy/hpyUexqzGF9FnxG9znY3O2B1ZiBZVh3M0+u2j7dsTXP9TNHAf7nCJi8C1uc9KVuIPn85MsitL/ELnkksu75hnw8xLeQEKx5sAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAaCAYAAADygtH/AAAC8UlEQVR4Xu2YS6hNURjHP6G8X1duQp6RDCghkoSJAQkZeE0kQ6UQkYFMFHkMSCgTr0w9inIHBsqIQjGRPJIYCAMK/7/vrO7a66xv7X1yzi61fvXr3rv2Ovvs/V/vK5LJZP5D+sMlcBXsCq5lIsyD1+E2uBU+hmsLNepjGNwJz8GDcGzxcil94QY4KSh3DIQbRe9/FM4oXq7GLHgZDvfK9sJ7cLBXVgcTRRtsOxwAV8IXcL5fKQKD4Ag5Cd/Cb3BuoYbCd7wLD8MhcA58Btf5lcrgl52F04Ly/bBH9MZ10Q+ehzcavzuOwDuiz2rBawx4KTwkdmjsDI/gSK9sE3wOu72yJAvhnqCMD8CHPAH7BNc6yRT4XvTFfDhNWCHE4Odj9RkUA7sUlHNq+gpXB+UmB+Bi0aHAuWOEaFflEOFQqZMV8Jc0h8Zh91u0R1TBCm0m/CTNobEe67NHl8L56jRcJNrCfDDK1MvmkE7gwrFCC8strNBcOFZoYXkUDodjokOQPYw9bZDoJHlFivNKyCjRIfy6BbkSpuDLxsJpV2juPmE4LYXGiZOrVAhvzp7HUOtkl8TDaVdofN9/Dm2f6CQYwon3C5wdXugwVjhWuYUVmhWOVd6Em89GhxfAKfhU4tccHNJdokO6qpwCUnBB+inN4bjQqm62rdDc6hyG40LjNisJb8ATwNCgfAJ8KTqvpbYbPHIth+tbcMHfT9qMg69EG81nh+iqx9XP0S32Uc8KjXvOHnhTdLfg4Kr9o/EzCcf3Rym+CPdn3FzeluLpoC7YSGysh9L7/WwcNq6/MPHY8wG+gZMbZT4M7bvEp57NoouS+1zsO024P9simjy76wX4BO6W9M670/DBb8Frog17ET6A4706/J37SB7z3ItyurkKP0vv1om+g8cbdQgb4Qy8D9eIBsapiMepJP58xsPtGNGunhqOdcJn4tDikOZP/t1O+J7TRe/P/+owyFL8/VmmItb+LJNgGZwaFmYymUwmkzH4A1X8pS9JCgSaAAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAbCAYAAABFuB6DAAAA5UlEQVR4XmNgGAXUBHxA7AnEslA+NxC7AbExEDPDFHEC8VQgrgLiZ0DcAcRrgDgaSs8CYlaQQhcgrgZiTSB+C8RzoJpBwBSI30PVMCQAsRkQ+wHxX5ggFNgA8W8gLkISY2gF4gdALI0klg7E/4E4CEmMOIUgX+5hgDieBSoGokF8kLtB7gcDJSB+DsTlMAEgUATiJ0A8nQGhGewRkBUNUD4jEDcD8RUgloeKgQHIfaBgOAHEq4H4IAPEWglkRTxAfACItzJAwk8YKoYBsLkPK0hjgLgvDogF0ORQACguYTgCTW54AgD8LykjBVdY8AAAAABJRU5ErkJggg==>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAbCAYAAABIpm7EAAAA10lEQVR4Xu3RrQ9BURjH8bNhY/MS2EwQaDKaYmMjKJIiois2CknX/AMUTVA0RRU0xaYKApspvufec66zO0Ui+G2f3Z3nuffc8yLEP7+UMKpIqrEPOdQQ1y/pBDHFCCc0sUQbA1xQct4mFXSQxRVrRFQvgSN6amylhQzqeKBo9GT9jK5RczLBHjGj1sAdBaPm5KMPQthgAa+qyeccW/Hak5N3a00J+9SGCGCMqG7qDZu/lndwQx5l9I2eNctOGDOQNA5YYSZcy/IL+wLdkTcuD8Hjbvzz3TwBLFQieXz1O1wAAAAASUVORK5CYII=>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAaCAYAAAAQXsqGAAADB0lEQVR4Xu2XW6hNURSGh1Dkfskl5ByJPCjlluKJRCK5lCiUUBLlgSKlpPCoUFLyIIo3KUU68iLKE14kl1yi5Ekpif87Y017rnXmOnufU/tos/762nuNPdfac/5zzDHnMqtUqVKlSr3RTHFaXBCbxeD8z6XqJxaKM+KcWCX651qYzRYbxTjz9kPFErElbtQKWi+eiznmgzgu7ogRcaOEGPRBcV+0izHiirnZA6N2m8SvAm/N/69lNEW8sPzsjhKPxd4oltJc8UksjmLTxBuxIoqtFi8zHor9Ynj0e0sIg76ZDzqITCEzOswzrEwnzE2ZGMWGiQfikvlzEEYd+tOiB8LNleaziYaI5eadLa7vZovaUjQKXRYfzTMkpUHilnU1CmM7zDOSzES9MooieVYcFh/ESXHDfGb5LK7vZgtDyoxKxYOCIWVGxXGM4nm3zZffK7HT6iTFMnFEzBJfxEWr7TDzxdesTUqjzf+MQtgoRzvvTCsMKmVIPaMwATMaNeqeef/RdPHOfCMIy7OLtosFYo34aXlTKIo/xIEo1kyx5O9a2pB6Ro03z45GjGKZQhDmUAMxqz2KJ0UhfC0mRbHd5lvnuijWbJUZUhYPShnSXbwons9YqdWlCjNJTRqQxfjkmuXIskyJmeCsQgcaZWTnneViwlKGMBBmfHIhHhT6WzQkGMXOxw44Q7wXNy1/iA1GsSxLxU7CjhLvBKQgHTtvNfOKosgvFRt6AKfm7pQqAWFHg7BkKLxt0TWi/8WJHSueme+miAlgImKjwtJLTVBOdA43j2XX3Mhp+KmYmsX6SmToI6v1BYViy4k6aId5n69abSJT7Xg1+SwWZdec7jGlLTTIvlPf6u7wpDu7G6fU6+avAKTxhLhRH2qe+ZbNLkQWcgY6ZflBsES+Z22Y2CDqKffuEtvMX4X2FNrw/CfmR6J95rX5mtV5RQprmLQmFZlRYn9b4dC71moH4UbFGDAS+J5S/Pw26+ZYEJSqT5USIkVZ61ut/o70X4sCFoiLYKVKlSpVqvRv6Tcz8K+X2zxx2wAAAABJRU5ErkJggg==>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAZCAYAAAB5CNMWAAADP0lEQVR4Xu2YS8hNURiGP6EISYoU8SNiIHKLYiApiQgpTOSSTBQDISaSKCmXlEuSgcKQFMofQhSRS4lcIhlgQmGA92ntr7P2Pv9xztnnlBP7rSfnX3vtvdd617e+9W1mhQoVKlQILRZTRU/RSfQTy8XYuJPUXSwVR8QeMTJ9+d9XF3FG/MpwVvSO+vH7sthhwVSMfCIWRn1aTt0Smqlj4pF4I86JOaJzqofZJnFX9Inalomnon/U1lIaamGFd4u+mWt5dUCMzzZGwiCMOplpnyi+iHmZ9pYSeWWMuCiOi7b05bpVzaxR4qOVm8U9X8XOTLuL7TpQzLLwjK5igpgvBiV9mMsIsSjpk41oRArgGXMtBMgAsU2stvDMmkWSJb9A3oR7UOwT98RbcUuMi667KZXMyra7MOWdhRzIoXDKwtbdauG+VUn7BrE26ctYyKMuUgJj2ijWiOfiplgvXlkwrm4RXUTZNTHZworVqhNis5VWlZPwk5iU/M2KMuGsKdXMQkQWk41zWy9xXXwX05I2RIS+tpIB9Oe+OHK3iA9itIXnNCRedMjqM42XxuHvEzxtYZVnW36zGA8G7I/a2J7tFgyLJ8whEpvlz6fdxW/GwpiaIvb1YXFDDElfqkk+wRcWVreSKZXaY/mz4gm7WcBvV9Ys6j1OaSLfF53IYiHbkr9zi5ew569a7VG1Qvy0kDNcPkEfOCfweys3xc1iApXUiFmI3PTZwlbcbsEo8lhu4fJRcd7CKVmLSS4P69gs34btFibjk7tg6RpvpviR/FtJjZjFNRaI8RBltOeqMTGkGeXDFAvRGB/BS8Q3S1fnJH2KVn8P76eav23pSj8rNz6Ovj+ZRYlCCYF6iEsW8h2lBXDCDrOOS4wyMUi2GFuNScYhm0c8j2OZ5620MDAGvC655sJM8iD9GDBGPbby78dYRCuR559Qd6x00nobv2mjXPE27uFe3s82JE34NYdcNtiqiFNglzWvendRJGICxV+lSGHwXkBOtzoLwhziy+CBGB61+Y5ioeIT9r8X36zkrI7Etr5iYasWslAUvxQLrJSjiKwZ4pm1+P94/A2Rk/da2I73xUMLdVfeT7tChQoVajn9Bl0wutJw6m2zAAAAAElFTkSuQmCC>