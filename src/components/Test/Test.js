import React from 'react'
import {Typography,Input,Button,Select,Table,Badge,Form,Icon,message} from 'antd'

import './Test.css'

const {Title} = Typography;
class X extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      /*可编辑行KEY*/
      editingKey:"",
      /*添加子项时需展开的父项*/
      expandedRows:[],
      /*筛选后的数据*/
      queryData:[],
      company: "上海甄云信息科技有限公司",
      data: [
        {
          key: 1,
          id: 15126,
          name: '艺术品',
          from: '集团',
          number: '1',
          hierarchy: 1,
          state: '禁用',
          children: [
            {
              key: 3,
              id: 15127,
              name: '绘画/摄影',
              from: '集团',
              number: '1',
              hierarchy: 2,
              state: '禁用',
              children: [
                {
                  key: 4,
                  id: 15132,
                  name: '油画',
                  from: '集团',
                  number: '1',
                  hierarchy: 3,
                  state: '禁用',
                },
                {
                  key: 5,
                  id: 15133,
                  name: '版画',
                  from: '集团',
                  number: '1',
                  hierarchy: 3,
                  state: '禁用',
                },
                {
                  key: 6,
                  id: 15134,
                  name: '水彩/水粉画',
                  from: '集团',
                  number: '1',
                  hierarchy:3,
                  state: '禁用',
                },
                {
                  key: 7,
                  id: 15136,
                  name: '水墨画',
                  from: '集团',
                  number: '1',
                  hierarchy: 3,
                  state: '禁用',
                },
                {
                  key: 8,
                  id: 15137,
                  name: '丙烯画',
                  from: '集团',
                  number: '1',
                  hierarchy: 3,
                  state: '禁用',
                },
                {
                  key: 9,
                  id: 15138,
                  name: '综合材料画',
                  from: '集团',
                  number: '1',
                  hierarchy: 3,
                  state: '禁用',
                },
                {
                  key: 10,
                  id: 15139,
                  name: '艺术画册',
                  from: '集团',
                  number: '1',
                  hierarchy: 3,
                  state: '禁用',
                },
                {
                  key: 11,
                  id: 15140,
                  name: '摄影',
                  from: '集团',
                  number: '1',
                  hierarchy: 3,
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
              hierarchy: 2,
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
          key: 2,
          id: 5272,
          name: '数字内容',
          from: '集团',
          number: '1',
          hierarchy: 1,
          state: '启用',
        }
      ],
    })
  }


  /*根据data渲染columns*/
  /*getFilter = ()=>{
    let data = this.state.data.concat();
    const getText = (items)=>{
      items.forEach((item,index)=>{
        if(!item.children){
          item = Object.assign({},{text:item.id,value:item.id});
          items.splice(index,1,item);
        }
        if (item.children){
          item = Object.assign({},{text:item.id,value:item.id},{children:[...item.children]});
          items.splice(index,1,item);
          getText(item.children)
        }
      });
    };
    getText(data);
    return data;
  };*/

  /*判断输入id是否重复*/
  idRepeat =(id)=>{
    let isRepeat = null;
    const {data} = this.state;
    const dataMap = (items)=>{
      items.forEach((item)=>{
        if (item.id===Number(id)){
          isRepeat = true;
        }
        if (item.children&&item.children.length>0){
          dataMap(item.children)
        }
      });
    };
    dataMap(data);
    return isRepeat
  };

  /*新增顶级目录
  * 筛选时添加顶级目录会自动回到目录顶级*/
   add = async () => {
    let data = this.state.data.concat();
    let x = this.props.form.getFieldsValue(['id','name','state']);
    if (await this.idRepeat(x.id)){
      message.error("id重复!");
      return
    }
      let newItem = Object.assign({
        key: 11,
        id: 15140,
        name: '摄影',
        from: '集团',
        number: '1',
        hierarchy: 1,
        state: '禁用',
      }, {key:x.id},{...x});
      data.push(newItem);
      this.setState({data});
      this.reset();
      message.success("新增顶级目录成功！")
  };

   /*新增顶级目录校验*/
  addOK = ()=>{
    this.props.form.validateFields((err)=>{
      if(err) {
        message.error('数据格式错误，添加失败！');
        return
      }
      this.add();
    })
  };

  /*重置筛选*/
  reset=()=>{
    this.props.form.resetFields();
    this.setState({queryData:[]});
    message.success('重置成功！')
  };

  /*新增下级目录*/
  addb=(record)=> {
    /*新增子项自动展开父项*/
    let rows = this.state.expandedRows;
    rows.push(record.key);
    const {data,queryData} = this.state;
    let {id} = record;
    let x = this.props.form.getFieldsValue(['id','name','state']);
    let newItem = Object.assign({
      key: 11,
      id: 15140,
      name: '摄影',
      from: '集团',
      number: '1',
      hierarchy: 1,
      state: '启用',
    },{key:x.id,hierarchy:record.hierarchy+1},{...x});

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
          return items;
        }
        if(item.children&&item.children.length>0){
          dataMap(item.children)
        }
      })
    };

    /*查询id是否重复*/
    if(this.idRepeat(x.id)){
      message.error("目录编码重复,添加失败！");
      return
    }
    dataMap(data||[]);

    /*筛选时添加下级目录*/
    if (queryData.length>0){
      dataMap(queryData||[])
    }
    this.setState({data,expandedRows:rows});
    this.props.form.resetFields();
    message.success("新增下级目录成功！")
  };

  /*新增下级目录校验*/
  addbOK = (record)=>{
    if(record.state==="禁用"){
      message.warning("当前为禁用状态");
      return
    }
    this.props.form.validateFields((err)=>{
      if(err){
        message.error('新增下级目录失败！');
        return
      }
      this.addb(record)
    })
  };

  /*id查询(带子项)*/
  query = async ()=>{
      const idValue =await this.props.form.getFieldValue('id');
      /**/
    let queryData = [];
    let {data} = this.state;
    const dataMap = (items)=>{
      items.forEach(item=>{
        if(item.id
        .toString()
        .toLowerCase()
        .includes(idValue.toLowerCase())){
          queryData.push(item);
          return item
        }
        if(item.children&&item.children.length>0){
          dataMap(item.children)
        }
      });
    };
    dataMap(data||[]);
    if(queryData.length===0){
      message.warning("该目录编码不存在")
    }else {
      this.setState({queryData});
      this.props.form.resetFields();
      message.success(`成功查询到${queryData.length}条数据`)
    }
  };

  /*查询验证*/
  queryOK = ()=>{
    this.props.form.validateFields(['id'],(err)=>{
      if(err){
        message.warning("请输入正确的目录编码！");
        return
      }
      this.query()
    })
  };

  /*切换启禁用*/
  toggle=(record)=>{
    const {key} = record;
    const {data} = this.state;
    const dataMap = (items)=>{
      items.forEach((item)=>{
        if(item.key===key){
          item=Object.assign({...item},{state:item.state=item.state==="启用"?"禁用":"启用"});
          return items;
        }
        if(item.children&&item.children.length>0){
          dataMap(item.children)
        }
      })
    };
    dataMap(data||[]);
    message.warning(`已${record.state}`);
    this.setState({data})
  };

  /*判断当前行的编辑状态*/
  edit=(record)=>{
    return this.state.editingKey === record.key;
  };

  /*改变当前行的可编辑状态*/
  isedit=(record)=>{
    this.setState({editingKey:record.key});
  };

  /*保存编辑*/
  save = (record)=>{
    const value = this.props.form.getFieldValue('newName');
    const {key} = record;
    const {data} = this.state;
    const dataMap = (items)=>{
      items.forEach((item)=>{
        if(item.key===key){
          console.log(item);
          item=Object.assign({...item},{name:item.name=value});
          return items;
        }
        if(item.children&&item.children.length>0){
          dataMap(item.children)
        }
      })
    };
    dataMap(data||[]);
    this.setState({
      data,
      editingKey:""
    });
    message.success(`成功将目录名称修改为"${value}"`)
  };

  /*保存编辑验证*/
  saveOK = (record)=>{
    this.props.form.validateFields(['newName'],(err)=>{
      if(err){
        message.error('请输入正确的目录名称！');
        this.setState({editingKey:""});
        return
      }
      this.save(record)
    })
  };

  /*获取当前行展开*/
  changeRows=(expandedRows)=>{
    this.setState({
      expandedRows
    })
  };

  /*取消保存*/
  cancel = ()=>{
    message.warn('取消成功！');
    this.setState({editingKey:""})
  };

  /*-------------------------------------------------------------------------------*/
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
  };

  /*---------------------------------------------------------------------------------*/

  render() {
    const {company, data,queryData} = this.state;
    const columns = [
      {
        title: '目录编码',
        dataIndex: 'id',
        key: 'id',
        /*        filters:()=>this.getFilter(),*/
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
          <div style={{padding: 8}}>
            <Input
              value={selectedKeys[0]}
              onPressEnter={() => this.handleSearch(selectedKeys[0],confirm)}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              style={{width: 188, marginBottom: 8, display: 'block'}}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys[0],confirm)}
              icon="search"
              size="small"
              style={{width: 90, marginRight: 8}}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
              Reset
            </Button>
          </div>
        ),
        /*自定义filter图标*/
        filterIcon: filtered => (
          <Icon type="search" style={{color: filtered ? '#1890ff' : undefined}}/>
        ),

        /*在自定义筛选框消失时触发(非onFilterDropdownVisibleChange)?*/
        onFilter: (value, record) => {
          return record.id
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase())
          },
        /*选中文本域文本*/
        /*onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        }*/
      },
      {
        title: '目录名称',
        dataIndex: 'name',
        key: 'name',
        width:'20%',
        render:(text,record)=>{
          return (this.edit(record))?
            <Form.Item>
              {this.props.form.getFieldDecorator('newName',{
                initialValue:record.name,
                rules: [
                  {required: true,message: '请输入正确的目录名称'},
                ]
              })(<Input/>)}
            </Form.Item>
            :
            <div>{text}</div>
        }
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
            this.edit(record)?
              <div className="Test-body-table-operate">
                <a onClick={()=>this.saveOK(record)}>保存</a>
                <a onClick={this.cancel}>取消</a>
              </div>
              :
              <div className="Test-body-table-operate">
                <a style={{opacity: (record.state==="启用") ? "1" : ".5"}} onClick={() => this.addbOK(record)}>新增下级目录</a>
                <a onClick={()=>this.toggle(record)}>{record.state==="启用" ? "禁用" : "启用"}</a>
                <a onClick={()=>this.isedit(record)}>编辑</a>
              </div>
          )
        }
      }
    ];

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
              onClick={this.addOK}
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
              {this.props.form.getFieldDecorator('id',{
                rules: [
                  {required: true,message: '请输入最多6位数字'},
                  {pattern: new RegExp(/^[1-9]\d*$/, "g"),message:"目录编码必须为数字"},
                ],
                validateTrigger:['onBlur']
              })(<Input
                onPressEnter={this.query}
                autoComplete="off"
                allowClear
                maxLength={6}
              />)}
            </Form.Item>
            <Form.Item label="目录名称">
              {this.props.form.getFieldDecorator('name',{
                rules: [
                  {required: true,message: '请输入正确的目录名称'},
                  ],
                validateTrigger:['onBlur']
              })(<Input
                autoComplete="off"
                allowClear
              />)}
            </Form.Item>
            <Form.Item label="状态">
              {this.props.form.getFieldDecorator('state',{
                rules: [
                  {required: true,message: '请选择正确的状态'},
                  ],
                validateTrigger:['onBlur']
              })(<Select className="Test-body-form-select" allowClear>
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
              <Button onClick={this.queryOK}>查询</Button>
            </div>
          </Form>
          <div className="Test-body-table">
            <Table
              expandedRowKeys={this.state.expandedRows}
              onExpandedRowsChange={this.changeRows}
              columns={columns}
              dataSource={(queryData.length>0)?queryData:data}
              bordered
              onChange={(pagination,filters,sorter)=>console.log(pagination,filters,sorter)}
            />
          </div>
        </div>
      </div>
    )
  }
}
const TableTest = Form.create({name:'x'})(X);
export default TableTest;

