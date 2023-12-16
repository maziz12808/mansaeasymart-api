const Shiping = require("../schema/shiping.schema");

exports.fetch = async (req,res)=>{
    try{
        const shiping = await Shiping.find(req.query)
        res.status(200).json(shiping)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.create = async (req,res)=>{
    try{
        const shiping = new Shiping(req.body)
        await brand.save()
        res.status(200).json(shiping)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.update = async (req,res)=>{
    try{
        await Shiping.findByIdAndUpdate({_id: req.params.id},req.body) 
        res.status(201).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.trash = async (req,res)=>{
    try{
        await Shiping.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

