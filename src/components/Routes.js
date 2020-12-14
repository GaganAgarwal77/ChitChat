import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import SignUp from "./SignUp"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import {AuthProvider} from "../contexts/AuthContext"
import ChatRoom from "./ChatRoom"
import NavRoute from "./NavRoute"
import PrivateNavRoute from "./PrivateNavRoute"
const Routes = () => (
    <div>
      <AuthProvider>
        <Router>
            <Switch>
              <PrivateRoute exact path="/chat" component = {ChatRoom}/>
              <div className ="w-100" className="d-flex align-items-center justify-content-center" style = {{minHeight:'70vh'}}>
              <PrivateNavRoute exact path="/" component = {Dashboard}/> 
              <PrivateNavRoute exact path="/update-profile" component = {UpdateProfile}/>
              <NavRoute path= "/signup" component = {SignUp}/>
              <NavRoute path= "/login" component = {Login}/>
              <NavRoute path= "/forgot-password" component = {ForgotPassword}/>
              </div>
            </Switch>
        </Router>
        </AuthProvider>
    </div>
)

export default Routes;
