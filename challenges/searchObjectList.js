const products = [
  {
    id: 1,
    name: 'Leche',
    brand: 'Pil',
    expirationDate: '2022-12-31',
  },
  {
    id: 2,
    name: 'Pan',
    brand: 'Bimbo',
    expirationDate: '2021-11-14',
  },
  {
    id: 3,
    name: 'Huevos',
    brand: 'San Juan',
    expirationDate: '2023-12-21',
  },
  {
    id: 4,
    name: 'Leche',
    brand: 'Alpura',
    expirationDate: '2021-02-02',
  },
  {
    id: 5,
    name: 'Pan',
    brand: 'Wonder',
    expirationDate: '2022-08-01',
  },
];

function searchProduct(key, value) {
  return products.filter((p) => p[key] === value);
}

function searchProductByDate(dateA, dateB) {
  dateA = new Date(dateA);
  dateB = new Date(dateB);
  return products.filter((p) => {
    const productDate = new Date(p.expirationDate);
    return productDate >= dateA && productDate <= dateB;
  });
}

console.log(searchProduct('id', 3));
console.log(searchProduct('name', 'Leche'));
console.log(searchProductByDate('2021-01-01', '2021-12-31'));
