import React from 'react';
import './Todo.css';
function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick() {
        console.log(todo);
        toggleComplete(todo.id);
    }
    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <li className="todo-div">
            
            <input type="checkbox" className="checkbox-custom" onClick={handleCheckboxClick}></input>
            <p style={{textDecoration: todo.completed ? 'line-through' : null}}>{todo.task}</p>
            <button onClick={handleRemoveClick}>X</button>
        </li>
        
    );
}

export default Todo;
