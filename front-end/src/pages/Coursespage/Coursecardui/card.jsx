import React from 'react';
import startup from '../Coursecardui/startup.jpg';

const Card =props=>{
    return(
      <div className="card text-center">
<div className="overflow">
   <img src={startup} alt="startup" />
   </div> 
   <div className="card-body text-dark">
      <h4 className="card-title">
   Start-up 
         <p className="card-text-secondary">
            Startups are young companies founded to develop a unique product or service, bring it to market and make
             it irresistible and irreplaceable for customers
         </p>
         <a href="#" className='btn btn-outline-success'>Enroll</a>
      </h4>


   </div>
    <h1> connected</h1>



 </div>
    );
}
export default Card;