import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Footer from './Footer';
import MyNavbar from './MyNavbar';

export default function PrivateNavRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();
    return (
       <Route {...rest} render = {props => { return currentUser ? <div className= "w-100"><MyNavbar/><div className="d-flex align-items-center justify-content-center" style = {{minHeight:'63vh'}}><Component {...props}/></div><Footer/></div>: <Redirect to="/login"/>}}>
       </Route>
    )
}
