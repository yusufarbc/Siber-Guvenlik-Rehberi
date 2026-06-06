---
title: "Mesajlaşma Altyapıları ve E-Posta Doğrulama Protokolleri (SPF/DKIM/DMARC)"
sidebar:
  order: 1
---

# Mesajlaşma Altyapıları ve E-Posta Doğrulama Protokolleri

E-posta, internetin en köklü ve günümüzde siber saldırganlar tarafından (Oltalama, Fidye yazılımı dağıtımı) en çok suistimal edilen iletişim kanalıdır. E-posta protokolü (SMTP) doğası gereği güven varsayımıyla çalışır ve kimlik doğrulama mekanizmaları sonradan eklenmiştir.

## §9.1.1. Kurumsal Mesajlaşma Mimarilerinde Güvenlik

Kurumlar genellikle üç temel e-posta altyapısından birini tercih eder:

*   **Şirket İçi (On-Premise) Exchange:** Tüm kontrol kurumdadır ancak donanım güvenliği, yama yönetimi (Patching) ve dışa açık portların (OWA - Outlook Web Access) güvenliğinden kurum sorumludur. Exchange sunucularındaki sıfır gün (0-day) açıkları (ProxyLogon vb.) büyük risk taşır.
*   **Bulut Tabanlı (M365 / Google Workspace):** Altyapı güvenliği Microsoft veya Google'a devredilmiştir (SaaS). Ancak hesap güvenliği (MFA zorunluluğu, İzinli IP listeleri) hala kurumun sorumluluğundadır.
*   **Postfix / Exim (Açık Kaynak):** Genellikle Linux tabanlı, yüksek işlem hacimli sistemlerde kullanılır. Doğru sıkılaştırma (Hardening) ve SpamAssasin gibi eklentilerle korunması gerekir.

---

## §9.1.2. E-Posta Sahteciliğine Karşı Doğrulama Protokolleri

Bir saldırganın şirketin alan adını (örn: `@sirketiniz.com`) taklit ederek sahte e-postalar göndermesini (Spoofing) engellemek için DNS tabanlı üç temel protokol kullanılır.

### SPF (Sender Policy Framework)
*   **Tanım:** Kurumun, kendi alan adını kullanarak e-posta göndermeye "yetkili olan IP adreslerini ve sunucuları" DNS TXT kaydı olarak ilan etmesidir.
*   **İşleyiş:** Karşı tarafın posta sunucusu e-postayı aldığında, gönderen IP adresinin SPF kaydındaki listeyle eşleşip eşleşmediğini kontrol eder. Eşleşmezse e-postanın sahte olma ihtimali yüksektir.
*   *Eksikliği:* Sadece zarfı (Return-Path) kontrol eder, son kullanıcının gördüğü "From" (Kimden) başlığını doğrulamaz.

### DKIM (DomainKeys Identified Mail)
*   **Tanım:** Gönderilen her e-postanın içeriğine ve başlıklarına asimetrik şifreleme ile kriptografik bir "Dijital İmza" eklenmesi işlemidir.
*   **İşleyiş:** Kurum, e-postayı Özel Anahtarı (Private Key) ile imzalar. Alıcı sunucu, DNS'te yayınlanan Genel Anahtarı (Public Key) çekerek imzayı doğrular. Bu sayede e-postanın yolda değiştirilmediği (Bütünlük) ve gerçekten o kurumdan geldiği (Kimlik) kanıtlanır.

### DMARC (Domain-based Message Authentication, Reporting and Conformance)
*   **Tanım:** SPF ve DKIM sonuçlarını birleştirerek, alıcı sunucuya "Doğrulamadan geçemeyen sahte e-postalara ne yapılması gerektiğini" söyleyen ana politika çerçevesidir.
*   **Hizalama (Alignment):** SPF ve DKIM'in kontrol ettiği alan adlarıyla, kullanıcının gördüğü "From" başlığındaki alan adının aynı olmasını zorunlu kılar.
*   **Politika Zorlaması:**
    *   `p=none` (Sadece İzle): Doğrulamadan geçemeyenler de teslim edilir, sadece raporlanır.
    *   `p=quarantine` (Karantina): Sahte postalar kullanıcının "Gereksiz/Spam" klasörüne düşer.
    *   `p=reject` (Reddet): DMARC'ın nihai hedefidir. Doğrulamadan geçemeyen sahte postalar alıcı sunucu tarafından anında engellenir ve kullanıcıya hiç ulaşmaz. Şirketin marka itibarını korur.
