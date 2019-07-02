import React,{Component} from 'react'
import {Steps,Button,Icon} from "antd";
import './Steps.css'

export default class Step extends Component{
    constructor(props){
        super(props);
        this.state= {
            title: ['first', 'second', 'third', 'fourth'],
            page: 0,
            name:'',
            sex:'',
            age:'',
            native:'',
            address:'',
            tel:'',
            talk:''
        };
        this.span = React.createRef()
    };
    setName=(e)=>{this.setState({name:e.target.value})};

    setSex=(e)=>{this.setState({sex:e.target.value})};

    setAge=(e)=>{this.setState({age:e.target.value})};

    setNative=(e)=>{this.setState({native:e.target.value})};

    setAddress=(e)=>{this.setState({address:e.target.value})};

    setTel=(e)=>{this.setState({tel:e.target.value})};

    setTalk=(e)=>{this.setState({talk:e.target.value})}
    next=()=>{
        let {page}= this.state;
        page+=1;
        this.setState({
            page
        })
    };
    prev=()=> {
        let {page} = this.state;
        if(page)
            page -= 1;
        this.setState({
            page
        })
    };
    submit=()=>{
        let {name,sex,age,native,address,tel,talk} = this.state;
        // let information = {};
        // Object.assign(information,name,sex,age,native,address,tel,talk);
        let {...information} = {name,sex,age,native,address,tel,talk};
        for(let key in information){
            if(information[key]===''){
                alert('数据不完整！');
                return
            }
        }
        alert(JSON.stringify(information))
    };
    render() {
        let {title,page,name,sex,age,native,address,tel,talk} = this.state;
        return(
            <div id='Steps'>
                <Steps current={page}>
                    {title.map((item,index)=>{
                        return (<Steps.Step key={index} title={item}>
                        </Steps.Step>)
                    })}
                </Steps>
                <div className='steps-content'>
                    {page===0&&<Item1 name={name} sex={sex} setName={this.setName} setSex={this.setSex} span={this.span}/>}
                    {page===1&&<Item2 age={age} native={native} setAge={this.setAge} setNative={this.setNative}  span={this.span}/>}
                    {page===2&&<Item3 address={address} tel={tel} setAddress={this.setAddress} setTel={this.setTel}  span={this.span}/>}
                    {page===3&&<Item4 talk={talk} setTalk={this.setTalk} span={this.span}/>}
                </div>
                <div className='steps-Button'>
                    {page>0&&<Button onClick={this.prev}><Icon type='left'/>上一步</Button>}
                    {page<title.length-1&&<Button onClick={this.next} style={{right:'0'}}>下一步<Icon type='right'/></Button>}
                    {page===title.length-1&&<Button onClick={this.submit}><Icon type='submit'/>提交</Button>}
                </div>
            </div>
        )
    }
}
function Item1(props){
    let{name,sex,setName,setSex}=props;
    return(
        <div>
            <label>姓名:</label><input type='text' onChange={setName} value={name}/>
            <label>性别:</label><input type='text' onChange={setSex} value={sex}/><br/>
            <span> </span>
        </div>
    )
}
function Item2(props){
    const {age,native,setAge,setNative} = props;
    return(
        <div>
            <label>年龄:</label><input type='text' onChange={setAge} value={age}/>
            <label>籍贯:</label><input type='text' onChange={setNative} value={native}/><br/>
            <span> </span>
        </div>
    )
}
function Item3(props){
    const {address,tel,setAddress,setTel} = props;
    return(
        <div>
            <label>住址:</label><input type='text' onChange={setAddress} value={address}/>
            <label>联系电话:</label><input type='text' onChange={setTel} value={tel}/><br/>
            <span> </span>
        </div>
    )
}
function Item4(props){
    const{talk,setTalk} =props;
    return(
        <div>
            随便说说：<textarea style={{resize:'none',width:'150px'}} rows='3' value={talk} onChange={setTalk}> </textarea><br/>
            <span> </span>
        </div>
    )
};
