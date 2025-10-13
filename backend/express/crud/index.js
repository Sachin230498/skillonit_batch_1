// import express
import express, { json } from "express";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

// create server
const app = express();

// middleware to parse data
app.use(express.json());

// Function for read db.json data
const readDB = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};
// let x = readDB()
// console.log(x.books)

// update db.json
const writeDB = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data));
};

// writeDB({a:1,b:2})

// Routes

app.get("/", (req, res) => {
  res.send("welcome to our server");
});

// get all books
app.get("/books", (req, res) => {
  const db = readDB();
  res.send(db.books);
});

// Post create a book
app.post("/books", (req, res) => {
  const db = readDB();
  const { title, author } = req.body;

  const newBook = { id: Date.now(), title, author };
  // console.log(newBook)
  db.books.push(newBook);

  writeDB(db);

  res.status(201).json(newBook);
});
   
// upate book by id
app.put("/books/:id", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  const { title, author } = req.body;

  const bookIndex = db.books.findIndex((el) => el.id == id);

  db.books[bookIndex] = { ...db.books[bookIndex], title, author };
  writeDB(db);

  res.send(db.books[bookIndex]);
});

// Start the server

const PORT = process.env.PORT || 4041;

app.listen(PORT, () => {
  console.log(`Books Api running on http://localhost:${PORT}`);
});

// Method           | Use Case                                            |
// | ---------------- | --------------------------------------------------- |
// | res.send()     | Sends text, HTML, objects (auto detects type).      |
// | res.json()     | Sends JSON (auto Content-Type: application/json). |
// | res.end()      | Ends response, no auto formatting.                  |
// | res.sendFile() | Sends a file.                                       |
// | res.download() | Forces file download.                               |
// | res.redirect() | Redirects to another URL.                           |
// | res.status()   | Sets HTTP status code (usually chained).
