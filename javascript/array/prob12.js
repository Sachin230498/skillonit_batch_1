//Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,15,12,18];
let sum = 0;
let count = 1;

for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
    if(arr[i]%2 == 0){
        // console.log(arr[i])
        sum = sum + arr[i]
        count++;
        
    }
}
// console.log(count)
console.log(sum/count);