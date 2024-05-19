# requires cwebp to be in path
Get-ChildItem -Path 'assets\images' -Include *.png -Recurse -File | ForEach-Object -parallel {
    $OutPath = Join-Path $_.Directory "$($_.BaseName).webp"
    cwebp -mt -lossless -z 9 -alpha_q 100 "$($_.FullName)" -o "$OutPath"
}