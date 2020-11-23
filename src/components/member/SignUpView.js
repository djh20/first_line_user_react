import React, {useRef, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MemberStore from '../../stores/MemberStore'
import Member from '../../models/Member'
import SnackbarStore from '../../stores/SnackbarStore'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
  select : {
    width : "100%"
  },
  label : {
      marginTop : "1.5%",
      fontSize : '0.8rem'
}
}));

export default function SignUpView(props) {
  const classes = useStyles();
  const setHasCookie = props.setHasCookie
  const memberStore = useContext(MemberStore.context)
  const [genderOpen, setGenderOpen] = React.useState(false);
  const id = useRef("")
  const pw = useRef("")
  const name = useRef("")
  const nickname = useRef("")
  const age = useRef("")
  const gender = useRef("")
  const phonenumber = useRef("")
  const email = useRef("")
  const selectClose = () => {
    setGenderOpen(false);
    console.log(gender.current.value)
  };

  const selectOpen = () => {
      setGenderOpen(true);
  };
  function register(e){
    e.preventDefault()
    if(id.current.value == "") {SnackbarStore.pushMessage("아이디를 입력해주세요", false);return;}
    if(pw.current.value == "") {SnackbarStore.pushMessage("비밀번호를 입력해주세요", false);return;}
    if(name.current.value == "") {SnackbarStore.pushMessage("이름을 입력해주세요", false);return;}
    if(nickname.current.value == "") {SnackbarStore.pushMessage("필명을 입력해주세요", false);return;}
    if(age.current.value == "") {SnackbarStore.pushMessage("나이를 입력해주세요", false);return;}
    if(gender.current.value == "") {SnackbarStore.pushMessage("성별을 선택해주세요", false);return;}
    if(phonenumber.current.value == "") {SnackbarStore.pushMessage("전화번호를 입력해주세요", false);return;}
    if(email.current.value == "") {SnackbarStore.pushMessage("이메일을 입력해주세요", false);return;}

    var member = new Member(id.current.value,pw.current.value,name.current.value,
      nickname.current.value,age.current.value,gender.current.value,
      phonenumber.current.value,email.current.value)
    console.log(member)
    memberStore.register(member).then(res => {
      
        if(res.status == 200){
          SnackbarStore.pushMessage(res.data['message'], true)
          setHasCookie(true)
        }else{
          SnackbarStore.pushMessage(res.data['message'], false)
        }
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
            <InputLabel className={classes.label}>
                성별
            </InputLabel>
            <Select   
              className={classes.select}
              onClose={selectClose}
              onOpen={selectOpen}
            >
              <MenuItem value={false}>여성</MenuItem>
              <MenuItem value={true}>남성</MenuItem>
            </Select>
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