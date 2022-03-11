import { useEffect,useState } from "react"

export const Stopwatch=()=>{

    const [timer,setTimer] =useState(20)

    useEffect(()=>{

       const id= setInterval(()=>{
            console.log("Interval",timer)
            setTimer((prev)=>{
                if(prev<=1){
                    clearInterval(id)
                    return 0
                }
                return prev-1
                })
           
        },1000)

        return ()=>{
            clearInterval(id)
            
        }
    },[])

   
    return <div>Timer:{timer}</div>
}
