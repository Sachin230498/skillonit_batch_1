import React, { useRef, useState } from "react";

const Counter = () => {
  // syntex
  const countRef = useRef(0); // store value
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  console.log(countRef);

  const increase =()=>{
    //   console.log("hello")
    countRef.current +=1;
    console.log(countRef.current)
  }

  return (
    <div>
      <h1>UseRef Example</h1>

      <h3>Counter( stored in ref) :{countRef.current}</h3>
      <button onClick={increase}> Increase</button>
      <button onClick={()=>setShow(!show)}> Rerender</button>

      <hr />
      <hr />

      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Counter</button>
    </div>
  );
};

export default Counter;

// 🔹 What is useRef?

// useRef is a React Hook that gives us a way to directly access or remember something without re-rendering the component.

// Think of it like a box where you can store a value. That box does not reset when the component re-renders.

// useRef is a React Hook that gives you a special object (called a “ref”).

// This object can store a value or point to a DOM element.

// The best part: changing the ref does not re-render the component (unlike useState).

// 🔹 Why we use useRef?

// To access DOM elements directly (e.g., input, button, video).

// To store mutable values (like timers, previous state, etc.) without re-rendering.

// To persist values between renders without using state.
