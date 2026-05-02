export type ContentAsset = {
  file: string;
  title: string;
  kind: "pdf" | "docx" | "md" | "txt" | "image";
};

export const contentAssets: ContentAsset[] = [
  {
    file: "Ağ Güvenliği Teknik Kitap Hazırlığı.pdf",
    title: "Ag Guvenligi Teknik Kitap Hazirligi (PDF)",
    kind: "pdf",
  },
  {
    file: "Ağ Güvenliği Teknik Kitap Hazırlığı.docx",
    title: "Ag Guvenligi Teknik Kitap Hazirligi (DOCX)",
    kind: "docx",
  },
  {
    file: "Ağ Yönetimi ve Güvenlik Raporu.pdf",
    title: "Ag Yonetimi ve Guvenlik Raporu (PDF)",
    kind: "pdf",
  },
  {
    file: "Ağ Yönetimi Güvenliği Raporu_.pdf",
    title: "Ag Yonetimi Guvenligi Raporu (PDF)",
    kind: "pdf",
  },
  {
    file: "Ag_Yonetimi_ve_Guvenligi_Birlesik.pdf",
    title: "Ag Yonetimi ve Guvenligi Birlesik (PDF)",
    kind: "pdf",
  },
  {
    file: "Ağ Ekosistemleri Pazar Analizi Raporu.docx",
    title: "Ag Ekosistemleri Pazar Analizi Raporu (DOCX)",
    kind: "docx",
  },
  {
    file: "Active Directory Ağ Güvenliği Raporu_.docx",
    title: "Active Directory Ag Guvenligi Raporu (DOCX)",
    kind: "docx",
  },
  {
    file: "Firewall Benchmark Raporu_ Kıyaslama ve Tavsiyeler.docx",
    title: "Firewall Benchmark Raporu - Kiyaslama ve Tavsiyeler (DOCX)",
    kind: "docx",
  },
  {
    file: "FortiGate Hakimiyet Raporu Oluşturma.docx",
    title: "FortiGate Hakimiyet Raporu Olusturma (DOCX)",
    kind: "docx",
  },
  {
    file: "Fortinet vs. Palo Alto_ Güvenlik Analizi.docx",
    title: "Fortinet vs. Palo Alto - Guvenlik Analizi (DOCX)",
    kind: "docx",
  },
  {
    file: "Siber Güvenlik Kitabı Üretim Promptu.txt",
    title: "Siber Guvenlik Kitabi Uretim Promptu (TXT)",
    kind: "txt",
  },
  {
    file: "tr.md",
    title: "tr.md (Markdown)",
    kind: "md",
  },
  {
    file: "netsec.jpg",
    title: "netsec.jpg (Gorsel)",
    kind: "image",
  },
];
