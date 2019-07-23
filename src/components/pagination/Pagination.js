import React, {useState,useEffect} from 'react';
import {List, Icon, Typography, Input, Button, Comment} from "antd";
import axios from 'axios'

import './Pagination.css'

export default function Pagination() {
  const {Text} = Typography;
  const {TextArea} = Input;

  const [data,setData] = useState([]);

  const IconText = ({type,text})=>
      <span>
      <Icon type={type} style={{marginRight:'8px'}}/>
        {text}
    </span>
  ;
/*页面初次渲染获取数据*/
  useEffect( ()=>{
    const getData = async ()=>{
      const result =await axios('menu.json');
      setData(result.data.result.data)
    };
    getData();
  },[]);

  const CommentList = ({comments}) =>
    (<List
      dataSource={comments}
      itemLayout="horizontal"
      renderItem={props=>console.log(props)}
    />);
console.log(data);
  return(
    <List
      dataSource={data}
      itemLayout='vertical'
      bordered={true}
      pagination='bottom'
      renderItem={item=>
        <List.Item
          key={item.id}
          actions={[
            <IconText type='star-o' text="156"/>,
            <IconText type='like-o' text='99'/>,
            <IconText type='message' text='5'/>,
          ]

          }
          extra={
            <img
              alt='logo'
              width={200}
              src={item.albums[0]}
            />
          }
        >
          <List.Item.Meta
            title={item.title}
            description={
              <div>
                <p>简介：{item.tags}</p>
                <p>原料：{item.burden}</p>
                <Text type="warning">
                  {item.imtro}
                </Text>
              </div>
            }
          />

        </List.Item>
      }
    />
  )
}