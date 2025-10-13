console.log("Hello")  //syn

setTimeout(()=>{
    console.log("delay by sometime")
}, 0)  //async

 Promise.resolve("Hello").then(() => {
   console.log("Promise"); // Output: Hello
 });  //async

console.log("bye") // syn
 
