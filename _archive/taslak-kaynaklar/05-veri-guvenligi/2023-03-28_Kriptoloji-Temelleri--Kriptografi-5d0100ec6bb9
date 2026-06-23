# Kriptoloji Temelleri: Kriptografi

---

### Kriptoloji Temelleri:#2 Kriptografi

![](https://cdn-images-1.medium.com/max/800/1*MPqOVwPSnGY3CguO7sg8Jw.png)

Merhaba, kriptoloji temelleri seririsinin bu yazısında kiptografinin ne olduğundan, şifreleme tekniklerinden ve kriptografik protokollerden bahsedeceğim.

---

### Kriptografiye Genel Bakış

Kriptografi, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir. Kriptografi bir matematiksel yöntemler bütünüdür ve önemli bilgilerin güvenliği için gerekli gizlilik, aslıyla aynılık, kimlik denetimi, ve asılsız reddi önleme gibi şartları sağlamak amaçlıdır. Bu yöntemler, bir bilginin iletimi esnasında ve saklanma süresinde karşılaşılabilecek aktif saldırı ya da pasif algılamalardan bilgiyi — dolayısıyla bilginin göndericisi, alıcısı, taşıyıcısı, konu edindiği kişiler ve başka her türlü taraf olabilecek kişilerin çıkarlarını da — koruma amacı güder.

![](https://cdn-images-1.medium.com/max/800/0*2Vwirutk3ytVmQK7.png)

Kriptografiyi; simetrik şifreleme, asimetrik şifreleme ve kriptografik protokoller olarak 3 alana ayırabiliriz. Şimdi bu alanlara ve kullanılan yöntemlere bakalım.

![](https://cdn-images-1.medium.com/max/800/1*-xJo79RzeZLimVgF7AMPJw.png)

Kriptografik Algoritmalar için Temel Sınıflandırma Diyagramı

---

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

ChaCha20 algoritması, bir akış şifreleme algoritmasıdır. 128 ve 256 biti destekler. Selefi [Salsa20](https://en.wikipedia.org/wiki/Salsa20) ile benzer özelliklere sahiptir. 12 veya 20 farklı turdan oluşan ilkel bir işlevi vardır. RFC 7539'da IETF tarafından standartlaştırıldı ve yazılım uygulamalarında AES’den çok daha verimli ve hızlı olduğu için günümüzde en çok kullanılan algoritmalar arasında yer edinmiştir.

ChaCha20'nın bu kadar popüler olmasında Google’ın payı büyüktür. Google, birkaç yıl öncesine kadar, chrome ve android için simetrik şifreleme algoritması olarak AES-GCM’i kullanmaktaydı. Ancak, mobil cihazlarda arm tabanlı işlemcilerin kullanılması ve bu işlemcilerde intel tabanlı işlemcilerde olduğu gibi AES yapılandırmalarının olmaması nedeniyle nispeten yavaş bir şifreleme yapılmaktaydı. Bu sebeple, Google daha güncel, güvenli ve hızlı bir şifreleme algoritması üzerinde çalışıyordu.

![](https://cdn-images-1.medium.com/max/800/0*p11w2EzrPzNTF_DK.jpg)

ChaCha20-Poly1305

ChaCha20'nin sıçrama noktası, Chrome’un android sürümünde şifreleme için **ChaCha20** ve kimlik doğrulama için **Poly1305** kullanmaya başlamasıydı. Bunun en önemli nedeni, ChaCha20'nin AES gibi biraz daha eski protokollerden üç kat daha yüksek bir performans elde etmesiydi.

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

Gelişmiş Şifreleme Standardı (AES) günümüzde en yaygın olarak kullanılan simetrik şifredir. AES’i içeren yazılımlar arasında, İnternet güvenlik standardı IPsec, TLS, Wi-Fi şifreleme standardı IEEE 802.11i, güvenli kabuk ağ protokolü SSH (Güvenli Kabuk), İnternet telefonu Skype ve dünya çapında çok sayıda güvenlik ürünü bulunmaktadır.

DES’in aksine AES algoritması Feistel yapısına sahip değildir. Feistel ağları yineleme başına bir bloğun tamamını şifrelemez, örneğin DES’de 64/2 = 32 bit bir turda şifrelenir. AES ise 128 bitin tamamını bir turda şifreler. Bu nedenle, AES algoritması nispeten az sayıda tura sahiptir.

![](https://cdn-images-1.medium.com/max/800/0*QSpz_OkltFg8Ljh_.png)

AES algoritması

Üstteki görselde düz metin x olarak, şifreli metin y olarak ve tur sayısı nr olarak gösterilir.

AES, katmanlardan oluşur. Her katman, bloğun tüm 128 bitini işler. üç farklı katman türü vardır. Bunlar;

**Anahtar Ekleme(*AddRoundKey*) katmanı:** Anahtar üretecinde ana anahtardan türetilen 128 bitlik alt anahtar, durum(x) ile XOR’lanır.

**Bayt Değiştirme*(SubBytes*) katmanı:** Durum matrisindeki her bayt bir tabloya göre ve doğrusal olmayan bir dönüşümle güncellenir.

**Difüzyon katmanı:** Metin bitleri üzerinde yayılımı sağlar. Her ikisi de doğrusal işlemler gerçekleştiren iki alt katmandan oluşur:

1. **Satır Kaydırma *(*ShiftRows) katmanı**, her satır belirli bir sayıda çembersel olarak kaydırılır.
2. **Sütun Karıştırma (MixColumn) katmanı**, her bir süundaki dört baytlık blokları karıştırır. Son tur, MixColumn dönüşümü kullanılmaz.

AES şifreleme algoritmasında şifre çözmek için de bu işlemlerin tersi yapılır.

---

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

**Tamsayı-Faktörleştirme Şemaları:** Birçok açık-anahtar şeması, büyük tamsayıları çarpanlarına ayırmanın zor olduğu gerçeğine dayanmaktadır. Bu algoritma ailesinin en bilinen temsilcisi RSA’dır.

**Ayrık Logaritma Şemaları:** Sonlu alanlarda ayrık logaritma problemi olarak bilinen matematiğe dayalıdır. Buna örnek olarak, Diffie-Hellman anahtar değişimi, Elgamal şifreleme veya Dijital İmza Algoritması (DSA) yı verebiliriz.

**Eliptik Eğri (EC) Şemaları:** Ayrık logaritmanın bir genellemesi, eliptik eğri açık anahtar şemalarıdır. En popüler örnekler arasında Eliptik Eğri Diffie-Hellman anahtar değişimi (ECDH) ve Eliptik Eğri Dijital İmza Algoritması (ECDSA) vardır.

İlk iki aile 1970'lerin ortalarında ortaya çıktı. eliptik eğriler is 1980'lerin ortalarında tanıtıldı. Parametreler ve anahtar uzunlukları dikkatli bir şekilde seçilirse, hiçbir şemaya karşı bilinen bir saldırı yoktur.

#### RSA

RSA, çok büyük tam sayıları çarpanlara ayırmanın algoritmik zorluğu göz önüne alınarak geliştirilen bir şifreleme tekniğidir. RSA ‘in kullanıldığı birçok uygulama vardır, ancak pratikte en çok dijital imzalar, dijital sertifikalar ve küçük veri parçalarının şifrelenmesi için kullanılır. Ayrıca, RSA günümüzde en yaygın kullanılan asimetrik şifreleme şemasıdır.

RSA şifrelemesinin, AES gibi simetrik şifrelerden birkaç kat daha yavaş olduğu için simetrik şifrelerin yerini alması amaçlanmadığına dikkat edilmelidir. Bunun nedeni, RSA’nın (veya herhangi bir diğer açık anahtar algoritmasının) gerçekleştirilmesine dahil olan birçok hesaplamadır. Bu nedenle, şifreleme özelliğinin ana kullanımı, bir anahtarı simetrik bir şifreyle (anahtar aktarımı) güvenli bir şekilde değiştirmektir. Uygulamada, RSA genellikle simetrik şifrenin gerçek toplu veri şifrelemesini yaptığı AES gibi simetrik bir şifre ile birlikte kullanılır.

RSA’nın temeldeki tek yönlü işlevi tamsayı çarpanlara ayırma problemidir:  
 İki büyük asal sayıyı çarpmak hesaplama açısından kolaydır (aslında bunu kağıt ve kalemle yapabilirsiniz), ancak elde edilen ürünü çarpanlara ayırmak çok zordur. Euler teoremi ve Euler phi işlevi RSA’da önemli roller oynar. Şimdi, RSA ile şifreleme, şifre çözme ve anahtar oluşturmanın nasıl çalıştığına bakalım.

![](https://cdn-images-1.medium.com/max/800/0*pVs1sy3vN5kCBdeb.png)

RSA şifreleme algoritması

e: şifreleme üssü, d: şifre çözme üssü, n: uzunluk

RSA şifreleme ve şifre çözme işlemlerinde modüler hesaplamalar önemli bir rol oynar. Pratikte x, y, n ve d çok uzun sayılardır (genellikle 1024 bit).

Tüm asimetrik şemaların ayırt edici bir özelliği, genel ve özel anahtarın hesaplandığı bir kurulum aşamasının olmasıdır. Açık anahtar şemasına bağlı olarak, anahtar oluşturma oldukça karmaşık olabilir. Bir RSA şifreleme sistemi için genel ve özel anahtarın hesaplanmasıyla ilgili adımları sıra sıra ele alarak görelim:

1. N = p.q  
    N ile ifade edeceğimiz çok büyük tamsayıyı oluşturacak olan iki faklı ve büyük asal sayı belirlenir. Bu sayılar p ve q olarak isimlendirilir.
2. φ(N) = (p-1)(q-1)  
    N sayısının totient değeri hesaplanır. Totient, sayılar teorisinde bir tam sayının o sayıdan daha küçük ve o sayı ile aralarında asal olan sayı adedini belirten fonksiyondur.
3. 1 < e < φ(N) ve EBOB(e, φ(N)) = 1  
    Yukarıdaki matematiksel ifadeden de anlaşıldığı üzere 1 ile Totient değeri arasında olan ve Totient değeri ile aralarında asal olan bir tam sayı seçilir ve e olarak isimlendirilir. Burada seçilecek olan e sayısının küçük seçilmesi mod ve üs alma gibi işlemleri yaparken performanstan kazandırıyor olsa da bazı durumlarda güvenliği azaltmaktadır.
4. d.e ≡ 1 (mod φ(N)  
    Denkliğini sağlayan ve gizli anahtarı oluşturmada kullanılacak olan d sayısı bulunur. Burada yapılacak olan işlem e sayısının mod φ(N)’de tersinin bulunmasıdır.

Açık ve gizli anahtar oluşturmak için gerekli olan tüm değerleri elde ettik. Gizli anahtarı oluşturan d sayısının hesaplanmasında kullanılan (p,q, φ(N)) sayılarının gizli kalması şartı ile (N,e) çifti açık anahtarı; (N,d) çifti ise gizli anahtarı oluşturmaktadır.

Görüldüğü gibi bu işlemleri yapmak çok uzun ve yorucu olabilir. Bunun için gelişmiş sistemlerde bazı pratik metotlar kullanılmaktadır. RSA şemasını tasarlarken, e ve d değerlerinin çok büyük olması, yavaş şifreleme yapmamıza sebep olabilir. Buna karşılık bu değerlerin çok küçük değerler olması ise güvenlik sorunlarını beraberinde getirir.

---

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

#### Message Digest (MD)

MD ailesi, MD2, MD4, MD5 ve MD6 karma işlevlerinden oluşur. İnternet Standardı RFC 1321 olarak kabul edilmiştir. 128 bitlik bir hash fonksiyonudur. Ailenin en popüler üyesi MD5'tir.

MD5, uzun yıllar boyunca en popüler ve yaygın olarak kullanılan hash fonksiyonuydu. MD5 özetleri, aktarılan dosyanın bütünlüğü hakkında güvence sağlamak için yazılım dünyasında yaygın olarak kullanılmaktadır. Örneğin, dosya sunucuları genellikle dosyalar için önceden hesaplanmış bir MD5 hash değeri verir, böylece bir kullanıcı indirilen dosyanın hash değerini verilen değer ile karşılaştırabilir. 2004 yılında, MD5'te çakışmalar bulundu. Bilgisayar kümesi kullanılarak bir analitik saldırının yalnızca bir saat içinde başarılı olduğu bildirildi. Bu çakışma saldırısı, MD5'in güvenilir olmayan bir algoritma olmasıyla sonuçlandı ve bu nedenle artık kullanılması önerilmiyor.

#### Secure Hash Function (SHA)

SHA ailesi dört SHA algoritmasından oluşur; SHA-0, SHA-1, SHA-2 ve SHA-3. Aynı aileden olmalarına rağmen, yapısal olarak farklı algoritmalar bulumaktadır.

Orijinal sürüm, 160 bitlik bir karma işlevi olan SHA-0'dır ve 1993 yılında Ulusal Standartlar ve Teknoloji Enstitüsü (NIST) tarafından yayınlandı. Birkaç zayıf yönü vardı ve çok popüler olmadı. Daha sonra 1995'te SHA-1, SHA-0'ın iddia edilen zayıflıklarını düzeltmek için tasarlandı.

SHA-1, mevcut SHA karma işlevlerinin en yaygın kullanılanıdır. Güvenli Yuva Katmanı (SSL) güvenliği dahil olmak üzere yaygın olarak kullanılan birçok uygulama ve protokolde kullanılır. 2005 yılında, SHA-1'in uzun vadeli kullanılabilirliğini şüpheli hale getiren pratik zaman çerçevesi içinde SHA-1 için çakışmalarını ortaya çıkarmak için bir yöntem bulundu.

SHA-2 ailesi, hash değerlerindeki bit sayısına bağlı olarak SHA-224, SHA-256, SHA-384 ve SHA-512 olmak üzere dört SHA varyantına sahiptir. SHA-2 hash fonksiyonuna henüz başarılı bir saldırı bildirilmemiştir. SHA-2 güçlü bir hash fonksiyonu olmasına ve önemli ölçüde farklı olmasına rağmen, temel tasarımı hala SHA-1'in tasarımına benzemektedir. Bu nedenle, NIST yeni hash fonksiyon tasarımları için çağrıda bulundu.

Ekim 2012'de NIST, yeni SHA-3 standardı olarak Keccak algoritmasını seçti. Keccak kullanıcılarına, verimli performans ve saldırılara karşı güçlü direnç gibi pek çok avantaj sunar.

#### RIPEMD

RIPEMD, RACE Integrity Primitives Assessment Message Digest’in kısaltmasıdır. Bu hash fonksiyonları seti, açık araştırma topluluğu tarafından tasarlanmıştır ve genellikle bir Avrupa hash fonksiyonaları ailesi olarak bilinir. Ailenin 3 üyesi vardır. Bunlar; RIPEMD, RIPEMD-128 ve RIPEMD-160'dır. Bu algoritmanın 256 ve 320 bit sürümleri de mevcuttur.

Orijinal RIPEMD (128 bit), MD4'te kullanılan tasarım ilkelerine dayanmaktadır ve güvenlik sorunları bulunmuştur. RIPEMD 128 bit sürümü, orijinal RIPEMD’deki güvenlik açıklarının üstesinden gelmek için hızlı bir düzeltme olarak geldi.

RIPEMD-160 geliştirilmiş bir versiyondur ve ailede en çok kullanılan versiyondur. 256 ve 320 bit sürümleri, çakışma olasılığını azaltır, ancak sırasıyla RIPEMD-128 ve RIPEMD-160 ile karşılaştırıldığında daha yüksek güvenlik seviyelerine sahip değildir.

#### Whirlpool

Whirlpool, 512 bitlik bir hash fonksiyonudur. Gelişmiş Şifreleme Standardının (AES) değiştirilmiş versiyonundan türetilmiştir. Tasarımcılardan biri, AES’in ortak yaratıcılarından Vincent Rijmen’di. Whirlpool’un üç versiyonu yayınlandı. Bunlar; WHIRLPOOL-0, WHIRLPOOL-T ve WHIRLPOOL’dır.

### Anahtar Dağıtım Protokolü

Anahtar da protokolü, bir grubun birkaç üyesi arasında bazı gizli değerlerin paylaşıldığı bir şifreleme protokolüdür. Gizli değer ayrıca örneğin grubun üyeleri arasındaki güvenli iletişim kanalı için bir gizli oturum anahtarı olarak kullanılabilir. Kabaca söylemek gerekirse, anahtar dağıtım protokolü, iki veya daha fazla taraf arasında paylaşılan bir anahtar oluşturmakla ilgilenir. Bunun için, anahtar taşıma veya anahtar anlaşma yöntemleri kullanılabilir. Anahtar taşıma protokolü, bir tarafın gizli bir değeri diğerlerine güvenli bir şekilde aktardığı bir tekniktir. Bir anahtar anlaşma protokolünde, iki (veya daha fazla) taraf, tüm tarafların anahtara katkıda bulunduğu ortak anahtarı türetir. İdeal olarak, tarafların hiçbiri nihai ortak anahtarın ne olacağını kontrol edemez.

![](https://cdn-images-1.medium.com/max/800/0*TG166uwZDCXkgCtb.png)

#### Anahtar Anlaşma

Kriptografide, bir anahtar anlaşması protokolü, iki veya daha fazla tarafın bir anahtar üzerinde her ikisinin de sonucu etkileyecek şekilde anlaşabildiği bir protokoldür. Bu, uygun şekilde yapılırsa, istenmeyen üçüncü şahısların, anlaşmalı taraflara bir seçim dayatmasını engeller. Pratikte, gelişmiş protokoller, herhangi bir gizli dinleme yapan tarafa hangi anahtarın üzerinde anlaşmaya varıldığını açıklamaz.

#### Anahtar Taşıma

Birçok anahtar taşıma protokolünde, bir tarafın anahtarı oluşturması ve bu anahtarı diğer tarafa göndermesi yeterlidir; diğer tarafın anahtar üzerinde hiçbir etkisi yoktur.

Bir anahtar anlaşma protokolü kullanmak, bu tür sistemlerle ilişkili bazı anahtar dağıtım sorunlarından kaçınır. Her iki tarafın da nihai türetilmiş anahtarı etkilediği protokoller, kusursuz iletme gizliliğini uygulamanın tek yoludur.

---

![](https://cdn-images-1.medium.com/max/800/1*ILSONeBau6S2Vidq8GyOtA.png)

Bu yazımda kriptografi konusunu anlattım. Bir sonraki yazımda kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.