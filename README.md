# 📚 Kapsamlı Siber Güvenlik El Kitabı

[![LaTeX](https://img.shields.io/badge/Made%20with-LaTeX-1f425f.svg)](https://www.latex-project.org/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Turkish](https://img.shields.io/badge/Language-Turkish-red.svg)](#)
[![Contributions Welcome](ht## 🔍 İÇERİK ANALİZİ VE GELİŞTİRME PLANI

### 📊 **Bölüm Bazında Kelime Sayısı Analizi**

| Bölüm | Konu | Kelime | Section | Subsection | Tablo | Görsel | Durum |
|-------|------|--------|---------|------------|-------|--------|-------|
| **8** | **Siber Tehdit İstihbaratı** | **14,094** | 1 | 37 | 27 | 0 | 🏆 **En Kapsamlı** |
| **1** | **Bilgi Güvenliği** | **7,732** | 8 | 35 | 6 | 4 | ✅ **İyi** |
| **3** | **Endpoint Güvenliği** | **5,998** | 6 | 37 | 4 | 2 | ✅ **İyi** |
| **5** | **Bulut Güvenliği** | **5,854** | 7 | 34 | 3 | 0 | 🔶 **Görsel Yetersiz** |
| **14** | **SOC/NOC Yönetimi** | **5,832** | 7 | 43 | 3 | 0 | 🔶 **Görsel Yetersiz** |
| **2** | **Ağ Güvenliği** | **5,725** | 7 | 36 | 7 | 1 | ✅ **İyi** |
| **4** | **Uygulama Güvenliği** | **5,527** | 10 | 47 | 2 | 3 | 🔶 **Tablo Yetersiz** |
| **6** | **Donanım Güvenliği** | **5,397** | 6 | 35 | 3 | 0 | 🔶 **Görsel Yetersiz** |
| **11** | **Sızma Testi** | **4,643** | 6 | 30 | 5 | 1 | 🟡 **Orta** |
| **7** | **Kimlik Yönetimi** | **4,346** | 6 | 30 | 2 | 0 | 🔴 **Yetersiz** |
| **9** | **Olay Müdahale** | **4,130** | 6 | 36 | 3 | 4 | 🔴 **Yetersiz** |
| **10** | **GRC** | **3,917** | 7 | 31 | 2 | 1 | 🔴 **Yetersiz** |
| **13** | **Sosyal Mühendislik** | **3,705** | 6 | 28 | 4 | 0 | 🔴 **Yetersiz** |
| **12** | **Malware Analizi** | **3,171** | 7 | 24 | 4 | 0 | 🔴 **En Yetersiz** |

### 🚨 **ACILEN GELİŞTİRİLMESİ GEREKEN BÖLÜMLER**

#### 🔴 **Kritik Seviye - İçerik Yetersiz (< 4,500 kelime)**

1. **📄 Bölüm 12: Malware Analizi** `3,171 kelime` - **EN YETERSIZ**
   - ❌ **Eksik konular**: Dinamik analiz ortamları, sandbox konfigürasyonu
   - ❌ **Yetersiz araçlar**: Ghidra, IDA Pro, Wireshark detaylı kullanımı
   - ❌ **Görsel eksik**: Analiz süreç diagramları, araç arayüzleri
   - ✅ **Güçlü yönü**: Tablo kullanımı iyi (4 tablo)

2. **👥 Bölüm 13: Sosyal Mühendislik** `3,705 kelime`
   - ❌ **Eksik konular**: OSINT teknikleri, psikolojik profilleme
   - ❌ **Yetersiz örnekler**: Gerçek dünya senaryoları
   - ❌ **Görsel eksik**: Hiç görsel yok
   - ✅ **İhtiyaç**: Vaka analizleri, koruma stratejileri

3. **📊 Bölüm 10: GRC (Governance, Risk, Compliance)** `3,917 kelime`
   - ❌ **Eksik konular**: Board governance, risk matrisleri
   - ❌ **Yetersiz framework'ler**: ISO 27001, SOX detayları
   - ❌ **Tablo yetersiz**: Sadece 2 tablo
   - ✅ **İhtiyaç**: Compliance checklists, audit süreçleri

4. **🚨 Bölüm 9: Olay Müdahale** `4,130 kelime`
   - ❌ **Eksik konular**: Incident playbooks, forensic chain of custody
   - ❌ **Yetersiz metodoloji**: SANS vs NIST karşılaştırması
   - ✅ **Güçlü yönü**: Görsel kullanımı iyi (4 görsel)
   - ✅ **İhtiyaç**: Pratik örnekler, timeline analizi

5. **🆔 Bölüm 7: Kimlik Yönetimi** `4,346 kelime`
   - ❌ **Eksik konular**: SAML, OAuth 2.0, OpenID Connect detayları  
   - ❌ **Yetersiz PAM**: Privileged Access Management eksik
   - ❌ **Görsel eksik**: Identity lifecycle diagramları
   - ✅ **İhtiyaç**: Federation scenarios, Zero Trust integration

#### 🔶 **Orta Seviye - Geliştirilmesi Gereken (4,500-6,000 kelime)**

6. **🎯 Bölüm 11: Sızma Testi** `4,643 kelime`
   - 🔶 **Eksik alanlar**: Bug bounty metodolojileri, mobile pentesting
   - 🔶 **Tool coverage**: Burp Suite, OWASP ZAP advanced features
   - ✅ **Güçlü yönü**: Tablo kullanımı yeterli (5 tablo)

7. **🔧 Bölüm 6: Donanım Güvenliği** `5,397 kelime`
   - 🔶 **Görsel eksik**: Hardware diagramları, TPM şemaları
   - 🔶 **IoT security**: Daha detaylı coverage gerekiyor
   - ✅ **İçerik**: Kelime sayısı yeterli seviyede

8. **☁️ Bölüm 5: Bulut Güvenliği** `5,854 kelime`
   - 🔶 **Görsel eksik**: Bulut mimarisi diagramları
   - 🔶 **Container security**: Kubernetes security detayları
   - ✅ **İçerik**: İyi seviyede

### 📊 **TABLO FORMAT SORUNLARI VE DÜZELTİLMESİ GEREKEN ALANLAR**

#### 🚨 **Acil Tablo Düzeltmeleri Gerekiyor**

Proje genelinde tablolarda tespit edilen kritik sorunlar:

1. **📋 Tekrarlanan İçerik Sorunu**
   - ❌ **Bölüm 12**: Malware türleri tablosunda aynı satırlar tekrarlanıyor
   - ❌ **Bölüm 13**: Sosyal mühendislik teknikleri tablosunda duplicated entries
   - ❌ **Bölüm 8**: Threat intelligence platformları tablosunda inconsistent formatting

2. **📐 Format Tutarsızlıkları**
   - 🔧 **Column width** problemleri - bazı tablolarda metin taşıyor
   - 🔧 **Alignment** sorunları - left/right/center hizalama karışık
   - 🔧 **Font size** tutarsızlığı - \scriptsize, \footnotesize, \small karışık kullanım
   - 🔧 **Row color** - tableheadcolor standardı tüm tablolarda uygulanmamış

3. **📊 Eksik Tablo Başlıkları ve Referanslar**
   - ❌ **Caption** eksiklikleri - bazı tablolar başlıksız
   - ❌ **Label** problemleri - referans verilemeyen tablolar
   - ❌ **Cross-reference** hataları - \ref{} linklerinde sorunlar

#### 🛠️ **Tablo Standardizasyonu Gereksinimleri**

**Hedef Tablo Formatı:**
```latex
\begin{longtable}{|p{3cm}|p{4cm}|p{6cm}|}
\caption{Standart Tablo Başlığı}
\label{tab:unique_label}\\
\hline
\rowcolor{tableheadcolor}
\textbf{Sütun 1} & \textbf{Sütun 2} & \textbf{Sütun 3} \\
\hline
\endfirsthead
\multicolumn{3}{c}{\small\tablename\ \thetable\ -- devamı} \\
\hline
\rowcolor{tableheadcolor}
\textbf{Sütun 1} & \textbf{Sütun 2} & \textbf{Sütun 3} \\
\hline
\endhead
\hline
\multicolumn{3}{r}{\small Devamı sonraki sayfada} \\
\endfoot
\hline
\endlastfoot
İçerik 1 & İçerik 2 & İçerik 3 \\
\hline
\end{longtable}
```

#### 📋 **Bölüm Bazında Tablo Düzeltme Listesi**

| Bölüm | Tablo Sayısı | Sorun Türü | Öncelik | Tahmini Süre |
|-------|-------------|------------|---------|--------------|
| **Böl 12** | 4 tablo | Tekrar + Format | 🔴 **P0** | 2 saat |
| **Böl 13** | 4 tablo | Duplikasyon | 🔴 **P0** | 1.5 saat |
| **Böl 8** | 27 tablo | Format tutarsızlığı | 🟠 **P1** | 4 saat |
| **Böl 2** | 7 tablo | Column width | 🟡 **P2** | 2 saat |
| **Böl 1** | 6 tablo | Caption eksik | 🟡 **P2** | 1 saat |
| **Böl 11** | 5 tablo | Alignment | 🟡 **P2** | 1.5 saat |
| **Diğer** | 12 tablo | Küçük düzeltmeler | 🟢 **P3** | 3 saat |

**Toplam Tahmin Edilen Süre**: ~15 saat tablo düzeltme çalışması

#### 🎯 **Tablo İyileştirme Hedefleri**

1. **📊 Standardizasyon** (1-2 gün)
   - Tüm tablolar için uniform format
   - Consistent column sizing
   - Standard color scheme

2. **📝 Accessibility** (1 gün) 
   - Proper captions ve labels
   - Screen reader friendly structure
   - Logical reading order

3. **📱 Responsiveness** (1 gün)
   - Mobile-friendly table layouts
   - Appropriate breakpoints
   - Readable on smaller screens

4. **🔗 Integration** (0.5 gün)
   - Cross-reference links
   - Table of tables generation
   - Index integration

### 🎯 **ÖNCELİKLİ GELİŞTİRME PLANI**

#### **FAZE 1: Kritik Bölümler (1-2 hafta)**
1. 📄 **Bölüm 12** → 3,171'den **6,000+ kelimeye** çıkarılması
   - Dinamik analiz detayları (+1,000 kelime)
   - Reverse engineering metodolojileri (+1,000 kelime)  
   - Practical tool usage (+800 kelime)

2. 👥 **Bölüm 13** → 3,705'ten **5,500+ kelimeye** çıkarılması
   - OSINT teknikleri detayları (+800 kelime)
   - Vaka analizleri ve senaryolar (+1,000 kelime)

3. 📊 **Bölüm 10** → 3,917'den **5,500+ kelimeye** çıkarılması  
   - Compliance framework detayları (+800 kelime)
   - Risk yönetimi metodolojileri (+800 kelime)

#### **FAZE 2: Görsel İyileştirmeler (2-3 hafta)**
- 🖼️ **Tüm bölümlere** en az 2-3 görsel eklenmesi
- 📊 **Tablo standardizasyonu** ve format iyileştirmesi
- 📈 **Süreç diagramları** ve **workflow şemaları**

#### **FAZE 3: İleri Konular (3-4 hafta)**
- 🤖 **AI/ML in Cybersecurity** (Yeni Bölüm 15)
- 🛡️ **Zero Trust Architecture** detaylandırması
- 📱 **Mobile Security** kapsamlı rehber

### 💡 **KATKı ÖNCELİKLERİ**

| Öncelik | Alan | Hedef | Etki | Süre |
|---------|------|--------|------|------|
| 🚨 **P0** | Bölüm 12 içerik | +3,000 kelime | Kritik | 8-12 saat |
| 🚨 **P0** | Bölüm 13 içerik | +1,800 kelime | Kritik | 6-8 saat |
| � **P0** | **Tablo düzeltmeleri** | **65+ tablo standardize** | **Kritik** | **15 saat** |
| �🔥 **P1** | Tüm bölümlere görsel | +25 görsel | Yüksek | 20-30 saat |
| 🔥 **P1** | **Tekrarlanan içerik temizleme** | **Böl 8,12,13** | **Yüksek** | **4 saat** |
| ⚡ **P2** | Format tutarlılığı | Column alignment | Orta | 6 saat |
| ⚡ **P2** | Caption ve label ekleme | Cross-reference | Orta | 3 saat |
| 🟢 **P3** | Yeni bölümler | +15,000 kelime | Düşük | 50+ saat |

### 📊 **TABLO DÜZELTMESİ - HIZLI BAŞLANGIÇ KİTİ**

**Acil düzeltme gereken tablolar için copy-paste hazır şablonlar:**

#### 🔧 **Standart 3-Sütun Tablo Şablonu**
```latex
\begin{longtable}{|p{3cm}|p{4cm}|p{6cm}|}
\caption{Açıklayıcı Tablo Başlığı}
\label{tab:benzersiz_etiket}\\
\hline
\rowcolor{tableheadcolor}
\textbf{Kategori} & \textbf{Açıklama} & \textbf{Detaylar} \\
\hline
\endfirsthead
\multicolumn{3}{c}{\small\tablename\ \thetable\ -- devamı} \\
\hline
\rowcolor{tableheadcolor}
\textbf{Kategori} & \textbf{Açıklama} & \textbf{Detaylar} \\
\hline
\endhead
\hline
\multicolumn{3}{r}{\small Devamı sonraki sayfada} \\
\endfoot
\hline
\endlastfoot
% İçerik buraya
\end{longtable}
```

#### 🛠️ **Karşılaştırma Tablosu Şablonu**
```latex
\begin{longtable}{|p{2.5cm}|p{3cm}|p{3cm}|p{3.5cm}|}
\caption{Teknoloji/Araç Karşılaştırması}
\label{tab:comparison_table}\\
\hline
\rowcolor{tableheadcolor}
\textbf{Çözüm} & \textbf{Güçlü Yanlar} & \textbf{Zayıf Yanlar} & \textbf{Kullanım Alanı} \\
\hline
\endfirsthead
% Header repeat kodu
\endhead
% Footer kodu  
\endfoot
\hline
\endlastfoot
% Karşılaştırma içeriği
\end{longtable}
```

### 🎯 **ÖNCELİKLİ İHTİYAÇLARIMIZ**

#### 🚨 **Acil Müdahale Gerekiyor (Bu Hafta)**
1. � **TABLO ACİL DÜZELTMELERİ** → Tekrarlanan içerik, format sorunları (15 saat)
2. �📄 **Bölüm 12: Malware Analizi** → Acil içerik genişletmesi (3,171 → 6,000+ kelime)
3. 👥 **Bölüm 13: Sosyal Mühendislik** → OSINT ve vaka analizleri (+1,800 kelime)

#### 🔥 **Yüksek Öncelik (Bu Ay)**  
4. 🆔 **Bölüm 7: Kimlik Yönetimi** → OAuth, SAML, PAM detayları (+1,500 kelime)
5. 🖼️ **Görsel iyileştirmeler** → Tüm bölümler için diagram ve şemalar (+25 görsel)
6. � **Cross-reference düzeltmeleri** → Tablo ve şekil referansları
7. 🧹 **Duplikasyon temizleme** → Bölüm 8, 12, 13'teki tekrarlar

#### ⚡ **Orta Öncelik (Gelecek Ay)**
8. 🤖 **AI/ML in Cybersecurity** → Tamamen yeni bölüm (Bölüm 15)
9. 🛡️ **Zero Trust Architecture** → Bölüm 2'de genişletme
10. 🚨 **Incident Response** playbook örnekleri → Bölüm 9'da pratik senaryolar

### 🛠️ **HIZLI DÜZELTİLEBİLİR SORUNLAR (5-30 dakika)**

**Katkıda bulunmak isteyenler için kolay başlangıç görevleri:**

| Sorun Türü | Konum | Düzeltme | Süre | Zorluk |
|------------|-------|----------|------|--------|
| 📊 Tekrar satır | Böl 12, satır 67-76 | 10 duplike satırı sil | 5 dk | 🟢 Kolay |
| 📐 Column width | Böl 8, tablo 3 | `p{3cm}` → `p{2.5cm}` | 2 dk | 🟢 Kolay |
| 🏷️ Caption eksik | Böl 13, tablo 2 | `\caption{}` ekle | 3 dk | 🟢 Kolay |
| 🎨 Color missing | Böl 11, tüm tablolar | `\rowcolor{tableheadcolor}` | 10 dk | 🟡 Orta |
| 🔗 Label eksik | Böl 6, tablo 1-3 | `\label{tab:xyz}` ekle | 15 dk | 🟡 Orta |
| 📱 Font size | Böl 2, büyük tablolar | `\footnotesize` ekle | 5 dk | 🟢 Kolay |

**💡 Bu küçük düzeltmeler bile projeye büyük katkı sağlar!**g.shields.io/badge/Contributions-WELCOME-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)
[![Help Wanted](https://img.shields.io/badge/HELP-WANTED-red.svg?style=for-the-badge)](#-katkidaki-herkes-davetlidir)

> **Modern siber güvenlik profesyonelleri için kapsamlı, güncel ve uygulamalı bir rehber**

## 📖 Hakkında

Bu kitap, **siber güvenlik alanındaki Türkçe kaynak eksikliğini gidermek** amacıyla hazırlanmış kapsamlı bir el kitabıdır. Siber güvenlik alanında çalışan profesyoneller, öğrenciler ve bu alanda kariyer yapmak isteyen herkes için tasarlanmıştır. Teorik bilgiden pratik uygulamalara, temel kavramlardan ileri düzey tekniklere kadar geniş bir yelpazede konuları kapsar.

### 🎯 Proje Amacı
Türkiye'de siber güvenlik alanında kaliteli, güncel ve kapsamlı **Türkçe kaynak** bulma zorluğu yaşayan profesyoneller ve öğrenciler için erişilebilir bir rehber oluşturmak. Bu proje ile:
- Siber güvenlik eğitiminde dil bariyerini ortadan kaldırmak
- Türkçe siber güvenlik literatürüne katkı sağlamak  
- Açik kaynak yaklaşımıyla toplumsal fayda yaratmak
- Modern siber güvenlik konularını Türkçe olarak belgelemek
- Teorik bilgiyi pratik örneklerle destekleyerek öğrenmeyi kolaylaştırmak

### 🆕 Son Güncellemeler (Eylül 2025)
- ✅ **NOC (Network Operations Center)** konuları kapsamlı şekilde genişletildi
- ✅ **Failover ve yedeklilik** mekanizmaları detaylandırıldı  
- ✅ **Network monitoring** ve **performance management** eklendi
- ✅ **Capacity planning** ve **automation** konuları eklendi
- ✅ **Change management** süreçleri ve **ITIL** best practice'leri
- ✅ Tüm bölümlerde **\section*{Giriş}** tutarlılığı sağlandı
- ✅ LaTeX syntax hataları düzeltildi ve derleme optimize edildi
- ✅ README kapsamlı güncellendi ve proje istatistikleri eklendi

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

### 📄 **Belge Özellikleri**
- **Format**: XeLaTeX ile profesyonel dizgi (Windows MiKTeX uyumlu)
- **Sayfa Sayısı**: ~230 sayfa (optimized 11pt font, 1.5cm margin)
- **Font**: Times New Roman, Arial, Courier New (Windows system fonts)
- **Dil**: Türkçe Unicode desteği (Polyglossia paketi)
- **Kodlama**: UTF-8 (Windows Notepad/VS Code uyumlu)
- **PDF Boyutu**: ~960KB (optimize edilmiş)

### 🖥️ **Windows Uyumluluğu** 
- ✅ **MiKTeX 2024+** (otomatik paket yüklemeli)
- ✅ **VS Code + LaTeX Workshop** (one-click derleme)
- ✅ **Windows 10/11** (PowerShell 5.1+ destekli)
- ✅ **TeXworks/TeXstudio** (alternatif editörler)
- ✅ **Command Prompt & PowerShell** (CLI derleme)

### 📊 **İçerik Detayları**
- **Kod Örnekleri**: 200+ syntax highlighted snippet  
- **Tablolar**: 50+ detaylı karşılaştırma tablosu (longtable)
- **Şekiller**: 25+ teknik diagram ve görsel
- **Referanslar**: 100+ güncel kaynak ve endüstri standardı
- **Pratik Senaryolar**: Gerçek dünya örnekleri
- **Terminal Komutları**: Windows PowerShell uyumlu

## 🚀 Kurulum ve Derleme

### 🖥️ Windows Kullanıcıları için Detaylı Kurulum

#### 1️⃣ **MiKTeX Kurulumu** (Önerilen - Windows için optimize)

```powershell
# Chocolatey ile otomatik kurulum
choco install miktex

# Veya Manuel Kurulum:
# 1. https://miktex.org/download adresinden MiKTeX'i indirin
# 2. Setup.exe'yi yönetici olarak çalıştırın  
# 3. "Install missing packages automatically" seçeneğini işaretleyin
# 4. XeLaTeX desteğini kontrol edin: Packages → Install → xelatex
```

#### 2️⃣ **Visual Studio Code Kurulumu & Konfigürasyonu**

```powershell
# VS Code kurulumu
winget install Microsoft.VisualStudioCode

# Gerekli eklentileri yükleyin:
code --install-extension James-Yu.latex-workshop
code --install-extension mathematic.vscode-latex
code --install-extension tecosaur.latex-utilities
```

**VS Code LaTeX ayarları** (`settings.json`):
```json
{
    "latex-workshop.latex.tools": [
        {
            "name": "xelatex",
            "command": "xelatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOCFILE%"
            ]
        }
    ],
    "latex-workshop.latex.recipes": [
        {
            "name": "XeLaTeX",
            "tools": ["xelatex", "xelatex"]
        }
    ],
    "latex-workshop.view.pdf.viewer": "tab"
}
```

#### 3️⃣ **Git Kurulumu**
```powershell
# Git for Windows
winget install Git.Git
```

### 🐧 Linux/macOS Kullanıcıları

#### TeX Live Kurulumu
```bash
# Ubuntu/Debian
sudo apt-get install texlive-full

# macOS (Homebrew)  
brew install --cask mactex

# Arch Linux
sudo pacman -S texlive-most
```

### 📋 Derleme Adımları

#### **Yöntem 1: Komut Satırından**
```bash
# Repository'yi klonlayın
git clone https://github.com/yusufarbc/Siber-Guvenlik-Rehberi.git
cd Siber-Guvenlik-Rehberi

# XeLaTeX ile derleyin (Türkçe font desteği için gerekli)
xelatex main.tex
xelatex main.tex  # Referansları düzeltmek için ikinci kez

# Alternatif: Otomatik derleme
latexmk -xelatex main.tex
```

#### **Yöntem 2: VS Code ile** (Windows Önerilen)
1. **VS Code'da projeyi açın**: `File → Open Folder`
2. **main.tex dosyasını açın**
3. **Ctrl+Alt+B** ile derleyin veya Command Palette'ten "LaTeX Workshop: Build"
4. **PDF preview**: Ctrl+Alt+V veya sağ tıklayıp "View LaTeX PDF"

#### **Yöntem 3: MiKTeX Console** (Windows Alternatif)
```powershell
# MiKTeX Console'u açın
# Settings → Always install missing packages on-the-fly = Yes
# Texworks'ü başlatın veya komut satırından:

cd "C:\Users\[KULLANICI]\Desktop\siber"
xelatex main.tex
```

### 🔧 Sık Karşılaşılan Sorunlar & Çözümler

| Problem | Çözüm |
|---------|--------|
| **Font hatası** | `fc-cache -fv` çalıştırın (Linux) veya MiKTeX Package Manager'dan fontspec güncelleyin |
| **Missing package** | MiKTeX: Package Manager → Install. TeX Live: `tlmgr install [paket]` |  
| **XeLaTeX bulunamadı** | PATH'e MiKTeX/bin ekleyin: `C:\Program Files\MiKTeX\miktex\bin\x64\` |
| **Türkçe karakterler** | Dosyanın UTF-8 kodlamasında kaydedildiğinden emin olun |
| **Table overflow** | Tablo genişliklerini `\textwidth` ile orantılayın |

### 📄 PDF Çıktısı
Derleme sonrasında `main.pdf` dosyası (~960KB) oluşacaktır. PDF bookmark'ları ve hyperlink'ler otomatik oluşturulur.

### ⚡ Windows için Hızlı Başlangıç (5 Dakika)

```powershell
# 1. Gerekli araçları yükleyin (tek seferde)
winget install Microsoft.VisualStudioCode
winget install Git.Git  
choco install miktex  # veya https://miktex.org/download

# 2. VS Code eklentisini yükleyin
code --install-extension James-Yu.latex-workshop

# 3. Projeyi klonlayın ve açın
git clone https://github.com/yusufarbc/Siber-Guvenlik-Rehberi.git
cd Siber-Guvenlik-Rehberi
code .

# 4. main.tex'i açıp Ctrl+Alt+B ile derleyin!
```

**🎯 İlk derleme uzun sürebilir** (MiKTeX paketleri otomatik indirecek)  
**✅ İkinci derlemeden itibaren hızlı** (~30 saniye)

## 📁 Proje Yapısı

```
📦 Siber-Guvenlik-Rehberi/
├── 📄 main.tex              # Ana LaTeX dosyası
├── 📁 data/                  # Bölüm dosyaları (1.tex - 14.tex)
│   ├── 📄 1.tex             # Bilgi Güvenliği ve Veri Koruma
│   ├── 📄 2.tex             # Ağ Güvenliği Mimarisi
│   ├── 📄 ...               # Diğer bölümler (3-13)
│   └── 📄 14.tex            # SOC/NOC Yönetimi
├── 📁 img/                   # Görseller ve teknik diagramlar
├── 📁 .github/              # GitHub otomasyonu
│   ├── 📁 workflows/        # CI/CD pipeline (LaTeX build)
│   └── 📁 ISSUE_TEMPLATE/   # Issue şablonları
├── 📄 .gitignore            # Git ignore kuralları
├── 📄 LICENSE               # Creative Commons BY 4.0
├── 📄 README.md             # Bu dosya
├── 📄 CONTRIBUTING.md       # Katkı rehberi
├── 📄 SECURITY.md           # Güvenlik politikası
└── 📁 Türkçeleştirilmiş Kaynaklar/  # Ek materyaller
```

## 🤝 KATKIDAKİ HERKES DAVETLİDİR!

> **🚨 Bu proje toplumun desteğine ihtiyaç duyuyor! Her türlü katkınız değerlidir.**

Bu **tamamen açık kaynaklı** eğitim materyali, **Türkiye'nin siber güvenlik ekosistemine** katkı sağlamayı hedefliyor. **Sizin desteğinizle** daha da güçlü hale gelecek!

### 🙋‍♂️ NEDEN KATKILARINIZA İHTİYACIMIZ VAR?

✅ **Türkçe siber güvenlik kaynak eksikliği** - Birlikte bu açığı kapatıyoruz  
✅ **Sürekli gelişen alan** - Yeni tehditler ve teknolojiler eklenmeli  
✅ **Toplumsal fayda** - Ücretsiz, kaliteli eğitim materyali oluşturuyoruz  
✅ **Açık bilim yaklaşımı** - Bilgiyi paylaştıkça çoğalıyor  

### 🚀 HEMEN KATKıDA BULUNUN!

**Her seviyeden katkı değerlidir:**

#### 🔰 **Başlangıç Seviyesi** (5-10 dakika)
- ⭐ **Star verin** - Görünürlüğü artırın
- 🐛 **Hata bildiriminde bulunun** - Typo, format hatları  
- 💬 **Issue açın** - Eksik konular, öneriler
- 📱 **Sosyal medyada paylaşın** - Projeyi tanıtın

#### 🧑‍💻 **Orta Seviye** (30-60 dakika)  
- 📝 **İçerik düzeltmeleri** - Güncel bilgiler, kaynak ekleme
- 🔧 **Yeni alt başlıklar** - Eksik konuları tamamlama  
- 💡 **Pratik örnekler** - Gerçek dünya senaryoları
- 🌍 **Dil iyileştirmeleri** - Türkçe ifade düzeltmeleri

#### 🚀 **İleri Seviye** (1+ saat)
- 📚 **Yeni bölümler** - Özel uzmanlık alanlarınız
- 🔬 **Research katkıları** - Akademik referanslar  
- 📊 **Görsel iyileştirmeler** - Şekil, diagram, tablo
- �️ **LaTeX geliştirmeleri** - Format, otomasyon

### 📋 NASIL BAŞLARIM?

```bash
# 1. Fork & Clone
git clone https://github.com/[KULLANICI-ADINIZ]/Siber-Guvenlik-Rehberi.git

# 2. Branch oluşturun  
git checkout -b benim-katkım

# 3. Değişiklikleri yapın
# Dilediğiniz .tex dosyasını editleleyin

# 4. Commit & Push
git add .
git commit -m "📝 [Konu]: Açıklama"
git push origin benim-katkım

# 5. Pull Request açın
# GitHub'da "Compare & pull request" butonuna tıklayın
```

### 💡 KATKı ÖNERİLERİ

| Katkı Türü | Açıklama | Süre | Etki |
|-------------|----------|------|------|  
| � **İçerik** | Yeni konular, güncellemeler | 1-4 saat | 🔥 Yüksek |
| 🐛 **Hata Düzeltme** | Typo, format, kaynak | 10-30 dk | ⚡ Hızlı |
| 💡 **Örnekler** | Komut, script, senaryo | 30-90 dk | 🎯 Pratik |
| 🌍 **Dil** | Türkçe düzeltme, netleştirme | 15-45 dk | 📖 Anlaşılır |
| 📊 **Görsel** | Şekil, tablo, diagram | 1-3 saat | 👀 Görsel |

### 🎯 ÖNCELİKLİ İHTİYAÇLARIMIZ

1. � **Zero Trust Architecture** detaylandırılması  
2. 🤖 **AI/ML in Cybersecurity** yeni bölüm
3. 🛡️ **Cloud Security** best practices genişletme
4. ⚡ **Incident Response** playbook örnekleri  
5. 🔐 **Kubernetes Security** derinlemesine analiz
6. 📱 **Mobile Security** kapsamlı rehber

## 📜 Lisans

Bu eğitim materyali **Creative Commons Attribution 4.0 International (CC BY 4.0)** lisansı altında yayınlanmıştır.

### ✅ İzin Verilen Kullanımlar:
- 🎓 **Eğitim amaçlı kullanım** (üniversiteler, kurslar, eğitim kurumları)
- 💼 **Ticari kullanım** (şirket eğitimleri, danışmanlık, kitap basımı) 
- 🔄 **Uyarlama ve türev eserler** (çeviri, genişletme, özelleştirme)
- 📤 **Yeniden dağıtım** (paylaşım, kopyalama, yayınlama)

### 📝 Tek Gereksinim: Atıf
```
"Kapsamlı Siber Güvenlik El Kitabı" by Yusuf Talha ARABACI 
is licensed under CC BY 4.0
Kaynak: https://github.com/yusufarbc/Siber-Guvenlik-Rehberi
```

Bu lisans sayesinde **herkes özgürce** bu materyali kullanabilir, geliştirebilir ve paylaşabilir. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.

🌍 **Daha fazla Creative Commons eseri keşfedin**: [creativecommons.org](https://creativecommons.org/)

## ✍️ Yazar

**Yusuf Talha ARABACI**
- 🐙 GitHub: [@yusufarbc](https://github.com/yusufarbc)
- 📧 E-posta: [yusufarbc@yandex.com](mailto:yusufarbc@yandex.com)
- 💼 LinkedIn: [https://www.linkedin.com/in/yusufarbc/](https://www.linkedin.com/in/yusufarbc/)

## 🙏 Teşekkürler

Bu kitabın hazırlanmasında katkıda bulunan tüm açık kaynak topluluğuna, siber güvenlik profesyonellerine ve konunun uzmanlarına teşekkürlerimizi sunarız.

## 📊 İstatistikler

- **Toplam Satır Sayısı**: 5.377+ satır profesyonel içerik
- **Bölüm Sayısı**: 14 ana bölüm
- **Ana Konu Sayısı**: 101 detaylı section
- **Alt Konu Sayısı**: 436+ kapsamlı subsection
- **Sayfa Sayısı**: ~230 sayfa (optimized layout)
- **Son Güncelleme**: Eylül 2025
- **Dil**: Türkçe (kapsamlı siber güvenlik kaynağı)

---

## 🚨 ACIL: DESTEĞİNİZE İHTİYACIMIZ VAR!

> **Bu proje tamamen gönüllü çabayla gelişiyor. Türkiye'nin siber güvenlik alanında Türkçe kaynak açığını kapatmak için HERKESİN desteğine ihtiyacımız var!**

### 🎯 HEMEN YAPABILECEĞINIZ 3 EYLEM:

1. ⭐ **[STAR VERİN]** - Projeyi destekleyin, görünürlüğü artırın!
2. � **[WATCH]** - Güncellemelerden haberdar olun!  
3. 🤝 **[CONTRIBUTE]** - En küçük katkı bile DEĞERLİ!

### 📢 PROJEYE DESTEK ÇAĞRISI

**🎓 Öğrenciyseniz** → Ödev, proje konularınızı ekleyin  
**👨‍💼 Profesyonelseniz** → Deneyimlerinizi paylaşın  
**🏢 Şirket sahibiyseniz** → Ekibinizi desteklemeye teşvik edin  
**🎯 Eğitmenseniz** → Öğrencilerinize katkı vermeyi önerin  

> **"Bilgiyi paylaştıkça çoğalır"** - Bu projede herkesin öğrenecek ve öğretecek bir şeyi var!

### 📞 DOĞRUDAN İLETİŞİM
- 🔥 **Acil katkı önerileri**: [Issue açın](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/issues/new)
- 💬 **Soru & yardım**: [Discussion başlatın](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/discussions)  
- 📧 **Direkt mesaj**: yusufarbc@yandex.com

**🔥 ŞU ANDA %100 AÇIK KAYNAK, %100 ÜCRETSİZ - BÖYLE KALSIN!**
