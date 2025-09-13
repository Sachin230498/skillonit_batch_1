
let main = document.getElementById("main");

const getData = async(api)=>{
    let res = await fetch(api)
    let data = await res.json()
    return data;

}


const display =(data)=>{
    // console.log("data is", data)
    data.map((el)=>{
        let img = document.createElement("img")
        img.src = el.image
        let title = document.createElement("h1")
        title.innerText = el.title;
        let price = document.createElement("h3")
        price.innerText = el.price
        let addcart = document.createElement("button")
        addcart.innerText = "Add to Cart"
        let div = document.createElement("div")



        div.append(img,title,price,addcart)
        main.append(div)
    })
}

export   {getData,display};