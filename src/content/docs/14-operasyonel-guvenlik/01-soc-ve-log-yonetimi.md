---
title: "SOC/NOC Entegrasyonu ve Yeni Nesil Merkezi Log Yönetimi (SIEM/SOAR)"
sidebar:
  order: 1
---

# SOC/NOC Entegrasyonu ve Yeni Nesil Merkezi Log Yönetimi (SIEM/SOAR)

Kurumların BT altyapılarının hem erişilebilirlik (NOC) hem de güvenlik (SOC) odaklı izlenmesi, operasyonel sürekliliğin ve siber savunmanın en kritik halkasıdır. Bu iki disiplinin entegrasyonu ve yeni nesil otomasyon teknolojilerinin (SIEM/SOAR) kullanımı, tehditlerin tespit ve engelleme sürelerini dramatik şekilde düşürür.

---

## §14.1.1. SOC/NOC Entegrasyonu ve ISOC Mimarisi

Geleneksel yapılarda ağ operasyonları ile güvenlik operasyonları birbirinden bağımsız yönetilirken, modern mimarilerde bu iki yapı **ISOC (Integrated Security and Operations Center - Entegre Güvenlik ve Operasyon Merkezi)** çatısı altında birleştirilir.

*   **NOC (Network Operations Center - Ağ Operasyon Merkezi):** Ağın ve sistemlerin erişilebilirliğine (Availability), performansına, bant genişliği tüketimine ve donanım sağlığına (Up-Time) odaklanır. Temel amacı iş sürekliliğini korumaktır.
*   **SOC (Security Operations Center - Güvenlik Operasyon Merkezi):** Sisteme yönelik siber tehditleri (Confidentiality & Integrity), şüpheli etkinlikleri, yetkisiz erişimleri ve zararlı aktiviteleri izler, tespit eder ve müdahale eder.
*   **ISOC Sinerjisi:** NOC ve SOC ekiplerinin aynı çatı altında entegre çalışması, olay tespiti ve müdahaleyi hızlandırır. Örneğin, NOC ekranlarında görülen anormal bir bant genişliği artışı veya CPU yüklenmesi, SOC ekibi tarafından bir DDoS saldırısı veya ağ içinde yanal hareket gerçekleştiren bir fidye yazılımı (Ransomware) olarak hızlıca ilişkilendirilebilir.

---

## §14.1.2. Merkezi Log Yönetimi ve SIEM Altyapısı

Siber saldırıların tespiti ve adli analiz süreçlerinin (Forensics) temel ham maddesi loglardır. 

*   **Log Toplama Protokolleri:** 
    *   *Syslog:* Unix tabanlı sistemler, ağ cihazları ve firewall üniteleri için standartlaştırılmış log aktarım protokolüdür (UDP/TCP 514).
    *   *Windows Event Forwarding (WEF):* Windows sistemlerdeki olay kayıtlarının (Event Logs) ajan kurmaya gerek duymadan, Windows Remote Management (WinRM) protokolü üzerinden merkezi bir toplayıcıya (WEF Collector) güvenli ve şifreli şekilde aktarılmasıdır.
*   **Log Ayrıştırma (Parsing):** Ham log verilerinin (raw text), SIEM tarafından analiz edilebilmesi için yapılandırılmış alanlara (Örn: `Source_IP`, `Destination_Port`, `Username`) bölünmesi işlemidir. Regex tabanlı parser'lar vasıtasıyla loglar standartlaştırılır.
*   **SIEM ve Korelasyon Motoru:** SIEM (Security Information and Event Management) sistemleri, parsing işleminden geçmiş milyonlarca logu "Korelasyon (İlişkilendirme)" kuralları ile analiz eder. 
    *   *Örnek:* Bir kullanıcının Active Directory üzerinde 1 dakika içinde 10 kez başarısız oturum açma denemesi yapması (Event ID 4625) ve hemen ardından başarılı giriş yapması (Event ID 4624) durumunda SIEM otomatik olarak "Brute Force (Kaba Kuvvet) Saldırısı Başarılı" alarmı üretir.

---

## §14.1.3. Yasal Uyum ve Zaman Damgası (5651 Sayılı Kanun)

Türkiye'deki yasal düzenlemeler kapsamında kurumların ürettikleri logların doğruluğunu ve değiştirilmediğini ispatlamaları yasal bir zorunluluktur.

*   **5651 Sayılı Kanun:** "İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun" gereği, internet erişimi sağlayan kurumlar kullanıcılarının iç IP dağıtım loglarını (DHCP kayıtları) ve dış internet trafik loglarını (NAT kayıtları) saklamakla yükümlüdür.
*   **Zaman Damgası (Timestamping):** Saklanan log dosyalarının değiştirilmediğini (Bütünlük) yasal olarak kanıtlamak amacıyla, dosya özetinin (Hash - SHA-256) TÜBİTAK veya yetkili kurumların zaman damgası sunucuları ile imzalanması işlemidir. Bu işlemle logun belirli bir tarihte ve saatte mevcut olduğu ve o andan itibaren tek bir karakterinin bile değiştirilmediği ispatlanır.
*   **KVKK ve GDPR Uyumlu Loglama:** Kişisel verilerin korunması kanunları gereği, loglarda kullanıcıların hassas kişisel verileri (Örn: şifreler, kredi kartı numaraları, TC kimlik no) maskelenmeli veya şifrelenmeli; loglara erişim yetkileri ise sıkı bir şekilde sınırlandırılmalıdır.

---

## §14.1.4. SOAR ve Playbook Yönetimi

Siber güvenlik ekipleri her gün binlerce birbirine benzeyen güvenlik alarmıyla karşı karşıyadır. Bu durum analistlerde **Alarm Yorgunluğu (Alert Fatigue)** yaratarak gerçek tehditlerin kaçırılmasına yol açar.

*   **SOAR (Security Orchestration, Automation, and Response):** SOC içerisindeki farklı güvenlik araçlarını (Firewall, EDR, E-posta sunucusu vb.) API entegrasyonları sayesinde tek bir orkestrasyon merkezinden yöneten ve tekrarlayan süreçleri otomatize eden teknolojidir.
*   **Playbook (Otomasyon İş Akışı):** Belirli bir olay türü için sistemin atacağı adımları tanımlayan önceden programlanmış akış şemalarıdır.
*   *Örnek Bir Oltalama (Phishing) Müdahale Playbook'u:*
    1. Kullanıcı şüpheli bir e-postayı raporlar.
    2. SOAR, e-posta içeriğindeki dosyayı veya URL'i API üzerinden VirusTotal/Sandbox ortamına gönderir.
    3. Analiz sonucu zararlı bulunursa, SOAR ağ geçidinde (Firewall) ilgili IP ve alan adını otomatik engeller.
    4. E-posta sunucusuna bağlanarak o e-postayı alan diğer kullanıcıların kutularından mesajı otomatik olarak siler.
    5. Analiste hazır bir analiz raporu ve kapatma onayı sunarak süreci saniyeler içinde tamamlar.
