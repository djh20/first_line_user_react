import React, {useState} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
import UserNoticePopOver from "../member/UserNoticePopOver"
import NoticeStore from '../../stores/NoticeStore'
import Badge from '@material-ui/core/Badge'
import {observer} from 'mobx-react'
import { useLocation } from "react-router-dom";

const NoticeButton = observer( (props) => {
  const removeCookie = props.removeCookie
  const setHasCookie = props.setHasCookie
  const hasCookie = props.hasCookie
  const noticeStore = React.useContext(NoticeStore.context)
  const location = useLocation();
  React.useEffect(()=>{
    noticeStore.readMyNotices()
  }, [location])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
return (
    <div style={{display:'inline'}}>
    <IconButton color="inherit">
      <Badge badgeContent={noticeStore.myNotices.length} color="secondary">
          <NotificationsIcon onClick={handleClick} fontSize="large" />
      </Badge>
    </IconButton>
      <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
      transitionDuration={0}
    >
      <UserNoticePopOver dialogClose={handleClose} removeCookie={removeCookie} setHasCookie={setHasCookie} hasCookie={hasCookie} setAnchor={setAnchorEl}/>
  </Popover>
    </div>
  );
})

  export default NoticeButton;