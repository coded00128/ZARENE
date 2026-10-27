$ErrorActionPreference = "Stop"
$root = "C:\Users\Administrator\OneDrive\Documents\Zarene"
$port = 8931

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "serving on $port"

$mimeMap = @{
  ".html" = "text/html; charset=utf-8"; ".js" = "text/javascript"; ".css" = "text/css"
  ".jpg" = "image/jpeg"; ".jpeg" = "image/jpeg"; ".png" = "image/png"; ".webp" = "image/webp"
}

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $path = $ctx.Request.Url.AbsolutePath
    if ($path -eq "/") { $path = "/index.html" }
    $file = Join-Path $root ($path -replace "/", "\")
    if ((Test-Path $file -PathType Leaf) -and (-not $file.Contains(".."))) {
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $mime = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { "application/octet-stream" }
      $bytes = [IO.File]::ReadAllBytes($file)
      $ctx.Response.ContentType = $mime
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
      $msg = [Text.Encoding]::UTF8.GetBytes("404 not found: $path")
      $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $ctx.Response.OutputStream.Close()
  }
} finally {
  $listener.Stop()
}
