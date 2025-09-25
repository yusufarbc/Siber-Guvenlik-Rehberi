# 🔒 Security Policy

## 🛡️ Güvenlik Bildirimi

Bu proje **eğitim materyali** olduğu için doğrudan güvenlik açıkları içermez, ancak güvenlik konularıyla ilgili yanlış bilgiler ciddi sonuçlar doğurabilir.

## 🚨 Güvenlik Endişesi Türleri

### ⚠️ **Yüksek Öncelik**
- **Yanlış güvenlik konfigürasyonları** - Zafiyet yaratabilecek örnekler
- **Güncel olmayan güvenlik bilgileri** - Eskimiş vulnerability bilgileri  
- **Zararlı komut örnekleri** - Sistem hasarı verebilecek kod
- **Credential exposure** - Örnek dosyalarda gerçek API key, password vs.

### 🔍 **Orta Öncelik** 
- **Misleading security advice** - Yanlış yönlendirebilecek tavsiyeler
- **Incomplete threat models** - Eksik risk değerlendirmeleri
- **Deprecated security tools** - Artık güvenli olmayan araçlar

### 📝 **Düşük Öncelik**
- **Typo in security terms** - Teknik terimlerdeki yazım hataları
- **Missing security disclaimers** - Uyarı metinlerinin eksikliği

## 📧 Güvenlik Raporu Süreci

### 🔐 **Hassas Güvenlik Sorunları**
Eğer ciddi bir güvenlik problemi tespit ettiyseniz:

**📧 Direkt E-posta:** yusufarbc@yandex.com
- **Konu:** [SECURITY] Siber Güvenlik Rehberi - Güvenlik Sorunu
- **Gizlilik:** Lütfen public issue açmayın, önce e-posta gönderin

### 🔄 **Normal Güvenlik İyileştirmeleri**
Genel iyileştirmeler için:

1. **GitHub Issue** açın: [Security Enhancement](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/issues/new/choose)
2. **Label:** `security-improvement` etiketi ekleyin
3. **Template:** Bug Report veya Feature Request kullanın

## ⏰ Yanıt Süreleri

| Öncelik | İlk Yanıt | Çözüm |
|---------|-----------|--------|
| 🔴 **Kritik** | 24 saat | 48-72 saat |
| 🟡 **Orta** | 48 saat | 1-2 hafta |
| 🟢 **Düşük** | 1 hafta | Genel roadmap |

## 🛠️ Güvenlik İnceleme Süreci

### ✅ **İçerik Doğrulama**
Her güvenlik içeriği şunlar için incelenir:
- **Teknik doğruluk** - Uzman review
- **Güncellik** - CVE ve threat landscape  
- **Pratik uygulanabilirlik** - Gerçek dünya senaryoları
- **Zararlı potansiyel** - Kötüye kullanım riski

### 🔍 **Kod Örneği İncelemesi**
- **Güvenli default'lar** kullanılıyor mu?
- **Input validation** örnekleri var mı?
- **Credential hardcoding** yok mu?
- **Privilege escalation** riski var mı?

## 🎯 Güvenlik Best Practices

### 📚 **Eğitim Materyali İçin**
- **Disclaimer eklemek** - "Bu örnekler sadece eğitim amaçlıdır"
- **Production uyarıları** - "Üretim ortamında kullanmadan önce test edin"
- **Güvenlik kontrolleri** - "Bu konfigürasyonu uygulamadan güvenlik incelemesi yapın"

### 💻 **Kod Örnekleri İçin**
- **Placeholder değerler** - `example.com`, `YOUR_API_KEY` vs.
- **Minimal permissions** - En az yetki ile örnekler
- **Error handling** - Güvenli hata yönetimi
- **Logging safeguards** - Hassas veri log'lamamak

## 🔒 Güvenlik İlkeleri

### 1. **Responsible Disclosure**
- Hassas bulguları önce privatte bildirin
- Public disclosure için makul süre tanıyın (90 gün)
- Koordineli açıklama sürecine saygı gösterin

### 2. **Educational Focus** 
- Saldırı teknikleri **sadece savunma** amacıyla açıklanır
- **Etik kullanım** sürekli vurgulanır  
- **Legal disclaimers** uygun yerlerde bulunur

### 3. **Community Safety**
- **Zararlı araçlar** direkt link edilmez
- **Exploit code** sadece educational context'te
- **Vulnerability details** sorumlulukla paylaşılır

## 📋 Güvenlik Checklist (Katkıcılar İçin)

### ✅ **İçerik Eklemeden Önce**
- [ ] Bu bilgi güncel mi? (Son 2 yıl içinde doğrulanmış)
- [ ] Yanlış uygulandığında zarar verir mi?
- [ ] Etik kullanım vurgusu gerekli mi?
- [ ] Credential/API key örneği gerçek mi?

### ✅ **Pull Request'ten Önce**  
- [ ] Güvenlik açısından peer review yapıldı mı?
- [ ] Kod örnekleri test edildi mi?
- [ ] Disclaimer'lar eklendi mi?
- [ ] Production uyarıları var mı?

## 🌍 Topluluk Güvenliği

### 🤝 **Güvenli Katkı Ortamı**
- **Respectful disclosure** kültürü
- **Constructive feedback** yaklaşımı
- **Learning-focused** tartışmalar
- **Zero tolerance** for malicious activity

### 📢 **Güvenlik Farkındalığı**
Bu proje katkıcıları siber güvenlik profesyonelleri olarak:
- **Örnek davranış** sergileme sorumluluğu
- **Ethical hacking** ilkelerine sadakat
- **Community impact** bilinci
- **Professional standards** koruma

## 🔗 Faydalı Kaynaklar

- **CVE Database:** https://cve.mitre.org/
- **OWASP Guidelines:** https://owasp.org/
- **NIST Cybersecurity Framework:** https://www.nist.gov/cyberframework
- **Responsible Disclosure Guidelines:** https://en.wikipedia.org/wiki/Responsible_disclosure

---

## 📞 İletişim

**🔒 Güvenlik Sorunları:** yusufarbc@yandex.com  
**💬 Genel Sorular:** [GitHub Discussions](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/discussions)  
**🐛 Bug Reports:** [GitHub Issues](https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/issues)

**Güvenliğimizi korumamıza yardım ettiğiniz için teşekkürler! 🛡️**