# multicolumn sütun sayılarını düzelt
$files = Get-ChildItem -Path "data\*.tex" 

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Encoding UTF8
    
    # multicolumn{4} -> multicolumn{3} olarak değiştir
    $content = $content -replace '\\multicolumn\{4\}', '\multicolumn{3}'
    
    $content | Out-File -FilePath $file.FullName -Encoding UTF8
    Write-Host "Fixed multicolumn in $($file.Name)"
}

Write-Host "multicolumn sütun sayıları düzeltildi."