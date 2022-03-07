import logo from './logo.svg';
import './App.css';
import {Book} from "./Components/Book"
import {Pen} from "./Components/Pen"
import { Notebook } from './Components/Notebook';
import {Inkpen} from "./Components/Inkpen"





function App() {
  return (
    <div>
      <h1>Inventroy App</h1>
      <Book></Book>
      <Pen></Pen>
      <Notebook></Notebook>
      <Inkpen></Inkpen>

      <div className='total'></div>
    </div>
  );
}

export default App;
