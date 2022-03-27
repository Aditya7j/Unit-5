import {useState} from "react"

export const GroceryInput = ({addItems}) =>{
    const [text,setText] = useState("")
    return (
        <div>
       <h1>GROCERY STORE</h1>
        <input type="text" onChange={(e)=>{
            setText (e.target.value)
        }}/>
        
    
        <button onClick={()=>{
            addItems(text)
           
        }}>Add Items</button>
    </div>
    )
}