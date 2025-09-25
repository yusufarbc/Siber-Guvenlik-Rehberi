# Tablo Format Düzeltme Scripti - Gelişmiş Versiyon
Write-Host "Gelismis tablo duzeltme basliyor..." -ForegroundColor Green

$dataFiles = Get-ChildItem "data\*.tex"
$fixCount = 0

foreach ($file in $dataFiles) {
    Write-Host "$($file.Name) kontrol ediliyor..." -ForegroundColor Yellow
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Problematik tabularx + p{} kombinasyonlarını longtable'a çevir
    $content = $content -replace '\\begin\{tabularx\}\{\\textwidth\}\{\|L\{[0-9.]+cm\}\|L\{[0-9.]+cm\}\|p\{[0-9.]+cm\}\|p\{[0-9.]+cm\}\|\}', '\begin{longtable}{|L{2.5cm}|L{3cm}|L{2cm}|L{2.5cm}|}'
    
    # tabularx içindeki c kolonunu C{} ile değiştir
    $content = $content -replace '\\begin\{tabularx\}\{\\textwidth\}\{\|c\|X\|X\|\}', '\begin{tabularx}{\textwidth}{|C{2cm}|X|X|}'
    
    # Kapanış taglarını da değiştir
    $content = $content -replace '\\end\{tabularx\}(?=\s*\\end\{adjustbox\})', '\end{longtable}'
    
    # adjustbox'ları longtable için kaldır
    $content = $content -replace '\\begin\{adjustbox\}\{max width=\\textwidth\}\s*\\small\s*\\begin\{longtable\}', '\begin{longtable}'
    $content = $content -replace '\\end\{longtable\}\s*\\end\{adjustbox\}', '\end{longtable}'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        $fixCount++
        Write-Host "  Duzeltmeler uygulandı" -ForegroundColor Green
    } else {
        Write-Host "  Degisiklik gerekmedi" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Gelismis tablo duzeltme tamamlandi!" -ForegroundColor Green
Write-Host "Duzeltilen dosya sayisi: $fixCount" -ForegroundColor Cyan