---
title: "Siber Tehdit İstihbaratı (CTI), Tehdit Avcılığı ve SOAR"
sidebar:
  order: 2
---

# Siber Tehdit İstihbaratı (CTI), Tehdit Avcılığı ve SOAR

Siber güvenlik savunması artık sadece gelen saldırıları karşılamak (Reaktif) üzerine değil, saldırganları önceden tanımak ve ağın içindeki gizli düşmanları aktif olarak aramak (Proaktif) üzerine kuruludur.

## §12.2.1. Siber Tehdit İstihbaratı (CTI) ve IoC Kavramı

Siber Tehdit İstihbaratı (Cyber Threat Intelligence), siber suç gruplarının amaçlarını, hedeflerini, kullandıkları araçları ve altyapıları analiz eden süreçtir. Temelde veriler iki seviyede incelenir:

*   **IoC (Indicator of Compromise - Uzlaşma Göstergeleri):** Bir saldırının gerçekleştiğini gösteren "teknik kanıtlardır". Zararlı bir dosyanın Hash değeri (Örn: MD5), saldırganın kullandığı IP adresi veya Phishing için kullanılan alan adı (Domain) IoC'dir. Tespiti kolaydır, ancak saldırgan bir IP'yi saniyeler içinde değiştirebileceği için IoC tabanlı savunma hızla eskir.
*   **TTPs (Taktikler, Teknikler ve Prosedürler):** Saldırganın davranış modelidir. Hangi zafiyeti kullandığı (Teknik), sisteme nasıl sızdığı (Taktik) ve veriyi nasıl şifrelediğidir. Bir saldırganın alışkanlıklarını değiştirmesi çok zor ve maliyetlidir. CTI, IoC'lerden ziyade TTP'lere odaklanmalıdır.

---

## §12.2.2. MITRE ATT&CK Çerçevesi

MITRE ATT&CK, dünya genelinde bilinen siber saldırı gruplarının ve zararlı yazılımların kullandığı tüm "TTP"leri devasa bir periyodik tablo gibi sınıflandıran evrensel bir bilgi tabanıdır.

*   **Taktikler (Sütunlar):** Saldırganın amacı nedir? (Örn: İlk Erişim sağlama, Ayrıcalık Yükseltme, Yanal Hareket yapma, Veri Sızdırma).
*   **Teknikler (Satırlar):** Bu amaca nasıl ulaşır? (Örn: İlk erişimi "Oltalama E-postası" atarak veya "Geçerli bir hesap (Valid Accounts)" çalarak yapar).
*   **Kullanımı:** SOC ekipleri, MITRE matrisine bakarak kurum savunmasındaki boşlukları (Örneğin Yanal Hareket taktiklerini tespit edemiyoruz) görür ve SIEM/EDR kurallarını bu matrise göre iyileştirir.

---

## §12.2.3. Proaktif Tehdit Avcılığı (Threat Hunting)

Tehdit Avcılığı, "Ağımıza sızıldı ama hiçbir güvenlik cihazımız alarm üretmedi" varsayımıyla (Assume Breach mantığı) yola çıkan aktif arama sürecidir.

*   SIEM veya EDR ekranına düşen alarmları bekleyen bir süreç değildir.
*   Analist (Tier 3), Threat Intelligence (CTI) verilerini veya MITRE tekniklerini baz alarak bir "Hipotez" kurar (Örn: "Şirket ağımızda gizlice PowerShell kullanarak Registry kaydı değiştiren zararlılar olabilir").
*   Bu hipotezi doğrulamak için milyonlarca log içinde SQL benzeri sorgularla avlanmaya çıkar.

---

## §12.2.4. SOAR (Güvenlik Orkestrasyonu, Otomasyon ve Yanıt)

SOC ortamında bir analistin her gün yüzlerce birbirine benzeyen alarmı (Örn: Oltalama e-postası şüphesi) manuel olarak analiz etmesi çok yorucudur. SOAR, bu süreçleri makinelere devreden bir otomasyon platformudur.

*   **Nasıl Çalışır?** SOAR sistemi Firewal, EDR, SIEM, VirusTotal ve E-posta sunucusu gibi onlarca farklı araçla API (RESTful) üzerinden konuşabilir.
*   **Playbook (Otomasyon Senaryoları):** Bir olay anında sistemin atacağı adımları belirleyen kodlanmış iş akışlarıdır.
*   **Örnek Bir SOAR Playbook'u:**
    1. Çalışan, "Şüpheli E-posta" butonuna tıklar.
    2. SOAR e-postayı otomatik olarak alır, içindeki linki kopyalar.
    3. Linki VirusTotal'e gönderip analiz ettirir.
    4. Zararlı olduğu anlaşılırsa, Firewall'a API ile bağlanıp linkin IP adresini otomatik olarak bloklar.
    5. E-posta sunucusuna bağlanıp bu e-postayı alan diğer 50 çalışanın kutusundan mesajı otomatik olarak siler.
    6. Tüm bu işlemler analist daha kahvesini bitirmeden saniyeler içinde tamamlanır. Analist sadece raporu inceler.
