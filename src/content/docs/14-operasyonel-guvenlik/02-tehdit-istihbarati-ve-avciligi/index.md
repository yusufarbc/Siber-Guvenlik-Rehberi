---
title: "Siber Tehdit İstihbaratı (CTI), Tehdit Avcılığı ve Aldatma Teknolojileri"
sidebar:
  order: 2
---

# Siber Tehdit İstihbaratı (CTI), Tehdit Avcılığı ve Aldatma Teknolojileri (Honeypot)

Modern siber savunma, sadece güvenlik cihazlarının ürettiği alarmları bekleyen pasif bir modelden sıyrılarak; düşmanı önceden tanımayı (CTI), ağın içine sızmış gizli saldırganları aktif olarak aramayı (Threat Hunting) ve saldırganları yanıltarak tuzaklara çekmeyi (Deception) içeren proaktif bir yapıya dönüşmüştür.

---

## §14.2.1. Siber Tehdit İstihbaratı (CTI), IoC ve IoA

**Siber Tehdit İstihbaratı (Cyber Threat Intelligence - CTI)**; siber saldırganların kimliklerini, motivasyonlarını, yeteneklerini ve kullandıkları yöntemleri analiz eden süreçtir. CTI, elde edilen bulguları operasyonel ve taktiksel olarak savunma katmanlarına entegre eder.

*   **CTI Yaşam Döngüsü:** Yönlendirme (ihtiyaç tespiti), Toplama (OSINT, karanlık web, ticari beslemeler), İşleme (verilerin temizlenmesi), Analiz (anlamlandırma), Dağıtım (paylaşım) ve Geri Bildirim adımlarından oluşur.
*   **IoC (Indicator of Compromise - Uzlaşma Göstergeleri):** Bir saldırının gerçekleştiğini veya sistemin ele geçirildiğini gösteren *reaktif* teknik kanıtlardır. 
    *   *Örnekler:* Bilinen bir zararlı yazılımın SHA-256 hash değeri, saldırganın komuta kontrol (C2) sunucusunun IP adresi veya Phishing amaçlı kullanılan bir domain adı. IoC'ler kolayca değiştirilebilir (saldırgan IP adresini değiştirebilir), bu nedenle savunma değeri sınırlıdır.
*   **IoA (Indicator of Attack - Saldırı Göstergeleri):** Bir saldırının henüz tamamlanmadan, gerçekleştiği andaki *proaktif* davranış göstergeleridir. 
    *   *Örnekler:* Sistemde yetkisiz bir kullanıcının aniden yönetici parolalarını okumaya (LSASS dump) çalışması veya anormal bir saatte dışarıdaki yabancı bir sunucuya yüksek miktarda veri aktarımının (Exfiltration) başlaması. Saldırganın bu davranışları değiştirmesi çok daha zordur.

---

## §14.2.2. MITRE ATT&CK ve Proaktif Tehdit Avcılığı

**Tehdit Avcılığı (Threat Hunting)**, "Sistemlerimize çoktan sızıldı ama hiçbir güvenlik aracı alarm üretmedi" varsayımı (Assume Breach) ile hareket eden analistlerin ağ içinde aktif arama yapmasıdır.

*   **Avcılık Hipotezi Kurma:** Rastgele arama yapılmaz. Analist bir hipotez kurar. 
    *   *Hipotez:* "Saldırganlar ağımızda yanal hareket (Lateral Movement) yaparken WMI (Windows Management Instrumentation) komutlarını kullanıyor olabilir."
*   **MITRE ATT&CK Çerçevesi:** Dünya genelindeki APT (Gelişmiş Sürekli Tehdit) gruplarının kullandığı **Taktikler (Amaçlar)**, **Teknikler (Yöntemler)** ve **Prosedürler (Uygulama Şekilleri)** bilgisini içeren evrensel matristir. Tehdit avcıları, hangi teknikleri avlayacaklarını belirlemek için bu matrisi kullanırlar.
*   **Avlanma Süreci:** Kurulan hipotezi doğrulamak amacıyla SIEM veya EDR sistemlerinde WMI logları sorgulanır. Anormallikler tespit edilirse olay müdahale süreci başlatılır, tespit edilmezse süreç yeni bir hipotezle tekrarlanır.

---

## §14.2.3. Ağ Adli Bilişimi (Network Forensics) ve Anomali Tespiti

Saldırganlar uç noktalardaki (EDR/Antivirüs) logları temizleyebilir veya devre dışı bırakabilir. Ancak ağ üzerinden geçen paketleri tamamen gizlemeleri imkansızdır. **Ağ Adli Bilişimi**, ağ trafiğinin izlenmesi, kaydedilmesi ve analiz edilmesi sürecidir.

*   **PCAP (Packet Capture) Analizi:** Ağdan geçen ham veri paketlerinin tamamının kaydedilerek Wireshark, tshark veya Network Miner gibi araçlarla analiz edilmesidir. PCAP dosyaları saldırının tam bir röntgenini çeker ancak saklama maliyeti yüksektir.
*   **Ağ Akış (NetFlow) Analizi:** Paket içeriği yerine, paketlerin üst verilerini (Kaynak IP, Hedef IP, Port, Protokol, Paket Sayısı, Byte Boyutu) kaydeder. Çok az depolama alanı kaplar ve ağdaki hacimsel anomalileri (Örn: Bir sunucunun normalin dışında 50 GB veri göndermesi) bulmada çok etkilidir.
*   **Ağ Sensörleri (Zeek/Bro):** Ağ trafiğini analiz ederek yapılandırılmış loglar (HTTP istekleri, DNS sorguları, SSL sertifika detayları) üreten proaktif analiz araçlarıdır.

---

## §14.2.4. Aldatma Teknolojileri (Deception Technologies)

Aldatma teknolojileri, ağın içerisine kasıtlı olarak yerleştirilmiş sahte sistemler, servisler ve veriler yoluyla saldırganları tuzağa düşürme ve erken uyarı alma stratejisidir.

*   **Honeypot (Bal Küpü):** Saldırganların hedef alması amacıyla bilerek zafiyetli bırakılmış sahte sistemlerdir.
    *   *Düşük Etkileşimli (Low-Interaction) Honeypot:* Sadece belirli servisleri (Örn: SSH, Telnet) simüle eder. Saldırganın sisteme sızmasına izin vermez, sadece bağlantı isteklerini loglar. Erken uyarı için idealdir. (Örn: Cowrie, Kippo).
    *   *Yüksek Etkileşimli (High-Interaction) Honeypot:* Gerçek bir işletim sistemi ve servis barındırır. Saldırganın içeriye girip komut çalıştırmasına izin verilir. Saldırganın davranışlarını, kullandığı exploit ve scriptleri detaylı analiz etmek için kullanılır.
*   **Honeynet:** Birden fazla honeypot'un ve sahte ağ cihazlarının bir araya getirilerek oluşturulduğu sahte ağ altyapısıdır.
*   **Honeymonkey:** Web sitelerini otomatik olarak tarayan, zafiyetli tarayıcı taklidi yaparak sitelerdeki "Drive-by Download" (tıklamadan inen zararlılar) saldırılarını tespit eden aktif tarayıcı bal küpleridir.
