const express=require("express")
const app=express()
const connectMongo=require("./connection.js")
connectMongo("mongodb+srv://abinandhan:hqzzdU3vLepl8gY8@cluster0.2x76hsn.mongodb.net/userRegister")
const Address=require("./address.js")
app.use(express.json())

app.post("/register",async(req,res)=>{
    const {name,address}=req.body
    try{
        const responseDb=await Address.create({
             name:name,
             address:{
                street:address.street,
                city:address.city,
                state:address.state
             }
         })
         console.log(responseDb,'responseDb')
         res.send(responseDb)
    }
    catch(error){
        console.log(Error,'error')
        res.send("errror",error) 
    }
    
})

app.listen(3000,()=>{
    console.log("Server running in localhost:3000")
})