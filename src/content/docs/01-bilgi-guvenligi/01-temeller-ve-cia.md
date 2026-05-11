---
title: "Bilgi Güvenliği Stratejisi, Temelleri (CIA) ve Maliyet Yönetimi (TCO)"
sidebar:
  order: 1
---

# Bilgi Güvenliği Stratejisi ve CIA Temelleri

Bilgi güvenliği, günümüzde yalnızca teknik bir gereklilik değil, kurumların hayatta kalmasını sağlayan stratejik bir disiplindir. Bu bölümde, güvenliğin üzerine inşa edildiği temel felsefeyi ve bu felsefenin iş dünyasındaki maliyet karşılığını inceleyeceğiz.

## §1.1.1. CIA Üçgeni: Güvenliğin Üç Sac Ayağı

Siber güvenliğin tüm stratejileri, evrensel olarak kabul görmüş **CIA Üçgeni** (Gizlilik, Bütünlük, Erişilebilirlik) üzerine inşa edilir. Bu model, korunması gereken varlığın durumunu tanımlayan üç temel perspektif sunar.

### 1. Gizlilik (Confidentiality)
Bilginin yalnızca yetkili kişiler, süreçler veya cihazlar tarafından erişilebilir olmasıdır. Verilerin yetkisiz ifşasına karşı korunmasını hedefler.
*   **Mekanizmalar:** Şifreleme (Encryption), Erişim Kontrol Listeleri (ACL), Çok Faktörlü Doğrulama (MFA).

### 2. Bütünlük (Integrity)
Verinin, oluşturulduğu andan ulaştığı ana kadar yetkisiz bir şekilde değiştirilmemesi, silinmemesi veya bozulmamasıdır. Verinin doğruluğunu ve güvenilirliğini temsil eder.
*   **Mekanizmalar:** Kriptografik Özetleme (Hashing - SHA-256), Dijital İmzalar, Versiyon Kontrolü.

### 3. Erişilebilirlik (Availability)
Yetkili kullanıcıların, ihtiyaç duydukları anda sistemlere ve verilere kesintisiz bir şekilde erişebilmesidir.
*   **Mekanizmalar:** Yedekli Sistemler (Redundancy), DDoS Koruması, Felaket Kurtarma (DR) Planları.

> [!TIP]
> **Denge Sanatı:** Bu üç ilke arasında sürekli bir denge vardır. Örneğin, aşırı katı şifreleme gizliliği artırırken sistem performansını düşürerek erişilebilirliği olumsuz etkileyebilir.

---

## §1.1.2. Bilgi Güvenliği Stratejisi ve Yönetimi

Modern bir güvenlik stratejisi, "hiçbir zaman %100 güvenlik yoktur" gerçeğini kabul ederek **Risk Odaklı** bir yaklaşım benimser.

*   **Savunma Derinliği (Defense in Depth):** Tek bir güvenlik katmanına güvenmek yerine; fiziksel, teknik ve idari kontrollerden oluşan çok katmanlı bir kale savunması kurmak.
*   **Sıfır Güven (Zero Trust):** "Asla güvenme, her zaman doğrula" prensibiyle, ağ içindeki her isteği potansiyel bir tehdit olarak görüp sürekli doğrulama yapmak.

---

## §1.1.3. Maliyet Yönetimi ve Toplam Sahip Olma Maliyeti (TCO)

Güvenlik yatırımları planlanırken yalnızca ürünün etiket fiyatı değil, **Toplam Sahip Olma Maliyeti (TCO)** dikkate alınmalıdır.

| Maliyet Kalemi | Açıklama |
| :--- | :--- |
| **Sermaye Gideri (CapEx)** | Cihaz alımı, lisans ücretleri ve kurulum maliyetleri. |
| **Operasyonel Gider (OpEx)** | Bakım, enerji tüketimi, uzman personel maaşları ve eğitimler. |
| **Fırsat Maliyeti** | Yanlış yapılandırılmış güvenlik araçlarının iş süreçlerini yavaşlatması sonucu oluşan kayıp. |

### Yatırım Getirisi (ROI) ve ROSI
Güvenlikte ROI hesaplamak zordur çünkü kazanılan paradan çok, **engellenen zarar** (Avoided Loss) üzerinden hesaplanır. Buna **Güvenlik Yatırım Getirisi (ROSI)** denir.

$$ROSI = \frac{(Risk \times Etki) \times Savunma\_Verimliliği - Güvenlik\_Maliyeti}{Güvenlik\_Maliyeti}$$

Bu formül, bir güvenlik kontrolünün maliyetinin, engellediği potansiyel zarardan daha düşük olup olmadığını belirlememize yardımcı olur.
