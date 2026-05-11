---
title: "Çip (TPM), Anakart ve Firmware Güvenliği"
sidebar:
  order: 1
---

# Donanım Güvenliği ve Güven Kökü

Yazılım ne kadar güvenli olursa olsun, altındaki donanım tehlikeye girerse tüm sistem çöker.

## §3.1.1. Donanımsal Güven Kökü (Hardware Root of Trust)
Sistemin güvenilirliğini başlatan, değiştirilemez ve taklit edilemez donanım bileşenidir.

## §3.1.2. TPM 2.0 (Trusted Platform Module)
*   **Fonksiyonu:** Kriptografik anahtarları donanım seviyesinde saklar.
*   **Kullanım Alanları:** BitLocker sürücü şifreleme, kimlik doğrulama ve platform bütünlük ölçümü.

## §3.1.3. UEFI ve Secure Boot
*   **Secure Boot:** Bilgisayarın yalnızca üretici tarafından imzalanmış güvenilir yazılımlarla (OS Loader vb.) açılmasını sağlayarak bootkit'leri engeller.
*   **BIOS/Firmware Güvenliği:** Donanım seviyesinde yetkisiz müdahaleleri önlemek için yazma korumalı çipler.
