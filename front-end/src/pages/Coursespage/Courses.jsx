import React from "react";
import Back from "../../components/back/Back";
import CoursesCard from "./CoursesCard";
import MyCourses from "./MyCourses";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const Courses = () => {
  return (
    <>
      <Back title="Explore Courses" />
      
      <CoursesCard />
      
    </>
    
     
  );
};

export default Courses;
