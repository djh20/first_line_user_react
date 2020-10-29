import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {observer} from 'mobx-react'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));



const UserInfoPopOver = observer( (props) => {
    const classes = useStyles();
    const handleClose = props.dialogClose
    const removeCookie = props.removeCookie
    const setHasCookie = props.setHasCookie
    function logout(e){
      e.preventDefault()
      removeCookie('jwt', { path: '/' })
      alert("로그아웃 되었습니다")
      setHasCookie(false)
      
      handleClose()
    }

    return (
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
    );
  }
)

export default UserInfoPopOver