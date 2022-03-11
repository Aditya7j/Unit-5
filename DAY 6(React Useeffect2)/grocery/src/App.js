import logo from './logo.svg';
import './App.css';
import { Stopwatch } from './components/Stoptimewatch';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      {show ? <Stopwatch/>:""}
      <button onClick={()=>{
        setShow(!show)
      }}>{show? "Hide Timer":"Show Timer"}</button>
      
    </div>
  );
}

export default App;
