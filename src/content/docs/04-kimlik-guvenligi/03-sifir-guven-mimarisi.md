---
title: "Sıfır Güven (Zero Trust) Mimarisi ve Cihaz İzolasyonu"
sidebar:
  order: 3
---

# Sıfır Güven (Zero Trust) Mimarisi ve Cihaz İzolasyonu

Geleneksel "kale-hendek" (Castle-and-Moat) güvenlik modeli, ağın içine (LAN) güvenli, ağı dışına (İnternet) tehlikeli olarak bakar. Ancak bulut bilişim, uzaktan çalışma ve gelişmiş siber tehditler bu modeli çökertmiştir. Sıfır Güven (Zero Trust), ağın içindeki veya dışındaki hiçbir varlığın varsayılan olarak güvenilir olmadığını savunan modern bir güvenlik stratejisidir.

## §4.3.1. "Asla Güvenme, Daima Doğrula" Prensibi ve Mikro-Segmentasyon

Sıfır Güven modeli, "güvenilir ağ" kavramını ortadan kaldırır.

*   **Sürekli Doğrulama (Verify Explicitly):** Her erişim isteği; kimlik, konum, cihaz sağlığı, zaman ve erişilmek istenen veri noktasına dayanılarak anlık ve sürekli olarak doğrulanır.
*   **En Az Ayrıcalık (Least Privilege):** Kullanıcılara (veya uygulamalara) yalnızca işlerini yapmaları için gereken en asgari düzeyde, sadece ihtiyaç duydukları anda (Just-in-Time) yetki verilir.
*   **Mikro-Segmentasyon (Micro-Segmentation):** Ağı büyük VLAN'lar halinde bölmek yerine, her bir sunucunun, uygulamanın veya iş yükünün kendi küçük güvenlik bölgesi (segmenti) içine hapsedilmesidir. Amaç, bir ihlal (Breach) durumunda saldırganın ağ içinde yanal hareket etmesini (Lateral Movement) ve diğer sunuculara sıçramasını (Blast Radius) engellemektir.

---

## §4.3.2. Sürekli Kimlik Doğrulama ve Cihaz Sağlık/Duruş Kontrolleri (Device Posture)

Kullanıcının doğru parolayı (veya MFA'yı) girmesi, Sıfır Güven mimarisinde erişim için yeterli değildir; bağlam (Context) da değerlendirilir.

*   **Cihaz Duruş Kontrolü (Device Posture):** Erişim isteyen cihazın anlık durumu incelenir. Cihaz kuruma mı ait? Antivirüs yazılımı çalışıyor mu ve güncel mi? İşletim sisteminde kritik güvenlik yamaları eksik mi? Disk şifrelemesi (BitLocker) aktif mi?
*   **Sürekli İzleme (Continuous Authentication):** Eğer bir cihaz yetki aldıktan 10 dakika sonra antivirüsünü kapatırsa veya olağandışı bir veri indirme davranışı (Anomali) sergilerse, bağlantısı anında kesilir ve yeniden doğrulama talep edilir.

---

## §4.3.3. Geleneksel VPN Yerine ZTNA (Zero Trust Network Access) Yaklaşımı

Uzaktan çalışma çağında, kurum ağına erişim için kullanılan teknolojiler ciddi bir evrim geçirmiştir.

*   **Geleneksel VPN'in Zayıflığı:** Bir kullanıcı geleneksel IPsec veya SSL VPN ile kuruma bağlandığında, genellikle tüm iç ağa "geniş erişim" (Broad Network Access) hakkı kazanır. Kullanıcının bilgisayarına sızmış bir fidye yazılımı (Ransomware), bu VPN tünelinden geçerek tüm şirket sunucularını şifreleyebilir.
*   **ZTNA (Zero Trust Network Access):** ZTNA mimarisi, kullanıcıyı ağın kendisine değil, **sadece yetkisi olan belirli uygulamaya** bağlar. Kullanıcı uygulamanın arka plandaki IP adresini, sunucuyu veya diğer ağ bileşenlerini göremez (Dark Cloud yaklaşımı). Bu durum, saldırganın yanal hareketini (Lateral Movement) tamamen ortadan kaldırır. ZTNA, aynı zamanda SASE (Secure Access Service Edge) mimarisinin de en kritik kimlik bileşenidir.