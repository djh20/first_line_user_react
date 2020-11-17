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
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import MemberInfoTab from './MemberInfoTab'
import MemberPostTab from './MemberPostTab'
import { useHistory } from 'react-router-dom';
import PostStore from '../../stores/PostStore';

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
    },
    member : {
      width : '100%'
    }
})

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MemberDetailView = observer((props) => {
    const classes = useStyles();
    const memberStore = useContext(MemberStore.context)
    const [member,setMember] = useState(null);
    const [nickname,setNickname] = useState("");
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    useEffect(() => {
        memberStore.readMember().then(member=>{
            setMember(member)
            setNickname(member.nickname)
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
            <TabPanel value={value} index={0}>
                <MemberInfoTab/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MemberPostTab/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    )
})


export default MemberDetailView