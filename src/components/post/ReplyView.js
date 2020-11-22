import React, {useState, useEffect, useContext} from 'react'
import ReplyList from './ReplyList'
import ReplyInputField from './ReplyInputField'
import ReplyStore from '../../stores/ReplyStore'
import { makeStyles } from '@material-ui/core'
import {observer} from 'mobx-react'
import { useLocation } from "react-router-dom";
const useStyles = makeStyles({
    root: {
       width:'100%',
     },
 });

const ReplyView = observer( (props) =>{
    const classes = useStyles()
    const replyStore = useContext(ReplyStore.context)
    const location = useLocation();
    const update = location.state;
    useEffect(()=>{
        replyStore.readReplies(props.post_id)
    },[update])
    return(
        <div className={classes.root}>
            <div>
            <ReplyInputField color='white' post_id={props.post_id} />
            <ReplyList replies={replyStore.replies}></ReplyList>
            </div>
        </div>
    )
}
)
export default ReplyView