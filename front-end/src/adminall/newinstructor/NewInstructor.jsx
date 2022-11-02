import React from 'react'
import { Publish,} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./newInstructor.css";

export const NewInstructor = () => {  
     
      return (
        
        <div className="Instructor">
          <div className="InstructorTitleContainer">
            <h1 className="InstructorTitle">Add Instructor</h1>
          </div>
            <div className="InstructorUpdate">
              <span className="InstructorUpdateTitle">Basic information</span>
              <form className="InstructorUpdateForm">
                <div className="InstructorUpdateLeft">
                  <div className="InstructorUpdateItem">
                    <div className="makeflex">
                        <input
                        type="text"
                        placeholder="First Name *"
                        className="InstructorUpdateInput"
                        />
                        <input
                        type="text"
                        placeholder="Last Name *"
                        className="InstructorUpdateInput"
                        />
                    </div>
                    
                    <input
                      type="email"
                      placeholder="Email *"
                      className="InstructorUpdateInput"
                    />
                    <div className="makeflex">
                        <input
                        type="password"
                        placeholder="Password *"
                        className="InstructorUpdateInput"
                        />
                        <input
                        type="password"
                        placeholder="Confirm password *"
                        className="InstructorUpdateInput"
                        />
                    </div>
                    
                    <div className="makefelx">
                        <input
                        type="text"
                        placeholder="Adress"
                        className="InstructorUpdateInput"
                        />
                        <input
                        type="text"
                        placeholder="Phone Number"
                        className="InstructorUpdateInput"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Lecturing"
                        className="InstructorUpdateInput"
                        />

                  </div>
                  <div className="InstructorUpdateItem">
                    <label>Description</label>
                    <textarea id="w" rows="4" cols="50"></textarea>
                      
                  </div>
                  
                 
                </div>
                <div className="InstructorUpdateRight">
                  <div className="InstructorUpdateUpload">
                    <img
                      className="InstructorUpdateImg"
                      src="https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?cs=srgb&dl=pexels-rikka-ameboshi-3358707.jpg&fm=jpg&_gl=1*q69zqi*_ga*NzU2NTQ5NjYzLjE2NjY4OTYyMjQ.*_ga_8JE65Q40S6*MTY2Njg5NjIyNi4xLjEuMTY2Njg5NjI1MC4wLjAuMA."
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="InstructorUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                </div>
              </form>
              <Link to="/admin/instructor/list">
                <button className="InstructorUpdateButton">Submit</button>
              </Link>
              
            </div>
          </div>
        
      );
    
}
