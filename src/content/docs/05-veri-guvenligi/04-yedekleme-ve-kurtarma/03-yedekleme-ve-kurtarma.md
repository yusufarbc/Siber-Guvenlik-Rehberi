---
title: "Yedekleme Stratejileri ve Değiştirilemez (Immutable) Kurtarma"
sidebar:
  order: 3
---

# Yedekleme Stratejileri ve Değiştirilemez Kurtarma

Ne kadar güçlü güvenlik duvarlarına veya savunma mekanizmalarına sahip olursanız olun, bir fidye yazılımı (Ransomware) saldırısında veya doğal bir felakette kurumun hayatını kurtaracak olan tek şey **sağlam ve test edilmiş yedeklerdir.**

## §5.3.1. Yedekleme Mimarisi ve 3-2-1 Kuralı

Veri kaybına karşı dünya genelinde standart kabul edilen en temel strateji "3-2-1 Kuralı"dır. Gelişen tehditlere karşı bu kural günümüzde **3-2-1-1-0** olarak güncellenmiştir.

*   **3 (Üç Kopya):** Kurumsal verinin en az 3 farklı kopyası (1 canlı orijinal veri + 2 yedek) bulunmalıdır.
*   **2 (İki Farklı Medya):** Yedekler, birbirinden bağımsız 2 farklı ortamda (örneğin biri NAS/SAN disk ünitesinde, diğeri Manyetik Teyp veya Bulut deposunda) saklanmalıdır. Bu sayede bir medya arızalandığında diğeri hayatta kalır.
*   **1 (Bir Lokasyon Dışı):** Felaketlere (yangın, deprem) karşı, yedeğin en az 1 kopyası coğrafi olarak farklı bir lokasyonda veya bulutta barındırılmalıdır.
*   **1 (Bir Değiştirilemez veya Çevrimdışı):** Yedeğin 1 kopyası mutlak surette internetten kopuk (Air-Gapped) veya şifrelenemez/silinemez (Immutable) formatta olmalıdır.
*   **0 (Sıfır Hata):** Alınan yedeklerin hatasız şekilde ve planlanan sürelerde (RTO) tam olarak kurtarılabileceği düzenli kurtarma testleriyle doğrulanmalıdır.

---

## §5.3.2. Fidye Yazılımlarına Karşı Değiştirilemez (WORM/Immutable) ve Air-Gapped Depolar

Fidye yazılımları, sadece canlı verileri şifrelemekle kalmaz; akıllı saldırganlar öncelikle şirketin yedekleme sunucularını hedef alarak yedekleri siler veya şifreler.

### Değiştirilemez (Immutable) Yedekler
*   Yedekleme yazılımının, bir kez yazılan verinin belirlenen süre boyunca (örneğin 30 gün) sistem yöneticisi (root/admin) dahi olsa **kimse tarafından değiştirilememesi veya silinememesi** prensibidir.
*   Bu yapı **WORM (Write Once, Read Many - Bir Kez Yaz, Çok Kez Oku)** mimarisi üzerine kurulur. Saldırgan en yetkili şifreyi ele geçirse bile yedeği kriptolayamaz.

### Air-Gapped (Hava Boşluklu) Ağlar
*   Yedeklerin bulunduğu ortamın, kurumun ana ağından veya internetten tamamen fiziksel (kabloların sökülmesi vb.) veya güçlü bir mantıksal izolasyonla koparılmış olmasıdır. Ağ erişimi olmayan bir yedeğe hacker'ın uzaktan sızma ihtimali sıfırdır. Teyp kartuşları (Tape) bu yöntem için en güvenilir araçlardır.

---

## §5.3.3. Yedeklerin Bütünlük Doğrulaması ve Kurtarma Testleri

Sadece yedeğin alınmış olması yeterli değildir. Yedeklerin içindeki verinin sağlam olduğundan emin olunmalıdır.

*   **Bütünlük Doğrulaması:** Yedekleme yazılımları, alınan yedeğin bozulmadığından emin olmak için düzenli olarak Hash kontrolü yapmalıdır (Bit rot gibi medya bozulmalarına karşı).
*   **Kurtarma Testleri (Recovery Drills):** Yedeklerin gerçekten kullanılamaz hale gelen bir sistemi ne kadar sürede geri getireceği (RTO) pratik olarak test edilmelidir. Test edilmemiş bir yedek, aslında alınmamış bir yedektir.