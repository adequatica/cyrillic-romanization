# Cyrillic Romanization

[![Run Tests](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml/badge.svg?branch=main)](https://github.com/adequatica/cyrillic-romanization/actions/workflows/run-tests.yaml)

Convert Cyrillic characters to Latin characters for Slavic languages.

Default transliteration works according to **[ISO 9:1995](https://en.wikipedia.org/wiki/ISO_9)**.

However, ISO 9 is rarely used because it has unusual diacritical letters. Thus, [local transliteration rules](https://en.wikipedia.org/wiki/Gaj%27s_Latin_alphabet) are supported for the **Serbian, Montenegrin, Macedonian and Bulgarian** alphabets.

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
cyrillicToLatin('Овај веб сајт користи колачиће', 'srb');
// => Ovaj veb sajt koristi kolačiće
```
