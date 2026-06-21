# Siber Güvenlik Rehberi — İçerik Analizi

> Analiz tarihi: 21 Haziran 2026  
> Kapsam: `src/content/docs` dizini ve Starlight yapılandırması

---

## Genel Bakış

**Siber Güvenlik Rehberi**, Astro + Starlight ile derlenen, GitHub Pages üzerinde yayınlanan kapsamlı bir **Türkçe teknik referans kitabı**dır. İçerik `src/content/docs` altında **14 ana bölüm** ve **49 alt bölüm** (markdown sayfası) olarak yapılandırılmıştır.

Hedef kitle açıkça **mavi takım**, güvenlik mimarları ve SOC analistleri. Giriş sayfasındaki tagline bunu yansıtır: *"Mavi Takım operasyonlarından çözüm mimarisine, siber savunmanın her katmanı için derinlemesine teknik dokümantasyon."*

---

## Yapı ve Mimari

| Özellik | Detay |
|---------|-------|
| **Platform** | Astro + `@astrojs/starlight` |
| **Dil** | Türkçe (`defaultLocale: root`) |
| **Yayın** | `yusufarbc.github.io/Siber-Guvenlik-Rehberi` |
| **Navigasyon** | 14 katlanabilir sidebar grubu, `autogenerate` ile dosya sırasına göre |
| **Numaralandırma** | Özel `rehype-section-number` eklentisi → `§1.1.1.` formatında kitap tarzı bölüm numaraları |
| **Sidebar UX** | Bölüm numaraları (`13.2`) ayrı `<span>` ile stilize; aktif sayfa otomatik scroll |

### Bölüm Hiyerarşisi

Bölüm sıralaması **katmanlı savunma (defense in depth)** mantığıyla ilerler:

```
01 Bilgi Güvenliği (strateji, GRC)
    ↓
02–03 Fiziksel & Donanım (temel katmanlar)
    ↓
04–05 Kimlik & Veri
    ↓
06–09 Ağ, Uç Nokta, Mobil, E-posta
    ↓
10–11 Uygulama & Bulut
    ↓
12 OT/ICS (endüstriyel)
    ↓
13 Yapay Zeka Güvenliği (güncel)
    ↓
14 Operasyonel Güvenlik (SOC, detection, IR)
```

Bu sıralama hem öğrenme yolu hem de kurumsal mimari perspektifi açısından tutarlıdır.

### Bölüm ve Alt Bölüm Dağılımı

| Bölüm | Konu | Alt bölüm sayısı |
|-------|------|------------------|
| 01 | Bilgi Güvenliği | 3 |
| 02 | Fiziksel Güvenlik | 3 |
| 03 | Donanım Güvenliği | 3 |
| 04 | Kimlik Güvenliği | 4 |
| 05 | Veri Güvenliği | 4 |
| 06 | Ağ Güvenliği | 4 |
| 07 | Uç Nokta Güvenliği | 3 |
| 08 | Mobil Güvenlik | 4 |
| 09 | E-Posta Güvenliği | 3 |
| 10 | Uygulama Güvenliği | 3 |
| 11 | Bulut Güvenliği | 3 |
| 12 | Endüstriyel Sistem Güvenliği | 4 |
| 13 | Yapay Zeka Güvenliği | 4 |
| 14 | Operasyonel Güvenlik | 4 |

**Toplam:** 49 bölüm

---

## İçerik Derinliği ve Kalite

İncelenen örnek bölümler: `01.1 CIA`, `7.1 EDR/XDR`, `13.1 LLM`, `14.2 Detection Engineering`

### Güçlü Yönler

1. **Kurumsal/operasyonel odak** — Sadece teori değil; Wazuh, Sigma, GPO, SIEM/SOAR, GitHub Actions pipeline gibi uygulanabilir örnekler mevcut.

2. **Standart eşlemesi** — NIST SP 800-53, NIST CSF 2.0, ISO 27001:2022, CIS Controls v8.1, MITRE ATT&CK/ATLAS, OWASP LLM Top 10 sürekli referanslanıyor.

