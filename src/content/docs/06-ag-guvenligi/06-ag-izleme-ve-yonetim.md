---
title: Ağ İzleme ve Yönetim (FCAPS, SNMP, NetFlow)
sidebar:
  order: 6
---

# Ağ İzleme ve Yönetim

Bir ağın güvenliğini sağlamak için önce onu görünür kılmak gerekir. Bu bölümde ağ sağlığını izleme, performans ölçümü ve merkezi yönetim modelleri ele alınmaktadır.

## §6.6.1. FCAPS Yönetim Modeli

ISO tarafından geliştirilen FCAPS, ağ yönetimini beş temel fonksiyonel alana böler:

*   **Fault (Hata) Yönetimi:** Hataların tespiti, izolasyonu ve çözümü.
*   **Configuration (Yapılandırma) Yönetimi:** Cihaz ayarlarının takibi ve yedeklenmesi.
*   **Accounting (Muhasebe) Yönetimi:** Kaynak kullanımının ölçülmesi ve faturalandırılması.
*   **Performance (Performans) Yönetimi:** Gecikme, jitter ve bant genişliği metriklerinin izlenmesi.
*   **Security (Güvenlik) Yönetimi:** Erişim kontrolü ve tehdit tespiti.

## §6.6.2. İzleme Protokolleri ve Teknolojileri

### SNMP (Simple Network Management Protocol)
Ağ cihazlarından veri toplamak için kullanılan standart protokoldür.
*   **SNMPv3:** Şifreleme ve kimlik doğrulama özellikleriyle modern ağlarda zorunludur (SNMPv1/v2c şifresizdir).
*   **MIB (Management Information Base):** Cihazın parametre haritası.
*   **OID (Object Identifier):** Her bir parametrenin (örn. CPU yükü) benzersiz sayısal adresi.

### NetFlow ve IPFIX
SNMP "ne" olduğunu söylerken, NetFlow "neden" olduğunu (hangi uygulamanın yük yaptığını) söyler.
*   **Akış (Flow) Analizi:** Kaynak/hedef IP, port ve protokol bilgilerini toplar.
*   **IPFIX:** NetFlow v9 tabanlı, üreticiden bağımsız IETF standardıdır.

## §6.6.3. Log Yönetimi ve Syslog
Olayların (errors, warnings, logins) merkezi bir sunucuda (SIEM) toplanmasıdır.
*   **Syslog:** Standart log taşıma protokolü (Genellikle UDP 514).
*   **Önem Derecesi (Severity):** 0 (Emergency) ile 7 (Debug) arasında değişen seviyeler.

## §6.6.4. Ağ Otomasyonu (NetDevOps)
Ağ yönetiminin manuel CLI işlemlerinden, kod bazlı süreçlere evrilmesidir.
*   **Ansible:** Ajansız (agentless) otomasyon aracı.
*   **Infrastructure as Code (IaC):** Ağ yapılandırmalarının kod olarak (YAML/JSON) tanımlanması ve Git ile versiyonlanması.
