# SİBER SAVUNMA MİMARİSİ VE OPERASYONLARI: TEKNİK BAŞUCU REHBERİ

## BÖLÜM 1: Bilgi Güvenliği ve Yönetişim

### 1.1. Bilgi Güvenliği Stratejisi, Temelleri (CIA) ve Maliyet Yönetimi (TCO)
* CIA Üçlüsü (Gizlilik, Bütünlük, Kullanılabilirlik) derinlemesine analizi.
* İş hedefleriyle siber güvenlik stratejisinin hizalanması.
* Güvenlik yatırımlarında Toplam Sahip Olma Maliyeti (TCO), CapEx/OpEx kavramları.
* Üretici Konsolidasyonu (Vendor Consolidation) avantajları ve riskleri.

### 1.2. Yönetişim, Risk, Uyumluluk (GRC) ve İş Sürekliliği Planlaması (BCP/BIA)
* Risk Değerlendirme Çerçeveleri (NIST RMF, ISO 27005) ve Tehdit Modelleme (STRIDE).
* KVKK, GDPR uyumluluğu ve 5651 Sayılı Kanun loglama/zaman damgası yükümlülükleri.
* İş Etki Analizi (BIA) metrikleri: RTO, RPO, MTD/MAO kavramları.
* Felaket Kurtarma (DR) stratejileri: Hot, Warm ve Cold site tasarımları.

### 1.3. Güvenlik Politikaları, Farkındalık Eğitimleri ve Oltalama Simülasyonları
* Kabul Edilebilir Kullanım Politikası (AUP) ve "İnsan Güvenlik Duvarı" konsepti.
* Etkili güvenlik farkındalığı eğitimi tasarlama ve metrik ölçümü.
* Oltalama (Phishing) kampanyaları (Örn: GoPhish, Kaspersky ASAP) planlama ve sosyal mühendislik savunması.

---

## BÖLÜM 2: Fiziksel Güvenlik

### 2.1. Fiziksel Çevre, Tesis ve Veri Merkezi (Data Center) Güvenliği
* Katmanlı fiziksel güvenlik (CPTED), biyometrik geçiş kontrolleri, "Tailgating/Piggybacking" önlemleri.
* Veri merkezi iklimlendirme (HVAC), sıcak/soğuk koridor (Hot/Cold Aisle) mimarisi.
* Kesintisiz güç (UPS/Jeneratör) ve yangın söndürme (FM200, Novec 1230) sistemleri.

### 2.2. Güvenli Cihaz İmhası ve Veri Yok Etme (Degaussing/Shredding)
* Veri sanitizasyon standartları (NIST SP 800-88, DoD 5220.22-M).
* Degaussing (manyetik silme), Kriptografik silme (Crypto-shredding) işlemleri.
* Fiziksel donanım imhası (Shredding) ve güvenli e-atık yönetimi.

### 2.3. Sosyal Mühendislik ile Fiziksel Sızma ve Red Team Operasyonları
* Canlı senaryolarla kurumsal binalara fiziksel sızma (Social Engineering, Tailgating) yöntemleri.
* Badging/RFID kopyalama araçlarına (Proxmark3, Flipper Zero) karşı şifreli geçiş kartı teknolojileri (DESFire EV2/EV3).

---

## BÖLÜM 3: Donanım Güvenliği

### 3.1. Çip (TPM), Anakart ve Firmware (Secure Boot) Güvenliği
* Donanımsal Güven Kökü (Hardware Root of Trust).
* TPM 2.0 (Trusted Platform Module) mimarisi ve kriptografik anahtar saklama.
* UEFI Secure Boot (Güvenli Önyükleme) mekaniği ve Firmware (BIOS) güncellemeleri.

### 3.2. Donanım Tedarik Zinciri Riskleri ve Sahte Bileşenler
* Donanımsal Truva Atları (Hardware Trojans) ve çip seviyesi manipülasyon.
* Tedarik zincirine müdahale (Supply chain interdiction) ve sahte (counterfeit) bileşen tespiti.
* Güvenli donanım satın alma (OEM doğrulama) süreçleri.

