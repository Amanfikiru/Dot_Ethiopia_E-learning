import React from 'react';
// import startup from '../Coursecardui/startup.jpg';
// import reachup from '../Coursecardui/reachup.jpg';
// import women from '../Coursecardui/women.jpg';
import './card-style.css';

const Card =props=>{

    return(

      <div className="card text-center ">
<div className="overflow">

   <img src={props.imgsrc} alt="startup" className='card-startup-top' />
   </div> 
   <div className="card-body text-dark">
      <h4 className="card-title">
   {props.title}
         <p className="card-text-secondary">
           {props.p}
         </p>
         <a href="www.google.com" className='btn btn-outline-success'>Enroll</a>
      </h4>


   </div>
 </div>
    );
}
export default Card;