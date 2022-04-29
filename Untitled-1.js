// const arr = ['ручка', 'карандаш', 'ластик'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }  
// 
// const cars = [
//   {id: 1, model: 'Ferrari'},
//   {id: 2, model: 'Audi'},
//   {id: 3, model: 'Toyota'}
// ];

// const audi = cars.find(item => item.model === 'Audi');

// console.log(audi)
const cars = [
  {id: 1, model: 'Ferrari'},
  {id: 2, model: 'Audi'},
  {id: 3, model: 'Toyota'},
  {id: 4, model: 'Suzuki'}
];

const filterCars = cars.filter(item => item.id % 2 === 0);

console.log(filterCars);