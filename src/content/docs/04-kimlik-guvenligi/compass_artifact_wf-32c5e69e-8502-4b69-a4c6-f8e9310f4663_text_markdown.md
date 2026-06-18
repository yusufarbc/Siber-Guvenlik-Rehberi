# BÖLÜM 4: KİMLİK GÜVENLİĞİ — Fortune 500 Ölçeğinde Mimari Derinlikli Teknik Çerçeve

> Bu bölüm, serinin önceki bölümlerinde işlenen **Gizlilik-Bütünlük-Erişilebilirlik (CIA Triad)**, **Toplam Sahip Olma Maliyeti (TCO)** analizi ve **NIST/CIS/ISO çerçeveleri** ile tutarlıdır. Kimlik, modern güvenlik mimarisinin yeni çevre güvenliğidir (the new perimeter); CIA Triad'ın "gizlilik" ve "bütünlük" ayaklarının teknik gerçekleşmesi büyük ölçüde kimlik kontrollerine dayanır.

---

## 4.1. Kimlik Yönetimi (IAM) ve Formel Erişim Kontrol Modelleri

### 4.1.1. AAA Çerçevesi: RADIUS ve TACACS+

Kimlik ve Erişim Yönetimi'nin (Identity and Access Management — IAM) temelinde **Kimlik Doğrulama, Yetkilendirme ve Hesap Verebilirlik (Authentication, Authorization, Accounting — AAA)** üçlüsü yatar. Bu üçlü, "Sen kimsin?", "Ne yapabilirsin?" ve "Ne yaptın?" sorularına yanıt verir.

**RADIUS (Remote Authentication Dial-In User Service — RFC 2865):** UDP üzerinde (1812 kimlik doğrulama, 1813 hesap verebilirlik portları) çalışır. RADIUS, kimlik doğrulama ve yetkilendirmeyi **tek bir istek-yanıt değişiminde birleştirir**. Sadece `User-Password` özniteliğini gizler (obfuscate), kullanıcı adı ve diğer tüm öznitelikler açık metin (cleartext) olarak gider. Öznitelikler **Attribute-Value Pair (AVP)** yapısındadır; örneğin bir AVP kullanıcının ayrıcalık seviyesini (privilege level) taşıyabilir.

**TACACS+ (Terminal Access Controller Access-Control System Plus — RFC 8907):** Cisco tasarımı bir protokoldür ve **TCP 49** üzerinde çalışır. RADIUS'tan farklı olarak her AAA fazını **bağımsız bir değişim olarak** ele alır. En kritik özelliği **komut yetkilendirmesidir (command authorization)**: yönetici her CLI komutunu girdiğinde, cihaz bu komutu TACACS+ sunucusuna gönderir ve sunucu komutu yetkilendirir veya reddeder. RFC 8907 Bölüm 4.5'e göre TACACS+ paket gövdesini MD5 tabanlı bir yöntemle gizler — bu kriptografik anlamda şifreleme değildir ve MD5'in zayıflığını taşır. RFC 9887 ise TACACS+'ı TLS 1.3 üzerinde (TCP 300) tanımlayarak gerçek şifreleme, bütünlük ve karşılıklı kimlik doğrulama sağlar.

| Kriter | RADIUS (RFC 2865) | TACACS+ (RFC 8907) |
|---|---|---|
| Taşıma katmanı | UDP (1812/1813) | TCP (49) |
| AAA ayrımı | Auth+Authz birleşik | Üç faz bağımsız |
| Şifreleme kapsamı | Sadece parola | Tüm gövde (MD5 obfuscation) |
| Komut yetkilendirme | Yok | Var (komut bazında) |
| Tipik kullanım | Son kullanıcı (Wi-Fi, VPN, 802.1X) | Ağ cihazı yönetimi |
| Hata tespiti | Retransmission timer | TCP connection reset |

**Mimari Tercih (Fortune 500):** Ağ cihazı yönetimi (router, switch, firewall) için **TACACS+** (komut bazlı denetim ve hesap verebilirlik için), son kullanıcı/802.1X/VPN için **RADIUS** önerilir. Cisco ISE (Identity Services Engine) her iki protokolü de destekler; açık kaynak ortamlarda FreeRADIUS yaygındır.

```
# FreeRADIUS — clients.conf (NAS entegrasyonu)
client core-switch-01 {
    ipaddr = 10.0.10.2
    secret = 'S3cr3t!Pre$haredKey'
    nas_type = cisco
    require_message_authenticator = yes
}

# Cisco IOS — TACACS+ ile AAA
aaa new-model
tacacs server ISE-PRIMARY
 address ipv4 10.0.20.10
 key 7 <encrypted-key>
aaa authentication login default group tacacs+ local
aaa authorization commands 15 default group tacacs+ local
aaa accounting commands 15 default start-stop group tacacs+
```

[DİYAGRAM ÖNERİSİ: RADIUS (UDP, birleşik akış) vs TACACS+ (TCP, üç ayrı request/response) yan yana akış diyagramı — Access-Request/Access-Accept ve START/CONTINUE/REPLY paket dizileri gösterilmeli.]

> **Kontrol Eşlemesi:** NIST SP 800-53 **IA-2** (Identification and Authentication), **AC-2** (Account Management); CIS Controls v8 **Control 6** (Access Control Management); ISO/IEC 27001:2022 **A.5.15** (Access Control), **A.8.5** (Secure Authentication).

### 4.1.2. Active Directory Güvenlik Mimarisi

Fortune 500 ortamlarının kimlik omurgası neredeyse evrensel olarak **Active Directory (AD)**'dir. AD bileşenleri:
- **AD DS (Domain Services):** LDAP/Kerberos tabanlı dizin hizmeti.
- **AD CS (Certificate Services):** Kurumsal PKI; sertifika şablonları yanlış yapılandırıldığında ESC1–ESC11 ayrıcalık yükseltme yollarını doğurur.
- **AD FS (Federation Services):** SAML/WS-Fed federasyonu; Golden SAML saldırılarının hedefi.

**Tiered Admin Model (Microsoft Enterprise Access Model — EAM):** Eski **ESAE (Enhanced Security Administrative Environment)** modelinin yerini almıştır. Üç katman:
- **Tier 0:** Domain controller, AD CS, AD FS, Azure AD Connect, Domain/Enterprise Admins — kimlik altyapısının tamamını kontrol eden varlıklar. Tier 0 hesapları **yalnızca** Tier 0 sistemlerine giriş yapar.
- **Tier 1:** Sunucular ve iş kritik uygulamalar.
- **Tier 2:** Kullanıcı iş istasyonları ve uç noktalar.

Her yönetici için **dört ayrı hesap** modeli önerilir (ör. `ADMIN-T0-jsmith`); hesap formatı katman ve sahibi açıkça gösterir. Tier 0 hesabının posta kutusu ve internet erişimi olmamalı, donanım MFA (akıllı kart veya FIDO2) gerektirmelidir.

**Kerberos Protokolü ve Saldırıları:**
Kerberos akışı: İstemci → **AS-REQ** → KDC, KDC → **TGT** (KRBTGT anahtarıyla şifreli) → İstemci → **TGS-REQ** → KDC → **TGS** (servis biletini) → Servis.

- **Golden Ticket (MITRE ATT&CK T1558.001):** Saldırgan, DCSync tekniğiyle **KRBTGT hesap hash'ini** çalar ve sahte bir TGT üretir. Mimikatz `kerberos::golden` komutu `/domain`, `/sid`, `/aes256:<KRBTGT-hash>`, `/user`, `/groups`, `/ptt` parametrelerini alır; varsayılan olarak biletin ömrünü 10 yıla ayarlar. KRBTGT parolasının **iki kez** döndürülmesi (double rotation) aktif bir Golden Ticket'ı geçersiz kılmak için zorunludur.
- **Silver Ticket:** Servis hesabı hash'iyle sahte bir TGS üretilir; KDC'yi bypass ederek belirli bir servise hedefli erişim sağlar.
- **Kerberoasting (T1558.003):** SPN'lere (Service Principal Name) ait TGS biletleri istenir ve çevrimdışı kırılır; RC4 şifreli 4769 olayları güçlü göstergedir.

