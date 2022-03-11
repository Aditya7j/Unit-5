
import {useEffect, useState } from "react";
import axios from "axios";

export const Store=()=>{

    const [text,setText] = useState("")
    const [items,setItems]=useState([]);
    const [page,setPage] = useState(1)

    useEffect(()=>{
        getItems()
    },[page])

    const getItems =()=>{
        axios.get(`http://localhost:3000/items?_limit=3&_page=${page}`).then(res=>{
            setItems(res.data)
        })
    }

    return <div>
        <h1>TODO STORE</h1>
        <input type="text" onChange={(e)=> setText(e.target.value)} />
        <button onClick={()=>{
            fetch("http://localhost:3000/items",{
                method:"POST",
                body:JSON.stringify({title:text,purchased:false}),
                headers:{"content-type":  "application/json"}
            }).then(()=>{
                getItems()
            })
        }}>Save Items</button>
       {items.map((i)=>(
           <div key={i.id}>
               <h3>{i.title}</h3>
               </div>
       ))}
       <button onClick={()=>{
           setPage(page-1)
       }}>Prev</button>
       <button onClick={()=>{
           setPage(page+1)
       }}>Next</button>
    </div>
}