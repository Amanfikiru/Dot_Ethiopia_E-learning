import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseList from "./pages/courseList/CourseList";
import NewCourse from "./pages/newCourse/NewCourse";
import {CourseUpdateu} from "./pages/courseUpdate/CourseUpdateu";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
          <Route path="/newCourse">
            <NewCourse />
          </Route>
          <Route path="/courseEdit">
            <CourseUpdateu />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
