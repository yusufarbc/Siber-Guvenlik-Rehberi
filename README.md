# 📚 Kapsamlı Siber Güvenlik El Kitabı

[![LaTeX](https://img.shields.io/badge/Made%20with-LaTeX-1f425f.svg)](https://www.latex-project.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Turkish](https://img.shields.io/badge/Language-Turkish-red.svg)](#)

> **Modern siber güvenlik profesyonelleri için kapsamlı, güncel ve uygulamalı bir rehber**

## 📖 Hakkında

Bu kitap, siber güvenlik alanında çalışan profesyoneller, öğrenciler ve bu alanda kariyer yapmak isteyen herkes için tasarlanmış kapsamlı bir el kitabıdır. Teorik bilgiden pratik uygulamalara, temel kavramlardan ileri düzey tekniklere kadar geniş bir yelpazede konuları kapsar.

## 🎯 Hedef Kitle

- **Siber Güvenlik Uzmanları** - Bilgilerini derinleştirmek isteyenler
- **IT Profesyonelleri** - Güvenlik alanına geçiş yapmak isteyenler  
- **Üniversite Öğrencileri** - Siber güvenlik eğitimi alanlar
- **Sistem Yöneticileri** - Güvenlik sorumluluğu olanlar
- **Yöneticiler** - Siber güvenlik stratejileri geliştiren karar vericiler

## 📑 İçerik Yapısı

### 🔐 **Bölüm 1: Bilgi Güvenliği ve Veri Koruma**
- CIA Triad ve temel güvenlik ilkeleri
- Risk yönetimi metodolojileri  
- Şifreleme teknolojileri ve anahtar yönetimi
- Veri sınıflandırma ve yaşam döngüsü

### 🌐 **Bölüm 2: Ağ Güvenliği Mimarisi ve Altyapı Koruma**
- Defense-in-Depth ve Zero Trust mimarileri
- Next-Generation Firewall ve IDS/IPS sistemleri
- VPN teknolojileri ve kablosuz ağ güvenliği

### 💻 **Bölüm 3: Endpoint ve Sistem Güvenliği**
- EPP, EDR ve XDR platformları
- İşletim sistemi sertleştirme teknikleri
- Mobil cihaz yönetimi (MDM/MAM)

### 🛠️ **Bölüm 4: Uygulama Güvenliği ve DevSecOps**
- Güvenli yazılım geliştirme yaşam döngüsü (SSDLC)
- OWASP Top 10 ve web uygulama güvenliği
- API güvenliği ve mikroservis mimarileri
- CI/CD pipeline güvenlik entegrasyonu

### ☁️ **Bölüm 5: Bulut ve İş Yükü Güvenliği**
- Paylaşılan sorumluluk modeli
- Konteyner ve Kubernetes güvenliği
- Sunucusuz (serverless) güvenlik
- Bulut kimlik ve erişim yönetimi

### 🔧 **Bölüm 6: Donanım ve Fiziksel Güvenlik**
- Hardware Security Module (HSM) ve TPM
- Firmware güvenliği ve secure boot
- IoT ve gömülü cihaz güvenliği
- Fiziksel erişim kontrolleri

### 🆔 **Bölüm 7: Kimlik ve Erişim Yönetimi (IAM)**
- Dijital kimlik yaşam döngüsü yönetimi
- Çok faktörlü kimlik doğrulama (MFA)
- Privileged Access Management (PAM)
- Single Sign-On (SSO) ve federasyon

### 🕵️ **Bölüm 8: Siber Tehdit İstihbaratı ve Tehdit Avcılığı**
- Threat Intelligence yaşam döngüsü
- MITRE ATT&CK framework entegrasyonu
- APT (Advanced Persistent Threat) tespiti
- Malware analizi ve reverse engineering

### 🚨 **Bölüm 9: Olay Müdahale ve Adli Bilişim**
- SANS ve NIST DFIR metodolojileri
- Dijital delil toplama ve analiz
- Olay sınıflandırma ve önceliklendirme
- Forensik araçlar ve teknikler

### 📊 **Bölüm 10: Yönetişim, Risk Yönetimi ve Uyumluluk (GRC)**
- Board-level güvenlik yönetişimi
- FAIR risk analizi metodolojisi
- Düzenleyici uyumluluk çerçeveleri
- Güvenlik metrikleri ve performans ölçümü

### 🎯 **Bölüm 11: Sızma Testi ve Etik Hacking**
- Penetration testing metodolojileri (PTES, OWASP)
- Red team operasyonları
- Sosyal mühendislik testleri
- Bug bounty programları

### 🔍 **Bölüm 12: Malware Analizi ve Tersine Mühendislik**
- Statik ve dinamik malware analizi
- Reverse engineering teknikleri
- Sandbox ortamları ve güvenli analiz
- YARA kuralları ve IOC geliştirme

### 👥 **Bölüm 13: Sosyal Mühendislik ve İnsan Faktörü**
- Psikolojik manipülasyon teknikleri
- Phishing ve spear-phishing saldırıları
- Güvenlik farkındalığı eğitimleri
- İç tehdit tespiti ve önleme

### 🛡️ **Bölüm 14: Güvenlik Operasyonları ve SOC/NOC Yönetimi**
- Security Operations Center (SOC) mimarisi
- SIEM platform yönetimi ve log analizi
- SOAR (Security Orchestration, Automation and Response)
- Tehdit avcılığı operasyonları

## 🛠️ Teknik Özellikler

- **Format**: LaTeX ile profesyonel dizgi
- **Sayfa Sayısı**: ~226 sayfa (11pt font, 1.5cm margin)
- **Dil**: Türkçe
- **Kod Örnekleri**: Syntax highlighting ile vurgulanmış
- **Tablolar ve Şekiller**: Detaylı görsel destek
- **Referanslar**: Güncel kaynaklar ve standartlar

## 🚀 Kurulum ve Derleme

### Gereksinimler
- **TeX Live** veya **MiKTeX** (XeLaTeX desteği ile)
- **Git** (repository klonlamak için)

### Derleme Adımları

```bash
# Repository'yi klonlayın
git clone https://github.com/yusufarbc/Siber-Guvenlik-Rehberi.git
cd Siber-Guvenlik-Rehberi

# LaTeX ile derleyin (XeLaTeX gerekli)
xelatex main.tex
xelatex main.tex  # Referansları düzeltmek için ikinci kez çalıştırın

# Alternatif olarak latexmk kullanabilirsiniz
latexmk -xelatex main.tex
```

### PDF Çıktısı
Derleme sonrasında `main.pdf` dosyası oluşacaktır.

## 📁 Proje Yapısı

```
📦 Siber-Guvenlik-Rehberi/
├── 📄 main.tex              # Ana LaTeX dosyası
├── 📁 data/                  # Bölüm dosyaları
│   ├── 📄 1.tex             # Bilgi Güvenliği ve Veri Koruma
│   ├── 📄 2.tex             # Ağ Güvenliği Mimarisi
│   ├── 📄 ...               # Diğer bölümler
│   └── 📄 14.tex            # SOC/NOC Yönetimi
├── 📁 img/                   # Görseller ve şekiller
├── 📄 .gitignore            # Git ignore kuralları
└── 📄 README.md             # Bu dosya
```

## 🤝 Katkıda Bulunma

Bu proje açık kaynaklı bir eğitim materyalidir. Katkılarınızı bekliyoruz!

### Nasıl Katkıda Bulunabilirsiniz?
1. **Fork** edin
2. Yeni bir **branch** oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi **commit** edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi **push** edin (`git push origin yeni-ozellik`)
5. **Pull Request** oluşturun

### Katkı Alanları
- 📝 İçerik güncellemeleri ve düzeltmeler
- 🔧 Yeni teknik konular ve örnek senaryolar  
- 🌍 Çeviri katkıları
- 🐛 Hata bildirimleri ve düzeltmeler
- 📊 Grafik ve görsel iyileştirmeler

## 📜 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.

## ✍️ Yazar

**Yusuf Talha ARABACI**
- 🐙 GitHub: [@yusufarbc](https://github.com/yusufarbc)
- 📧 E-posta: [Kişisel e-posta adresiniz]
- 💼 LinkedIn: [LinkedIn profiliniz]

## 🙏 Teşekkürler

Bu kitabın hazırlanmasında katkıda bulunan tüm açık kaynak topluluğuna, siber güvenlik profesyonellerine ve konunun uzmanlarına teşekkürlerimizi sunarız.

## 📊 İstatistikler

- **Toplam Satır Sayısı**: ~6.500+ satır kod
- **Bölüm Sayısı**: 14 ana bölüm
- **Alt Konu Sayısı**: 100+ detaylı alt başlık
- **Son Güncelleme**: Eylül 2025

---

⭐ **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

📢 **Güncellemelerden haberdar olmak için "Watch" butonuna tıklayın!**
