// loop in object


let address = {
    city: "New Delhi",
    street: "456",
    house:"100",
    pin:"115566"
  }

//   address["pin"]
// for in
for(let key in address){
    console.log(address[key])
}

// its only work with backet notation