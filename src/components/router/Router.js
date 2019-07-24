import React,{Component} from "react"
import {Switch,Route,Redirect} from "react-router-dom";
/*import {Tab,Tabs} from "react-bootstrap";*/

import App from '../comment/App'
import About from './About'
import Home from './Home'
import Axios from '../axios/Axios'
import Steps from '../steps/Steps'
import Modify from '../modify/Modify'
import Sign from '../sign/Sign'
import Body from '../head/Body'
import Todo from '../redux-todo/Todo'
import Pagination from '../pagination/Pagination'
import {Generator} from '../Generator/Generator'
import TableTest from '../Test/Test'
import './router.css'

export default class Routes extends Component{
    render() {
        return(
                <Switch>
                    <Route path='/app' component={App}/>
                    <Route path='/about' component={About}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/axios' component={Axios}/>
                    <Route path='/steps' component={Steps}/>
                    <Route path='/modify' component={Modify}/>
                    <Route path='/sign' component={Sign}/>
                    <Route path='/body' component={Body}/>
                    <Route path='/todo' component={Todo}/>
                    <Route path='/pagination' component={Pagination}/>
                    <Route path="/Generator" component={Generator}/>
                    <Route path="/TableTest" component={TableTest}/>
                    <Redirect to='/body'/>
                </Switch>
        )
    }
}

/*<Menu mode='horizontal' style={{width:'100%', backgroundColor:'rgba(255,255,255,0.6)'}}>
    <Menu.Item><Link to='/app'>app</Link></Menu.Item>
    <Menu.Item><Link to='/about'>about</Link></Menu.Item>
    <Menu.Item><Link to='/home'>home</Link></Menu.Item>
    <Menu.Item><Link to='/axios'>axios</Link></Menu.Item>
    <Menu.Item><Link to="/steps">steps</Link></Menu.Item>
    <Menu.Item><Link to='/modify'>modify</Link></Menu.Item>
    <Menu.Item><Link to='/sign'>sign</Link></Menu.Item>
    <Menu.Item><Link to='/head'>head</Link></Menu.Item>
</Menu>*/
