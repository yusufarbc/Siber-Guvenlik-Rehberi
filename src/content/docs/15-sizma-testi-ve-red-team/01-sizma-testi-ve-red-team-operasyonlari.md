---
title: "Sızma Testi (Pentest) ve Red Team Operasyonları"
sidebar:
  order: 1
---

# Sızma Testi (Pentest) ve Red Team Operasyonları

Kurumlar güvenlik ürünleri satın alır ve kurallar yazar. Ancak bu savunmanın gerçekten işe yarayıp yaramadığını öğrenmenin tek yolu, gerçek bir siber saldırgan gibi düşünerek sistemlere saldırmaktır (Offensive Security).

## §15.1.1. Sızma Testi (Penetration Testing) Kavramı

Sızma testi (Pentest), bir kurumun bilişim altyapısındaki, uygulamalarındaki veya ağındaki zafiyetlerin tespit edilmesi, sömürülmesi (Exploit) ve yetki yükseltilerek riskin boyutunun raporlanması sürecidir. Amacı, zafiyetleri kötü niyetli kişilerden önce bulup kapatmaktır.

### Pentest Yaklaşımları
*   **Siyah Kutu (Black Box):** Testi yapacak ekibe (Pentester) kurum hakkında hiçbir bilgi (IP adresi, kaynak kod, mimari vs.) verilmez. Sadece şirket ismi verilir. Hacker perspektifine en yakın testtir. Zaman alır.
*   **Beyaz Kutu (White Box):** Ekibe sistemin tüm bilgileri, kaynak kodları, mimari diyagramları ve en yüksek yetkili hesap bilgileri baştan verilir. Amaç, kodun derinliklerindeki en gizli açıkları bile bulmaktır.
*   **Gri Kutu (Grey Box):** İkisinin karışımıdır. Ekibe standart bir "Kullanıcı" hesabı ve yetkisi verilir. Amaç, sisteme giriş yapabilen sıradan bir çalışanın (veya hesabı çalınmış bir kurbanın) sistemi ne kadar içeriden hackleyebileceğini görmektir (Yetki yükseltme testi).

---

## §15.1.2. Pentest Süreci (Cyber Kill Chain / Sızma Adımları)

Standart bir sızma testi belirli bir metodolojiye (Örn: PTES - Penetration Testing Execution Standard) göre yürütülür:
1.  **Bilgi Toplama (Reconnaissance / OSINT):** Kurumun domainleri, IP blokları, çalışanlarının e-posta adresleri ve hatta çöpe attıkları belgeler pasif olarak toplanır.
2.  **Tarama ve Zafiyet Analizi (Scanning):** Ağdaki açık portlar, çalışan servislerin versiyonları tespit edilir (Nmap) ve bilinen zafiyetler (CVE) taranır (Nessus, OpenVAS).
3.  **Sömürme (Exploitation):** Bulunan zafiyet kullanılarak sisteme yetkisiz giriş yapılır (Örn: Metasploit kullanarak sunucuya bir zararlı payload yüklemek).
4.  **Yetki Yükseltme ve Yanal Hareket (Post-Exploitation):** Standart kullanıcı olarak sisteme girildikten sonra, Administrator/Root hakları elde edilmeye çalışılır ve ağdaki diğer sunuculara sıçranır (Pivoting).
5.  **Raporlama:** Yönetime bulguların ve "Çözüm Önerilerinin (Remediation)" sunulması.

---

## §15.1.3. Red Team (Kırmızı Takım) Operasyonları

Red Team operasyonları genellikle Pentest ile karıştırılır, ancak amaçları ve kapsamları tamamen farklıdır.

*   **Pentest'in Amacı:** Belirlenmiş bir kapsamda (Örneğin "sadece şu 5 web sitesi"), o sistemdeki "Mümkün olan tüm zafiyetleri" bulmaktır. Genellikle BT ekibinin haberi vardır.
*   **Red Team'in Amacı:** Sistemin zafiyetlerini değil, kurumun **"Savunma ve Tespit Etme" (SOC/Blue Team) yeteneğini test etmektir.**
    *   Kurumun siber güvenlik ekibinin (Blue Team) saldırıdan kesinlikle haberi olmaz.
    *   Saldırı aylarca sürebilir (Tıpkı gerçek bir APT grubu gibi).
    *   Amaç tüm açıkları bulmak değil, **"En sessiz yoldan, yakalanmadan tek bir hedefe (Örn: Şirketin ana veritabanını indirmek) ulaşmaktır"**.
    *   Sosyal mühendislik (Oltalama), fiziksel binalara gizlice girme (Kilit açma, sahte personel kartı) gibi tüm yöntemler serbesttir.

---

## §15.1.4. Purple Team (Mor Takım) Yaklaşımı

Red Team (Saldıranlar) ve Blue Team (Savunanlar) arasındaki iletişimsizlik kurum güvenliğini zayıflatır.
*   Purple Team ayrı bir takım değil, bir "işbirliği" konseptidir.
*   Kırmızı Takım bir saldırı simüle ettiğinde, Mavi Takım ile omuz omuza oturup "Şu an şu betiği çalıştırdım, SIEM'de alarm düştü mü? EDR bunu nasıl gördü? Görmediyse kuralı nasıl iyileştiririz?" şeklinde anlık geri bildirimlerle savunmayı birlikte geliştirdikleri modern bir tatbikat yöntemidir.
