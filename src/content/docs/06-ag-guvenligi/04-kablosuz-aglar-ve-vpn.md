---
title: "Kablosuz Ağ Teknolojileri ve Güvenli Uzaktan Erişim"
sidebar:
  order: 4
---

# Kablosuz Ağlar ve VPN Güvenliği

Kurumsal ağlarda hareketlilik ve uzaktan erişim, güvenliğin en kritik halkalarından biridir.

## §6.4.1. Kurumsal Kablosuz Ağ (WLAN) Güvenliği

Ev tipi ağların aksine, kurumsal ağlar her kullanıcının kendi kimliğiyle doğrulandığı **WPA2/WPA3-Enterprise** standardını kullanır.

### 802.1X ve RADIUS
Ağa erişim izni almadan önce kimlik doğrulamasını zorunlu kılan bir standarttır.
1.  **Supplicant:** İstemci cihaz.
2.  **Authenticator:** Erişim Noktası (AP) veya Switch.
3.  **Authentication Server:** Kullanıcı veritabanını (AD) kontrol eden RADIUS sunucusu.

### Rogue AP Tespiti
Yetkisiz kurulan erişim noktaları, ağa sızmak için ciddi bir kapıdır. WIPS (Wireless IPS) sistemleri, bu cihazları tarayarak ve "de-authentication" paketleri göndererek engellemeye çalışır.

### Wi-Fi 6 ve 5G Teknolojileri
*   **Wi-Fi 6 (802.11ax):** OFDMA ve MU-MIMO ile yüksek yoğunluklu cihaz ortamları için optimize edilmiştir.
*   **5G:** Düşük gecikme (URLLC) ve kitlesel bağlantı (mMTC) yetenekleriyle endüstriyel IoT için devrim niteliğindedir.

## §6.4.2. Sanal Özel Ağlar (VPN)

VPN, genel internet üzerinden kurumsal ağa şifreli bir "tünel" oluşturur.

### VPN Türleri
*   **Remote Access (Uzaktan Erişim) VPN:** Bireysel kullanıcıların (evden çalışanlar) SSL/TLS protokolü ile ağa bağlanması.
*   **Site-to-Site VPN:** Coğrafi olarak farklı ofislerin (merkez-şube) IPsec protokolü ile kalıcı olarak birbirine bağlanması.

## §6.4.3. Güvenli Uzaktan Erişim (SSH ve Bastion Host)
Güvenli olmayan ağlar üzerinden komut satırı erişimi sağlayan **SSH** ve ağın geri kalanını korumak için tek giriş noktası olarak kullanılan **Bastion Host** (Atlama Sunucusu) mimarileri.

## §6.4.4. Modern Çözümler: WireGuard ve Tailscale
Geleneksel VPN'lere göre daha hızlı, hafif ve güvenli olan modern tünelleme protokolleri.
