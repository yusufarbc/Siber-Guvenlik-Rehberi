---
title: "Kurumsal Mobilite (MDM/MAM/BYOD) ve Mobil İşletim Sistemi Tehditleri"
sidebar:
  order: 1
---

# Kurumsal Mobilite ve Mobil Güvenlik

Günümüzde çalışanlar ofise bağlı kalmadan, akıllı telefon ve tabletleri üzerinden kurumsal verilere erişmektedir. Mobil cihazlar, hem kişisel hem de kurumsal verinin aynı fiziksel donanımda yan yana durduğu en hassas uç noktalardır.

## §8.1.1. Kurumsal Mobilite Yönetimi (MDM ve MAM Mimarisi)

Çok sayıda mobil cihazın güvenliğini tek tek sağlamak imkansız olduğundan, kurumsal yönetim platformları kullanılır.

*   **MDM (Mobile Device Management):** Cihazın tamamının (donanım ve işletim sistemi) kurum tarafından yönetilmesidir. Kurum, cihazın kamerasını kapatabilir, ekran kilidi süresini zorunlu kılabilir veya kaybolduğunda cihazı uzaktan sıfırlayabilir (Remote Wipe). Genellikle şirketin satın alıp personele verdiği cihazlarda (Corporate-Owned) tercih edilir.
*   **MAM (Mobile Application Management):** Cihazın tamamını değil, sadece cihazın içindeki "kurumsal uygulamaları" (Örn: Şirket e-postası, kurumsal bulut diski) yönetme prensibidir. Kullanıcının kişisel fotoğraflarına veya WhatsApp'ına dokunulmaz.

---

## §8.1.2. BYOD (Kendi Cihazını Getir) ve Veri İzolasyonu (Containerization)

Çalışanların kendi şahsi cihazlarını iş için kullanmalarına izin veren **BYOD (Bring Your Own Device)** politikası esneklik sağlarken veri sızıntısı riskini artırır.

*   **Containerization (Konteynerleştirme / Work Profile):** Cihaz içinde şifrelenmiş ve izole edilmiş bir "İş Profili" oluşturulmasıdır.
*   **Nasıl Çalışır?** Şirket verileri bu izole alanın dışına çıkamaz. Örneğin, çalışan kurumsal e-postasındaki bir metni kopyalayıp kişisel not uygulamasına yapıştıramaz (DLP - Kopyala/Yapıştır yasağı). Çalışan işten ayrıldığında, şirket sadece cihazdaki bu "İş Profilini" siler, kişisel verilere dokunmaz.

---

## §8.1.3. iOS ve Android Güvenlik Modelleri (Sandboxing)

Mobil işletim sistemleri, masaüstü işletim sistemlerinden çok daha farklı ve kısıtlayıcı bir güvenlik mimarisine sahiptir.

*   **Sandboxing (Kum Havuzu):** Hem iOS hem de Android'de her uygulama kendi izole edilmiş alanında (Sandbox) çalışır. Bir uygulamanın diğer uygulamanın belleğini veya dosyalarını okuması varsayılan olarak engellenmiştir.
*   **iOS Mimarisi:** Kapalı bir ekosistemdir. Uygulamalar sadece resmi App Store'dan indirilebilir ve Apple'ın sıkı inceleme sürecinden geçer. Kullanıcı müdahalesi (Jailbreak) olmadığı sürece son derece güvenlidir. Donanımsal güvenlik (Secure Enclave) ön plandadır.
*   **Android Mimarisi:** Açık kaynaklı ve çok çeşitli donanımlarda çalışan bir sistemdir. Kullanıcılar dış kaynaklardan (APK) uygulama yükleyebilir (Sideloading), bu da zararlı yazılım bulaşma riskini artırır. Güvenlik için Play Protect ve SELinux gibi mekanizmalar kullanır. "Root" erişimi cihazın güvenliğini tamamen sıfırlar.

---

## §8.1.4. Güvensiz Ağlara Karşı Mobil Cihaz VPN Tünellemesi

Mobil cihazların en büyük riski, sürekli hareket halinde olmaları ve kafe, havalimanı gibi "Halka Açık (Public Wi-Fi)" ağlara bağlanmalarıdır.

*   **Ortadaki Adam (MitM) Riski:** Şifresiz Wi-Fi ağlarında trafik kolayca dinlenebilir.
*   **Always-On VPN (Sürekli Açık VPN):** MDM profilleri aracılığıyla, cihazın güvensiz bir ağa bağlandığı anda internete doğrudan çıkış yapmasını engelleyen ve trafiği otomatik olarak kurumsal VPN tüneline (veya ZTNA ağ geçidine) yönlendiren koruma sistemidir. Bu sayede veri her zaman şifrelenir.
