import axios from "axios"
import { useState } from "react"

const Googlebooks=()=>{

    const [state,setState]=useState([])
    const [search,setSearch]=useState('')

    const changehandler=(event)=>{
        setSearch(event.target.value)

    }
    
    const clickhandler=()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}` ).then(response=>{
            console.log(response.data)
            setState(response.data.items)

        }).catch(err=>{
            console.log(err)
        })
    }
    return(

      

     <div> 
        <div>
            <input type="text" onChange={changehandler}/>
            <button onClick={clickhandler}>fetch data</button>
            </div>
            <div>
            {
            state.map(ele =>(

                <li key={ele.id}>{ele.volumeInfo.title}</li>
            ))
                   
            
          }

        </div>
        </div>  
    )
}
 export default Googlebooks