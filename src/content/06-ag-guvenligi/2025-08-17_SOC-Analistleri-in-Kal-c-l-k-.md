# SOC Analistleri İçin Kalıcılık Sağlama Kapsamlı XDR Analiz Kılavuzu

---

### SOC Analistleri İçin Kalıcılık Sağlama Kapsamlı XDR Analiz Kılavuzu

![](https://cdn-images-1.medium.com/max/800/1*t3uzw3mQTB-z3Mm777G-RQ.png)

Siber güvenlik operasyonlarında, kalıcılık (persistence) bir saldırganın sistemde kalıcı bir ayak izi bırakmasını sağlayan en kritik aşamalardan biridir. Bu, saldırının ilk erişim vektöründen (örneğin, bir oltalama e-postası veya bir açık istismarı) sonraki uzun vadeli hedeflerine ulaşmasını mümkün kılar. Geleneksel antivirüs (AV) çözümlerinin veya sistemin yeniden başlatılmasının ötesinde, saldırganların sisteme sürekli erişimini garanti altına alır. Kalıcılık, tehdit aktörlerine bir dizi avantaj sağlar: Komuta ve Kontrol (C2) sunucularıyla iletişim kurmak için bir arka kapı oluşturma, geleneksel güvenlik kontrollerini atlatma ve ağ içinde ayrıcalık yükseltme ve yatay hareketliliği kolaylaştırma imkanı. Bu aşama, bir siber saldırının kısa süreli bir olaydan uzun soluklu bir sızma operasyonuna dönüşmesinde belirleyici rol oynar.

Bu rapor, MITRE ATT&CK bilgi tabanındaki belirli taktik ve tekniklere odaklanarak, bir SOC analistinin karşılaşabileceği Windows registry tabanlı kalıcılık mekanizmalarını derinlemesine incelemektedir. Özellikle `T1547: Boot or Logon Autostart Execution` ve `T1112: Modify Registry` gibi yaygın teknikler ele alınacak ve bu tekniklerin nasıl tespit edileceği detaylandırılacaktır.

---

### Bölüm 1: Windows Registry Üzerinden Kalıcılık Mekanizmaları

### 1.1. Otomatik Başlatma (Autostart) Registry Anahtarları: Temel Mekanizmalar

Windows, kullanıcı oturumu veya sistem başlatma sırasında belirli programları otomatik olarak çalıştırmak için registry anahtarlarını kullanır. Saldırganlar, bu meşru işlevi kendi zararlı yazılımlarını sistemde kalıcı kılmak için istismar ederler. Bu anahtarlara yapılan eklemeler, zararlı yazılımın sistem her başladığında veya bir kullanıcı oturum açtığında yeniden çalıştırılmasını sağlar.

* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`: Bu anahtar, yalnızca mevcut kullanıcı oturum açtığında otomatik olarak çalışan programları içerir.`RunOnce` anahtarı ise programın yalnızca bir kez çalıştırılmasını sağlar ve yeniden başlatmadan sonra otomatik olarak silinir.
* `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run`: Bu anahtar, bir kullanıcıdan bağımsız olarak, sistemdeki tüm kullanıcılar için otomatik çalışan programları barındırır. Bu anahtara değişiklik yapmak genellikle `SYSTEM` veya `Administrator` ayrıcalıkları gerektirir, bu da saldırganın sisteme daha derin bir erişim sağladığının bir göstergesi olabilir.

MITRE ATT&CK verilerine göre, `Registry Run Keys / Startup Folder` (T1547.001) tekniği, bilinen 54 tehdit grubunun en sık kullandığı kalıcılık yöntemidir. Bu tekniğin bu kadar yaygın kullanılmasının ana nedenlerinden biri, Windows'un meşru bir özelliği olması ve bu nedenle geleneksel güvenlik çözümleri tarafından kolayca gözden kaçırılabilmesidir. Bu durum, bir SOC analisti için tehdit avcılığına başlarken ilk kontrol edilmesi gereken yerin bu anahtarlar olduğunu açıkça ortaya koymaktadır. Zira saldırganların bu anahtarları kullanması, yüksek başarı oranı ve düşük algılama riski arayışlarının bir sonucudur. Bu nedenle, kalıcılık odaklı tespit kurallarının önceliklendirilmesi, bu alandaki anormalliklere odaklanmalıdır.

### 1.2. Diğer Kritik Kalıcılık Anahtarları ve Yolları

Kalıcılık sadece temel `Run` anahtarlarıyla sınırlı değildir. Saldırganlar, tespit edilme riskini azaltmak için daha az bilinen veya sisteme özgü anahtarları da hedef alabilir.

* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit`: Bu anahtar, kullanıcı oturum açma işlemi başlamadan önce çalıştırılan programı referans alır. Saldırganlar, sisteme giriş sırasında meşru `userinit.exe` dosyasından önce veya onun yerine kendi arka kapılarını çalıştırmak için bu anahtarı manipüle edebilirler.
* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders`: Bu anahtarlar, kullanıcıya özgü Windows kabuk klasörlerinin (örneğin, "Başlangıç" klasörü) konumunu belirler. Saldırganlar, bu anahtarları değiştirerek zararlı bir yürütülebilir dosyanın veya betiğin "Başlangıç" klasöründe çalışmasını sağlayabilir.
* `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run`: Grup İlkesi (Group Policy) ayarları aracılığıyla otomatik başlatma programları belirlemek için bu anahtar kullanılır. Saldırganlar, bu anahtarları istismar ederek kalıcılık elde edebilirler.
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Svchost`: Daha ileri düzey tehdit aktörleri, daha az bilinen sistem anahtarlarını da hedef alabilir. Örneğin, APT41, Cobalt Strike kalıcılığı için bu anahtarı modifiye etmiştir. Bu, saldırganların standart Run anahtarlarının ötesinde yaratıcı yollar aradığını gösterir.

### 1.3. Gerçek Dünya Örnekleri: Saldırgan Grupları ve Zararlı Yazılımların Kullanımı

MITRE ATT&CK verileri, farklı tehdit gruplarının ve zararlı yazılımların bu teknikleri nasıl kullandığına dair somut örnekler sunmaktadır.

* **Emotet Trojan:** Emotet, kalıcılık sağlamak için `%AppData%` yoluna bıraktığı zararlı DLL dosyasına işaret eden bir `Run` anahtarı ekler. Bu sayede her kullanıcı oturumu açıldığında otomatik olarak çalışır.
* **APT28 (Fancy Bear):** Bu gelişmiş kalıcılık tekniği, `Userinit` anahtarını manipüle ederek meşru işlemler başlamadan önce bir arka kapı yüklemesini sağlar. Bu durum, daha temel saldırıların ötesinde, sistem açılış zincirinin kritik bir noktasını hedefleyen sofistike bir yaklaşımı gösterir.
* **APT41:** APT41'in `Svchost` anahtarını kullanması, saldırganların Windows'un iç işleyişine derinlemesine hakim olduğunu ve standart güvenlik denetimlerinin ötesine geçebildiğini kanıtlamaktadır.

Aşağıdaki tablo, bir SOC analisti için hızlı bir başvuru kılavuzu niteliğindedir ve en sık karşılaşılan registry kalıcılık anahtarlarını, bunların etkilerini ve ilgili tehdit örneklerini özetlemektedir.

![](https://cdn-images-1.medium.com/max/800/1*EOdZ-x8gqkMWMCJo5HLhqg.png)

---

### Bölüm 2: Olay Kayıtları (Event Logs) Üzerinden Tespit ve Analiz

### 2.1. Windows Güvenlik Olay Günlükleri (Windows Security Event Logs)

Sistemdeki registry değişikliklerini izlemek için en temel kaynaklardan biri Windows’un yerel olay günlükleridir. Olay Kimliği (Event ID) 4657, bir registry değerinin değiştirildiğini, oluşturulduğunu veya silindiğini kaydeder. Bu olayın analizi, bir saldırının ayak izlerini ortaya çıkarmada kilit rol oynar. Ancak bu olay kimliğinin kaydedilebilmesi için ilgili registry anahtarları üzerinde denetim (auditing) politikasının önceden etkinleştirilmesi gerektiği unutulmamalıdır.

Olay Kimliği 4657, bir analistin incelemesi gereken dört ana veri alanını içerir :

* `Subject` **(Konu):** Bu alan, değişikliği yapan kullanıcı hesabına ait bilgileri (`Security ID`, `Account Name`, `Logon ID`) sağlar. Sistemin normalde bu tür bir değişikliği yapmaması gereken bir kullanıcı hesabının (`Guest` veya normal bir kullanıcı) bu eylemi gerçekleştirmesi şüpheli bir durumdur.
* `Object` **(Nesne):** Değişikliğin yapıldığı tam konumu (`Object Name` - anahtar yolu) ve değerin adını (`Object Value Name`) gösterir. Bu alanlarda `Run`, `RunOnce` gibi bilinen kalıcılık anahtarlarının aranması kritiktir.
* `Process Information` **(Süreç Bilgisi):** Değişikliği gerçekleştiren yürütülebilir dosyanın adı ve ID'si (`Process Name`, `Process ID`) bu alanda yer alır. `powershell.exe`, `cmd.exe`, `reg.exe` gibi sistem yöneticisi araçlarının bu anahtarlarda değişiklik yapması dikkatle incelenmelidir, çünkü bunlar kötü niyetli betikler tarafından sıkça kullanılır.
* `Change Information` **(Değişiklik Bilgisi):** `New Value` ve `Old Value` alanları, değişikliğin içeriğini, yani çalıştırılacak dosya yolunu veya komut satırı argümanlarını gösterir. Bu alanda `C:\Users\Public\`, `C:\ProgramData\` gibi alışılmadık veya genel olarak yazılabilir dizinlere işaret eden dosya yollarının bulunması, kuvvetli bir tehdit göstergesidir.

### 2.2. Sysmon Olay Günlükleri (Sysmon Event Logs)

Sysmon (System Monitor), Windows Event Log’larına kıyasla çok daha zengin ve detaylı telemetri verisi sunan bir araçtır. Sysmon, özellikle registry değişikliklerini izlemek için iki önemli olay kimliği sağlar. Bu olaylar, Windows’un yerel loglarının ötesinde, olayın kök nedenini anlamaya yardımcı olan ek bağlamsal bilgiler içerir.

* `Event ID 12` **(RegistryEvent - Object create and delete):** Bu olay, registry anahtarlarının ve değerlerinin oluşturulmasını veya silinmesini izler. Bir saldırganın, kalıcılık sağlamak için yeni bir `Run` anahtarı oluşturması bu olayla tespit edilebilir.
* `Event ID 13` **(RegistryEvent - Value Set):** Bu olay, mevcut registry değerlerinin içeriğindeki değişiklikleri kaydeder. Bir saldırganın, daha önce var olan bir `Run` anahtarının değerini değiştirmesi bu olayla tespit edilebilir.

Bu Sysmon olayları, bir analist için `ParentImage` ve `ParentCommandLine` gibi kritik alanlar içerir. Bu alanlar, değişikliği yapan ana sürecin ne olduğunu ve nasıl başlatıldığını gösterir. Bu, saldırının kaynağına doğru iz sürmek ve saldırı zincirini yeniden oluşturmak için hayati önem taşır. Örneğin, bir PowerShell betiğinin bir registry değişikliğine neden olduğu tespit edildiğinde, `ParentImage` alanı bu betiğin hangi ana süreç (`explorer.exe` gibi) tarafından başlatıldığını gösterebilir.

![](https://cdn-images-1.medium.com/max/800/1*VR-A4gThQLNfdXDYlpGuwQ.png)

---

### Bölüm 3: EDR/XDR Çözümleriyle Derinlemesine Analiz ve Tehdit Avcılığı

### 3.1. EDR’nin Registry Kalıcılığı Tespitindeki Rolü

EDR (Endpoint Detection and Response) çözümleri, uç noktalardaki (sunucular, masaüstü bilgisayarlar) faaliyetleri sürekli olarak izleyerek ve kaydederek registry, dosya sistemi, süreç ve ağ bağlantıları gibi kaynaklardan zengin telemetri verileri toplar. EDR platformları, bu veriler üzerinde davranışsal analiz, makine öğrenimi ve kural tabanlı tespit motorları çalıştırarak potansiyel tehditleri belirler. Örneğin, alışılmadık bir konumdan çalışan bir yürütülebilir dosyanın kritik bir registry anahtarını değiştirmeye çalışması, bir EDR çözümü için yüksek öncelikli bir alarm tetikleyebilir.

### 3.2. XDR ile Kapsamlı Analiz ve Korelasyon

XDR (Extended Detection and Response), EDR’nin yeteneklerini daha geniş bir veri yelpazesiyle (ağ trafiği, e-posta, bulut, kimlik bilgileri) birleştirerek çok daha kapsamlı bir görünürlük sağlar. Bir saldırı, asla tek bir eylemden ibaret değildir; bir dizi bağlantılı olayın birleşiminden oluşur. Bu, bir saldırı zincirinin (kill chain) parçası olan olayları ayrı ayrı ele almak yerine, bunları bir bütün olarak değerlendirmenin gerekliliğini ortaya koyar.

Bir XDR platformu, bir registry değişikliğini diğer olaylarla ilişkilendirerek saldırının tam hikayesini ortaya çıkarabilir. Olayları tek başına değerlendirmek yerine, bir EDR/XDR çözümünün tüm bu verileri korelasyon kuralları aracılığıyla birleştirmesi, saldırının bütününü anlamak için temel bir adımdır. Bu bağlantısal analizin akışı şu şekilde işler:

1. **İlk Erişim Vektörü:** Bir saldırı, genellikle bir oltalama e-postası veya zararlı bir web sitesinden dosya indirme ile başlar. XDR, e-posta veya ağ telemetrisi üzerinden bu ilk adımı tespit edebilir.
2. **Dosya Oluşturma:** Zararlı dosya (`.exe` veya betik) geçici bir dizine (`C:\Users\Public\` gibi) bırakılır. EDR, Sysmon Event ID 11 gibi loglarla bu dosya oluşturma olayını kaydeder.
3. **Kalıcılık Sağlama:** Bu zararlı süreç, kalıcılık sağlamak için bir `Run` anahtarını değiştirir veya yeni bir anahtar ekler. EDR, Sysmon Event ID 12/13 veya Windows Event ID 4657 ile bu registry değişikliğini tespit eder.
4. **Komuta ve Kontrol (C2) İletişimi:** Kalıcılık sağlandıktan sonra, zararlı süreç bir C2 sunucusuyla iletişim kurar. EDR/XDR, bu anormal ağ trafiğini (örneğin, bilinmeyen bir IP adresine veya alışılmadık bir porta bağlantı) Sysmon Event ID 3 veya diğer ağ telemetri loglarıyla belirler.

Bu korelasyon zinciri, tek bir registry değişikliği alarmını, bir siber saldırının tüm adımlarını içeren yüksek güvenilirlikte bir olaya dönüştürür.

### 3.3. Registry Değişikliklerini Diğer IOC’lerle Korelasyonu

Bir registry değişikliğinin gerçek bir tehdit mi yoksa meşru bir işlem mi olduğunu ayırt etmek için diğer göstergelerle korelasyon hayati önem taşır.

* **Ağ Bağlantılarıyla Korelasyon:** Şüpheli bir registry değişikliği yapan sürecin, anormal ağ trafiği oluşturup oluşturmadığı kontrol edilmelidir. Bilinmeyen IP adreslerine veya alışılmadık portlara giden trafik, C2 kanallarının veya veri sızdırma girişimlerinin bir işareti olabilir.
* **Dosya ve Süreç Olaylarıyla Korelasyon:** `Registry modification` alarmı tetiklendiğinde, eş zamanlı `Process creation` (Sysmon Event ID 1) ve `File creation` (Sysmon Event ID 11) olayları incelenmelidir. Bu, zararlı dosyanın sisteme ilk nasıl girdiğini (örneğin, bir PowerShell betiği tarafından bırakılmış olabilir) ve hangi ana sürecin bu değişikliği yaptığını anlamaya yardımcı olur.

Birçok meşru yazılım (örneğin, güncellemeler, antivirüsler) da `Run` anahtarlarını değiştirebilir, bu da yanlış pozitiflere neden olur. Ancak, bir EDR/XDR platformunda, bir sürecin `Run` anahtarını değiştirmesi tek başına şüpheli olmayabilir. Bu olay, aynı sürecin `C:\Users\Public\` gibi şüpheli bir dizine yeni bir dosya bırakması ve ardından bilinen kötü amaçlı bir IP adresine ağ bağlantısı kurması ile birleştiğinde, bu olaylar bir saldırının göstergesi olarak yüksek güvenilirlikte bir alarm oluşturur. Bu çoklu olay korelasyonu, yanlış pozitifleri azaltmanın ve gerçek tehditleri ortaya çıkarmanın anahtarıdır.

---

### Bölüm 4: Sınırlamalar, Dikkat Edilmesi Gerekenler ve İleri Düzey Teknikler

### 4.1. Yanlış Pozitifleri Yönetme: Legitim Süreçleri Ayırt Etme

Bir SOC analistinin karşılaşabileceği en büyük zorluklardan biri, meşru registry değişikliklerini kötü niyetli olanlardan ayırt etmektir. Birçok meşru yazılım (örneğin, güncellemeler, antivirüsler, yönetici betikleri) otomatik başlangıç anahtarlarını kullanır. Bu durumu yönetmek için analistler, meşru süreçlerin davranışsal özelliklerini anlamalı ve tespit kurallarında istisnalar tanımlamalıdır. Meşru yazılımlar genellikle `C:\Program Files\` gibi standart sistem dizinlerinden çalışır ve belirli dosya adlarına sahiptir. Bu yollara istisnalar eklemek, gürültüyü önemli ölçüde azaltabilir.

Proaktif bir yaklaşımla, `Get-PSAutorun` gibi araçlar kullanılarak sistemdeki otomatik başlangıç girdilerinin bir temel hattı (baseline) oluşturulabilir. Bu temel hat, periyodik olarak alınan yeni taramalarla karşılaştırılarak, sisteme yeni eklenen veya değiştirilen girdiler hızla tespit edilebilir.

### 4.2. Saldırganların Gizlenme Taktikleri

Saldırganlar, tespit edilmekten kaçınmak için çeşitli gizlenme taktikleri kullanır. Bir SOC analistinin bu teknikleri bilmesi, manuel kontrollerde gözden kaçabilecek tehditleri belirlemesi açısından önemlidir.

* `Null` **Karakterlerle Gizlenmiş Anahtarlar:** Saldırganlar, registry anahtarı adlarının başına bir `null` karakter (`\x00`) ekleyerek bazı standart Windows araçları (`Reg.exe`, `Regedit`) tarafından bu anahtarların görüntülenmesini engelleyebilir. Bu durum, analistin yalnızca Windows'un yerel araçlarına güvenmek yerine, Sysmon veya gelişmiş EDR çözümleri gibi derinlemesine telemetri sağlayan araçlara güvenmesi gerektiğini gösterir.
* **Sahte Dosya Yolları ve Süreç Adları:** Zararlı yazılımlar, kendilerini meşru sistem dosyaları gibi gösterebilirler. Örneğin, bir zararlı dosya `C:\Windows\System32\` gibi bir sistem dizinine yerleştirilebilir veya `WindowsUpdate` gibi meşru bir süreç adı kullanılabilir.

### 4.3. Registry Ötesi Kalıcılık Tekniklerine Kısa Bir Bakış

Bir SOC analistinin bakış açısı, yalnızca registry’ye odaklanmakla sınırlı kalmamalıdır. Bir kalıcılık avcılığı görevinde, bir tehdit aktörünün birden fazla yöntem kullanabileceği göz önünde bulundurulmalıdır.

* **Zamanlanmış Görevler (Scheduled Tasks):** Saldırganlar, `schtasks.exe` komutu veya Task Scheduler GUI'si aracılığıyla, periyodik olarak veya bir oturum açma gibi belirli olaylara bağlı olarak çalışan zararlı görevler oluşturabilirler. Bu görevler, bir kez kurşulup uzun süre tespit edilmeden kalabilir.
* **WMI Olay Abonelikleri (WMI Event Subscriptions):** WMI (Windows Management Instrumentation), bir olayın (örneğin, sistemin açılması veya bir kullanıcının oturum açması) ardından kod çalıştırmak için kullanılabilen güçlü bir sistem yönetim aracıdır. Saldırganlar, WMI olay filtreleri, tüketicileri (consumers) ve bağlayıcıları (bindings) oluşturarak sistemde kalıcı bir konum elde edebilirler.
* **Windows Hizmetleri:** Saldırganlar, `sc create` komutuyla yeni bir hizmet oluşturabilir veya mevcut bir hizmeti ele geçirerek zararlı kodlarını `SYSTEM` ayrıcalıklarıyla çalıştırabilirler.

---

### Sonuç ve Öneriler

Bir SOC analisti için, Windows registry kalıcılık mekanizmalarını anlamak ve tespit etmek, bir saldırı zincirini kırmanın ve bir sızmanın uzun vadeli etkilerini sınırlamanın temelidir. Bu raporun bulguları, kalıcılık avcılığının sadece teknik bilgiye değil, aynı zamanda olgusal korelasyon ve tehdit aktörlerinin davranışsal kalıplarını anlamaya dayandığını göstermektedir.

**SOC Analistleri İçin Anahtar Çıkarımlar:**

* En yaygın `Run` anahtarlarına odaklanın, ancak daha az bilinen anahtarları (örneğin, `Winlogon` ve `Svchost`) da göz ardı etmeyin. Saldırganlar, meşru sistem işlevlerini gizlenmek için kullanabilirler.
* Yalnızca Windows Event Log’larına güvenmeyin; Sysmon gibi zengin telemetri sağlayan araçları kullanın. Sysmon, değişikliği yapan ana süreci ve komut satırı argümanlarını belirleme konusunda benzersiz bir yetenek sunar.
* Yalnızca bir log kaydına odaklanmayın. EDR/XDR’ın korelasyon yeteneklerini kullanarak, bir registry değişikliğini bir saldırı zincirinin parçası olarak görün (registry değişikliği -> süreç oluşturma -> ağ bağlantısı).
* Saldırganların gizlenme taktiklerine karşı uyanık olun. `Null` karakterlerle gizlenmiş anahtarlar ve sahte süreç adları gibi teknikler, standart araçlarla gözden kaçabilir.
* Tehdit avcılığını sadece registry ile sınırlı tutmayın. Zamanlanmış Görevler, WMI Olay Abonelikleri ve Windows Hizmetleri gibi diğer kalıcılık mekanizmalarını da kontrol edin.

**Proaktif Savunma İçin Adımlar:**

* Kritik registry anahtarları için denetim (auditing) politikalarını etkinleştirin ve bu logları merkezi bir SIEM çözümüne iletin.
* Sistem genelinde otomatik başlatma noktalarının bir temel hattını oluşturarak anormal değişiklikleri daha hızlı tespit edin.
* En Az Ayrıcalık (Least Privilege) ilkesini uygulayarak, ayrıcalıklı olmayan kullanıcıların kritik registry anahtarlarında değişiklik yapmasını kısıtlayın.
* EDR/XDR çözümlerini doğru şekilde konfigüre edin ve bu platformların proaktif tehdit avcılığı yeteneklerinden tam olarak yararlanın. Bu adımlar, bir kuruluşun siber savunmasını güçlendirecek ve tehdit aktörlerinin sistemlerde kalıcı bir ayak izi bırakmasını zorlaştıracaktır.