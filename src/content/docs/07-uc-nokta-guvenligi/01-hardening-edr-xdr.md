---
title: "İşletim Sistemi Sıkılaştırma ve Uç Nokta Koruması (EDR/XDR)"
sidebar:
  order: 1
---

# Uç Nokta (Endpoint) Güvenliği

Sunucular, masaüstü bilgisayarlar ve dizüstü bilgisayarlar, saldırganların ağa giriş yapmak için en çok hedeflediği noktalardır.

## §7.1.1. İşletim Sistemi Sıkılaştırma (Hardening)
*   **Windows:** GPO (Grup Politikaları), BitLocker disk şifreleme ve LAPS (Yerel Yönetici Parolası Çözümü).
*   **Linux:** `sysctl` optimizasyonları, SELinux veya AppArmor profilleri.

## §7.1.2. EPP'den XDR'a Evrim
*   **EPP (Antivirüs):** İmza tabanlı bilinen zararlıları engeller.
*   **EDR (Endpoint Detection and Response):** Şüpheli davranışları kaydeder ve yanıt verir.
*   **XDR (Extended Detection and Response):** Uç nokta, ağ, bulut ve e-posta verilerini birleştirerek bütünsel bir savunma sağlar.

## §7.1.3. Yama Yönetimi (Patch Management)
Bilinen zafiyetlerin kapatılması için güncellemelerin düzenli ve test edilerek uygulanması.
