---
title: "Ağ Güvenliği"
sidebar:
  label: "Ağ Güvenliği"
  order: 6
---

# Ağ Güvenliği ve Altyapı Mimarisi

Ağ güvenliği, verinin kaynaktan hedefe iletildiği fiziksel ve mantıksal yolların korunmasını kapsar. Modern bir ağ mimarisi, sadece bağlantı sağlamakla kalmaz, aynı zamanda saldırı yüzeyini daraltan ve tehditleri izole eden bir yapı sunmalıdır.

§

## Ağ Mimarileri ve Referans Modelleri

### OSI Referans Modeli
Uluslararası Standartlar Örgütü (ISO) tarafından geliştirilen OSI modeli, ağ iletişimini yedi soyut katmana ayırır. Her katman belirli bir işlevden sorumludur:
- **Katman 7 (Application):** HTTP, FTP, SMTP.
- **Katman 4 (Transport):** TCP (Güvenilir), UDP (Hızlı).
- **Katman 3 (Network):** IP Adresleme ve Yönlendirme.
- **Katman 2 (Data Link):** MAC Adresleri ve Anahtarlama (Switching).

### Veri Kapsülleme (Encapsulation)
Veri, üst katmandan alt katmana geçerken her aşamada bir başlık (header) eklenir. Bu sürece **Encapsulation** denir. PDU (Protokol Veri Birimi) isimleri katmana göre değişir: **Segment (L4) → Paket (L3) → Çerçeve/Frame (L2)**.

§

## Modern Veri Merkezi Mimarisi: Spine-Leaf

Geleneksel 3 katmanlı (Core-Aggregation-Access) mimari, günümüzün yoğun sunucular arası (East-West) trafiği için yetersiz kalmaktadır. Bu sorunu çözmek için **Spine-Leaf** mimarisi geliştirilmiştir.

- **Düşük Gecikme:** Herhangi iki sunucu arasındaki atlama (hop) sayısı sabittir (Leaf -> Spine -> Leaf).
- **ECMP (Equal-Cost Multipath):** Tüm yollar aktif olarak kullanılır, yedekli hatlar bloke edilmez.
- **Ölçeklenebilirlik:** Yeni anahtarlar eklenerek ağ kapasitesi yatayda kolayca artırılabilir.

§

## Temel Ağ Protokolleri

### 1. TCP vs UDP
- **TCP (Transmission Control Protocol):** Bağlantı odaklıdır. Üçlü el sıkışma (3-Way Handshake) ile güvenilir veri iletimi sağlar. Web ve dosya transferi için idealdir.
- **UDP (User Datagram Protocol):** Bağlantısızdır. "Ateşle ve unut" mantığıyla çalışır. Video akışı ve online oyunlar gibi hızın kritik olduğu yerlerde kullanılır.

### 2. ARP ve DHCP
- **ARP (Address Resolution Protocol):** IP adreslerini fiziksel MAC adreslerine çözer. L2 ve L3 katmanları arasındaki köprüdür.
- **DHCP (Dynamic Host Configuration Protocol):** Cihazlara otomatik IP adresi, ağ geçidi ve DNS bilgilerini atar. DORA (Discover, Offer, Request, Acknowledge) süreciyle çalışır.

§

## Ağ İzleme ve Yönetimi: FCAPS Modeli

Ağ yönetiminin karmaşıklığını sistematik olarak ele almak için ISO tarafından geliştirilen **FCAPS** modeli kullanılır:
- **Fault (Hata):** Hataların tespiti ve giderilmesi.
- **Configuration (Yapılandırma):** Envanter ve ayarların yönetimi.
- **Accounting (Muhasebe):** Kaynak kullanımının ölçülmesi.
- **Performance (Performans):** Gecikme ve bant genişliği izleme.
- **Security (Güvenlik):** Ağ varlıklarına erişim kontrolü.

Modern ağ yönetiminde bu süreçler **SNMPv3** (güvenli izleme) ve **NETCONF** (programlanabilir yapılandırma) protokolleri ile yürütülür.

