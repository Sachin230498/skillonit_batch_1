import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Navbar from '../pages/Navbar';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Allroutes = () => {
  return (
    <div>

        
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element= {<Contact/>}/>
            </Routes>
        



    </div>
  )
}

export default Allroutes