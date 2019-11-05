import React from 'react';
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
    const classes = useStyles();
    const question = getquestionid(id);


    console.log(question);

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
                </Card>     
            </Grid>
        </Grid>

    return content;
}

export default Question;