import { mappingAlphabet } from './mapping.js';
export default function cyrillicToLatin(input, language) {
    let newString = '';
    if (language === 'bul') {
        input = input.replace(/ия(?=$|[\s.,])/gi, 'ia');
    }
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (language === 'bul') {
            newString += mappingAlphabet.bulgarian[char] || char;
        }
        else if (language === 'cnr') {
            newString += mappingAlphabet.montenegrin[char] || char;
        }
        else if (language === 'mkd') {
            newString += mappingAlphabet.macedonian[char] || char;
        }
        else if (language === 'mon') {
            newString += mappingAlphabet.mongolian[char] || char;
        }
        else if (language === 'rus') {
            newString += mappingAlphabet.russian[char] || char;
        }
        else if (language === 'srp') {
            newString += mappingAlphabet.serbian[char] || char;
        }
        else {
            newString += mappingAlphabet.iso9[char] || char;
        }
    }
    if (language === 'rus') {
        newString = newString.replace(/[C]z([ieyj])/gi, `C${'$1'}`);
        newString = newString.replace(/[c]z([ieyj])/gi, `c${'$1'}`);
    }
    return newString;
}
