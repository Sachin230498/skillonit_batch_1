import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const mongo_url = "mongodb://localhost:27017";

mongoose
  .connect(mongo_url, { dbName: "testdb" })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

let user_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String, // use String instead of Number
    required: true,
  },
});

let user_model = mongoose.model("user", user_schema);

app.post("/", async (req, res) => {
  try {
    const data = new user_model(req.body);
    await data.save();
    res.send("User created");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
