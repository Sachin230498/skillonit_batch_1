let api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBKghEpKn5GtcQEbVS2sex03w2imtXFT7s";

let main = document.getElementById("main")
let search = document.getElementById("search");

const getData = async ()=>{
    let res = await fetch(`${api}&q=${search.value}`);
    // console.log(res.json())
    let data = await res.json()
    // console.log(data.items)
    let x = data.items;
    console.log(x)
    // display(x);
}


const display = (data)=>{
    // main.innerHTML = ""
//   console.log(data)
data.map(({id:{videoId},snippet:{title}})=>{
// console.log(title)
   let iframe = document.createElement("iframe")
   iframe.src = `https://www.youtube.com/embed/${videoId}`;

   let name = document.createElement("h2")
   name.innerText = title;

   let div = document.createElement("div")

   div.append(iframe,title)

   main.append(div)


})
}





const delay = ()=>{
    // console.log(search.value)
    setTimeout(getData, 2000)
}



{/* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/-LEY8JS6Fjw?si=6kp-f7IR3XYdf6k5"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */}