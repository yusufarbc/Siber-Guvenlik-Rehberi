---
title: "Gelişmiş E-Posta Tehditleri (BEC/Phishing) ve SEG Entegrasyonu"
sidebar:
  order: 2
---

# Gelişmiş E-Posta Tehditleri ve SEG Entegrasyonu

Teknik doğrulamalar (SPF/DKIM/DMARC) sadece e-postanın sahte olup olmadığını belirler. Ancak meşru bir hesaptan gönderilen zararlı bir içerik veya sosyal mühendislik saldırıları, içerik analizi yapan güvenlik sistemleriyle engellenmelidir.

## §9.2.1. Gelişmiş E-Posta Tehditleri

Saldırganlar artık sadece virüslü dosyalar göndermek yerine, güveni ve insan psikolojisini suistimal eden, teknik olarak tamamen temiz görünen saldırılar düzenlemektedir.

### Hedef Odaklı Oltalama (Spear Phishing)
Genel oltalama kampanyalarının aksine, saldırganın kurban hakkında (LinkedIn, şirket web sitesi gibi kaynaklardan) detaylı araştırma yaparak hazırladığı, kişiselleştirilmiş ve çok inandırıcı aldatmaca e-postalarıdır.

### İş Süreci İhlali (BEC - Business Email Compromise)
Finansal kayıpların en büyük sorumlusu olan BEC saldırıları, genellikle hiçbir zararlı yazılım (malware) veya link içermez.
*   **CEO Dolandırıcılığı:** Saldırgan, üst düzey yöneticinin (CEO/CFO) e-posta hesabını ele geçirir veya e-posta adresini taklit eder (Typo-squatting). Finans departmanına "Gizli bir şirket satın alması yapıyoruz, şu hesaba acil 100.000$ transfer edin" şeklinde bir e-posta gönderir.
*   **Tedarikçi Faturası Manipülasyonu:** Saldırgan şirket ile tedarikçi arasındaki yazışmaları gizlice izler. Gerçek bir fatura gönderileceği zaman araya girerek, kendi IBAN numarasını içeren sahte bir fatura PDF'i iletir.

---

## §9.2.2. SEG (Güvenli E-Posta Ağ Geçidi) Konumlandırması

**SEG (Secure Email Gateway)**, kurumun mesajlaşma sunucusunun (Exchange veya M365) hemen önüne kurulan, gelen ve giden tüm e-posta trafiğini analiz eden bir filtreleme merkezidir. Geleneksel "Anti-Spam" yazılımlarının çok ötesinde yeteneklere sahiptir.

*   Tüm e-postalar önce SEG cihazına gelir. Spam, kimlik doğrulama hataları ve bilinen zararlılar burada elenir.
*   Temiz olduğuna karar verilen (veya şüpheli bulunup temizlenen) e-postalar, asıl e-posta sunucusuna iletilir.

---

## §9.2.3. Sandboxing (Zararlı Ek Analizi) ve Time-of-Click Korumaları

Modern SEG sistemleri, Zero-Day (sıfır gün) zararlılarını ve dinamik oltalama linklerini tespit etmek için iki kritik teknoloji kullanır:

### Zararlı Ek Analizi (Sandboxing)
*   Gelen e-postanın içinde bilinmeyen bir dosya (Örn: Makro içeren bir Word belgesi veya PDF) varsa, SEG bu dosyayı kullanıcıya teslim etmeden önce izole bir sanal ortamda (Sandbox) açar.
*   Eğer dosya açıldığında Windows kayıt defterini değiştirmeye kalkar veya şüpheli bir IP'ye bağlanırsa zararlı olarak işaretlenir ve e-posta silinir veya karantinaya alınır.

### Tıklama Zamanı (Time-of-Click) ve URL Rewriting
*   Saldırganlar, e-postayı gönderdikleri anda temiz olan bir web sayfasının linkini koyarlar (Böylece filtreleri geçerler). E-posta kullanıcının kutusuna düştükten 1 saat sonra o temiz sayfaya zararlı yazılım yüklerler.
*   **URL Rewriting (Link Yeniden Yazma):** SEG, e-posta içindeki tüm linkleri değiştirerek kendi analiz sunucusuna yönlendirir.
*   Kullanıcı e-postadaki linke tıkladığı anda (Time-of-Click), SEG o saniyede sitenin güncel halini tekrar analiz eder. Site zararlıya dönüştüyse erişimi bloklar.
