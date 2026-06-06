---
title: "Yönetişim, Risk, Uyumluluk (GRC) ve İş Sürekliliği Planlaması (BCP/BIA)"
sidebar:
  order: 2
---

# Yönetişim, Risk, Uyumluluk (GRC) ve İş Sürekliliği Planlaması (BCP/BIA)

Yönetişim, risk yönetimi ve uyumluluk (GRC), organizasyonun güvenlik hedeflerinin yasal ve operasyonel çerçevede yönetilmesini sağlar. İş sürekliliği ise olağanüstü durumlarda kurumun faaliyetlerini sürdürebilme yeteneğini belirler.

## §1.2.1. Risk Değerlendirme Çerçeveleri ve Tehdit Modelleme

Kurumlar, varlıklarını korumak için sistematik risk değerlendirme metodolojileri ve tehdit modelleme yaklaşımları kullanır.

*   **NIST RMF (Risk Management Framework):** Bilgi sistemlerinin güvenliğini ve gizliliğini yönetmek için 7 adımdan (Hazırlan, Tanımla, Seç, Uygula, Değerlendir, Yetkilendir, İzle) oluşan yapısal süreç.
*   **ISO 27005:** Bilgi güvenliği risk yönetimi için uluslararası standart. ISO 27001 ile tam uyumlu olup risklerin tanımlanması, analizi, değerlendirilmesi ve işlenmesi adımlarını yönetir.
*   **STRIDE Tehdit Modelleme:** Microsoft tarafından geliştirilen, yazılım veya sistem tasarımlarındaki güvenlik açıklarını bulmaya yarayan metodoloji:
    *   **S**poofing (Kimlik Taklidi) -> Çözüm: Güçlü kimlik doğrulama.
    *   **T**ampering (Veri Kurcalama) -> Çözüm: Bütünlük kontrolleri (hashing, ACL).
    *   **R**epudiation (İnkar Etme) -> Çözüm: Loglama ve dijital imzalar.
    *   **I**nformation Disclosure (Bilgi İfşası) -> Çözüm: Şifreleme ve yetki kontrolleri.
    *   **D**enial of Service (Hizmet Engelleme) -> Çözüm: Filtreleme, yedeklilik ve rate limiting.
    *   **E**levation of Privilege (Yetki Yükseltme) -> Çözüm: En az ayrıcalık ilkesi ve girdi doğrulama.

---

## §1.2.2. Yasal Uyumluluk: KVKK, GDPR ve 5651 Sayılı Kanun

Kurumlar, faaliyet gösterdikleri coğrafyalardaki yasal yükümlülüklere uymak zorundadır.

*   **KVKK (Kişisel Verilerin Korunması Kanunu):** Türkiye Cumhuriyeti sınırları içindeki kişisel verilerin işlenmesi, saklanması ve aktarılmasını düzenler. Veri sorumlularına idari ve teknik tedbir alma yükümlülüğü getirir.
*   **GDPR (General Data Protection Regulation):** Avrupa Birliği vatandaşlarının verilerini işleyen tüm kurumları kapsayan, dünya genelinde etkiye sahip kişisel veri koruma tüzüğü. Ağır para cezaları ve "unutulma hakkı" gibi katı haklar içerir.
*   **5651 Sayılı Kanun:** Türkiye'de internet ortamında yapılan yayınların düzenlenmesi ve bu yayınlar yoluyla işlenen suçlarla mücadele edilmesini kapsar. Kurumların internet erişim loglarını en az 2 yıl boyunca saklamasını ve bu logların doğruluğunu **zaman damgası** (hash değerinin zaman bilgisiyle kriptografik olarak imzalanması) ile garanti etmesini zorunlu kılar.

---

## §1.2.3. İş Etki Analizi (BIA) ve Metrikleri

İş Etki Analizi (BIA - Business Impact Analysis), olası bir kesintinin kurumsal süreçler üzerindeki finansal ve operasyonel etkilerini ölçer.

*   **RTO (Recovery Time Objective - Kurtarma Süresi Hedefi):** Bir sistem veya iş sürecinin kesinti sonrası maksimum ne kadar sürede tekrar çalışır hale getirilmesi gerektiğini belirten süre.
*   **RPO (Recovery Point Objective - Kurtarma Noktası Hedefi):** Kabul edilebilir maksimum veri kaybı miktarını zaman cinsinden ifade eden metrik (Örn: RPO = 4 saat ise kesintiden en fazla 4 saat öncesine ait veriler kaybedilebilir).
*   **MTD / MAO (Maximum Tolerable Downtime / Maximum Acceptable Outage):** Kurumun bir iş sürecinin kesintiye uğramasına tahammül edebileceği en uzun süredir. Bu süre aşıldığında kurum telafi edilemez zararlarla karşılaşır. ($RTO \le MTD$ olmalıdır).

---

## §1.2.4. Felaket Kurtarma (Disaster Recovery - DR) Sitesi Tasarımları

Fiziksel veya siber bir felaket durumunda sistemlerin yedek lokasyondan ayağa kaldırılması için üç temel site mimarisi tercih edilir:

*   **Hot Site (Sıcak Merkez):** Birincil merkezle gerçek zamanlı (senkron/asenkron) veri kopyalaması yapan, tam donanımlı ve anında (dakikalar içinde) devreye girebilen yedek merkezdir. Maliyeti en yüksektir.
*   **Warm Site (Ilık Merkez):** Ağ bağlantıları ve donanımları hazır olan ancak verilerin geri yüklenmesi (yedekten dönülmesi) veya son yapılandırmaların yapılması için saatler ya da günler gerektiren merkezdir.
*   **Cold Site (Soğuk Merkez):** Sadece fiziksel altyapıya (elektrik, iklimlendirme, yükseltilmiş taban) sahip olan, donanım ve verilerin felaket anında taşınıp kurulmasını gerektiren, devreye alınması haftalar sürebilen en ucuz alternatiftir.
