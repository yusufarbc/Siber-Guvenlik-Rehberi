---
title: "Mobil Tehdit Algılama (MTD) ve Ağ Tabanlı Tehditler"
sidebar:
  order: 2
---

# Mobil Tehdit Algılama (MTD) ve Ağ Tabanlı Tehditler

MDM ve MAM çözümleri cihaz politikası ve uygulama yönetimini kapsar; ancak gelişmiş tehdit aktörlerinin cihaz üzerinde gerçekleştirdiği ağ tabanlı saldırıları tespit etmek için yetersiz kalır. Mobil Tehdit Savunması (MTD), bu boşluğu cihaz içi davranışsal analiz ve ağ anomali tespiti ile kapatır.

## §8.2.1. MTD Mimari Konumu ve EDR Entegrasyonu

### MTD Nedir?

MTD (Mobile Threat Defense), mobil cihazları üç tehdit katmanında koruyan güvenlik teknolojisidir:
*   **Cihaz Düzeyi:** Root/jailbreak tespiti, işletim sistemi açığı, zararlı yapılandırma profilleri.
*   **Uygulama Düzeyi:** Zararlı uygulama davranışı, veri sızdırma, API kötüye kullanımı.
*   **Ağ Düzeyi:** MitM tespiti, sahte SSL sertifikası, DNS manipülasyonu.

**Önemli MTD Ürünleri:** Lookout, SentinelOne Mobile, Microsoft Defender for Endpoint (iOS/Android), Zimperium zIPS.

### Mimari Konum ve MDM Entegrasyonu

MTD ajanı cihaza arka plan servisi olarak kurulur. MDM (Intune, Jamf, VMware Workspace ONE) ile entegrasyon şu senaryoları etkinleştirir:
*   MTD yüksek risk skoru döndürdüğünde MDM'e sinyal gönderilir.
*   MDM Conditional Access politikasıyla riskli cihazın kurumsal kaynaklara (e-posta, VPN) erişimi otomatik bloke edilir.
*   Olay kaydı SIEM/SOAR'a iletilerek merkezi olay müdahalesi tetiklenir.

### XDR Entegrasyonu

Modern XDR platformları (Microsoft Defender XDR, Palo Alto Cortex XDR) mobil endpoint telemetrisini uç nokta, ağ ve bulut telemetrisiyle korelasyona alır. Bu sayede:
*   Kurumsal ağa bağlı bir mobil cihazın aynı anda şüpheli davranış sergilemesi çapraz-domain uyarısı üretir.
*   Otomatik müdahale playbook'ları (cihaz karantinası, kullanıcı bildirimi) tetiklenebilir.

---

## §8.2.2. IMSI Catcher (Sahte Baz İstasyonu) Saldırıları ve Savunma

### IMSI Catcher / Stingray

IMSI Catcher, mobil cihazları meşru baz istasyonu zannıyla kendisine bağlatan ve trafiği ortadaki adam olarak kayıt altına alan elektronik gözetleme aygıtıdır.

*   Cihaz, güçlü sinyal yayan en yakın "baz istasyonu"na otomatik bağlanır — IMSI Catcher bu özelliği istismar eder.
*   4G/LTE ağlarında karşılıklı kimlik doğrulama zorunlu değildir; cihaz sadece ağı doğrular, ağ cihazı doğrulamaz.
*   **5G SA (Standalone) Mimarisinde İyileştirme:** 5G SA ile SUPI (kalıcı abone kimliği) artık şifreli SUCI olarak iletilir, bu IMSI yakalamayı zorlaştırır.

### Uç Nokta Koruma Stratejileri

*   MTD araçları anormal baz istasyonu davranışını (sinyal gücü değişimleri, şifreleme zayıflama) tespit edebilir.
*   Kurumsal cihazlarda VPN tüneli zorunlu tutulmalıdır; IMSI Catcher trafiği ele geçirse bile şifreli tünel sayesinde içerik okunamaz.
*   SIM PIN etkinleştirilmeli ve SIM değiştirme (SIM Swap) saldırılarına karşı operatör seviyesinde port-freeze talep edilmelidir.

---

## §8.2.3. Açık Wi-Fi Ağlarında MitM Tespiti ve Davranışsal Analiz

### Tehditleri

*   **Evil Twin (Kötü İkiz) AP:** Meşru bir Wi-Fi ağının adını ve BSSID'sini taklit eden sahte erişim noktası.
*   **SSL Stripping:** Saldırgan, HTTPS bağlantıyı HTTP'ye düşürerek şifrelenmemiş trafiği okur.
*   **Captive Portal Kimlik Avı:** Sahte Wi-Fi portalları kurumsal kimlik bilgilerini toplar.

### Cihaz İçi Davranışsal Analiz

MTD ajanları aşağıdaki ağ anomalilerini gerçek zamanlı izler:
*   Sertifika geçerlilik zinciri hatası veya beklenmeyen sertifika değişimi.
*   ARP tablosunda anormal çoklama (ARP spoofing belirtisi).
*   DNS yanıtlarının beklenen IP aralığı dışında olması.
*   Bağlı AP'nin BSSID/SSID kombinasyonunun daha önce görülen güvenli AP'lerle çelişmesi.

### Kurumsal Politika

*   Cihazlara "Always-On VPN" zorunlu tutulmalı; Wi-Fi güvenilir olmasa bile tüm trafik tünel üzerinden geçmelidir.
*   Açık (şifrelemesiz) Wi-Fi ağlarına otomatik bağlanma MDM politikasıyla devre dışı bırakılmalıdır.
