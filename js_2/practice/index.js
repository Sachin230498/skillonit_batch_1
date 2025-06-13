// firstly we will get the form tag

let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

// 2nd step - add event in form

form.addEventListener("submit", login);

let user_arr = [];

function login() {
  event.preventDefault();
  // console.log("login")
  //3rd step -
  let name = document.getElementById("name");
  let pass = document.getElementById("Password");

  //   console.log(name.value);
  //   console.log(pass.value);

  let data = {
    name: name.value,
    pass: pass.value,
  };
  // console.log(data)
  user_arr.push(data);
  // console.log(user_arr)
  display(user_arr)
};


function display(data){
    tbody.innerHTML = null;
   for(let i =0;i<data.length;i++){
    // console.log(data[i])
    let row = document.createElement("tr")
    let col1 = document.createElement("td")
    col1.innerText = data[i].name;
    let col2 = document.createElement("td")
    col2.innerText = data[i].pass
    let col3 = document.createElement("td")
    col3.addEventListener("click", deletefun)
    col3.innerText = "Delete"

    row.append(col1,col2,col3);
    tbody.append(row)
   }
}


function deletefun(){
    // console.log(event.target.parentNode)
    event.target.parentNode.remove()
}



