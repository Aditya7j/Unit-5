
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Todo } from './Components/Todo';
import { TodoDetails } from './Components/TodoDetails';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path="/todo/:id" element={<TodoDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;


