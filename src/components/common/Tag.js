import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root:{
        width: '100%',
        height : '100%',
        marginRight: '1%',
        display :'inline'
    },
    tag:{
        background: 'linear-gradient(45deg, #2a2a40 30%, #464678 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 1% 2% 1% rgba(42, 42, 64, .3)',
        color: 'white',
        height: '100%',
        padding: '1% 0.5% 1% 0.5%',
        display :'inline'
    }
})
export default function Tag(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <span className={classes.tag}>#{props.tag}</span>
        </div>
    )
}