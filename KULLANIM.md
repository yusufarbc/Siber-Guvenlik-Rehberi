# 🚀 Kullanım Kılavuzu (Astro & Starlight)

Bu proje, modern bir dokümantasyon altyapısı olan **Astro Starlight** üzerine inşa edilmiştir. Kitabın yazım sürecini kolaylaştırmak ve içeriği web üzerinden erişilebilir kılmak için aşağıdaki yönergeleri takip edebilirsiniz.

---

## 🛠️ Yerel Geliştirme Ortamı

Projeyi bilgisayarınızda çalıştırmak ve anlık değişiklikleri görmek için şu adımları izleyin:

### 1. Gereksinimler
- **Node.js**: v18.14.1 veya üzeri (v20+ önerilir)
- **Paket Yöneticisi**: npm (Node.js ile birlikte gelir)

### 2. Kurulum ve Çalıştırma
```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```
Sunucu başladığında, tarayıcınızda `http://localhost:4321` adresine giderek kitabı görüntüleyebilirsiniz.

---

## 📂 Dosya Mimarisi ve Yazım Kuralları

Dokümanlar `src/content/docs/` klasörü altında hiyerarşik bir yapıda tutulur.

### 1. Klasör Yapısı
Her ana bölüm (Bölüm 01 - 15) kendi klasörüne sahiptir. Bu klasörlerin içinde alt başlıklar `.md` dosyaları olarak bulunur:
```text
src/content/docs/
├── 01-bilgi-guvenligi/
│   ├── 01-temeller-ve-cia.md
│   ├── 02-grc-ve-uyumluluk.md
│   └── 03-guvenlik-politikalari.md
```

### 2. Yeni Dosya Ekleme
Yeni bir dosya eklerken şu Frontmatter yapısını kullanmalısınız:
```markdown
---
title: "Başlık Buraya"
sidebar:
  order: 1 (Sıralama numarası)
---
```

### 3. Görsel ve Medya Yönetimi
*   **Görseller (PNG, JPG, SVG):** `src/assets/images/` klasörüne eklenmelidir. Astro bu resimleri otomatik olarak optimize eder.
    *   *Kullanım:* `![Açıklama](../../../assets/images/resim.png)`
*   **Video, Ses ve PDF:** `public/media/` klasörüne eklenmelidir.
    *   *Kullanım:* `[Dosyayı İndir](/media/dosya.pdf)`

---

## 🎨 Yazım Standartları (Aesthetic)

Kitabın profesyonel ve akademik görünümünü korumak için şu standartlara uyun:

### Akademik Bölüm İşaretleri
Her ana başlığın başına `§` işareti ekleyin:
```markdown
## §1.1. Bölüm Başlığı
```

### Bilgi ve Uyarı Kutuları (Starlight Alerts)
Önemli bilgileri vurgulamak için GitHub tarzı kutucukları kullanın:
```markdown
> [!NOTE]
> Genel notlar için kullanılır.

> [!TIP]
> Pratik ipuçları ve en iyi uygulamalar için kullanılır.

> [!IMPORTANT]
> Mutlaka bilinmesi gereken kritik adımlar için kullanılır.

> [!CAUTION]
> Yüksek riskli durumlar ve veri kaybı uyarıları için kullanılır.
```

---

## 🚀 Derleme ve Yayına Alma

Web sitesinin statik halini oluşturmak (build) için:
```bash
npm run build
```
Oluşturulan dosyalar `dist/` klasörüne çıkar ve herhangi bir statik web sunucusunda (GitHub Pages, Netlify, Vercel) yayınlanabilir.
