---
title: "Veri Güvenliği"
sidebar:
  label: "Veri Güvenliği"
  order: 5
---

# Veri Güvenliği ve Kriptografi

Veri güvenliği, durağan (at-rest), hareket halindeki (in-transit) ve kullanımdaki (in-use) verilerin gizliliğini, bütünlüğünü ve erişilebilirliğini koruma sürecidir. Bu korumanın temel taşı, veriyi yetkisiz gözlerden saklayan ve manipülasyonu engelleyen **Kriptografi** bilimidir.

§

## Şifreleme Temelleri

Şifreleme, okunabilir veriyi (düz metin) matematiksel algoritmalar kullanarak okunamaz bir formata (şifreli metin) dönüştürme işlemidir.

### 1. Simetrik Kriptografi (AES)
Veriyi şifrelemek ve çözmek için aynı gizli anahtar kullanılır. Çok hızlı olduğu için büyük boyutlu verilerin (diskler, dosya sistemleri) şifrelenmesinde tercih edilir. Günümüzdeki standart **AES (Advanced Encryption Standard)** algoritmasıdır. En büyük zorluğu, bu tek anahtarın güvenli bir şekilde taraflar arasında paylaştırılmasıdır.

### 2. Asimetrik Kriptografi (RSA & ECC)
Birbirine bağlı iki anahtar kullanılır: **Genel Anahtar (Public Key)** şifreleme için, **Özel Anahtar (Private Key)** ise şifreyi çözmek için kullanılır. Anahtar dağıtım sorununu çözer ancak simetrik şifrelemeye göre çok daha yavaştır. **RSA** ve daha modern, daha küçük anahtar boyutlarıyla aynı güvenliği sağlayan **ECC (Elliptic Curve Cryptography)** yaygın örneklerdir.

### 3. Hibrit Model
Modern sistemlerde her iki yöntemin avantajları birleştirilir. Örneğin, bir TLS bağlantısında taraflar asimetrik şifreleme ile güvenli bir şekilde bir "oturum anahtarı" (simetrik) üzerinde anlaşır, ardından asıl veri transferi bu hızlı simetrik anahtar ile yapılır.

§

## Veri Bütünlüğü: Özet Fonksiyonları (Hashing)

Hashing, herhangi bir boyuttaki veriyi sabit uzunlukta benzersiz bir çıktıya (hash değeri) dönüştüren tek yönlü bir işlemdir. Verideki en küçük bir değişiklik (bir bit bile olsa), tamamen farklı bir hash değeri üretir.

- **Kullanım Alanları:** Dosya bütünlüğü kontrolü, parola saklama (salt ile birlikte), dijital imzalar.
- **Standartlar:** Günümüzde güvenli kabul edilen standart **SHA-256** (Secure Hash Algorithm 256-bit) ve **SHA-3** ailesidir.

§

## Dijital İmzalar ve PKI

**Dijital İmzalar**, verinin bütünlüğünü ve gönderenin kimliğini (inkar edememe - non-repudiation) kanıtlar. Süreç, verinin hash'inin gönderenin Özel Anahtarı ile imzalanması ve alıcının bunu gönderenin Genel Anahtarı ile doğrulaması şeklinde işler.

**Açık Anahtar Altyapısı (PKI)**, dijital sertifikalar aracılığıyla genel anahtarların kimliklere güvenli bir şekilde bağlanmasını sağlar. Bu güven zincirinin merkezinde **Sertifika Otoriteleri (CA)** bulunur.

§

## Güvenli İletişim Protokolleri

Kriptografik mekanizmalar, ağ üzerinde güvenli kanallar oluşturmak için protokoller içinde kullanılır:
- **TLS 1.3:** Web trafiğini (HTTPS) korumak için en modern ve güvenli standarttır.
- **IPsec:** Ağ katmanında şifreleme sağlayarak VPN'lerin temelini oluşturur.
- **SSH:** Uzaktan yönetim trafiğini güvenli hale getirir.
- **DNSSEC / DoH:** DNS sorgularının bütünlüğünü ve gizliliğini sağlar.

Kritik ve hassas verilerin sınıflandırılması, ağ trafiğinde, uç noktalarda veya bulut ortamlarında yetkisiz dışa aktarımını tespit eden ve engelleyen kurumsal DLP çözümlerinin mimarisi.

![DLP Sistemi Çalışma Prensibi](placeholder.png)

## Veri Yedekleme Stratejileri

Ransomware saldırılarına, donanım arızalarına ve insan hatalarına karşı verinin korunmasını sağlayan 3-2-1 yedekleme kuralı, immutable (değiştirilemez) yedekleme ve kurtarma senaryoları.

![3-2-1 Yedekleme Stratejisi](placeholder.png)
