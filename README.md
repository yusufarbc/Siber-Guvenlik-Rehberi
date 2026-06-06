# 📚 Siber Güvenlik Rehberi

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Turkish](https://img.shields.io/badge/Language-Turkish-red.svg)](#)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-WELCOME-brightgreen.svg?style=for-the-badge)](#-katkıda-bulunma)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

> **🎯 Modern siber güvenlik profesyonelleri için kapsamlı, güncel ve tamamen Türkçe topluluk rehberi**

---

## 📖 Proje Hakkında

Bu **açık kaynaklı** siber güvenlik rehberi, Türkiye'deki Türkçe kaynak eksikliğini gidermek amacıyla geliştirilmiştir. Toplamda 15 bölüm ve 32 alt başlıktan oluşan bu rehber, modern siber savunmanın tüm katmanlarını teknik detaylar, pratik örnekler ve karşılaştırmalı tablolarla ele alır.

* **💻 Altyapı:** Astro Starlight (Modern ve Hızlı Web Arayüzü)
* **🌍 Dil:** %100 Türkçe
* **🤝 Katkı:** Herkese açık ve Pull Request odaklı topluluk projesi

---

## 📑 Müfredat ve İçindekiler

Aşağıda rehberin güncel müfredat yapısı ve içerdiği konular listelenmiştir:

| Bölüm | Konu / Alt Başlıklar | Durum |
| :--- | :--- | :---: |
| **01. Bilgi Güvenliği** | • Bilgi Güvenliği Stratejisi (CIA, TCO)<br>• Yönetişim, Risk, Uyumluluk (GRC, BCP/BIA)<br>• Güvenlik Politikaları, Farkındalık ve Oltalama | 🔶 Taslak (Katkı Bekliyor) |
| **02. Fiziksel Güvenlik** | • Fiziksel Çevre ve Veri Merkezi Güvenliği<br>• Güvenli Cihaz İmhası ve Veri Yok Etme | 🔶 Taslak (Katkı Bekliyor) |
| **03. Donanım Güvenliği** | • Çip (TPM) ve Firmware (Secure Boot) Güvenliği<br>• Tedarik Zinciri Riskleri ve Sahte Bileşenler | 🔶 Taslak (Katkı Bekliyor) |
| **04. Kimlik Güvenliği** | • Kimlik Yönetimi (IAM) ve Erişim Modelleri<br>• Ayrıcalıklı Erişim Yönetimi (PAM, MFA, SSO)<br>• Sıfır Güven (Zero Trust) ve Cihaz İzolasyonu | 🔶 Taslak (Katkı Bekliyor) |
| **05. Veri Güvenliği** | • Kriptografi, Şifreleme ve Hash Algoritmaları<br>• Veri Sınıflandırma ve Sızıntı Önleme (DLP)<br>• Yedekleme Stratejileri (3-2-1) ve Değiştirilemez Kurtarma | 🔶 Taslak (Katkı Bekliyor) |
| **06. Ağ Güvenliği** | • Ağ İletişim Temelleri, DMZ ve Segmentasyon<br>• NGFW, IDS/IPS ve Derin Paket Analizi (DPI)<br>• Ağ Saldırı Vektörleri (DDoS, MitM) ve Savunma<br>• Kablosuz Ağlar ve Güvenli Uzaktan Erişim (VPN/ZTNA) | 🔶 Taslak (Katkı Bekliyor) |
| **07. Uç Nokta Güvenliği** | • OS Hardening ve Uç Nokta Koruması (EDR/XDR)<br>• Zararlı Yazılım Analizi ve Adli Bilişim | 🔶 Taslak (Katkı Bekliyor) |
| **08. Mobil Güvenlik** | • Kurumsal Mobilite (MDM/MAM/BYOD) ve Tehditler | 🔶 Taslak (Katkı Bekliyor) |
| **09. E-Posta Güvenliği** | • E-Posta Doğrulama Protokolleri (SPF/DKIM/DMARC)<br>• Gelişmiş E-Posta Tehditleri (BEC/Phishing) ve SEG | 🔶 Taslak (Katkı Bekliyor) |
| **10. Uygulama Güvenliği** | • Güvenli Yazılım Geliştirme (SDLC) ve DevSecOps<br>• Web Uygulaması ve API Güvenliği (OWASP Top 10) | 🔶 Taslak (Katkı Bekliyor) |
| **11. Bulut ve Sanallaştırma Güvenliği** | • Sanallaştırma Mimarileri ve Bulut Bilişim Servis Modelleri<br>• Konteyner Güvenliği ve Kod Olarak Altyapı (IaC)<br>• Bulut Güvenlik Mimarileri (CSPM, CWPP, CASB, CNAPP) | 🔶 Taslak (Katkı Bekliyor) |
| **12. Endüstriyel Sistem Güvenliği** | • OT/ICS Sistemleri, Purdue Modeli ve Güvenli IT/OT Entegrasyonu | 🔶 Taslak (Katkı Bekliyor) |
| **13. Yapay Zeka Güvenliği** | • Yapay Zeka (LLM) Tehditleri ve Prompt Injection | 🔶 Taslak (Katkı Bekliyor) |
| **14. Operasyonel Güvenlik** | • SOC/NOC Entegrasyonu ve Yeni Nesil Merkezi Log Yönetimi (SIEM/SOAR)<br>• Tehdit Avcılığı, Siber İstihbarat (CTI) ve Aldatma (Honeypot)<br>• Olay Müdahale (Incident Handling), Playbook ve Delil Zinciri | 🔶 Taslak (Katkı Bekliyor) |

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

* **🏗️ Yapı:** 14 Bölüm, 32 Alt Başlık (Markdown Dosyaları)
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
