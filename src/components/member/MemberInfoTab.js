import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MemberStore from '../../stores/MemberStore'

const useStyles = makeStyles({
    root : {
        width : '100%',
    },
    content : {
        color : 'white'
    },
    floatingLabelFocusStyle : {
        color: "#eabc28"
    }
})
export default function MemberInfoTab(props) {
    const classes = useStyles();
    const memberStore = useContext(MemberStore.context)
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [nickname,setNickname] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [email,setEmail] = useState("");
    
    useEffect(() => {
        memberStore.readMember().then(member=>{
            setId(member.id)
            setNickname(member.nickname)
            setName(member.name)
            setAge(member.age)
            setGender(member.gender)
            setPhonenumber(member.phonenumber)
            setEmail(member.email)
            console.log(member)
    })
    },[]);

    return (
        <div className={classes.root}>
            <Grid spacing={4}>
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={id}
                label="아이디"
                type="text"
                multiline
                fullWidth
                hiddenLabel
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={name}
                label="이름"
                type="text"
                multiline
                fullWidth
                hiddenLabel
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={nickname}
                label="필명"
                type="text"
                multiline
                fullWidth
                hiddenLabel
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={age}
                label="나이"
                type="text"
                multiline
                fullWidth
                hiddenLabel
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={gender}
                label="성별"
                type="text"
                multiline
                fullWidth
                hiddenLabel
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={phonenumber}
                label="전화번호"
                type="text"
                multiline
                fullWidth
                hiddenLabel
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            />
            <TextField
                className={classes.textField}
                margin="dense"
                id="text"
                defaultValue={email}
                label="이메일"
                type="text"
                multiline
                fullWidth
                hiddenLabel
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                
                InputProps={{
                    className: classes.content,
                    readOnly: true,
                }}
            /> 
            </Grid>
        </div>
    );
}