// Problem4: Find the unique element in the array
//sp1: Find the occurance


let arr = [3, 2, 7, 7, 3, 4, 2];
let obj = {};


for(let i =0;i<arr.length;i++){
  let char = arr[i]
   
  if(obj[char] == undefined){   // obj[3]
    obj[char] = 1;  // obj[3] = 1   obj = {3:1}
  }else{
    obj[char]++;  
  }
// console.log(obj)

}

for (let key in obj) {
  // console.log(obj[key])
  if (obj[key] == 1) {
    console.log(key)
  }
}

// console.log(obj)


