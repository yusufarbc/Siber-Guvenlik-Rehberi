# Ağ Güvenliği ve Yönetimi VII: Active Directory

---

### Ağ Güvenliği ve Yönetimi VII: Active Directory

![](https://cdn-images-1.medium.com/max/800/1*xHCEWIgWsOG-PR1mgpcXvQ.png)

Active Directory’nin (AD) modern siber güvenlik ekosistemindeki merkezi rolünü ve neden birincil saldırı hedefi olduğunu detaylı bir şekilde incelemektedir. “Kimlik, yeni güvenlik çevresidir” paradigmasından yola çıkarak, bu çalışma, AD’yi bir güvenlik zafiyetinden bir savunma kalesine dönüştürmeyi amaçlayan kapsamlı bir strateji sunmaktadır. Rapor, Kerberoasting, Pass-the-Hash ve Golden Ticket gibi yaygın saldırı vektörlerini, Yönetimsel Katman Modeli (Tiered Model), Credential Guard ve Grup Yönetimli Hizmet Hesapları (gMSA) gibi gelişmiş savunma mekanizmalarını, hibrit kimlik altyapılarının güvenliğini ve sürekli izleme ile felaket kurtarma operasyonlarını teknik ayrıntılarıyla ele almaktadır. Bu kılavuz, güvenlik liderleri ve teknik uygulayıcılar için AD altyapılarının güvenliğini ve dayanıklılığını artırmaya yönelik eyleme geçirilebilir bir yol haritası sunarak son bulmaktadır.

---

### Active Directory Mimarisi ve Güvenlik Temelleri

### Giriş: Kimlik, Yeni Güvenlik Çevresi

Geleneksel ağ güvenliği yaklaşımları, ağ çevresini (perimeter) korumaya odaklanmaktaydı. Ancak bulut bilişim, mobilite ve hibrit çalışma modellerinin yaygınlaşmasıyla birlikte bu çevre belirsizleşmiştir. Günümüz siber güvenlik paradigmasında, kimlik (identity) birincil güvenlik sınırı olarak kabul edilmektedir. Bu yeni düzende, bir kuruluşun tüm kullanıcı, bilgisayar, uygulama ve kaynak kimliklerini yöneten merkezi otorite olan Active Directory, kelimenin tam anlamıyla “krallığın anahtarlarını” elinde tutmaktadır. AD, kimin kim olduğunu (kimlik doğrulama) ve kimin neye erişebileceğini (yetkilendirme) belirleyen temel mekanizmadır. Bu nedenle, Active Directory’nin güvenliği, artık sadece bir altyapı bileşeninin güvenliği değil, tüm kurumsal güvenliğin temel taşıdır ve bir ihlali, feci sonuçlara yol açabilir.

### Active Directory’nin Anatomisi: Mantıksal ve Fiziksel Bileşenler

Active Directory’nin gücü ve karmaşıklığı, hiyerarşik ve mantıksal yapısından kaynaklanır. Bu yapı, doğru yapılandırıldığında, sadece yönetim kolaylığı sağlamakla kalmaz, aynı zamanda doğal bir güvenlik katmanlaması da sunar.

#### Etki Alanları (Domains), Ağaçlar (Trees) ve Ormanlar (Forests): Güvenlik ve Yönetim Sınırları

AD’nin mantıksal yapısı üç ana katmandan oluşur: etki alanları, ağaçlar ve ormanlar.

* **Etki Alanı (Domain):** Birbirleriyle ilişkili kullanıcılar, bilgisayarlar ve diğer nesnelerden oluşan bir gruptur. Bir etki alanı, temel bir **yönetim sınırıdır**. Belirli bir etki alanındaki nesneler tek bir veritabanında saklanır ve birlikte yönetilir. Bu yapı, verilerin yalnızca ihtiyaç duyulan yerlere çoğaltılmasına (replikasyon) olanak tanıyarak AD’nin küresel ölçekte verimli çalışmasını sağlar.
* **Ağaç (Tree):** Ortak bir bitişik ad alanını paylaşan bir veya daha fazla etki alanının birleşimidir.
* **Orman (Forest):** Bir veya daha fazla ağaçtan oluşan en üst düzey AD yapısıdır. Bir orman, en temel **güvenlik sınırıdır**. Farklı ormanlardaki nesneler, yöneticiler arasında açıkça bir güven (trust) ilişkisi kurulmadıkça birbirleriyle etkileşime giremezler.

Bu mimari ayrım, bir saldırganın hareket alanını doğal olarak sınırlar. Bir etki alanının ele geçirilmesi, otomatik olarak tüm ormanın ele geçirildiği anlamına gelmez. Ormanlar arasındaki güvenlik sınırı, bir ihlalin yayılmasını önlemek için proaktif olarak kullanılabilecek en güçlü pasif savunma mekanizmalarından biridir.

#### Kuruluş Birimleri (Organizational Units — OUs): Yetki Devri ve Politika Uygulama

Kuruluş Birimleri (OU’lar), bir etki alanı içindeki nesneleri (kullanıcılar, gruplar, bilgisayarlar) mantıksal hiyerarşilere ayırmak için kullanılan kapsayıcılardır. OU’ların iki temel güvenlik işlevi vardır:

1. **Yetki Devri (Delegation of Authority):** OU’lar, yönetimsel görevlerin daha az ayrıcalıklı hesaplara devredilmesini sağlar. Örneğin, bir yardım masası ekibine yalnızca “Pazarlama” OU’sundaki kullanıcıların parolalarını sıfırlama yetkisi verilebilir. Bu, “en az ayrıcalık” ilkesinin uygulanmasını kolaylaştırır.
2. **Grup İlkesi Uygulaması:** Grup İlkesi Nesneleri (GPO’lar), belirli OU’lara bağlanarak o OU içindeki kullanıcılar ve bilgisayarlar için özel güvenlik ayarlarının uygulanmasını sağlar. Bu, farklı departmanlar veya sunucu türleri için farklı güvenlik politikaları oluşturmayı mümkün kılar.

#### Etki Alanı Denetleyicileri (DCs), Global Katalog (GC) ve Şema (Schema)

* **Etki Alanı Denetleyicileri (Domain Controllers — DCs):** AD DS hizmetini çalıştıran ve AD veritabanının (NTDS.dit dosyası) bir kopyasını barındıran sunuculardır. Ağdaki kimlik doğrulama isteklerine yanıt verirler ve dizinde yapılan değişiklikleri diğer DC’lere çoğaltırlar.
* **Global Katalog (Global Catalog — GC):** Kendi etki alanındaki tüm nesnelerin tam bir kopyasını ve ormandaki diğer tüm etki alanlarındaki tüm nesnelerin kısmi bir kopyasını içeren özel bir DC türüdür. Bu, kullanıcıların ve uygulamaların, nesnenin hangi etki alanında olduğunu bilmeden orman genelinde arama yapmasını sağlar.
* **Şema (Schema):** AD’de oluşturulabilecek her nesne sınıfının (örneğin, kullanıcı, bilgisayar) ve bu nesnelerin sahip olabileceği her özniteliğin (örneğin, telefon numarası, parola) resmi tanımlarını içeren kurallar bütünüdür.

### Temel Kimlik Doğrulama ve Yetkilendirme Protokolleri

AD’nin güvenliği, temelini oluşturan protokollere dayanır. Bu protokollerin nasıl çalıştığını ve zafiyetlerini anlamak, savunma stratejileri geliştirmek için kritiktir.

* **Kerberos:** Windows etki alanlarında varsayılan kimlik doğrulama protokolüdür. Bilet Verme Hizmeti (TGS) ve Bilet Verme Biletleri (TGT) gibi kavramlara dayanan, karşılıklı kimlik doğrulaması sağlayan güvenli bir mekanizma sunar. Güvenli kabul edilse de, Kerberoasting ve Golden Ticket gibi gelişmiş saldırılar bu protokolün özelliklerini kötüye kullanabilir.
* **NTLM (NT LAN Manager):** Kerberos’un kullanılamadığı durumlarda (örneğin, etki alanı denetleyicisine ulaşılamadığında veya eski sistemlerle iletişimde) kullanılan bir geri dönüş (fallback) protokolüdür. Challenge-response mekanizmasına dayanır ancak Pass-the-Hash gibi saldırılara karşı doğası gereği zayıftır. Modern ortamlarda kullanımı mümkün olduğunca kısıtlanmalıdır.
* **LDAP (Lightweight Directory Access Protocol):** AD dizinindeki nesneleri sorgulamak ve değiştirmek için kullanılan standart bir protokoldür. Güvenli yapılandırılmadığında (örneğin, LDAP imzalama zorunlu kılınmadığında), saldırganların ağ trafiğini dinleyerek veya değiştirerek hassas bilgiler elde etmesine olanak tanıyabilir.

### Grup İlkesi Nesneleri (GPOs): Merkezi Güvenlik Yönetiminin Gücü

Grup İlkesi Nesneleri (GPO’lar), AD’nin en güçlü güvenlik yönetimi araçlarından biridir. GPO’lar aracılığıyla yöneticiler, binlerce bilgisayar ve kullanıcı için güvenlik ayarlarını merkezi olarak yapılandırabilir ve zorunlu kılabilirler. Bu ayarlar arasında parola politikaları, hesap kilitleme politikaları, denetim ayarları, yazılım kısıtlamaları ve Windows Güvenlik Duvarı kuralları gibi kritik kontroller bulunur. GPO’ların OU’lara bağlanabilmesi, farklı risk seviyelerindeki varlıklar için farklı güvenlik temelleri (security baselines) oluşturulmasına olanak tanır. Bu, AD sıkılaştırmasının temelini oluşturur.

Bir saldırgan genellikle düşük yetkili bir kullanıcı hesabını ele geçirerek bir ağa sızar. Bu hesap, belirli bir OU içinde yer alır ve GPO’lar tarafından belirlenen kısıtlamalara tabidir. Saldırganın nihai hedefi, genellikle yanal hareket (lateral movement) yoluyla bir Etki Alanı Yöneticisi (Domain Admin) gibi Tier 0 seviyesinde bir hesaba ulaşmaktır. Eğer AD mimarisi ve GPO’lar “En Az Ayrıcalık İlkesi”ne göre doğru tasarlanmışsa, bu ilk ele geçirilen hesabın erişebileceği sistemler ve gerçekleştirebileceği eylemler son derece sınırlı olacaktır. Bu durum, saldırganı bir üst yönetimsel sınıra (örneğin, farklı bir OU’daki sunuculara veya doğrudan bir Etki Alanı Denetleyicisine) geçmek için ek zafiyetler aramaya zorlar. Dolayısıyla, iyi yapılandırılmış bir AD mimarisi, saldırıyı yavaşlatan, daha fazla iz bırakmasına neden olan ve tespit için güvenlik ekiplerine daha fazla fırsat tanıyan pasif bir savunma mekanizması işlevi görür. Aksine, kötü yapılandırılmış bir AD, saldırgan için hedefine giden düz bir otoban gibidir.

---

### Active Directory Saldırı Yüzeyi: Tehdit Vektörleri ve Teknikleri

Active Directory, merkezi doğası gereği saldırganlar için son derece cazip bir hedeftir. Bir saldırgan ağa sızdıktan sonra, genellikle AD’yi bir yol haritası olarak kullanarak ayrıcalıklarını yükseltmeye ve hedeflerine ulaşmaya çalışır.

### Keşif ve Numaralandırma (Reconnaissance and Enumeration)

Bir saldırganın ilk adımı, bulunduğu ortamı anlamaktır. AD, bu keşif aşaması için zengin bir bilgi kaynağıdır.

#### LDAP Keşfi ve PowerView

Saldırganlar, standart LDAP sorguları veya PowerView gibi PowerShell tabanlı araçlar kullanarak AD’yi sorgular. Bu sorgularla ayrıcalıklı kullanıcıların kimler olduğunu, hangi grupların (örneğin, Domain Admins) var olduğunu, bilgisayarların hangi işletim sistemlerini kullandığını ve kullanıcıların hangi sistemlerde oturum açtığını öğrenebilirler. Bu bilgiler, saldırının sonraki adımlarını planlamak için kullanılır.

#### BloodHound ile Saldırı Yollarının Haritalanması

BloodHound, modern AD saldırılarında devrim yaratmış bir araçtır. Hem saldırganlar (red team) hem de savunmacılar (blue team) tarafından kullanılır. BloodHound, AD’deki karmaşık izinleri ve ilişkileri (örneğin, kimin hangi bilgisayarda yerel yönetici olduğu, hangi grubun hangi nesne üzerinde hakları olduğu) toplar ve bu verileri bir graf veritabanına (Neo4j) aktarır.

* **Veri Toplama:** SharpHound gibi veri toplayıcılar, ağdaki sistemlerden oturum bilgileri, yerel yönetici grup üyelikleri ve ACL (Access Control List) bilgileri gibi verileri toplar.
* **Görselleştirme:** BloodHound, bu verileri kullanarak potansiyel ayrıcalık yükseltme ve yanal hareket yollarını görsel bir harita olarak sunar. Saldırganlar, “Domain Admins grubuna en kısa yol” gibi önceden tanımlanmış sorguları kullanarak, düşük yetkili bir hesaptan başlayarak etki alanı hakimiyetine giden en kolay yolu saniyeler içinde bulabilirler.

### Kimlik Bilgisi Hırsızlığı ve Kötüye Kullanımı (Credential Theft and Abuse)

Keşif aşamasından sonra saldırganlar, yanal hareket etmek ve ayrıcalıklarını artırmak için kimlik bilgilerini çalmaya odaklanır.

#### Parola Spreyleme (Password Spraying) ve Kaba Kuvvet (Brute Force)

Bu yöntemler en temel kimlik bilgisi saldırılarıdır. Kaba kuvvet saldırılarında, tek bir hesaba karşı binlerce parola denenirken, parola spreyi saldırılarında “Password123” veya “Winter2024” gibi az sayıda yaygın parola, çok sayıda kullanıcı hesabına karşı denenir. Parola spreyi, hesap kilitleme politikalarını tetikleme olasılığı daha düşük olduğu için daha gizli bir yöntemdir.

#### LLMNR/NBT-NS Zehirlenmesi ve Responder Aracı

Link-Local Multicast Name Resolution (LLMNR) ve NetBIOS Name Service (NBT-NS), bir ağda DNS sunucusu yanıt vermediğinde devreye giren eski ad çözümleme protokolleridir. Saldırganlar, Responder gibi araçları kullanarak bu protokollere yönelik ad çözümleme isteklerini dinler ve kendilerini istenen kaynak (örneğin, bir dosya sunucusu) gibi tanıtarak sahte yanıtlar gönderir. Kurbanın bilgisayarı bu sahte sunucuya bağlanmaya çalıştığında, kimlik doğrulama için NTLMv2 parolasının hash’ini gönderir ve saldırgan bu hash’i yakalar. Bu hash’ler daha sonra çevrimdışı olarak kırılabilir veya Pass-the-Hash saldırılarında kullanılabilir.

#### Teknik Derin Bakış: Pass-the-Hash (PtH) Saldırısı

Pass-the-Hash (PtH), bir saldırganın, bir kullanıcının düz metin parolasını bilmesine gerek kalmadan, yalnızca parolasının NTLM hash’ini kullanarak kimlik doğrulaması yapmasını sağlayan güçlü bir yanal hareket tekniğidir.

* **Mekanizma:** Bu saldırı, NTLM kimlik doğrulama protokolünün doğasından kaynaklanır. NTLM’de, parola hiçbir zaman ağ üzerinden düz metin olarak gönderilmez; bunun yerine hash’i kullanılır. Bir sunucu, bir kullanıcıdan kimlik doğrulaması istediğinde, kullanıcının hash’ini doğrular. Dolayısıyla, hash’e sahip olmak, parolaya sahip olmakla işlevsel olarak eşdeğerdir.
* **Yürütme:** Saldırganlar, bir makinede yönetici hakları elde ettikten sonra, Mimikatz gibi araçlar kullanarak Local Security Authority Subsystem Service (LSASS) belleğinden veya Güvenlik Hesapları Yöneticisi (SAM) veritabanından parola hash’lerini çalarlar. `sekurlsa::pth` gibi Mimikatz komutları, çalınan bu hash'i mevcut oturuma enjekte ederek saldırganın o kullanıcı kimliğiyle başka sistemlere erişmesini sağlar.
* **Etkisi:** PtH, saldırganların ağ içinde hızla yayılmasına olanak tanır, çünkü bir hash, parola değiştirilene kadar geçerliliğini korur.

### Kerberos Tabanlı Gelişmiş Saldırılar

Kerberos, NTLM’den daha güvenli olsa da, kendi zafiyetlerine sahiptir ve saldırganlar bu zafiyetleri sömürmek için gelişmiş teknikler geliştirmiştir.

#### Teknik Derin Bakış: Kerberoasting

Kerberoasting, özellikle hizmet hesaplarını (service accounts) hedef alan son derece gizli ve etkili bir saldırıdır.

* **Mekanizma:** Saldırı, Active Directory’deki Hizmet Asıl Adı (Service Principal Name — SPN) kaydına sahip kullanıcı veya bilgisayar hesaplarını hedefler. SPN’ler, bir hizmeti (örneğin, bir SQL sunucusu hizmeti) bir hesapla ilişkilendirir. Kerberos protokolü gereği, herhangi bir doğrulanmış etki alanı kullanıcısı, herhangi bir SPN için bir Kerberos hizmet bileti (TGS/ST) talep edebilir.
* **Yürütme:** Saldırgan, Rubeus gibi bir araç kullanarak hedef hizmet için bir hizmet bileti talep eder. Anahtar Dağıtım Merkezi (KDC), bu bileti hizmet hesabının NTLM parola hash’i ile şifreleyerek saldırgana gönderir. Saldırgan bu bileti alır ve ağdan çıkararak çevrimdışı bir ortamda Hashcat veya John the Ripper gibi araçlarla kaba kuvvet saldırısı uygular. Bu yöntem, ağda başarısız oturum açma denemeleri gibi “gürültülü” izler bırakmadığı için tespiti çok zordur.
* **Risk:** Hizmet hesapları genellikle veritabanları veya uygulamalar gibi kritik sistemlere erişim için yüksek ayrıcalıklara sahiptir ve parolaları nadiren değiştirilir veya zayıftır. Bu durum, başarılı bir Kerberoasting saldırısını bir etki alanını ele geçirmek için güçlü bir basamak haline getirir.

#### Teknik Derin Bakış: Golden ve Silver Ticket Saldırıları

Bu saldırılar, Kerberos protokolünün temel güven mekanizmalarını hedef alır ve bir etki alanı üzerinde mutlak kontrol sağlar.

* **Golden Ticket:** Bu, AD’ye yönelik en yıkıcı saldırılardan biridir. Saldırganın hedefi, etki alanındaki tüm Kerberos biletlerini şifrelemek ve imzalamak için kullanılan gizli anahtar olan `krbtgt` hesabının parola hash'ini ele geçirmektir. Saldırgan, `krbtgt` hash'ini (örneğin, bir DCSync saldırısıyla) ele geçirdikten sonra, Mimikatz gibi araçlar kullanarak etki alanındaki *herhangi bir kullanıcı* adına, istediği herhangi bir grup üyeliğiyle (örneğin, Domain Admins) ve neredeyse süresiz (varsayılan 10 yıl) bir geçerlilik süresiyle sahte bir Bilet Verme Bileti (TGT) oluşturabilir. Bu sahte "altın bilet", saldırgana etki alanı üzerinde tam ve kalıcı bir hakimiyet sağlar.
* **Silver Ticket:** Bu saldırı, `krbtgt` yerine belirli bir hizmetin (örneğin, bir dosya sunucusunun CIFS hizmeti) parola hash'ini hedefler. Saldırgan, bu hash'i ele geçirdiğinde, yalnızca o belirli hizmete erişim sağlayan sahte hizmet biletleri (TGS) oluşturabilir. Golden Ticket'a göre daha sınırlı bir etkiye sahiptir ancak tespiti daha zordur çünkü tüm iletişim sadece kurban hizmet ve istemci arasında gerçekleşir, KDC'ye başvurulmaz.

### Etki Alanı Hakimiyeti (Domain Dominance) Teknikleri

Bu teknikler, saldırganların bir etki alanındaki tüm kimlik bilgilerini ele geçirerek tam kontrol sağlamasını hedefler.

#### NTDS.dit Veritabanı Çıkarımı

`NTDS.dit`, tüm etki alanı nesnelerini ve en önemlisi tüm kullanıcıların parola hash'lerini içeren Active Directory veritabanı dosyasıdır. Bu dosya, etki alanı denetleyicilerinde bulunur. Bir saldırgan bir DC'de yönetici hakları elde ederse, bu dosyayı (genellikle Volume Shadow Copy gibi tekniklerle) kopyalayabilir. Dosyayı ele geçirdikten sonra, çevrimdışı araçlar kullanarak içindeki tüm parola hash'lerini çıkarabilir ve kırabilir.

#### DCSync Saldırısı

DCSync, bir saldırganın kendisini sahte bir etki alanı denetleyicisi gibi tanıtarak, meşru bir DC’den çoğaltma (replication) protokolü üzerinden parola verilerini istemesine olanak tanıyan bir Mimikatz tekniğidir. Bu saldırıyı gerçekleştirmek için saldırganın,

`Replicating Directory Changes` ve `Replicating Directory Changes All` gibi özel izinlere sahip bir hesabı (örneğin, bir Domain Admin veya yedekleme operatörü) ele geçirmesi gerekir. DCSync, DC üzerinde herhangi bir dosya işlemi yapmadığı ve meşru çoğaltma trafiğini taklit ettiği için son derece gizlidir. Genellikle `krbtgt` hesabının hash'ini çalarak Golden Ticket saldırısına zemin hazırlamak için kullanılır. Mimikatz'in`lsadump::dcsync` komutu bu saldırı için özel olarak tasarlanmıştır.

AD saldırıları genellikle tek bir olaydan ziyade bir dizi bağlantılı eylemden oluşan bir zincir reaksiyonu şeklinde ilerler. Bir zafiyetin sömürülmesi, bir sonrakinin kapısını aralar. Örneğin, zayıf bir ağ segmentinde LLMNR/NBT-NS protokollerinin aktif olması , bir saldırganın Responder aracıyla düşük yetkili bir kullanıcının NTLM hash’ini yakalamasına olanak tanır. Saldırgan bu hash’i kıramasa bile, Pass-the-Hash tekniğini kullanarak aynı kimlik bilgileriyle diğer makinelere yanal olarak hareket edebilir. Bu yeni erişilen makinelerden birinde, BloodHound gibi bir araçla yapılan keşif, zayıf bir parolaya sahip bir SQL hizmet hesabının varlığını ortaya çıkarabilir. Bu noktada saldırgan, Kerberoasting saldırısı ile bu hizmet hesabının biletini talep eder ve parolasını çevrimdışı olarak kırar. Bu hizmet hesabının yerel yönetici olduğu sunuculara erişim kazandıktan sonra, bu sunuculardan birinde daha önce oturum açmış bir Domain Admin’in önbelleğe alınmış kimlik bilgilerini Mimikatz ile çalabilir veya bu hizmet hesabının yanlışlıkla`Replicating Directory Changes` iznine sahip olduğunu keşfedebilir. Bu izinle, DCSync saldırısı gerçekleştirerek`krbtgt` hesabının hash'ini çalar ve son adım olarak bir Golden Ticket oluşturarak tüm etki alanında kalıcı ve mutlak kontrol sağlar. Bu zincir, AD güvenliğinin tek bir noktayı korumaktan ziyade, tüm saldırı zincirinin halkalarını kırmaya odaklanması gerektiğini açıkça göstermektedir.

Saldırı Tekniği (MITRE ATT&CK ID)Çalışma Prensibi (Özet)Birincil Savunma Stratejileriİlgili Araçlar (Saldırı/Savunma)**Kerberoasting** (T1558.003)SPN’i olan hizmet bileti hash’ini çevrimdışı kırma.

Grup Yönetimli Hizmet Hesapları (gMSA), 25+ karakterli karmaşık hizmet hesabı parolaları, AES şifrelemesini zorunlu kılma.

![](https://cdn-images-1.medium.com/max/800/1*YontK_x4FdZcm4LQIPCUtw.png)

---

### Savunma Derinliği: Çok Katmanlı Güvenlik Stratejileri

Active Directory’yi korumak, tek bir teknoloji veya ürünle değil, birbirini tamamlayan çok katmanlı bir savunma stratejisiyle mümkündür. Bu stratejinin temel felsefesi, bir saldırganın işini zorlaştırmak, hareket alanını kısıtlamak ve eninde sonunda kimlik bilgisi hırsızlığına dayalı saldırılarını işlevsiz hale getirmektir.

### En Az Ayrıcalık İlkesinin (PoLP — Principle of Least Privilege) Uygulanması

En Az Ayrıcalık İlkesi (PoLP), siber güvenliğin temel taşlarından biridir. Bu ilkeye göre, bir kullanıcıya, uygulamaya veya hizmete, görevini yerine getirmesi için gereken mutlak minimum düzeyde izin ve erişim hakkı verilmelidir. Bir hesap ele geçirildiğinde, bu ilke sayesinde saldırganın verebileceği potansiyel zarar büyük ölçüde sınırlanır. Örneğin, e-postalarını okumak için standart bir kullanıcı hesabıyla oturum açan bir yöneticinin bir oltalama (phishing) saldırısına kurban gitmesi durumunda, virüs yalnızca o kullanıcının verilerine erişebilir. Ancak aynı yönetici, bir Domain Admin hesabıyla oturum açmış olsaydı, virüs tüm etki alanına yayılabilirdi.

Uygulamada en büyük zorluklardan biri “ayrıcalık sürünmesi”dir (privilege creep). Bu, kullanıcılara geçici projeler için verilen ek izinlerin proje bittikten sonra geri alınmaması ve zamanla birikmesi durumudur. Bu riski azaltmak için, izinlerin düzenli olarak gözden geçirilmesi ve denetlenmesi kritik öneme sahiptir.

### Yönetimsel Katman Modeli (Tiered Administrative Model)

Yönetimsel Katman Modeli, PoLP’nin Active Directory’ye uygulanmış en yapısal halidir. Bu model, kimlik bilgisi hırsızlığını ve saldırganların ağ içinde yanal hareket etmesini önlemek amacıyla AD varlıklarını ve yönetici hesaplarını kontrol katmanlarına ayırır.

#### Katmanların Tanımlanması:

Model üç temel katmandan oluşur :

* **Tier 0 (Kontrol Düzlemi):** Ormanın ve kimlik altyapısının tam kontrolünü sağlayan en kritik varlıklardır. Bunlar arasında Etki Alanı Denetleyicileri (DC), Active Directory Federation Services (ADFS) sunucuları, Azure AD Connect sunucuları, Public Key Infrastructure (PKI) sunucuları ve bu varlıkları yöneten hesaplar (Domain Admins, Enterprise Admins, Schema Admins) bulunur. Bu katmanın ele geçirilmesi, tüm ortamın ele geçirilmesi anlamına gelir.
* **Tier 1 (Yönetim Düzlemi):** Kurumsal sunucuları ve uygulamaları barındırır. Dosya sunucuları, veritabanı sunucuları, uygulama sunucuları ve bu sistemleri yöneten sunucu yöneticisi hesapları bu katmandadır.
* **Tier 2 (Kullanıcı Düzlemi):** Son kullanıcı cihazlarını (iş istasyonları, dizüstü bilgisayarlar) ve bu cihazları yöneten yardım masası gibi destek hesaplarını içerir.

#### Temel Kural ve Uygulama:

Modelin en temel ve katı kuralı şudur: **Daha yüksek bir katmana ait bir kimlik bilgisi (örneğin, bir Tier 0 yönetici hesabı), asla daha düşük bir katmandaki bir sisteme (örneğin, bir Tier 2 iş istasyonu) giriş yapmamalıdır**. Bu kural, yüksek değerli kimlik bilgilerinin, daha az güvenli olan alt katmanlardaki sistemlerin belleğinde önbelleğe alınmasını ve çalınmasını engeller. Bu teknik kontrol, GPO’lar aracılığıyla “Deny log on locally”, “Deny access to this computer from the network” ve “Deny log on through Remote Desktop Services” gibi kullanıcı hakları atamaları kullanılarak uygulanır. Örneğin, Tier 1 sunucularını hedefleyen bir GPO’da, Tier 0 yönetici gruplarına (Domain Admins vb.) bu haklar atanarak oturum açmaları engellenir.

Her katmanın yönetimi için **Ayrıcalıklı Erişim İş İstasyonları (PAWs — Privileged Access Workstations)** kullanılması şiddetle tavsiye edilir. Bir Tier 0 yöneticisi, Tier 0 varlıklarını yönetmek için yalnızca özel olarak sıkılaştırılmış, izole edilmiş ve internet erişimi olmayan bir Tier 0 PAW kullanmalıdır.

### Kritik Varlıkların Sıkılaştırılması (Hardening Critical Assets)

Katman modeline ek olarak, belirli varlıkların kendi içlerinde de sıkılaştırılması gerekir.

#### Etki Alanı Denetleyicilerinin Güvenliğini Sağlama

DC’ler, AD’nin kalbidir ve en sıkı şekilde korunmalıdır. Temel sıkılaştırma adımları arasında DC’lere fiziksel erişimin kısıtlanması, gereksiz yazılım ve hizmetlerin kaldırılması, uygulama beyaz listeleme (AppLocker gibi) kullanılması, en son güvenlik yamalarının derhal uygulanması ve yalnızca Tier 0 PAW’lardan yönetilmesine izin verilmesi yer alır.

#### Microsoft LAPS (Local Administrator Password Solution)

LAPS, etki alanına dahil olan tüm Windows bilgisayarlarındaki yerel yönetici hesabının parolasını yönetmek için tasarlanmış ücretsiz bir Microsoft aracıdır. Her bilgisayar için benzersiz, rastgele ve karmaşık bir parola oluşturur, bu parolayı AD’deki ilgili bilgisayar nesnesinin bir özniteliğinde güvenli bir şekilde saklar ve parolayı düzenli olarak değiştirir. Bu, saldırganların bir makinedeki yerel yönetici parolasını çalıp diğer makinelere yanal olarak hareket etmek için kullanmasını (Pass-the-Hash saldırılarının yaygın bir senaryosu) engeller.

#### Teknik Derin Bakış: Grup Yönetimli Hizmet Hesapları (gMSA — Group Managed Service Accounts)

Geleneksel hizmet hesapları, Kerberoasting saldırıları için birincil hedeftir çünkü parolaları genellikle zayıftır, asla değiştirilmez ve birden çok sunucuda paylaşılır.

* **Çözüm:** gMSA’lar, bu sorunu çözmek için tasarlanmış özel AD nesneleridir. Bir gMSA oluşturulduğunda, parola yönetimi tamamen Windows işletim sistemine devredilir. Sistem, 25 karakterden uzun, son derece karmaşık ve rastgele parolalar oluşturur ve bu parolaları varsayılan olarak her 30 günde bir otomatik olarak değiştirir.
* **Güvenlik Faydası:** En önemlisi, bu parolalara hiçbir insan erişemez veya bilemez. Parola, AD tarafından yönetilir ve yalnızca yetkilendirilmiş ana bilgisayarlar tarafından alınabilir. Bu özellikler, gMSA’ları Kerberoasting saldırılarına karşı neredeyse tamamen bağışık hale getirir, çünkü çevrimdışı olarak kırılması pratik olarak imkansız olan çok güçlü parolalar kullanırlar.

### Gelişmiş Kimlik Bilgisi Koruma

#### Windows Defender Credential Guard

Credential Guard, Windows 10/11 Enterprise ve Windows Server 2016 ve sonrası sürümlerde bulunan, kimlik bilgisi hırsızlığına karşı donanım tabanlı bir koruma mekanizmasıdır.

* **Mekanizma:** Credential Guard, Sanallaştırma Tabanlı Güvenlik (VBS) teknolojisini kullanarak, kimlik bilgisi sırlarını (NTLM hash’leri, Kerberos TGT’leri) depolayan LSASS sürecini, normal işletim sisteminden izole edilmiş, hipervizör korumalı sanal bir alana (LSAIso.exe) taşır.
* **Koruma:** Bu derin izolasyon sayesinde, bir saldırgan sistemde tam yönetici (Administrator veya SYSTEM) hakları elde etse bile, bu korumalı belleğe erişip kimlik bilgilerini çalamaz.
* **Etkisi:** Credential Guard, Mimikatz gibi araçların LSASS belleğinden kimlik bilgisi dökmesini etkili bir şekilde engeller. Bu da, Pass-the-Hash ve Pass-the-Ticket gibi temel yanal hareket tekniklerini doğrudan ve neredeyse tamamen ortadan kaldırır. Credential Guard’ın çalışması için Secure Boot ve TPM gibi donanım özelliklerinin etkinleştirilmesi gerekir ve GPO veya Intune üzerinden yapılandırılabilir.

### Güçlü Parola Politikaları ve Çok Faktörlü Kimlik Doğrulama (MFA)

#### NIST Yönergelerine Uygun Modern Parola Politikaları

Ulusal Standartlar ve Teknoloji Enstitüsü (NIST), parola politikaları için modern en iyi uygulamaları yayınlamıştır. Bu yaklaşımlar, geleneksel yöntemlerden önemli ölçüde farklıdır:

* **Uzunluk > Karmaşıklık:** Geleneksel karmaşıklık kuralları (örneğin, en az bir büyük harf, bir rakam, bir özel karakter) yerine, parola uzunluğuna odaklanılması önerilir. Minimum 15–20 karakterlik parolalar (passphrases) teşvik edilmelidir.
* **Parola Değişimini Zorlamama:** Kullanıcıları periyodik olarak (örneğin, her 90 günde bir) parolalarını değiştirmeye zorlamak, daha zayıf ve tahmin edilebilir parolalar oluşturmalarına neden olduğu için artık önerilmemektedir. Parola değişimi yalnızca bir sızıntı şüphesi olduğunda zorunlu kılınmalıdır.
* **Bilinen Kötü Parolaları Engelleme:** Yeni oluşturulan parolalar, sızdırılmış parola veritabanları, sözlük kelimeleri ve basit sıralamalardan oluşan bir “kara listeye” karşı kontrol edilmeli ve eşleşme durumunda reddedilmelidir.

#### Şirket İçi (On-Premise) AD için MFA Çözümleri

Çok Faktörlü Kimlik Doğrulama (MFA), çalınan bir parolanın tek başına işe yaramamasını sağlayarak güvenliği önemli ölçüde artıran kritik bir katmandır. Şirket içi AD için doğrudan yerleşik bir MFA çözümü olmasa da, bu işlevselliği sağlayan üçüncü taraf çözümler mevcuttur. Bu çözümler genellikle aşağıdaki yöntemlerle çalışır:

* **Windows Oturum Açma Entegrasyonu:** Kullanıcılar Windows’ta oturum açarken parola girdikten sonra ikinci bir faktör (örneğin, mobil uygulama onayı veya OTP kodu) istenir.
* **RADIUS veya SAML Proxy:** VPN veya diğer ağ cihazları için kimlik doğrulama isteklerini bir proxy sunucusu üzerinden geçirerek MFA uygularlar. Bu çözümleri (örneğin, UserLock, Rublon, Silverfort) seçerken, çevrimdışı veya ağ bağlantısı olmadığında çalışabilme, granüler politika uygulama (örneğin, yalnızca belirli bağlantı türleri için MFA isteme) ve mevcut AD altyapısıyla sorunsuz entegrasyon gibi özellikler dikkate alınmalıdır.

Bu savunma mekanizmaları, tek başlarına değerli olsalar da, asıl güçleri bir araya geldiklerinde ortaya çıkar. Bu, saldırganın işini neredeyse imkansız hale getiren birleşik bir savunma felsefesi oluşturur. Bir saldırgan Tier 2'de bir hesap ele geçirdiğinde, Tiered Model onun Tier 0 varlıklarına ulaşmasını engeller. Aynı katman içinde yanal hareket etmeye çalıştığında, LAPS sayesinde her makinenin farklı bir yerel yönetici parolası olduğundan PtH saldırıları etkisiz kalır. Bir şekilde bir makinede yönetici hakları elde etse bile, Credential Guard LSASS’ten kimlik bilgisi çalmasını önleyerek PtH ve PtT saldırılarını temelden bozar. Hizmet hesaplarını hedeflemeye çalıştığında ise, gMSA’ların kırılması imkansıza yakın parolaları sayesinde Kerberoasting saldırısı başarısız olur. Bu katmanlı savunma, saldırganın en temel silahları olan kimlik bilgisi hırsızlığı ve yeniden kullanımını işlevsiz kılarak AD’yi bir kale haline getirir.

![](https://cdn-images-1.medium.com/max/800/1*m6kPdehFatPSmDwBEF0fDw.png)

---

### Hibrit Kimlik Altyapılarının Güvenliği

Kuruluşlar şirket içi (on-premise) altyapılarını bulut hizmetleriyle (örneğin, Microsoft 365) entegre ettikçe, kimlik yönetimi de hibrit bir yapıya bürünür. Bu hibrit yapı, yeni yetenekler sunarken aynı zamanda yeni ve karmaşık saldırı yüzeyleri de oluşturur. Güvenin kendisi bir saldırı vektörüne dönüşebilir.

### Microsoft Azure AD Connect: Yapılandırma ve Güvenlik En İyi Uygulamaları

Azure AD Connect, şirket içi Active Directory ile buluttaki Azure Active Directory (Microsoft Entra ID) arasında kimlik nesnelerini (kullanıcılar, gruplar, parola hash’leri) senkronize eden kritik bir köprüdür. Bu köprünün güvenliği, tüm hibrit kimlik altyapısının güvenliği için hayati önem taşır.

* **Azure AD Connect Sunucusunun Tier 0 Varlığı Olarak Korunması:** Azure AD Connect sunucusu, hem şirket içi AD’ye hem de Azure AD’ye yüksek ayrıcalıklı erişime sahiptir. Bu sunucunun ele geçirilmesi, saldırganın her iki ortamda da tam kontrol sağlamasına olanak tanıyabilir. Bu nedenle, Azure AD Connect sunucusu kesinlikle bir **Tier 0** varlığı olarak kabul edilmeli, bir etki alanı denetleyicisi gibi korunmalı, fiziksel ve mantıksal erişimi en aza indirilmeli ve yalnızca özel olarak atanmış yöneticiler tarafından bir PAW üzerinden yönetilmelidir.
* **Kimlik Doğrulama Yöntemleri ve Güvenlik Değerlendirmesi:** Azure AD Connect üç ana kimlik doğrulama yöntemi sunar: Parola Hash Senkronizasyonu (PHS), Geçişli Kimlik Doğrulama (PTA) ve Federasyon (ADFS). Güvenlik açısından, PHS genellikle en güvenli seçeneklerden biri olarak kabul edilir. PTA, kimlik doğrulama isteklerini şirket içi bir ajana yönlendirdiği için, bu ajanın çalıştığı sunucunun ele geçirilmesi durumunda AADInternals gibi araçlarla ortadaki adam (man-in-the-middle) saldırılarına ve parola hırsızlığına açık hale gelebilir.
* **Senkronizasyon Kapsamının Sınırlandırılması:** En kritik güvenlik uygulamalarından biri, şirket içi yönetici hesaplarının (Domain Admins, Enterprise Admins vb.) Azure AD’ye senkronize edilmesini engellemektir. Azure AD Connect varsayılan olarak bu hesapları filtreler ve bu ayar kesinlikle değiştirilmemelidir. Bu hesapların buluta senkronize edilmesi, şirket içi bir ihlalin doğrudan buluta sıçraması için bir kapı açar.

### Şirket İçi Ortamdan Buluta Yönelik Saldırı Vektörleri

Hibrit modelde, şirket içi altyapının güvenliği ile bulutun güvenliği birbirine sıkı sıkıya bağlıdır. Şirket içinde elde edilen bir ayrıcalık, buluta doğru dikey bir hareket için kullanılabilir.

#### Federasyon Güvenliği ve Golden SAML Saldırısı

Active Directory Federation Services (ADFS) gibi federasyon çözümleri kullanıldığında, şirket içi AD ile bulut hizmeti (örneğin, Microsoft 365) arasında bir güven ilişkisi kurulur. Bu güven, ADFS sunucusunun oluşturduğu ve özel bir anahtarla (token-signing certificate) imzaladığı SAML (Security Assertion Markup Language) token’larına dayanır.

* **Golden SAML Saldırısı:** Bu saldırı, “Golden Ticket” saldırısının federasyon ve bulut dünyasındaki karşılığıdır. Bir saldırgan, ADFS sunucusunu (bir Tier 0 varlığı) ele geçirip SAML token’larını imzalayan özel anahtarı çalarsa, artık şirket içi AD’ye ihtiyaç duymadan, internet üzerinden herhangi bir kullanıcı (örneğin, bir Global Administrator) adına geçerli, imzalı bir SAML token’ı oluşturabilir. Bu sahte token, Azure AD tarafından geçerli kabul edilir ve saldırgana bulut kaynaklarına tam erişim sağlar. Bu durum, ADFS sunucularının etki alanı denetleyicileri kadar sıkı korunması gerektiğini göstermektedir.

#### ADInternals Gibi Araçlarla Dikey Hareket Riskleri

AADInternals gibi PowerShell modülleri, hibrit kimlik ortamlarındaki zayıflıkları sömürmek için özel olarak tasarlanmıştır. Bir saldırgan, şirket içi ağda yönetici hakları elde ettikten sonra bu tür araçları kullanarak:

* PTA ajanını manipüle ederek yanlış parola girilse bile kimlik doğrulamasını başarılı gibi gösterebilir ve parola çalabilir.
* Şirket içi AD’den Azure AD’ye dikey olarak hareket edebilir.
* Bulutta arka kapılar (backdoors) oluşturabilir ve hatta bazı durumlarda MFA korumalarını atlayabilir.

### Hibrit Ortamlar için Güvenlik Stratejileri

Hibrit kimlik altyapılarını korumak, güven ilişkilerini en aza indirmeyi ve kontrol düzlemlerini ayırmayı gerektirir.

* **Bulut Tabanlı Kimlik Doğrulamayı Tercih Etme:** Mümkün olduğunda, karmaşıklığı ve saldırı yüzeyini azaltmak için ADFS gibi federasyon yapılarından kaçınıp Parola Hash Senkronizasyonu (PHS) gibi daha basit ve doğrudan bulut tabanlı kimlik doğrulama yöntemleri kullanılmalıdır.
* **Ayrıcalıklı Hesapların İzolasyonu:** Bulut yönetici hesapları (Global Admins vb.) kesinlikle “sadece bulut” (cloud-only) hesaplar olmalıdır. Bu hesaplar şirket içi AD’de bulunmamalı ve oradan senkronize edilmemelidir. Bu, şirket içi bir ihlalin bulut yönetici hesaplarını doğrudan etkilemesini önler.
* **Phishing’e Dayanıklı MFA:** Tüm yönetici hesapları (hem şirket içi hem de bulut) ve mümkünse tüm kullanıcılar için Windows Hello for Business, FIDO2 güvenlik anahtarları veya Microsoft Authenticator gibi phishing’e dayanıklı MFA yöntemleri zorunlu kılınmalıdır.
* **Tam Zamanında Erişim (Just-In-Time — JIT):** Azure AD Privileged Identity Management (PIM) gibi çözümler kullanılarak, yöneticilere bulut rollerine kalıcı olarak değil, yalnızca ihtiyaç duydukları süre boyunca (örneğin, 2 saatliğine) ve bir onay sürecinden geçerek erişim hakkı verilmelidir. Bu, ayrıcalıklı erişimin riskini önemli ölçüde azaltır.

Hibrit kimlik altyapılarında, şirket içi AD ile Azure AD arasındaki güven ilişkisi, saldırganlar için bir köprü işlevi görebilir. Bir kuruluş, kullanıcı deneyimini iyileştirmek amacıyla ADFS ile federasyon kurduğunda, aslında Azure AD’ye “ADFS sunucusundan gelen imzalı SAML token’larına güven” talimatı vermiş olur. Eğer bir saldırgan, şirket içi ağdaki bir zafiyetten faydalanarak ADFS sunucusuna yönetici erişimi elde ederse , bu güvenin temelini oluşturan token imzalama özel anahtarını çalabilir. Bu noktadan sonra saldırgan, şirket içi ağa artık ihtiyaç duymadan, internet üzerinden herhangi bir kullanıcı (örneğin, bir Global Admin) adına geçerli ve imzalı bir SAML token’ı oluşturabilir. Azure AD, bu token’ı meşru bir kimlik kanıtı olarak kabul edecek ve saldırgana bulut ortamında tam kontrol sağlayacaktır. Bu senaryo, hibrit modelde en zayıf halkanın tüm zinciri kopardığını ve ADFS gibi hibrit bileşenlerin güvenliğinin, tüm bulut kimlik altyapısının güvenliği haline geldiğini net bir şekilde ortaya koymaktadır.

---

### Sürekli İzleme, Denetim ve Kurtarma

Güvenlik, bir defalık bir proje değil, sürekli bir süreçtir. En iyi sıkılaştırma önlemleri bile, sürekli izleme, denetim ve etkili bir kurtarma planı olmadan eksik kalır. Saldırganların eylemlerini tespit etmek ve bir felaket anında hızla toparlanabilmek, dayanıklılığın temelini oluşturur.

### Active Directory Denetim Politikaları ve SIEM Entegrasyonu

Active Directory’de gerçekleşen olayları kaydetmek ve analiz etmek, şüpheli aktiviteleri tespit etmenin ve olaylara müdahale etmenin ilk adımıdır.

#### İzlenmesi Gereken Kritik Olaylar

Etkili bir denetim için, GPO’lar aracılığıyla “Gelişmiş Denetim Politikası Yapılandırması” etkinleştirilmeli ve aşağıdaki gibi yüksek riskli olay kategorilerine odaklanılmalıdır:

* **Kullanıcı ve Grup Yönetimi:** Yeni kullanıcı oluşturma (Event ID 4720), kullanıcı silme (4726), hesap kilitlemeleri (4740) ve özellikle Domain Admins, Enterprise Admins gibi ayrıcalıklı gruplara üye eklenmesi (4728) veya çıkarılması (4729) gibi olaylar yakından izlenmelidir.
* **Grup İlkesi Değişiklikleri:** GPO’ların oluşturulması, silinmesi veya ayarlarının değiştirilmesi (Event ID 5136, 5137), tüm etki alanını etkileyebilecek potansiyel olarak tehlikeli değişikliklerdir ve mutlaka denetlenmelidir.
* **Oturum Açma Olayları:** Başarısız oturum açma denemeleri (Event ID 4625), kaba kuvvet veya parola spreyi saldırılarının bir göstergesi olabilir. Başarılı ağ oturum açma olayları (Event ID 4624, Logon Type 3) ise yanal hareket aktivitelerini izlemek için kritiktir.
* **Dizin Hizmeti Değişiklikleri:** Belirli nesnelere erişim (Event ID 4662), doğru filtrelendiğinde DCSync gibi gizli saldırıları tespit etmek için kullanılabilir.

#### Windows Olay Yönlendirme (WEF) ve SIEM Entegrasyonu

Her etki alanı denetleyicisindeki olay günlüklerini ayrı ayrı incelemek pratik değildir.

* **Windows Olay Yönlendirme (WEF):** Windows’un bu yerleşik özelliği, birden çok kaynak bilgisayardaki (örneğin, tüm DC’ler) olay günlüklerini, merkezi bir Toplayıcı (Collector) sunucusuna yönlendirmek için kullanılır. Bu, logları SIEM’e göndermeden önce verimli bir toplama katmanı oluşturur.
* **SIEM (Security Information and Event Management) Entegrasyonu:** Merkezi olarak toplanan bu loglar, bir SIEM çözümüne aktarılmalıdır. SIEM, farklı kaynaklardan gelen olayları birleştirerek korelasyon kuralları oluşturmaya, anormallikleri tespit etmeye ve önceden tanımlanmış tehlikeli senaryolar (örneğin, 5 dakika içinde 10 farklı hesaptan başarısız oturum açma) gerçekleştiğinde otomatik uyarılar (alerts) üretmeye olanak tanır.

### Gelişmiş Tehdit Tespiti: Microsoft Defender for Identity

Microsoft Defender for Identity, geleneksel denetimin ötesine geçen, davranışsal analize dayalı bir Kimlik Tehdit Tespiti ve Yanıtı (ITDR) çözümüdür.

* **Mimari:** Defender for Identity, etki alanı denetleyicileri, ADFS ve AD CS sunucularına kurulan sensörler aracılığıyla ağ trafiğini ve Windows olaylarını yakalar. Bu veriler, analiz için Microsoft bulut hizmetine gönderilir.
* **Tespit Yetenekleri:** Kullanıcı ve Varlık Davranış Analizi (UEBA) ve makine öğrenmesi algoritmaları kullanarak her kullanıcı ve cihaz için bir “normal davranış” profili oluşturur. Bu profilden sapmalar (örneğin, bir kullanıcının normalde hiç erişmediği bir sunucuya gece yarısı erişmesi) şüpheli olarak işaretlenir. Pass-the-Hash, Pass-the-Ticket, Golden Ticket, Kerberoasting, DCSync gibi birçok gelişmiş saldırıyı, imzaya dayalı olmadan, davranışsal olarak tespit edebilir.
* **Güvenlik Duruşu Değerlendirmesi:** Sadece reaktif tespit yapmakla kalmaz, aynı zamanda Yanal Hareket Yolları (Lateral Movement Paths) gibi değerlendirmeler sunarak, bir saldırganın düşük yetkili bir hesaptan başlayarak Domain Admin’e nasıl ulaşabileceğini gösterir. Bu, zafiyetlerin saldırganlardan önce kapatılmasına olanak tanır.

### Active Directory Yedekleme ve Felaket Kurtarma

Bir saldırının başarılı olması durumunda, iş sürekliliğini sağlamak için güvenilir bir yedekleme ve kurtarma planı hayati önem taşır. Ancak AD kurtarma, basit bir yedekten dönme işleminden çok daha karmaşıktır.

#### En İyi Yedekleme Uygulamaları

* **Kapsam ve Sıklık:** Her etki alanından en az iki DC (özellikle FSMO rollerini barındıranlar) yedeklenmelidir. Yedeklemeler düzenli olarak (genellikle günlük) yapılmalı ve yedeklerin yaşı, AD’nin “Tombstone Lifetime” (varsayılan 180 gün) süresini aşmamalıdır, aksi takdirde geri yüklenen nesneler diğer DC’ler tarafından silinmiş olarak kabul edilebilir.
* **Depolama ve Test:** Yedekler, fidye yazılımlarından etkilenmemesi için mutlaka güvenli, çevrimdışı (offline) veya değiştirilemez (immutable) depolama alanlarında saklanmalıdır. En kritik adım ise, kurtarma planının düzenli olarak (örneğin, yılda en az bir kez) tamamen izole bir laboratuvar ortamında test edilmesidir.

#### Orman Kurtarma (Forest Recovery) ve KRBTGT Parola Sıfırlama

Bir fidye yazılımı saldırısı gibi tüm ormanın ele geçirildiği durumlarda, hangi yedeğin “temiz” olduğunu bilmek neredeyse imkansızdır. Saldırganların ağda kalma süresi (dwell time) genellikle ayları bulabilir, bu da son birkaç aylık tüm yedeklerin de potansiyel olarak “enfekte” olduğu anlamına gelir. Bu nedenle, basitçe en son yedeğe dönmek, saldırganı da sisteme geri yüklemek anlamına gelebilir.

Modern yaklaşım, tek bir DC’yi bilinen en eski ve güvenilir yedekten yetkili (authoritative) olarak geri yüklemek, diğer tüm DC’lerin meta verilerini temizlemek ve onları sıfırdan kurup bu geri yüklenen DC ile replike olmalarını sağlamaktır.

Bu sürecin en kritik adımı **KRBTGT hesabı parolasının sıfırlanmasıdır**:

* **Neden Önemli:** `krbtgt` hesabı, tüm Kerberos TGT'lerini imzalar. Bu hesabın parolasını sıfırlamak, saldırganların oluşturmuş olabileceği tüm Golden Ticket'ları geçersiz kılar.
* **Neden İki Kez:** Active Directory, replikasyon sırasında oluşabilecek zamanlama sorunlarını önlemek için hem mevcut `krbtgt` parolasını hem de bir önceki parolayı geçerli kabul eder. Bu, `msDS-KeyVersionNumber` özniteliği ile yönetilen bir mekanizmadır. Saldırganın elindeki eski (çalınmış) parolanın tamamen geçersiz kılınması için, parolanın iki kez sıfırlanması gerekir. Bu, parola geçmişini (password history) etkili bir şekilde temizler.

**Adım Adım Kılavuz:**

1. Microsoft’un sağladığı `Reset-KrbTgt-Password-For-RWDCs-And-RODCs.ps1` gibi özel betikler kullanılmalıdır.
2. İlk sıfırlama işlemi gerçekleştirilir.
3. Acil bir durum yoksa, mevcut Kerberos biletlerinin doğal olarak süresinin dolması ve replikasyonun tüm DC’lere yayılması için **en az 10 saat beklenmesi** şiddetle tavsiye edilir. Bu, hizmet kesintilerini en aza indirir. Acil bir kurtarma senaryosunda bu bekleme süresi atlanabilir, ancak bu durum geçici kimlik doğrulama sorunlarına yol açabilir.
4. İkinci sıfırlama işlemi gerçekleştirilerek parola geçmişi tamamen temizlenir ve orman yeniden güvenli hale getirilir.

![](https://cdn-images-1.medium.com/max/800/1*LthF_GXjUk5o1DenNl0tAw.png)

olay güvenliği

---

### Sonuç ve Stratejik Öneriler

### Active Directory Güvenliğinde Geleceğe Yönelik Yaklaşımlar

Active Directory, on yıllardır kurumsal ağların temel taşı olmuştur ve olmaya devam edecektir. Ancak tehdit manzarası sürekli gelişmektedir ve AD güvenlik stratejileri de buna ayak uydurmalıdır. Geleceğe yönelik yaklaşımlar, statik savunmalardan dinamik ve akıllı sistemlere doğru bir evrimi gerektirmektedir.

* **Sıfır Güven (Zero Trust) Mimarisi:** Bu yaklaşım, “asla güvenme, her zaman doğrula” ilkesine dayanır. Ağın içinden veya dışından gelmesine bakılmaksızın, her erişim isteğinin kimliği doğrulanmalı, yetkilendirilmeli ve şifrelenmelidir. AD bağlamında bu, katı ağ segmentasyonu, mikro segmentasyon, her yönetici eylemi için MFA ve kimlik bilgilerinin asla güvenilmeyen bir sisteme maruz kalmamasını sağlayan Yönetimsel Katman Modeli gibi ilkelerin sıkı bir şekilde uygulanması anlamına gelir.
* **Kimlik Tehdit Tespiti ve Yanıtı (ITDR):** Geleneksel uç nokta (EDR) ve ağ (NDR) güvenliği yeterli değildir. Kimlik odaklı saldırılar, kimlik düzleminde tespit edilmelidir. Microsoft Defender for Identity gibi ITDR çözümleri, davranışsal analiz ve makine öğrenmesi kullanarak normalin dışındaki kimlik aktivitelerini tespit eder ve saldırıları daha başlamadan durdurma potansiyeli sunar.
* **Otomasyon ve Orkestrasyon:** Güvenlik operasyonlarının hızı ve ölçeği, manuel süreçlerle yönetilemeyecek kadar artmıştır. Güvenlik politikalarının (GPO’lar, LAPS) uygulanması, denetimlerin yapılması ve hatta bazı olay müdahale adımlarının (örneğin, şüpheli bir hesabın otomatik olarak devre dışı bırakılması) otomasyonu, insan hatasını azaltır ve müdahale süresini kısaltır.

### Eyleme Geçirilebilir Sıkılaştırma Kontrol Listesi

Bu rapor boyunca tartışılan karmaşık konuları özetleyen, kuruluşların AD güvenlik duruşlarını iyileştirmek için hemen uygulamaya başlayabilecekleri önceliklendirilmiş bir kontrol listesi aşağıda sunulmuştur:

**Temel Hijyen ve İzolasyon:**

* **Tier 0 Varlıklarını Belirle ve İzole Et:** Etki Alanı Denetleyicilerinizi, ADFS/Azure AD Connect sunucularınızı ve PKI altyapınızı belirleyin. Bu sistemlere erişimi yalnızca özel, sıkılaştırılmış Ayrıcalıklı Erişim İş İstasyonlarından (PAW) gelen Tier 0 yönetici hesaplarıyla sınırlandırın.
* **Microsoft LAPS’ı Dağıt:** Tüm etki alanına dahil edilmiş iş istasyonları ve sunuculardaki yerel yönetici parolalarını merkezileştirmek ve rastgele hale getirmek için LAPS’ı derhal uygulayın. Bu, yanal hareketin en yaygın yollarından birini kapatır.
* **LLMNR/NBT-NS’i Devre Dışı Bırak:** GPO aracılığıyla tüm ağınızda bu eski ve güvensiz protokolleri devre dışı bırakarak Responder gibi araçlarla yapılan hash yakalama saldırılarını önleyin.

**Kimlik Bilgisi Koruma:**

* **Credential Guard’ı Etkinleştir:** Uygun donanıma sahip tüm Windows 10/11 Enterprise ve Windows Server 2016+ sistemlerinde Credential Guard’ı GPO ile etkinleştirin. Bu, Pass-the-Hash ve Pass-the-Ticket saldırılarına karşı en etkili savunmalardan biridir.
* **Hizmet Hesaplarını Güvence Altına Al:** Mümkün olan her yerde geleneksel hizmet hesaplarını Grup Yönetimli Hizmet Hesaplarına (gMSA) dönüştürün. gMSA kullanılamayan durumlar için, hizmet hesaplarına en az 25 karakterli, rastgele oluşturulmuş ve bir parola kasasında saklanan son derece karmaşık parolalar atayın.
* **Ayrıcalıklı Hesaplar için MFA’yı Zorunlu Kıl:** Tüm yönetici hesapları ve hassas verilere erişimi olan tüm hesaplar için Çok Faktörlü Kimlik Doğrulamayı (MFA) zorunlu kılın.

**Sürekli İzleme ve Kurtarma:**

* **KRBTGT Parolasını Düzenli Olarak Sıfırla:** `krbtgt` hesabının parolasını, aralarında en az 10 saat olacak şekilde iki aşamalı olarak, yılda en az iki kez sıfırlamak için bir prosedür ve takvim oluşturun. Bu, Golden Ticket riskini azaltır.
* **Kritik Olayları İzle ve Uyar:** SIEM veya ITDR çözümünüzde, bu raporda belirtilen kritik olay kimlikleri (özellikle ayrıcalıklı grup değişiklikleri, GPO değişiklikleri ve DCSync girişimleri) için gerçek zamanlı uyarılar yapılandırın.
* **AD Kurtarma Planını Test Et:** Active Directory orman kurtarma planınızı, izole bir laboratuvar ortamında yılda en az bir kez baştan sona test edin. Bu test, yalnızca teknik adımları değil, aynı zamanda iletişim planlarını ve karar verme süreçlerini de kapsamalıdır.

Active Directory, doğru yapılandırıldığında ve korunduğunda bir kuruluşun en güçlü güvenlik varlıklarından biri olabilir. Ancak ihmal edildiğinde, en büyük zafiyeti haline gelir. Bu raporda sunulan stratejiler, bu kritik altyapıyı modern tehditlere karşı güçlendirmek için kapsamlı ve eyleme geçirilebilir bir çerçeve sunmaktadır.