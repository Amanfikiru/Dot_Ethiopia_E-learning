import React, { useState } from 'react'
import './feedback.css';


const Feedback = () => {
    const [modal, setModal] = useState(false);
 const [data, setData] =useState({
  name:"",
  email:"",
  feedback:""
 })
  const handleChange=(e) =>{

    const {name ,value}= e.target.value;   
    setData({ ...data, [name]: value});
    
  };
 const HandleSubmit =(e) =>{
  e.preventDefault()
  console.log(data)
 }
  return (
   
    <div className="App">
      <h1 className="h1">Feedback form</h1>
{ !modal &&(
   <button className="btn btn-orange close-btn" onClick ={()=> setModal((value)=> !value)}> Toogle Feedback</button>
)}
 
 <div className="feedback">
  {modal &&(
     <form  className="feedback" onSubmit={HandleSubmit}>
  <button className="close-btn-form" onClick ={()=> setModal((value)=> !value)}>* close</button> 
    <div className="m1-rem">
      <input placeholder="Name" name="name" onChange={e => handleChange=(e)}/>

    </div>
    <div>
      <input placeholder="Email" name="email" onChange={(e) => handleChange=(e ,'email')}/>

    </div>
    <div>
      <input placeholder="Feedback" name="feedback" onChange={(e) => handleChange=(e ,'feedback')}/>
      
    </div>
    <button className="btn btn-orange" onClick={HandleSubmit}>submit Feedback</button>
  </form>)}
 </div>
    </div>
  )
}

export default Feedback;




  

