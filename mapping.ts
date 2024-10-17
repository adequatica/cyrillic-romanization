interface Alphabet {
  [key: string]: { [key: string]: string };
}

export const mappingAlphabet: Alphabet = {
  // https://en.wikipedia.org/wiki/ISO_9
  iso9: {
    А: 'A',
    а: 'a',
    Ӓ: 'Ä',
    ӓ: 'ä',
    Ӓ̄: 'Ạ̈',
    ӓ̄: 'ạ̈',
    Ӑ: 'Ă',
    ӑ: 'ă',
    А̄: 'Ā',
    а̄: 'ā',
    Ӕ: 'Æ',
    ӕ: 'æ',
    А́: 'Á',
    а́: 'á',
    А̊: 'Å',
    а̊: 'å',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Ґ: 'G̀',
    ґ: 'g̀',
    Ѓ: 'Ǵ',
    ѓ: 'ǵ',
    Ғ: 'Ġ',
    ғ: 'ġ',
    Ҕ: 'Ğ',
    ҕ: 'ğ',
    Һ: 'Ḥ',
    һ: 'ḥ',
    Д: 'D',
    д: 'd',
    Ђ: 'Đ',
    ђ: 'đ',
    Е: 'E',
    е: 'e',
    Ӗ: 'Ĕ',
    ӗ: 'ĕ',
    Ё: 'Ë',
    ё: 'ë',
    Є: 'Ê',
    є: 'ê',
    Ж: 'Ž',
    ж: 'ž',
    // For latin characters with variants of cedilla and comma below, cedalla is used by default
    // according to https://www.unicode.org/L2/L2013/13155-cedilla-comma.pdf
    Җ: 'Ž̧',
    җ: 'ž̧',
    Ӝ: 'Z̄',
    ӝ: 'z̄',
    Ӂ: 'Z̆',
    ӂ: 'z̆',
    З: 'Z',
    з: 'z',
    Ӟ: 'Z̈',
    ӟ: 'z̈',
    Ӡ: 'Ź',
    ӡ: 'ź',
    Ѕ: 'Ẑ',
    ѕ: 'ẑ',
    И: 'I',
    и: 'i',
    Ӣ: 'Ī',
    ӣ: 'ī',
    И́: 'Í',
    и́: 'í',
    Ӥ: 'Î',
    ӥ: 'î',
    Й: 'J',
    й: 'j',
    І: 'Ì',
    і: 'ì',
    Ї: 'Ï',
    ї: 'ï',
    І̄: 'Ǐ',
    і̄: 'ǐ',
    Ј: 'J̌',
    ј: 'ǰ',
    Ј̵: 'J́',
    ј̵: 'j́',
    К: 'K',
    к: 'k',
    Ќ: 'Ḱ',
    ќ: 'ḱ',
    Ӄ: 'Ḳ',
    ӄ: 'ḳ',
    Ҝ: 'K̂',
    ҝ: 'k̂',
    Ҡ: 'Ǩ',
    ҡ: 'ǩ',
    Ҟ: 'K̄',
    ҟ: 'k̄',
    Қ: 'Ķ',
    қ: 'ķ',
    К̨: 'K̀',
    к̨: 'k̀',
    Ԛ: 'Q',
    ԛ: 'q',
    Л: 'L',
    л: 'l',
    Љ: 'L̂',
    љ: 'l̂',
    Ԡ: 'Ļ',
    ԡ: 'ļ',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    Њ: 'N̂',
    њ: 'n̂',
    Ң: 'Ņ',
    ң: 'ņ',
    Ӊ: 'Ṇ',
    ӊ: 'ṇ',
    Ҥ: 'Ṅ',
    ҥ: 'ṅ',
    Ԋ: 'Ǹ',
    ԋ: 'ǹ',
    Ԣ: 'Ń',
    ԣ: 'ń',
    Ӈ: 'Ň',
    ӈ: 'ň',
    Н̄: 'N̄',
    н̄: 'n̄',
    О: 'O',
    о: 'o',
    Ӧ: 'Ö',
    ӧ: 'ö',
    Ө: 'Ô',
    ө: 'ô',
    Ӫ: 'Ő',
    ӫ: 'ő',
    Ӧ̄: 'Ọ̈',
    о̄̈: 'ọ̈',
    Ҩ: 'Ò',
    ҩ: 'ò',
    О́: 'Ó',
    о́: 'ó',
    О̄: 'Ō',
    о̄: 'ō',
    Œ: 'Œ',
    œ: 'œ',
    П: 'P',
    п: 'p',
    Ҧ: 'Ṕ',
    ҧ: 'ṕ',
    Ԥ: 'P̀',
    ԥ: 'p̀',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Ҫ: 'Ş',
    ҫ: 'ş',
    С̀: 'S̀',
    с̀: 's̀',
    Т: 'T',
    т: 't',
    Ћ: 'Ć',
    ћ: 'ć',
    Ԏ: 'T̀',
    ԏ: 't̀',
    Т̌: 'Ť',
    т̌: 'ť',
    Ҭ: 'Ţ',
    ҭ: 'ţ',
    У: 'U',
    у: 'u',
    Ӱ: 'Ü',
    ӱ: 'ü',
    Ӯ: 'Ū',
    ӯ: 'ū',
    Ў: 'Ŭ',
    ў: 'ŭ',
    Ӳ: 'Ű',
    ӳ: 'ű',
    У́: 'Ú',
    у́: 'ú',
    Ӱ̄: 'Ụ̈',
    ӱ̄: 'ụ̈',
    Ү: 'Ù',
    ү: 'ù',
    Ұ: 'U̇',
    ұ: 'u̇',
    Ԝ: 'W',
    ԝ: 'w',
    Ф: 'F',
    ф: 'f',
    Х: 'H',
    х: 'h',
    Ҳ: 'Ḩ',
    ҳ: 'ḩ',
    Ц: 'C',
    ц: 'c',
    Ҵ: 'C̄',
    ҵ: 'c̄',
    Џ: 'D̂',
    џ: 'd̂',
    Ч: 'Č',
    ч: 'č',
    Ҷ: 'Ç',
    ҷ: 'ç',
    Ӌ: 'C̣',
    ӌ: 'c̣',
    Ӵ: 'C̈',
    ӵ: 'c̈',
    Ҹ: 'Ĉ',
    ҹ: 'ĉ',
    Ч̀: 'C̀',
    ч̀: 'c̀',
    Ҽ: 'C̆',
    ҽ: 'c̆',
    Ҿ: 'C̨̆',
    ҿ: 'c̨̆',
    Ш: 'Š',
    ш: 'š',
    Щ: 'Ŝ',
    щ: 'ŝ',
    Ъ: 'ʺ',
    ъ: 'ʺ',
    Ы: 'Y',
    ы: 'y',
    Ӹ: 'Ÿ',
    ӹ: 'ÿ',
    Ы̄: 'Ȳ',
    ы̄: 'ȳ',
    Ь: 'ʹ',
    ь: 'ʹ',
    Э: 'È',
    э: 'è',
    Ә: 'A̋',
    ә: 'a̋',
    Ӛ: 'À',
    ӛ: 'à',
    Ю: 'Û',
    ю: 'û',
    Ю̄: 'Û̄',
    ю̄: 'û̄',
    Я: 'Â',
    я: 'â',
    Ѣ: 'Ě',
    ѣ: 'ě',
    Ѫ: 'Ǎ',
    ѫ: 'ǎ',
    Ѳ: 'F̀',
    ѳ: 'f̀',
    Ѵ: 'Ỳ',
    ѵ: 'ỳ',
    Ӏ: '‡',
  },
  // https://en.wikipedia.org/wiki/ALA-LC_romanization_for_Russian
  alalc: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Е: 'E',
    е: 'e',
    Ё: 'Ë',
    ё: 'ë',
    Ж: 'Zh',
    ж: 'zh',
    З: 'Z',
    з: 'z',
    И: 'I',
    и: 'i',
    Й: 'Ĭ',
    й: 'ĭ',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'Kh',
    х: 'kh',
    Ц: 'T͡S',
    ц: 't͡s',
    Ч: 'Ch',
    ч: 'ch',
    Ш: 'Sh',
    ш: 'sh',
    Щ: 'Shh',
    щ: 'shh',
    Ъ: 'ʺ',
    ъ: 'ʺ',
    Ы: 'Y',
    ы: 'y',
    Ь: 'ʹ',
    ь: 'ʹ',
    Э: 'Ė',
    э: 'ė',
    Ю: 'I͡U',
    ю: 'i͡u',
    Я: 'I͡A',
    я: 'i͡a',
    // Letters eliminated in the orthographic reform of 1918
    І: 'І̄',
    і: 'ī',
    Ѣ: 'I͡E',
    ѣ: 'i͡e',
    Ѳ: 'Ḟ',
    ѳ: 'ḟ',
    Ѵ: 'Ẏ',
    ѵ: 'ẏ',
  },
  // https://en.wikipedia.org/wiki/Bulgarian_alphabet
  // https://en.wikipedia.org/wiki/Romanization_of_Bulgarian
  bulgarian: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Е: 'E',
    е: 'e',
    Ж: 'Zh',
    ж: 'zh',
    З: 'Z',
    з: 'z',
    И: 'I',
    и: 'i',
    Ѝ: 'I',
    ѝ: 'i',
    Й: 'Y',
    й: 'y',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'H',
    х: 'h',
    Ц: 'Ts',
    ц: 'ts',
    Ч: 'Ch',
    ч: 'ch',
    Ш: 'Sh',
    ш: 'sh',
    Щ: 'Sht',
    щ: 'sht',
    Ъ: 'A',
    ъ: 'a',
    Ь: 'Y',
    ь: 'y',
    Ю: 'Yu',
    ю: 'yu',
    Я: 'Ya',
    я: 'ya',
  },
  // https://en.wikipedia.org/wiki/Kazakh_alphabets#Latin_script
  kazakh: {
    А: 'A',
    а: 'a',
    Ә: 'Ä',
    ә: 'ä',
    Б: 'B',
    б: 'b',
    Д: 'D',
    д: 'd',
    Е: 'E',
    е: 'e',
    Ф: 'F',
    ф: 'f',
    Г: 'G',
    г: 'g',
    Ғ: 'Ğ',
    ғ: 'ğ',
    Х: 'H',
    х: 'h',
    Һ: 'H',
    һ: 'h',
    I: 'I',
    ı: 'i',
    İ: 'I',
    і: 'ı',
    Ж: 'J',
    ж: 'j',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    Ң: 'Ñ',
    ң: 'ñ',
    О: 'O',
    о: 'o',
    Ө: 'Ö',
    ө: 'ö',
    П: 'P',
    п: 'p',
    Қ: 'Q',
    қ: 'q',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Ш: 'Ş',
    ш: 'ş',
    Т: 'T',
    т: 't',
    У: 'U',
    у: 'u',
    Ұ: 'Ū',
    ұ: 'ū',
    Ү: 'Ü',
    ү: 'ü',
    В: 'V',
    в: 'v',
    Ы: 'Y',
    ы: 'y',
    З: 'Z',
    з: 'z',
  },
  // https://en.wikipedia.org/wiki/Macedonian_alphabet
  // https://en.wikipedia.org/wiki/Romanization_of_Macedonian
  macedonian: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Ѓ: 'Gj',
    ѓ: 'gj',
    Е: 'E',
    е: 'e',
    Ж: 'Zh',
    ж: 'zh',
    З: 'Z',
    з: 'z',
    Ѕ: 'Dz',
    ѕ: 'dz',
    И: 'I',
    и: 'i',
    Ј: 'J',
    ј: 'j',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    Љ: 'Lj',
    љ: 'lj',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    Њ: 'Nj',
    њ: 'nj',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    Ќ: 'Kj',
    ќ: 'kj',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'H',
    х: 'h',
    Ц: 'C',
    ц: 'c',
    Ч: 'Ch',
    ч: 'ch',
    Џ: 'Dzh',
    џ: 'dzh',
    Ш: 'Sh',
    ш: 'sh',
  },
  // https://en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet
  mongolian: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Е: 'Ye',
    е: 'ye',
    Ё: 'Yo',
    ё: 'yo',
    Ж: 'J',
    ж: 'j',
    З: 'Z',
    з: 'z',
    И: 'I',
    и: 'i',
    Й: 'I',
    й: 'i',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    О: 'O',
    о: 'o',
    Ө: 'Ö',
    ө: 'ö',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    У: 'U',
    у: 'u',
    Ү: 'Ü',
    ү: 'ü',
    Ф: 'F',
    ф: 'f',
    Х: 'Kh',
    х: 'kh',
    Ц: 'Ts',
    ц: 'ts',
    Ч: 'Ch',
    ч: 'ch',
    Ш: 'Sh',
    ш: 'sh',
    Щ: 'Sh',
    щ: 'sh',
    Ъ: 'I',
    ъ: 'i',
    Ы: 'Y',
    ы: 'y',
    Ь: 'I',
    ь: 'i',
    Э: 'E',
    э: 'e',
    Ю: 'Yu',
    ю: 'yu',
    Я: 'Ya',
    я: 'ya',
  },
  // https://en.wikipedia.org/wiki/Montenegrin_alphabet
  montenegrin: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Ђ: 'Đ',
    ђ: 'đ',
    Е: 'E',
    е: 'e',
    Ж: 'Ž',
    ж: 'ž',
    З: 'Z',
    з: 'z',
    З́: 'Ź', // Additional letters for Montenegrin language,
    з́: 'ź', // but both are abolished since 2017 https://volimpodgoricu.me/novosti/podgorica-brajovic-ukinuo-s-i-z-2
    И: 'I',
    и: 'i',
    Ј: 'J',
    ј: 'j',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    Љ: 'Lj',
    љ: 'lj',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    Њ: 'Nj',
    њ: 'nj',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    С́: 'Ś', // Additional letters for Montenegrin language,
    с́: 'ś', // but both are abolished since 2017 https://volimpodgoricu.me/novosti/podgorica-brajovic-ukinuo-s-i-z-2
    Т: 'T',
    т: 't',
    Ћ: 'Ć',
    ћ: 'ć',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'H',
    х: 'h',
    Ц: 'C',
    ц: 'c',
    Ч: 'Č',
    ч: 'č',
    Џ: 'Dž',
    џ: 'dž',
    Ш: 'Š',
    ш: 'š',
  },
  // https://en.wikipedia.org/wiki/Romanization_of_Russian
  // https://en.wikipedia.org/wiki/Romanization_of_Belarusian
  // https://en.wikipedia.org/wiki/GOST_7.79-2000
  russian: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Е: 'E',
    е: 'e',
    Ё: 'Yo',
    ё: 'yo',
    Ж: 'Zh',
    ж: 'zh',
    З: 'Z',
    з: 'z',
    И: 'I',
    и: 'i',
    Й: 'J',
    й: 'j',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'X',
    х: 'x',
    Ц: 'Cz', // GOST recommends to use C before the letters I, E, Y and J
    ц: 'cz',
    Ч: 'Ch',
    ч: 'ch',
    Ш: 'Sh',
    ш: 'sh',
    Щ: 'Shh',
    щ: 'shh',
    Ъ: 'ʺ',
    ъ: 'ʺ',
    Ы: 'Y',
    ы: 'y',
    Ь: 'ʹ',
    ь: 'ʹ',
    Э: 'E',
    э: 'e',
    Ю: 'Yu',
    ю: 'yu',
    Я: 'Ya',
    я: 'ya',
  },
  // https://en.wikipedia.org/wiki/Serbian_Cyrillic_alphabet
  // https://en.wikipedia.org/wiki/Romanization_of_Serbian
  serbian: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Ђ: 'Đ',
    ђ: 'đ',
    Е: 'E',
    е: 'e',
    Ж: 'Ž',
    ж: 'ž',
    З: 'Z',
    з: 'z',
    И: 'I',
    и: 'i',
    Ј: 'J',
    ј: 'j',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    Љ: 'Lj',
    љ: 'lj',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    Њ: 'Nj',
    њ: 'nj',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    Ћ: 'Ć',
    ћ: 'ć',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'H',
    х: 'h',
    Ц: 'C',
    ц: 'c',
    Ч: 'Č',
    ч: 'č',
    Џ: 'Dž',
    џ: 'dž',
    Ш: 'Š',
    ш: 'š',
  },
  // https://en.wikipedia.org/wiki/Romanization_of_Ukrainian
  ukrainian: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    В: 'V',
    в: 'v',
    Г: 'H',
    г: 'h',
    Ґ: 'G',
    ґ: 'g',
    Д: 'D',
    д: 'd',
    Е: 'E',
    е: 'e',
    Є: 'Ie', // "Ye" at the beginning of a word
    є: 'ie',
    Ж: 'Zh',
    ж: 'zh',
    З: 'Z',
    з: 'z',
    И: 'Y',
    и: 'y',
    І: 'I',
    і: 'i',
    Ї: 'I', // "Yi" at the beginning of a word
    ї: 'i',
    Й: 'I', // "Y" at the beginning of a word
    й: 'i',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'Kh',
    х: 'kh',
    Ц: 'Ts',
    ц: 'ts',
    Ч: 'Ch',
    ч: 'ch',
    Ш: 'Sh',
    ш: 'sh',
    Щ: 'Shh',
    щ: 'shh',
    Ю: 'Iu', // "Yu" at the beginning of a word
    ю: 'iu',
    Я: 'Ia', // "Ya" at the beginning of a word
    я: 'ia',
  },
  // https://en.wikipedia.org/wiki/Uzbek_alphabet
  uzbek: {
    А: 'A',
    а: 'a',
    Б: 'B',
    б: 'b',
    B: 'V',
    в: 'v',
    Г: 'G',
    г: 'g',
    Д: 'D',
    д: 'd',
    Е: 'E', // Cyrillic "Е" at the beginning of a word and after a vowel is "Ye"
    е: 'e', // Cyrillic "е" at the beginning of a word and after a vowel is "ye"
    Ё: 'Yo',
    ё: 'yo',
    Ж: 'J',
    ж: 'j',
    З: 'Z',
    з: 'z',
    И: 'I',
    и: 'i',
    Й: 'Y',
    й: 'y',
    К: 'K',
    к: 'k',
    Л: 'L',
    л: 'l',
    М: 'M',
    м: 'm',
    Н: 'N',
    н: 'n',
    О: 'O',
    о: 'o',
    П: 'P',
    п: 'p',
    Р: 'R',
    р: 'r',
    С: 'S',
    с: 's',
    Т: 'T',
    т: 't',
    У: 'U',
    у: 'u',
    Ф: 'F',
    ф: 'f',
    Х: 'X',
    х: 'x',
    Ц: 'S', // In the modern Uzbek Latin alphabet Ц becomes Ts after vowels, S otherwise
    ц: 's', // In the modern Uzbek Latin alphabet ц becomes ts after vowels, s otherwise
    Ч: 'C', // September 2023
    ч: 'c', // September 2023
    Ш: 'Ş', // September 2023
    ш: 'ş', // September 2023
    Ъ: 'ʼ',
    ъ: 'ʼ',
    Ь: '',
    ь: '',
    Э: 'E',
    э: 'e',
    Ю: 'Yu',
    ю: 'yu',
    Я: 'Ya',
    я: 'ya',
    Ў: 'Õ', // September 2023
    ў: 'õ', // September 2023
    Қ: 'Q',
    қ: 'q',
    Ғ: 'Ğ', // September 2023
    ғ: 'ğ', // September 2023
    Ҳ: 'H',
    ҳ: 'h',
  },
};
