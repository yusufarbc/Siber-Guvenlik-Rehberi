---
title: "Güvenli Cihaz İmhası ve Veri Yok Etme (Degaussing/Shredding)"
sidebar:
  order: 2
---

# Güvenli Cihaz İmhası ve Veri Yok Etme

Verinin yaşam döngüsü sadece üretim ve depolamadan ibaret değildir; verinin işi bittiğinde veya cihaz kullanım ömrünü tamamladığında güvenli bir şekilde yok edilmesi (sanitizasyon) en az veriyi korumak kadar önemlidir. Yanlış imha edilen donanımlar, kurumlar için büyük bir veri sızıntısı riskidir.

## §2.2.1. Veri Sanitizasyon Standartları

Veri sanitizasyonu, bir depolama medyasındaki verinin hiçbir laboratuvar koşulunda dahi geri getirilemeyecek şekilde silinmesi işlemidir. Bu işlem, endüstriyel olarak kabul görmüş belirli standartlara göre yapılır.

*   **NIST SP 800-88 (Medya Sanitizasyon Rehberi):** ABD Ulusal Standartlar ve Teknoloji Enstitüsü tarafından yayımlanan, medyanın türüne göre (Clear, Purge, Destroy) uygulanması gereken silme yöntemlerini belirten en yaygın küresel standarttır.
*   **DoD 5220.22-M:** ABD Savunma Bakanlığı (DoD) tarafından geliştirilen ve sektörde uzun yıllar standart kabul edilen bir yöntemdir. Disk üzerine rastgele karakterlerin üç ayrı geçişle (3-pass) yazılmasını ve verinin üzerine veri yazılarak silinmesini (Wipe) şart koşar.

---

## §2.2.2. Veri Yok Etme Teknikleri

Diskteki veriyi geri döndürülemez şekilde yok etmek için cihazın teknolojisine (Manyetik HDD vs Flash tabanlı SSD) göre farklı yöntemler seçilmelidir.

*   **Degaussing (Manyetik Silme):** HDD (Hard Disk Drive) ve manyetik teyp kartuşları gibi manyetik medya cihazlarının çok güçlü bir manyetik alana maruz bırakılarak verinin yok edilmesidir. Bu işlem, diskin üzerindeki manyetik düzeni tamamen bozduğu için disk bir daha asla kullanılamaz.
*   **Kriptografik Silme (Crypto-shredding):** Disk üzerinde her zaman şifreleme (örneğin BitLocker veya Self-Encrypting Drives - SED) kullanan sistemlerde geçerlidir. Veriyi silmek yerine, veriyi çözen şifreleme anahtarının (Encryption Key) güvenli bir şekilde yok edilmesidir. Anahtar kaybolduğunda, diskteki trilyonlarca bayt anında çözülemez anlamsız bir gürültüye dönüşür.

> [!CAUTION]
> **SSD ve Degaussing:** SSD'ler (Solid State Drives) veriyi manyetik plakalar yerine flaş yongalarda depoladığı için **Degaussing yöntemi SSD'lerde kesinlikle işe yaramaz.** SSD'ler için Kriptografik Silme veya Fiziksel İmha yöntemleri tercih edilmelidir.

---

## §2.2.3. Fiziksel Donanım İmhası (Shredding) ve E-Atık Yönetimi

Yazılımsal silme işlemlerinin yeterli görülmediği yüksek güvenlikli durumlarda, en garantili yöntem cihazın fiziksel olarak parçalanmasıdır.

*   **Shredding (Fiziksel Parçalama):** Sabit diskler, USB bellekler ve optik medyalar özel endüstriyel öğütücü (shredder) cihazlarına atılarak küçük metal parçalarına ayrılır. SSD yongalarının çok küçük olması nedeniyle, SSD'ler için parçalama ebatlarının 2 mm'ye kadar düşebilen özel öğütücüler kullanılması gerekir.
*   **Güvenli E-Atık Yönetimi:** İmha işleminin kurum bünyesinde veya sertifikalı (ISO 14001 ve ISO 27001) bir e-atık geri dönüşüm firması tarafından "İmha Sertifikası" (Certificate of Destruction) düzenlenerek, kayıt altına alınmış bir şekilde yapılması şarttır. Çevreye zarar vermeden metal ve elektronik bileşenlerin ayrıştırılması da bu sürecin bir parçasıdır.