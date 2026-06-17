---
title: "Yan Kanal Saldırıları (Side-Channel Attacks) ve Donanımsal Sıkılaştırma"
sidebar:
  order: 3
---

# Yan Kanal Saldırıları (Side-Channel Attacks) ve Donanımsal Sıkılaştırma

Yan kanal saldırıları, bir kriptografik sistemin matematiksel zayıflığını değil; enerji tüketimi, elektromanyetik yayılım ya da zamanlama gibi fiziksel yan etkilerini analiz ederek gizli bilgileri elde etmeyi hedefler. Bu saldırılar donanım tasarımcılarının ve güvenlik mühendislerinin dikkat etmesi gereken kritik bir tehdit sınıfıdır.

## §3.3.1. Güç Analizi ve Elektromanyetik Yayılım ile Kriptografik Anahtar Sızıntısı

### Güç Analizi Saldırıları (Power Analysis)

Kriptografik işlemler sırasında bir mikrodenetleyicinin veya akıllı kartın harcadığı güç, işlenen veriye bağlı olarak değişir. Saldırganlar bu güç değişimlerini ölçerek anahtar materyalini çıkarabilir.

*   **SPA (Basit Güç Analizi - Simple Power Analysis):** Tek bir güç izini gözlemleyerek kriptografik operasyonların adımlarını (RSA üs alma işlemi gibi) belirlemeye çalışır.
*   **DPA (Diferansiyel Güç Analizi - Differential Power Analysis):** Çok sayıda güç izinin istatistiksel analizi ile gizli anahtar bit'lerini ortaya çıkarır. AES gibi simetrik şifreler için bile etkilidir.

### Elektromanyetik Yayılım Saldırıları (EM Analysis)
*   Entegre devreler çalışırken her işlem için karakteristik EM alanları yayar.
*   Özel anten ve osiloskopletle bu sinyaller uzaktan kaydedilebilir.
*   TEMPEST (Telecommunications Electronics Materials Protected from Emanating Spurious Transmissions): Yayılım saldırılarına karşı koruyucu standartların genel adıdır (NSA/CSS EPL listesi).

### Önlemler
*   Sabit zamanlı (Constant-Time) kriptografik kütüphaneler kullanılmalıdır (zamanlama saldırılarını engeller).
*   Donanımsal maskeleme (Hardware Masking): Kriptografik işlemler rastgele gürültüyle maskelenerek güç izleri anlamsız hale getirilir.
*   Faraday kafesi tasarımı ve metal kaplama ile EM yayılımı azaltılır.

---

## §3.3.2. Donanım Zafiyetleri (Spectre, Meltdown) ve Kernel Seviyesinde Savunma

### Spectre ve Meltdown Zafiyetleri

2018 yılında açıklanan bu CPU mimarisi zafiyetleri, modern işlemcilerin performans optimizasyon tekniklerini (spekülatif yürütme ve önbellek paylaşımı) kötüye kullanır.

*   **Meltdown (CVE-2017-5754):** Kullanıcı süreçlerinin kernel belleğini okumasına izin veren bir zafiyettir. Intel CPU'larını etkiler. Kernel Page-Table Isolation (KPTI) yamasıyla giderilmiştir; ancak bu yama %5-30 performans kaybına yol açar.
*   **Spectre (CVE-2017-5753, CVE-2017-5715):** İşlemcinin spekülatif yürütme özelliğini kullanarak aynı sistem üzerindeki başka süreçlerin belleğini okumaya olanak tanır. AMD ve Intel işlemcilerini etkiler. Tam yaması hâlâ zordur.
*   **Retbleed, Downfall, Inception:** Spectre/Meltdown ailesinin sonraki nesil varyantları olup spekülatif yürütmenin farklı yönlerini hedef alır.

### Mikrokod (Microcode) Güncellemeleri

CPU üreticileri (Intel, AMD) spekülatif yürütme davranışını kısıtlamak için mikrokod güncellemeleri yayımlar.

*   Mikrokod güncellemeleri BIOS/UEFI aracılığıyla veya işletim sistemi başlangıcında uygulanır.
*   Linux çekirdeğinde `/sys/devices/system/cpu/vulnerabilities/` dizininden CPU zafiyet durumu izlenebilir.

### Kernel Seviyesinde İzolasyon Stratejileri
*   **KPTI (Kernel Page-Table Isolation):** Kullanıcı ve kernel sayfa tablolarını ayırır.
*   **Retpoline:** Spectre Variant 2'ye karşı dolaylı dal tahminlerini izole eden bir yazılım tekniğidir.
*   **Sanallaştırma Ortamlarında:** Hipervizörler arası VM izolasyonu için IBRS/STIBP/SSBD gibi mikrokod kontrol bitleri etkinleştirilmelidir.
*   **Güvenlik Kritik Sistemlerde:** Hassas workload'lar için SMT (Hyper-Threading) kapatılabilir; bu kanalların büyük bölümünü ortadan kaldırır.
