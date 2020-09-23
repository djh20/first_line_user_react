import React, {useState} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';

function AccountButton(props){
  const Dialog = props.dialog
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
return (
    <div>
    <IconButton color="inherit">
        <AccountCircleIcon onClick={handleClick} fontSize="large" />
    </IconButton>
    <Popover
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
  }}
  >
      <Dialog dialogClose={handleClose}></Dialog>
  </Popover>
    </div>
  );
}

  export default AccountButton;