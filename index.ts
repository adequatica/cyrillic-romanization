import { mappingAlphabet } from 'mapping';

export default function cyrillicToLatin(
  input: string,
  // Code names of languages according to ISO 639-2:1998
  language?:
    | 'iso9'
    | 'bel'
    | 'bul'
    | 'cnr'
    | 'kaz'
    | 'mkd'
    | 'mon'
    | 'rus'
    | 'srp'
    | 'ukr',
): string {
  let newString = '';

  // Bulgarian exception according to https://bg.wikisource.org/wiki/Закон_за_транслитерацията
  // The letter combination "-ия" at the end of a word is spelled and transliterated by "-ia"
  if (language === 'bul') {
    // It's impossible to use simple regexp (/ия\b/gi, 'ia'),
    // because word boundary \b doesn't work for non-latin alphabets
    input = input.replace(/ия(?=$|[\s.,])/gi, 'ia');
  }

  // Ukrainian exceptions according to https://czo.gov.ua/en/translit
  if (language === 'ukr') {
    // Є, Ї, Й, Ю and Я at the beginning of words are used as "Ye", "Yi", "Y", "Yu" and "Ya"
    input = input.replace(/(?<!\S)Є/g, 'Ye');
    input = input.replace(/(?<!\S)є/g, 'ye');
    input = input.replace(/(?<!\S)Ї/g, 'Yi');
    input = input.replace(/(?<!\S)i/g, 'yi');
    input = input.replace(/(?<!\S)Й/g, 'Y');
    input = input.replace(/(?<!\S)й/g, 'y');
    input = input.replace(/(?<!\S)Ю/g, 'Yu');
    input = input.replace(/(?<!\S)ю/g, 'yu');
    input = input.replace(/(?<!\S)Я/g, 'Ya');
    input = input.replace(/(?<!\S)я/g, 'ya');

    // The letter combination "-зг" is reproduced in Latin as "-zgh" in contrast to "zh" - the counterpart of the letter "ж"
    input = input.replace(/Зг/g, 'Zgh');
    input = input.replace(/зг/g, 'zgh');
  }

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (language === 'bul') {
      // "-ия" exception was replaced with "-ia" in the previous condition;
      // thus, Latin characters are not affected by this transformation
      newString += mappingAlphabet.bulgarian[char] || char;
    } else if (language === 'cnr') {
      newString += mappingAlphabet.montenegrin[char] || char;
    } else if (language === 'kaz') {
      newString += mappingAlphabet.kazakh[char] || char;
    } else if (language === 'mkd') {
      newString += mappingAlphabet.macedonian[char] || char;
    } else if (language === 'mon') {
      newString += mappingAlphabet.mongolian[char] || char;
    } else if (language === 'rus' || language === 'bel') {
      newString += mappingAlphabet.russian[char] || char;
    } else if (language === 'srp') {
      newString += mappingAlphabet.serbian[char] || char;
    } else if (language === 'ukr') {
      newString += mappingAlphabet.ukrainian[char] || char;
    } else {
      newString += mappingAlphabet.iso9[char] || char;
    }
  }

  if (language === 'rus' || language === 'bel') {
    // GOST recommends to use C before the letters I, E, Y and J
    newString = newString.replace(/[C]z([ieyj])/g, `C${'$1'}`);
    newString = newString.replace(/[c]z([ieyj])/g, `c${'$1'}`);
  }

  return newString;
}
