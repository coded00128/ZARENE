$ErrorActionPreference = "SilentlyContinue"
# Kill stale serve.ps1 instances by command line (http.sys listeners show as PID 4)
$stale = Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" | Where-Object { $_.CommandLine -match "serve\.ps1" }
foreach ($p in $stale) {
  Write-Output "Killing stale PID $($p.ProcessId): $($p.CommandLine)"
  Stop-Process -Id $p.ProcessId -Force
}
Start-Sleep -Seconds 1

# Start fresh server
Start-Process powershell -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-File',"C:\Users\Administrator\OneDrive\Documents\Zarene\tools\serve.ps1" -WindowStyle Hidden
Start-Sleep -Seconds 2

# Verify
try {
  $r1 = (Invoke-WebRequest -Uri 'http://localhost:8931/index.html' -UseBasicParsing).StatusCode
  $r2 = (Invoke-WebRequest -Uri 'http://localhost:8931/.freebuff/sheets/sheet-01.html' -UseBasicParsing).StatusCode
  Write-Output "OK index=$r1 sheet=$r2"
} catch {
  Write-Output "FAIL: $($_.Exception.Message)"
}
