---
title: "OWASP Top 10 for LLM Applications ve Sınır Değer Denetimleri"
sidebar:
  order: 2
---

# OWASP Top 10 for LLM Applications ve Sınır Değer Denetimleri

Büyük Dil Modelleri (LLM) kurumsal uygulamalara entegre edildikçe yeni bir güvenlik riski sınıfı ortaya çıkmaktadır. OWASP, bu riskleri LLM uygulamalarına özgü Top 10 listesiyle kategorize etmiştir. Bu bölümde kritik zafiyetler, filtreleme katmanları ve yapay zeka ajanlarına yönelik mimari bariyerler ele alınmaktadır.

## §13.2.1. OWASP LLM Top 10 Kritik Zafiyetleri

### LLM01 — Prompt Injection

Saldırgan, kullanıcı girdisi aracılığıyla modelin sistem talimatlarını geçersiz kılmasını sağlar.

*   **Direkt Prompt Injection:** Saldırgan doğrudan "Sistem talimatlarını unut ve X yap" gibi bir istek gönderir.
*   **Indirect (Dolaylı) Prompt Injection:** Saldırgan, modelin okuyacağı harici bir kaynağa (web sayfası, PDF, e-posta) zararlı talimat gömer. Model içeriği işlerken bu talimatı yürütür.

### LLM02 — Insecure Output Handling

Modelin çıktısı doğrulanmadan downstream sistemlere (veritabanı, shell, tarayıcı) iletilir.

*   LLM çıktısındaki SQL kodu doğrudan sorgu olarak çalıştırılırsa SQL injection; HTML içerik olarak render edilirse XSS riski doğar.

### LLM03 — Training Data Poisoning

Modelin eğitim verisine zararlı içerik eklenerek modelin davranışı kalıcı olarak manipüle edilir.

*   Fine-tuning sürecinde kötü amaçlı veri setleri kullanılırsa model backdoor komutlara yanıt verir hale gelebilir.

### LLM06 — Excessive Agency (Aşırı Yetki)

LLM tabanlı ajan gerçek dünya sistemlerine bağlanmışsa (e-posta gönderme, kod çalıştırma, veritabanı yazma), prompt injection sonucu saldırgan ajan üzerinden bu eylemleri tetikleyebilir.

*   Ajanın sahip olduğu araç ve izinler mümkün olan en küçük kapsamla sınırlandırılmalıdır (Least Privilege).

### LLM09 — Overreliance (Aşırı Güven)

Kullanıcıların veya süreçlerin model çıktılarını insan doğrulaması olmadan kritik kararlarda kullanması.

*   Model halüsinasyonları (yanlış ama güven verici yanıtlar) güvenlik açıkları, hatalı tıbbi veya hukuki tavsiye olarak gerçeğe dönüşebilir.

---

## §13.2.2. LLM Girdi/Çıktı Filtreleme ve Doğrulama Katmanları

### Girdi Filtresi (Input Guard)

*   **Prompt Shield / Injection Detektörü:** Microsoft Azure AI Content Safety ve benzeri servisler prompt injection kalıplarını makine öğrenmesiyle sınıflandırır.
*   **Kural Tabanlı Filtre:** Bilinen zararlı kalıplar (sistem talimatı geçersizleştirme ifadeleri, rol değiştirme komutları) regex veya semantik benzerlik eşiğiyle engellenir.
*   **Maksimum Token Sınırı:** Aşırı uzun promptlar (jailbreak vektörü olabilir) reddedilir.

### Çıktı Filtresi (Output Guard)

*   Model çıktısı downstream sisteme iletilmeden önce içerik güvenlik politikasından geçirilir.
*   Kişisel veri (PII), kredi kartı numarası, iç sistem yolu gibi hassas bilgilerin çıktıda yer alması engellenir.
*   LLM'in SQL, shell komutu veya HTML üretmesi beklenen durumlarda çıktı parse edilerek zararlı pattern tespiti yapılır.

### Sistem Prompt Güvenliği

*   Sistem promptu kullanıcıya asla gösterilmemelidir; ancak dolaylı prompt injection bu korumayı atlatabilir.
*   Sistem promptu ve kullanıcı girdisi arasına sert sınır koyulmak için bazı mimariler ayrı token yığınları veya sandboxed context kullanır.

---

## §13.2.3. Yapay Zeka Ajanlarının Kontrolsüz Yetki Kazanmasını Engelleyen Mimari Bariyerler

### Ajan Güvenliği İçin Temel Prensipler

*   **Minimal Yetki (Least Privilege):** Her ajan yalnızca kendi görevini tamamlamaya yetecek araç ve izinle donatılmalıdır. Ajan e-posta okuyacaksa e-posta silme yetkisi olmamalıdır.
*   **İnsan Onayı Geçitleri (Human-in-the-Loop):** Yüksek etkili eylemler (para transferi, dosya silme, kod deploy) otomatik yürütülmeden önce insan onayına sunulmalıdır.
*   **Eylem Denetim Logu:** Tüm ajan eylemleri (hangi araç çağrıldı, hangi parametre gönderildi, sonuç ne oldu) değiştirilemez log olarak kaydedilmelidir.

### Sandboxed Execution

*   Kod çalıştırma yeteneğine sahip ajanlar (Code Interpreter), container veya VM sandbox içinde izole çalıştırılmalıdır.
*   Sandbox'ın ağ erişimi, dosya sistemi erişimi ve sistem kaynakları kullanımı kısıtlanmalıdır.

### Multi-Agent Güven Sınırı

*   Birden fazla ajanın birlikte çalıştığı mimarilerde (ajan orkestrasyonu), bir ajan başka bir ajana prompt içeren mesaj iletebilir. Bu "ajan-arası prompt injection" vektörüne karşı her ajan kendi girdisini doğrulamalıdır.
*   Güven, ajan kimliğine göre hiyerarşik olarak modellenmelidir; tüm ajanlar eşit yetkili sayılmamalıdır.
