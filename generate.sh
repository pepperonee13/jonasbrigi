#!/usr/bin/env sh
# Regenerate bringo-styles.css from tailwind.config.js + input.css
# Requires ./tailwindcss binary in the repo root (not committed, see .gitignore)
# Download: https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-linux-x64
# Then: mv tailwindcss-linux-x64 tailwindcss && chmod +x tailwindcss

set -e

if [ ! -f ./tailwindcss ]; then
  echo "ERROR: ./tailwindcss not found in repo root."
  echo "Download it from:"
  echo "  https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-linux-x64"
  echo "Then: mv tailwindcss-linux-x64 tailwindcss && chmod +x tailwindcss"
  exit 1
fi

./tailwindcss --config tailwind.config.js --input input.css --output bringo-styles.css --minify
echo "Done. Commit bringo-styles.css if it changed."
