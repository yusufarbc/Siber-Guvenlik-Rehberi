---
title: "Güvenli Yazılım Geliştirme (SDLC), Kod Analizi (SAST/DAST) ve DevSecOps"
sidebar:
  order: 1
---

# Güvenli Yazılım Geliştirme (SDLC) ve DevSecOps

Yazılım dünyasında hız ve çeviklik (Agile/DevOps) odak noktası haline gelmiştir. Ancak güvenlik kontrollerini yazılım canlıya alındıktan (Production) sonraya bırakmak, hem güvenlik açıklarının giderilme maliyetini 100 kat artırır hem de mimari zafiyetlere yol açar.

## §10.1.1. Sola Kaydırma (Shift-Left) ve Tehdit Modelleme

Yazılım Geliştirme Yaşam Döngüsü (SDLC); Planlama, Tasarım, Kodlama, Test ve Dağıtım aşamalarından oluşur.

*   **Sola Kaydırma (Shift-Left):** Güvenlik süreçlerinin (testler, denetimler) SDLC'nin en son aşamasından alınıp, en başa (sola, yani geliştirme aşamasına) çekilmesi konseptidir. Geliştirici kodu yazdığı anda güvenlik analizinden geçirilmesidir.
*   **Tehdit Modelleme (Threat Modeling):** Daha tek satır kod yazılmadan, mimari tasarım aşamasında sistemin nasıl hacklenebileceğini öngörme sürecidir (Örn: STRIDE veya DREAD metodolojileri). Sistemin zayıf noktaları tasarım aşamasında tespit edilip düzeltilir.

---

## §10.1.2. Kod Analizi: SAST, DAST ve IAST

Yazılımdaki zafiyetleri tespit etmek için kullanılan üç farklı test metodolojisi vardır:

*   **SAST (Statik Uygulama Güvenliği Testi):** Beyaz Kutu (White-box) testidir. Geliştirici kodu yazıp depoya (Commit) gönderdiği anda, uygulama çalıştırılmadan kaynak kodun kendisi taranır (Örn: SQL Injection'a neden olan hatalı bir kod bloğu tespiti).
*   **DAST (Dinamik Uygulama Güvenliği Testi):** Siyah Kutu (Black-box) testidir. Kod çalışır hale gelip test veya canlı ortama alındıktan sonra, sanki bir hacker saldırıyormuş gibi dışarıdan HTTP istekleriyle (Payloadlar) test edilir. Yalnızca çalışan uygulamanın davranışını analiz eder, koda bakmaz.
*   **IAST (Etkileşimli Uygulama Güvenliği Testi):** SAST ve DAST'ın hibritidir. Çalışan uygulamanın içine yerleştirilen bir ajan (Agent) sayesinde, DAST testleri yapılırken arka planda hangi satır kodun çalıştığını da anlık olarak görür. Çok daha isabetlidir.

---

## §10.1.3. Yazılım Tedarik Zinciri, SCA ve SBOM

Modern yazılımların yaklaşık %80'i geliştiricilerin yazdığı özgün kodlardan değil, internetten indirilen (NPM, PyPI, Maven vb.) açık kaynaklı kütüphanelerden ve bağımlılıklardan (Dependencies) oluşur.

*   **SCA (Yazılım Bileşimi Analizi):** Projede kullanılan açık kaynaklı kütüphaneleri tarayarak, bu kütüphanelerde bilinen bir güvenlik açığı (CVE) veya sorunlu bir lisans (Örn: GPL) olup olmadığını tespit eden araçlardır. (Log4j zafiyeti bunun en büyük örneğidir).
*   **SBOM (Yazılım Malzeme Listesi):** Tıpkı gıda ambalajlarının arkasındaki "İçindekiler" listesi gibi, bir yazılımın içinde kullanılan tüm kütüphanelerin, sürümlerinin ve bileşenlerinin makine tarafından okunabilir bir listesidir. Bir zafiyet çıktığında kurumun bu kütüphaneyi kullanıp kullanmadığını saniyeler içinde bulmasını sağlar.

---

## §10.1.4. DevSecOps: CI/CD Entegrasyonu

DevSecOps, güvenliği bir "engel/onay mekanizması" olmaktan çıkarıp, yazılım dağıtım sürecinin (DevOps) doğal bir parçası haline getirme felsefesidir.

*   **CI/CD Pipeline Entegrasyonu:** Geliştiricilerin kodu birleştirdiği (Sürekli Entegrasyon - CI) ve canlıya aldığı (Sürekli Dağıtım - CD) otomasyon hatlarıdır.
*   **Otomasyon:** Bir geliştirici kodu commit ettiğinde; SAST otomatik olarak kodu tarar, SCA bağımlılıkları kontrol eder, Docker imajı (Container) güvenlik taramasından geçirilir. Eğer kritik bir zafiyet bulunursa pipeline kırılır (Build failed) ve kodun canlıya çıkması insan müdahalesine gerek kalmadan sistem tarafından engellenir.
