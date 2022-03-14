 import "./form.css"

import { useEffect, useRef, useState } from "react"
import  axios  from "axios"

export const Forms=()=>{
    
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            console.log(res.data)
            showdata(res.data)

        })
    },[])

    function showdata(data){
        setData(data)
    }
    

    const checkref = useRef(true)

    const [data,setData] =useState([])

    
    const [formdata,setformdata] =useState({
        username:"",
        age:"",
        address:"",
        dept:"",
        salary:"",
        matrial:"No",
        
    })


    const handlechange =(e)=>{
        const {id,value} = e.target;
        setformdata({
            ...formdata,[id]:value,
        })

        
    }
    const handlesubmit =(e)=>{

        e.preventDefault()
        if(checkref.current==true){
            setformdata({...formdata,matrial:"No"})
        }
        else{
            setformdata({...formdata,matrial:"Yes"})
        }
        axios.post("http://localhost:3000/users",formdata).then(()=>{
            // alert("User created successfully")
            console.log(formdata)
            
            
        })
    }
    return(

        <div className="cont">
        <form onSubmit={handlesubmit} >
        
        <input className="abb" value={formdata.username} id="username" type="text" onChange={handlechange} placeholder="Enter Username"/>
        <br></br>
        <input className="abb" value={formdata.age} id="age" type="number" onChange={handlechange} placeholder="Enter Age"/>
        <br></br>
        <input className="abb" value={formdata.address} id="address" type="text" onChange={handlechange} placeholder="Enter Address"/>
        <br></br>
        <select value={formdata.dept} id="dept" onChange={handlechange}>
            <option value="---">---</option>
            <option value="it">IT</option>
            <option value="hr">HR</option>
            <option value="acc">Account</option>
            <option value="buss">Bussiness</option>
            <option value="hel">Health</option>
        </select>
        <br></br>
        <input className="abb" value={formdata.salary} id="salary" type="number" onChange={handlechange} placeholder="Enter Salary"/>
        <br></br>
        
        <input onClick={()=>{
            if(checkref.current==true){
                checkref.current=false
            }
            
            else{
                checkref.current=true
            }
            console.log(checkref)

        }}  value={formdata.matrial} id="matrial" type="checkbox"  />
        <span  className="abc">Married</span>
        <br></br>
        
        <input className="abb" type="submit" value="Submit Data"/>
    </form>
    <br/>
    <br/>

    <table >
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Dept</th>
        <th>Salary</th>
        <th>Matrial</th>
        </tr>

        
            {data.map((e)=>{

                return <tr>
                        <td>{e.username}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.dept}</td>
                        <td>{e.salary}</td>
                        <td>{e.matrial}</td>
                    </tr>              
            })}
        
        
    </table>
    </div>
    ) 
}
