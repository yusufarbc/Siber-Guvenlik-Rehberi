---
title: "Gelişmiş Ağ Saldırı Vektörleri ve Savunma"
sidebar:
  order: 3
---

# Ağ Saldırıları ve Korunma Yöntemleri

Ağ saldırıları, altyapının erişilebilirliğini hedefleyen (DoS/DDoS) veya verinin gizliliğini bozan (MitM) çeşitli tekniklerden oluşur.

## §6.3.1. DoS ve DDoS Saldırıları

Saldırıların amacı, hedef sistemi meşru kullanıcılara hizmet veremez hale getirmektir.

### Saldırı Sınıflandırması
*   **Hacimsel (Volumetric) Saldırılar:** Bant genişliğini tüketmeyi hedefler (örn. UDP Flood, DNS Amplification).
*   **Protokol Saldırıları:** Sunucu kaynaklarını (CPU/RAM) veya ağ cihazlarının kapasitesini hedefler (örn. SYN Flood).
*   **Uygulama Katmanı (Layer 7) Saldırıları:** Web sunucusunun belirli fonksiyonlarını aşırı yüklemeyi hedefler (örn. HTTP Flood, Slowloris).

### Savunma Mekanizmaları
*   **Anycast Yönlendirme:** Trafiği coğrafi olarak farklı veri merkezlerine dağıtarak yükü hafifletir.
*   **Scrubs (Temizleme Merkezleri):** Trafik hedefe ulaşmadan önce kötü niyetli paketlerin filtrelendiği özel altyapılar.
*   **Rate Limiting:** IP başına istek sayısının sınırlandırılması.

## §6.3.2. Katman 2 (Veri Bağlantı) Saldırıları ve Savunma

Yerel alan ağlarında (LAN) fiziksel erişim sağlayan saldırganlar, switch'lerin çalışma mantığını suistimal edebilir.

| Saldırı Türü | Açıklama | Savunma (Switch Özelliği) |
| :--- | :--- | :--- |
| **MAC Flooding** | Switch'in MAC tablosunu sahte adreslerle doldurur. | **Port Security** |
| **ARP Spoofing** | Kendini hedef cihazın IP adresine sahipmiş gibi gösterir. | **Dynamic ARP Inspection (DAI)** |
| **DHCP Starvation** | Tüm IP havuzunu tüketerek hizmeti durdurur. | **DHCP Snooping** |

## §6.3.3. Ortadaki Adam (MitM) ve Koklama (Sniffing)

Saldırganın istemci ile sunucu arasındaki trafiği gizlice dinlemesi veya değiştirmesidir.
*   **Sniffing:** Wireshark gibi araçlarla şifresiz (HTTP, FTP, Telnet) trafiğin yakalanması.
*   **HSTS:** İletişimin en baştan HTTPS olmasını zorunlu kılarak SSL Strip saldırılarını engeller.