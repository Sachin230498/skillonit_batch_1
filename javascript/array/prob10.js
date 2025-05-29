let arr = [1,2,3,4,5]
let new_arr = [];  // [1,2]
// console.log(new_arr.length)
for(let i =0;i<arr.length;i++){
    new_arr[new_arr.length] = arr[i] 
}
console.log(new_arr)

// i = 0 , 0<5 , new_arr[0] =  1
// i = 1 , 1<5 , new_arr[1] =  2
// i = 2 , 2<5 , new_arr[2] =  3


