'use strict';

const WRONG_FORMAT = 'Неправильний формат номера телефону';

/*
  Приймає телефон у форматах:
  +380971234567, +80971234567, 80971234567, 0971234567
  Повертає: +38 (097) 123-45-67
  Якщо формат невірний — повідомлення про помилку.
*/
function formattedPhone(phone) {
  const cleaned = String(phone).trim();

  // необов'язковий "+", необов'язковий префікс 38 або 8, далі 0 і ще 9 цифр
  const match = cleaned.match(/^\+?(?:38|8)?(0\d{9})$/);

  if (!match) {
    return WRONG_FORMAT;
  }

  const n = match[1]; // 10 цифр: код оператора (3) + номер (7)

  return `+38 (${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 8)}-${n.slice(8)}`;
}

console.log(formattedPhone('+80664567890'));  // +38 (066) 456-78-90
console.log(formattedPhone('+380664567890')); // +38 (066) 456-78-90
console.log(formattedPhone('80971234567'));   // +38 (097) 123-45-67
console.log(formattedPhone('0671234567'));    // +38 (067) 123-45-67
console.log(formattedPhone('12345'));         // Неправильний формат номера телефону

/* ---------- Завдання під зірочкою: prompt() та alert() ---------- */

function runInteractive() {
  const phone = prompt('Введіть номер телефону:', '0671234567');
  if (phone === null) return;

  alert(formattedPhone(phone));
}

document.getElementById('run-interactive').addEventListener('click', runInteractive);
