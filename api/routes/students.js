const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'students'
    });
});

router.get('/:id',(req,res,next)=>{
    res.status(200).json({
        message:`student with id ${req.params.id}`
    });
});


module.exports = router;