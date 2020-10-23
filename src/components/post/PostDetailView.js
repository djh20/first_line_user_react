import PostCard from './PostCard'
import {observer} from 'mobx-react'
import PostStore from '../../stores/PostStore'
import { makeStyles } from '@material-ui/core'
import { useEffect } from 'react'
import React, {useState, useContext } from "react";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        width:'100%',
        overflow:'hidden'
      },
      cards:{
        width:'100%',
        margin : 0,
        padding : 0,
        overflowY: 'hidden'
      }     
})


const PostDetailView = observer( (props) => {
    const classes = useStyles();
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

    return(
        <div className={classes.root}>
            <Grid alignItems="flex-end" className={classes.cards} align="center">
                <PostCard post = {post}></PostCard>
                <Button id = 'postReportBtn' >신고</Button>
            </Grid>
        </div>
    )
}
)
    export default PostDetailView