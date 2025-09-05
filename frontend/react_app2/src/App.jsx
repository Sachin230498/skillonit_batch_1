import React, {useEffect,useState,useContext} from "react";
import Navbar from "./component/weather/Navbar";
import SearchBar from "./component/weather/SearchBar";
import WeatherCard from "./component/weather/WeatherCard";
import { ThemeContext } from "./component/weather/ThemeContext";


const App = () => {

   const {theme} = useContext(ThemeContext)
// console.log(theme)
  let api =
    "https://api.openweathermap.org/data/2.5/weather?appid=9ed85cd73b420879bfec0af68cd8b6fe&units=metric";
   const [weather, setWeather]=  useState("");
   const [city , setCity] = useState("buldhana")

   useEffect(()=>{
       const featchWether = async()=>{
        try {
           let res = await fetch(`${api}&q=${city}`);
           let data = await res.json();
           let x = data.main.temp
          //  console.log(x);
          setWeather(x)
        } catch (error) {
          console.log(error)
        }
         
       }

       featchWether()
   },[city])


  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <Navbar />
      <SearchBar setCity={setCity} />
      <WeatherCard city={city} weather={weather} />
    </div>
  );
}

export default App