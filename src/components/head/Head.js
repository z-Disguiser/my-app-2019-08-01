import React from 'react'
import {Link} from "react-router-dom";
import {Layout,Icon,Menu,Input,Avatar,Badge} from "antd"; 
// import * as echarts from 'echarts'
import echarts from 'echarts'

import Router from '../router/Router'
import './head.css'
const { Header, Sider } = Layout;
const {SubMenu} = Menu;
export default class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collapsed:false,
            isfull:document.body.scrollHeight === window.screen.height || document.body.scrollWidth === window.screen.width,
            isheight:''
        }
    }
    componentDidMount() {
        let echarts1 = echarts.init(document.getElementById('echarts1'),'light');
        let echarts2 = echarts.init(document.getElementById('echarts2'),'light');
        let echarts3 = echarts.init(document.getElementById('echarts3'),'light');
        let echarts4 = echarts.init(document.getElementById('echarts4'),'light');

        echarts1.setOption({
            title:{
                text:'销售额分布',
                top:'5%'
            },
            legend:{
                type:'plain',
                bottom:10
            },
            tooltip:{},
            xAxis:{
                data:['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.']
            },
            yAxis:{},
            series:[{
                name:'London',
                type:'bar',
                data:[8,15,2,5,27,15,4,59]
            },{
                name:'Berlin',
                type:'bar',
                data:[58,21,8,29,95,99,29,57],
                smooth:true
            }]
        });
        echarts2.setOption({
            legend:{
                type:'plain',
                bottom:10
            },
            xAxis:{
                data:['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.']
            },
            yAxis:{},
            series:[{
                name:'Tokyo',
                type:'line',
                data:[8,15,2,5,27,15,4,59],
            },{
                name:'LonDon',
                type:'line',
                data:[58,21,8,29,95,99,29,57]
            }],
        });
        echarts3.setOption({
            /*legend:{
                orient:'vertical',
                x:'left',
                y:'center',
                textStyle:{
                    color:'red',
                },
                itemWidth:'50px',
                itemHeight:'200px',
                backgroundColor:"black",
                data:['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.'],
            },*/
            series:[{
                name:'Tokyo',
                type:'pie',
                radius: ['25%', '45%'],
                hoverAnimation:true,
                data:[
                    {value:40,name:'事例1：40%',label:'Q'},
                    {value:21,name:'事例2：21%',label:'Q'},
                    {value:17,name:'事例3：17%',label:'Q'},
                    {value:13,name:'事例4：13%',label:'Q'},
                    {value:9,name:'事例5：9%',label:'Q'},
                    ],
            }],
        });
        echarts4.setOption({
            tooltip:{},
            xAxis:{
                data:[{value:'1951年'},{value:'1952年'},{value:'1956年'},{value:'1957年'},{value:'1958年'}]
            },
            yAxis:{},
            series:[{
                name:'London',
                type:'bar',
                data:[98,3,86,56,27]
            }]
        })
    }

    full=()=>{
        let element = document.documentElement;
      if(this.state.isfull){
          document.webkitCancelFullScreen();
      }else {
          element.webkitRequestFullScreen();
      }
        this.setState({isfull:!this.state.isfull});
    };
    toggle=()=>{
      this.setState({
          collapsed:!this.state.collapsed,
          issmall:true
      })
    };
    render() {
        return (<div id='head'>
            <Layout  style={{fontFamily:'Monospace Number',top:'0',bottom:'0',width:'100%',height:'100%'}}>
                <Sider collapsed={this.state.collapsed} trigger={null} collapsible>
                    <Menu style={{height:'1000px'}} mode='inline' defaultSelectedKeys={['1']} theme='dark'>
                        <Menu.Item key='100' style={{backgroundColor:'#4a89dc',height:'64px',padding:'0',margin:'0'}}>
                            <Link to='head' style={{display:this.state.collapsed?'none':'inline-block',lineHeight:'64px',fontSize:'17px',color:"white",marginRight:'10px'}}>
                                <img alt='log' src='log.png' style={{width:'36px'}}/><b style={{margin:"0 5px"}}>LANIF</b>Admin
                            </Link>
                            <Icon type='menu' style={{fontSize:'18px',margin:"0",lineHeight:'64px',color:'white'}} onClick={this.toggle}/>
                        </Menu.Item>
                        <Menu.Item style={{height:'91px',padding:'30px 10px 0'}}>

                        </Menu.Item>
                        <Menu.Item key='1' style={{margin:'0',height:'48px',lineHeight:'48px'}}>
                            <Icon type='dashboard'/>
                            <span>仪表盘</span>
                        </Menu.Item>
                        <SubMenu key='sub1' title={
                            <span>
                                <Icon type='desktop'/>
                                <span>组件</span>
                            </span>
                        }>
                            <Menu.Item key='2'>工具条</Menu.Item>
                            <Menu.Item key='3'>BaseComponent</Menu.Item>
                            <Menu.Item key='4'>Columns</Menu.Item>
                            <Menu.Item key='5'>搜索条</Menu.Item>
                            <Menu.Item key='6'>数据表格</Menu.Item>
                            <Menu.Item key='7'>表单</Menu.Item>
                            <Menu.Item key='8'>穿梭树</Menu.Item>
                            <SubMenu key='sub2' title={
                                <span>图表</span>
                            }>
                                <Menu.Item key='9'>ECharts</Menu.Item>
                                <Menu.Item key='10'>G2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key='11'>打印</Menu.Item>
                            <Menu.Item key='12'>Banner管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub2' title={
                            <span>
                                <Icon type='share-alt'/>
                                <span>UI元素</span>
                            </span>
                        }>
                            <Menu.Item>按钮</Menu.Item>
                            <Menu.Item>消息</Menu.Item>
                            <Menu.Item>动画</Menu.Item>
                            <Menu.Item>图标</Menu.Item>
                            <Menu.Item>富文本</Menu.Item>
                            <Menu.Item>模态窗</Menu.Item>
                            <Menu.Item>遮罩</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub3' title={
                            <span>
                                <Icon type='book'/>
                                <span>页面</span>
                            </span>
                        }>
                            <Menu.Item>登录页</Menu.Item>
                            <Menu.Item>注册页</Menu.Item>
                            <Menu.Item>锁屏</Menu.Item>
                            <Menu.Item>画廊</Menu.Item>
                            <Menu.Item>空白页</Menu.Item>
                            <Menu.Item>结果页</Menu.Item>
                            <Menu.Item>Coming Soon</Menu.Item>
                            <Menu.Item>403</Menu.Item>
                            <Menu.Item>404</Menu.Item>
                            <Menu.Item>500</Menu.Item>
                            <Menu.Item>多级路由</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub4' title={
                            <span>
                                <Icon type='bulb'/>
                                <span>通用场景</span>
                            </span>
                        }>
                            <Menu.Item>CRUD</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor:'#4a89dc',padding:'0 15px 0',color:'white',position:'relative'}}>
                        <Icon type='contacts' style={{fontSize:'20px',lineHeight:'60px'}}/>
                        <Icon type='car' style={{fontSize:'20px',margin:'0 30px',lineHeight:'60px'}}/>
                        <Icon type={this.state.isfull?'fullscreen-exit':'fullscreen'} onClick={this.full} style={{fontSize:'20px',lineHeight:"60px"}}/>
                        <Input type='text' placeholder='全文检索' style={{width:'150px',marginLeft:'30px',borderRadius:'20px'}}/>
                        <span style={{position:'absolute',right:'0'}}>
                            <Icon style={{margin:'0 20px',fontSize:'20px'}} type='api'/>
                            <Icon style={{margin:'0 20px',fontSize:'20px'}}  type='camera'/>
                            <Badge dot style={{margin:'0 20px'}}><Avatar icon='user' style={{margin:'0 20px'}}/></Badge>
                        </span>
                    </Header>
                    <Router/>
                </Layout>
            </Layout>
        </div>)
    }
}