let api = "https://jsonplaceholder.typicode.com/comments";
let div = document.getElementById("main")
let real_data;

const  getData = async()=>{
  let res = await fetch(api)
  let data = await res.json()
  return data;
}

const main = async ()=>{
     real_data = await getData()
    renderDom(0)
    showButton()
}


main()


const renderDom = (index)=>{
   div.innerHTML = ""

    let start = 10*index;  //0
    let end = start + 10   // 10

    let per_page_data = real_data.slice(start,end) 

    per_page_data.map(({id,name})=>{
     let p = document.createElement("p")
     p.innerText = `${id} ${name}`
     div.append(p)
    })

    showButton(index+1)
}


const showButton =(page)=>{
    let btn = document.getElementById("buttons")
    btn.innerHTML = null;
    let start = 1;

    if(page>7){
        start = page-1;
    }

    for(let i=start;i<=start+9;i++){
        let b = document.createElement("button")
        b.innerText = i;
        b.onclick = () =>{
            renderDom(i-1)
        }


        btn.append(b)
    }

}


// showButton()
// let arr = [1,2,4,5,6,78,25]

// let x = arr.slice(1,3)

// console.log(x)