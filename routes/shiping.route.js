const express = require('express')
const router = express.Router()
const { 
    fetch, 
    create, 
    update, 
    trash 
} = require("../controller/shiping.controller")

router.get("/",fetch)
router.post("/",create)
router.put("/:id",update)
router.delete("/:id",trash)

module.exports = router