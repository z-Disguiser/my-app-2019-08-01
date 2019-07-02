import React,{Component} from "react"
import {Switch,Link,Route,Redirect,BrowserRouter as Router} from "react-router-dom";
import { Menu } from "antd";
/*import {Tab,Tabs} from "react-bootstrap";*/

import App from '../comment/App'
import About from './About'
import Home from './Home'
import Axios from '../axios/Axios'
import Steps from '../steps/Steps'
import Modify from '../modify/Modify'
import './router.css'

export default class Routes extends Component{
    render() {
        return(
            <Router>
                <Menu mode='horizontal' style={{width:'100%', backgroundColor:'rgba(255,255,255,0.6)'}}>
                    <Menu.Item><Link to='/app'>app</Link></Menu.Item>
                    <Menu.Item><Link to='/about'>about</Link></Menu.Item>
                    <Menu.Item><Link to='/home'>home</Link></Menu.Item>
                    <Menu.Item><Link to='/axios'>axios</Link></Menu.Item>
                    <Menu.Item><Link to="/steps">steps</Link></Menu.Item>
                    <Menu.Item><Link to='/modify'/>modify</Menu.Item>
                </Menu>
                <Switch>
                    <Route path='/app' component={App}/>
                    <Route path='/about' component={About}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/axios' component={Axios}/>
                    <Route path='/steps' component={Steps}/>
                    <Route path='/modify' component={Modify}/>
                    <Redirect to='/app'/>
                </Switch>
            </Router>
        )
    }
}
