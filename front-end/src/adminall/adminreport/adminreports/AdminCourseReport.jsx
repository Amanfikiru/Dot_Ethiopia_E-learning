import React from 'react'
import { Box} from '@material-ui/core';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import {CourseStudentInfo} from "../../../dummyData.js";
import "./reports.css";
import { tokens } from "../../../Theme";
import { useTheme } from "@mui/material";

export const AdminCourseReport = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: "id", headerName: "ID"},
        {field: "studentid",headerName: "Student Id",width: 200,cellClassName: "name-column--cell"},
        { field: "courseid", headerName: "Course Id", width: 200 },
        { field: "completed", headerName: "Completed", width: 120 },
        { field: "dateofcompletion", headerName: "Date of Completion", type: "date", width: 200 },
        
    ]
  return (
    <>
    <div className='body'>
    <Box m="20px">
        <h3 className='head'>Courses</h3>
        <h5 className='subhead'>managing Course info</h5>
        <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.grey[200],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.grey[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.grey[100],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.grey[100],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.grey[100]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[200]} !important`,
            },
          }}
        >
        <DataGrid 
            rows={CourseStudentInfo}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            pageSize={8}
        />
        </Box>
    </Box>
    </div>
    </>
  )

}
