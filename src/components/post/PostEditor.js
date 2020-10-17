import React, { useState, useEffect, useRef, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PostStore from "../../stores/PostStore";
import { observer } from "mobx-react";
import { Redirect, useHistory } from "react-router-dom";
import { ToggleButton } from "@material-ui/lab";

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

const AddPost = observer((props) => {
  const classes = useStyles();
  const handleClose = props.dialogClose;
  const postStore = useContext(PostStore.context);
  const history = useHistory();
  const title = useRef("");
  const text = useRef("");

  function addPost(e) {
    e.preventDefault();
    if (postStore.addPost(title.current.value, text.current.value)) {
      alert("작품이 게시되었습니다");
      {
        history.push("/post");
      }
    } else {
      alert("작품 게시에 실패하였습니다");
      handleClose();
    }
  }

  function toBold(e)
  {
    var text = document.getElementById("text");
    text.style.fontStyle = bold;
  }

/* 이거 bold랑 Etalic하는거 함수가 작동을 안하네요.. 이유는 모르겠어서 일단 나중에 고칠게요. */

  function toEtalic()
  {
    var text = document.getElementById("text");
    text.style.fontStyle = italic;
  }

  return (
    <div className={classes.root}>
      <Grid Container className={classes.gridContainer}>
        <div style={{ padding: 20 }} className={classes.root}>
          <Grid Container item align="center">
            <TextField
              id="title"
              name="title"
              fullWidth
              placeholder="제목을 작성해주세요"
              autoFocus
              required
              className={classes.editor}
              style={{color:"black", textAlign:"center"}}
            />
          </Grid>
        </div>
        <div style={{ padding: 20 }} className={classes.root}>
          <Grid Container item align="center">
            <Button style={{ margin: 10 , backgroundColor : 'white'}} onclick={toBold}>굵게</Button>
            <Button style={{ margin: 10 , backgroundColor : 'white'}} onclick={toEtalic}>기울이기</Button>
          </Grid>
        </div>
        <div style={{ padding: 20 }} className={classes.root}>
          <Grid Container item align="center">
            <TextField
              position="fixed"
              id="text"
              name="text"
              fullWidth
              placeholder="본문을 작성해주세요"
              multiline
              required
              rows="30"
              className={classes.editor}
              style ={{marginLeft:120}}
            />
             <Button
                variant="contained"
                className={classes.submit}
                style={{ backgroundColor: "#eabc28", marginLeft:50}}
                type="submit"
                variant="contained"
                onClick={addPost}
              >
                발행
              </Button>
          </Grid>
        </div>
      </Grid>
    </div>  
  );
});

export default AddPost;
