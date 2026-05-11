---
title: "Uygulama Güvenliği"
sidebar:
  label: "Uygulama Güvenliği"
  order: 10
---

# Web ve Uygulama Güvenliği Mimarisi

Web uygulamaları, internete en açık ve dolayısıyla en çok saldırıya uğrayan bileşenlerdir. Bu bölümde, web iletişiminin temelindeki protokollerin güvenliğini, modern şifreleme standartlarını ve uygulama katmanındaki savunma stratejilerini inceleyeceğiz.

§

## Web İletişiminin Temelleri: HTTP ve HTTPS

Geleneksel HTTP protokolü, verileri düz metin olarak ilettiği için dinleme (eavesdropping) ve manipülasyon saldırılarına açıktır. Bu zafiyetleri gidermek için **HTTPS (HTTP over TLS)** geliştirilmiştir.

HTTPS, verinin gizliliğini ve bütünlüğünü sağlamak için **TLS (Transport Layer Security)** katmanını kullanır. Bu katman, istemci ve sunucu arasında güvenli bir tünel oluşturarak verilerin şifreli akmasını sağlar.

§

## Modern Şifreleme Standardı: TLS 1.3

TLS 1.3, önceki sürümlere göre hem güvenlik hem de performans açısından devrim niteliğinde iyileştirmeler sunar:
- **Hızlı El Sıkışma (0-RTT/1-RTT):** Bağlantı kurulum süresini kısaltarak web sayfalarının daha hızlı yüklenmesini sağlar.
- **Güçlü Şifreleme:** Güvensiz olduğu kanıtlanmış eski algoritmaları (MD5, SHA-1, RC4, DES) tamamen kaldırır.
- **Gizlilik:** "Perfect Forward Secrecy" özelliğini zorunlu kılarak, gelecekte anahtar çalınsa bile geçmişteki oturumların deşifre edilmesini engeller.

§

## Web Performansı ve Güvenlik: HTTP/2 ve HTTP/3 (QUIC)

Web'in evrimi, sadece güvenliği değil, hızı da ön plana çıkarmıştır:

### HTTP/2
Tek bir bağlantı üzerinden birden fazla veriyi eşzamanlı taşıyarak (multiplexing) hızı artırır. Ancak TCP tabanlı olduğu için paket kaybı durumunda tüm akışı durdurabilir (Head-of-Line Blocking).

### HTTP/3 ve QUIC
Google tarafından geliştirilen QUIC protokolü, TCP yerine UDP üzerinde çalışır. Bu sayede TCP'nin kısıtlamalarını aşar ve paket kayıplarından sadece ilgili veri akışının etkilenmesini sağlar. HTTPS'i varsayılan olarak içinde barındırır.

§

## Web Uygulama Güvenlik Duvarı (WAF)

Uygulama katmanındaki saldırıları (SQL Injection, XSS, CSRF) tespit etmek için **WAF** kullanılır. Geleneksel güvenlik duvarlarının aksine, WAF web trafiğini (L7) derinlemesine analiz eder:
- **İmza Tabanlı Denetim:** Bilinen saldırı kalıplarını engeller.
- **Davranışsal Analiz:** Anomali tespiti yaparak sıfırıncı gün (zero-day) saldırılarına karşı koruma sağlar.
- **Bot Koruması:** Kötü niyetli botların ve tarayıcıların (scrapers) erişimini sınırlar.

