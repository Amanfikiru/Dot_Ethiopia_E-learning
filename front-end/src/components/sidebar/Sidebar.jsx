import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  TableChart,
  AddToQueue,
  AttachFile,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Instructor Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Student Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Courses Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/courses" className="link">
              <li className="sidebarListItem">
                <TableChart className="sidebarIcon" />
                My Courses
              </li>
            </Link>
            <Link to="/newCourse" className="link">
              <li className="sidebarListItem">
                <AddToQueue className="sidebarIcon" />
                Add New Course
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachFile className="sidebarIcon" />
              Assignment
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Quizes
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
