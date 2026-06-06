---
title: "Sanallaştırma (Hipervizör) Mimarileri ve Bulut Bilişim Servis Modelleri"
sidebar:
  order: 1
---

# Sanallaştırma Mimarileri ve Bulut Bilişim Servis Modelleri

Kurumsal BT altyapıları, fiziksel sunuculardan sanal makinelere ve nihayetinde bulut bilişime doğru evrilmiştir. Bu evrim, esneklik getirirken güvenlik sorumluluklarını da değiştirmiştir.

## §11.1.1. Sanallaştırma ve Hipervizör (Hypervisor) Mimarisi

Sanallaştırma, tek bir fiziksel sunucu donanımının üzerinde birden fazla işletim sisteminin aynı anda çalışmasını sağlayan teknolojidir. Bu işlemi yapan yazılım katmanına Hipervizör (Hypervisor) veya VMM (Virtual Machine Monitor) denir.

*   **Tip 1 Hipervizör (Bare-Metal):** İşletim sistemi olmadan doğrudan fiziksel donanımın üzerine kurulur (Örn: VMware ESXi, Microsoft Hyper-V, KVM). Kurumsal veri merkezlerinde ve bulut sağlayıcılarında kullanılır. Performansı yüksektir.
*   **Tip 2 Hipervizör (Hosted):** Zaten çalışan bir işletim sisteminin (Örn: Windows 11) üzerine bir uygulama gibi kurulur (Örn: VMware Workstation, Oracle VirtualBox). Masaüstü test ortamları için kullanılır.

### Sanallaştırma Güvenlik Riskleri
*   **VM Kaçışı (VM Escape):** Bir saldırganın, ele geçirdiği Sanal Makine (VM) içerisinden çıkarak alttaki Hipervizör katmanına ve oradan da aynı sunucudaki diğer VM'lere sızmasıdır. En kritik sanallaştırma zafiyetidir.
*   **Ağ Görünmezliği:** İki VM aynı fiziksel sunucu içindeyse, aralarındaki trafik fiziksel ağ anahtarına (Switch) veya güvenlik duvarına (Firewall) uğramadan hipervizör içinde akar. Bu "kör noktayı" gidermek için Sanal Firewall'lar kullanılmalıdır.

---

## §11.1.2. Bulut Bilişim ve Ortak Sorumluluk Modeli

Bulut bilişim, sunucu, depolama ve yazılım hizmetlerinin internet üzerinden "kullandıkça öde" mantığıyla sunulmasıdır. Bulut güvenliğinin temelini **Ortak Sorumluluk Modeli (Shared Responsibility Model)** oluşturur.

Bulut sağlayıcısı (AWS, Azure, GCP) her zaman *Bulutun Güvenliğinden* (Fiziksel veri merkezi, hipervizör vb.) sorumludur. Ancak *Bulutun İçindeki Güvenlik*, seçilen servis modeline göre kurum ile sağlayıcı arasında paylaşılır:

### IaaS (Hizmet Olarak Altyapı)
*   **Örnek:** AWS EC2, Azure Virtual Machines.
*   **Tanım:** Bulut sağlayıcısı size sadece sanal bir sunucu (donanım) verir.
*   **Sorumluluk:** İşletim sisteminin kurulması, yamalanması, güvenlik duvarı ayarları, veritabanı güvenliği ve verinin kendisi tamamen **Kuruma (Müşteriye)** aittir.

### PaaS (Hizmet Olarak Platform)
*   **Örnek:** AWS RDS (Veritabanı), Azure App Service.
*   **Tanım:** İşletim sistemi ve arka plan bileşenleri bulut sağlayıcısı tarafından yönetilir.
*   **Sorumluluk:** Kurum sadece çalıştıracağı kodun güvenliğinden ve depolayacağı veriden sorumludur. İşletim sistemi yamaları bulut sağlayıcısının işidir.

### SaaS (Hizmet Olarak Yazılım)
*   **Örnek:** Microsoft 365, Salesforce, Gmail.
*   **Tanım:** Yazılım tamamen hazır halde tarayıcı üzerinden sunulur.
*   **Sorumluluk:** Kurum sadece "Kimlik Yönetimi" (Kimin gireceği, MFA kullanıp kullanmayacağı) ve "Veri Yönetimi"nden sorumludur. Altyapının ve uygulamanın tüm güvenliği sağlayıcıya aittir.