### 3.3. Yan Kanal Saldırıları (Side-Channel Attacks) ve Donanımsal Sıkılaştırma
* Güç analizi (Power Analysis) ve elektromanyetik yayılım üzerinden kriptografik anahtar sızıntısı teorisi.
* Bare-metal sistemlerde donanım seviyesi zafiyetlere (Spectre, Meltdown vb.) karşı mikrokod (Microcode) güncellemeleri ve kernel seviyesinde izolasyon stratejileri.

---

## BÖLÜM 4: Kimlik Güvenliği

### 4.1. Kimlik Yönetimi (IAM) ve Formel Erişim Kontrol Modelleri
* AAA (Doğrulama, Yetkilendirme, Hesap Verebilirlik) çerçevesi.
* Active Directory ve LDAP mimarilerinde güvenlik tasarımı.
* Erişim Modelleri: Zorunlu (MAC - Bell-LaPadula/Biba), İsteğe Bağlı (DAC), Rol Tabanlı (RBAC) ve Öznitelik Tabanlı (ABAC) modeller.

### 4.2. Ayrıcalıklı Erişim Yönetimi (PAM) ve Modern Doğrulama (MFA/SSO)
* Ayrıcalıklı hesap yaşam döngüsü, oturum izolasyonu ve parola kasaları.
* MFA mekanizmaları (TOTP, FIDO2, Biyometrik).
* Tekil Oturum Açma (SSO) ve Federasyon protokolleri (SAML 2.0, OAuth 2.0, OpenID Connect).

### 4.3. Sıfır Güven (Zero Trust) Mimarisi ve Cihaz İzolasyonu
* "Asla güvenme, daima doğrula" prensibi ve mikro-segmentasyon.
* Sürekli kimlik doğrulama, cihaz sağlık/duruş kontrolleri (Device Posture).
* Geleneksel VPN yerine ZTNA (Zero Trust Network Access) yaklaşımı.

### 4.4. Merkeziyetsiz Kimlik (DID) ve Parolasız (Passwordless) Gelecek
* FIDO2/WebAuthn protokollerinin derinlemesine mekaniği ve Passkey entegrasyonları.
* Akıllı kartlar ve donanımsal güvenlik anahtarları (Örn: YubiKey) mimarisi.
* Mavi takım için parolasız kimlik doğrulama loglarının analizi ve anomali tespiti.

---

## BÖLÜM 5: Veri Güvenliği

### 5.1. Kriptografi, Şifreleme Algoritmaları ve Kriptografik Özetleme (Hash)
* Simetrik (AES, 3DES) ve Asimetrik (RSA, ECC, Diffie-Hellman) algoritmalar.
* Blok (Block) ve Akış (Stream) şifreleme mantığı.
* Hash fonksiyonları (SHA-256, MD5) ve Çarpışma (Collision) analizi.
* Açık Anahtar Altyapısı (PKI) ve Dijital Sertifikalar.

### 5.2. Veri Yaşam Döngüsü, Sınıflandırma ve Sızıntı Önleme (DLP)
* Durağan (At Rest), Hareket Halindeki (In Transit) ve Kullanımdaki (In Use) Veri.
* Veri sınıflandırma etiketleri (Gizli, Kuruma Özel, Halka Açık).
* Ağ Tabanlı vs Uç Nokta Tabanlı DLP mimarileri ve EDM (Exact Data Match).

### 5.3. Yedekleme Stratejileri (3-2-1 Kuralı) ve Değiştirilemez (Immutable) Kurtarma
* Yedekleme mimarisinde 3-2-1 (veya 3-2-1-1-0) kuralı.
* Fidye yazılımlarına (Ransomware) karşı değiştirilemez (WORM/Immutable) ve Air-Gapped yedekleme depoları.
* Yedeklerin bütünlük doğrulaması ve kurtarma testleri.

### 5.4. Veri Maskeleme, Anonimleştirme ve Kuantum Sonrası Kriptografi (PQC)
* KVKK ve GDPR süreçlerinde dinamik/statik veri maskeleme (Data Masking) ile veri anonimleştirme pratikleri.
* Klasik asimetrik algoritmaların (RSA, ECC) kuantum bilgisayarlara karşı kırılganlığı ve NIST Post-Quantum Cryptography (PQC) standartlarına (Kyber, Dilithium) geçiş mimarisi.

---

## BÖLÜM 6: Ağ Güvenliği

