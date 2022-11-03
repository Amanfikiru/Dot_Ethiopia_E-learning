import "./adminsidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  TableChart,
  BarChart,
  MailOutline,
  DynamicFeed,
  AttachFile,
  ChatBubbleOutline,

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="adminsidebar">
      <div className="adminsidebarWrapper">
        <div className="adminsidebarMenu">
          <h3 className="adminsidebarTitle">Admin Dashboard</h3>
          <ul className="adminsidebarList">
            <Link to="/admin/home" className="link">
            <li className="adminsidebarListItem active">
              <LineStyle className="adminsidebarIcon" />
              Home
            </li>
            </Link>
            <li className="adminsidebarListItem">
              <Timeline className="adminsidebarIcon" />
              Student Analytics
            </li>
            <li className="adminsidebarListItem">
              <TrendingUp className="adminsidebarIcon" />
              Instructor Analytics
            </li>
            <li className="adminsidebarListItem">
              <TrendingUp className="adminsidebarIcon" />
              Courses Analytics
            </li>
          </ul>
        </div>
        <div className="adminsidebarMenu">
          <h3 className="adminsidebarTitle">Quick Menu</h3>
          <ul className="adminsidebarList">
            <Link to="/admin/instructor/list" className="link">
              <li className="adminsidebarListItem">
                <TableChart className="adminsidebarIcon" />
                Instructors
              </li>
            </Link>
            <Link to="/admin/instructor/create" className="link">
              <li className="adminsidebarListItem">
                <TableChart className="adminsidebarIcon" />
                Create Instructors
              </li>
            </Link>
            
            <li className="adminsidebarListItem">
              <AttachFile className="adminsidebarIcon" />
              certificate
            </li>
          </ul>
        </div>
        <div className="adminsidebarMenu">
          <h3 className="adminsidebarTitle">Report</h3>
          <ul className="adminsidebarList">
            <Link to="/admin/student/report" className="link">
              <li className="adminsidebarListItem">
                <BarChart className="adminsidebarIcon" />
                Student Report
              </li>
            </Link>
            <Link to="/admin/course/report" className="link">
              <li className="adminsidebarListItem">
                <BarChart className="adminsidebarIcon" />
                Course Report
              </li>
            </Link>
            
          </ul>
        </div>
        <div className="adminsidebarMenu">
          <h3 className="adminsidebarTitle">Notifications</h3>
          <ul className="adminsidebarList">
            <Link to="/admin/report" className="link">
              <li className="adminsidebarListItem">
                <MailOutline className="adminsidebarIcon" />
                Reports
              </li>
            </Link>
            <li className="adminsidebarListItem">
              <DynamicFeed className="adminsidebarIcon" />
              Feedback
            </li>
            <li className="adminsidebarListItem">
              <ChatBubbleOutline className="adminsidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