3. **Türkiye bağlamı** — KVKK, 5651, BDDK, 7545 sayılı Siber Güvenlik Kanunu, TÜBİTAK Kamu SM gibi yerel gereksinimler metne entegre edilmiş. Türkçe kaynaklarda nadir ve değerli bir fark.

4. **Zengin format** — Tablolar, kod blokları (XML, YAML, PowerShell, Sigma), Starlight admonition'ları (`:::note`, `:::caution`), `.webp` görseller.

5. **Güncellik** — OWASP LLM Top 10 **2025**, MITRE ATLAS v5.4, CrowdStrike 2026 raporu, NIST AI RMF gibi 2025–2026 referansları kullanılmış.

6. **Tutarlı yazım standardı** — Her bölümde giriş paragrafı → `---` ayırıcı → `§X.Y.Z.` numaralı alt başlıklar → MITRE teknik kimlikleri → operasyonel senaryo akışı.

### Bölüm Başına Derinlik (yaklaşık alt başlık sayısı)

**En kapsamlı bölümler:**

| Bölüm | Yaklaşık alt başlık |
|-------|---------------------|
| 14.3 Tehdit İstihbaratı | ~54 |
| 5.4 Yedekleme ve Kurtarma | ~43 |
| 4.3 Sıfır Güven Mimarisi | ~42 |
| 14.2 Detection Engineering | ~39 |
| 14.4 Olay Müdahale | ~39 |

**Görece kısa bölümler:**

| Bölüm | Yaklaşık alt başlık |
|-------|---------------------|
| 7.1–7.3 Uç Nokta Güvenliği | ~17–19 |
| 11.2 Konteyner ve IaC | ~19 |
| 12.1 OT/ICS Sistemleri | ~19 |

Uç nokta bölümü (07) görece daha kısa; operasyonel güvenlik (14) ve tehdit istihbaratı en derin bölümlerdir.

---

## Hedef Kitle Uyumu

| Profil | Uygunluk |
|--------|----------|
| **SOC analisti / Detection engineer** | Çok yüksek (Sigma, DaC, threat hunting) |
| **Güvenlik mimarı** | Çok yüksek (katmanlı mimari, standart eşlemesi) |
| **GRC / uyumluluk** | İyi (01.2, mevzuat referansları) |
| **Başlangıç seviyesi** | Orta — terminoloji yoğun, ön bilgi bekleniyor |
| **Red team / pentest** | Sınırlı — fiziksel red team ve saldırı vektörleri var ama odak savunma |

---

## Teknik Gözlemler ve İyileştirme Alanları

### 1. Dosya adı tutarsızlığı

`05-veri-guvenligi/02-kriptanaliz-ve-şifre-kırma.md` dosya adında Türkçe karakter (`ş`, `ı`) bulunuyor. URL'lerde encoding sorunlarına yol açabilir; diğer dosyalar ASCII slug kullanıyor.

**Öneri:** `02-kriptanaliz-ve-sifre-kirma.md` olarak yeniden adlandırılmalı.

### 2. Bölüm dengesi

01–03 ve 07–11 bölümlerinde 3'er alt bölüm; 04–06, 08, 12–14'te 4'er alt bölüm var. Özellikle **07 Uç Nokta** (sadece 3 bölüm) görece ince kalıyor.

**Öneri:** Ransomware savunması, EDR tuning veya MDR konuları için ek alt bölümler eklenebilir.

### 3. Vendor bağımlılığı

Wazuh, Palo Alto, CrowdStrike, Veeam sık geçiyor. Mavi takım perspektifi için doğal; ancak vendor-agnostik okuyucular için alternatif araç notları eklenebilir.

### 4. Etkileşim eksikliği

Quiz, kontrol listesi veya özet kart bileşenleri yok; tamamen okuma odaklı referans.

**Öneri:** Her bölüm sonuna "Kontrol Listesi" veya "Özet" admonition'ları eklenebilir.

### 5. Çapraz referanslar

Bölümler arası `link` ile bağlantılar sınırlı görünüyor.

