const mongoose=require("mongoose");

const CatesgorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,      
    }},
    {timestamps:true}
);
    

module.exports=mongoose.model("Category",CategorySchema);