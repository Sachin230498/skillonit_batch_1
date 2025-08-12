import React from 'react'
import { useState } from 'react'

// syntex const[state, setState] = useState("hello")


const state = () => {
  const [x, setX] = useState(6);

  const incfun = ()=>{
   setX(x+1)   
  }
//   const decfun = ()=>{
//    setX(x-1)   
//   }

  // let x = 5

  // const incfun = ()=>{
  //     x++;
  //     console.log(x);
  // }

//   const add = (a)=>{
//     return a
//   }

//   const add = (a,b) => a*b




  return (
    <div>
      <h1>{x}</h1>
      <button disabled={x >= 10} onClick={incfun}>
        increaes
      </button>
      <button disabled={x <= 0} onClick={() => setX(x - 1)}>
        decreaes
      </button>
      <button onClick={() => setX(0)}>resta</button>
    </div>
  );
}

export default state