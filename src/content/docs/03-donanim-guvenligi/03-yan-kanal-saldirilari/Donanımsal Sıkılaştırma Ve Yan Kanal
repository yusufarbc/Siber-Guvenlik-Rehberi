# **Yan Kanal Saldırıları (Side-Channel Attacks) ve Donanımsal Sıkılaştırma: Kurumsal Savunma Derinliği Mimarisi**

Modern siber güvenlik stratejileri, geleneksel olarak yazılım katmanındaki mantıksal zafiyetlerin kapatılması ve ağ sınırlarının korunması üzerine inşa edilmiştir. Ancak, "Savunma Derinliği" (Defense in Depth) prensibini Fortune 500 ölçeğindeki büyük yapılara uygulayan bir mimarın bakış açısıyla, en güvenli yazılımların bile üzerinde çalıştığı fiziksel donanımın mikro-mimari yapısı ve fiziksel sızıntıları nedeniyle tehlikeye düşebileceği bilinmelidir. Yan kanal saldırıları (Side-Channel Attacks \- SCA), hedef sistemin matematiksel ya da mantıksal algoritmalarındaki zayıflıkları değil; bu algoritmaların donanım üzerinde koşturulması sırasında çevreye yayılan enerji tüketimi, elektromanyetik radyasyon, zamanlama farklılıkları ve mikro-mimari durum değişimleri gibi fiziksel yan etkileri hedef alır1.  
Bu raporda, fiziksel yan kanal sızıntılarının teorik ve matematiksel temelleri, modern işlemcileri etkileyen geçici yürütme (transient execution) zafiyetlerinin derinlemesine mikro-mimari analizi, bu zafiyetlerin sömürülme metodolojileri (ofansif) ve kurumsal altyapılarda uygulanması gereken donanımsal sıkılaştırma ile tespit mekanizmaları (defansif) sistem mimarisi ve SOC operasyonları perspektifinden ele alınmaktadır.

## **Fiziksel Yan Kanal Analizi: Güç ve Elektromanyetik Sızıntı Teorisi**

Fiziksel yan kanal saldırıları, doğrudan donanım bileşenine (örneğin akıllı kartlar, donanımsal güvenlik modülleri \- HSM, kripto işlemciler veya mikrodenetleyiciler) fiziksel olarak yakın veya doğrudan bağlı olan bir saldırganın gerçekleştirebileceği tehditleri kapsar1. CMOS (Complementary Metal-Oxide-Semiconductor) teknolojisi ile üretilen entegre devreler, durum değiştirdiklerinde (lojik ![][image1]'dan ![][image2]'e veya tam tersi geçişlerde) parazit kapasitörlerin şarj ve deşarj olması sebebiyle akım çekerler5. Bu dinamik güç tüketimi, işlenen verinin yapısına ve yürütülen talimatın türüne göre mikroskobik düzeyde değişiklik gösterir5.

                 \+---------------------------------------+  
                 |    Fiziksel Veri Sızıntı Döngüsü      |  
                 \+---------------------------------------+  
                                     |  
                                     v  
                       \+---------------------------+  
                       | CMOS Mantık Kapısı Geçişi |  
                       \+---------------------------+  
                                     |  
                 \+-------------------+-------------------+  
                 |                                       |  
                 v                                       v  
     \+-----------------------+               \+-----------------------+  
     | Dinamik Güç Tüketimi  |               |  Elektromanyetik Akı  |  
     | (Akım Çekilmesi, Vdd) |               |  (Maxwell Denklemi)   |  
     \+-----------------------+               \+-----------------------+  
                 |                                       |  
                 v                                       v  
     \+-----------------------+               \+-----------------------+  
     | Güç Analizi (SPA/DPA) |               | Manyetik Sızıntı (EMA)|  
     \+-----------------------+               \+-----------------------+

### **Matematiksel Sızıntı Modelleri**

Saldırganlar, fiziksel ölçümlerle içsel durumları ilişkilendirmek amacıyla iki temel güç ve sızıntı modeli kullanırlar2:

#### **Hamming Weight (HW) Modeli**

Bir veri yolunda veya yazmaçta (register) bulunan ve değeri lojik ![][image2] olan bitlerin sayısının güç tüketimiyle doğru orantılı olduğunu varsayar1. ![][image3] kelimesinin Hamming ağırlığı ![][image4] ile gösterilirse, anlık güç tüketimi ![][image5] şu şekilde formüle edilir5:  
![][image6]  
Burada ![][image7] ölçekleme katsayısını, ![][image8] ise cihazın veri işlemlerinden bağımsız olarak harcadığı statik güç miktarını temsil eder5.

#### **Hamming Distance (HD) Modeli**

Yazmaçların durum geçişlerindeki güç tüketimini modeller2. Bir yazmacın eski değeri ![][image9] ve yeni değeri ![][image10] olduğunda, iki durum arasındaki bit farklarının (XOR işleminin Hamming ağırlığının) güç tüketimini belirlediği varsayılır5:  
![][image11]  
HD modeli, özellikle paralel veri otobüsleri ve ardışık mantık devrelerindeki (Flip-Flop) dinamik akım değişimlerini tahmin etmede HW modeline kıyasla çok daha yüksek doğruluk sunar5.

### **Basit ve Diferansiyel Güç Analizi (SPA & DPA)**

#### **Basit Güç Analizi (Simple Power Analysis \- SPA)**

Saldırganın, kriptografik işlem sırasında cihazdan elde ettiği tek bir güç tüketim izini (power trace) doğrudan görsel ve matematiksel olarak analiz etmesidir2. RSA gibi algoritmalarda kullanılan "Kare Al ve Çarp" (Square-and-Multiply) yönteminde, üstel bitin ![][image2] olduğu durumlarda hem kare alma hem çarpma işlemleri yürütülürken, bitin ![][image1] olduğu durumlarda sadece kare alma işlemi yapılır2. Çarpma işlemi daha fazla akım çektiği için, güç izindeki geniş ve belirgin tepe noktaları (peaks) doğrudan gizli anahtarın bit dizilimini ele verir2.

#### **Diferansiyel Güç Analizi (DPA)**

Görsel analizin yüksek gürültü sebebiyle başarısız olduğu durumlarda, çok sayıda farklı girdi (plaintext) ile yapılan şifreleme işlemlerine ait binlerce güç izinin istatistiksel analizine dayanır1. DPA, "Ortalamaların Farkı" (Difference of Averages) yöntemini kullanır1. Saldırgan, kriptografik algoritmanın belirli bir ara değerini (örneğin AES algoritmasındaki ilk tur S-Box çıkışını) hedef alır5.  
Saldırgan, tahmin edilen anahtar adayları (![][image12]) için her bir şifreleme girdisine karşılık gelen ara değeri hesaplar ve bir seçim fonksiyonu (![][image13]) kullanarak elde edilen güç izlerini iki farklı kümeye ayırır1:  
![][image14]  
Burada ![][image15], ![][image16]\-inci şifreleme işlemine ait anlık güç tüketim değerini temsil eder1. Eğer tahmin edilen anahtar aday ![][image12] yanlış ise, seçim fonksiyonu izleri rastgele böleceğinden fark sıfıra yakınsar1. Ancak ![][image12] doğru anahtar ise, cihazın gerçekte işlediği veriyle tam korelasyon sağlanacağından, grafikte zaman alanında çok belirgin "DPA Tepe Noktaları" (DPA peaks) oluşur ve gizli anahtar deşifre edilir1.

### **Elektromanyetik Analiz (EMA) ve TEMPEST Standartları**

Elektromanyetik Analiz (EMA), entegre devrelerin çalışırken çevreye yaydığı istemsiz elektromanyetik dalgaların mikro-antenler ve spektrum analizörleri ile yakalanması işlemidir7. EMA, güç analizinin aksine cihazın güç hattına fiziksel müdahale gerektirmez ve entegre devrenin üzerine konumlandırılan problar aracılığıyla sadece belirli bir alt birimin (örneğin sadece kripto hızlandırıcı çekirdeğinin) elektromanyetik emisyonuna odaklanabilir.  
Askeri ve kritik kurumsal yapılarda, bu tür elektromanyetik sızıntılara karşı **TEMPEST** (Telecommunications Electronics Materials Protected from Emanating Spurious Transmissions) standartları ve sertifikasyon süreçleri uygulanır7. NATO ülkelerinde yürürlükte olan **SDIP-27** standardı, ekipmanların elektromanyetik emisyon sınırlarını ve fiziksel koruma alanlarını (Zone) üç temel seviyede derecelendirir7:

| TEMPEST Seviyesi | NATO Karşılığı | Askeri / Kurumsal Risk Bağlamı | Fiziksel Koruma ve Mesafe Şartı | Mühendislik Gereksinimi |
| :---- | :---- | :---- | :---- | :---- |
| **Level A** | FULMAR10 | En yüksek riskli bölgeler (Zone 0\)7. Saldırganın hemen bitişik odada veya 1 metre mesafede olduğu varsayılır8. | Sınıra en yakın odalar veya taktiksel mobil komuta merkezleri8. | Tamamen ekranlanmış, özel metal kaplamalı ve güç filtreli cihaz tasarımı8. |
| **Level B** | BREVEL10 | Orta seviyeli risk alanları (Zone 1\)8. Saldırganın doğrudan erişimi engellenmiştir ancak \~20 metre mesafede konuşlanabileceği varsayılır7. | Kurumsal merkez binaları ve SCIF (Secure Compartmented Information Facility) iç alanları8. | Ekranlanmış sinyal kabloları (ferrit nüveli HDMI/DisplayPort), filtrelenmiş güç hatları10. |
| **Level C** | CONUS10 | Düşük riskli taktiksel ve sivil alanlar (Zone 2\)8. Saldırganın en az 100 metre mesafede olduğu varsayılır7. | Sınırları fiziksel engellerle korunmuş geniş kampüs yapıları7. | Standart endüstriyel metal kasalar, sıkılaştırılmış topraklama hatları8. |

### **Ofansif ve Defansif Denge: Fiziksel Koruma Yöntemleri**

Ofansif kanatta, sinyal-gürültü oranını (SNR) artırmak adına sayısal sinyal işleme (DSP) algoritmaları, bant geçiren filtreler ve dalgacık dönüşümü (Wavelet Transform) gibi gelişmiş yöntemler uygulanır. Mavi takım ise bu sızıntıları donanım seviyesinde engellemek için üç temel defansif metodoloji uygular:

#### **Donanımsal Maskeleme (Hardware Masking)**

Kriptografik işlem sırasında işlenen her gizli değer (![][image17]), donanımsal düzeyde rastgele üretilen bir maske değeri (![][image18]) ile XOR işlemine sokularak (![][image19]) maskelenir1. S-Box ve doğrusal olmayan tüm işlemler, maske değeri ve maskelenmiş veri üzerinden paralel iki veri yolunda yürütülür1. İşlem sonunda maske kaldırılarak sonuç elde edilir; bu sayede güç tüketiminin gizli anahtarla olan doğrudan korelasyonu matematiksel olarak kırılır1.

