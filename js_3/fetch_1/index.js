let main = document.getElementById("main")
let api = "https://fakestoreapi.com/products";

const getData = async()=>{
    let res = await fetch(api)
    // console.log(res)
    let data = await res.json()
    // console.log(data);
    display(data)
}

getData();



const display = (data)=>{
   data.map(({id,title,image,price})=>{
    //   console.log(image)
     let Title = document.createElement("h1")
     Title.innerText = title;
     main.append(Title)
   })
}





// let obj = {id:1,title:"Hero", image:[1,2,4,56]}
// const {id,title,image:[a,b,c,d]}= obj
// console.log(d)




// arrow function

// function greet(){
//     console.log("hello")
// }

// greet()

// syntex ()=>{ code }

// const greet = () =>{
//     console.log("hello")
// }

// greet()

// const add = ()=> 5

// let x = add()
// console.log(x)

// const add = (a,b) => a*b;

// console.log(add(10,20))

// const add = a,b => a*b ;

// console.log(add(10));

// const sub = (a,b)=>a-b

//  let x = sub(10,5)

//  console.log(x)

// desctructring array object

// let arr = [4, 5, 8, 1, 0, 78, 55];

// const [a,b,c,d,e,f,g] = arr;

// console.log(a, b, c, d, e, f, g);

// let arr1 = [1, 4, 5, [7, 8, 9, { marks: 10, point: 88, data:{student:"zyz",clas:"8"} }]];

// const [a, b, c, [x, y, z, { marks, point,data:{clas} }]] = arr1;

// console.log(clas);
