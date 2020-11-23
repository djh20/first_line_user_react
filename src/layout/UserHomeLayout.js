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
import {Link} from 'react-router-dom';
import LogoutButton from '../components/common/LogoutButton'
import AccountButton from '../components/common/AccountButton'
import SearchSpace from '../components/common/SearchSpace';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import HotelIcon from '@material-ui/icons/Hotel';
import { search } from '../controllers/PostController';
import NoticeButton from '../components/common/NoticeButton'

const useStyle = makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100%',
    },
    title : {
        flexGrow: 1,
        width:"17%"
    },
    titleText : {
        "@media (min-device-width: 481px)": { // PC
            fontSize :"1.5rem",
            fontStyle : 'solid',
            color : '#eabc28',
          },
        
        "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
            fontSize :"1.1rem",
            fontStyle : 'solid',
            color : '#eabc28',
        }
    },
    listItemText :{
        "@media (min-device-width: 481px)": {// PC
            fontSize : "2rem",
            fontStyle : 'solid',
            color : 'black'
        },
        "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
            fontSize : "1.3rem",
            fontStyle : 'solid',
            color : 'black'
        }
    },
    toolBar:{
        position:"fixed",
        width:"100%",
        height: '7vh',
    },
    appBar:{
        "@media (min-device-width: 481px)": { // PC
            width : "100%",
            height : "7%",
            transition : "all 0.2s",
            background : "#2a2a40"
          },
        "@media (min-device-width: 320px) and (max-device-width: 480px)": { // Mobile
            width : "100%",
            height : "8%",
            transition : "all 0.2s",
            background : "#2a2a40"
        }
        
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
        marginRight:'1%',
        marginLeft:'2%'
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
                    <Link   to={{
                    pathname: "/",
                    }}
                    style={{ textDecoration: 'none' }}
                    className={classes.titleText}
                    >
                         첫 줄
                    </Link>

                    </div>
                    <SearchSpace className={classes.searchSpace} />
                    <div alignSelf="flex-end" className={classes.accountIconArea}>
                        <NoticeButton />
                         <AccountButton />           
                         <LogoutButton removeCookie={removeCookie}  setHasCookie={setHasCookie}/>
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
                        <Link   to={{
                            pathname: "/",
                        }}
                        onClick={() => setState(!open)}
                        style={{ textDecoration: 'none' }}
                        >
                        <ListItem button>
                            <ListItemIcon><Home /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>홈</ListItemText>
                        </ListItem>
                        </Link>
                        <Link   
                        to={{
                            pathname: "/warm",
                        }}
                        style={{ textDecoration: 'none' }}
                        onClick={() => setState(!open)}
                        >
                        <ListItem button>
                            <ListItemIcon><HotelIcon /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>따뜻한</ListItemText>
                        </ListItem>
                        </Link>
                        <Link   to={{
                            pathname: "/hot",
                        }}
                        onClick={() => setState(!open)}
                        style={{ textDecoration: 'none' }}
                        >
                        <ListItem button>
                            <ListItemIcon><FireplaceIcon /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>뜨거운</ListItemText>
                        </ListItem>
                        </Link>
                        <Link   to={{
                            pathname: "/cold",
                        }}
                        onClick={() => setState(!open)}
                        style={{ textDecoration: 'none' }}
                        >
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

