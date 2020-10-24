import PostCard from './PostCard'
import ReplyInputField from './ReplyInputField'
import ReplyView from './ReplyView'
import {observer} from 'mobx-react'
import PostStore from '../../stores/PostStore'
import ReplyStore from '../../stores/ReplyStore'
import { makeStyles, TextField } from '@material-ui/core'
import { useEffect } from 'react'
import React, {useState, useContext } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        width:'100%',
        marginLeft: 'auto',
        marginRight: 'auto'
        // overflow:'hidden'
      },
      cards:{
        width:'100%',
        margin : 0,
        padding : 0,
        overflowY: 'hidden'
      }     
});


const PostDetailView = observer( (props) => {
    const classes = useStyles();
    const [post, setPost] = useState(null);
    const postStore = useContext(PostStore.context)
    const replyStore = useContext(ReplyStore.context)
    const post_id = props.match.params.post_id
    
    useEffect(() => {
        postStore.readPost(post_id).then(post=>{
            setPost(post)
        })
    },[]);

    return(
        <div className={classes.root}>
            <Grid alignItems="flex-end" className={classes.cards} align="center">
                {
                    post == null ? "" : (
                        <div>
                        <PostCard post = {post}></PostCard>
                        <Button className = {classes.postReportBtn} >신고</Button>
                        <ReplyView post_id={post_id}></ReplyView>
                    </div>
                    )
                }
            </Grid>
        </div>
    )
}
)
    export default PostDetailView