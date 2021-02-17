import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
import React , {useState} from 'react'

function App() {

  const [inputText , setInputText] = useState('');
  const [todos , setTodos ] = useState([]);

  return (
    <div>
      <header>
        <h1>Hosam's Todo List</h1>
      </header>
      <Form setInputText ={setInputText} inputText = {inputText} todos={todos} setTodos = {setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
