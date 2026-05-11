---
title: "Sıfır Güven (Zero Trust) Mimarisi ve Cihaz İzolasyonu"
sidebar:
  order: 3
---

# Sıfır Güven (Zero Trust) Mimarisi

Geleneksel "kale-hendek" (Castle-and-Moat) güvenlik modeli artık yeterli değildir. Sıfır Güven, ağın içindeki hiçbir varlığın varsayılan olarak güvenilir olmadığını kabul eder.

## §4.3.1. Temel Prensipler
*   **Asla Güvenme, Daima Doğrula:** Her erişim isteği; kimlik, konum ve cihaz sağlığı kontrol edilerek onaylanır.
*   **En Az Yetki (Least Privilege):** Kullanıcılara sadece işlerini yapmaları için gereken minimum yetki verilir.
*   **Mikro-Segmentasyon:** Ağın küçük parçalara bölünerek saldırganın ağ içindeki yatay hareketinin (Lateral Movement) engellenmesi.

## §4.3.2. VPN'den ZTNA'e Geçiş
Geleneksel VPN tüm ağa erişim verirken, **ZTNA (Zero Trust Network Access)** sadece belirli uygulamalara erişim tüneli açar.

## §4.3.3. Cihaz Sağlık Kontrolü (Device Posture)
Cihazın antivirüsünün güncel olup olmadığı, işletim sistemi yamaları ve disk şifreleme durumu kontrol edilmeden erişim izni verilmez.