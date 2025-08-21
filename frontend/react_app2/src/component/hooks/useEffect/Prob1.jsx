// import React, { useState, useEffect } from "react";

// const Prob1 = () => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState("");

//   // This will run ONLY ONCE (when the component is first mounted)
//   useEffect(() => {
//     setMessage(`✅ useEffect ran only once after first render`);
    
//     console.log("useEffect executed!");
//   });

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <p>{message}</p>
//     </div>
//   );
// }; 

// export default Prob1;



// It is used to perform side effects in React.

// Side effects = anything outside React’s normal rendering (API calls, timers, logging, DOM updates).

// Think of it like "run this code when something happens".

// 🔍 What is useEffect?

// useEffect is a Hook in React.

// It allows us to run extra code (side effects) in our component.

// Side effects are things like:

// Fetching data from API

// Setting up timers

// Logging values

// Updating localStorage

// 👉 Without useEffect, React only handles rendering UI.

// Syntex

// useEffect(() => {
//   // code you want to run
// }, [dependencies]);

// 🔎 Why Dependency Array?

// The dependency array [] controls when useEffect runs.

// No dependency array

// useEffect(() => {
//   console.log("Runs after every render");
// });

// 👉 Runs every time component re-renders.

// Empty dependency array []

// useEffect(() => {
//   console.log("Runs only once (when component mounts)");
// }, []);

// 👉 Runs only once (like componentDidMount).

// With dependency [state]

// useEffect(() => {
//   console.log("Runs when count changes");
// }, [count]);

// 👉 Runs when count changes (like componentDidUpdate for count).

// 🔄 Lifecycle Connection

// In class components, we had:

// componentDidMount → run once when component mounts

// componentDidUpdate → run when state/props change

// componentWillUnmount → clean up when component removed

// 👉 In functional components, useEffect replaces all three.
