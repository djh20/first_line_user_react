import React, { Component, useState, useEffect } from 'react';
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
    Container, makeStyles
} from '@material-ui/core';
import { Menu, ChevronLeft, Home, Inbox, Mail } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import LoginDialogButton from '../components/LoginDialogButton'
import UserInfoDialogButton from '../components/UserInfoDialogButton'

var drawerWidth 
if(window.outerWidth>500)
    drawerWidth = '15   vw'
else
    drawerWidth = '80vw'


const useStyle = makeStyles(theme=>({
    title : {
        fontSize :"2rem",
        fontStyle : 'solid',
        color : '#eabc28',
        flexGrow: 1,
    },
    listItemText :{
        fontSize : "1.5rem",
        fontStyle : 'solid',
        color : 'black'
    },
    toolBar:{
        display:"flex",
        height: '7vh',
    }
}))


function UserHomeLayout(props){
    
    const { children } = props;
    const [open, setState] = useState(false);
    const classes = useStyle();
    const authInfo = localStorage.getItem('memberInfo')
    const [reload, setReload] = useState(false)
    function reRender(){
        setReload(!reload)
    }
    return(
    <div>
            <AppBar
                position="fixed"
                style={{
                    width: '100vw',
                    height: '7vh',
                    transition: 'all 0.2s',
                    background : '#2a2a40',
                }}
            >
                <Toolbar className={classes.toolBar} alignItems="flex-end" position="fixed">
                    <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => setState(!open)}>
                        <Menu />
                    </IconButton>
                    <div className={classes.title}>
                         첫 줄
                    </div>
                    <div alignSelf="flex-end">
                        { authInfo === null ? 
                        (<LoginDialogButton reRenderAppBar={reRender}/>):
                        (<UserInfoDialogButton reRenderAppBar={reRender}/>) 
                         
                    }
                    
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer open={open} style={{ width: drawerWidth }} >
                <div style={{ width: drawerWidth }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton onClick={() => setState(!open)}>
                            <ChevronLeft />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link  href='/home'>
                        <ListItem button>
                            <ListItemIcon><Home /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>Home</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  href='/post'>
                        <ListItem button>
                            <ListItemIcon><Home /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>Post</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  href='/about'>
                        <ListItem button>
                            <ListItemIcon><Home /></ListItemIcon>                            
                                <ListItemText className={classes.listItemText}>About</ListItemText>
                        </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
            <div style={{width: '100vw', minHeight:'93vh' ,background:"#2a2a40", display:'flex', marginTop:'7vh'}}>
                        {children}
            </div>
    </div>
    );
}

export default UserHomeLayout;