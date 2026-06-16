---
title: "Yapay Zeka Entegrasyonlarında Veri Egemenliği ve Gölge AI (Shadow AI)"
sidebar:
  order: 4
---

# Yapay Zeka Entegrasyonlarında Veri Egemenliği ve Gölge AI (Shadow AI)

Çalışanların ChatGPT, Claude, Gemini gibi public LLM servislerine kurumsal belgeler, kaynak kod veya müşteri verisi yüklemesi; fark edilmesi güç ama ciddi sonuçları olan yeni bir veri sızıntısı vektörü oluşturmuştur. Bu bölüm Gölge AI tehditini, ağ/DLP politikalarıyla tespitini ve on-premise LLM mimarileriyle veri egemenliğini korumayı ele alır.

## §13.4.1. Hassas Verilerin Public LLM'lere Sızmasını Engelleme Stratejileri

### Tehdidin Boyutu

Kurumsal sırların public LLM'lere sızma senaryoları:
*   Geliştirici, bug çözmek için tescilli kaynak kodu ChatGPT'ye yapıştırır.
*   Analist, müşteri verisi içeren Excel dosyasını AI asistanına analiz ettirir.
*   Hukuk ekibi, gizli sözleşme metnini AI ile özetletir.
*   İK, çalışan performans değerlendirmesini AI ile yeniden yazdırır.

Bu girdiler LLM sağlayıcısının altyapısına iletilir; politikaya bağlı olarak eğitim verisi olarak kullanılabilir veya güvenlik ihlali durumunda açığa çıkabilir.

### Teknik Engelleme Mekanizmaları

*   **Ağ Düzeyinde Engelleme:** Proxy veya CASB aracılığıyla bilinen public LLM alan adları (`api.openai.com`, `claude.ai`, `gemini.google.com`) kurumsal ağdan bloke edilir ya da SSL inspection ile denetlenir.
*   **DLP ile İçerik Denetimi:** SSL inspection yapılan trafikte DLP politikaları, LLM API çağrılarının gövdesini tarar; PII, kaynak kod kalıpları veya gizli etiketli içerik algılandığında istek bloke edilir.
*   **Uç Nokta DLP:** Tarayıcı eklentileri veya uç nokta DLP ajanları, LLM web arayüzlerine yapıştırılan içeriği sınıflandırarak uyarı üretir veya engeller.

---

## §13.4.2. Gölge AI (Shadow AI) Tespiti ve Engellenmesi

### Gölge AI Nedir?

Gölge AI, çalışanların BT veya güvenlik ekibinin bilgisi olmadan, onay almadan kullandığı yapay zeka araçları ve servislerini ifade eder. Gölge BT (Shadow IT) kavramının AI boyutudur.

### Tespit Yöntemleri

*   **DNS ve Proxy Log Analizi:** Kurumsal ağ DNS sorguları ve proxy loglarında bilinen AI servis domain'leri (`openai.com`, `anthropic.com`, `huggingface.co`, `replicate.com`) aranır. SIEM'e beslenen bu loglardan kullanım trendi çıkarılır.
*   **CASB ile SaaS Keşfi:** CASB çözümleri (Microsoft Defender for Cloud Apps, Netskope) ağ trafiğinden kurumsal onay olmayan AI uygulamalarını tespit eder ve risk skorlaması yapar.
*   **Browser Extension Denetimi:** MDM ile cihaz üzerinde kurulu tarayıcı eklentileri denetlenir; izin verilmeyen AI eklentileri (Grammarly, AI writing assistants) kaldırılır veya bloke edilir.
*   **App Store Politikaları:** Mobil cihazlarda MDM aracılığıyla kurulabilecek AI uygulamaları izin listesiyle kısıtlanır.

### Yönetim Politikası

Engelleme tek başına yeterli değildir; çalışanlar kısıtlamayı VPN, mobil veri veya kişisel cihazlarla aşar. Etkin yaklaşım:
*   **Onaylı AI Araçları Listesi:** BT/Güvenlik onaylı, veri işleme sözleşmesi yapılmış AI araçları çalışanlara sunulur.
*   **Farkındalık Eğitimi:** Çalışanlara hangi içeriğin neden public LLM'lere gönderilmemesi gerektiği anlatılır.
*   **Açık Kapı Politikası:** Çalışanlar yeni AI araç ihtiyaçlarını güvenli bir onay sürecinden geçirerek kullanabilir.

---

## §13.4.3. On-Premise / Self-Hosted Yerel LLM Mimarisiyle Veri Egemenliğini Sağlama

### Self-Hosted LLM Neden?

*   Tüm inference (çıkarım) şirket altyapısında gerçekleşir; hiçbir girdi veya çıktı harici sunuculara iletilmez.
*   Finansal veriler, sağlık kayıtları, devlet sırları gibi regülasyona tabi veriler güvenle işlenebilir.
*   Internet bağlantısı olmayan air-gapped ortamlarda da AI özelliklerinden yararlanılabilir.

### On-Premise LLM Deployment Araçları

*   **Ollama:** Llama 3, Mistral, Phi-3 gibi açık ağırlıklı modelleri yerel sunucularda kolayca çalıştırmayı sağlar. REST API ile mevcut uygulamalara entegre edilir.
*   **LM Studio:** GPU destekli yerel çalıştırma; bireysel iş istasyonları için.
*   **vLLM:** Üretim kalitesinde yüksek verimli inference sunucusu; Kubernetes üzerinde ölçeklenebilir.
*   **LocalAI:** OpenAI uyumlu API; mevcut OpenAI entegrasyonlarını değiştirmeden yerel modele yönlendirme.

### Güvenlik Mimarisi

*   **Model Erişim Kontrolü:** LLM API'ye erişim yalnızca kurumsal kimlik doğrulamasıyla (OAuth 2.0/OIDC) sağlanmalıdır.
*   **Ağ İzolasyonu:** LLM sunucusu yalnızca yetkili servislerden erişilebilir; internet erişimi olmayan ayrı ağ segmentine yerleştirilir.
*   **GPU Sunucusu Sıkılaştırma:** CUDA/ROCm sürücüleri güncel tutulur; sunucuya yönetim erişimi jump server üzerinden MFA ile sağlanır.
*   **Girdi/Çıktı Loglama:** Tüm LLM istekleri ve yanıtları (PII maskelenerek) denetim amacıyla merkezi loglamaya alınır.
*   **Model Doğrulama:** Dağıtılan modelin hash'i üretici tarafından yayımlanan değerle doğrulanır; yetkisiz model swap'ı önlenir.
