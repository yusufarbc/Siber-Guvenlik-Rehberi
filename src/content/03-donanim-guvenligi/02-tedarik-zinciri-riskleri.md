---
title: "Donanım Tedarik Zinciri Riskleri ve Sahte Bileşenler"
sidebar:
  order: 2
---

# Donanım Tedarik Zinciri Riskleri ve Sahte Bileşenler

Bir kurum, ağını ve yazılımlarını kusursuz korusa bile, satın aldığı donanımın üretim veya nakliye aşamasında tehlikeye atılmış olma ihtimali modern siber savaşın en sinsi yönlerinden biridir.

## §3.2.1. Donanımsal Truva Atları (Hardware Trojans)

Yazılımsal Truva atlarının aksine, Donanımsal Truva Atları çip tasarımı veya üretimi (dökümhaneler) sırasında doğrudan fiziksel devreye eklenen kötü niyetli yapılandırmalardır.

*   **Uyku Modu ve Tetikleyiciler:** Normal test süreçlerinden geçmek için yıllarca "uyku" modunda kalabilirler. Belirli bir sinyal (saat döngüsü, gizli bir ağ paketi) alındığında devreye girerler.
*   **Zararları:** Şifreleme anahtarlarını dışarı sızdırmak (side-channel), sistemi tamamen çökertmek (Kill-switch) veya yetki yükseltme kapısı açmak gibi yıkıcı etkilere sahiptir. Tespit edilmeleri x-ray mikroskopları gibi son derece pahalı cihazlar gerektirir.

---

## §3.2.2. Tedarik Zincirine Müdahale (Interdiction) ve Sahte Bileşenler

Güvenlik sorunları sadece üretim bandında değil, ürünün kuruma taşınması sırasında da ortaya çıkabilir.

### Tedarik Zincirine Müdahale (Supply Chain Interdiction)
*   Nakliye (kargo) sürecinde veya ara depolarda paketlerin gizlice açılarak cihazların içine casus yongalar (Örn: ağ kartına eklenmiş mikro dinleyiciler) veya değiştirilmiş firmware yüklenmesidir.
*   Gelişmiş Tehdit Aktörleri (APT'ler) ve devlet destekli istihbarat servisleri tarafından sıklıkla kullanılan bir yöntemdir.

### Sahte (Counterfeit) Bileşenler
*   Orijinal olmayan, daha düşük kaliteli veya elektronik atıklardan sökülmüş yongaların yeniden paketlenerek sıfır ve orijinalmiş gibi satılmasıdır.
*   Sadece sistemlerin aniden bozulmasına yol açmakla kalmaz, aynı zamanda içine gizlenmiş zararlı yazılımlar (arka kapılar) barındırabilir.

---

## §3.2.3. Güvenli Donanım Satın Alma ve OEM Doğrulama

Donanım tedarik zinciri risklerini en aza indirmek için sıkı satın alma ve doğrulama prosedürleri izlenmelidir.

*   **Yetkili Distribütörler (OEM):** Kritik altyapılar için ikinci el pazarlardan veya belirsiz üçüncü parti satıcılardan donanım alınmamalıdır. Ürünler doğrudan Üretici (OEM - Original Equipment Manufacturer) veya yetkili bayilerden temin edilmelidir.
*   **Kutu Bütünlüğü (Tamper-Evident Seals):** Cihaz teslim alındığında, ürün ambalajı üzerindeki güvenlik etiketlerinin (yırtıldığında iz bırakan veya renk değiştiren mühürler) sağlamlığı kontrol edilmelidir.
*   **Sürüm ve Ağırlık Kontrolü:** Orijinal üretim cihazının belirtilen ağırlığı ile gelen cihazın ağırlığı arasında miligram düzeyinde fark olması, içine yabancı bir modül eklendiğinin (interdiction) işareti olabilir.