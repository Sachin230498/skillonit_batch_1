import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import { CiStar, FaGrinStars } from "react-icons/ci";


const Navbar = () => {

    const { theme,toggleTheme }= useContext(ThemeContext)
   
  return (
    <nav
      style={{
        padding:"20px",
        background: theme === "light" ? "#ddd" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>My Site</h1>
      <button onClick={toggleTheme}>Switch to {theme === "light"?<CiStar/>:<FaGrinStars/>}</button>
    </nav>
  );
}

export default Navbar