```
# Mimikatz — Golden Ticket (OFANSİF — yalnızca yetkili red team)
kerberos::golden /domain:corp.local /sid:S-1-5-21-... \
  /aes256:<KRBTGT-AES256-hash> /user:Administrator /id:500 /ptt
```

**Savunma Kontrolleri:**
- **Protected Users Security Group:** Üyeler için NTLM, DES/RC4, Kerberos delegation ve cleartext caching devre dışı kalır; TGT ömrü 4 saate iner.
- **Authentication Policies ve Authentication Policy Silos:** Tier 0 hesaplarının yalnızca belirli sistemlerden kimlik doğrulamasını zorunlu kılar.

```powershell
# Tier 0 için Authentication Policy ve Silo
New-ADAuthenticationPolicy -Name "Tier0_Policy" -UserTGTLifetimeMins 240 -ProtectedAccounts $true
New-ADAuthenticationPolicySilo -Name "Tier0_Silo" -UserAuthenticationPolicy "Tier0_Policy" -Enforced $true
Grant-ADAuthenticationPolicySiloAccess -Identity "Tier0_Silo" -Account "ADMIN-T0-jsmith"
```

- **AdminSDHolder ve SDProp:** `AdminSDHolder` nesnesi, korunan grupların (Domain Admins vb.) ACL'lerini her 60 dakikada bir **SDProp** süreci ile zorla geri uygular. `AdminSDHolder` üzerindeki `WriteDACL`/`GenericAll` izinleri "shadow admin" yollarını doğurur.
- **LDAP Signing ve Channel Binding:** **CVE-2017-8563** (Windows Elevation of Privilege), Preempt Security tarafından keşfedilmiş ve 11 Temmuz 2017 Patch Tuesday güncellemesinde yamalanmıştır. Açık, LDAPS'nin kimlik bilgisi yönlendirmesine (credential forwarding) karşı korumasız olmasından kaynaklanır: bir makinede SYSTEM ayrıcalığına sahip saldırgan, gelen herhangi bir NTLM oturumunu kullanarak NTLM kullanıcısı adına LDAP işlemleri gerçekleştirebilir. Microsoft, `LdapEnforceChannelBinding` kayıt defteri girdisini (HKLM\System\CurrentControlSet\Services\NTDS\Parameters) ve LDAP signing zorunluluğunu getirdi; bu, LDAP relay ve MitM saldırılarını engeller.

**Ofansif Keşif — BloodHound/SharpHound:** SharpHound, AD ilişkilerini (grup üyelikleri, oturumlar, ACL'ler) toplar; BloodHound graf veritabanında "Shortest Paths to Domain Admins from Owned" sorgusuyla en kısa saldırı yollarını bulur. Savunma için aynı araç kullanılır: sertleştirme sonrası hedef, "beş adımdan az, aktif sömürü olmadan Domain Admins'e sıfır doğrudan yol"dur.

```cypher
// BloodHound — Domain Admins'e en kısa yol (DEFANSİF analiz)
MATCH p=shortestPath((u:User {owned:true})-[*1..]->(g:Group {name:"DOMAIN ADMINS@CORP.LOCAL"}))
RETURN p
```

[DİYAGRAM ÖNERİSİ: Tier 0/1/2 katmanlı model — her katmanda PAW, hesap tipleri ve katmanlar arası "kimlik bilgisi geçişi yasak" oklarıyla; ayrıca Kerberos AS-REQ/TGT/TGS akışında Golden ve Silver Ticket enjeksiyon noktalarının kırmızı işaretlenmesi.]

> **Kontrol Eşlemesi:** NIST SP 800-53 **AC-5** (Separation of Duties), **AC-6** (Least Privilege), **IA-5** (Authenticator Management); CIS Controls v8 **6.8** (Role-based access), **4.7** (Manage default accounts); ISO 27001:2022 **A.8.2** (Privileged access rights).

### 4.1.3. Formel Erişim Kontrol Modelleri

**MAC (Mandatory Access Control — Zorunlu Erişim Kontrolü):** Sistem geneli politika merkezi olarak dayatılır; kullanıcı izinleri değiştiremez.

- **Bell-LaPadula Modeli (Gizlilik odaklı):** ABD Savunma Bakanlığı için geliştirilmiş bir formel durum-makinesi modelidir. İki kural:
  - **Simple Security Property ("no read up"):** Özne kendi sınıflandırma seviyesinin üzerindeki nesneyi okuyamaz.
  - **\*-property / yıldız özelliği ("no write down"):** Özne kendi seviyesinin altına yazamaz.
  - Tranquility (durağanlık) özellikleri etiketlerin işlem sırasında değişmemesini garanti eder. Askeri sınıflandırma: **TS (Top Secret) / S (Secret) / C (Confidential) / U (Unclassified)**.
- **Biba Modeli (Bütünlük odaklı):** Bell-LaPadula'nın **tersi**dir: **"no read down, no write up"**. Düşük bütünlük seviyesindeki verinin yüksek seviyeyi bozmasını engeller.
- **Clark-Wilson Modeli:** Ticari bütünlük; iyi biçimlendirilmiş işlemler (well-formed transactions) ve görevler ayrılığı ile bütünlüğü korur.
- **Lipner Integrity Matrix:** Bell-LaPadula gizlilik kurallarını Biba bütünlük kurallarıyla ikili etiketler kullanarak birleştirir.

```
# SELinux — MAC politika örneği (Type Enforcement)
# httpd yalnızca httpd_sys_content_t etiketli dosyaları okuyabilir
allow httpd_t httpd_sys_content_t:file { read open getattr };

# AppArmor — profil örneği
/usr/sbin/nginx {
  /var/www/html/** r,
  /etc/nginx/** r,
  deny /etc/shadow rwx,
}
```
SELinux ayrıca MLS (Multi-Level Security) ile standart Bell-LaPadula lattice MAC modelini uygular ve TE'ye ek olarak RBAC destekler.

**DAC (Discretionary Access Control — İsteğe Bağlı Erişim Kontrolü):** Kaynak sahibi izinleri belirler. POSIX ACL ve Windows NTFS izinleri örnektir. NTFS'te izinler **inheritance (kalıtım)** ve **propagation** ile alt nesnelere akar. Zafiyetler: **Confused Deputy** (yetkili bir programın kötüye kullanılması) ve **Trojan Horse** (kullanıcının yetkisini farkında olmadan kötü amaçlı koda devretmesi).

```bash
# POSIX ACL (DAC)
setfacl -m u:analyst:r-- /data/reports/q3.csv
getfacl /data/reports/q3.csv
```

**RBAC (Role-Based Access Control — Rol Tabanlı Erişim Kontrolü):** NIST RBAC modeli dört seviyeye ayrılır: **Flat** (kullanıcı-rol-izin), **Hierarchical** (rol kalıtımı: Admin > Manager > Employee), **Constrained** (görevler ayrılığı — Separation of Duties/SoD), **Symmetric** (izin-rol gözden geçirme). RBAC **politika-nötr**dür: MAC, DAC veya özel politikaları taklit edebilir. **Role mining** teknikleri mevcut izinlerden rolleri çıkarsar.

```
// Azure / Entra ID RBAC — özel rol (SoD destekli)
{
  "Name": "Fatura Okuyucu (SoD)",
  "Actions": ["Microsoft.Billing/invoices/read"],
  "NotActions": ["Microsoft.Billing/invoices/write"],
  "AssignableScopes": ["/subscriptions/<sub-id>"]
}
```

**ABAC (Attribute-Based Access Control — Öznitelik Tabanlı Erişim Kontrolü):** Erişim kararı özne, nesne, eylem ve ortam özniteliklerinin Boolean kombinasyonuna dayanır. RBAC'in "rol patlaması" sorununu çözer (50 iş fonksiyonu × 20 lokasyon × 10 proje = 10.000 rol yerine tek politika). Standart dili **XACML 3.0** (OASIS, Ocak 2013'te onaylandı; v3.0 Plus Errata 01 Temmuz 2017):

