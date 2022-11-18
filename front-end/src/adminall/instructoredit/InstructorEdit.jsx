import React, { useRef } from 'react'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import axios from "axios";
  import { Link, useLocation } from "react-router-dom";
  import "./instructorEdit.css";


export const InstructorEdit = () => {
  const location = useLocation()
  console.log("LOCATION", location.pathname.split("/").pop())
  const instructorid = location.pathname.split("/").pop()
  const inputFname = useRef("");
  const inputLname = useRef("");
  const inputEmail = useRef("");
  const inputLevel = useRef("");
  const inputExpert = useRef("");
  const inputAddress = useRef("");
  const inputCity = useRef("");
  const inputCountry = useRef("");
  const inputDesc = useRef("")
  
  const handleUpdateinstructor = (event) =>{
    event.preventDefault();
    editinstructor()
  }
  const editinstructor = async () =>{
    await axios({
      method:"put",
      url:`http://localhost:8000/api/instructor/${instructorid}`,
      headers:{
            "Content-type" : "application/json",
        },
      data : 
        { firstname:inputFname.current.value, lastname:inputLname.current.value, email:inputEmail.current.value,
          level_of_study:inputLevel.current.value, area_of_expertise:inputExpert.current.value ,
          address:inputAddress.current.value, city:inputCity.current.value, country:inputCountry.current.value ,
          description:inputDesc.current.value  
        }
    }) 
    // inputFname.current.value = ""
    // inputLname.current.value=""
    // inputEmail.current.value=""
    // inputLevel.current.value=""
    // inputExpert.current.value=""
    // inputAddress.current.value = ""
    // inputCity.current.value=""
    // inputCountry.current.value=""
    // inputDesc.current.value = ""
  }
  console.log("inst", inputFname);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Instructor</h1>
        <Link to="/admin/instructor/create">
          <button className="userAddButton">Create New</button>
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
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleUpdateinstructor}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  ref={inputFname}
                  type="text"
                  placeholder={inputFname}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  ref={inputLname}
                  type="text"
                  placeholder={inputLname}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  ref={inputEmail}
                  type="email"
                  placeholder={inputEmail}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Level of study</label>
                <input
                  ref={inputLevel}
                  type="text"
                  placeholder={inputLevel}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  ref={inputAddress}
                  type="text"
                  placeholder={inputAddress}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>country</label>
                <input
                  ref={inputCountry}
                  type="text"
                  placeholder={inputCountry}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>city</label>
                <input
                  ref={inputCity}
                  type="text"
                  placeholder={inputCity}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Area of Expertise</label>
                <input
                  ref={inputExpert}
                  type="text"
                  placeholder={inputExpert}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <textarea ref={inputDesc} id="w" rows="4" cols="50"></textarea>
              </div>
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
              <Link to="/admin/instructor/list">
                <button className="userUpdateButton">Update</button>
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
