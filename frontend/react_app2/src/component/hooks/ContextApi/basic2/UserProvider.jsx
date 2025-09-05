import React,{useState} from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}) => {
    const data = {
        name:"Akku",
        age:22
    }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider