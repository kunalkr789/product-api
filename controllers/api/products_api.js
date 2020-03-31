const Product = require('../../models/product');


module.exports.create = async function(req, res){
    try{
        //to create products
        let product = await Product.create({
            name: req.body.name,
            quantity: parseInt(req.body.quantity)
        });

        product = await Product.findById(product._id);
        return res.status(200).json({
            data:{
                product: product
            }
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "internal server Error"
        });
    }
}

module.exports.getProducts = async function(req, res){
    try{
        //to get list of all the products
        let products = await Product.find({});
        return res.status(200).json({
            data:{
                products: products
            }
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "internal server Error"
        });
    } 
}


module.exports.deleteProduct = async function(req, res){
    try{
        // to delete the products
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            data:{
                message: "product deleted"
            }
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "Internal server Error"
        });
    } 
}

module.exports.updateProduct = async function(req, res){
    try{
        //to update the product quantity
        let product = await Product.findById(req.params.id);
        product.quantity += parseInt(req.body.number);
        product.save();

        return res.status(200).json({
            data:{
                product: product
            },
            message: "updated successfully"
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "internal server Error"
        });
    } 
}