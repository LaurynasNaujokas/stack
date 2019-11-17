const mongoose = require('mongoose');
mongoose.promise = global.Promise;
class Db {
    constructor(){
        const questionSchema = new mongoose.Schema({
            title: String,
            subtitle: String,
            category: String,
            upVote: Number,
            answers: [String]
        });
        this.questionModel = mongoose.model('Question', questionSchema);
    }

       // TODO: getQuestions
    async getQuestions() {
        try {
            return await this.questionModel.find({});
        } catch (error) {
            console.error("getQuestions:", error.message);
            return {};
        }
    }

   // TODO: Create Question
    async createQuestion(newQuestion) {
        // TODO: Error handling
        let question = new this.questionModel(newQuestion);
        return question.save();
    }

    // TODO: Get Question by ID
    async getQuestion(id) {
        try {
            return await this.questionModel.findById(id);
        } catch (error) {
            console.error("question:", error.message);
            return {};
        }
    }

    // TODO: Add answer to a question 
    async addAnswer(questionId, answer) {
        // TODO: Error handling
        const question = await this.getKitten(questionId);
        question.answers.push(answer);
        return question.save();
    }

}

// We are exporting an async function named 'ConnectDb'.
// It only resolves when the database connection is ready.
// It resolves with an Db object instantiated from the class above.
// The Db object is used for all data access in this app.
module.exports.connectDb = async () => {
    const url = (process.env.MONGO_URL || 'mongodb://localhost/questions');
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Question DB connected");
            return new Db();
        })
        .catch(error => { console.error(error) });
};