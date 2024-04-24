import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Slot from "./Components/Slot";
import Home from "./Components/Home";
import Room from "./Components/Room";
import image from "../src/img/foot.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dash" element={<Dashboard />}></Route>
          <Route path="/slot" element={<Slot />}></Route>
          <Route path="/room/:roomId" element={<Room />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
