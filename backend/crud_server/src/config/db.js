// mongodb+srv://Sachin_12:Sachin_12@cluster0.tg2d0z4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const mongo_url = "mongodb+srv://Sachin_12:Sachin_12@cluster0.tg2d0z4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        await mongoose.connect(mongo_url)

        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;