import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addtodo } from "../Redux/action"

export const Todo=()=>{

    const [text,setText]=useState("")
    const dispatch = useDispatch()
    const todos = useSelector((store)=>store.todo)
    
    useEffect(()=>{
        if(todos.length===0){
            getTodo();
        }    
    },[])

    const getTodo = ()=>{
        axios.get("http://localhost:3001/todos").then((res)=>{
            console.log(res.data)
            dispatch(addtodo(res.data))
        })
    }
    
    const findTodo = ()=>{
        axios.post("http://localhost:3001/todos",{
            title:text,
            status:false
        })
    }

    return <div>
        <input type="text" onChange={(e)=>{
            setText(e.target.value)
        }} />
        <button onClick={()=>{
            findTodo();
            getTodo();
            console.log(todos)
        }}>Add todo</button>

        {todos.map((e)=>{
            return (
                <div>
                <Link to ={`/todo/${e.id}`}><div key={e.id}>{e.title}</div></Link>
                <button onClick={()=>{
                    axios.delete(`http://localhost:3001/todos/${e.id}`)
                    getTodo()
                }}>Delete</button>
                </div>
            )
         })}
    </div>
}