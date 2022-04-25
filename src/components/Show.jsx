import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd/lib/radio';


const Show = ({data}) => {

 const columns = [
    {
        title: 'users',
        dataIndex: 'name',
        key: 'name',
        render: text =>text
      }
     

     
]
  return (
     
    <Table columns={columns} dataSource={data} style={{border:'1 solid black'}} />
  )
}

export default Show