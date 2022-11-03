import React from 'react'
import { Box} from '@material-ui/core';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import {Studentinfo} from "../../dummyData.js";
import "./adminReport.css";
import { tokens } from "../../Theme";
import { useTheme } from "@mui/material";
export const AdminReport = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name",headerName: "name",width: 200,},
        { field: "email", headerName: "Email", width: 200 },
        { field: "gender", headerName: "Gender", width: 120 },
        { field: "city", headerName: "City", width: 200 },
        { field: "address", headerName: "Address", width: 200 },
        { field: "created_at", headerName: "Created at", type: "date", width: 200 },
        
    ]
  return (
    <>
    <div className='body'>
    <Box m="20px">
        <h3 className='title'>Instructors</h3>
        <h5 className='subtitle'>managing Instructor info</h5>
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
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
            <DataGrid 
                rows={Studentinfo}
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