### 6.1. Ağ İletişim Temelleri (OSI/TCP-IP), DMZ Tasarımı ve Ağ Segmentasyonu
* OSI Referans Modeli vs TCP/IP Protokol Yığını.
* TCP 3'lü El Sıkışma (3-way handshake) ve oturum yönetimi.
* Yönlendirme protokolleri (BGP, OSPF) ve VLAN/Subnet mimarisi.
* DMZ (Demilitarized Zone) mimarisi: Web/Mail sunucularının izolasyonu ve iç/dış ağ trafik akışı.

### 6.2. Yeni Nesil Güvenlik Duvarları (Firewall/NGFW), IDS/IPS ve Ağ Görünürlüğü (DPI)
* Durum Bilgili (Stateful) vs Durumsuz (Stateless) paket filtreleme.
* NGFW özellikleri (App-ID, User-ID) ve kural optimizasyonu (Palo Alto, Fortinet pratikleri).
* İmza tabanlı vs Anomali tabanlı IDS/IPS sistemleri.
* Derin Paket İncelemesi (DPI) ve SSL İleri Proxy (SSL Forward Proxy/Decryption) ile şifreli trafik analizi.

### 6.3. Gelişmiş Ağ Saldırı Vektörleri (DDoS, MitM, ARP Spoofing) ve Savunma
* Parçalanma (Teardrop, Fragment Overlap) ve Kaynak Tüketimi (SYN Flood, Smurf) saldırıları.
* TCP SYN Flood saldırılarına karşı SYN Cookie mekanizması.
* Oturum Çalma (Session Hijacking) ve Ortadaki Adam (MitM) saldırıları.
* Switch seviyesi güvenlik: ARP Zehirlenmesi, DHCP Spoofing, DAI (Dynamic ARP Inspection) ve Port Security.

### 6.4. Kablosuz Ağ Teknolojileri ve Güvenli Uzaktan Erişim (VPN/ZTNA)
* Kurumsal Wi-Fi mimarileri: WPA3 Enterprise, 802.1X, RADIUS ve Rogue AP tespiti.
* IPsec VPN mimarisi (IKE, ESP, AH protokolleri) ve SSL VPN.
* Mesh ağ yapıları (Örn: Tailscale/WireGuard) ve ZTNA konseptine geçiş.

---

## BÖLÜM 7: Uç Nokta Güvenliği

### 7.1. İşletim Sistemi Sıkılaştırma (OS Hardening) ve Uç Nokta Koruması (EDR/XDR)
* Windows (GPO, LAPS, BitLocker) ve Linux (Sysctl, SeLinux/AppArmor) sıkılaştırma.
* Yama yönetimi ve uygulama beyaz listeye alma (Whitelisting).
* EPP (Antivirüs) sistemlerinden EDR ve XDR (Genişletilmiş Tespit ve Yanıt) mimarisine geçiş.
* Davranışsal analiz ve bellek (Memory) koruma mekanizmaları.

### 7.2. Zararlı Yazılım (Malware) Analizi og Uç Nokta Adli Bilişimi (Forensics/KAPE)
* Statik ve Dinamik malware analizi.
* Sandbox atlatma (evasion) teknikleri og polimorfik zararlılar.
* İzole Laboratuvar (Homelab) ortamlarında test stratejileri.
* KAPE ve benzeri araçlarla RAM/Disk imajı alma, adli bilişim inceleme süreçleri.

### 7.3. Dosyasız Zararlı Yazılımlar (Fileless Malware) ve Bellek İçi Saldırılar (Living off the Land)
* Disk üzerinde iz bırakmayan, sadece RAM'de çalışan Powershell, WMI ve .NET tabanlı dosyasız (Fileless) saldırı vektörleri.
* LOLBAS (Living Off The Land Binaries and Scripts) konsepti ve Windows/Linux yerleşik araçlarının kötüye kullanımına karşı log korelasyonu.

---

## BÖLÜM 8: Mobil Güvenlik

### 8.1. Kurumsal Mobilite (MDM/MAM/BYOD) ve Mobil İşletim Sistemi Tehditleri
* Mobil Cihaz Yönetimi (MDM) ve Mobil Uygulama Yönetimi (MAM) mimarisi.
* Kendi Cihazını Getir (BYOD) politikaları ve kurumsal veri izolasyonu (Containerization/Work Profile).
* iOS ve Android güvenlik modellerinin (Sandboxing) karşılaştırması.
* Güvensiz ağlara (Public Wi-Fi) karşı mobil cihaz VPN tünellemesi.

