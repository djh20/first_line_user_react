import React, {useState} from 'react';
import {
    Button,
    DialogTitle,
    Dialog,
    DialogContent,
    DialogActions,
  } from "@material-ui/core";
  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  import { IconButton } from '@material-ui/core';
  import UserInfoPopOver from "./UserInfoPopOver"
  import Popover from '@material-ui/core/Popover';
  import Typography from '@material-ui/core/Typography';
  function UserInfoDialogButton(props){
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


     const [anchorEl, setAnchorEl] = useState(null);
     const open = Boolean(anchorEl);
     const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <IconButton color="inherit" selfAlign="flex-end">
            <AccountCircleIcon onClick={handleClick} fontSize="large" />
        </IconButton>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center ',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <UserInfoPopOver dialogClose={handleClose}></UserInfoPopOver>
      </Popover>
        </div>
      );
  }

  export default UserInfoDialogButton;