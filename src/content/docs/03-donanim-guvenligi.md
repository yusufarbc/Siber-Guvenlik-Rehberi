---
title: "Donanım Güvenliği"
sidebar:
  label: "Donanım Güvenliği"
  order: 3
---

# Donanım Güvenliği

Bu bölümde, sistem bileşenlerinin donanımsal zafiyetlere, tedarik zinciri risklerine ve boot-level saldırılara karşı nasıl korunacağını inceleyeceğiz. Donanım tabanlı güvenlik kontrolleri, işletim sistemi seviyesindeki kontrolleri tamamlayarak "Root of Trust" (Güven Kökü) oluşturur.

## Güvenilir Platform Modülü (TPM)

Kriptografik anahtarların güvenli bir şekilde üretilmesi, saklanması ve sistemin donanımsal bütünlüğünün doğrulanması süreçlerinde TPM yongaları, donanım seviyesinde güvenliğin merkezinde yer alır.

![TPM Mimarisi](placeholder.png)

## Güvenli Önyükleme (Secure Boot)

Sistemin önyükleme (boot) süreci sırasında yalnızca dijital olarak imzalanmış ve güvenilirliği doğrulanmış yazılımların çalıştırılmasına izin vererek, bootkit ve rootkit gibi gelişmiş zararlı yazılımların engellenmesini sağlar.

![Güvenli Önyükleme Süreci](placeholder.png)

## Tedarik Zinciri Güvenliği

Donanım bileşenlerinin üretimden teslimata kadar olan süreçte manipüle edilmesini veya arka kapı (backdoor) yerleştirilmesini engellemek için uygulanan kontroller, modern siber tehditlere karşı kritik bir savunmadır.

![Tedarik Zinciri Risk Yönetimi](placeholder.png)
