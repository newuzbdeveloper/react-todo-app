import React from "react";


export default function EditTodo({editHandle}){
    return(
        <button onClick={editHandle} className="editBtn">
            Edit.
        </button>
    )
}