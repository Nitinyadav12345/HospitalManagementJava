import Home from "./Pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SidebarP from "./Pages/Patient/SidebarP";
import SidebarD from "./Pages/Doctor/SidebarD";
import SidebarC from "./Pages/Chemist/SidebarC";
import SidebarA from "./Pages/Admin/SidebarA";
import SidebarR from "./Pages/Receptionist/SidebarR";
import AboutUs from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import ProfileUser from "./Components/ProfileUser";

function App() {
  return (
    <div className="App" data-theme="cupcake">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userProfile" element={<ProfileUser />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient/*" element={<SidebarP />} />
        <Route path="/doctor/*" element={<SidebarD />} />
        <Route path="/chemist/*" element={<SidebarC />} />
        <Route path="/admin/*" element={<SidebarA />} />
        <Route path="/receptionist/*" element={<SidebarR />} />
      </Routes>
    </div>
  );
}

export default App;
