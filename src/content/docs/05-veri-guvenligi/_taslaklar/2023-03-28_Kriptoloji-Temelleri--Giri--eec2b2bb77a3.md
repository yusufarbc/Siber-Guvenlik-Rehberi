# Kriptoloji Temelleri: Giriş

---

### Kriptoloji Temelleri:#1 Giriş

![](https://cdn-images-1.medium.com/max/800/1*uorh6uYHB7AdEDpEbCO_Tw.png)

Merhaba, kriptoloji temelleri serisinin bu ilk yazısında, kriptolojinin ne olduğundan, geleneksel şifreleme tekniklerinden ve güçlü bir şifrenin nasıl oluşturulabileceğinden bahsedeceğim.

---

### Kriptolojiye Genel Bakış

Şifreleme bilimi olarak adlandırılan bu bilim türünde, gizli tutulmak istenen şeyler bir sistem dahilinde değişik teknik ve yöntemler ile şifrelenir. Aynı zamanda kriptoloji bilimi, şifrelenen iletilerin istenmeyen kişiler tarafından deşifre edilmemesi için de çalışmalar yapmaktadır.

![](https://cdn-images-1.medium.com/max/800/1*hjisKMmnXD1yQQXQ3IOFjA.png)

Kriptoloji şifre bilimidir. Kriptografi bilgi güvenliği ile uğraşır, Kriptoanaliz güvenli bilginin kırılması başka bir deyişle kriptografinin tam karşıtıdır. Kriptoanalistler genelde şifre çözmeye dayalı çalışırlar. Kriptoloji bir [matematik](https://tr.wikipedia.org/wiki/Matematik "Matematik") bilimidir ve genelde sayılar teorisi üstüne kuruludur.

**Kriptografi**, bir mesajın anlamını gizlemek amacıyla gizli yazma bilimidir.

**Kriptanaliz**, kripto sistemleri kırma, deşifre etme bilimidir.

---

### Tarihsel Gelişim

İlk kriptolog, 4000 yıl önce yaşamış Mısırlı bir kâtiptir. O, efendisinin hayatını anlatırken hiyeroglifleri şifrelenmiş bir şekilde oluşturmuştu ve bazı hiyeroglifler daha önce hiç kullanılmamıştı.

Kriptografi, bu şekilde başlamasına karşın, hayatının ilk 3000 yılında neredeyse hiç gelişemedi. Dünyanın farklı farklı yerlerinde bağlantısız bir şekilde en temel biçimde kullanılmıştı ancak medeniyetlerin yıkılışıyla sonraki adımlara geçilememişti.

Dönemin en önde uygarlığı olan Çin’de ise yazının şifresiz yazılmasının bile çok zor olması nedeniyle kriptografi hiç gelişemedi.

Daha sonraları (MÖ 5. — 6. yüzyıl) askeri istihbaratta gizlilik gerekmesi nedeniyle, kriptografi askeri alana girdi. Askeri alandaki ilk kriptograflar Spartalılardır.

9. yüzyıl’da [Kindî](https://tr.wikipedia.org/wiki/Kind%C3%AE "Kindî"), kriptoloji biliminde uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişi olmuştur. Kindî, kriptoloji biliminde Jul Sezar (MÖ 50) tarafından bulunan ve uygulanan tek alfabeli yerine koyma şifreleme yöntemini geliştirerek frekans analizini bulan ilk kişidir.

---

### Geleneksel Şifreleme Teknikleri

Tarihsel olarak temel seviyede birçok şifreleme algoritmas geliştirilmiş ve kullanılmıştır. Günümüzde gelişen bilgisayar teknolojisi ile bu şifreleri kırmak oldukçça kolay hale gelmiştir. Şimdi bu şifreleme tekniklerine ve nasıl zayıflıkları olduklarına detaylı değinelim.

#### İkame Şifresi

Bir metni şifrelemek için en basit yöntemlerden biri olan, ikame şifresi(yer değiştirme şifresi) tarihsel süreçte birçok kez kullanılmıştır ve temel kriptografinin iyi bir örneğidir.  
Fikir çok basit, alfabenin her harfini bir başkasıyla değiştiriyoruz. Örneğin;  
A → k  
B → d  
C → w  
Bu örnekte, *ABBA* ifadesi *kddk* olarak şifrelenecektir.

Hangi harfin hangi harfe karşılık geleceğini belirlediğimiz ikame tablosunu tamamen rastgele seçtiğimizi varsayalım. İkame tablosu bu şifreleme sisteminin anahtarı olmuş olur. Her zaman olduğu gibi simetrik kriptografide anahtar gizli tutulmalıdır, yani A ve B arasında güvenli bir şekilde dağıtılmalıdır. Simetrik-Asimetrik kriptografi hakkında detaylı bilgi edinmek için bir önceki [yazımıza](https://pwnlab.me/tr-kriptografiye-giris/) bakabilirsiniz.  
 Tahmin edilebileceği gibi bu şifreyi kırmak oldukça kolaydır. Bu noktada klasik kriptanaliz tekniklerinden yararlanabiliriz.

#### İlk Saldırı: Kaba Kuvvet veya Kapsamlı Anahtar Arama

Kaba kuvvet saldırıları basit bir konsepte dayanır: Saldırgan, şifreli metine ve kısa bir düz metin parçasına (örneğin şifrelenmiş metnin başlığına) sahiptir. Bu durumda, tüm olası anahtarları deneyerek şifreli metni çözer. Ortaya çıkan düz metin, kısa düz metin parçasıyla eşleşirse doğru anahtarı bulmuş olur. Pratikte, kaba kuvvet saldırısı daha karmaşık olabilir çünkü yanlış anahtarlar yanlış, pozitif sonuçlar verebilir.

Prensipte simetrik şifrelere karşı kaba kuvvet saldırısının her zaman mümkün olduğuna dikkat etmek önemlidir. Pratikte uygulanabilir olup olmadığı, belirli bir şifre için var olan olası anahtarların sayısına bağlıdır. Tüm anahtarları test etmek çok fazla zaman alıyorsa, yani birkaç on yıl alıyorsa, şifre bir kaba kuvvet saldırısına karşı güvenlidir.

İkame şifresinin anahtar uzayını belirleyelim: İlk A harfinin yerine geçecek olan harfi seçerken alfabenin 26 harfinden rastgele bir harf seçiyoruz (yukarıdaki örnekte k seçtik). Bir sonraki alfabe harfi B’nin karşılığı, kalan 25 harften rasgele seçilmiştir, vb. Bu nedenle, ikame şifresinin anahtar uzayı = 26 · 25 · ….. · 3 · 2 · 1 = 26! olur.

Yüz binlerce yüksek güçlü bilgisayarla bile böyle bir arama birkaç on yıl alacaktır. Bu nedenle, ikame şifresinin güvenli olduğunu düşünebiliriz. Ancak, bu yanlış çünkü daha güçlü bir saldırı daha var.

#### İkinci Saldırı: Harf Frekans Analizi

Frekasn Analizi 9.yy.’da Al-Kindi tarafından önerilmiştir. Dildeki tekrarlara dayanmaktadır.

Herhangi bir dil için, o dildeki harflerin kullanım sıklıkları hesaplanır. İngilizce dilinde harflerin kullanım sıklığını içeren tablo aşağıda verilmiştir.

![](https://cdn-images-1.medium.com/max/800/0*9LADpthWZ361CIFT.png)

Tablodan da görüleceği gibi, ingilizce dilinde en sık kullanılan harf ‘E’ harfidir, ikinci en sık kullanılan harf ise ‘T’ harfidir. Eğer şifreli metin uzunsa en çok gözüken harf büyük olasılıkla düz metindeki E’ye denk gelir ve ikinci en çok gözüken harfte büyük olasılıkla T’ye denk gelir, bu şekilde devam eder.

İkame şifresi, böyle bir analitik saldırı ile kolayca kırılabilir. Şifrenin en büyük zayıflığı, düz metnin her karakterinin her seferinde aynı karakterle değiştirilmesidir.

#### Sezar Şifresi

Sezar şifresi diğer adıyla kaydırma şifresi, aslında ikame şifresinin özel bir halidir. Kaydırma şifresinin kendisi son derece basittir: Düz metnin her harfini alfabede sabit sayıda konumla kaydırırız. Örneğin, 3 konum kaydırırsak, A yerine d, B yerine e vb. gelirdi. Tek sorun alfabenin sonuna doğru ortaya çıkıyor: X, Y, Z ile ne yapmalıyız? Bu durumda başa dönüyoruz. Bu durumda, X->a, Y->b ve Z->c ile yer değiştirilir.  
 Tarihte Julius Sezar bu şifreyi üç konumlu bir kaydırma ile kullanmıştı. Sezar şifresi ismi buradan gelmektedir.  
 Şifrenin matematiksel ifadesi için alfabenin harfleri aşağıdaki tabloda gösterildiği gibi sayısal olarak kodlanmıştır.

![](https://cdn-images-1.medium.com/max/800/0*0ATssVLmJQigP6cg.png)

Anahtar k = 17 olsun ve düz metin:

ATTACK = x1,x2,…,x6 = 0,19,19,0,2,10 olsun.s

Şifreli metin şu şekilde hesaplanır:

y1,y2,…,y6 = 17,10,10,17,19,1 = rkkrtb

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

1- Eğer iki harf de aynıysa ya da en son tek bir harf kaldıysa, ilk harften sonra bir “X” harfi eklenir.

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

Şifreyi kırmak için dilde ikili harf gruplarının ne sıklıkla görüldüğü hesaplanır ve bunun üzerinden mesajın şifresi çözülmeye çalışılır. Bu işlem başta göz korkutabilir ancak bir bilgisayar için hiç de zor değildir. Güçlü bir bilgisayar sistemi, 8-harf’e kadar frekans analizini yapabilecek yeterliktedir

#### Affine Şifresi

Affine şifreeme mono alfabetik yerine koymalı şifreleme yöntemlerinin bir çeşididir. Yöntemde önce kullanılacak alfabenin her harfine karşılık bir sayı değeri atanır bu değerer bir tabloda tutulur. Bu tablonun karşılıklı iletişim gerçekleştirek isteyen her iki tarafta da bulunması gerekir.

![](https://cdn-images-1.medium.com/max/800/0*Z-cr2RD4JROMRDIQ)

Şifreenmek istenen açık mesajın her karakteri için, karaktere karşılık gellen sayı değeri basit bir matematiksel fonksiyona girdi olarak gönderilir. Fonksiyondan çıkış olarak üretilen bu sayı değeri, tabloda hangi karakteri temsil ediyorsa o karakter, şifreli mesajın yapısını oluşturur.

#### Vernam Şifresi

Adına kırılmaz şifreleme de diyebileceğimiz bu yöntem çok güvenilir olmasına rağmen pratikte uygulanması oldukçca zordur. Bu yöntemde, tek sefer kullanılacak rastgele karakterlerden/bitlerden oluşan uzun bir dizi üretilir. Düz metin, one-time pad’le XOR işlemine sokularak şifreli metin elde edilir. Şifreli metin ile one-time pad’in XOR işlemine sokulması düz metni geri getirir.

![](https://cdn-images-1.medium.com/max/800/0*6s6SoNCSSj-Sqs27.png)

one-time pad olarak da bilinen isminden anlaşılacağı gibi tek kullanımlık ve tamamen rastgele üretilmiş olmalıdır. .Aynı anahtarın tekrar kullanımı şifrelemede zayıflığa yol açar ve kırılabilmesine olanak tanır.

Bu şifreleme tekniği kusursuz gizlilik sağlar çünkü şifreli metin düz metin hakkında hiçbir bilgi içermemektedir. Frekans analizi bu teknikte kullanılamaz. Bitler yerine harfler ya da karakterler üzerinde çalışan halini de kullanmak mümkündür.

Bunun yanında, anahtarın çok uzun(mesaj ile aynı uzunlukta) ve dağıtımının zor olması bu şifreyi pratikte kullanmayı zor bir hale getirmektedir.

---

### Güçlü Şifre

Güçlü bir şifrenin karakteristik özellikleri, hem uzun hem de çeşitli olmasıdır. “1234” gibi basit bir şifre kombinasyonu kolayca tahmin edilebilir. Tahmin edilemese bile bir programı yardımıyla saldırı yapan internet korsanı, birkaç saatlik tarama sonucunda (bazen daha kısa) şifrenizi kolayca ele geçirebilir. Şifremizin içerisindeki çeşitlilik, şifremizin uzunluğu ve farklı karakterlerin şifremize dahil olması, şifremizi brute force gibi yöntemlerle kırmayı güç hatta bazen imkansız hale getirir.

Güçlü bir şifreyi kendiniz de oluştuabileceğiniz gibi bir araçtan da yardım alabilirsiniz: <https://passwordsgenerator.net/>

#### Güçlü bir şifre için:

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

---

Bu yazımda kriptoloji konusunu anlattım. Bir sonraki yazımda kriptografi ve kriptanaliz konusundan bahsedeceğim. Serinin listesini profilimde bulabilirsiniz.