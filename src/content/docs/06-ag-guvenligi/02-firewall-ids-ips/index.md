---
title: "Yeni Nesil Güvenlik Duvarları (NGFW), IDS/IPS ve Ağ Görünürlüğü (DPI)"
sidebar:
  order: 2
---

# Yeni Nesil Güvenlik Duvarları (Firewall/NGFW), IDS/IPS ve Ağ Görünürlüğü

Ağ trafiğini izlemek ve kötü niyetli eylemleri engellemek için kullanılan savunma sistemleri, basit IP ve Port engellemesinden, uygulamaları ve kimlikleri tanıyan akıllı mimarilere evrilmiştir.

## §6.2.1. Güvenlik Duvarları ve Paket Filtreleme Mantığı

Güvenlik duvarları, önceden tanımlanmış kurallara (ACL) göre ağ trafiğine izin veren veya engelleyen cihazlardır.

*   **Durumsuz (Stateless) Filtreleme:** Sadece paketin başlığına (Kaynak IP, Hedef IP, Port) bakar. Paketin önceki bir iletişimin parçası olup olmadığını hatırlamaz. Gelişmiş saldırılara karşı yetersizdir.
*   **Durum Bilgili (Stateful) Filtreleme:** Mevcut ağ bağlantılarının durumunu (SYN, ESTABLISHED, CLOSED vb.) bir "Durum Tablosunda" (State Table) tutar. Eğer dışarıdan gelen bir paket, içeriden başlatılmış meşru bir bağlantının cevabı değilse otomatik olarak düşürülür (Drop).

---

## §6.2.2. Yeni Nesil Güvenlik Duvarları (NGFW) ve Özellikleri

Geleneksel Firewall'lar (OSI Katman 3 ve 4) trafiği sadece "Port 80 (HTTP)" olarak görebilirken, Yeni Nesil Güvenlik Duvarları (NGFW) trafiği 7. katmana kadar analiz edebilir.

*   **Uygulama Farkındalığı (App-ID):** Standart olmayan portlar üzerinden geçmeye çalışan uygulamaları (Örneğin Port 80 üzerinden çalışan bir Tor tarayıcısı veya Skype) imzalarına göre tespit eder ve engeller.
*   **Kullanıcı Farkındalığı (User-ID):** Kuralların IP adreslerine göre değil, Active Directory entegrasyonu sayesinde doğrudan kullanıcı adlarına veya gruplara (Örn: "Pazarlama Departmanı") göre yazılmasına olanak tanır.
*   **Kural Optimizasyonu:** Kurumsal güvenlik duvarı yönetiminde (Palo Alto, Fortinet vb.) "Any-Any-Allow" (Herkes Her Yere Gidebilir) kurallarından kaçınılmalı, kurallar yukarıdan aşağıya işlendiği için en spesifik kurallar en üste, en genel kural (Deny-All) en alta yazılmalıdır.

---

## §6.2.3. Saldırı Tespit ve Önleme Sistemleri (IDS/IPS)

Ağ trafiğinin içindeki gizli tehditleri ve istismar (Exploit) girişimlerini tespit etmek için kullanılırlar.

*   **IDS (Saldırı Tespit Sistemi - Intrusion Detection System):** Ağ trafiğinin bir kopyasını alarak (Port Mirroring/SPAN) pasif dinleme yapar. Saldırıyı engellemez, sadece yöneticiye "alarm" üretir. Ağı yavaşlatmaz.
*   **IPS (Saldırı Önleme Sistemi - Intrusion Prevention System):** Ağ trafiğinin doğrudan üzerinde konumlanır (In-line). Kötü niyetli bir paket tespit ettiğinde, o paketin karşı tarafa ulaşmasını anında engeller.
*   **Tespit Yöntemleri:**
    *   **İmza Tabanlı (Signature-Based):** Bilinen zararlıların veritabanındaki "parmak izlerini" arar. Yanlış alarm oranı (False Positive) çok düşüktür ancak yepyeni (Zero-Day) saldırıları göremez.
    *   **Anomali Tabanlı (Anomaly/Heuristic-Based):** Ağın "normal" davranışını (Baseline) öğrenir. Gecenin bir yarısı olağandışı bir veri transferi başlarsa bunu anomali kabul eder. Yeni saldırıları tespit edebilir ancak yanlış alarm üretme ihtimali yüksektir.

---

## §6.2.4. Derin Paket İncelemesi (DPI) ve SSL İleri Proxy (SSL Decryption)

*   **DPI (Deep Packet Inspection):** Güvenlik cihazının paketin sadece başlığına değil, "Yüküne" (Payload - mesajın içeriği) de girerek zararlı yazılım veya veri sızıntısı aramasıdır.
*   **Şifreli Trafik Analizi (SSL Forward Proxy / Decryption):** Günümüzde internet trafiğinin %90'ından fazlası HTTPS ile şifrelenmiştir. Saldırganlar da zararlı yazılımlarını bu şifreli tünelin içine gizler.
    *   Bunu çözmek için NGFW, kurum içinde bir "Ortadaki Adam" (Man-in-the-Middle) gibi davranır.
    *   Kurum içi kullanıcının trafiğini çözer, DPI ile tarar, temizse kendi sertifikasıyla yeniden şifreleyerek internete gönderir. Bu işlem, şirket cihazlarına özel bir "Kök Sertifika (Root CA)" yüklenmesini gerektirir.
