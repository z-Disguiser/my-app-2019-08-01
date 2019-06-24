import React,{Component} from "react"
import {Link,Route,Switch,Redirect} from "react-router-dom";
import {Nav,NavItem} from "react-bootstrap";
/*import {Tab,Tabs} from "react-bootstrap";*/

import App from '../comment/App'
import About from './about'
import Home from './home'
import Axios from '../axios/axios'

export default class Page extends Component{

    render() {
        return(
            <div>
                <Nav bsstyle="pills">
                    <NavItem><Link to='/app'>app</Link></NavItem>
                    <NavItem><Link to='/about'>about</Link></NavItem>
                    <NavItem><Link to='/home'>home</Link></NavItem>
                    <NavItem disabled><Link to='/axios'>axios</Link></NavItem>
                </Nav>
                <Switch>
                    <Route path='/app' component={App}/>
                    <Route path='/about' component={About}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/axios' component={Axios}/>
                </Switch>
                <Redirect to='/app'/>
            </div>
        )
    }
}
