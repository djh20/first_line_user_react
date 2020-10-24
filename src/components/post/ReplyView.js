<<<<<<< HEAD
import React, {useState, useEffect, useContext} from 'react'
import ReplyList from './ReplyList'
import ReplyInputField from './ReplyInputField'
import ReplyStore from '../../stores/ReplyStore'
import { makeStyles } from '@material-ui/core'
import {observer} from 'mobx-react'
const useStyles = makeStyles({
    root: {
       width:'100%',
     },
 });

const ReplyView = observer( (props) =>{
    const classes = useStyles()
    const replyStore = useContext(ReplyStore.context)
    useEffect(()=>{
        replyStore.readReples(props.post_id)
    },[])
    return(
        <div className={classes.root}>
            <div>
            <ReplyInputField post_id={props.post_id} />
            <ReplyList replies={replyStore.replies}></ReplyList>
            </div>
        </div>
    )
}
)
export default ReplyView
=======
import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root : {
        marginBottom: '2%',
    },
    text : {
        fontSize : '2rem',
        color: 'white'
    },
    writer : {
        fontSize : '1rem',
        color: 'white'
    },
    writing_date : {
        fontSize : '1rem',
        color: 'white'
    },
    reportBtn : {
        float : "right"
    }
})
export default function reply(props){

    const classes = useStyles();
    const  text = "나두 재롱이 보고싶어!"
    const writer = "김재롱"
    const writing_date = "20분 전"
    
    return(
        <div className={classes.root}>
            <div>
                    <Typography className={text}>
                        {text}
                    </Typography>
                    <Button className={classes.reportBtn}>
                        신고하기
                    </Button>
            </div>
            <div>
                <Typography className={classes.writer}>
                    {writer}
                </Typography>
                <Typography className={classes.writing_date}>
                    · {writing_date}
                </Typography>
            </div>
        </div>
    )
}
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd
