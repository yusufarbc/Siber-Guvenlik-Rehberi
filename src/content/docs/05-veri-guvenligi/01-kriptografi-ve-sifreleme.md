---
title: "Kriptografi, Şifreleme ve Kriptografik Özetleme"
sidebar:
  order: 1
---

# Kriptografi ve Veri Güvenliği

Kriptografi, veriyi yetkisiz gözlerden saklamak ve bütünlüğünü korumak için kullanılan matematiksel bir disiplindir.

## §5.1.1. Şifreleme Türleri
*   **Simetrik (AES, ChaCha20):** Aynı anahtarın hem şifreleme hem de çözme için kullanıldığı hızlı yöntem.
*   **Asimetrik (RSA, ECC):** Genel anahtar (Public Key) ile şifreleme, özel anahtar (Private Key) ile çözme.

## §5.1.2. Hash Fonksiyonları
*   **Amaç:** Verinin parmak izini (SHA-256) oluşturarak bütünlük kontrolü sağlamak.
*   **Tuzlama (Salting):** Parolaların gökkuşağı tablolarına (Rainbow Tables) karşı korunması için rastgele veri eklenmesi.

## §5.1.3. PKI ve Dijital Sertifikalar
Açık anahtarların güvenilir kurumlar (CA) tarafından onaylanarak kimlik doğrulamada kullanılması (SSL/TLS sertifikaları).