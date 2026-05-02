export type Part = {
  slug: string;
  chapterId: string;
  chapterTitle: string;
  partId: string;
  title: string;
  bullets: string[];
};

export type Chapter = {
  id: string;
  title: string;
  summary: string;
  anchor: string;
  parts: {
    id: string;
    slug: string;
    title: string;
    bullets: string[];
  }[];
};

export const site = {
  title: "Siber Guvenlik El Kitabi",
  tagline: "Mimari, entegrasyon ve operasyon odakli 31 bolumluk yol haritasi.",
  description:
    "Kurumsal guvenlik mimarisini temelden ileri seviye operasyonlara kadar parcalara ayiran yapisal bir kitap.",
};

export const chapters: Chapter[] = [
  {
    id: "1",
    title: "Bilgi Guvenligi ve Yonetisim",
    summary: "Strateji, risk ve kurumsal dayaniklilik temelini kurar.",
    anchor: "bolum-1",
    parts: [
      {
        id: "1.1",
        slug: "1-1-bilgi-guvenligi-stratejisi",
        title: "Bilgi Guvenligi Stratejisi, Temelleri (CIA) ve Maliyet Yonetimi (TCO)",
        bullets: [
          "CIA uclusunun (Gizlilik, Butunluk, Kullanilabilirlik) derinlemesine analizi",
          "Is hedefleriyle siber guvenlik stratejisinin hizalanmasi",
          "Guvenlik yatirimlarinda TCO, CapEx ve OpEx yaklasimi",
          "Vendor konsolidasyonunun fayda ve riskleri",
        ],
      },
      {
        id: "1.2",
        slug: "1-2-grc-bcp-bia",
        title: "Yonetisim, Risk, Uyumluluk (GRC) ve Is Surekliligi Planlamasi (BCP/BIA)",
        bullets: [
          "NIST RMF, ISO 27005 ve STRIDE ile risk modelleme",
          "KVKK, GDPR ve 5651 loglama/zaman damgasi yukumlulukleri",
          "BIA metrikleri: RTO, RPO, MTD/MAO",
          "DR stratejileri: Hot, Warm ve Cold site tasarimlari",
        ],
      },
      {
        id: "1.3",
        slug: "1-3-politikalar-farkindalik",
        title: "Guvenlik Politikalari, Farkindalik Egitimleri ve Oltalama Simulasyonlari",
        bullets: [
          "Kabul edilebilir kullanim politikasi (AUP) ve insan guvenlik duvari",
          "Farkindalik egitimi tasarlama ve metriklerle olcme",
          "GoPhish ve Kaspersky ASAP ile phishing senaryolari",
          "Sosyal muhendislik savunmasi icin surec otomatizasyonu",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Fiziksel Guvenlik",
    summary: "Tesis, veri merkezi ve cihaz imhasi katmanlari.",
    anchor: "bolum-2",
    parts: [
      {
        id: "2.1",
        slug: "2-1-fiziksel-cevre-veri-merkezi",
        title: "Fiziksel Cevre, Tesis ve Veri Merkezi (Data Center) Guvenligi",
        bullets: [
          "CPTED, biyometrik gecis kontrolleri ve tailgating onlemleri",
          "HVAC, hot/cold aisle mimarisi ve enerji surekliligi",
          "UPS, jeneratör ve FM200/Novec 1230 yangin bastirma",
        ],
      },
      {
        id: "2.2",
        slug: "2-2-cihaz-imhasi",
        title: "Guvenli Cihaz Imhasi ve Veri Yok Etme (Degaussing/Shredding)",
        bullets: [
          "NIST SP 800-88 ve DoD 5220.22-M veri sanitizasyonu",
          "Degaussing ve crypto-shredding is akislari",
          "Fiziksel imha ve guvenli e-atik yonetimi",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Donanim Guvenligi",
    summary: "Guvenin kokunu donanim katmaninda kurar.",
    anchor: "bolum-3",
    parts: [
      {
        id: "3.1",
        slug: "3-1-tpm-secure-boot",
        title: "Cip (TPM), Anakart ve Firmware (Secure Boot) Guvenligi",
        bullets: [
          "Hardware Root of Trust mimarisi",
          "TPM 2.0 ile anahtar saklama ve attestation",
          "UEFI Secure Boot ve firmware guncelleme guvenligi",
        ],
      },
      {
        id: "3.2",
        slug: "3-2-tedarik-zinciri",
        title: "Donanim Tedarik Zinciri Riskleri ve Sahte Bilesenler",
        bullets: [
          "Hardware Trojan ve cip seviyesi manipulasyonlar",
          "Supply chain interdiction ve counterfeit bilesen tespiti",
          "Guvenli OEM dogrulama satin alma surecleri",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Kimlik Guvenligi",
    summary: "Kimligi yeni kontrol duzlemi haline getirir.",
    anchor: "bolum-4",
    parts: [
      {
        id: "4.1",
        slug: "4-1-iam-erisom-modelleri",
        title: "Kimlik Yonetimi (IAM) ve Formel Erisim Kontrol Modelleri (MAC, DAC, RBAC, ABAC)",
        bullets: [
          "AAA cercevesi: dogrulama, yetkilendirme, hesap verebilirlik",
          "Active Directory ve LDAP mimarilerinde guvenlik tasarimi",
          "MAC/DAC/RBAC/ABAC modellerinin farklari",
        ],
      },
      {
        id: "4.2",
        slug: "4-2-pam-mfa-sso",
        title: "Ayricalikli Erisim Yonetimi (PAM) ve Modern Dogrulama (MFA/SSO)",
        bullets: [
          "Ayricalikli hesap yasam dongusu ve oturum izolasyonu",
          "MFA mekanizmalari: TOTP, FIDO2, biyometri",
          "SSO ve federasyon protokolleri: SAML, OAuth, OIDC",
        ],
      },
      {
        id: "4.3",
        slug: "4-3-zero-trust",
        title: "Sifir Guven (Zero Trust) Mimarisi ve Cihaz Izolasyonu",
        bullets: [
          "Asla guvenme, daima dogrula prensibi ve mikro-segmentasyon",
          "Surekli kimlik dogrulama ve cihaz durus kontrolleri",
          "VPN yerine ZTNA yaklasimina gecis",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Veri Guvenligi",
    summary: "Veriyi tum yasam dongusu boyunca korur.",
    anchor: "bolum-5",
    parts: [
      {
        id: "5.1",
        slug: "5-1-kriptografi-hash",
        title: "Kriptografi, Sifreleme Algoritmalari ve Kriptografik Ozetleme (Hash)",
        bullets: [
          "AES, 3DES, RSA, ECC ve Diffie-Hellman temelleri",
          "Blok ve akis sifreleme mantigi",
          "SHA-256, MD5 ve collision analizi",
          "PKI ve dijital sertifika mimarisi",
        ],
      },
      {
        id: "5.2",
        slug: "5-2-veri-yasam-dongusu-dlp",
        title: "Veri Yasam Dongusu, Siniflandirma ve Sizinti Onleme (DLP)",
        bullets: [
          "At rest, in transit, in use veri koruma katmanlari",
          "Siniflandirma etiketleri ve saklama politikasi",
          "Ag tabanli ve uc nokta DLP mimarileri",
          "EDM (Exact Data Match) ile hassas veri tespiti",
        ],
      },
      {
        id: "5.3",
        slug: "5-3-yedekleme-immutable",
        title: "Yedekleme Stratejileri (3-2-1 Kurali) ve Degistirilemez (Immutable) Kurtarma",
        bullets: [
          "3-2-1 veya 3-2-1-1-0 yedekleme kurali",
          "Ransomware karsiti immutable ve air-gapped depolar",
          "Yedek butunluk dogrulama ve kurtarma testleri",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Ag Guvenligi",
    summary: "Katmanli ag savunmasi ve ileri saldiri analizleri.",
    anchor: "bolum-6",
    parts: [
      {
        id: "6.1",
        slug: "6-1-osi-tcp-ip-dmz",
        title: "Ag Iletisim Temelleri (OSI/TCP-IP), DMZ Tasarimi ve Ag Segmentasyonu",
        bullets: [
          "OSI referans modeli ve TCP/IP yigininin karsilastirmasi",
          "TCP 3-way handshake ve oturum yonetimi",
          "BGP, OSPF ve VLAN/Subnet tasarimlari",
          "DMZ mimarisi ve ic/dis trafik akislari",
        ],
      },
      {
        id: "6.2",
        slug: "6-2-ngfw-ids-ips",
        title: "Yeni Nesil Guvenlik Duvarlari (Firewall/NGFW), IDS/IPS ve Ag Gorunurlugu (DPI)",
        bullets: [
          "Stateful ve stateless paket filtreleme farklari",
          "NGFW ozellikleri: App-ID, User-ID ve kural optimizasyonu",
          "Imza tabanli ve anomali tabanli IDS/IPS",
          "DPI ve SSL Forward Proxy ile sifreli trafik analizi",
        ],
      },
      {
        id: "6.3",
        slug: "6-3-gelismis-ag-saldirilari",
        title: "Gelismis Ag Saldiri Vektorleri (DDoS, MitM, ARP Spoofing) ve Savunma",
        bullets: [
          "SYN Flood, Smurf ve fragmentasyon saldirilari",
          "SYN Cookie ile kaynak tuketimi savunmasi",
          "Session hijacking ve MitM tespit stratejileri",
          "ARP zehirleme, DHCP spoofing ve DAI/Port Security",
        ],
      },
      {
        id: "6.4",
        slug: "6-4-kablosuz-vpn-ztna",
        title: "Kablosuz Ag Teknolojileri ve Guvenli Uzaktan Erisim (VPN/ZTNA)",
        bullets: [
          "WPA3 Enterprise, 802.1X ve RADIUS mimarileri",
          "IPsec (IKE/ESP/AH) ve SSL VPN temel tasarimlari",
          "Mesh aglar (Tailscale/WireGuard) ve ZTNA gecisi",
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Uc Nokta Guvenligi",
    summary: "Isletim sistemi sertlestirme ve olay mudahale altyapisi.",
    anchor: "bolum-7",
    parts: [
      {
        id: "7.1",
        slug: "7-1-os-hardening-edr",
        title: "Isletim Sistemi Sıkilastirma (OS Hardening) ve Uc Nokta Korumasi (EDR/XDR)",
        bullets: [
          "Windows GPO/LAPS/BitLocker ve Linux Sysctl/SELinux",
          "Yama yonetimi ve uygulama whitelisting",
          "EPP'den EDR/XDR mimarisine gecis",
          "Davranissal analiz ve bellek koruma mekanizmalari",
        ],
      },
      {
        id: "7.2",
        slug: "7-2-malware-analizi-forensics",
        title: "Zararli Yazilim Analizi ve Uc Nokta Adli Bilisimi (Forensics/KAPE)",
        bullets: [
          "Statik ve dinamik malware analiz yaklasimlari",
          "Sandbox evasion ve polimorfik zararli yazilimlar",
          "Izole lab ortamlarinda test stratejileri",
          "KAPE ile RAM/Disk imaji ve adli surecler",
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Mobil Guvenlik",
    summary: "MDM ve BYOD stratejileriyle mobil veri korumasi.",
    anchor: "bolum-8",
    parts: [
      {
        id: "8.1",
        slug: "8-1-mdm-byod-mobil-tehditler",
        title: "Kurumsal Mobilite (MDM/MAM/BYOD) ve Mobil Isletim Sistemi Tehditleri",
        bullets: [
          "MDM ve MAM mimarileri",
          "BYOD politikalari ve containerization/work profile",
          "iOS ve Android sandboxing karsilastirmasi",
          "Public Wi-Fi risklerine karsi mobil VPN",
        ],
      },
    ],
  },
  {
    id: "9",
    title: "E-Posta Guvenligi",
    summary: "Kurumsal e-posta dogrulama ve tehdit onleme.",
    anchor: "bolum-9",
    parts: [
      {
        id: "9.1",
        slug: "9-1-spf-dkim-dmarc",
        title: "Mesajlasma Altyapilari ve E-Posta Dogrulama Protokolleri (SPF/DKIM/DMARC)",
        bullets: [
          "Exchange, M365 ve Postfix mimarilerinde guvenlik",
          "SPF kayitlari ile gonderen dogrulama",
          "DKIM ile icerik butunluk imzasi",
          "DMARC politika zorlamasi ve itibar yonetimi",
        ],
      },
      {
        id: "9.2",
        slug: "9-2-bec-phishing-seg",
        title: "Gelismis E-Posta Tehditleri (BEC/Phishing) ve SEG Entegrasyonu",
        bullets: [
          "BEC ve spear phishing saldiri kaliplari",
          "SEG konumlandirmasi ve policy tasarimi",
          "Zararli ek analizleri ve time-of-click korumalari",
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Uygulama Guvenligi",
    summary: "SDLC ve web/API guvenligiyle yazilimi sertlestirir.",
    anchor: "bolum-10",
    parts: [
      {
        id: "10.1",
        slug: "10-1-sdlc-sast-dast-devsecops",
        title: "Guvenli Yazilim Gelistirme (SDLC), Kod Analizi (SAST/DAST) ve DevSecOps",
        bullets: [
          "Shift-left ve tehdit modelleme yaklasimi",
          "SAST/DAST/IAST farklari",
          "SCA ve SBOM ile tedarik zinciri guvenligi",
          "CI/CD pipeline'larina guvenlik otomasyonu",
        ],
      },
      {
        id: "10.2",
        slug: "10-2-owasp-waf-api",
        title: "Web Uygulamasi ve API Guvenligi (OWASP Top 10 / WAF)",
        bullets: [
          "Guncel OWASP Top 10 zafiyetleri",
          "REST/GraphQL API kimlik dogrulama ve rate limiting",
          "WAF konumlandirmasi ve kural ince ayarlari",
        ],
      },
    ],
  },
  {
    id: "11",
    title: "Bulut ve Sanallastirma Guvenligi",
    summary: "Hipervizor, bulut ve konteyner katmanlarini guvenceye alir.",
    anchor: "bolum-11",
    parts: [
      {
        id: "11.1",
        slug: "11-1-hipervizor-bulut-modelleri",
        title: "Sanallastirma (Hipervizor) Mimarileri ve Bulut Bilisim Servis Modelleri",
        bullets: [
          "Tip 1 ve Tip 2 hipervizor guvenligi",
          "VM escape saldirilari ve vSwitch segmentasyonu",
          "IaaS, PaaS, SaaS ve paylasimli sorumluluk modeli",
          "CSPM ile bulut durus yonetimi",
        ],
      },
      {
        id: "11.2",
        slug: "11-2-cloud-native-konteyner-iac",
        title: "Bulut Yerlisi (Cloud-Native), Konteyner Guvenligi ve Kod Olarak Altyapi (IaC)",
        bullets: [
          "Docker mimarisi ve Cgroups/Namespaces izolasyonu",
          "Kubernetes RBAC, network policy ve pod guvenligi",
          "Konteyner imaj taramasi ve registry guvenligi",
          "Terraform/Ansible IaC guvenlik yanlis yapilandirmalari",
        ],
      },
    ],
  },
  {
    id: "12",
    title: "Endustriyel Sistem Guvenligi",
    summary: "OT/ICS ortamlarinda guvenli IT/OT entegrasyonu.",
    anchor: "bolum-12",
    parts: [
      {
        id: "12.1",
        slug: "12-1-ot-ics-purdue",
        title: "OT/ICS Sistemleri, Purdue Modeli ve Guvenli IT/OT Entegrasyonu",
        bullets: [
          "SCADA/PLC dunyasinda availability onceligi",
          "Purdue Level 0-5 segmentasyon mimarisi",
          "Air-gapping ve data diode kullanimi",
          "Endustriyel protokollerde guvenli uzaktan erisim",
        ],
      },
    ],
  },
  {
    id: "13",
    title: "Yapay Zeka Guvenligi",
    summary: "LLM riskleri ve uretken YZ ile savunma otomasyonu.",
    anchor: "bolum-13",
    parts: [
      {
        id: "13.1",
        slug: "13-1-llm-guvenlik",
        title: "Yapay Zeka Zafiyetleri (LLM) ve Siber Savunmada Uretken YZ Kullanimi",
        bullets: [
          "Prompt injection, veri zehirlenmesi ve model evasion",
          "YZ sistemlerinde veri gizliligi riskleri",
          "Log korelasyonu, alarm triyaji ve otomatize olay mudahale",
          "Ofansif YZ ile zafiyet kesfi ve phishing uretimi",
        ],
      },
    ],
  },
  {
    id: "14",
    title: "Operasyonel Guvenlik",
    summary: "SOC operasyonlari ve olay mudahale disiplini.",
    anchor: "bolum-14",
    parts: [
      {
        id: "14.1",
        slug: "14-1-soc-siem-soar",
        title: "SOC/NOC Entegrasyonu ve Yeni Nesil Merkezi Log Yonetimi (SIEM/SOAR)",
        bullets: [
          "ISOC mimarisiyle NOC ve SOC sinerjisi",
          "Syslog/WEF log toplama ve parsing",
          "5651 yasal saklama ve zaman damgasi mimarisi",
          "SOAR playbook'lariyla operasyonel yuk azaltma",
        ],
      },
      {
        id: "14.2",
        slug: "14-2-tehdit-avciligi-honeypot",
        title: "Tehdit Avciligi, Siber Istihbarat (CTI) ve Aldatma Teknolojileri (Honeypot)",
        bullets: [
          "MITRE ATT&CK tabanli threat hunting hipotezleri",
          "CTI yasam dongusu, IoC ve IoA yonetimi",
          "PCAP uzerinden network forensics yaklasimi",
          "Honeypot/honeynet tasarimi ve honeymonkey",
        ],
      },
      {
        id: "14.3",
        slug: "14-3-olay-mudahale",
        title: "Olay Mudahale (Incident Handling), Playbook Yonetimi ve Delil Zinciri",
        bullets: [
          "6 adimli olay mudahale yasam dongusu",
          "Blue Team, Red Team ve Purple Teaming tatbikatlari",
          "Chain of Custody standartlari",
          "Kriz iletisimi ve post-breach yonetimi",
        ],
      },
    ],
  },
];

export const parts: Part[] = chapters.flatMap((chapter) =>
  chapter.parts.map((part) => ({
    slug: part.slug,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    partId: part.id,
    title: part.title,
    bullets: part.bullets,
  }))
);
