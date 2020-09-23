import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostCard from './PostCard'
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import axios from 'axios'
import Link from '@material-ui/core/Link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import PostStore from '../../stores/PostStore'


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
      },
      editIconBox:{
        marginRight: "5%",
        marginBottom: "3%",
        float: 'right',
        pointerEvents:'auto',
      },
      editIconButton:{
          background:'yellow',
      },
      test:{
        position : 'fixed',
        height:"90%",
        width:"100%",
        pointerEvents:'none',
      },
      gridContainer:{
          width:'100%',
          margin : 0,
          overflow:'hidden'
      }
  });

const UserPostView = observer( (props) => {
      const classes = useStyles();
      const [posts, setPosts] = useState({ posts: [] });
      const postStore = useContext(PostStore.context)
      useEffect(() => {
          async function fetchData() {
            const result = await postStore.readAll()
            if (result != null)
              setPosts(result)
          }
            fetchData()
          }
      ,[]);

      return(
          <div className={classes.root}>

          
          <Grid container edge="end" justify="flex-end" alignItems="flex-end" className={classes.test}>
          <Link href="/post/write" className={classes.editIconBox}>
              <Fab className={classes.editIconButton}>
              <EditIcon/>
              </Fab>
          </Link>
          </Grid>
          <Grid Container spacing={0} className={classes.gridContainer}>
          {
            !posts === null ? (null) : 
              (
                Object.keys(posts).map((key, index) => ( 
                  <Grid item className={classes.cards} align="center" >
                  <PostCard marginBottom="2%" cardWidth='80%' title={posts[key]['title']} content={posts[key]['content']}></PostCard>
                </Grid>
                ))
              )
          }

          </Grid>

          </div>
      )
  }
)
export default UserPostView