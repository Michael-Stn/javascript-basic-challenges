class Product {
  constructor(name, expirationDate, price) {
    this.name = name;
    this.expirationDate = expirationDate;
    this.price = price;
  }
}

const shoppingCartProducts = [
  new Product('bread', new Date(2025, 4, 15), 1.5),
  new Product('milk', new Date(2025, 3, 10), 0.99),
  new Product('eggs', new Date(2025, 2, 25), 2.5),
  new Product('cheese', new Date(2025, 5, 5), 3.75),
  new Product('butter', new Date(2025, 6, 20), 2.0),
  new Product('apples', new Date(2025, 1, 30), 1.2),
];

function calculateBill(products) {
  let total = 0;
  const today = new Date();

  for (let p of products) {
    if (p.expirationDate <= today) {
      console.log(`Product: ${p.name} is expired`);
      continue;
    }
    total += p.price;
  }

  return total;
}

console.log(calculateBill(shoppingCartProducts));
