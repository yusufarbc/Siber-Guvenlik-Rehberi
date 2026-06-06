---
title: "OT/ICS Sistemleri, Purdue Modeli ve Güvenli IT/OT Entegrasyonu"
sidebar:
  order: 1
---

# OT/ICS Sistemleri, Purdue Modeli ve IT/OT Entegrasyonu

Geleneksel Bilgi Teknolojileri (IT) veriyi korumaya odaklanırken, Operasyonel Teknolojiler (OT) fabrikalardaki, enerji santrallerindeki ve su şebekelerindeki fiziksel süreçleri yönetir. OT'de bir güvenlik ihlali sadece veri kaybına değil, fiziksel hasarlara ve can kayıplarına yol açabilir.

## §13.1.1. OT/ICS (Endüstriyel Kontrol Sistemleri) Karakteristiği

IT ve OT dünyalarının öncelikleri (CIA Üçlüsü) birbirinden tamamen farklıdır.

*   **IT'nin Önceliği:** Gizlilik (Confidentiality). Bir e-postanın gecikmesi tolere edilebilir, ancak çalınması edilemez.
*   **OT'nin Önceliği:** Kullanılabilirlik (Availability) ve Güvenilirlik (Safety). Bir petrol boru hattının valfini yöneten sinyalin 1 saniye gecikmesi bile patlamaya yol açabilir. Bu nedenle OT sistemleri (PLC, SCADA) durdurulamaz, yeniden başlatılamaz ve genellikle yama (Patch) yapılamazlar.
*   **Eski Sistemler (Legacy):** OT ortamlarında 20-30 yıl çalışan Windows XP veya daha eski işletim sistemleri ve şifreleme desteklemeyen endüstriyel protokoller (Modbus, DNP3) bulunur.

---

## §13.1.2. Purdue Referans Modeli

Endüstriyel ağların güvenliğini sağlamak için kullanılan, ağı fonksiyonel katmanlara bölen uluslararası bir standarttır (ISA-99 / IEC 62443).

*   **Level 0 (Fiziksel Süreç):** Vanalar, motorlar, ısı sensörleri.
*   **Level 1 (Temel Kontrol):** Sensörlerden veriyi okuyan ve motorlara komut gönderen PLC (Programlanabilir Lojik Kontrolör) cihazları.
*   **Level 2 (Süreç Gözetimi):** Tesis operatörlerinin süreçleri izlediği HMI (İnsan Makine Arayüzü) ekranları.
*   **Level 3 (Tesis Yönetimi):** SCADA (Merkezi Denetim ve Veri Toplama) sistemleri ve üretim planlama sunucuları.
*   **Level 3.5 (Endüstriyel DMZ - iDMZ):** IT (Kurumsal Ağ) ile OT (Fabrika Ağı) arasındaki "Arındırılmış Bölge".
*   **Level 4 ve 5 (Kurumsal IT Ağı):** E-posta sunucuları, internet erişimi, ERP sistemleri.

---

## §13.1.3. Güvenli IT/OT Entegrasyonu ve İzolasyon

Sanayi 4.0 ve dijital dönüşüm ile birlikte, eskiden internetten tamamen kopuk (Air-Gapped) olan fabrikalar (OT), veri analizi için şirketin kurumsal ağına (IT) bağlanmak zorundadır. Bu durum büyük riskler doğurur.

*   **IT'den OT'ye Sıçrama Riski:** Bir çalışanın ofisteki (Level 4) bilgisayarına bulaşan fidye yazılımı (Ransomware), eğer arada bir yalıtım yoksa doğrudan fabrikadaki (Level 2) HMI ekranlarına sıçrayıp üretimi durdurabilir.
*   **Endüstriyel DMZ (iDMZ) Kullanımı:** IT ve OT ağları asla birbirleriyle "doğrudan" konuşmamalıdır. IT ağı, sadece Level 3.5'teki DMZ'ye kadar inebilmeli; OT ağı da verisini sadece DMZ'deki bir köprü sunucusuna (Jump Host veya Veri Aynalama) bırakmalıdır.
*   **Tek Yönlü İletişim (Data Diodes):** Kritik tesislerde (Örn: Nükleer santraller) IT'den OT'ye siber saldırı geçişini donanımsal olarak (fiziksel kablo yapısıyla) %100 engelleyen "Veri Diyotları" kullanılır. Veri OT'den çıkar ancak OT'ye dışarıdan tek bir paket bile giremez.
