---
title: "Yedekleme Stratejileri ve Değiştirilemez Kurtarma"
sidebar:
  order: 3
---

# Yedekleme ve Felaket Kurtarma

Yedekleme, bir siber saldırı veya donanım arızası sonrası "son kale"dir.

## §5.3.1. 3-2-1-1-0 Kuralı
*   **3:** Verinin en az 3 kopyası olmalı.
*   **2:** En az 2 farklı medya türünde (Disk, Bulut, Teyp).
*   **1:** En az 1 kopya farklı bir coğrafi lokasyonda.
*   **1:** En az 1 kopya çevrimdışı (Air-gapped) veya değiştirilemez (Immutable).
*   **0:** Yedekler hatasız (0 hata) kurtarılabilir olmalı.

## §5.3.2. Değiştirilemez (Immutable) Yedekler
Fidye yazılımlarının (Ransomware) yedekleri silmesini veya şifrelemesini engellemek için **WORM (Write Once Read Many)** teknolojisi kullanılır.

## §5.3.3. Yedekleme Doğrulaması
Yedeklerin çalışıp çalışmadığını anlamanın tek yolu düzenli olarak **Kurtarma Testleri** yapmaktır.