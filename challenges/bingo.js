const bingo = [
  [23, 32, 45, 65, 31],
  [24, 24, 24, 24, 24],
  [25, 34, 47, 67, 33],
  [26, 35, 48, 68, 34],
  [27, 36, 49, 69, 35],
];

// check rows
const hasRowWithSameNumbers = bingo.some((row, index) => {
  for (let i = 1; i < row.length; i++) {
    if (row[0] !== row[i]) {
      return false;
    }
  }
  console.log('Row winner:', index);
  return true;
});

if (hasRowWithSameNumbers) {
  console.log('Eres el ganador');
  return;
}

// check columns
let hasColumnWithSameNumbers = false;
for (let i = 0; i < bingo.length; i++) {
  let check = true;

  for (let j = 0; j < bingo.length; j++) {
    if (bingo[j][i] !== bingo[0][i]) {
      check = false;
      break;
    }
  }

  if (check) {
    console.log('Column winner:', i);
    hasColumnWithSameNumbers = true;
    break;
  }
}

if (hasColumnWithSameNumbers) {
  console.log('Eres el ganador');
  return;
}

console.log('Has perdido');
