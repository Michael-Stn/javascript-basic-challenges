const names = [
  'John Doe',
  'Jane Smith',
  'John Smith',
  'Jane Doe',
  'Alice Johnson',
  'Bob Brown',
  'Charlie Davis',
  'Diana Evans',
  'Ethan Harris',
  'Fiona Clark',
  'George Lewis',
  'Hannah Walker',
  'Ian Hall',
  'Julia Adams',
  'Kevin Wright',
  'Laura Scott',
  'Michael Young',
  'Nina King',
  'Oliver Turner',
];

function sortByName() {
  return names.sort();
}

function sortBySurname() {
  return names.sort((nameA, nameB) => {
    const surnameA = nameA.split(' ')[1];
    const surnameB = nameB.split(' ')[1];
    if (surnameA > surnameB) return 1;
    if (surnameA < surnameB) return -1;
    return 0;
  });
}

console.log(sortBySurname());
