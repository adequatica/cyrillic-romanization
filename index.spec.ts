import { expect, test } from 'vitest';

import cyrillicToLatin from './index';

test('Should handle empty string', () => {
  const input = '';
  const result = cyrillicToLatin(input);
  expect(result).toBe(input);
});

test('Should not transliterate Latin script', () => {
  const input = 'De finibus bonorum et malorum';
  const result = cyrillicToLatin(input, 'iso9');
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

test('Should return transliteration for Makedonian lanuage', () => {
  const result = cyrillicToLatin('Бев ѓакон во мојата црква', 'mkd');
  expect(result).toBe('Bev gjakon vo mojata crkva');
});

test('Should return transliteration for Serbian lanuage', () => {
  const result = cyrillicToLatin('Овај веб сајт користи колачиће', 'srp');
  expect(result).toBe('Ovaj veb sajt koristi kolačiće');
});

test('Should return transliteration for ISO 9 standard by default', () => {
  const result = cyrillicToLatin('Ћирилица је изведена из грчког унцијала');
  expect(result).toBe('Ćirilica ǰe izvedena iz grčkog unciǰala');
});
