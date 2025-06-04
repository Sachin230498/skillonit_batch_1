// What is the frequency of each element of the array

let arr = [7, 2, 7, 7, 3, 4, 2];
let obj = {}

for(let i=0;i<arr.length;i++){
   let num = arr[i];
//    console.log(obj[num])

if(obj[num] == undefined){
    obj[num] = 1;
}else{
     obj[num]++
}
}


console.log(obj)

// num = 7
// obj[7] = 1

// num = 2
// obj[2] = 1

//num = 7
// obj[7]  = 2

// num = 7
//obj[7] = 3

















// obj = {
//     7:3,
//     2:2,
//     4:1
// }


// let abc = {
//     a:1,
//     b:2,
//     a:22
// }

// abc.c = 3
// abc.a = 11

// console.log(abc)
