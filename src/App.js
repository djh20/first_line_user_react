import React, {useContext} from 'react';
import UserHomeLayout from './layout/UserHomeLayout';
import {makeStyles} from '@material-ui/core';
import PostUserView from './components/post/PostUserView'
import PostEditor from './components/post/PostEditor'
import PostDetailView from './components/post/PostDetailView'
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
                    <Route exact path="/post" component={PostUserView}/>
                    <Route exact path="/post/write" component={PostEditor}/>
                    <Route exact path="/post/detail" component={PostDetailView}/>
                </Switch>
                </Router>
            </UserHomeLayout>
        </div>
  );
})

export default App;
