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

