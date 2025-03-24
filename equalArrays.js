function equalArrays(array1, array2) {
  return JSON.stringify(array1) === JSON.stringify(array2);
}

console.log(equalArrays([1, 2], [1, 2, 3]));
console.log(equalArrays([1, 2, 3], [1, 2, 3]));
console.log(equalArrays([1, 2, 3], ['1', '2', '3']));
