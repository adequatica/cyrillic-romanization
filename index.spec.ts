import { expect, test } from 'vitest';

import cyrillicToLatin from './index';

test('Should handle empty string', () => {
  const input = '';
  const result = cyrillicToLatin(input);
  expect(result).toBe(input);
});

test('Should not transliterate Latin script', () => {
  const input = 'De finibus bonorum et malorum';
  const result = cyrillicToLatin(input);
  expect(result).toBe(input);
});

test('Should return transliteration for Bulgarian lanuage', () => {
  const result = cyrillicToLatin('Свети просветители Методий и Кирил', 'bul');
  expect(result).toBe('Sveti prosvetiteli Metodiy i Kiril');
});

test('Should return transliteration for Bulgarian lanuage with -ia exeption', () => {
  const result = cyrillicToLatin('Светия просветиятели Методий и Кирил', 'bul');
  expect(result).toBe('Svetia prosvetiyateli Metodiy i Kiril');
});

test('Should return transliteration for Montenegrin lanuage', () => {
  const result = cyrillicToLatin('З́ је 10 слово у црногорској азбуци', 'cnr');
  expect(result).toBe('Ź je 10 slovo u crnogorskoj azbuci');
});

test('Should return transliteration for Makedonian lanuage', () => {
  const result = cyrillicToLatin('Бев ѓакон во мојата црква', 'mkd');
  expect(result).toBe('Bev gjakon vo mojata crkva');
});

test('Should return transliteration for Mongolian lanuage', () => {
  const result = cyrillicToLatin('Ерөнхий хэл шинжлэл эдгээр болно', 'mon');
  expect(result).toBe('Yerönkhii khel shinjlel edgeer bolno');
});

test('Should return transliteration for Russian lanuage', () => {
  const result = cyrillicToLatin('Всяк кулик своё болото хвалит', 'rus');
  expect(result).toBe('Vsyak kulik svoyo boloto xvalit');
});

test('Should return transliteration for Russian lanuage with -C exeption', () => {
  const result = cyrillicToLatin('Цыплят по осени считают', 'rus');
  expect(result).toBe('Cyplyat po oseni schitayut');
});

test('Should return transliteration for Belarusian lanuage as for Russian lanuage', () => {
  const result = cyrillicToLatin('Всяк кулик своё болото хвалит', 'bel');
  expect(result).toBe('Vsyak kulik svoyo boloto xvalit');
});

test('Should return transliteration for Serbian lanuage', () => {
  const result = cyrillicToLatin('Овај веб сајт користи колачиће', 'srp');
  expect(result).toBe('Ovaj veb sajt koristi kolačiće');
});

test('Should return transliteration for Ukrainian lanuage', () => {
  const result = cyrillicToLatin('Бджола мала, а й та працює', 'ukr');
  console.log(result);
  expect(result).toBe('Bdzhola mala, a y ta pratsiuie');
});

test('Should return transliteration for Ukrainian lanuage with -zgh exeptions', () => {
  const result = cyrillicToLatin('Згорани розгон', 'ukr');
  expect(result).toBe('Zghorany rozghon');
});

test('Should return transliteration for ISO 9 standard', () => {
  const result = cyrillicToLatin(
    'Ћирилица је изведена из грчког унцијала',
    'iso9',
  );
  expect(result).toBe('Ćirilica ǰe izvedena iz grčkog unciǰala');
});
