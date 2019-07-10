import React from 'react'
import {Input,Button,List} from "antd";
import store from '../../store/index'

import './Todo.css'


export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state= store.getState();
        store.subscribe(()=>this.setState(store.getState()))
    }
    // handleStoreChange = ()=>{
    //   this.setState(store.getState())
    // };

    handleInputChang=(e)=>{
      const action = {
          type:'Change_input_value',
          text:e.target.value,
      } ;
      store.dispatch(action)
    };
    handleAdd=()=>{
        const action ={
            type:"Add_List",
            text:this.state.inputValue,
        };
        store.dispatch(action);
    };
    handleDelete = (index)=>{
      const action ={
          type:"Delete_List",
          index:index
      } ;
      store.dispatch(action)
    };
    render() {
        return(
            <div id="Todo">
                <div className="Todo-Top">
                    <h2>Redux Todo</h2>
                </div>
                <div className='Todo-Body'>
                    <Input placeholder="请输入数据" value={this.state.inputValue} onChange={this.handleInputChang}/>
                    <Button type="primary" onClick={this.handleAdd}>提交</Button>
                    <List
                    bordered
                    dataSource={this.state.List}
                    renderItem={(item,index)=>{
                        return (<List.Item>
                            {item}
                            <span>
                                <Button onClick={()=>this.handleDelete(index)}>删除</Button>
                                <Button>修改</Button>
                            </span>
                        </List.Item>)
                    }}
                    />
                </div>
            </div>
        )
    }
}