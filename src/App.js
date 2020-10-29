import React, {useState, useEffect,useContext} from 'react';
import UserHomeLayout from './layout/UserHomeLayout';
import {makeStyles} from '@material-ui/core';
import PostUserView from './components/post/PostUserView'
import PostEditor from './components/post/PostEditor'
import ReplyView from './components/post/ReplyView'
import {useCookies} from 'react-cookie'
import SignInView from './components/member/SignInView'
import SignUpView from './components/member/SignUpView'

import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {observer} from "mobx-react"
import PostDetailView from './components/post/PostDetailView'

const useStyle = makeStyles(theme=>({
    '@global': {
        'body, html' : {
          padding : 0,
          margin : 0,
          background: '#2a2a40',
          minWidth: '100vw',
          minHeight: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh'
        },
        '*::-webkit-scrollbar': {
          width: '0.1rem',
          backgroundColor: '#2a2a40',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#eabc28',
          outline: '1px solid slategrey'
        },
        '*::-webkit-scrollbar:horizontal': {
            display:'none'
          },
        background:'#2a2a40',
      },
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


const App = observer( (props) =>  {
  const classes = useStyle();
    const [cookies, setCookie,removeCookie] = useCookies(['jwt'])
    const [hasCookie,setHasCookie] = useState(false)

    useEffect(()=>{
        if(cookies['jwt'] != undefined)
            setHasCookie(true)
    })
  return (
        <div className={classes.root}>
            {
                hasCookie === false ? (
                    <Router>
                        <Switch>
                            <Route path="/signup" >
                              <SignUpView setHasCookie={setHasCookie}></SignUpView>
                            </Route>
                            <Route>
                                <SignInView setHasCookie={setHasCookie}></SignInView>
                            </Route>
                        </Switch>
                     </Router>
                    )
                :(
                  <Router>
                    <UserHomeLayout cookies={cookies} hasCookie={hasCookie} setHasCookie={setHasCookie} removeCookie={removeCookie} hasCookie={hasCookie}>
                        <Switch>
                          <Route exact path="/search"><PostUserView /></Route>
                            <Route exact path="/warm"><PostUserView searchCondition="따뜻함"/></Route>
                            <Route exact path="/hot"><PostUserView searchCondition="뜨거움"/></Route>
                            <Route exact path="/cold"><PostUserView searchCondition="차가움"/></Route>
                            <Route exact path="/post/detail/:post_id" component={PostDetailView}/>
                            <Route exact path="/post/write" component={PostEditor}/>
                            <Route path=""><PostUserView searchCondition="전체"/></Route>
                        </Switch>
                    </UserHomeLayout>
                    </Router>
                )
            }
        </div>
  );
})

export default App;
