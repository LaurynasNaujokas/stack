import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { CardActions,  } from '@material-ui/core';

const CardIcons = () => {
    return(
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon  />
        </IconButton>
    </CardActions>
    )}

export default CardIcons;