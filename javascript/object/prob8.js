//Problem3: Find the sum of elemets whose occurance is 2
//sp1: You have to check the frequency of each element

let arr = [7, 2, 7, 7, 3, 4, 2, 4];
let obj = {};


for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (obj[num] == undefined) {
    obj[num] = 1;
  } else {
    obj[num]++;
  }
}

console.log(obj)
let sum = 0;
for(let key in obj){
    // console.log(obj[key])
    if(obj[key] == 2){
    //   sum = sum +  Number(key);
      sum = sum +  +key;
     
    }
}
console.log(sum);




// let a = "5"
// let b = 4

// console.log( typeof(String(b)))
// console.log(Number(a)+b)   // concatination   "54"

