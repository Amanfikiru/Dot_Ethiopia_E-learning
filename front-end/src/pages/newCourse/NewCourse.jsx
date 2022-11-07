import { Publish,} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import "./newCourse.css";




export default function NewCourse() {
  const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [totalEnrolled, setTotalEnrolled] = useState('');

  const addCourse = async () =>{
    await axios({
    method:"post",
    url:"http://localhost:8000/api/courses",
    headers:{
          "Content-type" : "application/json",
      },
    data : 
      { title:courseTitle, description:description }
    
  })
};



const refreshPage = () => {
    navigate(0);
}


  const postData = (e) => {
    e.preventDefault();
    // console.log(courseTitle);
    // console.log(description);
    // http.post('/courses',{ title:courseTitle, description:description })
    addCourse()
    // refreshPage()
    setCourseTitle("")
    setDescription("")
  }

    
  return (
    
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Add Course</h1>
        <Link to="/newmodule">
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
                  value={courseTitle}
                  type="text"
                  placeholder="CourseTitle"
                  onChange={(e) => setCourseTitle(e.target.value)}
                  className="userUpdateInput"
                 
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <textarea value={description} id="w" rows="4"  cols="50"onChange={(e) => setDescription(e.target.value)}>

                </textarea>
                
                  
              </div>
              {/* <div className="userUpdateItem">
                <label>Total Enrolled</label>
                <input
                  type="text"
                  placeholder="TotalEnrolled"
                  className="userUpdateInput"
                  onChange={(e) => setTotalEnrolled(e.target.value)}
                />
              </div> */}
             
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
              <button className="userUpdateButton" onClick={(e)=>postData(e)}>Add</button>
            </div>
          </form>
        </div>
      </div>
    
  );
}
