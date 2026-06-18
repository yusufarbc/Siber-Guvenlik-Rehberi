---
title: "Endüstriyel Ağlarda Tehdit İzleme, Görünürlük ve Anomali Tespiti"
sidebar:
  order: 3
---

# Endüstriyel Ağlarda Tehdit İzleme, Görünürlük ve Anomali Tespiti

OT ağlarında görünürlük sağlamak, IT ağlarından çok daha hassas bir yaklaşım gerektirir. Endüstriyel protokoller standart ağ izleme araçları tarafından anlaşılmaz; aktif tarama yöntemleri ise hassas donanımları çökertebilir. Bu bölüm, OT ortamlarına özgü pasif izleme mimarisini ve anomali tespit stratejilerini kapsar.

## §12.3.1. OT Ağlarında Aktif Tarama Riskleri ve Pasif İzleme Zorunluluğu

### Aktif Taramanın OT'deki Tehlikesi

IT güvenliğinde `nmap`, `Nessus` veya `OpenVAS` ile periyodik ağ taraması standart bir uygulamadır. OT ortamında bu yaklaşım kritik riskler barındırır:

*   **Donanım Çökmesi:** Yaşlı PLC ve RTU cihazları, beklenmedik ağ paketleri karşısında donabilir veya yeniden başlayabilir. Bu durum doğrudan üretim duruşuna yol açar.
*   **Protokol Hassasiyeti:** Modbus, DNP3 ve Profinet gibi protokoller keşif paketlerine beklenmedik şekilde yanıt verebilir; hatalı komut olarak yorumlanma riski vardır.
*   **Deterministik Gecikme Bozulması:** Gerçek zamanlı kontrol döngülerinde tarama kaynaklı ağ yükü zamanlamayı bozabilir.

### Pasif İzleme (Passive Monitoring)

OT ağ görünürlüğü için altın standart, trafiği hiçbir şekilde etkilemeyen **pasif dinleme** yaklaşımıdır.

*   **SPAN Port / Port Mirroring:** Yönetilen switch üzerinde SPAN (Switched Port Analyzer) port yapılandırılarak tüm trafik bir sensöre kopyalanır.
*   **Network TAP (Test Access Point):** Inline konumlanan donanımsal TAP, trafiği passively kopyalar; kablo kesilmesi durumunda trafik akışını bozmaz. Pasif izleme için switch'ten daha güvenilirdir.
*   **Zero-Impact Asset Discovery:** Pasif analiz ile ağ üzerindeki cihazlar, protokoller ve bağlantılar trafiği analiz ederek haritalanır.

---

## §12.3.2. OT-Spesifik IDS Araçları ve Konumlandırma

### OT/ICS IDS Platformları

Geleneksel Snort/Suricata tabanlı IDS, OT protokollerini anlayamaz. OT ortamları için özel çözümler gereklidir:

*   **Nozomi Networks:** Pasif ağ izleme, OT varlık envanteri, anomali tespiti ve CVE eşleştirmesi. IT/OT konverjanslı görünürlük sunar.
*   **Claroty:** Endüstriyel protokol desteği geniş. Purdue modeli katmanlarındaki trafik görünürlüğü ve saldırı yolu analizi.
*   **Dragos Platform:** APT tehdit istihbaratı odaklı; ICS-spesifik tehdit grup davranışlarını (XENOTIME, SANDWORM) tespit eder.
*   **Microsoft Defender for IoT (eski adıyla CyberX):** Azure Sentinel entegrasyonuyla IT/OT olay korelasyonu.

### Zeek (Bro) ile OT Protokol Analizi

Açık kaynak Zeek, geliştirilmiş paket parse eklentileri sayesinde endüstriyel protokolleri analiz edebilir:
*   `zeek-modbus`, `zeek-dnp3`, `zeek-enip` paketleri ile Modbus, DNP3 ve EtherNet/IP trafiği parse edilip loglanır.
*   Log çıktısı Elasticsearch veya SIEM'e beslenerek IT SOC ile OT güvenlik olayları tek konsolda birleştirilir.

---

## §12.3.3. Endüstriyel Protokollerde Anormal Komut ve Anomali Tespiti

### Beyaz Liste (Whitelist) Tabanlı OT Trafik Analizi

OT ağları son derece deterministik ve tekrarlayan bir iletişim kalıbına sahiptir. Bu özellik güçlü bir anomali tespit zemini sunar:

*   Normal trafik kalıpları (hangi cihaz hangi cihaza, hangi komutla, hangi sıklıkla iletişim kuruyor) başlangıç öğrenme döneminde haritalanır.
*   Bu baseline'dan sapma anında uyarı üretir.

### Protokol Bazlı Anomali Örnekleri

**Modbus (TCP 502):**
*   Yalnızca okuma yapması beklenen bir sensörden gelen **yazma (Write Coil / Write Register)** komutu.
*   Normalde görülmeyen bir kaynak IP'den gelen Modbus isteği.
*   Geçersiz fonksiyon kodu veya beklenmedik kayıt adresi aralığı.

**DNP3:**
*   DNP3 `Direct Operate` veya `Select-Before-Operate` komutu beklenmedik bir kaynaktan geliyorsa.
*   Unsolicited response (talep edilmeden gönderilen veri) flood'u → DoS girişimi.

**IEC-104 (SCADA/Enerji):**
*   Anormal `ASDU (Application Service Data Unit)` tipi kombinasyonları.
*   Komut iletimi beklenmeyen zaman dilimlerinde (örn: gece mesai dışı saatlerinde).

**Profinet / EtherNet-IP:**
*   Programlanmış cihaz konfigürasyonuna (firmware yükleme) ait trafik mesai dışında veya yetkisiz kaynaktan geliyorsa.

### Entegrasyon ve Eskalasyon

*   OT anomali uyarıları IT SOC SIEM'e iletilirken OT bağlamı (hangi PLC, hangi üretim hattı) mutlaka eklenerek analistlerin hızlı triyaj yapması sağlanmalıdır.
*   Kritik OT alarmları için doğrudan saha mühendisi veya otomasyon ekibine eskalasyon prosedürü tanımlanmalıdır.
