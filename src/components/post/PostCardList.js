import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PostCard from './PostCard'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
     root: {
        width:'100%',
        overflow:'hidden'
      },
      card:{
        width:'100%',
        margin : 0,
        padding : 0,
        overflowY: 'hidden'
      },
      postList:{
          width:'100%',
          margin : 0,
          overflow:'hidden'
      }
  });

export default function PostCardList(props){
    const classes = useStyles()
    return(
        <div className={classes.root}>
        <Grid Container spacing={0} className={classes.postList}>
          {
              props.posts.map((post,index) =>{
                return (
                  <Grid item className={classes.card} align="center" >
                  <PostCard  post={post}></PostCard>
                  </Grid>
                )
              })
          }
        </Grid>
        </div>
    )
}