---
title: "Kimlik Yönetimi (IAM) ve Erişim Kontrol Modelleri"
sidebar:
  order: 1
---

# Kimlik ve Erişim Yönetimi (IAM)

Kimlik yönetimi, doğru kişinin doğru kaynağa doğru nedenle ve doğru zamanda erişmesini sağlayan çerçevedir.

## §4.1.1. AAA Çerçevesi
1.  **Authentication (Doğrulama):** "Kimsin?" (Kullanıcı adı/Parola).
2.  **Authorization (Yetkilendirme):** "Ne yapabilirsin?" (Erişim hakları).
3.  **Accountability (Hesap Verebilirlik):** "Ne yaptın?" (Loglama ve denetim).

## §4.1.2. Erişim Kontrol Modelleri
*   **MAC (Mandatory Access Control):** Sistemin belirlediği katı kurallar (Gizli, Çok Gizli).
*   **DAC (Discretionary Access Control):** Kaynak sahibinin yetki verebildiği model (Dosya izinleri).
*   **RBAC (Role-Based Access Control):** İş fonksiyonlarına (İnsan Kaynakları, Bilgi İşlem) göre yetkilendirme.
*   **ABAC (Attribute-Based Access Control):** Konum, zaman, cihaz türü gibi özniteliklere dayalı dinamik yetkilendirme.

## §4.1.3. Active Directory ve LDAP
Kurumsal ağlarda merkezi kimlik doğrulama ve dizin hizmetlerinin güvenli yapılandırılması.
