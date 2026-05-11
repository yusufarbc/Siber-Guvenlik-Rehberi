---
title: "E-Posta Güvenliği"
sidebar:
  label: "E-Posta Güvenliği"
  order: 9
---

# E-posta İletişiminin Güvenlik Mimarisi

E-posta, modern iş dünyasının temel iletişim aracı olmasının yanı sıra, siber saldırganlar için en popüler saldırı vektörüdür. Kurumsal güvenliği sağlamak için e-posta sistemlerinin mimari düzeyde korunması ve gönderici doğrulama protokollerinin eksiksiz yapılandırılması hayati önem taşır.

§

## E-posta İletişiminin Temel Bileşenleri

E-posta trafiği, farklı roller üstlenen sunucular ve protokoller aracılığıyla gerçekleşir:
- **MUA (Mail User Agent):** Outlook, Gmail gibi kullanıcı arayüzleri.
- **MTA (Mail Transfer Agent):** E-postaları sunucular arası taşıyan sistem (örneğin, Exchange, Postfix).
- **SMTP (Simple Mail Transfer Protocol):** E-posta göndermek için kullanılan standart protokol (Port 25, 587).
- **IMAP/POP3:** E-postaları sunucudan çekmek için kullanılan protokoller.

§

## E-posta Güvenlik Protokolleri: SPF, DKIM ve DMARC

E-posta sahteciliğini (spoofing) önlemek için üç temel mekanizma birlikte çalışmalıdır:

### 1. SPF (Sender Policy Framework)
Alan adınız adına hangi IP adreslerinin veya sunucuların e-posta göndermeye yetkili olduğunu belirten bir DNS kaydıdır. Alıcı sunucu, gelen e-postanın kaynağını bu liste ile karşılaştırır.

### 2. DKIM (DomainKeys Identified Mail)
E-postanın içeriğinin yolda değiştirilmediğini ve gerçekten belirtilen alan adından geldiğini kanıtlamak için dijital imza kullanır. E-posta başlığına eklenen kriptografik imza, alıcı tarafından DNS'teki genel anahtar ile doğrulanır.

### 3. DMARC (Domain-based Message Authentication, Reporting, and Conformance)
SPF ve DKIM kontrollerinden geçemeyen e-postalara ne yapılacağını belirleyen politika çerçevesidir. "Hiçbir şey yapma" (none), "Karantinaya al" (quarantine) veya "Reddet" (reject) seçenekleri sunar.

§

## Güvenli E-posta Ağ Geçidi (SEG) ve Sandbox

Modern e-posta savunması, sadece protokol doğrulamasıyla yetinmez. **Güvenli E-posta Ağ Geçitleri (SEG)**, e-posta akışının önüne yerleşerek şu gelişmiş kontrolleri yapar:
- **URL Sandboxing:** E-posta içindeki linkler, kullanıcı tıklamadan önce izole bir ortamda açılıp zararlı olup olmadığı denetlenir.
- **DLP (Data Loss Prevention):** Hassas verilerin (TC Kimlik, Kredi Kartı vb.) dışarı sızmasını engellemek için giden e-postaları tarar.
- **Ek Analizi:** Ekli dosyalar sanal bir makinede (Sandbox) çalıştırılarak davranışsal analiz yapılır.

