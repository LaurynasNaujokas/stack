import React from 'react';
import { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CardContent, CardHeader } from '@material-ui/core';

import CardIcons from './CardIcons';
import Loading from './Loading';
import QuestionCardContent from './QuestionCardContent';

const useStyles = makeStyles(({
    card : {
        display : 'flex',
        flexDirection : 'column', 
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 20,
    },
    Grid : {
        display: 'flex',
        alignItems :'center',
        flexDirection : 'row',
    },
    Box : {
        backgroundColor : 'red',
    },
    spaceBetween : {
        display: 'flex',
        justifyContent : 'space-between'
    },
    favoriteIcon : {
        color: "red"
    }
}))

function Question({getquestionid, id}) {    
    const[newAnswer,setNewAnswer] = useState({
        answer : ''
    });
    const classes = useStyles();
    const question = getquestionid(id);

    const onChange = (event) => {
        setNewAnswer({ ...newAnswer, [event.target.name] : event.target.value});
    }
    
    console.log(newAnswer);

    const postAnswer = () => {
        const url = 'http://localhost:5000/questions/'+ id;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                answers : [newAnswer.answer]
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8 ",     
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                window.location.reload();
            });
     }
    const content = (!question) ?  <Loading /> :  

        <Grid container space={1} justify="center" alignItems="center">
            <Grid item>
                <Card  className={classes.card}>
                    <CardHeader
                        title={question.title}
                        subheader={question.category}
                    >
                    </CardHeader>
                    <CardContent >
                        <QuestionCardContent question={question} />
                    </CardContent>
                    <CardIcons />
                    {question.answers.map((an, i) => {
                        return(
                            <div key={i}>
                                <li>{an}</li>
                            </div>
                        )
                    })}
                    <div>
                        <label>Submit your answer</label>
                        <input
                            type="text"
                            value={newAnswer.answer}
                            name="answer"
                            onChange={onChange}
                        />
                        <input onClick={postAnswer}  type="submit" value="Submit" />
                    </div>
                </Card>     
            </Grid>
        </Grid>

    return content;
}

export default Question;