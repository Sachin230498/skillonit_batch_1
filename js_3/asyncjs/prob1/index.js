// sync js


// console.log("hello")
// console.log("Bye")
// console.log("Wait for a minute")


// asynchronous javascript

// settimeout
// setInterval
// clearInterval


// setTimeout(function, time(ms));

function greet(){
    console.log("Hello World !")
}


// setTimeout(greet,3000)



// setTimeout(function(){
//     console.log("Bye Bye")
// },2000)



// setInterval(function, time)
// its used for repeating the function;

let x =  setInterval(greet,2000)


clearInterval(x)
