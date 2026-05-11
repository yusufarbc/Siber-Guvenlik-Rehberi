---
title: "Bulut Yerlisi, Konteyner ve IaC Güvenliği"
sidebar:
  order: 2
---

# Konteyner ve Modern Altyapı Güvenliği

Konteyner teknolojileri (Docker, Kubernetes), geleneksel sanallaştırmaya göre daha hafif ama farklı güvenlik zorlukları sunan bir yapıdadır.

## §11.2.1. Konteyner Güvenliği
*   **Docker:** İmaj tarama ve root olmayan kullanıcılarla çalıştırma.
*   **Kubernetes (K8s):** Ağ politikaları (Network Policies) ve RBAC ile yetki yönetimi.

## §11.2.2. Kod Olarak Altyapı (IaC)
Terraform ve Ansible gibi araçlarla altyapı oluşturulurken yapılan güvenlik hatalarının (Hardcoded şifreler, geniş port izinleri) otomatik taranması.

## §11.2.3. Registry Güvenliği
Kullanılan imajların güvenilir bir kaynaktan (Private Registry) gelmesi ve sürekli zafiyet taramasından geçirilmesi.
