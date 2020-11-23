import React, {useState} from 'react'
import { makeStyles , theme} from '@material-ui/core/styles'
import { Typography, IconButton } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import ReplyReportDialog from '../report/ReplyReportDialog'
import EditIcon from '@material-ui/icons/Edit';
import Input from "@material-ui/core/Input";
import ReplyStore from '../../stores/ReplyStore'
import DeleteIcon from '@material-ui/icons/Delete';
import { green, indigo } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import SnackbarStore from '../../stores/SnackbarStore'
const useStyles = makeStyles((theme) =>({
    root : {
        width : '80%',
    },
    content : {
        minWidth: '85%',
        display:'inline'
    },
    text : {
        marginTop: '1%',
        fontSize : '1rem',
        color: 'white'
    },
    bottom : {
        fontSize : '0.7rem',
        color: 'white',
        marginBottom : '1%'
    },
    reportBtn : {
        display:'inline'
    },
    btn:{
        fontSize : '1rem',
        margin : 0,
        padding :0
    },
    btnWrapper:{
        margin : 0,
        marginLeft: '10%',
        padding :0
    },
    iconWrapper:{
        minWidth: '15%',
        height: '1%',
        justifyContent: 'flex-end',
        display: 'flex',
    },
    myIcons:{
        display: 'flex',
        margin : 0,
        padding :0
    },
    contentWrapper:{
        width:'100%',
        display: 'flex',
    },
    modifyInput : {
        width : '70%',
        color : 'white',
        marginBottom : '4%',
        marginRight : '5%'
    },
    modifyButton : {
        marginLeft : '1%',
        backgroundColor : '#eabc28'
    }
}))
export default function ReplyCard(props){
    const classes = useStyles();
    const [modifyMode,setModifyMode] = React.useState(false)
    const isMine = props.reply.isMine
    const modifyText = React.useRef()
    const replyStore = React.useContext(ReplyStore.context)
    const histroy = useHistory()

    function modifyReply(){
        replyStore.modifyReply(props.reply.reply_id, modifyText.current.value).then(result=>{
            if(result == 200){
                setModifyMode(!modifyMode)
                histroy.push("/post/detail/"+props.reply.post_id, { update: true })
                SnackbarStore.pushMessage("성공적으로 수정되었습니다", true)
            }else{
                SnackbarStore.pushMessage("댓글 수정에 실패했습니다", false)
            }
        })
    }
    function deleteReply(){
        replyStore.deleteReply(props.reply.reply_id).then(result=>{
            if(result == 200){
                SnackbarStore.pushMessage("성공적으로 삭제되었습니다", true)
                histroy.push("/post/detail/"+props.reply.post_id, { update: true })
            }else{
                SnackbarStore.pushMessage("댓글 삭제에 실패했습니다", false)
            }
        })
    }
    return(
        <div className={classes.root}>
            <hr></hr>
            {
                modifyMode == false ? 
                (
                <div className={classes.contentWrapper}>
                    <div className={classes.content}>
                        <Typography className={classes.text}>
                            {props.reply.text}
                        </Typography>
                        <Typography className={classes.bottom}>
                            {props.reply.writer} · {props.reply.writing_date}
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                    {
                        isMine == true ? 
                        (
                            <span className={classes.myIcons}>
                            <IconButton  className={classes.btnWrapper} onClick={()=>{setModifyMode(true)}}><EditIcon className={classes.btn} style={{ color: green[500] }}/></IconButton> 
                            <IconButton  className={classes.btnWrapper} onClick={deleteReply}><DeleteIcon className={classes.btn} style={{ color: indigo[500] }}/></IconButton> 
                            </span>
                        )
                        : <div className={classes.iconWrapper}/>
                    }
                    <ReplyReportDialog reply_id={props.reply.reply_id}/>    
                    </div>
                </div> 
                )
                :
                (
                <div>
                <Input 
                id="text" 
                className={classes.modifyInput} 
                defaultValue={props.reply.text}
                inputRef={modifyText}
                 />
                <Button className={classes.modifyButton} onClick={modifyReply}>수정</Button>
                </div>
                )
            }
        </div>
    )
}