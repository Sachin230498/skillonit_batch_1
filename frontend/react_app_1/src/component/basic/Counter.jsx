import React from 'react'

let count = 0;

const incfun =()=>{
    // console.log("hello")
    count++;
    console.log(count)
}
const Counter = () => {

  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <button onClick={incfun}>Increse</button>
    </>
  );
}

export default Counter;



// State or props

// State - any data  or  value your app need to track or update

// props = props(short of properties) are valuse passed from parents component to child components in react 
// props are read only