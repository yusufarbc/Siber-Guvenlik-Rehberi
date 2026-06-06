---
title: "Güvenlik Politikaları, Farkındalık Eğitimleri ve Oltalama Simülasyonları"
sidebar:
  order: 3
---

# Güvenlik Politikaları, Farkındalık Eğitimleri ve Oltalama Simülasyonları

Siber güvenliğin en zayıf halkası genellikle teknoloji değil, insandır. Bu bölümde, kurumsal kültürü güvenlik ekseninde nasıl şekillendireceğimizi ve insan kaynaklı riskleri nasıl minimize edeceğimizi inceleyeceğiz.

## §1.3.1. Kabul Edilebilir Kullanım Politikası (AUP) ve "İnsan Güvenlik Duvarı"

Güvenlik politikaları, kurumsal güvenlik bilincinin yasal ve idari altyapısını oluşturur.

*   **Kabul Edilebilir Kullanım Politikası (AUP - Acceptable Use Policy):** Çalışanların kurumun ağını, cihazlarını, e-posta sistemlerini ve verilerini hangi kurallar dahilinde kullanabileceğini tanımlayan kritik sözleşmedir. Hangi sitelere girilemeyeceği, şahsi cihaz kullanımı (BYOD) sınırları ve veri sızıntılarına yol açabilecek eylemler bu politikayla belirlenir.
*   **İnsan Güvenlik Duvarı (Human Firewall) Konsepti:** Kurum çalışanlarının sadece birer pasif kullanıcı olmaktan çıkıp, tehditleri aktif şekilde tespit eden ve raporlayan ilk savunma hattı haline getirilmesi hedefidir. Güçlü bir insan güvenlik duvarı, teknolojik önlemlerin (Firewall, EDR) yetersiz kaldığı sosyal mühendislik saldırılarını engellemede kritik rol oynar.

---

## §1.3.2. Etkili Güvenlik Farkındalığı Eğitimi Tasarımı ve Metrik Ölçümü

Eğitimlerin sıkıcı ve sadece yılda bir kez yapılan formaliteler olmaktan çıkarılması gerekir.

*   **Eğitim Tasarımı:**
    *   **Mikro Öğrenme:** Uzun sunumlar yerine 5-10 dakikalık, animasyonlu veya interaktif mikro modüller tercih edilmelidir.
    *   **Rol Tabanlı Eğitim:** Muhasebe departmanına fatura dolandırıcılığı (BEC) anlatılırken, yazılım ekibine güvenli kod yazma eğitimi verilmelidir.
    *   **Güncel Senaryolar:** Tehdit dünyasındaki en son trendlere ve yapay zeka tabanlı oltalama yöntemlerine yer verilmelidir.
*   **Metrik Ölçümü:**
    *   **Tamamlama Oranları:** Eğitimlerin çalışanlar tarafından ne oranda tamamlandığı.
    *   **Bilgi Testi Skorları:** Eğitim öncesi ve sonrası yapılan testlerdeki başarı oranlarının karşılaştırılması.
    *   **Raporlama Oranı:** Olası şüpheli durumların güvenlik ekibine bildirilme sıklığı.

---

## §1.3.3. Oltalama (Phishing) Kampanyaları Planlama ve Sosyal Mühendislik Savunması

Oltalama kampanyaları, çalışanların pratik yaparak refleks kazanmasını sağlar.

*   **Oltalama Kampanyası Planlaması (GoPhish, Kaspersky ASAP):**
    *   **GoPhish:** Kurumların kendi içlerinde ücretsiz ve açık kaynak kodlu olarak oltalama simülasyonları yapabilmesini sağlayan popüler bir araçtır.
    *   **Kaspersky ASAP (Automated Security Awareness Platform):** Çalışanların seviyesine göre otomatik öğrenme yolları ve simülasyonlar sunan ticari bir platformdur.
    *   **Uygulama Aşamaları:** Gerçekçi şablonlar (kargo takibi, şifre sıfırlama, maaş zammı vb.) hazırlanır, hedef kitleye gönderilir ve tıklama/form doldurma oranları analiz edilerek zayıf halkalar belirlenir.
*   **Sosyal Mühendislik Savunması:**
    *   **Doğrulama Protokolleri:** Telefon veya e-posta ile gelen olağandışı taleplerin (para transferi, şifre sıfırlama) ikincil bir kanaldan (yüz yüze veya bilinen resmi numara üzerinden) doğrulanması kuralı.
    *   **Raporlama Altyapısı:** E-posta istemcilerine eklenen tek tıkla şüpheli e-postayı güvenlik birimine (SOC/IR) bildiren butonlar (Report Phishing).
