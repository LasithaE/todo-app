import React,{useState} from 'react'
import {v4} from 'uuid';
function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });
    const uuid=v4()
    function handleTaskInputChange(e) {
        setTodo({...todo,task:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo,id:uuid}); 
            setTodo({...todo,task:""});
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}
export default TodoForm;
