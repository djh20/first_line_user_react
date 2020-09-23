import React, {useState, useContext, useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MemberStore from '../../stores/MemberStore'
import {observer} from "mobx-react"

var width 
if(window.outerWidth>500)
  width = '20vw'
else
  width = '90vw'



const useStyles = makeStyles((theme) => ({
  root:{
    width: width,
    padding : '4% 0 4% 0',
    backgroundColor: 'white',
  },
  verticalCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin:0,
    padding:0
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin:0,
    padding:0
  },
  form: {
    width: '80%', 
    margin:0,
    padding:0
  },
  horizontalCenter:{
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    margin:0,
    padding:0
  }

}));



const SignIn = observer( (props) => {
  const handleClose = props.dialogClose
  const classes = useStyles();
  const id = useRef("")
  const pw = useRef("null")
  const memberStore = useContext(MemberStore.context)

  function login(e){
    e.preventDefault()
    if(memberStore.login(id.current.value,pw.current.value)){
      alert("로그인 되었습니다")
      window.location.reload()
    }
    else{
      alert("로그인에 실패했습니다")
      handleClose();
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.horizontalCenter}>
        <div className={classes.verticalCenter}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="id"
              label="아이디"
              name="id"
              autoComplete="id"
              autoFocus
              style={{ marginTop:'5%'}}
              inputRef={id}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="pw"
              label="비밀번호"
              type="pw"
              id="pw"
              autoComplete="current-password"
              style={{ marginTop:'5%'}}
              inputRef={pw}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인 유지"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick ={login}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  아이디/비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  회원 가입
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
})

export default SignIn