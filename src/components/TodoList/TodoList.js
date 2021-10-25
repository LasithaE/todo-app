import React from 'react';
import Todo from '../Todo/Todo';
function TodoList({todos,toggleComplete,removeTodo}) {
    return (
        <ul style={{ visibility: todos.length ? "visible" : "hidden" }}>
            {todos.map(todo => (
                <Todo key={todo.id}
                    todo={todo} 
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}/> 
            ))}
        </ul>
    );
}

export default TodoList;