---
title: "Fiziksel Çevre, Tesis ve Veri Merkezi Güvenliği"
sidebar:
  order: 1
---

# Fiziksel Çevre, Tesis ve Veri Merkezi (Data Center) Güvenliği

Siber güvenliğin ilk savunma hattı her zaman fiziksel güvenliktir. Saldırganın bir sunucuya fiziksel olarak erişebilmesi durumunda, yazılımsal güvenlik önlemlerinin büyük bir kısmı etkisiz hale gelebilir. Bu bölümde tesislerin ve veri merkezlerinin korunmasına yönelik stratejileri inceleyeceğiz.

## §2.1.1. Katmanlı Fiziksel Güvenlik ve CPTED

Tesis güvenliği, merkeze yaklaştıkça artan katmanlı bir savunma anlayışıyla tasarlanmalıdır (Çevre, Bina Girişi, Kat Girişi, Sistem Odası).

*   **CPTED (Crime Prevention Through Environmental Design):** Suçun mimari ve çevresel tasarımla önlenmesi konseptidir. Tesis etrafındaki aydınlatmaların artırılması, kör noktaların giderilmesi ve yönlendirici engellerle doğal bir erişim kontrolü sağlanması CPTED'in temel ilkeleridir.
*   **Tailgating ve Piggybacking:**
    *   **Tailgating (Kuyruğa Takılma):** Yetkisiz bir kişinin, yetkili bir çalışanın arkasından gizlice kapıdan geçmesidir.
    *   **Piggybacking (Sırtına Binme):** Yetkisiz kişinin, yetkili çalışanı "ellerim dolu, kapıyı tutar mısın" gibi bahanelerle ikna ederek içeri girmesidir.
    *   *Önlem:* Bu durumlara karşı "Mantrap" (çift kapılı güvenlik geçişleri) ve turnike sistemleri kullanılır.
*   **Biyometrik Geçiş Kontrolleri:** Parmak izi, iris taraması, damar izi tanıma veya yüz tanıma gibi kişinin fiziksel özelliklerine dayalı yüksek güvenlikli erişim sistemleridir.

---

## §2.1.2. Veri Merkezi İklimlendirme (HVAC) ve Koridor Mimarisi

Sunucular, çalışırken yüksek miktarda ısı üretir. Isının doğru yönetilememesi donanım arızalarına ve sistem kesintilerine yol açar.

*   **HVAC (Heating, Ventilation, and Air Conditioning):** Veri merkezlerindeki sıcaklık (18°C-27°C arası) ve nem (%40-%60 arası) oranını optimum seviyelerde tutan endüstriyel iklimlendirme sistemleridir. Statik elektriği önlemek için nem kontrolü kritik öneme sahiptir.
*   **Sıcak/Soğuk Koridor (Hot/Cold Aisle) Mimarisi:**
    *   Sunucu kabinlerinin ön yüzleri birbirine bakacak şekilde dizilerek aralarında bir **Soğuk Koridor** oluşturulur. HVAC'tan gelen soğuk hava bu koridora verilir.
    *   Kabinlerin arka yüzleri ise **Sıcak Koridor**'a bakar ve sunuculardan atılan sıcak hava bu koridorda toplanarak tekrar soğutulmak üzere tavana (veya HVAC sistemine) yönlendirilir.
    *   Bu yapılandırma, sıcak ve soğuk havanın birbirine karışmasını engelleyerek soğutma verimliliğini maksimize eder.

---

## §2.1.3. Güç Sürekliliği ve Yangın Söndürme Sistemleri

Bir veri merkezinin iş sürekliliğini sağlaması için kesintisiz enerji ve donanıma zarar vermeyen yangın müdahale sistemleri şarttır.

### Güç Sürekliliği Sistemleri
*   **UPS (Uninterruptible Power Supply):** Elektrik kesintisi anında sunucuların kapanmasını önlemek için akülerden anında enerji sağlayan Kesintisiz Güç Kaynaklarıdır. Genellikle jeneratör devreye girene kadar geçen kısa süreyi (10-15 dakika) tolere etmek için kullanılır.
*   **Jeneratörler:** Uzun süreli elektrik kesintilerinde devreye giren dizel/yakıtlı güç üretim üniteleridir. Jeneratörlerin düzenli olarak yük testine tabi tutulması kritiktir.

### Yangın Söndürme Sistemleri
Su bazlı yangın söndürme sistemleri elektronik cihazlara zarar vereceğinden, veri merkezlerinde oksijeni boğan veya ısıyı absorbe eden gaz bazlı sistemler kullanılır.
*   **FM200 ve Novec 1230:** Ortamdaki ısıyı hızla emerek ve kimyasal reaksiyonu kırarak yangını söndüren, ozon tabakasına zararı olmayan temiz gazlı söndürme sistemleridir. Donanıma ve insan sağlığına zarar vermezler.
