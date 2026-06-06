---
title: "SOC Mimarisi, Log Yönetimi ve SIEM Kuralları"
sidebar:
  order: 1
---

# SOC Mimarisi, Log Yönetimi ve SIEM

Kurumun tüm güvenlik altyapısı (Firewall, EDR, WAF vb.) tek başına bir anlam ifade etmez; bu cihazların ürettiği uyarıları 7/24 izleyecek, analiz edecek ve doğru zamanda müdahale edecek bir "beyin" gereklidir. Bu beyin, Güvenlik Operasyon Merkezi (SOC) olarak adlandırılır.

## §12.1.1. Güvenlik Operasyon Merkezi (SOC) Yapısı

SOC, insan, süreç ve teknolojinin birleşiminden oluşan bir yapıdır. Genellikle hiyerarşik bir analist yapısına sahiptir:

*   **Tier 1 Analist (Triage):** Ön cephedir. Ekrana düşen binlerce alarmı ilk karşılayan, yanlış alarmları (False Positive) eleyen ve gerçek bir tehdit tespit ederse bileti bir üst seviyeye (Escalation) aktaran analisttir.
*   **Tier 2 Analist (Olay Müdahale):** Biletleri derinlemesine inceler, tehdidin kaynağını bulur, zararlı yazılım analizi yapar ve tehdidi izole etmek (Örn: Cihazı ağdan koparmak, IP'yi banlamak) için müdahale eder.
*   **Tier 3 Analist (Tehdit Avcısı / Hunter):** Alarmları beklemek yerine, güvenlik cihazlarından kaçmayı başarmış gelişmiş tehditleri (APT) ağ içinde aktif olarak arayan en tecrübeli uzmanlardır.

---

## §12.1.2. Log Yönetimi İlkeleri ve Merkezi Loglama

Güvenlik analizinin ham maddesi "Log"lardır. Bir cihazda (Sunucu, Switch, Router) veya uygulamada gerçekleşen her eylemin (Kimin girdiği, neyi sildiği, nereye bağlandığı) metin tabanlı kayıtlarıdır.

*   **Merkezi Loglama Zorumluluğu:** Saldırganlar bir sunucuya sızdıklarında ilk iş olarak izlerini silmek için o sunucudaki yerel log dosyalarını silerler. Bu nedenle tüm cihazlar, loglarını üretildikleri anda ulaşılamaz (merkezi) bir log sunucusuna göndermelidir.
*   **Syslog ve Windows Event Log:** 
    *   *Syslog:* Linux sistemlerin, ağ cihazlarının ve güvenlik duvarlarının standart log aktarım protokolüdür (UDP/TCP 514).
    *   *Windows Event Log:* Microsoft sistemlerine özel, XML tabanlı, Olay Kimlikleri (Event ID) ile çalışan yapısal log formatıdır (Örn: Event ID 4624 - Başarılı Oturum Açma).

---

## §12.1.3. SIEM (Güvenlik Bilgi ve Olay Yönetimi) ve Korelasyon

**SIEM (Security Information and Event Management)**, yüzlerce farklı sistemden (Firewall, EDR, Active Directory, Web Sunucuları) gelen milyonlarca ham logu tek bir merkezde toplayan, anlamlandıran ve birleştiren devasa bir veri tabanı ve analiz motorudur.

### Korelasyon (İlişkilendirme) Mantığı
Farklı cihazlardan gelen bağımsız olayların birleştirilerek anlamlı bir "saldırı senaryosu" çıkarılmasıdır.
*   *Örnek Senaryo:* 
    1. Active Directory'den Log: "Ahmet kullanıcısı gece 03:00'te VPN ile bağlandı." (Tek başına şüpheli değil)
    2. Antivirüs'ten Log: "Ahmet'in makinesinde Mimikatz (şifre çalan zararlı) çalıştırılmaya çalışıldı." (Tek başına riskli ama engellenmiş olabilir)
    3. Veritabanından Log: "Ahmet yetkisi olmayan İK veritabanından 5 GB veri indirdi."
*   **Korelasyon Kuralı:** SIEM, bu 3 logu 10 dakika içinde peş peşe görürse, "Ahmet'in hesabı ele geçirildi ve Veri Sızıntısı Yaşanıyor!" diyerek çok kritik bir alarm üretir.

### SIEM Kuralı Yazımı
Korelasyon kuralları yazılırken, ağın normal davranışı çok iyi bilinmelidir. Aksi takdirde SIEM çok fazla "Yanlış Alarm (False Positive)" üreterek analistlerde "Alarm Yorgunluğu (Alert Fatigue)" yaratır ve gerçek saldırıların gözden kaçmasına neden olur.
