import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Adminsidebar from "./components/admin/Adminsidebar";
import Adminhome from "./adminall/adminhome/Adminhome";
import { NewInstructor } from "./adminall/newinstructor/NewInstructor";
import { InstructorList } from "./adminall/instructorlist/InstructorList";
import { InstructorEdit } from "./adminall/instructoredit/InstructorEdit";
import { AdminReport } from "./adminall/adminreport/adminreports/AdminReport";
import { AdminReportList } from "./adminall/adminreport/AdminReportList";
import {AdminCourseReport} from "./adminall/adminreport/adminreports/AdminCourseReport";

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
          <Route path="/admin/instructor/edit/:id">
            <InstructorEdit />
          </Route>
          <Route path="/admin/report">
            <AdminReportList />
          </Route>
          <Route path="/admin/student/report">
            <AdminReport />
          </Route>
          <Route path="/admin/course/report">
            <AdminCourseReport />
          </Route>
        </Switch>
      </div>
      
        
    </Router>
  );
}

export default App