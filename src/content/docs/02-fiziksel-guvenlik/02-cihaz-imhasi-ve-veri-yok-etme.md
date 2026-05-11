---
title: "Güvenli Cihaz İmhası ve Veri Yok Etme"
sidebar:
  order: 2
---

# Güvenli Cihaz İmhası ve Veri Yok Etme

Verinin yaşam döngüsü, cihazın kullanım ömrü bittiğinde güvenli bir şekilde sonlandırılmalıdır.

## §2.2.1. Veri Sanitizasyon Standartları
*   **NIST SP 800-88:** Medya sanitizasyonu için küresel rehber.
*   **DoD 5220.22-M:** ABD Savunma Bakanlığı veri silme standardı.

## §2.2.2. Veri Yok Etme Teknikleri
*   **Degaussing:** Manyetik medyanın (HDD, teyp) yüksek güçlü manyetik alanla silinmesi.
*   **Crypto-shredding:** Veriyi şifreleyen anahtarın yok edilerek verinin okunamaz hale getirilmesi.
*   **Physical Shredding:** Donanımın fiziksel olarak parçalanması (Örn: SSD'lerin 2mm'lik parçalara ayrılması).

> [!CAUTION]
> **SSD vs HDD:** SSD'ler manyetik olmadığı için Degaussing yöntemi SSD'lerde işe yaramaz. SSD'ler için fiziksel imha veya kriptografik silme tercih edilmelidir.