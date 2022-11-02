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
import { InstructorEdit } from "./adminall/instructoredit/InstructorEdit";
import { AdminReport } from "./adminall/adminreport/AdminReport";

function App () {
  return (
    <Router>
      <Topbar />

      <div className="container">
        <Adminsidebar />
        <Switch>
          <Route path="/admin/home">
            <Adminhome />
          </Route>
          <Route path="/admin/Instructor/create">
            <NewInstructor />
          </Route>
          <Route path="/admin/instructor/list">
            <InstructorList />
          </Route>
          <Route path="/admin/instructor/edit">
            <InstructorEdit />
          </Route>
          <Route path="/admin/report">
            <AdminReport />
          </Route>

        </Switch>
      </div>
        
    </Router>
  );
}

export default App