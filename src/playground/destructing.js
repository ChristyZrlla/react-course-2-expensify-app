// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Manila',
//         temp: 88
//     }
// };

// const {name, age} = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${name} is ${age}.`); 

// const {city, temp} = person.location;

// if(city && temp) {
//     console.log(`It's ${temp} in ${city}.`); 
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [kape, , m, ] = item;


console.log(`A ${kape} costs ${m}`);