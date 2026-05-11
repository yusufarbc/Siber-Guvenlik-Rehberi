---
title: "Ağ İletişim Temelleri, DMZ ve Segmentasyon"
sidebar:
  order: 1
---

# Ağ Güvenliğinin Temelleri

Ağ güvenliği, verinin bir noktadan diğerine taşınırken izlediği yolların korunmasıdır.

## §6.1.1. OSI ve TCP/IP Modelleri
*   **OSI Katmanları:** Fiziksel'den Uygulama'ya 7 katmanlı yapı.
*   **TCP 3'lü El Sıkışma:** SYN -> SYN-ACK -> ACK akışıyla bağlantı kurulumu.

## §6.1.2. Ağ Segmentasyonu ve VLAN
Büyük bir ağı küçük, birbirinden izole parçalara bölerek güvenliği artırmak.
*   **VLAN:** Fiziksel anahtarlar üzerinde mantıksal ağlar oluşturma.
*   **DMZ (Demilitarized Zone):** Web sunucuları gibi dış dünyaya açık sistemlerin iç ağdan izole edildiği tampon bölge.

## §6.1.3. Yönlendirme ve Anahtarlama Güvenliği
BGP ve OSPF gibi protokollerin güvenli yapılandırılması ve ağ cihazlarının sıkılaştırılması.
