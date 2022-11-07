import React, {useRef} from 'react'
import {
    CalendarToday,
    LocationSearching,
    PermIdentity,
    Publish
    
  } from "@material-ui/icons";
  import { Link , useLocation} from "react-router-dom";
  import "./courseUpdate.css";
  import axios from 'axios';
import { useState } from 'react';
// import { useRef } from "react";

export const CourseUpdateu = () => {

  const location = useLocation()
  console.log("LOCATION", location.pathname.split("/").pop())
  const courseId = location.pathname.split("/").pop()
  // const [courseTitle, setCourseTitle] = useState("")
  // const [description, setDescription] = useState("")

  const inputTitle = useRef("");
  const inputDesc = useRef("")
  const inputRolled = useRef(null)

  const handleUpdateCourse = (event) =>{
    event.preventDefault();
    // console.log(inputDesc.current.value, inputTitle.current.value)

    // setCourseTitle(inputTitle.current.value)
    // setDescription(inputDesc.current.value)
    editCourse()
    

  }

  const editCourse = async () =>{
    await axios({
      method:"put",
      url:`http://localhost:8000/api/courses/${courseId}`,
      headers:{
            "Content-type" : "application/json",
        },
      data : 
        { title:inputTitle.current.value, description:inputDesc.current.value }
    })
    inputDesc.current.value = ""
    inputTitle.current.value = ""
    // setDescription("")
    // setCourseTitle("")
  }


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Course</h1>
        <Link to="/newCourse">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              
              <span className="userShowUserTitle">Start-Up</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Course Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Start-up</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">This training focus on the fundamental concept of Start-up.</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">10</span>
            </div>
            
            
            
        </div> 
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleUpdateCourse}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Course Title</label>
                <input
                ref={inputTitle}
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <textarea ref={inputDesc} id="w" rows="4" cols="50"></textarea>
              </div>
             
              {/* <div className="userUpdateItem">
                <label>Total Enrolled</label>
                <input
                ref={inputRolled}
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div> */}
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}