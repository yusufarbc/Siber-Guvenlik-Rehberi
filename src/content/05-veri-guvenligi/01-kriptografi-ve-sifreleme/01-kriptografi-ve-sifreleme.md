---
title: "Kriptografi, Şifreleme Algoritmaları ve Kriptografik Özetleme (Hash)"
sidebar:
  order: 1
---

# Kriptografi ve Şifreleme Algoritmaları

Kriptografi, bilginin yetkisiz kişilerce okunmasını engellemek, bütünlüğünü korumak ve kaynağını doğrulamak için kullanılan matematiksel teknikler bütünüdür. 

## §5.1.1. Şifreleme Algoritmaları: Simetrik ve Asimetrik

Şifreleme işlemleri, anahtarların kullanım şekline göre iki ana kategoriye ayrılır:

### Simetrik Şifreleme
Aynı anahtarın hem veriyi şifrelemek hem de çözmek için kullanıldığı yöntemdir. Çok hızlıdır, büyük verileri şifrelemek için idealdir. Ancak anahtarın karşı tarafa güvenli şekilde iletilmesi zordur (Anahtar Dağıtımı Problemi).
*   **AES (Advanced Encryption Standard):** Günümüzde altın standart kabul edilen, kırılması (şu anki teknolojiyle) imkansıza yakın olan blok şifreleme algoritmasıdır (AES-128, AES-256).
*   **3DES (Triple DES):** Eski DES algoritmasının güvenlik açıklarını kapatmak için veriyi üç kez şifreleyen, yavaş ve günümüzde yerini AES'e bırakmış bir standarttır.

### Asimetrik (Açık Anahtarlı) Şifreleme
İki farklı anahtardan oluşan matematiksel bir çift kullanır: Genel Anahtar (Public Key) ile şifrelenen veri, sadece Özel Anahtar (Private Key) ile çözülebilir. Yavaştır, genellikle simetrik anahtarların güvenli iletimi veya dijital imzalar için kullanılır.
*   **RSA:** Asal sayıların çarpanlarına ayrılması zorluğuna dayanan en popüler algoritma.
*   **ECC (Elliptic Curve Cryptography):** Eliptik eğri matematiği kullanarak, çok daha kısa anahtarlarla RSA ile aynı güvenliği sağlayan (özellikle mobil cihazlar için) modern algoritma.
*   **Diffie-Hellman:** İki tarafın güvensiz bir hat üzerinden ortak bir gizli anahtar üzerinde uzlaşmasını sağlayan anahtar değişim protokolü.

---

## §5.1.2. Blok (Block) ve Akış (Stream) Şifreleme Mantığı

Simetrik şifrelemede veri işleme yöntemleri ikiye ayrılır:
*   **Blok Şifreleme (Block Cipher):** Veriyi belirli boyutlardaki (örn: 128 bit) bloklara böler ve her bloğu ayrı ayrı şifreler (Örn: AES, 3DES). Dosya ve disk şifrelemede tercih edilir.
*   **Akış Şifreleme (Stream Cipher):** Veriyi bit bit (veya byte byte) sürekli akan bir şifre akışıyla şifreler (Örn: RC4, ChaCha20). Video konferans gibi gerçek zamanlı iletişimlerde tercih edilir.

---

## §5.1.3. Hash Fonksiyonları ve Çarpışma (Collision)

Kriptografik özetleme (Hashing), herhangi bir boyuttaki veriyi alıp, sabit uzunlukta ve geri döndürülemez "özet" (parmak izi) bir değere dönüştürme işlemidir.
*   **Algoritmalar:** SHA-256 (modern ve güvenli), MD5 (eski ve kırılmış).
*   **Kullanım Alanı:** Dosya bütünlüğünü doğrulamak ve parolaları veritabanında güvenli saklamak.
*   **Çarpışma (Collision) Analizi:** İki farklı verinin (örneğin iki farklı PDF dosyasının) aynı Hash değerini üretmesine "çarpışma" denir. MD5 ve SHA-1 algoritmalarında çarpışma bulunduğu için bu algoritmalar artık güvenli kabul edilmemektedir. Güçlü bir hash fonksiyonunda çarpışma bulmak teorik olarak imkansıza yakın olmalıdır.

---

## §5.1.4. Açık Anahtar Altyapısı (PKI) ve Dijital Sertifikalar

Asimetrik şifrelemede "Bu açık anahtar gerçekten kime ait?" sorusunu çözen güven mimarisidir.
*   **PKI (Public Key Infrastructure):** Dijital sertifikaları oluşturmak, yönetmek, dağıtmak ve iptal etmek için gereken politikalar ve yazılımlar bütünüdür.
*   **Dijital Sertifika:** Bir açık anahtarı belirli bir kişi veya kuruma bağlayan elektronik belgedir.
*   **CA (Certificate Authority):** Sertifikaları imzalayan ve güvenilirliğini garanti eden otoritedir (Örn: Let's Encrypt, DigiCert).