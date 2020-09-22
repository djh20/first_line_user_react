import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostCard from './PostCard'
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import axios from 'axios'
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
    root: {
        width:'100%',
      },
      cards:{
        width:'100%',
        margin : '0',
        padding : '0',
      },
      editIconButton:{
          float: 'right',
          pointerEvents:'auto',
          marginRight: "7vw",
          marginBottom: "7vh",
          background:'yellow',
      },
      test:{
        position : 'fixed',
        height:"90vh",
        width:"100vw",
        pointerEvents:'none',
      },
      gridContainer:{
          marginTop : "2vh",
      }
  });

export default function Post(){
    const classes = useStyles();
    const [posts, setPosts] = useState({ hits: [] });
    const [isRead, setIsRead] = useState(false)
    const test = "dasdas"
    // const loadPost = async () => {
    //     const result = await axios.get(
    //         `http://djh20.iptime.org:5000/api/post/all`
    //     );
    //     setPosts(result.data);
    //     setIsRead(true)
    //     console.log(posts)
    //   };
    //   loadPost()

      useEffect(async() => {
          async function get(){
            const result = await axios.get(
                `http://djh20.iptime.org:5000/api/post/all`
            );
            setPosts(result.data);
            setIsRead(true)
          }
        get()
      },[]);


    return(
        <div className={classes.root}>

        
        <Grid container edge="end" justify="flex-end" alignItems="flex-end" className={classes.test}>
        <Link href="/post/write">
            <Fab className={classes.editIconButton}>
            <EditIcon/>
            </Fab>
        </Link>

        </Grid>
        <Grid Container spacing={0} className={classes.gridContainer}>
        {
            !isRead ? (<li></li>) : (
                Object.keys(posts).map((key, index) => ( 
                    <Grid item className={classes.cards} align="center" >
                    <PostCard marginBottom="2vh" cardWidth='80%' title={posts[key]['title']} content={posts[key]['content']}></PostCard>
                   </Grid>
                  ))
            )
        }
        </Grid>

        </div>
    )
}