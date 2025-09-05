import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {

    const {theme,toggleTheme} = useContext(ThemeContext)

  return (
    <nav style={{
       background:theme==="light"?"#fff":"#000",
       color:theme==="light"?"#000":"#fff",
       display:"flex",
       justifyContent:"space-around",
       border:"2px solid"

    }}>
        <h1>Weather Dashboard</h1>
        <button onClick={toggleTheme}>
            Switch to {theme === "light"? "Dark": "Light"}
        </button>
    </nav>
  )
}

export default Navbar