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




let api = "https://fakestoreapi.com/products";


let prodcut_data = fetch(api);
// console.log(prodcut_data)

prodcut_data.then(function(res){
    // console.log(res.json())
    let y = res.json()

    y.then(function(data){
        console.log(data)
        display(data)
    })
}).catch(function(err){
    console.log("getting error", err)
})




function display(data) {
  data.map(function (el) {
    // console.log(el.category)
    let title = document.createElement("h2");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let image = document.createElement("img");
    image.src = el.image;
    let description = document.createElement("p");
    description.innerText = el.description;
    let addcartbtn = document.createElement("button");



    addcartbtn.innerText = "Add to Cart";



  

    let div = document.createElement("div");
    div.append(image, title, price, addcartbtn);
    main.append(div);
  });
}
