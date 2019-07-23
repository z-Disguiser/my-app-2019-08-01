import React from 'react'
import {Link} from "react-router-dom";
import {Layout, Icon, Menu, Input, Avatar, Badge} from "antd";
// import * as echarts from 'echarts'

import Routes from '../router/Router'
import './head.css'
const { Header, Sider , Content} = Layout;
const {SubMenu} = Menu;
export default class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collapsed:true,
            isfull:document.body.scrollHeight === window.screen.height || document.body.scrollWidth === window.screen.width,
            isheight:'',
        }
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
      })
    };
    render() {
        return (
            <Layout  style={{fontFamily:'Monospace Number',top:'0',bottom:'0',width:'100%'}}>
                <Sider className="Layout-sider" collapsed={this.state.collapsed} breakpoint="lg" trigger={null} onBreakpoint={()=>this.setState({collapsed:!this.state.collapsed})} collapsedWidth="80" collapsible >
                    <Menu mode='inline' defaultSelectedKeys={['1']} theme='dark'>
                        <Menu.Item key='100' style={{backgroundColor:'#4a89dc',height:'64px',padding:'0',margin:'0'}}>
                            <span style={{display:this.state.collapsed?'none':'inline-block',lineHeight:'64px',fontSize:'17px',color:"white",marginRight:'10px'}}>
                                <img alt='log' src='log.png' style={{width:'36px'}}/><b style={{margin:"0 5px"}}>LANIF</b>Admin
                            </span>
                            <Icon type='menu' style={{fontSize:'18px',margin:"0",lineHeight:'64px',color:'white'}} onClick={this.toggle}/>
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
                            <Menu.Item key='2'><Link to='/app'>app</Link></Menu.Item>
                            <Menu.Item key='3'><Link to='/about'>about</Link></Menu.Item>
                            <Menu.Item key='4'><Link to='/home'>home</Link></Menu.Item>
                            <Menu.Item key='5'><Link to='/axios'>axios</Link></Menu.Item>
                            <Menu.Item key='6'><Link to="/steps">steps</Link></Menu.Item>
                            <Menu.Item key='7'><Link to='/modify'>modify</Link></Menu.Item>
                            <Menu.Item key='8'><Link to='/sign'>sign</Link></Menu.Item>
                            <SubMenu key='sub2' title={
                                <span>图表</span>
                            }>
                                <Menu.Item key='9'><Link to='/body'>body</Link></Menu.Item>
                                <Menu.Item key='10'><Link to='/todo'>Redux-Todo</Link></Menu.Item>
                            </SubMenu>
                          <Menu.Item key='11'><Link to='/pagination'>Pagination</Link></Menu.Item>
                            <Menu.Item key='12'>Banner管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub3' title={
                            <span>
                                <Icon type='share-alt'/>
                                <span>UI元素</span>
                            </span>
                        }>
                            <Menu.Item key='13'>按钮</Menu.Item>
                            <Menu.Item key='14'>消息</Menu.Item>
                            <Menu.Item key='15'>动画</Menu.Item>
                            <Menu.Item key='16'>图标</Menu.Item>
                            <Menu.Item key='17'>富文本</Menu.Item>
                            <Menu.Item key='18'>模态窗</Menu.Item>
                            <Menu.Item key='19'>遮罩</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub4' title={
                            <span>
                                <Icon type='book'/>
                                <span>页面</span>
                            </span>
                        }>
                            <Menu.Item key='20'>登录页</Menu.Item>
                            <Menu.Item key='21'>注册页</Menu.Item>
                            <Menu.Item key='22'>锁屏</Menu.Item>
                            <Menu.Item key='23'>画廊</Menu.Item>
                            <Menu.Item key='24'>空白页</Menu.Item>
                            <Menu.Item key='25'>结果页</Menu.Item>
                            <Menu.Item key='26'>Coming Soon</Menu.Item>
                            <Menu.Item key='27'>403</Menu.Item>
                            <Menu.Item key='28'>404</Menu.Item>
                            <Menu.Item key='29'>500</Menu.Item>
                            <Menu.Item key='30'>多级路由</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub5' title={
                            <span>
                                <Icon type='bulb'/>
                                <span>通用场景</span>
                            </span>
                        }>
                            <Menu.Item key='31'>CRUD</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
              <Layout style={{height:"100vh"}}>
                <Header style={{backgroundColor:'#4a89dc',padding:'0 15px 0',color:'white',position:'relative',width:"100%"}}>
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
                <Content className="Layout-sider-layout-content" style={{overflow:"auto"}}>
                  <Routes/>
                </Content>
              </Layout>

            </Layout>
  )
    }
}