import React,{useState} from "react";
import DeleteTodo from "./DeleteTodo"
import EditTodo from "./EditTodo";


export default function Todo({task, toggleComplete, todoList, setTodoList}){
  const [editedTodo, setEditedTodo] = useState('')

  const deleteHandle = id => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList)
  }

  const editHandle = id => {
    setTodoList(todoList.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    setEditedTodo(task.task)
  }

  const saveHandle = (id) => {
    const updatedTodoList = todoList.map((todo) => todo.id === id ? {...todo, task: editedTodo, isEditing: !todo.isEditing} : todo)
    setTodoList(updatedTodoList)
    setEditedTodo('')
  }

  
    return(
      task.isEditing ? (
        <div className="todoEditingForm">
              <input type="text" className="todoEditingInput" placeholder="Updating Todo..."
              onChange={(e)=>setEditedTodo(e.target.value)} value={editedTodo} />
              <button type="submit" className="inputEditBtn" onClick={() => saveHandle(task.id)} >Save.</button>
       </div>
        
      ) : (
        <ul className="todo">
            <li className={`${task.completed ? 'completed' : ''}`}>
              <input type="checkbox" onClick={()=>toggleComplete(task.id)}
            />{task.task}</li>
            {task.completed === false && (<><EditTodo editHandle={() => editHandle(task.id)}/><DeleteTodo deleteHandle={() => deleteHandle(task.id)}/></>)}
       </ul>
      )
        
    )
}