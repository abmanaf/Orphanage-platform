import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Nav_bar/NavBar";
import Home from "./Components/First_Page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
