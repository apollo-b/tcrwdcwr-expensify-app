// Object Destructuring

// const person = {
//     name: 'Apollo',
//     age: 39,
//     location: {
//         city: 'St. Louis',
//         temp: -3
//     }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city , state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, ,med] = item;
console.log(`A medium ${product} costs ${med}.`);
