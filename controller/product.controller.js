const Product = require("../schema/product.schema")

exports.fetch = async (req,res)=>{
    try{
        const products = await Product.find(req.query) 
        if(!products.length) return res.status(404).json({message: "product not found"})
        
        res.status(201).json(products)
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}
exports.create = async (req,res)=>{
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(200).json(err.message)
    }
}
exports.update = async (req,res)=>{
    const id = req.params.id
    const data = req.body
    try{
        const product = await Product.findOneAndUpdate({_id: id},data,{new: true})
        res.status(201).json(product)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}
exports.trash = async (req,res)=>{
    const id = req.params.id
    try{
        const product = await Product.findOneAndDelete({_id: id})
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}