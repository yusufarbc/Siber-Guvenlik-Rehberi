---
title: "Veri Yaşam Döngüsü, Sınıflandırma ve Sızıntı Önleme (DLP)"
sidebar:
  order: 2
---

# Veri Yaşam Döngüsü, Sınıflandırma ve Sızıntı Önleme (DLP)

Veri, kurumların en değerli varlığıdır. Kurumlar veriyi korumak için öncelikle verinin nerede olduğunu, ne tür bir formda olduğunu ve değerini bilmelidir.

## §5.2.1. Veri Yaşam Döngüsü ve Veri Durumları

Veri, üretildiği andan yok edildiği ana kadar sürekli form değiştirir. Güvenlik önlemleri, verinin içinde bulunduğu duruma göre şekillenmelidir.

1.  **Durağan Veri (Data At Rest):** Sunucularda, veritabanlarında, USB belleklerde veya bulut depolama alanlarında (S3) saklanan, aktif olarak işlenmeyen veridir.
    *   *Koruma:* AES-256 ile Disk şifreleme (FDE - Full Disk Encryption), Dosya/Klasör şifreleme.
2.  **Hareket Halindeki Veri (Data In Transit / In Motion):** Ağ üzerinden, e-postayla, anlık mesajlaşmayla veya API üzerinden iki nokta arasında iletilen veridir.
    *   *Koruma:* İletişim kanalının şifrelenmesi (TLS/SSL), VPN (IPsec) ve uçtan uca şifreleme.
3.  **Kullanımdaki Veri (Data In Use):** Bir uygulama tarafından aktif olarak okunan, CPU ve RAM (Bellek) üzerinde işlenen veridir.
    *   *Koruma:* Bellek izolasyonu (Memory Enclaves - Intel SGX, AMD SEV), Güvenilir Yürütme Ortamları (TEE) ve Tam Bellek Şifrelemesi (TME).

---

## §5.2.2. Veri Sınıflandırma Etiketleri

Bütün verileri aynı seviyede korumak hem maliyetli hem de operasyonel olarak imkansızdır. Veri, değerine ve gizlilik ihtiyacına göre sınıflandırılmalıdır. Standart kurumsal sınıflandırma seviyeleri şunlardır:

*   **Gizli (Confidential):** Açığa çıkması durumunda kuruma ciddi yasal, finansal veya itibar kayıpları yaşatacak veridir (Örn: Müşteri kredi kartı verileri, kaynak kodlar, şirket satın alma planları).
*   **Kuruma Özel (Internal / Private):** Sadece kurum çalışanları tarafından bilinmesi gereken, dışarıya kapalı veridir (Örn: Kurum içi telefon rehberi, iç yönergeler).
*   **Halka Açık (Public):** Tüm dünyaya açık olan, herkesin erişebileceği veridir (Örn: Şirketin web sitesindeki basın bültenleri, ürün broşürleri). Sadece "Bütünlük" korunmasına ihtiyaç duyar.

---

## §5.2.3. Sızıntı Önleme Sistemleri (DLP - Data Loss Prevention)

DLP, kuruma ait hassas verilerin, yetkisiz bir şekilde şirket dışına (örneğin internete veya yetkisiz USB cihazlarına) çıkarılmasını engelleyen teknolojik çözümler bütünüdür.

### DLP Mimarileri
*   **Ağ Tabanlı DLP (Network DLP):** Şirket ağından dışarı çıkan tüm trafiği (Web, E-posta, FTP) "In Transit" durumundayken izler ve kuralları ihlal eden dosyaların dışarı çıkmasını engeller.
*   **Uç Nokta Tabanlı DLP (Endpoint DLP):** Kullanıcıların bilgisayarlarına (In Use ve At Rest) kurulan ajanlar aracılığıyla çalışır. Ekranda "Print Screen" tuşuna basılmasını, dosyaların şifresiz USB belleğe atılmasını veya yerel yazıcıdan çıktı alınmasını engeller.

### EDM (Exact Data Match) Teknolojisi
DLP sistemlerinde yanlış alarmları (False Positive) en aza indirmek için kullanılan gelişmiş bir tespit yöntemidir. Kurumun veritabanındaki (Örn: İK veya CRM veritabanı) "gerçek" müşteri verileri (TC Kimlik, Kredi Kartı numaraları) hashlenerek DLP'ye beslenir. DLP, sadece bu veritabanında gerçekten var olan kayıtların dışarı çıkmasını engeller, böylece rastgele TC Kimlik benzeri numaralar için gereksiz alarm üretmez.
