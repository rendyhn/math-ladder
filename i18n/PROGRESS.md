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
- `python tools/i18n.py check <code>` validates coverage, slots, $ parity, HTML tags. `status` shows a table.
- `python build.py` concatenates src/lang/<code>/*.js -> lang/<code>.js.

Languages: es zh fr de pt ru ar fa ja ko id

Pack files per language: 0-ui.js, 1-elementary-{a,b,c}.js, 2-junior-*.js, 3-senior-*.js, 4-university-*.js
(build.py concatenates them in name order). Units: ru/ar get local unit symbols via un() in core.js, so their
static text uses см, кг … / سم، كغ …; other languages keep SI symbols. Currency: es dólares, fr/de euros,
pt reais, ru долл., zh 元, ja ドル, ko 달러, ar/fa دولار/دلار, id ribu rupiah.
Number agreement: ru/ar avoid "N + noun" with generated N (use "noun: N", "шт.", "N من …").

| lang | ui+meta | lvl1 | lvl2 | lvl3 | lvl4 | checked |
|------|---------|------|------|------|------|---------|
| es   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| zh   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| fr   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| de   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| pt   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| ru   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| ar   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| fa   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| ja   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| ko   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
| id   | done    | done | done |      |      | lvl1+2 sweep ok, TeX ok |
