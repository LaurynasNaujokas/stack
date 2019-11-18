import React, { useState, useEffect } from 'react';
import './App.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Navigation from "./components/Navigation";
import Questions from "./components/Questions";
import Question from "./components/Question";
import AddQuestion from './components/AddQuestion';

import {Router} from '@reach/router';

const useStyles = makeStyles(({
    root: {
        flexGrow : 1
    },
    paper: {
        minWidth : 350,
        minHeight : 200,
        maxWidth : 500,
        display : 'flex',
        flexDirection : 'row',
    },
    questionGrid : {
        display : 'flex',
        justifyContent : 'space-around',
        marginTop : 30,
        marginBottom : 30
    },
    text : {
        padding: 10
    }
}));

export default function App() {
const classes = useStyles();

    // API url from the file '.env' OR the file '.env.development'.
    // The first file is only used in production.
    const API_URL = process.env.REACT_APP_API_URL; 

   //InitialData
    const [questions, setQuestions] =  useState([
        {
            id : 0,
            title : 'What is Javascript',
            subtitle : 'I need more information about it',
            category : 'Javascript',
            upVote : 0,
            answers : ['']
        },
        {
            id : 1,
            title : 'How to do map() function',
            subtitle : 'Can someone tell how to do it step by step',
            category : 'Angular',
            upVote : 0,
            answers : ['']
        },{
            id : 2,
            title : 'MongoDB or firebase?',
            subtitle : 'Cant decide...',
            category : 'React',
            upVote : 0,
            answers : ['']
        },{
            id : 3,
            title : 'Any good tutorials for ES6',
            subtitle : 'Want to start practice, but dunno where',
            category : 'Javascript',
            upVote : 0,
            answers : ['']
        }
    ]);

    //Downvote Vote
    const upVote = index => {
        const newVote = [...questions];
        newVote[index].upVote++;
        setQuestions(newVote);
    };

    //upVote vote
    const downVote = index => {
        const newVote = [...questions];
        newVote[index].upVote--;
        setQuestions(newVote);
    };
    //Get Question ID
    const getquestionid = (id) =>  {
        return questions.find(q => q._id === id);   
     }

     
        //Fetch Questions
     useEffect(() => {
        const url = `${API_URL}/questions`;
        const fetchData = async () => {
        const res = await fetch(url);
        const questions = await res.json();
        setQuestions(questions);
        console.log("Fetch end");
        }
        fetchData();
      }, []); 

    /*   useEffect(() => {
        //const url = process.env.REACT_APP_API_URL;
        const url = "http://localhost:5000/questions"
        axios.get(url)
            .then(res => {
                const questions = res.json(res);
                setQuestions(questions);
                console.log("ok");
            })
            .catch(err => {
                console.log("Not okay" +  err);
    
            })
    }, []); */


    return (
    <div className={classes.root}>
            <Navigation />
            <AddQuestion 
                path="/addQuestion"
            />
        <Router>
            <Questions
                path="/" 
                questions={questions} 
                classes={classes}
                upVote={upVote}
                downVote={downVote}
            />
            <Question 
                path="/question/:id"
                getquestionid={getquestionid}  
            />   
        </Router>
    </div>
  );
}




