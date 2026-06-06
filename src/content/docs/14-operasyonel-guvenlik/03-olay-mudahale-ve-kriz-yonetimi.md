---
title: "Olay Müdahale (Incident Handling), Playbook Yönetimi ve Delil Zinciri"
sidebar:
  order: 3
---

# Olay Müdahale (Incident Handling), Playbook Yönetimi ve Delil Zinciri

Siber güvenlik olayları kaçınılmazdır. Önemli olan bir saldırının gerçekleşmesi değil, saldırı gerçekleştiğinde kurumun bu olayı ne kadar hızlı tespit ettiği, nasıl sınırlandırdığı, izlerini nasıl temizlediği ve yasal/operasyonel kriz süreçlerini nasıl yönettiğidir.

---

## §14.3.1. 6 Adımlı Olay Müdahale Yaşam Döngüsü

SANS ve NIST standartlarına göre kabul görmüş, siber olaylara müdahale ederken takip edilmesi gereken metodolojik yaşam döngüsüdür:

1.  **Hazırlık (Preparation):** Olay gerçekleşmeden önceki aşamadır. Politika ve prosedürlerin yazılması, müdahale ekibinin (CSIRT/USOM) kurulması, adli bilişim araçlarının hazır bulundurulması ve gerekli log altyapısının kurulması bu aşamada yapılır.
2.  **Tespit ve Analiz (Identification):** Güvenlik alarmlarının, anomalilerin veya kullanıcı bildirimlerinin incelenerek olayın gerçekten bir siber güvenlik ihlali olup olmadığının belirlenmesidir. Saldırının kapsamı, etkisi ve hangi sistemleri etkilediği bu aşamada ortaya çıkarılır.
3.  **Sınırlandırma (Containment):** Saldırganın ağda daha fazla yayılmasını (Yanal Hareket) veya verileri sızdırmasını engellemek için yapılan acil müdahalelerdir. 
    *   *Kısa vadeli:* Etkilenen sunucunun ağ kablosunu çekmek/EDR ile ağdan izole etmek, aktif oturumları kapatmak ve parolaları sıfırlamak.
    *   *Uzun vadeli:* Güvenlik duvarına geçici kurallar yazmak veya zafiyetli servisleri kapatmak.
4.  **Yok Etme (Eradication):** Tehdidin sistemlerden tamamen temizlenmesi sürecidir. Zararlı yazılımların silinmesi, saldırganın oluşturduğu arka kapıların (Backdoor, sahte kullanıcı hesapları) kapatılması ve sömürülen zafiyetlerin yamalanması adımlarını içerir. Gerekirse sunucu temiz bir yedekten veya sıfırdan kurulur.
5.  **Kurtarma (Recovery):** Etkilenen sistemlerin güvenli bir şekilde tekrar üretime alınmasıdır. Sistemlerin çalışması yakından izlenir, zafiyetin tekrar sömürülüp sömürülmediği kontrol edilir ve normal iş akışına dönülür.
6.  **Ders Çıkarma (Lessons Learned):** Olayın ardından yapılan toplantıdır. Saldırı nasıl gerçekleşti? Müdahalede nerede hata yapıldı? Gelecekte benzer bir saldırıyı engellemek için hangi ek önlemler alınmalı? soruları yanıtlanır ve olay raporu arşivlenir.

---

## §14.3.2. Mavi Takım, Kırmızı Takım ve Purple Teaming

Kurumsal savunmanın test edilmesi ve geliştirilmesi için farklı taktiksel ekipler ve simülasyonlar kullanılır:

*   **Mavi Takım (Blue Team):** Kurumun iç savunma ekibidir. Güvenlik cihazlarını yönetir, logları izler (SOC), zafiyetleri kapatır ve olay müdahale süreçlerini (CSIRT) yürütür.
*   **Kırmızı Takım (Red Team):** Kurum dışından veya içinden, gerçek bir siber saldırgan gibi hareket ederek kurumun insan, süreç ve teknoloji katmanlarındaki tüm zafiyetleri aşmaya çalışan saldırı ekibidir. Sızma testinden (Pentest) farkı, belirli bir kapsamla sınırlı olmaması ve savunma ekibinin (Blue Team) haberinin olmamasıdır. Amaç, yakalanmadan hedefi (bayrağı) ele geçirmektir.
*   **Purple Teaming (Mor Takım):** Kırmızı ve Mavi takımların düşman gibi değil, iş birliği içinde çalışarak gerçekleştirdikleri simülasyonlardır. Kırmızı takım bir saldırı tekniği uygular (Örn: LSASS hafıza dump'ı alma) ve Mavi takım ile birlikte "Bu saldırı SIEM'de alarm üretti mi? EDR bunu engelledi mi? Engellemediyse kuralları nasıl güncelleriz?" diyerek savunma yeteneklerini anlık olarak test ederler.

---

## §14.3.3. Dijital Adli Bilişim ve Delil Zinciri (Chain of Custody)

Bir siber olay sonrasında, adli mercilere sunulacak veya analize tabi tutulacak delillerin hukuki ve teknik doğruluğunun korunması kritik önem taşır.

*   **Canlı Analiz (Live Forensics):** Cihaz kapatılmadan önce RAM (bellek) üzerindeki verilerin (çalışan işlemler, aktif ağ bağlantıları, şifrelenmemiş parolalar) KAPE, FTK Imager veya DumpIt gibi araçlarla kopyalanmasıdır. Cihaz kapatılırsa RAM üzerindeki uçucu veriler tamamen kaybolur.
*   **Adli İmaj Alma:** Disklerin adli kopyalama cihazları (Write Blocker - Yazma Engelleyici) kullanılarak birebir (bit-stream) kopyasının alınmasıdır. İmaj alma işlemi bittiğinde kopyanın hash değeri (SHA-256) hesaplanır ve saklanır.
*   **Delil Zinciri (Chain of Custody):** Toplanan adli delillerin (RAM dump, disk imajı, log dosyası) kim tarafından, ne zaman, hangi yöntemle teslim alındığını, nerede saklandığını ve analiz sırasında üzerinde ne gibi işlemler yapıldığını gösteren kesintisiz belgelendirme sürecidir. Delil zincirinde tek bir kopukluk veya doğrulanmayan hash değeri, delillerin mahkeme önünde geçersiz sayılmasına neden olur.

---

## §14.3.4. Kriz İletişimi ve İhlal Sonrası (Post-Breach) Yönetim

Büyük veri sızıntıları veya sistem durmaları sadece teknik değil, aynı zamanda ciddi bir kurumsal itibar ve yasal krizdir.

*   **Yasal Bildirim Zorunlulukları:** KVKK kapsamında veri sorumluları, kişisel verilerin kanuni olmayan yollarla başkaları tarafından elde edildiğini öğrendiği andan itibaren **en geç 72 saat içinde** durumu Kurul'a (KVKK) ve etkilenen kişilere bildirmek zorundadır. GDPR kapsamında da benzer 72 saat kuralı mevcuttur.
*   **Kriz İletişim Planı:** PR ve hukuk ekipleriyle koordineli şekilde, kamuoyuna yapılacak açıklamaların şeffaf, doğru ve panik yaratmayacak şekilde koordine edilmesidir. Saldırının ne kadarının kontrol altına alındığı ve etkilenen kişilerin ne yapması gerektiği net bir dille aktarılmalıdır.
*   **Düzeltici Önlemler (Remediation):** İhlal sonrası zafiyet analizlerinin derinleştirilmesi, sızma testlerinin yenilenmesi ve altyapıda köklü güvenlik sıkılaştırma (Hardening) projelerinin başlatılmasıdır.
