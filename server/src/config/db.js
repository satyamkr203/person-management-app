import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const handleError = (msg) =>{
    console.error('database connection error', msg);
}

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongoDB Connected SuccessFully");
    }
    catch(error){
        console.log(error);
        handleError(error);
    }
}

export default connectDB;