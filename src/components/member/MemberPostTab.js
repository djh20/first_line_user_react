import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {observer} from 'mobx-react'
import PostStore from '../../stores/PostStore'
import PostCardList from '../post/PostCardList'


const useStyles = makeStyles({
        root: {
            width:'100%',
            overflow:'hidden'
        }
    });

const MemberPostTab = observer( (props) => {
        const classes = useStyles();
        const postStore = useContext(PostStore.context)
        const [post ,setPost] = useState([])
        useEffect(() => {
            postStore.readMyPost().then(post=>{
                setPost(post)
            })
        },[]);
    

        return(
            <div className={classes.root}>
                <PostCardList posts={postStore.posts}/>
            </div>
        )
    }
)
export default MemberPostTab