---
title: "Bulut Yerlisi (Cloud-Native), Konteyner Güvenliği ve Kod Olarak Altyapı (IaC)"
sidebar:
  order: 2
---

# Bulut Yerlisi, Konteyner Güvenliği ve Kod Olarak Altyapı (IaC)

Modern uygulamalar artık devasa sunucular yerine, "Konteyner" adı verilen çok daha küçük, hafif ve bulut ortamları için özel tasarlanmış (Cloud-Native) paketler halinde çalışmaktadır.

## §11.2.1. Konteyner Mimarisi ve Docker Güvenliği

Sanal Makineler (VM) donanımı sanallaştırırken, Konteynerler (Örn: Docker) "İşletim Sistemini" sanallaştırır.

*   **Mimari:** Her VM'nin kendine ait devasa bir işletim sistemi vardır. Konteynerler ise tek bir ana işletim sisteminin (Host OS) çekirdeğini (Kernel) paylaşır, ancak birbirlerinden izole (Namespaces ve Cgroups ile) çalışırlar. Bu sayede saniyeler içinde açılır ve çok az kaynak tüketirler.
*   **Güvenlik Riskleri:** Konteynerler çekirdeği (Kernel) paylaştığı için, bir konteynerde Kernel seviyesinde bir zafiyet tetiklenirse, aynı makinedeki tüm konteynerler tehlikeye girer.
*   **Docker Koruması:** Konteynerler kesinlikle `root` (en yetkili) kullanıcı olarak çalıştırılmamalıdır (Rootless containers). Ayrıca, konteyner imajları (Docker Image) canlıya alınmadan önce zafiyetlere karşı (SCA araçlarıyla) taranmalıdır.

---

## §11.2.2. Kubernetes (K8s) Orkestrasyonu ve Güvenliği

Büyük kurumlarda binlerce konteyneri manuel olarak yönetmek imkansızdır. Bu konteynerlerin ne zaman açılacağını, çökerse nasıl yeniden başlatılacağını yöneten "Orkestrasyon" sistemlerine ihtiyaç vardır (En ünlüsü Kubernetes'tir).

*   **Kubernetes (K8s) Riskleri:** Kubernetes oldukça karmaşık bir yapıya sahiptir. Yanlış yapılandırılmış bir K8s paneli veya yetkilendirme (RBAC) eksikliği, saldırganların tüm cluster'ı ele geçirmesine neden olabilir.
*   **K8s Sıkılaştırma:** 
    *   API Sunucusuna (Control Plane) erişim sadece yetkili IP'lerle sınırlandırılmalıdır.
    *   Konteynerlerin ağ üzerinden birbirleriyle konuşmasını kısıtlamak için "Ağ Politikaları (Network Policies)" uygulanmalıdır (Konteyner mikro-segmentasyonu).
    *   Gizli veriler (Şifreler, API keyler) kodun içinde değil, Kubernetes Secrets (veya HashiCorp Vault gibi dış kasalar) içinde tutulmalıdır.

---

## §11.2.3. Kod Olarak Altyapı (IaC - Infrastructure as Code)

Bulut ortamlarında sunucuları, ağları ve güvenlik duvarlarını fareyle tıklayarak (manuel) oluşturmak hata yapma riskini artırır. Bunun yerine, tüm altyapı bir kod dosyası olarak (Örn: Terraform, AWS CloudFormation) yazılır ve saniyeler içinde otomatik olarak ayağa kaldırılır.

*   **IaC Güvenliği:** Bir geliştirici Terraform kodunda bir depolama alanını (S3 Bucket) yanlışlıkla "Halka Açık (Public)" olarak kodlarsa, bu kod çalıştırıldığı anda veri sızıntısı yaşanır.
*   **Çözüm:** Tıpkı yazılım kodlarının (SAST ile) tarandığı gibi, IaC kodları da (Örn: Checkov veya tfsec gibi araçlarla) daha bulutta hiçbir şey inşa edilmeden önce taranmalı ve güvenlik politikalarına uymayan altyapı kodları reddedilmelidir.
