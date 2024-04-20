import { mappingAlphabet } from 'mapping';

export default function cyrillicToLatin(
  input: string,
  // Code names of languages according to ISO 639-2:1998
  language?: 'bul' | 'cnr' | 'mkd' | 'mon' | 'srp' | 'iso9',
): string {
  let newString = '';

  // Bulgarian exception according to https://bg.wikisource.org/wiki/Закон_за_транслитерацията
  // The letter combination "-ия" at the end of a word is spelled and transliterated by "-ia"
  if (language === 'bul') {
    // It's impossible to use simple regexp (/ия\b/gi, 'ia'),
    // because word boundary \b doesn't work for non-latin alphabets
    input = input.replace(/ия(?=$|[\s.,])/gi, 'ia');
  }

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (language === 'bul') {
      // "-ия" exception was replaced with "-ia" in the previous condition;
      // thus, Latin characters are not affected by this transformation
      newString += mappingAlphabet.bulgarian[char] || char;
    } else if (language === 'cnr') {
      newString += mappingAlphabet.montenegrin[char] || char;
    } else if (language === 'mkd') {
      newString += mappingAlphabet.macedonian[char] || char;
    } else if (language === 'mon') {
      newString += mappingAlphabet.mongolian[char] || char;
    } else if (language === 'srp') {
      newString += mappingAlphabet.serbian[char] || char;
    } else {
      newString += mappingAlphabet.iso9[char] || char;
    }
  }

  return newString;
}
