const express = require("express")
const app = express()
const mongodb = require("mongoose")
const products = require("./Model/product.model")
const router = require("./Router/router")
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api/products", router)

app.get("/", async(req , res)=>{
    try{
        const product = await products.find()
        return res.status(200).json(product)

    }catch(error){
        return res.status(500).json({
            message:error.message,
            data:"cannot fetch data"
        })
    }
})

//mongodb connected
mongodb.connect("insert your own connecting strings here ").then((repsonse)=>{
    console.log("database connected")
    app.listen(3002 , ()=>{
        console.log("port is running")
    })
}).catch((error)=>{
    console.log(error)
})

