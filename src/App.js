import React, {useContext} from 'react';
import UserHomeLayout from './layout/UserHomeLayout';
import {makeStyles} from '@material-ui/core';
import PostUserView from './components/post/PostUserView'
import PostEditor from './components/post/PostEditor'
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {observer} from "mobx-react"

const useStyle = makeStyles(theme=>({
    root : {
        background : '#2a2a40',
        width : "100%",
        height : "100%",
        padding : "2% 2% 2% 2%",
        margin : 0,
        overflowY: 'hidden',
        background: '#2a2a40'
    },

}))


const App = observer( () =>  {
  const classes = useStyle();
  return (
        <div className={classes.root}>
            <UserHomeLayout>
            <Router>
                <Switch>
                    <Route path="/posts/:a([A-Za-z]+)" component={PostUserView}/>
                    <Route path="/post/detail/:a(\d+)">dasdasd</Route>
                    <Route exact path="/post/write" component={PostEditor}/>
                </Switch>
            </Router>
            </UserHomeLayout>
        </div>
  );
})

export default App;
