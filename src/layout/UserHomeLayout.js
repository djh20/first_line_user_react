import React, {useState, useContext, useEffect } from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from '@material-ui/core';
import { Menu, ChevronLeft, Home, Inbox, Mail } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import AccountButton from '../components/common/AccountButton'
import UserInfoPopOver from "../components/member/UserInfoPopOver"
import SearchSpace from '../components/common/SearchSpace';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import HotelIcon from '@material-ui/icons/Hotel';

const useStyle = makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100%',
    },
    title : {
        fontSize :"1.5rem",
        fontStyle : 'solid',
        color : '#eabc28',
        flexGrow: 1,
    },
    listItemText :{
        fontSize : "2rem",
        fontStyle : 'solid',
        color : 'black'
    },
    toolBar:{
        position:"fixed",
        width:"100%",
        height: '7vh',
    },
    appBar:{
        width : "100%",
        height : "7%",
        transition : "all 0.2s",
        background : "#2a2a40"
    },
    drawer:{
        "@media (min-device-width: 481px)": { // PC
            width : '20vw'
          },
        "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
            width : '70vw'  
        }
    },
    accountIconArea:{
        marginRight:'2%'
    },
    drawerIconArea:{
        display: 'flex', 
        justifyContent: 'flex-end'
    },
    contentArea:{
        width: '96vw',
        minHeight:'93vh',
        background:"#2a2a40", 
        marginTop:'7vh', 
        position:'sticky'
    }
}))



function UserHomeLayout(props){
    
    const { children } = props;
    const [open, setState] = useState(false);
    const classes = useStyle();
    const cookies = props.cookies
    const setHasCookie = props.setHasCookie
    const removeCookie = props.removeCookie
    const hasCookie = props.hasCookie

    return(
         <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar className={classes.toolBar} alignItems="flex-end" position="fixed">
                    <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => setState(!open)}>
                        <Menu />
                    </IconButton>
                    <div className={classes.title}>
                         첫 줄
                    </div>
                    <SearchSpace />
                    <div alignSelf="flex-end" className={classes.accountIconArea}>
                            {
                            hasCookie === false ? <AccountButton removeCookie={removeCookie} dialog={SignInPopOver} setHasCookie={setHasCookie} /> :
                                                    <AccountButton removeCookie={removeCookie} dialog={UserInfoPopOver} setHasCookie={setHasCookie} />
                            }               
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer open={open} className={classes.drawer}>
                <div className={classes.drawer}>
                    <div className={classes.drawerIconArea}>
                        <IconButton onClick={() => setState(!open)}>
                            <ChevronLeft />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link  href='/'>
                        <ListItem button>
                            <ListItemIcon><Home /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>홈</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  href='/warm'>
                        <ListItem button>
                            <ListItemIcon><HotelIcon /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>따뜻한</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  href='/hot'>
                        <ListItem button>
                            <ListItemIcon><FireplaceIcon /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>뜨거운</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  href='/cold'>
                        <ListItem button>
                            <ListItemIcon><AcUnitIcon /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>차가운</ListItemText>
                        </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
            <div className={classes.contentArea}>
                        {children}
            </div>
    </div>
    );
}

export default UserHomeLayout;

