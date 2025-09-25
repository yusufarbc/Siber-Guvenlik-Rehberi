# Sütun sayılarını düzelt
$files = Get-ChildItem -Path "data\*.tex" 

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Encoding UTF8
    $newContent = @()
    
    foreach ($line in $content) {
        # Tablo başlangıç satırlarını yakalayıp sütun sayısını kontrol et
        if ($line -match '^\\begin\{tabularx\}.*\{[^}]*\}') {
            # tabularx için standart 3 sütun
            $line = $line -replace '\{[^}]*\}$', '{|X|X|X|}'
        }
        elseif ($line -match '^\\begin\{longtable\}.*\{[^}]*\}') {
            # longtable için standart 3 sütun
            $line = $line -replace '\{[^}]*\}$', '{|p{4cm}|p{5cm}|p{4cm}|}'
        }
        # Tablolardaki fazla & işaretlerini temizle (max 2 & = 3 sütun)
        elseif ($line -match '&.*&.*&') {
            # 3'ten fazla & varsa, sonuncuları sil
            $parts = $line -split '&'
            if ($parts.Count -gt 3) {
                $line = ($parts[0..2] -join '&') + ' \\'
            }
        }
        
        $newContent += $line
    }
    
    $newContent | Out-File -FilePath $file.FullName -Encoding UTF8
    Write-Host "Fixed columns in $($file.Name)"
}

Write-Host "Sütun sayıları düzeltildi."