### 8.2. Mobil Tehdit Algılama (MTD - Mobile Threat Defense) ve Ağ Tabanlı Tehditler
* MDM/MAM çözümlerinin yetersiz kaldığı durumlarda MTD katmanının mimari konumu ve EDR sistemleriyle entegrasyonu.
* Hücresel ağ (4G/5G) ve sahte baz istasyonu (IMSI Catcher) saldırılarına karşı uç nokta koruma stratejileri.
* Herkese açık Wi-Fi ağlarında Ortadaki Adam (MitM) saldırılarını tespit eden cihaz içi davranışsal analiz yöntemleri.

### 8.3. Mobil Uygulama Güvenliği ve Tersine Mühendislik Korumaları (Obfuscation / Anti-Tampering)
* Mobil uygulamalarda statik ve dinamik analiz süreçleri (OWASP MASVS - Mobile Application Security Verification Standard).
* Kaynak kod şifreleme (Code Obfuscation), Root/Jailbreak tespiti ve ekran yakalama engelleme mekanizmaları.
* SSL/TLS Pinning mimarisi, sertifika kontrolleri ve dinamik analiz araçlarına (Frida, Objection) karşı savunma.

### 8.4. Mobil Adli Bilişim (Mobile Forensics) ve Olay Müdahale
* Kritik veri sızıntısı veya zararlı yazılım enfeksiyonu sonrasında iOS/Android cihazlardan adli imaj ve log toplama.
* Mantıksal (Logical) vs. Fiziksel (Physical) imaj alma teknikleri ve delil bütünlüğü koruma standartları.
* Şifreli mesajlaşma veri tabanlarının, uygulama loglarının ve sistem artıkları (artifacts) analizinin incelenmesi.

---

## BÖLÜM 9: E-Posta Güvenliği

### 9.1. Mesajlaşma Altyapıları ve E-Posta Doğrulama Protokolleri (SPF/DKIM/DMARC)
* Kurumsal mesajlaşma (Exchange, M365, Postfix) mimarilerinde güvenlik.
* E-posta sahteciliğine karşı Sender Policy Framework (SPF) kayıtları.
* DKIM (DomainKeys Identified Mail) kriptografik imzalama.
* DMARC politika zorlaması (Quarantine/Reject) ve itibar yönetimi.

### 9.2. Gelişmiş E-Posta Tehditleri (BEC/Phishing) ve SEG Entegrasyonu
* İş Süreci İhlali (BEC) ve hedef odaklı oltalama (Spear Phishing).
* Güvenli E-Posta Ağ Geçitleri (SEG) konumlandırması.
* Zararlı ek analizi (Sandboxing) ve Tıklama Zamanı (Time-of-Click/URL Rewriting) korumaları.

### 9.3. E-Posta Şifreleme Teknolojileri (S/MIME, PGP) ve Veri Sızıntısı Analizi
* Uçtan uca güvenli e-posta iletişimi için S/MIME ve PGP altyapılarının kurumsal PKI sistemleri ile entegrasyonu.
* SEG ve DLP sistemlerinde e-posta başlıkları (Headers) ve gizli meta veriler üzerinden veri sızıntısı tespiti.

---

## BÖLÜM 10: Uygulama Güvenliği

### 10.1. Güvenli Yazılım Geliştirme (SDLC), Kod Analizi (SAST/DAST) ve DevSecOps
* SDLC süreçlerinde "Sola Kaydırma" (Shift-Left) ve tehdit modelleme.
* Statik (SAST), Dinamik (DAST) ve Etkileşimli (IAST) kod analiz farkları.
* Yazılım Tedarik Zinciri güvenliği, SCA (Software Composition Analysis) ve SBOM (Yazılım Malzeme Listesi).
* CI/CD pipeline'larına güvenlik otomasyonu entegrasyonu.

### 10.2. Web Uygulaması ve API Güvenliği (OWASP Top 10 / WAF)
* Güncel OWASP Top 10 Zafiyetleri (Injection, Broken Auth, SSRF vb.).
* REST ve GraphQL API güvenlik pratikleri (Kimlik doğrulama, Rate Limiting).
* Web Uygulama Güvenlik Duvarı (WAF) konumlandırması ve kural ince ayarları.

