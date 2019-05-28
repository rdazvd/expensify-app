// *** object destructuring ***

// const person = {
//   name: 'Rafael',
//   age: 34,
//   location: {
//     city: 'São Paulo',
//     temp: 30
//   }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const {temp: temperature, city} = person.location;
// console.log(`it is ${temperature} in ${city}`);

// const book = {
//   title: 'Capital: A Critical Analysis of Capitalist Production',
//   author: 'Karl Marx',
//   publisher: {
//     name: 'Swan Sonnenschein, Lowrey, & Co',
//   }
// };

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);

// *** array destructuring ***

// const address = [
//   '1299 S Juniper Street', 
//   'Philadelphia', 
//   'Pensylvania', 
//   '19147'
// ];

// const [street, city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = [
  'Coffee (hot)', 
  '$2.00', 
  '$2.50', 
  '$2.75'
];

const [itemName,, mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);