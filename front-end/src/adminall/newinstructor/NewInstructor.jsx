import React, {useState} from 'react'
//import { Publish,} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./newInstructor.css";
import axios from "axios"

export const NewInstructor = () => { 
  const [image, setimage] = useState('')
  function fileSelected(e) {
    console.log(e.target.files)
    setimage(e.target.files[0])
  }
  function handleApi(){
    const formdata = new FormData()
    formdata.append('image', image)
    formdata.append('first name', document.getElementById('firstname').value);
    formdata.append('Last name', document.getElementById('lastname').value);
    formdata.append('email', document.getElementById('email').value);
    formdata.append('date of birth', document.getElementById('dateofbirth').value);
    formdata.append('password', document.getElementById('password').value);
    formdata.append('confirm password', document.getElementById('confirmpassword').value);
    formdata.append('phone number', document.getElementById('phonenumber').value);
    formdata.append('Gender', document.getElementById('gender').value);
    formdata.append('Level of Study', document.getElementById('levelofstudy').value);
    formdata.append('Field of Study', document.getElementById('fieldofstudy').value);
    formdata.append('Address', document.getElementById('address').value);
    formdata.append('Country', document.getElementById('country').value);
    formdata.append('City', document.getElementById('city').value);
    formdata.append('Lecturing', document.getElementById('lecturing').value);
    axios.post('url',formdata)
  }
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
              id='firstname'
              />
            <input
              type="text"
              placeholder="Father Name *"
              className="InstructorUpdateInput"
              id='lastname'
              />

            <input
              type="text"
              placeholder="GrandFather Name "
              className="InstructorUpdateInput"
              />
          </div>
          <div className="makeflex">
            <input
              type="email"
              placeholder="Email *"
              className="InstructorUpdateInput"
              id='email'
              />
            <div className="makeblock">
              <lable htmlfor="birthday" className='dropdownlable'>Date of Birth</lable>
              <input
                name='birthday'
                type="date"
                placeholder='mm/dd/yy'
                className='birthday'
                id='dateofbirth'
                />
            </div>
          </div>

          <div className="makeflex">
            <input
              type="password"
              placeholder="Password *"
              className="InstructorUpdateInput"
              id='password'
              />
            <input
              type="password"
              placeholder="Confirm password *"
              className="InstructorUpdateInput"
              id='confirmpassword'
              />
            <input
              type="text"
              placeholder="Phone Number"
              className="InstructorUpdateInput"
              id='phonenumber'
              />
          </div>

          <div className="makeflex">
            <div className="makeblock">
                <lable htmlfor="gender" className='dropdownlable'>Gender</lable>
                <select
                  name= "gender"
                  className='dropdown'
                  id='gender'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
              </div>

                <div className="makeblock">
                  <lable htmlfor="level of study" className='dropdownlable'>Level of study</lable>
                  <select
                    name= "level of study"
                    className='dropdown'
                    id='levelofstudy'>
                      <option className='dropdownoptions' value="">Level of study</option>
                      <option className='dropdownoptions' value="under 12"> Under Grade 12</option>
                      <option className='dropdownoptions' value="diploma">Diploma</option>
                      <option className='dropdownoptions' value="degree">Degree</option>
                      <option className='dropdownoptions' value="masters">Master's</option>
                      <option className='dropdownoptions' value="doctoral">doctoral</option>
                  </select>
                </div>
                <div className="makeblock">
                  <lable htmlfor="field of study" className='dropdownlable'>Field of study</lable>
                  <select
                    name= "field of study"
                    className='dropdown'
                    id='fieldofstudy'>
                      <option className='dropdownoptions' value="">Field of study</option>
                      <option className='dropdownoptions' value="Male">Acounting</option>
                      <option className='dropdownoptions' value="Female">Bio chemist</option>
                      <option className='dropdownoptions' value="Male">Universty leacturer</option>
                      <option className='dropdownoptions' value="Female">project manager</option>
                      <option className='dropdownoptions' value="Male">Software Engineer</option>
                      <option className='dropdownoptions' value="Female">web developer</option>
                  </select>
                </div>
              </div>
              
              <div className="makefelx">
                  <input
                  type="text"
                  placeholder="Address"
                  className="InstructorUpdateInput"
                  id='address'
                  />
                  <input
                  type="text"
                  placeholder="Country"
                  className="InstructorUpdateInput"
                  id='country'
                  />
                  <input
                  type="text"
                  placeholder="City"
                  className="InstructorUpdateInput"
                  id='city'
                  />
              </div>
              <input
                  type="text"
                  placeholder="Lecturing"
                  className="InstructorUpdateInput"
                  id='lecturing'
                  />

            </div>
            <div className="InstructorUpdateItem">
              <label>Description</label>
              <textarea id="w" rows="4" cols="50"></textarea>
                
            </div>
            
            <div className="InstructorUpdateUpload">
              
              <input type="file" id="file" onChange={fileSelected}/>
            </div>
          </div>
        </form>
        <Link to="/admin/instructor/list">
          <button className="InstructorUpdateButton" onClick={handleApi}>Submit</button>
        </Link>
        
      </div>
    </div>
  
  );
    
}
