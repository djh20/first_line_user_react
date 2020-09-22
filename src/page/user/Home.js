import React from 'react';
import UserHomeLayout from '../../layout/UserHomeLayout';
import axios from 'axios';
import {makeStyles} from '@material-ui/core';
import PostUserView from '../../components/PostUserView'
import PostEditor from '../../components/PostEditor'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
const useStyle = makeStyles(theme=>({
    root : {
        background : '#2a2a40',
        width : "100%",
        height : "100%",
        padding : 0,
        margin : 0,
    },
}))
function Home() {
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <UserHomeLayout>
            <Router>
                <Switch>
                    <Route exact path="/post" component={PostUserView}/>
                    <Route exact path="/post/write" component={PostEditor}/>
                </Switch>
                </Router>
            </UserHomeLayout>
        </div>
    )
}


export default Home;