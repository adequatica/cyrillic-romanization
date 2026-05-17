# Cyrillic Romanization

[![Run tests](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml/badge.svg?branch=main)](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml)

Convert Cyrillic characters to Latin characters (transliteration).

Default transliteration works according to **[ISO 9:1995](https://en.wikipedia.org/wiki/ISO_9)** regardless of the language.

However, ISO 9 is rarely used in practice because it has unusual diacritical letters. Thus:

- [Gaj's Latin alphabet transliteration](https://en.wikipedia.org/wiki/Gaj%27s_Latin_alphabet) is supported for the **Serbian, Macedonian, and Montenegrin** alphabets;
- The **Azerbaijani** transliteration uses the contemporary form of the grapheme [schwa](<https://en.wikipedia.org/wiki/Schwa_(letter)>) instead of A-[diaeresis](<https://en.wikipedia.org/wiki/Diaeresis_(diacritic)>) (1992);
- The _-ia_ exception at the end of a word is supported for **Bulgarian** transliteration;
- The **Kazakh** transliteration follows the [Decree of the President of the Republic of Kazakhstan dated October 26, 2017, No. 569](https://academy-gp.kz/?p=9661&lang=en), 2021 revision;
- The [MNS 5217:2012](https://fr.wikipedia.org/wiki/MNS_5217:2012) standard is supported for the **Mongolian** Cyrillic alphabet;
- For **Russian and Belarusian**, [GOST 7.79-2000 (B)](https://en.wikipedia.org/wiki/GOST_7.79-2000) is used;
- An additional [ALA-LC romanization](https://en.wikipedia.org/wiki/ALA-LC_romanization_for_Russian) system is supported for Russian;
- The **Turkmen** transliteration uses contemporary conventional letter symbols (1999);
- The **Ukrainian** Cyrillic alphabet is transliterated into Latin by the Ukrainian national system based on [BGN/PCGN 2019](https://en.wikipedia.org/wiki/BGN/PCGN_romanization);
- For **Uzbek** romanization, the [Latin-based alphabet](https://en.wikipedia.org/wiki/Uzbek_alphabet#Modern_Latin_alphabet) is used (proposed version from 2023).

Be aware that the presented romanization rules are unsuitable for the transliteration of geographic names.

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
3. `aze` — Azerbaijani language;
4. `bel` — Belarusian language;
5. `bul` — Bulgarian language;
6. `cnr` — Montenegrin language;
7. `kaz` — Kazakh language;
8. `mkd` — Macedonian language;
9. `mon` — Mongolian language;
10. `rus` — Russian language;
11. `srp` — Serbian language;
12. `tuk` — Turkmen language;
13. `ukr` — Ukrainian language;
14. `uzb` — Uzbek language.
