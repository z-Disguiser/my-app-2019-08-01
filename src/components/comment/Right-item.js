import React,{Component} from "react"

export default class RightItem extends Component{
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(e){
        let{comment} = this.props;
        if(window.confirm(`确定删除${comment.name}的评论吗？`)){
            this.props.delete(e.target.index)
        }
    }
    render() {
        let {comment,index} = this.props;
        return(
            <li>
                <div className="table-bordered">
                    <h4>{comment.name}说：</h4>
                    <p>{comment.content}</p>
                    <button className="btn btn-default" key={index} onClick={this.handleClick}>删除</button>
                </div>
            </li>
        )
    }
}
