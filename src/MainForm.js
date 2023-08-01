import React,{ useEffect,useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {v4 as uuidv4} from 'uuid'
uuidv4();

export default function MainForm(){
    let todoFromLocalStorage = JSON.parse(localStorage.getItem('todoList')) ?? [];
    const [todoList, setTodoList] = useState(todoFromLocalStorage);

     


    const addingTodo = todo => {
        setTodoList([...todoList, {id: uuidv4(), task: todo,
        completed: false, isEditing: false} ])
    }

    const toggleComplete = id => {
        setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
    }

    const removeAll = () =>{
        setTodoList([])
    }

    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList))
    },[todoList])

   

    return(
        <>
           <TodoForm addingTodo={addingTodo} removeAll={removeAll} todoList={todoList}/>
            {todoList.map((todo, index) => (
            <Todo key={index} task={todo}
            toggleComplete={toggleComplete} 
            todoList={todoList} setTodoList={setTodoList}/>
            ))}
        </>
    )
}