import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {observer} from 'mobx-react'
import PostStore from '../../stores/PostStore'
import ReplyStore from '../../stores/ReplyStore'
import PostWriteFloatButton from './PostWriteFloatButton'
import PostCardList from './PostCardList'

const useStyles = makeStyles({
    root: {
        width:'100%',
        overflow:'hidden'
      }
  });

const UserPostView = observer( (props) => {
      const classes = useStyles();
      const postStore = useContext(PostStore.context)
      const replyStore = useContext(ReplyStore.context)
      const searchCondition = props.searchCondition
      useEffect(() => {
        replyStore.reset()
        if(searchCondition != undefined)
          postStore.search(searchCondition,undefined,1);
        else
          postStore.readAll();
        }, [searchCondition]); 

      return(
          <div className={classes.root}>
          <PostWriteFloatButton/>
          <PostCardList posts={postStore.posts}/>
          </div>
      )
  }
)
export default UserPostView