import React, { useState } from "react"
import "./index.css"

    function EditTodo({value,index,edit,setEditTodo}){
        const [title, setTitle] = useState(value.title);
        const [select, setSelect] = useState(value.select);
        const handleSubmit = (e) => {
            e.preventDefault()
            edit({title,select},index)
            setEditTodo(false)
          }
        
 
        return(
            <div>
                <form >
                    <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Edit Todo"
                    onChange={(e) => setTitle(e.target.value)}
                    className="input"
                    />

                    <select
                    className="input2"
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                    >
                    <option value='high'>High</option>
                    <option value='medium'>medium</option>
                    <option value='low'>low</option>
                    </select>

                    <input type="button"
                    value="Edit todo"
                    className="input3"
                   onClick={handleSubmit}
                   />
                    </form>
        
           </div>
        )
        }
export default EditTodo