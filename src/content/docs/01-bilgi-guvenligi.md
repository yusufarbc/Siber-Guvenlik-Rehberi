---
title: "Bilgi Güvenliği ve Yönetişim"
sidebar:
  label: "Bilgi Güvenliği"
  order: 1
---

# Bilgi Güvenliği ve Yönetişim

Bilgi Güvenliği ve Yönetişimi (Information Security Governance), bir organizasyonun dijital varlıklarını korumak, riskleri yönetmek ve stratejik hedeflerine ulaşmasını sağlamak amacıyla oluşturulan süreçler, politikalar ve kontroller bütünüdür. Modern bir siber savunma stratejisi, sadece teknik araçlara değil, aynı zamanda sağlam bir yönetimsel çerçeveye dayanmalıdır.

§

## Güvenliğin Temel Kavramları: CIA Üçlüsü

Siber güvenliğin evrensel hedefleri, **CIA Üçlüsü** olarak bilinen üç temel ilke etrafında tanımlanır. Bu model, bir kuruluşun güvenlik programının ve politikalarının oluşturulması için temel bir çerçeve sunar.

### 1. Gizlilik (Confidentiality)
Bu ilke, hassas bilgilerin yalnızca yetkili kullanıcılar, süreçler ve cihazlar tarafından erişilebilir olmasını sağlamayı hedefler. Temel amaç, verilerin yetkisiz ifşasına karşı korunmasıdır. Gizliliği sağlamak için kullanılan yaygın mekanizmalar arasında **şifreleme (encryption)**, **erişim kontrol listeleri (ACL'ler)** ve **veri sınıflandırması** bulunur.

### 2. Bütünlük (Integrity)
Verilerin tüm yaşam döngüsü boyunca doğruluğunun, tutarlılığının ve güvenilirliğinin korunması anlamına gelir. Bütünlük, verilerin yetkisiz veya fark edilmeyen bir şekilde değiştirilmesini, silinmesini veya bozulmasını önlemeyi amaçlar. Bu ilke, verinin hem depolanırken (at-rest) hem de iletilirken (in-transit) korunmasını kapsar. Bütünlüğü sağlamak için **özet (hashing)** algoritmaları ve **dijital imzalar** gibi teknolojiler kullanılır.

### 3. Erişilebilirlik (Availability)
Yetkili kullanıcıların, ihtiyaç duydukları anda ağ kaynaklarına, sistemlere ve verilere kesintisiz bir şekilde erişebilmesini garanti etme ilkesidir. Erişilebilirlik, Hizmet Reddi (DoS) saldırıları, donanım arızaları veya doğal afetler gibi hizmet kesintilerine karşı sistemlerin dayanıklı olmasını gerektirir. Yüksek kullanılabilirlik sağlamak için **yedekli sistemler (redundancy)**, **yük dengeleme (load balancing)** ve **felaket kurtarma planları** gibi önlemler alınır.

§

## Stratejik Yaklaşım: Savunma Derinliği (Defense in Depth)

CIA Üçgeni'nde tanımlanan hedeflere ulaşmak için kullanılan temel strateji, **Savunma Derinliği (Defense in Depth - DiD)**'dir. Bu strateji, tek bir güvenlik kontrolünün asla yanılmaz veya yeterli olmayacağı varsayımına dayanır.

Bir saldırganın hedefine ulaşmasını engellemek veya yavaşlatmak için birden çok ve çeşitli güvenlik kontrol katmanı bir araya getirilir. Bir katman atlatılsa bile, diğer katmanların saldırıyı tespit edip durdurması amaçlanır.

### Savunma Katmanları:
- **Fiziksel Güvenlik:** Veri merkezlerine ve ağ donanımlarına fiziksel erişimi kontrol eder.
- **Ağ Güvenliği:** Ağın çevresini ve iç segmentlerini korur (Firewalls, IPS).
- **Uç Nokta Güvenliği:** Sunucular ve son kullanıcı cihazlarını korur (EDR, Antivirüs).
- **Uygulama Güvenliği:** Web uygulamaları ve API'leri hedef alan saldırılara karşı koruma sağlar (WAF).
- **Veri Güvenliği:** Verinin kendisini şifreleme ve DLP ile korur.
- **İdari Kontroller:** Güvenlik politikaları, prosedürler ve farkındalık eğitimleri.

§

## Proaktif Güvenlik: Risk Değerlendirme

Etkili bir güvenlik programı, sadece gerçekleşen saldırılara yanıt vermekten (reaktif) ibaret olmamalı, aynı zamanda potansiyel saldırıları öngörerek önlem almalıdır (proaktif).

**Risk Değerlendirme**, bir kuruluşun varlıklarına yönelik tehditleri, bu tehditlerin istismar edebileceği zafiyetleri ve gerçekleşmesi durumunda ortaya çıkacak potansiyel etkiyi analiz etme sürecidir.

> **Risk Formülü:**
> `Risk = Tehdit × Zafiyet × Etki`

Bu analiz, sınırlı güvenlik kaynaklarının ve yatırımlarının en kritik alanlara yönlendirilmesi için bir önceliklendirme mekanizması sağlar.

