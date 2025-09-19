// import express
import express from "express";
import fs from "fs";

// create server
const app = express();

app.use(express.json());

const getData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writefile = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data));
};

// create routes
app.get("/home", (req, res) => {
  let data = getData();
  res.send(data.product);
});

app.post("/post", (req, res) => {
  let data = getData();
  let { title, price } = req.body;
  let obj = { id: Date.now(), title, price };

  data.product.push(obj);

  writefile(data);

  res.send(data);
});

app.put("/update/:id", (req, res) => {
  let data = getData();
  const { id } = req.params;
  const { title, price } = req.body;
  const product_index = data.product.findIndex((el) => el.id == id);
  data.product[product_index] = {
    ...data.product[product_index],
    title,
    price,
  };
  writefile(data);
  res.send(data);
});

app.delete("/delete/:id", (req, res) => {
  let data = getData();
  const { id } = req.params;
  const product_index = data.product.findIndex((el) => el.id == id);
  const deletproduct = data.product.splice(product_index, 1);
  writefile(data);
  res.json({ message: "Product deleted", product: deletproduct[0] });
});

// start the server
app.listen(4000, () => {
  console.log(`server is running on http://localhost:4000`);
});

// let arr = [4,5,7,8,9]

// arr.splice(2,3)

// console.log(arr)

// arr[0] = 88

// console.log(arr[0])

// let x =  arr.findIndex((el)=> el>7)

// console.log(x)