#### **Yapay Gürültü Üretimi ve Akım Dengeleme**

Kripto işlemci içerisine entegre edilen yapay gürültü jeneratörleri, rastgele zamanlarda sahte şifreleme adımları koşturarak güç tüketim grafiklerini karıştırır. Ayrıca, çift hatlı dinamik mantık (Dual-Rail Dynamic Logic) mimarileri kullanılarak, her lojik kapının her durumda (ister ![][image20], ister ![][image21] geçişi olsun) tamamen eşit miktarda akım çekmesi sağlanır.

#### **Fiziksel Ekranlama ve Filtreleme**

Cihazların şasileri Faraday kafesi prensibine uygun olarak tasarlanır ve dışarıya elektromanyetik dalga sızması engellenir8. Sinyal ve güç kabloları üzerine yerleştirilen ferrit halkalar (ferrite beads) yüksek frekanslı parazitleri sönümler10. Güç hatlarından gelen sızıntıları (conducted emissions) önlemek için cihazın güç girişine alçak geçiren LC güç filtreleri konumlandırılır10.

## **Mikro-Mimari Geçici Yürütme (Transient Execution) Zafiyetleri**

Modern CPU mimarileri, tek bir işlem parçacığının yürütme hızını artırmak amacıyla komutların sırasını değiştiren (Out-of-Order Execution) ve dallanma noktalarında gelecekteki kararları tahmin ederek kodu önceden çalıştıran (Speculative Execution) karmaşık donanımsal optimizasyonlar barındırırlar12. Ancak, spekülatif veya sırasız yürütme sırasında işlemci tarafından işlenen ve mimari düzeyde (kaydedicilerde) geçerli sayılmayarak iptal edilen "geçici" (transient) talimatlar, işlemcinin mikro-mimari durumunda (özellikle veri ve talimat önbelleklerinde) kalıcı izler bırakırlar13. Saldırganlar bu izleri analiz ederek normal şartlarda erişim yetkilerinin olmadığı bellek alanlarını sızdırabilirler13.

\+-----------------------------------------------------------------------------------+  
|               Geçici Yürütme (Transient Execution) Sızıntı Mekanizması            |  
\+-----------------------------------------------------------------------------------+  
                                          |  
                                          v  
                    \+--------------------------------------------+  
                    | CPU Dallanma Noktası (Branch Instruction)  |  
                    \+--------------------------------------------+  
                                          |  
                                          v  
                    \+--------------------------------------------+  
                    |   Spekülatif Tahmin (Branch Prediction)    |  
                    \+--------------------------------------------+  
                                          |  
                                          v  
                    \+--------------------------------------------+  
                    |    Sırasız Yürütme (Out-of-Order Exec)     |  
                    |    \- Yetki kontrolünden önce bellek oku    |  
                    \+--------------------------------------------+  
                                          |  
                  \+-----------------------+-----------------------+  
                  |                                               |  
                  v (Tahmin Doğru)                                v (Tahmin Yanlış / Hata)  
     \+-------------------------+                     \+-------------------------+  
     | Komut Mimari Seviyede   |                     | İşlem İptal Edilir,     |  
     | Commit Edilir (Normal)  |                     | Kaydediciler Geri Alınır|  
     \+-------------------------+                     \+-------------------------+  
                                                                  |  
                                                                  v  
                                                     \+-------------------------+  
                                                     | Mikro-Mimari İz Kalır:  |  
                                                     | Önbellek Durumu Değişir |  
                                                     \+-------------------------+  
                                                                  |  
                                                                  v  
                                                     \+-------------------------+  
                                                     | Önbellek Zamanlama Analizi|  
                                                     | (Flush+Reload) \-\> Veri  |  
                                                     \+-------------------------+

### **Zafiyetlerin Mikro-Mimari Analizi**

#### **Meltdown (CVE-2017-5754)**

Rogue Data Cache Load sınıfına giren bu zafiyet, modern Intel işlemcilerin sırasız yürütme birimlerinin, bellek sayfa tablosu yetki kontrollerini (User/Supervisor bit kontrolü) ilgili veri bellekten okunup geçici yürütme hattına aktarıldıktan sonra tamamlamasından kaynaklanır13. Saldırgan, çekirdek (kernel) adresini işaret eden bir bellek okuma talimatı gönderdiğinde, CPU donanımı veriyi L1 önbelleğinden çeker ve spekülatif olarak bir sonraki talimata (örneğin bu veriyi dizi indeksi olarak kullanan bir dizi erişimine) aktarır13. Milisaniyeler sonra donanımsal yetki kontrol birimi hatayı fark eder ve bir kesme (Page Fault) fırlatarak işlemi iptal eder13. Ancak çekirdek verisi çoktan önbelleğe getirilmiş ve sonraki dizi erişimi ile önbelleğin belirli bir satırı aktive edilmiştir13.

#### **Spectre (CVE-2017-5753 \- Variant 1 & CVE-2017-5715 \- Variant 2\)**

İşlemcinin Dallanma Tahmin Birimi'ni (Branch Prediction Unit \- BPU) hedef alır13.

* *Variant 1 (Bounds Check Bypass):* İşlemcinin dizi sınır kontrollerini spekülatif olarak bypass etmesini sağlar13. Bir koşullu ifade (if (x \< array1\_size)) ardışık olarak geçerli girdilerle çalıştırılarak BPU'nun "dallanma gerçekleşecek" şeklinde eğitilmesi sağlanır13. Ardından, sınırın çok dışında (out-of-bounds) ve hedef gizli veriyi işaret eden bir x değeri gönderildiğinde, CPU sınır kontrolünün tamamlanmasını beklemeden spekülatif olarak sınır dışı belleği okur ve bunu önbelleğe yansıtır13.  
* *Variant 2 (Branch Target Injection):* Dolaylı dallanma (indirect branch) hedeflerini tutan Dallanma Hedef Arabelleği'ni (Branch Target Buffer \- BTB) zehirler13. Saldırgan, kendi adres uzayında eğittiği BTB girdileri sayesinde, çekirdek modundaki dolaylı bir dallanmayı spekülatif olarak çekirdek içindeki bir "açığa çıkarma aracına" (disclosure gadget) yönlendirir13.

#### **Retbleed (CVE-2022-29900 & CVE-2022-29901)**

Spectre Variant 2'ye karşı geliştirilen yazılımsal "Retpoline" yamasını bypass etmek amacıyla geri dönüş (return) talimatlarını istismar eder13. Geri dönüş adreslerini tahmin etmek için kullanılan Dönüş Yığın Arabelleği (Return Stack Buffer \- RSB), derin fonksiyon çağrıları (call stack) sonrasında boşalır veya taşar (underflow)14. Intel işlemcilerde RSB boşaldığında, geri dönüş tahminleri BTB'ye yönlendirilir14. AMD işlemcilerde ise dönüş talimatları, dönüş adres yığınından bağımsız olarak, doğrudan dolaylı dallanmalar gibi BTB üzerinden spekülatif olarak zehirlenebilir14. Bu durum, Retpoline kullanan güvenli çekirdeklerin bile dönüş talimatları üzerinden spekülatif kontrolünün ele geçirilmesine yol açar14.

#### **Downfall (CVE-2022-40982)**

Gather Data Sampling (GDS) olarak adlandırılan bu zafiyet, Intel'in AVX2 ve AVX-512 vektör yönergelerinde yer alan ve bellekten dağınık verileri toplamaya yarayan GATHER talimatını hedef alır12. GATHER işlemi sırasında, donanımsal optimizasyonlar nedeniyle veriler geçici olarak dahili SIMD/vektör yazmaçlarında (Vector Register File) tutulur12. Zafiyet, geçici yürütme sırasında bu yazmaçlarda kalan eski işlemlerden kalma verilerin (farklı kullanıcılar veya çekirdeğe ait şifreleme anahtarları) GATHER talimatını çalıştıran spekülatif koda sızdırılmasına imkan tanır12. Bu sızıntı Intel'in donanımsal güvenlik sınır hattı olan SGX (Software Guard Extensions) envanterini dahi tamamen bypass edebilir12.

#### **Inception (CVE-2023-20569)**

AMD Zen mimarilerini etkileyen bu zafiyet, Spekülatif Dönüş Yığını Taşması (Speculative Return Stack Overflow \- SRSO) prensibine dayanır13. AMD işlemcilerin dallanma tahmincisi, gerçekte kod akışında fiziksel bir geri dönüş veya dallanma talimatı olmasa dahi, işlemci ön-getirme (fetch) ve kod çözme (decode) aşamalarındayken "hayalet atlamalar" (Phantom Jumps) üretebilir14. Bu hayalet atlamalar, işlemcinin dönüş adresi tahmin mekanizmasını kendi ekseninde kısır bir döngüye sokarak, spekülatif yürütme penceresini genişletir ve saldırganın çekirdek belleğinden veri sızdırmasını sağlar14.

| Zafiyet Adı | CVE ID | Etkilenen Donanım Mimarisi | Temel Mikro-mimari Nedeni | Kritik Yazılımsal / Donanımsal Etkisi |
| :---- | :---- | :---- | :---- | :---- |
| **Meltdown** \[cite: 13\] | CVE-2017-575413 | Intel (6-11. Nesil Core, Xeon), ARM12. | Gecikmeli kullanıcı/süpervizör yetki kontrolü13. | Kullanıcı modundan çekirdek (kernel) belleğinin tamamen okunabilmesi13. |
| **Spectre v1** \[cite: 13\] | CVE-2017-575313 | Intel, AMD, ARM, RISC-V13. | Sınır kontrollerinin spekülatif olarak bypass edilmesi (BPU)13. | Süreç içi bellek sınırlarının ve sanal makine izolasyonunun aşılması16. |
| **Spectre v2** \[cite: 13\] | CVE-2017-571513 | Intel, AMD, ARM13. | Dolaylı dallanma hedeflerinin zehirlenmesi (BTB)13. | Çekirdek kod akışının spekülatif olarak kontrol edilmesi13. |
| **Retbleed** \[cite: 15\] | CVE-2022-29900, CVE-2022-2990115 | Intel (6-8. Nesil), AMD (Zen 1, Zen 1+, Zen 2\)14. | RSB boşalması sonucu dönüşlerin BTB'den tahmin edilmesi14. | Retpoline yamasının bypass edilerek çekirdek verisinin sızdırılması15. |
| **Downfall** \[cite: 12\] | CVE-2022-4098212 | Intel (6-11. Nesil Core, 1-4. Nesil Xeon Scalable)12. | GATHER talimatının vektör yazmaç verilerini sızdırması12. | Donanımsal Intel SGX sınırlarının ve VM izolasyonunun aşılması12. |
| **Inception** \[cite: 16\] | CVE-2023-2056916 | AMD (Zen 1, Zen 2, Zen 3, Zen 4\)17. | Hayalet atlamalar (Phantom Jumps) ve SRSO14. | Çekirdek seviyesinde spekülatif kod yürütme ve veri sızıntısı14. |

### **Ofansif Sömürme Metodolojisi: Önbellek Zamanlama Analizi ve SMEP Bypass**

