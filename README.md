# 📚 Siber Güvenlik Rehberi

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Turkish](https://img.shields.io/badge/Language-Turkish-red.svg)](#)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-WELCOME-brightgreen.svg?style=for-the-badge)](#-katkıda-bulunma)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

> **🎯 Modern siber güvenlik profesyonelleri için kapsamlı, güncel ve tamamen Türkçe topluluk rehberi**

---

## 📖 Proje Hakkında

Bu **açık kaynaklı** siber güvenlik rehberi, Türkiye'deki Türkçe kaynak eksikliğini gidermek amacıyla geliştirilmiştir. Toplamda 14 bölüm ve 49 alt başlıktan oluşan bu rehber, modern siber savunmanın tüm katmanlarını teknik detaylar, pratik örnekler, standart/mevzuat eşlemeleri (NIST, ISO 27001, MITRE ATT&CK, KVKK/5651/BDDK) ve karşılaştırmalı tablolarla ele alır.

* **💻 Altyapı:** Astro Starlight (Modern ve Hızlı Web Arayüzü)
* **🌍 Dil:** %100 Türkçe
* **🤝 Katkı:** Herkese açık ve Pull Request odaklı topluluk projesi

---

## 📑 Müfredat ve İçindekiler

Aşağıda rehberin güncel müfredat yapısı ve içerdiği konular listelenmiştir:

| Bölüm | Konu / Alt Başlıklar | Durum |
| :--- | :--- | :---: |
| **01. Bilgi Güvenliği** | • Bilgi Güvenliği Stratejisi, Temelleri (CIA) ve Maliyet Yönetimi (TCO)<br>• Yönetişim, Risk, Uyumluluk (GRC) ve İş Sürekliliği Planlaması (BCP/BIA)<br>• Güvenlik Politikaları, Farkındalık Eğitimleri ve Oltalama Simülasyonları | ✅ Yayında |
| **02. Fiziksel Güvenlik** | • Fiziksel Çevre, Tesis ve Veri Merkezi Güvenliği<br>• Güvenli Cihaz İmhası ve Veri Yok Etme (Degaussing/Shredding)<br>• Sosyal Mühendislik ile Fiziksel Sızma ve Red Team Operasyonları | ✅ Yayında |
| **03. Donanım Güvenliği** | • Çip (TPM), Anakart ve Firmware (Secure Boot) Güvenliği<br>• Donanım Tedarik Zinciri Riskleri ve Sahte Bileşenler<br>• Yan Kanal Saldırıları (Side-Channel Attacks) ve Donanımsal Sıkılaştırma | ✅ Yayında |
| **04. Kimlik Güvenliği** | • Kimlik Yönetimi (IAM) ve Formel Erişim Kontrol Modelleri<br>• Ayrıcalıklı Erişim Yönetimi (PAM) ve Modern Doğrulama (MFA/SSO)<br>• Sıfır Güven (Zero Trust) Mimarisi ve Cihaz İzolasyonu<br>• Merkeziyetsiz Kimlik (DID) ve Parolasız (Passwordless) Gelecek | ✅ Yayında |
| **05. Veri Güvenliği** | • Kriptografi, Şifreleme Algoritmaları ve Kriptografik Özetleme (Hash)<br>• Kriptanaliz, Şifre Kırma ve Hash Kırma<br>• Veri Yaşam Döngüsü, Sınıflandırma ve Sızıntı Önleme (DLP)<br>• Yedekleme Stratejileri ve Değiştirilemez (Immutable) Kurtarma | ✅ Yayında |
| **06. Ağ Güvenliği** | • Ağ İletişim Temelleri (OSI/TCP-IP), DMZ Tasarımı ve Ağ Segmentasyonu<br>• Yeni Nesil Güvenlik Duvarları (NGFW), IDS/IPS ve Ağ Görünürlüğü (DPI)<br>• Gelişmiş Ağ Saldırı Vektörleri (DDoS, MitM, ARP Spoofing) ve Savunma<br>• Kablosuz Ağ Teknolojileri ve Güvenli Uzaktan Erişim (VPN/ZTNA) | ✅ Yayında |
| **07. Uç Nokta Güvenliği** | • İşletim Sistemi Sıkılaştırma (OS Hardening) ve Uç Nokta Koruması (EDR/XDR)<br>• Zararlı Yazılım (Malware) Analizi ve Uç Nokta Adli Bilişimi (Forensics)<br>• Dosyasız Zararlı Yazılımlar (Fileless Malware) ve Bellek İçi Saldırılar (LOLBins) | ✅ Yayında |
| **08. Mobil Güvenlik** | • Kurumsal Mobilite (MDM/MAM/BYOD) ve Mobil İşletim Sistemi Tehditleri<br>• Mobil Tehdit Algılama (MTD) ve Ağ Tabanlı Tehditler<br>• Mobil Uygulama Güvenliği ve Tersine Mühendislik Korumaları<br>• Mobil Adli Bilişim (Mobile Forensics) ve Olay Müdahale | ✅ Yayında |
| **09. E-Posta Güvenliği** | • Mesajlaşma Altyapıları ve E-Posta Doğrulama Protokolleri (SPF/DKIM/DMARC)<br>• Gelişmiş E-Posta Tehditleri (BEC/Phishing) ve SEG Entegrasyonu<br>• E-Posta Şifreleme Teknolojileri (S/MIME, PGP) ve Veri Sızıntısı Analizi | ✅ Yayında |
| **10. Uygulama Güvenliği** | • Güvenli Yazılım Geliştirme (SDLC), Kod Analizi (SAST/DAST) ve DevSecOps<br>• Web Uygulaması ve API Güvenliği (OWASP Top 10 / WAF)<br>• Sunucusuz (Serverless) Mimari ve V8 Isolate Güvenliği | ✅ Yayında |
| **11. Bulut Güvenliği** | • Sanallaştırma (Hipervizör) Mimarileri ve Bulut Bilişim Servis Modelleri<br>• Bulut Yerlisi (Cloud-Native), Konteyner Güvenliği ve Kod Olarak Altyapı (IaC)<br>• Hibrit Bulut Yönetimi ve Veri Egemenliği (Digital Sovereignty) | ✅ Yayında |
| **12. Endüstriyel Sistem Güvenliği** | • OT/ICS Sistemleri, Purdue Modeli ve Güvenli IT/OT Entegrasyonu<br>• OT Dünyasında Sıkılaştırma (OT Hardening) ve Zafiyet Yönetimi<br>• Endüstriyel Ağlarda Tehdit İzleme, Görünürlük ve Anomali Tespiti<br>• OT Sahasında Olay Müdahale (ICS Incident Response) ve Siber-Fiziksel Güvenlik | ✅ Yayında |
| **13. Yapay Zeka Güvenliği** | • Yapay Zeka (LLM) Tehditleri ve Prompt Injection<br>• OWASP Top 10 for LLM Applications ve Sınır Değer Denetimleri<br>• Makine Öğrenmesi Operasyonlarında Güvenlik (SecMLOps / AI DevSecOps)<br>• Yapay Zeka Entegrasyonlarında Veri Egemenliği ve Gölge AI (Shadow AI) | ✅ Yayında |
| **14. Operasyonel Güvenlik** | • SOC/NOC Entegrasyonu ve Yeni Nesil Merkezi Log Yönetimi (SIEM/SOAR)<br>• Detection Engineering ve Tehdit Avcılığı<br>• Siber Tehdit İstihbaratı (CTI) ve Aldatma Teknolojileri<br>• Olay Müdahale (Incident Handling), Playbook Yönetimi ve Delil Zinciri | ✅ Yayında |

---

## 🚀 Hızlı Başlangıç (Yerel Geliştirme)

Bu projeyi bilgisayarınızda çalıştırmak ve anlık değişiklikleri görüntülemek için aşağıdaki adımları izleyebilirsiniz.

### 📋 Gereksinimler
* [Node.js](https://nodejs.org/) (v18.14.1 veya üzeri, v20+ önerilir)
* npm (Node.js ile otomatik olarak yüklenir)

### ⚡ Kurulum ve Çalıştırma
```bash
# 1. Projeyi klonlayın
git clone https://github.com/yusufarbc/Siber-Guvenlik-Rehberi.git
cd Siber-Guvenlik-Rehberi

# 2. Bağımlılıkları yükleyin
npm install

# 3. Yerel geliştirme sunucusunu başlatın
npm run dev
```

Ardından tarayıcınızda `http://localhost:4321` adresine giderek rehberi anlık olarak görüntüleyebilirsiniz.

---

## 🤝 Katkıda Bulunma

Bu rehberin gelişmesi ve güncel kalması siber güvenlik topluluğunun katkılarına bağlıdır. Her türlü katkı (imla düzeltmeleri, yeni teknik eklemeler, güncel vaka analizleri vb.) projemiz için son derece değerlidir.

* **💡 Hızlı Katkı:** Okuduğunuz herhangi bir sayfanın en altında bulunan **"Sayfayı düzenle"** (Edit this page) butonuna tıklayarak doğrudan tarayıcı üzerinden Pull Request gönderebilirsiniz.
* **📂 Detaylı Katkı Süreci:** Detaylı katkı yönergeleri, commit standartları ve kalite kontrol checklist'leri için lütfen **[Katkı Rehberi (CONTRIBUTING.md)](CONTRIBUTING.md)** dosyasını inceleyin.
* **🎨 Yazım Standartları:** Görsel ekleme ve kutucuk (Alert) kullanımı gibi biçimlendirme kuralları için **[Kullanım Kılavuzu (KULLANIM.md)](KULLANIM.md)** dosyasını inceleyin.

---

## 📊 Proje İstatistikleri

* **🏗️ Yapı:** 14 Bölüm, 49 Alt Başlık (Markdown Dosyaları)
* **🔍 Arama Motoru:** Pagefind ile tam entegre, anlık yerel arama desteği
* **🔧 CI/CD:** GitHub Actions ile otomatik derleme ve yayınlama

---

## 📜 Lisans

Bu proje **Creative Commons Attribution 4.0 International (CC BY 4.0)** lisansı altında korunmaktadır.
* ✅ **Serbest Kullanım:** Ticari kullanım, eğitim amaçlı kullanım, uyarlama ve yeniden dağıtım tamamen serbesttir.
* 📝 **Tek Koşul:** Orijinal esere atıfta bulunulması gerekmektedir.

```
"Kapsamlı Siber Güvenlik El Kitabı" by Yusuf Talha ARABACI 
is licensed under CC BY 4.0
Kaynak: https://github.com/yusufarbc/Siber-Guvenlik-Rehberi
```

---

## ✍️ Yazar ve İletişim

**Yusuf Talha ARABACI**
* 🐙 GitHub: [@yusufarbc](https://github.com/yusufarbc)
* 💼 LinkedIn: [yusufarbc](https://www.linkedin.com/in/yusufarbc/)

---

**🌟 Gelin, Türkiye'nin siber güvenlik literatürünü birlikte büyütelim!**
