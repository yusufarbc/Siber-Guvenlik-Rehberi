---
title: "Web Uygulaması ve API Güvenliği (OWASP & WAF)"
sidebar:
  order: 2
---

# Web ve API Güvenliği

İnternete açık web uygulamaları ve API'lar, en geniş saldırı yüzeyini oluşturur.

## §10.2.1. OWASP Top 10
Web uygulamalarındaki en kritik 10 güvenlik riski (SQL Injection, Broken Access Control, SSRF vb.) için küresel standart.

## §10.2.2. API Güvenliği
*   **Kimlik Doğrulama:** JWT (JSON Web Tokens) ve API Key yönetimi.
*   **Hız Sınırlama (Rate Limiting):** DoS saldırılarını ve veri kazımayı engellemek için istek sayısının sınırlandırılması.

## §10.2.3. WAF (Web Application Firewall)
HTTP/HTTPS trafiğini inceleyerek SQLi, XSS gibi web tabanlı saldırıları durduran güvenlik duvarı.