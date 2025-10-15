# Homi Reference (Altegio/YClients UI)

Папки:
- **html/** – сохранённый DOM (.html)
- **har/** – сетевые логи (.har)
- **img/** – скриншоты (.png)
- **scc/** или **css/** – стили (.css)
- **fonts/** – шрифты (.woff2)
- **tokens/** – дизайн-токены (.json)

Скрипты:
- `npm run kb:build` — создаёт `kb/manifest.json`
- `npm run kb:coverage` — создаёт `kb/coverage.json` (покрытие ключевых экранов)

CI:
- `.github/workflows/kb-build.yml` — запускает сборку при любом изменении референсов.