- **PEP (Policy Enforcement Point):** Erişim talebini yakalar ve kararı uygular.
- **PDP (Policy Decision Point):** Politikaya göre Permit/Deny/NotApplicable/Indeterminate kararı verir.
- **PAP (Policy Administration Point):** Politikaları yönetir.
- **PIP (Policy Information Point):** Karar için öznitelik değerlerini sağlar.

**Politika Kombinasyon Algoritmaları:** `deny-overrides` (herhangi bir Deny → Deny), `permit-overrides` (herhangi bir Permit → Permit), `first-applicable` (sırayla ilk eşleşen kural). Obligation (zorunlu eylem) ve Advice (isteğe bağlı tavsiye) mekanizmaları kararla birlikte iletilir.

```json
// AWS IAM — ABAC Condition (etiket tabanlı)
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "*",
  "Condition": {
    "StringEquals": {
      "aws:PrincipalTag/department": "${s3:ExistingObjectTag/department}"
    }
  }
}
```

[DİYAGRAM ÖNERİSİ: XACML 3.0 referans mimarisi — kullanıcı isteği → PEP → (Context Handler) → PDP ↔ PIP, PDP ← PAP/PRP; Permit/Deny akış diyagramı.]

> **Kontrol Eşlemesi:** NIST SP 800-53 **AC-3** (Access Enforcement), **AC-4** (Information Flow Enforcement — Bell-LaPadula/Biba), **AC-5** (SoD); CIS Controls v8 **6.8**; ISO 27001:2022 **A.5.15, A.8.3** (Information access restriction).

### Temel Çıkarımlar ve Uygulama Kontrol Listesi — 4.1
- [ ] Ağ cihazları için TACACS+ (komut yetkilendirme + accounting), son kullanıcı için RADIUS konumlandırıldı; mümkünse RadSec/TACACS+ over TLS.
- [ ] AD Tier 0/1/2 modeli uygulandı; her yöneticiye dört hesap; PAW (fiziksel) Tier 0 için zorunlu.
- [ ] Protected Users, Authentication Policy Silos, LDAP signing + channel binding (CVE-2017-8563) etkin.
- [ ] KRBTGT parolası periyodik (6–12 ay) iki kez döndürülüyor; gMSA'ya geçiş başladı.
- [ ] BloodHound ile düzenli saldırı yolu analizi; Domain Admins'e sıfır kısa yol hedefi.
- [ ] Hassas kaynaklarda MAC/ABAC, genel yönetimde RBAC; SoD kuralları enforce edildi.
- [ ] KVKK Madde 12 ve "Yetki Matrisi" (erişim yetki ve kontrol matrisi) oluşturuldu — "İzin Verilmedikçe Her Şey Yasaktır" prensibi.

---

## 4.2. Ayrıcalıklı Erişim Yönetimi (PAM) ve Modern Doğrulama (MFA/SSO)

### 4.2.1. PAM Mimarisi

**Ayrıcalıklı Erişim Yönetimi (Privileged Access Management — PAM)**, kurumun "krallığın anahtarlarını" (domain admin, cloud root, database superuser) korur. Verizon 2025 DBIR'a göre ihlallerde insan unsuru yaklaşık **%60** seviyesindedir (rapor 22.052 olay ve 12.195 doğrulanmış ihlali kapsar); çalınmış kimlik bilgileri ilk erişim vektörlerinin %22'sinde kullanılmıştır. Ele geçirilmiş ayrıcalıklı kimlik bilgileri saldırganın elde edebileceği en değerli varlıktır.

**Ayrıcalıklı Hesap Yaşam Döngüsü:** Discovery (keşif) → Onboarding (kasaya alma) → Rotation (parola döndürme) → Decommission (devre dışı bırakma).

**Temel Prensipler:**
- **Just-in-Time (JIT):** Ayrıcalık yalnızca ihtiyaç anında, belirli bir süre için verilir; sonra otomatik geri alınır.
- **Just-Enough-Access (JEA):** Yalnızca görevin gerektirdiği minimum yetki.
- **Zero Standing Privileges (ZSP):** Kalıcı ayrıcalık yoktur.

**Oturum İzolasyonu ve Kayıt:** Kullanıcı gerçek parolayı asla görmez; oturum güvenli bir proxy katmanı (ör. CyberArk PSM — Privileged Session Manager) üzerinden geçer. Keystroke + video kaydı tutulur; şüpheli oturum canlı sonlandırılabilir.

