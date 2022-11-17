import { Publish} from "@material-ui/icons";
import React, { useState } from 'react';
import axios from 'axios';
import "./newCourse.css";




export default function NewCourse() {
  //const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [by, setBy] = useState('');

  const addCourse = async () =>{
    await axios({
    method:"post",
    url:"http://localhost:8000/api/courses",
    headers:{
          "Content-type" : "application/json",
      },
    data : 
      { title:courseTitle, description:description, }
    
  })
};

  const postData = (e) => {
    e.preventDefault();
    // console.log(courseTitle);
    // console.log(description);
    // http.post('/courses',{ title:courseTitle, description:description })
    addCourse()
    setCourseTitle("")
    setDescription("")
    setBy("")
  }

    
  return (
    
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Add Course</h1>
        
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
                <textarea value={description} id="w" rows="4"  cols="50" onChange={(e) => setDescription(e.target.value)}>
                </textarea>    
              </div>
              <div className="userUpdateItem">
                <label>By:</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  onChange={(e) => setBy(e.target.value)}
                />
              </div>
             
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src=""
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
