## Cryptology Fundamentals

## Cryptology Fundamentals

## Cryptology Fundamentals

## Cryptology Fundamentals

## Part 1




### Kriptoloji Temelleri:#2 Kriptografi



Merhaba, kriptoloji temelleri seririsinin bu yazısında kiptografinin ne olduğundan, şifreleme tekniklerinden ve kriptografik protokollerden bahsedeceğim.

### Kriptografiye Genel Bakış

Kriptografi, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir. Kriptografi bir matematiksel yöntemler bütünüdür ve önemli bilgilerin güvenliği için gerekli gizlilik, aslıyla aynılık, kimlik denetimi, ve asılsız reddi önleme gibi şartları sağlamak amaçlıdır. Bu yöntemler, bir bilginin iletimi esnasında ve saklanma süresinde karşılaşılabilecek aktif saldırı ya da pasif algılamalardan bilgiyiâŠ–”Šdolayısıyla bilginin göndericisi, alıcısı, taşıyıcısı, konu edindiği kişiler ve başka her türlü taraf olabilecek kişilerin çıkarlarını daâŠ–”Škoruma amacı güder.

![](https://cdn-images-1.medium.com/max/800/0*2Vwirutk3ytVmQK7.png)

Kriptografiyi; simetrik şifreleme, asimetrik şifreleme ve kriptografik protokoller olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

![](https://cdn-images-1.medium.com/max/800/1*-xJo79RzeZLimVgF7AMPJw.png)

Kriptografik Algoritmalar için Temel Sınıflandırma Diyagramı

### Simetrik Şifreleme

Simetrik Şifreleme**,** iki tarafın da aynı şifreleme ve şifre çözme yöntemini kullandığı şifreleme tekniğidir. Bu şifreleme yönteminde kullanılacak ortak tek bir gizli anahtar vardır.

Antik çağlardan 1976'ya kadar olan tüm kriptografi, yalnızca simetrik yöntemler üzerine kuruludur ve simetrik şifreler hala yaygın olarak kullanılmaktadır. Özellikle mesajların şifrelenmesi ve bütünlük kontrolü için çok kullanışlıdır.

![](https://cdn-images-1.medium.com/max/800/0*XxKCSz8Z5gCClHYt.png)

Simetrik Şifreleme

Bilgisayar sisteminde; metin, resim, müzik gibi bütün veriler 1–0 lar olarak ifade edilir ve her bir 1–0'a bir bit denir.

Simetrik şifreleme, blok şifreler ve akış şifreleri olarak ikiye ayrılır. Akış şifresi ve blok şifresi birer simetrik şifreleme tekniği olsa da, bazı önemli farklılıklar vardır. Blok şifreler sabit uzunluktaki bit bloklarını şifrelerken, akış şifreleri düz metin bitlerini XOR işlemini kullanarak bir metin şifreleme akışı ile birleştirir.

![](https://cdn-images-1.medium.com/max/800/0*PVVBIhJHRuKvdXHi.png)

### Akış Şifreleme

Akış şifrelemede, bitler ayrı ayrı şifrelenir. Her bir bit, bit akış üretecinden gelen bit ile XOR işlemine tabi tutularak şifrelenmiş olur. Şifrelenmiş metin şifre akışıyla XOR işlemine tabi tutulursa düz metin bulunmuş ve şifre çözülmüş olur. Bu sebeple, akış şifreleme tekniğinde şifreleme ve şifre çözme işlemleri için farklı algoritmalara gerek duyulmaz, aynı algoritma ile bu işlemler yapılır.

![](https://cdn-images-1.medium.com/max/800/0*NDdy7s_T_pc-PWlx.png)

XOR işlemi

Akış şifreleme algoritmalarında en önemli nokta bit akış üretecidir. Bit akış üreteci, kendisine verilen anahtara göre bir bit akışı oluşturur. Bu bit akışının karmaşıklık ve rastgeleliğinin, şifrelemenin güvenilirliği açısından, büyük önemi vardır. Tam da bu noktada farklı bit akış üreteclerine sahip farklı akış şifreleme algoritmaları geliştirilmiştir.

#### ChaCha20

ChaCha20 algoritması, bir akış şifreleme algoritmasıdır. 128 ve 256 biti destekler. Selefi [Salsa20](https://en.wikipedia.org/wiki/Salsa20) ile benzer özelliklere sahiptir. 12 veya 20 farklı turdan oluşan ilkel bir işlevi vardır. RFC 7539'da IETF tarafından standartlaştırıldı ve yazılım uygulamalarında AES'den çok daha verimli ve hızlı olduğu için günümüzde en çok kullanılan algoritmalar arasında yer edinmiştir.

ChaCha20'nın bu kadar popüler olmasında Google'ın payı büyüktür. Google, birkaç yıl öncesine kadar, chrome ve android için simetrik şifreleme algoritması olarak AES-GCM'i kullanmaktaydı. Ancak, mobil cihazlarda arm tabanlı işlemcilerin kullanılması ve bu işlemcilerde intel tabanlı işlemcilerde olduğu gibi AES yapılandırmalarının olmaması nedeniyle nispeten yavaş bir şifreleme yapılmaktaydı. Bu sebeple, Google daha güncel, güvenli ve hızlı bir şifreleme algoritması üzerinde çalışıyordu.

![](https://cdn-images-1.medium.com/max/800/0*p11w2EzrPzNTF_DK.jpg)

ChaCha20-Poly1305

ChaCha20'nin sıçrama noktası, Chrome'un android sürümünde şifreleme için **ChaCha20** ve kimlik doğrulama için **Poly1305** kullanmaya başlamasıydı. Bunun en önemli nedeni, ChaCha20'nin AES gibi biraz daha eski protokollerden üç kat daha yüksek bir performans elde etmesiydi.

ChaCha20, HTTPS bağlantılarında, SSH bağlantılarında ve sunucuları yönetmek için yaygın olarak kullanılır. Popüler WireGuard VPN protokolü bile simetrik veri şifreleme için yalnızca ChaCha20 kullanır. Yakında ChaCha20'yi IPsec bağlantılarında da görmemiz çok olasıdır.

### Blok Şifreleme

Blok şifrelemede, aynı anda bir düz metin bit bloğunun tamamı şifrelenir. Bunun için metin bit bloğuyla aynı uzunlukta bir anahtar bit bloğu gerekir. Pratikte, 128 bit (16 bayt) veya 64 bit (8 bayt) blok uzunluğuna sahip anahtarlar kullanılmaktadır. Anahtar uzunluğu ne kadar uzun olursa, şifreleme işlemi o kadar güvenilirdir.

Blok şifrelemede şifreleme ve şifre çözme algoritmaları farklı algoritmalardır. Şifre çözme algoritması, şifreleme algoritmasında yapılan işlemlerin bire bir tersini yapar.

![](https://cdn-images-1.medium.com/max/800/0*PgkgI4ShvSM2IppP.png)

Blok Şifreleme

Blok şifreleme algoritmalarını güvenilir kılan iki temel özellik vardır. Bunlar karışıklılık ve yayılma kavramlarıdır

**Karışıklık(confusion),** anahtar ve şifreli metin arasındaki ilişkinin gizlendiği bir şifreleme işlemidir.

**Yayılma(diffusion),** düz metnin istatistiksel özelliklerini gizlemek amacıyla bir düz metin sembolünün etkisinin birçok şifreli metin sembolüne yayıldığı bir şifreleme işlemidir.

Yalnızca yayılma veya yalnızca karışıklık gerçekleştiren algoritmalar güvenli değildir. Ancak, bu tür işlemlerin bir arada kullanılmasıyla güçlü şifreler oluşturulabilir. Günümüz blok şifreleme algoritmaları, verilere tekrar tekrar bu işlemleri uygulayan döngülerden oluşur.

Blok şifreleme tekniğinde çokca kullanılan standart hale gelmiş iki algoritma vardır. Bunlar; advanced encryption standard (AES), data encryption standard (DES) algoritmalarıdır.

#### DES

Veri Şifreleme Standardı (DES), son 30 yılın büyük bir bölümünde açık ara en popüler blok şifreleme yöntemi olmuştur. DES anahtar uzunluğu çok kıas olduğu için günümüzde güvenli olarak kabul edilmese de eski uygulamalarda hala kullanılmaktadır.

DES, 64 bit uzunluğundaki blokları 56 bit uzunluğunda bir anahtarla şifreleyen bir algoritmadır. Bu algoritma tümü aynı işlemi gerçekleştiren 16 turda şifreleme işlemi tamamlar. Her turda farklı bir alt anahtar kullanılır ve tüm alt anahtarlar k ana anahtarından türetilir.

![](https://cdn-images-1.medium.com/max/800/0*jNDsQQQOcDvB7E2i.jpg)

Her bir turda yapılan işlemlere daha detaylı bakacak olursak, DES algoritmasının feistel yapısıyla karşılaşırız(aynı zamanda Feistel ağı olarak da bilinir). Bu feistel yapısı dikkatlice tasarlanmışsa çok güçlü şifreler oluşturulabilir. Kriptografik gücüne ek olarak, Feistel ağlarının bir avantajı, şifreleme ve şifre çözmenin neredeyse aynı işlem olmasıdır.

![](https://cdn-images-1.medium.com/max/800/0*fc-FSeFntoNvcQsj.jpg)

Şifrelerin yukarıda bahsedilen iki temel özelliği, yani karışıklık ve yayılma, f-fonksiyonu içinde gerçekleştirilir. Round tur sayısı olarak alınır ve sırasıyla devirler 1,2,..,n için K1,K2,..KN de alt anahtarlar olarak alınır. Daha sonra, Şifreli metin blokları L ve R olmak üzere 2 eşit parçaya bölünür ve fonksiyon içinde işlenir. Ardından, R girişi L, L girişi R olarak çıkışa verilir ve bu işlem n kez tekrarlanır.

Diagram hem şifrelemeyi hem de şifre açmayı göstermektedir. Şifre çözme için alt anahtar sırasının tersine çevrildiğine dikkat edilmesi gerekir; bu, şifreleme ve şifre çözme arasındaki tek farktır.

f-fonksiyonu güvenli bir şekilde tasarlandıktan sonra, Feistel şifresinin güvenliği, anahtar sayısı ve blok uzunluğu ile artar. Anahtar sayısı ne kadar fazla olursa, tur sayısı da o kadar fazla olur ve daha fazla karışıklık ve yayılım elde ederiz. Aynı şekilde blok uzunluğu ne kadar uzun olursa şifrenin yayılımı o kadar uzun olur ve kırılması zorlaşır.

#### AES

Gelişmiş Şifreleme Standardı (AES) günümüzde en yaygın olarak kullanılan simetrik şifredir. AES'i içeren yazılımlar arasında, İnternet güvenlik standardı IPsec, TLS, Wi-Fi şifreleme standardı IEEE 802.11i, güvenli kabuk ağ protokolü SSH (Güvenli Kabuk), İnternet telefonu Skype ve dünya çapında çok sayıda güvenlik ürünü bulunmaktadır.

DES'in aksine AES algoritması Feistel yapısına sahip değildir. Feistel ağları yineleme başına bir bloğun tamamını şifrelemez, örneğin DES'de 64/2 = 32 bit bir turda şifrelenir. AES ise 128 bitin tamamını bir turda şifreler. Bu nedenle, AES algoritması nispeten az sayıda tura sahiptir.

![](https://cdn-images-1.medium.com/max/800/0*QSpz_OkltFg8Ljh_.png)

AES algoritması

Üstteki görselde düz metin x olarak, şifreli metin y olarak ve tur sayısı nr olarak gösterilir.

AES, katmanlardan oluşur. Her katman, bloğun tüm 128 bitini işler. üç farklı katman türü vardır. Bunlar;

**Anahtar Ekleme(*AddRoundKey*) katmanı:** Anahtar üretecinde ana anahtardan türetilen 128 bitlik alt anahtar, durum(x) ile XOR'lanır.

**Bayt Değiştirme*(SubBytes*) katmanı:** Durum matrisindeki her bayt bir tabloya göre ve doğrusal olmayan bir dönüşümle güncellenir.

**Difüzyon katmanı:** Metin bitleri üzerinde yayılımı sağlar. Her ikisi de doğrusal işlemler gerçekleştiren iki alt katmandan oluşur:

1. **Satır Kaydırma *(*ShiftRows) katmanı**, her satır belirli bir sayıda çembersel olarak kaydırılır.
2. **Sütun Karıştırma (MixColumn) katmanı**, her bir süundaki dört baytlık blokları karıştırır. Son tur, MixColumn dönüşümü kullanılmaz.

AES şifreleme algoritmasında şifre çözmek için de bu işlemlerin tersi yapılır.

### Asimetrik Şifreleme

Asimetrik Şifreleme, bir kullanıcının bir gizli anahtara ve aynı zamanda bir de açık anahtara sahip olduğu şifreleme tekniğidir. Asimetrik algoritmalar, dijital imzalar, anahtar oluşturma ve klasik veri şifreleme için kullanılabilir.

1976'da tamamen farklı bir tür şifre olarak Whitfield Diffie, Martin Hellman ve Ralph Merkle tarafından tanıtılmıştır. Açık anahtarlı şifreleme olarak da bilinir.

![](https://cdn-images-1.medium.com/max/800/0*wwVcQD6ILTUMEAq3.png)

Asimetrik Şifreleme

Asimetrik kriptografi diğer adıyla, açık anahtarlı kriptografi oldukça yeni bir şifreleme tekniğidir. 1976'da Whitfield Diffie, Martin Hellman ve Ralph Merkle tarafından tanıtıldı. Asimetrik şifreleme de, her kullanıcı bir gizli anahtara ve bir de açık anahtara sahiptir. Bu anahtarların kullanım şekli şöyledir:

* Mesaj + açık anahtar = Şifreli mesaj
* Şifrelenmiş mesaj + gizli anahtar = Şifresi çözülmüş mesaj
* Mesaj + gizli anahtar = İmzalı mesaj
* İmzalanmış mesaj + açık anahtar = Kimlik doğrulama

Asimetrik şifreleme de, bir kullanıcının açık anahtarıyla şifrelenmiş bir mesaj ancak o kullanıcının gizli anahtarıyla çözülebilir. Bu yöntem o kullanıcıya bir ileti göndermek için kullanılır. Bir kullanıcı mesajı kendi gizli anahtarı ile şifrelemişse, bu mesajı o kullanıcının açık anahtarı ile çözebiliriz. Bu yöntem de kimlik doğrulamada kullanılır, eğer mesaj o kullanıcının açık anahtarıyla çözülebiliyorsa kimliği doğrulanmış olur.

Gerçek açık anahtarlı şifreleme algoritmalarına geçmeden önce bu algoritmaların matematiksel temeline bir göz atalım.

### Açık Anahtar Algoritma Aileleri

**Tamsayı-Faktörleştirme Şemaları:** Birçok açık-anahtar şeması, büyük tamsayıları çarpanlarına ayırmanın zor olduğu gerçeğine dayanmaktadır. Bu algoritma ailesinin en bilinen temsilcisi RSA'dır.

**Ayrık Logaritma Şemaları:** Sonlu alanlarda ayrık logaritma problemi olarak bilinen matematiğe dayalıdır. Buna örnek olarak, Diffie-Hellman anahtar değişimi, Elgamal şifreleme veya Dijital İmza Algoritması (DSA) yı verebiliriz.

**Eliptik Eğri (EC) Şemaları:** Ayrık logaritmanın bir genellemesi, eliptik eğri açık anahtar şemalarıdır. En popüler örnekler arasında Eliptik Eğri Diffie-Hellman anahtar değişimi (ECDH) ve Eliptik Eğri Dijital İmza Algoritması (ECDSA) vardır.

İlk iki aile 1970'lerin ortalarında ortaya çıktı. eliptik eğriler is 1980'lerin ortalarında tanıtıldı. Parametreler ve anahtar uzunlukları dikkatli bir şekilde seçilirse, hiçbir şemaya karşı bilinen bir saldırı yoktur.

#### RSA

RSA, çok büyük tam sayıları çarpanlara ayırmanın algoritmik zorluğu göz önüne alınarak geliştirilen bir şifreleme tekniğidir. RSA 'in kullanıldığı birçok uygulama vardır, ancak pratikte en çok dijital imzalar, dijital sertifikalar ve küçük veri parçalarının şifrelenmesi için kullanılır. Ayrıca, RSA günümüzde en yaygın kullanılan asimetrik şifreleme şemasıdır.

RSA şifrelemesinin, AES gibi simetrik şifrelerden birkaç kat daha yavaş olduğu için simetrik şifrelerin yerini alması amaçlanmadığına dikkat edilmelidir. Bunun nedeni, RSA'nın (veya herhangi bir diğer açık anahtar algoritmasının) gerçekleştirilmesine dahil olan birçok hesaplamadır. Bu nedenle, şifreleme özelliğinin ana kullanımı, bir anahtarı simetrik bir şifreyle (anahtar aktarımı) güvenli bir şekilde değiştirmektir. Uygulamada, RSA genellikle simetrik şifrenin gerçek toplu veri şifrelemesini yaptığı AES gibi simetrik bir şifre ile birlikte kullanılır.

RSA'nın temeldeki tek yönlü işlevi tamsayı çarpanlara ayırma problemidir:  
 İki büyük asal sayıyı çarpmak hesaplama açısından kolaydır (aslında bunu kağıt ve kalemle yapabilirsiniz), ancak elde edilen ürünü çarpanlara ayırmak çok zordur. Euler teoremi ve Euler phi işlevi RSA'da önemli roller oynar. Şimdi, RSA ile şifreleme, şifre çözme ve anahtar oluşturmanın nasıl çalıştığına bakalım.

![](https://cdn-images-1.medium.com/max/800/0*pVs1sy3vN5kCBdeb.png)

RSA şifreleme algoritması

e: şifreleme üssü, d: şifre çözme üssü, n: uzunluk

RSA şifreleme ve şifre çözme işlemlerinde modüler hesaplamalar önemli bir rol oynar. Pratikte x, y, n ve d çok uzun sayılardır (genellikle 1024 bit).

Tüm asimetrik şemaların ayırt edici bir özelliği, genel ve özel anahtarın hesaplandığı bir kurulum aşamasının olmasıdır. Açık anahtar şemasına bağlı olarak, anahtar oluşturma oldukça karmaşık olabilir. Bir RSA şifreleme sistemi için genel ve özel anahtarın hesaplanmasıyla ilgili adımları sıra sıra ele alarak görelim:

1. N = p.q  
    N ile ifade edeceğimiz çok büyük tamsayıyı oluşturacak olan iki faklı ve büyük asal sayı belirlenir. Bu sayılar p ve q olarak isimlendirilir.
2. Ï†(N) = (p-1)(q-1)  
    N sayısının totient değeri hesaplanır. Totient, sayılar teorisinde bir tam sayının o sayıdan daha küçük ve o sayı ile aralarında asal olan sayı adedini belirten fonksiyondur.
3. 1 < e < Ï†(N) ve EBOB(e, Ï†(N)) = 1  
    Yukarıdaki matematiksel ifadeden de anlaşıldığı üzere 1 ile Totient değeri arasında olan ve Totient değeri ile aralarında asal olan bir tam sayı seçilir ve e olarak isimlendirilir. Burada seçilecek olan e sayısının küçük seçilmesi mod ve üs alma gibi işlemleri yaparken performanstan kazandırıyor olsa da bazı durumlarda güvenliği azaltmaktadır.
4. d.e ”‰¡ 1 (mod Ï†(N)  
    Denkliğini sağlayan ve gizli anahtarı oluşturmada kullanılacak olan d sayısı bulunur. Burada yapılacak olan işlem e sayısının mod Ï†(N)'de tersinin bulunmasıdır.

Açık ve gizli anahtar oluşturmak için gerekli olan tüm değerleri elde ettik. Gizli anahtarı oluşturan d sayısının hesaplanmasında kullanılan (p,q, Ï†(N)) sayılarının gizli kalması şartı ile (N,e) çifti açık anahtarı; (N,d) çifti ise gizli anahtarı oluşturmaktadır.

Görüldüğü gibi bu işlemleri yapmak çok uzun ve yorucu olabilir. Bunun için gelişmiş sistemlerde bazı pratik metotlar kullanılmaktadır. RSA şemasını tasarlarken, e ve d değerlerinin çok büyük olması, yavaş şifreleme yapmamıza sebep olabilir. Buna karşılık bu değerlerin çok küçük değerler olması ise güvenlik sorunlarını beraberinde getirir.

### Protokoller

Kriptografik Protokoller, kriptografik algoritmaların uygulanması ve standartlaştırılmasıyla oluşturulan şifreleme yöntemleridir. Simetrik ve asimetrik algoritmalar güvenli İnternet iletişiminin yapı taşlarıdır.Bir protokol, bu algoritmaların nasıl kullanacağını tanımlar.

### Dijital imza

Dijital imza, elektronik ortamda kimlik doğrulama amacıyla kullanılan yasal bir kimlik doğrulama yöntemidir. Kabaca elektronik ortamda atılan imza olarak tanımlanabilir. Geleneksel el yazısı imzalarda olduğu gibi, yalnızca dijital mesajı oluşturan kişi geçerli bir imza üretebilmelidir. Bunu kriptografik primi-262 10 Dijital İmzalar ile başarmak için açık anahtarlı kriptografi uygulamamız gerekiyor. Temel fikir, mesajı imzalayan kişinin özel bir anahtar kullanması ve alıcı tarafın eşleşen açık anahtarı kullanmasıdır. Dijital imza şemasının prensibi şekilde gösterilmektedir.

![](https://cdn-images-1.medium.com/max/800/0*Q9yF6vAzC-qdlXni.png)

Dijital İmza

Dijital imzaların temel özelliği şu şekildedir: Geçerli bir imza yalnızca imzalayanın özel anahtarıyla hesaplanabileceğinden, imzalı bir ileti, açık bir şekilde kaynağına kadar izlenebilir. Sadece imzalayan, kendi adına imza oluşturma yetkisine sahiptir. Bu nedenle, imzalayan tarafın mesajı gerçekten oluşturduğunu kanıtlayabiliriz.  
 Üç popüler ortak anahtar algoritma ailesinin her biri, yani tamsayı çarpanlarına ayırma, ayrık logaritmalar ve eliptik eğriler, dijital imzalar oluşturmamıza izin verir.

### Özet Fonksiyonları

Özet fonksiyonları diğer adıyla, hash fonksiyonları önemli bir kriptografik protokoldür. Son derece kullanışlıdır ve hemen hemen tüm bilgi güvenliği uygulamalarında karşımıza çıkar. Belirli bir mesaj için, mesaj özeti veya hash değeri, bir mesajın parmak izi, yani bir mesajın benzersiz bir temsili olarak görülebilir. Diğer kripto algoritmalarından farklı olarak, hash fonksiyonlarının bir anahtarı yoktur.

![](https://cdn-images-1.medium.com/max/800/0*caf2jzqzDuHFxZ2H.png)

Özet Fonksiyonu

Hash fonksiyonları, sayısal bir girdi değerini başka bir sıkıştırılmış sayısal değere dönüştüren matematiksel bir fonsiyondur. Hash fonksiyonunun girdisi isteğe bağlı uzunluktadır ancak çıktı her zaman sabit uzunluktadır. Bir hash fonksiyonu tarafından döndürülen değerlere mesaj özeti veya basitçe hash değerleri denir. Girdi ne olursa olsun, belirli bir hash fonksiyonu tarafından üretilen tüm çıktı dizileri aynı uzunluktadır. Uzunluk, kullanılan hashing teknolojisinin türüne göre tanımlanır. Çıktı dizeleri, hash fonksiyonunda tanımlanan bir dizi karakterden oluşturulur.

Kriptografide hash fonksiyonlarının kullanımı çok çeşitlidir. Hash fonsiyonları, dijital imza şemalarının ve mesaj doğrulama kodlarının önemli bir parçasıdır. örneğin, parola hashlerinin depolanması veya anahtar türetme gibi diğer kriptografik uygulamalar için de yaygın olarak kullanılmaktadır.

**Hash fonksiyonlarının özellikleri**

* **Tek yönlü:** Bir hash değeri oluşturulduktan sonra, onu orijinal verilere geri dönüştürmek imkansız olmalıdır.
* **Çakışmasız:** Bir hash fonksiyonunun çakışmasız olması için, iki farklı veri değerinin hash değer aynı olmamalıdır. Başka bir deyişle, her girdi dizisi benzersiz bir çıktı dizisi oluşturmalıdır.
* **Hızlı:** Bir hash fonksiyonunun hash değerlerini hesaplaması çok uzun sürüyorsa, pek kullanılmaz. Hash fonksiyonları bu nedenle çok hızlı olmalıdır.

#### Popüler Hash Fonksiyonları

#### Message Digest (MD)

MD ailesi, MD2, MD4, MD5 ve MD6 karma işlevlerinden oluşur. İnternet Standardı RFC 1321 olarak kabul edilmiştir. 128 bitlik bir hash fonksiyonudur. Ailenin en popüler üyesi MD5'tir.

MD5, uzun yıllar boyunca en popüler ve yaygın olarak kullanılan hash fonksiyonuydu. MD5 özetleri, aktarılan dosyanın bütünlüğü hakkında güvence sağlamak için yazılım dünyasında yaygın olarak kullanılmaktadır. Örneğin, dosya sunucuları genellikle dosyalar için önceden hesaplanmış bir MD5 hash değeri verir, böylece bir kullanıcı indirilen dosyanın hash değerini verilen değer ile karşılaştırabilir. 2004 yılında, MD5'te çakışmalar bulundu. Bilgisayar kümesi kullanılarak bir analitik saldırının yalnızca bir saat içinde başarılı olduğu bildirildi. Bu çakışma saldırısı, MD5'in güvenilir olmayan bir algoritma olmasıyla sonuçlandı ve bu nedenle artık kullanılması önerilmiyor.

#### Secure Hash Function (SHA)

SHA ailesi dört SHA algoritmasından oluşur; SHA-0, SHA-1, SHA-2 ve SHA-3. Aynı aileden olmalarına rağmen, yapısal olarak farklı algoritmalar bulumaktadır.

Orijinal sürüm, 160 bitlik bir karma işlevi olan SHA-0'dır ve 1993 yılında Ulusal Standartlar ve Teknoloji Enstitüsü (NIST) tarafından yayınlandı. Birkaç zayıf yönü vardı ve çok popüler olmadı. Daha sonra 1995'te SHA-1, SHA-0'ın iddia edilen zayıflıklarını düzeltmek için tasarlandı.

SHA-1, mevcut SHA karma işlevlerinin en yaygın kullanılanıdır. Güvenli Yuva Katmanı (SSL) güvenliği dahil olmak üzere yaygın olarak kullanılan birçok uygulama ve protokolde kullanılır. 2005 yılında, SHA-1'in uzun vadeli kullanılabilirliğini şüpheli hale getiren pratik zaman çerçevesi içinde SHA-1 için çakışmalarını ortaya çıkarmak için bir yöntem bulundu.

SHA-2 ailesi, hash değerlerindeki bit sayısına bağlı olarak SHA-224, SHA-256, SHA-384 ve SHA-512 olmak üzere dört SHA varyantına sahiptir. SHA-2 hash fonksiyonuna henüz başarılı bir saldırı bildirilmemiştir. SHA-2 güçlü bir hash fonksiyonu olmasına ve önemli ölçüde farklı olmasına rağmen, temel tasarımı hala SHA-1'in tasarımına benzemektedir. Bu nedenle, NIST yeni hash fonksiyon tasarımları için çağrıda bulundu.

Ekim 2012'de NIST, yeni SHA-3 standardı olarak Keccak algoritmasını seçti. Keccak kullanıcılarına, verimli performans ve saldırılara karşı güçlü direnç gibi pek çok avantaj sunar.

#### RIPEMD

RIPEMD, RACE Integrity Primitives Assessment Message Digest'in kısaltmasıdır. Bu hash fonksiyonları seti, açık araştırma topluluğu tarafından tasarlanmıştır ve genellikle bir Avrupa hash fonksiyonaları ailesi olarak bilinir. Ailenin 3 üyesi vardır. Bunlar; RIPEMD, RIPEMD-128 ve RIPEMD-160'dır. Bu algoritmanın 256 ve 320 bit sürümleri de mevcuttur.

Orijinal RIPEMD (128 bit), MD4'te kullanılan tasarım ilkelerine dayanmaktadır ve güvenlik sorunları bulunmuştur. RIPEMD 128 bit sürümü, orijinal RIPEMD'deki güvenlik açıklarının üstesinden gelmek için hızlı bir düzeltme olarak geldi.

RIPEMD-160 geliştirilmiş bir versiyondur ve ailede en çok kullanılan versiyondur. 256 ve 320 bit sürümleri, çakışma olasılığını azaltır, ancak sırasıyla RIPEMD-128 ve RIPEMD-160 ile karşılaştırıldığında daha yüksek güvenlik seviyelerine sahip değildir.

#### Whirlpool

Whirlpool, 512 bitlik bir hash fonksiyonudur. Gelişmiş Şifreleme Standardının (AES) değiştirilmiş versiyonundan türetilmiştir. Tasarımcılardan biri, AES'in ortak yaratıcılarından Vincent Rijmen'di. Whirlpool'un üç versiyonu yayınlandı. Bunlar; WHIRLPOOL-0, WHIRLPOOL-T ve WHIRLPOOL'dır.

### Anahtar Dağıtım Protokolü

Anahtar da protokolü, bir grubun birkaç üyesi arasında bazı gizli değerlerin paylaşıldığı bir şifreleme protokolüdür. Gizli değer ayrıca örneğin grubun üyeleri arasındaki güvenli iletişim kanalı için bir gizli oturum anahtarı olarak kullanılabilir. Kabaca söylemek gerekirse, anahtar dağıtım protokolü, iki veya daha fazla taraf arasında paylaşılan bir anahtar oluşturmakla ilgilenir. Bunun için, anahtar taşıma veya anahtar anlaşma yöntemleri kullanılabilir. Anahtar taşıma protokolü, bir tarafın gizli bir değeri diğerlerine güvenli bir şekilde aktardığı bir tekniktir. Bir anahtar anlaşma protokolünde, iki (veya daha fazla) taraf, tüm tarafların anahtara katkıda bulunduğu ortak anahtarı türetir. İdeal olarak, tarafların hiçbiri nihai ortak anahtarın ne olacağını kontrol edemez.

![](https://cdn-images-1.medium.com/max/800/0*TG166uwZDCXkgCtb.png)

#### Anahtar Anlaşma

Kriptografide, bir anahtar anlaşması protokolü, iki veya daha fazla tarafın bir anahtar üzerinde her ikisinin de sonucu etkileyecek şekilde anlaşabildiği bir protokoldür. Bu, uygun şekilde yapılırsa, istenmeyen üçüncü şahısların, anlaşmalı taraflara bir seçim dayatmasını engeller. Pratikte, gelişmiş protokoller, herhangi bir gizli dinleme yapan tarafa hangi anahtarın üzerinde anlaşmaya varıldığını açıklamaz.

#### Anahtar Taşıma

Birçok anahtar taşıma protokolünde, bir tarafın anahtarı oluşturması ve bu anahtarı diğer tarafa göndermesi yeterlidir; diğer tarafın anahtar üzerinde hiçbir etkisi yoktur.

Bir anahtar anlaşma protokolü kullanmak, bu tür sistemlerle ilişkili bazı anahtar dağıtım sorunlarından kaçınır. Her iki tarafın da nihai türetilmiş anahtarı etkilediği protokoller, kusursuz iletme gizliliğini uygulamanın tek yoludur.

![](https://cdn-images-1.medium.com/max/800/1*ILSONeBau6S2Vidq8GyOtA.png)

Bu yazımda kriptografi konusunu anlattım. Bir sonraki yazımda kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 2




### Kriptoloji Temelleri:#1 Giriş



Merhaba, kriptoloji temelleri serisinin bu ilk yazısında, kriptolojinin ne olduğundan, geleneksel şifreleme tekniklerinden ve güçlü bir şifrenin nasıl oluşturulabileceğinden bahsedeceğim.

### Kriptolojiye Genel Bakış

Şifreleme bilimi olarak adlandırılan bu bilim türünde, gizli tutulmak istenen şeyler bir sistem dahilinde değişik teknik ve yöntemler ile şifrelenir. Aynı zamanda kriptoloji bilimi, şifrelenen iletilerin istenmeyen kişiler tarafından deşifre edilmemesi için de çalışmalar yapmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*hjisKMmnXD1yQQXQ3IOFjA.png)

Kriptoloji şifre bilimidir. Kriptografi bilgi güvenliği ile uğraşır, Kriptoanaliz güvenli bilginin kırılması başka bir deyişle kriptografinin tam karşıtıdır. Kriptoanalistler genelde şifre çözmeye dayalı çalışırlar. Kriptoloji bir [matematik](https://tr.wikipedia.org/wiki/Matematik "Matematik") bilimidir ve genelde sayılar teorisi üstüne kuruludur.

**Kriptografi**, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir.

**Kriptanaliz**, kripto sistemleri kırma, deşifre etme bilimidir.

### Tarihsel Gelişim

İlk kriptolog, 4000 yıl önce yaşamış Mısırlı bir kâtiptir. O, efendisinin hayatını anlatırken hiyeroglifleri şifrelenmiş bir şekilde oluşturmuştu ve bazı hiyeroglifler daha önce hiç kullanılmamıştı.

Kriptografi, bu şekilde başlamasına karşın, hayatının ilk 3000 yılında neredeyse hiç gelişemedi. Dünyanın farklı farklı yerlerinde bağlantısız bir şekilde en temel biçimde kullanılmıştı ancak medeniyetlerin yıkılışıyla sonraki adımlara geçilememişti.

Dönemin en önde uygarlığı olan Çin'de ise yazının şifresiz yazılmasının bile çok zor olması nedeniyle kriptografi hiç gelişemedi.

Daha sonraları (MÖ 5.--6. yüzyıl) askeri istihbaratta gizlilik gerekmesi nedeniyle, kriptografi askeri alana girdi. Askeri alandaki ilk kriptograflar Spartalılardır.

9. yüzyıl'da [Kindî](https://tr.wikipedia.org/wiki/Kind%C3%AE "Kindî"), kriptoloji biliminde uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişi olmuştur. Kindî, kriptoloji biliminde Jul Sezar (MÖ 50) tarafından bulunan ve uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişidir.

### Geleneksel Şifreleme Teknikleri

Tarihsel olarak temel seviyede birçok şifreleme algoritmas geliştirilmiş ve kullanılmıştır. Günümüzde gelişen bilgisayar teknolojisi ile bu şifreleri kırmak oldukçça kolay hale gelmiştir. Şimdi bu şifreleme tekniklerine ve nasıl zayıflıkları olduklarına detaylı değinelim.

#### İkame Şifresi

Bir metni şifrelemek için en basit yöntemlerden biri olan, ikame şifresi(yer değiştirme şifresi) tarihsel süreçte birçok kez kullanılmıştır ve temel kriptografinin iyi bir örneğidir.  
Fikir çok basit, alfabenin her harfini bir başkasıyla değiştiriyoruz. Örneğin;  
A ”†' k  
B ”†' d  
C ”†' w  
Bu örnekte, *ABBA* ifadesi *kddk* olarak şifrelenecektir.

Hangi harfin hangi harfe karşılık geleceğini belirlediğimiz ikame tablosunu tamamen rastgele seçtiğimizi varsayalım. İkame tablosu bu şifreleme sisteminin anahtarı olmuş olur. Her zaman olduğu gibi simetrik kriptografide anahtar gizli tutulmalıdır, yani A ve B arasında güvenli bir şekilde dağıtılmalıdır. Simetrik-Asimetrik kriptografi hakkında detaylı bilgi edinmek için bir önceki [yazımıza](https://pwnlab.me/tr-kriptografiye-giris/) bakabilirsiniz.  
 Tahmin edilebileceği gibi bu şifreyi kırmak oldukça kolaydır. Bu noktada klasik kriptanaliz tekniklerinden yararlanabiliriz.

#### İlk Saldırı: Kaba Kuvvet veya Kapsamlı Anahtar Arama

Kaba kuvvet saldırıları basit bir konsepte dayanır: Saldırgan, şifreli metine ve kısa bir düz metin parçasına (örneğin şifrelenmiş metnin başlığına) sahiptir. Bu durumda, tüm olası anahtarları deneyerek şifreli metni çözer. Ortaya çıkan düz metin, kısa düz metin parçasıyla eşleşirse doğru anahtarı bulmuş olur. Pratikte, kaba kuvvet saldırısı daha karmaşık olabilir çünkü yanlış anahtarlar yanlış, pozitif sonuçlar verebilir.

Prensipte simetrik şifrelere karşı kaba kuvvet saldırısının her zaman mümkün olduğuna dikkat etmek önemlidir. Pratikte uygulanabilir olup olmadığı, belirli bir şifre için var olan olası anahtarların sayısına bağlıdır. Tüm anahtarları test etmek çok fazla zaman alıyorsa, yani birkaç on yıl alıyorsa, şifre bir kaba kuvvet saldırısına karşı güvenlidir.

İkame şifresinin anahtar uzayını belirleyelim: İlk A harfinin yerine geçecek olan harfi seçerken alfabenin 26 harfinden rastgele bir harf seçiyoruz (yukarıdaki örnekte k seçtik). Bir sonraki alfabe harfi B'nin karşılığı, kalan 25 harften rasgele seçilmiştir, vb. Bu nedenle, ikame şifresinin anahtar uzayı = 26 · 25 · ”¦.. · 3 · 2 · 1 = 26! olur.

Yüz binlerce yüksek güçlü bilgisayarla bile böyle bir arama birkaç on yıl alacaktır. Bu nedenle, ikame şifresinin güvenli olduğunu düşünebiliriz. Ancak, bu yanlış çünkü daha güçlü bir saldırı daha var.

#### İkinci Saldırı: Harf Frekans Analizi

Frekasn Analizi 9.yy.'da Al-Kindi tarafından önerilmiştir. Dildeki tekrarlara dayanmaktadır.

Herhangi bir dil için, o dildeki harflerin kullanım sıklıkları hesaplanır. İngilizce dilinde harflerin kullanım sıklığını içeren tablo aşağıda verilmiştir.

![](https://cdn-images-1.medium.com/max/800/0*9LADpthWZ361CIFT.png)

Tablodan da görüleceği gibi, ingilizce dilinde en sık kullanılan harf 'E' harfidir, ikinci en sık kullanılan harf ise 'T' harfidir. Eğer şifreli metin uzunsa en çok gözüken harf büyük olasılıkla düz metindeki E'ye denk gelir ve ikinci en çok gözüken harfte büyük olasılıkla T'ye denk gelir, bu şekilde devam eder.

İkame şifresi, böyle bir analitik saldırı ile kolayca kırılabilir. Şifrenin en büyük zayıflığı, düz metnin her karakterinin her seferinde aynı karakterle değiştirilmesidir.

#### Sezar Şifresi

Sezar şifresi diğer adıyla kaydırma şifresi, aslında ikame şifresinin özel bir halidir. Kaydırma şifresinin kendisi son derece basittir: Düz metnin her harfini alfabede sabit sayıda konumla kaydırırız. Örneğin, 3 konum kaydırırsak, A yerine d, B yerine e vb. gelirdi. Tek sorun alfabenin sonuna doğru ortaya çıkıyor: X, Y, Z ile ne yapmalıyız? Bu durumda başa dönüyoruz. Bu durumda, X->a, Y->b ve Z->c ile yer değiştirilir.  
 Tarihte Julius Sezar bu şifreyi üç konumlu bir kaydırma ile kullanmıştı. Sezar şifresi ismi buradan gelmektedir.  
 Şifrenin matematiksel ifadesi için alfabenin harfleri aşağıdaki tabloda gösterildiği gibi sayısal olarak kodlanmıştır.

![](https://cdn-images-1.medium.com/max/800/0*0ATssVLmJQigP6cg.png)

Anahtar k = 17 olsun ve düz metin:

ATTACK = x1,x2,”¦,x6 = 0,19,19,0,2,10 olsun.s

Şifreli metin şu şekilde hesaplanır:

y1,y2,”¦,y6 = 17,10,10,17,19,1 = rkkrtb

İkame şifresinde olduğu gibi, kaydırma şifresi de hiç güvenli değildir. Aynı şekilde bu şifreyi kırmak için de iki yolumuz var:  
 1. Anahtar uzayı 26 anahtardan oluştuğu için, belirli bir şifreli metnin şifresini tüm olası 26 anahtarla çözmeye çalışarak, kaba kuvvet yöntemiyle, kırabiliriz. Ortaya çıkan düz metin okunabilir ise, anahtarı bulmuş oluruz.  
 2. İkame şifresindeki gibi frekans analizi kullanılabilir.

#### Vigenere Şifresi

Çok alfabeli şifrelemenin basit bir formu olan Vigenere şifreleme, tek alfabeli kaydırma ve yerine koyma şifreleme yöntemlerine dayanan sezar şifreleme algoritmasının geliştirilmiş halidir. Sezar şifrelemede kaydırma ve yerine koyma işemleri için sadece bir alfabe kullanılırken, Vigenere şifrelemede birden fazla alfabe kullanılır. Böylece şifrelenecek mesajdaki aynı harflerin şifrelenmesi sonucunda farklı harfler ortaya çıkar.

![](https://cdn-images-1.medium.com/max/800/0*QLwvLTeM5X8wzRbJ)

Şifreleme yönteminde öncelikle şifreleme işlemi sırasında kullanılacak anahtar seçilir. Şifrelenecek mesajın ilk harfi, anahtar değerinin ilk harfinin alfabedeki sırası oranında kaydırılır ve şifreli harf elde edilir. Anahtar değerindeki her harfin sırasına göre, şifrelenecek mesajdaki her harf farklı bir alfabe ile şifrelenir ve şifreleme işlemi tamamlanır.

#### Playfair Şifresi

Charles Wheatstone tarafından 1854'de önerilmiştir , Lord Playfair kullanımını teşvik etmiştir. Birden fazla harf değişimi kullanılarak daha güçlü bir şifreleme yapılması hedeflenmiştir.

Şifrelemede anahtarın ve alfabenin geri kalanının yer aldığı 5×5'lik bir tablo kullanılır. Anahtarı ve 4 basit kuralı bilmek sistemi kullanmak için yeterlidir.

**Kurallar:**

1- Eğer iki harf de aynıysa ya da en son tek bir harf kaldıysa, ilk harften sonra bir "X" harfi eklenir.

2- Eğer iki harf aynı satırdaysa, her harf sağındaki harfle değiştirilir. (bir harf eğer satır sonundaysa, satır başındakiyle değiştirilir)

3-Eğer iki harf aynı sütundaysa, her harf altındaki harfle değiştirilir(bir harf eğer sütunun sonundaysa, sütun başındakiyle değistirilir)

4-Eğer harfle aynı sütun veya satırda değilse, harfler bir dikdörtgenin iki köşesi olarak düşünülür ve harfler karşılarındaki köşede yer alan harf ile değiştirilir. Bir örnekle açıklayalım.

**mesajımız: kriptoloji**  
**şifremiz: keyword**

Bu durumda tablo şekildeki gibi olacaktır. Önce anahtar yazılır. Aynı harfler bir kez kullanılır. 5×5'lik tablonun geri kalanı, kalan harflerle doldurulur. 25 harfe inmek için I ve J harfi aynı kutuya konur.

![](https://cdn-images-1.medium.com/max/800/0*Vo-d0ErN-moY0kLR.jpg)
> *düz metin: kr ip to lo ji için*

> *şifreli metin: rf hq kz sc jx olur*

Plafair gibi ikili harf değişim sistemleri iki harfli frekans analizine dayanıklı değildirler. Bilgisayarlar ile kısa uzunluktaki harf değişimlerini kırmak mümkündür.

Şifreyi kırmak için dilde ikili harf gruplarının ne sıklıkla görüldüğü hesaplanır ve bunun üzerinden mesajın şifresi çözülmeye çalışılır. Bu işlem başta göz korkutabilir ancak bir bilgisayar için hiç de zor değildir. Güçlü bir bilgisayar sistemi, 8-harf'e kadar frekans analizini yapabilecek yeterliktedir

#### Affine Şifresi

Affine şifreeme mono alfabetik yerine koymalı şifreleme yöntemlerinin bir çeşididir. Yöntemde önce kullanılacak alfabenin her harfine karşılık bir sayı değeri atanır bu değerer bir tabloda tutulur. Bu tablonun karşılıklı iletişim gerçekleştirek isteyen her iki tarafta da bulunması gerekir.

![](https://cdn-images-1.medium.com/max/800/0*Z-cr2RD4JROMRDIQ)

Şifreenmek istenen açık mesajın her karakteri için, karaktere karşılık gellen sayı değeri basit bir matematiksel fonksiyona girdi olarak gönderilir. Fonksiyondan çıkış olarak üretilen bu sayı değeri, tabloda hangi karakteri temsil ediyorsa o karakter, şifreli mesajın yapısını oluşturur.

#### Vernam Şifresi

Adına kırılmaz şifreleme de diyebileceğimiz bu yöntem çok güvenilir olmasına rağmen pratikte uygulanması oldukçca zordur. Bu yöntemde, tek sefer kullanılacak rastgele karakterlerden/bitlerden oluşan uzun bir dizi üretilir. Düz metin, one-time pad'le XOR işlemine sokularak şifreli metin elde edilir. Şifreli metin ile one-time pad'in XOR işlemine sokulması düz metni geri getirir.

![](https://cdn-images-1.medium.com/max/800/0*6s6SoNCSSj-Sqs27.png)

one-time pad olarak da bilinen isminden anlaşılacağı gibi tek kullanımlık ve tamamen rastgele üretilmiş olmalıdır. .Aynı anahtarın tekrar kullanımı şifrelemede zayıflığa yol açar ve kırılabilmesine olanak tanır.

Bu şifreleme tekniği kusursuz gizlilik sağlar çünkü şifreli metin düz metin hakkında hiçbir bilgi içermemektedir. Frekans analizi bu teknikte kullanılamaz. Bitler yerine harfler ya da karakterler üzerinde çalışan halini de kullanmak mümkündür.

Bunun yanında, anahtarın çok uzun(mesaj ile aynı uzunlukta) ve dağıtımının zor olması bu şifreyi pratikte kullanmayı zor bir hale getirmektedir.

### Güçlü Şifre

Güçlü bir şifrenin karakteristik özellikleri, hem uzun hem de çeşitli olmasıdır. "1234" gibi basit bir şifre kombinasyonu kolayca tahmin edilebilir. Tahmin edilemese bile bir programı yardımıyla saldırı yapan internet korsanı, birkaç saatlik tarama sonucunda (bazen daha kısa) şifrenizi kolayca ele geçirebilir. Şifremizin içerisindeki çeşitlilik, şifremizin uzunluğu ve farklı karakterlerin şifremize dahil olması, şifremizi brute force gibi yöntemlerle kırmayı güç hatta bazen imkansız hale getirir.

Güçlü bir şifreyi kendiniz de oluştuabileceğiniz gibi bir araçtan da yardım alabilirsiniz: <https://passwordsgenerator.net/>

#### Güçlü bir şifre için:

1. Maksimum uzunluğu hedefleyin
2. Şifrenizi sadece rakam veya harflerden oluşturmayın
3. Şifrenizde ekstra karakterlere yer verin

#### Güçlü şifre örnekleri

* Tu\9a;gMD
* hb!(Bz8XE
* 5}JBqseLL
* `zhx!8BBF
* u$7sSsX3#

Tabi bu tür şifreleri akılda tutmak zor olabilir. Bunun için parola yöneticisi yazılımlarını kullanabilirsiniz.

Bu yazımda kriptoloji konusunu anlattım. Bir sonraki yazımda kriptografi ve kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 3




### Kriptoloji Temelleri:#3 Kriptanaliz



Merhaba, kriptoloji temelleri serisinin bu yazısında kriptanalizin ne olduğundan, şifre kırma tekniklerinden ve sosyal mühendislik yöntemlerinden bahsedeceğim.

### Kriptanalize Genel Bakış

Kriptanaliz, kripto sistemleri kırma, deşifre etme bilimidir. Şifrelenmiş metinlerin çözümünü araştıran kriptoloji dalıdır. Kriptanaliz, bilinmeyen anahtarları bulmak için kullanılır.

![](https://cdn-images-1.medium.com/max/800/0*WYSM0JXe3tpf70lG.png)

Kriptanalizi; Uygulama Saldırıları, klasik kriptanaliz ve sosyal mühendislik olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

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

#### Şifre Püskürtme Saldırıları (Password Spraying Attacks)

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

### Klasik Kriptanaliz

Klasik kriptanaliz, şifreli metninden düz metini kurtarma veya alternatif olarak şifreli metninden anahtarı bulma bilimidir. Şifreleme yönteminin iç yapısından yararlanan matematiksel analizleri kullanır.

![](https://cdn-images-1.medium.com/max/800/0*ct3PFF4EH3YUqAlK)

Encryption(şifreleme) Decryption(şifre çözme)

Bir şifreleme işlemi 3 unsurdan oluşur. Bunlar: açık metin, şifrelenmiş metin ve anahtardır. Eğer bu unsurlardan her hangi ikisine sahipsek üçüncüsünü rahatlıkla bulabiliriz. Ancak, kriptanalizin asıl işlevi sadece şifreli metin mevcut iken diğerlerini bulabilme becerisidir. Bunun için çeşitli matematiksel yöntemlerden yararlanır.

Bu yöntemler şunlardır:

* **Bilinen Düz Metin Analizi (KPA)**: Bu tür bir saldırıda, bazı düz metin-şifreli metin çiftleri zaten bilinmektedir. Saldırgan, şifreleme anahtarını bulmak için bunları eşler. Halihazırda birçok bilgi mevcut olduğundan bu saldırının kullanımı daha kolaydır.
* **Seçilmiş Düz Metin Analizi (CPA)**: Bu tür saldırıda, saldırgan rasgele düz metinleri seçer ve karşılık gelen şifreli metinleri alır ve şifreleme anahtarını bulmaya çalışır. KPA gibi uygulaması çok basit ama başarı oranı oldukça düşük.
* **Yalnızca Şifreli Metin Analizi (COA)**: Bu tür saldırıda, yalnızca bazı şifreli metinler bilinir ve saldırgan karşılık gelen şifreleme anahtarını ve düz metni bulmaya çalışır. Uygulanması en zor olanıdır, ancak yalnızca şifreli metin gerektiğinden en olası saldırıdır.
* **Uyarlanabilir Seçilmiş Düz Metin Analizi (ACPA)**: Bu saldırı benzer bir EBM'dir. Burada saldırgan, bazı metinler için şifreli metinlere sahip olduktan sonra ek düz metinlerin şifreli metinlerini ister.
* **Doğum günü saldırısı:** Bu saldırı, bir grup insanda aynı doğum gününü paylaşan iki veya daha fazla kişinin olasılığını kullanır. Kriptografide, bu saldırı bir hash fonksiyonundaki çarpışmaları bulmak için kullanılır.
* **Diferansiyel kriptanaliz**: Bu tür saldırı, şifreleme algoritmasındaki kalıpları bulmak için düz metin çiftlerini ve bunlara karşılık gelen şifreli metinleri karşılaştırmayı içerir. Belirli özelliklere sahip blok şifrelere karşı etkili olabilir.
* **Integral kriptanaliz:** Temelinde Değiştirme-Karıştırma işemeri buunan blok şifreleme yöntemleri üzerinde kullanılan bir yöntemdir.

### Sosyal Mühendislik

Kurduğumuz kripto sistem ne kadar güçlü olursa olsun insan faktörü kaynaklı riskler göz ardı edilmemelidir. Bir gizli anahtarı elde etmek için rüşvet, şantaj, kandırma veya klasik casusluk kullanılabilir. Örneğin bir kişinin kafasına silah dayayarak şifreyi söylemeye zorlamak oldukça başarılı olabilir. Daha az şiddet içeren bir başka saldırı da, saldırmak istediğimiz kişileri telefonla arayarak "Şirketinizin IT departmanından arıyoruz. Önemli yazılım güncellemeleri için şifrenize ihtiyacımız var" gibi sosyal mühendislik teknikleridir. Bu gibi durumlarda şifrelerini gerçekten verecek kadar saf olan insanların sayısının hiç de az olmaması şaşırtıcıdır.

![](https://cdn-images-1.medium.com/max/800/0*T75D0kY4zcu3_J5U)

Saldırgan her zaman kripto sisteminizdeki en zayıf halkayı arar. Bunun için, güçlü algoritmalar seçmemiz, sosyal mühendislik ve uygulama saldırılarının pratik olmadığından emin olmamız gerekir. Hem uygulama saldırıları hem de sosyal mühendislik saldırıları pratikte oldukça güçlü olabilir.

#### Kimlik Avı Saldırıları (phishing attacks)

Saldırganın kurbana kötü amaçlı bir bağlantı göndererek güvenilir bir site kılığına girdiği bir sosyal mühendislik tekniğini içerir. Kurban, meşru bir web sunucusunda kimlik doğrulaması yaptıklarını varsaydıktan sonra, bu bağlantıya tıklayarak saldırgana hesap bilgilerini sağlar. Bu yolla saldırgan hedef kullanıcının hesap bilgilerini ele geçirmiş olur, kurban ise oltalanmış demektir.

![](https://cdn-images-1.medium.com/max/800/0*C1Redj9meJnjH1ur)

Kimlik hırsızlığının yanı sıra, oltalama saldırıları, saldırganın bir kullanıcının izinlerini elde etmesini sağlayarak, saldırı tespit edilmeden sistemin daha derin bileşenlerini tehlikeye atmasına olanak tanır. Kimlik avı saldırılarında, saldırganlar, kullanıcıyı kötü amaçlı bağlantıyı tıklaması için kandırmak için genellikle birden çok yöntem kullanır:

1. **DNS önbellek zehirlenmesi:** Saldırganlar, kullanıcı isteklerini benzer görünen bir alan adına sahip kötü amaçlı bir siteye yönlendirmek için uygulamanın DNS sunucusundaki güvenlik açıklarından yararlanır.
2. **URL'yi ele geçirme/yazım hatası:** Saldırgan, kimliğine bürünmek istediği web sitesinden ince farklar içeren gerçek görünümlü bir URL oluşturur. Saldırı, kullanıcıların yazım hataları yapmasına bağlıdır, bu nedenle kötü amaçlı sayfaya gelirler.
3. **Sekmeleme:** Saldırgan, katılımsız tarayıcı sekmelerini yasal web sayfaları gibi görünen kötü amaçlı sitelerle yeniden yazar.
4. **Kullanıcı arabirimi düzeltme/iFrame yerleşimi:** Saydam katmanlar kullanan saldırgan, yasal, tıklanabilir bir düğmenin üzerine kötü amaçlı sayfaya bir bağlantı yerleştirir.
5. **Klon kimlik avı :** Bu saldırıda, saldırgan, orijinal e-postadaki bağlantıların URL'lerle değiştirildiği meşru bir e-postanın bir kopyasını kötü amaçlı sitelere gönderir.

Bu yazımda kriptanaliz konusunu anlattım. Bir sonraki yazımda kriptografi konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 4




Merhaba, kriptoloji temelleri serisinin bu yazısında blokzincirin ne olduğundan nasıl çalıştığından ve nerelerde kullanıldığından bahsedeceğim.

### Blok Zincir Nedir?

**Blok zinciri**(blockchain), [kriptografi](https://tr.wikipedia.org/wiki/Kriptografi "Kriptografi") kullanılarak bağlanan ve güvenli hale getirilen, bloklar ile sürekli büyüyen bir [kayıt](https://en.wikipedia.org/wiki/Record_%28computer_science%29 "en:Record (computer science)") listesidir.

![](https://cdn-images-1.medium.com/max/800/0*_mqEk43FYCnMOB8k)

Blockchain teknolojisi 2008 yılında Satoshi Nakamoto tarafından icat edildi. Son birkaç yıldır büyük önem kazandığı için birçok ülke teknolojiyi geliştirmek ve çeşitli alanlarda kullanmak için çalışmalara başladı. Blockchain, FinTech kuruluşları tarafından büyük beğeni topluyor. Blockchain Teknolojisinin Dijital Kimlikler, Bitcoin ve Ethereum gibi pratik uygulamaları, bu teknolojinin kalıcı olduğunu açıkça ortaya koydu. Dağıtılmış veri depolama, şifreleme algoritmaları ve fikir birliği mekanizması dahil olmak üzere çeşitli teknolojilerin bir kombinasyonudur. Teknoloji, finans, bankacılık ve siber güvenlik departmanları gibi departmanların çalışma modellerinde devrim yaratma yeteneğine sahiptir.

#### **Blockchain teknolojisinin avantajlarından bazıları:**

* Üçüncü taraf müdahalesi yok.
* Veriler değiştirilemez veya silinemez.
* Güvenli veri defteri.
* Blockchain'deki tüm bloklar zaman damgalıdır.
* Şeffaf işlemler.
* Blockchain'deki her bir düğüme dağıtılır.
* Çoğaltma veya dolandırıcılık riski yoktur.

### Blok Zincir Nasıl Çalışır?

Blok zinciri kısaca şöyle işler: Her blok tipik olarak işlem verilerini, önceki bloğun hash değerini ve bir zaman damgasını içerir. Tasarım gereği, bir blok zinciri, kayıtların sonradan değiştirilmesine dirençlidir. Kullanılan kayıt listesi, "iki taraf arasındaki işlemleri verimli, doğrulanabilir ve kalıcı bir şekilde kaydedebilen açık, dağıtılmış bir defterdir". Dağıtılmış bir defter olarak kullanmak için, bir blok zinciri tipik olarak, topluca bir protokole bağlı düğümler arası iletişim ve yeni blokları onaylamak için bir eşler arası (peer-to-peer) ağ tarafından yönetilir. Herhangi bir bloktaki veriler sonradan değiştirilmek istendiğinde, verinin bulunduğu blok ve sonraki tüm blokların değiştirilmesi gerekecektir. Bu da bir sonraki düğüm yazılmadan önce, her blok yazımı için düğüm seçiminde seçilmeyi ve her seferde ağdaki düğümlerin çoğunluğunun onayını gerektirir. Ayrıca her blokta kimin değiştirdiği belli olduğundan, olası bir kötüye kullanımın tespit edilmesi de mümkündür.

![](https://cdn-images-1.medium.com/max/800/0*8FN6t57s1kOFav3O)

Blockchain, önde gelen üç teknoloji üzerinde çalışır:

#### 1- Kriptografi anahtarları

Kriptografi anahtarları iki türdürâŠ–”ŠÖzel anahtar ve Genel anahtar. Bir ağdaki her iki taraf da bu iki anahtara sahiptir ve böylece güvenli bir dijital kimlik oluşturmaya yardımcı olur. Bu anahtarlar, bu iki kişi arasındaki işlemlerin başarılı bir şekilde gerçekleştirilmesine yardımcı olur. Bu güvenli kimlik, kripto para birimi söz konusu olduğunda 'dijital imza' olarak adlandırılan Blockchain teknolojisinin en önemli yönüdür.

#### 2- Paylaşılan bir deftere sahip eşler arası bir ağ

Dijital imza daha sonra eşler arası bir ağ ile birleştirilir; yetkili olarak hareket eden ve dijital imzayı diğer tüm konuların yanı sıra işlemlerde başkalarının fikir birliğine varmak için kullanan çok sayıda kişi.

#### 3- Ağın kayıtlarını ve işlemlerini paylaşmak için bir bilgi işlem aracı

Hepsi bir anlaşmaya izin verdiğinde, bu, paylaşılan bir ağda iki taraf arasında güvenli bir işlemle sonuçlanan matematiksel bir doğrulama ile onaylanır.

Böylece Blockchain teknolojisinde kullanıcılar, eşler arası ağ üzerinden farklı dijital işlemleri gerçekleştirmek için kriptografi anahtarları kullanır.

### Blok Zincir Nerelerde Kullanılır?

Blok zinciri teknolojisi çoklu alanlara entegre edilebilir. Günümüzde blok zincirlerinin birincil kullanımı, en başta bitcoin olmak üzere, kripto para birimleridir.

![](https://cdn-images-1.medium.com/max/800/0*r5VtfCsKzSlSziWt)

Blok zinciri teknolojisi, uzun vadede iş işletme modellerini dönüştürmek için büyük bir potansiyele sahiptir. Blok zinciri dağıtılmış defter teknolojisi, genellikle, küresel ekonomik ve sosyal sistemler için yeni temeller oluşturma potansiyeline dayanan, tipik olarak "düşük maliyetli bir çözümle geleneksel bir iş modeline saldırı yapan ve görevdeki firmaları hızla tüketen yıkıcı bir teknolojiden" daha temel bir teknolojidir. Blok zincirlerin kullanımı, küresel tedarik zincirlerine, finansal işlemlere, varlık defterlerine ve merkezi olmayan sosyal ağlara önemli verimlilik getirme vadediyor.

#### Akıllı sözleşmeler

Blok zinciri tabanlı akıllı sözleşmeler, insan etkileşimi olmadan kısmen veya tamamen yürütülebilen veya uygulanabilen sözleşmelerdir. Akıllı bir sözleşmenin ana amaçlarından biri otomatik emanettir. IMF, blok zincirlerinin manevi zararları azaltabileceğini ve genel olarak sözleşmelerin kullanımını optimize edebileceğine inanıyor. Yaygın kullanım eksikliği nedeniyle yasal statüsü belirsizdir.

#### Merkezi olmayan ağlar

* Backfeed projesi, eşzamanlı olarak ortaya çıkan eşlerin ağlarında işbirlikçi oluşum ve değerin dağıtımını sağlayan blok zincir tabanlı uygulamalar için dağıtılmış bir yönetim sistemi geliştirir.
* İskenderiye projesi blok zincir tabanlı Dağıtılmış Kütüphane'dir.
* Tezos, token sahiplerinin oyu ile kendisini yöneten bir blok zincir projesidir. [Bitcoin](https://tr.wikipedia.org/wiki/Bitcoin "Bitcoin") blok zinciri bir kripto para birimi ve ödeme sistemi olarak gerçekleştirir. Ethereum blok zinciri, bir blok zincirinin üstüne akıllı sözleşme sistemi ekledi. Tezos blok zinciri, hem bitcoin hem de Ethereum blok zincirlerinin üzerinde bir özerklik sistemiâŠ–”Šmerkezi olmayan bir kod Geliştirme fonksiyonu ekleyecektir.

#### Hükümetler ve ulusal para birimleri

ABD Genel Hizmetler İdaresi'nde görevli BT Sözleşme Planlama Operasyon Müdürü Jose Arrieta, Eylül 2017'de ACT-IAC (Amerikan Teknoloji Konseyi ve Endüstri Danışma Konseyi) Forumu'nda organizasyon blok zinciri dağıtılmış defter teknolojisini BT Çizelgesi 70 sözleşmelerini FASt Lane sürecini hızlandırmak için otomasyon yoluyla kullandığını açıkladı.

ABD Gümrük ve Sınır Korumasının bir alt komitesi olan Ticari Gümrük İşlemleri Danışma Komitesi, blok zincirinin görevlerinde uygulanabilecek pratik yollarını bulmak için çalışıyor.

#### Bankalar

Finans sektörünün büyük bölümleri bankacılıkta kullanılmak üzere dağıtılmış defterleri uyguluyor ve Eylül 2016'da yapılan bir IBM araştırmasına göre, bu beklenenden daha hızlı gerçekleşiyor. Bankalar, bu teknolojiye ilgi duyuyor çünkü arka ofis yerleşim sistemlerini hızlandırma potansiyeli var.

#### Diğer finans şirketleri

Kredi ve borç ödeme şirketi MasterCard, programcılar için hem kişiden kişiye (P2P) hem de işletmeler arası (B2B) ödeme sistemlerini geliştirmek için üç blok zincir tabanlı API ekledi.

CLS Group, uzayabileceği döviz ticareti anlaşmalarının sayısını artırmak için blok zinciri teknolojisini kullanıyor.

VISA ödeme sistemleri, Mastercard, Unionpay ve SWIFT, blok zincir teknolojisini kullanma planlarını ve gelişmelerini açıkladı.

### Blok Zincir Türleri

Halihazırda, üç tip **blok zincir** ağı vardır:  
genel blok zincirleri, özel blok zincirleri ve konsorsiyum blok zincirleri.

#### Genel blok zincirleri

Bir genel blok zincirinin kesinlikle erişim kısıtlaması yoktur. İnternet bağlantısına sahip olan herkes, işlem gerçekleştirebilir ve bir geçerlilik kazanabilir (yani, bir konsensüs protokolünün yürütülmesine katılabilir). Genellikle, bu tür ağlar onları güvenceye alan ve bir Proof of Stake veya Proof of Work algoritması kullanan kişiler için ekonomik teşvikler sunar.

En büyük, en bilinen genel blok zincirlerinden bazıları Bitcoin ve Ethereum'dur.

#### Özel blok zincirleri

Bu tip blok zincirler genel olarak blok zinciri teknolojisiyle ilgilenen ancak kamu ağları tarafından sunulan bir kontrol seviyesinde rahat olmayan şirketler için bir orta zemin olarak düşünülebilir. Tipik olarak, blok zincirini kendi özerkliklerinden ödün vermeden muhasebe ve kayıt tutma prosedürlerine dahil etmemeye ve hassas verileri kamuya açık internet riskiyle karşı karşıya bırakmamaya çalışırlar.

#### Konsorsiyum blok zincirleri

Bir konsorsiyum blok zincirinin genellikle yarı-merkezsiz olduğu söylenir. Aynı zamanda izinlidir; ancak bunu kontrol eden tek bir kuruluş yerine, her bir şirket böyle bir ağda bir düğüm işletebilir. Bir konsorsiyum zincirinin yöneticileri, kullanıcıların okuma haklarını uygun gördükleri şekilde kısıtlar ve yalnızca sınırlı sayıda güvenilir düğümlerin bir konsorsiyum protokolü yürütmesine izin verir.

Bu yazımda blokzincir konusunu anlattım. Serinin listesini profilimde bulabilirsiniz.

## Part 5




### Kriptoloji Temelleri:#5 Uygulama



Merhaba, kriptoloji temelleri serisinin bu son yazısında kriptografik protokollerin nasıl uygulandığından bahsedeceğim. Uygulama aşamasında Java programalama dilini kullanacağım.

### MD5 Uygulaması

MD5, herhangi bir giriş verisi için sabit boyutlu bir çıktı (128 bit) üretebilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'nin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın MD5 özet değerini hesaplayabilirsiniz.

Java'da bir sitringin MD5 hashinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class MD5Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String md5Hash = calculateMD5(input);  
        System.out.println("MD5 hash of '" + input + "' is: " + md5Hash);  
    }  
  
    public static String calculateMD5(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("MD5");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("MD5 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve MD5 değerini bir string olarak döndüren bir *calculateMD5* metodu tanımlıyoruz.

calculateMD5 metodunun içinde, önce *getInstance* metodunu kullanarak ve "MD5" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve MD5 özetini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodunu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi MD5 özeti olarak döndürürüz.

### SHA-1 Uygulaması

SHA-1 (Secure HashAlgorithm 1), herhangi bir giriş verisi için sabit boyutlu bir çıktı (160 bit) oluşturabilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'sinin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın SHA-1 özetini hesaplayabilirsiniz.

Java'da bir stringin SHA-1 özetinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class SHA1Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String sha1Hash = calculateSHA1(input);  
        System.out.println("SHA-1 hash of '" + input + "' is: " + sha1Hash);  
    }  
  
    public static String calculateSHA1(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("SHA-1");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("SHA-1 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve SHA-1 özetini bir string olarak döndüren bir *calculateSHA1* metodu tanımlıyoruz.

*calculateSHA1* metodunun içinde, önce *getInstance* metodunu kullanarak ve "SHA-1" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve SHA-1 özet değerini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi SHA-1 özeti olarak döndürürüz.

### DES Uygulaması

DES (Data Encryption Standard), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, DES şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'dan (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da DES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine dair bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class DESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş dizeyi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her yöntemin içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile DES şifreleme algoritmasını belirten "DES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar dizgisini ve "DES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt dizisine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal metodunu çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir stringe dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### AES Uygulaması

AES (Gelişmiş Şifreleme Standardı), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, AES şifreleme ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da AES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class AESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş stringi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her metodun içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile AES şifreleme algoritmasını belirten "AES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar stringini ve "AES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt stringine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal yöntemini çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir dizeye dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### RSA Uygulaması

RSA (Rivest–Shamir–Adleman), verileri güvenli bir şekilde şifrelemek ve şifresini çözmek için kullanılabilen bir açık anahtarlı şifreleme algoritmasıdır. Java'da, RSA şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) KeyPairGenerator ve Cipher sınıflarını kullanabilirsiniz.

Java'da bir RSA anahtar çiftinin nasıl oluşturulacağına, ortak anahtarı kullanarak bir stringin nasıl şifreleneceğine ve şifrelenmiş stringin şifresinin nasıl çözüleceğine ilişkin bir örnek aşağıda verilmiştir:

```
import javax.crypto.Cipher;  
import java.security.KeyPair;  
import java.security.KeyPairGenerator;  
import java.util.Base64;  
  
public class RSAExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
          
        // Generate an RSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");  
        keyPairGenerator.initialize(2048);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
          
        // Get the public and private keys from the key pair  
        byte[] publicKeyBytes = keyPair.getPublic().getEncoded();  
        byte[] privateKeyBytes = keyPair.getPrivate().getEncoded();  
  
        // Encrypt the original string using the public key  
        byte[] encryptedBytes = encrypt(originalString.getBytes(), publicKeyBytes);  
        String encryptedString = Base64.getEncoder().encodeToString(encryptedBytes);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string using the private key  
        byte[] decryptedBytes = decrypt(Base64.getDecoder().decode(encryptedString), privateKeyBytes);  
        String decryptedString = new String(decryptedBytes);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static byte[] encrypt(byte[] plainBytes, byte[] publicKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.ENCRYPT_MODE, KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(publicKeyBytes)));  
        return cipher.doFinal(plainBytes);  
    }  
  
    public static byte[] decrypt(byte[] encryptedBytes, byte[] privateKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.DECRYPT_MODE, KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(privateKeyBytes)));  
        return cipher.doFinal(encryptedBytes);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve giriş olarak düz metin veya şifreli verilerden oluşan bir bayt dizisini ve genel veya özel anahtardan oluşan bir bayt dizisini alan ve karşılık gelen şifreli veya şifresi çözülmüş bayt dizisini döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz. .

Main metot içerisinde öncelikle KeyPairGenerator sınıfını kullanarak "RSA" algoritması ve 2048 bitlik bir anahtar boyutu ile bir RSA anahtar çifti oluşturuyoruz. Daha sonra *getEncoded* metodunu kullanarak genel ve özel anahtarları anahtar çiftinden bayt dizileri olarak çıkarırız.

Şifreleme için, bir bayt dizisine dönüştürülmüş orijinal string ve giriş olarak genel anahtar bayt dizisi ile *encrypt* metodunu çağırıyoruz. Encrypt metodunun içinde "RSA" algoritmasını kullanarak bir Cipher nesnesi oluşturuyoruz ve bunu init metodunu kullanarak uygun modla (Cipher.ENCRYPT\_MODE) kullanarak public key ile başlatıyoruz. Ardından, verileri şifrelemek ve elde edilen bayt dizisini döndürmek için cipher nesnesinde doFinal metodunu çağırırız.

Şifre çözme için, bir bayt dizisine dönüştürülen base64-deşifre edilmiş şifrelenmiş string ve giriş olarak özel anahtar bayt dizisi ile *decrypt* metodunu çağırıyoruz. Decrypt yönteminin içinde "RSA" algoritmasını kullanarak başka bir Cipher nesnesi oluşturuyoruz ve uygun mod ile init metodunu kullanarak özel anahtarla başlatıyoruz.

### ECDH Uygulaması

ECDH (Elliptic Curve Diffie-Hellman), iki tarafın güvenli olmayan bir iletişim kanalı üzerinden paylaşılan bir sır oluşturmasına izin veren bir anahtar anlaşma protokolüdür. Java'da, eliptik eğri şifreleme kullanarak ECDH anahtar değişimini uygulamak için Java Cryptography Architecture'dan (JCA) KeyAgreement ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDH anahtar çifti oluşturmanın, başka bir tarafla anahtar değişimi gerçekleştirmenin ve paylaşılan bir anahtarı türetmenin bir örneğini burada bulabilirsiniz:

```
import javax.crypto.KeyAgreement;  
import javax.crypto.SecretKey;  
import javax.crypto.spec.ECGenParameterSpec;  
import java.security.*;  
import java.security.spec.ECParameterSpec;  
import java.security.spec.ECPublicKeySpec;  
import java.security.spec.InvalidKeySpecException;  
  
public class ECDHExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDH key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Simulate the other party by generating its own ECDH key pair  
        KeyPair otherKeyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey otherPrivateKey = otherKeyPair.getPrivate();  
        PublicKey otherPublicKey = otherKeyPair.getPublic();  
  
        // Perform key exchange with the other party  
        KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH");  
        keyAgreement.init(privateKey);  
        keyAgreement.doPhase(otherPublicKey, true);  
  
        // Derive the shared secret  
        byte[] sharedSecret = keyAgreement.generateSecret();  
  
        // Simulate the other party deriving the shared secret using its private key  
        KeyFactory keyFactory = KeyFactory.getInstance("EC");  
        ECParameterSpec ecParameterSpec = ((ECPublicKeySpec) otherPublicKey.getKeySpec(ECPublicKeySpec.class)).getParams();  
        PublicKey simulatedOtherPublicKey = keyFactory.generatePublic(new ECPublicKeySpec(((java.security.spec.ECPoint) otherPublicKey).getW(), ecParameterSpec));  
        KeyAgreement simulatedKeyAgreement = KeyAgreement.getInstance("ECDH");  
        simulatedKeyAgreement.init(otherPrivateKey);  
        simulatedKeyAgreement.doPhase(publicKey, true);  
        byte[] simulatedSharedSecret = simulatedKeyAgreement.generateSecret();  
  
        // Compare the two shared secrets (should be equal)  
        System.out.println("Shared secret: " + bytesToHex(sharedSecret));  
        System.out.println("Simulated shared secret: " + bytesToHex(simulatedSharedSecret));  
        System.out.println("Shared secrets match: " + bytesToHex(sharedSecret).equals(bytesToHex(simulatedSharedSecret)));  
    }  
  
    public static String bytesToHex(byte[] bytes) {  
        StringBuilder sb = new StringBuilder();  
        for (byte b : bytes) {  
            sb.append(String.format("%02X", b));  
        }  
        return sb.toString();  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve bir bayt dizisini onaltılık dizgiye dönüştürmek için bir bytesToHex yöntemi tanımlıyoruz.

Ana yöntemin içinde, önce "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDH anahtar çifti oluşturuyoruz. Daha sonra özel ve genel anahtarları anahtar çiftinden çıkarıyoruz.

Aynı eğri parametrelerini kullanarak kendi ECDH anahtar çiftini oluşturarak karşı tarafı simüle ediyoruz.

### ECDSA Uygulaması

ECDSA (Elliptic Curve Digital Signature Algorithm), eliptik eğri kriptografisine dayalı bir dijital imza algoritmasıdır. Java'da, ECDSA'yı uygulamak için Java Cryptography Architecture'dan (JCA) Signature ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDSA anahtar çiftinin nasıl oluşturulacağına, bir mesajın özel anahtarla nasıl imzalanacağına ve imzanın ortak anahtarla nasıl doğrulanacağına ilişkin bir örneği burada bulabilirsiniz:

```
import java.security.*;  
import java.security.spec.ECGenParameterSpec;  
import java.security.spec.InvalidKeySpecException;  
import java.security.spec.PKCS8EncodedKeySpec;  
import java.security.spec.X509EncodedKeySpec;  
  
public class ECDSAExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Sign a message with the private key  
        byte[] message = "Hello, world!".getBytes();  
        Signature signature = Signature.getInstance("SHA256withECDSA");  
        signature.initSign(privateKey);  
        signature.update(message);  
        byte[] signatureBytes = signature.sign();  
  
        // Verify the signature with the public key  
        Signature verifier = Signature.getInstance("SHA256withECDSA");  
        verifier.initVerify(publicKey);  
        verifier.update(message);  
        boolean signatureValid = verifier.verify(signatureBytes);  
  
        System.out.println("Signature valid: " + signatureValid);  
    }  
}
```

Bu örnekte öncelikle gerekli sınıfları import ediyoruz.

Ana yöntemin içinde, "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDSA anahtar çifti oluşturuyoruz. Anahtar çiftinden özel ve genel anahtarları çıkarıyoruz.

Daha sonra imzalamak için bir mesaj oluştururuz ve mesajı özel anahtarla imzalamak için Signature sınıfını kullanırız. SHA-256'yı hash fonksiyonu olarak kullanmak için "SHA256withECDSA" algoritmasını belirtiyoruz.

Daha sonra, Signature sınıfını kullanarak bir doğrulayıcı nesne yaratırız ve onu ortak anahtarla başlatırız. Doğrulayıcıyı aynı mesajla güncelleriz ve doğrulama yöntemini kullanarak imzayı doğrularız. İmzanın geçerli olup olmadığını belirlemek için sonucu true ile karşılaştırırız.

Gerçek dünya senaryosunda, iletim sırasında imzanın kurcalanmadığından emin olmak için genellikle imzalı mesajı ve ortak anahtarı doğrulayıcıya ayrı ayrı ileteceğinizi unutmayın.

Bu yazımda Java ile kriptoloji uygulamaları yaptım. Yazı serisine profilimden ulaşabilirsiniz. Beğenmeyi ve takip etmeyi unutmayın.

## Part 2




### Kriptoloji Temelleri:#1 Giriş



Merhaba, kriptoloji temelleri serisinin bu ilk yazısında, kriptolojinin ne olduğundan, geleneksel şifreleme tekniklerinden ve güçlü bir şifrenin nasıl oluşturulabileceğinden bahsedeceğim.

### Kriptolojiye Genel Bakış

Şifreleme bilimi olarak adlandırılan bu bilim türünde, gizli tutulmak istenen şeyler bir sistem dahilinde değişik teknik ve yöntemler ile şifrelenir. Aynı zamanda kriptoloji bilimi, şifrelenen iletilerin istenmeyen kişiler tarafından deşifre edilmemesi için de çalışmalar yapmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*hjisKMmnXD1yQQXQ3IOFjA.png)

Kriptoloji şifre bilimidir. Kriptografi bilgi güvenliği ile uğraşır, Kriptoanaliz güvenli bilginin kırılması başka bir deyişle kriptografinin tam karşıtıdır. Kriptoanalistler genelde şifre çözmeye dayalı çalışırlar. Kriptoloji bir [matematik](https://tr.wikipedia.org/wiki/Matematik "Matematik") bilimidir ve genelde sayılar teorisi üstüne kuruludur.

**Kriptografi**, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir.

**Kriptanaliz**, kripto sistemleri kırma, deşifre etme bilimidir.

### Tarihsel Gelişim

İlk kriptolog, 4000 yıl önce yaşamış Mısırlı bir kâtiptir. O, efendisinin hayatını anlatırken hiyeroglifleri şifrelenmiş bir şekilde oluşturmuştu ve bazı hiyeroglifler daha önce hiç kullanılmamıştı.

Kriptografi, bu şekilde başlamasına karşın, hayatının ilk 3000 yılında neredeyse hiç gelişemedi. Dünyanın farklı farklı yerlerinde bağlantısız bir şekilde en temel biçimde kullanılmıştı ancak medeniyetlerin yıkılışıyla sonraki adımlara geçilememişti.

Dönemin en önde uygarlığı olan Çin'de ise yazının şifresiz yazılmasının bile çok zor olması nedeniyle kriptografi hiç gelişemedi.

Daha sonraları (MÖ 5.--6. yüzyıl) askeri istihbaratta gizlilik gerekmesi nedeniyle, kriptografi askeri alana girdi. Askeri alandaki ilk kriptograflar Spartalılardır.

9. yüzyıl'da [Kindî](https://tr.wikipedia.org/wiki/Kind%C3%AE "Kindî"), kriptoloji biliminde uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişi olmuştur. Kindî, kriptoloji biliminde Jul Sezar (MÖ 50) tarafından bulunan ve uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişidir.

### Geleneksel Şifreleme Teknikleri

Tarihsel olarak temel seviyede birçok şifreleme algoritmas geliştirilmiş ve kullanılmıştır. Günümüzde gelişen bilgisayar teknolojisi ile bu şifreleri kırmak oldukçça kolay hale gelmiştir. Şimdi bu şifreleme tekniklerine ve nasıl zayıflıkları olduklarına detaylı değinelim.

#### İkame Şifresi

Bir metni şifrelemek için en basit yöntemlerden biri olan, ikame şifresi(yer değiştirme şifresi) tarihsel süreçte birçok kez kullanılmıştır ve temel kriptografinin iyi bir örneğidir.  
Fikir çok basit, alfabenin her harfini bir başkasıyla değiştiriyoruz. Örneğin;  
A ”†' k  
B ”†' d  
C ”†' w  
Bu örnekte, *ABBA* ifadesi *kddk* olarak şifrelenecektir.

Hangi harfin hangi harfe karşılık geleceğini belirlediğimiz ikame tablosunu tamamen rastgele seçtiğimizi varsayalım. İkame tablosu bu şifreleme sisteminin anahtarı olmuş olur. Her zaman olduğu gibi simetrik kriptografide anahtar gizli tutulmalıdır, yani A ve B arasında güvenli bir şekilde dağıtılmalıdır. Simetrik-Asimetrik kriptografi hakkında detaylı bilgi edinmek için bir önceki [yazımıza](https://pwnlab.me/tr-kriptografiye-giris/) bakabilirsiniz.  
 Tahmin edilebileceği gibi bu şifreyi kırmak oldukça kolaydır. Bu noktada klasik kriptanaliz tekniklerinden yararlanabiliriz.

#### İlk Saldırı: Kaba Kuvvet veya Kapsamlı Anahtar Arama

Kaba kuvvet saldırıları basit bir konsepte dayanır: Saldırgan, şifreli metine ve kısa bir düz metin parçasına (örneğin şifrelenmiş metnin başlığına) sahiptir. Bu durumda, tüm olası anahtarları deneyerek şifreli metni çözer. Ortaya çıkan düz metin, kısa düz metin parçasıyla eşleşirse doğru anahtarı bulmuş olur. Pratikte, kaba kuvvet saldırısı daha karmaşık olabilir çünkü yanlış anahtarlar yanlış, pozitif sonuçlar verebilir.

Prensipte simetrik şifrelere karşı kaba kuvvet saldırısının her zaman mümkün olduğuna dikkat etmek önemlidir. Pratikte uygulanabilir olup olmadığı, belirli bir şifre için var olan olası anahtarların sayısına bağlıdır. Tüm anahtarları test etmek çok fazla zaman alıyorsa, yani birkaç on yıl alıyorsa, şifre bir kaba kuvvet saldırısına karşı güvenlidir.

İkame şifresinin anahtar uzayını belirleyelim: İlk A harfinin yerine geçecek olan harfi seçerken alfabenin 26 harfinden rastgele bir harf seçiyoruz (yukarıdaki örnekte k seçtik). Bir sonraki alfabe harfi B'nin karşılığı, kalan 25 harften rasgele seçilmiştir, vb. Bu nedenle, ikame şifresinin anahtar uzayı = 26 · 25 · ”¦.. · 3 · 2 · 1 = 26! olur.

Yüz binlerce yüksek güçlü bilgisayarla bile böyle bir arama birkaç on yıl alacaktır. Bu nedenle, ikame şifresinin güvenli olduğunu düşünebiliriz. Ancak, bu yanlış çünkü daha güçlü bir saldırı daha var.

#### İkinci Saldırı: Harf Frekans Analizi

Frekasn Analizi 9.yy.'da Al-Kindi tarafından önerilmiştir. Dildeki tekrarlara dayanmaktadır.

Herhangi bir dil için, o dildeki harflerin kullanım sıklıkları hesaplanır. İngilizce dilinde harflerin kullanım sıklığını içeren tablo aşağıda verilmiştir.

![](https://cdn-images-1.medium.com/max/800/0*9LADpthWZ361CIFT.png)

Tablodan da görüleceği gibi, ingilizce dilinde en sık kullanılan harf 'E' harfidir, ikinci en sık kullanılan harf ise 'T' harfidir. Eğer şifreli metin uzunsa en çok gözüken harf büyük olasılıkla düz metindeki E'ye denk gelir ve ikinci en çok gözüken harfte büyük olasılıkla T'ye denk gelir, bu şekilde devam eder.

İkame şifresi, böyle bir analitik saldırı ile kolayca kırılabilir. Şifrenin en büyük zayıflığı, düz metnin her karakterinin her seferinde aynı karakterle değiştirilmesidir.

#### Sezar Şifresi

Sezar şifresi diğer adıyla kaydırma şifresi, aslında ikame şifresinin özel bir halidir. Kaydırma şifresinin kendisi son derece basittir: Düz metnin her harfini alfabede sabit sayıda konumla kaydırırız. Örneğin, 3 konum kaydırırsak, A yerine d, B yerine e vb. gelirdi. Tek sorun alfabenin sonuna doğru ortaya çıkıyor: X, Y, Z ile ne yapmalıyız? Bu durumda başa dönüyoruz. Bu durumda, X->a, Y->b ve Z->c ile yer değiştirilir.  
 Tarihte Julius Sezar bu şifreyi üç konumlu bir kaydırma ile kullanmıştı. Sezar şifresi ismi buradan gelmektedir.  
 Şifrenin matematiksel ifadesi için alfabenin harfleri aşağıdaki tabloda gösterildiği gibi sayısal olarak kodlanmıştır.

![](https://cdn-images-1.medium.com/max/800/0*0ATssVLmJQigP6cg.png)

Anahtar k = 17 olsun ve düz metin:

ATTACK = x1,x2,”¦,x6 = 0,19,19,0,2,10 olsun.s

Şifreli metin şu şekilde hesaplanır:

y1,y2,”¦,y6 = 17,10,10,17,19,1 = rkkrtb

İkame şifresinde olduğu gibi, kaydırma şifresi de hiç güvenli değildir. Aynı şekilde bu şifreyi kırmak için de iki yolumuz var:  
 1. Anahtar uzayı 26 anahtardan oluştuğu için, belirli bir şifreli metnin şifresini tüm olası 26 anahtarla çözmeye çalışarak, kaba kuvvet yöntemiyle, kırabiliriz. Ortaya çıkan düz metin okunabilir ise, anahtarı bulmuş oluruz.  
 2. İkame şifresindeki gibi frekans analizi kullanılabilir.

#### Vigenere Şifresi

Çok alfabeli şifrelemenin basit bir formu olan Vigenere şifreleme, tek alfabeli kaydırma ve yerine koyma şifreleme yöntemlerine dayanan sezar şifreleme algoritmasının geliştirilmiş halidir. Sezar şifrelemede kaydırma ve yerine koyma işemleri için sadece bir alfabe kullanılırken, Vigenere şifrelemede birden fazla alfabe kullanılır. Böylece şifrelenecek mesajdaki aynı harflerin şifrelenmesi sonucunda farklı harfler ortaya çıkar.

![](https://cdn-images-1.medium.com/max/800/0*QLwvLTeM5X8wzRbJ)

Şifreleme yönteminde öncelikle şifreleme işlemi sırasında kullanılacak anahtar seçilir. Şifrelenecek mesajın ilk harfi, anahtar değerinin ilk harfinin alfabedeki sırası oranında kaydırılır ve şifreli harf elde edilir. Anahtar değerindeki her harfin sırasına göre, şifrelenecek mesajdaki her harf farklı bir alfabe ile şifrelenir ve şifreleme işlemi tamamlanır.

#### Playfair Şifresi

Charles Wheatstone tarafından 1854'de önerilmiştir , Lord Playfair kullanımını teşvik etmiştir. Birden fazla harf değişimi kullanılarak daha güçlü bir şifreleme yapılması hedeflenmiştir.

Şifrelemede anahtarın ve alfabenin geri kalanının yer aldığı 5×5'lik bir tablo kullanılır. Anahtarı ve 4 basit kuralı bilmek sistemi kullanmak için yeterlidir.

**Kurallar:**

1- Eğer iki harf de aynıysa ya da en son tek bir harf kaldıysa, ilk harften sonra bir "X" harfi eklenir.

2- Eğer iki harf aynı satırdaysa, her harf sağındaki harfle değiştirilir. (bir harf eğer satır sonundaysa, satır başındakiyle değiştirilir)

3-Eğer iki harf aynı sütundaysa, her harf altındaki harfle değiştirilir(bir harf eğer sütunun sonundaysa, sütun başındakiyle değistirilir)

4-Eğer harfle aynı sütun veya satırda değilse, harfler bir dikdörtgenin iki köşesi olarak düşünülür ve harfler karşılarındaki köşede yer alan harf ile değiştirilir. Bir örnekle açıklayalım.

**mesajımız: kriptoloji**  
**şifremiz: keyword**

Bu durumda tablo şekildeki gibi olacaktır. Önce anahtar yazılır. Aynı harfler bir kez kullanılır. 5×5'lik tablonun geri kalanı, kalan harflerle doldurulur. 25 harfe inmek için I ve J harfi aynı kutuya konur.

![](https://cdn-images-1.medium.com/max/800/0*Vo-d0ErN-moY0kLR.jpg)
> *düz metin: kr ip to lo ji için*

> *şifreli metin: rf hq kz sc jx olur*

Plafair gibi ikili harf değişim sistemleri iki harfli frekans analizine dayanıklı değildirler. Bilgisayarlar ile kısa uzunluktaki harf değişimlerini kırmak mümkündür.

Şifreyi kırmak için dilde ikili harf gruplarının ne sıklıkla görüldüğü hesaplanır ve bunun üzerinden mesajın şifresi çözülmeye çalışılır. Bu işlem başta göz korkutabilir ancak bir bilgisayar için hiç de zor değildir. Güçlü bir bilgisayar sistemi, 8-harf'e kadar frekans analizini yapabilecek yeterliktedir

#### Affine Şifresi

Affine şifreeme mono alfabetik yerine koymalı şifreleme yöntemlerinin bir çeşididir. Yöntemde önce kullanılacak alfabenin her harfine karşılık bir sayı değeri atanır bu değerer bir tabloda tutulur. Bu tablonun karşılıklı iletişim gerçekleştirek isteyen her iki tarafta da bulunması gerekir.

![](https://cdn-images-1.medium.com/max/800/0*Z-cr2RD4JROMRDIQ)

Şifreenmek istenen açık mesajın her karakteri için, karaktere karşılık gellen sayı değeri basit bir matematiksel fonksiyona girdi olarak gönderilir. Fonksiyondan çıkış olarak üretilen bu sayı değeri, tabloda hangi karakteri temsil ediyorsa o karakter, şifreli mesajın yapısını oluşturur.

#### Vernam Şifresi

Adına kırılmaz şifreleme de diyebileceğimiz bu yöntem çok güvenilir olmasına rağmen pratikte uygulanması oldukçca zordur. Bu yöntemde, tek sefer kullanılacak rastgele karakterlerden/bitlerden oluşan uzun bir dizi üretilir. Düz metin, one-time pad'le XOR işlemine sokularak şifreli metin elde edilir. Şifreli metin ile one-time pad'in XOR işlemine sokulması düz metni geri getirir.

![](https://cdn-images-1.medium.com/max/800/0*6s6SoNCSSj-Sqs27.png)

one-time pad olarak da bilinen isminden anlaşılacağı gibi tek kullanımlık ve tamamen rastgele üretilmiş olmalıdır. .Aynı anahtarın tekrar kullanımı şifrelemede zayıflığa yol açar ve kırılabilmesine olanak tanır.

Bu şifreleme tekniği kusursuz gizlilik sağlar çünkü şifreli metin düz metin hakkında hiçbir bilgi içermemektedir. Frekans analizi bu teknikte kullanılamaz. Bitler yerine harfler ya da karakterler üzerinde çalışan halini de kullanmak mümkündür.

Bunun yanında, anahtarın çok uzun(mesaj ile aynı uzunlukta) ve dağıtımının zor olması bu şifreyi pratikte kullanmayı zor bir hale getirmektedir.

### Güçlü Şifre

Güçlü bir şifrenin karakteristik özellikleri, hem uzun hem de çeşitli olmasıdır. "1234" gibi basit bir şifre kombinasyonu kolayca tahmin edilebilir. Tahmin edilemese bile bir programı yardımıyla saldırı yapan internet korsanı, birkaç saatlik tarama sonucunda (bazen daha kısa) şifrenizi kolayca ele geçirebilir. Şifremizin içerisindeki çeşitlilik, şifremizin uzunluğu ve farklı karakterlerin şifremize dahil olması, şifremizi brute force gibi yöntemlerle kırmayı güç hatta bazen imkansız hale getirir.

Güçlü bir şifreyi kendiniz de oluştuabileceğiniz gibi bir araçtan da yardım alabilirsiniz: <https://passwordsgenerator.net/>

#### Güçlü bir şifre için:

1. Maksimum uzunluğu hedefleyin
2. Şifrenizi sadece rakam veya harflerden oluşturmayın
3. Şifrenizde ekstra karakterlere yer verin

#### Güçlü şifre örnekleri

* Tu\9a;gMD
* hb!(Bz8XE
* 5}JBqseLL
* `zhx!8BBF
* u$7sSsX3#

Tabi bu tür şifreleri akılda tutmak zor olabilir. Bunun için parola yöneticisi yazılımlarını kullanabilirsiniz.

Bu yazımda kriptoloji konusunu anlattım. Bir sonraki yazımda kriptografi ve kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 3




### Kriptoloji Temelleri:#3 Kriptanaliz



Merhaba, kriptoloji temelleri serisinin bu yazısında kriptanalizin ne olduğundan, şifre kırma tekniklerinden ve sosyal mühendislik yöntemlerinden bahsedeceğim.

### Kriptanalize Genel Bakış

Kriptanaliz, kripto sistemleri kırma, deşifre etme bilimidir. Şifrelenmiş metinlerin çözümünü araştıran kriptoloji dalıdır. Kriptanaliz, bilinmeyen anahtarları bulmak için kullanılır.

![](https://cdn-images-1.medium.com/max/800/0*WYSM0JXe3tpf70lG.png)

Kriptanalizi; Uygulama Saldırıları, klasik kriptanaliz ve sosyal mühendislik olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

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

#### Şifre Püskürtme Saldırıları (Password Spraying Attacks)

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

### Klasik Kriptanaliz

Klasik kriptanaliz, şifreli metninden düz metini kurtarma veya alternatif olarak şifreli metninden anahtarı bulma bilimidir. Şifreleme yönteminin iç yapısından yararlanan matematiksel analizleri kullanır.

![](https://cdn-images-1.medium.com/max/800/0*ct3PFF4EH3YUqAlK)

Encryption(şifreleme) Decryption(şifre çözme)

Bir şifreleme işlemi 3 unsurdan oluşur. Bunlar: açık metin, şifrelenmiş metin ve anahtardır. Eğer bu unsurlardan her hangi ikisine sahipsek üçüncüsünü rahatlıkla bulabiliriz. Ancak, kriptanalizin asıl işlevi sadece şifreli metin mevcut iken diğerlerini bulabilme becerisidir. Bunun için çeşitli matematiksel yöntemlerden yararlanır.

Bu yöntemler şunlardır:

* **Bilinen Düz Metin Analizi (KPA)**: Bu tür bir saldırıda, bazı düz metin-şifreli metin çiftleri zaten bilinmektedir. Saldırgan, şifreleme anahtarını bulmak için bunları eşler. Halihazırda birçok bilgi mevcut olduğundan bu saldırının kullanımı daha kolaydır.
* **Seçilmiş Düz Metin Analizi (CPA)**: Bu tür saldırıda, saldırgan rasgele düz metinleri seçer ve karşılık gelen şifreli metinleri alır ve şifreleme anahtarını bulmaya çalışır. KPA gibi uygulaması çok basit ama başarı oranı oldukça düşük.
* **Yalnızca Şifreli Metin Analizi (COA)**: Bu tür saldırıda, yalnızca bazı şifreli metinler bilinir ve saldırgan karşılık gelen şifreleme anahtarını ve düz metni bulmaya çalışır. Uygulanması en zor olanıdır, ancak yalnızca şifreli metin gerektiğinden en olası saldırıdır.
* **Uyarlanabilir Seçilmiş Düz Metin Analizi (ACPA)**: Bu saldırı benzer bir EBM'dir. Burada saldırgan, bazı metinler için şifreli metinlere sahip olduktan sonra ek düz metinlerin şifreli metinlerini ister.
* **Doğum günü saldırısı:** Bu saldırı, bir grup insanda aynı doğum gününü paylaşan iki veya daha fazla kişinin olasılığını kullanır. Kriptografide, bu saldırı bir hash fonksiyonundaki çarpışmaları bulmak için kullanılır.
* **Diferansiyel kriptanaliz**: Bu tür saldırı, şifreleme algoritmasındaki kalıpları bulmak için düz metin çiftlerini ve bunlara karşılık gelen şifreli metinleri karşılaştırmayı içerir. Belirli özelliklere sahip blok şifrelere karşı etkili olabilir.
* **Integral kriptanaliz:** Temelinde Değiştirme-Karıştırma işemeri buunan blok şifreleme yöntemleri üzerinde kullanılan bir yöntemdir.

### Sosyal Mühendislik

Kurduğumuz kripto sistem ne kadar güçlü olursa olsun insan faktörü kaynaklı riskler göz ardı edilmemelidir. Bir gizli anahtarı elde etmek için rüşvet, şantaj, kandırma veya klasik casusluk kullanılabilir. Örneğin bir kişinin kafasına silah dayayarak şifreyi söylemeye zorlamak oldukça başarılı olabilir. Daha az şiddet içeren bir başka saldırı da, saldırmak istediğimiz kişileri telefonla arayarak "Şirketinizin IT departmanından arıyoruz. Önemli yazılım güncellemeleri için şifrenize ihtiyacımız var" gibi sosyal mühendislik teknikleridir. Bu gibi durumlarda şifrelerini gerçekten verecek kadar saf olan insanların sayısının hiç de az olmaması şaşırtıcıdır.

![](https://cdn-images-1.medium.com/max/800/0*T75D0kY4zcu3_J5U)

Saldırgan her zaman kripto sisteminizdeki en zayıf halkayı arar. Bunun için, güçlü algoritmalar seçmemiz, sosyal mühendislik ve uygulama saldırılarının pratik olmadığından emin olmamız gerekir. Hem uygulama saldırıları hem de sosyal mühendislik saldırıları pratikte oldukça güçlü olabilir.

#### Kimlik Avı Saldırıları (phishing attacks)

Saldırganın kurbana kötü amaçlı bir bağlantı göndererek güvenilir bir site kılığına girdiği bir sosyal mühendislik tekniğini içerir. Kurban, meşru bir web sunucusunda kimlik doğrulaması yaptıklarını varsaydıktan sonra, bu bağlantıya tıklayarak saldırgana hesap bilgilerini sağlar. Bu yolla saldırgan hedef kullanıcının hesap bilgilerini ele geçirmiş olur, kurban ise oltalanmış demektir.

![](https://cdn-images-1.medium.com/max/800/0*C1Redj9meJnjH1ur)

Kimlik hırsızlığının yanı sıra, oltalama saldırıları, saldırganın bir kullanıcının izinlerini elde etmesini sağlayarak, saldırı tespit edilmeden sistemin daha derin bileşenlerini tehlikeye atmasına olanak tanır. Kimlik avı saldırılarında, saldırganlar, kullanıcıyı kötü amaçlı bağlantıyı tıklaması için kandırmak için genellikle birden çok yöntem kullanır:

1. **DNS önbellek zehirlenmesi:** Saldırganlar, kullanıcı isteklerini benzer görünen bir alan adına sahip kötü amaçlı bir siteye yönlendirmek için uygulamanın DNS sunucusundaki güvenlik açıklarından yararlanır.
2. **URL'yi ele geçirme/yazım hatası:** Saldırgan, kimliğine bürünmek istediği web sitesinden ince farklar içeren gerçek görünümlü bir URL oluşturur. Saldırı, kullanıcıların yazım hataları yapmasına bağlıdır, bu nedenle kötü amaçlı sayfaya gelirler.
3. **Sekmeleme:** Saldırgan, katılımsız tarayıcı sekmelerini yasal web sayfaları gibi görünen kötü amaçlı sitelerle yeniden yazar.
4. **Kullanıcı arabirimi düzeltme/iFrame yerleşimi:** Saydam katmanlar kullanan saldırgan, yasal, tıklanabilir bir düğmenin üzerine kötü amaçlı sayfaya bir bağlantı yerleştirir.
5. **Klon kimlik avı :** Bu saldırıda, saldırgan, orijinal e-postadaki bağlantıların URL'lerle değiştirildiği meşru bir e-postanın bir kopyasını kötü amaçlı sitelere gönderir.

Bu yazımda kriptanaliz konusunu anlattım. Bir sonraki yazımda kriptografi konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 4




Merhaba, kriptoloji temelleri serisinin bu yazısında blokzincirin ne olduğundan nasıl çalıştığından ve nerelerde kullanıldığından bahsedeceğim.

### Blok Zincir Nedir?

**Blok zinciri**(blockchain), [kriptografi](https://tr.wikipedia.org/wiki/Kriptografi "Kriptografi") kullanılarak bağlanan ve güvenli hale getirilen, bloklar ile sürekli büyüyen bir [kayıt](https://en.wikipedia.org/wiki/Record_%28computer_science%29 "en:Record (computer science)") listesidir.

![](https://cdn-images-1.medium.com/max/800/0*_mqEk43FYCnMOB8k)

Blockchain teknolojisi 2008 yılında Satoshi Nakamoto tarafından icat edildi. Son birkaç yıldır büyük önem kazandığı için birçok ülke teknolojiyi geliştirmek ve çeşitli alanlarda kullanmak için çalışmalara başladı. Blockchain, FinTech kuruluşları tarafından büyük beğeni topluyor. Blockchain Teknolojisinin Dijital Kimlikler, Bitcoin ve Ethereum gibi pratik uygulamaları, bu teknolojinin kalıcı olduğunu açıkça ortaya koydu. Dağıtılmış veri depolama, şifreleme algoritmaları ve fikir birliği mekanizması dahil olmak üzere çeşitli teknolojilerin bir kombinasyonudur. Teknoloji, finans, bankacılık ve siber güvenlik departmanları gibi departmanların çalışma modellerinde devrim yaratma yeteneğine sahiptir.

#### **Blockchain teknolojisinin avantajlarından bazıları:**

* Üçüncü taraf müdahalesi yok.
* Veriler değiştirilemez veya silinemez.
* Güvenli veri defteri.
* Blockchain'deki tüm bloklar zaman damgalıdır.
* Şeffaf işlemler.
* Blockchain'deki her bir düğüme dağıtılır.
* Çoğaltma veya dolandırıcılık riski yoktur.

### Blok Zincir Nasıl Çalışır?

Blok zinciri kısaca şöyle işler: Her blok tipik olarak işlem verilerini, önceki bloğun hash değerini ve bir zaman damgasını içerir. Tasarım gereği, bir blok zinciri, kayıtların sonradan değiştirilmesine dirençlidir. Kullanılan kayıt listesi, "iki taraf arasındaki işlemleri verimli, doğrulanabilir ve kalıcı bir şekilde kaydedebilen açık, dağıtılmış bir defterdir". Dağıtılmış bir defter olarak kullanmak için, bir blok zinciri tipik olarak, topluca bir protokole bağlı düğümler arası iletişim ve yeni blokları onaylamak için bir eşler arası (peer-to-peer) ağ tarafından yönetilir. Herhangi bir bloktaki veriler sonradan değiştirilmek istendiğinde, verinin bulunduğu blok ve sonraki tüm blokların değiştirilmesi gerekecektir. Bu da bir sonraki düğüm yazılmadan önce, her blok yazımı için düğüm seçiminde seçilmeyi ve her seferde ağdaki düğümlerin çoğunluğunun onayını gerektirir. Ayrıca her blokta kimin değiştirdiği belli olduğundan, olası bir kötüye kullanımın tespit edilmesi de mümkündür.

![](https://cdn-images-1.medium.com/max/800/0*8FN6t57s1kOFav3O)

Blockchain, önde gelen üç teknoloji üzerinde çalışır:

#### 1- Kriptografi anahtarları

Kriptografi anahtarları iki türdürâŠ–”ŠÖzel anahtar ve Genel anahtar. Bir ağdaki her iki taraf da bu iki anahtara sahiptir ve böylece güvenli bir dijital kimlik oluşturmaya yardımcı olur. Bu anahtarlar, bu iki kişi arasındaki işlemlerin başarılı bir şekilde gerçekleştirilmesine yardımcı olur. Bu güvenli kimlik, kripto para birimi söz konusu olduğunda 'dijital imza' olarak adlandırılan Blockchain teknolojisinin en önemli yönüdür.

#### 2- Paylaşılan bir deftere sahip eşler arası bir ağ

Dijital imza daha sonra eşler arası bir ağ ile birleştirilir; yetkili olarak hareket eden ve dijital imzayı diğer tüm konuların yanı sıra işlemlerde başkalarının fikir birliğine varmak için kullanan çok sayıda kişi.

#### 3- Ağın kayıtlarını ve işlemlerini paylaşmak için bir bilgi işlem aracı

Hepsi bir anlaşmaya izin verdiğinde, bu, paylaşılan bir ağda iki taraf arasında güvenli bir işlemle sonuçlanan matematiksel bir doğrulama ile onaylanır.

Böylece Blockchain teknolojisinde kullanıcılar, eşler arası ağ üzerinden farklı dijital işlemleri gerçekleştirmek için kriptografi anahtarları kullanır.

### Blok Zincir Nerelerde Kullanılır?

Blok zinciri teknolojisi çoklu alanlara entegre edilebilir. Günümüzde blok zincirlerinin birincil kullanımı, en başta bitcoin olmak üzere, kripto para birimleridir.

![](https://cdn-images-1.medium.com/max/800/0*r5VtfCsKzSlSziWt)

Blok zinciri teknolojisi, uzun vadede iş işletme modellerini dönüştürmek için büyük bir potansiyele sahiptir. Blok zinciri dağıtılmış defter teknolojisi, genellikle, küresel ekonomik ve sosyal sistemler için yeni temeller oluşturma potansiyeline dayanan, tipik olarak "düşük maliyetli bir çözümle geleneksel bir iş modeline saldırı yapan ve görevdeki firmaları hızla tüketen yıkıcı bir teknolojiden" daha temel bir teknolojidir. Blok zincirlerin kullanımı, küresel tedarik zincirlerine, finansal işlemlere, varlık defterlerine ve merkezi olmayan sosyal ağlara önemli verimlilik getirme vadediyor.

#### Akıllı sözleşmeler

Blok zinciri tabanlı akıllı sözleşmeler, insan etkileşimi olmadan kısmen veya tamamen yürütülebilen veya uygulanabilen sözleşmelerdir. Akıllı bir sözleşmenin ana amaçlarından biri otomatik emanettir. IMF, blok zincirlerinin manevi zararları azaltabileceğini ve genel olarak sözleşmelerin kullanımını optimize edebileceğine inanıyor. Yaygın kullanım eksikliği nedeniyle yasal statüsü belirsizdir.

#### Merkezi olmayan ağlar

* Backfeed projesi, eşzamanlı olarak ortaya çıkan eşlerin ağlarında işbirlikçi oluşum ve değerin dağıtımını sağlayan blok zincir tabanlı uygulamalar için dağıtılmış bir yönetim sistemi geliştirir.
* İskenderiye projesi blok zincir tabanlı Dağıtılmış Kütüphane'dir.
* Tezos, token sahiplerinin oyu ile kendisini yöneten bir blok zincir projesidir. [Bitcoin](https://tr.wikipedia.org/wiki/Bitcoin "Bitcoin") blok zinciri bir kripto para birimi ve ödeme sistemi olarak gerçekleştirir. Ethereum blok zinciri, bir blok zincirinin üstüne akıllı sözleşme sistemi ekledi. Tezos blok zinciri, hem bitcoin hem de Ethereum blok zincirlerinin üzerinde bir özerklik sistemiâŠ–”Šmerkezi olmayan bir kod Geliştirme fonksiyonu ekleyecektir.

#### Hükümetler ve ulusal para birimleri

ABD Genel Hizmetler İdaresi'nde görevli BT Sözleşme Planlama Operasyon Müdürü Jose Arrieta, Eylül 2017'de ACT-IAC (Amerikan Teknoloji Konseyi ve Endüstri Danışma Konseyi) Forumu'nda organizasyon blok zinciri dağıtılmış defter teknolojisini BT Çizelgesi 70 sözleşmelerini FASt Lane sürecini hızlandırmak için otomasyon yoluyla kullandığını açıkladı.

ABD Gümrük ve Sınır Korumasının bir alt komitesi olan Ticari Gümrük İşlemleri Danışma Komitesi, blok zincirinin görevlerinde uygulanabilecek pratik yollarını bulmak için çalışıyor.

#### Bankalar

Finans sektörünün büyük bölümleri bankacılıkta kullanılmak üzere dağıtılmış defterleri uyguluyor ve Eylül 2016'da yapılan bir IBM araştırmasına göre, bu beklenenden daha hızlı gerçekleşiyor. Bankalar, bu teknolojiye ilgi duyuyor çünkü arka ofis yerleşim sistemlerini hızlandırma potansiyeli var.

#### Diğer finans şirketleri

Kredi ve borç ödeme şirketi MasterCard, programcılar için hem kişiden kişiye (P2P) hem de işletmeler arası (B2B) ödeme sistemlerini geliştirmek için üç blok zincir tabanlı API ekledi.

CLS Group, uzayabileceği döviz ticareti anlaşmalarının sayısını artırmak için blok zinciri teknolojisini kullanıyor.

VISA ödeme sistemleri, Mastercard, Unionpay ve SWIFT, blok zincir teknolojisini kullanma planlarını ve gelişmelerini açıkladı.

### Blok Zincir Türleri

Halihazırda, üç tip **blok zincir** ağı vardır:  
genel blok zincirleri, özel blok zincirleri ve konsorsiyum blok zincirleri.

#### Genel blok zincirleri

Bir genel blok zincirinin kesinlikle erişim kısıtlaması yoktur. İnternet bağlantısına sahip olan herkes, işlem gerçekleştirebilir ve bir geçerlilik kazanabilir (yani, bir konsensüs protokolünün yürütülmesine katılabilir). Genellikle, bu tür ağlar onları güvenceye alan ve bir Proof of Stake veya Proof of Work algoritması kullanan kişiler için ekonomik teşvikler sunar.

En büyük, en bilinen genel blok zincirlerinden bazıları Bitcoin ve Ethereum'dur.

#### Özel blok zincirleri

Bu tip blok zincirler genel olarak blok zinciri teknolojisiyle ilgilenen ancak kamu ağları tarafından sunulan bir kontrol seviyesinde rahat olmayan şirketler için bir orta zemin olarak düşünülebilir. Tipik olarak, blok zincirini kendi özerkliklerinden ödün vermeden muhasebe ve kayıt tutma prosedürlerine dahil etmemeye ve hassas verileri kamuya açık internet riskiyle karşı karşıya bırakmamaya çalışırlar.

#### Konsorsiyum blok zincirleri

Bir konsorsiyum blok zincirinin genellikle yarı-merkezsiz olduğu söylenir. Aynı zamanda izinlidir; ancak bunu kontrol eden tek bir kuruluş yerine, her bir şirket böyle bir ağda bir düğüm işletebilir. Bir konsorsiyum zincirinin yöneticileri, kullanıcıların okuma haklarını uygun gördükleri şekilde kısıtlar ve yalnızca sınırlı sayıda güvenilir düğümlerin bir konsorsiyum protokolü yürütmesine izin verir.

Bu yazımda blokzincir konusunu anlattım. Serinin listesini profilimde bulabilirsiniz.

## Part 5




### Kriptoloji Temelleri:#5 Uygulama



Merhaba, kriptoloji temelleri serisinin bu son yazısında kriptografik protokollerin nasıl uygulandığından bahsedeceğim. Uygulama aşamasında Java programalama dilini kullanacağım.

### MD5 Uygulaması

MD5, herhangi bir giriş verisi için sabit boyutlu bir çıktı (128 bit) üretebilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'nin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın MD5 özet değerini hesaplayabilirsiniz.

Java'da bir sitringin MD5 hashinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class MD5Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String md5Hash = calculateMD5(input);  
        System.out.println("MD5 hash of '" + input + "' is: " + md5Hash);  
    }  
  
    public static String calculateMD5(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("MD5");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("MD5 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve MD5 değerini bir string olarak döndüren bir *calculateMD5* metodu tanımlıyoruz.

calculateMD5 metodunun içinde, önce *getInstance* metodunu kullanarak ve "MD5" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve MD5 özetini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodunu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi MD5 özeti olarak döndürürüz.

### SHA-1 Uygulaması

SHA-1 (Secure HashAlgorithm 1), herhangi bir giriş verisi için sabit boyutlu bir çıktı (160 bit) oluşturabilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'sinin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın SHA-1 özetini hesaplayabilirsiniz.

Java'da bir stringin SHA-1 özetinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class SHA1Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String sha1Hash = calculateSHA1(input);  
        System.out.println("SHA-1 hash of '" + input + "' is: " + sha1Hash);  
    }  
  
    public static String calculateSHA1(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("SHA-1");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("SHA-1 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve SHA-1 özetini bir string olarak döndüren bir *calculateSHA1* metodu tanımlıyoruz.

*calculateSHA1* metodunun içinde, önce *getInstance* metodunu kullanarak ve "SHA-1" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve SHA-1 özet değerini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi SHA-1 özeti olarak döndürürüz.

### DES Uygulaması

DES (Data Encryption Standard), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, DES şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'dan (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da DES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine dair bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class DESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş dizeyi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her yöntemin içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile DES şifreleme algoritmasını belirten "DES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar dizgisini ve "DES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt dizisine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal metodunu çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir stringe dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### AES Uygulaması

AES (Gelişmiş Şifreleme Standardı), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, AES şifreleme ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da AES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class AESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş stringi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her metodun içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile AES şifreleme algoritmasını belirten "AES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar stringini ve "AES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt stringine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal yöntemini çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir dizeye dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### RSA Uygulaması

RSA (Rivest–Shamir–Adleman), verileri güvenli bir şekilde şifrelemek ve şifresini çözmek için kullanılabilen bir açık anahtarlı şifreleme algoritmasıdır. Java'da, RSA şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) KeyPairGenerator ve Cipher sınıflarını kullanabilirsiniz.

Java'da bir RSA anahtar çiftinin nasıl oluşturulacağına, ortak anahtarı kullanarak bir stringin nasıl şifreleneceğine ve şifrelenmiş stringin şifresinin nasıl çözüleceğine ilişkin bir örnek aşağıda verilmiştir:

```
import javax.crypto.Cipher;  
import java.security.KeyPair;  
import java.security.KeyPairGenerator;  
import java.util.Base64;  
  
public class RSAExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
          
        // Generate an RSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");  
        keyPairGenerator.initialize(2048);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
          
        // Get the public and private keys from the key pair  
        byte[] publicKeyBytes = keyPair.getPublic().getEncoded();  
        byte[] privateKeyBytes = keyPair.getPrivate().getEncoded();  
  
        // Encrypt the original string using the public key  
        byte[] encryptedBytes = encrypt(originalString.getBytes(), publicKeyBytes);  
        String encryptedString = Base64.getEncoder().encodeToString(encryptedBytes);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string using the private key  
        byte[] decryptedBytes = decrypt(Base64.getDecoder().decode(encryptedString), privateKeyBytes);  
        String decryptedString = new String(decryptedBytes);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static byte[] encrypt(byte[] plainBytes, byte[] publicKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.ENCRYPT_MODE, KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(publicKeyBytes)));  
        return cipher.doFinal(plainBytes);  
    }  
  
    public static byte[] decrypt(byte[] encryptedBytes, byte[] privateKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.DECRYPT_MODE, KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(privateKeyBytes)));  
        return cipher.doFinal(encryptedBytes);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve giriş olarak düz metin veya şifreli verilerden oluşan bir bayt dizisini ve genel veya özel anahtardan oluşan bir bayt dizisini alan ve karşılık gelen şifreli veya şifresi çözülmüş bayt dizisini döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz. .

Main metot içerisinde öncelikle KeyPairGenerator sınıfını kullanarak "RSA" algoritması ve 2048 bitlik bir anahtar boyutu ile bir RSA anahtar çifti oluşturuyoruz. Daha sonra *getEncoded* metodunu kullanarak genel ve özel anahtarları anahtar çiftinden bayt dizileri olarak çıkarırız.

Şifreleme için, bir bayt dizisine dönüştürülmüş orijinal string ve giriş olarak genel anahtar bayt dizisi ile *encrypt* metodunu çağırıyoruz. Encrypt metodunun içinde "RSA" algoritmasını kullanarak bir Cipher nesnesi oluşturuyoruz ve bunu init metodunu kullanarak uygun modla (Cipher.ENCRYPT\_MODE) kullanarak public key ile başlatıyoruz. Ardından, verileri şifrelemek ve elde edilen bayt dizisini döndürmek için cipher nesnesinde doFinal metodunu çağırırız.

Şifre çözme için, bir bayt dizisine dönüştürülen base64-deşifre edilmiş şifrelenmiş string ve giriş olarak özel anahtar bayt dizisi ile *decrypt* metodunu çağırıyoruz. Decrypt yönteminin içinde "RSA" algoritmasını kullanarak başka bir Cipher nesnesi oluşturuyoruz ve uygun mod ile init metodunu kullanarak özel anahtarla başlatıyoruz.

### ECDH Uygulaması

ECDH (Elliptic Curve Diffie-Hellman), iki tarafın güvenli olmayan bir iletişim kanalı üzerinden paylaşılan bir sır oluşturmasına izin veren bir anahtar anlaşma protokolüdür. Java'da, eliptik eğri şifreleme kullanarak ECDH anahtar değişimini uygulamak için Java Cryptography Architecture'dan (JCA) KeyAgreement ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDH anahtar çifti oluşturmanın, başka bir tarafla anahtar değişimi gerçekleştirmenin ve paylaşılan bir anahtarı türetmenin bir örneğini burada bulabilirsiniz:

```
import javax.crypto.KeyAgreement;  
import javax.crypto.SecretKey;  
import javax.crypto.spec.ECGenParameterSpec;  
import java.security.*;  
import java.security.spec.ECParameterSpec;  
import java.security.spec.ECPublicKeySpec;  
import java.security.spec.InvalidKeySpecException;  
  
public class ECDHExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDH key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Simulate the other party by generating its own ECDH key pair  
        KeyPair otherKeyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey otherPrivateKey = otherKeyPair.getPrivate();  
        PublicKey otherPublicKey = otherKeyPair.getPublic();  
  
        // Perform key exchange with the other party  
        KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH");  
        keyAgreement.init(privateKey);  
        keyAgreement.doPhase(otherPublicKey, true);  
  
        // Derive the shared secret  
        byte[] sharedSecret = keyAgreement.generateSecret();  
  
        // Simulate the other party deriving the shared secret using its private key  
        KeyFactory keyFactory = KeyFactory.getInstance("EC");  
        ECParameterSpec ecParameterSpec = ((ECPublicKeySpec) otherPublicKey.getKeySpec(ECPublicKeySpec.class)).getParams();  
        PublicKey simulatedOtherPublicKey = keyFactory.generatePublic(new ECPublicKeySpec(((java.security.spec.ECPoint) otherPublicKey).getW(), ecParameterSpec));  
        KeyAgreement simulatedKeyAgreement = KeyAgreement.getInstance("ECDH");  
        simulatedKeyAgreement.init(otherPrivateKey);  
        simulatedKeyAgreement.doPhase(publicKey, true);  
        byte[] simulatedSharedSecret = simulatedKeyAgreement.generateSecret();  
  
        // Compare the two shared secrets (should be equal)  
        System.out.println("Shared secret: " + bytesToHex(sharedSecret));  
        System.out.println("Simulated shared secret: " + bytesToHex(simulatedSharedSecret));  
        System.out.println("Shared secrets match: " + bytesToHex(sharedSecret).equals(bytesToHex(simulatedSharedSecret)));  
    }  
  
    public static String bytesToHex(byte[] bytes) {  
        StringBuilder sb = new StringBuilder();  
        for (byte b : bytes) {  
            sb.append(String.format("%02X", b));  
        }  
        return sb.toString();  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve bir bayt dizisini onaltılık dizgiye dönüştürmek için bir bytesToHex yöntemi tanımlıyoruz.

Ana yöntemin içinde, önce "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDH anahtar çifti oluşturuyoruz. Daha sonra özel ve genel anahtarları anahtar çiftinden çıkarıyoruz.

Aynı eğri parametrelerini kullanarak kendi ECDH anahtar çiftini oluşturarak karşı tarafı simüle ediyoruz.

### ECDSA Uygulaması

ECDSA (Elliptic Curve Digital Signature Algorithm), eliptik eğri kriptografisine dayalı bir dijital imza algoritmasıdır. Java'da, ECDSA'yı uygulamak için Java Cryptography Architecture'dan (JCA) Signature ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDSA anahtar çiftinin nasıl oluşturulacağına, bir mesajın özel anahtarla nasıl imzalanacağına ve imzanın ortak anahtarla nasıl doğrulanacağına ilişkin bir örneği burada bulabilirsiniz:

```
import java.security.*;  
import java.security.spec.ECGenParameterSpec;  
import java.security.spec.InvalidKeySpecException;  
import java.security.spec.PKCS8EncodedKeySpec;  
import java.security.spec.X509EncodedKeySpec;  
  
public class ECDSAExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Sign a message with the private key  
        byte[] message = "Hello, world!".getBytes();  
        Signature signature = Signature.getInstance("SHA256withECDSA");  
        signature.initSign(privateKey);  
        signature.update(message);  
        byte[] signatureBytes = signature.sign();  
  
        // Verify the signature with the public key  
        Signature verifier = Signature.getInstance("SHA256withECDSA");  
        verifier.initVerify(publicKey);  
        verifier.update(message);  
        boolean signatureValid = verifier.verify(signatureBytes);  
  
        System.out.println("Signature valid: " + signatureValid);  
    }  
}
```

Bu örnekte öncelikle gerekli sınıfları import ediyoruz.

Ana yöntemin içinde, "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDSA anahtar çifti oluşturuyoruz. Anahtar çiftinden özel ve genel anahtarları çıkarıyoruz.

Daha sonra imzalamak için bir mesaj oluştururuz ve mesajı özel anahtarla imzalamak için Signature sınıfını kullanırız. SHA-256'yı hash fonksiyonu olarak kullanmak için "SHA256withECDSA" algoritmasını belirtiyoruz.

Daha sonra, Signature sınıfını kullanarak bir doğrulayıcı nesne yaratırız ve onu ortak anahtarla başlatırız. Doğrulayıcıyı aynı mesajla güncelleriz ve doğrulama yöntemini kullanarak imzayı doğrularız. İmzanın geçerli olup olmadığını belirlemek için sonucu true ile karşılaştırırız.

Gerçek dünya senaryosunda, iletim sırasında imzanın kurcalanmadığından emin olmak için genellikle imzalı mesajı ve ortak anahtarı doğrulayıcıya ayrı ayrı ileteceğinizi unutmayın.

Bu yazımda Java ile kriptoloji uygulamaları yaptım. Yazı serisine profilimden ulaşabilirsiniz. Beğenmeyi ve takip etmeyi unutmayın.

## Part 2




### Kriptoloji Temelleri:#1 Giriş



Merhaba, kriptoloji temelleri serisinin bu ilk yazısında, kriptolojinin ne olduğundan, geleneksel şifreleme tekniklerinden ve güçlü bir şifrenin nasıl oluşturulabileceğinden bahsedeceğim.

### Kriptolojiye Genel Bakış

Şifreleme bilimi olarak adlandırılan bu bilim türünde, gizli tutulmak istenen şeyler bir sistem dahilinde değişik teknik ve yöntemler ile şifrelenir. Aynı zamanda kriptoloji bilimi, şifrelenen iletilerin istenmeyen kişiler tarafından deşifre edilmemesi için de çalışmalar yapmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*hjisKMmnXD1yQQXQ3IOFjA.png)

Kriptoloji şifre bilimidir. Kriptografi bilgi güvenliği ile uğraşır, Kriptoanaliz güvenli bilginin kırılması başka bir deyişle kriptografinin tam karşıtıdır. Kriptoanalistler genelde şifre çözmeye dayalı çalışırlar. Kriptoloji bir [matematik](https://tr.wikipedia.org/wiki/Matematik "Matematik") bilimidir ve genelde sayılar teorisi üstüne kuruludur.

**Kriptografi**, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir.

**Kriptanaliz**, kripto sistemleri kırma, deşifre etme bilimidir.

### Tarihsel Gelişim

İlk kriptolog, 4000 yıl önce yaşamış Mısırlı bir kâtiptir. O, efendisinin hayatını anlatırken hiyeroglifleri şifrelenmiş bir şekilde oluşturmuştu ve bazı hiyeroglifler daha önce hiç kullanılmamıştı.

Kriptografi, bu şekilde başlamasına karşın, hayatının ilk 3000 yılında neredeyse hiç gelişemedi. Dünyanın farklı farklı yerlerinde bağlantısız bir şekilde en temel biçimde kullanılmıştı ancak medeniyetlerin yıkılışıyla sonraki adımlara geçilememişti.

Dönemin en önde uygarlığı olan Çin'de ise yazının şifresiz yazılmasının bile çok zor olması nedeniyle kriptografi hiç gelişemedi.

Daha sonraları (MÖ 5.--6. yüzyıl) askeri istihbaratta gizlilik gerekmesi nedeniyle, kriptografi askeri alana girdi. Askeri alandaki ilk kriptograflar Spartalılardır.

9. yüzyıl'da [Kindî](https://tr.wikipedia.org/wiki/Kind%C3%AE "Kindî"), kriptoloji biliminde uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişi olmuştur. Kindî, kriptoloji biliminde Jul Sezar (MÖ 50) tarafından bulunan ve uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişidir.

### Geleneksel Şifreleme Teknikleri

Tarihsel olarak temel seviyede birçok şifreleme algoritmas geliştirilmiş ve kullanılmıştır. Günümüzde gelişen bilgisayar teknolojisi ile bu şifreleri kırmak oldukçça kolay hale gelmiştir. Şimdi bu şifreleme tekniklerine ve nasıl zayıflıkları olduklarına detaylı değinelim.

#### İkame Şifresi

Bir metni şifrelemek için en basit yöntemlerden biri olan, ikame şifresi(yer değiştirme şifresi) tarihsel süreçte birçok kez kullanılmıştır ve temel kriptografinin iyi bir örneğidir.  
Fikir çok basit, alfabenin her harfini bir başkasıyla değiştiriyoruz. Örneğin;  
A ”†' k  
B ”†' d  
C ”†' w  
Bu örnekte, *ABBA* ifadesi *kddk* olarak şifrelenecektir.

Hangi harfin hangi harfe karşılık geleceğini belirlediğimiz ikame tablosunu tamamen rastgele seçtiğimizi varsayalım. İkame tablosu bu şifreleme sisteminin anahtarı olmuş olur. Her zaman olduğu gibi simetrik kriptografide anahtar gizli tutulmalıdır, yani A ve B arasında güvenli bir şekilde dağıtılmalıdır. Simetrik-Asimetrik kriptografi hakkında detaylı bilgi edinmek için bir önceki [yazımıza](https://pwnlab.me/tr-kriptografiye-giris/) bakabilirsiniz.  
 Tahmin edilebileceği gibi bu şifreyi kırmak oldukça kolaydır. Bu noktada klasik kriptanaliz tekniklerinden yararlanabiliriz.

#### İlk Saldırı: Kaba Kuvvet veya Kapsamlı Anahtar Arama

Kaba kuvvet saldırıları basit bir konsepte dayanır: Saldırgan, şifreli metine ve kısa bir düz metin parçasına (örneğin şifrelenmiş metnin başlığına) sahiptir. Bu durumda, tüm olası anahtarları deneyerek şifreli metni çözer. Ortaya çıkan düz metin, kısa düz metin parçasıyla eşleşirse doğru anahtarı bulmuş olur. Pratikte, kaba kuvvet saldırısı daha karmaşık olabilir çünkü yanlış anahtarlar yanlış, pozitif sonuçlar verebilir.

Prensipte simetrik şifrelere karşı kaba kuvvet saldırısının her zaman mümkün olduğuna dikkat etmek önemlidir. Pratikte uygulanabilir olup olmadığı, belirli bir şifre için var olan olası anahtarların sayısına bağlıdır. Tüm anahtarları test etmek çok fazla zaman alıyorsa, yani birkaç on yıl alıyorsa, şifre bir kaba kuvvet saldırısına karşı güvenlidir.

İkame şifresinin anahtar uzayını belirleyelim: İlk A harfinin yerine geçecek olan harfi seçerken alfabenin 26 harfinden rastgele bir harf seçiyoruz (yukarıdaki örnekte k seçtik). Bir sonraki alfabe harfi B'nin karşılığı, kalan 25 harften rasgele seçilmiştir, vb. Bu nedenle, ikame şifresinin anahtar uzayı = 26 · 25 · ”¦.. · 3 · 2 · 1 = 26! olur.

Yüz binlerce yüksek güçlü bilgisayarla bile böyle bir arama birkaç on yıl alacaktır. Bu nedenle, ikame şifresinin güvenli olduğunu düşünebiliriz. Ancak, bu yanlış çünkü daha güçlü bir saldırı daha var.

#### İkinci Saldırı: Harf Frekans Analizi

Frekasn Analizi 9.yy.'da Al-Kindi tarafından önerilmiştir. Dildeki tekrarlara dayanmaktadır.

Herhangi bir dil için, o dildeki harflerin kullanım sıklıkları hesaplanır. İngilizce dilinde harflerin kullanım sıklığını içeren tablo aşağıda verilmiştir.

![](https://cdn-images-1.medium.com/max/800/0*9LADpthWZ361CIFT.png)

Tablodan da görüleceği gibi, ingilizce dilinde en sık kullanılan harf 'E' harfidir, ikinci en sık kullanılan harf ise 'T' harfidir. Eğer şifreli metin uzunsa en çok gözüken harf büyük olasılıkla düz metindeki E'ye denk gelir ve ikinci en çok gözüken harfte büyük olasılıkla T'ye denk gelir, bu şekilde devam eder.

İkame şifresi, böyle bir analitik saldırı ile kolayca kırılabilir. Şifrenin en büyük zayıflığı, düz metnin her karakterinin her seferinde aynı karakterle değiştirilmesidir.

#### Sezar Şifresi

Sezar şifresi diğer adıyla kaydırma şifresi, aslında ikame şifresinin özel bir halidir. Kaydırma şifresinin kendisi son derece basittir: Düz metnin her harfini alfabede sabit sayıda konumla kaydırırız. Örneğin, 3 konum kaydırırsak, A yerine d, B yerine e vb. gelirdi. Tek sorun alfabenin sonuna doğru ortaya çıkıyor: X, Y, Z ile ne yapmalıyız? Bu durumda başa dönüyoruz. Bu durumda, X->a, Y->b ve Z->c ile yer değiştirilir.  
 Tarihte Julius Sezar bu şifreyi üç konumlu bir kaydırma ile kullanmıştı. Sezar şifresi ismi buradan gelmektedir.  
 Şifrenin matematiksel ifadesi için alfabenin harfleri aşağıdaki tabloda gösterildiği gibi sayısal olarak kodlanmıştır.

![](https://cdn-images-1.medium.com/max/800/0*0ATssVLmJQigP6cg.png)

Anahtar k = 17 olsun ve düz metin:

ATTACK = x1,x2,”¦,x6 = 0,19,19,0,2,10 olsun.s

Şifreli metin şu şekilde hesaplanır:

y1,y2,”¦,y6 = 17,10,10,17,19,1 = rkkrtb

İkame şifresinde olduğu gibi, kaydırma şifresi de hiç güvenli değildir. Aynı şekilde bu şifreyi kırmak için de iki yolumuz var:  
 1. Anahtar uzayı 26 anahtardan oluştuğu için, belirli bir şifreli metnin şifresini tüm olası 26 anahtarla çözmeye çalışarak, kaba kuvvet yöntemiyle, kırabiliriz. Ortaya çıkan düz metin okunabilir ise, anahtarı bulmuş oluruz.  
 2. İkame şifresindeki gibi frekans analizi kullanılabilir.

#### Vigenere Şifresi

Çok alfabeli şifrelemenin basit bir formu olan Vigenere şifreleme, tek alfabeli kaydırma ve yerine koyma şifreleme yöntemlerine dayanan sezar şifreleme algoritmasının geliştirilmiş halidir. Sezar şifrelemede kaydırma ve yerine koyma işemleri için sadece bir alfabe kullanılırken, Vigenere şifrelemede birden fazla alfabe kullanılır. Böylece şifrelenecek mesajdaki aynı harflerin şifrelenmesi sonucunda farklı harfler ortaya çıkar.

![](https://cdn-images-1.medium.com/max/800/0*QLwvLTeM5X8wzRbJ)

Şifreleme yönteminde öncelikle şifreleme işlemi sırasında kullanılacak anahtar seçilir. Şifrelenecek mesajın ilk harfi, anahtar değerinin ilk harfinin alfabedeki sırası oranında kaydırılır ve şifreli harf elde edilir. Anahtar değerindeki her harfin sırasına göre, şifrelenecek mesajdaki her harf farklı bir alfabe ile şifrelenir ve şifreleme işlemi tamamlanır.

#### Playfair Şifresi

Charles Wheatstone tarafından 1854'de önerilmiştir , Lord Playfair kullanımını teşvik etmiştir. Birden fazla harf değişimi kullanılarak daha güçlü bir şifreleme yapılması hedeflenmiştir.

Şifrelemede anahtarın ve alfabenin geri kalanının yer aldığı 5×5'lik bir tablo kullanılır. Anahtarı ve 4 basit kuralı bilmek sistemi kullanmak için yeterlidir.

**Kurallar:**

1- Eğer iki harf de aynıysa ya da en son tek bir harf kaldıysa, ilk harften sonra bir "X" harfi eklenir.

2- Eğer iki harf aynı satırdaysa, her harf sağındaki harfle değiştirilir. (bir harf eğer satır sonundaysa, satır başındakiyle değiştirilir)

3-Eğer iki harf aynı sütundaysa, her harf altındaki harfle değiştirilir(bir harf eğer sütunun sonundaysa, sütun başındakiyle değistirilir)

4-Eğer harfle aynı sütun veya satırda değilse, harfler bir dikdörtgenin iki köşesi olarak düşünülür ve harfler karşılarındaki köşede yer alan harf ile değiştirilir. Bir örnekle açıklayalım.

**mesajımız: kriptoloji**  
**şifremiz: keyword**

Bu durumda tablo şekildeki gibi olacaktır. Önce anahtar yazılır. Aynı harfler bir kez kullanılır. 5×5'lik tablonun geri kalanı, kalan harflerle doldurulur. 25 harfe inmek için I ve J harfi aynı kutuya konur.

![](https://cdn-images-1.medium.com/max/800/0*Vo-d0ErN-moY0kLR.jpg)
> *düz metin: kr ip to lo ji için*

> *şifreli metin: rf hq kz sc jx olur*

Plafair gibi ikili harf değişim sistemleri iki harfli frekans analizine dayanıklı değildirler. Bilgisayarlar ile kısa uzunluktaki harf değişimlerini kırmak mümkündür.

Şifreyi kırmak için dilde ikili harf gruplarının ne sıklıkla görüldüğü hesaplanır ve bunun üzerinden mesajın şifresi çözülmeye çalışılır. Bu işlem başta göz korkutabilir ancak bir bilgisayar için hiç de zor değildir. Güçlü bir bilgisayar sistemi, 8-harf'e kadar frekans analizini yapabilecek yeterliktedir

#### Affine Şifresi

Affine şifreeme mono alfabetik yerine koymalı şifreleme yöntemlerinin bir çeşididir. Yöntemde önce kullanılacak alfabenin her harfine karşılık bir sayı değeri atanır bu değerer bir tabloda tutulur. Bu tablonun karşılıklı iletişim gerçekleştirek isteyen her iki tarafta da bulunması gerekir.

![](https://cdn-images-1.medium.com/max/800/0*Z-cr2RD4JROMRDIQ)

Şifreenmek istenen açık mesajın her karakteri için, karaktere karşılık gellen sayı değeri basit bir matematiksel fonksiyona girdi olarak gönderilir. Fonksiyondan çıkış olarak üretilen bu sayı değeri, tabloda hangi karakteri temsil ediyorsa o karakter, şifreli mesajın yapısını oluşturur.

#### Vernam Şifresi

Adına kırılmaz şifreleme de diyebileceğimiz bu yöntem çok güvenilir olmasına rağmen pratikte uygulanması oldukçca zordur. Bu yöntemde, tek sefer kullanılacak rastgele karakterlerden/bitlerden oluşan uzun bir dizi üretilir. Düz metin, one-time pad'le XOR işlemine sokularak şifreli metin elde edilir. Şifreli metin ile one-time pad'in XOR işlemine sokulması düz metni geri getirir.

![](https://cdn-images-1.medium.com/max/800/0*6s6SoNCSSj-Sqs27.png)

one-time pad olarak da bilinen isminden anlaşılacağı gibi tek kullanımlık ve tamamen rastgele üretilmiş olmalıdır. .Aynı anahtarın tekrar kullanımı şifrelemede zayıflığa yol açar ve kırılabilmesine olanak tanır.

Bu şifreleme tekniği kusursuz gizlilik sağlar çünkü şifreli metin düz metin hakkında hiçbir bilgi içermemektedir. Frekans analizi bu teknikte kullanılamaz. Bitler yerine harfler ya da karakterler üzerinde çalışan halini de kullanmak mümkündür.

Bunun yanında, anahtarın çok uzun(mesaj ile aynı uzunlukta) ve dağıtımının zor olması bu şifreyi pratikte kullanmayı zor bir hale getirmektedir.

### Güçlü Şifre

Güçlü bir şifrenin karakteristik özellikleri, hem uzun hem de çeşitli olmasıdır. "1234" gibi basit bir şifre kombinasyonu kolayca tahmin edilebilir. Tahmin edilemese bile bir programı yardımıyla saldırı yapan internet korsanı, birkaç saatlik tarama sonucunda (bazen daha kısa) şifrenizi kolayca ele geçirebilir. Şifremizin içerisindeki çeşitlilik, şifremizin uzunluğu ve farklı karakterlerin şifremize dahil olması, şifremizi brute force gibi yöntemlerle kırmayı güç hatta bazen imkansız hale getirir.

Güçlü bir şifreyi kendiniz de oluştuabileceğiniz gibi bir araçtan da yardım alabilirsiniz: <https://passwordsgenerator.net/>

#### Güçlü bir şifre için:

1. Maksimum uzunluğu hedefleyin
2. Şifrenizi sadece rakam veya harflerden oluşturmayın
3. Şifrenizde ekstra karakterlere yer verin

#### Güçlü şifre örnekleri

* Tu\9a;gMD
* hb!(Bz8XE
* 5}JBqseLL
* `zhx!8BBF
* u$7sSsX3#

Tabi bu tür şifreleri akılda tutmak zor olabilir. Bunun için parola yöneticisi yazılımlarını kullanabilirsiniz.

Bu yazımda kriptoloji konusunu anlattım. Bir sonraki yazımda kriptografi ve kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 3




### Kriptoloji Temelleri:#3 Kriptanaliz



Merhaba, kriptoloji temelleri serisinin bu yazısında kriptanalizin ne olduğundan, şifre kırma tekniklerinden ve sosyal mühendislik yöntemlerinden bahsedeceğim.

### Kriptanalize Genel Bakış

Kriptanaliz, kripto sistemleri kırma, deşifre etme bilimidir. Şifrelenmiş metinlerin çözümünü araştıran kriptoloji dalıdır. Kriptanaliz, bilinmeyen anahtarları bulmak için kullanılır.

![](https://cdn-images-1.medium.com/max/800/0*WYSM0JXe3tpf70lG.png)

Kriptanalizi; Uygulama Saldırıları, klasik kriptanaliz ve sosyal mühendislik olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

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

#### Şifre Püskürtme Saldırıları (Password Spraying Attacks)

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

### Klasik Kriptanaliz

Klasik kriptanaliz, şifreli metninden düz metini kurtarma veya alternatif olarak şifreli metninden anahtarı bulma bilimidir. Şifreleme yönteminin iç yapısından yararlanan matematiksel analizleri kullanır.

![](https://cdn-images-1.medium.com/max/800/0*ct3PFF4EH3YUqAlK)

Encryption(şifreleme) Decryption(şifre çözme)

Bir şifreleme işlemi 3 unsurdan oluşur. Bunlar: açık metin, şifrelenmiş metin ve anahtardır. Eğer bu unsurlardan her hangi ikisine sahipsek üçüncüsünü rahatlıkla bulabiliriz. Ancak, kriptanalizin asıl işlevi sadece şifreli metin mevcut iken diğerlerini bulabilme becerisidir. Bunun için çeşitli matematiksel yöntemlerden yararlanır.

Bu yöntemler şunlardır:

* **Bilinen Düz Metin Analizi (KPA)**: Bu tür bir saldırıda, bazı düz metin-şifreli metin çiftleri zaten bilinmektedir. Saldırgan, şifreleme anahtarını bulmak için bunları eşler. Halihazırda birçok bilgi mevcut olduğundan bu saldırının kullanımı daha kolaydır.
* **Seçilmiş Düz Metin Analizi (CPA)**: Bu tür saldırıda, saldırgan rasgele düz metinleri seçer ve karşılık gelen şifreli metinleri alır ve şifreleme anahtarını bulmaya çalışır. KPA gibi uygulaması çok basit ama başarı oranı oldukça düşük.
* **Yalnızca Şifreli Metin Analizi (COA)**: Bu tür saldırıda, yalnızca bazı şifreli metinler bilinir ve saldırgan karşılık gelen şifreleme anahtarını ve düz metni bulmaya çalışır. Uygulanması en zor olanıdır, ancak yalnızca şifreli metin gerektiğinden en olası saldırıdır.
* **Uyarlanabilir Seçilmiş Düz Metin Analizi (ACPA)**: Bu saldırı benzer bir EBM'dir. Burada saldırgan, bazı metinler için şifreli metinlere sahip olduktan sonra ek düz metinlerin şifreli metinlerini ister.
* **Doğum günü saldırısı:** Bu saldırı, bir grup insanda aynı doğum gününü paylaşan iki veya daha fazla kişinin olasılığını kullanır. Kriptografide, bu saldırı bir hash fonksiyonundaki çarpışmaları bulmak için kullanılır.
* **Diferansiyel kriptanaliz**: Bu tür saldırı, şifreleme algoritmasındaki kalıpları bulmak için düz metin çiftlerini ve bunlara karşılık gelen şifreli metinleri karşılaştırmayı içerir. Belirli özelliklere sahip blok şifrelere karşı etkili olabilir.
* **Integral kriptanaliz:** Temelinde Değiştirme-Karıştırma işemeri buunan blok şifreleme yöntemleri üzerinde kullanılan bir yöntemdir.

### Sosyal Mühendislik

Kurduğumuz kripto sistem ne kadar güçlü olursa olsun insan faktörü kaynaklı riskler göz ardı edilmemelidir. Bir gizli anahtarı elde etmek için rüşvet, şantaj, kandırma veya klasik casusluk kullanılabilir. Örneğin bir kişinin kafasına silah dayayarak şifreyi söylemeye zorlamak oldukça başarılı olabilir. Daha az şiddet içeren bir başka saldırı da, saldırmak istediğimiz kişileri telefonla arayarak "Şirketinizin IT departmanından arıyoruz. Önemli yazılım güncellemeleri için şifrenize ihtiyacımız var" gibi sosyal mühendislik teknikleridir. Bu gibi durumlarda şifrelerini gerçekten verecek kadar saf olan insanların sayısının hiç de az olmaması şaşırtıcıdır.

![](https://cdn-images-1.medium.com/max/800/0*T75D0kY4zcu3_J5U)

Saldırgan her zaman kripto sisteminizdeki en zayıf halkayı arar. Bunun için, güçlü algoritmalar seçmemiz, sosyal mühendislik ve uygulama saldırılarının pratik olmadığından emin olmamız gerekir. Hem uygulama saldırıları hem de sosyal mühendislik saldırıları pratikte oldukça güçlü olabilir.

#### Kimlik Avı Saldırıları (phishing attacks)

Saldırganın kurbana kötü amaçlı bir bağlantı göndererek güvenilir bir site kılığına girdiği bir sosyal mühendislik tekniğini içerir. Kurban, meşru bir web sunucusunda kimlik doğrulaması yaptıklarını varsaydıktan sonra, bu bağlantıya tıklayarak saldırgana hesap bilgilerini sağlar. Bu yolla saldırgan hedef kullanıcının hesap bilgilerini ele geçirmiş olur, kurban ise oltalanmış demektir.

![](https://cdn-images-1.medium.com/max/800/0*C1Redj9meJnjH1ur)

Kimlik hırsızlığının yanı sıra, oltalama saldırıları, saldırganın bir kullanıcının izinlerini elde etmesini sağlayarak, saldırı tespit edilmeden sistemin daha derin bileşenlerini tehlikeye atmasına olanak tanır. Kimlik avı saldırılarında, saldırganlar, kullanıcıyı kötü amaçlı bağlantıyı tıklaması için kandırmak için genellikle birden çok yöntem kullanır:

1. **DNS önbellek zehirlenmesi:** Saldırganlar, kullanıcı isteklerini benzer görünen bir alan adına sahip kötü amaçlı bir siteye yönlendirmek için uygulamanın DNS sunucusundaki güvenlik açıklarından yararlanır.
2. **URL'yi ele geçirme/yazım hatası:** Saldırgan, kimliğine bürünmek istediği web sitesinden ince farklar içeren gerçek görünümlü bir URL oluşturur. Saldırı, kullanıcıların yazım hataları yapmasına bağlıdır, bu nedenle kötü amaçlı sayfaya gelirler.
3. **Sekmeleme:** Saldırgan, katılımsız tarayıcı sekmelerini yasal web sayfaları gibi görünen kötü amaçlı sitelerle yeniden yazar.
4. **Kullanıcı arabirimi düzeltme/iFrame yerleşimi:** Saydam katmanlar kullanan saldırgan, yasal, tıklanabilir bir düğmenin üzerine kötü amaçlı sayfaya bir bağlantı yerleştirir.
5. **Klon kimlik avı :** Bu saldırıda, saldırgan, orijinal e-postadaki bağlantıların URL'lerle değiştirildiği meşru bir e-postanın bir kopyasını kötü amaçlı sitelere gönderir.

Bu yazımda kriptanaliz konusunu anlattım. Bir sonraki yazımda kriptografi konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 4




Merhaba, kriptoloji temelleri serisinin bu yazısında blokzincirin ne olduğundan nasıl çalıştığından ve nerelerde kullanıldığından bahsedeceğim.

### Blok Zincir Nedir?

**Blok zinciri**(blockchain), [kriptografi](https://tr.wikipedia.org/wiki/Kriptografi "Kriptografi") kullanılarak bağlanan ve güvenli hale getirilen, bloklar ile sürekli büyüyen bir [kayıt](https://en.wikipedia.org/wiki/Record_%28computer_science%29 "en:Record (computer science)") listesidir.

![](https://cdn-images-1.medium.com/max/800/0*_mqEk43FYCnMOB8k)

Blockchain teknolojisi 2008 yılında Satoshi Nakamoto tarafından icat edildi. Son birkaç yıldır büyük önem kazandığı için birçok ülke teknolojiyi geliştirmek ve çeşitli alanlarda kullanmak için çalışmalara başladı. Blockchain, FinTech kuruluşları tarafından büyük beğeni topluyor. Blockchain Teknolojisinin Dijital Kimlikler, Bitcoin ve Ethereum gibi pratik uygulamaları, bu teknolojinin kalıcı olduğunu açıkça ortaya koydu. Dağıtılmış veri depolama, şifreleme algoritmaları ve fikir birliği mekanizması dahil olmak üzere çeşitli teknolojilerin bir kombinasyonudur. Teknoloji, finans, bankacılık ve siber güvenlik departmanları gibi departmanların çalışma modellerinde devrim yaratma yeteneğine sahiptir.

#### **Blockchain teknolojisinin avantajlarından bazıları:**

* Üçüncü taraf müdahalesi yok.
* Veriler değiştirilemez veya silinemez.
* Güvenli veri defteri.
* Blockchain'deki tüm bloklar zaman damgalıdır.
* Şeffaf işlemler.
* Blockchain'deki her bir düğüme dağıtılır.
* Çoğaltma veya dolandırıcılık riski yoktur.

### Blok Zincir Nasıl Çalışır?

Blok zinciri kısaca şöyle işler: Her blok tipik olarak işlem verilerini, önceki bloğun hash değerini ve bir zaman damgasını içerir. Tasarım gereği, bir blok zinciri, kayıtların sonradan değiştirilmesine dirençlidir. Kullanılan kayıt listesi, "iki taraf arasındaki işlemleri verimli, doğrulanabilir ve kalıcı bir şekilde kaydedebilen açık, dağıtılmış bir defterdir". Dağıtılmış bir defter olarak kullanmak için, bir blok zinciri tipik olarak, topluca bir protokole bağlı düğümler arası iletişim ve yeni blokları onaylamak için bir eşler arası (peer-to-peer) ağ tarafından yönetilir. Herhangi bir bloktaki veriler sonradan değiştirilmek istendiğinde, verinin bulunduğu blok ve sonraki tüm blokların değiştirilmesi gerekecektir. Bu da bir sonraki düğüm yazılmadan önce, her blok yazımı için düğüm seçiminde seçilmeyi ve her seferde ağdaki düğümlerin çoğunluğunun onayını gerektirir. Ayrıca her blokta kimin değiştirdiği belli olduğundan, olası bir kötüye kullanımın tespit edilmesi de mümkündür.

![](https://cdn-images-1.medium.com/max/800/0*8FN6t57s1kOFav3O)

Blockchain, önde gelen üç teknoloji üzerinde çalışır:

#### 1- Kriptografi anahtarları

Kriptografi anahtarları iki türdürâŠ–”ŠÖzel anahtar ve Genel anahtar. Bir ağdaki her iki taraf da bu iki anahtara sahiptir ve böylece güvenli bir dijital kimlik oluşturmaya yardımcı olur. Bu anahtarlar, bu iki kişi arasındaki işlemlerin başarılı bir şekilde gerçekleştirilmesine yardımcı olur. Bu güvenli kimlik, kripto para birimi söz konusu olduğunda 'dijital imza' olarak adlandırılan Blockchain teknolojisinin en önemli yönüdür.

#### 2- Paylaşılan bir deftere sahip eşler arası bir ağ

Dijital imza daha sonra eşler arası bir ağ ile birleştirilir; yetkili olarak hareket eden ve dijital imzayı diğer tüm konuların yanı sıra işlemlerde başkalarının fikir birliğine varmak için kullanan çok sayıda kişi.

#### 3- Ağın kayıtlarını ve işlemlerini paylaşmak için bir bilgi işlem aracı

Hepsi bir anlaşmaya izin verdiğinde, bu, paylaşılan bir ağda iki taraf arasında güvenli bir işlemle sonuçlanan matematiksel bir doğrulama ile onaylanır.

Böylece Blockchain teknolojisinde kullanıcılar, eşler arası ağ üzerinden farklı dijital işlemleri gerçekleştirmek için kriptografi anahtarları kullanır.

### Blok Zincir Nerelerde Kullanılır?

Blok zinciri teknolojisi çoklu alanlara entegre edilebilir. Günümüzde blok zincirlerinin birincil kullanımı, en başta bitcoin olmak üzere, kripto para birimleridir.

![](https://cdn-images-1.medium.com/max/800/0*r5VtfCsKzSlSziWt)

Blok zinciri teknolojisi, uzun vadede iş işletme modellerini dönüştürmek için büyük bir potansiyele sahiptir. Blok zinciri dağıtılmış defter teknolojisi, genellikle, küresel ekonomik ve sosyal sistemler için yeni temeller oluşturma potansiyeline dayanan, tipik olarak "düşük maliyetli bir çözümle geleneksel bir iş modeline saldırı yapan ve görevdeki firmaları hızla tüketen yıkıcı bir teknolojiden" daha temel bir teknolojidir. Blok zincirlerin kullanımı, küresel tedarik zincirlerine, finansal işlemlere, varlık defterlerine ve merkezi olmayan sosyal ağlara önemli verimlilik getirme vadediyor.

#### Akıllı sözleşmeler

Blok zinciri tabanlı akıllı sözleşmeler, insan etkileşimi olmadan kısmen veya tamamen yürütülebilen veya uygulanabilen sözleşmelerdir. Akıllı bir sözleşmenin ana amaçlarından biri otomatik emanettir. IMF, blok zincirlerinin manevi zararları azaltabileceğini ve genel olarak sözleşmelerin kullanımını optimize edebileceğine inanıyor. Yaygın kullanım eksikliği nedeniyle yasal statüsü belirsizdir.

#### Merkezi olmayan ağlar

* Backfeed projesi, eşzamanlı olarak ortaya çıkan eşlerin ağlarında işbirlikçi oluşum ve değerin dağıtımını sağlayan blok zincir tabanlı uygulamalar için dağıtılmış bir yönetim sistemi geliştirir.
* İskenderiye projesi blok zincir tabanlı Dağıtılmış Kütüphane'dir.
* Tezos, token sahiplerinin oyu ile kendisini yöneten bir blok zincir projesidir. [Bitcoin](https://tr.wikipedia.org/wiki/Bitcoin "Bitcoin") blok zinciri bir kripto para birimi ve ödeme sistemi olarak gerçekleştirir. Ethereum blok zinciri, bir blok zincirinin üstüne akıllı sözleşme sistemi ekledi. Tezos blok zinciri, hem bitcoin hem de Ethereum blok zincirlerinin üzerinde bir özerklik sistemiâŠ–”Šmerkezi olmayan bir kod Geliştirme fonksiyonu ekleyecektir.

#### Hükümetler ve ulusal para birimleri

ABD Genel Hizmetler İdaresi'nde görevli BT Sözleşme Planlama Operasyon Müdürü Jose Arrieta, Eylül 2017'de ACT-IAC (Amerikan Teknoloji Konseyi ve Endüstri Danışma Konseyi) Forumu'nda organizasyon blok zinciri dağıtılmış defter teknolojisini BT Çizelgesi 70 sözleşmelerini FASt Lane sürecini hızlandırmak için otomasyon yoluyla kullandığını açıkladı.

ABD Gümrük ve Sınır Korumasının bir alt komitesi olan Ticari Gümrük İşlemleri Danışma Komitesi, blok zincirinin görevlerinde uygulanabilecek pratik yollarını bulmak için çalışıyor.

#### Bankalar

Finans sektörünün büyük bölümleri bankacılıkta kullanılmak üzere dağıtılmış defterleri uyguluyor ve Eylül 2016'da yapılan bir IBM araştırmasına göre, bu beklenenden daha hızlı gerçekleşiyor. Bankalar, bu teknolojiye ilgi duyuyor çünkü arka ofis yerleşim sistemlerini hızlandırma potansiyeli var.

#### Diğer finans şirketleri

Kredi ve borç ödeme şirketi MasterCard, programcılar için hem kişiden kişiye (P2P) hem de işletmeler arası (B2B) ödeme sistemlerini geliştirmek için üç blok zincir tabanlı API ekledi.

CLS Group, uzayabileceği döviz ticareti anlaşmalarının sayısını artırmak için blok zinciri teknolojisini kullanıyor.

VISA ödeme sistemleri, Mastercard, Unionpay ve SWIFT, blok zincir teknolojisini kullanma planlarını ve gelişmelerini açıkladı.

### Blok Zincir Türleri

Halihazırda, üç tip **blok zincir** ağı vardır:  
genel blok zincirleri, özel blok zincirleri ve konsorsiyum blok zincirleri.

#### Genel blok zincirleri

Bir genel blok zincirinin kesinlikle erişim kısıtlaması yoktur. İnternet bağlantısına sahip olan herkes, işlem gerçekleştirebilir ve bir geçerlilik kazanabilir (yani, bir konsensüs protokolünün yürütülmesine katılabilir). Genellikle, bu tür ağlar onları güvenceye alan ve bir Proof of Stake veya Proof of Work algoritması kullanan kişiler için ekonomik teşvikler sunar.

En büyük, en bilinen genel blok zincirlerinden bazıları Bitcoin ve Ethereum'dur.

#### Özel blok zincirleri

Bu tip blok zincirler genel olarak blok zinciri teknolojisiyle ilgilenen ancak kamu ağları tarafından sunulan bir kontrol seviyesinde rahat olmayan şirketler için bir orta zemin olarak düşünülebilir. Tipik olarak, blok zincirini kendi özerkliklerinden ödün vermeden muhasebe ve kayıt tutma prosedürlerine dahil etmemeye ve hassas verileri kamuya açık internet riskiyle karşı karşıya bırakmamaya çalışırlar.

#### Konsorsiyum blok zincirleri

Bir konsorsiyum blok zincirinin genellikle yarı-merkezsiz olduğu söylenir. Aynı zamanda izinlidir; ancak bunu kontrol eden tek bir kuruluş yerine, her bir şirket böyle bir ağda bir düğüm işletebilir. Bir konsorsiyum zincirinin yöneticileri, kullanıcıların okuma haklarını uygun gördükleri şekilde kısıtlar ve yalnızca sınırlı sayıda güvenilir düğümlerin bir konsorsiyum protokolü yürütmesine izin verir.

Bu yazımda blokzincir konusunu anlattım. Serinin listesini profilimde bulabilirsiniz.

## Part 5




### Kriptoloji Temelleri:#5 Uygulama



Merhaba, kriptoloji temelleri serisinin bu son yazısında kriptografik protokollerin nasıl uygulandığından bahsedeceğim. Uygulama aşamasında Java programalama dilini kullanacağım.

### MD5 Uygulaması

MD5, herhangi bir giriş verisi için sabit boyutlu bir çıktı (128 bit) üretebilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'nin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın MD5 özet değerini hesaplayabilirsiniz.

Java'da bir sitringin MD5 hashinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class MD5Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String md5Hash = calculateMD5(input);  
        System.out.println("MD5 hash of '" + input + "' is: " + md5Hash);  
    }  
  
    public static String calculateMD5(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("MD5");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("MD5 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve MD5 değerini bir string olarak döndüren bir *calculateMD5* metodu tanımlıyoruz.

calculateMD5 metodunun içinde, önce *getInstance* metodunu kullanarak ve "MD5" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve MD5 özetini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodunu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi MD5 özeti olarak döndürürüz.

### SHA-1 Uygulaması

SHA-1 (Secure HashAlgorithm 1), herhangi bir giriş verisi için sabit boyutlu bir çıktı (160 bit) oluşturabilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'sinin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın SHA-1 özetini hesaplayabilirsiniz.

Java'da bir stringin SHA-1 özetinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class SHA1Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String sha1Hash = calculateSHA1(input);  
        System.out.println("SHA-1 hash of '" + input + "' is: " + sha1Hash);  
    }  
  
    public static String calculateSHA1(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("SHA-1");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("SHA-1 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve SHA-1 özetini bir string olarak döndüren bir *calculateSHA1* metodu tanımlıyoruz.

*calculateSHA1* metodunun içinde, önce *getInstance* metodunu kullanarak ve "SHA-1" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve SHA-1 özet değerini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi SHA-1 özeti olarak döndürürüz.

### DES Uygulaması

DES (Data Encryption Standard), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, DES şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'dan (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da DES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine dair bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class DESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş dizeyi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her yöntemin içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile DES şifreleme algoritmasını belirten "DES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar dizgisini ve "DES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt dizisine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal metodunu çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir stringe dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### AES Uygulaması

AES (Gelişmiş Şifreleme Standardı), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, AES şifreleme ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da AES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class AESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş stringi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her metodun içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile AES şifreleme algoritmasını belirten "AES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar stringini ve "AES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt stringine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal yöntemini çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir dizeye dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### RSA Uygulaması

RSA (Rivest–Shamir–Adleman), verileri güvenli bir şekilde şifrelemek ve şifresini çözmek için kullanılabilen bir açık anahtarlı şifreleme algoritmasıdır. Java'da, RSA şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) KeyPairGenerator ve Cipher sınıflarını kullanabilirsiniz.

Java'da bir RSA anahtar çiftinin nasıl oluşturulacağına, ortak anahtarı kullanarak bir stringin nasıl şifreleneceğine ve şifrelenmiş stringin şifresinin nasıl çözüleceğine ilişkin bir örnek aşağıda verilmiştir:

```
import javax.crypto.Cipher;  
import java.security.KeyPair;  
import java.security.KeyPairGenerator;  
import java.util.Base64;  
  
public class RSAExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
          
        // Generate an RSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");  
        keyPairGenerator.initialize(2048);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
          
        // Get the public and private keys from the key pair  
        byte[] publicKeyBytes = keyPair.getPublic().getEncoded();  
        byte[] privateKeyBytes = keyPair.getPrivate().getEncoded();  
  
        // Encrypt the original string using the public key  
        byte[] encryptedBytes = encrypt(originalString.getBytes(), publicKeyBytes);  
        String encryptedString = Base64.getEncoder().encodeToString(encryptedBytes);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string using the private key  
        byte[] decryptedBytes = decrypt(Base64.getDecoder().decode(encryptedString), privateKeyBytes);  
        String decryptedString = new String(decryptedBytes);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static byte[] encrypt(byte[] plainBytes, byte[] publicKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.ENCRYPT_MODE, KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(publicKeyBytes)));  
        return cipher.doFinal(plainBytes);  
    }  
  
    public static byte[] decrypt(byte[] encryptedBytes, byte[] privateKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.DECRYPT_MODE, KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(privateKeyBytes)));  
        return cipher.doFinal(encryptedBytes);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve giriş olarak düz metin veya şifreli verilerden oluşan bir bayt dizisini ve genel veya özel anahtardan oluşan bir bayt dizisini alan ve karşılık gelen şifreli veya şifresi çözülmüş bayt dizisini döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz. .

Main metot içerisinde öncelikle KeyPairGenerator sınıfını kullanarak "RSA" algoritması ve 2048 bitlik bir anahtar boyutu ile bir RSA anahtar çifti oluşturuyoruz. Daha sonra *getEncoded* metodunu kullanarak genel ve özel anahtarları anahtar çiftinden bayt dizileri olarak çıkarırız.

Şifreleme için, bir bayt dizisine dönüştürülmüş orijinal string ve giriş olarak genel anahtar bayt dizisi ile *encrypt* metodunu çağırıyoruz. Encrypt metodunun içinde "RSA" algoritmasını kullanarak bir Cipher nesnesi oluşturuyoruz ve bunu init metodunu kullanarak uygun modla (Cipher.ENCRYPT\_MODE) kullanarak public key ile başlatıyoruz. Ardından, verileri şifrelemek ve elde edilen bayt dizisini döndürmek için cipher nesnesinde doFinal metodunu çağırırız.

Şifre çözme için, bir bayt dizisine dönüştürülen base64-deşifre edilmiş şifrelenmiş string ve giriş olarak özel anahtar bayt dizisi ile *decrypt* metodunu çağırıyoruz. Decrypt yönteminin içinde "RSA" algoritmasını kullanarak başka bir Cipher nesnesi oluşturuyoruz ve uygun mod ile init metodunu kullanarak özel anahtarla başlatıyoruz.

### ECDH Uygulaması

ECDH (Elliptic Curve Diffie-Hellman), iki tarafın güvenli olmayan bir iletişim kanalı üzerinden paylaşılan bir sır oluşturmasına izin veren bir anahtar anlaşma protokolüdür. Java'da, eliptik eğri şifreleme kullanarak ECDH anahtar değişimini uygulamak için Java Cryptography Architecture'dan (JCA) KeyAgreement ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDH anahtar çifti oluşturmanın, başka bir tarafla anahtar değişimi gerçekleştirmenin ve paylaşılan bir anahtarı türetmenin bir örneğini burada bulabilirsiniz:

```
import javax.crypto.KeyAgreement;  
import javax.crypto.SecretKey;  
import javax.crypto.spec.ECGenParameterSpec;  
import java.security.*;  
import java.security.spec.ECParameterSpec;  
import java.security.spec.ECPublicKeySpec;  
import java.security.spec.InvalidKeySpecException;  
  
public class ECDHExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDH key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Simulate the other party by generating its own ECDH key pair  
        KeyPair otherKeyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey otherPrivateKey = otherKeyPair.getPrivate();  
        PublicKey otherPublicKey = otherKeyPair.getPublic();  
  
        // Perform key exchange with the other party  
        KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH");  
        keyAgreement.init(privateKey);  
        keyAgreement.doPhase(otherPublicKey, true);  
  
        // Derive the shared secret  
        byte[] sharedSecret = keyAgreement.generateSecret();  
  
        // Simulate the other party deriving the shared secret using its private key  
        KeyFactory keyFactory = KeyFactory.getInstance("EC");  
        ECParameterSpec ecParameterSpec = ((ECPublicKeySpec) otherPublicKey.getKeySpec(ECPublicKeySpec.class)).getParams();  
        PublicKey simulatedOtherPublicKey = keyFactory.generatePublic(new ECPublicKeySpec(((java.security.spec.ECPoint) otherPublicKey).getW(), ecParameterSpec));  
        KeyAgreement simulatedKeyAgreement = KeyAgreement.getInstance("ECDH");  
        simulatedKeyAgreement.init(otherPrivateKey);  
        simulatedKeyAgreement.doPhase(publicKey, true);  
        byte[] simulatedSharedSecret = simulatedKeyAgreement.generateSecret();  
  
        // Compare the two shared secrets (should be equal)  
        System.out.println("Shared secret: " + bytesToHex(sharedSecret));  
        System.out.println("Simulated shared secret: " + bytesToHex(simulatedSharedSecret));  
        System.out.println("Shared secrets match: " + bytesToHex(sharedSecret).equals(bytesToHex(simulatedSharedSecret)));  
    }  
  
    public static String bytesToHex(byte[] bytes) {  
        StringBuilder sb = new StringBuilder();  
        for (byte b : bytes) {  
            sb.append(String.format("%02X", b));  
        }  
        return sb.toString();  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve bir bayt dizisini onaltılık dizgiye dönüştürmek için bir bytesToHex yöntemi tanımlıyoruz.

Ana yöntemin içinde, önce "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDH anahtar çifti oluşturuyoruz. Daha sonra özel ve genel anahtarları anahtar çiftinden çıkarıyoruz.

Aynı eğri parametrelerini kullanarak kendi ECDH anahtar çiftini oluşturarak karşı tarafı simüle ediyoruz.

### ECDSA Uygulaması

ECDSA (Elliptic Curve Digital Signature Algorithm), eliptik eğri kriptografisine dayalı bir dijital imza algoritmasıdır. Java'da, ECDSA'yı uygulamak için Java Cryptography Architecture'dan (JCA) Signature ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDSA anahtar çiftinin nasıl oluşturulacağına, bir mesajın özel anahtarla nasıl imzalanacağına ve imzanın ortak anahtarla nasıl doğrulanacağına ilişkin bir örneği burada bulabilirsiniz:

```
import java.security.*;  
import java.security.spec.ECGenParameterSpec;  
import java.security.spec.InvalidKeySpecException;  
import java.security.spec.PKCS8EncodedKeySpec;  
import java.security.spec.X509EncodedKeySpec;  
  
public class ECDSAExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Sign a message with the private key  
        byte[] message = "Hello, world!".getBytes();  
        Signature signature = Signature.getInstance("SHA256withECDSA");  
        signature.initSign(privateKey);  
        signature.update(message);  
        byte[] signatureBytes = signature.sign();  
  
        // Verify the signature with the public key  
        Signature verifier = Signature.getInstance("SHA256withECDSA");  
        verifier.initVerify(publicKey);  
        verifier.update(message);  
        boolean signatureValid = verifier.verify(signatureBytes);  
  
        System.out.println("Signature valid: " + signatureValid);  
    }  
}
```

Bu örnekte öncelikle gerekli sınıfları import ediyoruz.

Ana yöntemin içinde, "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDSA anahtar çifti oluşturuyoruz. Anahtar çiftinden özel ve genel anahtarları çıkarıyoruz.

Daha sonra imzalamak için bir mesaj oluştururuz ve mesajı özel anahtarla imzalamak için Signature sınıfını kullanırız. SHA-256'yı hash fonksiyonu olarak kullanmak için "SHA256withECDSA" algoritmasını belirtiyoruz.

Daha sonra, Signature sınıfını kullanarak bir doğrulayıcı nesne yaratırız ve onu ortak anahtarla başlatırız. Doğrulayıcıyı aynı mesajla güncelleriz ve doğrulama yöntemini kullanarak imzayı doğrularız. İmzanın geçerli olup olmadığını belirlemek için sonucu true ile karşılaştırırız.

Gerçek dünya senaryosunda, iletim sırasında imzanın kurcalanmadığından emin olmak için genellikle imzalı mesajı ve ortak anahtarı doğrulayıcıya ayrı ayrı ileteceğinizi unutmayın.

Bu yazımda Java ile kriptoloji uygulamaları yaptım. Yazı serisine profilimden ulaşabilirsiniz. Beğenmeyi ve takip etmeyi unutmayın.

## Part 2




### Kriptoloji Temelleri:#1 Giriş



Merhaba, kriptoloji temelleri serisinin bu ilk yazısında, kriptolojinin ne olduğundan, geleneksel şifreleme tekniklerinden ve güçlü bir şifrenin nasıl oluşturulabileceğinden bahsedeceğim.

### Kriptolojiye Genel Bakış

Şifreleme bilimi olarak adlandırılan bu bilim türünde, gizli tutulmak istenen şeyler bir sistem dahilinde değişik teknik ve yöntemler ile şifrelenir. Aynı zamanda kriptoloji bilimi, şifrelenen iletilerin istenmeyen kişiler tarafından deşifre edilmemesi için de çalışmalar yapmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*hjisKMmnXD1yQQXQ3IOFjA.png)

Kriptoloji şifre bilimidir. Kriptografi bilgi güvenliği ile uğraşır, Kriptoanaliz güvenli bilginin kırılması başka bir deyişle kriptografinin tam karşıtıdır. Kriptoanalistler genelde şifre çözmeye dayalı çalışırlar. Kriptoloji bir [matematik](https://tr.wikipedia.org/wiki/Matematik "Matematik") bilimidir ve genelde sayılar teorisi üstüne kuruludur.

**Kriptografi**, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir.

**Kriptanaliz**, kripto sistemleri kırma, deşifre etme bilimidir.

### Tarihsel Gelişim

İlk kriptolog, 4000 yıl önce yaşamış Mısırlı bir kâtiptir. O, efendisinin hayatını anlatırken hiyeroglifleri şifrelenmiş bir şekilde oluşturmuştu ve bazı hiyeroglifler daha önce hiç kullanılmamıştı.

Kriptografi, bu şekilde başlamasına karşın, hayatının ilk 3000 yılında neredeyse hiç gelişemedi. Dünyanın farklı farklı yerlerinde bağlantısız bir şekilde en temel biçimde kullanılmıştı ancak medeniyetlerin yıkılışıyla sonraki adımlara geçilememişti.

Dönemin en önde uygarlığı olan Çin'de ise yazının şifresiz yazılmasının bile çok zor olması nedeniyle kriptografi hiç gelişemedi.

Daha sonraları (MÖ 5.--6. yüzyıl) askeri istihbaratta gizlilik gerekmesi nedeniyle, kriptografi askeri alana girdi. Askeri alandaki ilk kriptograflar Spartalılardır.

9. yüzyıl'da [Kindî](https://tr.wikipedia.org/wiki/Kind%C3%AE "Kindî"), kriptoloji biliminde uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişi olmuştur. Kindî, kriptoloji biliminde Jul Sezar (MÖ 50) tarafından bulunan ve uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişidir.

### Geleneksel Şifreleme Teknikleri

Tarihsel olarak temel seviyede birçok şifreleme algoritmas geliştirilmiş ve kullanılmıştır. Günümüzde gelişen bilgisayar teknolojisi ile bu şifreleri kırmak oldukçça kolay hale gelmiştir. Şimdi bu şifreleme tekniklerine ve nasıl zayıflıkları olduklarına detaylı değinelim.

#### İkame Şifresi

Bir metni şifrelemek için en basit yöntemlerden biri olan, ikame şifresi(yer değiştirme şifresi) tarihsel süreçte birçok kez kullanılmıştır ve temel kriptografinin iyi bir örneğidir.  
Fikir çok basit, alfabenin her harfini bir başkasıyla değiştiriyoruz. Örneğin;  
A ”†' k  
B ”†' d  
C ”†' w  
Bu örnekte, *ABBA* ifadesi *kddk* olarak şifrelenecektir.

Hangi harfin hangi harfe karşılık geleceğini belirlediğimiz ikame tablosunu tamamen rastgele seçtiğimizi varsayalım. İkame tablosu bu şifreleme sisteminin anahtarı olmuş olur. Her zaman olduğu gibi simetrik kriptografide anahtar gizli tutulmalıdır, yani A ve B arasında güvenli bir şekilde dağıtılmalıdır. Simetrik-Asimetrik kriptografi hakkında detaylı bilgi edinmek için bir önceki [yazımıza](https://pwnlab.me/tr-kriptografiye-giris/) bakabilirsiniz.  
 Tahmin edilebileceği gibi bu şifreyi kırmak oldukça kolaydır. Bu noktada klasik kriptanaliz tekniklerinden yararlanabiliriz.

#### İlk Saldırı: Kaba Kuvvet veya Kapsamlı Anahtar Arama

Kaba kuvvet saldırıları basit bir konsepte dayanır: Saldırgan, şifreli metine ve kısa bir düz metin parçasına (örneğin şifrelenmiş metnin başlığına) sahiptir. Bu durumda, tüm olası anahtarları deneyerek şifreli metni çözer. Ortaya çıkan düz metin, kısa düz metin parçasıyla eşleşirse doğru anahtarı bulmuş olur. Pratikte, kaba kuvvet saldırısı daha karmaşık olabilir çünkü yanlış anahtarlar yanlış, pozitif sonuçlar verebilir.

Prensipte simetrik şifrelere karşı kaba kuvvet saldırısının her zaman mümkün olduğuna dikkat etmek önemlidir. Pratikte uygulanabilir olup olmadığı, belirli bir şifre için var olan olası anahtarların sayısına bağlıdır. Tüm anahtarları test etmek çok fazla zaman alıyorsa, yani birkaç on yıl alıyorsa, şifre bir kaba kuvvet saldırısına karşı güvenlidir.

İkame şifresinin anahtar uzayını belirleyelim: İlk A harfinin yerine geçecek olan harfi seçerken alfabenin 26 harfinden rastgele bir harf seçiyoruz (yukarıdaki örnekte k seçtik). Bir sonraki alfabe harfi B'nin karşılığı, kalan 25 harften rasgele seçilmiştir, vb. Bu nedenle, ikame şifresinin anahtar uzayı = 26 · 25 · ”¦.. · 3 · 2 · 1 = 26! olur.

Yüz binlerce yüksek güçlü bilgisayarla bile böyle bir arama birkaç on yıl alacaktır. Bu nedenle, ikame şifresinin güvenli olduğunu düşünebiliriz. Ancak, bu yanlış çünkü daha güçlü bir saldırı daha var.

#### İkinci Saldırı: Harf Frekans Analizi

Frekasn Analizi 9.yy.'da Al-Kindi tarafından önerilmiştir. Dildeki tekrarlara dayanmaktadır.

Herhangi bir dil için, o dildeki harflerin kullanım sıklıkları hesaplanır. İngilizce dilinde harflerin kullanım sıklığını içeren tablo aşağıda verilmiştir.

![](https://cdn-images-1.medium.com/max/800/0*9LADpthWZ361CIFT.png)

Tablodan da görüleceği gibi, ingilizce dilinde en sık kullanılan harf 'E' harfidir, ikinci en sık kullanılan harf ise 'T' harfidir. Eğer şifreli metin uzunsa en çok gözüken harf büyük olasılıkla düz metindeki E'ye denk gelir ve ikinci en çok gözüken harfte büyük olasılıkla T'ye denk gelir, bu şekilde devam eder.

İkame şifresi, böyle bir analitik saldırı ile kolayca kırılabilir. Şifrenin en büyük zayıflığı, düz metnin her karakterinin her seferinde aynı karakterle değiştirilmesidir.

#### Sezar Şifresi

Sezar şifresi diğer adıyla kaydırma şifresi, aslında ikame şifresinin özel bir halidir. Kaydırma şifresinin kendisi son derece basittir: Düz metnin her harfini alfabede sabit sayıda konumla kaydırırız. Örneğin, 3 konum kaydırırsak, A yerine d, B yerine e vb. gelirdi. Tek sorun alfabenin sonuna doğru ortaya çıkıyor: X, Y, Z ile ne yapmalıyız? Bu durumda başa dönüyoruz. Bu durumda, X->a, Y->b ve Z->c ile yer değiştirilir.  
 Tarihte Julius Sezar bu şifreyi üç konumlu bir kaydırma ile kullanmıştı. Sezar şifresi ismi buradan gelmektedir.  
 Şifrenin matematiksel ifadesi için alfabenin harfleri aşağıdaki tabloda gösterildiği gibi sayısal olarak kodlanmıştır.

![](https://cdn-images-1.medium.com/max/800/0*0ATssVLmJQigP6cg.png)

Anahtar k = 17 olsun ve düz metin:

ATTACK = x1,x2,”¦,x6 = 0,19,19,0,2,10 olsun.s

Şifreli metin şu şekilde hesaplanır:

y1,y2,”¦,y6 = 17,10,10,17,19,1 = rkkrtb

İkame şifresinde olduğu gibi, kaydırma şifresi de hiç güvenli değildir. Aynı şekilde bu şifreyi kırmak için de iki yolumuz var:  
 1. Anahtar uzayı 26 anahtardan oluştuğu için, belirli bir şifreli metnin şifresini tüm olası 26 anahtarla çözmeye çalışarak, kaba kuvvet yöntemiyle, kırabiliriz. Ortaya çıkan düz metin okunabilir ise, anahtarı bulmuş oluruz.  
 2. İkame şifresindeki gibi frekans analizi kullanılabilir.

#### Vigenere Şifresi

Çok alfabeli şifrelemenin basit bir formu olan Vigenere şifreleme, tek alfabeli kaydırma ve yerine koyma şifreleme yöntemlerine dayanan sezar şifreleme algoritmasının geliştirilmiş halidir. Sezar şifrelemede kaydırma ve yerine koyma işemleri için sadece bir alfabe kullanılırken, Vigenere şifrelemede birden fazla alfabe kullanılır. Böylece şifrelenecek mesajdaki aynı harflerin şifrelenmesi sonucunda farklı harfler ortaya çıkar.

![](https://cdn-images-1.medium.com/max/800/0*QLwvLTeM5X8wzRbJ)

Şifreleme yönteminde öncelikle şifreleme işlemi sırasında kullanılacak anahtar seçilir. Şifrelenecek mesajın ilk harfi, anahtar değerinin ilk harfinin alfabedeki sırası oranında kaydırılır ve şifreli harf elde edilir. Anahtar değerindeki her harfin sırasına göre, şifrelenecek mesajdaki her harf farklı bir alfabe ile şifrelenir ve şifreleme işlemi tamamlanır.

#### Playfair Şifresi

Charles Wheatstone tarafından 1854'de önerilmiştir , Lord Playfair kullanımını teşvik etmiştir. Birden fazla harf değişimi kullanılarak daha güçlü bir şifreleme yapılması hedeflenmiştir.

Şifrelemede anahtarın ve alfabenin geri kalanının yer aldığı 5×5'lik bir tablo kullanılır. Anahtarı ve 4 basit kuralı bilmek sistemi kullanmak için yeterlidir.

**Kurallar:**

1- Eğer iki harf de aynıysa ya da en son tek bir harf kaldıysa, ilk harften sonra bir "X" harfi eklenir.

2- Eğer iki harf aynı satırdaysa, her harf sağındaki harfle değiştirilir. (bir harf eğer satır sonundaysa, satır başındakiyle değiştirilir)

3-Eğer iki harf aynı sütundaysa, her harf altındaki harfle değiştirilir(bir harf eğer sütunun sonundaysa, sütun başındakiyle değistirilir)

4-Eğer harfle aynı sütun veya satırda değilse, harfler bir dikdörtgenin iki köşesi olarak düşünülür ve harfler karşılarındaki köşede yer alan harf ile değiştirilir. Bir örnekle açıklayalım.

**mesajımız: kriptoloji**  
**şifremiz: keyword**

Bu durumda tablo şekildeki gibi olacaktır. Önce anahtar yazılır. Aynı harfler bir kez kullanılır. 5×5'lik tablonun geri kalanı, kalan harflerle doldurulur. 25 harfe inmek için I ve J harfi aynı kutuya konur.

![](https://cdn-images-1.medium.com/max/800/0*Vo-d0ErN-moY0kLR.jpg)
> *düz metin: kr ip to lo ji için*

> *şifreli metin: rf hq kz sc jx olur*

Plafair gibi ikili harf değişim sistemleri iki harfli frekans analizine dayanıklı değildirler. Bilgisayarlar ile kısa uzunluktaki harf değişimlerini kırmak mümkündür.

Şifreyi kırmak için dilde ikili harf gruplarının ne sıklıkla görüldüğü hesaplanır ve bunun üzerinden mesajın şifresi çözülmeye çalışılır. Bu işlem başta göz korkutabilir ancak bir bilgisayar için hiç de zor değildir. Güçlü bir bilgisayar sistemi, 8-harf'e kadar frekans analizini yapabilecek yeterliktedir

#### Affine Şifresi

Affine şifreeme mono alfabetik yerine koymalı şifreleme yöntemlerinin bir çeşididir. Yöntemde önce kullanılacak alfabenin her harfine karşılık bir sayı değeri atanır bu değerer bir tabloda tutulur. Bu tablonun karşılıklı iletişim gerçekleştirek isteyen her iki tarafta da bulunması gerekir.

![](https://cdn-images-1.medium.com/max/800/0*Z-cr2RD4JROMRDIQ)

Şifreenmek istenen açık mesajın her karakteri için, karaktere karşılık gellen sayı değeri basit bir matematiksel fonksiyona girdi olarak gönderilir. Fonksiyondan çıkış olarak üretilen bu sayı değeri, tabloda hangi karakteri temsil ediyorsa o karakter, şifreli mesajın yapısını oluşturur.

#### Vernam Şifresi

Adına kırılmaz şifreleme de diyebileceğimiz bu yöntem çok güvenilir olmasına rağmen pratikte uygulanması oldukçca zordur. Bu yöntemde, tek sefer kullanılacak rastgele karakterlerden/bitlerden oluşan uzun bir dizi üretilir. Düz metin, one-time pad'le XOR işlemine sokularak şifreli metin elde edilir. Şifreli metin ile one-time pad'in XOR işlemine sokulması düz metni geri getirir.

![](https://cdn-images-1.medium.com/max/800/0*6s6SoNCSSj-Sqs27.png)

one-time pad olarak da bilinen isminden anlaşılacağı gibi tek kullanımlık ve tamamen rastgele üretilmiş olmalıdır. .Aynı anahtarın tekrar kullanımı şifrelemede zayıflığa yol açar ve kırılabilmesine olanak tanır.

Bu şifreleme tekniği kusursuz gizlilik sağlar çünkü şifreli metin düz metin hakkında hiçbir bilgi içermemektedir. Frekans analizi bu teknikte kullanılamaz. Bitler yerine harfler ya da karakterler üzerinde çalışan halini de kullanmak mümkündür.

Bunun yanında, anahtarın çok uzun(mesaj ile aynı uzunlukta) ve dağıtımının zor olması bu şifreyi pratikte kullanmayı zor bir hale getirmektedir.

### Güçlü Şifre

Güçlü bir şifrenin karakteristik özellikleri, hem uzun hem de çeşitli olmasıdır. "1234" gibi basit bir şifre kombinasyonu kolayca tahmin edilebilir. Tahmin edilemese bile bir programı yardımıyla saldırı yapan internet korsanı, birkaç saatlik tarama sonucunda (bazen daha kısa) şifrenizi kolayca ele geçirebilir. Şifremizin içerisindeki çeşitlilik, şifremizin uzunluğu ve farklı karakterlerin şifremize dahil olması, şifremizi brute force gibi yöntemlerle kırmayı güç hatta bazen imkansız hale getirir.

Güçlü bir şifreyi kendiniz de oluştuabileceğiniz gibi bir araçtan da yardım alabilirsiniz: <https://passwordsgenerator.net/>

#### Güçlü bir şifre için:

1. Maksimum uzunluğu hedefleyin
2. Şifrenizi sadece rakam veya harflerden oluşturmayın
3. Şifrenizde ekstra karakterlere yer verin

#### Güçlü şifre örnekleri

* Tu\9a;gMD
* hb!(Bz8XE
* 5}JBqseLL
* `zhx!8BBF
* u$7sSsX3#

Tabi bu tür şifreleri akılda tutmak zor olabilir. Bunun için parola yöneticisi yazılımlarını kullanabilirsiniz.

Bu yazımda kriptoloji konusunu anlattım. Bir sonraki yazımda kriptografi ve kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 3




### Kriptoloji Temelleri:#3 Kriptanaliz



Merhaba, kriptoloji temelleri serisinin bu yazısında kriptanalizin ne olduğundan, şifre kırma tekniklerinden ve sosyal mühendislik yöntemlerinden bahsedeceğim.

### Kriptanalize Genel Bakış

Kriptanaliz, kripto sistemleri kırma, deşifre etme bilimidir. Şifrelenmiş metinlerin çözümünü araştıran kriptoloji dalıdır. Kriptanaliz, bilinmeyen anahtarları bulmak için kullanılır.

![](https://cdn-images-1.medium.com/max/800/0*WYSM0JXe3tpf70lG.png)

Kriptanalizi; Uygulama Saldırıları, klasik kriptanaliz ve sosyal mühendislik olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

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

#### Şifre Püskürtme Saldırıları (Password Spraying Attacks)

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

### Klasik Kriptanaliz

Klasik kriptanaliz, şifreli metninden düz metini kurtarma veya alternatif olarak şifreli metninden anahtarı bulma bilimidir. Şifreleme yönteminin iç yapısından yararlanan matematiksel analizleri kullanır.

![](https://cdn-images-1.medium.com/max/800/0*ct3PFF4EH3YUqAlK)

Encryption(şifreleme) Decryption(şifre çözme)

Bir şifreleme işlemi 3 unsurdan oluşur. Bunlar: açık metin, şifrelenmiş metin ve anahtardır. Eğer bu unsurlardan her hangi ikisine sahipsek üçüncüsünü rahatlıkla bulabiliriz. Ancak, kriptanalizin asıl işlevi sadece şifreli metin mevcut iken diğerlerini bulabilme becerisidir. Bunun için çeşitli matematiksel yöntemlerden yararlanır.

Bu yöntemler şunlardır:

* **Bilinen Düz Metin Analizi (KPA)**: Bu tür bir saldırıda, bazı düz metin-şifreli metin çiftleri zaten bilinmektedir. Saldırgan, şifreleme anahtarını bulmak için bunları eşler. Halihazırda birçok bilgi mevcut olduğundan bu saldırının kullanımı daha kolaydır.
* **Seçilmiş Düz Metin Analizi (CPA)**: Bu tür saldırıda, saldırgan rasgele düz metinleri seçer ve karşılık gelen şifreli metinleri alır ve şifreleme anahtarını bulmaya çalışır. KPA gibi uygulaması çok basit ama başarı oranı oldukça düşük.
* **Yalnızca Şifreli Metin Analizi (COA)**: Bu tür saldırıda, yalnızca bazı şifreli metinler bilinir ve saldırgan karşılık gelen şifreleme anahtarını ve düz metni bulmaya çalışır. Uygulanması en zor olanıdır, ancak yalnızca şifreli metin gerektiğinden en olası saldırıdır.
* **Uyarlanabilir Seçilmiş Düz Metin Analizi (ACPA)**: Bu saldırı benzer bir EBM'dir. Burada saldırgan, bazı metinler için şifreli metinlere sahip olduktan sonra ek düz metinlerin şifreli metinlerini ister.
* **Doğum günü saldırısı:** Bu saldırı, bir grup insanda aynı doğum gününü paylaşan iki veya daha fazla kişinin olasılığını kullanır. Kriptografide, bu saldırı bir hash fonksiyonundaki çarpışmaları bulmak için kullanılır.
* **Diferansiyel kriptanaliz**: Bu tür saldırı, şifreleme algoritmasındaki kalıpları bulmak için düz metin çiftlerini ve bunlara karşılık gelen şifreli metinleri karşılaştırmayı içerir. Belirli özelliklere sahip blok şifrelere karşı etkili olabilir.
* **Integral kriptanaliz:** Temelinde Değiştirme-Karıştırma işemeri buunan blok şifreleme yöntemleri üzerinde kullanılan bir yöntemdir.

### Sosyal Mühendislik

Kurduğumuz kripto sistem ne kadar güçlü olursa olsun insan faktörü kaynaklı riskler göz ardı edilmemelidir. Bir gizli anahtarı elde etmek için rüşvet, şantaj, kandırma veya klasik casusluk kullanılabilir. Örneğin bir kişinin kafasına silah dayayarak şifreyi söylemeye zorlamak oldukça başarılı olabilir. Daha az şiddet içeren bir başka saldırı da, saldırmak istediğimiz kişileri telefonla arayarak "Şirketinizin IT departmanından arıyoruz. Önemli yazılım güncellemeleri için şifrenize ihtiyacımız var" gibi sosyal mühendislik teknikleridir. Bu gibi durumlarda şifrelerini gerçekten verecek kadar saf olan insanların sayısının hiç de az olmaması şaşırtıcıdır.

![](https://cdn-images-1.medium.com/max/800/0*T75D0kY4zcu3_J5U)

Saldırgan her zaman kripto sisteminizdeki en zayıf halkayı arar. Bunun için, güçlü algoritmalar seçmemiz, sosyal mühendislik ve uygulama saldırılarının pratik olmadığından emin olmamız gerekir. Hem uygulama saldırıları hem de sosyal mühendislik saldırıları pratikte oldukça güçlü olabilir.

#### Kimlik Avı Saldırıları (phishing attacks)

Saldırganın kurbana kötü amaçlı bir bağlantı göndererek güvenilir bir site kılığına girdiği bir sosyal mühendislik tekniğini içerir. Kurban, meşru bir web sunucusunda kimlik doğrulaması yaptıklarını varsaydıktan sonra, bu bağlantıya tıklayarak saldırgana hesap bilgilerini sağlar. Bu yolla saldırgan hedef kullanıcının hesap bilgilerini ele geçirmiş olur, kurban ise oltalanmış demektir.

![](https://cdn-images-1.medium.com/max/800/0*C1Redj9meJnjH1ur)

Kimlik hırsızlığının yanı sıra, oltalama saldırıları, saldırganın bir kullanıcının izinlerini elde etmesini sağlayarak, saldırı tespit edilmeden sistemin daha derin bileşenlerini tehlikeye atmasına olanak tanır. Kimlik avı saldırılarında, saldırganlar, kullanıcıyı kötü amaçlı bağlantıyı tıklaması için kandırmak için genellikle birden çok yöntem kullanır:

1. **DNS önbellek zehirlenmesi:** Saldırganlar, kullanıcı isteklerini benzer görünen bir alan adına sahip kötü amaçlı bir siteye yönlendirmek için uygulamanın DNS sunucusundaki güvenlik açıklarından yararlanır.
2. **URL'yi ele geçirme/yazım hatası:** Saldırgan, kimliğine bürünmek istediği web sitesinden ince farklar içeren gerçek görünümlü bir URL oluşturur. Saldırı, kullanıcıların yazım hataları yapmasına bağlıdır, bu nedenle kötü amaçlı sayfaya gelirler.
3. **Sekmeleme:** Saldırgan, katılımsız tarayıcı sekmelerini yasal web sayfaları gibi görünen kötü amaçlı sitelerle yeniden yazar.
4. **Kullanıcı arabirimi düzeltme/iFrame yerleşimi:** Saydam katmanlar kullanan saldırgan, yasal, tıklanabilir bir düğmenin üzerine kötü amaçlı sayfaya bir bağlantı yerleştirir.
5. **Klon kimlik avı :** Bu saldırıda, saldırgan, orijinal e-postadaki bağlantıların URL'lerle değiştirildiği meşru bir e-postanın bir kopyasını kötü amaçlı sitelere gönderir.

Bu yazımda kriptanaliz konusunu anlattım. Bir sonraki yazımda kriptografi konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 4




Merhaba, kriptoloji temelleri serisinin bu yazısında blokzincirin ne olduğundan nasıl çalıştığından ve nerelerde kullanıldığından bahsedeceğim.

### Blok Zincir Nedir?

**Blok zinciri**(blockchain), [kriptografi](https://tr.wikipedia.org/wiki/Kriptografi "Kriptografi") kullanılarak bağlanan ve güvenli hale getirilen, bloklar ile sürekli büyüyen bir [kayıt](https://en.wikipedia.org/wiki/Record_%28computer_science%29 "en:Record (computer science)") listesidir.

![](https://cdn-images-1.medium.com/max/800/0*_mqEk43FYCnMOB8k)

Blockchain teknolojisi 2008 yılında Satoshi Nakamoto tarafından icat edildi. Son birkaç yıldır büyük önem kazandığı için birçok ülke teknolojiyi geliştirmek ve çeşitli alanlarda kullanmak için çalışmalara başladı. Blockchain, FinTech kuruluşları tarafından büyük beğeni topluyor. Blockchain Teknolojisinin Dijital Kimlikler, Bitcoin ve Ethereum gibi pratik uygulamaları, bu teknolojinin kalıcı olduğunu açıkça ortaya koydu. Dağıtılmış veri depolama, şifreleme algoritmaları ve fikir birliği mekanizması dahil olmak üzere çeşitli teknolojilerin bir kombinasyonudur. Teknoloji, finans, bankacılık ve siber güvenlik departmanları gibi departmanların çalışma modellerinde devrim yaratma yeteneğine sahiptir.

#### **Blockchain teknolojisinin avantajlarından bazıları:**

* Üçüncü taraf müdahalesi yok.
* Veriler değiştirilemez veya silinemez.
* Güvenli veri defteri.
* Blockchain'deki tüm bloklar zaman damgalıdır.
* Şeffaf işlemler.
* Blockchain'deki her bir düğüme dağıtılır.
* Çoğaltma veya dolandırıcılık riski yoktur.

### Blok Zincir Nasıl Çalışır?

Blok zinciri kısaca şöyle işler: Her blok tipik olarak işlem verilerini, önceki bloğun hash değerini ve bir zaman damgasını içerir. Tasarım gereği, bir blok zinciri, kayıtların sonradan değiştirilmesine dirençlidir. Kullanılan kayıt listesi, "iki taraf arasındaki işlemleri verimli, doğrulanabilir ve kalıcı bir şekilde kaydedebilen açık, dağıtılmış bir defterdir". Dağıtılmış bir defter olarak kullanmak için, bir blok zinciri tipik olarak, topluca bir protokole bağlı düğümler arası iletişim ve yeni blokları onaylamak için bir eşler arası (peer-to-peer) ağ tarafından yönetilir. Herhangi bir bloktaki veriler sonradan değiştirilmek istendiğinde, verinin bulunduğu blok ve sonraki tüm blokların değiştirilmesi gerekecektir. Bu da bir sonraki düğüm yazılmadan önce, her blok yazımı için düğüm seçiminde seçilmeyi ve her seferde ağdaki düğümlerin çoğunluğunun onayını gerektirir. Ayrıca her blokta kimin değiştirdiği belli olduğundan, olası bir kötüye kullanımın tespit edilmesi de mümkündür.

![](https://cdn-images-1.medium.com/max/800/0*8FN6t57s1kOFav3O)

Blockchain, önde gelen üç teknoloji üzerinde çalışır:

#### 1- Kriptografi anahtarları

Kriptografi anahtarları iki türdürâŠ–”ŠÖzel anahtar ve Genel anahtar. Bir ağdaki her iki taraf da bu iki anahtara sahiptir ve böylece güvenli bir dijital kimlik oluşturmaya yardımcı olur. Bu anahtarlar, bu iki kişi arasındaki işlemlerin başarılı bir şekilde gerçekleştirilmesine yardımcı olur. Bu güvenli kimlik, kripto para birimi söz konusu olduğunda 'dijital imza' olarak adlandırılan Blockchain teknolojisinin en önemli yönüdür.

#### 2- Paylaşılan bir deftere sahip eşler arası bir ağ

Dijital imza daha sonra eşler arası bir ağ ile birleştirilir; yetkili olarak hareket eden ve dijital imzayı diğer tüm konuların yanı sıra işlemlerde başkalarının fikir birliğine varmak için kullanan çok sayıda kişi.

#### 3- Ağın kayıtlarını ve işlemlerini paylaşmak için bir bilgi işlem aracı

Hepsi bir anlaşmaya izin verdiğinde, bu, paylaşılan bir ağda iki taraf arasında güvenli bir işlemle sonuçlanan matematiksel bir doğrulama ile onaylanır.

Böylece Blockchain teknolojisinde kullanıcılar, eşler arası ağ üzerinden farklı dijital işlemleri gerçekleştirmek için kriptografi anahtarları kullanır.

### Blok Zincir Nerelerde Kullanılır?

Blok zinciri teknolojisi çoklu alanlara entegre edilebilir. Günümüzde blok zincirlerinin birincil kullanımı, en başta bitcoin olmak üzere, kripto para birimleridir.

![](https://cdn-images-1.medium.com/max/800/0*r5VtfCsKzSlSziWt)

Blok zinciri teknolojisi, uzun vadede iş işletme modellerini dönüştürmek için büyük bir potansiyele sahiptir. Blok zinciri dağıtılmış defter teknolojisi, genellikle, küresel ekonomik ve sosyal sistemler için yeni temeller oluşturma potansiyeline dayanan, tipik olarak "düşük maliyetli bir çözümle geleneksel bir iş modeline saldırı yapan ve görevdeki firmaları hızla tüketen yıkıcı bir teknolojiden" daha temel bir teknolojidir. Blok zincirlerin kullanımı, küresel tedarik zincirlerine, finansal işlemlere, varlık defterlerine ve merkezi olmayan sosyal ağlara önemli verimlilik getirme vadediyor.

#### Akıllı sözleşmeler

Blok zinciri tabanlı akıllı sözleşmeler, insan etkileşimi olmadan kısmen veya tamamen yürütülebilen veya uygulanabilen sözleşmelerdir. Akıllı bir sözleşmenin ana amaçlarından biri otomatik emanettir. IMF, blok zincirlerinin manevi zararları azaltabileceğini ve genel olarak sözleşmelerin kullanımını optimize edebileceğine inanıyor. Yaygın kullanım eksikliği nedeniyle yasal statüsü belirsizdir.

#### Merkezi olmayan ağlar

* Backfeed projesi, eşzamanlı olarak ortaya çıkan eşlerin ağlarında işbirlikçi oluşum ve değerin dağıtımını sağlayan blok zincir tabanlı uygulamalar için dağıtılmış bir yönetim sistemi geliştirir.
* İskenderiye projesi blok zincir tabanlı Dağıtılmış Kütüphane'dir.
* Tezos, token sahiplerinin oyu ile kendisini yöneten bir blok zincir projesidir. [Bitcoin](https://tr.wikipedia.org/wiki/Bitcoin "Bitcoin") blok zinciri bir kripto para birimi ve ödeme sistemi olarak gerçekleştirir. Ethereum blok zinciri, bir blok zincirinin üstüne akıllı sözleşme sistemi ekledi. Tezos blok zinciri, hem bitcoin hem de Ethereum blok zincirlerinin üzerinde bir özerklik sistemiâŠ–”Šmerkezi olmayan bir kod Geliştirme fonksiyonu ekleyecektir.

#### Hükümetler ve ulusal para birimleri

ABD Genel Hizmetler İdaresi'nde görevli BT Sözleşme Planlama Operasyon Müdürü Jose Arrieta, Eylül 2017'de ACT-IAC (Amerikan Teknoloji Konseyi ve Endüstri Danışma Konseyi) Forumu'nda organizasyon blok zinciri dağıtılmış defter teknolojisini BT Çizelgesi 70 sözleşmelerini FASt Lane sürecini hızlandırmak için otomasyon yoluyla kullandığını açıkladı.

ABD Gümrük ve Sınır Korumasının bir alt komitesi olan Ticari Gümrük İşlemleri Danışma Komitesi, blok zincirinin görevlerinde uygulanabilecek pratik yollarını bulmak için çalışıyor.

#### Bankalar

Finans sektörünün büyük bölümleri bankacılıkta kullanılmak üzere dağıtılmış defterleri uyguluyor ve Eylül 2016'da yapılan bir IBM araştırmasına göre, bu beklenenden daha hızlı gerçekleşiyor. Bankalar, bu teknolojiye ilgi duyuyor çünkü arka ofis yerleşim sistemlerini hızlandırma potansiyeli var.

#### Diğer finans şirketleri

Kredi ve borç ödeme şirketi MasterCard, programcılar için hem kişiden kişiye (P2P) hem de işletmeler arası (B2B) ödeme sistemlerini geliştirmek için üç blok zincir tabanlı API ekledi.

CLS Group, uzayabileceği döviz ticareti anlaşmalarının sayısını artırmak için blok zinciri teknolojisini kullanıyor.

VISA ödeme sistemleri, Mastercard, Unionpay ve SWIFT, blok zincir teknolojisini kullanma planlarını ve gelişmelerini açıkladı.

### Blok Zincir Türleri

Halihazırda, üç tip **blok zincir** ağı vardır:  
genel blok zincirleri, özel blok zincirleri ve konsorsiyum blok zincirleri.

#### Genel blok zincirleri

Bir genel blok zincirinin kesinlikle erişim kısıtlaması yoktur. İnternet bağlantısına sahip olan herkes, işlem gerçekleştirebilir ve bir geçerlilik kazanabilir (yani, bir konsensüs protokolünün yürütülmesine katılabilir). Genellikle, bu tür ağlar onları güvenceye alan ve bir Proof of Stake veya Proof of Work algoritması kullanan kişiler için ekonomik teşvikler sunar.

En büyük, en bilinen genel blok zincirlerinden bazıları Bitcoin ve Ethereum'dur.

#### Özel blok zincirleri

Bu tip blok zincirler genel olarak blok zinciri teknolojisiyle ilgilenen ancak kamu ağları tarafından sunulan bir kontrol seviyesinde rahat olmayan şirketler için bir orta zemin olarak düşünülebilir. Tipik olarak, blok zincirini kendi özerkliklerinden ödün vermeden muhasebe ve kayıt tutma prosedürlerine dahil etmemeye ve hassas verileri kamuya açık internet riskiyle karşı karşıya bırakmamaya çalışırlar.

#### Konsorsiyum blok zincirleri

Bir konsorsiyum blok zincirinin genellikle yarı-merkezsiz olduğu söylenir. Aynı zamanda izinlidir; ancak bunu kontrol eden tek bir kuruluş yerine, her bir şirket böyle bir ağda bir düğüm işletebilir. Bir konsorsiyum zincirinin yöneticileri, kullanıcıların okuma haklarını uygun gördükleri şekilde kısıtlar ve yalnızca sınırlı sayıda güvenilir düğümlerin bir konsorsiyum protokolü yürütmesine izin verir.

Bu yazımda blokzincir konusunu anlattım. Serinin listesini profilimde bulabilirsiniz.

## Part 5




### Kriptoloji Temelleri:#5 Uygulama



Merhaba, kriptoloji temelleri serisinin bu son yazısında kriptografik protokollerin nasıl uygulandığından bahsedeceğim. Uygulama aşamasında Java programalama dilini kullanacağım.

### MD5 Uygulaması

MD5, herhangi bir giriş verisi için sabit boyutlu bir çıktı (128 bit) üretebilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'nin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın MD5 özet değerini hesaplayabilirsiniz.

Java'da bir sitringin MD5 hashinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class MD5Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String md5Hash = calculateMD5(input);  
        System.out.println("MD5 hash of '" + input + "' is: " + md5Hash);  
    }  
  
    public static String calculateMD5(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("MD5");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("MD5 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve MD5 değerini bir string olarak döndüren bir *calculateMD5* metodu tanımlıyoruz.

calculateMD5 metodunun içinde, önce *getInstance* metodunu kullanarak ve "MD5" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve MD5 özetini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodunu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi MD5 özeti olarak döndürürüz.

### SHA-1 Uygulaması

SHA-1 (Secure HashAlgorithm 1), herhangi bir giriş verisi için sabit boyutlu bir çıktı (160 bit) oluşturabilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'sinin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın SHA-1 özetini hesaplayabilirsiniz.

Java'da bir stringin SHA-1 özetinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class SHA1Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String sha1Hash = calculateSHA1(input);  
        System.out.println("SHA-1 hash of '" + input + "' is: " + sha1Hash);  
    }  
  
    public static String calculateSHA1(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("SHA-1");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("SHA-1 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve SHA-1 özetini bir string olarak döndüren bir *calculateSHA1* metodu tanımlıyoruz.

*calculateSHA1* metodunun içinde, önce *getInstance* metodunu kullanarak ve "SHA-1" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve SHA-1 özet değerini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi SHA-1 özeti olarak döndürürüz.

### DES Uygulaması

DES (Data Encryption Standard), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, DES şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'dan (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da DES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine dair bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class DESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş dizeyi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her yöntemin içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile DES şifreleme algoritmasını belirten "DES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar dizgisini ve "DES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt dizisine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal metodunu çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir stringe dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### AES Uygulaması

AES (Gelişmiş Şifreleme Standardı), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, AES şifreleme ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da AES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class AESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş stringi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her metodun içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile AES şifreleme algoritmasını belirten "AES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar stringini ve "AES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt stringine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal yöntemini çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir dizeye dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### RSA Uygulaması

RSA (Rivest–Shamir–Adleman), verileri güvenli bir şekilde şifrelemek ve şifresini çözmek için kullanılabilen bir açık anahtarlı şifreleme algoritmasıdır. Java'da, RSA şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) KeyPairGenerator ve Cipher sınıflarını kullanabilirsiniz.

Java'da bir RSA anahtar çiftinin nasıl oluşturulacağına, ortak anahtarı kullanarak bir stringin nasıl şifreleneceğine ve şifrelenmiş stringin şifresinin nasıl çözüleceğine ilişkin bir örnek aşağıda verilmiştir:

```
import javax.crypto.Cipher;  
import java.security.KeyPair;  
import java.security.KeyPairGenerator;  
import java.util.Base64;  
  
public class RSAExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
          
        // Generate an RSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");  
        keyPairGenerator.initialize(2048);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
          
        // Get the public and private keys from the key pair  
        byte[] publicKeyBytes = keyPair.getPublic().getEncoded();  
        byte[] privateKeyBytes = keyPair.getPrivate().getEncoded();  
  
        // Encrypt the original string using the public key  
        byte[] encryptedBytes = encrypt(originalString.getBytes(), publicKeyBytes);  
        String encryptedString = Base64.getEncoder().encodeToString(encryptedBytes);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string using the private key  
        byte[] decryptedBytes = decrypt(Base64.getDecoder().decode(encryptedString), privateKeyBytes);  
        String decryptedString = new String(decryptedBytes);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static byte[] encrypt(byte[] plainBytes, byte[] publicKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.ENCRYPT_MODE, KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(publicKeyBytes)));  
        return cipher.doFinal(plainBytes);  
    }  
  
    public static byte[] decrypt(byte[] encryptedBytes, byte[] privateKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.DECRYPT_MODE, KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(privateKeyBytes)));  
        return cipher.doFinal(encryptedBytes);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve giriş olarak düz metin veya şifreli verilerden oluşan bir bayt dizisini ve genel veya özel anahtardan oluşan bir bayt dizisini alan ve karşılık gelen şifreli veya şifresi çözülmüş bayt dizisini döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz. .

Main metot içerisinde öncelikle KeyPairGenerator sınıfını kullanarak "RSA" algoritması ve 2048 bitlik bir anahtar boyutu ile bir RSA anahtar çifti oluşturuyoruz. Daha sonra *getEncoded* metodunu kullanarak genel ve özel anahtarları anahtar çiftinden bayt dizileri olarak çıkarırız.

Şifreleme için, bir bayt dizisine dönüştürülmüş orijinal string ve giriş olarak genel anahtar bayt dizisi ile *encrypt* metodunu çağırıyoruz. Encrypt metodunun içinde "RSA" algoritmasını kullanarak bir Cipher nesnesi oluşturuyoruz ve bunu init metodunu kullanarak uygun modla (Cipher.ENCRYPT\_MODE) kullanarak public key ile başlatıyoruz. Ardından, verileri şifrelemek ve elde edilen bayt dizisini döndürmek için cipher nesnesinde doFinal metodunu çağırırız.

Şifre çözme için, bir bayt dizisine dönüştürülen base64-deşifre edilmiş şifrelenmiş string ve giriş olarak özel anahtar bayt dizisi ile *decrypt* metodunu çağırıyoruz. Decrypt yönteminin içinde "RSA" algoritmasını kullanarak başka bir Cipher nesnesi oluşturuyoruz ve uygun mod ile init metodunu kullanarak özel anahtarla başlatıyoruz.

### ECDH Uygulaması

ECDH (Elliptic Curve Diffie-Hellman), iki tarafın güvenli olmayan bir iletişim kanalı üzerinden paylaşılan bir sır oluşturmasına izin veren bir anahtar anlaşma protokolüdür. Java'da, eliptik eğri şifreleme kullanarak ECDH anahtar değişimini uygulamak için Java Cryptography Architecture'dan (JCA) KeyAgreement ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDH anahtar çifti oluşturmanın, başka bir tarafla anahtar değişimi gerçekleştirmenin ve paylaşılan bir anahtarı türetmenin bir örneğini burada bulabilirsiniz:

```
import javax.crypto.KeyAgreement;  
import javax.crypto.SecretKey;  
import javax.crypto.spec.ECGenParameterSpec;  
import java.security.*;  
import java.security.spec.ECParameterSpec;  
import java.security.spec.ECPublicKeySpec;  
import java.security.spec.InvalidKeySpecException;  
  
public class ECDHExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDH key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Simulate the other party by generating its own ECDH key pair  
        KeyPair otherKeyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey otherPrivateKey = otherKeyPair.getPrivate();  
        PublicKey otherPublicKey = otherKeyPair.getPublic();  
  
        // Perform key exchange with the other party  
        KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH");  
        keyAgreement.init(privateKey);  
        keyAgreement.doPhase(otherPublicKey, true);  
  
        // Derive the shared secret  
        byte[] sharedSecret = keyAgreement.generateSecret();  
  
        // Simulate the other party deriving the shared secret using its private key  
        KeyFactory keyFactory = KeyFactory.getInstance("EC");  
        ECParameterSpec ecParameterSpec = ((ECPublicKeySpec) otherPublicKey.getKeySpec(ECPublicKeySpec.class)).getParams();  
        PublicKey simulatedOtherPublicKey = keyFactory.generatePublic(new ECPublicKeySpec(((java.security.spec.ECPoint) otherPublicKey).getW(), ecParameterSpec));  
        KeyAgreement simulatedKeyAgreement = KeyAgreement.getInstance("ECDH");  
        simulatedKeyAgreement.init(otherPrivateKey);  
        simulatedKeyAgreement.doPhase(publicKey, true);  
        byte[] simulatedSharedSecret = simulatedKeyAgreement.generateSecret();  
  
        // Compare the two shared secrets (should be equal)  
        System.out.println("Shared secret: " + bytesToHex(sharedSecret));  
        System.out.println("Simulated shared secret: " + bytesToHex(simulatedSharedSecret));  
        System.out.println("Shared secrets match: " + bytesToHex(sharedSecret).equals(bytesToHex(simulatedSharedSecret)));  
    }  
  
    public static String bytesToHex(byte[] bytes) {  
        StringBuilder sb = new StringBuilder();  
        for (byte b : bytes) {  
            sb.append(String.format("%02X", b));  
        }  
        return sb.toString();  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve bir bayt dizisini onaltılık dizgiye dönüştürmek için bir bytesToHex yöntemi tanımlıyoruz.

Ana yöntemin içinde, önce "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDH anahtar çifti oluşturuyoruz. Daha sonra özel ve genel anahtarları anahtar çiftinden çıkarıyoruz.

Aynı eğri parametrelerini kullanarak kendi ECDH anahtar çiftini oluşturarak karşı tarafı simüle ediyoruz.

### ECDSA Uygulaması

ECDSA (Elliptic Curve Digital Signature Algorithm), eliptik eğri kriptografisine dayalı bir dijital imza algoritmasıdır. Java'da, ECDSA'yı uygulamak için Java Cryptography Architecture'dan (JCA) Signature ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDSA anahtar çiftinin nasıl oluşturulacağına, bir mesajın özel anahtarla nasıl imzalanacağına ve imzanın ortak anahtarla nasıl doğrulanacağına ilişkin bir örneği burada bulabilirsiniz:

```
import java.security.*;  
import java.security.spec.ECGenParameterSpec;  
import java.security.spec.InvalidKeySpecException;  
import java.security.spec.PKCS8EncodedKeySpec;  
import java.security.spec.X509EncodedKeySpec;  
  
public class ECDSAExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Sign a message with the private key  
        byte[] message = "Hello, world!".getBytes();  
        Signature signature = Signature.getInstance("SHA256withECDSA");  
        signature.initSign(privateKey);  
        signature.update(message);  
        byte[] signatureBytes = signature.sign();  
  
        // Verify the signature with the public key  
        Signature verifier = Signature.getInstance("SHA256withECDSA");  
        verifier.initVerify(publicKey);  
        verifier.update(message);  
        boolean signatureValid = verifier.verify(signatureBytes);  
  
        System.out.println("Signature valid: " + signatureValid);  
    }  
}
```

Bu örnekte öncelikle gerekli sınıfları import ediyoruz.

Ana yöntemin içinde, "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDSA anahtar çifti oluşturuyoruz. Anahtar çiftinden özel ve genel anahtarları çıkarıyoruz.

Daha sonra imzalamak için bir mesaj oluştururuz ve mesajı özel anahtarla imzalamak için Signature sınıfını kullanırız. SHA-256'yı hash fonksiyonu olarak kullanmak için "SHA256withECDSA" algoritmasını belirtiyoruz.

Daha sonra, Signature sınıfını kullanarak bir doğrulayıcı nesne yaratırız ve onu ortak anahtarla başlatırız. Doğrulayıcıyı aynı mesajla güncelleriz ve doğrulama yöntemini kullanarak imzayı doğrularız. İmzanın geçerli olup olmadığını belirlemek için sonucu true ile karşılaştırırız.

Gerçek dünya senaryosunda, iletim sırasında imzanın kurcalanmadığından emin olmak için genellikle imzalı mesajı ve ortak anahtarı doğrulayıcıya ayrı ayrı ileteceğinizi unutmayın.

Bu yazımda Java ile kriptoloji uygulamaları yaptım. Yazı serisine profilimden ulaşabilirsiniz. Beğenmeyi ve takip etmeyi unutmayın.

## Part 2

### Kriptoloji Temelleri:#1 Giriş



Merhaba, kriptoloji temelleri serisinin bu ilk yazısında, kriptolojinin ne olduğundan, geleneksel şifreleme tekniklerinden ve güçlü bir şifrenin nasıl oluşturulabileceğinden bahsedeceğim.

### Kriptolojiye Genel Bakış

Şifreleme bilimi olarak adlandırılan bu bilim türünde, gizli tutulmak istenen şeyler bir sistem dahilinde değişik teknik ve yöntemler ile şifrelenir. Aynı zamanda kriptoloji bilimi, şifrelenen iletilerin istenmeyen kişiler tarafından deşifre edilmemesi için de çalışmalar yapmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*hjisKMmnXD1yQQXQ3IOFjA.png)

Kriptoloji şifre bilimidir. Kriptografi bilgi güvenliği ile uğraşır, Kriptoanaliz güvenli bilginin kırılması başka bir deyişle kriptografinin tam karşıtıdır. Kriptoanalistler genelde şifre çözmeye dayalı çalışırlar. Kriptoloji bir [matematik](https://tr.wikipedia.org/wiki/Matematik "Matematik") bilimidir ve genelde sayılar teorisi üstüne kuruludur.

**Kriptografi**, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir.

**Kriptanaliz**, kripto sistemleri kırma, deşifre etme bilimidir.

### Tarihsel Gelişim

İlk kriptolog, 4000 yıl önce yaşamış Mısırlı bir kâtiptir. O, efendisinin hayatını anlatırken hiyeroglifleri şifrelenmiş bir şekilde oluşturmuştu ve bazı hiyeroglifler daha önce hiç kullanılmamıştı.

Kriptografi, bu şekilde başlamasına karşın, hayatının ilk 3000 yılında neredeyse hiç gelişemedi. Dünyanın farklı farklı yerlerinde bağlantısız bir şekilde en temel biçimde kullanılmıştı ancak medeniyetlerin yıkılışıyla sonraki adımlara geçilememişti.

Dönemin en önde uygarlığı olan Çin'de ise yazının şifresiz yazılmasının bile çok zor olması nedeniyle kriptografi hiç gelişemedi.

Daha sonraları (MÖ 5.--6. yüzyıl) askeri istihbaratta gizlilik gerekmesi nedeniyle, kriptografi askeri alana girdi. Askeri alandaki ilk kriptograflar Spartalılardır.

9. yüzyıl'da [Kindî](https://tr.wikipedia.org/wiki/Kind%C3%AE "Kindî"), kriptoloji biliminde uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişi olmuştur. Kindî, kriptoloji biliminde Jul Sezar (MÖ 50) tarafından bulunan ve uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişidir.

### Geleneksel Şifreleme Teknikleri

Tarihsel olarak temel seviyede birçok şifreleme algoritmas geliştirilmiş ve kullanılmıştır. Günümüzde gelişen bilgisayar teknolojisi ile bu şifreleri kırmak oldukçça kolay hale gelmiştir. Şimdi bu şifreleme tekniklerine ve nasıl zayıflıkları olduklarına detaylı değinelim.

#### İkame Şifresi

Bir metni şifrelemek için en basit yöntemlerden biri olan, ikame şifresi(yer değiştirme şifresi) tarihsel süreçte birçok kez kullanılmıştır ve temel kriptografinin iyi bir örneğidir.  
Fikir çok basit, alfabenin her harfini bir başkasıyla değiştiriyoruz. Örneğin;  
A ”†' k  
B ”†' d  
C ”†' w  
Bu örnekte, *ABBA* ifadesi *kddk* olarak şifrelenecektir.

Hangi harfin hangi harfe karşılık geleceğini belirlediğimiz ikame tablosunu tamamen rastgele seçtiğimizi varsayalım. İkame tablosu bu şifreleme sisteminin anahtarı olmuş olur. Her zaman olduğu gibi simetrik kriptografide anahtar gizli tutulmalıdır, yani A ve B arasında güvenli bir şekilde dağıtılmalıdır. Simetrik-Asimetrik kriptografi hakkında detaylı bilgi edinmek için bir önceki [yazımıza](https://pwnlab.me/tr-kriptografiye-giris/) bakabilirsiniz.  
 Tahmin edilebileceği gibi bu şifreyi kırmak oldukça kolaydır. Bu noktada klasik kriptanaliz tekniklerinden yararlanabiliriz.

#### İlk Saldırı: Kaba Kuvvet veya Kapsamlı Anahtar Arama

Kaba kuvvet saldırıları basit bir konsepte dayanır: Saldırgan, şifreli metine ve kısa bir düz metin parçasına (örneğin şifrelenmiş metnin başlığına) sahiptir. Bu durumda, tüm olası anahtarları deneyerek şifreli metni çözer. Ortaya çıkan düz metin, kısa düz metin parçasıyla eşleşirse doğru anahtarı bulmuş olur. Pratikte, kaba kuvvet saldırısı daha karmaşık olabilir çünkü yanlış anahtarlar yanlış, pozitif sonuçlar verebilir.

Prensipte simetrik şifrelere karşı kaba kuvvet saldırısının her zaman mümkün olduğuna dikkat etmek önemlidir. Pratikte uygulanabilir olup olmadığı, belirli bir şifre için var olan olası anahtarların sayısına bağlıdır. Tüm anahtarları test etmek çok fazla zaman alıyorsa, yani birkaç on yıl alıyorsa, şifre bir kaba kuvvet saldırısına karşı güvenlidir.

İkame şifresinin anahtar uzayını belirleyelim: İlk A harfinin yerine geçecek olan harfi seçerken alfabenin 26 harfinden rastgele bir harf seçiyoruz (yukarıdaki örnekte k seçtik). Bir sonraki alfabe harfi B'nin karşılığı, kalan 25 harften rasgele seçilmiştir, vb. Bu nedenle, ikame şifresinin anahtar uzayı = 26 · 25 · ”¦.. · 3 · 2 · 1 = 26! olur.

Yüz binlerce yüksek güçlü bilgisayarla bile böyle bir arama birkaç on yıl alacaktır. Bu nedenle, ikame şifresinin güvenli olduğunu düşünebiliriz. Ancak, bu yanlış çünkü daha güçlü bir saldırı daha var.

#### İkinci Saldırı: Harf Frekans Analizi

Frekasn Analizi 9.yy.'da Al-Kindi tarafından önerilmiştir. Dildeki tekrarlara dayanmaktadır.

Herhangi bir dil için, o dildeki harflerin kullanım sıklıkları hesaplanır. İngilizce dilinde harflerin kullanım sıklığını içeren tablo aşağıda verilmiştir.

![](https://cdn-images-1.medium.com/max/800/0*9LADpthWZ361CIFT.png)

Tablodan da görüleceği gibi, ingilizce dilinde en sık kullanılan harf 'E' harfidir, ikinci en sık kullanılan harf ise 'T' harfidir. Eğer şifreli metin uzunsa en çok gözüken harf büyük olasılıkla düz metindeki E'ye denk gelir ve ikinci en çok gözüken harfte büyük olasılıkla T'ye denk gelir, bu şekilde devam eder.

İkame şifresi, böyle bir analitik saldırı ile kolayca kırılabilir. Şifrenin en büyük zayıflığı, düz metnin her karakterinin her seferinde aynı karakterle değiştirilmesidir.

#### Sezar Şifresi

Sezar şifresi diğer adıyla kaydırma şifresi, aslında ikame şifresinin özel bir halidir. Kaydırma şifresinin kendisi son derece basittir: Düz metnin her harfini alfabede sabit sayıda konumla kaydırırız. Örneğin, 3 konum kaydırırsak, A yerine d, B yerine e vb. gelirdi. Tek sorun alfabenin sonuna doğru ortaya çıkıyor: X, Y, Z ile ne yapmalıyız? Bu durumda başa dönüyoruz. Bu durumda, X->a, Y->b ve Z->c ile yer değiştirilir.  
 Tarihte Julius Sezar bu şifreyi üç konumlu bir kaydırma ile kullanmıştı. Sezar şifresi ismi buradan gelmektedir.  
 Şifrenin matematiksel ifadesi için alfabenin harfleri aşağıdaki tabloda gösterildiği gibi sayısal olarak kodlanmıştır.

![](https://cdn-images-1.medium.com/max/800/0*0ATssVLmJQigP6cg.png)

Anahtar k = 17 olsun ve düz metin:

ATTACK = x1,x2,”¦,x6 = 0,19,19,0,2,10 olsun.s

Şifreli metin şu şekilde hesaplanır:

y1,y2,”¦,y6 = 17,10,10,17,19,1 = rkkrtb

İkame şifresinde olduğu gibi, kaydırma şifresi de hiç güvenli değildir. Aynı şekilde bu şifreyi kırmak için de iki yolumuz var:  
 1. Anahtar uzayı 26 anahtardan oluştuğu için, belirli bir şifreli metnin şifresini tüm olası 26 anahtarla çözmeye çalışarak, kaba kuvvet yöntemiyle, kırabiliriz. Ortaya çıkan düz metin okunabilir ise, anahtarı bulmuş oluruz.  
 2. İkame şifresindeki gibi frekans analizi kullanılabilir.

#### Vigenere Şifresi

Çok alfabeli şifrelemenin basit bir formu olan Vigenere şifreleme, tek alfabeli kaydırma ve yerine koyma şifreleme yöntemlerine dayanan sezar şifreleme algoritmasının geliştirilmiş halidir. Sezar şifrelemede kaydırma ve yerine koyma işemleri için sadece bir alfabe kullanılırken, Vigenere şifrelemede birden fazla alfabe kullanılır. Böylece şifrelenecek mesajdaki aynı harflerin şifrelenmesi sonucunda farklı harfler ortaya çıkar.

![](https://cdn-images-1.medium.com/max/800/0*QLwvLTeM5X8wzRbJ)

Şifreleme yönteminde öncelikle şifreleme işlemi sırasında kullanılacak anahtar seçilir. Şifrelenecek mesajın ilk harfi, anahtar değerinin ilk harfinin alfabedeki sırası oranında kaydırılır ve şifreli harf elde edilir. Anahtar değerindeki her harfin sırasına göre, şifrelenecek mesajdaki her harf farklı bir alfabe ile şifrelenir ve şifreleme işlemi tamamlanır.

#### Playfair Şifresi

Charles Wheatstone tarafından 1854'de önerilmiştir , Lord Playfair kullanımını teşvik etmiştir. Birden fazla harf değişimi kullanılarak daha güçlü bir şifreleme yapılması hedeflenmiştir.

Şifrelemede anahtarın ve alfabenin geri kalanının yer aldığı 5×5'lik bir tablo kullanılır. Anahtarı ve 4 basit kuralı bilmek sistemi kullanmak için yeterlidir.

**Kurallar:**

1- Eğer iki harf de aynıysa ya da en son tek bir harf kaldıysa, ilk harften sonra bir "X" harfi eklenir.

2- Eğer iki harf aynı satırdaysa, her harf sağındaki harfle değiştirilir. (bir harf eğer satır sonundaysa, satır başındakiyle değiştirilir)

3-Eğer iki harf aynı sütundaysa, her harf altındaki harfle değiştirilir(bir harf eğer sütunun sonundaysa, sütun başındakiyle değistirilir)

4-Eğer harfle aynı sütun veya satırda değilse, harfler bir dikdörtgenin iki köşesi olarak düşünülür ve harfler karşılarındaki köşede yer alan harf ile değiştirilir. Bir örnekle açıklayalım.

**mesajımız: kriptoloji**  
**şifremiz: keyword**

Bu durumda tablo şekildeki gibi olacaktır. Önce anahtar yazılır. Aynı harfler bir kez kullanılır. 5×5'lik tablonun geri kalanı, kalan harflerle doldurulur. 25 harfe inmek için I ve J harfi aynı kutuya konur.

![](https://cdn-images-1.medium.com/max/800/0*Vo-d0ErN-moY0kLR.jpg)
> *düz metin: kr ip to lo ji için*

> *şifreli metin: rf hq kz sc jx olur*

Plafair gibi ikili harf değişim sistemleri iki harfli frekans analizine dayanıklı değildirler. Bilgisayarlar ile kısa uzunluktaki harf değişimlerini kırmak mümkündür.

Şifreyi kırmak için dilde ikili harf gruplarının ne sıklıkla görüldüğü hesaplanır ve bunun üzerinden mesajın şifresi çözülmeye çalışılır. Bu işlem başta göz korkutabilir ancak bir bilgisayar için hiç de zor değildir. Güçlü bir bilgisayar sistemi, 8-harf'e kadar frekans analizini yapabilecek yeterliktedir

#### Affine Şifresi

Affine şifreeme mono alfabetik yerine koymalı şifreleme yöntemlerinin bir çeşididir. Yöntemde önce kullanılacak alfabenin her harfine karşılık bir sayı değeri atanır bu değerer bir tabloda tutulur. Bu tablonun karşılıklı iletişim gerçekleştirek isteyen her iki tarafta da bulunması gerekir.

![](https://cdn-images-1.medium.com/max/800/0*Z-cr2RD4JROMRDIQ)

Şifreenmek istenen açık mesajın her karakteri için, karaktere karşılık gellen sayı değeri basit bir matematiksel fonksiyona girdi olarak gönderilir. Fonksiyondan çıkış olarak üretilen bu sayı değeri, tabloda hangi karakteri temsil ediyorsa o karakter, şifreli mesajın yapısını oluşturur.

#### Vernam Şifresi

Adına kırılmaz şifreleme de diyebileceğimiz bu yöntem çok güvenilir olmasına rağmen pratikte uygulanması oldukçca zordur. Bu yöntemde, tek sefer kullanılacak rastgele karakterlerden/bitlerden oluşan uzun bir dizi üretilir. Düz metin, one-time pad'le XOR işlemine sokularak şifreli metin elde edilir. Şifreli metin ile one-time pad'in XOR işlemine sokulması düz metni geri getirir.

![](https://cdn-images-1.medium.com/max/800/0*6s6SoNCSSj-Sqs27.png)

one-time pad olarak da bilinen isminden anlaşılacağı gibi tek kullanımlık ve tamamen rastgele üretilmiş olmalıdır. .Aynı anahtarın tekrar kullanımı şifrelemede zayıflığa yol açar ve kırılabilmesine olanak tanır.

Bu şifreleme tekniği kusursuz gizlilik sağlar çünkü şifreli metin düz metin hakkında hiçbir bilgi içermemektedir. Frekans analizi bu teknikte kullanılamaz. Bitler yerine harfler ya da karakterler üzerinde çalışan halini de kullanmak mümkündür.

Bunun yanında, anahtarın çok uzun(mesaj ile aynı uzunlukta) ve dağıtımının zor olması bu şifreyi pratikte kullanmayı zor bir hale getirmektedir.

### Güçlü Şifre

Güçlü bir şifrenin karakteristik özellikleri, hem uzun hem de çeşitli olmasıdır. "1234" gibi basit bir şifre kombinasyonu kolayca tahmin edilebilir. Tahmin edilemese bile bir programı yardımıyla saldırı yapan internet korsanı, birkaç saatlik tarama sonucunda (bazen daha kısa) şifrenizi kolayca ele geçirebilir. Şifremizin içerisindeki çeşitlilik, şifremizin uzunluğu ve farklı karakterlerin şifremize dahil olması, şifremizi brute force gibi yöntemlerle kırmayı güç hatta bazen imkansız hale getirir.

Güçlü bir şifreyi kendiniz de oluştuabileceğiniz gibi bir araçtan da yardım alabilirsiniz: <https://passwordsgenerator.net/>

#### Güçlü bir şifre için:

1. Maksimum uzunluğu hedefleyin
2. Şifrenizi sadece rakam veya harflerden oluşturmayın
3. Şifrenizde ekstra karakterlere yer verin

#### Güçlü şifre örnekleri

* Tu\9a;gMD
* hb!(Bz8XE
* 5}JBqseLL
* `zhx!8BBF
* u$7sSsX3#

Tabi bu tür şifreleri akılda tutmak zor olabilir. Bunun için parola yöneticisi yazılımlarını kullanabilirsiniz.

Bu yazımda kriptoloji konusunu anlattım. Bir sonraki yazımda kriptografi ve kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 3

### Kriptoloji Temelleri:#3 Kriptanaliz



Merhaba, kriptoloji temelleri serisinin bu yazısında kriptanalizin ne olduğundan, şifre kırma tekniklerinden ve sosyal mühendislik yöntemlerinden bahsedeceğim.

### Kriptanalize Genel Bakış

Kriptanaliz, kripto sistemleri kırma, deşifre etme bilimidir. Şifrelenmiş metinlerin çözümünü araştıran kriptoloji dalıdır. Kriptanaliz, bilinmeyen anahtarları bulmak için kullanılır.

![](https://cdn-images-1.medium.com/max/800/0*WYSM0JXe3tpf70lG.png)

Kriptanalizi; Uygulama Saldırıları, klasik kriptanaliz ve sosyal mühendislik olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

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

#### Şifre Püskürtme Saldırıları (Password Spraying Attacks)

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

### Klasik Kriptanaliz

Klasik kriptanaliz, şifreli metninden düz metini kurtarma veya alternatif olarak şifreli metninden anahtarı bulma bilimidir. Şifreleme yönteminin iç yapısından yararlanan matematiksel analizleri kullanır.

![](https://cdn-images-1.medium.com/max/800/0*ct3PFF4EH3YUqAlK)

Encryption(şifreleme) Decryption(şifre çözme)

Bir şifreleme işlemi 3 unsurdan oluşur. Bunlar: açık metin, şifrelenmiş metin ve anahtardır. Eğer bu unsurlardan her hangi ikisine sahipsek üçüncüsünü rahatlıkla bulabiliriz. Ancak, kriptanalizin asıl işlevi sadece şifreli metin mevcut iken diğerlerini bulabilme becerisidir. Bunun için çeşitli matematiksel yöntemlerden yararlanır.

Bu yöntemler şunlardır:

* **Bilinen Düz Metin Analizi (KPA)**: Bu tür bir saldırıda, bazı düz metin-şifreli metin çiftleri zaten bilinmektedir. Saldırgan, şifreleme anahtarını bulmak için bunları eşler. Halihazırda birçok bilgi mevcut olduğundan bu saldırının kullanımı daha kolaydır.
* **Seçilmiş Düz Metin Analizi (CPA)**: Bu tür saldırıda, saldırgan rasgele düz metinleri seçer ve karşılık gelen şifreli metinleri alır ve şifreleme anahtarını bulmaya çalışır. KPA gibi uygulaması çok basit ama başarı oranı oldukça düşük.
* **Yalnızca Şifreli Metin Analizi (COA)**: Bu tür saldırıda, yalnızca bazı şifreli metinler bilinir ve saldırgan karşılık gelen şifreleme anahtarını ve düz metni bulmaya çalışır. Uygulanması en zor olanıdır, ancak yalnızca şifreli metin gerektiğinden en olası saldırıdır.
* **Uyarlanabilir Seçilmiş Düz Metin Analizi (ACPA)**: Bu saldırı benzer bir EBM'dir. Burada saldırgan, bazı metinler için şifreli metinlere sahip olduktan sonra ek düz metinlerin şifreli metinlerini ister.
* **Doğum günü saldırısı:** Bu saldırı, bir grup insanda aynı doğum gününü paylaşan iki veya daha fazla kişinin olasılığını kullanır. Kriptografide, bu saldırı bir hash fonksiyonundaki çarpışmaları bulmak için kullanılır.
* **Diferansiyel kriptanaliz**: Bu tür saldırı, şifreleme algoritmasındaki kalıpları bulmak için düz metin çiftlerini ve bunlara karşılık gelen şifreli metinleri karşılaştırmayı içerir. Belirli özelliklere sahip blok şifrelere karşı etkili olabilir.
* **Integral kriptanaliz:** Temelinde Değiştirme-Karıştırma işemeri buunan blok şifreleme yöntemleri üzerinde kullanılan bir yöntemdir.

### Sosyal Mühendislik

Kurduğumuz kripto sistem ne kadar güçlü olursa olsun insan faktörü kaynaklı riskler göz ardı edilmemelidir. Bir gizli anahtarı elde etmek için rüşvet, şantaj, kandırma veya klasik casusluk kullanılabilir. Örneğin bir kişinin kafasına silah dayayarak şifreyi söylemeye zorlamak oldukça başarılı olabilir. Daha az şiddet içeren bir başka saldırı da, saldırmak istediğimiz kişileri telefonla arayarak "Şirketinizin IT departmanından arıyoruz. Önemli yazılım güncellemeleri için şifrenize ihtiyacımız var" gibi sosyal mühendislik teknikleridir. Bu gibi durumlarda şifrelerini gerçekten verecek kadar saf olan insanların sayısının hiç de az olmaması şaşırtıcıdır.

![](https://cdn-images-1.medium.com/max/800/0*T75D0kY4zcu3_J5U)

Saldırgan her zaman kripto sisteminizdeki en zayıf halkayı arar. Bunun için, güçlü algoritmalar seçmemiz, sosyal mühendislik ve uygulama saldırılarının pratik olmadığından emin olmamız gerekir. Hem uygulama saldırıları hem de sosyal mühendislik saldırıları pratikte oldukça güçlü olabilir.

#### Kimlik Avı Saldırıları (phishing attacks)

Saldırganın kurbana kötü amaçlı bir bağlantı göndererek güvenilir bir site kılığına girdiği bir sosyal mühendislik tekniğini içerir. Kurban, meşru bir web sunucusunda kimlik doğrulaması yaptıklarını varsaydıktan sonra, bu bağlantıya tıklayarak saldırgana hesap bilgilerini sağlar. Bu yolla saldırgan hedef kullanıcının hesap bilgilerini ele geçirmiş olur, kurban ise oltalanmış demektir.

![](https://cdn-images-1.medium.com/max/800/0*C1Redj9meJnjH1ur)

Kimlik hırsızlığının yanı sıra, oltalama saldırıları, saldırganın bir kullanıcının izinlerini elde etmesini sağlayarak, saldırı tespit edilmeden sistemin daha derin bileşenlerini tehlikeye atmasına olanak tanır. Kimlik avı saldırılarında, saldırganlar, kullanıcıyı kötü amaçlı bağlantıyı tıklaması için kandırmak için genellikle birden çok yöntem kullanır:

1. **DNS önbellek zehirlenmesi:** Saldırganlar, kullanıcı isteklerini benzer görünen bir alan adına sahip kötü amaçlı bir siteye yönlendirmek için uygulamanın DNS sunucusundaki güvenlik açıklarından yararlanır.
2. **URL'yi ele geçirme/yazım hatası:** Saldırgan, kimliğine bürünmek istediği web sitesinden ince farklar içeren gerçek görünümlü bir URL oluşturur. Saldırı, kullanıcıların yazım hataları yapmasına bağlıdır, bu nedenle kötü amaçlı sayfaya gelirler.
3. **Sekmeleme:** Saldırgan, katılımsız tarayıcı sekmelerini yasal web sayfaları gibi görünen kötü amaçlı sitelerle yeniden yazar.
4. **Kullanıcı arabirimi düzeltme/iFrame yerleşimi:** Saydam katmanlar kullanan saldırgan, yasal, tıklanabilir bir düğmenin üzerine kötü amaçlı sayfaya bir bağlantı yerleştirir.
5. **Klon kimlik avı :** Bu saldırıda, saldırgan, orijinal e-postadaki bağlantıların URL'lerle değiştirildiği meşru bir e-postanın bir kopyasını kötü amaçlı sitelere gönderir.

Bu yazımda kriptanaliz konusunu anlattım. Bir sonraki yazımda kriptografi konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.

## Part 4

Merhaba, kriptoloji temelleri serisinin bu yazısında blokzincirin ne olduğundan nasıl çalıştığından ve nerelerde kullanıldığından bahsedeceğim.

### Blok Zincir Nedir?

**Blok zinciri**(blockchain), [kriptografi](https://tr.wikipedia.org/wiki/Kriptografi "Kriptografi") kullanılarak bağlanan ve güvenli hale getirilen, bloklar ile sürekli büyüyen bir [kayıt](https://en.wikipedia.org/wiki/Record_%28computer_science%29 "en:Record (computer science)") listesidir.

![](https://cdn-images-1.medium.com/max/800/0*_mqEk43FYCnMOB8k)

Blockchain teknolojisi 2008 yılında Satoshi Nakamoto tarafından icat edildi. Son birkaç yıldır büyük önem kazandığı için birçok ülke teknolojiyi geliştirmek ve çeşitli alanlarda kullanmak için çalışmalara başladı. Blockchain, FinTech kuruluşları tarafından büyük beğeni topluyor. Blockchain Teknolojisinin Dijital Kimlikler, Bitcoin ve Ethereum gibi pratik uygulamaları, bu teknolojinin kalıcı olduğunu açıkça ortaya koydu. Dağıtılmış veri depolama, şifreleme algoritmaları ve fikir birliği mekanizması dahil olmak üzere çeşitli teknolojilerin bir kombinasyonudur. Teknoloji, finans, bankacılık ve siber güvenlik departmanları gibi departmanların çalışma modellerinde devrim yaratma yeteneğine sahiptir.

#### **Blockchain teknolojisinin avantajlarından bazıları:**

* Üçüncü taraf müdahalesi yok.
* Veriler değiştirilemez veya silinemez.
* Güvenli veri defteri.
* Blockchain'deki tüm bloklar zaman damgalıdır.
* Şeffaf işlemler.
* Blockchain'deki her bir düğüme dağıtılır.
* Çoğaltma veya dolandırıcılık riski yoktur.

### Blok Zincir Nasıl Çalışır?

Blok zinciri kısaca şöyle işler: Her blok tipik olarak işlem verilerini, önceki bloğun hash değerini ve bir zaman damgasını içerir. Tasarım gereği, bir blok zinciri, kayıtların sonradan değiştirilmesine dirençlidir. Kullanılan kayıt listesi, "iki taraf arasındaki işlemleri verimli, doğrulanabilir ve kalıcı bir şekilde kaydedebilen açık, dağıtılmış bir defterdir". Dağıtılmış bir defter olarak kullanmak için, bir blok zinciri tipik olarak, topluca bir protokole bağlı düğümler arası iletişim ve yeni blokları onaylamak için bir eşler arası (peer-to-peer) ağ tarafından yönetilir. Herhangi bir bloktaki veriler sonradan değiştirilmek istendiğinde, verinin bulunduğu blok ve sonraki tüm blokların değiştirilmesi gerekecektir. Bu da bir sonraki düğüm yazılmadan önce, her blok yazımı için düğüm seçiminde seçilmeyi ve her seferde ağdaki düğümlerin çoğunluğunun onayını gerektirir. Ayrıca her blokta kimin değiştirdiği belli olduğundan, olası bir kötüye kullanımın tespit edilmesi de mümkündür.

![](https://cdn-images-1.medium.com/max/800/0*8FN6t57s1kOFav3O)

Blockchain, önde gelen üç teknoloji üzerinde çalışır:

#### 1- Kriptografi anahtarları

Kriptografi anahtarları iki türdürâŠ–”ŠÖzel anahtar ve Genel anahtar. Bir ağdaki her iki taraf da bu iki anahtara sahiptir ve böylece güvenli bir dijital kimlik oluşturmaya yardımcı olur. Bu anahtarlar, bu iki kişi arasındaki işlemlerin başarılı bir şekilde gerçekleştirilmesine yardımcı olur. Bu güvenli kimlik, kripto para birimi söz konusu olduğunda 'dijital imza' olarak adlandırılan Blockchain teknolojisinin en önemli yönüdür.

#### 2- Paylaşılan bir deftere sahip eşler arası bir ağ

Dijital imza daha sonra eşler arası bir ağ ile birleştirilir; yetkili olarak hareket eden ve dijital imzayı diğer tüm konuların yanı sıra işlemlerde başkalarının fikir birliğine varmak için kullanan çok sayıda kişi.

#### 3- Ağın kayıtlarını ve işlemlerini paylaşmak için bir bilgi işlem aracı

Hepsi bir anlaşmaya izin verdiğinde, bu, paylaşılan bir ağda iki taraf arasında güvenli bir işlemle sonuçlanan matematiksel bir doğrulama ile onaylanır.

Böylece Blockchain teknolojisinde kullanıcılar, eşler arası ağ üzerinden farklı dijital işlemleri gerçekleştirmek için kriptografi anahtarları kullanır.

### Blok Zincir Nerelerde Kullanılır?

Blok zinciri teknolojisi çoklu alanlara entegre edilebilir. Günümüzde blok zincirlerinin birincil kullanımı, en başta bitcoin olmak üzere, kripto para birimleridir.

![](https://cdn-images-1.medium.com/max/800/0*r5VtfCsKzSlSziWt)

Blok zinciri teknolojisi, uzun vadede iş işletme modellerini dönüştürmek için büyük bir potansiyele sahiptir. Blok zinciri dağıtılmış defter teknolojisi, genellikle, küresel ekonomik ve sosyal sistemler için yeni temeller oluşturma potansiyeline dayanan, tipik olarak "düşük maliyetli bir çözümle geleneksel bir iş modeline saldırı yapan ve görevdeki firmaları hızla tüketen yıkıcı bir teknolojiden" daha temel bir teknolojidir. Blok zincirlerin kullanımı, küresel tedarik zincirlerine, finansal işlemlere, varlık defterlerine ve merkezi olmayan sosyal ağlara önemli verimlilik getirme vadediyor.

#### Akıllı sözleşmeler

Blok zinciri tabanlı akıllı sözleşmeler, insan etkileşimi olmadan kısmen veya tamamen yürütülebilen veya uygulanabilen sözleşmelerdir. Akıllı bir sözleşmenin ana amaçlarından biri otomatik emanettir. IMF, blok zincirlerinin manevi zararları azaltabileceğini ve genel olarak sözleşmelerin kullanımını optimize edebileceğine inanıyor. Yaygın kullanım eksikliği nedeniyle yasal statüsü belirsizdir.

#### Merkezi olmayan ağlar

* Backfeed projesi, eşzamanlı olarak ortaya çıkan eşlerin ağlarında işbirlikçi oluşum ve değerin dağıtımını sağlayan blok zincir tabanlı uygulamalar için dağıtılmış bir yönetim sistemi geliştirir.
* İskenderiye projesi blok zincir tabanlı Dağıtılmış Kütüphane'dir.
* Tezos, token sahiplerinin oyu ile kendisini yöneten bir blok zincir projesidir. [Bitcoin](https://tr.wikipedia.org/wiki/Bitcoin "Bitcoin") blok zinciri bir kripto para birimi ve ödeme sistemi olarak gerçekleştirir. Ethereum blok zinciri, bir blok zincirinin üstüne akıllı sözleşme sistemi ekledi. Tezos blok zinciri, hem bitcoin hem de Ethereum blok zincirlerinin üzerinde bir özerklik sistemiâŠ–”Šmerkezi olmayan bir kod Geliştirme fonksiyonu ekleyecektir.

#### Hükümetler ve ulusal para birimleri

ABD Genel Hizmetler İdaresi'nde görevli BT Sözleşme Planlama Operasyon Müdürü Jose Arrieta, Eylül 2017'de ACT-IAC (Amerikan Teknoloji Konseyi ve Endüstri Danışma Konseyi) Forumu'nda organizasyon blok zinciri dağıtılmış defter teknolojisini BT Çizelgesi 70 sözleşmelerini FASt Lane sürecini hızlandırmak için otomasyon yoluyla kullandığını açıkladı.

ABD Gümrük ve Sınır Korumasının bir alt komitesi olan Ticari Gümrük İşlemleri Danışma Komitesi, blok zincirinin görevlerinde uygulanabilecek pratik yollarını bulmak için çalışıyor.

#### Bankalar

Finans sektörünün büyük bölümleri bankacılıkta kullanılmak üzere dağıtılmış defterleri uyguluyor ve Eylül 2016'da yapılan bir IBM araştırmasına göre, bu beklenenden daha hızlı gerçekleşiyor. Bankalar, bu teknolojiye ilgi duyuyor çünkü arka ofis yerleşim sistemlerini hızlandırma potansiyeli var.

#### Diğer finans şirketleri

Kredi ve borç ödeme şirketi MasterCard, programcılar için hem kişiden kişiye (P2P) hem de işletmeler arası (B2B) ödeme sistemlerini geliştirmek için üç blok zincir tabanlı API ekledi.

CLS Group, uzayabileceği döviz ticareti anlaşmalarının sayısını artırmak için blok zinciri teknolojisini kullanıyor.

VISA ödeme sistemleri, Mastercard, Unionpay ve SWIFT, blok zincir teknolojisini kullanma planlarını ve gelişmelerini açıkladı.

### Blok Zincir Türleri

Halihazırda, üç tip **blok zincir** ağı vardır:  
genel blok zincirleri, özel blok zincirleri ve konsorsiyum blok zincirleri.

#### Genel blok zincirleri

Bir genel blok zincirinin kesinlikle erişim kısıtlaması yoktur. İnternet bağlantısına sahip olan herkes, işlem gerçekleştirebilir ve bir geçerlilik kazanabilir (yani, bir konsensüs protokolünün yürütülmesine katılabilir). Genellikle, bu tür ağlar onları güvenceye alan ve bir Proof of Stake veya Proof of Work algoritması kullanan kişiler için ekonomik teşvikler sunar.

En büyük, en bilinen genel blok zincirlerinden bazıları Bitcoin ve Ethereum'dur.

#### Özel blok zincirleri

Bu tip blok zincirler genel olarak blok zinciri teknolojisiyle ilgilenen ancak kamu ağları tarafından sunulan bir kontrol seviyesinde rahat olmayan şirketler için bir orta zemin olarak düşünülebilir. Tipik olarak, blok zincirini kendi özerkliklerinden ödün vermeden muhasebe ve kayıt tutma prosedürlerine dahil etmemeye ve hassas verileri kamuya açık internet riskiyle karşı karşıya bırakmamaya çalışırlar.

#### Konsorsiyum blok zincirleri

Bir konsorsiyum blok zincirinin genellikle yarı-merkezsiz olduğu söylenir. Aynı zamanda izinlidir; ancak bunu kontrol eden tek bir kuruluş yerine, her bir şirket böyle bir ağda bir düğüm işletebilir. Bir konsorsiyum zincirinin yöneticileri, kullanıcıların okuma haklarını uygun gördükleri şekilde kısıtlar ve yalnızca sınırlı sayıda güvenilir düğümlerin bir konsorsiyum protokolü yürütmesine izin verir.

Bu yazımda blokzincir konusunu anlattım. Serinin listesini profilimde bulabilirsiniz.

## Part 5

### Kriptoloji Temelleri:#5 Uygulama



Merhaba, kriptoloji temelleri serisinin bu son yazısında kriptografik protokollerin nasıl uygulandığından bahsedeceğim. Uygulama aşamasında Java programalama dilini kullanacağım.

### MD5 Uygulaması

MD5, herhangi bir giriş verisi için sabit boyutlu bir çıktı (128 bit) üretebilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'nin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın MD5 özet değerini hesaplayabilirsiniz.

Java'da bir sitringin MD5 hashinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class MD5Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String md5Hash = calculateMD5(input);  
        System.out.println("MD5 hash of '" + input + "' is: " + md5Hash);  
    }  
  
    public static String calculateMD5(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("MD5");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("MD5 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve MD5 değerini bir string olarak döndüren bir *calculateMD5* metodu tanımlıyoruz.

calculateMD5 metodunun içinde, önce *getInstance* metodunu kullanarak ve "MD5" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve MD5 özetini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodunu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi MD5 özeti olarak döndürürüz.

### SHA-1 Uygulaması

SHA-1 (Secure HashAlgorithm 1), herhangi bir giriş verisi için sabit boyutlu bir çıktı (160 bit) oluşturabilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java'da, Java Security API'sinin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın SHA-1 özetini hesaplayabilirsiniz.

Java'da bir stringin SHA-1 özetinin nasıl hesaplanacağına dair bir örnek:

```
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
  
public class SHA1Example {  
    public static void main(String[] args) {  
        String input = "Hello, world!";  
        String sha1Hash = calculateSHA1(input);  
        System.out.println("SHA-1 hash of '" + input + "' is: " + sha1Hash);  
    }  
  
    public static String calculateSHA1(String input) {  
        try {  
            MessageDigest md = MessageDigest.getInstance("SHA-1");  
            byte[] hash = md.digest(input.getBytes());  
            StringBuilder sb = new StringBuilder();  
            for (byte b : hash) {  
                sb.append(String.format("%02x", b));  
            }  
            return sb.toString();  
        } catch (NoSuchAlgorithmException e) {  
            throw new RuntimeException("SHA-1 algorithm not available", e);  
        }  
    }  
}
```

Bu örnekte, önce MessageDigest sınıfını içe aktarıyoruz ve bir string girişi alan ve SHA-1 özetini bir string olarak döndüren bir *calculateSHA1* metodu tanımlıyoruz.

*calculateSHA1* metodunun içinde, önce *getInstance* metodunu kullanarak ve "SHA-1" algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve SHA-1 özet değerini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi SHA-1 özeti olarak döndürürüz.

### DES Uygulaması

DES (Data Encryption Standard), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, DES şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'dan (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da DES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine dair bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class DESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "DES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş dizeyi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her yöntemin içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile DES şifreleme algoritmasını belirten "DES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar dizgisini ve "DES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt dizisine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal metodunu çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir stringe dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### AES Uygulaması

AES (Gelişmiş Şifreleme Standardı), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java'da, AES şifreleme ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) Cipher sınıfını kullanabilirsiniz.

Java'da AES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine bir örnek:

```
import javax.crypto.Cipher;  
import javax.crypto.spec.SecretKeySpec;  
import java.nio.charset.StandardCharsets;  
import java.util.Base64;  
  
public class AESExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
        String secretKey = "mysecretkey";  
          
        // Encrypt the original string  
        String encryptedString = encrypt(originalString, secretKey);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string  
        String decryptedString = decrypt(encryptedString, secretKey);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static String encrypt(String plainText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);  
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));  
        return Base64.getEncoder().encodeToString(encryptedBytes);  
    }  
  
    public static String decrypt(String encryptedText, String secretKey) throws Exception {  
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");  
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");  
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);  
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);  
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);  
        return new String(decryptedBytes, StandardCharsets.UTF_8);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içe aktarıyoruz ve giriş olarak bir düz metin stringi ve bir gizli anahtar stringi alan ve karşılık gelen şifrelenmiş veya şifresi çözülmüş stringi döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz.

Her metodun içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile AES şifreleme algoritmasını belirten "AES/ECB/PKCS5Padding" dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar stringini ve "AES" algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt stringine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal yöntemini çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir dizeye dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

### RSA Uygulaması

RSA (Rivest–Shamir–Adleman), verileri güvenli bir şekilde şifrelemek ve şifresini çözmek için kullanılabilen bir açık anahtarlı şifreleme algoritmasıdır. Java'da, RSA şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture'daki (JCA) KeyPairGenerator ve Cipher sınıflarını kullanabilirsiniz.

Java'da bir RSA anahtar çiftinin nasıl oluşturulacağına, ortak anahtarı kullanarak bir stringin nasıl şifreleneceğine ve şifrelenmiş stringin şifresinin nasıl çözüleceğine ilişkin bir örnek aşağıda verilmiştir:

```
import javax.crypto.Cipher;  
import java.security.KeyPair;  
import java.security.KeyPairGenerator;  
import java.util.Base64;  
  
public class RSAExample {  
    public static void main(String[] args) throws Exception {  
        String originalString = "Hello, world!";  
          
        // Generate an RSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");  
        keyPairGenerator.initialize(2048);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
          
        // Get the public and private keys from the key pair  
        byte[] publicKeyBytes = keyPair.getPublic().getEncoded();  
        byte[] privateKeyBytes = keyPair.getPrivate().getEncoded();  
  
        // Encrypt the original string using the public key  
        byte[] encryptedBytes = encrypt(originalString.getBytes(), publicKeyBytes);  
        String encryptedString = Base64.getEncoder().encodeToString(encryptedBytes);  
        System.out.println("Encrypted string: " + encryptedString);  
  
        // Decrypt the encrypted string using the private key  
        byte[] decryptedBytes = decrypt(Base64.getDecoder().decode(encryptedString), privateKeyBytes);  
        String decryptedString = new String(decryptedBytes);  
        System.out.println("Decrypted string: " + decryptedString);  
    }  
  
    public static byte[] encrypt(byte[] plainBytes, byte[] publicKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.ENCRYPT_MODE, KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(publicKeyBytes)));  
        return cipher.doFinal(plainBytes);  
    }  
  
    public static byte[] decrypt(byte[] encryptedBytes, byte[] privateKeyBytes) throws Exception {  
        Cipher cipher = Cipher.getInstance("RSA");  
        cipher.init(Cipher.DECRYPT_MODE, KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(privateKeyBytes)));  
        return cipher.doFinal(encryptedBytes);  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve giriş olarak düz metin veya şifreli verilerden oluşan bir bayt dizisini ve genel veya özel anahtardan oluşan bir bayt dizisini alan ve karşılık gelen şifreli veya şifresi çözülmüş bayt dizisini döndüren *encrypt* ve *decrypt* metodlarını tanımlıyoruz. .

Main metot içerisinde öncelikle KeyPairGenerator sınıfını kullanarak "RSA" algoritması ve 2048 bitlik bir anahtar boyutu ile bir RSA anahtar çifti oluşturuyoruz. Daha sonra *getEncoded* metodunu kullanarak genel ve özel anahtarları anahtar çiftinden bayt dizileri olarak çıkarırız.

Şifreleme için, bir bayt dizisine dönüştürülmüş orijinal string ve giriş olarak genel anahtar bayt dizisi ile *encrypt* metodunu çağırıyoruz. Encrypt metodunun içinde "RSA" algoritmasını kullanarak bir Cipher nesnesi oluşturuyoruz ve bunu init metodunu kullanarak uygun modla (Cipher.ENCRYPT\_MODE) kullanarak public key ile başlatıyoruz. Ardından, verileri şifrelemek ve elde edilen bayt dizisini döndürmek için cipher nesnesinde doFinal metodunu çağırırız.

Şifre çözme için, bir bayt dizisine dönüştürülen base64-deşifre edilmiş şifrelenmiş string ve giriş olarak özel anahtar bayt dizisi ile *decrypt* metodunu çağırıyoruz. Decrypt yönteminin içinde "RSA" algoritmasını kullanarak başka bir Cipher nesnesi oluşturuyoruz ve uygun mod ile init metodunu kullanarak özel anahtarla başlatıyoruz.

### ECDH Uygulaması

ECDH (Elliptic Curve Diffie-Hellman), iki tarafın güvenli olmayan bir iletişim kanalı üzerinden paylaşılan bir sır oluşturmasına izin veren bir anahtar anlaşma protokolüdür. Java'da, eliptik eğri şifreleme kullanarak ECDH anahtar değişimini uygulamak için Java Cryptography Architecture'dan (JCA) KeyAgreement ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDH anahtar çifti oluşturmanın, başka bir tarafla anahtar değişimi gerçekleştirmenin ve paylaşılan bir anahtarı türetmenin bir örneğini burada bulabilirsiniz:

```
import javax.crypto.KeyAgreement;  
import javax.crypto.SecretKey;  
import javax.crypto.spec.ECGenParameterSpec;  
import java.security.*;  
import java.security.spec.ECParameterSpec;  
import java.security.spec.ECPublicKeySpec;  
import java.security.spec.InvalidKeySpecException;  
  
public class ECDHExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDH key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Simulate the other party by generating its own ECDH key pair  
        KeyPair otherKeyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey otherPrivateKey = otherKeyPair.getPrivate();  
        PublicKey otherPublicKey = otherKeyPair.getPublic();  
  
        // Perform key exchange with the other party  
        KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH");  
        keyAgreement.init(privateKey);  
        keyAgreement.doPhase(otherPublicKey, true);  
  
        // Derive the shared secret  
        byte[] sharedSecret = keyAgreement.generateSecret();  
  
        // Simulate the other party deriving the shared secret using its private key  
        KeyFactory keyFactory = KeyFactory.getInstance("EC");  
        ECParameterSpec ecParameterSpec = ((ECPublicKeySpec) otherPublicKey.getKeySpec(ECPublicKeySpec.class)).getParams();  
        PublicKey simulatedOtherPublicKey = keyFactory.generatePublic(new ECPublicKeySpec(((java.security.spec.ECPoint) otherPublicKey).getW(), ecParameterSpec));  
        KeyAgreement simulatedKeyAgreement = KeyAgreement.getInstance("ECDH");  
        simulatedKeyAgreement.init(otherPrivateKey);  
        simulatedKeyAgreement.doPhase(publicKey, true);  
        byte[] simulatedSharedSecret = simulatedKeyAgreement.generateSecret();  
  
        // Compare the two shared secrets (should be equal)  
        System.out.println("Shared secret: " + bytesToHex(sharedSecret));  
        System.out.println("Simulated shared secret: " + bytesToHex(simulatedSharedSecret));  
        System.out.println("Shared secrets match: " + bytesToHex(sharedSecret).equals(bytesToHex(simulatedSharedSecret)));  
    }  
  
    public static String bytesToHex(byte[] bytes) {  
        StringBuilder sb = new StringBuilder();  
        for (byte b : bytes) {  
            sb.append(String.format("%02X", b));  
        }  
        return sb.toString();  
    }  
}
```

Bu örnekte, önce gerekli sınıfları içeri aktarıyoruz ve bir bayt dizisini onaltılık dizgiye dönüştürmek için bir bytesToHex yöntemi tanımlıyoruz.

Ana yöntemin içinde, önce "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDH anahtar çifti oluşturuyoruz. Daha sonra özel ve genel anahtarları anahtar çiftinden çıkarıyoruz.

Aynı eğri parametrelerini kullanarak kendi ECDH anahtar çiftini oluşturarak karşı tarafı simüle ediyoruz.

### ECDSA Uygulaması

ECDSA (Elliptic Curve Digital Signature Algorithm), eliptik eğri kriptografisine dayalı bir dijital imza algoritmasıdır. Java'da, ECDSA'yı uygulamak için Java Cryptography Architecture'dan (JCA) Signature ve KeyPairGenerator sınıflarını kullanabilirsiniz.

Java kullanarak bir ECDSA anahtar çiftinin nasıl oluşturulacağına, bir mesajın özel anahtarla nasıl imzalanacağına ve imzanın ortak anahtarla nasıl doğrulanacağına ilişkin bir örneği burada bulabilirsiniz:

```
import java.security.*;  
import java.security.spec.ECGenParameterSpec;  
import java.security.spec.InvalidKeySpecException;  
import java.security.spec.PKCS8EncodedKeySpec;  
import java.security.spec.X509EncodedKeySpec;  
  
public class ECDSAExample {  
    public static void main(String[] args) throws Exception {  
        // Generate an ECDSA key pair  
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");  
        ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256r1");  
        keyPairGenerator.initialize(ecGenParameterSpec);  
        KeyPair keyPair = keyPairGenerator.generateKeyPair();  
        PrivateKey privateKey = keyPair.getPrivate();  
        PublicKey publicKey = keyPair.getPublic();  
  
        // Sign a message with the private key  
        byte[] message = "Hello, world!".getBytes();  
        Signature signature = Signature.getInstance("SHA256withECDSA");  
        signature.initSign(privateKey);  
        signature.update(message);  
        byte[] signatureBytes = signature.sign();  
  
        // Verify the signature with the public key  
        Signature verifier = Signature.getInstance("SHA256withECDSA");  
        verifier.initVerify(publicKey);  
        verifier.update(message);  
        boolean signatureValid = verifier.verify(signatureBytes);  
  
        System.out.println("Signature valid: " + signatureValid);  
    }  
}
```

Bu örnekte öncelikle gerekli sınıfları import ediyoruz.

Ana yöntemin içinde, "EC" algoritması ve "secp256r1" eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDSA anahtar çifti oluşturuyoruz. Anahtar çiftinden özel ve genel anahtarları çıkarıyoruz.

Daha sonra imzalamak için bir mesaj oluştururuz ve mesajı özel anahtarla imzalamak için Signature sınıfını kullanırız. SHA-256'yı hash fonksiyonu olarak kullanmak için "SHA256withECDSA" algoritmasını belirtiyoruz.

Daha sonra, Signature sınıfını kullanarak bir doğrulayıcı nesne yaratırız ve onu ortak anahtarla başlatırız. Doğrulayıcıyı aynı mesajla güncelleriz ve doğrulama yöntemini kullanarak imzayı doğrularız. İmzanın geçerli olup olmadığını belirlemek için sonucu true ile karşılaştırırız.

Gerçek dünya senaryosunda, iletim sırasında imzanın kurcalanmadığından emin olmak için genellikle imzalı mesajı ve ortak anahtarı doğrulayıcıya ayrı ayrı ileteceğinizi unutmayın.

Bu yazımda Java ile kriptoloji uygulamaları yaptım. Yazı serisine profilimden ulaşabilirsiniz. Beğenmeyi ve takip etmeyi unutmayın.
