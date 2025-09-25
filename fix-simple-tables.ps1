# Basit 3 sütun tabloları oluştur
$files = Get-ChildItem -Path "data\*.tex" 

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Encoding UTF8
    $newContent = @()
    $inTable = $false
    
    foreach ($line in $content) {
        # Tablo başlangıçlarını değiştir
        if ($line -match '^\\begin\{(tabularx|longtable)\}') {
            $newContent += '\begin{tabular}{|p{4cm}|p{6cm}|p{4cm}|}'
            $newContent += '\hline'
            $inTable = $true
        }
        # Tablo bitişlerini değiştir
        elseif ($line -match '^\\end\{(tabularx|longtable)\}') {
            $newContent += '\hline'
            $newContent += '\end{tabular}'
            $inTable = $false
        }
        # Tablo içi satırları düzelt
        elseif ($inTable -and $line.Contains('&')) {
            # Fazla & işaretlerini temizle (max 2 & = 3 sütun)
            $parts = $line -split '&'
            if ($parts.Count -gt 3) {
                $line = ($parts[0], $parts[1], $parts[2] -join ' & ') + ' \\'
            }
            elseif ($parts.Count -eq 2) {
                $line = $parts[0] + ' & ' + $parts[1] + ' & \\'
            }
            # Satır sonu düzelt
            if (-not $line.EndsWith('\\')) {
                $line = $line.TrimEnd() + ' \\'
            }
            $newContent += $line
            $newContent += '\hline'
        }
        # Diğer satırları koru
        else {
            $newContent += $line
        }
    }
    
    $newContent | Out-File -FilePath $file.FullName -Encoding UTF8
    Write-Host "Fixed table structure in $($file.Name)"
}

Write-Host "Tablo yapilari basitlestirildi."