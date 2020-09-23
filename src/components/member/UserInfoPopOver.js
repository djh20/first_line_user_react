import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberStore from '../../stores/MemberStore'
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
    const memberStore = useContext(MemberStore.context)

    function logout(e){
      e.preventDefault()
      memberStore.logout()
      alert("로그아웃 되었습니다")
      window.location.reload()
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