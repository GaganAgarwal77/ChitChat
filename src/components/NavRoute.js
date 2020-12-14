import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import Footer from './Footer';
import MyNavbar from './MyNavbar';

export default function NavRoute({component: Component, ...rest}) {
    return (
       <Route {...rest} render = {props => { return <div className ="w-100"><MyNavbar/><div className="d-flex align-items-center justify-content-center" style = {{minHeight:'63vh'}}><Component {...props}/></div><Footer/></div> }}>
       </Route>
    )
}
