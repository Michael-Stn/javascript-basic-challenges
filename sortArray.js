function sortNumbersArray(numbers) {
  return numbers.sort((numA, numB) => numA - numB);
}

console.log(sortNumbersArray([2, 8, 12, 4, 6, 18, 2]));
