import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Home from "./pages/Home/Home";
import About from "./pages/About/About";  // Import your About page correctly
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Hospitals from "./pages/Hospitals/Hospitals";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Consultation from "./pages/Consultation/Consultation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/consultation/:hospitalName" element={<Consultation />} />
      </Routes>
    </>
  );
}

export default App;
