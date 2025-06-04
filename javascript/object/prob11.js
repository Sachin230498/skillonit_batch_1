// From the given arrays make an array of object

let products = ["macbook", "iphone", "ipad", "airpods"];

let price = [250000, 75000, 55000, 20000];

let arr = [];


for(let i=0;i<products.length;i++){
    // console.log(products[i])
    // console.log(price[i])
    let obj = {};
    obj[products[i]]  = price[i]
//   console.log(obj)
    arr[i] = obj
}

// console.log(arr)






// let i = 0;
// let i = 4;


