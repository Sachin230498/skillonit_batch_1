import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {

    const {theme } = useContext(ThemeContext)

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Welcome Home</h1>
      <p>This page color change based on theme</p>
    </div>
  );
}

export default Home