**Parola Kasaları — Mimari Karşılaştırma:**
- **CyberArk PAS:** Çok bileşenli mimari (PVWA — Password Vault Web Access, CPM — Central Policy Manager, PSM — Privileged Session Manager). Pazar lideri; karmaşık hibrit/multi-cloud + sıkı uyumluluk için ideal; tam kurulum tipik olarak 3–6 ay. (Not: 30 Temmuz 2025'te Palo Alto Networks'ün CyberArk'ı yaklaşık 25 milyar dolarlık öz sermaye değeriyle satın alacağı duyuruldu — hisse başına 45,00 dolar nakit + 2,2005 PANW hissesi, %26 prim; anlaşma PANW'nin 2026 mali yılının ikinci yarısında kapandı. Roadmap'i değerlendirin.)
- **Delinea Secret Server:** Hızlı kurulum (temel kasalama 1–2 hafta), kullanım kolaylığı; orta-büyük ölçek.
- **HashiCorp Vault:** Dinamik gizli (dynamic secrets) ve makine kimlikleri (machine identities) odaklı; TTL tabanlı otomatik geçerlilik. **Tam bir PAM değildir** — oturum kaydı ve onay iş akışı yoktur; genellikle CyberArk/Delinea ile birlikte konuşlandırılır.

**PEDM vs PIM:** **PEDM (Privilege Elevation and Delegation Management)** uç noktada local admin haklarını kaldırıp uygulama bazlı yükseltme yapar; **PIM (Privileged Identity Management)** kimlik sağlayıcı seviyesinde rol etkinleştirmeyi yönetir.

**Microsoft Entra ID PIM:** Atamalar **Eligible (uygun)**, **Active (aktif)**, **Expired (süresi dolmuş)** olarak üçe ayrılır. JIT için üyeler "eligible" atanır ve kullanımdan önce rolü **aktive** etmelidir. Onay iş akışı (approval workflow), MFA zorunluluğu (Conditional Access authentication context + Authentication Strengths), iş gerekçesi ve maksimum aktivasyon süresi (1–24 saat) yapılandırılabilir. **Entra ID Premium P2** lisansı gerekir.

```http
# Entra PIM — rol aktivasyon onayı (Graph API)
PATCH https://graph.microsoft.com/beta/roleManagement/directory/roleAssignmentApprovals/<id>/steps/<step-id>
{ "reviewResult": "Approve", "justification": "Onaylı bakım penceresi - CHG0012345" }
```

**PAM için MITRE ATT&CK Teknikleri:** **T1078.003** (Valid Accounts: Local Accounts), **T1548** (Abuse Elevation Control Mechanism), **T1550** (Use Alternate Authentication Material).

[DİYAGRAM ÖNERİSİ: PAM oturum akışı — Kullanıcı → PAM Proxy/Jump (PSM) → Hedef sistem; kasadan parola enjeksiyonu, video+keystroke kaydı SIEM'e akış; JIT onay döngüsü.]

> **Kontrol Eşlemesi:** NIST SP 800-53 **AC-6(1..5)** (Least Privilege bileşenleri), **AC-2(7)** (Privileged user accounts), **AU-2/AU-12** (Audit); CIS Controls v8 **Control 5 & 6**, **5.4** (Restrict admin privileges); ISO 27001:2022 **A.8.2** (Privileged access rights), **A.8.18** (Use of privileged utility programs).

### 4.2.2. MFA Mekanizmaları

**TOTP (Time-Based One-Time Password — RFC 6238):** HOTP'nin (RFC 4226) zaman tabanlı türevidir. `TOTP = Truncate(HMAC-SHA1(secret, floor(unixtime / 30))) mod 10^6`. Tipik parametreler: HMAC-SHA1, 30 saniye pencere, 6 hane, 160-bit (Base32) gizli anahtar. Saat senkronizasyon kaymasına karşı sunucu ±1 zaman adımı kabul eder. **Replay zafiyeti:** kod 30 saniye geçerlidir; gerçek zamanlı phishing relay (evilginx) ile kod yakalanıp hemen kullanılabilir — savunma için tek kullanımlık (single-use) semantiği ve risk tabanlı kimlik doğrulama gerekir.

```python
import hmac, hashlib, struct, time
def totp(secret: bytes, step=30, digits=6):
    counter = struct.pack(">Q", int(time.time() // step))
    h = hmac.new(secret, counter, hashlib.sha1).digest()
    o = h[-1] & 0x0F
    code = (struct.unpack(">I", h[o:o+4])[0] & 0x7FFFFFFF) % (10 ** digits)
    return str(code).zfill(digits)
```

**FIDO2/WebAuthn — Phishing'e Dayanıklı Standart:** FIDO2 = **WebAuthn** (W3C tarayıcı API'si, Mart 2025 itibarıyla Level 3 candidate recommendation) + **CTAP2** (Client to Authenticator Protocol, FIDO Alliance). Çalışma:
- **Kayıt:** `navigator.credentials.create()` → tarayıcı → `authenticatorMakeCredential()` → açık/gizli anahtar çifti üretilir, gizli anahtar authenticator'da kalır; sunucuya **attestation object** döner.
- **Kimlik doğrulama:** `navigator.credentials.get()` → `authenticatorGetAssertion()` → challenge gizli anahtarla imzalanır.
- **Attestation tipleri:** Basic, Self, CA, ECDAA (kullanımdan kalktı), None. Kurumsal ortamlarda **direct attestation** + AAGUID (Authenticator Attestation GUID) allowlist'i ile yalnızca onaylı donanım kabul edilir.
- **Discoverable credentials (resident keys):** `allowList` olmadan, yalnızca RP ID ile kimlik bulunabilir → **passkey** ve kullanıcı-adsız (usernameless) akışları mümkün kılar.
- **Phishing direnci:** Kimlik bilgisi **origin'e bağlıdır (origin binding)** ve `rpId` doğrulaması yapılır → sahte alan adına kimlik gönderilmez; MitM koruması yerleşiktir.
- **UV/UP bayrakları:** **User Verification (UV)** (PIN/biyometri) ve **User Presence (UP)** (dokunma) bayrakları authenticator data içinde döner.
- **Eklentiler:** Large Blob (kimlik bilgisine veri bağlama), PRF (pseudo-random function), **hybrid transport (caBLE — Cloud-Assisted Bluetooth LE)** ile cross-device kimlik doğrulama (CTAP2.2, 2026 itibarıyla güncel).
- **Platform vs roaming authenticator:** Platform (Touch ID, Face ID, Windows Hello — cihaza gömülü) vs roaming (YubiKey, Titan — taşınabilir).

**Biyometrik MFA:** **Liveness detection (canlılık tespiti)** sunum saldırılarını (presentation/deepfake) engeller. **Template protection:** cancelable biometrics, fuzzy extractors. FIDO2 ile biyometri **cihaz üzerinde işlenir (on-device processing)** — biyometrik şablon asla sunucuya gitmez. New York DFS, dokunma için canlılık tespiti veya doku analizi içeren teknoloji önerir (YubiKey Bio bunu sağlar).

**SMS OTP Zafiyetleri:** **SIM swapping** ve **SS7 protokol açıkları** nedeniyle NIST SP 800-63B güncel revizyonlarında SMS artık AAL2'yi karşılamaz; CISA SMS'i "phishable" olarak listeler. SMS yalnızca düşük etkili tüketici hesapları ve kurtarma kanalı için kabul edilebilir; workforce/privileged erişimde uygun değildir.

**MFA Bypass Teknikleri ve Savunma:**
- **EvilGinx2 / Modlishka:** Reverse-proxy AiTM (adversary-in-the-middle) ile oturum çerezi ve OTP çalma → savunma: FIDO2 (origin binding bunu kırar).
- **OTP Fatigue / MFA Bombing:** Kullanıcıya sürekli push gönderip kazara onay aldırma → savunma: number matching, push'u kapatma, FIDO2.

[DİYAGRAM ÖNERİSİ: FIDO2 kayıt ve kimlik doğrulama "ceremony" akışı — RP ↔ Tarayıcı (WebAuthn) ↔ CTAP2 ↔ Authenticator; origin/rpId doğrulama noktası ve neden phishing'in başarısız olduğu vurgulanmalı.]

### 4.2.3. SSO ve Federasyon Protokolleri

**SAML 2.0 (Security Assertion Markup Language):** XML tabanlı. Assertion üç tip ifade taşır: Authentication, Attribute, Authorization Decision. **SP-initiated** (servis sağlayıcıdan başlar) ve **IdP-initiated** akışlar mevcuttur. Kimlik doğrulama **XML Signature** ile yapılır.
- **XML Signature Wrapping (XSW):** En meşhur SAML zafiyeti; saldırgan imzalı öğenin yapısını değiştirip imzasız bir bölümün kimlik olarak yorumlanmasını sağlar. 2023 GitHub Enterprise SAML bypass ve 2025 ruby-saml "sign in as anyone" parser differential zafiyeti bu sınıftandır. Savunma: katı şema doğrulama, imza kapsamı kontrolü, kanonikalizasyon.

**OAuth 2.0 (RFC 6749):** Yetkilendirme (authorization) protokolüdür, kimlik doğrulama değil.
- **Authorization Code + PKCE (Proof Key for Code Exchange):** Modern varsayılan; tüm public client'lar için zorunlu.
- **Implicit flow:** `response_type=token` token'ı URL fragment'ına koyar → tarayıcı geçmişi/loglara sızar. **OAuth 2.1 Implicit grant'ı tamamen kaldırır.**
- **Token introspection (RFC 7662):** Token'ın geçerliliğini sorgular.
- **Refresh token rotation:** Her yenilemede yeni refresh token.
- **Saldırılar:** SSRF ile token çalma, authorization code injection, redirect_uri wildcard (asla `https://*.app.com` kullanmayın — tam string eşleşmesi şart).

**OpenID Connect (OIDC):** OAuth 2.0 üzerine kimlik katmanı ekler.
- **ID token:** JWT yapısındadır; `alg: RS256` (asimetrik) imza standarttır. **alg confusion saldırısı:** sunucu RS256 beklerken saldırgan `alg: HS256` gönderip sunucunun public key'ini HMAC secret olarak kullanır → savunma: alg allowlist, JWKS endpoint'inden anahtar doğrulama.
- **UserInfo endpoint, Discovery metadata** (`.well-known/openid-configuration`), **nonce** (replay koruması) ve **state** (CSRF koruması) parametreleri zorunludur.
- `iss` (issuer), `aud` (audience), `nonce` claim doğrulaması her zaman yapılmalıdır (Sign in with Apple 2020, IBM Verify/Apache APISIX 2024–2025 issuer-mismatch zafiyetleri).

**Federasyon Mimarileri:** Shibboleth (akademik/SAML), Azure AD B2B (iş ortağı federasyonu) ve B2C (müşteri kimliği).

**SSO için MITRE ATT&CK:** **T1606** (Forge Web Credentials — Golden SAML, sahte SAML token), **T1550.001** (Application Access Token).

> **Kontrol Eşlemesi:** NIST SP 800-53 **IA-2(1)(2)** (MFA), **IA-8** (Identification of non-organizational users), **SC-23** (Session Authenticity); NIST SP 800-63B (AAL seviyeleri); CIS Controls v8 **6.3, 6.4, 6.5** (MFA); ISO 27001:2022 **A.8.5** (Secure authentication).

### Temel Çıkarımlar ve Uygulama Kontrol Listesi — 4.2
- [ ] Tüm ayrıcalıklı hesaplar PAM kasasına alındı; ZSP/JIT hedefi; oturum kaydı SIEM'e akıyor.
- [ ] Entra PIM ile eligible atama + onay iş akışı + aktivasyonda MFA.
- [ ] Yönetici ve yüksek değerli hesaplar için phishing'e dayanıklı FIDO2 birincil MFA; TOTP yalnızca tüketici fallback.
- [ ] SMS OTP birincil kimlik doğrulamadan kaldırıldı (yalnızca kurtarma).
- [ ] AiTM/OTP fatigue savunması: FIDO2 + number matching.
- [ ] OAuth 2.1 / Authorization Code + PKCE; Implicit grant kaldırıldı; redirect_uri tam eşleşme.
- [ ] OIDC'de iss/aud/nonce/state doğrulaması ve alg allowlist (RS256) zorunlu.
- [ ] SAML kütüphaneleri güncel; XSW'ye karşı katı şema + imza kapsamı doğrulaması.

---

## 4.3. Sıfır Güven (Zero Trust) Mimarisi ve Cihaz İzolasyonu

### 4.3.1. Zero Trust Prensipleri (NIST SP 800-207)

**Sıfır Güven (Zero Trust)** mottosu: **"Asla güvenme, daima doğrula" (Never trust, always verify)**. NIST SP 800-207 (Ağustos 2020) geleneksel "kale ve hendek (castle-and-moat)" modelini reddeder; ağ konumu artık güveni ima etmez. Her erişim talebi, açık ve düşman bir ağdan geliyormuş gibi kimlik doğrulanır, yetkilendirilir ve sürekli doğrulanır.

**Mantıksal Bileşenler:**
- **Policy Decision Point (PDP):** "Beyin." İçinde iki bileşen:
  - **Policy Engine (PE):** Trust algoritmasıyla kimlik, cihaz duruşu, tehdit istihbaratı ve davranış sinyallerini değerlendirip nihai izin/ret kararı verir.
  - **Policy Administrator (PA):** Kararı uygular; oturum kimlik bilgisi/token üretir, PEP'e talimat verir.
- **Policy Enforcement Point (PEP):** "Kapı bekçisi." Özne ile kaynak arasında oturumu açar, izler, sonlandırır.
- **Policy Information Points (PIP):** Kararı besleyen veri kaynakları — ICAM, EDR/EPP, SIEM, tehdit istihbaratı, CDM.

Kontrol düzlemi (control plane) ile veri düzlemi (data plane) ayrılır. NIST SP 800-207 yedi ilkesi: tüm veri kaynakları kaynaktır; tüm iletişim güvenli; erişim oturum başına; erişim dinamik politika ile; varlık bütünlüğü izlenir; kimlik doğrulama/yetkilendirme dinamik; mümkün olduğunca çok veri toplanır.

**NIST üç dağıtım modeli:** Enhanced Identity Governance (EIG), Microsegmentation, Network Infrastructure/SDP.

**CISA Zero Trust Maturity Model v2.0 (Nisan 2023):** Beş sütun — **Identity, Devices, Networks, Applications & Workloads, Data** — ve üç enine kapasite — **Visibility & Analytics, Automation & Orchestration, Governance**. Dört olgunluk aşaması: **Traditional → Initial → Advanced → Optimal** (Initial aşaması v2.0'da eklendi). Identity sütunu: parola/temel MFA (Traditional) → phishing'e dayanıklı MFA + merkezi kimlik (Advanced) → UEBA + JIT ile sürekli gerçek zamanlı doğrulama (Optimal).

[DİYAGRAM ÖNERİSİ: NIST SP 800-207 mantıksal mimari — Control Plane (PE+PA) ve Data Plane (PEP); PIP kaynakları (EDR, SIEM, ICAM, Threat Intel) PE'ye sinyal besliyor; özne → PEP → kaynak akışı.]

### 4.3.2. Mikro-Segmentasyon

**Mikro-segmentasyon**, veri merkezi içindeki **doğu-batı (east-west) trafiği** kontrol eder ve **yatay hareketi (lateral movement)** engeller. VLAN tabanlı segmentasyon kabaca kuzey-güney ayrımı yaparken, mikro-segmentasyon iş yükü (workload) seviyesinde granüler politika uygular. PCI DSS ve HIPAA segmentasyon gereksinimlerini VLAN'lardan daha etkili karşılar.

**Software-Defined Perimeter (SDP):** Uygulama altyapısını gizler; yalnızca doğrulanmış özneler için dinamik tünel açılır.

**Araçlar:** VMware NSX (hipervizör seviyesi), Illumio (host tabanlı, ransomware yayılımı/lateral movement içerme odaklı), Guardicore (Akamai). Illumio (east-west) + Netskope ZTNA (north-south) entegrasyonu "tam Zero Trust kapsamı" için örnektir.

```yaml
# Mikro-segmentasyon politikası (kavramsal — etiket tabanlı)
policy:
  name: "PCI-DB-Isolation"
  source: { label: "app-tier", env: "prod" }
  destination: { label: "db-tier", env: "prod", scope: "PCI" }
  service: { port: 1433, proto: TCP }
  action: ALLOW
  default: DENY   # implicit deny - tüm diğer east-west trafik reddedilir
```

### 4.3.3. Sürekli Kimlik Doğrulama ve Cihaz Sağlığı

**Risk-based adaptive authentication:** Kimlik kanıtı gücü, ayrıcalık seviyesi, cihaz duruşu ve davranış sinyalleri gerçek zamanlı bir trust score'a dönüşür; "impossible travel" gibi anomaliler step-up authentication tetikler.

**UEBA (User and Entity Behavior Analytics):** Kimlik davranışını sürekli analiz ederek kimlik bilgisi hırsızlığı/ayrıcalık yükseltme göstergelerini yakalar (ITDR — Identity Threat Detection and Response).

**Cihaz Duruşu (Device Posture):** MDM/MAM entegrasyonu ile uyumluluk durumu, yama seviyesi, antivirüs imza güncelliği, disk şifreleme durumu kontrol edilir. **Microsoft Intune + Conditional Access** ve **VMware Workspace ONE** tipik çözümlerdir. **802.1X** port tabanlı NAC ve **sertifika tabanlı cihaz kimlik doğrulama** ağ katmanında uygulanır.

```
# Conditional Access (kavramsal politika)
IF user.role == "Finance"
  AND device.compliant == true
  AND device.diskEncryption == true
  AND signInRisk <= "low"
THEN GRANT (require FIDO2)
ELSE BLOCK
```

### 4.3.4. ZTNA vs VPN

**ZTNA (Zero Trust Network Access)**, VPN'in **ağ-merkezli (network-centric)** yaklaşımının aksine **uygulama-merkezli (application-centric)** erişim sağlar. VPN bir kez kimlik doğrulayıp geniş ağ erişimi verirken, ZTNA her talebi kimlik, cihaz duruşu, konum ve davranışa göre bireysel doğrular ve yalnızca belirli uygulamaya erişim verir.

- **Client-initiated ZTNA:** Ajan tabanlı (Zscaler Private Access — ZPA, Palo Alto Prisma Access).
- **Service-initiated ZTNA:** Reverse-proxy/agentless (web uygulamaları, contractor/BYOD için).
- **Split tunneling ve DNS güvenliği:** ZTNA'da yalnızca kurumsal trafik tünellenir; DNS sızıntısı kontrol edilmelidir.

**Gartner SSE (Security Service Edge) ve SASE:** SSE = ZTNA + SWG (Secure Web Gateway) + CASB (Cloud Access Security Broker) + FWaaS + DLP. SASE = SSE + SD-WAN. Gartner kategorileri 2021'de ayırdı. ZTNA, SSE'nin çekirdek bileşenidir ve genellikle ilk Zero Trust projesi olarak VPN'i değiştirir.

**Türkiye'de ZTNA Uygulama Senaryoları:** Bankacılık (BDDK uyumu için uzaktan erişimde çok bileşenli kimlik doğrulama ve iz kaydı zorunluluğu), kritik altyapı ve uzaktan çalışan iş gücü. Türkiye'de yerli SASE/loglama çözümleri (ör. Berqnet) 5651 uyumlu Zero Trust mimarileri pazarlamaktadır.

[DİYAGRAM ÖNERİSİ: VPN (kullanıcı → tüm ağ) vs ZTNA (kullanıcı → broker → yalnızca yetkili uygulama) karşılaştırmalı diyagram; ZTNA'da inbound port açılmadığı (reverse connection) vurgulanmalı.]

> **Kontrol Eşlemesi:** NIST SP 800-207 (tümü); NIST SP 800-53 **AC-4** (Information Flow), **SC-7** (Boundary Protection), **CA-9** (Internal System Connections); CIS Controls v8 **Control 12** (Network Infrastructure Management), **13.4** (Traffic filtering between segments); ISO 27001:2022 **A.8.20–A.8.23** (Network security, segregation, web filtering).

### Temel Çıkarımlar ve Uygulama Kontrol Listesi — 4.3
- [ ] NIST SP 800-207 PDP/PA/PEP/PIP mantıksal mimarisine eşleme yapıldı.
- [ ] CISA ZTMM v2.0 ile beş sütunda olgunluk değerlendirmesi yapıldı; öncelikli boşluklar belirlendi.
- [ ] Doğu-batı trafik için mikro-segmentasyon (varsayılan deny); kritik veri segmentleri (PCI/KVKK) izole edildi.
- [ ] Conditional Access + cihaz duruşu (Intune/Workspace ONE); uyumsuz cihaz erişimi engellendi.
- [ ] UEBA/ITDR ile sürekli kimlik anomali tespiti.
- [ ] VPN, uygulama-merkezli ZTNA ile aşamalı değiştiriliyor; SSE/SASE yol haritası tanımlı.

---

## 4.4. Merkeziyetsiz Kimlik (DID) ve Parolasız (Passwordless) Gelecek

### 4.4.1. FIDO2/WebAuthn Derinlemesine Mekanik

**Credential Oluşturma Akışı:** `navigator.credentials.create()` (WebAuthn API) → user agent → CTAP2 → `authenticatorMakeCredential()` operasyonu. Authenticator açık/gizli anahtar çifti üretir; gizli anahtar **asla** cihazdan çıkmaz. Dönüş: **attestation object** (authenticator data + attestation statement + AAGUID). CBOR kodlaması CTAP2 canonical formda yapılır.

**Authentication Akışı:** `navigator.credentials.get()` → CTAP2 → `authenticatorGetAssertion()` → challenge gizli anahtarla imzalanır → **assertion** döner.

**UV/UP Bayrakları:** **User Presence (UP)** = fiziksel dokunma; **User Verification (UV)** = PIN/biyometri ile kimlik kanıtı. CTAP2.1'de `uv` option key kullanımdan kaldırıldı; bunun yerine `pinUvAuthToken` ile `pinUvAuthParam` oluşturulur.

**Eklentiler:** **Large Blob** (kimlik bilgisine ek veri — ör. PIV sertifika bağlantısı; largeBlobKey ile şifre çözülür), **PRF** (WebAuthn üzerinden simetrik anahtar türetme — şifreleme senaryoları), **hybrid transport (caBLE)** (telefonun roaming authenticator olarak QR + BLE proximity ile cross-device kullanımı; gerçek kriptografik yük şifreli bulut tüneli üzerinden gider, BLE'nin kendisi üzerinden değil).

**Platform vs Roaming:** Platform authenticator OS API'leri üzerinden çalışır (CTAP kullanmaz); roaming authenticator CTAP2 binary protokolüyle USB HID/NFC/BLE üzerinden iletişim kurar.

### 4.4.2. Passkey Ekosistemi

**Passkey**, OS seviyesi credential provider ile kullanıcının cihazları arasında senkronize edilen **discoverable credential**'dır:
- **Apple:** iCloud Keychain senkronizasyonu.
- **Google:** Google Password Manager.
- **Microsoft:** Windows Hello / Microsoft account.

**Synced vs Device-bound Tradeoff'u:** Senkronize passkey hesap kurtarmayı çözer ancak NIST tarafından **"tek faktör"** sayılır — kullanıcı yalnızca bulut hesabı kimlik bilgileriyle yeni cihaza geri yükleyebilir. Device-bound (güvenlik anahtarı) passkey ise yüksek güvence gerektiren senaryolar için uygundur. RP açısından synced/device-bound ayrımı yalnızca **AAGUID** üzerinden anlaşılır (Apple, Google, Microsoft kendi AAGUID'lerini yayınlar).

**Kurumsal Passkey:** Yönetici/ayrıcalıklı erişim için **roaming authenticator + enterprise AAGUID allowlist** (FIDO Metadata Service'ten), minimum iki kayıtlı anahtar, in-band IT doğrulamasıyla kurtarma (e-posta ile değil), MDM politikaları. **Conditional UI (autofill)** ile passkey keşfi giriş formunda sunulur.

### 4.4.3. Akıllı Kartlar ve Donanımsal Güvenlik Anahtarları

**PIV (Personal Identity Verification — FIPS 201-3 / SP 800-73-4):** Akıllı kart PKI altyapısı; sertifika doğrulama zinciri **OCSP/CRL** ile yapılır. CCID (Chip Card Interface Device) protokolü kart-okuyucu iletişimini standartlaştırır.

**YubiKey 5 Serisi — Çok Protokollü:** FIDO2/WebAuthn (CTAP1/CTAP2/CTAP2.1), FIDO U2F, **PIV (akıllı kart)**, **OpenPGP**, **OATH (TOTP/HOTP)**, Yubico OTP, Secure Static Password. Firmware 5.7 ile:
- 100 discoverable credential (passkey), 64 OATH seed (uygulama başına; toplam 190 kimlik potansiyeli).
- RSA-3072/4096, Ed25519, X25519 desteği (DoD Ağustos 2023 memo'su uyumu).
- FIDO Level 2 sertifikası (attestable hardware-bound credentials — e-devlet senaryoları).
- **Enterprise Attestation (EA):** IdP'nin kayıt sırasında seri numarasını okumasına izin verir; yalnızca kurumun verdiği anahtarların kullanılmasını sağlar.
- **AAGUID:** Authenticator tipini belirten 128-bit tanımlayıcı; FIDO2 attestation'da zorunlu.

YubiKey 5 FIPS Serisi, **NIST CMVP** kapsamında FIPS 140-2/140-3 doğrulamasına sahiptir (kriptografik modül sertifikası, ör. CMVP #3914). YubiKey'i Entra ID, GitHub, AWS IAM Identity Center'a entegre etme: IdP'de FIDO2/security key yöntemi etkinleştirilir, kullanıcı `navigator.credentials.create()` ile kaydeder, kurumsal ortamda AAGUID allowlist ile sınırlanır.

**HSM (Hardware Security Module):** nShield (Entrust), Thales Luna, AWS CloudHSM kimlik altyapısının kök anahtarlarını (CA private key, KEK) FIPS 140-2/3 onaylı donanımda korur; PIV/akıllı kart PKI'ın kök güvenini sağlar.

### 4.4.4. DID ve Verifiable Credentials

**DID (Decentralized Identifiers — W3C):** `did:[method]:[subject]` formatında, merkezi otoriteden bağımsız, varlığın kendi kontrolünde tanımlayıcılar. Bir DID, **DID document**'a (DDO) çözümlenir — public key materyali, kimlik doğrulama tanımlayıcıları ve servis endpoint'leri içerir.
- **DID method'ları:** `did:web` (DNS/HTTPS üzerinden alan adı kontrolüyle ispat — "boring" ama pratik), `did:ion` (Bitcoin tabanlı, ölçeklenebilir; Microsoft 2023 sonunda kaldırdı), `did:key` (anahtardan türetilen).

**Verifiable Credentials (VC) ve Verifiable Presentations:** issuer–holder–verifier modeli; kriptografik bütünlük, gizliliğe saygı, makine-doğrulanabilir. **Self-Sovereign Identity (SSI):** kullanıcı kendi kimlik verisini taşır, yalnızca gereken kanıtı sunar (selective disclosure, ZKP).

**Microsoft Entra Verified ID:** **did:web** güven sistemini kullanır (Well-Known DID Configuration ile alan adına bağlanır); did:ion seçeneği Aralık 2023'te kaldırıldı. Bileşenler: DID, Trust System, Microsoft Authenticator (cüzdan), Microsoft Resolver (DDO çözümleme), Entra Verified ID Service (W3C VC ihraç/doğrulama REST API). Yaşam döngüsü, iptal (revocation) ve süre dolumu birinci sınıf kontroller olarak ele alınmalıdır.

[DİYAGRAM ÖNERİSİ: SSI üçgeni — Issuer (VC verir) → Holder (cüzdanda tutar) → Verifier (doğrular); DID document ve Trust System (did:web) ilişkisi.]

### 4.4.5. Parolasız Ortamda Log Analizi ve Anomali Tespiti

Parolasız ortamda log korelasyonu **kritiktir**, çünkü saldırı yüzeyi kimlik bilgisi hırsızlığından **kimlik doğrulama sürecinin manipülasyonuna (MITRE ATT&CK T1556 — Modify Authentication Process)** ve **anormal credential kaydına** kayar.

**Windows Security Event ID'leri:**
- **4624:** Başarılı oturum açma (Logon Type kritik: 2=interaktif, 3=ağ, 10=RDP).
- **4625:** Başarısız oturum açma (tek IP'den 50 deneme = brute force).
- **4648:** Açık kimlik bilgisiyle oturum (runas/PsExec — lateral movement göstergesi).
- **4768:** Kerberos TGT istendi (RC4 şifreleme tipi = olası Golden Ticket).
- **4769:** Kerberos servis bileti (TGS) istendi (RC4 seli = Kerberoasting).
- **5379:** Credential Manager kimlik bilgileri okundu.
- **4672:** Özel ayrıcalıklar atandı (admin oturumu).

> **Önemli:** Standart 4624/4625 olayları FIDO2 güvenlik anahtarının kullanılıp kullanılmadığını göstermez. Bu bilgi **Microsoft-Windows-WebAuthN/Operational** olay günlüğünde bulunur ve ek çözümleme/korelasyon gerektirir. Entra ID'de FIDO2 anahtarı `fido2AuthenticationMethod` kaynağı olarak saklanır; kayıt audit olayı KeyIdentifier'ı Base64 kodlu tutar.

**WebAuthn Server-Side Log Yapısı:** Başarısız UV/UP bayrak logları, yeni credential registration logları (anormal cihazdan yeni anahtar kaydı — hesap ele geçirme göstergesi), roaming authenticator'dan beklenmeyen kimlik doğrulama anomalileri izlenmelidir.

**Wazuh SIEM ile FIDO2 Korelasyonu (kavramsal kural):**
```xml
<rule id="100850" level="12">
  <if_group>authentication</if_group>
  <field name="win.system.channel">Microsoft-Windows-WebAuthN/Operational</field>
  <description>FIDO2: Anormal cihazdan yeni passkey kaydı tespit edildi</description>
  <mitre><id>T1556</id></mitre>
</rule>
```

**Splunk SPL Örnekleri:**
```
# Yeni FIDO2 credential kaydı + ardından ayrıcalıklı oturum korelasyonu
index=wineventlog (EventCode=4624 Logon_Type=3) OR source="*WebAuthN/Operational*"
| transaction Account_Name maxspan=5m
| where mvcount(EventCode) > 1 AND match(EventCode, "4672")

# UV/UP bayrağı başarısız kimlik doğrulama anomalisi
index=webauthn assertion_result="failed" (uv_flag="false" OR up_flag="false")
| stats count by user, authenticator_aaguid, src_ip
| where count > 3
```

[DİYAGRAM ÖNERİSİ: Parolasız log korelasyon hattı — Windows WebAuthN/Operational + Security log + Entra audit → SIEM (Wazuh/Splunk) → T1556 tespit kuralı → SOC alarmı.]

> **Türkiye Mevzuatı Notu:** FIDO2/WebAuthn olay loglarının merkezi SIEM'de toplanması, **KVKK Madde 12** (veri güvenliği yükümlülüğü) ve **5651 Sayılı Kanun** (zaman damgalı, değiştirilemez log) gereksinimleriyle uyumlu olmalıdır. KVKK Kişisel Veri Güvenliği Rehberi erişim loglarını ("Erişim Logları"), yetki matrisini ve kullanıcı hesap yönetimini açıkça teknik tedbir olarak listeler. **BDDK BSEBY** (Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik), uzaktan/ayrıcalıklı erişimde çok bileşenli kimlik doğrulama ve iz kaydı tutmayı zorunlu kılar.

> **Kontrol Eşlemesi:** NIST SP 800-53 **IA-5** (Authenticator Management), **IA-2(1)** (MFA), **AU-6** (Audit Review/Analysis), **SI-4** (System Monitoring); NIST SP 800-63B (AAL3 — donanım kriptografik authenticator); CIS Controls v8 **8.5** (Detailed audit logs), **8.11** (Audit log review); ISO 27001:2022 **A.8.15** (Logging), **A.8.16** (Monitoring activities).

### Temel Çıkarımlar ve Uygulama Kontrol Listesi — 4.4
- [ ] Yönetici/ayrıcalıklı erişimde donanım FIDO2 (roaming + AAGUID allowlist + EA); en az iki kayıtlı anahtar.
- [ ] Synced passkey'ler tüketici/orta riskli senaryolarda; device-bound key yüksek güvencede.
- [ ] PIV/akıllı kart PKI'da OCSP/CRL doğrulama zinciri; kök anahtarlar HSM (FIPS 140-3) içinde.
- [ ] Entra Verified ID (did:web) ile VC ihraç/doğrulama; iptal ve süre dolumu kontrolleri tanımlı.
- [ ] Microsoft-Windows-WebAuthN/Operational logları SIEM'e besleniyor; yeni credential kaydı alarmı (T1556).
- [ ] FIDO2 log korelasyonu KVKK Madde 12, 5651 ve BDDK yükümlülükleriyle uyumlu; zaman damgalı, değiştirilemez.

---

## Genel Sonuç ve Türkiye Mevzuat Çerçevesi

Kimlik güvenliği, Fortune 500 ölçeğinde artık ağ çevresinin yerini almış **birincil savunma hattıdır**. Dört alt başlık birbirini tamamlar: formel erişim modelleri (4.1) "kim neye erişebilir" temelini kurar; PAM ve modern doğrulama (4.2) en yüksek riskli kimlik bilgilerini korur; Zero Trust (4.3) implicit trust'ı ortadan kaldırır; parolasız/DID (4.4) phishing'i kökten yok eden geleceği temsil eder.

**Türkiye Özgü Yükümlülükler:**
- **KVKK Madde 12 (6698 sayılı Kanun):** Veri sorumlusu; kişisel verilerin hukuka aykırı işlenmesini ve erişilmesini önlemek, muhafazasını sağlamak için uygun güvenlik düzeyini temin etmeye yönelik her türlü teknik ve idari tedbiri almakla yükümlüdür. Veri başka kişi adına işlendiğinde sorumluluk müştereken devam eder; kurum içi denetim zorunludur; ihlalde Kurul'a ve ilgili kişiye en kısa sürede bildirim yapılmalıdır. 2026 için idari para cezaları yeniden değerleme oranı (585 Sıra No'lu VUK Genel Tebliği, 27.11.2025/RG 33090 ile %25,49) uygulanarak güncellenmiştir; Madde 12 (veri güvenliği yükümlülükleri) ihlali en yüksek mali risk kalemidir ve 2026 itibarıyla yaklaşık **256.357 TL – 17.092.242 TL** aralığında uygulanmaktadır (yasal taban: 15.000–1.000.000 TL). KVKK Kişisel Veri Güvenliği Rehberi; yetki matrisi (erişim yetki ve kontrol matrisi), kimlik doğrulama, erişim logları ve bulut için iki kademeli kimlik doğrulamayı teknik tedbir olarak listeler.
- **5651 Sayılı Kanun:** İnternet erişim loglarının zaman damgalı, değiştirilemez şekilde tutulması ve IP-kullanıcı eşlemesinin saklanması zorunludur.
- **BDDK BSEBY (Bankaların Bilgi Sistemleri ve Elektronik Bankacılık Hizmetleri Hakkında Yönetmelik — 15.03.2020/RG 31069, genel yürürlük 01.01.2021):** Görevler ayrılığı temelli erişim yönetimi (Madde 11), uzaktan/ayrıcalıklı erişimde çok bileşenli kimlik doğrulama, iz kayıtları ve periyodik yeniden kimlik doğrulama zorunludur. Bu Yönetmelik, 14.09.2007 tarihli "Bankalarda Bilgi Sistemleri Yönetiminde Esas Alınacak İlkelere İlişkin Tebliğ"i yürürlükten kaldırmıştır.
- **7545 Sayılı Siber Güvenlik Kanunu:** 12 Mart 2025'te TBMM'de kabul edilen, **19 Mart 2025 tarihli ve 32846 sayılı Resmî Gazete'de** yayımlanarak yürürlüğe giren, Türkiye'nin ilk kapsamlı yatay siber güvenlik kanunudur (Madde 20: "Bu Kanun yayımı tarihinde yürürlüğe girer."). Siber Güvenlik Başkanlığı'na yasal dayanak sağlar ve Siber Güvenlik Kurulu'nu kurar; Madde 7 uyarınca kurumlar, tespit ettikleri zafiyet veya siber olayları gecikmeksizin Başkanlığa bildirmek ve kamu/kritik altyapıda yalnızca Başkanlık tarafından yetkilendirilmiş/sertifikalı ürün ve hizmet kullanmakla yükümlüdür. İhlallerde idari para cezaları (Madde 7 ihlali için 1.000.000–10.000.000 TL) ve ağır ceza yaptırımları öngörülmüştür.

Bu çerçeve, serinin önceki bölümlerinde tanımlanan CIA Triad'ı kimlik katmanında somutlaştırır ve TCO analizinde değerlendirilen araç yatırımlarının (PAM, ZTNA, FIDO2, SIEM) regülasyon uyumuyla gerekçelendirilmesini sağlar.

---

## RECOMMENDATIONS (Aşamalı Uygulama Yol Haritası)

**Aşama 1 (0–3 ay) — Temel Sertleştirme:**
- AD Tier 0 keşfi (BloodHound/SharpHound ile shadow admin tespiti); Protected Users grubu ve Authentication Policy Silos uygulaması.
- LDAP signing + channel binding (CVE-2017-8563) zorunlu hale getirme; KRBTGT çift döndürme takvimi.
- Tüm ayrıcalıklı hesapları PAM kasasına alma; SMS OTP'yi birincil kimlik doğrulamadan kaldırma.
- **Eşik/Tetikleyici:** BloodHound'da Domain Admins'e 5 adımdan kısa bir yol kalırsa, Aşama 2'ye geçmeden önce bu yollar kapatılmalıdır.

**Aşama 2 (3–9 ay) — Modern Doğrulama ve Zero Trust Çekirdeği:**
- Yönetici ve yüksek değerli hesaplara phishing'e dayanıklı FIDO2 (roaming + AAGUID allowlist); Entra PIM ile JIT/onay iş akışı.
- VPN'i uygulama-merkezli ZTNA ile değiştirme (pilot uygulama grubuyla); cihaz duruşu için Conditional Access.
- CISA ZTMM v2.0 olgunluk değerlendirmesi; en zayıf sütuna yatırım önceliği.
- **Eşik/Tetikleyici:** AiTM phishing testi (red team) FIDO2 ile başarısız olmalı; başarılı olursa MFA yönteminin origin binding uygulaması doğrulanmalıdır.

**Aşama 3 (9–18 ay) — İleri Olgunluk ve Geleceğe Hazırlık:**
- Doğu-batı mikro-segmentasyon (PCI/KVKK segmentleri varsayılan deny); UEBA/ITDR.
- Parolasız ortam için WebAuthN/Operational log korelasyonu (Wazuh/Splunk); T1556 tespit kuralları.
- DID/Verifiable Credentials pilotu (çalışan onboarding/iş ortağı doğrulama — Entra Verified ID).
- **Eşik/Tetikleyici:** CISA ZTMM "Optimal" aşamasına ulaşılan sütunlarda sürekli doğrulama (continuous verification) ve otomatik yanıt devreye alınır.

## CAVEATS (Uyarılar ve Sınırlamalar)

- **Vendor/pazar dinamikleri:** PAM pazarı CyberArk-Palo Alto birleşmesiyle (30 Temmuz 2025 duyuru) konsolide olmaktadır; çok yıllı sözleşme öncesi roadmap riski değerlendirilmelidir. Vendor seçimleri ortama göre yapılmalıdır (regüle/hibrit için CyberArk/BeyondTrust; cloud-native/DevOps için HashiCorp Vault/StrongDM).
- **7545 ikincil mevzuat:** Siber Güvenlik Kanunu'nun erişim kontrolü/kimlik doğrulamaya ilişkin somut teknik gereksinimleri büyük ölçüde ikincil mevzuata bırakılmıştır; hukuk firması yorumları bu düzenlemelerin ~19 Mart 2026'da beklendiğini belirtmektedir — bu öngörülen bir tarih olup kesinleşmiş kanun metni değildir.
- **KVKK ceza rakamları:** 2026 TL tutarları, %25,49 yeniden değerleme oranının (resmî) saygın hukuk analizlerince taban aralıklara uygulanmasıyla elde edilmiştir; kaynaklar arası yuvarlama farkları olabilir.
- **Synced passkey güvence sınırı:** NIST, senkronize passkey'leri "tek faktör" sayar; AAL3 gerektiren senaryolarda yalnızca device-bound (donanım) authenticator kullanılmalıdır.
- **Pazar/analist projeksiyonları:** Gartner'ın "2026'da büyük kurumların %10'unun olgun Zero Trust programına sahip olacağı" ifadesi bir tahmindir; gerçekleşmiş veri değildir.
- **TACACS+ obfuscation:** RFC 8907'nin MD5 tabanlı gizleme yöntemi kriptografik şifreleme değildir; yüksek güvence için RFC 9887 (TACACS+ over TLS 1.3) veya RadSec değerlendirilmelidir.