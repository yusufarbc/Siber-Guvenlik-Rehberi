---
title: "Gelişmiş Ağ Saldırı Vektörleri ve Savunma"
sidebar:
  order: 3
---

# Ağ Saldırıları ve Korunma Yöntemleri

Ağ seviyesindeki saldırılar, altyapıyı devre dışı bırakmayı veya veriyi çalmayı hedefler.

## §6.3.1. DDoS Saldırıları ve Savunma
*   **SYN Flood:** TCP el sıkışma sürecini suistimal ederek kaynak tüketimi.
*   **SYN Cookie:** Sunucuyu meşgul etmeden SYN paketlerini doğrulamak için kullanılan savunma mekanizması.

## §6.3.2. Katman 2 Saldırıları
*   **ARP Spoofing/Poisoning:** Yerel ağda trafiği saldırganın üzerine çekme.
*   **DAI (Dynamic ARP Inspection):** Sadece güvenilir kaynaklardan gelen ARP yanıtlarını kabul eden switch özelliği.

## §6.3.3. Ortadaki Adam (MitM) ve Oturum Çalma
Şifrelenmemiş trafiğin dinlenmesi veya aktif oturumların ele geçirilmesi. Korunma yolu her zaman **uçtan uca şifreleme** kullanmaktır.