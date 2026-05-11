---
title: "Yönetişim, Risk, Uyumluluk (GRC) ve İş Sürekliliği (BCP)"
sidebar:
  order: 2
---

# Yönetişim, Risk ve Uyumluluk (GRC)

Bilgi güvenliği sadece teknolojiyle ilgili değildir; kurumun hedefleriyle uyumlu bir yönetim yapısı gerektirir. GRC (Governance, Risk, and Compliance) bu üç sac ayağını birleştirerek kurumsal direnç sağlar.

## §1.2.1. Yönetişim (Governance)

Yönetişim, güvenliğin "nereden nereye" gittiğini belirler. Kurumun vizyonu ile güvenlik hedeflerinin hizalanmasıdır.
*   **Stratejik Hizalama:** Güvenliğin iş hedeflerini desteklemesi.
*   **Hesap Verilebilirlik:** Kimin hangi karardan sorumlu olduğunun netleştirilmesi (RACI Matrisi).
*   **Performans Ölçümü:** Güvenlik yatırımlarının etkinliğinin KPI ve KRI'lar ile takibi.

---

## §1.2.2. Risk Yönetimi

Risk, bir tehdidin bir zafiyeti kullanarak kuruma zarar verme olasılığıdır. Modern güvenlik, reaktif savunmadan **Risk Odaklı** savunmaya geçişi temsil eder.

### Risk Hesaplama Formülü
$$Risk = Tehdit \times Zafiyet \times Etki$$

### Risk Müdahale Seçenekleri
1.  **Azaltma (Mitigation):** Güvenlik kontrolleri uygulayarak riski kabul edilebilir seviyeye indirmek.
2.  **Kaçınma (Avoidance):** Riski yaratan aktiviteyi tamamen durdurmak.
3.  **Devretme (Transfer):** Riski üçüncü bir tarafa (sigorta şirketi vb.) aktarmak.
4.  **Kabul Etme (Acceptance):** Riskin etkisinin düşük olduğu durumlarda müdahale etmeden riski üstlenmek.

---

## §1.2.3. Uyumluluk (Compliance) ve Standartlar

Kurumların uymak zorunda olduğu yasal mevzuatlar ve endüstri standartlarıdır.
*   **ISO 27001:** Bilgi Güvenliği Yönetim Sistemi (ISMS) için küresel standart.
*   **KVKK / GDPR:** Kişisel verilerin korunmasına yönelik yasal düzenlemeler.
*   **NIST CSF:** Kritik altyapıları korumak için geliştirilen kapsamlı çerçeve.

---

## §1.2.4. İş Sürekliliği Planlaması (BCP) ve BIA

Bir felaket (siber saldırı, yangın, deprem) anında işlerin nasıl devam edeceğini belirleyen süreçtir.

### İş Etki Analizi (BIA)
Hangi iş süreçlerinin ne kadar süre durabileceğini (RTO) ve ne kadar veri kaybına tahammül edilebileceğini (RPO) belirler.

*   **RTO (Recovery Time Objective):** Sistemin ne kadar sürede ayağa kalkması gerektiği (Hedef Süre).
*   **RPO (Recovery Point Objective):** En son ne kadarlık veri kaybının kabul edilebileceği (Hedef Veri Kaybı).

![RTO ve RPO Görselleştirmesi](../../../assets/images/placeholder.png)

> [!IMPORTANT]
> **Süreklilik vs. Kurtarma:** BCP (Business Continuity Plan) işin devamlılığına odaklanırken, DRP (Disaster Recovery Plan) sistemlerin teknik olarak geri döndürülmesine odaklanır.
