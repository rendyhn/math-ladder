"""One-off: make style.css direction-aware and add per-language fonts."""
import pathlib

p = pathlib.Path(__file__).resolve().parent.parent / 'src' / 'style.css'
css = p.read_text(encoding='utf-8')
subs = [
    ("letter-spacing: 0.04em; margin-left: 4px; }", "letter-spacing: 0.04em; margin-inline-start: 4px; }"),
    ("overflow-y: auto; border-right: 1px solid var(--rule);", "overflow-y: auto; border-inline-end: 1px solid var(--rule);"),
    (".prose ul, .prose ol { padding-left: 1.3em; }", ".prose ul, .prose ol { padding-inline-start: 1.3em; padding-inline-end: 0; }"),
    (".level-topics { margin: 0 0 14px; padding-left: 1.4em;", ".level-topics { margin: 0 0 14px; padding-inline-start: 1.4em; padding-inline-end: 0;"),
    ("padding: 7px 10px; text-align: left; vertical-align: middle; }", "padding: 7px 10px; text-align: start; vertical-align: middle; }"),
    (".pager-next { text-align: right; }", ".pager-next { text-align: end; }"),
    (".ctrl-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-left: auto; }", ".ctrl-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-inline-start: auto; }"),
    (".key-sol { margin: 8px 0 0 40px;", ".key-sol { margin: 8px 0 0; margin-inline-start: 40px;"),
    ("  .ctrl-actions { margin-left: 0; width: 100%; }", "  .ctrl-actions { margin-inline-start: 0; width: 100%; }"),
    ("  .key-sol { margin-left: 0; }", "  .key-sol { margin-inline-start: 0; }"),
    ("  .pager { grid-template-columns: 1fr; } .pager-next { text-align: left; }", "  .pager { grid-template-columns: 1fr; } .pager-next { text-align: start; }"),
    ("  body.nav-open .sidebar { transform: none; }",
     "  [dir=\"rtl\"] .sidebar { left: auto; right: 0; transform: translateX(102%); }\n  body.nav-open .sidebar { transform: none; }"),
]
for old, new in subs:
    if css.count(old) != 1:
        raise SystemExit(f'expected exactly one match for: {old!r} (found {css.count(old)})')
    css = css.replace(old, new)

extra = """
/* ---------- languages: fonts, right-to-left, the language menu ---------- */
:root[lang^="zh"] { --f-body: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif; --f-display: var(--f-body); }
:root[lang="ja"] { --f-body: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', Meiryo, sans-serif; --f-display: var(--f-body); }
:root[lang="ko"] { --f-body: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; --f-display: var(--f-body); }
:root[lang="ar"] { --f-body: 'Noto Sans Arabic', 'Segoe UI', Tahoma, sans-serif; --f-display: var(--f-body); }
:root[lang="fa"] { --f-body: 'Vazirmatn', 'Segoe UI', Tahoma, sans-serif; --f-display: var(--f-body); }
:root[lang="ru"] { --f-body: 'Noto Sans', 'Segoe UI', system-ui, sans-serif; --f-display: var(--f-body); }
:root[lang="ar"] body *, :root[lang="fa"] body * { letter-spacing: normal !important; }   /* spacing breaks Arabic letter joining */
[dir="rtl"] .nav-topics a[aria-current="page"] { box-shadow: inset -3px 0 0 var(--lv), var(--shadow); }
mjx-container { direction: ltr; unicode-bidi: isolate; }
.lang-pick {
  margin-inline-start: auto; display: inline-flex; align-items: center; gap: 4px; height: 38px; padding-inline: 10px 4px;
  border: 1px solid var(--rule); border-radius: 8px; background: var(--paper); color: var(--ink-2);
}
.lang-pick svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.8; }
.lang-pick select { border: 0; background: transparent; padding: 6px 2px; font: 600 14px var(--f-body); color: var(--ink); max-width: 46vw; cursor: pointer; }
.lang-pick:focus-within { outline: 2px solid var(--accent); outline-offset: 2px; }
.lang-pick select:focus-visible { outline: none; }
"""
marker = '/* ---------- responsive ---------- */'
if css.count(marker) != 1:
    raise SystemExit('responsive marker not found')
css = css.replace(marker, extra.strip() + '\n\n' + marker)
p.write_text(css, encoding='utf-8')
print('style.css patched')
