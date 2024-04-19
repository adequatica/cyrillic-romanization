# Cyrillic Romanization

[![Run tests](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml/badge.svg?branch=main)](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml)

Convert Cyrillic characters to Latin characters for Slavic languages.

Default transliteration works according to **[ISO 9:1995](https://en.wikipedia.org/wiki/ISO_9)**.

However, ISO 9 is rarely used because it has unusual diacritical letters. Thus, [Gaj's Latin alphabet transliteration](https://en.wikipedia.org/wiki/Gaj%27s_Latin_alphabet) is supported for **Serbian, Macedonian and Montenegrin** alphabets. Also, the _-ia_ exception at the end of the word for **Bulgarian** transliteration.

### Installation

```
npm install cyrillic-romanization
```

### Usage

```javascript
import cyrillicToLatin from 'cyrillic-romanization';

// ISO 9 by default
cyrillicToLatin('Ћирилица је изведена из грчког унцијала');
// => Ćirilica ǰe izvedena iz grčkog unciǰala

// Convert Serbian Cyrillic alphabet to Gaj's Latin alphabet
cyrillicToLatin('Овај веб сајт користи колачиће', 'srp');
// => Ovaj veb sajt koristi kolačiće
```

Language parameter values:

- `iso9` — ISO 9, default (optional);
- `bul` — Bulgarian lanuage;
- `cnr` — Montenegrin language;
- `mkd` — Macedonian language;
- `srp` — Serbian language.
