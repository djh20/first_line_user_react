import PostCard from './PostCard'
<<<<<<< HEAD
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
=======
import {observer} from 'mobx-react'
import PostStore from '../../stores/PostStore'
import { makeStyles } from '@material-ui/core'
import { useEffect } from 'react'
import React, {useState, useContext } from "react";
import Grid from '@material-ui/core/Grid';
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd

const useStyles = makeStyles({
    root: {
        width:'100%',
<<<<<<< HEAD
        marginLeft: 'auto',
        marginRight: 'auto'
      },
=======
        overflow:'hidden'
      },
      cards:{
        width:'100%',
        margin : 0,
        padding : 0,
        overflowY: 'hidden'
      }     
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd
})


const PostDetailView = observer( (props) => {
    const classes = useStyles();
<<<<<<< HEAD
    const [post, setPost] = useState(null);
    const postStore = useContext(PostStore.context)
    const replyStore = useContext(ReplyStore.context)
    const post_id = props.match.params.post_id
    
    useEffect(() => {
        postStore.readPost(post_id).then(post=>{
            setPost(post)
        })
    },[]);
=======
    const [post, setPost] = useState({post: []});
    const postStore = useContext(PostStore.context)
    const post_id = props.post_id;
    
    useEffect(() => {
        async function fetchData() {
            const result = await PostStore.readPost(post_id)
            setPost(result)
        }
        fetchData()
    }
    
    ,[]);
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd

    return(
        <div className={classes.root}>
            <Grid alignItems="flex-end" className={classes.cards} align="center">
<<<<<<< HEAD
                {
                    post == null ? "" : (
                        <div>
                        <PostCard post = {post}></PostCard>
                        <Button className = {classes.postReportBtn} >신고</Button>
                        <ReplyView post_id={post_id}></ReplyView>
                    </div>
                    )
                }
                

=======
                <PostCard post = {post}></PostCard>
                <Button id = 'postReportBtn' >신고</Button>
>>>>>>> e37e2bf14db5ab1f13791ec511cd289b3a2c9fdd
            </Grid>
        </div>
    )
}
)
    export default PostDetailView