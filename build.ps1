# 🚀 LaTeX Derleme Scripti
# Kullanım: .\build.ps1

Write-Host "Siber Guvenlik El Kitabi Derleniyor..." -ForegroundColor Green

# Gecici dosyalari temizle
Write-Host "Gecici dosyalar temizleniyor..." -ForegroundColor Yellow
Remove-Item -Path "*.aux", "*.log", "*.toc", "*.out", "*.synctex.gz" -ErrorAction SilentlyContinue

# XeLaTeX ile derle (2 kez - referanslar icin)
Write-Host "Ilk derleme basliyor..." -ForegroundColor Cyan
xelatex main.tex

Write-Host "Ikinci derleme (referanslar)..." -ForegroundColor Cyan  
xelatex main.tex

# PDF kontrolü
if (Test-Path "main.pdf") {
    $pdfSize = (Get-Item "main.pdf").Length / 1MB
    Write-Host "PDF basariyla olusturuldu! Boyut: $([math]::Round($pdfSize, 2)) MB" -ForegroundColor Green
    
    # PDF'yi aç
    $openPdf = Read-Host "PDF dosyasını açmak istiyor musunuz? (y/N)"
    if ($openPdf -eq "y" -or $openPdf -eq "Y") {
        Start-Process "main.pdf"
    }
} else {
    Write-Host "PDF olusturulamadi! Hata loglarini kontrol edin." -ForegroundColor Red
}

# Son temizlik
Write-Host "Son temizlik..." -ForegroundColor Yellow
Remove-Item -Path "*.aux", "*.log", "*.toc", "*.out", "*.synctex.gz" -ErrorAction SilentlyContinue

Write-Host "Islem tamamlandi!" -ForegroundColor Green