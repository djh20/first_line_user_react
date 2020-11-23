import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MemberStore from '../../stores/MemberStore'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MemberPwDialog from './MemberPwDialog';

export default function MemberInfoDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [barOpen, setBarOpen]= React.useState(false);
    const [code, setCode] = React.useState(0);
    const [genderOpen, setGenderOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const defult_id = props.id
    const defult_name = props.name
    const defult_nickname = props.nickname
    const defult_age = props.age
    const defult_gender = props.gender
    const defult_phonenumber = props.phonenumber
    const defult_email = props.email
    const id = useRef()
    const name = useRef()
    const nickname = useRef()
    const age = useRef()
    const gender = useRef()
    const phonenumber = useRef()
    const email = useRef()
    const memberStore = React.useContext(MemberStore.context)
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        memberStore.createMember(id.current.value, "", name.current.value,nickname.current.value,age.current.value,
            gender.current.value,phonenumber.current.value,email.current.value).then(result => {
            if(result['status'] == 200)
            {
                setCode(1)
                window.location.reload();
            }      
            else
                setCode(2)
            setOpen(false)
            setBarOpen(true)
            setMessage(result['data']['message'])
        })
    };

    const selectClose = () => {
        setGenderOpen(false);
    };

    const selectOpen = () => {
        setGenderOpen(true);
    };

    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
            회원정보수정
        </Button>
        <Dialog open={open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">회원 정보 수정</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    inputRef={id}
                    defaultValue={defult_id}
                    label="아이디"
                    type="text"
                    fullWidth
                    InputProps={{
                    readOnly: true,
                    }}
                />
                <TextField
                    margin="dense"
                    id="name"
                    inputRef={name}
                    defaultValue={defult_name}
                    label="이름"
                    type="text"
                    multiline
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="nickname"
                    inputRef={nickname}
                    defaultValue={defult_nickname}
                    label="필명"
                    type="text"
                    multiline
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="age"
                    inputRef={age}
                    defaultValue={defult_age}
                    label="나이"
                    type="number"
                    multiline
                    fullWidth
                />
                
                {
                defult_gender == '남성' ?(
                <Select   
                    defaultValue={true}
                    onClose={selectClose}
                    onOpen={selectOpen}
                    inputRef={gender}
                >
                    <MenuItem value={false}>여성</MenuItem>
                    <MenuItem value={true}>남성</MenuItem>
                </Select>):(
                <Select       
                    defaultValue={false}
                    onClose={selectClose}
                    onOpen={selectOpen}
                    inputRef={gender}
                >
                    <MenuItem value={false}>여성</MenuItem>
                    <MenuItem value={true}>남성</MenuItem>
                </Select>
                )
                }
                <TextField
                    margin="dense"
                    id="phonenumber"
                    inputRef={phonenumber}
                    defaultValue={defult_phonenumber}
                    label="휴대전화번호"
                    type="phonenumber"
                    multiline
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="email"
                    inputRef={email}
                    defaultValue={defult_email}
                    label="이메일"
                    type="number"
                    multiline
                    fullWidth
                />
                <MemberPwDialog></MemberPwDialog>
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