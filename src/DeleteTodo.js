import React from "react";

export default function DeleteTodo({deleteHandle}){
    return(
        <button onClick={deleteHandle} className="deleteBtn">
            Delete
        </button>
    )
}