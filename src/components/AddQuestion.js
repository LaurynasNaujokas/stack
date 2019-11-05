import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles( theme => ({
    container : {
        display : 'flex',
        flexWrap : 'wrap',
        alignItems : 'center',
        justifyContent : 'center'
    },
    textField : {
        marginLeft : theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    button : {
        margin : theme.spacing(1),
    }
}))


function AddQuestion(){
    const [value, setValue] = useState({
        title : '',
        subtitle : '',
        category : '',
        upVotes : 0,
        isCompleted : false,
    });

    const url = 'http://localhost:8080/api/v1/questions';

    //Posting input state to api
    const handleApi = e => { 
        e.preventDefault();
        (async () => {
            const rawResponse = await fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                title: value.title,
                subtitle: value.subtitle,
                category : value.category
            })
            });
            const content = await rawResponse.json();
          
            console.log(content);
          })();
       };

    const onChange = (event) => {
        setValue({ ...value, [event.target.name] : event.target.value});
    }

    const classes = useStyles();
    return(
    <div>
        <Typography variant="p" component="h4">Submit your question</Typography>
        <form className={classes.container} onSubmit={handleApi}>
            <div>
                <TextField
                    className={classes.textField}
                    id="standard-basic"
                    margin="normal"
                    value={value.title}
                    name="title"
                    onChange={onChange}
                    placeholder="Enter your title"
                />
            </div>
            <div>
                <TextField 
                    className={classes.textField}
                    id="standard-basic"
                    margin="normal"
                    value={value.subtitle}
                    name="subtitle"
                    onChange={onChange}
                    placeholder="Enter your subtitle"
                />
            </div>
            <div>
                <TextField
                    className={classes.textField}
                    id="standard-basic"
                    margin="normal"         
                    value={value.category}
                    name="category"
                    onChange={onChange}
                    placeholder="Choose category"
                />                
                <Button 
                    onClick={handleApi}
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >Submit Question
                </Button>
            </div>
        </form>
    </div>
    )
}

export default AddQuestion;