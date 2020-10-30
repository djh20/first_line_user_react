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
    var old_title, old_text, old_checked, old_keyword, old_tag

    props.title == undefined ? old_title='': old_title=props.title
    props.text == undefined ? old_text='': old_text=props.text
    props.checked == undefined ? old_checked=true : old_checked=props.checked
    props.keyword == undefined ? old_keyword=[] : old_keyword=props.keyword
    props.tag == undefined ? old_tag=[] : old_tag=props.tag

    const classes = useStyles();
    const title = useRef(old_title);
    const [text, setText] = useState(old_text);
    const [tags, setTags] = useState(old_tag);
    const [checked, setChecked] = useState(old_checked);
    const [keyword, setKeyword] = useState(old_keyword);
    const addPost = () => {
        var usedKeyword = (checked == "true" ? keyword: "" )
        postStore.addPost(title.current.value, text, tags, usedKeyword).then(result =>{
          if(result){
            alert("작품이 게시되었습니다");
            window.location.replace("/")
          }
          else{
            alert("작품 게시에 실패하였습니다");
            handleClose();
          }
        })
    }
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
                              onClick={addPost}
                              fontSize="large"/>
                      </IconButton>
                  </Grid>
              </Grid>
            </Container>
        </div>
    )
}