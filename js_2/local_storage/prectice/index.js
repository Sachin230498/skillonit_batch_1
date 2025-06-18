let a = "hello";

// local storage

// 8 to 10 mb storage
// not scecured
// just availble on browser
// only store strings

// for saving in ls

// localStorage.setItem(key , value)

localStorage.setItem("name", "harsh");

localStorage.setItem("num", 123456);

// how to get

// localStorage.getItem(key)

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("num"))

// let number = localStorage.getItem("num")
// console.log(typeof number)

let display = document.getElementById("display");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");

let count = localStorage.getItem("count") || 0 ;
// if(localStorage.getItem("count") == null){
//     count = 0;
// }else{
//     count = localStorage.getItem("count");
// }

display.innerText = count;

inc.addEventListener("click", incfun);

function incfun() {
  count++;
  localStorage.setItem("count", count)
  display.innerText = count;
}

dec.addEventListener("click", decfun);

function decfun() {
  count--;
  localStorage.setItem("count", count);
  display.innerText = count;
}



// let data = localStorage.getItem("abc");
// console.log(data)

// localStorage.removeItem("num")
// localStorage.removeItem("name")

localStorage.clear();