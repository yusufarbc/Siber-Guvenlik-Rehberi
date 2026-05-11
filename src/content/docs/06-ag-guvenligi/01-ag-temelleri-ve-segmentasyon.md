---
title: "Ağ İletişim Temelleri, DMZ ve Segmentasyon"
sidebar:
  order: 1
---

# Ağ Temelleri ve Segmentasyon

Modern ağ güvenliği, ağın nasıl çalıştığını anlamakla başlar. Bu bölümde ağ mimarileri, iletişim modelleri ve güvenliğin temeli olan segmentasyon konuları ele alınmaktadır.

## §6.1.1. Ağ Mimarileri ve İletişim Modelleri

Bilgisayar ağları, verinin küresel ölçekte paylaşılmasını sağlayan dinamik sistemlerdir. Bu sistemleri anlamak için standart referans modelleri kullanılır.

### OSI ve TCP/IP Referans Modelleri
Ağ iletişimini yedi soyut katmana ayıran **OSI (Open Systems Interconnection)** modeli, ağ sorunlarını sistematik bir şekilde çözmek için temel çerçevedir.

![OSI Referans Modeli](https://cdn-images-1.medium.com/max/800/1*FDaZNME-1NddEaSU4DPFhA.png)

*   **Katman 1-3 (Alt Katmanlar):** Fiziksel iletim, MAC adresleme (Data Link) ve IP yönlendirme (Network).
*   **Katman 4 (Taşıma):** TCP/UDP ile uçtan uca veri iletimi.
*   **Katman 7 (Uygulama):** Kullanıcının etkileşime girdiği HTTP, FTP, SMTP protokolleri.

### Veri Kapsülleme (Encapsulation)
Veri, katmanlar arasında ilerlerken her aşamada yeni bir başlık alır:
1.  **Segment** (Taşıma Katmanı)
2.  **Paket** (Ağ Katmanı)
3.  **Çerçeve/Frame** (Veri Bağlantı Katmanı)

## §6.1.2. Ağ Segmentasyonu ve VLAN

Ağ segmentasyonu, büyük bir ağı daha küçük ve izole alt ağlara bölerek güvenliği artırma işlemidir.

### VLAN (Virtual Local Area Network)
Fiziksel olarak aynı anahtara bağlı cihazları mantıksal olarak ayırma teknolojisidir. **IEEE 802.1Q** standardı ile her Ethernet çerçevesine bir VLAN etiketi (VLAN ID) eklenir.

*   **Güvenlik:** Bir segmentteki ihlalin diğerine yayılmasını (Lateral Movement) engeller.
*   **Performans:** Yayın (broadcast) trafiğini sınırlar.

### DMZ (Demilitarized Zone)
İnternetten erişilebilir olması gereken sunucuların (Web, Mail, DNS) iç ağdan izole edildiği tampon bölgedir.

![DMZ Mimarisi](https://cdn-images-1.medium.com/max/800/1*BZVwBIefZNbdIE6Sn8hDrQ.png)

> [!IMPORTANT]
> **Altın Kural:** DMZ'deki bir sunucunun iç ağa (LAN) bağlantı başlatmasına asla izin verilmemelidir.

## §6.1.3. Modern Veri Merkezi Tasarımı: Spine-Leaf
Geleneksel 3 katmanlı mimariden farklı olarak, veri merkezi içindeki "Doğu-Batı" (sunucudan sunucuya) trafiğini optimize etmek için kullanılan 2 katmanlı kumaş (fabric) yapısıdır.

## §6.1.4. Yönlendirme ve Anahtarlama Güvenliği
BGP ve OSPF gibi protokollerin güvenli yapılandırılması ve ağ cihazlarının sıkılaştırılması.
