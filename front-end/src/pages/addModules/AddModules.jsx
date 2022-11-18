import "./addModules.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Publish,} from "@material-ui/icons";



export default function AddModules() {
  const [ModuleTitle, setModuletitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [videourl, setvideourl] = useState("");
  const addModule = async () =>{
    await axios({
    method:"post",
    url:"http://localhost:8000/api/modules",
    headers:{
          "Content-type" : "application/json",
      },
    data : 
      { name:ModuleTitle, notes:Notes,youtube_url:videourl }
    
  })
};
const postData = (e) => {
  e.preventDefault();
  // console.log(courseTitle);
  // console.log(description);
  // http.post('/courses',{ title:courseTitle, description:description })
  addModule()
  setModuletitle("")
  setNotes("")
  setvideourl("")
}

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
                  value={ModuleTitle}
                  type="text"
                  placeholder="Moduletitle"
                 onChange={(e) => setModuletitle(e.target.value)}
                  className="userUpdateInput"
                 
                />
              </div>
              <div className="userUpdateItem">
                <label>Notes</label>
                <textarea 
               value={Notes} 
                id="w" rows="19"  cols="90"
                onChange={(e) => setNotes(e.target.value)}
                >

                </textarea>
                
                  
              </div>
              <div className="userUpdateItem">
                <label>Video Url</label>
                <input
                  type="text"
                  value={videourl}
                  placeholder=""
                  className="userUpdateInput"
                  onChange={(e) => setvideourl(e.target.value)}
                />
              </div>
             
            
              </div>

            <div className="userUpdateRight">
             
             <button className="userUpdateButton" 
              onClick={(e)=>postData(e)}
              >Add</button>
            </div>
            
          </form>
          </div>
          
    )
}