import React from 'react'
import {Link,Switch,Route} from "react-router-dom";
import Index from './router2/index'

export default class Home extends React.Component{
    render() {
        return(
            <div>
                <h1>
                    这是About组件
                </h1>
                <Link to='/about/detail'>detail</Link>
                <Link to='/about/index'>index</Link>
                <Switch>
                    <Route path='/about/index'component={Index}/>
                </Switch>
            </div>
        )
    }
}
