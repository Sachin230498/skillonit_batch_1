// scoping - area

// global scope
// local scope/functional scope
// block scope

// let x = 10;

// if(x ==10){
//     console.log(true)
// }

// console.log(x)

// local scope

let y = 10; //globally
let x = 5;

function print() {
  let x = 15; // local scope
  let a = 55; // local scope functional scope
  console.log(x, y);
}

// print()

// console.log(a)

// block scope

// let num = 75; //globally

function hello() {
  a = 88; //local scope
  if (5 == a) {
    let num = 45; //block scope
    console.log(num);
  } else {
    console.log(a);
  }

  //   console.log(num)
}

hello();

// console.log(a);
