import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";


const { Header } = Layout;

const Router = () => {
const menuItems=[
  {
    "title":"Mounting",
    "link":"/mount"
  },
  {
    "title":"Updating",
    "link":"/update"
  },
  {
    "title":"Unmounting",
    "link":"/unmount"
  }

]

  return (
   
    <div style={{backgroundColor:'blue',paddingTop:'100px',textAlign:'center'}}>
    <h2>Component Lifecycle Method</h2>
    <Menu theme="light" mode="horizontal" style={{display:'flex',justifyContent:'center'}} >
   
  
      {menuItems.map((ele, index) => {
       
        return <Menu.Item key={index}>  <Link to={ele.link}>{ele.title}</Link> </Menu.Item>;
      })}
 
    </Menu>
   
    </div>
    


  )
}

export default Router