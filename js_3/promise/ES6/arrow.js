// normal function

// (function sub(){
//     console.log("Hello")
// })();

// sub().

// An IIFE, or Immediately Invoked Function Expression,

// (function () {
//   // Code within the IIFE
// })();

// Arrow function

//  ()=>{}

// const add = ()=> {
//     console.log("addition")
// }

// add()

// function abc(){
//     return 88
// }

// const multi = ()=>  "hello"

// // const xyz = (a,b) => a+b
//  const xyz = a => a+5

// let a = xyz(5)

// console.log(a)

//    console.log(multi());

// Destructuring in JavaScript is a powerful feature introduced in ECMAScript 2015 (ES6) that allows for the extraction of values from arrays and properties from objects into distinct variables using a concise syntax. This process simplifies code, improves readability, and enhances code maintainability.

// const arr = [78,44,53,55,89,[15,16,17], {a:10,b:20}]

// Destructuring in arry

// const [a,b,c,d,e,[x,y,z]] = arr

// console.log(f)

// Destructuring in Object


let data = {
  name: "Riya",
  age: 25,
  City: "Indore",
  Marks: {
    Maths: 78,
    English: 88,
    Physics: 92,
    other_Marks: [86, 79, 62],
  },
};

const {
  name,
  age,
  City,
  Marks: {
    Maths,
    English,
    Physics,
    other_Marks: [a, b, c],
  },
} = data;

console.log(a, b, c);
