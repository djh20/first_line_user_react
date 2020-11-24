import React, {useState, useEffect, Component, useRef, useContext} from 'react'
import { EditorState } from "draft-js";
import { IconButton, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import TextEditor from './TextEditor'
import { CenterFocusStrong } from '@material-ui/icons';
import TelegramIcon from '@material-ui/icons/Telegram';
import postStore from '../../stores/PostStore';
import Container from '@material-ui/core/Container';
import SnackbarStore from '../../stores/SnackbarStore'
import KeywordStore from '../../stores/KeywordStore';

const useStyles = makeStyles({
    root: {
        width:'100%',
        padding:'0%',
      },
      wrapper:{
        "@media (min-device-width: 481px)": {// PC
          width:'50%'
        },
        "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
          width:'100%'
        }
        
      },
      gridContainer:{
          marginTop : "2%",
      },textEditor:{
          margin: '0%',
          width: '40%'
      },button:{
          color: '#ffeb3b',
          borderRadius: '6px'
      }
    }
  );

export default function PostEditor(props){

    const old_post_id = props.location.state == undefined ? undefined : props.location.state.old_post_id
    const old_title = props.location.state == undefined ? undefined : props.location.state.old_title
    const old_text = props.location.state == undefined ? undefined : props.location.state.old_text
    const old_keyword = props.location.state == undefined ? undefined : props.location.state.old_keyword
    const old_tag = props.location.state == undefined ? undefined : props.location.state.old_tag
    const keywordStore = useContext(KeywordStore.context)
    const is_modify_mode = old_post_id == undefined ? false : true
    const classes = useStyles();
    const title = useRef();
    const [text, setText] = useState(old_text == undefined ? "<p> </p>" : old_text);
    const [tags, setTags] = useState(old_tag == undefined ? [] : old_tag);
    const [keyword, setKeyword] = useState(old_keyword == undefined ? "" : old_keyword);
    const [checked, setChecked] = useState(keyword == "" ? false : true);
    const addPost = () => {
      if(checked)
      {
        postStore.addPost(title.current.value, text, tags, keyword).then(result =>{
          if(result){
            SnackbarStore.pushMessage("성공적으로 게시되었습니다", true)
            window.location.replace("/")
          }
          else{
            SnackbarStore.pushMessage("작품 게시에 실패하였습니다", false)
          }
        })
      }
      else
      {
        postStore.addPost(title.current.value, text, tags, "").then(result =>{
          if(result){
            SnackbarStore.pushMessage("성공적으로 게시되었습니다", true)
            window.location.replace("/")
          }
          else{
            SnackbarStore.pushMessage("작품 게시에 실패하였습니다", false)
          }
        })
      }
      
    }

    const updatePost = () => {
      postStore.updatePost(old_post_id, title.current.value, text, tags, old_keyword).then(result =>{
        if(result){
          SnackbarStore.pushMessage("성공적으로 수정되었습니다", true)
          window.location.replace("/")
        }
        else{
          SnackbarStore.pushMessage("작품 수정에 실패했습니다", false)
        }
      })
  }


    React.useEffect(() => {
      title.current.value = old_title == undefined ? "" : old_title
      if(!is_modify_mode) 
        keywordStore.getTodayKeyword().then(keyword=>{
          setKeyword(keyword)
      })
    },[])
    return(
        <div className={classes.root}>
          <Container className={classes.wrapper}>
              <Grid Container spacing={5} className={classes.gridContainer} direction="column" align="center">
                  <Grid item xs = {12}>
                      
                  </Grid>
                  <Grid>
                      <TextEditor 
                      className={classes.textEditor} 
                      titleRef={title}
                      textState={setText}
                      text={text}
                      tagsState={tags}
                      setTagsState={setTags}
                      checked={checked}
                      setChecked={setChecked}
                      keyword={keyword}
                      setKeyword={setKeyword}
                      />
                  </Grid>
                  <Grid>
                      <IconButton>
                          <TelegramIcon 
                              className={classes.button}
                              type="submit"
                              onClick={is_modify_mode == false ? addPost : updatePost}
                              fontSize="large"/>
                      </IconButton>
                  </Grid>
              </Grid>
            </Container>
        </div>
    )
}