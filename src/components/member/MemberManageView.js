import {observer} from 'mobx-react'
import React, {useState, useContext,useEffect  } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography} from '@material-ui/core'
import MemberStore from '../../stores/MemberStore'
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles({
    root:{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop : '5%'
    },
    nickname : {
        color : 'white',
        fontSize : "1.3rem"
    },
    userIcon : {
        fontSize : "10rem",
        color : "#eabc28"
    },
    editBtn : {
        marginTop : '2%',
    },
    AppBar : {
        marginTop : '5%',
        backgroundColor : '#2a2a40',
    }
})
const MemberDetailView = observer((props) => {
    const classes = useStyles();
    const memberStore = useContext(MemberStore.context)
    const [member,setMember] = useState(null);
    const [id,setId] = useState("");
    const [pw,setPw] = useState("");
    const [name,setName] = useState("");
    const [nickname,setNickname] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [email,setEmail] = useState("");
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        memberStore.readMember().then(member =>{
            setMember(member)
            setId(member.data.id)
            setPw(member.data.pw)
            setName(member.data.name)
            setNickname(member.data.nickname)
            setAge(member.data.age)
            setGender(member.data.gender)
            setPhonenumber(member.data.phonenumber)
            setEmail(member.data.email)
        })
    },[]);
    
    return (
        <div className={classes.root}>
            <Grid container direction="row"alignItems="center" > 
                <FaceTwoToneIcon className={classes.userIcon} color="secondary" />
                <div>
                    <Typography className={classes.nickname}>{nickname}</Typography>
                    <Button className={classes.editBtn} variant="contained" color="primary" size="small">
                        회원정보 수정</Button>
                </div>
            </Grid>
            <AppBar className={classes.AppBar} position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="회원정보 보기"/>
                    <Tab label="작성 글 보기"/>
                    <Tab label="작성 댓글 보기" />
                </Tabs>
            </AppBar>
        </div>
    )
})


export default MemberDetailView