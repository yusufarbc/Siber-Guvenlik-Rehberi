---
title: "Sanallaştırma Mimarileri ve Bulut Servis Modelleri"
sidebar:
  order: 1
---

# Bulut ve Sanallaştırma Güvenliği

Sanallaştırma, modern BT altyapısının temelidir; ancak hipervizör seviyesindeki zafiyetler tüm sanal makineleri (VM) risk altına sokabilir.

## §11.1.1. Hipervizör Güvenliği
*   **Tip 1 (Bare-metal):** Doğrudan donanım üzerinde çalışan sistemler (VMware ESXi, KVM).
*   **VM Escape:** Bir saldırganın sanal makineden çıkıp hipervizöre veya diğer VM'lere erişmesi.

## §11.1.2. Bulut Servis Modelleri ve Sorumluluk
*   **IaaS (Infrastructure):** Donanım ve sanallaştırma bulut sağlayıcısında, OS ve uygulama kullanıcıda.
*   **PaaS (Platform):** Sadece kod ve veri kullanıcıda.
*   **SaaS (Software):** Tüm sorumluluk bulut sağlayıcısında.

## §11.1.3. CSPM (Cloud Security Posture Management)
Bulut kaynaklarının yanlış yapılandırmalara (Örn: Halka açık S3 kovaları) karşı sürekli taranması ve denetlenmesi.
