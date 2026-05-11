---
title: Modern Ağ Mimarileri (Zero Trust, SASE)
sidebar:
  order: 5
---

# Modern Ağ Mimarileri

Bulut bilişim ve uzaktan çalışmanın yükselişi, geleneksel "kale ve hendek" (perimeter-based) güvenlik modelini geçersiz kılmıştır. Bu bölümde, "asla güvenme, her zaman doğrula" prensibine dayanan yeni nesil mimariler ele alınmaktadır.

## §6.5.1. Sıfır Güven (Zero Trust) Mimarisi

Sıfır Güven, ağın içindeki veya dışındaki hiçbir kullanıcıya veya cihaza varsayılan olarak güvenilmemesi gerektiğini savunan bir stratejidir.

### Temel Prensipler
1.  **Açıkça Doğrula (Verify Explicitly):** Her erişim isteğini; kullanıcı kimliği, cihaz sağlığı, konum ve zaman gibi tüm veri noktalarına dayanarak doğrula.
2.  **En Az Ayrıcalık (Least Privilege):** Kullanıcılara sadece işlerini yapmaları için gereken minimum kaynaklara erişim hakkı tanı.
3.  **İhlal Varsay (Assume Breach):** Bir saldırının zaten gerçekleştiğini varsayarak, saldırganın ağda yanal hareketini (Lateral Movement) zorlaştır.

### Mikro-Segmentasyon
Ağı büyük parçalara (VLAN) bölmek yerine, her bir iş yükünü veya uygulamayı kendi küçük güvenlik bölgesi içine hapsetmektir. Bu, bir sızıntı durumunda saldırının "etki alanını" (blast radius) sınırlar.

## §6.5.2. SASE (Secure Access Service Edge)

SASE, ağ yeteneklerini (SD-WAN) ve güvenlik servislerini (FWaaS, SWG, CASB, ZTNA) bulut tabanlı tek bir platformda birleştiren bir mimari çerçevedir.

![SASE Mimarisi](https://cdn-images-1.medium.com/max/800/1*05xI3WYS5avJ1qxcB7x3Jw.png)

*   **FWaaS (Firewall as a Service):** Bulut tabanlı güvenlik duvarı.
*   **CASB (Cloud Access Security Broker):** Şirket verilerinin bulut uygulamaları (Office 365, Salesforce) arasındaki güvenliğini sağlar.
*   **ZTNA (Zero Trust Network Access):** Kullanıcılara uygulamalara güvenli, bağlam duyarlı erişim sağlar.

## §6.5.3. SD-WAN (Software-Defined WAN)
Geleneksel WAN mimarilerinin aksine, trafiği uygulama farkındalığı ile en uygun yola (MPLS, İnternet, 5G) dinamik olarak yönlendirir. SASE'nin ağ bileşenini oluşturur.
