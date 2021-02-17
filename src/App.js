import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
import React , {useState , useEffect } from 'react'

function App() {

  const [inputText , setInputText] = useState('');
  const [todos , setTodos ] = useState([]);
  const [status , setStatus] = useState('all');
  const [filteredTodos , setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter( (todo) => todo.completed === true ))
        break;
      case 'uncompleted':
          setFilteredTodos(todos.filter( (todo) => todo.completed === false ))
          break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos' , JSON.stringify(todos)) 
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){  
      localStorage.setItem('todos' , JSON.stringify([]));
    }else{
      let localTodos = JSON.parse(localStorage.getItem('todos')) ;
      setTodos(localTodos);
    } 
  }

  useEffect(() => {
    getLocalTodos();
  } , [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  } , [status , todos])


  return (
    <div>
      <header>
        <h1>Hosam's Todo List</h1>
      </header>
      <Form setStatus={setStatus} setInputText ={setInputText} inputText = {inputText} todos={todos} setTodos = {setTodos} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
