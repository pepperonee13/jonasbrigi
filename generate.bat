@echo off
REM Regenerate bringo-styles.css from tailwind.config.js + input.css
REM Requires tailwindcss.exe in the repo root (not committed, see .gitignore)
REM Download: https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-windows-x64.exe

if not exist tailwindcss.exe (
  echo ERROR: tailwindcss.exe not found in repo root.
  echo Download it from:
  echo   https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-windows-x64.exe
  echo Rename to tailwindcss.exe and place it here.
  exit /b 1
)

tailwindcss.exe --config tailwind.config.js --input input.css --output bringo-styles.css --minify
echo Done. Commit bringo-styles.css if it changed.
