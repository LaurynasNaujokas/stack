import React from 'react';
import Button from '@material-ui/core/Button';

const ShareButton = () => {
    return (
        <Button onClick={() => alert("Good luck sharing that")}>Share</Button>
    )
}

export default ShareButton;