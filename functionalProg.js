// Imperatif

// const names = ["Harry", "Ron", "Jeff", "Thomas"];

// const newNamesWithExcMark = [];

// for (let i = 0; i < names.length; i++) {
//   newNamesWithExcMark.push(`${names[i]}!`);
// }

// console.log(newNamesWithExcMark);

// deklaratif

// const names = ["apel", "anggur", "pepaya", "semangka", "jeruk"];

// const newNamesWithExcMark = names.map((name) => `${name}!`);

// console.log(newNamesWithExcMark);

//Pure function

// let PI = 3.14;

// const hitungLuasLingkaran = (jariJari) => {
//   return PI * (jariJari * jariJari);
// };

// console.log(hitungLuasLingkaran(4)); // 50.24

// PI = 5; // tidak sengaja nilai PI berubah

// console.log(hitungLuasLingkaran(4)); // 80

// const hitungLuasLingkaran = (jariJari) => {
//     return 3.14 * (jariJari * jariJari); 
//   }
  
//   console.log(hitungLuasLingkaran(4)); // 50.24
//   console.log(hitungLuasLingkaran(4)); // 50.24
//   console.log(hitungLuasLingkaran(8)); // 200.96
//   console.log(hitungLuasLingkaran(8)); // 200.96


// const createPersonWithAge = (age, person) => {
//     return { ...person, age };
//   };
  
//   const person = {
//     name: 'Bobo'
//   };
  
//   const newPerson = createPersonWithAge(18, person);
  
//   console.log({
//     person,
//     newPerson
//   });


// immutability
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// const newNamesWithExcMark = names.map((name) => `${name}!`);

// console.log({
//     names,
//     newNamesWithExcMark,
// });


// const user = {
//     firstname: 'Harry',
//     lastName: 'Protter', // ups, typo!
// }

// const renameLastNameUser = (newLastName, user) => {
//     user.lastName = newLastName;
// }

// renameLastNameUser('Potter', user);

// console.log(user);

// const user = {
//     firstname: 'Harry',
//     lastName: 'Protter', // ups, typo!
// }

// const createUserWithNewLastName = (newLastName, user) => {
//     return { ...user, lastName: newLastName }
// }

// const newUser = createUserWithNewLastName('Potter', user);

// console.log(newUser);




//Rekursif

// const countDown = start => {
//     console.log(start);
//     if(start > 0) countDown(start-1);
//   };
  
//   countDown(10);


// Higher-Order Function
// const hello = () => {
//     console.log('Hello!')
//   };
  
//   const say = (someFunction) => {
//     someFunction();
//   }
  
//   const sayHello = () => {
//     return () => {
//       console.log('Hello!');
//     }
//   }
  
//   hello();
//   say(hello);
//   sayHello()();




const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
  names,
  newNames,
});