import { useState } from "react";

export function Notebook(){
    const [counter,SetCounter] = useState(44)

    const notebooks = (value)=>{
        SetCounter(counter+value)
    }


return(
    <div className="items">
        <span>Notebooks:{counter}</span>

        <button className="addNotebook" onClick={()=>{notebooks(1)}}>ADD</button>
        <button className="remNotebook" onClick={()=>{notebooks(-1)
            if(counter<=0){
                SetCounter(0)
            }
        }}>REM</button>

        <span className="totalNotebooks"></span>
        
    </div>
)
}