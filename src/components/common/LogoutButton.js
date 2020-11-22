import React, {useState} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  popover: {
  }
}));


function LogoutButton(props){
  const classes = useStyles();
  const history = useHistory()
  const removeCookie = props.removeCookie
  const setHasCookie = props.setHasCookie
  function linkToMyPage(){
    removeCookie('jwt', { path: '/' })
    setHasCookie(false)
    history.push("/login")
  }
return (
    <div style={{display:'inline'}} >
      <IconButton color="inherit" onClick={linkToMyPage}>
        <ExitToAppIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

  export default LogoutButton;