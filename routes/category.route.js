const express = require('express');
const { 
    fetch, 
    create, 
    update,
    trash 
} = require("../controller/category.controller.js");
const router = express.Router();

router.get('/', fetch);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', trash);

module.exports = router;