### 10.3. Sunucusuz (Serverless) Mimari ve V8 Isolate Güvenliği
* Geleneksel container tabanlı yapılara karşı V8 Isolate (Cloudflare Workers) güvenlik modeli.
* Sunucusuz fonksiyonlarda soğuk başlatma (Cold Start) zafiyetleri ve bellek izolasyonu.
* Dağıtık serverless mimarilerde API Gateway güvenliği ve veri akış denetimi.

---

## BÖLÜM 11: Bulut ve Sanallaştırma Güvenliği

### 11.1. Sanallaştırma (Hipervizör) Mimarileri ve Bulut Bilişim Servis Modelleri
* Tip 1 (Bare-metal) ve Tip 2 Hipervizör güvenliği (VMware, Proxmox, KVM sıkılaştırma).
* Sanal Makine (VM) kaçış saldırıları ve ağ/vSwitch segmentasyonu.
* Bulut Servisleri (IaaS, PaaS, SaaS) ve Paylaşımlı Sorumluluk Modeli.
* Bulut Güvenlik Duruşu Yönetimi (CSPM).

### 11.2. Bulut Yerlisi (Cloud-Native), Konteyner Güvenliği ve Kod Olarak Altyapı (IaC)
* Docker mimarisi ve Linux Kernel İzolasyonu (Cgroups/Namespaces).
* Kubernetes (K8s) ağ politikaları, RBAC og Pod güvenliği.
* Konteyner imaj taraması ve Registry güvenliği.
* Kod Olarak Altyapı (IaC - Terraform, Ansible) süreçlerinde güvenlik yanlış yapılandırmaları.

### 11.3. Hibrit Bulut Yönetimi ve Veri Egemenliği (Digital Sovereignty)
* Kamu bulut altyapılarından bağımsız, kurum içi "Sovereign Stack" (Egemen Altyapı) tasarımı.
* Nextcloud, Ubuntu/Debian tabanlı açık kaynak ekosistemlerle veri gizliliği yönetimi.
* Microsoft 365 veya Google Workspace alternatiflerinin on-premise/self-hosted güvenlik mimarisi.

---

## BÖLÜM 12: Endüstriyel Sistem Güvenliği

### 12.1. OT/ICS Sistemleri, Purdue Modeli ve Güvenli IT/OT Entegrasyonu
* SCADA, PLC sistemleri ve Operasyonel Teknoloji (OT) dünyasında Kullanılabilirlik (Availability) önceliği.
* Purdue Kurumsal Referans Mimarisi (Level 0'dan 5'e ağ segmentasyonu).
* IT ve OT ağlarının izolasyonu (Air-gapping) ve Veri Diyotları (Data Diodes).
* Endüstriyel protokollerin (Modbus, DNP3 vb.) izlenmesi ve güvenli uzaktan erişim.

### 12.2. OT Dünyasında Sıkılaştırma (OT Hardening) ve Zafiyet Yönetimi
* PLC, RTU ve HMI cihazlarında yama yönetimi (Patch Management) zorlukları ve Uptime önceliği.
* Yama yapılamayan eski (Legacy) endüstriyel sistemlerin Sanal Yama (Virtual Patching) ile korunması.
* Üretici varsayılan şifrelerinin değiştirilmesi ve endüstriyel servis sıkılaştırma pratikleri.

### 12.3. Endüstriyel Ağlarda Tehdit İzleme, Görünürlük ve Anomali Tespiti
* OT ağlarında aktif tarama (Active Scanning) riskleri og Pasif İzleme (Passive Monitoring) zorunluluğu.
* Endüstriyel ağ analiz araçları ve OT-spesifik IDS (Nozomi, Claroty, Zeek eklentileri) konumlandırması.
* Endüstriyel protokollerde (Modbus, DNP3, Profinet, IEC-104) anormal komut ve anomali tespiti.

### 12.4. OT Sahasında Olay Müdahale (ICS Incident Response) ve Siber-Fiziksel Güvenlik
* Siber saldırı anında üretimin fiziksel olarak durdurulma (Tripping) kriterleri ve siber-fiziksel süreçler.
* Fabrika ve üretim sahaları için özel OT Olay Müdahale Playbook'larının hazırlanması.
* Endüstriyel adli bilişim (ICS Forensics): Historian, PLC CPU ve SCADA log analizi.

