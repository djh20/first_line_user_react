import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import PostStore from '../../stores/PostStore'
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    gridContainer: {
      marginTop: "2%",
    },
    editor: {
      color: "black",
      background: "white",
      width: "50%",
      height: "30%",
    },
  });


  const PostDetailView = observer((props) => {
      const classes = useStyles();
      const [posts, setPosts]
      const postStore = useContext(PostStore.context)
      useEffect(() => {
        async function fetchData() {
          const result = await postStore.readPost(props.post_id)
          if (result != null)
              setPosts(result)
        }
          fetchData()
        }
    ,[]);
        return(
          <div className={classes.root}>          
          <Grid Container spacing={0} className={classes.gridContainer}>
          {
                Object.keys(posts).map((key, index) => ( 
                  <Grid item className={classes.cards} align="center" >
                  <PostCard marginBottom="2%" cardWidth='80%' title={posts[key]['title']} content={posts[key]['content']}></PostCard>
                </Grid>
                ))
          }
          </Grid>
          </div>
        )
  }
  )


  export default PostDetailView;