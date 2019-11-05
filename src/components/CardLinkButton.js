import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "@reach/router";

const CardLinkButton = ({classes, index, question}) => {
    return(
        <Link 
            className={classes.paper}
            id={question._id}
            key={index}
            index={index}
            to={`/question/${question._id}`}><Button color="primary" className={classes.button}>See more</Button>    
        </Link> 
    )
}

export default CardLinkButton;