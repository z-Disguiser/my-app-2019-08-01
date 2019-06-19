import React,{Component} from "react"
import {Link,Route,Switch} from "react-router-dom";

import App from '../comment/App'
import About from './about'
import Home from './home'

export default class Page extends Component{

    render() {
        return(
            <div>
                <ul className='nav nav-tabs'>
                    <li role="presentation"><Link to='/app'>app</Link></li>
                    <li role="presentation" ><Link to='/about'>about</Link></li>
                    <li role="presentation" ><Link to='/home'>home</Link></li>
                </ul>
                <Switch>
                    <Route path='/app' component={App}/>
                    <Route path='/about' component={About}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </div>
        )
    }
}
