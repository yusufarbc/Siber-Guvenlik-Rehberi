---
title: "Bilgi Güvenliği Stratejisi, Temelleri (CIA) ve Maliyet Yönetimi (TCO)"
sidebar:
  order: 1
---

# Bilgi Güvenliği Stratejisi, Temelleri (CIA) ve Maliyet Yönetimi (TCO)

Bilgi güvenliği, günümüzde yalnızca teknik bir gereklilik değil, kurumların hayatta kalmasını sağlayan stratejik bir disiplindir. Bu bölümde, güvenliğin temel yapı taşlarını ve bu yapı taşlarının iş hedefleri ile maliyet yönetimi eksenindeki karşılıklarını inceleyeceğiz.

## §1.1.1. CIA Üçlüsü (Gizlilik, Bütünlük, Kullanılabilirlik)

Siber güvenliğin tüm stratejileri, evrensel olarak kabul görmüş **CIA Üçlüsü** (Confidentiality, Integrity, Availability) üzerine inşa edilir.

### 1. Gizlilik (Confidentiality)
Bilginin yetkisiz kişilerin eline geçmesini engellemeyi amaçlar. Sadece yetkilendirilmiş kullanıcıların ve sistemlerin veriye erişebilmesini garanti eder.
*   **Mekanizmalar:** Güçlü şifreleme algoritmaları (AES-256 vb.), Erişim Kontrol Listeleri (ACL), Çok Faktörlü Kimlik Doğrulama (MFA) ve Veri Sınıflandırma.

### 2. Bütünlük (Integrity)
Verinin, iletim veya saklama sırasında yetkisiz olarak değiştirilmesini, silinmesini veya bozulmasını önler. Bilginin doğruluğunu ve güvenilirliğini garanti eder.
*   **Mekanizmalar:** Kriptografik özet fonksiyonları (SHA-256), dijital imzalar, versiyon kontrolü ve dosya bütünlük izleme (FIM) sistemleri.

### 3. Kullanılabilirlik (Availability)
Yetkili kullanıcıların, ihtiyaç duydukları anda sistemlere, ağlara ve verilere kesintisiz bir biçimde erişebilmesini sağlar.
*   **Mekanizmalar:** Donanım ve hat yedekliliği (Redundancy), DDoS koruma sistemleri, yük dengeleyiciler (Load Balancers) ve düzenli test edilen Felaket Kurtarma (DR) planları.

---

## §1.1.2. Siber Güvenlik Stratejisinin İş Hedefleriyle Hizalanması

Siber güvenlik, iş operasyonlarına engel olan bir "maliyet merkezi" olarak değil, işin sürdürülebilirliğini sağlayan bir "iş ortağı" olarak konumlandırılmalıdır.

*   **Risk Odaklı Yaklaşım:** Güvenlik yatırımları, kurumun iş hedeflerini tehdit eden en yüksek riskli alanlara öncelik verilerek planlanmalıdır.
*   **İş Etki Analizi Entegrasyonu:** Güvenlik politikaları, kritik iş süreçlerinin kesintiye uğramasını önleyecek ve kurumun yasal uyumluluk (KVKK, GDPR vb.) gereksinimlerini karşılayacak şekilde tasarlanmalıdır.
*   **Güven Kurgusu:** Güvenli sistemler, müşterilerin kuruma olan bağlılığını ve pazar payını artıran bir rekabet avantajı unsuru olarak kullanılır.

---

## §1.1.3. Güvenlik Yatırımlarında Toplam Sahip Olma Maliyeti (TCO) ve Finansal Kavramlar

Güvenlik bütçesi planlanırken sadece lisans veya donanım alım maliyeti değil, ürünün tüm yaşam döngüsü boyunca getireceği mali yük hesaplanmalıdır.

### Toplam Sahip Olma Maliyeti (TCO - Total Cost of Ownership)
Bir güvenlik çözümünün satın alınmasından emekliye ayrılmasına kadar geçen süreçteki doğrudan ve dolaylı tüm maliyetlerin toplamıdır.
*   **Doğrudan Maliyetler:** Donanım, lisans ücretleri, bakım anlaşmaları.
*   **Dolaylı Maliyetler:** Personel eğitimleri, kurulum sırasındaki iş gücü kaybı, yönetim ve işletme giderleri.

### CapEx ve OpEx Dengesi
*   **Sermaye Giderleri (CapEx):** Fiziksel sunucular, donanımsal güvenlik duvarları gibi tek seferlik büyük altyapı yatırımlarını kapsar. Amortisman süreçlerine tabidir.
*   **Operasyonel Giderler (OpEx):** Bulut tabanlı güvenlik hizmetleri (SaaS, SECaaS) ve aylık/yıllık lisans abonelikleri gibi sürekli operasyonel harcamalardır. Bütçelemede esneklik sağlar.

---

## §1.1.4. Üretici Konsolidasyonu (Vendor Consolidation)

Birçok farklı üreticiden (best-of-breed) güvenlik ürünleri almak yerine, entegre tek bir üreticinin platform çözümlerini tercih etme eğilimidir.

### Avantajları
*   **Düşük Karmaşıklık:** Tek arayüzden yönetim sayesinde operasyonel verimlilik artar ve yönetim kolaylaşır.
*   **Daha İyi Entegrasyon:** Aynı üreticinin ürünleri birbirleriyle yerel olarak entegre çalıştığından tehdit tespit ve yanıt süreleri kısalır.
*   **Maliyet Tasarrufu:** Toplu lisans alımlarında daha yüksek indirimler elde edilebilir.

### Riskleri
*   **Tek Noktadan Başarısızlık (Single Point of Failure):** Üreticide yaşanacak bir güvenlik açığı veya hizmet kesintisi tüm güvenlik altyapısını çökertebilir.
*   **Bağımlılık (Vendor Lock-in):** Başka bir üreticiye veya teknolojiye geçiş yapmak son derece maliyetli ve karmaşık hale gelir.
