---
title: "OT Dünyasında Sıkılaştırma (OT Hardening) ve Zafiyet Yönetimi"
sidebar:
  order: 2
---

# OT Dünyasında Sıkılaştırma (OT Hardening) ve Zafiyet Yönetimi

Operasyonel teknoloji (OT) ortamlarında güvenlik sıkılaştırması, IT sistemlerinden temel bir anlayış farkıyla ele alınmalıdır: OT'de **Kullanılabilirlik (Availability)** her şeyin üzerindedir. Bir üretim hattının durması veya bir enerji santralinin devre dışı kalması doğrudan finansal ve fiziksel sonuçlar doğurur. Bu nedenle OT sıkılaştırma yaklaşımı, operasyonları kesintiye uğratmadan risk azaltmayı merkeze alır.

## §12.2.1. PLC, RTU ve HMI Cihazlarında Yama Yönetimi Zorlukları

### OT Yama Yönetiminin Temel Zorlukları

*   **Sürekli Çalışma (Uptime) Zorunluluğu:** Bir PLC'yi yamalamak genellikle üretim duruşu gerektirir. Çoğu tesis 7/24 çalıştığından planlı bakım pencereleri oldukça kısıtlıdır.
*   **Eski (Legacy) Sistemler:** Birçok OT cihazı 15-20 yıl veya daha uzun süre kullanımda kalır. Bu sistemler için üretici desteği çoktan sona ermiş olabilir; patch mevcut değildir.
*   **Doğrulama Riski:** OT yazılım güncellemeleri, üretim sürecini olumsuz etkileyip etkilemeyeceği bilinmediğinden ayrıntılı test gerektirir. Test ortamı oluşturmak pahalı ve karmaşıktır.
*   **Vendor Bağımlılığı:** Birçok endüstriyel kontrol sistemi yalnızca üretici onaylı bakım ve güncelleme süreçlerine izin verir.

### Yama Yönetimi Stratejileri

*   **Risk Tabanlı Önceliklendirme:** Her cihaz için CVSS skoru, ağ erişilebilirliği ve operasyonel öneme göre risk skoru hesaplanır. Yüksek riskli, ağa açık cihazlar öncelikli yamama hedefidir.
*   **Planlı Bakım Pencereleri:** Yılda bir veya iki kez gerçekleşen bakım duruşları yamama için en uygun zamandır.
*   **Ön Üretim Testi:** Kritik güncellemeler önce lab ortamında veya yedek sistemde test edilir.
*   **Çalışma Zamanı Güncellemesi (Hot Patching):** Bazı modern SCADA sistemleri cihazı durdurmadan belirli bileşenleri güncellemeye izin verir.

---

## §12.2.2. Sanal Yama (Virtual Patching) ile Legacy Sistemlerin Korunması

### Sanal Yama Nedir?

Sanal yama, gerçek yazılım güncellemesi yapılamayan sistemler için ağ katmanında uygulanan bir koruma tekniğidir. Zafiyetin kendisi kapatılmaz; zafiyeti istismar edecek trafiği engelleyen imzalar devreye alınır.

**Uygulama Yöntemleri:**

*   **IDS/IPS Kuralları:** Bilinen OT protokol istismarları (Modbus coil write, DNP3 anormal fonksiyon kodu) için IPS imzaları oluşturulur ve şüpheli trafik bloke edilir.
*   **Endüstriyel Güvenlik Duvarları:** Claroty, Nozomi veya Dragos gibi OT-spesifik güvenlik platformları, izin verilen komut setlerinin dışına çıkan trafiği filtreler (Whitelist tabanlı protokol denetimi).
*   **Mikro Segmentasyon:** Zafiyet barındıran cihaz, yalnızca belirli kaynak IP'lerden ve protokollerden erişilebilir hale getirilerek saldırı yüzeyi daralır.

> [!NOTE]
> Sanal yama kalıcı bir çözüm değildir. Gerçek yama için bir yol haritası hazırlanmalı ve sanal yama geçiş süreci boyunca koruyucu katman olarak kullanılmalıdır.

---

## §12.2.3. Endüstriyel Servis Sıkılaştırma Pratikleri

### Varsayılan Kimlik Bilgilerinin Değiştirilmesi

Endüstriyel cihazların büyük çoğunluğu fabrika varsayılan kullanıcı adı/parola ile gönderilir (örn: `admin/admin`, `root/root`). Shodan ve Censys tarama araçları ile internete açık OT cihazları kolayca bulunabilir.

*   Tüm varsayılan kimlik bilgileri kurulumdan önce güçlü ve benzersiz parolalarla değiştirilmelidir.
*   Parola kasası (PAM çözümü) kullanılarak endüstriyel sistem kimlik bilgileri merkezi yönetilmelidir.

### Servis ve Port Sıkılaştırma
*   Kullanılmayan servis ve protokoller (Telnet, HTTP yönetim arayüzü, FTP) kapatılmalıdır.
*   HMI'lara yönetim erişimi yalnızca belirli jump server'lar üzerinden ve MFA ile sağlanmalıdır.
*   USB portları fiziksel veya yazılımsal olarak kilitlenmeli; yetkisiz medya bağlantısı engellenmelidir.

### Uygulama Beyaz Listesi (Allowlisting)
*   HMI ve SCADA iş istasyonlarında yalnızca onaylı uygulamaların çalışmasına izin veren uygulama kontrol politikaları (örn: Windows Defender Application Control) uygulanmalıdır.
*   Bu sayede dosyasız zararlı yazılımlar ve bilinmeyen executable'ların çalışması engellenir.

### Fiziksel Güvenlik
*   PLC ve RTU kabinleri kilitli olmalı; yetkisiz fiziksel erişim alarm üretmelidir.
*   Saha ekipmanına laptop/tablet bağlantısı prosedüre bağlanmalı ve log altına alınmalıdır.
