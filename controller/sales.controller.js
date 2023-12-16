const Sale =  require("../schema/sales.schema")

exports.fetch = async (req,res)=>{
    try{
        const sales = await Sale.find(req.query)
        res.status(200).json(sales)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.create = async (req,res)=>{
    try{
        const sale = new Sale(req.body)
        await sale.save()
        res.status(200).json(sale)
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.update = async (req,res)=>{
    try{
        await Sale.findByIdAndUpdate({_id: req.params.id},req.body) 
        res.status(201).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

exports.trash = async (req,res)=>{
    try{
        await Sale.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(500).json(err.message)
    }
}

