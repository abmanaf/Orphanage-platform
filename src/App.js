//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Nav_bar/NavBar";
import Home from "./Components/First_Page/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/Contact/ContactUs";
import Donate from "./Components/Donate/Donate";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
       
        <Route path="Donate" element={<Donate />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
