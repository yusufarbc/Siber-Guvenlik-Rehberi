---
title: "Hibrit Bulut Yönetimi ve Veri Egemenliği (Digital Sovereignty)"
sidebar:
  order: 3
---

# Hibrit Bulut Yönetimi ve Veri Egemenliği (Digital Sovereignty)

Büyük kamu bulutu sağlayıcılarına (AWS, Azure, GCP) tam bağımlılık; veri egemenliği, yasal uyumluluk ve ülke dışı veri transferi konularında ciddi riskler doğurur. Özellikle KVKK, GDPR ve kritik sektör düzenlemeleri kurumları verilerini ve altyapılarını kontrol altında tutmaya zorlamaktadır. Bu bölüm, egemen altyapı tasarımı ve açık kaynak alternatifleriyle veri gizliliğini nasıl sağlayacağınızı inceler.

## §11.3.1. Sovereign Stack (Egemen Altyapı) Tasarımı

### Veri Egemenliği Nedir?

Veri egemenliği, bir kurumun veya devletin kendi verisi üzerinde tam kontrol ve denetim hakkına sahip olmasıdır. Bu ilke şunları gerektirir:
*   Verinin hangi ülkede işlenip depolandığının bilinmesi ve kontrol edilmesi.
*   Yabancı hükümetlerin veya üreticilerin veriye erişiminin engellenmesi.
*   Açık kaynak veya denetlenebilir kapalı kaynak yazılımlar kullanılması.

### Sovereign Stack Bileşenleri

Kamu bulutlarından bağımsız bir egemen altyapı genellikle şu katmanlardan oluşur:

*   **Compute:** KVM, Proxmox VE veya VMware vSphere — on-premise veya ulusal veri merkezi üzerinde çalışır.
*   **Depolama:** Ceph (dağıtık blok/nesne depolama), MinIO (S3 uyumlu nesne depolama).
*   **Konteyner Orchestration:** Kubernetes (K8s) + Rancher veya OpenShift ile kendi altyapınızda container yönetimi.
*   **Kimlik ve Erişim:** Keycloak (OAuth 2.0/OIDC) veya FreeIPA — harici IdP'ye bağımlılık olmadan.
*   **Ağ:** OpenStack Neutron, Calico/Cilium ile software-defined networking.

### Ulusal Bulut Girişimleri

Türkiye, AB ve diğer ülkelerde ulusal egemen bulut projeleri geliştirilmektedir:
*   **Türkiye:** TÜRKSAT, Kamu Bulut Hizmetleri ve yerli veri merkezi yatırımları.
*   **AB:** GAIA-X — Avrupa değer ve standartlarıyla uyumlu egemen bulut ekosistemi.
*   Bu yapılar genellikle kamu kurumları için veri sınır şartı (data residency) zorunlu tutar.

---

## §11.3.2. Açık Kaynak Ekosistemi ile Veri Gizliliği Yönetimi

### Nextcloud: Kurumsal Dosya Depolama ve İşbirliği

Nextcloud, Microsoft OneDrive ve Google Drive'ın on-premise/self-hosted alternatifidir.

*   **Uçtan Uca Şifreleme (E2EE):** Nextcloud E2EE özelliği ile dosyalar sunucuya ulaşmadan önce istemci tarafında şifrelenir. Sunucu operatörü dahi dosya içeriğini okuyamaz.
*   **Federe Özellikler:** Farklı kurumlardaki Nextcloud örnekleri arasında dosya paylaşımı merkezi bulut olmadan gerçekleşir.
*   **Denetim Logları:** Tüm dosya erişimleri, indirme ve silme işlemleri SIEM'e aktarılabilir.
*   **Veri Konumu:** Dosyalar kurumun kendi sunucusunda saklanır; Türkiye, AB vb. veri yerelleştirme kurallarına uyum sağlanır.

### Diğer Açık Kaynak Araçlar

*   **Onlyoffice / LibreOffice:** Office belge düzenleme (Microsoft 365 alternatifi).
*   **Jitsi Meet / BigBlueButton:** Video konferans (Zoom/Teams alternatifi).
*   **Mattermost / Matrix (Element):** Kurumsal mesajlaşma (Slack/Teams alternatifi).
*   **Gitea / GitLab CE:** Kaynak kod barındırma (GitHub alternatifi).

---

## §11.3.3. On-Premise / Self-Hosted Alternatiflerin Güvenlik Mimarisi

### Güvenlik Avantajları ve Sorumlulukları

Self-hosted çözümlerde tüm güvenlik sorumluluğu kuruma aittir. Bu beraberinde güç ve yükümlülük getirir:

**Avantajlar:**
*   Tedarikçi güvenlik ihlallerinden etkilenme riski yoktur (örn: Microsoft, Google veya Salesforce'un ihlali kurumu doğrudan etkilemez).
*   Tüm ağ trafiği kurumsal perimeter içinde kalır; bulut sağlayıcı API erişim loglarına güvenmek gerekmez.

**Sorumluluklar:**
*   Yama yönetimi ve güvenlik güncellemeleri kurumun sorumluluğudur.
*   Yedekleme, yüksek erişilebilirlik ve felaket kurtarma planları kuruma ait altyapıda sağlanmalıdır.

### Güvenli Self-Hosted Mimari Gereksinimleri

*   **TLS Everywhere:** Tüm iç servisler arasında TLS kullanılmalı; Let's Encrypt veya dahili CA ile sertifika otomasyonu yapılmalıdır.
*   **RBAC ve SSO Entegrasyonu:** Merkezi kimlik sağlayıcı (Keycloak/FreeIPA) üzerinden çoklu oturum açma ve rol tabanlı erişim kontrolü.
*   **WAF + Reverse Proxy:** Nginx veya Traefik ile dış dünyaya açılan servislerin önüne WAF (ModSecurity/Coraza) konulması.
*   **Güvenlik Tarama:** Trivy, Grype veya OpenVAS ile periyodik zafiyet taraması; CI/CD pipeline'ına entegre edilmesi.
*   **Log Merkezileştirme:** Tüm servis logları Graylog, Elasticsearch/OpenSearch veya Loki ile merkezi toplanmalıdır.
