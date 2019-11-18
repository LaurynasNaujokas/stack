const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    questionId: mongoose.Schema.Types.ObjectId,
    title : String,
    subtitle : String,
    category : String,
    upVote : Number,
    answers : [String]
});

module.exports = mongoose.model('Question', questionSchema);