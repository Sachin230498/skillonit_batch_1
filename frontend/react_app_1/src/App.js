import logo from "./logo.svg";
import "./App.css";
import Child1 from "./component/props/Child1.jsx";
import UserCrud from "./component/UserCrud.jsx";

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1>Hello I am react app</h1>
      <UserCrud/>

    </div>
  );
}

export default App;

// Function componet - statelss component , we can change state using hooks
// class componet - statelfull component

// Prop drilling
