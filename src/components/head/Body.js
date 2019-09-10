import React from 'react'
import {Badge, Card, Icon, Layout,Breadcrumb} from "antd";
import echarts from "echarts";

const {Content} =Layout;
export  default class Body extends React.Component{
    constructor(props){
        super(props);
        this.state={
            issmall:true,
        };
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
            }],
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
        });
        window.onresize = function () {
            echarts1.resize();
            echarts2.resize();
            echarts3.resize();
            echarts4.resize();
        }

    }
    isSmall=()=>{
        this.setState({
            issmall:!this.state.issmall
        });
    };
    render() {
        return(
            <Content style={{width:this.state.issmall?'100%':'60%',backgroundColor:'#f6f6f6',transition:'width .8s'}}>
                <div id="card1" style={{position:'relative',border:'1px',boxShadow:'3px 3px 3px rgba(0,0,255,.2)'}}>
                    <Breadcrumb style={{height:'48px',width:'100%',lineHeight:'50px',padding:'0 20px',fontFamily:'Monospace Number'}}>
                        <Breadcrumb.Item style={{fontSize:'18px'}}>仪表盘</Breadcrumb.Item>
                        <Breadcrumb.Item><Icon type='home'/></Breadcrumb.Item>
                        <Breadcrumb.Item style={{fontSize:"12px"}}>主页</Breadcrumb.Item>
                        <Breadcrumb.Item style={{fontSize:'12px'}}>仪表盘</Breadcrumb.Item>
                    </Breadcrumb>
                    <Icon type={this.state.issmall?'arrow-left':'arrow-right'} style={{position:'absolute',right:'20px',top:'14px',fontSize:'20px',lineHeight:'100%'}} onClick={this.isSmall}/>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'24px 24px 0',width:'100%'}}>
                    <div style={{boxShadow:'1px 3px 3px rgba(0,0,255,.2)',position:'relative',borderRadius:'0',margin:'0',padding:'5px 5px 5px 20px',width:'23%',height:'75px',overflow:'hidden',backgroundColor:'#967adc'}} >
                        <Icon type='qq' style={{color:'#cbbdee',fontSize:'100px',position:'absolute',top:'10px',right:'-25px'}}/>
                        <div style={{position:'absolute',top:'10px',left:'15px'}}>
                            <h3 style={{fontSize:'20px',color:'#f5f2fd'}}><b>523</b></h3>
                            <h6 style={{fontSize:'14px',color:'#f5f2fd'}}>QQ</h6>
                        </div>
                    </div>
                    <div style={{boxShadow:'1px 3px 3px rgba(0,0,255,.2)',position:'relative',borderRadius:'0',margin:'0',padding:'5px 5px 5px 20px',width:'23%',height:'75px',overflow:'hidden',backgroundColor:'#70ca63'}} >
                        <Icon type='wechat' style={{color:'#b8e5b1',fontSize:'100px',position:'absolute',top:'10px',right:'-25px'}}/>
                        <div style={{position:'absolute',top:'10px',left:'15p'}}>
                            <h3 style={{fontSize:'20px',color:'#f5f2fd'}}><b>99+</b></h3>
                            <h6 style={{fontSize:'14px',color:'#f5f2fd'}}>微信</h6>
                        </div>
                    </div>
                    <div style={{boxShadow:'1px 3px 3px rgba(0,0,255,.2)',position:'relative',borderRadius:'0',margin:'0',padding:'5px 5px 5px 20px',width:'23%',height:'75px',overflow:'hidden',backgroundColor:'#e9573f'}}>
                        <Icon type='skype' style={{color:'#f4ab9f',fontSize:'100px',position:'absolute',top:'10px',right:'-25px'}}/>
                        <div style={{position:'absolute',top:'10px',left:'15px'}}>
                            <h3 style={{fontSize:'20px',color:'#f5f2fd'}}><b>2</b></h3>
                            <h6 style={{fontSize:'14px',color:'#f5f2fd'}}>skype</h6>
                        </div>
                    </div>
                    <div style={{boxShadow:'1px 3px 3px rgba(0,0,255,.2)',position:'relative',borderRadius:'0',margin:'0',padding:'5px 5px 5px 20px',width:'23%',height:'75px',overflow:'hidden',backgroundColor:'#3bafda'}}>
                        <Icon type='github' style={{color:'#9dd7ed',fontSize:'100px',position:'absolute',top:'10px',right:'-25px'}}/>
                        <div style={{position:'absolute',top:'10px',left:'15px'}}>
                            <h3 style={{fontSize:'20px',color:'#f5f2fd'}}><b>999</b></h3>
                            <h6 style={{fontSize:'14px',color:'#f5f2fd'}}>github</h6>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%',padding:'24px 24px 0'}}>
                    <Card style={{width:'100%',boxShadow:'3px 5px 3px rgba(0,0,255,.2)'}} headStyle={{color:'#666666',backgroundColor:'#fafafa',padding:'0 8px',fontSize:'13px'}} bodyStyle={{padding:'0 8px',position:'relative'}} title={
                        <div style={{boxShadow:'3px,3px,3px,rgba(0,0,255,.2)',verticalAlign:'middle',display:'flex',justifyContent:'start'}}>
                            <span>数据面板组件</span>
                            <span style={{position:'absolute',right:'10px',display:'flex',justifyContent:'space-between',width:"120px"}}>
                                        <Icon type='reload'/>
                                        <Icon type='pic-center'/>
                                        <Icon type='minus'/>
                                        <Icon type='close'/>
                                    </span>
                        </div>
                    }>
                        <div id='echarts1' style={{width:'60%',height:'300px'}}> </div>
                        <div style={{width:'26%',height:'300px',position:'absolute',right:'5%',top:"0"}}>
                            <h4 style={{fontSize:'14px',margin:'15px 0 15px'}}>门店销售额排名</h4>
                            <ul style={{listStyle:'none',padding:'0'}}>
                                <li style={{height:'35px'}}>
                                    <span><Badge count='1' style={{backgroundColor:"#c1c1c1",color:"black"}}/></span>
                                    <span style={{marginLeft:'15px'}}>工专路0号店</span>
                                    <span style={{position:'absolute',right:'0'}}>323234</span>
                                </li>
                                <li style={{height:'35px'}}>
                                    <span><Badge count='2' style={{backgroundColor:"#c1c1c1",color:"black"}}/></span>
                                    <span style={{marginLeft:'15px'}}>工专路1号店</span>
                                    <span style={{position:'absolute',right:'0'}}>323234</span>
                                </li>
                                <li style={{height:'35px'}}>
                                    <span><Badge count='3' style={{backgroundColor:"#c1c1c1",color:"black"}}/></span>
                                    <span style={{marginLeft:'15px'}}>工专路2号店</span>
                                    <span style={{position:'absolute',right:'0'}}>323234</span>
                                </li>
                                <li style={{height:'35px'}}>
                                    <span><Badge count='4' style={{backgroundColor:"#c1c1c1",color:"black"}}/></span>
                                    <span style={{marginLeft:'15px'}}>工专路3号店</span>
                                    <span style={{position:'absolute',right:'0'}}>323234</span>
                                </li>
                                <li style={{height:'35px'}}>
                                    <span><Badge count='5' style={{backgroundColor:"#c1c1c1",color:"black"}}/></span>
                                    <span style={{marginLeft:'15px'}}>工专路4号店</span>
                                    <span style={{position:'absolute',right:'0'}}>323234</span>
                                </li>
                                <li style={{height:'35px'}}>
                                    <span><Badge count='6' style={{backgroundColor:"#c1c1c1",color:"black"}}/></span>
                                    <span style={{marginLeft:'15px'}}>工专路5号店</span>
                                    <span style={{position:'absolute',right:'0'}}>323234</span>
                                </li>
                                <li style={{height:'35px'}}>
                                    <span><Badge count='7' style={{backgroundColor:"#c1c1c1",color:"black"}}/></span>
                                    <span style={{marginLeft:'15px'}}>工专路6号店</span>
                                    <span style={{position:'absolute',right:'0'}}>323234</span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'24px 24px 0'}}>
                    <Card style={{width:'32%',height:'320px',boxShadow:'3px 5px 3px rgba(0,0,255,.2)'}} bodyStyle={{padding:'0 15px 20px'}} headStyle={{padding:'0 8px',height:'40px',fontSize:'14px',backgroundColor:'#fafafa'}} title={
                        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                            <span style={{fontFamily:'Monospace Number',color:'#666666'}}>折线图</span>
                            <span style={{width:'90px',display:'flex',justifyContent:'space-between',color:'rgb(102,102,102)'}}>
                                        <Icon type='reload'/>
                                        <Icon type='pic-center'/>
                                        <Icon type='minus'/>
                                        <Icon type='close'/>
                                    </span>
                        </div>
                    }>
                        <div id='echarts2' style={{width:'90%',height:'260px'}}>

                        </div>
                    </Card>
                    <Card style={{width:'32%',height:'320px',boxShadow:'3px 5px 3px rgba(0,0,255,.2)'}} bodyStyle={{padding:'0 15px 20px'}} headStyle={{padding:'0 8px',height:'40px',fontSize:'14px',backgroundColor:'#fafafa'}} title={
                        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                            <span style={{fontFamily:'Monospace Number',color:'#666666'}}>饼图</span>
                            <span style={{width:'90px',display:'flex',justifyContent:'space-between',color:'rgb(102,102,102)'}}>
                                        <Icon type='reload'/>
                                        <Icon type='pic-center'/>
                                        <Icon type='minus'/>
                                        <Icon type='close'/>
                                    </span>
                        </div>
                    }>
                        <div id='echarts3' style={{width:'95%',height:'260px'}}>

                        </div>
                    </Card>
                    <Card style={{width:'32%',height:'320px',boxShadow:'3px 5px 3px rgba(0,0,255,.2)'}} bodyStyle={{padding:'0 15px 20px'}} headStyle={{padding:'0 8px',height:'40px',fontSize:'14px',backgroundColor:'#fafafa'}} title={
                        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                            <span style={{fontFamily:'Monospace Number',color:'#666666'}}>柱状图</span>
                            <span style={{width:'90px',display:'flex',justifyContent:'space-between',color:'rgb(102,102,102)'}}>
                                        <Icon type='reload'/>
                                        <Icon type='pic-center'/>
                                        <Icon type='minus'/>
                                        <Icon type='close'/>
                                    </span>
                        </div>
                    }>
                        <div id='echarts4' style={{width:'90%',height:'260px'}}>

                        </div>
                    </Card>
                </div>
            </Content>
        )
    }
}