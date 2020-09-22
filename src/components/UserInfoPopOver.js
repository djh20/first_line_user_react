import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { Alert, AlertTitle   } from '@material-ui/lab';
import { TextFieldsTwoTone } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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



export default function UserInfoPopOver(props) {
  const handleClose = props.dialogClose
  const classes = useStyles();
  const [id,setId] = useState("")
  const [pw,setpw] = useState("")

  function idChangeHandler(e){
    setId(e.target.value)
  }

  function pwChangeHandler(e){
    setpw(e.target.value)
  }

  async function logout(e){
    e.preventDefault()
    localStorage.removeItem('memberInfo')
    handleClose()
    window.location.reload();
    alert("로그아웃 되었습니다")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick ={logout}
          >
            로그아웃
          </Button>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}