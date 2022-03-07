import { useState } from "react";

export function Book(){
    const [counter,SetCounter] = useState(13)

    const addbooks = (value)=>{
        SetCounter(counter+value)
    }


return(
    <div className="items">
        <span>Books:{counter}</span>

        <button className="addBook" onClick={()=>{addbooks(1)}}>ADD</button>
        <button className="remBook" onClick={()=>{addbooks(-1)
            if(counter<=0){
                SetCounter(0)
            }
        }}>REM</button>

        <span className="totalBooks"></span>
        
    </div>
)
}