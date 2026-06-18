---
title: "Ayrıcalıklı Erişim Yönetimi (PAM) ve Modern Doğrulama (MFA/SSO)"
sidebar:
  order: 2
---

# Ayrıcalıklı Erişim Yönetimi (PAM) ve Modern Doğrulama

Sıradan kullanıcı kimliklerinin korunması temel bir gereklilik olsa da, sistem yöneticilerine ait "ayrıcalıklı" kimlikler saldırganların bir numaralı hedefidir. Bir yöneticinin hesabı ele geçirildiğinde, saldırgan tüm ağı kontrol edebilir.

## §4.2.1. Ayrıcalıklı Erişim Yönetimi (PAM - Privileged Access Management)

PAM sistemleri, sistem yöneticilerinin, veritabanı uzmanlarının veya otomatik servis hesaplarının yetkilerini ve şifrelerini güvence altına alan özel mimarilerdir.

*   **Parola Kasaları (Password Vaulting):** Yönetici şifreleri, AES-256 gibi güçlü şifreleme algoritmaları ile korunan merkezi kasalarda (Vault) tutulur. Yöneticiler, şifreyi hiçbir zaman düz metin olarak görmez; PAM sistemi arka planda şifreyi enjekte ederek sunucuya bağlantıyı sağlar.
*   **Oturum İzolasyonu ve Kaydı (Session Recording):** Yönetici, sunucuya doğrudan kendi makinesinden bağlanamaz. Bağlantı, PAM sunucusu üzerinden (proxy veya bastion host gibi) kurulur. Bu sayede yöneticinin ekranındaki tüm hareketler video veya komut logu olarak kaydedilip denetlenebilir.
*   **Ayrıcalıklı Hesap Yaşam Döngüsü:** Şifrelerin statik kalmaması için PAM sistemleri, her kullanımdan sonra veya belirli periyotlarda (örneğin her gece) sunuculardaki yönetici şifrelerini otomatik olarak yeniler.

---

## §4.2.2. Modern Çok Faktörlü Doğrulama (MFA) Mekanizmaları

Sadece kullanıcı adı ve parola (Single Factor) ile doğrulama dönemi sona ermiştir. Günümüzde doğrulama, "Bildiğin bir şey" (Parola), "Sahip olduğun bir şey" (Telefon/Token) ve "Olduğun bir şey" (Biyometrik) faktörlerinden en az ikisinin (MFA) kombinasyonuyla yapılmalıdır.

*   **TOTP (Time-Based One-Time Password):** Google Authenticator veya Microsoft Authenticator gibi uygulamaların her 30 saniyede bir ürettiği zamana dayalı tek kullanımlık şifrelerdir. SMS tabanlı doğrulamalara göre (SIM kopyalama riskinden dolayı) çok daha güvenlidir.
*   **FIDO2 ve WebAuthn:** Oltalama (Phishing) saldırılarına karşı en dayanıklı yöntemdir. YubiKey gibi USB güvenlik anahtarları kullanılarak, kriptografik anahtar çiftleriyle şifresiz (Passwordless) ve son derece güvenli bir doğrulama sağlar.
*   **Biyometrik Doğrulama:** Yüz tanıma (Windows Hello/FaceID), parmak izi veya iris taraması gibi fiziksel özelliklere dayalı, kullanıcının "olduğu bir şeye" dayanan doğrulama mekanizmalarıdır.

---

## §4.2.3. Tekil Oturum Açma (SSO) ve Federasyon Protokolleri

Kullanıcıların her bir farklı uygulama (E-posta, CRM, İK yazılımı) için ayrı parola ezberlemesi, zayıf parola kullanımına ve güvenlik risklerine yol açar. SSO (Single Sign-On), kullanıcının bir kez doğrulandıktan sonra diğer tüm yetkili uygulamalara otomatik giriş yapmasını sağlar.

Federasyon ise, iki farklı kurumun (örneğin bir şirket ile bulut hizmet sağlayıcısının) birbirlerinin kimlik doğrulama sistemlerine güvenmesini sağlayan yapıdır.

*   **SAML 2.0 (Security Assertion Markup Language):** Kurumsal düzeydeki B2B (Business-to-Business) web uygulamaları arasında SSO sağlamak için kullanılan, XML tabanlı eski ama çok yaygın bir protokoldür.
*   **OAuth 2.0:** Modern API'ler ve mobil uygulamalar için tasarlanmış bir *yetkilendirme* (Authorization) çerçevesidir. Kimlik bilgisini paylaşmadan, bir uygulamanın (örn. üçüncü parti bir oyunun) başka bir hizmetteki (örn. Google) verilere erişmesine izin verir (Access Token mimarisi).
*   **OpenID Connect (OIDC):** OAuth 2.0 protokolü üzerine inşa edilmiş, JSON tabanlı modern bir *kimlik doğrulama* (Authentication) katmanıdır. "Google ile Giriş Yap" veya "Apple ile Giriş Yap" gibi özelliklerin temelini oluşturur (ID Token mimarisi).
