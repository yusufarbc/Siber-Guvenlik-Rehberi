# 🤝 Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkür ederiz! Siber Güvenlik Rehberi, tamamen açık kaynaklı bir topluluk projesidir. Türkiye'deki Türkçe teknik kaynak açığını kapatmak amacıyla geliştirilen bu rehberi hep birlikte daha da ileriye taşıyabiliriz.

Aşağıda, projeye nasıl katkı sağlayabileceğinize dair adım adım yönergeler yer almaktadır.

---

## 🚀 Hızlı Katkı (Web Üzerinden)

Küçük imla hataları, harf düzeltmeleri veya ufak düzenlemeler için bilgisayarınıza hiçbir şey kurmanıza gerek yoktur:

1. Rehberde okumakta olduğunuz herhangi bir sayfanın en altına gidin.
2. **"Sayfayı düzenle"** (veya *Edit this page*) bağlantısına tıklayın.
3. Bu bağlantı sizi doğrudan GitHub üzerindeki ilgili markdown (.md) dosyasına yönlendirecektir.
4. Düzenleme kalem simgesine tıklayarak değişikliklerinizi yapın ve doğrudan tarayıcı üzerinden bir **Pull Request (PR)** oluşturun.

---

## 💻 Gelişmiş Katkı (Yerel Ortamda)

Rehbere yeni konular eklemek, kapsamlı içerik yazmak veya yapısal değişiklikler yapmak için yerel ortamınızı kurabilirsiniz:

### 1. Fork & Klonlama
1. GitHub deposunun sağ üst köşesindeki **"Fork"** butonuna tıklayarak projeyi kendi hesabınıza kopyalayın.
2. Kendi çatalınızı (fork) bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/[KULLANICI-ADINIZ]/Siber-Guvenlik-Rehberi.git
   cd Siber-Guvenlik-Rehberi
   ```

### 2. Geliştirme Ortamı
1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
2. Yerel geliştirme sunucusunu çalıştırın:
   ```bash
   npm run dev
   ```
3. Tarayıcınızda `http://localhost:4321` adresini açarak yaptığınız değişiklikleri anlık (hot-reload) olarak gözlemleyin.

### 3. Değişiklikleri Yapma
1. Değişiklikleriniz için anlamlı bir isme sahip yeni bir branch oluşturun:
   ```bash
   git checkout -b ozellik/bolum-X-iyilestirme
   ```
2. `src/content/docs/` dizini altındaki ilgili markdown (.md) dosyalarını düzenleyin veya yeni dosyalar ekleyin.

### 4. Yerel Derleme Testi
Pull Request açmadan önce projenin sorunsuz derlendiğinden emin olun:
```bash
npm run build
```
Bu komut, tüm sayfaların ve arama indeksinin (Pagefind) hatasız oluşturulduğunu teyit eder.

### 5. Commit & Push
1. Değişikliklerinizi ekleyin ve commit mesajınızı yazın (Conventional Commits standardını öneririz):
   ```bash
   git add .
   git commit -m "docs: Bölüm X.Y konusuna SIEM/SOAR mimarisi detaylandırıldı"
   ```
2. Değişiklikleri kendi GitHub deponuza gönderin:
   ```bash
   git push origin ozellik/bolum-X-iyilestirme
   ```
3. Orijinal depoya giderek bir **Pull Request (PR)** oluşturun.

---

## 🎨 İçerik ve Yazım Standartları

Rehberin görsel kalitesini ve akademik ciddiyetini korumak için lütfen aşağıdaki kurallara dikkat edin:

### 1. Dosya ve Klasör Yapısı
* Tüm dokümanlar `src/content/docs/` altındaki numaralandırılmış klasörlerde yer alır.
* Yeni eklenen dosyaların başında uygun Frontmatter olmalıdır:
  ```markdown
  ---
  title: "Konu Başlığı Buraya"
  sidebar:
    order: 1  # Bölüm içindeki sıralama sırası
  ---
  ```

### 2. Akademik Başlık Formatı
Ana konu başlıklarının başına akademik derecelendirmeyi temsilen `§` sembolü ekleyin:
```markdown
## §X.Y. Alt Başlık Adı
```
*Örnek:* `## §1.1. Bilgi Güvenliği Temelleri`

### 3. Kutucuklar ve Uyarılar (Starlight Alerts)
Önemli ipuçlarını, kritik uyarıları veya ek notları belirtmek için şu formatları kullanın:
```markdown
> [!NOTE]
> Genel bilgilendirmeler ve ek notlar için.

> [!TIP]
> Pratik ipuçları ve en iyi uygulamalar (best practices) için.

> [!IMPORTANT]
> Kritik adımlar ve gözden kaçırılmaması gereken noktalar için.

> [!CAUTION]
> Güvenlik açığı yaratabilecek riskli durumlar ve veri kaybı uyarıları için.
```

### 4. Görseller
* Ekleyeceğiniz görselleri (PNG, JPG, SVG) `src/assets/images/` klasörüne yerleştirin.
* Markdown dosyasında şu şekilde çağırın:
  `![Açıklama](../../../assets/images/gorsel-adi.png)`

---

## 🎯 Commit Mesaj Standartları

Değişikliklerinizi commit ederken şu yapıya uyun:
* `docs:` - İçerik ekleme, düzeltme veya dokümantasyon güncellemeleri
* `fix:` - Kırık link, hatalı kod bloğu veya site içi hata düzeltmeleri
* `style:` - CSS, font, hizalama ve genel tasarım değişiklikleri
* `chore:` - Paket güncellemeleri, yapılandırma dosyaları vb.

---

## 📋 Pull Request Öncesi Checklist

PR'ınızı göndermeden önce lütfen şu adımları kontrol edin:
- [ ] Türkçe dil bilgisi ve imla kurallarına uyulmuş mu?
- [ ] Yeni eklenen teknik terimlerin Türkçe karşılıkları kullanılmış mı?
- [ ] `npm run build` komutu yerelde başarıyla çalıştı mı?
- [ ] Eklenen görseller optimize edilmiş ve doğru yolda mı?
- [ ] Başlıklar akademik `§` formatına uygun mu?

---

**Katkılarınızla siber güvenlik topluluğunu güçlendirdiğiniz için şimdiden çok teşekkürler! 🛡️**