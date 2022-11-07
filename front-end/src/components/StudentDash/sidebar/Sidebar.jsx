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
  return (<div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Hello Welcome Learn something new  </h1>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Courses
            </li>
            </Link> 
            {/* <Link to="/courses" className="link">
              <li className="sidebarListItem">
                <TableChart className="sidebarIcon" />
                
              </li>
            </Link> */}
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Student Analytics 
            </li> */}
           <Link to="/explore" className="link">
              <li className="sidebarListItem">
                <TableChart className="sidebarIcon" />
              Explore
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Courses Analytics
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/courses" className="link">
              <li className="sidebarListItem">
                <TableChart className="sidebarIcon" />
                My Learning
              </li>
            </Link>
            {/* <Link to="/newCourse" className="link">
              <li className="sidebarListItem">
                <AddToQueue className="sidebarIcon" />
                New Course
              </li>
            </Link> */}
             <Link to="/assignment" className="link">
            <li>
              <AttachFile className="sidebarIcon" />
              Assignment
            </li>
            </Link>
            <Link to="quiz" >
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Quizes
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="chat">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Chat 
            </li>
            </Link>
            <Link to ="feedback">
            <li >
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            </Link>
            <Link to="message">
            <li >
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
            </Link>
          </ul>
        </div>
        
      </div>
    </div>
    </div>
  );
}
