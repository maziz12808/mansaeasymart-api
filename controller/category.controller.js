const Category = require("../schema/category.schema.js");

exports.fetch = async (req,res)=>{
    try{
        const Categories = await Category.find(req.query)
        res.status(200).json(Categories)
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}
exports.create = async (req,res)=>{
    try{
        const category = new Category(req.body)
        await category.save()
        res.status(200).json(category)
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
        const category = await Category.findByIdAndUpdate({_id: id},data,{new: true})
        res.status(201).json(category)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}
exports.trash = async (req,res)=>{
    const id = req.params.id
    try{
        const category = await Category.findOneAndDelete({_id: id})
        res.status(200).json(category)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}