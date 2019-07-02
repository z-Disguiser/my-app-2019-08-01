import React from 'react'
import {List,Button,Drawer,Card,Form,Input,Popconfirm,message} from "antd";

export default class  Modify extends React.Component{
    constructor(props){
        super(props);
        this.state={
            information:[
                {name:'张三', age:'18', tel:'12345678910', native:'江苏', height:'180cm',weight:'60KG'},
                {name:'李四', age:'19', tel:'12345678910', native:'江苏', height:'180cm',weight:'60KG'},
                {name:'王五', age:'20', tel:'12345678910', native:'江苏', height:'180cm',weight:'60KG'},
            ],
            title:['姓名','年龄','电话号码','籍贯','身高','体重'],
            visible1:false,
            visible2:false,
            type:0,
            dex:null,
            newData:{}
        };
    }
    onClose=()=>{
        this.setState({visible1:false,newData:{}})
    };
    renderDrawer=(type)=> {
        let {visible1,visible2,information,dex,title} = this.state;
        if(type===1){
            return(<Drawer visible={visible1} onClose={this.onClose} width={300}>
                <Form labelAlign="left" layout='vertical'>
                    {Object.keys(information[dex]).map((item,dex)=>{
                        return this.renderChange(item,dex)
                    })}
                    <Button type='primary' htmlType='submit' onClick={this.save}>保存更改</Button>
                    <Button type='danger' onClick={this.onClose}>取消修改</Button>
                </Form>
            </Drawer>)
        }else if(type===2){
            return(<Drawer visible={visible2} onClose={()=>{this.setState({visible2:false,newData:null})}} width={300}>
                <Card title='个人信息' bordered={false} style={{width:300}}>
                    {Object.values(information[dex]).map((item,index)=>{
                        return <p key={index}>{title[index]}------------------{item}</p>
                    })}
                </Card>
            </Drawer>)
        }
    };
    modify=(dex)=>{
       this.setState({
           type:1,
           visible1:true,
           dex
       })
    };
    query=(dex)=>{
        this.setState({
            type:2,
            visible2:true,
            dex
        })
    };
    delete=(index)=>{
        const {information} = this.state;
        information.splice(index,1);
        this.setState({information});
        message.success(`删除${information[index].name}的信息成功！`)
    };
    renderChange=(key,index)=>{
        let {newData,title} = this.state;
        return <Form.Item key={index} label={title[index]} htmlFor={key}><Input onChange={(e)=>this.setState({newData:Object.assign(newData,{[key]:e.target.value})})} value={newData[key]}/></Form.Item>
    };
    save=()=>{
        let{information,newData,dex} = this.state;
        Object.assign(information[dex],newData);
        this.setState({information,newData:{},visible1:false,visible2:false})
    };
    render() {
        const {information,type,dex} = this.state;
        console.log(information);
        console.log(this.state.newData);
        return(
            <div>
                <List
                    header={<p style={{fontFamily:'楷体',fontWeight:'900',fontSize:'24px',textAlign:'center'}}>个人信息</p>}
                    style={{width:'500px',margin:'50px auto'}}
                >
                    {information.map((item,index)=>{
                        const {name} = item;
                        return (<List.Item key={index} style={{display:'relative'}}>
                            姓名：{name}
                            <Button onClick={()=>this.modify(index)} type='primary' style={{textAlign:'right',position:'absolute',right:'20px'}}>修改</Button>
                            <Button onClick={()=>this.query(index)} type='primary' style={{textAlign:'right',position:'absolute',right:'100px'}}>查询</Button>
                            <Popconfirm title={'确定要删除这条信息吗？'}
                            onConfirm={()=>this.delete(index)}
                            onCancel={()=>message.error(`删除${information[index].name}的信息失败！`)}
                            >
                                <Button type='primary' style={{textAlign:'right',position:'absolute',right:'-60px'}}>删除</Button>
                            </Popconfirm>
                        </List.Item>)
                    })}
                </List>
                {this.renderDrawer(type,dex)}
            </div>)
    }
}


