const mongoose = require("mongoose")

const products = new mongoose.Schema(
    {
        Product_name:{
            type:String,
            required:[true , "Please provide product name"]
        },
        Price:{
            type:Number,
            required:[true , "Please provide price"],
            default:0
        },
        Quantity:{
            type:Number,
            required:[true , "Please provide quantity"],
            default :0
        },
        
            timestamps:true 
        
    }
)

const product = mongoose.model("Products", products)
module.exports = product