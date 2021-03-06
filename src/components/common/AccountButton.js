import React, {useState} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  popover: {
  }
}));


function AccountButton(props){
  const classes = useStyles();
  const history = useHistory()
  function linkToMyPage(){
    history.push("/member/detail")
  }
return (
    <div style={{display:'inline'}} >
      <IconButton color="inherit" onClick={linkToMyPage}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

  export default AccountButton;