---
title: "E-Posta Doğrulama Protokolleri (SPF, DKIM, DMARC)"
sidebar:
  order: 1
---

# E-Posta Güvenliği ve Doğrulama

E-posta, siber saldırıların %90'ından fazlasının başlangıç noktasıdır. Kurumsal itibarın korunması ve sahte e-postaların engellenmesi için teknik doğrulamalar şarttır.

## §9.1.1. SPF (Sender Policy Framework)
Alan adınız adına hangi IP adreslerinin e-posta gönderebileceğini belirten DNS kaydıdır.

## §9.1.2. DKIM (DomainKeys Identified Mail)
E-postanın yolda değiştirilmediğini kanıtlayan, gönderici tarafından eklenen kriptografik imzadır.

## §9.1.3. DMARC (Domain-based Message Authentication, Reporting, and Conformance)
SPF ve DKIM sonuçlarına göre e-postanın ne yapılacağını (Kabul et, Karantinaya al, Reddet) belirleyen üst politika çerçevesidir.

> [!IMPORTANT]
> **DMARC Reddi:** Tam uyumluluk için DMARC politikasının `p=reject` seviyesine getirilmesi, kurum adına atılan sahte e-postaları %100'e yakın oranda engeller.
