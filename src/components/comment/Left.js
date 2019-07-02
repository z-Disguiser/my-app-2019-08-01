import React,{Component} from "react"

export default class Left extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            content:''
        }
        this.add=this.add.bind(this);
        this.change1=this.change1.bind(this);
        this.change2=this.change2.bind(this)
    }


    add(){
        let {name,content} = this.state;
        this.props.add(name,content);
        this.setState({
            name:'',
            content:''
        })
    }
    change1(e){
        let name = e.target.value;
        this.setState({
            name
        })
    }
    change2(e){
        let content = e.target.value;
        this.setState({
            content
        })
    }
    render() {
        let {name,content} = this.state;
        return(
            <div className="left">
                <div className="form-group">
                    <label>用户名</label>
                    <input type="text" className="form-control" value={name} onChange={this.change1}/>
                </div>
                <div className="form-group">
                    <label>详细内容</label>
                    <textarea style={{resize:'none'}} placeholder="评论内容" className="form-control" rows="5" value={content} onChange={this.change2}></textarea>
                    <button className="btn btn-default" onClick={this.add}>提交</button>
                </div>
            </div>
        )
    }
}
