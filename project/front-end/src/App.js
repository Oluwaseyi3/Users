import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import React, { useEffect, useState} from "react";
import {UserProvider} from "./context/UserContext.js"
import {Switch, Route, Redirect} from "react-router-dom"
import Home from "./Home.js"
import Login from "./Login.js"
import Account from "./Account.js";
import Register from "./Register.js"
import ButtonAppBar from "./Navbar.js"
import Check from "./check.js";
import CheckTwo from "./CheckTwo.js";





function App() {


  
  return (
    <>
   <UserProvider>
    <ButtonAppBar/>
 
     <Switch>
       <Route exact path="/" render={() => <Home/>}/>
       <Route exact path="/Check" render={() => <Check/>}/>
       <Route exact path="/CheckTwo" render={() => <CheckTwo/>}/>
       <Route exact path="/Login" render={() => <Login/>}/>
       <Route exact path="/Register" render={() => <Register/>}/>
       <Route exact path="/Account" render={() => <Account/>}/>
       
     </Switch> 
     </UserProvider>
    </>
    
  )
}

export default App;
