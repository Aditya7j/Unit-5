import { useState } from "react";

export function Counter(){
    const [counter,setCounter] =useState(0);
    
    const addchange = (value) =>{
        setCounter(counter+value)
    }

    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button className="abc" onClick={()=>{addchange(1)}}>Increment</button>

            <button className="bbc" onClick={()=>{addchange(-1)

                if(counter<=0){
                    setCounter(0)
                }
            }}>Decrement</button>
            <button className="ccc" onClick={()=>{
                setCounter(counter*2)
            }}>Double</button>
        </div>
    )
     
    
    
}