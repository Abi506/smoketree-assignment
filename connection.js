const mongoose=require("mongoose")

const connectMongo=(url)=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("MongoDb connected successfully")
    })
    .catch((error)=>{
        console.log(error,'error while connecting mongo')
    })
}
module.exports=connectMongo