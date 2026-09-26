Write-Output "=== serve.ps1 content check ==="
Get-Content "C:\Users\Administrator\OneDrive\Documents\Zarene\tools\serve.ps1" | Select-Object -First 6
Write-Output "=== listeners on 8931 ==="
Get-NetTCPConnection -LocalPort 8931 -ErrorAction SilentlyContinue | Format-Table LocalAddress,LocalPort,State,OwningProcess -AutoSize
Write-Output "=== listeners on 8734 ==="
Get-NetTCPConnection -LocalPort 8734 -ErrorAction SilentlyContinue | Format-Table LocalAddress,LocalPort,State,OwningProcess -AutoSize
Write-Output "=== HTTP response headers ==="
try {
  $r = Invoke-WebRequest -Uri 'http://localhost:8931/index.html' -UseBasicParsing
  Write-Output "Status: $($r.StatusCode)"
  Write-Output $r.Headers | Format-List | Out-String
} catch {
  Write-Output "ERR: $($_.Exception.Message)"
  if ($_.Exception.Response) {
    Write-Output "Server header: $($_.Exception.Response.Headers['Server'])"
  }
}
Write-Output "=== raw socket test ==="
$t = New-Object System.Net.Sockets.TcpClient
try { $t.Connect("127.0.0.1", 8931); Write-Output "127.0.0.1:8931 connectable" } catch { Write-Output "127.0.0.1:8931 REFUSED" }
$t.Close()
