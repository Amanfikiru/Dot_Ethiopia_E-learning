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
import { AdminReport } from "./adminall/adminreport/adminreports/AdminReport";
import { AdminReportList } from "./adminall/adminreport/AdminReportList";
import {AdminCourseReport} from "./adminall/adminreport/adminreports/AdminCourseReport";
// This is Student dashboard routes 
import Sidebar from '../src/components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/StudentDash/home/Home";
import CourseList from "./pages/StudentDash/courseList/CourseList";
import Quiz from "./pages/StudentDash/quiz/Quiz";
import Chat from "./pages/StudentDash/chat/chat";
import Feedback from "./pages/StudentDash/feedback/Feedback";
import Message from "./pages/StudentDash/message/Message";
import Explore from "./pages/StudentDash/explore/Explore";
import Assignment from './pages/StudentDash/assignment/Assignment';
function App () {
  return (
    <Router>
      <Topbar />
      <div className="container">
         <Sidebar />
        <Adminsidebar />
        <Switch>
           <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
           <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
           <Route path="/assignment">
            <Assignment/>
          </Route>
           <Route path="/quiz">
            <Quiz/>
          </Route>
           <Route path="/chat">
            <Chat/>
          </Route>
           <Route path="/feedback">
            <Feedback/>
          </Route>
           <Route path="/message">
            <Message/>
          </Route>
           <Route path="/explore">
            <Explore/>
          </Route>
          
           {/* this student dashboard route  */}
          
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