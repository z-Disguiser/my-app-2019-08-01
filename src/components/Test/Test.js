import React,{useState} from 'react'
import {Typography,Input,Button,Select,Table,Badge,Form} from 'antd'

import './Test.css'

const {Title} = Typography;
class X extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      company: "上海甄云信息科技有限公司",
      columns: [
        {
          title: '目录编码',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '目录名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '目录归属',
          dataIndex: 'from',
          key: 'from',
        },
        {
          title: '排序号',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: '目录层级',
          dataIndex: 'hierarchy',
          key: 'hierarchy',
        },
        {
          title: '状态',
          dataIndex: 'state',
          key: 'state',
          render: (text) => {
            return (text==='启用') ?
              <div><Badge status="success"/><span>启用</span></div>
              :
              <div><Badge status="error"/><span>禁用</span></div>
          }
        },
        {
          title: '操作',
          dataIndex: 'operate',
          key: 'operate',
          render: (text, record) => {
            return (
              <div className="Test-body-table-operate">
                <a style={{opacity: (record.state==="启用") ? "1" : ".5"}} onClick={() => this.addb(record)}>新增下级目录</a>
                <a onClick={()=>this.toggle(record)}>{record.state==="启用" ? "禁用" : "启用"}</a>
                <a>编辑</a>
              </div>
            )
          }
        }
      ],
      data: [
        {
          key: '1',
          id: 15126,
          name: '艺术品',
          from: '集团',
          number: '1',
          hierarchy: '1',
          state: '禁用',
          children: [
            {
              key: 3,
              id: 15127,
              name: '绘画/摄影',
              from: '集团',
              number: '1',
              hierarchy: '2',
              state: '禁用',
              children: [
                {
                  key: 4,
                  id: 15132,
                  name: '油画',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                },
                {
                  key: 5,
                  id: 15133,
                  name: '版画',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                },
                {
                  key: 6,
                  id: 15134,
                  name: '水彩/水粉画',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                },
                {
                  key: 7,
                  id: 15136,
                  name: '水墨画',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                },
                {
                  key: 8,
                  id: 15137,
                  name: '丙烯画',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                },
                {
                  key: 9,
                  id: 15138,
                  name: '综合材料画',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                },
                {
                  key: 10,
                  id: 15139,
                  name: '艺术画册',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                },
                {
                  key: 11,
                  id: 15140,
                  name: '摄影',
                  from: '集团',
                  number: '1',
                  hierarchy: '3',
                  state: '禁用',
                }
              ]
            },
            {
              key: 12,
              id: 15128,
              name: '书法',
              from: '集团',
              number: '1',
              hierarchy: '2',
              state: '禁用',
            },
            {
              key: 13,
              id: 15129,
              name: '雕塑',
              from: '集团',
              number: '1',
              hierarchy: '2',
              state: '禁用',
            },
            {
              key: 14,
              id: 15130,
              name: '陶瓷/玉器',
              from: '集团',
              number: '1',
              hierarchy: '2',
              state: '禁用',
            }
          ]
        },
        {
          key: '2',
          id: 5272,
          name: '数字内容',
          from: '集团',
          number: '1',
          hierarchy: '1',
          state: '启用',
        }
      ]
    })
  }

  /*新增顶级目录*/
   add = () => {
    let data = this.state.data.concat();
    let x = this.props.form.getFieldsValue();
      let newItem = Object.assign({
        key: 11,
        id: 15140,
        name: '摄影',
        from: '集团',
        number: '1',
        hierarchy: '1',
        state: false,
      }, {key:x.id},{x});
      data.push(newItem);
      this.setState({data});
      this.reset();
  };

  /*重置*/
  reset=()=>{
    this.props.form.resetFields();
  };

  /*新增下级目录*/
  addb=(record)=> {
    if(record.state==='禁用'){
      console.log("当前为禁用状态");
      return
    }
    const {data} = this.state;
    let {id} = record;
    let x = this.props.form.getFieldsValue();
    let newItem = Object.assign({
      key: 11,
      id: 15140,
      name: '摄影',
      from: '集团',
      number: '1',
      hierarchy: '1',
      state: '启用',
    },{key:x.id},{...x});

    const dataMap =(items)=>{
      items.forEach((item,index)=>{
        if (item.id===id){
            if(item.children){
              item.children.push(newItem);
            }
            else {
              item=Object.assign({...item},{children:[{...newItem}]});
              items.splice(index,1,item);
            }
          this.setState({data:items});
          return items;
        }
        if(item.children&&item.children.length>0){
          dataMap(item.children)
        }
      })
    };
    dataMap(data||[]);
  };

  /*查询*/
  query = ()=>{

  };

  /*切换启禁用*/
  toggle=(record)=>{
    const {key} = record;
    const {data} = this.state;
    const dataMap = (items)=>{
      items.forEach((item,index)=>{
        if(item.key===key){
          item.state=item.state==="启用"?"禁用":"启用";
          console.log(item);
          items.splice(index,1,item);
          this.setState({data:items});
          return items;
        }
        if(item.children&&item.children.length>0){
          dataMap(item.children)
        }
      })
    };
    dataMap(data||[])
  };
  render() {
    const {company, columns, data} = this.state;
    console.log(data);
    return (
      <div id="Test">
        <div className="Test-Top">
          <Title level={3}>公司目录维护</Title>
          <div className="Test-Top-Right">
            <label>当前公司:</label>
            <Input
              size="small"
              readOnly={true}
              value={company}
            />
            <Button
              size="default"
              onClick={()=>this.add()}
            >
              + 新增顶级目录
            </Button>
          </div>
        </div>
        <div className="Test-body">
          <Form
            layout="inline"
            className="Test-body-form"
          >
            <Form.Item label="目录编码">
              {this.props.form.getFieldDecorator('id')(<Input/>)}
            </Form.Item>
            <Form.Item label="目录名称">
              {this.props.form.getFieldDecorator('name')(<Input/>)}
            </Form.Item>
            <Form.Item label="状态">
              {this.props.form.getFieldDecorator('state')(<Select className="Test-body-form-select">
                <Select.Option value="启用">
                  启用
                </Select.Option>
                <Select.Option value="禁用">
                  禁用
                </Select.Option>
              </Select>)}
            </Form.Item>
            <div>
              <Button onClick={this.reset}>重置</Button>
              <Button>查询</Button>
            </div>
          </Form>
          <div className="Test-body-table">
            <Table
              columns={columns}
              dataSource={data}
              bordered
            />
          </div>
        </div>
      </div>
    )
  }
}
const TableTest = Form.create({name:'x'})(X);
export default TableTest;

{/*<Drawer
  width={400}
  title='新增顶级目录'
  placement="left"
  closable={true}
  onClose={this.onClose}
  visible={isshow}
>
  <Form
    labelAlign="left"
  >
    {columns.map((item, index) => {
      return (

        <Form.Item
          label={item.title}
          key={index}
          labelCol={{span: 5}}
          wrapperCol={{span: 8}}
        >
        </Form.Item>
      )
    })}
    <Button type='primary' onClick={this.add}>添加</Button>
  </Form>
</Drawer>}*/}
