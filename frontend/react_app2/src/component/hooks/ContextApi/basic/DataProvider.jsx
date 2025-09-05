import React from 'react'
import MyContext from './MyContext'


const DataProvider = ({children}) => {
    const name = "Rohan"
    const cart = "1234"
  return (
    <MyContext.Provider value={name}  cart = {cart}>
          {children}
    </MyContext.Provider>
  )
}

export default DataProvider