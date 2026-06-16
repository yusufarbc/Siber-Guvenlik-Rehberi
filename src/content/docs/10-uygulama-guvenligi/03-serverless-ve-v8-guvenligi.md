---
title: "Sunucusuz (Serverless) Mimari ve V8 Isolate Güvenliği"
sidebar:
  order: 3
---

# Sunucusuz (Serverless) Mimari ve V8 Isolate Güvenliği

Sunucusuz bilişim, altyapı yönetimini bulut sağlayıcısına devrederek geliştiricilerin yalnızca kod yazmaya odaklanmasını sağlar. Ancak geleneksel container veya VM tabanlı izolasyondan farklı güvenlik modelleri ve saldırı yüzeyleri sunar. Bu bölüm V8 Isolate tabanlı edge computing (Cloudflare Workers), sunucusuz fonksiyon güvenliği ve API Gateway güvenlik tasarımını ele alır.

## §10.3.1. V8 Isolate ile Container Güvenlik Modeli Karşılaştırması

### Geleneksel Container (Docker/K8s) Güvenlik Modeli

*   Her tenant/işlev ayrı Linux container namespace'i (pid, net, mnt, uts, ipc) ve cgroup kısıtlamalarıyla izole edilir.
*   Container kaçış (Escape) saldırıları mümkündür: `runc` açıkları (CVE-2019-5736), `--privileged` container, host path mount yanlış yapılandırması.
*   Her container tam işletim sistemi çekirdeği katmanını paylaşır; kernel exploiti tüm container'ları etkiler.

### V8 Isolate (Cloudflare Workers) Güvenlik Modeli

Cloudflare Workers, Node.js veya tam container yerine V8 JavaScript motorunun isolate mekanizmasını kullanır.

*   **Micro-VM Yerine Micro-Isolate:** Her Worker, aynı işlem içinde izole JavaScript execution context'te (V8 Isolate) çalışır. Bellek alanları birbirinden tamamen ayrıdır.
*   **Soğuk Başlatma Yok:** Isolate'lar milisaniyelerde başlar; klasik Lambda/Functions soğuk başlatma gecikmesi yoktur.
*   **Dosya Sistemi Erişimi Yok:** Worker'lar OS dosya sistemine, socket'e veya arbitrary system call'a erişemez.

**Güvenlik Avantajları:**
*   Kullanılabilir API'ler kısıtlıdır: Fetch, Web Crypto API, KV/R2 storage, Durable Objects — keyfi OS çağrısı mümkün değil.
*   Her request için yeni bir isolate context oluşturulabilir; tenant arası bellek sızıntısı riski düşüktür.

**Güvenlik Sınırlılıkları:**
*   V8 motoru içindeki sıfır-gün açıkları (Spectre benzeri side-channel, V8 JIT bug) izolasyonu kırabilir.
*   Cloudflare, Spectre'ye karşı `SharedArrayBuffer` ve `performance.now()` hassasiyetini kısıtlar.

---

## §10.3.2. Sunucusuz Fonksiyonlarda Soğuk Başlatma Zafiyetleri ve Bellek İzolasyonu

### Soğuk Başlatma (Cold Start) Nedir?

Bir Lambda/Cloud Function yeni bir instance başlattığında (container sıfırdan başlatıldığında) yaşanan gecikme ve init fazıdır.

**Güvenlik Etkileri:**
*   **Bellek Sızıntısı (Warm Instance Reuse):** AWS Lambda gibi platformlar aynı container instance'ını yeniden kullanır. Global değişkenler veya `/tmp` dosya sistemi requestler arasında paylaşılabilir. Bir request'te oluşturulan hassas veri bir sonraki request'te okunabilir.
*   **Mitigation:** Hassas veriler (token, kimlik bilgisi) global scope yerine her invocation'ın local scope'unda tutulmalıdır. `/tmp` dizini her kullanımda temizlenmelidir.

### Init Kodu Saldırısı

Fonksiyon başlangıcında çalışan init kodu (layer yükleme, environment variable okuma) daha uzun çalışma süresi ve hata mesajı üretir. Timing analizi ile:
*   Ortam değişkeni adları sızdırılabilir.
*   Bağımlılık yükleme hataları üzerinden bağımlılık isimleri ortaya çıkabilir (supply chain attack yüzey alanı).

---

## §10.3.3. Dağıtık Serverless Mimarilerde API Gateway Güvenliği ve Veri Akış Denetimi

### API Gateway Güvenlik Katmanları

API Gateway, serverless fonksiyonların önünde konumlanarak tüm gelen trafiği denetler.

*   **Kimlik Doğrulama:** JWT, API Key veya OAuth 2.0 token doğrulaması Gateway seviyesinde yapılmalıdır; her Lambda'ya bırakılmamalıdır.
*   **Rate Limiting:** Kaynak IP veya API anahtarı başına saniye/dakika istek limiti belirlenerek brute force ve DDoS azaltılır.
*   **Request Validation:** JSON Schema doğrulaması ile kötü biçimlendirilmiş ve aşırı büyük payload'lar reddedilir.
*   **WAF Entegrasyonu:** AWS WAF, Cloudflare WAF gibi araçlarla SQL injection, XSS ve OWASP Top 10 filtrelemesi uygulanır.

### Serverless-Spesifik Zafiyetler

*   **Event Injection:** Lambda fonksiyonlarına gelen olay verisi (SQS mesajı, S3 olay adı, API Gateway parametresi) doğrulanmadan komuta veya sorguya eklenmesi → injection saldırıları.
*   **Over-Privileged IAM Role:** Lambda fonksiyonunun IAM rolü gereğinden fazla izne sahipse (S3 `*`, DynamoDB `*`), fonksiyon ele geçirildiğinde saldırgan tüm kaynakları kontrol eder. **Least Privilege** prensibi her fonksiyon için ayrı IAM rolü gerektirmektedir.
*   **Secrets in Environment Variables:** Ortam değişkenlerine yazılan gizli anahtarlar CloudTrail loglarında görünebilir. AWS Secrets Manager veya Parameter Store tercih edilmelidir.
*   **Dependency Confusion / Supply Chain:** `package.json` bağımlılıkları NPM üzerinden gelen zararlı paketlere karşı SCA (Software Composition Analysis) ile sürekli taranmalıdır.
