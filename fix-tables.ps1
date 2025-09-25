# 📊 Tablo Standardizasyon Scripti
# LaTeX tabloları optimize eder ve standartlaştırır

Write-Host "Tablo Standardizasyon Basliyor..." -ForegroundColor Green

$dataFiles = Get-ChildItem "data\*.tex"
$fixCount = 0

foreach ($file in $dataFiles) {
    Write-Host "$($file.Name) isleniyor..." -ForegroundColor Yellow
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # 1. Çok küçük kolonları düzelt (p{0.7cm} gibi)
    $content = $content -replace 'p\{0\.7cm\}', 'L{1.2cm}'
    $content = $content -replace 'p\{1cm\}', 'L{1.5cm}'
    $content = $content -replace 'p\{1\.1cm\}', 'L{1.8cm}'
    
    # 2. scriptsize ve footnotesize font boyutlarını kaldır
    $content = $content -replace '\>\{\\scriptsize\}', '>'
    $content = $content -replace '\>\{\\footnotesize\}', '>'
    $content = $content -replace '\>\{\\tiny\}', '>'
    
    # 3. Çok fazla kolon olan tabloları basitleştir (5+ kolon)
    $content = $content -replace '\|p\{[0-9.]+cm\}\|p\{[0-9.]+cm\}\|p\{[0-9.]+cm\}\|p\{[0-9.]+cm\}\|p\{[0-9.]+cm\}\|', '|L{2cm}|L{2.5cm}|L{2.5cm}|L{3cm}|'
    
    # 4. Standart kolon genişlikleri
    $content = $content -replace 'p\{2\.5cm\}', 'L{2.5cm}'
    $content = $content -replace 'p\{3cm\}', 'L{3cm}' 
    $content = $content -replace 'p\{3\.5cm\}', 'L{3.5cm}'
    $content = $content -replace 'p\{4cm\}', 'L{4cm}'
    $content = $content -replace 'p\{5\.5cm\}', 'L{5.5cm}'
    $content = $content -replace 'p\{6cm\}', 'L{6cm}'
    
    # 5. Karmaşık arraybackslash tanımlarını temizle
    $content = $content -replace '\>\{\\raggedright\\arraybackslash\}', '>'
    $content = $content -replace '\>\{\\centering\\arraybackslash\}', '>'
    
    # 6. 0.95\textwidth tabularx'leri tam genişliğe çevir
    $content = $content -replace '0\.95\\textwidth', '\textwidth'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        $fixCount++
        Write-Host "  Duzeltmeler uygulandı" -ForegroundColor Green
    } else {
        Write-Host "  Degisiklik gerekmedi" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Tablo standardizasyonu tamamlandi!" -ForegroundColor Green
Write-Host "Duzeltilen dosya sayisi: $fixCount" -ForegroundColor Cyan