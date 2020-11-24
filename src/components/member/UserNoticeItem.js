import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {observer} from 'mobx-react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem'
import NoticeStore from '../../stores/NoticeStore'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  wrapper: {
    width: '100%',
    display: 'inline-flex',
  },
  textField: {
    marginRight:'3%',
    width : '15vw',
  },
  text: {
    fontSize : "1rem",
    color : 'black',
    
  },
  send_datetime: {
    fontSize : '0.8rem',
    color : 'black',
  },
  iconField:{
      alignSelf:'center',
      width : '10%'
  },
  link:{
      textDecoration:'None'
  }
}));



const UserNoticeItem = observer( (props) => {
    const classes = useStyles();
    const text = props.text
    const send_datetime = props.send_datetime
    const notice_id = props.notice_id
    const source_url = props.source_url
    const noticeStore = React.useContext(NoticeStore.context)
    const setAnchor = props.setAnchor;
    function deleteNotice(){
      if(noticeStore.myNotices.length == 1)
        setAnchor(null)
      noticeStore.deleteNotice(notice_id)
    }

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
            <Link to={source_url} style={{ textDecoration: 'none' }}>
                <ListItem button onClick={deleteNotice}>
                    <div className={classes.textField}>
                        <ListItemText classes={{primary:classes.text}} primary={text}/>
                        <ListItemText classes={{primary:classes.send_datetime}} primary={send_datetime} bold/>
                    </div>
                </ListItem>
            </Link>
                <div className={classes.iconField}>
                <IconButton onClick={deleteNotice}>
                        <ClearIcon/>
                </IconButton>
                </div>
            </div>
        </div>
    );
  }
)

export default UserNoticeItem