---
title: "Mobil Uygulama Güvenliği ve Tersine Mühendislik Korumaları (Obfuscation / Anti-Tampering)"
sidebar:
  order: 3
---

# Mobil Uygulama Güvenliği ve Tersine Mühendislik Korumaları

Mobil uygulamalar, kullanıcı cihazına dağıtılan ve saldırgan tarafından kolayca erişilebilir olan yazılımlardır. Tersine mühendislik, kaynak kod analizi ve dinamik manipülasyon ile uygulama güvenliği atlatılabilir. OWASP MASVS (Mobile Application Security Verification Standard) bu tehditlere karşı endüstri standardı bir güvenlik çerçevesi sunar.

## §8.3.1. OWASP MASVS ve Statik/Dinamik Analiz

### OWASP MASVS (MSTG)

OWASP MASVS, mobil uygulamaların güvenlik gereksinimlerini iki temel profilde tanımlar:
*   **MASVS-L1 (Temel Güvenlik):** Tüm uygulamalar için minimum güvenlik gereksinimleri (veri depolama, kriptografi, ağ iletişimi).
*   **MASVS-L2 (Derinlemesine Savunma):** Yüksek risk altındaki uygulamalar (bankacılık, sağlık) için ek gereksinimler.
*   **MASVS-R (Dayanıklılık):** Tersine mühendislik ve manipülasyona karşı koruma gereksinimleri.

### Statik Analiz (SAST)

APK veya IPA dosyasını çalıştırmadan analiz eder:
*   **Android:** `apktool` ile Smali kodu çıkarma; `jadx` ile Java/Kotlin kaynak koduna yakın decompile.
*   **iOS:** `class-dump` veya `Hopper` ile Objective-C/Swift sınıf yapıları analizi.
*   **Otomatik SAST Araçları:** MobSF (Mobile Security Framework), QARK (Android).

Statik analizde aranan bulgular:
*   Kaynak kodda hardcoded API anahtarları, parola veya kripto anahtarı.
*   Zayıf kriptografi kullanımı (`MD5`, `DES`, `ECB modu`).
*   İzin kötüye kullanımı (gereksiz izinler, AndroidManifest.xml).

### Dinamik Analiz (DAST)

Uygulama çalışırken gerçek zamanlı analiz:
*   HTTP/HTTPS trafiği Burp Suite veya OWASP ZAP ile proxy üzerinden yakalanır.
*   **Frida:** Çalışan uygulama sürecine enjekte edilen JavaScript ajanıyla fonksiyon hooking, şifre çözme ve runtime bellek okuma yapılır.
*   **Objection:** Frida üzerine inşa edilmiş, jailbreak gerektirmeyen dinamik analiz aracıdır.

---

## §8.3.2. Kod Şifreleme, Root/Jailbreak Tespiti ve Ekran Yakalama Engelleme

### Kod Gizleme (Code Obfuscation)

*   **Android:** ProGuard ve R8 ile sınıf/metod/değişken isimleri anlamsız harflere dönüştürülür. DexGuard, daha güçlü şifreleme ve anti-tamper katmanı ekler.
*   **iOS:** LLVM tabanlı obfuscator'lar (Obfuscator-LLVM) ile control flow flatteming ve string şifreleme uygulanır.

> [!CAUTION]
> Obfuscation tek başına güvenlik sağlamaz; kararlı bir analistin önüne yalnızca geçici engel koyar. Derinlemesine savunma katmanlarıyla birleştirilmelidir.

### Root/Jailbreak Tespiti

*   **Android Root Tespiti:** `su` binary varlığı, Magisk/SuperSU dosya izleri, test-keys ile imzalı ROM, SafetyNet/Play Integrity API.
*   **iOS Jailbreak Tespiti:** Cydia uygulaması varlığı, `/etc/apt` gibi jailbreak izleri, sandbox ihlali testi, dylib enjeksiyon kontrolü.

### Ekran Yakalama ve Kayıt Engelleme

*   **Android:** `WindowManager.LayoutParams.FLAG_SECURE` ile uygulama penceresini ekran görüntüsü ve ekran kaydından korur.
*   **iOS:** Uygulama arka plana alındığında hassas içeriği blur veya opak ekranla maskeleyin; `applicationWillResignActive` callback'i kullanılır.

---

## §8.3.3. SSL/TLS Pinning Mimarisi ve Dinamik Analiz Araçlarına Karşı Savunma

### SSL/TLS Pinning

Standart TLS doğrulaması CA'ya güvenir; saldırgan kurumsal veya kötü amaçlı bir CA sertifikasını cihaza ekleyerek tüm HTTPS trafiğini okuyabilir. SSL Pinning bunu engeller.

*   **Sertifika Pinleme:** Uygulamanın içine sunucunun gerçek sertifikası veya hash'i gömülür. TLS el sıkışmasında sunucu sertifikası gömülü değerle karşılaştırılır; eşleşmezse bağlantı kesilir.
*   **Public Key Pinleme:** Sertifika değişse bile geçerlilik süresi boyunca public key aynı kalırsa bağlantıya izin verilir. Rotasyon esnekliği sağlar.

### Frida ve Objection ile Bypass Girişimleri

Saldırganlar/güvenlik araştırmacıları Frida ile SSL pinning hook'larını çalışma zamanında devre dışı bırakmaya çalışır:
*   `objection -g com.ornek.uygulama explore` → `android sslpinning disable`

### Karşı Savunma (Anti-Instrumentation)
*   **Frida Tespiti:** Frida server port 27042'yi dinler; uygulama bu porta bağlanmayı deneyerek Frida varlığını test edebilir.
*   **Root/Jailbreak + Frida kombinasyonu** algılandığında uygulama çalışmayı durdurabilir veya arka planda uyarı gönderebilir.
*   **Runtime Application Self-Protection (RASP):** Uygulama içi koruma katmanı; hooking, code injection ve emülatör ortamı tespitini gerçek zamanlı yapar.
*   Tüm bu kontroller sunucu tarafında davranış analiziyle desteklenmelidir; istemci tarafı kontroller tek başına yeterli değildir.
