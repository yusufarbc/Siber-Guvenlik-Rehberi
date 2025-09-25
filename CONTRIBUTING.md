# 🤝 Katkıda Bulunma Rehberi

Bu projede katkıda bulunmak istediğiniz için teşekkür ederiz! Bu rehber, projeye nasıl katkıda bulunabileceğinizi adım adım açıklar.

## 🚀 Hızlı Başlangıç

1. **Fork** edin: GitHub'da sağ üstteki "Fork" butonuna tıklayın
2. **Clone** edin: `git clone https://github.com/[KULLANICI-ADINIZ]/Siber-Guvenlik-Rehberi.git`
3. **Branch** oluşturun: `git checkout -b my-contribution`
4. **Değişiklikleri** yapın ve test edin
5. **Commit** edin: `git commit -m "feat: Açıklayıcı mesaj"`
6. **Push** edin: `git push origin my-contribution`  
7. **Pull Request** açın

## 📋 Katkı Türleri

### 🐛 Hata Bildirimi
- **Typo/yazım hataları** - En kolay başlangıç!
- **LaTeX derleme hataları** - Format problemleri
- **Eksik/yanlış bilgiler** - İçerik düzeltmeleri
- **Bozuk linkler** - URL kontrolü

**Nasıl Bildirim:**
1. [Issues sayfasından](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/issues) "New Issue"
2. "Bug Report" template'ini seçin
3. Detaylı açıklama ve ekran görüntüsü ekleyin

### 📝 İçerik Katkıları

#### ⭐ Öncelikli İhtiyaçlar
- 🤖 **AI/ML in Cybersecurity** - Yeni teknolojiler
- 🛡️ **Zero Trust Architecture** - Modern güvenlik mimarisi  
- ☁️ **Cloud Security Best Practices** - AWS, Azure, GCP
- 📱 **Mobile Application Security** - iOS/Android güvenliği
- 🔐 **Quantum Cryptography** - Gelecek teknolojileri
- 🚨 **Incident Response Playbooks** - Pratik senaryolar

#### 📚 İçerik Standartları
```latex
\section{Bölüm Başlığı}
\subsection{Alt Başlık}

% Her bölüm giriş ile başlamalı
\section*{Giriş}
Bu bölümde... konuları ele alınacaktır.

% Referanslar numaralı olmalı
Bu teknik XYZ tarafından geliştirilmiştir.\textsuperscript{42}

% Kod örnekleri syntax highlighted
\begin{lstlisting}[language=Python]
# Python örnek kod
import security_module
\end{lstlisting}

% Tablolar longtable formatında
\begin{longtable}{|p{3cm}|p{4cm}|p{4cm}|}
...
\end{longtable}
```

### 🔧 Teknik İyileştirmeler

#### LaTeX Optimizasyonları
- **Tablo formatı** iyileştirmeleri
- **Görsel kalitesi** artırma  
- **Cross-reference** düzeltmeleri
- **Bibliography** yönetimi
- **PDF metadata** optimizasyonu

#### Otomasyon Scriptleri  
- **CI/CD pipeline** geliştirme
- **Otomatik derleme** scriptleri
- **Kalite kontrol** araçları
- **PDF optimizasyon** araçları

## 🎯 Commit Mesaj Formatı

```
<type>(<scope>): <açıklama>

[opsiyonel gövde]

[opsiyonel footer]
```

### Commit Türleri:
- `feat:` - Yeni özellik/içerik
- `fix:` - Hata düzeltmesi  
- `docs:` - Dokümantasyon
- `style:` - LaTeX formatting
- `refactor:` - Kod/yapı iyileştirmesi
- `test:` - Test ekleme
- `chore:` - Bakım işleri

### Örnekler:
```bash
feat(chapter-12): Add malware analysis automation tools
fix(tables): Correct longtable formatting in chapter 3  
docs(readme): Update installation instructions for Windows
style(main): Improve typography and spacing
```

## 🔍 Kalite Kontrol

### Pull Request Öncesi Checklist
- [ ] **Derleme testi**: `xelatex main.tex` çalışıyor mu?
- [ ] **Spelling check**: Türkçe yazım kontrolü yapıldı mı?
- [ ] **Format kontrolü**: Tablolar ve görseller düzgün mü?
- [ ] **Cross-reference**: Referanslar çalışıyor mu?
- [ ] **PDF boyutu**: Dosya boyutu makul mı? (~1MB)

### İçerik Kalite Kriterleri
- ✅ **Güncel bilgi** (2023+ kaynaklar tercih)
- ✅ **Türkçe dil kuralları** (TDK uyumlu)
- ✅ **Teknik doğruluk** (peer-review)
- ✅ **Pratik örnekler** (gerçek dünya senaryoları)
- ✅ **Referans kaynak** (güvenilir kaynaklar)

