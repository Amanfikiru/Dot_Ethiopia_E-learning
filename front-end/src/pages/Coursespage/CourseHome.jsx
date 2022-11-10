import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import MyCourses from "./MyCourses"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <MyCourses />
    </>
  )
}

export default CourseHome
