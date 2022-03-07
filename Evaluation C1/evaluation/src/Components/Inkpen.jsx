import { useState } from "react";

export function Inkpen(){
    const [counter,SetCounter] = useState(78)

    const addInkpens = (value)=>{
        SetCounter(counter+value)
    }


return(
    <div className="items">
        <span>InkPens:{counter}</span>

        <button className="addInkpen" onClick={()=>{addInkpens(1)}}>ADD</button>
        <button className="remInkpen" onClick={()=>{addInkpens(-1)
            if(counter<=0){
                SetCounter(0)
            }
        }}>REM</button>

        <span className="totalInkpens"></span>
        
    </div>
)
}