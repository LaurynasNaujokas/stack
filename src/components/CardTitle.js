import React from 'react';
import Typography from "@material-ui/core/Typography";

const CardTitle = ({question, classes}) => {
    return(
        <div className={classes.title}>
            <Typography variant="p" component="p">{question.title}</Typography>
            <Typography variant="p" component="p">{question.subtitle}</Typography>
        </div>
    )
}


export default CardTitle;