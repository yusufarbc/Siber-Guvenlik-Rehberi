# 📊 Proje İstatistik Scripti
# LaTeX dosyalarını analiz eder

Write-Host "📊 Siber Güvenlik El Kitabı - Proje İstatistikleri" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Blue

# Bölüm dosyalarını analiz et
$chapters = Get-ChildItem "data\*.tex" | Sort-Object Name
$totalWords = 0
$totalLines = 0
$totalTables = 0
$totalFigures = 0

Write-Host ""
Write-Host "📑 BÖLÜM BAZINDA ANALİZ" -ForegroundColor Yellow
Write-Host "{0,-8} {1,-35} {2,10} {3,8} {4,8}" -f "Bölüm", "Durum", "Kelime", "Satır", "Tablo"
Write-Host "-" * 70 -ForegroundColor Gray

foreach ($chapter in $chapters) {
    $content = Get-Content $chapter.FullName -Raw -Encoding UTF8
    
    # Kelime sayısı (yaklaşık - LaTeX komutları hariç)
    $words = ($content -replace '\\[a-zA-Z]+\*?(\[[^\]]*\])?(\{[^}]*\})*', '' -split '\s+' | Where-Object {$_ -ne ""}).Count
    
    # Satır sayısı
    $lines = (Get-Content $chapter.FullName | Measure-Object).Count
    
    # Tablo sayısı
    $tables = ([regex]::Matches($content, '\\begin\{(longtable|tabular|tabularx)\}')).Count
    
    # Figür sayısı  
    $figures = ([regex]::Matches($content, '\\begin\{figure\}|\\includegraphics')).Count
    
    # Durum belirleme
    $status = switch ($words) {
        {$_ -lt 4000} { "🔴 Yetersiz" }
        {$_ -lt 5500} { "🟡 Orta" }
        {$_ -lt 7000} { "🔶 İyi" }
        default { "🏆 Mükemmel" }
    }
    
    Write-Host "{0,-8} {1,-35} {2,10} {3,8} {4,8}" -f $chapter.BaseName, $status, $words, $lines, $tables
    
    $totalWords += $words
    $totalLines += $lines  
    $totalTables += $tables
    $totalFigures += $figures
}

Write-Host ""
Write-Host "📈 GENEL İSTATİSTİKLER" -ForegroundColor Yellow
Write-Host "-" * 40 -ForegroundColor Gray
Write-Host "📄 Toplam Kelime: $totalWords" -ForegroundColor Cyan
Write-Host "📝 Toplam Satır: $totalLines" -ForegroundColor Cyan
Write-Host "📊 Toplam Tablo: $totalTables" -ForegroundColor Cyan
Write-Host "🖼️ Toplam Figür: $totalFigures" -ForegroundColor Cyan

# PDF analizi
if (Test-Path "main.pdf") {
    $pdfSize = [math]::Round((Get-Item "main.pdf").Length / 1MB, 2)
    Write-Host "📄 PDF Boyutu: $pdfSize MB" -ForegroundColor Cyan
}

# Görsel analizi
$images = Get-ChildItem "img\*" -Include "*.png", "*.jpg", "*.jpeg" | Measure-Object
Write-Host "🖼️ Görsel Dosyası: $($images.Count)" -ForegroundColor Cyan

Write-Host ""
Write-Host "🎯 ÖNCELİKLİ İYİLEŞTİRME ALANLARI" -ForegroundColor Yellow
Write-Host "-" * 40 -ForegroundColor Gray

foreach ($chapter in $chapters) {
    $content = Get-Content $chapter.FullName -Raw -Encoding UTF8
    $words = ($content -replace '\\[a-zA-Z]+\*?(\[[^\]]*\])?(\{[^}]*\})*', '' -split '\s+' | Where-Object {$_ -ne ""}).Count
    
    if ($words -lt 4000) {
        $needed = 5500 - $words
        Write-Host "📝 Bölüm $($chapter.BaseName): +$needed kelime gerekli" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✨ Analiz tamamlandı!" -ForegroundColor Green