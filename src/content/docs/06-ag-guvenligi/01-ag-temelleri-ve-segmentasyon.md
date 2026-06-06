---
title: "Ağ İletişim Temelleri (OSI/TCP-IP), DMZ Tasarımı ve Ağ Segmentasyonu"
sidebar:
  order: 1
---

# Ağ İletişim Temelleri, DMZ ve Ağ Segmentasyonu

Modern ağ güvenliği, ağın nasıl çalıştığını detaylı bir şekilde anlamakla başlar. Bu bölümde, iletişimin yapı taşları olan protokol modelleri ve ağın güvenli bir şekilde nasıl bölümlendirileceği incelenmektedir.

## §6.1.1. Ağ İletişim Temelleri: OSI ve TCP/IP Modelleri

Bilgisayarların birbiriyle konuşmasını sağlayan kurallar bütününe "protokol" denir. Ağ iletişimini anlamak için uluslararası standart modeller kullanılır.

### OSI Referans Modeli vs TCP/IP Protokol Yığını
*   **OSI (Open Systems Interconnection) Modeli:** Ağ iletişimini 7 teorik katmana böler. Sorun giderme (troubleshooting) ve güvenlik cihazlarının hangi seviyede çalıştığını anlamak için ideal bir referans modelidir.
    *   *Katman 1 (Fiziksel):* Kablolar, fiber optik, bit iletimi.
    *   *Katman 2 (Veri Bağlantı):* MAC adresleri, Switch'ler, Çerçeveler (Frames).
    *   *Katman 3 (Ağ):* IP adresleri, Router'lar, Paketler (Packets).
    *   *Katman 4 (Taşıma):* TCP ve UDP, Segmentler.
    *   *Katman 7 (Uygulama):* HTTP, FTP, DNS gibi kullanıcının etkileşime girdiği protokoller.
*   **TCP/IP Modeli:** Gerçek dünyada internetin üzerinde çalıştığı 4 katmanlı pratik mimaridir (Uygulama, Taşıma, İnternet, Ağ Erişimi).

### TCP 3'lü El Sıkışma (3-way Handshake) ve Oturum Yönetimi
TCP (Transmission Control Protocol), verinin karşı tarafa ulaştığını garanti eden güvenilir bir protokoldür. İletişim başlamadan önce güvenilir bir oturum açılması gerekir:
1.  **SYN:** İstemci, sunucuya bağlantı kurmak istediğini belirten bir senkronizasyon paketi gönderir.
2.  **SYN-ACK:** Sunucu, bu isteği aldığını onaylar ve kendi senkronizasyon paketini gönderir.
3.  **ACK:** İstemci, sunucunun onayını aldığını belirtir. İletişim başlar.
*   *Güvenlik Notu:* Bu mekanizma suistimal edilerek "TCP SYN Flood" gibi DoS saldırıları yapılabilir.

---

## §6.1.2. Yönlendirme Protokolleri ve VLAN/Subnet Mimarisi

Ağ trafiğinin içeride ve dışarıda doğru adreslere ulaşabilmesi yönlendirme ve anahtarlama mantığına dayanır.

*   **VLAN (Virtual LAN) ve Subnetting:** Fiziksel olarak aynı Switch üzerinde bulunan cihazların, mantıksal olarak birbirinden izole edilmiş sanal ağlara (VLAN) bölünmesidir. Performansı artırır ve Broadcast (yayın) trafiğini sınırlandırır. Alt ağlara bölme (Subnetting) işlemi ise IP bloklarının verimli kullanılmasını sağlar.
*   **Yönlendirme (Routing) Protokolleri:**
    *   **OSPF (Open Shortest Path First):** Kurum içi ağlarda (IGP) en kısa ve hızlı yolu bulmak için kullanılan iç yönlendirme protokolü.
    *   **BGP (Border Gateway Protocol):** İnternetin "posta kodu" sistemidir. Farklı kurumlar ve ülkeler arasındaki (EGP) devasa trafik yönlendirmelerini yapar. BGP'nin güvenlik zafiyetleri (BGP Hijacking), internet trafiğinin çalınmasına yol açabilir.

---

## §6.1.3. DMZ (Demilitarized Zone) Mimarisi ve İzolasyon

Kurumun iç ağı (LAN) oldukça güvenlidir, internet (WAN) ise tehlikelidir. İnternetten erişilebilir olması gereken sunucular (Örn: Web, Mail, DNS) ile kritik iç ağı birbirinden ayırmak için **DMZ (Arındırılmış Bölge)** kullanılır.

*   **Tasarım Mantığı:** İki güvenlik duvarı (veya çok bacaklı tek bir Firewall) arasına yerleştirilen izole bir ağ segmentidir. İnternetteki kullanıcılar sadece DMZ içindeki web sunucusuna erişebilir, iç ağdaki veritabanına erişemez.
*   **Kural Setleri (Trafik Akışı):**
    *   *Dışarıdan DMZ'ye:* Sadece gerekli portlara (Örn: HTTP/443) izin verilir.
    *   *DMZ'den İç Ağa:* **Kesinlikle engellenmelidir.** Eğer DMZ'deki web sunucusu hacklenirse, saldırganın iç ağa geçiş yapamaması (Lateral Movement engeli) için DMZ'den içeriye yeni bir bağlantı başlatılamaz. Sadece iç ağ DMZ'den veri çekebilir.
