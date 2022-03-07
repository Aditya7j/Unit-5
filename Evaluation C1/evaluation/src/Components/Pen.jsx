import { useState } from "react";
import { Book } from "./Book";

export function Pen(){
    const [counter,SetCounter] = useState(10)

    const addpens = (value)=>{
        SetCounter(counter+value)
    }


return(
    <div className="items">
        <span>Pens:{counter}</span>

        <button className="addPen" onClick={()=>{addpens(1)}}>ADD</button>
        <button className="remPen" onClick={()=>{addpens(-1)
            if(counter<=0){
                SetCounter(0)
            }
        }}>REM</button>

        <span className="totalPens"></span>
        
    </div>
)
}