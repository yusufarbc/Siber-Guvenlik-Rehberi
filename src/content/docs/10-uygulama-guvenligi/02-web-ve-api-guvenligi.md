---
title: "Web Uygulaması ve API Güvenliği (OWASP Top 10 / WAF)"
sidebar:
  order: 2
---

# Web Uygulaması ve API Güvenliği

Kurumları dış dünyaya açan kapılar web siteleri ve diğer sistemlerin haberleştiği API'lerdir. Uygulama katmanındaki bu servisler, ağ güvenlik duvarları (Firewall) tarafından yeterince korunamadıkları için saldırganların öncelikli hedefleridir.

## §10.2.1. OWASP Top 10 ve Güncel Zafiyetler

OWASP (Açık Web Uygulama Güvenliği Projesi), web güvenliği alanında küresel bir standart belirleyicidir ve en kritik 10 zafiyeti düzenli olarak yayımlar.

*   **Enjeksiyon (Injection) Zafiyetleri (SQLi, Command Injection):** Kullanıcıdan alınan verinin doğrulanmadan (Sanitization) doğrudan bir veritabanı sorgusuna veya işletim sistemi komutuna dahil edilmesidir. SQLi ile saldırgan tüm veritabanını indirebilir veya silebilir.
    *   *Savunma:* Hazırlıklı İfadeler (Prepared Statements / Parameterized Queries) kullanmak.
*   **Kırık Kimlik Doğrulama (Broken Authentication):** Zayıf parola politikaları, oturum kimliklerinin (Session ID) kolay tahmin edilebilir olması veya düz metin olarak iletilmesi nedeniyle hesapların ele geçirilmesidir.
*   **SSRF (Sunucu Taraflı İstek Sahteciliği):** Saldırganın, hedef web sunucusunu kullanarak kurumun dışarıya kapalı iç ağındaki sistemlere (veya AWS Metadata servisi gibi bulut bileşenlerine) istek yapmaya zorlamasıdır.

---

## §10.2.2. REST ve GraphQL API Güvenlik Pratikleri

Modern web ve mobil uygulamalar artık monolitik sunucular yerine mikroservis tabanlı API'ler (REST, GraphQL) ile haberleşmektedir.

*   **Kimlik Doğrulama ve Yetkilendirme:** API uç noktaları (Endpoints) anonim erişime kapatılmalı; OAuth 2.0 veya JWT (JSON Web Token) gibi sağlam yetkilendirme mekanizmaları kullanılmalıdır.
*   **BOLA / IDOR (Bozuk Nesne Seviyesi Yetkilendirme):** Kullanıcının `/api/kullanici/105` adresine bakarken kendi profili yerine, sadece ID numarasını `106` yaparak başka birinin verisini okuyabilmesidir. En tehlikeli API açığıdır. Yetki kontrolü sadece girişte değil, **her nesne/veri çekişte** yapılmalıdır.
*   **Hız Sınırlandırma (Rate Limiting) ve Throttling:** Bir IP adresinin veya kullanıcının bir API'ye saniyede kaç istek yapabileceği sınırlandırılmalıdır. Aksi takdirde API, Brute-Force (kaba kuvvet) veya Layer 7 DDoS saldırılarıyla kolayca çökertilebilir.

---

## §10.2.3. WAF (Web Uygulama Güvenlik Duvarı) Konumlandırması

Geleneksel ağ güvenlik duvarları (NGFW) uygulama katmanındaki (Layer 7) web saldırılarını analiz etmede yetersiz kalır (Örneğin, gelen bir SQL sorgusunun yasal bir istek mi yoksa SQL Enjeksiyonu mu olduğunu anlayamazlar).

*   **WAF'ın Rolü:** Web sunucularının önüne kurulan (Reverse Proxy olarak çalışan) ve sadece HTTP/HTTPS trafiğini analiz eden güvenlik duvarlarıdır.
*   **Nasıl Çalışır?** HTTP isteklerinin başlıklarını, çerezlerini (Cookies), URL parametrelerini ve POST/PUT gövdelerini (Payload) derinlemesine inceler. İmza tabanlı kurallarla (Örn: `1=1` ifadesini yakalama) veya makine öğrenimi tabanlı davranış analiziyle (Anomali) saldırıları engeller.
*   **Konumlandırma:** Günümüzde genellikle CDN (İçerik Dağıtım Ağı) sağlayıcıları (Örn: Cloudflare, Akamai) ile birlikte bulut tabanlı olarak konumlandırılarak, saldırıların kurum ağına ulaşmadan bulutta sönümlenmesi sağlanır.
*   **Sanal Yamalama (Virtual Patching):** Web sitesinin kodundaki kritik bir zafiyetin (CVE) yazılımcılar tarafından düzeltilmesi zaman alabilir. WAF, koda dokunulmadan sadece o zafiyeti sömüren payload'ları engelleyecek özel bir kural yazılarak (Sanal Yama) geçici ama hızlı bir koruma sağlar.