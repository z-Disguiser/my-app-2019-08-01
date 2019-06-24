import React,{Component} from "react"


import Left from './Left'
import Right from './Right'
import './App.css'
export default class App extends Component{
    constructor(props){
        super(props);

        this.state={
            comments:[]
        }
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
    }

    add(name,content){
        let {comments} = this.state
        if(name!==''&&content!==''){
            comments.push({name,content})
            this.setState({
                comments
            })
        }else {
            alert("用户名或内容不能为空")
        }

    }
    delete(index){
        let {comments} = this.state;
        comments.splice(index,1);
        this.setState({
            comments
        })
    }
    render() {
        const {comments} = this.state
        return(
            <div>
                <div className="Top">
                    <h1>请发表你对React的看法</h1>
                </div>
                <div className="down">
                    <Left add={this.add}/>
                    <Right comments={comments} delete={this.delete}/>
                </div>
            </div>
        )
    }
}

