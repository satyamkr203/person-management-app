
import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        enum:["Male", "Female", "Other"],
        required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
}, {timestamps:true});

const Person = new mongoose.model("Person", personSchema);

export default Person;