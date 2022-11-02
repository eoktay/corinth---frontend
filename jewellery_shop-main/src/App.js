import { BrowserRouter as Router } from "react-router-dom";
import React, { Component }  from 'react';
import Drawer from './pages/Drawer'
import './App.css'
import LogInu from "./Component/login/loginU"
import {useSelector} from 'react-redux';
import {getUser} from './store/user'
function App() {
  let user = useSelector((state)=>getUser(state));

  return (

    <Router>
      
      {user.value?<Drawer/>:<LogInu/>}
    </Router>
  );
}

export default App;
