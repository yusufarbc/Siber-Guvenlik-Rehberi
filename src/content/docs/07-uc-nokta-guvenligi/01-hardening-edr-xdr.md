---
title: "İşletim Sistemi Sıkılaştırma (OS Hardening) ve Uç Nokta Koruması (EDR/XDR)"
sidebar:
  order: 1
---

# İşletim Sistemi Sıkılaştırma ve Uç Nokta Koruması

Sunucular, masaüstü ve dizüstü bilgisayarlar (Endpoint - Uç Nokta) kurumların ürettiği verilerin işlendiği ve saldırganların ağı ele geçirmek için en çok hedef aldığı ilk noktalardır. Bir cihazın ağdan önce kendi kendini koruyabilmesi gerekir.

## §7.1.1. İşletim Sistemi Sıkılaştırma (OS Hardening)

Bir işletim sistemi kurulduğunda, kullanıcı dostu olması için genellikle pek çok gereksiz servis, port ve özellik açık olarak gelir. Bu "geniş" saldırı yüzeyinin asgari seviyeye indirilmesi işlemine sıkılaştırma (Hardening) denir.

### Windows Hardening Pratikleri
*   **GPO (Grup Politikaları):** Kurumdaki tüm Windows cihazların parola karmaşıklığı, ekran kilidi süresi ve USB kısıtlamaları gibi ayarlarının tek bir merkezden (Active Directory) zorunlu kılınması.
*   **LAPS (Local Administrator Password Solution):** Her bilgisayardaki varsayılan yerel "Administrator" parolasının (ki genellikle tüm şirkette aynıdır) cihaz bazında rastgele üretilmesi ve Active Directory'de güvenle saklanmasıdır. Yatay yayılım (Lateral Movement) saldırılarını büyük ölçüde engeller.
*   **BitLocker:** Cihazın çalınması durumunda verilerin okunmasını engellemek için tüm diskin (FDE) donanımsal olarak (TPM çipi kullanılarak) şifrelenmesi.
*   **Whitelisting (Uygulama Beyaz Listeye Alma):** AppLocker veya WDAC kullanarak, cihazda sadece önceden onaylanmış, dijital imzalı yazılımların çalışmasına izin verilmesi.

### Linux Hardening Pratikleri
*   **Sysctl Optimizasyonları:** Çekirdek (Kernel) parametreleri değiştirilerek IP Yönlendirme (IP Forwarding) ve ICMP Yayın cevapları kapatılır, böylece ağ katmanı saldırıları engellenir.
*   **Zorunlu Erişim Kontrolü:** SELinux veya AppArmor profilleri kullanılarak, bir servisin (örneğin Apache web sunucusunun) sadece kendi ilgili dosyalarına erişebilmesi, hacklense bile sistemdeki diğer dosyalara (örneğin `/etc/shadow`) dokunamaması sağlanır.
*   **SSH Güvenliği:** `root` kullanıcısının doğrudan giriş yapmasının (`PermitRootLogin no`) engellenmesi ve şifre yerine anahtar tabanlı doğrulama (Public Key) kullanılması.

---

## §7.1.2. Yama Yönetimi (Patch Management)

Saldırıların büyük bir çoğunluğu, üretici tarafından yaması (güncellemesi) yayınlanmış ancak kurum tarafından henüz kurulmamış bilinen zafiyetler (CVE) üzerinden gerçekleşir.
Güçlü bir yama yönetimi; zafiyetlerin taranması, yamaların test ortamında (Pilot grup) denenmesi ve otomatize araçlarla hızlı bir şekilde tüm uç noktalara dağıtılması sürecini kapsar.

---

## §7.1.3. Uç Nokta Koruması: EPP'den EDR ve XDR'a Evrim

Geleneksel "Antivirüs" programları artık modern saldırıları durdurmak için yetersizdir.

### EPP (Endpoint Protection Platform)
*   **Tanım:** Geleneksel Antivirüs (AV) çözümlerinin gelişmiş halidir.
*   **Mantığı:** Bilinen zararlı yazılımları, imza veritabanları (Signature-based) üzerinden tespit eder ve sisteme girmeden önce durdurmaya odaklanır (Prevention). Dosyasız (Fileless) ve tamamen yeni (Zero-Day) saldırılara karşı kör kalabilir.

### EDR (Endpoint Detection and Response)
*   **Tanım:** Sadece engellemeye değil, "izleme ve yanıt vermeye" odaklanan sistemlerdir.
*   **Mantığı:** Uç noktadaki tüm davranışları (hangi proses çalıştı, hangi regedit kaydı değişti, nereye bağlantı kuruldu) saniye saniye kaydeder (Tıpkı bir uçağın kara kutusu gibi).
*   **Davranışsal Analiz:** Bir Word belgesi açıldığında arka planda PowerShell çalıştırıp internetten bir dosya indirmeye kalkarsa (İmza olmasa bile anomali olduğu için) EDR bu işlemi durdurur ve SOC ekibine alarm üretir.
*   **Bellek (Memory) Koruması:** RAM üzerinde çalışan dosyasız zararlıları engellemek için bellek enjeksiyonu ve istismar engelleme (Exploit Prevention) özelliklerine sahiptir.

### XDR (Extended Detection and Response)
*   Sadece uç noktalardaki verileri değil; Ağ güvenlik cihazları, E-posta gateway'leri, Kimlik Sistemleri ve Bulut altyapılarından gelen verileri de tek bir platformda birleştiren (Korelasyon) gelişmiş tespit ve yanıt platformudur. Savunmayı "Genişletir".
