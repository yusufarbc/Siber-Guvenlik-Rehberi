# 📚 Kapsamlı Siber Güvenlik El Kitabı

[![LaTeX](https://img.shields.io/badge/Made%20with-LaTeX-1f425f.svg)](https://www.latex-project.org/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Turkish](https://img.shields.io/badge/Language-Turkish-red.svg)](#)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-WELCOME-brightgreen.svg?style=for-the-badge)](#-katki-davetliyiz)

> **🎯 Modern siber güvenlik profesyonelleri için kapsamlı, güncel ve tamamen Türkçe rehber**

## 📖 Proje Hakkında

Bu **açık kaynaklı** siber güvenlik el kitabı, Türkiye'deki **Türkçe kaynak eksikliğini** gidermek için geliştirilmiştir. 14 bölüm halinde organize edilmiş **230+ sayfalık** kapsamlı içerik sunmaktadır.

**🎯 Hedef Kitle**: Siber güvenlik uzmanları, IT profesyonelleri, üniversite öğrencileri, sistem yöneticileri

**📊 İçerik Özeti**:
- 📄 **78,000+ kelime** detaylı içerik
- 📊 **65+ tablo** ve karşılaştırma matrisleri  
- 🖼️ **25+ görsel** ve teknik diagram
- 🔧 **Pratik örnekler** ve gerçek dünya senaryoları

## 📑 İçindekiler

### 🔐 **Temel Güvenlik Kavramları**
| Bölüm | Konu | Durum | Kelime |
|-------|------|-------|--------|
| **1** | Bilgi Güvenliği ve Veri Koruma | ✅ İyi | 7,732 |
| **2** | Ağ Güvenliği Mimarisi | ✅ İyi | 5,725 |
| **3** | Endpoint ve Sistem Güvenliği | ✅ İyi | 5,998 |

### ☁️ **Modern Teknolojiler**
| Bölüm | Konu | Durum | Kelime |
|-------|------|-------|--------|
| **4** | Uygulama Güvenliği ve DevSecOps | 🔶 Orta | 5,527 |
| **5** | Bulut ve İş Yükü Güvenliği | 🔶 Orta | 5,854 |
| **6** | Donanım ve Fiziksel Güvenlik | 🔶 Orta | 5,397 |

### 🛡️ **Kimlik ve Erişim Yönetimi**
| Bölüm | Konu | Durum | Kelime |
|-------|------|-------|--------|
| **7** | Kimlik ve Erişim Yönetimi (IAM) | 🔴 Yetersiz | 4,346 |

### 🕵️ **Tehdit Avcılığı ve Analiz**
| Bölüm | Konu | Durum | Kelime |
|-------|------|-------|--------|
| **8** | Siber Tehdit İstihbaratı | 🏆 Mükemmel | 14,094 |
| **9** | Olay Müdahale ve Adli Bilişim | 🔴 Yetersiz | 4,130 |
| **10** | Yönetişim, Risk ve Uyumluluk (GRC) | 🔴 Yetersiz | 3,917 |

### 🎯 **Saldırı ve Savunma**
| Bölüm | Konu | Durum | Kelime |
|-------|------|-------|--------|
| **11** | Sızma Testi ve Etik Hacking | 🟡 Orta | 4,643 |
| **12** | Malware Analizi ve Tersine Mühendislik | 🔴 Yetersiz | 3,171 |
| **13** | Sosyal Mühendislik ve İnsan Faktörü | 🔴 Yetersiz | 3,705 |

### 🏢 **Operasyonel Güvenlik**
| Bölüm | Konu | Durum | Kelime |
|-------|------|-------|--------|
| **14** | SOC/NOC Yönetimi ve Güvenlik Ops | 🔶 Orta | 5,832 |

## 🚀 Hızlı Başlangıç

### 📋 Gereksinimler
- **XeLaTeX** (MiKTeX 2024+ önerilen)
- **Git** 
- **VS Code** + LaTeX Workshop (isteğe bağlı)

### ⚡ 5 Dakikada Kurulum (Windows)
```powershell
# 1. Gerekli araçları yükleyin
winget install Microsoft.VisualStudioCode
winget install Git.Git
choco install miktex

# 2. VS Code eklentisini yükleyin  
code --install-extension James-Yu.latex-workshop

# 3. Projeyi klonlayın
git clone https://github.com/yusufarbc/Siber-Guvenlik-Rehberi.git
cd Siber-Guvenlik-Rehberi

# 4. PDF'i derleyin
xelatex main.tex
xelatex main.tex  # Referanslar için ikinci kez
```

### 🐧 Linux/macOS
```bash
# TeX Live kurulumu
sudo apt-get install texlive-full  # Ubuntu/Debian
brew install --cask mactex         # macOS

# Projeyi derleyin
git clone https://github.com/yusufarbc/Siber-Guvenlik-Rehberi.git
cd Siber-Guvenlik-Rehberi
xelatex main.tex
```

## � İçerik Geliştirme Fırsatları

### 🎯 **Öncelikli İçerik Alanları**

1. **📄 Bölüm 12 (Malware Analizi)** - 3,171 kelime → 6,000+ hedef
   - Static ve dynamic analiz yöntemleri
   - Malware aileleri ve sınıflandırma  
   - Güncel saldırı örnekleri ve vaka analizleri

2. **👥 Bölüm 13 (Sosyal Mühendislik)** - 3,705 kelime → 5,500+ hedef  
   - OSINT teknikleri ve araçları
   - Türkiye'den gerçek saldırı vakaları
   - Kurumsal farkındalık eğitimi örnekleri

3. **� İçerik Tutarlılığı**
   - Terminoloji standardizasyonu (Türkçe-İngilizce)
   - Referans formatlarının düzenlenmesi
   - Bölümler arası çapraz referansların tamamlanması

### ✏️ **Hızlı Düzeltme Fırsatları (5-30 dakika)**

| İyileştirme | Konum | Açıklama | Süre |
|-------------|-------|----------|------|
| Eksik alt başlıklar | Böl 7, IAM | Zero Trust kavramı eklenebilir | 15 dk |
| Güncel örnekler | Böl 4, DevSecOps | 2024-2025 araçları | 20 dk |
| Tablo başlıkları | Böl 8, CTI | Türkçe açıklamalar | 10 dk |

## 🤝 Katkı Davetliyiz!

Bu proje **toplumun desteğine ihtiyaç duyuyor!** Her türlü katkınız değerlidir.

### 🙋‍♂️ **Neden Katkıda Bulunmalısınız?**
- 🇹🇷 **Türkçe siber güvenlik** kaynak eksikliğini gideriyoruz
- 📚 **Açık bilim** yaklaşımıyla bilgiyi paylaşıyoruz  
- 💼 **CV'nize** açık kaynak katkısı ekleyebilirsiniz
- 🎓 **Öğrenim sürecinizi** destekleyebilirsiniz

### 🚀 **Katkı Türleri**

#### 🔰 **Başlangıç Seviyesi (5-10 dakika)**
- ⭐ **Star** vererek projeyi destekleyin
- 🐛 **Hata bildirimi** yapın (typo, format hatları)
- 💬 **Issue açın** - eksik konular, öneriler

#### 🧑‍💻 **Orta Seviye (30-60 dakika)**  
- 📝 **İçerik düzeltmeleri** - güncel bilgiler, kaynak ekleme
- 🔧 **Alt başlık ekleme** - eksik konuları tamamlama
- 💡 **Pratik örnekler** - gerçek dünya senaryoları

#### 🚀 **İleri Seviye (1+ saat)**
- 📚 **Yeni bölüm içerikleri** - uzmanlık alanlarınızdan detaylar
- 📊 **Görsel zenginleştirme** - infografik, akış şeması, kavram haritası
- 📖 **Vaka çalışmaları** - gerçek dünya örnekleri ve analizler

### 📝 **Katkıda Bulunma Süreci**
```bash
# 1. Fork & Clone
git clone https://github.com/[KULLANICI-ADINIZ]/Siber-Guvenlik-Rehberi.git

# 2. Branch oluşturun
git checkout -b bolum-X-iyilestirme

# 3. İçerik değişiklikleri yapın
# - data/X.tex dosyasını düzenleyin
# - Yeni kavramlar, örnekler, tablolar ekleyin  
# - Türkçe terminoloji kullanın

# 4. Commit & Push  
git add data/
git commit -m "📝 Bölüm X: [Konu] içeriği genişletildi"
git push origin bolum-X-iyilestirme

# 5. Pull Request açın
```

Detaylı katkı rehberi için: **[CONTRIBUTING.md](CONTRIBUTING.md)**

## 📜 Lisans

**Creative Commons Attribution 4.0 International (CC BY 4.0)**

✅ **Serbest kullanım**: Eğitim, ticari, uyarlama, yeniden dağıtım  
📝 **Tek gereksinim**: Kaynak gösterme

```
"Kapsamlı Siber Güvenlik El Kitabı" by Yusuf Talha ARABACI 
is licensed under CC BY 4.0
Kaynak: https://github.com/yusufarbc/Siber-Guvenlik-Rehberi
```

## 📊 Proje İstatistikleri

- **📄 Toplam İçerik**: 78,000+ kelime, 230+ sayfa
- **🏗️ Yapı**: 14 bölüm, 101+ section, 436+ subsection  
- **📊 Veri**: 65+ tablo, 25+ görsel, 200+ kod örneği
- **🔄 Güncellik**: Son güncelleme Eylül 2025
- **🌍 Dil**: Türkçe (kapsamlı siber güvenlik kaynağı)

## ✍️ Yazar

**Yusuf Talha ARABACI**
- 🐙 GitHub: [@yusufarbc](https://github.com/yusufarbc)
- 📧 E-posta: [yusufarbc@yandex.com](mailto:yusufarbc@yandex.com)  
- 💼 LinkedIn: [yusufarbc](https://www.linkedin.com/in/yusufarbc/)

## 🙏 Teşekkürler

Bu projeye katkıda bulunan tüm açık kaynak topluluğuna, siber güvenlik profesyonellerine ve bu kitabı kullanarak kendilerini geliştiren herkese teşekkürlerimizi sunarız.

---

## 🚨 DESTEK ÇAĞRISI

> **Bu proje tamamen gönüllü çabayla gelişiyor. HERKESİN desteğine ihtiyacımız var!**

**🎯 HEMEN YAPABİLECEĞİNİZ 3 EYLEM:**
1. ⭐ **[STAR VERİN]** - Görünürlüğü artırın!
2. 👀 **[WATCH]** - Güncellemelerden haberdar olun!  
3. 🤝 **[CONTRIBUTE]** - En küçük katkı bile değerli!

**📞 İLETİŞİM:**
- 🔥 **Acil öneriler**: [Issue açın](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/issues/new)
- 💬 **Soru & yardım**: [Discussion başlatın](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/discussions)
- 📧 **Direkt mesaj**: yusufarbc@yandex.com

**🌟 Birlikte Türkiye'nin siber güvenlik literatürüne katkı sağlayalım!**