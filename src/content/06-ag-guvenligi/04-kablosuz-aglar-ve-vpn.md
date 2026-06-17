---
title: "Kablosuz Ağ Teknolojileri ve Güvenli Uzaktan Erişim (VPN/ZTNA)"
sidebar:
  order: 4
---

# Kablosuz Ağ Teknolojileri ve Güvenli Uzaktan Erişim

Ağ sınırlarının ofis binalarının dışına taşmasıyla birlikte, çalışanların kablosuz ağlardan veya evden şirket kaynaklarına güvenli bir şekilde erişmesi en temel ihtiyaç haline gelmiştir.

## §6.4.1. Kurumsal Wi-Fi Mimarileri ve Güvenlik Standartları

Ev tipi kablosuz ağlarda herkes aynı ortak parolayı (Pre-Shared Key - PSK) kullanırken, kurumsal ortamlarda bu yöntem kabul edilemez güvenlik riskleri yaratır.

*   **WPA3 Enterprise:** Modern kurumsal Wi-Fi şifreleme standardıdır. Kaba kuvvet (brute-force) saldırılarına karşı "Simultaneous Authentication of Equals (SAE)" anahtar değişim yöntemini kullanır ve mükemmel ileri gizlilik (Perfect Forward Secrecy) sağlar.
*   **802.1X ve RADIUS Entegrasyonu:** Kurumsal Wi-Fi, her kullanıcının kendi Active Directory kullanıcı adı/parolası veya dijital sertifikası ile ağa bağlanmasını şart koşan **802.1X** protokolünü kullanır.
    *   Ağ geçidi (Access Point), kullanıcının kimlik bilgilerini arka plandaki **RADIUS** sunucusuna iletir.
    *   Doğrulama başarılı olursa, kullanıcıya özel geçici bir şifreleme anahtarı atanır ve ağa erişim izni verilir. Bu sayede bir personel işten ayrıldığında ağ parolasını değiştirmeye gerek kalmaz; sadece kullanıcının hesabı kapatılır.
*   **Rogue AP (Sahte Erişim Noktası) Tespiti:** Saldırganların kurum içine kendi gizli Wi-Fi cihazlarını yerleştirerek ağı köprülemesi büyük bir risktir. Kurumsal denetleyici (Wireless Controller) sistemleri sürekli havayı dinler ve ağda yetkisiz yayın yapan SSID'leri tespit ederek (WIPS özelliğiyle) bağlantılarını koparır.

---

## §6.4.2. Sanal Özel Ağlar (VPN) Mimarisi

VPN, internet (güvensiz ağ) üzerinden iki nokta arasında kriptografik olarak şifrelenmiş özel bir tünel oluşturur.

*   **IPsec VPN:** Genellikle şubeler ile merkez ofisleri kalıcı olarak birbirine bağlamak (Site-to-Site VPN) için kullanılır. Ağ katmanında çalışır.
    *   *IKE (Internet Key Exchange):* Güvenlik anahtarlarının ve algoritmaların karşılıklı olarak anlaşıldığı (Handshake) protokoldür.
    *   *ESP (Encapsulating Security Payload):* Paketin içeriğini şifreleyerek Gizlilik (Confidentiality) sağlar.
    *   *AH (Authentication Header):* Paketin kaynağını ve bütünlüğünü doğrular ancak içeriği şifrelemez. Modern mimarilerde genellikle şifreleme özellikli ESP tercih edilir.
*   **SSL / TLS VPN:** Uzaktan çalışan personelin (Remote Access) kuruma bağlanması için kullanılır. Uygulama katmanında (Web tarayıcı üzerinden) veya hafif bir istemci (Client) ile çalışır. IPsec'e göre kurulumu ve yönetimi daha esnektir.

---

## §6.4.3. Modern Çözümler: Mesh Ağlar ve ZTNA Konseptine Geçiş

Geleneksel VPN'in "tüm iç ağa erişim" veren hantal yapısı, yerini daha hafif, daha güvenli ve uygulama bazlı erişim modellerine bırakmaktadır.

*   **Mesh Ağ Yapıları (Tailscale, WireGuard):** Bütün trafiğin merkezi bir VPN sunucusundan geçmesi (Hub-and-Spoke) yerine, cihazların kriptografik anahtarlar üzerinden doğrudan uçtan uca (Peer-to-Peer) bağlandığı modern ağ yapılarıdır. WireGuard, IPsec'e göre çok daha hafif ve modern kriptografi kullanan bir protokoldür.
*   **VPN'den ZTNA'e Geçiş:**
    *   Geleneksel VPN, bir ofis binasının kapısından girmeye benzer; kapıdan (VPN) geçtikten sonra binanın içindeki tüm odalara (sunuculara) ulaşma riski vardır.
    *   **ZTNA (Zero Trust Network Access - Sıfır Güven Ağ Erişimi):** SASE mimarisinin temel yapı taşıdır. Kullanıcıyı ağa değil, doğrudan yetkisi olduğu **uygulamaya** bağlar. Kimlik, cihaz sağlığı ve konum sürekli değerlendirilir. Uygulamalar internetten (veya ağ içinden) gizlenir (Dark Cloud), bu sayede saldırganların ağ içerisinde yanal hareket etme (Lateral Movement) ihtimali ortadan kaldırılır.
