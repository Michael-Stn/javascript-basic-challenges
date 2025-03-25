function randomNumber(init, end) {
  return Math.floor(Math.random() * (init - end) + end);
}

console.log(randomNumber(5, 10));
console.log(randomNumber(-25, -22));
console.log(randomNumber(100, 0));
console.log(randomNumber(-2, 2));