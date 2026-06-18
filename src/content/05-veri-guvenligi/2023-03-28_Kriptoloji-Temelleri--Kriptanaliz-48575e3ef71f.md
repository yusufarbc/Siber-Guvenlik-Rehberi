# Kriptoloji Temelleri: Kriptanaliz

---

### Kriptoloji Temelleri:#3 Kriptanaliz

![](https://cdn-images-1.medium.com/max/800/1*aZ11lfSR2DfxXotqqA4KhA.png)

Merhaba, kriptoloji temelleri serisinin bu yazısında kriptanalizin ne olduğundan, şifre kırma tekniklerinden ve sosyal mühendislik yöntemlerinden bahsedeceğim.

---

### Kriptanalize Genel Bakış

Kriptanaliz, kripto sistemleri kırma, deşifre etme bilimidir. Şifrelenmiş metinlerin çözümünü araştıran kriptoloji dalıdır. Kriptanaliz, bilinmeyen anahtarları bulmak için kullanılır.

![](https://cdn-images-1.medium.com/max/800/0*WYSM0JXe3tpf70lG.png)

Kriptanalizi; Uygulama Saldırıları, klasik kriptanaliz ve sosyal mühendislik olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

---

### Uygulama Saldırıları

Tersine mühendislik veya parola saldırıları yoluyla gizli anahtarı elde etmeye çalışan kriptanaliz yöntemleri, saldırı türleridir.

#### Kaba Kuvvet Saldırıları (Brute-Force Attacks)

Bu tür bir parola saldırısı, hedef kullanıcının parola bilgilerini tahmin etmek için deneme yanılma yöntemlerini kullanır. Saldırgan, kullanıcının şifresini doğru bir şekilde tahmin etmek için mümkün olduğu kadar çok permütasyon üzerinde deneme yapar. Çok fazla sabır ve zaman gerektiren nispeten eski bir yöntem olsa da, kaba kuvvet saldırısı, otomatik ve anlaşılır olduğu için hala en çok kullanılan yöntemlerden biridir.

![](https://cdn-images-1.medium.com/max/800/1*TC-mr-YoZ9Rb2ZQ3syKvEw.png)

Birkaç kaba kuvvet saldırısı türü vardır:  
**1. Basit kaba kuvvet saldırıları:** En olası parolayı tahmin etmek için bir kullanıcı hakkındaki verileri kullanır. Bu teknik, evcil hayvan adı-yıl ve doğumun bir kombinasyonunu içerenler gibi basit parolalar için kullanılır.  
**2. Kimlik bilgileri doldurma:** Güvenlik açığı bulunan web sitelerinden kötü amaçlarla elde edilmiş, önceden açığa çıkmış(leak olmuş) oturum açma kombinasyonlarının kullanılmasını içerir. Bu tür saldırılar, hedef kullanıcıların, kullanıcı adı-şifre kombinasyonlarını birden çok serviste yeniden kullanma eğiliminden yararlanır.  
3. **Ters kaba kuvvet saldırıları:** Bilinen bir parola ile başlar ve ardından bu parolayla eşleşen kullanıcı adlarını arar. Tehdit aktörleri genellikle sızdırılmış kimlik bilgilerinin birden çok veritabanına erişebildiğinden, belirli bir kullanıcı grubu içinde ortak parolaları belirlemek kolaydır.

#### Sözlük Saldırıları (Dictionary Attacks)

Bu saldırı yöntemi, belirli bir hedef ağ tarafından parola olarak kullanılması muhtemel olan önceden tanımlanmış bir sözcük listesi kullanır.

![](https://cdn-images-1.medium.com/max/800/0*F652-yGJsAll1wHg)

Önceden tanımlanmış liste, bir web sitesi kullanıcısının önceki veri ihlallerinden elde edilen davranış kalıplarından ve şifrelerinden oluşturulmuştur. Listeler, yaygın şifre kombinasyonlarını duruma göre;

* Değiştirerek
* Sayısal son ekler ve önekler ekleyerek
* Yaygın ifadeler kullanarak

oluşturulur. Bu listeler, bilinen bir kullanıcı adları listesine göre kimlik doğrulaması yapmaya çalışan araçlara aktarılır.

Parola listesi oluşturmak için kullanılabilecek araçlar şunlardır.

#### Şifre Püskürtme Saldırıları (Password Spraying Attacks)

Bu saldırıda bilgisayar korsanı, başka bir parolaya geçmeden önce çeşitli hesaplarda aynı parolayı kullanarak kimlik doğrulaması yapmaya çalışır. Çoğu web sitesi kullanıcısı basit parolalar belirlediğinden parola püskürtme en etkili tekniktir.

![](https://cdn-images-1.medium.com/max/800/0*T2U4_r03cwMIK7d0)

Saldırganlar çoğunlukla, yöneticilerin yeni kullanıcılar ve kayıtlı olmayan hesaplar için standart bir varsayılan parola belirlediği web sitelerinde parola püskürtme saldırısını kullanır.

#### Keylogging

Bir Keylogging saldırısını düzenlerken, saldırgan, kullanıcının gizlice tuşladığı anahtarları kaydetmek için kullanıcının bilgisayarına klavye izleme yazılımı yükler. Bir keylogger, kullanıcıların giriş formlarına yazdığı tüm bilgileri kaydeder ve ardından bunları kötü niyetli saldırgana gönderir.

![](https://cdn-images-1.medium.com/max/800/0*9je3oKzwvjFzUeGg)

#### Adli Bilişim

Fziksel olarak erişimimizin olduğu bir sistemin belleği, diski veya işlemcisinden; string analizi, sinyal ölçümü gibi çeşitli adli bilişim yöntemleri kullanarak gizli anahtarın elde edilmesini kapsar. Uzak sunucu gibi fiziksel erişimimin olmadığı durumlarda bu saldırıdan endişe etmemize gerek yoktur.

![](https://cdn-images-1.medium.com/max/800/0*b4jQGvhwF6m7lBcN)

#### Uygulama Saldırıları Araçları

1. ***CrackStation***
2. ***John the Ripper***
3. ***Hashcat***
4. ***Medusa***
5. ***Hydra***
6. ***Brutus***
7. ***RainbowCrack***
8. ***L0phtCrack***
9. ***OphCrack***

---

### Klasik Kriptanaliz

Klasik kriptanaliz, şifreli metninden düz metini kurtarma veya alternatif olarak şifreli metninden anahtarı bulma bilimidir. Şifreleme yönteminin iç yapısından yararlanan matematiksel analizleri kullanır.

![](https://cdn-images-1.medium.com/max/800/0*ct3PFF4EH3YUqAlK)

Encryption(şifreleme) Decryption(şifre çözme)

Bir şifreleme işlemi 3 unsurdan oluşur. Bunlar: açık metin, şifrelenmiş metin ve anahtardır. Eğer bu unsurlardan her hangi ikisine sahipsek üçüncüsünü rahatlıkla bulabiliriz. Ancak, kriptanalizin asıl işlevi sadece şifreli metin mevcut iken diğerlerini bulabilme becerisidir. Bunun için çeşitli matematiksel yöntemlerden yararlanır.

Bu yöntemler şunlardır:

* **Bilinen Düz Metin Analizi (KPA)**: Bu tür bir saldırıda, bazı düz metin-şifreli metin çiftleri zaten bilinmektedir. Saldırgan, şifreleme anahtarını bulmak için bunları eşler. Halihazırda birçok bilgi mevcut olduğundan bu saldırının kullanımı daha kolaydır.
* **Seçilmiş Düz Metin Analizi (CPA)**: Bu tür saldırıda, saldırgan rasgele düz metinleri seçer ve karşılık gelen şifreli metinleri alır ve şifreleme anahtarını bulmaya çalışır. KPA gibi uygulaması çok basit ama başarı oranı oldukça düşük.
* **Yalnızca Şifreli Metin Analizi (COA)**: Bu tür saldırıda, yalnızca bazı şifreli metinler bilinir ve saldırgan karşılık gelen şifreleme anahtarını ve düz metni bulmaya çalışır. Uygulanması en zor olanıdır, ancak yalnızca şifreli metin gerektiğinden en olası saldırıdır.
* **Uyarlanabilir Seçilmiş Düz Metin Analizi (ACPA)**: Bu saldırı benzer bir EBM’dir. Burada saldırgan, bazı metinler için şifreli metinlere sahip olduktan sonra ek düz metinlerin şifreli metinlerini ister.
* **Doğum günü saldırısı:** Bu saldırı, bir grup insanda aynı doğum gününü paylaşan iki veya daha fazla kişinin olasılığını kullanır. Kriptografide, bu saldırı bir hash fonksiyonundaki çarpışmaları bulmak için kullanılır.
* **Diferansiyel kriptanaliz**: Bu tür saldırı, şifreleme algoritmasındaki kalıpları bulmak için düz metin çiftlerini ve bunlara karşılık gelen şifreli metinleri karşılaştırmayı içerir. Belirli özelliklere sahip blok şifrelere karşı etkili olabilir.
* **Integral kriptanaliz:** Temelinde Değiştirme-Karıştırma işemeri buunan blok şifreleme yöntemleri üzerinde kullanılan bir yöntemdir.

---

### Sosyal Mühendislik

Kurduğumuz kripto sistem ne kadar güçlü olursa olsun insan faktörü kaynaklı riskler göz ardı edilmemelidir. Bir gizli anahtarı elde etmek için rüşvet, şantaj, kandırma veya klasik casusluk kullanılabilir. Örneğin bir kişinin kafasına silah dayayarak şifreyi söylemeye zorlamak oldukça başarılı olabilir. Daha az şiddet içeren bir başka saldırı da, saldırmak istediğimiz kişileri telefonla arayarak “Şirketinizin IT departmanından arıyoruz. Önemli yazılım güncellemeleri için şifrenize ihtiyacımız var” gibi sosyal mühendislik teknikleridir. Bu gibi durumlarda şifrelerini gerçekten verecek kadar saf olan insanların sayısının hiç de az olmaması şaşırtıcıdır.

![](https://cdn-images-1.medium.com/max/800/0*T75D0kY4zcu3_J5U)

Saldırgan her zaman kripto sisteminizdeki en zayıf halkayı arar. Bunun için, güçlü algoritmalar seçmemiz, sosyal mühendislik ve uygulama saldırılarının pratik olmadığından emin olmamız gerekir. Hem uygulama saldırıları hem de sosyal mühendislik saldırıları pratikte oldukça güçlü olabilir.

#### Kimlik Avı Saldırıları (phishing attacks)

Saldırganın kurbana kötü amaçlı bir bağlantı göndererek güvenilir bir site kılığına girdiği bir sosyal mühendislik tekniğini içerir. Kurban, meşru bir web sunucusunda kimlik doğrulaması yaptıklarını varsaydıktan sonra, bu bağlantıya tıklayarak saldırgana hesap bilgilerini sağlar. Bu yolla saldırgan hedef kullanıcının hesap bilgilerini ele geçirmiş olur, kurban ise oltalanmış demektir.

![](https://cdn-images-1.medium.com/max/800/0*C1Redj9meJnjH1ur)

Kimlik hırsızlığının yanı sıra, oltalama saldırıları, saldırganın bir kullanıcının izinlerini elde etmesini sağlayarak, saldırı tespit edilmeden sistemin daha derin bileşenlerini tehlikeye atmasına olanak tanır. Kimlik avı saldırılarında, saldırganlar, kullanıcıyı kötü amaçlı bağlantıyı tıklaması için kandırmak için genellikle birden çok yöntem kullanır:

1. **DNS önbellek zehirlenmesi:** Saldırganlar, kullanıcı isteklerini benzer görünen bir alan adına sahip kötü amaçlı bir siteye yönlendirmek için uygulamanın DNS sunucusundaki güvenlik açıklarından yararlanır.
2. **URL’yi ele geçirme/yazım hatası:** Saldırgan, kimliğine bürünmek istediği web sitesinden ince farklar içeren gerçek görünümlü bir URL oluşturur. Saldırı, kullanıcıların yazım hataları yapmasına bağlıdır, bu nedenle kötü amaçlı sayfaya gelirler.
3. **Sekmeleme:** Saldırgan, katılımsız tarayıcı sekmelerini yasal web sayfaları gibi görünen kötü amaçlı sitelerle yeniden yazar.
4. **Kullanıcı arabirimi düzeltme/iFrame yerleşimi:** Saydam katmanlar kullanan saldırgan, yasal, tıklanabilir bir düğmenin üzerine kötü amaçlı sayfaya bir bağlantı yerleştirir.
5. **Klon kimlik avı :** Bu saldırıda, saldırgan, orijinal e-postadaki bağlantıların URL’lerle değiştirildiği meşru bir e-postanın bir kopyasını kötü amaçlı sitelere gönderir.

---

Bu yazımda kriptanaliz konusunu anlattım. Bir sonraki yazımda kriptografi konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.