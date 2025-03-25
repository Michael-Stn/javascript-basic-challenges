const buildings = [
  {
    id: 1,
    locality: 'South',
    rooms: 2,
    mts2: 100,
    price: 200100.0,
  },
  {
    id: 2,
    locality: 'North',
    rooms: 3,
    mts2: 150,
    price: 300150.0,
  },
  {
    id: 3,
    locality: 'South',
    rooms: 3,
    mts2: 200,
    price: 400200.0,
  },
  {
    id: 4,
    locality: 'East',
    rooms: 4,
    mts2: 250,
    price: 500250.0,
  },
  {
    id: 5,
    locality: 'West',
    rooms: 1,
    mts2: 80,
    price: 150080.0,
  },
  {
    id: 6,
    locality: 'North',
    rooms: 2,
    mts2: 120,
    price: 240120.0,
  },
  {
    id: 7,
    locality: 'South',
    rooms: 5,
    mts2: 300,
    price: 600300.0,
  },
  {
    id: 8,
    locality: 'East',
    rooms: 3,
    mts2: 180,
    price: 360180.0,
  },
  {
    id: 9,
    locality: 'West',
    rooms: 2,
    mts2: 110,
    price: 220110.0,
  },
  {
    id: 10,
    locality: 'North',
    rooms: 4,
    mts2: 200,
    price: 400200.0,
  },
];

function localityPromidePrices() {
  const localities = buildings.reduce((arr, b) => {
    if (!arr[b.locality]) arr[b.locality] = [];
    arr[b.locality].push(b.price);
    return arr;
  }, []);

  function byLocality(locality) {
    const totalPrice = localities[locality].reduce(
      (prev, curr) => prev + curr,
      0
    );
    return totalPrice / localities[locality].length;
  }

  function all() {
    const promides = [];

    for (let i in localities) {
      promides[i] = byLocality(i);
    }

    return promides;
  }

  return {
    all,
    byLocality,
  };
}

const { all: getAllPromides, byLocality: getPromidesByLocality } =
  localityPromidePrices();

console.log(getAllPromides());
console.log(getPromidesByLocality('South'));
console.log(getPromidesByLocality('North'));
console.log(getPromidesByLocality('East'));
console.log(getPromidesByLocality('West'));
