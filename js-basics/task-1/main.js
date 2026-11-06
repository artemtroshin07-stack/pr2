'use strict';

/* ---------- Базова частина ---------- */

const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

// Підрахунок кількості літери letter в рядку row (без урахування регістру)
function countLetter(row, letter = 'a') {
  const target = letter.toLowerCase();
  let count = 0;

  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i).toLowerCase() === target) {
      count++;
    }
  }

  return count;
}

// Повертає рядок, у якому літер "a" більше
function getRow(firstRow, secondRow) {
  const firstCount = countLetter(firstRow, 'a');
  const secondCount = countLetter(secondRow, 'a');

  if (firstCount === secondCount) {
    return 'Кількість літер однакова';
  }

  return firstCount > secondCount ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow)); // 'You can say that again'

/* ---------- Завдання під зірочкою: prompt() та alert() ---------- */

function runInteractive() {
  const row1 = prompt('Введіть перший рядок:', firstRow);
  if (row1 === null) return;

  const row2 = prompt('Введіть другий рядок:', secondRow);
  if (row2 === null) return;

  const letter = prompt('Яку літеру рахуємо?', 'a');
  if (letter === null) return;

  if (letter.length !== 1) {
    alert('Потрібно ввести рівно одну літеру!');
    return;
  }

  const count1 = countLetter(row1, letter);
  const count2 = countLetter(row2, letter);

  let result;
  if (count1 === count2) {
    result = 'Кількість літер однакова';
  } else {
    result = `Більше літер "${letter}" у рядку:\n"${count1 > count2 ? row1 : row2}"`;
  }

  alert(`Перший рядок: ${count1}\nДругий рядок: ${count2}\n\n${result}`);
}

document.getElementById('run-interactive').addEventListener('click', runInteractive);
