const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Question = require('../models/question');

mongoose.set('debug', true);

//Route for all questions
router.get('/', (req, res, next) => {
    Question.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        req.status(500).json({
            err : err
        });
    });
});

//Increment Vote route
router.put('/:questionId', async (req, res, next) => {
    Question.update(
        { _id : req.params.questionId},
        { $inc: { upVote: 1 }},
    )
    .exec()
    .then(res => {
        console.log(res);
        res.status(200).json(res);
    })
    .catch(err =>{
        console.log(err);
    });
    next();
});

//Route for posting answers to specific questions
router.put('/:questionId', async (req, res, next) => {
        Question.findOneAndUpdate({ _id : req.params.questionId}, {
            "$push" : {"answers" : req.body.answers}},{new: true, safe: true, upsert: true }).then((result) => {
                return res.status(201).json({
                    status: "Success",
                    message: "Resources Are Created Successfully",
                    data: result
                });
            }).catch((error) => {
                return res.status(500).json({
                    status: "Failed",
                    message: "Database Error",
                    data: error
                });
        });
});


router.patch('/:questionId', async (req, res, next) => {
    const props = req.body;
    try {
        const result = await Question.update({_id: req.params.questionId}, props).exec();
        console.log(result);
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});

//Route for posting new question
router.post('/', (req, res, next) => {
    const question = new Question({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        category: req.body.category,
        subtitle: req.body.subtitle,
        upVote: 0,
        answers: [req.body.answers]
    })
    question.save().then(result => {
        console.log(result);
        res.redirect(req.get('referer'));
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Question was created',
        createdQuestion: question
    });
});

//Get question by id
router.get('/:questionId', (req, res, next) => {
    const id = req.params.questionId;
    Question.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => console.log(err));
});

//Delete question
router.delete('/:questionId', (req, res, next) => {
    const id = req.params.questionId
    Question.remove({_id : id})
    .exec()
    .then( result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
});

module.exports = router;