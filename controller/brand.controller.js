const Brand = require("../schema/brand.schema.js")

exports.fetch = async (req,res)=>{
    try{
        const brands = await Brand.find(req.query)
        res.status(200).json(brands)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.create = async (req,res)=>{
    try{
        const brand = new Brand(req.body)
        await brand.save()
        res.status(200).json(brand)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.update = async (req,res)=>{
    try{
        await Brand.findByIdAndUpdate({_id: req.params.id},req.body) 
        res.status(201).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.trash = async (req,res)=>{
    try{
        await Brand.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

