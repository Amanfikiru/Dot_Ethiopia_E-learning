import React from 'react'
import { Link } from 'react-router-dom'
import "./adminReport.css"

export const AdminReportList = () => {
    
  return (
    <>
    <div className="body">
        <h3 className='title'>Reports</h3>
        <h5 className='subtitle'>Reports of DOT E-Learnig Web App</h5>
        <div className="containerb">
            <Link to={"/admin/student/report"}>
            <button className="coloringbutton">Student Report</button>
            </Link>
            <Link to={"/admin/course/report"}>
            <button className="coloringbutton">Course Report</button>
            </Link>
        </div>
    </div>
    </>
  )
}
