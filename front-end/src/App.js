import "./App.css"
import AuthUser from './pages/Authentication/AuthUser';
import Header from "./components/header/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Homepage/Home"
import Footer from "./components/Footer/Footer";
import Login from "./pages/Authentication/Login"
import Register from "./pages/Authentication/register"
// import Courses from "./pages/Coursespage/Courses";
import About from "./pages/Aboutpage/About";
import ContactForm from "./pages/ContactUspage/ContactUs";
import MyCourses from "./pages/Coursespage/MyCourses";
import Hero from "./pages/Homepage/hero/Hero";
import LoginAdmin from "./pages/AdminAuth/Login";
import SignupAdmin from "./pages/AdminAuth/Signup";
function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/MyCourses" element={<MyCourses />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contactus" element={<ContactForm/>} />
        
        <Route exact path="/loginAdmin" element={<LoginAdmin/>} />
        <Route exact path="/signupAdmin" element={<SignupAdmin/>} />
       </Routes>
         <Footer />
      </Router>
     
    </>
    )
}

export default App