import mongoose from "mongoose";

const connectDb = async (mongourl) => {
  try {
    await mongoose.connect(mongourl);
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
