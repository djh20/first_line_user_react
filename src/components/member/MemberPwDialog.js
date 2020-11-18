import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MemberStore from '../../stores/MemberStore'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import FilledInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles( (theme) => ({
    root:{
        width:"100%",
        height:"100vh",
      },
}))
export default function MemberPwDialog(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [barOpen, setBarOpen]= React.useState(false);
    const [code, setCode] = React.useState(0);
    const [values, setValues] = React.useState({
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm:''
      });
    const memberStore = React.useContext(MemberStore.context)
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        if(values.newPassword != values.newPasswordConfirm){
            setCode(2)
            setOpen(false)
            setBarOpen(true)
        }
        else {
        memberStore.changePw(values.currentPassword,values.newPassword).then(result => {
            console.log(result)
            if(result == true)
            {
                setCode(1)
            }      
            else
                setCode(2)
            setOpen(false)
            setBarOpen(true)
        })
        setOpen(false)
        memberStore.readMember()
        }
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                비밀번호 변경
            </Button>
            <Dialog open={open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">회원 정보 수정</DialogTitle>
            <DialogContent>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">기존 비밀번호</InputLabel>
            <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.currentPassword}
                defaultValue={""}
                onChange={handleChange('currentPassword')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">새 비밀번호</InputLabel>
            <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.newPassword}
                onChange={handleChange('newPassword')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">새 비밀번호 확인</InputLabel>
            <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.newPasswordConfirm}
                onChange={handleChange('newPasswordConfirm')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    수정
                </Button> 
                <Button onClick={() => {setOpen(false) }} color="primary">
                    닫기
                </Button>
            </DialogActions>
            </Dialog>
            <Snackbar open={barOpen} autoHideDuration={6000} onClose={() => {setBarOpen(false)}}>
            {
            code == 1 ?(
            <Alert onClose={() => {setBarOpen(false)}} severity="success">
                수정 성공하였습니다.
            </Alert>):(
                <Alert onClose={() => {setBarOpen(false)}} severity="error">
                수정 실패하였습니다.
            </Alert>
            )
            }
        </Snackbar>
        </div>
    )
}