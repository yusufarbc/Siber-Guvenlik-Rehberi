# Kriptoloji Temelleri: Uygulama

---

### Kriptoloji Temelleri:#5 Uygulama

![](https://cdn-images-1.medium.com/max/800/1*Sk1u0b-kaNN7j57oE13CBA.png)

Merhaba, kriptoloji temelleri serisinin bu son yazısında kriptografik protokollerin nasıl uygulandığından bahsedeceğim. Uygulama aşamasında Java programalama dilini kullanacağım.

---

### MD5 Uygulaması

MD5, herhangi bir giriş verisi için sabit boyutlu bir çıktı (128 bit) üretebilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java’da, Java Security API’nin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın MD5 özet değerini hesaplayabilirsiniz.

Java’da bir sitringin MD5 hashinin nasıl hesaplanacağına dair bir örnek:

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

calculateMD5 metodunun içinde, önce *getInstance* metodunu kullanarak ve “MD5” algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve MD5 özetini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodunu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi MD5 özeti olarak döndürürüz.

---

### SHA-1 Uygulaması

SHA-1 (Secure HashAlgorithm 1), herhangi bir giriş verisi için sabit boyutlu bir çıktı (160 bit) oluşturabilen, yaygın olarak kullanılan bir özet fonksiyonudur. Java’da, Java Security API’sinin bir parçası olan MessageDigest sınıfını kullanarak bir stringin veya dosyanın SHA-1 özetini hesaplayabilirsiniz.

Java’da bir stringin SHA-1 özetinin nasıl hesaplanacağına dair bir örnek:

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

*calculateSHA1* metodunun içinde, önce *getInstance* metodunu kullanarak ve “SHA-1” algoritmasını parametre olarak vererek MessageDigest sınıfının yeni bir örneğini oluşturuyoruz. Daha sonra, MessageDigest nesnesinde hash metodunu çağırırız ve SHA-1 özet değerini hesaplamak için giriş stringini bir bayt dizisi olarak iletiriz.

Son olarak, her baytı iki basamaklı onaltılık bir sayı olarak biçimlendirmek için bir StringBuilder nesnesi ve String.format metodu kullanarak bayt dizisini bir stringe dönüştürürüz. Daha sonra ortaya çıkan diziyi SHA-1 özeti olarak döndürürüz.

---

### DES Uygulaması

DES (Data Encryption Standard), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java’da, DES şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture’dan (JCA) Cipher sınıfını kullanabilirsiniz.

Java’da DES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine dair bir örnek:

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

Her yöntemin içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile DES şifreleme algoritmasını belirten “DES/ECB/PKCS5Padding” dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar dizgisini ve “DES” algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt dizisine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal metodunu çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir stringe dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

---

### AES Uygulaması

AES (Gelişmiş Şifreleme Standardı), verileri şifrelemek ve şifresini çözmek için kullanılabilen simetrik anahtarlı bir şifreleme algoritmasıdır. Java’da, AES şifreleme ve şifre çözmeyi uygulamak için Java Cryptography Architecture’daki (JCA) Cipher sınıfını kullanabilirsiniz.

Java’da AES kullanarak bir dizenin nasıl şifreleneceğine ve şifresinin çözüleceğine bir örnek:

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

Her metodun içinde, önce Elektronik Kod Kitabı (ECB) modu ve PKCS5 dolgusu ile AES şifreleme algoritmasını belirten “AES/ECB/PKCS5Padding” dönüştürme stringini kullanarak bir Cipher nesnesi oluşturuyoruz.

Daha sonra gizli anahtar stringini ve “AES” algoritmasını kullanarak bir SecretKeySpec nesnesi oluşturuyoruz ve uygun kiple (Cipher.ENCRYPT\_MODE veya Cipher.DECRYPT\_MODE) init yöntemini kullanarak gizli anahtarla cipher nesnesini başlatıyoruz.

Şifreleme için, düz metin stringini bir bayt stringine dönüştürüyoruz ve verileri şifrelemek için cipher nesnesinde doFinal metodunu çağırıyoruz. Ardından, ortaya çıkan bayt dizisini Base64 sınıfını kullanarak base64 ile kodlanmış bir stringe dönüştürür ve şifreli diziyi döndürürüz.

Şifre çözme için, Base64 sınıfını kullanarak base64 ile kodlanmış stringin kodunu bir bayt dizisine geri döndürürüz, verilerin şifresini çözmek için cipher nesnesinde doFinal yöntemini çağırırız ve elde edilen bayt dizisini uygun karakter kümesini kullanarak bir dizeye dönüştürürüz (bunda durum, StandardCharsets.UTF\_8). Daha sonra şifresi çözülmüş diziyi döndürürüz.

---

### RSA Uygulaması

RSA (Rivest–Shamir–Adleman), verileri güvenli bir şekilde şifrelemek ve şifresini çözmek için kullanılabilen bir açık anahtarlı şifreleme algoritmasıdır. Java’da, RSA şifrelemesini ve şifre çözmeyi uygulamak için Java Cryptography Architecture’daki (JCA) KeyPairGenerator ve Cipher sınıflarını kullanabilirsiniz.

Java’da bir RSA anahtar çiftinin nasıl oluşturulacağına, ortak anahtarı kullanarak bir stringin nasıl şifreleneceğine ve şifrelenmiş stringin şifresinin nasıl çözüleceğine ilişkin bir örnek aşağıda verilmiştir:

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

Main metot içerisinde öncelikle KeyPairGenerator sınıfını kullanarak “RSA” algoritması ve 2048 bitlik bir anahtar boyutu ile bir RSA anahtar çifti oluşturuyoruz. Daha sonra *getEncoded* metodunu kullanarak genel ve özel anahtarları anahtar çiftinden bayt dizileri olarak çıkarırız.

Şifreleme için, bir bayt dizisine dönüştürülmüş orijinal string ve giriş olarak genel anahtar bayt dizisi ile *encrypt* metodunu çağırıyoruz. Encrypt metodunun içinde “RSA” algoritmasını kullanarak bir Cipher nesnesi oluşturuyoruz ve bunu init metodunu kullanarak uygun modla (Cipher.ENCRYPT\_MODE) kullanarak public key ile başlatıyoruz. Ardından, verileri şifrelemek ve elde edilen bayt dizisini döndürmek için cipher nesnesinde doFinal metodunu çağırırız.

Şifre çözme için, bir bayt dizisine dönüştürülen base64-deşifre edilmiş şifrelenmiş string ve giriş olarak özel anahtar bayt dizisi ile *decrypt* metodunu çağırıyoruz. Decrypt yönteminin içinde “RSA” algoritmasını kullanarak başka bir Cipher nesnesi oluşturuyoruz ve uygun mod ile init metodunu kullanarak özel anahtarla başlatıyoruz.

---

### ECDH Uygulaması

ECDH (Elliptic Curve Diffie-Hellman), iki tarafın güvenli olmayan bir iletişim kanalı üzerinden paylaşılan bir sır oluşturmasına izin veren bir anahtar anlaşma protokolüdür. Java’da, eliptik eğri şifreleme kullanarak ECDH anahtar değişimini uygulamak için Java Cryptography Architecture’dan (JCA) KeyAgreement ve KeyPairGenerator sınıflarını kullanabilirsiniz.

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

Ana yöntemin içinde, önce “EC” algoritması ve “secp256r1” eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDH anahtar çifti oluşturuyoruz. Daha sonra özel ve genel anahtarları anahtar çiftinden çıkarıyoruz.

Aynı eğri parametrelerini kullanarak kendi ECDH anahtar çiftini oluşturarak karşı tarafı simüle ediyoruz.

---

### ECDSA Uygulaması

ECDSA (Elliptic Curve Digital Signature Algorithm), eliptik eğri kriptografisine dayalı bir dijital imza algoritmasıdır. Java’da, ECDSA’yı uygulamak için Java Cryptography Architecture’dan (JCA) Signature ve KeyPairGenerator sınıflarını kullanabilirsiniz.

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

Ana yöntemin içinde, “EC” algoritması ve “secp256r1” eliptik eğri parametre özelliği ile KeyPairGenerator sınıfını kullanarak bir ECDSA anahtar çifti oluşturuyoruz. Anahtar çiftinden özel ve genel anahtarları çıkarıyoruz.

Daha sonra imzalamak için bir mesaj oluştururuz ve mesajı özel anahtarla imzalamak için Signature sınıfını kullanırız. SHA-256'yı hash fonksiyonu olarak kullanmak için “SHA256withECDSA” algoritmasını belirtiyoruz.

Daha sonra, Signature sınıfını kullanarak bir doğrulayıcı nesne yaratırız ve onu ortak anahtarla başlatırız. Doğrulayıcıyı aynı mesajla güncelleriz ve doğrulama yöntemini kullanarak imzayı doğrularız. İmzanın geçerli olup olmadığını belirlemek için sonucu true ile karşılaştırırız.

Gerçek dünya senaryosunda, iletim sırasında imzanın kurcalanmadığından emin olmak için genellikle imzalı mesajı ve ortak anahtarı doğrulayıcıya ayrı ayrı ileteceğinizi unutmayın.

---

Bu yazımda Java ile kriptoloji uygulamaları yaptım. Yazı serisine profilimden ulaşabilirsiniz. Beğenmeyi ve takip etmeyi unutmayın.