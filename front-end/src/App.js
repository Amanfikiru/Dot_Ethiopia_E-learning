import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./pages/courseList/CourseList";
import NewCourse from "./pages/newCourse/NewCourse";
import {CourseUpdateu} from "./pages/courseUpdate/CourseUpdateu";
import AddModules from "./pages/addModules/AddModules";
import ModuleList from "./pages/moduleList/ModuleList";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/"
            element={<Home /> } 
            />
          <Route path="/courses"
            element={<CourseList /> } 
            />
          
          <Route path="/newCourse"
           element={<NewCourse />} 
           />
         
          <Route path="/courseEdit/*"
            element={<CourseUpdateu /> }
          />
           <Route path="/newmodule"
            element={<AddModules /> }
          />
          <Route path="/modulelist/*"
            element={<ModuleList /> }
          /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
