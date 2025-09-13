let api = "http://localhost:3000/data";
let product_list = document.getElementById("product_list");

const getData = async()=>{
    let res = await fetch(api)
    let data = await res.json()
    // console.log(data)
    display(data)
}

getData();




const display = (data) =>{
product_list.innerHTML = "";
data.map((el)=>{
    let div = document.createElement("div")
    let  title = document.createElement("h1")
    title.innerText = el.title;
    let price = document.createElement("h2")
    price.innerText = el.price
    let img = document.createElement("img")
    img.src = el.image;

    // let id  = String(el.id)
    let delbtn = document.createElement("button")
    delbtn.addEventListener("click", ()=>{
        delfun(el.id)
    })
    delbtn.innerText = "Delete"
    let updbtn = document.createElement("button")
    updbtn.addEventListener("click",()=>{
        updatefun(el.id,el.title,el.image,el.price)
    })
    updbtn.innerText = "Edit"

    let editDiv = document.createElement("div")
    editDiv.setAttribute("id","editDiv")

    div.append(img,title,price,updbtn,delbtn,editDiv)

    product_list.append(div)
})
}


// add product
const addproduct = ()=>{
// console.log("hello")

  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("img").value;

  fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ img, name, price: parseInt(price) }),
  })
    .then(() => getData())
    .catch((err) => console.log(err));


}

// Delete functionlity
async function delfun(id){
  console.log(id)
 fetch(`${api}/${id}`,{
    method:"DELETE"
  })

.then(()=>{
    getData()
}).catch((err)=>{
    console.log(err)
})

}


// update form

const  updatefun =(id,title,img,price)=>{
    console.log(id,title,img,price)

let editDiv = document.getElementById("editDiv");
// console.log(editDiv)
editDiv.innerHTML = `
<input id="updimg" type="text" value = "${img}" >
<br>
<input id="updTitle" type="text" value = "${title}" >
<br>
<input id="updprice" type="text" value = "${price}" >
<br>
<button onclick="editfun('${id}')">Update</button>
`;

}


const editfun =(id)=>{
// console.log(id)

let name = document.getElementById("updTitle").value
let price = document.getElementById("updprice").value
let img = document.getElementById("updimg").value
let editDiv = document.getElementById("editDiv");
 fetch(`${api}/${id}`, {
   method: "PATCH",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ img, name, price: parseInt(price) }),
 })
   .then(() => {

    if(editDiv){
        editDiv.innerHTML = ""
    }
    getData()})
   .catch((err) => console.log(err));

}

