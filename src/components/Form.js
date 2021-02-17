import React from 'react';

const Form = ({ setStatus ,  setInputText , inputText , todos , setTodos }) =>{

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {text:inputText , completed:false , id: new Date().getTime().toString() }
        setTodos([...todos , newTodo])
        setInputText('')

    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler } value={inputText} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;