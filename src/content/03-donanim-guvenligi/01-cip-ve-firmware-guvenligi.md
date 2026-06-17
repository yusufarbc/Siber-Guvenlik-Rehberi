---
title: "Çip (TPM), Anakart ve Firmware (Secure Boot) Güvenliği"
sidebar:
  order: 1
---

# Çip (TPM), Anakart ve Firmware Güvenliği

Donanım güvenliği, sistemin temelini oluşturur. İşletim sistemi veya yazılım katmanlarındaki güvenlik önlemleri ne kadar gelişmiş olursa olsun, altındaki donanım tehlikeye girerse tüm sistemin güvenilirliği çöker.

## §3.1.1. Donanımsal Güven Kökü (Hardware Root of Trust - RoT)

Sistemin güvenilirliğini başlatan, donanım seviyesine gömülü, değiştirilemez ve taklit edilemez başlangıç noktasıdır.
*   Bir bilgisayar veya cihaz açıldığında çalışan ilk kod parçacığıdır.
*   Bu kod parçacığının şifreli imzası doğrulanarak sistemin diğer bileşenlerine (işletim sistemi, bootloader) güven zinciri aktarılır.
*   Fiziksel müdahalelere (Tamper-resistant) karşı özel çiplerle korunur.

---

## §3.1.2. TPM 2.0 (Trusted Platform Module) Mimarisi

TPM, anakart üzerinde yer alan ve kriptografik işlemleri donanım seviyesinde gerçekleştiren bağımsız bir mikrodenetleyicidir.

*   **Kriptografik Anahtar Saklama:** TPM, şifreleme anahtarlarını, parolaları ve dijital sertifikaları kendi içinde donanımsal olarak saklar. İşletim sistemi hacklense bile saldırganlar TPM içindeki anahtarları doğrudan çalamazlar.
*   **Platform Bütünlük Ölçümü:** Sistem açılırken donanım ve yazılım bileşenlerinin (BIOS, Bootloader) özetleri (hash) alınarak TPM içine kaydedilir (PCR register'ları). Eğer bir değişiklik fark edilirse sistem açılışı durdurulur.
*   **Windows 11 ve BitLocker:** Modern işletim sistemleri, disk şifreleme (BitLocker) anahtarlarını çözmek için TPM yongasına ihtiyaç duyar.

---

## §3.1.3. UEFI Secure Boot (Güvenli Önyükleme) ve Firmware (BIOS) Güncellemeleri

Geleneksel BIOS'un yerini alan UEFI, modern sistemlerin başlangıç aşamasını yönetir.

### Secure Boot (Güvenli Önyükleme)
*   Sistem açılırken çalıştırılan her yazılımın (Bootloader, kernel sürücüleri vb.) güvenilir bir otorite (örneğin Microsoft veya donanım üreticisi) tarafından imzalanmış olmasını şart koşan bir mekanizmadır.
*   **Amacı:** İşletim sisteminden önce devreye girip sistemin kontrolünü ele geçiren "Bootkit" ve "Rootkit" tarzı zararlı yazılımların çalışmasını engellemektir.

### Firmware (BIOS) Güncellemeleri
*   Firmware (Bellenim), donanımın nasıl çalışacağını belirleyen düşük seviyeli yazılımdır.
*   Saldırganlar, kalıcı bir arka kapı (Backdoor) bırakmak için anakartın firmware kodunu değiştirmeye çalışabilir (Örneğin, LoJax zararlısı).
*   **Önlem:** Üretici tarafından kriptografik olarak imzalanmamış firmware güncellemelerini reddeden "yazma korumalı" çipler ve güvenli güncelleme mekanizmaları kullanılmalıdır.
