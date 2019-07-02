import React from 'react'

import './home.css'
class Add extends React.Component{
constructor(props){
    super(props);
    this.state={
         value:''
     };
}
    onchange=(e)=>{
        let value = e.target.value;
        this.setState({
            value
        })
    };
    add=()=>{
        const {value} = this.state;
       this.props.add(value);
        this.setState({
            value:''
        })
    };
    render() {
        return <div>
            <input onChange={this.onchange} value={this.state.value}/><br/><button onClick={this.add}>添加备忘</button>
        </div>
    }
}
class Item extends React.Component{
    constructor(props){
        super(props);
        this.P = React.createRef();
    }
    delete=()=>{
        const {index} = this.props;
        if(window.confirm(`确定删除${this.props.item}吗？`)){
            this.props.delete(index)
        }
    };
    success=()=>{
        console.log(this.P.current);
        this.P.current.style.textDecoration='line-through'
    };
    render(){
        const{item}=this.props;
        return(<li>
            <p ref={this.P}>{item}</p>
            <button onClick={this.success}>完成</button><button onClick={this.delete}>删除</button>
        </li>)
    }
}
class Show extends React.Component{

    render(){
        return(<ul>
            {this.props.list.map((item,index)=>{
               return <Item key={index} index={index} delete={this.props.delete} item={item}/>
            })}
        </ul>)
    }
}
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
        };
    }
    add=(value)=>{
        let {list} = this.state;
       if(value!==''){
           list.push(value);
           this.setState({
               list
           });
       }else{
           alert(`输入内容不能为空！`)
       }
    };
    delete=(index)=>{
        let {list} = this.state;
        list.splice(index,1);
        this.setState({
            list
        })
    };
    render() {
        const {list} = this.state;
        return(
            <div>
                <h1>备忘录</h1>
                <Add add={this.add}/>
                <Show list={list} delete={this.delete}/>
            </div>
        )
    }
}
