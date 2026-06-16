---
title: "Mobil Adli Bilişim (Mobile Forensics) ve Olay Müdahale"
sidebar:
  order: 4
---

# Mobil Adli Bilişim (Mobile Forensics) ve Olay Müdahale

Mobil cihazlar; konum geçmişi, mesajlaşma içerikleri, uygulama verileri ve sistem logları bakımından son derece zengin adli delil kaynağıdır. Kritik bir veri sızıntısı ya da zararlı yazılım enfeksiyonu sonrasında doğru imaj alma ve analiz prosedürleri hem delil bütünlüğü hem de olayın kapsamının tespiti açısından hayati önem taşır.

## §8.4.1. iOS ve Android Cihazlardan Adli İmaj ve Log Toplama

### Hazırlık Aşaması

Adli inceleme başlamadan önce:
*   Cihaz uçak moduna alınarak uzaktan silme (Remote Wipe) komutuna karşı korunmalıdır.
*   Faraday çantası kullanılarak ağ sinyali tamamen kesilmelidir.
*   Pil seviyesi gözlemlenmeli; gerekirse harici güç kaynağına bağlanmalıdır.
*   Zincir muhafazası (Chain of Custody) formu doldurularak cihazın adli incelemeye alındığı kayıt altına alınmalıdır.

### iOS Adli Veri Kaynakları

*   **iTunes/Finder Yedeği (Şifreli):** Uygulama verisi, SMS, iCloud anahtar zinciri (şifreli yedek) içerir.
*   **iCloud Yedekleri:** Cellebrite UFED veya Elcomsoft Phone Breaker ile iCloud kimlik bilgileri varsa çekilebilir.
*   **Syslog ve Crash Log'lar:** `/private/var/mobile/Library/Logs/` ve `/var/mobile/Library/Logs/CrashReporter/`
*   **Kısmi Fiziksel İmaj:** Checkm8 / checkra1n exploit'i ile desteklenen eski modellerde (A11 ve öncesi) fiziksel imaj alınabilir.

### Android Adli Veri Kaynakları

*   **ADB Backup / Logical Extraction:** `adb backup` ile uygulamalar ve verilerin bir kısmı çekilir; ancak kısıtlıdır.
*   **Rooted Cihaz:** Tam `/data/` partition erişimiyle uygulama veritabanları (SQLite), önbellek ve paylaşılan tercihler okunur.
*   **EDL (Emergency Download Mode):** Qualcomm çiplerde üretici imzalı araçlarla düşük seviye erişim imkânı sağlar.

---

## §8.4.2. Mantıksal ve Fiziksel İmaj Alma Teknikleri ve Delil Bütünlüğü

### İmaj Alma Yöntemleri

| Yöntem | Kapsam | Avantaj | Dezavantaj |
|---|---|---|---|
| **Mantıksal (Logical)** | Dosya sistemi, uygulama verileri | Hızlı, kullanıcı verisi odaklı | Silinmiş veri kurtarımı sınırlı |
| **Dosya Sistemi (File System)** | Tüm erişilebilir dosyalar | Silinmiş dosya izleri | Root veya jailbreak gerektirebilir |
| **Fiziksel (Physical)** | Ham NAND bellek imajı | Silinmiş veri kurtarımı, tam analiz | Zordur; şifrelenmiş cihazlarda sınırlı |
| **Bulut (Cloud)** | Yedek ve eşitlenen veriler | Cihaz olmadan analiz | Kimlik bilgisi veya mahkeme kararı gerektirir |

### Delil Bütünlüğü Standartları

*   İmaj alındıktan hemen sonra SHA-256 veya MD5 özeti hesaplanarak kayıt altına alınır.
*   Analiz her zaman imajın **kopyası** üzerinde yapılır; orijinal imaj salt okunur depolama ortamına yazılır.
*   Tüm işlemler zaman damgası ile belgelenir; bu kayıtlar dava sürecinde delil zincirinin (Chain of Custody) parçasıdır.
*   **ACPO (Association of Chief Police Officers) ilkeleri:** İnceleme boyunca orijinal cihazı veya verileri değiştirmemek, her değişikliği belgelemek temel kuraldır.

---

## §8.4.3. Şifreli Mesajlaşma Veritabanları, Uygulama Logları ve Sistem Artıklarının Analizi

### Mesajlaşma Uygulama Veritabanları

*   **Signal:** Veritabanı şifreli (SQLCipher). Anahtar cihaz PIN'inden türetilir; fiziksel imaj alınsa bile PIN bilinmeden okunamaz.
*   **WhatsApp (Android):** `/data/data/com.whatsapp/databases/msgstore.db` — rooted cihazda erişilebilir. Medya dosyaları ek olarak `WhatsApp/Media/` klasöründe bulunur.
*   **Telegram:** Secret Chat içerikleri cihaz dışına senkronize edilmez; yalnızca fiziksel erişimle elde edilebilir.
*   **iMessage (iOS):** `Library/SMS/sms.db` içinde saklanır. Şifreli yedeklerden çözülebilir.

### Sistem Artıkları (Artifacts)

*   **Location History:** iOS: `Library/Caches/locationd/`, Android: `com.google.android.gms` uygulama verisi.
*   **Browser Geçmişi:** SQLite veritabanları; Chrome `History`, Safari `History.db`.
*   **Kopyala-Yapıştır Geçmişi:** iOS Clipboard verileri adli önem taşır.
*   **WiFi Profilleri:** Daha önce bağlanılan ağlar konumsal analiz için kullanılabilir.

### Analiz Araçları

*   **Cellebrite UFED & Physical Analyzer:** Ticari ürün; geniş cihaz desteği, veritabanı parsing ve raporlama.
*   **Oxygen Forensic Detective:** Çok platform destekli; bulut hesabı çekme özelliği.
*   **Autopsy (Mobil Modüller):** Açık kaynak; Android imajları için temel analiz.
*   **iLEAPP / ALEAPP:** iOS ve Android için ücretsiz, açık kaynak artifact parser araçları.
