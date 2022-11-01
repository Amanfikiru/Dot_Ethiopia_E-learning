//import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
//import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CourseList from "./pages/courseList/CourseList";
// import NewCourse from "./pages/newCourse/NewCourse";
import Adminsidebar from "./components/admin/Adminsidebar";
import Adminhome from "./adminall/adminhome/Adminhome";
import { NewInstructor } from "./adminall/newinstructor/NewInstructor";
import { InstructorList } from "./adminall/instructorlist/InstructorList";

function App () {
  return (
    <Router>
      <Topbar />

      <div className="container">
        <Adminsidebar />
        <Switch>
          <Route path="/admin">
            <Adminhome />
          </Route>
          <Route path="/admincreate">
            <NewInstructor />
          </Route>
          <Route path="/admininstlist">
            <InstructorList />
          </Route>
        </Switch>
      </div>
        
    </Router>
  );
}

export default App