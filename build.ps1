# 🚀 LaTeX Derleme Scripti
# Kullanım: .\build.ps1

Write-Host "📚 Siber Güvenlik El Kitabı Derleniyor..." -ForegroundColor Green

# Geçici dosyaları temizle
Write-Host "🧹 Geçici dosyalar temizleniyor..." -ForegroundColor Yellow
Remove-Item -Path "*.aux", "*.log", "*.toc", "*.out", "*.synctex.gz" -ErrorAction SilentlyContinue

# XeLaTeX ile derle (2 kez - referanslar için)
Write-Host "🔨 İlk derleme başlıyor..." -ForegroundColor Cyan
xelatex main.tex

Write-Host "🔨 İkinci derleme (referanslar)..." -ForegroundColor Cyan  
xelatex main.tex

# PDF kontrolü
if (Test-Path "main.pdf") {
    $pdfSize = (Get-Item "main.pdf").Length / 1MB
    Write-Host "✅ PDF başarıyla oluşturuldu! Boyut: $([math]::Round($pdfSize, 2)) MB" -ForegroundColor Green
    
    # PDF'yi aç
    $openPdf = Read-Host "PDF dosyasını açmak istiyor musunuz? (y/N)"
    if ($openPdf -eq "y" -or $openPdf -eq "Y") {
        Start-Process "main.pdf"
    }
} else {
    Write-Host "❌ PDF oluşturulamadı! Hata loglarını kontrol edin." -ForegroundColor Red
}

# Son temizlik
Write-Host "🧹 Son temizlik..." -ForegroundColor Yellow
Remove-Item -Path "*.aux", "*.log", "*.toc", "*.out", "*.synctex.gz" -ErrorAction SilentlyContinue

Write-Host "🎉 İşlem tamamlandı!" -ForegroundColor Green