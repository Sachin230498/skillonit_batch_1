let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let task = document.getElementById("task");
let priority = document.getElementById("priority");

form.addEventListener("submit", getData);

function getData() {
  event.preventDefault();

  let row = document.createElement("tr");
  let col1 = document.createElement("td");
  let col2 = document.createElement("td");
  let col3 = document.createElement("td");

  col1.innerText = task.value;
  col2.innerText = priority.value;

  if (priority.value == "High") {
    col2.style.backgroundColor = "red";
    col2.style.color = "white";
  } else if (priority.value == "Low") {
    col2.style.backgroundColor = "green";
    col2.style.color = "white";
  }

  col3.innerText = "Delete";
  col3.style.backgroundColor = "red";
  col3.style.color = "white";

  row.append(col1, col2, col3);
  tbody.append(row);
}
