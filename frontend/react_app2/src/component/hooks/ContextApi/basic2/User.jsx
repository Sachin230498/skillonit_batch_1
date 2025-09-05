import React,{useContext} from 'react'
import UserContext from './UserContext'

const User = () => {

    let {name,age}= useContext(UserContext)
    // console.log(data)

  return (
    <div><h1>User Data</h1>
    <h1>My name is {name}</h1>
    <h2>Age is {age}</h2>
    </div>

  )
}

export default User