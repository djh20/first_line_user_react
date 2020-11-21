import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NativeSelect from '@material-ui/core/NativeSelect';
import { fade, makeStyles } from '@material-ui/core/styles';
import ReportStore from '../../stores/ReportStore'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import ReportIcon from '@material-ui/icons/Report';
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles( (theme) => ({
  root:{
    margin : 0,
    padding :0,
    marginLeft: '8%'
  },
  postReportBtn: {
    fontSize : '1rem',
    margin : 0,
    padding :0
  },
}))


export default function ReplyReportDialog(props) {
  const [open, setOpen] = React.useState(false);
  const reply_id = props.reply_id
  const report_text = React.useRef()
  const classes = useStyles()
  const reportStore = React.useContext(ReportStore.context)
  const [code, setCode] = React.useState(0);
  const [barOpen, setBarOpen] = React.useState(false);
  const [message, setMessage] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const report = () => {
      reportStore.reportReply(reply_id,report_text.current.value).then(result =>{
         if(result.status == 200) {
           setCode(1)
         }
         else setCode(0)
         setBarOpen(true)
         setMessage(result['data']['message'])
      })
      setOpen(false)
  };




  return (
    <div className={classes.root}>
    <IconButton onClick={handleClickOpen} className={classes.root}>
        <ReportIcon className = {classes.postReportBtn} color= 'secondary'/>
    </IconButton>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">신고</DialogTitle>
        <DialogContent>
          <TextField
            id="report_text"
            inputRef={report_text}
            label="신고 내용"
            type="text"
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false)}} color="primary">
            취소
          </Button>
          <Button onClick={report} color="primary">
            등록
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={barOpen} autoHideDuration={6000} onClose={() => {setBarOpen(false)}}>
        {
        code == 1 ?(
        <Alert onClose={() => {setBarOpen(false)}} severity="success">
          {message}
        </Alert>):(
          <Alert onClose={() => {setBarOpen(false)}} severity="error">
          {message}
        </Alert>
        )
        }
      </Snackbar>
    </div>
  );
}