  
import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {observer} from 'mobx-react'
import UserNoticeItem from './UserNoticeItem'
import NoticeStore from '../../stores/NoticeStore'
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight : '50vh',
    maxWidth : '20vw'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  content:{
    padding: theme.spacing(1),
  },
  item:{
    marginBottom: '2.5%',
    "&:last-child": {
      marginBottom: '10%'
    }
  }
}));



const UserNoticePopOver = observer( (props) => {
    const classes = useStyles();
    const noticeStore = useContext(NoticeStore.context)
    const setAnchor = props.setAnchor
    return (
        <div className={classes.paper}>
          <div className={classes.content}>
                {
                  noticeStore.myNotices.length > 0 ?(
                    Object.keys(noticeStore.myNotices).map((key,idx) => {
                        return (<UserNoticeItem className={classes.item} text={noticeStore.myNotices[key]['text']} send_datetime={noticeStore.myNotices[key]['send_datetime']} 
                        link={noticeStore.myNotices[key]['link']} notice_id={noticeStore.myNotices[key]['notice_id']} source_url={noticeStore.myNotices[key]['source_url']} 
                        setAnchor={setAnchor} />)
                    })
                  ) :(
                    <ListItemText classes={{primary:classes.text}} primary={"알람이 없습니다"}/>
                  )
                }
            </div>
        </div>
    );
  }
)

export default UserNoticePopOver