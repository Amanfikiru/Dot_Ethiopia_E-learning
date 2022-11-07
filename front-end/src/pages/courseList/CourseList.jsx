import "./courseList.css";
import CircularProgress from '@mui/material/CircularProgress';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableRow, TableContainer, TableHead,TableCell , Paper} from "@material-ui/core";

 

export default function CourseList() {

  //console.log("Dummy" ,userRows)

  const handleDelete = (rowData) =>{
    console.log("row",rowData)
    deleteData(rowData.id)
  }
  
  const [APIData, setAPIData] = useState([])

  const fetchdata = async () =>{
    await axios.get("http://localhost:8000/api/courses").then(res => {
      setAPIData(res.data)
      console.log("AXIOS" ,res)
    })
  }

  const deleteData = async (id) =>{
    await axios.delete(`http://localhost:8000/api/courses/${id}`).then(data=>{
      console.log("DELETE", data)
    })
  }
  
  useEffect(() => {
    fetchdata();
  }, [])

  //console.log("API data", APIData)



  return (
    <div className="tableContainer">
    {APIData.length === 0 ? 
    <CircularProgress/>
    :
    <TableContainer             
    sx={{ minWidth: 350, maxWidth:1000, width:1000 }}
    component={Paper}>
    <Table stickyHeader 
            aria-labelledby="tableTitle">
      <TableHead>
        <TableRow>
          <TableCell variant="head" align="left">Number</TableCell>
          <TableCell variant="head" align="left">Title</TableCell>
          <TableCell variant="head" align="left">Description</TableCell>
          <TableCell variant="head" align="left">Action</TableCell>
         {/*  <TableCell variant="head" align="left">Delete</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {APIData.data.map((row, index) => (
          <TableRow
            key={row.id}
            sx={{ border: 2, text:'center' } }
          >
            <TableCell component="th" scope="row">
              {index+1}
            </TableCell>
            <TableCell  align="left">{row.title}</TableCell>
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="left" sx={{cursor:"pointer"}}>
              <Link to={"/courseEdit/" + row.id}> 
              <button className="userListEdit">Edit</button>
            </Link>
            
            
            
            <DeleteOutline style={{cursor:"pointer"}}
              // className="userListDelete"
              onClick={() => handleDelete(row)}
            />
            </TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  }
    </div>
  );
  }

