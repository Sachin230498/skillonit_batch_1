let form  = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit", getData)

let todo_arr = [];

function getData(){
    event.preventDefault();
    // console.log("hello")
    let task = form.task.value;
    let priority = form.priority.value;

   let todo_obj = {
    task,
    priority
   }

   todo_arr.push(todo_obj)
   display(todo_arr)
}


function display(data){

    tbody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i])
      let row = document.createElement("tr");
      let col1 = document.createElement("td");
      col1.innerText = data[i].task;
      let col2 = document.createElement("td");
      col2.innerText = data[i].priority;
      let col3 = document.createElement("td");
      col3.innerText = "Delete";
      row.append(col1, col2, col3);
      tbody.append(row);
    }


}

