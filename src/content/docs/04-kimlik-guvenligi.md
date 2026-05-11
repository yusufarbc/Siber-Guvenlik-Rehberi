---
title: "Kimlik Güvenliği"
sidebar:
  label: "Kimlik Güvenliği"
  order: 4
---

# Kimlik ve Erişim Yönetimi (IAM)

Kimlik ve Erişim Yönetimi (Identity and Access Management - IAM), doğru kişilerin, doğru kaynaklara, doğru nedenlerle ve doğru zamanda erişmesini sağlayan bir çerçevedir. Ağ güvenliğinin en kritik katmanlarından biri olan IAM, kullanıcıların dijital kimliklerini ve bu kimliklere bağlı yetkileri yönetir.

§

## AAA Çerçevesi (Authentication, Authorization, Accounting)

IAM süreçleri genellikle AAA olarak bilinen üç temel işlev üzerine kuruludur:

1. **Authentication (Kimlik Doğrulama):** Kullanıcının iddia ettiği kişi olduğunu kanıtlama sürecidir. Parolalar, biyometrik veriler veya dijital sertifikalar kullanılır.
2. **Authorization (Yetkilendirme):** Kimliği doğrulanmış bir kullanıcının hangi kaynaklara erişebileceğinin ve hangi işlemleri yapabileceğinin belirlenmesidir.
3. **Accounting (Hesap Verebilirlik/Kayıt):** Kullanıcının erişim süresince yaptığı işlemlerin izlenmesi ve kaydedilmesidir. Bu, denetim (audit) ve faturalandırma için gereklidir.

§

## Ağ Erişimi Kontrolü: 802.1X Standartları

Kablolu ve kablosuz ağlarda port tabanlı kimlik doğrulama sağlamak için **IEEE 802.1X** standardı kullanılır. Bu standart, bir cihazın ağa fiziksel olarak bağlandığı anda kimlik doğrulamasını zorunlu kılar.

### 802.1X Bileşenleri:
- **Supplicant (İstemci):** Ağa erişmek isteyen kullanıcı cihazı.
- **Authenticator (Doğrulayıcı):** İstemci ile kimlik doğrulama sunucusu arasında köprü görevi gören ağ cihazı (Switch veya Access Point).
- **Authentication Server (Kimlik Doğrulama Sunucusu):** Kullanıcı bilgilerini doğrulayan merkezi sistem (genellikle bir RADIUS sunucusu).

§

## Merkezi Kimlik Doğrulama Protokolleri

### RADIUS (Remote Authentication Dial-In User Service)
Ağ kaynaklarına erişen kullanıcılar için merkezi AAA hizmeti sağlayan en yaygın protokoldür. UDP üzerinden çalışır ve istemci ile sunucu arasındaki parolaları şifreler (ancak tüm paket içeriğini şifrelemez).

### TACACS+ (Terminal Access Controller Access-Control System Plus)
Cisco tarafından geliştirilen, RADIUS'a göre daha gelişmiş bir protokoldür. TCP kullanır ve tüm paket içeriğini şifreler. En önemli farkı, AAA işlevlerini (Authentication, Authorization, Accounting) birbirinden tamamen ayırmasıdır, bu da ağ yöneticilerine daha granüler kontrol sağlar.

§

## Çok Faktörlü Kimlik Doğrulama (MFA)

Geleneksel "kullanıcı adı ve parola" yönteminin yetersiz kaldığı durumlarda, güvenliği artırmak için MFA kullanılır. MFA, şu üç faktörden en az ikisinin kombinasyonunu gerektirir:
- **Bildiğiniz bir şey:** Parola, PIN.
- **Sahip olduğunuz bir şey:** Akıllı telefon (OTP), donanım anahtarı (Yubikey).
- **Olduğunuz bir şey:** Parmak izi, yüz tanıma.

MFA kullanımı, çalınan parolaların tek başına sistemlere erişmek için kullanılmasını engelleyerek güvenliği dramatik bir şekilde artırır.

