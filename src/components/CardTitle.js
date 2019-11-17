import React from 'react';
import Typography from "@material-ui/core/Typography";

const CardTitle = ({question, classes}) => {
    return(
        <div className={classes.title}>
            <Typography >{question.title}</Typography>
            <Typography >{question.subtitle}</Typography>
        </div>
    )
}


export default CardTitle;