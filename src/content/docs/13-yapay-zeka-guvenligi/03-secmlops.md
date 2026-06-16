---
title: "Makine Öğrenmesi Operasyonlarında Güvenlik (SecMLOps / AI DevSecOps)"
sidebar:
  order: 3
---

# Makine Öğrenmesi Operasyonlarında Güvenlik (SecMLOps / AI DevSecOps)

Yapay zeka modelleri; veri setleri, eğitim altyapısı, model depoları ve dağıtım pipeline'larından oluşan geniş bir tedarik zincirine sahiptir. Geleneksel yazılım güvenliği bu zinciri yeterince kapsamaz: bir model dosyası bir executable kadar tehlikeli olabilir. SecMLOps, DevSecOps prensiplerini ML operasyonları yaşam döngüsüne uygular.

## §13.3.1. Yapay Zeka Tedarik Zinciri Riskleri ve Zehirli Model Tespiti

### ML Tedarik Zinciri Saldırı Yüzeyleri

*   **Veri Seti Kaynakları:** Halka açık veri setleri (Hugging Face Datasets, Kaggle) zararlı örnek içerebilir. Üçüncü taraf veri sağlayıcılardan alınan veriler doğrulanmadan kullanılmamalıdır.
*   **Ön Eğitimli Modeller (Pretrained Models):** Hugging Face Hub, ONNX Model Zoo gibi model depolarından indirilen modeller backdoor içerebilir. Bir pickle dosyası olarak saklanan model, yüklendiğinde keyfi kod çalıştırabilir.
*   **Python Paket Bağımlılıkları:** `numpy`, `torch`, `transformers` gibi kritik ML kütüphanelerinin bağımlılıklarındaki kötü amaçlı paket (dependency confusion, typosquatting).
*   **Eğitim Altyapısı:** Bulut GPU instanları ve ML platformları (MLflow, Kubeflow) üzerindeki yapılandırma hataları.

### Zehirli Model (Backdoored Model) Tespiti

*   **Model Hashing ve İmzalama:** İndirilen her model dosyasının SHA-256 hash'i üretici/depo tarafından yayımlanan değerle karşılaştırılmalıdır.
*   **Davranışsal Test (Behavioral Testing):** Model, bilinen backdoor tetikleyicilerini içeren özel test setleriyle değerlendirilerek anomali aranır.
*   **Neural Cleanse / DeepInspect:** Akademik araştırmalardan türeyen backdoor tespiti teknikleri; model aktivasyonları analiz edilerek şüpheli nöron kalıpları aranır.

> [!CAUTION]
> Python pickle formatı (`model.pkl`) yüklendiğinde keyfi kod çalıştırabilir. Üretim ortamlarında ONNX, SavedModel veya TorchScript gibi güvenli serileştirme formatları tercih edilmelidir.

---

## §13.3.2. Model İmzalama ve Veri Kümesi Bütünlük Doğrulaması

### Model İmzalama

Yazılım güvenliğinde kod imzalamaya (code signing) eşdeğer ML uygulamasıdır:

*   Model dosyası ve metadata, geliştiricinin/kurumun özel anahtarıyla dijital olarak imzalanır.
*   Dağıtım öncesinde imza doğrulanır; imza geçersizse model reddedilir.
*   **Sigstore / Cosign:** Konteyner imajları için kullanılan şeffaflık logu tabanlı imzalama yaklaşımı model imzalamaya da uyarlanmaktadır.

### Veri Kümesi Bütünlük Doğrulaması

*   Eğitim verisi değiştirilemez depolama ortamına (S3 Object Lock, WORM) alınarak versiyonlanır.
*   Her veri versiyonunun hash değeri kaydedilir; eğitim pipeline'ı başlamadan önce hash doğrulanır.
*   **Data Version Control (DVC):** Git benzeri sürüm takibi ile veri setleri ve modeller birlikte versiyonlanır; hangi verinin hangi modeli ürettiği izlenebilir olur.

### ML Pipeline Bütünlüğü (ML Supply Chain Integrity)

*   MLflow, Weights & Biases veya Neptune gibi deney takip araçlarıyla her eğitim koşusunun (run) parametreleri, metrikleri ve artifact'ları kayıt altına alınır.
*   CI/CD pipeline'larına model kalite kapısı (quality gate) eklenir: belirli güvenlik testlerini geçemeyen modeller production'a yükseltilmez.

---

## §13.3.3. Model Hırsızlığı Saldırılarına Karşı Korumalar

### Model Hırsızlığı (Model Extraction / Stealing)

Saldırgan, bir ML API'ye çok sayıda sorgu göndererek modelin davranışını gözlemler ve bunu kendi "çalıntı" modelini eğitmek için kullanır.

*   **Model Extraction:** Siyah kutu erişimiyle modelin karar sınırlarını taklit eden yedek model (surrogate model) oluşturulur.
*   **Model Inversion:** Model çıktılarından eğitim verisindeki örneklere yakın veriler çıkarılır; gizli eğitim verisi kısmen reconstruct edilebilir.
*   **Membership Inference:** Belirli bir örneğin modelin eğitim setinde bulunup bulunmadığı test edilir. Tıbbi veya finansal verilerle eğitilmiş modeller için kritik bir gizlilik riski.

### Savunma Mekanizmaları

*   **Rate Limiting ve Anomali Tespiti:** API'ye gelen sorgu kalıpları izlenir; yüksek hacimli veya sistematik sorgular (extraction girişimi) tespit edilerek bloke edilir.
*   **Güvenilir İzleme (Confidence Score Maskeleme):** Modelin tam güven skoru (probability distribution) yerine yalnızca top-k sınıf veya yuvarlak değer döndürülmesi, extraction saldırısını zorlaştırır.
*   **Watermarking:** Modele gizli bir parmak izi (watermark) eklenerek çalıntı modelde bu imzanın varlığı tespit edilebilir.
*   **Diferansiyel Gizlilik (Differential Privacy) Eğitimi:** Eğitim sürecine matematiksel gürültü eklenerek membership inference saldırılarına karşı direnç artırılır.
