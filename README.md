# Math Ladder

Lessons and practice worksheets from elementary school to university: 66 topics in 12 languages. Every worksheet is generated fresh when it opens, with an answer key and print-ready pages.

## Contents

| Level | Topics |
|---|---|
| Elementary | place value, the four operations, order of operations, factors and primes, fractions, decimals, percentages, measurement, perimeter, area and volume, angles and shapes, data and averages |
| Junior high | integers, exponents and roots, scientific notation, ratio and proportion, algebraic expressions, linear equations and inequalities, sets, linear functions, systems of equations, Pythagoras, circles, solids, statistics, probability, money maths, number patterns, transformations |
| Senior high | quadratics, functions, exponents and logarithms, sequences and series, trigonometry, polynomials, matrices, vectors, limits, derivatives, integrals, combinatorics, probability, statistics, coordinate geometry, linear programming, logic |
| University | differentiation and integration techniques and applications, series, multivariable calculus, differential equations, linear algebra, complex numbers, probability distributions, statistical inference, discrete mathematics, numerical methods, vector calculus, Laplace transforms |

Each topic has a lesson and a practice sheet. A sheet mixes multiple-choice and fill-in questions (or only one kind), checks the answers, and folds out worked solutions.

## Languages

English, Español, 中文（简体）, Français, Deutsch, Português, Русский, العربية, فارسی, 日本語, 한국어 and Bahasa Indonesia.

- Pick a language from the menu at the top of the page, or open the page with `?lang=<code>` (`en es zh fr de pt ru ar fa ja ko id`). The choice is remembered in the browser.
- Arabic and Persian are laid out right to left, on screen and in print.
- Numbers follow each language: decimal-comma languages (es, fr, de, pt, ru, id) write `2,5` and separate lists with `;`. Fill-in answers accept either format.
- Units are written in the local script for Russian and Arabic, and word problems use a local currency.
- Translations were produced with AI assistance and have not yet been reviewed by native speakers. Corrections are welcome.

## Running it

Open `index.html` in any modern browser, from disk or from a static host, with the `lang/` folder next to it. Formulas are rendered by MathJax from a CDN, so an internet connection is needed. Without `lang/` the site still works, in English only.

To save a lesson or worksheet as PDF, use its Print button and choose **Save as PDF**.

## Publishing on GitHub Pages

Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`. The site needs only `index.html`, `.nojekyll` and `lang/`. GitHub Pages on a private repository requires a paid plan.

## Development

The page is built from `src/`:

```
python build.py            # writes index.html and lang/<code>.js
python build.py --artifact # also writes dist/ (body-only page for a claude.ai Artifact)
```

Edit the source, run the build, commit `index.html` and `lang/` together with the source.

### Translations

English text in `src/*.js` is written as ``T`...` ``; each language pack in `src/lang/<code>/` maps a key to its translation. `tools/i18n.py` keeps them in step:

| Command | What it does |
|---|---|
| `python tools/i18n.py catalog` | Extracts every string to `i18n/catalog.json` and `i18n/catalog/*.txt` (the files translators work from) |
| `python tools/i18n.py status` | Coverage per language and level |
| `python tools/i18n.py check [code]` | Validates packs: missing keys, `⟦n⟧` slots, `$` pairs, HTML tags, number format. Must report 0 problems |
| `python tools/i18n.py missing <code> [file]` | Lists untranslated keys |

Pack rules: quote the keys, write values as ``R`...` `` (single backslashes in TeX, never `${`), and keep every `⟦n⟧` slot and HTML tag of the English source. In decimal-comma languages write decimals inside `$…$` as `2{,}5`. See `i18n/PROGRESS.md` for conventions per language.

To add a language: add its code to `LANGS` in `tools/i18n.py` and to `LANGS` and `LANG_CONF` in `src/core.js`, copy an existing `src/lang/<code>/` folder, translate, and run `check`.

## Files

| Path | What it is |
|---|---|
| `index.html` | The app, built from `src/`. English is built in; other languages load from `lang/`. |
| `lang/<code>.js` | Built language packs. |
| `.nojekyll` | Makes GitHub Pages serve the files as they are. |
| `src/lvl1-elementary.js` … `src/lvl4-university.js` | Lessons and question generators for the four levels. |
| `src/core.js` | Random numbers, fraction and formula formatting, the translation system, number formats per language. |
| `src/app.js` | Navigation, worksheets, answer checking, answer key, printing, language menu. |
| `src/style.css`, `src/head.html`, `src/body.html` | Styles (light/dark, print, right-to-left) and page skeleton. |
| `src/lang/<code>/` | Translation sources: `0-ui.js` (interface and topic titles), then one or more files per level. |
| `i18n/` | String catalogue for translators and `PROGRESS.md`. |
| `tools/i18n.py` | Catalogue and translation checker. |
| `build.py` | Build script. |

---

© 2026 @rendyhn
