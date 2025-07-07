// api - url

//fetch  - The fetch() method in JavaScript is a modern, promise-based API used for making HTTP requests to fetch resources from a server. It provides a more flexible and powerful alternative to the older XMLHttpRequest method.

//axios
//XHR
//Web socket

//fetch(api, {})

// let api = "https://jsonplaceholder.typicode.com/posts";
// let x = fetch(api);

// // console.log(x)

// x.then(function(res){
//     // console.log(res.json())
//     let fake_data = res.json()
//     fake_data.then(function(data){
//         console.log(data)

//     })
// })

// let api = "https://fakestoreapi.com/products";

// let prodcut_data = fetch(api);
// console.log(prodcut_data)


// method 1 
// prodcut_data
//   .then(function (res) {
//     // console.log(res.json())
//     let y = res.json();

//     y.then(function (data) {
//       console.log(data);
//       display(data);
//     });
//   })
//   .catch(function (err) {
//     console.log("getting error", err);
//   });



//method 2 

let api = "https://fakestoreapi.com/products";


async function getData (){
    try {
        let x = await fetch(api);
        let data = await x.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
  
}


// const getData = async ()=>{

// }


getData()