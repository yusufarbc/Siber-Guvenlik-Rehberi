---
title: "Gelişmiş Ağ Saldırı Vektörleri (DDoS, MitM, ARP Spoofing) ve Savunma"
sidebar:
  order: 3
---

# Gelişmiş Ağ Saldırı Vektörleri ve Savunma

Ağ altyapılarına yönelik saldırılar, sistemleri erişilemez kılmayı (Kullanılabilirlik) veya ağ trafiğini gizlice manipüle etmeyi (Gizlilik ve Bütünlük) amaçlar.

## §6.3.1. Ağ Katmanı ve Kaynak Tüketimi Saldırıları (DoS/DDoS)

Hizmet Engelleme (DoS) ve Dağıtık Hizmet Engelleme (DDoS) saldırıları, hedefin bant genişliğini veya sistem kaynaklarını tüketerek hizmet veremez hale gelmesini amaçlar.

### Parçalanma (Fragmentation) Saldırıları
Ağ üzerinde taşınamayacak kadar büyük paketler parçalara (fragment) bölünür ve hedefte tekrar birleştirilir.
*   **Teardrop Saldırısı:** Saldırgan, paketlerin birleştirilme sıraları (offset) bilerek üst üste binecek (Overlap) şekilde hatalı ayarlanmış paketler gönderir. Hedef sistem bu paketleri birleştirmeye çalışırken kilitlenir veya çöker.

### Kaynak Tüketimi Saldırıları
*   **Smurf Saldırısı:** Saldırgan, hedef kurbanın IP adresini taklit ederek (IP Spoofing) ağdaki tüm cihazlara "ICMP Echo (Ping)" yayın (broadcast) mesajı gönderir. Ağdaki yüzlerce cihaz aynı anda kurbana cevap vererek kurbanı felç eder.
*   **TCP SYN Flood:** Saldırgan sürekli olarak TCP SYN (bağlantı başlatma) paketleri gönderir, ancak sunucunun döndüğü SYN-ACK paketlerine asla ACK (onay) göndermez. Sunucu, cevap beklerken tüm "Yarı Açık (Half-Open)" bağlantı kapasitesini doldurarak yeni meşru isteklere yanıt veremez hale gelir.
*   **Savunma - SYN Cookie:** Sunucunun bağlantı durumunu belleğinde tutmak yerine, gelen SYN paketinin başlık bilgileriyle kriptografik bir "Cookie" üretip SYN-ACK ile geri göndermesidir. Doğru ACK (Cookie ile birlikte) dönmezse sunucu bellek tüketmemiş olur.

---

## §6.3.2. Ortadaki Adam (MitM) ve Oturum Çalma

Saldırganın, iki kurban arasındaki iletişimi gizlice dinlediği (Sniffing) veya içeriği değiştirdiği saldırılardır.

*   **Oturum Çalma (Session Hijacking):** Kullanıcı bir web sitesine giriş yaptığında sunucu ona bir "Oturum Kimliği (Session ID / Cookie)" verir. Saldırgan, MitM veya XSS (Cross-Site Scripting) yöntemleriyle bu kimliği çalarsa, parola bilmesine gerek kalmadan kullanıcının hesabına doğrudan erişim sağlar.
*   **Savunma:** İletişimin baştan sona HTTPS (HSTS destekli) olması, çerezlerin `Secure` ve `HttpOnly` bayraklarıyla (flag) işaretlenmesi.

---

## §6.3.3. Yerel Ağ (Katman 2 / Switch) Seviyesi Güvenlik ve Savunma

LAN (Yerel Alan Ağı) içinde fiziksel erişimi olan bir saldırganın anahtarlama (Switch) zafiyetlerini kullanmasıdır.

*   **ARP Zehirlenmesi (ARP Spoofing/Poisoning):** Saldırgan, ağdaki diğer bilgisayarlara "Gateway (Modem/Router) Benim" diyerek sahte ARP cevapları gönderir. Tüm ağ trafiği saldırganın cihazı üzerinden geçmeye başlar (Klasik MitM yöntemi).
    *   **Savunma - DAI (Dynamic ARP Inspection):** Switch'in, yetkisiz cihazlardan gelen sahte ARP paketlerini tespit edip düşürmesini sağlayan güvenlik özelliğidir.
*   **DHCP Spoofing:** Saldırgan ağa sahte bir DHCP sunucusu kurar ve yeni bağlanan bilgisayarlara yanlış IP yapılandırmaları (örneğin DNS sunucusu olarak kendi IP'sini) dağıtır.
    *   **Savunma - DHCP Snooping:** Switch üzerinde sadece "Güvenilir (Trusted)" portlardan gelen DHCP tekliflerine izin veren özelliktir. DAI'nin de temelini oluşturur.
*   **MAC Flooding:** Switch'in MAC adres tablosunu binlerce sahte adresle doldurarak, cihazı "Hub" gibi çalışmaya zorlama (tüm portlara yayın yapma) saldırısıdır.
    *   **Savunma - Port Security:** Switch port başına bağlanabilecek maksimum MAC adresi sayısını sınırlandırarak (örneğin 1) bu saldırıyı anında durdurur. Port limit aşıldığında kapanır (Shutdown).