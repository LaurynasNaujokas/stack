const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//Setup express

const port = (process.env.PORT || 8080);
const app = express();

app.use((cors));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//getAll Questions
app.get('/api/v1/questions', (req, res) => {
    db.getQuestions().then(questions => res.json(questions));
});



// ****ROUTES****
//Create a Questions
app.post('/api/v1/questions', (req, res) => {
    let question = {
        title : req.body.title,
        subtitle: req.body.subtitle,
        category: req.body.category,
        upVote: 0,
        answers : []
    };
    db.createQuestion(question).then(newQuestion => res.json(newQuestion));
});

//Get a single Question
app.get('/api/v1/questions/:id', (req, res) => {
    let id = req.params.id;
    db.getQuestion(id).then(question => req.json(question));
  });

//Delete todo
app.delete('/api/v1/questions/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
  
    db.map((question, index) => {
      if (question.id === id) {
         db.splice(index, 1);
         return res.status(200).send({
           success: 'true',
           message: 'Todo deleted successfuly',
         });
      }
    });
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
  });

  app.post('/api/v1/question/:id/answers', (req, res) => {
    db.addAnswer(req.params.id, req.body.answer)
        .then(updateAnswer => res.json(updateAnswer));
});

/**** Start ****/
let db = {}; // Empty DB object

// Require and connect the DB
require('./db').connectDb()
    .then(async dbObject => {
        db = dbObject; // Save a copy of the db object for the routes above
        // When DB connection is ready, let's open the API for access
        app.listen(port, () => {
            console.log(`Questions API running on port ${port}!`)
        });
    })
    .catch(error => console.error(error));


