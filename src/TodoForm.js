import React, {useState} from "react";

export default function TodoForm({addingTodo, removeAll, todoList}) {
    const [todo, setTodo] = useState('');
    

    const handleSubmit = e => {
        e.preventDefault();
        if(todo !== ""){
            addingTodo(todo)
        }else{
            return
        }
        setTodo('')
    }

    return(
        <form className="todoForm">
            <input type="text" className="todoInput" placeholder="Adding new task..."
            onChange={(e)=>setTodo(e.target.value)} value={todo} />
            <button type="submit" className="inputBtn" onClick={handleSubmit}>Add Task.</button>
            {todoList.length !== 0 &&<button className="removeAllBtn" onClick={removeAll}>Remove All.</button>}
        </form>
    )
}