"""One-off conversion of the level files for translation.
   - lesson: T`...`            -> lesson: () => T`...`   (evaluated in the current language)
   - prose string literals     -> T`...`
   - untagged prose templates  -> T`...` (with \\ un-escaped, since T is raw)
   Meta fields (id/title/blurb/name/short/band/color) and object keys are left alone.
"""
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from i18n import SRC, skip_string, parse_template, skip_expr  # noqa: E402

SKIP_PROP = re.compile(r'\b(id|title|blurb|name|short|band|color|only|kind|type|mode)\s*:\s*$')


def unescape_js(s):
    return re.sub(r'\\(u[0-9a-fA-F]{4}|.)', lambda m: chr(int(m.group(1)[1:], 16)) if m.group(1)[0] == 'u' and len(m.group(1)) == 5
                  else {'n': '\n', 't': '\t'}.get(m.group(1), m.group(1)), s)


def is_prose(text):
    plain = re.sub(r'\$[^$]*\$|\\[A-Za-z]+|<[^>]+>|\$\{[^}]*\}|&\w+;', ' ', text)
    if re.search(r'\\text\{[^}]*[A-Za-z]{2,}', text):
        return True
    words = re.findall(r'[A-Za-z]{2,}', plain)
    if not words:
        return False
    if ' ' in plain.strip() and any(len(w) >= 3 for w in words):
        return True
    return bool(re.match(r'^[A-Z][a-z]{2,}', plain.strip()))


def convert(src):
    out, i, n = [], 0, len(src)
    stats = {'lesson': 0, 'string': 0, 'template': 0}

    def walk(a, b):
        """Emit src[a:b] converted; returns converted text."""
        res, i = [], a
        while i < b:
            c = src[i]
            if c in '\'"':
                j = skip_string(src, i)
                lit = src[i + 1:j - 1]
                before = src[max(0, i - 40):i]
                after = src[j:j + 3]
                val = unescape_js(lit)
                is_key = re.match(r'\s*:', after) and re.search(r'[{,]\s*$', before)
                if (is_prose(val) and not SKIP_PROP.search(before) and not is_key
                        and '`' not in val and '${' not in val):
                    res.append('T`' + val + '`')
                    stats['string'] += 1
                else:
                    res.append(src[i:j])
                i = j
            elif c == '/' and src[i + 1] == '/':
                j = src.index('\n', i)
                res.append(src[i:j])
                i = j
            elif c == '/' and src[i + 1] == '*':
                j = src.index('*/', i) + 2
                res.append(src[i:j])
                i = j
            elif c == '`':
                tagged = src[i - 1] == 'T' and not (src[i - 2].isalnum() or src[i - 2] in '_$')
                j, chunks, exprs = parse_template(src, i)
                static = ''.join(chunks)
                convert_this = not tagged and is_prose(unescape_js(static)) and '\\`' not in static
                if tagged and re.search(r'\blesson:\s*T$', src[max(0, i - 20):i]):
                    res[-1] = res[-1][:-1] if res and res[-1].endswith('T') else res[-1]
                    res.append('() => T')
                    stats['lesson'] += 1
                if convert_this:
                    res.append('T')
                    stats['template'] += 1
                # rebuild the template with converted expressions
                res.append('`')
                k = i + 1
                for ci, chunk in enumerate(chunks):
                    res.append(unescape_js(chunk) if convert_this else chunk)
                    if ci < len(exprs):
                        ea, eb = exprs[ci]
                        res.append('${' + walk(ea, eb) + '}')
                res.append('`')
                i = j
            else:
                res.append(c)
                i += 1
        return ''.join(res)

    return walk(0, n), stats


if __name__ == '__main__':
    for name in ['lvl1-elementary.js', 'lvl2-junior.js', 'lvl3-senior.js', 'lvl4-university.js']:
        p = SRC / name
        src = p.read_text(encoding='utf-8').replace('\r\n', '\n')
        new, stats = convert(src)
        if '--write' in sys.argv:
            p.write_text(new, encoding='utf-8')
        print(name, stats)
