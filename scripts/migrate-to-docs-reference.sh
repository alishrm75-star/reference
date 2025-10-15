#!/usr/bin/env bash
set -euo pipefail

# Канонические каталоги
ROOT="docs/reference"
mkdir -p "$ROOT"/{html,har,img,css,fonts,tokens}

# Хелперы
to_safe() {  # латиница, нижний регистр, безопасные символы
  iconv -f utf-8 -t ascii//TRANSLIT <<<"$1" 2>/dev/null | tr '[:upper:] ' '[:lower:]_' | sed 's/[^a-z0-9._/-]/_/g'
}
move_file() {
  src="$1"; dst="$2"
  mkdir -p "$(dirname "$dst")"
  if git mv -k "$src" "$dst" 2>/dev/null; then :; else cp -f "$src" "$dst"; git rm -f "$src" >/dev/null; fi
}

# 1) HTML → docs/reference/html
while IFS= read -r f; do
  base="$(basename "${f%.*}").html"
  base="$(to_safe "$base")"
  move_file "$f" "$ROOT/html/$base"
done < <(git ls-files '*.html' '*.htm' ':!docs/reference/**' 2>/dev/null)

# 2) HAR → docs/reference/har
while IFS= read -r f; do
  base="$(basename "${f%.*}").har"
  base="$(to_safe "$base")"
  move_file "$f" "$ROOT/har/$base"
done < <(git ls-files '*.har' '*.HAR' ':!docs/reference/**' 2>/dev/null)

# 3) Картинки → docs/reference/img
while IFS= read -r f; do
  name="$(to_safe "$(basename "$f")")"
  move_file "$f" "$ROOT/img/$name"
done < <(git ls-files '*.png' '*.jpg' '*.jpeg' '*.svg' ':!docs/reference/**' 2>/dev/null)

# 4) CSS → docs/reference/css
while IFS= read -r f; do
  name="$(to_safe "$(basename "$f")")"
  move_file "$f" "$ROOT/css/$name"
done < <(git ls-files '*.css' ':!docs/reference/**' 2>/dev/null)

# 5) Шрифты → docs/reference/fonts
while IFS= read -r f; do
  name="$(to_safe "$(basename "$f")")"
  move_file "$f" "$ROOT/fonts/$name"
done < <(git ls-files '*.woff' '*.woff2' ':!docs/reference/**' 2>/dev/null)

# 6) Токены → docs/reference/tokens
while IFS= read -r f; do
  name="$(to_safe "$(basename "$f")")"
  move_file "$f" "$ROOT/tokens/$name"
done < <(git ls-files 'tokens.json' '*tokens*.json' 'colors.json' 'spacing.json' 'typography.json' 'radius.json' ':!docs/reference/**' 2>/dev/null)

# 7) Удаляем пустые папки
find . -type d -empty -not -path "./.git*" -not -path "." -delete || true

echo "✓ Репозиторий приведён к структуре docs/reference/{html,har,img,css,fonts,tokens}"
