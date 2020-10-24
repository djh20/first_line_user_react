import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root : {
        width : '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    content : {
        marginLeft : '1.7%',
        marginBottom : '1%',
    },
    text : {
        marginTop: '2%',
        fontSize : '1rem',
        color: 'white'
    },
    bottom : {
        fontSize : '0.7rem',
        color: 'white',
        marginLeft: '1%',
        marginBottom : '2%'
    },
    reportBtn : {
        float : "right",
        marginRight : '2%',
        backgroundColor : 'red',
        color : 'white'
    },
})
export default function ReplyCard(props){

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <hr></hr>
            <div className={classes.content}>
                <Button className={classes.reportBtn}>
                    신고
                </Button>
                <Typography className={classes.text}>
                    {props.reply.text}
                </Typography>
                <Typography className={classes.bottom}>
                    {props.reply.writer} · {props.reply.writing_date}
                </Typography>
            </div>
                    
        </div>
    )
}