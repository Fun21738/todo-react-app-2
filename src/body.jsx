import React, { useState } from "react"
import EditTodo from "./EditTodo";
import "./index.css"


function Body({ todo, edit, handleDelete}) {
    
    const [editTodo,setEditTodo] = useState(false);

    return todo.map((todo, index) => (
        <div className="parent">
            <div className="all">
            <input type="checkbox"  className="check"/>
                <p className="output">{todo.title}</p>
                <p className="output">{todo.select}</p>
              
                <button onClick={()=> setEditTodo((prev)=>!prev)}>edit</button>
                <button onClick={() => handleDelete(todo.id)}>delete</button>                                                                                                                                                                                                                                                       
            </div>
            {editTodo && <EditTodo value={todo} index={index} edit={edit} setEditTodo={setEditTodo}/>}
        </div>
    ))
}


export default Body