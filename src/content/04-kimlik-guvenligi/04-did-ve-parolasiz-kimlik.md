---
title: "Merkeziyetsiz Kimlik (DID) ve Parolasız (Passwordless) Gelecek"
sidebar:
  order: 4
---

# Merkeziyetsiz Kimlik (DID) ve Parolasız (Passwordless) Gelecek

Parolalar; kimlik avı, kaba kuvvet ve credential stuffing saldırılarına karşı kalıcı olarak savunmasızdır. FIDO2, WebAuthn ve Passkey standartları, parola bağımlılığını ortadan kaldırarak kriptografik kanıta dayalı kimlik doğrulamayı mümkün kılar. Bu bölümde parolasız kimlik doğrulama mimarisi ve mavi takım perspektifinden izleme teknikleri ele alınmaktadır.

## §4.4.1. FIDO2/WebAuthn Protokollerinin Mekaniği ve Passkey Entegrasyonları

### FIDO2 Mimarisi

FIDO2, iki temel bileşenden oluşur:
*   **WebAuthn (Web Authentication API):** W3C standardı. Tarayıcının kimlik doğrulayıcıyla konuşmasını sağlayan JavaScript API'sidir.
*   **CTAP2 (Client to Authenticator Protocol 2):** Tarayıcı ile fiziksel güvenlik anahtarı veya platform kimlik doğrulayıcısı arasındaki iletişim protokolüdür.

### Kriptografik Akış

1.  Kullanıcı hesabına bağlı bir **genel/özel anahtar çifti** oluşturulur. Genel anahtar sunucuda saklanır; özel anahtar cihazı hiçbir zaman terk etmez (TEE/SE içinde tutulur).
2.  Giriş sırasında sunucu bir **challenge** (rastgele nonce) gönderir.
3.  Kimlik doğrulayıcı, özel anahtarla challenge'ı imzalar ve sunucuya gönderir.
4.  Sunucu, kayıtlı genel anahtarla imzayı doğrular. Şifre hiçbir zaman iletilmez.

### Passkey

Passkey, FIDO2 kimlik bilgilerini bulut üzerinden senkronize edilebilir hale getiren Apple/Google/Microsoft ortak uygulamasıdır.
*   Özel anahtar iCloud Keychain, Google Password Manager veya Windows Hello gibi cihaz güvenceli depolara senkronize edilir.
*   Kimlik avı saldırılarına (phishing) yapısal olarak dirençlidir çünkü kimlik bilgisi yalnızca kayıtlı alan adında çalışır.

---

## §4.4.2. Akıllı Kartlar ve Donanımsal Güvenlik Anahtarları Mimarisi

### YubiKey Mimarisi

YubiKey, USB/NFC/Lightning üzerinden çalışan bir donanımsal güvenlik anahtarıdır (HSM lite). Özel anahtarı cihaz içindeki güvenli enklav (Secure Enclave) içinde tutar ve dışarı çıkarmaz.

*   **FIDO2/WebAuthn:** Passkey depolama ve doğrulama.
*   **PIV (Personal Identity Verification):** X.509 sertifika tabanlı akıllı kart emülasyonu. VPN, e-posta imzalama ve disk şifreleme senaryolarında kullanılır.
*   **TOTP/HOTP:** YubiKey Authenticator uygulamasıyla yazılım TOTP'ye alternatif güvenli OTP üretimi.
*   **OpenPGP Akıllı Kart:** GPG imzalama ve şifreleme anahtarlarını donanımda saklama.

### Akıllı Kart (Smart Card) Altyapısı
*   ISO/IEC 7816 standardına uyumlu akıllı kartlar, kimlik doğrulama sertifikasını kart içi işlemci üzerinde tutar.
*   Kurumsal PKI ile entegre edilerek RDP, VPN ve e-posta imzalama senaryolarında kullanılır.
*   PIN kilitleme mekanizması ile kart çalınsa bile özel anahtara ulaşmak imkânsızlaşır.

---

## §4.4.3. Mavi Takım İçin Parolasız Kimlik Doğrulama Loglarının Analizi

Parolasız sistemlere geçiş yeni log kalıpları getirir. SOC analistlerinin bu kalıpları tanıması ve anomali tespiti yapabilmesi kritiktir.

### Kritik Log Kaynakları ve Olayları
*   **Windows Hello for Business:** `Microsoft-Windows-HelloForBusiness/Operational` log kanalı; kayıt, doğrulama ve kaldırma olaylarını içerir.
*   **Azure AD / Entra ID:** `Sign-in logs > Authentication method: FIDO2 security key` filtreleri ile Passkey kullanımı izlenebilir.
*   **YubiKey OTP:** RADIUS veya IdP loglarında OTP tokenlerinin başarısız kullanım denemeleri credential stuffing işareti olabilir.

### Anomali Tespit Senaryoları
*   Bilinen bir cihaz dışından gelen FIDO2 kayıt isteği → olası hesap devrimi girişimi.
*   Kısa sürede coğrafi olarak imkânsız konumdan ardışık doğrulama → impostasyon girişimi.
*   Toplu Passkey kaldırma işlemi → insider threat veya admin hesabı ele geçirme.

### Politika Önerileri
*   FIDO2 kimlik doğrulayıcıların kurumsal MDM ile yönetilmesi ve izin verilen cihaz listesinin Conditional Access politikalarıyla kısıtlanması gerekir.
*   Yeni FIDO2 cihaz kaydı için önceki MFA doğrulaması zorunlu tutulmalıdır (bootstrap zayıflığı önlemi).