Bir saldırganın geçici yürütme zafiyetlerini kullanarak veriyi sızdırabilmesi için mikro-mimari durum değişikliklerini ölçebileceği bir örtük kanala (covert channel) ihtiyacı vardır13. En yaygın kullanılan yöntem **Flush+Reload** önbellek zamanlama analizidir10.

                     \+---------------------------------------+  
                     |  Saldırgan Önbelleği Temizler (FLUSH) |  
                     \+---------------------------------------+  
                                         |  
                                         v  
                     \+---------------------------------------+  
                     |  Mağdur Spekülatif Olarak Tetiklenir  |  
                     |  \- Gizli veri okunur                  |  
                     |  \- Veriye göre önbelleğe yükleme yapılır|  
                     \+---------------------------------------+  
                                         |  
                                         v  
                     \+---------------------------------------+  
                     |  Saldırgan Önbelleği Tarar (RELOAD)   |  
                     |  \- Erişim süreleri tek tek ölçülür     |  
                     \+---------------------------------------+  
                                         |  
                 \+-----------------------+-----------------------+  
                 |                                               |  
                 v (Hızlı Erişim \< 50 döngü)                     v (Yavaş Erişim \> 200 döngü)  
     \+-------------------------+                     \+-------------------------+  
     | Veri Önbelleğe Gelmiş\!  |                     | Veri Bellekten Okundu   |  
     | Sızan Veri \= İndeks     |                     | (Erişilmedi)            |  
     \+-------------------------+                     \+-------------------------+

1. **Flush Aşaması:** Saldırgan, x86 mimarisindeki clflush talimatını kullanarak izleme amacıyla kullandığı bir paylaşım dizisi içerisindeki tüm bellek satırlarını CPU önbelleğinden temizler (evict eder)10.  
2. **Tetikleme Aşaması:** Saldırgan, hedef sistemi spekülatif yürütmeye zorlar13. Bu süreçte işlemci, yetkisiz çekirdek adresindeki veriyi (![][image22]) okur ve bunu bir yan kanal adresi hesaplamasında indeks olarak kullanır: paylaşım\_dizisi\[S \* 4096\]13. ![][image22] değeri hangi sayıysa, o sayıya karşılık gelen dizi elemanı (sayfa boyutu olan 4096 ile çarpılarak önbellek çakışmalarını önlemek için) L1 veri önbelleğine yüklenir13.  
3. **Reload Aşaması:** Saldırgan, paylaşım dizisinin her bir sayfa elemanına erişim süresini yüksek çözünürlüklü zaman damgası kaydedicisi (rdtscp veya rdtsc) ile ölçer:  
   C  
   unsigned long long t1, t2;  
   volatile unsigned char \*addr;  
   for (int i \= 0; i \< 256; i++) {  
       addr \= \&paylasim\_dizisi\[i \* 4096\];  
       t1 \= \_\_rdtscp(\&junk); // Başlangıç zamanı  
       (void)\*addr;          // Belleğe erişim  
       t2 \= \_\_rdtscp(\&junk) \- t1; // Geçen süre (CPU döngüsü cinsinden)  
       if (t2 \< CACHE\_HIT\_THRESHOLD) { // Genellikle \< 50-80 CPU döngüsü  
           printf("Sızan Değer: %d (Erişim Süresi: %llu döngü)\\n", i, t2);  
       }  
   }

   Erişimi hızlı olan indeks, spekülatif olarak önbelleğe getirilen değerdir; böylece çekirdek bellek hücresindeki gizli veri mimari olarak hiçbir yetki ihlali hatası (oops/panic) oluşturulmadan sızdırılmış olur13.

#### **SMEP (Supervisor Mode Execution Prevention) Bypass Mekanizması**

