---
title: "E-Posta Doğrulama Protokolleri (SPF, DKIM, DMARC)"
sidebar:
  order: 1
---

# E-posta Doğrulama Protokolleri

E-posta, internetin en eski ve en çok suistimal edilen iletişim protokolüdür. Modern e-posta güvenliği, güvenin varsayıldığı SMTP protokolüne kriptografik doğrulama katmanları ekleyerek sağlanır.

## §9.1.1. E-posta Ekosistemi ve SMTP
E-posta iletimi, farklı ajanların (MUA, MTA, MSA, MDA) işbirliğiyle gerçekleşir.

*   **MUA (Mail User Agent):** Outlook, Gmail gibi istemciler.
*   **MSA (Mail Submission Agent):** İstemciden e-postayı alan ve kimlik doğrulayan (Port 587) sunucu.
*   **MTA (Mail Transfer Agent):** Sunucular arası iletimi yapan (Port 25) "postane".

## §9.1.2. Gönderen Kimlik Doğrulama Protokolleri

### SPF (Sender Policy Framework)
Alan adı sahibinin, hangi IP adreslerinin kendi adına e-posta göndermeye yetkili olduğunu DNS (TXT) üzerinden ilan etmesidir.
*   **Sınırlama:** Sadece zarf gönderenini (Return-Path) doğrular, kullanıcının gördüğü "From" başlığını doğrulamaz.

### DKIM (DomainKeys Identified Mail)
E-postanın başlığına kriptografik bir dijital imza ekler. Mesajın yolda değiştirilmediğini (bütünlük) ve iddia edilen alan adından geldiğini garanti eder.

### DMARC (Domain-based Message Authentication, Reporting and Conformance)
SPF ve DKIM üzerine inşa edilmiş bir politika katmanıdır.
*   **Identifier Alignment (Hizalama):** "From" başlığındaki alan adının, SPF veya DKIM tarafından doğrulanan alan adıyla eşleşmesini zorunlu kılar.

| Politika | Etki | Öneri |
| :--- | :--- | :--- |
| `p=none` | Sadece izleme ve raporlama. | Dağıtımın ilk aşaması. |
| `p=quarantine` | Başarısız postaları Spam klasörüne atar. | Geçiş aşaması. |
| `p=reject` | Başarısız postaları tamamen engeller. | Nihai hedef. |

## §9.1.3. İleri Düzey Güven Mekanizmaları

### ARC (Authenticated Received Chain)
Posta listeleri veya yönlendirme (forwarding) servisleri tarafından bozulan SPF/DKIM zincirini onarmak için "gözetim zinciri" (chain of custody) oluşturur.

### MTA-STS ve DANE
STARTTLS indirgeme (downgrade) saldırılarını önlemek için şifrelemeyi zorunlu kılan protokollerdir. DANE, DNSSEC tabanlı iken; MTA-STS, HTTPS tabanlı bir politika dosyası kullanır.


## §9.1.3. DMARC (Domain-based Message Authentication, Reporting, and Conformance)
SPF ve DKIM sonuçlarına göre e-postanın ne yapılacağını (Kabul et, Karantinaya al, Reddet) belirleyen üst politika çerçevesidir.

> [!IMPORTANT]
> **DMARC Reddi:** Tam uyumluluk için DMARC politikasının `p=reject` seviyesine getirilmesi, kurum adına atılan sahte e-postaları %100'e yakın oranda engeller.
