---
title: "Ayrıcalıklı Erişim Yönetimi (PAM) ve Modern Doğrulama"
sidebar:
  order: 2
---

# Ayrıcalıklı Erişim ve Çok Faktörlü Doğrulama

Sıradan kullanıcıların ötesinde, sistem yöneticilerinin ve yüksek yetkili hesapların korunması kritiktir.

## §4.2.1. PAM (Privileged Access Management)
Yönetici şifrelerinin bir kasada (Vault) tutulması, oturumların kaydedilmesi ve şifrelerin her kullanım sonrası otomatik değiştirilmesi.

## §4.2.2. MFA Mekanizmaları
*   **TOTP:** Google Authenticator gibi uygulamalarla üretilen tek kullanımlık şifreler.
*   **FIDO2 / WebAuthn:** Donanımsal güvenlik anahtarları (Örn: YubiKey).
*   **Biyometrik:** Yüz tanıma, parmak izi.

## §4.2.3. SSO (Single Sign-On) ve Federasyon
*   **SAML 2.0:** Kurumsal web uygulamaları için XML tabanlı kimlik paylaşımı.
*   **OAuth 2.0 / OIDC:** Modern mobil ve API tabanlı uygulamalar için yetkilendirme ve kimlik doğrulama.
