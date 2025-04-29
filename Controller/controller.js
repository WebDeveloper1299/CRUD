const deleting=async (req, res) => {
    try {
      const { id } = req.params;
  
      const findProduct = await Products.findById(id);
      if (!findProduct) {
        return res.status(400).json({
          message: "Product not found",
          data: []
        });
      }
  
      const deleteProduct = await Products.findByIdAndDelete(id);
  
      return res.status(200).json({
        message: "Deleted successfully",
        data: deleteProduct
      });
  
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        successful: false
      });
    }
  }
  const newproducts = async(req , res)=>{
    try{
const {item_name , quantity , price}=await req.body
    const newProducts = await new Products({
        Product_name: item_name,
        Price : price , 
        Quantity:quantity
    })
    const saveproduct =newProducts.save()
    return res.status(201).json(saveproduct)
    }catch(error){
        return res.status(500).json({
            message: error.message,
            sucessful :true
        })
    }
}
const retriveID =async(req , res)=>{
    try{
        const {id} = req.params
        const findById = await Products.findById(id , {
            Product_name:true,
            Price:true,
            Quantity:true
        })
        if(!findById){
            return res.status(404).json({
                message:"cannot find the id",
                sucessful:false
            })

        }
        return res.status(200).json({
            data: findById,
            successful: true
          });

    }catch(error){
        return res.status(500).json({
            message:error.message,
            sucessful:true
        })
    }
}
const updating = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, quantity } = req.body;
  
      const findProduct = await Products.findById(id);
      if (!findProduct) {
        return res.status(400).json({
          message: "Product not found",
          data: []
        });
      }
  
      const updateProduct = await Products.findByIdAndUpdate(
        id,
        {
          Product_name: name,
          Price: price,
          Quantity: quantity
        },
        { new: true } 
      );
  
      return res.status(200).json({
        message: "Updated successfully",
        data: updateProduct
      });
  
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        successful: false
      });
    }
  }
  module.exports={
    deleting, newproducts, retriveID, updating
  }