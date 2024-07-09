import { mappingAlphabet } from './mapping.js';
export default function cyrillicToLatin(input, language) {
    let newString = '';
    if (language === 'bul') {
        input = input.replace(/ия(?=$|[\s.,])/gi, 'ia');
    }
    if (language === 'ukr') {
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
        input = input.replace(/Зг/g, 'Zgh');
        input = input.replace(/зг/g, 'zgh');
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
        else if (language === 'rus' || language === 'bel') {
            newString += mappingAlphabet.russian[char] || char;
        }
        else if (language === 'srp') {
            newString += mappingAlphabet.serbian[char] || char;
        }
        else if (language === 'ukr') {
            newString += mappingAlphabet.ukrainian[char] || char;
        }
        else {
            newString += mappingAlphabet.iso9[char] || char;
        }
    }
    if (language === 'rus' || language === 'bel') {
        newString = newString.replace(/[C]z([ieyj])/g, `C${'$1'}`);
        newString = newString.replace(/[c]z([ieyj])/g, `c${'$1'}`);
    }
    return newString;
}
