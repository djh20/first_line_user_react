import React, {useContext, useRef, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MemberStore from '../../stores/MemberStore'
import {observer} from "mobx-react"
import Modal from '@material-ui/core/Modal';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import ChangePwDialog from './ChangePwDialog'
import SnackbarStore from '../../stores/SnackbarStore'
import LoginImage from "./src/login.png";
const useStyles = makeStyles((theme) => ({
  root: {
    height: '92vh',
  },
  image: {
    backgroundImage: 'url(' + LoginImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '101% 100%',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
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

const SignInView = observer( (props) => {
    const classes = useStyles();
    const id = useRef("")
    const pw = useRef("")
    const [open,setOpen] = useState(false);
    const [code, setCode] = React.useState(0);
    const [message, setMessage] = React.useState("");
    const setHasCookie = props.setHasCookie
    const memberStore = useContext(MemberStore.context)
    function login(e){
      e.preventDefault()
      if(id.current.value != "" && pw.current.value != ""){
            memberStore.login(id.current.value,pw.current.value).then(result =>{
              if(result.status == 200){
                setHasCookie(true)
                SnackbarStore.pushMessage("로그인에 성공했습니다", true)
              }
              else
                SnackbarStore.pushMessage("로그인에 실패했습니다", false)
          }
        )
      }else{
        SnackbarStore.pushMessage("아이디와 비밀번호를 입력해주세요", false)
      }
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
              로그인
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="아이디"
                name="id"
                autoComplete="email"
                autoFocus
                inputRef={id}
                required
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
                inputRef={pw}
                autoComplete="current-password"
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={login}
                required
              >
                {"로그인"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <ChangePwDialog/>
                </Grid>
                <Grid item>
                <Link   
                        to={{
                            pathname: "/signup",
                        }}
                        style={{ textDecoration: 'none' }}
                        >
                    {"계정이 없으신가요?"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => {setOpen(false)}}>
            {
                code == 1 ?(
                <Alert onClose={() => {setOpen(false)}} severity="error">
                    {message}
                </Alert>):(
                <Alert onClose={() => {setOpen(false)}} severity="success">
                    {message}
                </Alert>
                )
            }
      </Snackbar>
      </Grid>
      
    );

  })
export default SignInView