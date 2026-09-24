# Translation progress

How it works (see also src/core.js "i18n" section and tools/i18n.py):
- English prose in src/*.js is written as T`...`. `python tools/i18n.py catalog` extracts every
  template to i18n/catalog.json and readable i18n/catalog/<file>.txt (`@key` line, then the English).
- Slots `⟦0⟧, ⟦1⟧…` are values inserted by the code (numbers, formulas, words). Keep every slot.
- Packs live in src/lang/<code>/:
    0-ui.js          addUI('<code>', {...}) + addMeta('<code>', { levels: {...}, topics: {...} })
    1-elementary.js  addT('<code>', { key: R`...`, ... })   (catalog/lvl1-elementary.txt + core.txt)
    2-junior.js      addT(...)  (catalog/lvl2-junior.txt)
    3-senior.js      addT(...)  (catalog/lvl3-senior.txt)
    4-university.js  addT(...)  (catalog/lvl4-university.txt)
- Values are R`...` raw templates: write TeX with single backslashes, never use ${...} or backticks.
- Decimal-comma languages (es fr de pt ru id): write decimals inside $...$ as 2{,}5 and in text as 2,5;
  lists of numbers separated by ";" ; thousands with a thin space (\, in TeX).
- `python tools/i18n.py check <code>` validates coverage, slots, $ parity, HTML tags. `status` shows a table;
  `missing <code> [file]` lists untranslated keys.
- `python build.py` concatenates src/lang/<code>/*.js -> lang/<code>.js.

Languages: es zh fr de pt ru ar fa ja ko id

Pack files per language: 0-ui.js, 1-elementary-{a,b,c}.js, 2-junior-*.js, 3-senior-*.js, 4-university-*.js,
5-ladder.js (addUI for the ladder labels + addT for the reasons in src/ladder.js, catalog/ladder.txt)
(build.py concatenates them in name order). Units: ru/ar get local unit symbols via un() in core.js, so their
static text uses см, кг … / سم، كغ …; other languages keep SI symbols. Currency: es dólares, fr/de euros,
pt reais, ru долл., zh 元, ja ドル, ko 달러, ar/fa دولار/دلار, id ribu rupiah.
Number agreement: ru/ar avoid "N + noun" with generated N (use "noun: N", "шт.", "N من …").

| lang | ui+meta | lvl1 | lvl2 | lvl3 | lvl4 | checked |
|------|---------|------|------|------|------|---------|
| es   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| zh   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| fr   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| de   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| pt   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| ru   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| ar   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| fa   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| ja   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| ko   | done    | done | done | done | done | all levels swept, TeX ok, print ok |
| id   | done    | done | done | done | done | all levels swept, TeX ok, print ok |

Status (2026-09): every language is complete (0 missing, 0 problems). Browser sweep of all generators
(senior + university 10 runs each, elementary + junior 4 runs each, every language): no runtime errors,
no leftover slots, no MathJax TeX errors, fill-in answers accepted in local number format. Print view
checked for ar/fa (RTL) and zh/ja (CJK): direction, watermark and maths render correctly.
Translations are AI-made and have not been reviewed by native speakers.
