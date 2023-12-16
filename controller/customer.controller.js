const Customer = require("../schema/customer.schema")

exports.fetch = async (req,res)=>{
    try{
        const customer = await Customer.find(req.query)
        res.status(200).json(customer)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.create = async (req,res)=>{
    try{
        const customer = new Customer(req.body)
        await customer.save()
        res.status(200).json(customer)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.update = async (req,res)=>{
    try{
        await Customer.findByIdAndUpdate({_id: req.params.id},req.body) 
        res.status(201).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.trash = async (req,res)=>{
    try{
        await Customer.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

