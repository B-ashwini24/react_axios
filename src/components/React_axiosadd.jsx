import React,{useState,useEffect} from 'react'

import axios from 'axios'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import { Input } from 'antd'
import { Button } from 'antd'
import Show from './Show'
const { TextArea } = Input






const React_axiosadd = () => {
    ///api/notes/fetchallnotes

    const [state,setState]=useState({
        title:""
       

    })

    const [apiData,setApiData]=useState([]);
    const [flag,setFlag]=useState(false);

const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

}

const getData=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response=>{
     console.log(response.data);
      setApiData(response.data);
    }).catch(err=>{
        console.log(err);
    })
}

useEffect(()=>{
   getData();

},[flag])


const submitData=()=>{
    // Api call
    axios.post(`https://jsonplaceholder.typicode.com/users`,state).then(response=>{
       console.log(response.data);
       alert("Data Saved");
       setFlag(!flag);
       //getData();
    }).catch(err=>{
        console.log(err);
    })
}

  return (
    <div style={{marginTop:"200px" }}>
         <Row>
         <Col span={6} offset={9}>
          <h3>Hello User</h3><br/>
      <input type='text' placeholder="add user" onChange={handleChange} name='title' prefix={<UserOutlined />} /> 

    

      <button  onClick={submitData}>Add </button>
</Col>
     
    </Row>

   
<Row>
<Col span={6} offset={9}>
<Show data={apiData}/>

</Col>
</Row>


    </div>
  )
}

export default React_axiosadd