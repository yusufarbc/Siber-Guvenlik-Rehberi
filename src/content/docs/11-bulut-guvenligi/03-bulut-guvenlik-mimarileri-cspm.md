---
title: "Bulut Güvenlik Mimarileri (CSPM, CWPP, CASB) ve CNAPP"
sidebar:
  order: 3
---

# Bulut Güvenlik Mimarileri (CSPM, CWPP, CASB) ve CNAPP

Bulut ortamları çok dinamik olduğu için geleneksel (On-Premise) güvenlik araçları bulutta genellikle işe yaramaz. Kurumlar bulut altyapılarını korumak için buluta özel tasarlanmış güvenlik ürünleri kullanmak zorundadır.

## §11.3.1. CSPM (Cloud Security Posture Management)

Bulut zafiyetlerinin %90'ından fazlası, bulut sağlayıcısının (AWS, Azure) hatasından değil, kurumun bulut hizmetlerini yanlış yapılandırmasından kaynaklanır (Misconfiguration).

*   **CSPM Nedir?** "Bulut Güvenlik Duruşu Yönetimi" olarak çevrilebilir. Kurumun tüm bulut altyapısını (AWS, Azure, GCP) API'ler üzerinden tarar ve güvenlik politikalarına (NIST, CIS Benchmarks, ISO 27001) uyumluluğunu kontrol eder.
*   **Ne Yapar?** "İnternete açık bırakılmış bir S3 veri deposu var mı?", "MFA kullanmayan admin hesapları var mı?", "Açık unutulmuş RDP (Port 3389) portu var mı?" gibi soruların cevaplarını anlık olarak bularak yöneticileri uyarır.

---

## §11.3.2. CWPP (Cloud Workload Protection Platform)

Buluttaki "iş yüklerinin" (Workloads - Sanal Makineler, Konteynerler, Sunucusuz/Serverless Fonksiyonlar) içindeki tehditleri tespit eden teknolojidir.

*   **CWPP Nedir?** CSPM altyapı ayarlarına (dışarıya) bakarken, CWPP doğrudan sunucunun ve konteynerin içine (çalışan koda ve belleğe) bakar.
*   **Ne Yapar?** Geleneksel Antivirüs/EDR mantığının buluta uyarlanmış halidir. Çalışan bir konteynerin içinde zararlı bir yazılım çalışmaya başlarsa veya bellekte bir anomali tespit edilirse bunu anında durdurur.

---

## §11.3.3. CASB (Cloud Access Security Broker)

Çalışanların, kurumun yönetmediği üçüncü taraf bulut SaaS uygulamalarını (Dropbox, Google Drive, Salesforce vb.) kullanması durumunda devreye giren güvenlik kalkanıdır.

*   **Gölge BT (Shadow IT) Tespiti:** Çalışanların şirketten habersiz kullandıkları bulut uygulamalarını tespit eder.
*   **DLP ve Erişim Kontrolü:** Çalışan, şirketin Office 365 hesabından hassas bir dosyayı kişisel Dropbox hesabına yüklemeye çalıştığında, CASB araya girerek bu işlemi engeller. Ayrıca şirket verilerine sadece yönetilen cihazlardan girilmesini sağlar.

---

## §11.3.4. CNAPP (Cloud-Native Application Protection Platform)

Yukarıda bahsedilen CSPM, CWPP, IaC güvenliği ve konteyner tarama ürünlerinin ayrı ayrı satın alınıp yönetilmesi "Alarm Yorgunluğu (Alert Fatigue)" yaratır.

*   **CNAPP:** Tüm bu bulut güvenlik ürünlerini (CSPM + CWPP + IaC Tarama) tek bir platform ve tek bir konsol altında birleştiren modern çatı mimarisinin adıdır. Siloları ortadan kaldırır ve geliştiriciden (DevOps) güvenlik operasyonlarına (SOC) kadar uçtan uca görünürlük sağlar.
