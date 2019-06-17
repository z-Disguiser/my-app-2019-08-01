import React,{Component} from "react"

import RightItem from './Right-item'
export default class Right extends Component{

    render() {
        return(
            <div className="right">
                <h3>评论回复：</h3>
                <ul>
                    {this.props.comments.map((comment,index)=>{
                        return <RightItem comment={comment} key ={index} index={index} delete={this.props.delete}/>
                    })}
                </ul>
            </div>
        )
    }
}
