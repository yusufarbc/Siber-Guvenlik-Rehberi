---
title: "Sosyal Mühendislik ile Fiziksel Sızma ve Red Team Operasyonları"
sidebar:
  order: 3
---

# Sosyal Mühendislik ile Fiziksel Sızma ve Red Team Operasyonları

Fiziksel güvenliğin en zayıf halkası çoğu zaman teknoloji değil, insandır. Sosyal mühendislik saldırıları, teknik güvenlik kontrolleri ne kadar güçlü olursa olsun personeli kandırarak fiziksel erişim elde etmeyi hedefler. Red Team operasyonları bu tehdidi gerçekçi tatbikatlarla test eder.

## §2.3.1. Kurumsal Binalara Fiziksel Sızma Yöntemleri

Fiziksel sızma testleri (Physical Penetration Testing), saldırganların hedef binaya yetkisiz erişim sağlamak için kullandığı gerçek dünya tekniklerini simüle eder.

### Tailgating ve Piggybacking
*   **Tailgating:** Yetkili bir kişinin ardından turnike ya da kapıdan sızma tekniğidir. Saldırgan, elinde kutu taşıyan bir teslimatçı kılığına girerek kapıyı açık tutan personeliyle birlikte içeri girer.
*   **Piggybacking:** Tailgating'in farkı, mağdurun sızma girişiminden haberi olmasıdır; ancak kibarlık veya yardımseverlik güdüsüyle kapıyı tutar.

### Sosyal Mühendislik Senaryoları
*   **Pretexting (Bahane Üretme):** Saldırgan sahte bir kimlik, üniforma veya çalışan kartıyla IT destek teknisyeni, yangın müfettişi ya da temizlik personeli olarak kendini tanıtır.
*   **Baiting:** USB bellekler veya CD'ler otopark ya da alanlara bırakılır; meraklanan çalışan bunları iş bilgisayarına takar.
*   **Reverse Social Engineering:** Saldırgan önce küçük bir teknik arıza yaratır, ardından çözücü olarak karşısına çıkar ve yetkili personelin güvenini kazanır.

> [!WARNING]
> Fiziksel sızma testleri yalnızca yazılı yetkilendirme belgesi (Rules of Engagement) ile gerçekleştirilmelidir. Yetkisiz testler hukuki sorumluluk doğurur.

---

## §2.3.2. RFID/Badging Kopyalama Araçları ve Şifreli Geçiş Kartı Teknolojileri

Kurumsal bina geçiş sistemlerinde kullanılan RFID tabanlı kartlar, kötü yapılandırıldığında kopyalanabilir.

### RFID Kopyalama Araçları
*   **Proxmark3:** Profesyonel RFID/NFC kart okuyucu/yazıcı cihazdır. 125 kHz (EM4100, HID Prox) ve 13.56 MHz (Mifare Classic, DESFire) frekanslarında çalışır ve kart verilerini klonlayabilir.
*   **Flipper Zero:** Taşınabilir çok amaçlı güvenlik test cihazıdır. 125 kHz EM kartları okuyup kopyalayabilir, Sub-GHz, NFC ve IR sinyalleri test edebilir.

> [!CAUTION]
> **Mifare Classic Açığı:** Mifare Classic kartlar kırık kriptografi (CRYPTO1) kullandığından, Proxmark3 ile birkaç dakika içinde kopyalanabilir. Mifare Classic kullanan sistemler ivedilikle yükseltilmelidir.

### Güvenli Geçiş Kartı Teknolojileri
*   **MIFARE DESFire EV2/EV3:** AES-128 tabanlı güçlü kriptografi, karşılıklı kimlik doğrulama (Mutual Authentication) ve her işlemde değişen kriptografik anahtar kullanır. Kopyalanmaya karşı dirençlidir.
*   **SEOS (HID Global):** Uygulamalara göre ayrılmış güvenli bellek alanları ve gelişmiş şifreleme sunar.
*   **Çok Katmanlı Doğrulama:** Kart+PIN kombinasyonu veya kart+biyometrik (parmak izi okuyucu) zorunlu tutulmalıdır.

### Red Team Karşı Önlemleri
*   Geçiş noktalarına anormallik tespiti için video analizi entegre edilmelidir.
*   Tüm geçiş olayları SIEM'e iletilerek mesai dışı saatlerde erişim denemeleri anında uyarı üretmelidir.
*   Personele düzenli sosyal mühendislik farkındalık eğitimi verilmelidir.