**Öneri:** Örneğin 14.2'deki Sigma kuralları 7.3 dosyasız saldırılarla, 13.4 Shadow AI tespiti 14.2 detection engineering ile çapraz linklenebilir.

### 6. Görsel varlıklar

Bölüm başına çok sayıda `.webp` görsel mevcut (özellikle 14. operasyonel güvenlik). Bazı görsellerin kaynak/atıf bilgisi caption'larda netleştirilebilir.

---

## Öne Çıkan Bölümler

| Bölüm | Neden öne çıkıyor |
|-------|-------------------|
| **01.1 CIA & TCO** | Stratejik temel; Wazuh FIM örneğiyle teoriyi operasyona bağlıyor |
| **13. Yapay Zeka Güvenliği** | Prompt injection, OWASP LLM, SecMLOps, Shadow AI; güncel ve Türkçe kaynaklarda nadir |
| **14. Operasyonel Güvenlik** | Detection-as-Code, Sigma, CTI, IR playbook'ları; kitabın en uygulanabilir kısmı |
| **12. OT/ICS** | IT güvenliği kitaplarında genelde eksik; Purdue modeli ve OT IR ile ayrışıyor |

---

## İçerik Envanteri (Tüm Bölümler)

### 01. Bilgi Güvenliği
- 1.1 Bilgi Güvenliği Stratejisi, Temelleri (CIA) ve Maliyet Yönetimi (TCO)
- 1.2 Yönetişim, Risk, Uyumluluk (GRC) ve İş Sürekliliği Planlaması (BCP/BIA)
- 1.3 Güvenlik Politikaları, Farkındalık Eğitimleri ve Oltalama Simülasyonları

### 02. Fiziksel Güvenlik
- 2.1 Fiziksel Çevre, Tesis ve Veri Merkezi Güvenliği
- 2.2 Güvenli Cihaz İmhası ve Veri Yok Etme (Degaussing/Shredding)
- 2.3 Sosyal Mühendislik ile Fiziksel Sızma ve Red Team Operasyonları

### 03. Donanım Güvenliği
- 3.1 Çip (TPM), Anakart ve Firmware (Secure Boot) Güvenliği
- 3.2 Donanım Tedarik Zinciri Riskleri ve Sahte Bileşenler
- 3.3 Yan Kanal Saldırıları (Side-Channel Attacks) ve Donanımsal Sıkılaştırma

### 04. Kimlik Güvenliği
- 4.1 Kimlik Yönetimi (IAM) ve Formel Erişim Kontrol Modelleri
- 4.2 Ayrıcalıklı Erişim Yönetimi (PAM) ve Modern Doğrulama (MFA/SSO)
- 4.3 Sıfır Güven (Zero Trust) Mimarisi ve Cihaz İzolasyonu
- 4.4 Merkeziyetsiz Kimlik (DID) ve Parolasız (Passwordless) Gelecek

### 05. Veri Güvenliği
- 5.1 Kriptografi, Şifreleme Algoritmaları ve Kriptografik Özetleme (Hash)
- 5.2 Kriptanaliz, Şifre Kırma ve Hash Kırma
- 5.3 Veri Yaşam Döngüsü, Sınıflandırma ve Sızıntı Önleme (DLP)
- 5.4 Yedekleme Stratejileri ve Değiştirilemez (Immutable) Kurtarma

### 06. Ağ Güvenliği
- 6.1 Ağ İletişim Temelleri (OSI/TCP-IP), DMZ Tasarımı ve Ağ Segmentasyonu
- 6.2 Yeni Nesil Güvenlik Duvarları (NGFW), IDS/IPS ve Ağ Görünürlüğü (DPI)
- 6.3 Gelişmiş Ağ Saldırı Vektörleri (DDoS, MitM, ARP Spoofing) ve Savunma
- 6.4 Kablosuz Ağ Teknolojileri ve Güvenli Uzaktan Erişim (VPN/ZTNA)

