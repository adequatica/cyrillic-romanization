import { expect, test } from 'vitest';

import cyrillicToLatin from './index';

test('Should handle empty string', () => {
  const input = '';
  const result = cyrillicToLatin(input);
  expect(result).toBe(input);
});

test('Should not transliterate latin', () => {
  const input = 'De finibus bonorum et malorum';
  const result = cyrillicToLatin(input, 'iso9');
  expect(result).toBe(input);
});

test('Should return transliteration for ISO 9 standard by default', () => {
  const result = cyrillicToLatin('Ћирилица је изведена из грчког унцијала');
  expect(result).toBe('Ćirilica ǰe izvedena iz grčkog unciǰala');
});

test('Should return transliteration for serbian lanuage', () => {
  const result = cyrillicToLatin('Овај веб сајт користи колачиће', 'srb');
  expect(result).toBe('Ovaj veb sajt koristi kolačiće');
});

test('Should return transliteration for makedonian lanuage', () => {
  const result = cyrillicToLatin('Бев ѓакон во мојата црква', 'mkd');
  expect(result).toBe('Bev gjakon vo mojata crkva');
});

test('Should return transliteration for bulgarian lanuage', () => {
  const result = cyrillicToLatin('Свети просветители Методий и Кирил', 'bul');
  expect(result).toBe('Sveti prosvetiteli Metodiy i Kiril');
});
