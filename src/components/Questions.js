import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ArrowCounter from './ArrowCounter';
import CardTitle from './CardTitle';
import CardLinkButton from './CardLinkButton';
import Loading from './Loading';

const useStyles = makeStyles( theme =>({
    card : {
        maxWidth : 500,
        minWidth : 500,
        maxHeight : 250,
        minHeight : 250,
        marginBottom : 40,
        marginTop : 40,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column', 
        margin : 5,
        padding : 20
    },
    title : {
        display : 'flex',
        background : 'whitesmoke',
        borderRadius : 3,
        padding : 20,
        position : 'absolute',
        marginTop : -140,
    },
    Grid : {
        display: 'flex',
        alignItems :'center',
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    Typography : {
        marginTop : 20
    },
    button : {
        margin: theme.spacing(1),
    },
    icons : {
        width: 400,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    negativeIcon : {
        color : 'red'
    },
    positiveIcon : {
        color : 'green'
    }
}));

function Questions({questions, upVote, downVote}){

    const classes = useStyles();
   
    
    let content = (!questions) ? <Loading /> : 
 
        <Grid container justify="center" alignItems="center" xs={12}> 
            <Typography className={classes.Typography} variant="h3" component="h2" >Questions</Typography>
        <Grid justify="center" alignItems="center" container item xs={12} spacing={1} className={classes.Grid}>
        {questions.map((question, index) => {
            
            return (        
                <Box>
                        <Card className={classes.card}>
                                <CardTitle 
                                    classes={classes}
                                    question={question}
                                />
                                <CardLinkButton 
                                    classes={classes}
                                    index={index}
                                    question={question}
                                />
                                    <p>Votes: {question.upVote}</p>
                                <ArrowCounter
                                    upVote={upVote}
                                    downVote={downVote}
                                    classes={classes}
                                    question={question}
                                    index={index}
                                />
                        </Card>
                </Box>
                )
            }
        )}
        </Grid>
    </Grid>
    return content;
}

export default Questions;