import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const TodoDetails=()=>{

    const {id} = useParams()

    const [data,setData]= useState({})

    const [status,setStatus]=useState(data.status)


useEffect(()=>{
    axios.get(`http://localhost:3001/todos/${id}`).then((res)=>{
        console.log(res.data)
        setData(res.data)
    })
},[])
    


    return <div>
        <h1>Title:{data.title}</h1>
        <h1>Status:{status?"Yes":"No"}</h1>
        <button onClick={()=>{
            fetch(`http://localhost:3001/todos/${id}`,{
                method:"PATCH",
                body:JSON.stringify({status:(!data.status)}),
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            setStatus(!status)
        }}>Toggle</button>


    </div>
}