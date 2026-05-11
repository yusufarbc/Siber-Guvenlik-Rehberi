---
title: "Sanallaştırma Mimarileri ve Bulut Servis Modelleri"
sidebar:
  order: 1
---

# Sanallaştırma ve Bulut Modelleri

Bulut bilişim, fiziksel kaynakların soyutlanarak internet üzerinden hizmet olarak sunulmasıdır. Bu mimarinin temelinde gelişmiş sanallaştırma ve ağ teknolojileri yatar.

## §11.1.1. Ağ Sanallaştırma: VLAN'dan VXLAN'a
Geleneksel VLAN teknolojisi (802.1Q), 12 bitlik ID alanı nedeniyle 4096 segment ile sınırlıdır. Büyük veri merkezleri ve bulut sağlayıcıları bu sınırı **VXLAN (Virtual Extensible LAN)** ile aşar.
*   **Ölçeklenebilirlik:** 24 bitlik VNI (VXLAN Network Identifier) ile 16 milyonun üzerinde sanal ağ segmenti sağlar.
*   **Esneklik:** Katman 2 Ethernet çerçevelerini Katman 3 UDP paketleri içine kapsüller, böylece sanal ağlar coğrafi sınırları aşabilir.

## §11.1.2. Yazılım Tanımlı Ağlar (SDN)
SDN, ağın zekasını (Kontrol Düzlemi) ve paket iletimini (Veri Düzlemi) birbirinden ayırır.
*   **Merkezi Denetleyici:** Tüm ağın topolojisini gören merkezi bir yazılım (Controller) ağ politikalarını yönetir.
*   **Programlanabilirlik:** Ağ cihazları, **OpenFlow** gibi protokoller üzerinden denetleyici tarafından dinamik olarak yapılandırılır.

## §11.1.3. Bulut Ağ Hizmetleri ve IaC
Büyük bulut sağlayıcıları (AWS, Azure, GCP), SDN prensiplerini kullanarak müşterilerine özel yalıtılmış ağlar sunar.

*   **VPC / VNet:** Müşterinin bulut üzerindeki kendi özel veri merkezi parçasıdır.
*   **Kod Olarak Altyapı (IaC):** Ağ yapılandırmaları (Firewall kuralları, alt ağlar) Terraform veya CloudFormation gibi araçlarla kod olarak tanımlanır ve dağıtılır.

> [!TIP]
> Modern ağ mühendisliği, fiziksel cihaz yapılandırmasından "NetDevOps" yaklaşımına ve otomasyon uzmanlığına evrilmektedir.

## §11.1.4. Hipervizör Güvenliği
*   **Tip 1 (Bare-metal):** Doğrudan donanım üzerinde çalışan sistemler (VMware ESXi, KVM).
*   **VM Escape:** Bir saldırganın sanal makineden çıkıp hipervizöre veya diğer VM'lere erişmesi.

## §11.1.5. Bulut Servis Modelleri ve Sorumluluk
*   **IaaS (Infrastructure):** Donanım ve sanallaştırma bulut sağlayıcısında, OS ve uygulama kullanıcıda.
*   **PaaS (Platform):** Sadece kod ve veri kullanıcıda.
*   **SaaS (Software):** Tüm sorumluluk bulut sağlayıcısında.

## §11.1.3. CSPM (Cloud Security Posture Management)
Bulut kaynaklarının yanlış yapılandırmalara (Örn: Halka açık S3 kovaları) karşı sürekli taranması ve denetlenmesi.
