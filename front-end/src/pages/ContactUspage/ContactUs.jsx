// import React from "react";
 import './contactus.css';
// const ContactForm = () => {
// return( 
// <form  className="form"
//     //   action={FORM_ENDPOINT}
//     //   onSubmit={handleSubmit}
//       method="POST"
//       target="_blank"
//     >
//         <h1>Feel free to contact us!!</h1>
//       <div className="contact-form">
//         Full Name  <input
//           type="text"
//           placeholder="Full Name"
//           name="name"
//           className="fullName"
//           required
//         />   
      
//       <br></br>
//       <br></br>
      
//         Email  <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           className="emailHolder"
//           required
//         />
      
//       <br></br>
//       <br></br>
      
//         Message <textarea 
//           placeholder="Your message"
//           name="message"
//           className="textArea"
//           required
//         />
      
// <br></br>
      
      
//         <button className="btn" type="button">
//          Submit
//         </button>
//       </div>
//     </form>
//     )
// }
// export default ContactForm;


import React from "react"
const ContactForm  = () =>{ 
    return( 
  <div className="containeruu">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Addis Ababa, Ethiopia</div>
          <div className="text-two">Behind Capital Hotel</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+251 116 673 259</div>
          <div className="text-two">+251 116 673 259</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">ethiopia@dotrust.org</div>
          <div className="text-two">ethiopia@dotrust.org</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any question or suggestion for us or any types of quries related to my tutorial, you can send us message from here. It's our pleasure to help you.</p>
      <form action="#">
        <div className="thecontainer">
            <div className="input-box">
                <input type="text" placeholder="Enter your name"/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Enter your email"/>
            </div>
        </div>
        <div className="bb">
            <textarea type="text" placeholder="your message" className='textbobxx' /> 
        </div>
        <div className="button">
            <input type="button" value="Send Now" />
        </div>
        
      </form>
    </div>
    </div>
    </div>
  
 )
 }
 export default ContactForm;