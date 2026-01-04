# PowerShell script to download royalty-free music
# Run this script to download free music tracks

$assetsPath = $PSScriptRoot

Write-Host "Downloading royalty-free music tracks..." -ForegroundColor Green

# Function to download a file
function Download-Music {
    param(
        [string]$Url,
        [string]$OutputFile
    )
    
    $outputPath = Join-Path $assetsPath $OutputFile
    
    try {
        Write-Host "Downloading $OutputFile..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $Url -OutFile $outputPath -ErrorAction Stop
        Write-Host "✓ Downloaded $OutputFile" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "✗ Failed to download $OutputFile : $_" -ForegroundColor Red
        return $false
    }
}

# Free music sources - you can add more URLs here
# These are example URLs - you'll need to find actual working links

# Option 1: Use your existing files as placeholders
Write-Host "`nUsing existing file1.mp3 and file2.mp3 as placeholders..." -ForegroundColor Cyan
if (Test-Path (Join-Path $assetsPath "file1.mp3")) {
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "happy_nations.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "midnight_dreams.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "ocean_waves.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "electric_pulse.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "mountain_high.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "sunset_boulevard.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "purple_rain.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "golden_hour.mp3") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $assetsPath "file1.mp3") (Join-Path $assetsPath "neon_lights.mp3") -ErrorAction SilentlyContinue
}

if (Test-Path (Join-Path $assetsPath "file2.mp3")) {
    Copy-Item (Join-Path $assetsPath "file2.mp3") (Join-Path $assetsPath "gal_sun.mp3") -ErrorAction SilentlyContinue
}

Write-Host "`nPlaceholder files created. Replace them with actual music files when ready." -ForegroundColor Green
Write-Host "`nTo download actual free music:" -ForegroundColor Cyan
Write-Host "1. Visit https://incompetech.com/music/royalty-free/" -ForegroundColor White
Write-Host "2. Visit https://pixabay.com/music/" -ForegroundColor White
Write-Host "3. Visit https://freemusicarchive.org/" -ForegroundColor White
Write-Host "4. Download tracks and rename them to match the required filenames" -ForegroundColor White

