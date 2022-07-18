const mongoose=require("mongoose")
const Student=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Study:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("details",Student)
