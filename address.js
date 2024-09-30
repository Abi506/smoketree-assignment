const {Schema,model}=require("mongoose")


const registerSchema=new Schema({
    name:String,
    address:{
        street:String,
        city:String,
        State:String
    }
})

const Address=model("Address",registerSchema)
module.exports=Address