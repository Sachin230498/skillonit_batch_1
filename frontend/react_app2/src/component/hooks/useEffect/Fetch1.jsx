import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";

const Fetch1 = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])

  // console.log(document.title)

  // document.title = `Count : ${count} this time`

  useEffect(() => {
    document.title = `Count : ${count} this time`;

    const getData = async ()=>{
       let res = await fetch("https://resta-server.onrender.com/categories");

       let realdata = await res.json()
      setData(realdata)
    
    }

   

    getData()


  },[count]);



  return (
    <div>
      <h1>UseEffect Feature</h1>

      <div style={{border:"2px solid", padding:"10px", margin:"15px"}}>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Counter
        </button>
      </div>


      {/* fetching  */}

      <div id="main">
        {data.map((el)=>(
           <div className="inner_div">
             <img src={el.img} alt="" />
             <h1>{el.name}</h1>
             <h3>{el.price}</h3>
             <button>Add to Cart</button>
           </div>  
        ))}
      </div>
     
    </div>
  );
};

export default Fetch1;
