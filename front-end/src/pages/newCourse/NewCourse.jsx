import { Publish,} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./newCourse.css";


export default function User() {
 
  return (
    
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Add Course</h1>
        <Link to="/newUser">
          <button className="userAddButton">Add Modules</button>
        </Link>
      </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Add</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Course Title </label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                 
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <textarea id="w" rows="4" cols="50"></textarea>
                  
              </div>
              <div className="userUpdateItem">
                <label>Total Enrolled</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
             
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?cs=srgb&dl=pexels-rikka-ameboshi-3358707.jpg&fm=jpg&_gl=1*q69zqi*_ga*NzU2NTQ5NjYzLjE2NjY4OTYyMjQ.*_ga_8JE65Q40S6*MTY2Njg5NjIyNi4xLjEuMTY2Njg5NjI1MC4wLjAuMA."
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Add</button>
            </div>
          </form>
        </div>
      </div>
    
  );
}
