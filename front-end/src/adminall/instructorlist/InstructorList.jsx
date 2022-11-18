import React, {useState, useEffect} from 'react'
import "./instructorList.css";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { Table, TableBody, TableRow, TableContainer, TableHead,TableCell , Paper} from "@material-ui/core"; 
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';



export const InstructorList = () => {  
    
    const handleDelete = (rowData) =>{
        console.log("row",rowData)
        deleteData(rowData.id)
      }  
     
      const deleteData = async (id) =>{
        await axios.delete(`http://localhost:8000/api/instructordelete/${id}`).then(data=>{
          console.log("DELETE", data)
        })
      }
    
    const [APIData, setAPIData] = useState([])
    const fetchdata = async () =>{
        axios.get("http://localhost:8000/api/instructors").then(res => {
          setAPIData(res.data)
          console.log("AXIOS" ,res)
        })
      }
    useEffect(() =>{
       fetchdata();
    }, [])
    
   
    return (
        <>
        <div className="instructorList">
            
            <Link to={"/admin/instructor/create"} >
                <button className="buttonaddtion">
                    Create New<i className='fa fa-arrows-alt-right'/></button>
            </Link>                   
            
            <div className="tableContainer">
    {APIData.length === 0 ? 
    <CircularProgress/>
    :
    <TableContainer             
    sx={{ minWidth: 350 }}
    component={Paper}>
    <Table stickyHeader 
            aria-labelledby="tableTitle">
      <TableHead>
        <TableRow>
          <TableCell variant="head" align="left">Number</TableCell>
          <TableCell variant="head" align="left">Name</TableCell>
          <TableCell variant="head" align="left">Email</TableCell>
          <TableCell variant="head" align="left">Gender</TableCell>
          <TableCell variant="head" align="left">Level of Study</TableCell>
          <TableCell variant="head" align="left">Field of Study</TableCell>
          <TableCell variant="head" align="left">Address</TableCell>
          <TableCell variant="head" align="left">Country</TableCell>
          <TableCell variant="head" align="left">City</TableCell>
          <TableCell variant="head" align="left">Area of Expertise</TableCell>
          <TableCell variant="head" align="left">Description</TableCell>
          <TableCell variant="head" align="left">Action</TableCell>
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
            <TableCell align="left">{row.firstname +' '+ row.lastname}</TableCell>
            <TableCell  align="left">{row.email}</TableCell>
            <TableCell align="left">{row.gender}</TableCell>
            <TableCell  align="left">{row.Level_of_study}</TableCell>
            <TableCell align="left">{row.field_of_study}</TableCell>
            <TableCell  align="left">{row.address}</TableCell>
            <TableCell align="left">{row.country}</TableCell>
            <TableCell  align="left">{row.city}</TableCell>
            <TableCell  align="left">{row.area_of_expertise}</TableCell>
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="left" sx={{cursor:"pointer"}}>
              <Link to={"/admin/instructor/edit/" + row.id}> 
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
        </div>  
        </>
    );
}
    
