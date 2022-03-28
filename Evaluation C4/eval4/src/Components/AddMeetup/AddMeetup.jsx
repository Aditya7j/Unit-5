import axios from "axios";
import { useEffect, useState } from "react";

export const AddMeetup = () => {

  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/meetups").then((res)=>{
      showData(res.data)
    })
  },[])

  function showData(data){
    setData(data)
  }

  const [formdata,setformdata]=useState({
    title:"",
    location:"",
    date:"",
    time:"",
    theme:"",
    description:"",
    image:"",

  })

  const handlechange=(e)=>{
    const {name}=e.target;
    setformdata({
      ...formdata,[name]:e.target.value
    })
    // console.log(formdata)
    
  }



  const handleSubmit = (e)=>{
    e.preventDefault()

    axios.post("http://localhost:8080/meetups",formdata).then(()=>{
      console.log(formdata)
    })
  }
    return (
      <div className="addMeetupContainer">
        <form onSubmit={handleSubmit}>
          <h1>Add Meetup</h1>
          <label>title</label>
          <input type="text" className="title" name="title"  onChange={handlechange} required />
          <label>Location</label>
          <select name="location"  className="location" onChange={handlechange}>
            <option value=""></option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
          <br />
          <label>date</label>
          <input
            type="text"
            className="date"
            name="date"
            onChange={handlechange}
            placeholder="format YYYY-MM-DD"
            
            required
          />
          <br />
          <label>time</label>
          <input
            type="text"
            className="time"
            name="time"
            onChange={handlechange}
            placeholder="format HH:MM"
            
            required
          />
          <br />
          <label>Theme</label>
          <select name="theme" className="theme" onChange={handlechange}>
            <option value="">-----------</option>
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="movies">Movies</option>
            <option value="culture">Culture</option>
            <option value="art">Art</option>
            <option value="drama">Drama</option>
          </select>
          <label>description</label>
          <input
            type="text"
            className="description"
            name="description"
            onChange={handlechange}
            placeholder="Description"
            
            required
          />
          <br />
          <label>Image</label>
          <input
            type="text"
            className="image"
            name="image"
            onChange={handlechange}
            
            required
          />
          <br />
          <input className="submitMeetupForm" type="submit" />
        </form>
      </div>
    );
  };