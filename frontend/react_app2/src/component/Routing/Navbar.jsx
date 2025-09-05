import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  
        <nav style={{ padding:"10px"}}>

            <Link to="/">Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Contact</Link>
           
        </nav>
   
  )
}

export default Navbar