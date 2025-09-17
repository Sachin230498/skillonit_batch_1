import React, {useEffect,useState,useContext} from "react";
import Navbar from "./component/weather/Navbar";
import SearchBar from "./component/weather/SearchBar";
import WeatherCard from "./component/weather/WeatherCard";
import { ThemeContext } from "./component/weather/ThemeContext";
import RefreshToken from "./component/pages/RefreshToken";


const App = () => {


  return (
    <div>
   <h1>Hello</h1>
   <RefreshToken/>
    </div>
  );
}

export default App