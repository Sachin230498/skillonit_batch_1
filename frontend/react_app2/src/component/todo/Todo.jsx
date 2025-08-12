import React, {useState} from 'react';

const Todo = () => {
 const [text, setText] = useState("")
 const [todo, setTodo] = useState([])

 const handleAddTodo = ()=>{

    const newItem = {
      title: text,
      status: false,
      id: Math.floor(Math.random(11) * 100),
    };

    // todo.push(newItem)

    setTodo([...todo,newItem])
    console.log(todo)
 }


  return (
    <div>
      {/* addtodo component */}
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="enter your task"
      />
      <button onClick={handleAddTodo}>Add</button>

      {/* Todo item component */}
      <div>
        <h2>Todo Items</h2>
        <ul>
          {todo.map((el) => (
            <>
              <li key={el.id} >{el.title} {"   ---->   "} {el.status ? "Completed" : "Not Completed" }</li>
         
            </>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default Todo