---

## BÖLÜM 13: Yapay Zeka Güvenliği

### 13.1. Yapay Zeka Zafiyetleri (LLM) ve Siber Savunmada Üretken YZ Kullanımı
* Büyük Dil Modelleri (LLM) spesifik zafiyetleri (Prompt Injection, Veri Zehirlenmesi, Model Evasion).
* YZ sistemlerinde veri gizliliği ihlalleri.
* Defansif operasyonlarda yapay zeka: Log korelasyonu, alarm triyajı ve otomatize olay müdahale.
* Ofansif operasyonlarda yapay zeka: Otomatize zafiyet keşfi ve gelişmiş oltalama üretimi.

### 13.2. OWASP Top 10 for LLM Applications ve Sınır Değer Denetimleri
* OWASP LLM listesindeki kritik zafiyetlerin (Indirect Prompt Injection, Excessive Agency, Overreliance) analizi.
* LLM girdi (input) ve çıktıları (output) için kurumsal filtreleme ve doğrulama katmanları.
* Yapay zeka ajanlarının sistem üzerinde kontrolsüz yetki kazanmasını engelleyen mimari bariyerler.

### 13.3. Makine Öğrenmesi Operasyonlarında Güvenlik (SecMLOps / AI DevSecOps)
* Yapay zeka modellerinin tedarik zinciri riskleri ve sahte/zehirli model tespiti.
* Model imzalama, veri kümesi bütünlük doğrulaması ve eğitim hatlarının güvenliği.
* Model hırsızlığı (Model Inversion / Extraction) saldırılarına karşı korumalar.

### 13.4. Yapay Zeka Entegrasyonlarında Veri Egemenliği ve Gölge AI (Shadow AI)
* Kurumsal hassas verilerin public LLM'lerine sızmasını engelleme stratejileri.
* Kurum içi Gölge AI (Shadow AI) tespiti ve engellenmesi için ağ/DLP politikaları.
* On-premise / self-hosted yerel LLM mimarileriyle veri egemenliğini sağlama pratikleri.

---

## BÖLÜM 14: Operasyonel Güvenlik

### 14.1. SOC/NOC Entegrasyonu ve Yeni Nesil Merkezi Log Yönetimi (SIEM/SOAR)
* Ağ İzleme (NOC) ve Güvenlik İzleme (SOC) sinerjisi: ISOC Mimarisi.
* SIEM log toplama mimarisi (Syslog, Windows Event Forwarding) ve ayrıştırma (Parsing).
* Yasal log saklama ve zaman damgası mimarisi (5651 Sayılı Kanun Pratikleri).
* SOAR (Güvenlik Orkestrasyonu, Otomasyonu ve Yanıt) ile operasyonel yükün hafifletilmesi (Playbook'lar).

### 14.2. Tehdit Avcılığı, Siber İstihbarat (CTI) ve Aldatma Teknolojileri (Honeypot)
* Proaktif Tehdit Avcılığı (Threat Hunting) hipotezleri ve MITRE ATT&CK çerçevesi kullanımı.
* Siber Tehdit İstihbaratı (CTI) yaşam döngüsü, IoC (Uyuşmazlık) ve IoA (Saldırı) göstergeleri.
* Ağ Adli Bilişimi (Network Forensics) ile PCAP üzerinden anomali tespiti.
* Aldatma Teknolojileri: Düşük/Yüksek etkileşimli Honeypot'lar, Honeynet tasarımı ve Honeymonkey kavramı.

### 14.3. Olay Müdahale (Incident Handling), Playbook Yönetimi ve Delil Zinciri
* 6 Adımlı Olay Müdahale Yaşam Döngüsü (Hazırlık, Tespit, Sınırlandırma, Yok Etme, Kurtarma, Ders Çıkarma).
* Mavi Takım (Blue Team) operasyonları, Kırmızı Takım (Red Team) tatbikatları ve Purple Teaming.
* Dijital Forensics'te Delil Zinciri (Chain of Custody) standartları.
* Kriz iletişimi og ihlal sonrası (Post-breach) yönetim.