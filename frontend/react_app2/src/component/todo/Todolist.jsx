import React from 'react'

const Todolist = ({todos,setTodos}) => {
  // complete function
  const handleComplete = (id) => {
    //  console.log(id)
    setTodos( todos.map((todo) => (todo.id === id ? { ...todo, status: true } : todo)) );

    //   1 == 1 { id:1, title:2, status:false   }
  };

  // Remove
  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>todo items</h2>

      {todos.map((el) => (
        <li key={el.id}>
          {el.title} {"   ---->   "}{" "}
          {el.status ? "Completed✅" : "Not Completed ❌"}
          <button onClick={() => handleComplete(el.id, el.status)}>
            Complete
          </button>
          <button onClick={() => handleRemove(el.id)}>Remove</button>
        </li>
      ))}
    </div>
  );
}

export default Todolist