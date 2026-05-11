---
title: "Web Uygulaması ve API Güvenliği (OWASP & WAF)"
sidebar:
  order: 2
---

# Web ve API Güvenliği

Web güvenliği, HTTP protokolünün nasıl çalıştığını ve güvensiz düz metin iletişimden şifreli HTTPS'e nasıl geçildiğini anlamakla başlar.

## §10.2.1. HTTP Protokol Anatomisi
HTTP, istemci-sunucu modeline dayalı "durumsuz" (stateless) bir protokoldür.

### HTTP Metotları ve Durum Kodları
*   **GET:** Kaynak talep eder.
*   **POST:** Sunucuya veri gönderir.
*   **4xx (İstemci Hatası):** 401 Unauthorized, 403 Forbidden, 404 Not Found.
*   **5xx (Sunucu Hatası):** 500 Internal Server Error, 503 Service Unavailable.

## §10.2.2. HTTPS ve TLS Güvenliği
HTTPS, HTTP'nin TLS (Transport Layer Security) ile şifrelenmiş halidir. Üç temel garanti sunar: **Şifreleme**, **Kimlik Doğrulama** ve **Bütünlük**.

### TLS El Sıkışması (Handshake)
İstemci ve sunucu arasında güvenli kanalın kurulma süreci:
1.  **Client/Server Hello:** Sürüm ve şifreleme takımı (cipher suite) seçimi.
2.  **Sertifika Doğrulama:** Sunucunun kimliğinin CA üzerinden teyit edilmesi.
3.  **Anahtar Değişimi:** Oturum anahtarlarının (Session Keys) oluşturulması.

### HTTP/2 ve HTTP/3 (QUIC)
*   **HTTP/2:** İkili (binary) format, çoklama (multiplexing) ve başlık sıkıştırması ile performans artışı sağlar.
*   **HTTP/3:** TCP yerine UDP tabanlı **QUIC** protokolünü kullanır. TLS 1.3'ü varsayılan olarak entegre eder ve "head-of-line blocking" sorununu çözer.

## §10.2.3. API Güvenliği (OWASP API Top 10)
API'ler modern webin bel kemiğidir. **Broken Object Level Authorization (BOLA)** ve **Mass Assignment** gibi zafiyetler API güvenliğinin en kritik başlıklarıdır.

*   **Hız Sınırlama (Rate Limiting):** DoS saldırılarını ve veri kazımayı engellemek için istek sayısının sınırlandırılması.

## §10.2.3. WAF (Web Application Firewall)
HTTP/HTTPS trafiğini inceleyerek SQLi, XSS gibi web tabanlı saldırıları durduran güvenlik duvarı.