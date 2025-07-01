let cart_arr = JSON.parse(localStorage.getItem("cartData")) || [];

cart_arr.forEach(function (el) {
  if (!el.currentQuantity) {
    el.currentQuantity = 1;
  }
});

let container = document.getElementById("container");
let total = document.getElementById("total");

display(cart_arr);

function display(data) {
  container.innerHTML = ""; // Clear container before appending

  data.forEach(function (el, index) {
    let quantity = el.currentQuantity || 1; // 

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;

    let title = document.createElement("h2");
    title.innerText = el.title;

    let price = document.createElement("h3");
    price.innerText = `Price: ₹${Math.floor(el.price * quantity)}`;

    let description = document.createElement("p");
    description.innerText = el.description;

    // Quantity Controls
    let quantityDiv = document.createElement("div");

    let minusBtn = document.createElement("button");
    minusBtn.innerText = "-";

    let quantityText = document.createElement("span");
    quantityText.innerText = quantity;
    quantityText.style.margin = "0 10px";

    let plusBtn = document.createElement("button");
    plusBtn.innerText = "+";

    plusBtn.addEventListener("click", function () {
      quantity++;
      el.currentQuantity = quantity;
      price.innerText = `Price: ₹${Math.floor(el.price * quantity)}`;
      quantityText.innerText = quantity;
      updateTotal();
    });

    minusBtn.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        el.currentQuantity = quantity;
        price.innerText = `Price: ₹${Math.floor(el.price * quantity)}`;
        quantityText.innerText = quantity;
        updateTotal();
      }
    });

    quantityDiv.append(minusBtn, quantityText, plusBtn);

    let buynow = document.createElement("button");
    buynow.innerText = "Buy Now";

    div.append(image, title, price, quantityDiv, buynow);
    container.append(div);
  });

  updateTotal();

  function updateTotal() {
    let newTotal = 0;
    data.forEach(function (el) {
      newTotal += Math.floor(el.price) * el.currentQuantity;
    });
    total.innerText = `Total Price: ₹${newTotal}`;
    localStorage.setItem("cartData", JSON.stringify(data)); 
  }
}
