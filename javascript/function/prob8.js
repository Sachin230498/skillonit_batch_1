//SUPERMAN: He is planning to add two number and give the answer to batman.

//BATMAN: Batman is planning to take the superman's answer and square it, then give it to shaktimaan

// SHAKTIMAAN: He will just subtract 50 from it and give the answer to villian


function SUPERMAN(a,b){
    return a+b
}

function Batman(x){
  return x**2;
}


function SHAKTIMAAN(y){
   return y-50;
}



let x = SUPERMAN(40,50)
// console.log(x)

let y = Batman(x)
// console.log(y)

let z = SHAKTIMAAN(y)

console.log("villion got", z)