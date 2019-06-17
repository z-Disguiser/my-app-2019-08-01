import React,{Component} from "react"

export default class RightItem extends Component{
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.delete(e.target.key)
    }
    render() {
        let {comments} = this.props;
        return(
            comments.map((item,index)=>{
                return <li key={index}>
                    <div className="table-bordered">
                        <h4>{item.name}说：</h4>
                        <p>{item.content}</p>
                        <button className="btn btn-default" key={index} onClick={this.handleClick}>删除</button>
                    </div>
                </li>
                })

        )
    }
}
