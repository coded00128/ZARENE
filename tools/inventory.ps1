Add-Type -AssemblyName System.Drawing
$dir = "assets/images"
$files = Get-ChildItem $dir -File | Sort-Object Name
$outDir = ".freebuff/sheets"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$perPage = 9
$pages = [math]::Ceiling($files.Count / $perPage)
for ($p = 0; $p -lt $pages; $p++) {
  $pageFiles = $files | Select-Object -Skip ($p * $perPage) -First $perPage
  $cells = ""
  foreach ($f in $pageFiles) {
    $bytes = [IO.File]::ReadAllBytes($f.FullName)
    $b64 = [Convert]::ToBase64String($bytes)
    $cells += "<div class='cell'><div class='lbl'>$($f.Name)</div><img src='data:image/jpeg;base64,$b64'></div>`n"
  }
  $html = @"
<!DOCTYPE html>
<html><head><meta charset='utf-8'><style>
body{margin:0;background:#111;font-family:Consolas,monospace;width:1100px}
.grid{display:grid;grid-template-columns:repeat(3,363px);gap:4px;padding:2px}
.cell{background:#fff;border:1px solid #444}
.lbl{background:#000;color:#0f0;font-size:16px;font-weight:bold;padding:2px 5px}
img{width:361px;height:345px;object-fit:contain;display:block;background:#fff}
</style></head><body><div class='grid'>
$cells</div></body></html>
"@
  $name = "sheet-{0:d2}.html" -f ($p + 1)
  [IO.File]::WriteAllText((Join-Path $outDir $name), $html)
}
"SHEETS: $pages pages for $($files.Count) images"
