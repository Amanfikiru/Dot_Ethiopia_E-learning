import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import "./addModules.css";
import { Publish,} from "@material-ui/icons";



export default function AddModules() {
    return(
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Add Modules</h1> 
      </div>
        <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Module Title </label>
                <input
                 // value={courseTitle}
                  type="text"
                  placeholder="Moduletitle"
                 // onChange={(e) => setCourseTitle(e.target.value)}
                  className="userUpdateInput"
                 
                />
              </div>
              <div className="userUpdateItem">
                <label>Notes</label>
                <textarea 
               // value={description} 
                id="w" rows="4"  cols="50"
                //</div>onChange={(e) => setDescription(e.target.value)}
                >

                </textarea>
                
                  
              </div>
              <div className="userUpdateItem">
                <label>Video Url</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  //onChange={(e) => setTotalEnrolled(e.target.value)}
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
              <button className="userUpdateButton" 
              //onClick={(e)=>postData(e)}
              >Add</button>
            </div>
          </form>
          </div>
    )
}