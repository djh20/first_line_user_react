import React from 'react';
import Home from './page/user/Home'
import "./App.css"

function App() {
  localStorage.setItem("user", "sadasd");
  console.log(localStorage.getItem("user"))
  return (
    <div className="App">
        <Home>
        </Home>
    </div>
  );
}

export default App;
