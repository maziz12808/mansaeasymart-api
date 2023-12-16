const Coupon = require("../schema/coupon.schema")

exports.fetch = async (req,res)=>{
    try{
        const coupons = await Coupon.find(req.query)
        res.status(200).json(coupons)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.create = async (req,res)=>{
    try{
        const coupon = new Coupon(req.body)
        await coupon.save()
        res.status(200).json(coupon)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.update = async (req,res)=>{
    try{
        await Coupon.findByIdAndUpdate({_id: req.params.id},req.body) 
        res.status(201).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.trash = async (req,res)=>{
    try{
        await Coupon.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

