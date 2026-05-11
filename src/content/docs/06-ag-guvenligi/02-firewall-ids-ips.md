---
title: "Yeni Nesil Güvenlik Duvarları (NGFW), IDS ve IPS"
sidebar:
  order: 2
---

# Ağ Savunma Sistemleri

Modern ağ savunması,# Firewall, IDS ve IPS Sistemleri

Ağ savunma teknolojileri, basit filtrelemeden bağlama duyarlı ve akıllı önleme sistemlerine doğru evrilmiştir.

## §6.2.1. Güvenlik Duvarları (Firewalls)

Güvenlik duvarları, ağ trafiğini önceden tanımlanmış kurallara göre filtreleyen temel savunma bileşenleridir.

### Durum Bilgili (Stateful) Denetim
Modern güvenlik duvarları, bağlantıların durumunu bir "durum tablosunda" izler. Meşru bir isteğe yanıt olarak gelmeyen paketler otomatik olarak engellenir.

### Yeni Nesil Güvenlik Duvarları (NGFW)
Geleneksel port tabanlı filtrelemenin ötesine geçer:
*   **Uygulama Farkındalığı:** Trafiği port numarasına göre değil, Facebook, Skype gibi uygulamalara göre tanır.
*   **DPI (Derin Paket Denetimi):** Paketlerin içeriğini (payload) inceleyerek gizli tehditleri bulur.
*   **Kimlik Entegrasyonu:** IP adresleri yerine Active Directory kullanıcılarına göre kural yazar.

### Web Uygulama Güvenlik Duvarı (WAF)
OSI 7. katmanında çalışır. Özellikle SQL Enjeksiyonu ve XSS gibi web tabanlı saldırılara odaklanır. NGFW genel ağ trafiğini korurken, WAF web sunucusunun "uzman" koruyucusudur.

## §6.2.2. Saldırı Tespit ve Önleme (IDS/IPS)

*   **IDS (Intrusion Detection System):** Pasif dinleme yapar, tehdit algıladığında uyarı üretir.
*   **IPS (Intrusion Prevention System):** Trafik akışı üzerindedir (in-line), tehdidi anında engeller.

### Tespit Yöntemleri
| Yöntem | Açıklama | Avantaj | Dezavantaj |
| :--- | :--- | :--- | :--- |
| **İmza Tabanlı** | Bilinen saldırı desenlerini arar. | Düşük yanlış alarm. | Sıfır gün (0-day) saldırılarını göremez. |
| **Anomali Tabanlı** | "Normal" davranıştan sapmaları arar. | Yeni tehditleri bulabilir. | Yüksek yanlış alarm (False Positive). |

## §6.2.3. SIEM ve Log Yönetimi
Farklı güvenlik cihazlarından gelen logların merkezi olarak toplanması, analiz edilmesi ve olaylar arasında korelasyon (ilişki) kurulması sürecidir.
pit eder ve uyarır (Pasif).
*   **IPS (Intrusion Prevention System):** Saldırıyı tespit eder ve engeller (Aktif).

## §6.2.3. DPI ve SSL Decryption
*   **DPI (Deep Packet Inspection):** Paketin başlığının yanı sıra içeriğinin de incelenmesi.
*   **SSL Decryption:** Şifreli trafiğin içine gömülmüş zararlıları yakalamak için trafiğin şeffaf bir şekilde açılması ve tekrar şifrelenmesi.
