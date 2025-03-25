const input = document.getElementById('input');
const result = document.getElementById('result');
const operator = operate();

document
  .getElementById('addButton')
  .addEventListener('click', () => operator.add(input.value));
document
  .getElementById('subButton')
  .addEventListener('click', () => operator.sub(input.value));
document
  .getElementById('mulButton')
  .addEventListener('click', () => operator.mul(input.value));
document
  .getElementById('divButton')
  .addEventListener('click', () => operator.div(input.value));

function operate() {
  let total = 0;
  const print = () => {
    result.innerHTML = `Result: ${total}`;
  };

  return {
    add: (value) => {
      total += Number(value);
      print();
    },
    sub: (value) => {
      total -= Number(value);
      print();
    },
    mul: (value) => {
      total *= Number(value);
      print();
    },
    div: (value) => {
      total /= Number(value);
      print();
    },
  };
}
