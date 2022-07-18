const mongoose = require("mongoose")
const config=require("config")

const db="mongodb+srv://Neetu:neetu1@task1.ega1n.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () =>{
    try {
        await mongoose.connect(db);

        console.log("mongo db connected")
    } catch (error) {
        console.error(error.message);
    }
}
module.exports = connectDB;