### 07. Uç Nokta Güvenliği
- 7.1 İşletim Sistemi Sıkılaştırma (OS Hardening) ve Uç Nokta Koruması (EDR/XDR)
- 7.2 Zararlı Yazılım (Malware) Analizi ve Uç Nokta Adli Bilişimi (Forensics)
- 7.3 Dosyasız Zararlı Yazılımlar (Fileless Malware) ve Bellek İçi Saldırılar

### 08. Mobil Güvenlik
- 8.1 Kurumsal Mobilite (MDM/MAM/BYOD) ve Mobil İşletim Sistemi Tehditleri
- 8.2 Mobil Tehdit Algılama (MTD) ve Ağ Tabanlı Tehditler
- 8.3 Mobil Uygulama Güvenliği ve Tersine Mühendislik Korumaları
- 8.4 Mobil Adli Bilişim (Mobile Forensics) ve Olay Müdahale

### 09. E-Posta Güvenliği
- 9.1 Mesajlaşma Altyapıları ve E-Posta Doğrulama Protokolleri (SPF/DKIM/DMARC)
- 9.2 Gelişmiş E-Posta Tehditleri (BEC/Phishing) ve SEG Entegrasyonu
- 9.3 E-Posta Şifreleme Teknolojileri (S/MIME, PGP) ve Veri Sızıntısı Analizi

### 10. Uygulama Güvenliği
- 10.1 Güvenli Yazılım Geliştirme (SDLC), Kod Analizi (SAST/DAST) ve DevSecOps
- 10.2 Web Uygulaması ve API Güvenliği (OWASP Top 10 / WAF)
- 10.3 Sunucusuz (Serverless) Mimari ve V8 Isolate Güvenliği

### 11. Bulut Güvenliği
- 11.1 Sanallaştırma (Hipervizör) Mimarileri ve Bulut Bilişim Servis Modelleri
- 11.2 Bulut Yerlisi (Cloud-Native), Konteyner Güvenliği ve Kod Olarak Altyapı (IaC)
- 11.3 Hibrit Bulut Yönetimi ve Veri Egemenliği (Digital Sovereignty)

### 12. Endüstriyel Sistem Güvenliği
- 12.1 OT/ICS Sistemleri, Purdue Modeli ve Güvenli IT/OT Entegrasyonu
- 12.2 OT Dünyasında Sıkılaştırma (OT Hardening) ve Zafiyet Yönetimi
- 12.3 Endüstriyel Ağlarda Tehdit İzleme, Görünürlük ve Anomali Tespiti
- 12.4 OT Sahasında Olay Müdahale (ICS Incident Response) ve Siber-Fiziksel Güvenlik

### 13. Yapay Zeka Güvenliği
- 13.1 Yapay Zeka (LLM) Tehditleri ve Prompt Injection
- 13.2 OWASP Top 10 for LLM Applications ve Sınır Değer Denetimleri
- 13.3 Makine Öğrenmesi Operasyonlarında Güvenlik (SecMLOps / AI DevSecOps)
- 13.4 Yapay Zeka Entegrasyonlarında Veri Egemenliği ve Gölge AI (Shadow AI)

### 14. Operasyonel Güvenlik
- 14.1 SOC/NOC Entegrasyonu ve Yeni Nesil Merkezi Log Yönetimi (SIEM/SOAR)
- 14.2 Detection Engineering ve Tehdit Avcılığı
- 14.3 Siber Tehdit İstihbaratı (CTI) ve Aldatma Teknolojileri
- 14.4 Olay Müdahale (Incident Handling), Playbook Yönetimi ve Delil Zinciri

---

## Sonuç

Bu proje, **profesyonel düzeyde, kurumsal odaklı, Türkçe siber güvenlik referans kitabı** niteliğindedir. Sadece kavram anlatımı değil; standart eşlemesi, mevzuat bağlamı, çalıştırılabilir konfigürasyon örnekleri ve MITRE haritalamasıyla **SOC/mavi takım uygulayıcıları** için doğrudan işe yarar bir kaynak sunar.

Kalite profili bir üniversite ders kitabı ile vendor whitepaper'ının arasında konumlanır; teknik derinlik yüksek, dil akademik-teknik dengede tutulmuştur.