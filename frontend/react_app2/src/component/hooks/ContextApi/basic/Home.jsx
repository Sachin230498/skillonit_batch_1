import React,{useContext} from "react";
import MyContext from "./MyContext";

const Home = () => {
    let data = useContext(MyContext)
//   console.log(data);
  return (
    <div>
      <h1>ContextApi</h1>
      <h1>Home Page, {data}</h1>
    </div>
  );
};

export default Home;