SMEP, çekirdeğin (Ring 0\) kullanıcı modundaki (Ring 3\) bellek sayfalarında yer alan kodları yürütmesini engelleyen donanımsal bir korumadır14. Normal şartlarda, saldırgan dolaylı dallanmaları kendi kullanıcı bellek alanındaki kodlara yönlendiremez14. Ancak Spectre v2 veya Retbleed saldırılarında, **cross-privilege BTB poisoning** yöntemiyle, kullanıcı alanındaki bir süreç çekirdek adres uzayındaki geçerli kod bloklarını (gadget'ları) hedef gösterecek şekilde BTB'yi zehirler14.  
Dallanma çözümleme geri bildirimi donanım seviyesinde yetki sınırlarından bağımsız olarak BTB'ye yazıldığı için, CPU çekirdek moduna geçtiğinde spekülatif olarak yine çekirdek içinde yer alan ve sızıntı yapmaya uygun olan mevcut kod parçacıklarını çalıştırır; bu sayede SMEP koruması tamamen aşılmış olur14.

## **Donanımsal Sıkılaştırma ve Çekirdek Seviyesinde İzolasyon**

Geçici yürütme zafiyetlerine karşı kurumsal düzeyde savunma, hem mikro-mimari davranışları düzenleyen donanımsal yamaları (mikrokod güncellemeleri) hem de işletim sistemi çekirdeğinin bellek yönetim mekanizmalarının yeniden tasarlanmasını gerektirir12.

### **Mikrokod (Microcode) Yükleme Altyapısı ve Önyükleme Entegrasyonu**

Mikrokod, işlemcinin karmaşık x86 komut setini donanım üzerinde çalıştırılabilir mikro-işlemlere (uops) çeviren kontrol ünitesinin yazılımıdır. İşlemci üreticileri (Intel, AMD) spekülatif yürütme davranışlarını kısıtlayan yeni donanımsal bariyerleri mikrokod güncellemeleriyle dağıtırlar12. Mikrokod kalıcı bir bellek alanında saklanmaz; her sistem açılışında CPU'ya yeniden yüklenmesi şarttır22.

\+-----------------------------------------------------------------------------------+  
|               Erken Mikrokod (Early Microcode) Yükleme Akışı                      |  
\+-----------------------------------------------------------------------------------+  
                                          |  
                                          v  
                    \+--------------------------------------------+  
                    |    Sistem Açılışı (POST / UEFI Boot)       |  
                    \+--------------------------------------------+  
                                          |  
                                          v  
                    \+--------------------------------------------+  
                    |     Bootloader (GRUB / systemd-boot)       |  
                    |     \- Mikrokod CPIO imajını belleğe yükler  |  
                    \+--------------------------------------------+  
                                          |  
                                          v  
                    \+--------------------------------------------+  
                    |    Çekirdek Başlangıcı (Early Kernel)     |  
                    |    \- SMP ve MMU henüz aktif değil          |  
                    |    \- Mikrokod CPU kontrol ünitesine yazılır|  
                    \+--------------------------------------------+  
                                          |  
                                          v  
                    \+--------------------------------------------+  
                    |    Normal Çekirdek Önyüklemesi (Normal)    |  
                    |    \- Çekirdek izole parametreleri yüklenir |  
                    \+--------------------------------------------+

#### **Erken Mikrokod Yükleme (Early Loading)**

Mikrokod güncellemelerinin en güvenli şekilde uygulanabilmesi için, sistemin SMP (Symmetric Multiprocessing) mimarisini aktifleştirmeden ve sanal bellek (MMU) tablolarını oluşturmadan önce yapılması gerekir22. Erken yükleme için önyükleyici (bootloader), sıkıştırılmamış mikrokod CPIO arşivini ana işletim sistemi imajından (initramfs) önce belleğe yerleştirir22. Çekirdek, ilk aşamada /kernel/x86/microcode/ dizini altında yer alan GenuineIntel.bin veya AuthenticAMD.bin dosyalarını bularak işlemciye yazar22.  
Kurumsal Linux sunucularında (RHEL, Rocky Linux, Ubuntu Server) erken mikrokod yükleme entegrasyonu şu adımlarla gerçekleştirilir23:

1. **Gerekli Paketlerin Kurulması:**  
   Bash  
   \# RHEL tabanlı sistemler için:  
   $ sudo dnf install microcode\_ctl \[cite: 23\]

   \# Ubuntu/Debian tabanlı sistemler için:  
   $ sudo apt update && sudo apt install intel-microcode amd64-microcode

2. **Dracut / Initramfs Güncellemesi:** RHEL ve Fedora tabanlı sistemlerde dracut kullanılarak erken mikrokod yükleme yapılandırması yeniden oluşturulur22:  
   Bash  
   $ sudo dracut \--force \--add-drivers "microcode"

3. **Yüklemenin Doğrulanması:** Sistem yeniden başlatıldıktan sonra mikrokodun başarıyla erken aşamada yüklenip yüklenmediği ve güncel revizyon seviyesi kontrol edilir22:  
   Bash  
   $ dmesg | grep \-i microcode  
   \[    0.000000\] microcode: microcode updated early to 0xf8, date \= 2023-08-30 \[cite: 22\]  
   \[    0.000000\] microcode: CPU0 microcode updated to revision 0xf8, date \= 2023-08-30

### **Çekirdek Seviyesinde İzolasyon ve Hafıza Koruma Stratejileri**

Yazılım seviyesindeki en kritik defansif önlemler, işletim sistemi çekirdeğinin bellek haritalama ve spekülasyon bariyerlerini kullanmasıyla sağlanır:

#### **KPTI (Kernel Page Table Isolation)**

Meltdown zafiyetini tamamen ortadan kaldıran çekirdek düzeyinde bir izolasyon mimarisidir13. Klasik mimaride, performans amacıyla kullanıcı süreçlerinin sayfa tablolarında (Page Tables) çekirdek bellek alanları da haritalanır ve sadece donanımsal erişim bitleri ile korunurdu13. KPTI, kullanıcı modu (User Space) ve çekirdek modu (Kernel Space) için tamamen ayrı iki farklı sayfa tablosu seti tanımlar13. Kullanıcı modundayken çekirdeğe ait bellek haritasının neredeyse tamamı sayfa tablosundan kaldırılır; sadece kesintileri (interrupt) ve sistem çağrılarını (syscall) karşılayacak çok küçük bir "trambolin" kod alanı haritalı bırakılır13. Bu durum, her sistem çağrısında ve kesintide sayfa tablosu geçişi (CR3 kaydedicisinin yeniden yüklenmesi) yapılmasını zorunlu kılarak TLB (Translation Lookaside Buffer) önbelleğinin temizlenmesine ve sistem performansının %5 ila %30 oranında düşmesine yol açar13.

#### **Retpoline (Return Trampoline)**

Spectre Variant 2 saldırılarına karşı derleyici (GCC, Clang) seviyesinde uygulanan dolaylı dallanma izolasyonudur13. Retpoline, dolaylı atlama (jmp %rax) veya dolaylı çağrı (call %rax) talimatlarını, işlemcinin dallanma tahmincisini sonsuz bir spekülasyon döngüsüne sokan güvenli bir geri dönüş (return) mekanizmasıyla değiştirir14:

Kod snippet'i  
; Klasik Dolaylı Dallanma (Zayıf)  
jmp     \*%rax

; Retpoline Yapısı (Güvenli)  
call    .setup\_trampoline  
.speculative\_loop:  
    pause  
    jmp     .speculative\_loop   ; BPU spekülatif olarak bu döngüde kalır  
.setup\_trampoline:  
    mov     %rax, (%rsp)        ; Hedef adres yığına (stack) yazılır  
    ret                         ; Gerçek yürütme birimi adresi çekerek atlar

#### **IBRS, STIBP ve SSBD Mekanizmaları**

Mikrokod güncellemeleriyle işlemciye kazandırılan donanımsal kontrol bitleridir13:

* **IBRS (Indirect Branch Restricted Speculation):** Çekirdek moduna geçildiğinde dolaylı dallanma tahminlerinin kullanıcı modundaki geçmişten etkilenmesini engeller13.  
* **STIBP (Single Thread Indirect Branch Predictors):** Aynı fiziksel çekirdek üzerindeki iki farklı Hyper-Threading iş parçacığının (SMT) birbirinin dallanma tahminlerini sabote etmesini / zehirlemesini önler26.  
* **SSBD (Speculative Store Bypass Disable):** Spectre Variant 4'e karşı koruma sağlamak üzere, CPU'nun önceki yazma işlemleri tamamlanmadan spekülatif okuma yapmasını donanımsal olarak durdurur13.

### **Sanallaştırma Altyapılarında (VMware ESXi, Proxmox) Hipervizör İzolasyonu**

Bulut ve veri merkezi altyapılarında, farklı kiracılara (tenants) ait sanal makinelerin (VM) aynı fiziksel işlemciyi paylaşması, mikro-mimari yan kanal saldırılarının etkisini en üst düzeye çıkarır12. Bir saldırgan, kiraladığı sanal makine üzerinden geçici yürütme zafiyetlerini tetikleyerek aynı fiziksel çekirdeği kullanan diğer bir sanal makinenin veya doğrudan hipervizörün (host) bellek içeriğini sızdırabilir12.

#### **Proxmox VE (KVM / QEMU) Sıkılaştırma Parametreleri**

Proxmox üzerinde koşan sanal makinelerin güvenliğini sağlamak için işlemci tipi olarak "host" seçilmeli veya zafiyet mitigasyon bitlerini sanal makineye aktaran işlemci bayrakları (CPU flags) aktif edilmelidir26. /etc/pve/qemu-server/\<VMID\>.conf dosyasına şu satırlar eklenerek sanal makine bazında donanımsal koruma bitleri zorlanmalıdır:

Ini, TOML  
\# Proxmox CPU Güvenlik Bayrakları Entegrasyonu  
cpu: host,flags\=+ibrs;+stibp;+ssbd;+pdpe1gb;+md-clear;+spec-ctrl

Ayrıca, yüksek risk taşıyan finansal veya hassas veri işleyen sanal makinelerin, diğer sanal makinelerle aynı fiziksel çekirdeği paylaşmasını engellemek amacıyla **vCPU Affinity** (çekirdek sabitleme) uygulanmalı ve her sanal makineye ayrılmış fiziksel çekirdekler (Core Pinning) tanımlanmalıdır.

## **Uluslararası Standartlar ve Türkiye'deki Yasal Mevzuat Entegrasyonu**

Fortune 500 ölçeğindeki bir siber güvenlik mimarisi tasarlanırken, donanımsal ve mikro-mimari sıkılaştırma süreçleri yalnızca teknik bir gereksinim olarak değil, uluslararası standartlar ve Türkiye'de yürürlükte olan yasal mevzuatlar çerçevesinde ele alınmalıdır27.

### **KVKK (Kişisel Verilerin Korunması Kanunu) Uyum Süreçleri**

6698 Sayılı KVKK'nın **12\. Maddesi**, veri sorumlusuna "kişisel verilerin hukuka aykırı olarak erişilmesini önlemek" ve "veri güvenliğini sağlamak için her türlü teknik ve idari tedbirleri almak" yükümlülüğünü yükler27.

* *Çapraz VM Sızıntısı Riski:* Sanallaştırılmış bir veri merkezinde koşan bir e-ticaret uygulamasında, müşterilerin kredi kartı veya kimlik bilgileri (PII) işlenirken; yan kanallara karşı yamalanmamış bir hipervizör nedeniyle aynı fiziksel donanımı paylaşan başka bir sanal makineden bu verilerin sızdırılması teknik tedbir eksikliği olarak kabul edilir12.  
* *KVKK Teknik Tedbirler Rehberi:* Kişisel Verileri Koruma Kurumu (KVKK) tarafından yayınlanan teknik tedbirler rehberinde yer alan "Yazılım ve Donanımların Güncel Tutulması" ve "Erişim Yetki ve Kontrollerinin Sınırlandırılması" maddeleri gereğince, sunucu donanımlarının BIOS/UEFI güncellemelerinin yapılması ve işlemci mikrokod seviyelerinin en güncel durumda tutulması yasal bir zorunluluktur27.

### **BDDK Bilgi Sistemleri Yönetmeliği ve Finansal Sıkılaştırma**

Bankacılık Düzenleme ve Denetleme Kurumu (BDDK) tarafından bankalar ve finansal kuruluşlar için yayımlanan **"Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik"**, donanımsal seviyede çok sıkı güvenlik denetimleri getirmektedir28:

* *Sürekli Güvenlik Testleri (Madde 23):* Yönetmelik, zafiyet analizlerinin periyodik olmaktan çıkarılıp sürekli ve otomatik sistemlerle yapılmasını şart koşar29. Bu bağlamda, SOC ekiplerinin tüm sunucu altyapısındaki mikro-mimari zafiyet durumlarını sürekli olarak taraması ve raporlaması gerekmektedir29.  
* *Bilgi Sistemleri Güvenliği ve Donanım Sıkılaştırma:* Yönetmeliğin ilgili maddeleri uyarınca, kritik bankacılık verilerini işleyen (Core Banking) bare-metal sistemlerin, donanım seviyesindeki zafiyetlere (Meltdown, Spectre, Retbleed vb.) karşı en üst düzey izolasyon parametreleriyle (örneğin SMT/Hyper-Threading kapatılarak ve KPTI aktif edilerek) çalıştırılması denetim listelerinde (auditing check-lists) kritik bir kontrol noktasıdır13.

### **5651 Sayılı Kanun ve Log Bütünlüğü İlişkisi**

5651 Sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Kanunu, kurumsal yer sağlayıcılar ve erişim sağlayıcılar için trafik verilerinin (log) bütünlüğünü, zaman damgasıyla imzalanarak en az iki yıl saklanmasını zorunlu tutar28.

* *Çekirdek Bellek Manipülasyonu Tehdidi:* Saldırganlar, Meltdown veya Retbleed gibi zafiyetleri kullanarak çekirdek (kernel) seviyesindeki belleği manipüle edebilir, log üreten servislerin bellek alanlarına sızarak log kayıtlarını üreten fonksiyonları bypass edebilirler13. Bu durum, 5651 loglarının yasal geçerliliğini ve adli bilişim (forensics) süreçlerindeki delil niteliğini tamamen sarsabilir28.  
* *Çekirdek İzolasyonunun Önemi:* Bu nedenle, loglama yapan ana sunucuların çekirdek düzeyinde izole edilmesi, üretilen adli delillerin bütünlüğü açısından dolaylı ama son derece kritik bir yasal zorunluluktur28.

## **Kurumsal SOC İzleme ve Olay Müdahale (Blue Team) Operasyonu**

Mavi takım ve SOC (Security Operations Center) analistleri için, donanımsal zafiyetlerin tespit edilmesi ve bu zafiyetlerin istismar girişimlerinin izlenmesi karmaşık bir süreçtir; çünkü bu saldırılar geleneksel imza tabanlı IDS/IPS veya Antivirüs yazılımları tarafından tespit edilebilecek tipik dosya veya ağ hareketleri üretmezler32.

                     \+---------------------------------------+  
                     |  Fiziksel Sunucu (Bare-Metal / VM)    |  
                     \+---------------------------------------+  
                                         |  
                                         v  
                     \+---------------------------------------+  
                     |   Auditd Kuralları (Sistem Çağrıları) |  
                     |   \- sysfs zafiyet dizini izlenir      |  
                     \+---------------------------------------+  
                                         |  
                                         v  
                     \+---------------------------------------+  
                     |  Wazuh Agent (Syscollector / Command) |  
                     |  \- JSON formatında log üretir          |  
                     \+---------------------------------------+  
                                         | (Şifreli Aktarım / TLS)  
                                         v  
                     \+---------------------------------------+  
                     |            Wazuh Manager              |  
                     |  \- Özel dekoderler çalışır            |  
                     |  \- Seviye 12 kritik kurallar tetiklenir|  
                     \+---------------------------------------+  
                                         |  
                                         v  
                     \+---------------------------------------+  
                     |        SOC Alarm Konsolu / SIEM       |  
                     |  \- Otomatik Olay Müdahale tetiklenir  |  
                     \+---------------------------------------+

### **Linux Auditd Yapılandırması ile Sistem Çağrıları ve Sınır Kontrolü**

Saldırganlar, hedef sistemde zafiyet taraması yapmak amacıyla ilk olarak CPU zafiyet dosyalarını okumaya veya çekirdek modüllerini değiştirmeye çalışırlar21. **Auditd** (Linux Audit Framework) kullanılarak, hem /sys/devices/system/cpu/vulnerabilities/ dizinine yapılan yetkisiz erişimler hem de çekirdek modülü yükleme teşebbüsleri gerçek zamanlı izlenebilir25.  
/etc/audit/rules.d/audit.rules dosyasına eklenecek kurumsal denetim kuralları32:

# **CPU Zafiyet Durumunun Okunmasını İzle (Keşif Aşamasını Tespit)**

\-w /sys/devices/system/cpu/vulnerabilities/ \-p r \-k cpu\_vulnerability\_recon32

# **Çekirdek Modülü Yükleme ve Kaldırma İşlemlerini İzle (Zafiyet İstismar Girişimleri)**

\-a always,exit \-F arch=b64 \-S init\_module \-S finit\_module \-S delete\_module \-k kernel\_modules\_change32

# **Sistem Çağrısı (Syscall) Seviyesinde KPTI Bypass Girişimlerini İzleme (Örnek)**

\-a always,exit \-F arch=b64 \-S kexec\_load \-k kernel\_manipulation  
Sistemde kurallar aktif edildikten sonra, auditd servisi yeniden başlatılır ve loglar üretilmeye başlar32:

Bash  
$ sudo service auditd restart

### **Wazuh Entegrasyonu: Ajan İzleme, Özel Dekoder ve Alarm Kuralları**

SOC merkezlerinde, binlerce sunucunun donanımsal zafiyet durumunu anlık olarak konsolide etmek için açık kaynaklı XDR/SIEM platformu olan **Wazuh** kullanılabilir31.

#### **1\. Adım: Wazuh Ajan Teşhis Betiği (/var/ossec/bin/check\_cpu\_vulnerabilities.sh)**

Bu betik, sunucudaki tüm CPU zafiyetlerini ve bunlara karşı uygulanan aktif mitigasyon yöntemlerini okuyarak tek satırlık, parse edilmeye uygun bir JSON logu üretir35.

Bash  
\#\!/bin/bash  
\# Wazuh CPU Donanımsal Güvenlik Durumu Tarama Betiği

VULN\_DIR="/sys/devices/system/cpu/vulnerabilities"  
LOG\_FILE="/var/log/cpu\_security\_audit.log"

if \[ \-d "$VULN\_DIR" \]; then  
    \# JSON başlangıcı  
    JSON="{\\"event\_type\\":\\"cpu\_security\_audit\\", \\"hostname\\":\\"$(hostname)\\", \\"scan\_time\\":\\"$(date \-Iseconds)\\""  
      
    for file in "$VULN\_DIR"/\*; do  
        vulnerability=$(basename "$file")  
        \# sysfs dosyasındaki mitigasyon metnini oku ve kaçış karakterlerini temizle  
        mitigation\_status=$(cat "$file" | sed 's/"/\\\\"/g')  
        JSON="$JSON, \\"$vulnerability\\":\\"$mitigation\_status\\""  
    done  
      
    JSON="$JSON}"  
    echo "$JSON" \>\> "$LOG\_FILE"  
fi

#### **2\. Adım: Wazuh Ajan Yapılandırması (/var/ossec/etc/ossec.conf)**

Yazılan betiğin her gün otomatik olarak tetiklenmesi ve üretilen JSON logunun Wazuh Manager'a aktarılması sağlanır33:

XML  
\<ossec\_config\>  
  \<\!-- Betiğin Belirli Zaman Aralıklarında Çalıştırılması \--\>  
  \<wodle name\="command"\>  
    \<disabled\>no\</disabled\>  
    \<tag\>cpu\_vulnerability\_scanner\</tag\>  
    \<command\>/bin/bash /var/ossec/bin/check\_cpu\_vulnerabilities.sh\</command\>  
    \<interval\>24h\</interval\>  
    \<run\_on\_start\>yes\</run\_on\_start\>  
  \</wodle\>

  \<\!-- Üretilen Log Dosyasının İzlenmesi \--\>  
  \<localfile\>  
    \<log\_format\>json\</log\_format\>  
    \<location\>/var/log/cpu\_security\_audit.log\</location\>  
  \</localfile\>  
\</ossec\_config\>

#### **3\. Adım: Wazuh Manager Özel Dekoder Yapılandırması (/var/ossec/etc/decoders/local\_cpu\_decoder.xml)**

Wazuh Manager tarafında, ajandan gelen JSON loglarını parse edecek dekoder tanımlanır31:

XML  
\<decoder name\="cpu\_security\_audit\_decoder"\>  
  \<parent\>json\</parent\>  
  \<use\_fields\>yes\</use\_fields\>  
  \<json\_key\>event\_type\</json\_key\>  
  \<match\>^cpu\_security\_audit$\</match\>  
\</decoder\>

#### **4\. Adım: Wazuh Manager Alarm Kuralları (/var/ossec/etc/rules/local\_cpu\_rules.xml)**

Gelen veriler içerisinde "Vulnerable" (Yamalanmamış / Savunmasız) veya "Mitigation: No microcode" (Mikrokod eksik) ifadeleri geçtiğinde SOC analistlerinin ekranına düşecek **Kritik Seviye 12** alarmları kurgulanır32:

XML  
\<group name\="cpu,hardware,vulnerability,mitigation\_failure"\>  
    
  \<\!-- Temel Denetim Kuralı \--\>  
  \<rule id\="200500" level\="3"\>  
    \<decoded\_as\>json\</decoded\_as\>  
    \<field name\="event\_type"\>cpu\_security\_audit\</field\>  
    \<description\>CPU donanımsal güvenlik denetim verisi alındı.\</description\>  
  \</rule\>

  \<\!-- Meltdown Zafiyeti Alarmsal Durumu \--\>  
  \<rule id\="200501" level\="12"\>  
    \<if\_sid\>200500\</if\_sid\>  
    \<field name\="meltdown" type\="pcre2"\>(?i)vulnerable\</field\>  
    \<description\>KRİTİK ALARM: Sunucu Meltdown (CVE-2017-5754) zafiyetine karşı korumasız\!\</description\>  
    \<mitigation\>Kernel parametrelerinde 'pti=on' (Kernel Page Table Isolation) aktif olduğunu ve çekirdeğin güncel olduğunu doğrulayın.\</mitigation\>  
  \</rule\>

  \<\!-- Downfall (Gather Data Sampling) Zafiyeti Alarmsal Durumu \--\>  
  \<rule id\="200502" level\="12"\>  
    \<if\_sid\>200500\</if\_sid\>  
    \<field name\="gather\_data\_sampling" type\="pcre2"\>(?i)vulnerable|no microcode\</field\>  
    \<description\>KRİTİK ALARM: Sunucu Downfall (CVE-2022-40982) zafiyetine karşı korumasız\! Gelişmiş AVX sızıntısı aktif.\</description\>  
    \<mitigation\>En son CPU üretici mikrokod güncellemelerini (intel-microcode) sunucuya yükleyin.\</mitigation\>  
  \</rule\>

  \<\!-- Retbleed Zafiyeti Alarmsal Durumu \--\>  
  \<rule id\="200503" level\="12"\>  
    \<if\_sid\>200500\</if\_sid\>  
    \<field name\="retbleed" type\="pcre2"\>(?i)vulnerable\</field\>  
    \<description\>KRİTİK ALARM: Sunucu Retbleed (CVE-2022-29901) zafiyetine karşı korumasız\! Retpoline koruması eksik.\</description\>  
    \<mitigation\>Sistem açılışında 'retpoline=auto' parametresini etkinleştirin ve Linux çekirdeğini güncelleyin.\</mitigation\>  
  \</rule\>

  \<\!-- Inception Zafiyeti Alarmsal Durumu (AMD) \--\>  
  \<rule id\="200504" level\="12"\>  
    \<if\_sid\>200500\</if\_sid\>  
    \<field name\="spec\_rstack\_overflow" type\="pcre2"\>(?i)vulnerable\</field\>  
    \<description\>KRİTİK ALARM: AMD İşlemcili Sunucuda Inception / SRSO (CVE-2023-20569) zafiyeti aktif\!\</description\>  
    \<mitigation\>İlgili AMD BIOS/AGESA donanım yazılımı güncellemesini uygulayın ve çekirdek yamalarını kontrol edin.\</mitigation\>  
  \</rule\>  
\</group\>

## **Sonuç ve Altyapı Mimarları İçin Stratejik Tavsiyeler**

Siber tehditlerin donanım seviyesine inmesi, bilgi güvenliği yaklaşımlarında paradigmal bir değişimi zorunlu kılmaktadır. Fiziksel yan kanal analizleri ve mikro-mimari geçici yürütme zafiyetleri, yazılımsal sınırların (sandbox, hypervisor yalıtımı vb.) tek başına kurumsal veri güvenliğini garanti edemeyeceğini açıkça göstermiştir1.  
Fortune 500 ölçeğinde bir altyapı tasarlayan ve SOC süreçlerini yöneten kıdemli güvenlik profesyonellerinin aşağıdaki stratejik adımları uzun vadeli donanımsal sıkılaştırma politikası olarak benimsemesi elzemdir:

* **Donanımsal Yaşam Döngüsü ve Yama Yönetimi:** Sunucu altyapısında yer alan donanımların BIOS, UEFI ve mikrokod güncellemeleri, tıpkı işletim sistemi yamaları gibi merkezi bir envanter üzerinden (örneğin Wazuh XDR veya Ansible otomasyonu ile) takip edilmeli ve "Early Loading" standartları kurumsal sunucu imajlarına entegre edilmelidir22.  
* **Ağ Topolojisi ve Sanallaştırma İzolasyonu:** Yüksek düzeyde hassas veri işleyen (core banking, müşteri kişisel verileri \- PII, gizli Ar-Ge projeleri) veritabanı ve uygulama sunucuları, genel kullanıma açık sanal sunucularla aynı fiziksel host donanımlarını paylaşmamalıdır26. Bu sunucularda Hyper-Threading (SMT) kapatılmalı ve vCPU Affinity ile çekirdek seviyesinde tam fiziksel izolasyon sağlanmalıdır26.  
* **Regülasyon ve Standartlara Tam Uyum:** Türkiye'de KVKK ve BDDK'nın getirdiği teknik ve idari tedbir yükümlülüklerini karşılamak amacıyla, sızma testleri ve zafiyet taraması süreçlerine donanımsal/mikro-mimari zafiyet kontrolleri de eklenmeli; tarama sonuçları otomatik olarak SOC alarm mekanizmalarıyla ilişkilendirilmelidir27.  
* **Sıfır Güven (Zero-Trust) Donanım Yaklaşımı:** Kurum bünyesinde geliştirilen özel yazılımlarda ve API'lerde, kriptografik işlemler yürütülürken donanım sızıntılarını en aza indirecek sabit zamanlı (constant-time) algoritmalar ve donanımsal maskeleme mekanizmaları tercih edilmeli, DevSecOps pipeline süreçlerinde bu standartlar otomatik kod analizi (SAST) araçlarıyla denetlenmelidir29.

Mikro-mimari yan kanallara karşı yürütülen savunma operasyonları, sistem performansından belirli düzeyde ödün vermeyi gerektirse de, kurumsal verilerin gizliliğinin korunması ve yasal yaptırımların (KVKK idari para cezaları, BDDK uyumsuzluk cezaları) engellenmesi açısından bu ödünlerin verilmesi kaçınılmazdır13. Kurumsal savunma derinliği, donanımın fiziksel sınırlarından başlayıp en üst katmandaki bulut servislerine kadar uzanan bir bütünlük içerisinde ele alınmalıdır.

#### **Alıntılanan çalışmalar**

1. On Second-Order Differential Power Analysis\* \- Eindhoven University of Technology, [https://berry.win.tue.nl/papers/ches05hodpa.pdf](https://berry.win.tue.nl/papers/ches05hodpa.pdf)  
2. On power analysis attacks against hardware stream ciphers \- Griffith Research Online, [https://research-repository.griffith.edu.au/server/api/core/bitstreams/9405217d-6aef-4b54-a1fe-0392b04a92d5/content](https://research-repository.griffith.edu.au/server/api/core/bitstreams/9405217d-6aef-4b54-a1fe-0392b04a92d5/content)  
3. Circuit Deobfuscation from Power Side-Channels using Pseudo-Boolean SAT, [https://personal.utdallas.edu/\~kaveh.shamsi/publications/ICCAD21.pdf](https://personal.utdallas.edu/~kaveh.shamsi/publications/ICCAD21.pdf)  
4. Differential Power Analysis of HMAC SHA-2 in the Hamming Weight Model \- ResearchGate, [https://www.researchgate.net/publication/278769032\_Differential\_Power\_Analysis\_of\_HMAC\_SHA-2\_in\_the\_Hamming\_Weight\_Model](https://www.researchgate.net/publication/278769032_Differential_Power_Analysis_of_HMAC_SHA-2_in_the_Hamming_Weight_Model)  
5. Differential Power Analysis Attack on FPGA Implementation of AES \- George Mason University, [https://cryptography.gmu.edu/team/download.php?docid=2082](https://cryptography.gmu.edu/team/download.php?docid=2082)  
6. Differential Power Analysis Side-Channel Attacks in Cryptography \- WPI, [https://users.wpi.edu/\~martin/MQP/hnathpettengill.pdf](https://users.wpi.edu/~martin/MQP/hnathpettengill.pdf)  
7. What are the three levels of TEMPEST testing? \- EE World Online, [https://www.eeworldonline.com/what-are-the-three-levels-of-tempest-testing/](https://www.eeworldonline.com/what-are-the-three-levels-of-tempest-testing/)  
8. US and NATO Tempest standards \- industrial monitor, [https://www.interelectronix.com/tempest.html](https://www.interelectronix.com/tempest.html)  
9. TEMPEST Classification Levels Explained | MAJR Products, [https://www.majr.com/a-quick-guide-to-tempest-levels/](https://www.majr.com/a-quick-guide-to-tempest-levels/)  
10. What Is TEMPEST? Understanding Secure Display Standards | AG Neovo Global, [https://www.agneovo.com/global/insight/what-is-tempest-understanding-secure-display-standards](https://www.agneovo.com/global/insight/what-is-tempest-understanding-secure-display-standards)  
11. TEMPEST MEASUREMENT SYSTEMS ELECTRONIC WARFARE EQUIPMENT \- Intriple, [https://www.intriple.eu/documents/Intriple%202023.pdf](https://www.intriple.eu/documents/Intriple%202023.pdf)  
12. Downfall (security vulnerability) \- Wikipedia, [https://en.wikipedia.org/wiki/Downfall\_(security\_vulnerability)](https://en.wikipedia.org/wiki/Downfall_\(security_vulnerability\))  
13. Reptar, Downfall, Zenbleed, ZombieLoad, RIDL, Fallout, Foreshadow, Spectre, Meltdown vulnerability/mitigation checker for Linux & BSD \- GitHub, [https://github.com/speed47/spectre-meltdown-checker](https://github.com/speed47/spectre-meltdown-checker)  
14. Retbleed: Arbitrary Speculative Code Execution with Return Instructions, [https://comsec.ethz.ch/research/microarch/retbleed/](https://comsec.ethz.ch/research/microarch/retbleed/)  
15. Retbleed \- Wikipedia, [https://en.wikipedia.org/wiki/Retbleed](https://en.wikipedia.org/wiki/Retbleed)  
16. Collide+Power, Downfall, and Inception: New Side-Channel Attacks Affecting Modern CPUs, [https://thehackernews.com/2023/08/collidepower-downfall-and-inception-new.html](https://thehackernews.com/2023/08/collidepower-downfall-and-inception-new.html)  
17. Downfall attacks can gather passwords, encryption keys from Intel processors, [https://www.helpnetsecurity.com/2023/08/09/downfall-cve-2022-40982/](https://www.helpnetsecurity.com/2023/08/09/downfall-cve-2022-40982/)  
18. Leveraging Observability Data for Downfall and Inception Vulnerability Analysis \- Riverbed, [https://www.riverbed.com/blogs/downfall-and-inception-observability/](https://www.riverbed.com/blogs/downfall-and-inception-observability/)  
19. GitHub \- a13xp0p0v/kernel-hardening-checker: A tool for checking the security hardening options of the Linux kernel, [https://github.com/a13xp0p0v/kernel-hardening-checker/](https://github.com/a13xp0p0v/kernel-hardening-checker/)  
20. CVE-2022-29901 Detail \- NVD, [https://nvd.nist.gov/vuln/detail/cve-2022-29901](https://nvd.nist.gov/vuln/detail/cve-2022-29901)  
21. CVE-2026-23012: Linux Kernel Use-After-Free Vulnerability \- SentinelOne, [https://www.sentinelone.com/vulnerability-database/cve-2026-23012/](https://www.sentinelone.com/vulnerability-database/cve-2026-23012/)  
22. Load Intel microcode using pre-compiled EFI stub · Issue \#175 · zbm-dev/zfsbootmenu, [https://github.com/zbm-dev/zfsbootmenu/issues/175](https://github.com/zbm-dev/zfsbootmenu/issues/175)  
23. Amd-Ucode in the kernel : r/linuxquestions \- Reddit, [https://www.reddit.com/r/linuxquestions/comments/oj85ma/amducode\_in\_the\_kernel/](https://www.reddit.com/r/linuxquestions/comments/oj85ma/amducode_in_the_kernel/)  
24. Arch boot process \- ArchWiki, [https://wiki.archlinux.org/title/Arch\_boot\_process](https://wiki.archlinux.org/title/Arch_boot_process)  
25. Kernel don't recognize my CPU (microcode is not loaded) \- Unix & Linux Stack Exchange, [https://unix.stackexchange.com/questions/799513/kernel-dont-recognize-my-cpu-microcode-is-not-loaded](https://unix.stackexchange.com/questions/799513/kernel-dont-recognize-my-cpu-microcode-is-not-loaded)  
26. Better CPU vulnerability mitigation configuration \- LWN.net, [https://lwn.net/Articles/1013640/](https://lwn.net/Articles/1013640/)  
27. kişisel vERİLERİN KORUNMASI ve siber güvenlik \- KVKK, [https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/9a224548-1876-4065-aba8-24a0acb5bff6.pdf](https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/9a224548-1876-4065-aba8-24a0acb5bff6.pdf)  
28. Türkiye'de Uyulması Gereken Siber Güvenlik Regülasyonları \- ELFANET, [https://elfanet.com.tr/tr/main/article/turkiyede-uyulmasi-gereken-siber-guvenlik-reg/162](https://elfanet.com.tr/tr/main/article/turkiyede-uyulmasi-gereken-siber-guvenlik-reg/162)  
29. Bankacılıkta Siber Güvenlik Standartları: BDDK Yönetmeliği Ne Getiriyor?, [https://bilginc.com/tr/blog/bankacilikta-siber-guvenlik-standartlari-bddk-yonetmeligi-ne-getiriyor-6284/](https://bilginc.com/tr/blog/bankacilikta-siber-guvenlik-standartlari-bddk-yonetmeligi-ne-getiriyor-6284/)  
30. Sızma Testleri \- Sibertim, [https://sibertim.com/sizma-testleri/](https://sibertim.com/sizma-testleri/)  
31. How it works \- Vulnerability detection · Wazuh documentation, [https://documentation.wazuh.com/current/user-manual/capabilities/vulnerability-detection/how-it-works.html](https://documentation.wazuh.com/current/user-manual/capabilities/vulnerability-detection/how-it-works.html)  
32. Linux Kernel Monitoring with Wazuh | by @mjvmst \- Medium, [https://medium.com/@mjvmst/linux-kernel-monitoring-with-wazuh-2339da316b10](https://medium.com/@mjvmst/linux-kernel-monitoring-with-wazuh-2339da316b10)  
33. Useful Wazuh Rules and Capabilities for Threat Detection | by Ismael Barrantes \- Medium, [https://medium.com/@ismapersonal97/useful-wazuh-rules-and-capabilities-for-threat-detection-e2cc0debabde](https://medium.com/@ismapersonal97/useful-wazuh-rules-and-capabilities-for-threat-detection-e2cc0debabde)  
34. Detecting defense evasion techniques with Wazuh, [https://wazuh.com/blog/detecting-defense-evasion-techniques-with-wazuh/](https://wazuh.com/blog/detecting-defense-evasion-techniques-with-wazuh/)  
35. Processor MMIO Stale Data Vulnerabilities \- The Linux Kernel documentation, [https://docs.kernel.org/admin-guide/hw-vuln/processor\_mmio\_stale\_data.html](https://docs.kernel.org/admin-guide/hw-vuln/processor_mmio_stale_data.html)  
36. OIN Tables \- Open Invention Network, [https://openinventionnetwork.com/linux-system-definition/](https://openinventionnetwork.com/linux-system-definition/)  
37. quot \- RealTechTalk (RTT), [https://realtechtalk.com/tags/quot/](https://realtechtalk.com/tags/quot/)  
38. Wazuh rules for weak Ubuntu servers? \- Reddit, [https://www.reddit.com/r/Wazuh/comments/1r7t3id/wazuh\_rules\_for\_weak\_ubuntu\_servers/](https://www.reddit.com/r/Wazuh/comments/1r7t3id/wazuh_rules_for_weak_ubuntu_servers/)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAaCAYAAACO5M0mAAAAw0lEQVR4Xu3RPwtBURzG8Z9BUUomMwPZlKwmi4EUE96HssriDSibF2EyMCozdovJxmLhezp/Opxu3VV56tPtPue5dzkiv5U0BlhijvLnsU4WG0yRQRUn9PyRyhgH5LxuiDPytlCHarSyhUkdd3RsUcFNwmEND8y+i6ih69t4+YVJMGxJzGFQRPVBEdUXcfULEzuc2ELdxA5rpGxJmniap8sIFxTMe0L0de5FX69LEgts0TWjo+g7D6L+UkIfDdEf/xMvb7M7LHVni9rlAAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAaCAYAAACO5M0mAAAAVklEQVR4XmNgGJpAAYgj0AVhQBOIs4B4HxD/BeKFqNIIAFIYAMRWQPyEAY9CGJAE4ocMowpxANopXArEjGhyYODCAIk6UDz/h+IvQHwJiHWR1I0CCgEAejIbyUtdBmMAAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAABT0lEQVR4Xu2UMSiFURiGX8UglispRd0iJWVgtjFalIndYrDpSgwUmRhkkTKx2qVbBoPBrgwmk9Fgwfv6zrmd//P3/9di0P/UM9zz3vN9557vdIGKv6Cf3tHPxBc6TYfog8se6dj3TmDZZVe0J2Qt1mHhqg/IBixb8AGZpDe07tZbLME2q4EnFtZ3UjroJp1z6xnmYZtVJKVOn5DfdIIe0C63nmGWftDzZE0n2qWH+Fm4k+7BiheiYb0hW1hr+7C7VeE0m6ENWPNCYuFr2GT1847oaJLFwr30hA6Hz4UM0mfahG3UQNZC5ptqiCshKyUWvoed8owOhGycvsKajtBjWPO2qMGKqvg2XUyy2PSWbqHkeXl0gibsZVzS7iSLhTXAC5Q8L4/uTnf4Dpt4Smyqe9Z9/xpN/RT2RlNi4R208bzy0Gn0p5THFO3zixUV/5kvPHJHJwRaJnYAAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAaCAYAAAANIPQdAAADBklEQVR4Xu2XS6hNURjHP0V5Jo9ISGTgMTAQUiaEpEhKEUYSA1EmSnciiTKREFI3SkkykVKUgzJgJkUhhwFFDISB9/931l7a5ztrn9c9HQbnV//uvd+391p3fa+9t1mPHo0YIo32xg7C2uzxz+AfOCMt9I4OwtoXrY1ALpXeS79z+ihtlcZLd6SfOd9n6ZI0gpszBksnpZ052xzpuVWv+0iaIs2XXjvfXWlc5U6zg853IrPDFum0tZnRc9Ivabl3WLDh65cGOR+skEqWjvB5C/eudHbWIStfpQXOB6ulq9JYZx8mXZPWO3tDxkgPpbI0udpVYZ+FiG72Dgub3pB2eUfGIQv3rnH2eMjv0hLnI0tkb66zRzZK9y0d1EJmSx+kKxZKLw9/Y8fPdR5K75mlfRAD5CO/SPqS+XwAqIy9lq4amGGhFXxw6kKG2Ix/yENmyxYyTcY9O6R70ijvyMDv1yb79BXl7w850kJ/T8jZPMyDW9J+76jHcemHtE6a5LTBQk9xTQp6DhXBAfwh2Wd3ZvM+Ap5qCw97Uu5F2a4i9iOlc0E66/TSivuRqJcs9F0R8ZAMNmCCnsp++gAweckw6zaCe0rW3LUD6sd4yFSZR+hZAhizvc1CJiEfADLSZ6Efm4E9i1qohtiPNLqnUT+2ckiCNctCpuhJiI8mAsAkPWy1gS6CPV9IE70jBVFMjXHAhq+oH5s5JJPwrYWH/TELUzUSA3BZOmLFj4wUTZfrQJ6PEMs59lsKhtcr6Zt01KoHRTwk2TzgfI1gDjBh829eSfKl5MtkqHRd+iTNc748ZJnruD4F5URZvZFmOl8MAM/Zqc5Xj/giUVRhFegFNiVLUe+kTRam3k0LkY8+fmfR4dzsWCs9tvCem6JeSXPIsoX30VagAh9Y2LsrTJeeWrqngQpZbOmywkePxkHULKz3xMLeXYHS4auBd81Weqpd4n6oG/v9hYf4bWttOrYLfc3AmeYd3YAPWh4FLX0ZtAhfJ/1W+7LfVZZJe7yxg2yXVnljjx49/n/+APWAtHixuZA2AAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAACb0lEQVR4Xu2WP0hXURTHT2igZIkYhlQE0SJJUtkg2CA0CGJBLUltDs3pEDT9IByNsEGJIAxCAheHCEpMaCho0UFwCarBoCghRIhA/X497/C7v+N97/1+oOHw+8AHf5x73/O8e8/9I1Jl/9EID/qgowY2wQO+Ya/pg6OSnyATG4Z3k99l0wO/w83A3/BH8nsNPoJH7IGA8/AdbPENKfAjnsMbvqEcnsJ/sNvFL4gm+wY2BPF6OANvBrGQNvgJXnbxdvgBnnTxTA7D9/AzPObamNQ83IBXgngvXJSd/Y078JdooiG1cAoWXDwTvoQvmxZ9QQgLmyMRji5r6Bkcs04Otr8QfY7Pe25JeluUq6L1NuQbQBf8Cz+KrlZyFC7B69YpgTXGET0Ll0U/olVKS4N0wK/wkounwpGI1R8TmoU/YWcQvwi/JX9DzsEJ0XrlB/PvE9EBCGHSTNB/YBSrMY4Sp4UvpJNwRXQUTljnhH7RlX/axY20+jPsf95z8ShWf2/hKdGvM+uCfiFMkCPAPp68+iOW4IiLR7H6u+8bMshK0OozbQERS5BbWy58kd9C8shKkIW/LrpS0yh7im3/+wKPlzZlwsXE+uRq9LD+/kixbQBeKzZvY1tXbNcogbv6Knwl6fUWg3XLBGOjzhmx+mNNj0txezK46HgoxJ7fhscPp8ifv4NhpwxsijhaHo4uV/hL0Y3f7wCEfVinlcxaxRQkfvIQzgYvELxixSiIHnexZ3eNM3BBtEwqoRnOyc5LxJ7A+91Dqex+d1v0tMm7P+4K/CePpfz7HUf9teji+W8cgg8k/dgzuKXx5IgtmipV9hVbc71zKBDAOO4AAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,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>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAaCAYAAABhJqYYAAAAyElEQVR4Xu3RPwtBURjH8UeYKIsYZVHKZlJGKQPFqqwWC5u8AJPFzDvwBsRwR6syKZtsRpOB73POPTq8ABa/+nQ7v/PcP6cr8s8vEkURdSQ+9t5SwA5T9BDggpE3Y5LDEWNEwq6LB1puSBPDAmfkvV6feBX7Wa/oQsuV2Bs1etV1gGTYmTTFvq7vdVmcMPc6Ezfc8Loq7uiggqHbKIn9DHeQFLa4oYwJauGeOf0AeyyxQRsHrDFD3A276EEyYn+MRgfS3vqfL+UJVZseVC2CkTYAAAAASUVORK5CYII=>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAaCAYAAABl03YlAAAA00lEQVR4Xu3RvQtBURjH8SOUwUAGySAGZbaymSX+CcnMZJLsdoPJYrXb2UkpLCajgfLyfa5zcu6ZbBa/+nTvPc/TfZ7uVepnCSCBmFsw6eGGJwZOzZcK7qi6BTtdnJBzCyYRzLFA1F/6JI09hsijhpTdIJF9Hjigjya2qNtNso8s3bDOJsoaH8LMPtCRJnmzN9bsM7Ia4lhih6QcFHFR/vkFnDFV70le01FfTdq4omwOstigpJ8zWKOj3v/Ti9y0sMJYN8ibgqbBjnx1WTLsFv75Li9k8SOwWiXhbwAAAABJRU5ErkJggg==>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAaCAYAAAD/nKG4AAAC6klEQVR4Xu2YT8gNURjGH/kTIUSklD/ZyEriSygJoVhYKbZCKVIoO0mxsRCFlA+hpCykLJRbygJLorCwYSEWioUFnseZ8zXz3jMzZ7h3vrk1v3rqdt6558555/03F2hpGRTGU9PsYoPRveqea0c/fIlaaQ0NRvd6E5EPeBb1hPqd0k9qQ+qaCdRtc83RlF2Moy5Q+8x6U1hGbbKLCbupi6gQYdvgnHDNGhLGUreo4whvupHqIPyExlCnqGFqYtbUV4bgHupzuLMdy5pHmETdp3ZYQx7Lqe/UXbgoseiHb8BtbNHaQ+qANSQoel9R56yhz+ieFQRb4c6W5yyxk3qK8MPuYhH1CS46pmRNf50xDBfKIeTot9QSa0hYQf2gdllDTfhAKHKWzv+OWmMNIeZQ76kP1FxjU06fgEunEHvh6t5Usz4dbq8j1DdqHTUbLqXrJMZZk6lHcGWmFEVTh/qCbIQsoO7BHTIP1Tlb69QUDlNXqc+J9PkMNTN1XR3EOEvoDOqMeUExguqU6pXSRWkj9CUdbru/KIB3sgp4iNGqV2linSV7B91lKMgVuK6hoijWUucR7n4e76y8G6lSr9QplbYxUnSWRkBCFWepc86whhC6WM5S+qgraLZanLmimzJnqZ7Z1M5jC3U5UqfhamIMVZyluq36XYrmDDlLKSWH6aBlFDlLT141IPpp9YkqzuogMg01tf+iXsPNVDFf8rVOKWzx9crblDpnEbdvL4l1loJEHVGdsRS/qTRkbEWoeD9A93Su1FMKql4pyg6hwpTcQ/y5isYCnwXRjUiFU3PWScQXT6Fu+RIuktJomL1OvYCLvv2otu//ovfUj8i+036FmwntKKQy8QzFnT+Dut5qRIZhioXUG4SnXzlH6Vd36lVlFVz50Vn6ihyiaNSYUWfk9Ap//1Uz6p+ZRz2mllrDAKDxSIV9vjX0E/2RdgeRb+4NQaVHr2Gj0XiwnjpoFxvMHmqzXWxpaWkZdP4AXGaOKDdYQM4AAAAASUVORK5CYII=>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAACeElEQVR4Xu2WT4hOURiHX/mTyQjRSKkZspGFJCSUhN3MYrZj7U8pIpQVaRY2FmKhlEGIpmY2o9nNlCVLEyULKwvZKBYW+D3OPXXve88991Mzk8X31NP3dd77nXvu+77n3M+sy//HcrnGDybolSv94ELDwu7JvT6QoF+OF59ZNshX8nfJn/Jo6ZoV8pm75nIpDsvkXXnajec4JCets4zboIUbP/SBgqXyqbxqoYyeY3LW0jdbIkflmFXLyvgdeaU01shu+d1C2smGZ598LHt8wMLYtDzrAwVUaU7e9gGxX76TW3zAs1V+tpAFGrgMCxiTu9x4hIf7ILf7QMEe+UOO+IBYJ19bOlZho/woP8lNLnZCXrdQkhSnLPTxaje+1sJcl+Q3eVj2WWiXMvflE2ue/y9kbVZ+tWomBuSEhYmboG9977KxLsgH8ksh32/K9aXrgB5MPWAF+o7+oxSUBHgiJhyKFyWID8YmSJHrvwgbNFW5GqSancwPgGOAXZbatZG4wKadmOu/CPej/9kHWbgJC6Q0HBecfdsqV9RpWyD96dvGwwLp0Z0+4Bm2sEDKxSKZvI3cAmkRmp9dym5touMS8/b4ZeFc4szzx02K2Lu0hyf2X4yxOW5ZfV7KzwnCSZIlHtbIwdwpbIApq7/8KSvlZQFk87yFKnl4O6V+X4MUk+ob1nImOdjlby1krAwH/CP5xkKWz1h93liBVIvUYLcekKt8oAVeU+/lQR+wsCBK68sa4be0FK+8BYNFkHWOJJ+hNnhLPbf8UTYvbJYzcocPZCCzL62z/4/zAjd6Yem/XB4yfU1eLL4vGkfkOT+Y4Lg8aYu8uC5d/pU/Xvhr9F1iVYkAAAAASUVORK5CYII=>

[image11]: <data:image/png;base64,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>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAyElEQVR4Xu3RPwtBURjH8aMosvgXicFgVQYZWZWS5DUwM7DZZbZYZDJ5DyYlJQMLr8TE9+kc17m3W8pk8KvPcJ/nufc8navUzyXoLfilghua3oadKo5oYYuOq2sSxQx585zAFDln4psEUEAbNYRcXRMpzrFGFxNsELGHJA3sEFf6euSFC1L2kGSMO3pIomT4pogRznhgaDdlB9nlirSpyfEH9F9DkozSf2Kp3ouXcVL6BCdyJQOlv7DACnvU7SE7YWQR8zb++ZgnJkIZ1WKR6kwAAAAASUVORK5CYII=>

[image13]: <data:image/png;base64,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>

[image14]: <data:image/png;base64,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>

[image15]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAaCAYAAAAqjnX1AAAChklEQVR4Xu2WTYiNURjH/0IRQkRiIV+l5CMRRUoWJAuklIWyINlgypTVSDaKhBXKQtJMNhYolFlISomFbMhHYmchFigz//8854xzn/c973tvM4PF/dWve+c89z2fz3PeAdr8/0ymY32jQ3H97p+wlZ5Bc5M8R3f4QBkb6Rv6oUk32WOlrKAP6QwfyDCN3qGrfSBlFL1Iu+nc8Le4Qn/TzeHv0XQDfUdXhTbPeHqL7vaBwD56HzaxFI1xj0507YPMpD1oXPlU+hQ2odlJuzq5RuckbSka7AWsT884ejuo7ynKy8fIL27g6I64tmX0K71JxyTtmvx5Oilpi+gErsLiZWhhH+kpHwio3Y83yC66yLXtoX2007XrmPbjT0qkTKcvUSwC7f4s2Di/YLulnfZFtYW+R/6UCigf1eE6H6hgJayo9Jmyl16ib+kPeh222/PTH8Ge007n8r2BXD7WsY1+pvN8ANX5GNFuayfVTy1a0XdU5AdZCju29NjVuQbRYJ66fBRxkkq1WnL5mHIQlpspVZNUcf4MnzniJI/6gCdWaKv5KKomeRz5VIg0fdx1+TiBnqCXUXznalGfYNdXSszHB7DnVdWnUaxiLUDPq8orqcvH7XQ5vUvXuthi2CD+SOPVFPNRV9RhFK8xVbVezeqngO7IZ/QLLBej3+grNF4pC+ka2KtNu56i+7CXHnDtmox2/zXs1avv/o4UqoVeVLwaW6ErWEYX8qcwJViGfn8D+X5bQkf3CLabh2D/UKQsoM/pEtdeh557Ej6HjF6LKoCTdL2LRTroWRRzLkdMh2Ph+7CgfFKV5lD8At3pAxm0WKWIvy1GHC1Cu111Lwpdc6r6vz7BNm2GQj/cXXhOkeefZgAAAABJRU5ErkJggg==>

[image16]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAaCAYAAAB7GkaWAAAAnElEQVR4XmNgGHjADcSFQKyGLgECRUD8H4jT0SVAQASIHYCYFU0cN2AGYmMgtoGy4QBkxAQgrgXi00DciyzpCsQ1QMwHxAeAeCUDku5MINYHYksg/gbEETAJZNAAxE+AWBFNHOyFq0A8BYgZ0eQYPID4FxC7ALE6A8QUOJjBAHGpMAMklECOhAM/Boh9G4C4gAGL0TxALIAuOBIAANr5E9moi3bFAAAAAElFTkSuQmCC>

[image17]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAaCAYAAACD+r1hAAAAzUlEQVR4Xu3RsQtBURTH8SspokRSVslgYDAbKMrfIKtZFgMjo1JmyYBRFrNdKYPJ5A+wKJOB73n3ek96ZX2DX32G0zn39u55Sv3jtfhRRA1h+JBFFaGPOStRLNFBD0eMMcQUawTfw3LTACVTp3DBCnlcsUPE9FUcfeXcUMANDQTQRM70XCODd6Xf8zPyeTPsEfvq2ZEHT9BCAielD8lhiWxJenbqeGKEMh7omp5cNkfG1FbSOGCBDdo4K73OLSrOqBPZUFLpn+dW/+OxvAD0xRzAnkbIJQAAAABJRU5ErkJggg==>

[image18]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAaCAYAAAC6nQw6AAABF0lEQVR4Xu3SMUtCURjG8TcyKChDdAlpDYIghwgEF7eECBHXoCkRnIpwMKLP0Fa4uLcVEdEg+Akc2tWxiKAhiJb+rx4Pr/c63vE+8MN7n8M913vOEYkTJ7okUcKmu1/CHsqmW8AWqu5X72eyiltcYYRjPOAULXzgEHe4xAkGOJdADlDDLr7xinU3toEh3rHvOk0HXZn8CZ+6TCap4A9FM7aNTzRNpw93cY+E6X1u8IaM6Y7wi4LpppM3TOezhp6E36KTD5A1nU7whR3T+Uzfcma6eZ+wgmdHry9kdu38+sz7BDu5brvuom6OHou2BBb8Gn2kTafn6gd50+lDT3jBI3JmbJxlCcxMFpGS8MHTXjdED22cOJHmH2DYLhijlc5IAAAAAElFTkSuQmCC>

[image19]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAAaCAYAAACjFuKcAAADtklEQVR4Xu2XXaiNWRjHHzEiymfkq5hEDSFEaka+Z+aC5GiYJtyIiPKRFKbOhAtjNONjXMjM5GKQFAojSS5cKKUopYwMKY2appQLhPn/9nqXvc7a7/46jbOdrH/92vtda71va63nWc/zLLOkpKT/Rx+JvqJj3JHU9vpGPBMT4o6kttdhcU30iDuS2la9xHWxOe5IanuNFXfF6LijHamrWCvuiCfiubgnfhUjg3HvvcgXx0SnuKOdaLC4IL42V4CQ9/ZnfcPMrW216JC1NUx+cnNEN3MTGiFmm/Mm9IP4IvvfKPURc83NjTkyV+Y8PByUI3LcETE+aAuNgagUeW4K2vLEXn1q7n3+M4+hYn7Qhvxcp5r7dk1iokfFBrFV3BQ/iZ3iF3HKnEHGZb+NEovFezmhV8VBcVysEffFtLcjS7VSLIraYmMgNpCQ1S9qD0WY+07cEs3iZ7FdLBV/Zn2cMIqdxeKMuCi6WxVh1R3is+x5gHhgbtFjxD/iitXwoUC9zYWDh3XwbeHN8holDljRwygiiPdTxD7xRszL+mLhbBiOAiRUnjHQJvFl3Jipv9hr7q51SfwrJgX9nL7X5r7hwx2no6brABu3TXTJnknST815HwtfIj7J+hqpr6zoMAivo7JjgwlZy6z8qf3YnDEGmnM2z+fmTn7YBnjzxsKbpZoolpvLP4/ELituOnt4zkqdF8d5bG4edak9XOp8if2b1ZZsWcsNcSiC8EtVlde+vvBmec0SL7Jfr0HiL3Ph3csbiEhRzllyxcJYoPe41orvEHtjj6tEz8KbtYnNxWFwnFpEaCEc+dPvVS5MLTCXYyppi5V6O4Z5ZS3DJdcAQhl5raqIp0xohbk4eNtaehzVFH31iPA2Uyysg8mFN8uLiumEOcOxUeHpxeN+tPJJl1KcJBvfj/KMwdjvrXRsKO/t5AyqOa+8cIQRMAbfm2JVThyJiuS3R0wXL614w/blYLWy8V2LBbPwv80VFYQRigwMg5rM5b1KIYt8g8HCEjPPGIyjhK90l/L5Ii8chQbqLE5n7eQQ9rhi+MeKxNPfzZVg68zdskls58WM4tCGiU1uFpfNLY7y+48Mqj6qqdBD88Q38MrdVozdsTFY61lzm11JeDjePi1oIxRyk28O2pDfz5NilVV2mIKwKkfcX1bi5/dBPg/5KiV+rkW8w10D5yPUEdtxOmI9m4VhqS6riX0hp8YbSyTJu9yRD+uZ5wclNoxTQG6g5KUsHtJiRFJSUlJSUlJSUlJSa/Uf2PCp96zugH4AAAAASUVORK5CYII=>

[image20]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAZCAYAAACRiGY9AAABi0lEQVR4Xu2WzStEYRTGj1CUz4hkRfKxI0k2VlIUCStsydaGspUF/gCy80ewsaCUlDX2FqwoxcaG5+mdW3fOzJtz595pLN5f/ZrmnPv13N6PKxIIBMpFPVyBp/AQDuS3/w0jcFoXi9EML+EebIDD8BEuxQ+qIONwG97DH7iT3y4OD+IJrbHaKnyCnbFapWCoOTgLv8QQikEY6EzVx+AnnFf1NLTADVijG0ZGxRhqCL5JYajoAvuqngbO2xPYrRtGzKGiA32hdD0ti3BLF42YQ3GscvLphy9XqFp4AKd0w4A51IyUHqoKtsGuhA7CC3ErGoekFXMo38P76nE64JG4vS2pt/ADrsNqsWEO1QtfpfDhowvsqnoWcF4xWJNu/IE5FDfba3gO62J1jvnv3G+W9Il7gdzwk2IORdbgM+zJ/edc4dfFnZR2cx+8Lj/BJnTDSKLRwxXpGF7BBXGBHsR9LmVJu7j7cHQkYRO+iFvQIt/hjbh57YVvsR8uw0lxQbOGC0KjLgYCgUAg4OEXk25WgcU9r6IAAAAASUVORK5CYII=>

[image21]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAZCAYAAACRiGY9AAABm0lEQVR4Xu2WPyhFURzHf0JR/hUpUSQDg0kpMloMSjIoM8oiBiaTDNgsJCmD5GWWySRZGU2UMhkUk/z5fjvv5r7feffc93Dfe+l86tN7/c49t9/33u45R8Tj8SRNB5zUxRKgDs7DXbgCWzKHbXrgHDyH7/Agc7jotMNrOA2r4Ai8hf3hizQMNQYH4YOUVqgKuAdP0v8D1uAZrA7VssJXei/JhWqAM5LZXByd8BEuq/o4fIV9qm6RdCg+1R3YqgccDMMPsUONwk84peoWSYcifMILuuggaD4qlK5bFCJUJVwX8wZygU1naz6xUGWwUcy8fOyGp3BJ4j/0RcnefGKhmuGmmL0jXy/hs5hlulyiiWo+qm6Rb6ifwu+KwbihxjEE38RuPgjFezkpRKguMfev1wMRcKW8g1uqPgufxOyxToJQh2K+l7+G99yAA3rAAeeswiv5fhBcbFLwSBx7HlciniR4ROIrpS/wBvaGrvstTXAb1uiBGBiGC8uxmCPSPryAbeGLigUXhFpdzBHO5elhIv3rWlw8Ho/H8z/4AkonVjudyRm3AAAAAElFTkSuQmCC>

[image22]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAABG0lEQVR4Xu3TIUtDURjG8XeooEwUNmxahmVgUxDbkiytKDjQZhAMpo2hWEUEw5jBbLOY7DKMWzJYBEHBL7BgnPP/eO5113f3Ewwf+MF433POPfecO7OxyCxK2MR8VMtjIR7gM4VTvOIIh+jiEo8oDocOM4lr3CKbqOtJHbQt7GQkG3jHim+QE7R8Mc4ZPrDoG6SOii/GucEAx5hwvWXkXO03VQsTpY8H7GMuOSgtOtFzC5PiBeTJ0rc/Em1Tx36BnoXJB39GRNFAvUPGN0gZX2j4hlLAlYV79FnFJ3Z9Q9Ex32PaN8geXrDkG4ruT6uuu7q2r4PZcvWf6BO6Qw3P0W9dQRNv2LH0d7cZCysruo41bFv4Z6Rt/T9jlG+J/Ct4t2V5pAAAAABJRU5ErkJggg==>