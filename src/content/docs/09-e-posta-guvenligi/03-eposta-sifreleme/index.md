---
title: "E-Posta Şifreleme Teknolojileri (S/MIME, PGP) ve Veri Sızıntısı Analizi"
sidebar:
  order: 3
---

# E-Posta Şifreleme Teknolojileri (S/MIME, PGP) ve Veri Sızıntısı Analizi

TLS ile şifrelenen e-posta trafiği yalnızca **aktarım sırasında** korunur; sunucuya ulaştığında deşifre edilir. Uçtan uca e-posta şifrelemesi (S/MIME ve PGP), mesajın yalnızca hedef alıcı tarafından okunabilmesini garanti eder. Bu bölüm şifreleme mimarisini ve meta veri üzerinden gerçekleştirilen veri sızıntısı tespitini kapsar.

## §9.3.1. S/MIME ve PGP ile Kurumsal PKI Entegrasyonu

### S/MIME (Secure/Multipurpose Internet Mail Extensions)

S/MIME, X.509 sertifikalarını kullanarak e-posta imzalama ve şifreleme sağlar. Kurumsal ortamlarda dahili PKI veya güvenilir üçüncü taraf CA'larla entegre çalışır.

**Şifreleme Akışı:**
1.  Gönderici, alıcının **genel anahtarıyla** mesajı şifreler.
2.  Alıcı, yalnızca kendi **özel anahtarıyla** mesajı çözer.
3.  Gönderici mesajı kendi **özel anahtarıyla** dijital olarak imzalar; alıcı gönderici genel anahtarıyla doğrular.

**Kurumsal Dağıtım:**
*   Active Directory Sertifika Hizmetleri (AD CS) üzerinden kullanıcılara S/MIME sertifikası otomatik olarak verilir.
*   Microsoft 365: Exchange Online'da S/MIME, kullanıcı sertifikaları GAL (Global Address List) üzerinden yayımlanarak otomatik şifreleme yapılandırılabilir.
*   Sertifika yaşam döngüsü yönetimi (yenileme, iptal — CRL/OCSP) kurumsal PKI tarafından otomatize edilmelidir.

**Kısıtlamalar:**
*   Gönderici ve alıcı her ikisinin de sertifikaya sahip olması gerekir.
*   Şifrelenmiş mesajlar SEG/DLP tarafından içerik taramasından geçirilemez — bu durum DLP mimarisinde dikkatli planlama gerektirir.

---

### PGP (Pretty Good Privacy) / OpenPGP

PGP, Web of Trust (Güven Ağı) modeline dayanan ve merkezi CA gerektirmeyen alternatif bir standarttır.

*   **Anahtar Sunucuları:** Genel anahtarlar `keys.openpgp.org` veya `keyserver.ubuntu.com` gibi anahtar sunucularında yayımlanır.
*   **GnuPG (GPG):** OpenPGP'nin açık kaynak uygulaması; e-posta istemcileri (Thunderbird/Enigmail, Apple Mail) ile entegre olur.
*   **Kurumsal Kullanım:** PGP, bireysel ve açık kaynak topluluklarında yaygınken kurumsal ortamda S/MIME genellikle tercih edilir (merkezi yönetim ve AD entegrasyonu avantajı).

---

## §9.3.2. SEG ve DLP Sistemlerinde E-Posta Başlıklarından Veri Sızıntısı Tespiti

### E-Posta Başlıklarında (Headers) Gizli Meta Veriler

E-posta başlıkları; gönderme altyapısı, istemci bilgisi ve yönlendirme zinciri hakkında çok sayıda meta veri barındırır. Bu veriler hem sızıntı tespiti hem de tehdit analizi için kritiktir.

**Analiz Edilmesi Gereken Başlık Alanları:**

*   `Received:` — E-postanın geçtiği her sunucunun IP ve zaman damgasını içerir; yönlendirme zinciri analizi için.
*   `X-Originating-IP:` — Mesajı gönderen istemcinin gerçek IP adresi (VPN/proxy tespiti).
*   `X-Mailer:` / `User-Agent:` — Kullanılan e-posta istemcisi; anormal araçlar (curl, Python smtplib) yetkisiz gönderimlere işaret eder.
*   `Message-ID:` — Üretim kalıbı (örn: `@outlook.com` yerine `@unknown.domain`) sahte göndericiyi ifşa edebilir.
*   `DKIM-Signature:` — `d=` alanındaki domain, gerçek gönderen domainle eşleşmiyorsa sahtecilik şüphesi.

### SEG Üzerinden Anomali Tespiti

*   Mesai dışı saatlerde yüksek hacimli giden posta → veri sızıntısı veya zombie/spam botu işareti.
*   Alışılmadık dış alıcı domain'lerine toplu ileti → insider threat tespiti için DLP kuralı.
*   Şifreli ZIP veya parola korumalı Office eki + dış alıcı kombinasyonu → DLP kuralıyla durdurulmalı veya karantinaya alınmalıdır.

### DLP Entegrasyonu ile Şifreli Posta Çatışması

S/MIME ve PGP ile şifrelenmiş mesajlar SEG ve DLP tarafından içerik analizine alınamaz. Bu çatışmayı yönetmek için:
*   **İzinli şifreleme:** Yalnızca kurumsal PKI'den verilmiş sertifikalarla şifrelenmiş mesajlara izin verilmesi; harici PGP anahtarlarının bloke edilmesi.
*   **Şifreleme proxy'si:** SEG, giden şifreli mesajı çözer, DLP taramasını yapar ve yeniden şifreler (ancak bu uçtan uca şifreleme özelliğini ortadan kaldırır).
*   **Kullanıcı bildirimi:** Şifreli giden mesajlar için onay akışı; çalışan bilinçlendirme politikası.
