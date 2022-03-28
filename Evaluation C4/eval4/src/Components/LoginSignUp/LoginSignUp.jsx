import axios from "axios";
import { useState,useEffect } from "react";

export const LoginSignUp = () => {

  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/users").then((res)=>{
      showData(res.data)
    })
  },[])

  function showData(data){
    setData(data)
  }


  const [formdata,setformdata] =useState({
    name:"",
    password:"",
    location:"",
    Interests:"",
    technology:"",
    image:"",


  })

  const handlechange=(e)=>{
    const {name}=e.target;
    setformdata({
      ...formdata,[name]:e.target.value,
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    axios.post("http://localhost:8080/users",formdata).then(()=>{
      console.log(formdata)
    })
  }

  const [ldata,setldata]=useState([])

useEffect(()=>{
  axios.get("http://localhost:8080/login").then((res)=>{
  showldata(res.data)
  })
},[])

function showldata(data){
  setldata(data)
}

  const [logindata,setlogindata]=useState({
    name:"",
    password:"",
  })

  const loginchange =(e)=>{
    const {name}=e.target;
    setlogindata({
      ...logindata,[name]:e.target.value,
    })
  }

  const loginsubmit=(e)=>{
    e.preventDefault()

    axios.post("http://localhost:8080/login",logindata).then(()=>{
      console.log(logindata)
      alert("Success")
    })
  }

    return (
      <div className="loginSignUp">
        <form className="signUp" onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <label>name</label>
          <input
            type="text"
            className="name"
            name="name"
            onChange={handlechange}
            required
          />
          <br />
          <label>password</label>
          <input
            type="text"
            className="password"
            name="password"
            onChange={handlechange}
            required
          />
          <br />
          <select name="location" className="location" onChange={handlechange}>
            <option value=""></option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
          <label>Interests</label>
          <br />
          <label>technology</label>
          <input
            type="checkbox"
            className="technology"
            name="technology"
            onChange={handlechange}
            
          />
          <br />
          <label>food</label>
          <input type="checkbox" className="food" onChange={handlechange} />
          <br />
          <label>movies</label>
          <input type="checkbox" className="movies" onChange={handlechange} />
          <br />
          <label>culture</label>
          <input type="checkbox" className="culture" onChange={handlechange} />
          <br />
          <label>art</label>
          <input type="checkbox" className="art" onChange={handlechange} />
          <br />
          <label>drama</label>
          <input type="checkbox" className="drama" onChange={handlechange} />
          <br />
          <label>image</label>
          <input
            type="text"
            className="image"
            name="image"
            onChange={handlechange}
            required
          />
          <br />
          <input type="submit" className="submitSignUpForm" />
        </form>
        <form className="login" onSubmit={loginsubmit}>
          <h1>Login</h1>
          <label>name</label>
          <input
            type="text"
            className="name"
            name="name"
            onChange={loginchange}
            required
          />
          <br />
          <label>password</label>
          <input
            type="text"
            className="password"
            name="password"
            onChange={loginchange}
            required
          />
          <br />
          <input type="submit" className="submitLoginForm" />
        </form>
      </div>
    );
  };