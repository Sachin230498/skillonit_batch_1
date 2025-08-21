import React from 'react'

const Addtodo = ({text,handlechange,setText}) => {

     

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        value={text}
        type="text"
        placeholder="enter your task"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button onClick={handlechange}>Add</button>
    </div>
  );
}

export default Addtodo