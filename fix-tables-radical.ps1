# Radikal Tablo Düzeltme - Tüm tabularx'leri longtable'a çevir
Write-Host "Radikal tablo duzeltme basliyor..." -ForegroundColor Red

$dataFiles = Get-ChildItem "data\*.tex"
$fixCount = 0

foreach ($file in $dataFiles) {
    Write-Host "$($file.Name) radikal duzeltiliyor..." -ForegroundColor Yellow
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Tüm tabularx'leri longtable'a çevir
    $content = $content -replace '\\begin\{tabularx\}\{\\textwidth\}', '\begin{longtable}'
    $content = $content -replace '\\end\{tabularx\}', '\end{longtable}'
    
    # adjustbox'ları kaldır longtable ile uyumsuz
    $content = $content -replace '\\begin\{adjustbox\}\{[^}]*\}\s*\\small\s*', ''
    $content = $content -replace '\\end\{longtable\}\s*\\end\{adjustbox\}', '\end{longtable}'
    $content = $content -replace '\\begin\{adjustbox\}\{[^}]*\}\s*', ''
    $content = $content -replace '\\end\{adjustbox\}', ''
    
    # Tabularx X kolonu tiplerini L{} ile değiştir
    $content = $content -replace '\|X\|', '|L{4cm}|'
    $content = $content -replace '\|X\}', '|L{4cm}}'
    $content = $content -replace '\{X\|', '{L{4cm}|'
    
    # c kolonunu C{2cm} ile değiştir
    $content = $content -replace '\|c\|', '|C{2cm}|'
    
    # p{} kolonları L{} ile değiştir
    $content = $content -replace 'p\{([0-9.]+cm)\}', 'L{$1}'
    
    # Longtable başlık ve ayak ekle
    $content = $content -replace '(\\begin\{longtable\}\{[^}]+\}\s*\\hline)', '$1' + "`n" + '\endfirsthead' + "`n" + '\hline' + "`n" + '\endhead' + "`n" + '\hline' + "`n" + '\endfoot' + "`n" + '\hline' + "`n" + '\endlastfoot'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        $fixCount++
        Write-Host "  Radikal duzeltmeler uygulandı" -ForegroundColor Green
    } else {
        Write-Host "  Degisiklik gerekmedi" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Radikal tablo duzeltme tamamlandi!" -ForegroundColor Green
Write-Host "Duzeltilen dosya sayisi: $fixCount" -ForegroundColor Cyan