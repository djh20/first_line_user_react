import PostDetailCard from './PostDetailCard'
import ReplyInputField from './ReplyInputField'
import ReplyView from './ReplyView'
import {observer} from 'mobx-react'
import PostStore from '../../stores/PostStore'
import ReplyStore from '../../stores/ReplyStore'
import { IconButton, makeStyles, TextField } from '@material-ui/core'
import { useEffect } from 'react'
import React, {useState, useContext } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Typography } from '@material-ui/core'
import { autorun } from 'mobx'
import { useHistory } from 'react-router-dom';
import ReportIcon from '@material-ui/icons/Report';
const useStyles = makeStyles({
    root: {
        width:'80%',
        marginLeft:'15%'
      },
      cards:{
        width:'80%',
        overflowY: 'hidden',
      },
      post:{
        marginBottom : '30%'
      },
      deleteBtn : {
        backgroundColor : 'red',
        float : "right",
        margin : '2%'
      },
      editBtn : {
        backgroundColor : 'red',
        float : "right",
        margin : '2%'
      },
      replyView : {
        marginTop : '10%'
      },
      recommand : {
          fontSize : '3rem',
          display : 'flex',
      },
      postReportBtn: {
        fontSize : '3rem',
      },
    //   recommandWrapper : {
    //   },
    //   reportWrapper : {
    //     verticalAlign:'top',
    //     float :'right',
    //   },
      likeNum : {
        fontSize : '1.3rem',
        fontWeight : 'bold',
        color : 'white',
      },
      iconWrapper:{
          width: '80%',
          display : 'flex',
          flexDirection: 'row',
          justifyContent:'center'
      }

});

const PostDetailView = observer( (props) => {
    const classes = useStyles();
    const [post, setPost] = useState(null);
    const postStore = useContext(PostStore.context)
    const replyStore = useContext(ReplyStore.context)
    const post_id = props.match.params.post_id
    const [isMyPost,setIsMyPost] = useState(false)
    const history = useHistory();
    
    useEffect(() => {
        postStore.readPost(post_id).then(post=>{
            setPost(post)
        })
    },[]);

    const deletePost = (e) => {
        e.preventDefault();
        postStore.deletePost(post_id).then(result => {
            if(result == true){
                window.location.reload()
            }else{
                alert("게시글 삭제에 실패했습니다")
            }
        })
    }
    
    const editPost = (e) =>
    {
        e.preventDefault();
        history.push("/post/write");
    }

    return(
        <div className={classes.root}>
            
                {
                    post == null ? "" : (
                        <div>
                        <Grid alignItems="flex-end" className={classes.cards} align="center">                            
                            <PostDetailCard className = {classes.post }post = {post} ></PostDetailCard>   
                            {
                                isMyPost == false ? "" :(
                                    <div id="myReplyBtnGroup">
                                        <Button className={classes.deleteBtn} onClick={deletePost} >
                                            삭제
                                        </Button>
                                        <Button className={classes.editBtn}> onClick={editPost}
                                            수정
                                        </Button>
                                    </div> 
                                )
                            }
                            <div className={classes.iconWrapper}>
                                <div className={classes.recommandWrapper}>
                                    <IconButton><FavoriteBorderIcon className={classes.recommand} color='primary'/></IconButton>
                                    <Typography className={classes.likeNum} >0</Typography>
                                </div>
                                <div className={classes.reportWrapper}>
                                <IconButton><ReportIcon className = {classes.postReportBtn} color= 'secondary'></ReportIcon></IconButton>
                                </div>
                            </div>
                            <ReplyView className={classes.replyView} post_id={post_id}></ReplyView>
                                                    
                            </Grid>
                        </div>
                        
                                     
                    )
                }
        </div>
    )
    

}
)
    export default PostDetailView