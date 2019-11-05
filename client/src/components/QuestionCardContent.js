import React from 'react';
import Typography from "@material-ui/core/Typography";

const QuestionCardCOntent = ({question}) => {
    return(
    <div>
        <Typography variant="h6" color="textSecondary" component="p">
            Question: {question.subtitle}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
            Votes : {question.upVote}
        </Typography>
    </div>
    )
}

export default QuestionCardCOntent