import React, {useState} from 'react'
//import { Publish,} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./newInstructor.css";
import axios from "axios"

export const NewInstructor = () => { 
  

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [grandfathername, setGrandFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [expertise, setExpertise] = useState("");
  const [fieldofstudy, setFieldofStudy] = useState("");
  const [levelofstudy, setLevelofStudy] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const addInstructor = async () =>{
    await axios({
    method:"post",
    url:"http://localhost:8000/api/instructorregister",
    headers:{
          "Content-type" : "application/json",
      },
    data : 
      { firstname:firstname, lastname:lastname, grandfathername:grandfathername, email:email, password:password,
        gender:gender, area_of_expertise:expertise, field_of_study:fieldofstudy, level_of_study:levelofstudy,
        address:address, country:country, city:city, description:description }
    
    })
  };
  const postData = (e) => {
    e.preventDefault();
    
    addInstructor()
    
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
              value={firstname}
              type="text"
              placeholder="First Name *"
              className="InstructorUpdateInput"
              onChange={(e) => setFirstName(e.target.value)}
              id='firstname'
              />
            <input
              value={lastname}
              type="text"
              placeholder="Father Name *"
              className="InstructorUpdateInput"
              onChange={(e) => setLastName(e.target.value)}
              id='lastname'
              />

            <input
              value={grandfathername}
              type="text"
              placeholder="GrandFather Name "
              className="InstructorUpdateInput"
              onChange={(e) => setGrandFatherName(e.target.value)}
              />
          </div>
          <div className="makeflex">
            <input
              value={email}
              type="email"
              placeholder="Email *"
              className="InstructorUpdateInput"
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              />
            {/* <div className="makeblock">
              <label htmlFor="birthday" className='dropdownlabel'>Date of Birth</label>
              <input
                name='birthday'
                type="date"
                placeholder='mm/dd/yy'
                className='birthday'
                id='dateofbirth'
                />
            </div> */}
          </div>

          <div className="makeflex">
            <input
              value={password}
              type="password"
              placeholder="Password *"
              className="InstructorUpdateInput"
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              />
            <input
              type="password"
              placeholder="Confirm password *"
              className="InstructorUpdateInput"
              id='confirmpassword'
              />
            {/* <input
              value={phonenumber}
              type="text"
              placeholder="Phone Number"
              className="InstructorUpdateInput"
              onChange={(e) => setPhoneNumber(e.target.value)}
              id='phonenumber'
              /> */}
          </div>

          <div className="makeflex">
            <div className="makeblock">
                <label htmlFor="gender" className='dropdownlabel'>Gender</label>
                <select
                  value={gender}
                  name= "gender"
                  className='dropdown'
                  onChange={(e) => setGender(e.target.value)}
                  id='gender'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
              </div>

                <div className="makeblock">
                  <label htmlFor="level of study" className='dropdownlabel'>Level of study</label>
                  <select
                    value={levelofstudy}
                    name= "level of study"
                    className='dropdown'
                    onChange={(e) => setLevelofStudy(e.target.value)}
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
                  <label htmlFor="field of study" className='dropdownlabel'>Field of study</label>
                  <select
                    value={fieldofstudy}
                    name= "field of study"
                    className='dropdown'
                    onChange={(e) => setFieldofStudy(e.target.value)}
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
                  value={address}
                  type="text"
                  placeholder="Address"
                  className="InstructorUpdateInput"
                  onChange={(e) => setAddress(e.target.value)}
                  id='address'
                  />
                  <input
                  value={country}
                  type="text"
                  placeholder="Country"
                  className="InstructorUpdateInput"
                  onChange={(e) => setCountry(e.target.value)}
                  id='country'
                  />
                  <input
                  value={city}
                  type="text"
                  placeholder="City"
                  className="InstructorUpdateInput"
                  onChange={(e) => setCity(e.target.value)}
                  id='city'
                  />
              </div>
              <input
                  value={expertise}
                  type="text"
                  placeholder="area of expertise"
                  className="InstructorUpdateInput"
                  onChange={(e) => setExpertise(e.target.value)}
                  id='lecturing'
                  />

            </div>
            <div className="InstructorUpdateItem">
              <label>Description</label>
              <textarea id="w" rows="4" cols="50"
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
                
            </div>
            
            {/* <div className="InstructorUpdateUpload">
              
              <input type="file" id="file"  onChange={fileSelected} />
            </div> */}
          </div>
        </form>
        <Link to="/admin/instructor/list">
          <button className="InstructorUpdateButton" onClick={(e)=>postData(e)}>Submit</button>
        </Link>
        
      </div>
    </div>
  
  );
    
}
