# Cyrillic Romanization

[![Run tests](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml/badge.svg?branch=main)](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml)

Convert Cyrillic characters to Latin characters (transliteration).

Default transliteration works according to **[ISO 9:1995](https://en.wikipedia.org/wiki/ISO_9)**.

However, ISO 9 is rarely used because it has unusual diacritical letters. Thus:

- [Gaj's Latin alphabet transliteration](https://en.wikipedia.org/wiki/Gaj%27s_Latin_alphabet) is supported for **Serbian, Macedonian, and Montenegrin** alphabets;
- The _-ia_ exception at the end of the word is supported for **Bulgarian** transliteration;
- [MNS 5217:2012](https://fr.wikipedia.org/wiki/MNS_5217:2012) standard is supported for **Mongolian** Cyrillic alphabet;
- For **Russian and Belarusian** languages is used [GOST 7.79-2000 (B)](https://en.wikipedia.org/wiki/GOST_7.79-2000);
- The **Ukrainian** alphabet is transliterated into Latin by the Ukrainian National system ([BGN/PCGN 2019](https://en.wikipedia.org/wiki/BGN/PCGN_romanization)).

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

// Convert Russian into GOST 7.79-2000 System B
cyrillicToLatin(
  'Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства',
  'rus',
);
// => Shirokaya elektrifikaciya yuzhnyx gubernij dast moshhnyj tolchok podʺyomu selʹskogo xozyajstva
```

Language parameter values:

- `iso9` — ISO 9, default (optional);
- `bel` — Belarusian language;
- `bul` — Bulgarian language;
- `cnr` — Montenegrin language;
- `mkd` — Macedonian language;
- `mon` — Mongolian language;
- `rus` — Russian language;
- `srp` — Serbian language;
- `ukr` — Ukrainian language.
