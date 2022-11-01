import React from 'react'
import Chart from "../../components/chart/Chart";
import Adminfeat from "../homefeatures/Adminfeat";
import "./adminhome.css";
import { userData, InstructorData, userDatas } from "../../dummyData";

export default function  Adminhome() {
      return (
        <div className="adminhome">
          <Adminfeat />
          <Chart data={userData} title="Student Analytics" grid dataKey="Active Students"/>
          <Chart data={InstructorData} title="Instructor Analytics" grid dataKey="Active Instructor"/>
          <Chart data={userDatas} title="Courses Analytics" grid dataKey="Active Courses"/>
        </div>
      );
}

