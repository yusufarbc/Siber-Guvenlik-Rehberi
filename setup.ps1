# 📦 Hızlı Kurulum Scripti  
# Windows için gerekli araçları yükler

Write-Host "🚀 Siber Güvenlik El Kitabı - Hızlı Kurulum" -ForegroundColor Green
Write-Host "Bu script gerekli araçları otomatik yükleyecek..." -ForegroundColor Yellow

# Yönetici yetkisi kontrolü
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "⚠️ Bu script yönetici yetkileri gerektirir!" -ForegroundColor Red
    Write-Host "PowerShell'i 'Yönetici olarak çalıştır' ile açın." -ForegroundColor Yellow
    exit 1
}

# Winget kontrolü
try {
    winget --version | Out-Null
    Write-Host "✅ Winget mevcut" -ForegroundColor Green
} catch {
    Write-Host "❌ Winget bulunamadı! Windows 10 1809+ gerekli." -ForegroundColor Red
    exit 1
}

# Chocolatey kurulumu
if (!(Get-Command choco -ErrorAction SilentlyContinue)) {
    Write-Host "📦 Chocolatey kuruluyor..." -ForegroundColor Cyan
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
} else {
    Write-Host "✅ Chocolatey zaten mevcut" -ForegroundColor Green
}

# Git kurulumu
Write-Host "🔧 Git kuruluyor..." -ForegroundColor Cyan
winget install Git.Git --silent --accept-source-agreements

# VS Code kurulumu
Write-Host "💻 VS Code kuruluyor..." -ForegroundColor Cyan  
winget install Microsoft.VisualStudioCode --silent --accept-source-agreements

# MiKTeX kurulumu
Write-Host "📚 MiKTeX kuruluyor..." -ForegroundColor Cyan
choco install miktex -y

# VS Code LaTeX eklentisi
Write-Host "🔧 LaTeX Workshop eklentisi kuruluyor..." -ForegroundColor Cyan
code --install-extension James-Yu.latex-workshop

Write-Host ""
Write-Host "🎉 Kurulum tamamlandı!" -ForegroundColor Green
Write-Host "🔄 Terminal'i yeniden başlatın ve şu komutları çalıştırın:" -ForegroundColor Yellow
Write-Host ""
Write-Host "git clone https://github.com/yusufarbc/Siber-Guvenlik-Rehberi.git" -ForegroundColor White
Write-Host "cd Siber-Guvenlik-Rehberi" -ForegroundColor White  
Write-Host ".\build.ps1" -ForegroundColor White
Write-Host ""
Write-Host "📖 Detaylı bilgi: README.md" -ForegroundColor Cyan