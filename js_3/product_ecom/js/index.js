let main = document.getElementById("main")
import { getData, display } from "./fetch.js";
let api = "https://fakestoreapi.com/products";

let x = await getData(api)
// console.log(x)

display(x);

