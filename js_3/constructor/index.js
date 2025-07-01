// Constructor

// make a function that will return nike product object

function nikeData(a, b) {
  let nike_obj = {};

  (nike_obj.name = a), (nike_obj.price = b);

  return nike_obj;
}

let a = nikeData("Air Jorden", 15000);
// console.log(a)

// using contructor

function Nike(a, b) {
  // let obj ={}
  (this.name = "X"), (this.price = 10);
}

let x = new Nike("abc", 400)

let y = new Nike();
// console.log(y)


x.color = "white"

// console.log(x)

// let x = new Promise();

// console.log(x)

// this = object
// new =  return

// how to create object

// object literal

let emp_data = {
  company: "Skillonit",
  salary: "10LPA",
  designation: "Developer",
};

// object.create()


let emp2 = Object.create(emp_data)
emp2.name = "Vivek"

// emp2.salary = "15LPA"

// console.log(emp2.salary)









// inheritence

// Inheritance in JavaScript is a mechanism that allows objects to acquire properties and methods from other objects, promoting code reusability and establishing a hierarchical relationship between them. This concept is fundamental to object-oriented programming (OOP).