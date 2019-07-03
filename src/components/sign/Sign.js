import React from 'react'
import {Table, Select, Input, Button, message, Drawer, Form,DatePicker,TimePicker} from "antd";

class Group extends React.Component{
    handleSubmit=(e)=>{
         e.preventDefault();
        console.log(  (this.props.form.getFieldsValue()));
        const values = this.props.form.getFieldsValue();
        if(Object.values(values).includes(undefined)){
            message.error('请正确输入数据！');
            return
        }
        else {
            const data = Object.assign({},{...values},{date:values.date.format('YYYY/M/D')},{time:values.time._i});
            this.props.add(data);
            message.success(`添加${data.name}的考勤成功`);
            this.props.form.resetFields();
        }
    };
    render() {
        //  const formItemLayout = {
        //     labelCol:{
        //         sm:{span:4}
        //     },
        //     wrapperCol: {
        //         sm: { span: 12 },
        //     },
        // };
        const{getFieldDecorator} = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label='姓名'>
                        {getFieldDecorator('name',{
                            rules:[
                                {
                                    type:'string',
                                    message:'11111111111'
                                },
                                {
                                    required:true,
                                    message:'姓名不能为空'
                                }
                            ]
                        })(<Input/>)}
                    </Form.Item>
                <Form.Item label='日期'>
                    {getFieldDecorator('date',{
                        rules:[
                            {
                                type:'object',
                                message:'11111111111'
                            },
                            {
                                required:true,
                                message:'日期不能为空'
                            }
                        ]
                    })(<DatePicker/>)}
                </Form.Item>
                <Form.Item label='时间'>
                    {getFieldDecorator('time',{
                        rules:[
                            {
                                type:'object',
                                message:'11111111111'
                            },
                            {
                                required:true,
                                message:'时间不能为空'
                            }
                        ]
                    })(<TimePicker use12Hours  format='H:mm:ss:a'/>)}
                </Form.Item>
                <Form.Item  label='是否迟到'>
                    {getFieldDecorator('work',{
                        rules:[
                            {
                                type:'string',
                                message:'11111111111'
                            },
                            {
                                required:true,
                                message:'是否迟到不能为空'
                            }
                        ]
                    })(<Select style={{width:"80px"}}>
                        <Select.Option key='迟到'>迟到</Select.Option>
                        <Select.Option key='未迟到'>未迟到</Select.Option>
                    </Select>)}
                </Form.Item>
                <Form.Item  label='是否签到'>
                    {getFieldDecorator('sign',{
                        rules:[
                            {
                                type:'string',
                                message:'11111111111'
                            },
                            {
                                required:true,
                                message:'是否签到不能为空'
                            }
                        ]
                    })(<Select style={{width:'60px'}}>
                        <Select.Option key='是'>是</Select.Option>
                        <Select.Option key='否'>否</Select.Option>
                    </Select>)}
                </Form.Item>
                <Button type='primary' htmlType='submit' style={{marginTop:'5px'}}>添加</Button>
            </Form>
        )
    }
}

Group = Form.create({})(Group);
export default class Sign extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    key:0,
                    name:'张一',
                    date:new Date().toLocaleDateString(),
                    time:'上午8:22:50',
                    work:'迟到',
                    sign:'否'
                },
                {
                    key:1,
                    name:'张二',
                    date:'2019/7/2',
                    time:'上午10:22:50',
                    work:'迟到',
                    sign:'否'
                },
                {
                    key:2,
                    name:'张三',
                    date:'2019/7/2',
                    time:'上午11:19:42',
                    work:'迟到',
                    sign:'否'
                }
                ,
                {
                    key:3,
                    name:'张四',
                    date:'2019/7/2',
                    time:'下午1:09:42',
                    work:'迟到',
                    sign:'否'
                },
                {
                    key:4,
                    name:'张五',
                    date:'2019/7/2',
                    time:'下午1:19:42',
                    work:'迟到',
                    sign:'否'
                },
                {
                    key:5,
                    name:'张六',
                    date:'2019/7/2',
                    time:'下午2:19:42',
                    work:'迟到',
                    sign:'否'
                }
            ],
            columns:[
                {
                    title:'姓名',
                    dataIndex:'name',
                    key:'name',
                },
                {
                    title:'日期',
                    dataIndex:'date',
                    key:'date',
                },
                {
                    title:'时间',
                    dataIndex:'time',
                    key:'time'
                },
                {
                    title:'是否迟到',
                    dataIndex:'work',
                    key:'work',
                    render:(work,record,index)=>(
                      <Select style={{width:'100px'}} value={work} onChange={(e)=>this.iswork(index,e)}>
                          <Select.Option key='迟到'>迟到</Select.Option>
                          <Select.Option key='未迟到'>未迟到</Select.Option>
                      </Select>
                    )
                },
                {
                    title:'是否签到',
                    dataIndex:'sign',
                    key:'sign',
                    render:(sign,record,index)=><Input style={{textAlign:'left',width:'60px'}} type='checkbox' checked={sign==='是'} onChange={(e)=>this.issign(index,e.target.checked)}/>
                }
            ],
            visible:false,
            drawerData:null,
            drawerColumns:null
        }
    }
    iswork=(index,text)=>{
        const {data}=this.state;
        data[index].work=text;
        this.setState({data})
    };
    issign=(index,text)=>{
        const {data} = this.state;
        data[index].sign = text?'是':'否';
        this.setState({data})
    };
    // add=()=> {
    //     const {data, name} = this.state;
    //
    //     if (name.trim() === "") {
    //         this.setState({name: ''});
    //         message.error(`添加数据失败！`)
    //     } else {
    //         data.push({
    //             key: data.length,
    //             name,
    //             date: new Date().toLocaleDateString(),
    //             time: new Date().toLocaleTimeString(),
    //             work: '',
    //             sign: false
    //         });
    //         message.success(`添加一条关于${name}的数据成功！`);
    //         this.setState({data, name: null})
    //     }
    // };
    submitAdd=(newData)=>{
        const {data} = this.state;
        this.setState({data:[...data,Object.assign({},{...newData},{key:data.length})]})
    };
    drawerData=()=>{
      let {data,columns} = this.state;
      let arr1;
      let arr2 = [];
       arr1=data.map(item=>{
           return Object.assign({},item)
       }) ;
       console.log(arr1);
      columns.forEach(item=>{
            let {render,...datas}=item;
            arr2.push(datas)
        });
        this.setState({drawerData:arr1,drawerColumns:arr2,visible:true});
    };

    render() {
        const {columns,data,visible,drawerData,drawerColumns} = this.state;
        return (<div style={{textAlign: 'center'}}>
            <Group add={this.submitAdd}/>
            <Table columns={columns} dataSource={data} pagination={{defaultCurrent:5,total:10}}> </Table>
            <Button type='primary' onClick={this.drawerData}>导出表格</Button>
            <Drawer
                title='出勤表'
                visible={visible}
                onClose={()=>this.setState({visible:false})}
                width={800}
            >
                <Table columns={drawerColumns} dataSource={drawerData} pagination={{total:"{50}"}}/>
            </Drawer>
        </div>)
    }
}
