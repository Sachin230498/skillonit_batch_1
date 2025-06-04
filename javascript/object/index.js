// null vs undefined

let a ;
// console.log(a)  // when user forget to assign value then js assign undefined to that varible

let b = null;
// console.log(b)




let products = ["Back Case", "Earphones", "Data Cable", "Game pad", "Charger"];

let search="Charger";

let isPresent;


for (let i=0;i<=products.length-1;i++){
  if(products[i]==search){
    isPresent=search;
    break;
  } else{
    isPresent = null;
  }
}



if(isPresent == null){
  console.log("Not Found");
} else {
  console.log(isPresent,"Found");
}
