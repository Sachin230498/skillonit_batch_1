let main = document.getElementById("resta_data_list");
let api = "http://localhost:3000/data";

let currentlyEditingId = null; // Track the open edit div

// Get All Dish
const getData = async () => {
  let res = await fetch(api);
  let data = await res.json();
  console.log(data);
  display(data);
};

getData();

// Fetch All Dish
const display = (data) => {
  main.innerHTML = ""; // Clear previous list before rendering
  data.forEach((el) => {
    let editId = `edit-${el.id}`;
    let div = document.createElement("div");
    div.innerHTML = `
      <img src="${el.img}"> 
      <h1>${el.name}</h1>
      <h2>${el.price}</h2>
      <button onclick="deletedish('${el.id}')">Delete</button>
      <button onclick="editdish('${el.id}', '${el.name}', '${el.price}', '${el.img}', '${editId}')">Edit</button>
      <div id="${editId}"></div>
    `;
    main.append(div);
  });
};

// Create a new Dish
const adddish = () => {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("img").value;

  fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ img, name, price: parseInt(price) }),
  })
    .then(() => getData())
    .catch((err) => console.log(err));
};

// Delete a dish
const deletedish = (id) => {
  fetch(`${api}/${id}`, {
    method: "DELETE",
  })
    .then(() => getData())
    .catch((err) => console.log(err));
};

// Edit a dish
const editdish = (id, name, price, img, editDivId) => {
  // Close previous edit box if open
  if (currentlyEditingId && currentlyEditingId !== editDivId) {
    let prevEditDiv = document.getElementById(currentlyEditingId);
    if (prevEditDiv) prevEditDiv.innerHTML = "";
  }

  let editdiv = document.getElementById(editDivId);
  editdiv.innerHTML = `
    <input id="upt_name" type="text" value="${name}" placeholder="Enter dish name"><br><br>
    <input id="upt_price" type="number" value="${price}" placeholder="Enter dish price"><br><br>
    <input id="upt_img" type="text" value="${img}" placeholder="Enter image URL"><br><br>
    <button onclick="updateDish('${id}')">Update Dish</button>
  `;

  currentlyEditingId = editDivId; // Track the current one
};

// Update Dish
const updateDish = (id) => {
  let name = document.getElementById("upt_name").value;
  let price = document.getElementById("upt_price").value;
  let img = document.getElementById("upt_img").value;

  fetch(`${api}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price: parseInt(price), img }),
  })
    .then(() => {
      if (currentlyEditingId) {
        let editDiv = document.getElementById(currentlyEditingId);
        if (editDiv) editDiv.innerHTML = "";
        currentlyEditingId = null;
      }
      getData();
    })
    .catch((err) => console.log(err));
};
