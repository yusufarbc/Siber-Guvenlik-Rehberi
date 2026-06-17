---
title: "OT Sahasında Olay Müdahale (ICS Incident Response) ve Siber-Fiziksel Güvenlik"
sidebar:
  order: 4
---

# OT Sahasında Olay Müdahale (ICS Incident Response) ve Siber-Fiziksel Güvenlik

OT/ICS ortamlarında bir siber olay yalnızca veri kaybı veya sistem kesintisi anlamına gelmez; üretim duruşu, ekipman hasarı, çevre kirliliği ve insan can güvenliği tehdidi gibi fiziksel sonuçlar doğurabilir. Bu durum ICS olay müdahalesini geleneksel IT incident response'dan temelden farklı kılar: müdahale kararları teknik güvenlik uzmanlarının yanı sıra mühendisler, saha ekipleri ve üst yönetimle koordineli alınmalıdır.

## §12.4.1. Üretimin Fiziksel Durdurulma Kriterleri ve Siber-Fiziksel Süreçler

### Siber-Fiziksel Etkileşim

ICS sistemlerinde siber saldırılar fiziksel sonuçlar üretebilir:

*   **STUXNET (2010):** İran nükleer tesisindeki Siemens PLC'leri hedef alarak santrifüj hız değerlerini manipüle etti; fiziksel ekipman hasarına yol açtı.
*   **Ukraine Power Grid (2015/2016):** SCADA manipülasyonuyla elektrik dağıtım şebekeleri devre dışı bırakıldı.
*   **TRITON/TRISIS (2017):** Petrokimya tesisindeki Safety Instrumented System (SIS) hedef alındı; fiziksel patlamaya yol açacak hasarı ancak kazara meydana gelen sistem arızası önledi.

### Üretimin Durdurulma (Tripping) Kriterleri

Bir siber olayın varlığının tespiti durumunda aşağıdaki koşullarda manuel veya otomatik üretim durdurma protokolü aktive edilmelidir:

*   Safety Instrumented System (SIS) veya Emergency Shutdown System (ESD) üzerinde yetkisiz değişiklik tespit edildiğinde.
*   Kritik kontrol parametrelerinde (basınç, sıcaklık, akış hızı) açıklanamayan sapma veya saldırıya ait manipülasyon işareti görüldüğünde.
*   SCADA ekranındaki değerlerin fiziksel ölçüm araçlarından farklı olduğu anlaşıldığında (sensör sahtekârlığı).

> [!WARNING]
> Üretim durdurma kararı, hem siber güvenlik hem de süreç mühendisi yetkilendirilmesini gerektiren bir prosedüre bağlanmalıdır. Tek taraflı kararlar ek riskler doğurabilir.

---

## §12.4.2. OT Olay Müdahale Playbook'larının Hazırlanması

### IT IR ile OT IR Farkları

| Kriter | IT Incident Response | OT/ICS Incident Response |
|---|---|---|
| **Öncelik** | Gizlilik > Bütünlük > Kullanılabilirlik | Kullanılabilirlik > Güvenlik |
| **İzolasyon** | Hızlıca ağdan kopar | Koparma öncesi fiziksel süreç değerlendirmesi şart |
| **Kurtarma** | Sistem yeniden yükle/yedekten geri getir | Kontrol cihazı validasyonu ve process restart prosedürleri |
| **Ekip** | SOC, IT, Hukuk | SOC, IT, OT mühendis, saha ekibi, EHS (Sağlık, Güvenlik, Çevre) |

### Playbook Yapısı

OT-spesifik olay müdahale playbook'ları şu temel adımları içermelidir:

1.  **Tespit ve Triaj:** OT IDS uyarısı alındığında hangi cihaz/segment etkilendi? Üretim etkisi nedir?
2.  **İletişim Zinciri:** Kim bilgilendirilmeli? (SOC lideri → OT Mühendisi → Tesis Müdürü → CISO)
3.  **Sınırlandırma (Containment):** Etkilenen segment ağ politikasıyla izole edilebilir mi? Üretim devam edebilir mi?
4.  **Kanıt Koruma:** PLC log tamponu, Historian verisi ve ağ PCAP kaydedilmeli; cihaza dokunulmadan önce imaj alınmalıdır.
5.  **Kurtarma:** Bilinen iyi konfigürasyon yedeğinden restore; doğrulama testleri.
6.  **Ders Çıkarma:** Post-mortem raporu; benzer olayı önleyecek kontrol iyileştirmeleri.

---

## §12.4.3. Endüstriyel Adli Bilişim: Historian, PLC CPU ve SCADA Log Analizi

### Historian Log Analizi

Historian (OSIsoft PI, Aveva Historian), proses değerlerini yüksek frekansta kaydeder ve uzun süre saklar.

*   Saldırı öncesi, sırası ve sonrasındaki proses değerleri (sıcaklık, basınç, vana pozisyonu) zaman serisi olarak incelenir.
*   Anormal değer değişimleri, komut ile sensör geri bildirimi arasındaki zaman tutarsızlıkları saldırı izlerini ortaya çıkarır.
*   Historian log veritabanları adli imaj olarak yedeklenmeli ve orijinal veritabanı değiştirilmeden analiz yapılmalıdır.

### PLC CPU Log ve Firmware Analizi

*   Birçok modern PLC, CPU log tamponunda son yüzlerce komut ve durum değişimini saklar; bu tampon okunarak yetkisiz yazma komutları tespit edilebilir.
*   Firmware bütünlük doğrulaması: PLC firmware hash'i üretici tarafından sağlanan beklenen değerle karşılaştırılır.
*   PLC konfigürasyon dosyası (ladder diyagram, function block) yedeğiyle mevcut konfigürasyon karşılaştırılarak yetkisiz değişiklik tespiti yapılır.

### SCADA Log Analizi

*   SCADA yazılım logları (Wonderware, iFIX, Ignition): Kullanıcı girişleri, alarm geçmişi, komut geçmişi.
*   Windows Event Log (SCADA iş istasyonları): Logon/logoff, process creation (zararlı yazılım izi), USB bağlantısı.
*   VPN ve uzaktan erişim logları: OT ağına son 30 günde kim, ne zaman, nereden bağlandı?

### Delil Bütünlüğü

*   Tüm log kaynakları zaman damgası ile birlikte toplanmalı; NTP sunucusu tutarsızlıkları zaman çizelgesi analizini zorlaştırır.
*   Kritik sistemlerin güvenli merkezi log toplaması (syslog/CEF formatında SIEM'e iletim) daha önce yapılandırılmış olmalıdır; olay anında log kurulumu yapmaya çalışmak geç kalınmış olduğunun işaretidir.
