---
title: "Gelişmiş E-Posta Tehditleri ve SEG Entegrasyonu"
sidebar:
  order: 2
---

# E-Posta Filtreleme ve Savunma

Teknik doğrulamalar (SPF/DKIM/DMARC) sahteciliği engellerken, içerik bazlı saldırılar ve protokol suistimalleri için gelişmiş filtreleme sistemleri gereklidir.

## §9.2.1. SEG (Secure Email Gateway)
Kurumsal e-posta akışını tarayan, zararlı ekleri Sandbox'ta açan ve bağlantıları "Tıklama Anında" (Time-of-Click) kontrol eden sistemdir.

*   **URL Rewriting:** E-posta içindeki bağlantılar SEG tarafından değiştirilir. Kullanıcı tıkladığında site SEG üzerinden taranır ve o andaki güvenliği kontrol edilir.
*   **Sandboxing:** Bilinmeyen dosya ekleri izole bir sanal ortamda çalıştırılarak davranışları analiz edilir.

## §9.2.2. Gelişmiş Tehditler: BEC ve SMTP Smuggling

### BEC (Business Email Compromise)
Zararlı yazılım içermeyen, tamamen güvene dayalı sosyal mühendislik saldırılarıdır.
*   **CEO Sahtekarlığı:** Üst düzey bir yöneticinin kimliğine bürünerek acil para transferi talep edilmesi.
*   **Fatura Dolandırıcılığı:** Tedarikçiden geliyormuş gibi görünen sahte fatura ile banka bilgilerinin değiştirilmesi.

### SMTP Smuggling (CVE-2023-51764)
Farklı MTA'ların (Posta Aktarım Aracısı) satır sonu karakterlerini (`<CR><LF>` vs `<LF>`) farklı yorumlamasındaki tutarsızlıklardan yararlanır. Bir saldırgan, meşru bir sunucudan geliyormuş gibi görünen ve SPF kontrollerini geçen sahte e-postalar "kaçırabilir".

## §9.2.3. Olay Müdahalesi ve Log Analizi
Posta sunucusu günlüklerinde (Postfix `mail.log`, Exim `mainlog`) başarılı/başarısız kimlik doğrulamaları ve teslimat durumları sürekli izlenmelidir.