## 🌍 Çeviri Katkıları

### Terminology Standardı
| İngilizce | Türkçe | Notlar |
|-----------|--------|--------|
| Cybersecurity | Siber Güvenlik | İki kelime, büyük harf |
| Malware | Kötü Amaçlı Yazılım | Açıklamada Türkçe, parantez içinde İngilizce |
| Firewall | Güvenlik Duvarı | Standart çeviri |
| Zero Trust | Sıfır Güven | Yeni kavramlar için Türkçe tercih |
| Endpoint | Uç Nokta | Teknik terimler çevrili |

### Dil Kuralları
- **Teknik terimler**: İlk kullanımda Türkçe (İngilizce) formatı
- **Kısaltmalar**: Parantez içinde açıklama
- **Yabancı kelimeler**: İtalik yazım tercih
- **Başlıklar**: Başharf büyük, geri kalan küçük

## 🚦 Pull Request Süreci

### 1. PR Hazırlığı
```bash
# En son değişiklikleri al
git checkout main
git pull upstream main

# Yeni branch oluştur  
git checkout -b feature/my-awesome-contribution

# Değişiklikleri yap ve test et
xelatex main.tex  # Derleme testi

# Commit et
git add .
git commit -m "feat: Add new security framework"
git push origin feature/my-awesome-contribution
```

### 2. PR Template
PR açarken şu bilgileri ekleyin:
```markdown
## 📋 Değişiklik Özeti
- [ ] Yeni içerik eklendi
- [ ] Hata düzeltildi  
- [ ] Dokümantasyon güncellendi

## 🧪 Test Edildi
- [ ] LaTeX derleme başarılı
- [ ] PDF çıktısı kontrolü yapıldı
- [ ] Yazım kontrolü tamamlandı

## 📖 Ek Notlar
...
```

### 3. Review Süreci
1. **Otomatik kontroller** (GitHub Actions)
2. **Manual review** (maintainer tarafından)
3. **Değişiklik önerileri** (varsa)
4. **Final approval** ve merge

## 🏷️ İssue Labels

### Priority Labels
- `priority:high` 🔴 - Acil düzeltme gerekli
- `priority:medium` 🟡 - Normal öncelik  
- `priority:low` 🟢 - Zaman uygun olduğunda

### Type Labels  
- `type:bug` 🐛 - Hata bildirimi
- `type:feature` ✨ - Yeni özellik önerisi
- `type:documentation` 📚 - Dokümantasyon
- `type:question` ❓ - Soru/tartışma

### Content Labels
- `content:chapter-1` 📑 - Bölüm 1 ile ilgili
- `content:tables` 📊 - Tablo formatı
- `content:images` 🖼️ - Görsel/şekil
- `content:references` 🔗 - Kaynak/referans

## 💡 İpuçları

### Yeni Katkıda Bulunanlar İçin
1. **Küçük başlayın**: Typo düzeltmesi, link kontrolü
2. **Issue'lara göz atın**: "good first issue" etiketli görevler
3. **Dokümantasyon okuyun**: LaTeX ve proje yapısını anlayın
4. **Toplulukla etkileşim**: Discussion'lara katılın

### Deneyimli Katkıcılar İçin  
1. **Büyük özellikler**: Önce issue açarak tartışın
2. **Code review**: Diğer PR'lara yorum yapın
3. **Mentorship**: Yeni gelenlere yardım edin
4. **Roadmap**: Proje yol haritasına katkıda bulunun

## 🎖️ Katkıcı Tanıma

### Contributors Hall of Fame
Önemli katkıda bulunanlar README'de özel olarak belirtilir:
- 🏆 **Major Contributors**: 10+ commit veya büyük özellik
- ⭐ **Regular Contributors**: 5-9 commit  
- 🤝 **First-time Contributors**: İlk katkıdan sonra

### Badges & Recognition
- GitHub profile için contribution badge'leri
- LinkedIn recommendation'lar  
- Topluluk etkinliklerinde konuşma fırsatları

## 📞 İletişim

### Quick Help
- 🐛 **Bug reports**: [GitHub Issues](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/discussions)  
- 📧 **Direct contact**: yusufarbc@yandex.com

### Response Times
- **Issues**: 24-48 saat içinde ilk yanıt
- **PR Reviews**: 2-5 gün içinde review
- **Questions**: 1-3 gün içinde yanıt

---

## 🎉 Teşekkürler!

Her katkınız bu projeyi daha değerli kılıyor. Türkiye'nin siber güvenlik alanında Türkçe kaynak açığını kapatmaya yardım ettiğiniz için teşekkür ederiz!

**Birlikte daha güçlü bir siber güvenlik topluluğu oluşturuyoruz! 🛡️**