import { mappingAlphabet } from './mapping.js';
export default function cyrillicToLatin(input, language) {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (language === 'srb') {
            newString += mappingAlphabet.serbian[char] || char;
        }
        else if (language === 'cnr') {
            newString += mappingAlphabet.montenegrin[char] || char;
        }
        else if (language === 'mkd') {
            newString += mappingAlphabet.macedonian[char] || char;
        }
        else if (language === 'bul') {
            newString += mappingAlphabet.bulgarian[char] || char;
        }
        else {
            newString += mappingAlphabet.iso9[char] || char;
        }
    }
    return newString;
}
