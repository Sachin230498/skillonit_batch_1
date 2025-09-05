import React, { useContext } from 'react'
import MyContext from './MyContext'


const Cart = () => {
    let cart = useContext(MyContext)
  return (
    <div>
        <h1>Cart Value, {cart}</h1>
    </div>
  )
}

export default Cart