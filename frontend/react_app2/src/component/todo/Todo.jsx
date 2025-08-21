import React,{useState} from 'react'
import Addtodo from './Addtodo'
import Todolist from './Todolist'

const Todo = () => {
  const [text, setText] = useState("")
  const [todos,setTodos] = useState([])



  const handleAddTodo = ()=>{
    // console.log("hello")
    const newItem = {
      id:Math.floor(Math.random()*1000),
      title:text,
      status:false
    }

    setTodos([...todos, newItem])
    // console.log(todos)
    setText("")  //clear input
  }
  


  return (
    <div>


      <Addtodo  text={text} handlechange={handleAddTodo} setText={setText}/>

      {/* Todo List */}
      <Todolist todos={todos} setTodos={setTodos} />
     
    </div>
  );
}

export default Todo