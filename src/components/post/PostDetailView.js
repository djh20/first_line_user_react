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
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core'
import { autorun } from 'mobx'
import { useHistory } from 'react-router-dom';
import ReportIcon from '@material-ui/icons/Report';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import { green, indigo } from '@material-ui/core/colors';
import PostReportDialog from '../report/PostReportDialog'
import ReplyReportDialog from '../report/ReplyReportDialog'
const useStyles = makeStyles({
    root: {
        "@media (min-device-width: 481px)": {// PC
            width:'80%',
            marginLeft:'15%'
        },
        "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
            width:'100%',
            padding:"10%"      
        }
        
      },
      cards:{
        "@media (min-device-width: 481px)": {// PC
            width:'80%',
            overflowY: 'hidden',
        },
        "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
            width:'100%',
            overflowY: 'hidden',       
        }
       
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
      likeNum : {
        fontSize : '1.3rem',
        fontWeight : 'bold',
        color : 'white',
      },
      modifyDeleteIconWrapper:{
        width: '80%',
        display : 'flex',
        flexDirection: 'row',
        justifyContent:'flex-end',
    },
      likeReportIconWrapper:{
          width: '80%',
          display : 'flex',
          flexDirection: 'row',
          justifyContent:'center',
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
            console.log(post)
            setPost(post)
        })
    },[]);

    const deleteMyPost = (e) => {
        e.preventDefault();
        postStore.deleteMyPost(post_id).then(result => {
            if(result == true){
                alert("게시글이 성공적으로 삭제되었습니다")
                window.location.replace("/")
            }else{
                alert("게시글 삭제에 실패했습니다")
            }
        })
    }
    
    function likePost(){
        postStore.likePost(post_id).then(result => {
            if(result == true){
                window.location.reload()
            }else{
                alert("게시글 좋아요에 실패했습니다")
            }
        })
    }

    return(
        <div className={classes.root}>
            
                {
                    post == null ? "" : (
                        <div>
                        <Grid alignItems="flex-end" className={classes.cards} align="center">                            
                            <PostDetailCard className = {classes.post }post = {post} ></PostDetailCard>   
                            {
                                post.isMyPost == false ? "" :(
                                    <div className={classes.modifyDeleteIconWrapper}>
                                        <Link to={{
                                            pathname: "/post/write",
                                            state: { 
                                                old_post_id: post.post_id,
                                                old_title: post.title,
                                                old_text: post.text,
                                                old_keyword: post.keyword,
                                                old_tag: post.tag,
                                             }
                                        }}>
                                            <IconButton>
                                        <EditIcon style={{ color: green[500] }} fontSize="big"/>
                                        </IconButton>
                                        </Link>
                                        <IconButton onClick={deleteMyPost}>
                                            <DeleteIcon style={{ color: indigo[500] }} fontSize="big"></DeleteIcon>
                                        </IconButton>
                                    </div> 
                                )
                            }
                            <div className={classes.likeReportIconWrapper}>
                                <div className={classes.recommandWrapper}>
                                <IconButton onClick={likePost}>
                                        {
                                            post.isLike == false ? 
                                            (
                                            <FavoriteBorderIcon className={classes.recommand} color='primary'/>
                                            ) 
                                            :
                                            (
                                            <FavoriteIcon className={classes.recommand} color='primary'/>
                                            )
                                        }
                                        </IconButton>
                                    <Typography className={classes.likeNum} >{post.num_good}</Typography>
                                </div>
                                <div className={classes.reportWrapper}>
                                    <PostReportDialog post_id={post_id}/>
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