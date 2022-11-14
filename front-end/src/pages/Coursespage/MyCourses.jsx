// import React from "react"
// import "./courses.css"
// import { mycourses } from "../../dummydata"
// import Header from "../../components/header/Header"
// import Heading from "../../components/heading/Heading"

// const MyCourses = () => {
//   return (
//     <>
    
//       <section className='online'>
//         <div className='container'>
//           <Heading subtitle='COURSES' title='Browse Our Online Courses' />
//           <div className='content grid3'>
//             {mycourses.map((val) => (
//               <div className='box'>
               
//                 <div className='img'>
//                   <img src={val.cover} />
//                   <img src={val.hoverCover} alt='image3' className='show' />
//                 </div>
//                 <h1>{val.courseName}</h1>
//                 <span>{val.course}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default MyCourses
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Card from'./Coursecardui/card';
import Cards from './Coursecardui/cards';


const MyCourses = () => {
  return (
    <>
      <Cards/>
      
    </>
  );
};

export default MyCourses;
