import React from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

import ShareButton from "./ShareButton";

const ArrowCounter = ({upVote, downVote, index, classes,question}) => {
    return(
        <div>
            <Box>
            <div className={classes.icons}>
                <div >
                        <IconButton onClick={() => upVote(index)} aria-label="Up">
                            <ArrowUpward
                                className={(question.upVote >= 0) ? classes.positiveIcon : classes.negativeIcon}
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => downVote(index)} aria-label="Down"
                        >
                            <ArrowDownward
                            className={(question.upVote >= 0) ? classes.negativeIcon : classes.positiv}
                            />
                        </IconButton>
                </div> 
                    <div>
                        <ShareButton />   
                    </div>  
            </div>
               
            </Box>
        </div>
    )
}

export default ArrowCounter;