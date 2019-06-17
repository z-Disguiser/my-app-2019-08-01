import React,{Component} from "react"

import RightItem from './Right-item'
export default class Right extends Component{

    render() {
        let {comments} = this.props
        let display = comments.length===0? 'block':'none'
        return(
            <div className="right">
                <h3>评论回复：</h3>
                <h2 style={{display}}>暂无评论，请点击左侧按钮添加评论！</h2>
                <ul>
                    {comments.map((comment,index)=>{
                        return <RightItem comment={comment} key ={index} index={index} delete={this.props.delete}/>
                    })}
                </ul>
            </div>
        )
    }
}
