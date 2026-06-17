---
title: "Veri Maskeleme, Anonimleştirme ve Kuantum Sonrası Kriptografi (PQC)"
sidebar:
  order: 4
---

# Veri Maskeleme, Anonimleştirme ve Kuantum Sonrası Kriptografi (PQC)

Veri gizliliği yalnızca erişim kontrolüyle sağlanamaz; gerçek hayatta test, analitik ve üçüncü taraf entegrasyon süreçlerinde hassas veriye ihtiyaç duyulur. Veri maskeleme ve anonimleştirme bu boşluğu kapatır. Öte yandan, kuantum bilgisayarların olgunlaşmasıyla birlikte mevcut asimetrik kriptografi temelden sarsılacaktır. Bu bölüm her iki kritik konuyu bir arada ele alır.

## §5.4.1. Dinamik/Statik Veri Maskeleme ve Veri Anonimleştirme

### Statik Veri Maskeleme (SDM - Static Data Masking)
Üretim veritabanının bir kopyasını oluştururken hassas alanlar (TC kimlik, kredi kartı numarası, e-posta vb.) kalıcı olarak değiştirilir. Sonuçta oluşan veri seti geliştirme, test ve eğitim ortamlarında güvenle kullanılabilir.

*   Veriler gerçek format/uzunluk korunarak anonimleştirilir (Örn: `1234-5678-9012-3456` → `8472-XXXX-XXXX-1057`).
*   Veritabanı yabancı anahtar tutarlılığı korunur; ilişkisel bütünlük bozulmaz.

### Dinamik Veri Maskeleme (DDM - Dynamic Data Masking)
Kaynak veritabanındaki veri değiştirilmez; sorgu sonuçları kullanıcının yetki düzeyine göre gerçek zamanlı maskelenir.

*   Yetkisiz bir kullanıcı `SELECT * FROM musteri` sorgularında `Ad Soyad: J*** D***` gibi maskelenmiş sonuç görür.
*   Microsoft SQL Server, Oracle Database ve PostgreSQL (paketler aracılığıyla) DDM desteği sunar.
*   KVKK ve GDPR kapsamında üretime dokunmadan uyumluluk sağlar.

### Anonimleştirme Teknikleri
*   **Pseudonymization (Takma Adlandırma):** Kişisel tanımlayıcılar sahte tanımlayıcılarla değiştirilir; orijinal veriye geri dönüşüm mümkündür (yalnızca yetkili kişiler için).
*   **k-Anonimlik:** Bir kayıt, en az k-1 diğer kayıtla ayırt edilemez olacak şekilde işlenir.
*   **Diferansiyel Gizlilik (Differential Privacy):** Sorgu sonuçlarına matematiksel gürültü eklenerek bireysel verinin ortaya çıkması engellenir. Apple ve Google telemetri verilerinde kullanılır.

> [!NOTE]
> GDPR Madde 25 (Privacy by Design) kapsamında veri maskeleme ve anonimleştirme, kişisel veri işleme riskini azaltan teknik tedbir sayılır.

---

## §5.4.2. Kuantum Bilgisayarlar ve Klasik Asimetrik Kriptografinin Kırılganlığı

### "Harvest Now, Decrypt Later" Tehdidi
Yeterli kapasiteli bir kuantum bilgisayar bugün mevcut değil olsa da, saldırganlar şifreli trafiği şimdi toplayıp ileride kuantum bilgisayarla çözmeyi planlayabilir. Bu "şimdi topla, sonra çöz" (HNDL - Harvest Now Decrypt Later) stratejisi; kritik devlet sırları, uzun ömürlü sözleşmeler ve kişisel sağlık verileri için bugünden itibaren bir tehdit oluşturur.

### Kırılgan Algoritmalar

| Algoritma | Kullanım Alanı | Kuantum Riski |
|---|---|---|
| RSA-2048/4096 | Anahtar değişimi, imza | **Yüksek** (Shor algoritması) |
| ECC (P-256, P-384) | TLS, kod imzalama | **Yüksek** (Shor algoritması) |
| Diffie-Hellman | Anahtar değişimi | **Yüksek** (Shor algoritması) |
| AES-256 | Simetrik şifreleme | **Düşük** (Grover algoritması) |
| SHA-256/SHA-384 | Özet fonksiyonu | **Düşük** (Grover algoritması) |

---

## §5.4.3. NIST PQC Standartlarına Geçiş Mimarisi

2024 yılında NIST, Post-Quantum Cryptography (PQC) standartlarını nihai olarak yayımladı. Bu standartlar kuantum bilgisayarlara dayanıklı matematiksel problemler (kafes teorisi, hash fonksiyonları) üzerine inşa edilmiştir.

### NIST Seçilen PQC Algoritmaları (FIPS Standartları)
*   **ML-KEM (Kyber / FIPS 203):** Anahtar kapsülleme mekanizması (KEM). TLS ve SSH gibi anahtar değişim protokollerinde RSA/ECDH'nin yerine kullanılır.
*   **ML-DSA (Dilithium / FIPS 204):** Dijital imza algoritması. Kod imzalama ve sertifika altyapılarında kullanılır.
*   **SLH-DSA (SPHINCS+ / FIPS 205):** Hash tabanlı dijital imza. Alternatif imza algoritması.

### Geçiş Mimarisi: Hibrit Kriptografi
Geçiş döneminde hem klasik hem de PQC algoritmalarını birlikte kullanan **hibrit şifreleme** önerilir:
*   Örn: `X25519 + ML-KEM-768` — hem bugünkü hem yarınki saldırganlardan korur.
*   TLS 1.3 için IETF `hybrid-kem` taslakları aktif olarak standartlaştırılmaktadır.

### Kurumsal Geçiş Adımları
1.  **Kriptografik envanter:** Kullanılan tüm asimetrik algoritmaların ve sertifikaların envanteri çıkarılır.
2.  **Risk sıralaması:** Uzun ömürlü veriler (sağlık kayıtları, devlet sırları) önceliklendirilir.
3.  **Pilot geçiş:** Test ortamında hibrit TLS ve PQC kod imzalama uygulanır.
4.  **Kütüphane güncellemesi:** OpenSSL 3.x, BoringSSL ve AWS-LC gibi kütüphaneler PQC desteğiyle güncellenir.
5.  **PKI yenileme:** CA altyapısı PQC uyumlu sertifika istemini destekleyecek şekilde yapılandırılır.
