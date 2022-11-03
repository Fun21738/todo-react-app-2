import { useState } from 'react';
import Body from './body.jsx'
import "./index.css"
const Component = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [select, setSelect] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  const singletodo = { title, select ,id: Math.floor(Math.random() * 50) };
    setTodo([...todo, singletodo])
    setSelect('')
    setTitle('')
  }


  const handleDelete=(id)=>{
   const todoN = todo.filter(item => item.id !== id)
    // console.log(todo)
    setTodo(todoN)
}


  console.log(todo);
  return (
    <>
    
    <div className="cont">
      <header className="App-header">
        <h1 style={{ color: "white" }}>Todo App </h1>
      </header>
      <form >
        <input
          type="text"
          value={title}
          placeholder="Add Todo"
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />

        <select
          onChange={(e) => setSelect(e.target.value)}
          className="input2"
        >
          <option value='high'>High</option>
          <option value='medium'>medium</option>
          <option value='low'>low</option>
        </select>

        <input type="button"
          onClick={handleSubmit}
          value="Add todo"
          className="input3"
        />
      </form>
      
    </div>
   
  
<div>
<Body todo={todo} handleDelete={handleDelete}></Body>
</div>
</>
  )
}

export default Component;