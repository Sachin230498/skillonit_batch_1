// ternory operator


// (5==5)?(console.log("its true")) : (console.log("its not true"))


// if(5==5){
//     console.log("its true")
// }else{
//     console.log("its not true")
// }



// condition ? true statement : false statement



let store_username = "Rahul@12";
let store_password = 123456;

let input_user = "Rahul@12";
let input_pass = 123456;


store_username == input_user
  ? store_password == input_pass ? console.log("login") : console.log("wrong password")
  : console.log("wrong username");

// if (store_username == input_user) {
//   //   console.log("login")
//   if (store_password == input_pass) {
//     console.log("login");
//   } else {
//     console.log("wrong password");
//   }
// } else {
//   console.log("wrong username");
// }