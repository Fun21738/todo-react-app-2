import "./index.css"


function Body({ todo, setTodo, handleDelete}) {

    // const handleDelete=(id)=>{
    //     todo = todo.filter(item => item.id !== id)
    //     console.log(todo)
    //     setTodo(todo)
    // }

    // console.log(todo)

    return todo.map((todo, index) => (
        <div className="parent">
            <div className="all">
            <input type="checkbox"  className="check"/>
                <p className="output">{todo.title}</p>
                <p className="output">{todo.select}</p>
              
                <button>edit</button>
                <button onClick={() => handleDelete(todo.id)}>delete</button>
            </div>
        </div>
    ))
}


export default Body