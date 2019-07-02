import React from 'react'
import {Link,Switch,Route} from "react-router-dom";
import {Menu} from "antd";

import Index from './router2/index'
import Button from './router2/Button'

export default class Home extends React.Component{
    render() {
        return(
            <div>
                <Menu mode='horizontal'>
                    <Menu.Item><Link to='/about/button'>button</Link></Menu.Item>
                    <Menu.Item><Link to='/about/index'>index</Link></Menu.Item>
                </Menu>
                <Switch>
                    <Route path='/about/index' component={Index}/>
                    <Route path='/about/button' component={Button}/>
                </Switch>
            </div>
        )
    }
}
