const Student = require('../models/student');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();


router.get('/', (req, res, next) => {

    Student.find().exec().then(docs => {

        res.status(200).json({
            data: docs

        });

    }).catch(error => {

        res.status(500).json({
            message: error.message

        });

    });


});

router.post('/', (req, res, next) => {

    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
    });

    student.save().then(result => {

    }).catch(error => console.log(error));


    res.status(201).json({
        message: 'student created'
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: `student with id ${req.params.id}`
    });
});


module.exports = router;