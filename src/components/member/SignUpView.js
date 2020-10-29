import React, {useRef, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MemberStore from '../../stores/MemberStore'
import Member from '../../models/Member'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpView(props) {
  const classes = useStyles();
  const setHasCookie = props.setHasCookie
  const memberStore = useContext(MemberStore.context)

  const id = useRef("")
  const pw = useRef("")
  const name = useRef("")
  const nickname = useRef("")
  const age = useRef("")
  const gender = useRef("")
  const phonenumber = useRef("")
  const email = useRef("")

  function register(e){
    e.preventDefault()
    if(id.current.value == "") {alert("아이디를 입력해주세요");return;}
    if(pw.current.value == "") {alert("비밀번호를 입력해주세요");return;}
    if(name.current.value == "") {alert("이름을 입력해주세요");return;}
    if(nickname.current.value == "") {alert("필명 입력해주세요");return;}
    if(age.current.value == "") {alert("나이를 입력해주세요");return;}
    if(gender.current.value == "") {alert("성별을 선택해주세요");return;}
    if(phonenumber.current.value == "") {alert("전화번호를 입력해주세요");return;}
    if(email.current.value == "") {alert("이메일을 입력해주세요");return;}
    var member = new Member(id.current.value,pw.current.value,name.current.value,
      nickname.current.value,age.current.value,gender.current.value,
      phonenumber.current.value,email.current.value)
    console.log(member)
    memberStore.register(member).then(res => {
      console.log(res)
      alert(res.data['message'])
        if(res.status == 200)
          setHasCookie(true)
    })

    
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원 가입
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="아이디"
              name="아이디"
              autoComplete="email"
              autoFocus
              inputRef={id}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={pw}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="성함"
              type="text"
              id="name"
              autoComplete="current-password"
              inputRef={name}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="nickname"
              label="필명"
              type="text"
              id="nickname"
              autoComplete="current-password"
              inputRef={nickname}
            /> 
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="나이"
              type="number"
              id="age"
              autoComplete="current-password"
              inputRef={age}
            /> 
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="gender"
              label="성별"
              type="text"
              id="gender"
              autoComplete="current-password"
              inputRef={gender}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phonenumber"
              label="전화번호"
              type="text"
              id="phonenumber"
              autoComplete="current-password"
              inputRef={phonenumber}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="이메일"
              type="email"
              id="email"
              autoComplete="current-password"
              inputRef={email}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={register}
            >
              {"회원가입"}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}