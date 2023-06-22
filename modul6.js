// const truthyAndfalsyArray = [
//   1,
//   "",
//   "hallo",
//   0,
//   null,
//   "Harry",
//   14,
//   false,
//   true,
//   undefined,
// ];

// const truthyArray = truthyAndfalsyArray.filter((item) => Boolean(item));

// console.log(truthyArray);


const numbers = [1, 30 , 4,1000, 101, 20, 20000, 121];
const sortNumber = numbers.sort((firsttNumber,secondNumber) => {
    return firsttNumber - secondNumber;
});

console.log(numbers);
console.log(sortNumber);