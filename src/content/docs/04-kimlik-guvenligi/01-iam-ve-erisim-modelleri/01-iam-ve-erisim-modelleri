# Kimlik Yönetimi (IAM) ve Erişim Kontrol Modelleri

Kimlik ve Erişim Yönetimi (IAM), doğru kişinin (veya sistemin), doğru kaynağa, doğru nedenle ve doğru zamanda erişmesini sağlayan çerçevedir. Güvenliğin en temel kavramı olan "Sınır" (Perimeter), günümüzde ağ cihazlarından ziyade "Kimlik" üzerine kuruludur.

## §4.1.1. AAA Çerçevesi

Tüm IAM sistemleri, AAA olarak bilinen üç aşamalı bir model üzerine inşa edilir:

1.  **Doğrulama (Authentication):** "Sen kimsin?" sorusunun yanıtlandığı aşamadır. Kullanıcı bir iddiada bulunur (Kullanıcı Adı) ve bunu ispatlar (Parola, Parmak izi).
2.  **Yetkilendirme (Authorization):** Kimliği doğrulanan kişinin "Ne yapabileceğine" karar verme aşamasıdır. Sisteme giriş yapan bir kullanıcının hangi dosyaları okuyabileceği veya silebileceği yetkilendirme ile belirlenir.
3.  **Hesap Verebilirlik (Accountability / Accounting):** "Kim, neyi, ne zaman yaptı?" sorusunun yanıtıdır. Sistemdeki tüm işlemlerin geri dönülemez şekilde loglanması (kaydedilmesi) ile yasal ve idari takip sağlanır.

---

## §4.1.2. Active Directory ve LDAP Mimarilerinde Güvenlik

Kurumsal ağların büyük çoğunluğu kimlik yönetimi için Microsoft Active Directory (AD) veya LDAP (Lightweight Directory Access Protocol) kullanır.

*   **Active Directory Güvenliği:** AD ortamlarında Domain Controller (DC) sunucuları ağın kalbidir. Yönetici (Admin) haklarının kısıtlanması, Tier-Modeli (Tier 0, 1, 2) uygulanarak yanal hareketin (Lateral Movement) engellenmesi ve Kerberos bilet hırsızlığına (Pass-the-Hash, Golden Ticket) karşı sıkılaştırmalar yapılması kritiktir.
*   **LDAP Güvenliği:** Şifresiz LDAP (TCP 389) yerine, trafiğin şifrelendiği LDAPS (TCP 636) kullanılarak ağ dinlemelerine (Sniffing) karşı kimlik bilgilerinin çalınması önlenmelidir.

---

## §4.1.3. Formel Erişim Kontrol Modelleri

Kurumun güvenlik politikalarına uygun olarak yetkilerin dağıtılma şeklini belirleyen 4 temel model bulunmaktadır:

### 1. İsteğe Bağlı Erişim Kontrolü (DAC - Discretionary Access Control)
*   **Tanım:** Kaynak (dosya, klasör) sahibinin, kaynağa kimin erişebileceğine kendi inisiyatifiyle karar verdiği modeldir.
*   **Özellik:** Standart Windows veya Linux dosya sistemlerinde (`chmod` yetkileri) kullanılır. Esnektir ancak güvenlik düzeyi düşüktür.

### 2. Zorunlu Erişim Kontrolü (MAC - Mandatory Access Control)
*   **Tanım:** Sistemin, merkezi ve çok katı kurallara (Gizli, Çok Gizli gibi etiketlere) göre erişimi yönettiği modeldir. Kullanıcılar veya dosya sahipleri bu izinleri değiştiremez. Askeri ve istihbarat sistemlerinde kullanılır (Örn: SELinux, Bell-LaPadula ve Biba modelleri).
*   **Bell-LaPadula Modeli:** "Gizliliğe" odaklanır. "Aşağı Okuma Yok (No Read Up), Yukarı Yazma Yok (No Write Down)" kurallarıyla alt seviye bir memurun üst düzey belgeleri okumasını engeller.
*   **Biba Modeli:** "Bütünlüğe" odaklanır. "Yukarı Okuma Yok (No Read Down), Aşağı Yazma Yok (No Write Up)" kurallarıyla alt seviyeli/güvensiz verinin üst seviyeli/güvenilir veriyi bozmasını engeller.

### 3. Rol Tabanlı Erişim Kontrolü (RBAC - Role-Based Access Control)
*   **Tanım:** Yetkilerin kullanıcılara doğrudan değil, kullanıcının kurum içindeki "Rolüne" (İnsan Kaynakları Uzmanı, Veritabanı Yöneticisi) atandığı modern kurumsal modeldir.
*   **Özellik:** Çalışan işe girdiğinde veya departman değiştirdiğinde yönetimi çok kolaylaştırır. En yaygın kullanılan kurumsal modeldir.

### 4. Öznitelik Tabanlı Erişim Kontrolü (ABAC - Attribute-Based Access Control)
*   **Tanım:** Erişimin sadece role göre değil; kullanıcının konumu, saati, cihazının durumu gibi birçok "özniteliğin" (Attribute) dinamik olarak değerlendirildiği modeldir.
*   **Özellik:** "Muhasebe uzmanı, finans dosyalarına sadece ofisteki masaüstü bilgisayarından ve mesai saatleri içinde erişebilir" gibi karmaşık, Sıfır Güven (Zero Trust) mimarisine uygun kurallar yazılmasını sağlar.
