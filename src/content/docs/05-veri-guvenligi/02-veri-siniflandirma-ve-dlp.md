---
title: "Veri Yaşam Döngüsü ve Sızıntı Önleme (DLP)"
sidebar:
  order: 2
---

# Veri Sınıflandırma ve DLP

Her veri aynı değerde değildir. Verinin değerine göre korunması, kaynakların verimli kullanılmasını sağlar.

## §5.2.1. Veri Durumları
1.  **At Rest (Durağan):** Disklerde saklanan veri (Şifreleme gerekir).
2.  **In Transit (Hareket Halinde):** Ağ üzerinde iletilen veri (TLS/SSL gerekir).
3.  **In Use (Kullanımda):** RAM üzerinde işlenen veri (Bellek koruma gerekir).

## §5.2.2. Veri Sınıflandırma Etiketleri
*   **Gizli (Confidential):** Sadece belirli kişilerce görülebilir.
*   **Kuruma Özel (Internal):** Tüm çalışanlar görebilir.
*   **Halka Açık (Public):** Herkes görebilir.

## §5.2.3. DLP (Data Loss Prevention)
Verinin yetkisiz bir şekilde kurum dışına çıkmasını engelleyen teknolojidir.
*   **Ağ Tabanlı (Network DLP):** E-posta ve web trafiğini izler.
*   **Uç Nokta Tabanlı (Endpoint DLP):** USB kopyalama ve ekran görüntüsü almayı denetler.
