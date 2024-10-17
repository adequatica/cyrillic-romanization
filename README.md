# Cyrillic Romanization

[![Run tests](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml/badge.svg?branch=main)](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml)

Convert Cyrillic characters to Latin characters (transliteration).

Default transliteration works according to **[ISO 9:1995](https://en.wikipedia.org/wiki/ISO_9)**.

However, ISO 9 is rarely used because it has unusual diacritical letters. Thus:

- [Gaj's Latin alphabet transliteration](https://en.wikipedia.org/wiki/Gaj%27s_Latin_alphabet) is supported for **Serbian, Macedonian, and Montenegrin** alphabets;
- The _-ia_ exception at the end of the word is supported for **Bulgarian** transliteration;
- The **Kazakh** transliteration follows the [Decree of the President of the Republic of Kazakhstan dated October 26, 2017, No. 569](https://academy-gp.kz/?p=9661&lang=en), 2021 revision;
- [MNS 5217:2012](https://fr.wikipedia.org/wiki/MNS_5217:2012) standard is supported for the **Mongolian** Cyrillic alphabet;
- For **Russian and Belarusian** languages is used [GOST 7.79-2000 (B)](https://en.wikipedia.org/wiki/GOST_7.79-2000);
- Additional [ALA-LC romanization](https://en.wikipedia.org/wiki/ALA-LC_romanization_for_Russian) system for Russian;
- The **Ukrainian** Cyrillic alphabet is transliterated into Latin by the Ukrainian national system based on [BGN/PCGN 2019](https://en.wikipedia.org/wiki/BGN/PCGN_romanization);
- For **Uzbek** romanization is used [Latin-based alphabet](https://en.wikipedia.org/wiki/Uzbek_alphabet#Modern_Latin_alphabet) of the proposed version from 2023.

Be aware that the presented romanization rules are unsuitable for transliteration of geographic names.

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

#### Language parameter values

1. `iso9` — ISO 9, default (optional);
2. `alalc` — ALA-LC romanization for Russian;
3. `bel` — Belarusian language;
4. `bul` — Bulgarian language;
5. `cnr` — Montenegrin language;
6. `kaz` — Kazakh language;
7. `mkd` — Macedonian language;
8. `mon` — Mongolian language;
9. `rus` — Russian language;
10. `srp` — Serbian language;
11. `ukr` — Ukrainian language;
12. `uzb` — Uzbek language.
