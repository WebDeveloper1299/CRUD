const express = require("express")
const router = express.Router()

const Products = require("../Model/product.model");
const { deleting, newproducts, retriveID, updating } = require("../Controller/controller");


//api/products/update/:id

router.put("/update/:id", updating)
  
//api/products/delete/:id

router.delete("/delete/:id",deleting )
  
//api/products/create 
router.post("/create",newproducts)

//get by each requested ID
router.get("/:id", retriveID)


module.exports = router