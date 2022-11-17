import "./moduleList.css";
import CircularProgress from '@mui/material/CircularProgress';
import { IconTrash } from '@tabler/icons';
import { IconPencil } from '@tabler/icons';
import { IconVocabulary } from '@tabler/icons';
import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableRow, TableContainer, TableHead,TableCell , Paper} from "@material-ui/core";
export default function ModuleList() {
  const handleDelete = (rowData) =>{
    // console.log("row",rowData)
   
    deleteData(rowData.id)
  }
  
  const [APIDataM, setAPIDataM] = useState([])

  const fetchdata = async () =>{
    await axios.get("http://localhost:8000/api/modules").then(res => {
      setAPIDataM(res.data)
      console.log("AXIOS" ,res)
    })
  }

  const deleteData = async (id) =>{
    await axios.delete(`http://localhost:8000/api/modules/${id}`).then(data=>{
      
      console.log("DELETE", data)
    })
  }
  
  useEffect(() => {
    fetchdata();
  }, [])
    return (
        <div className="tableContainer">
        {APIDataM.length === 0 ?
        <CircularProgress />
        :
        <TableContainer             
        sx={{ minWidth: 350, maxWidth:1000, width:1000 }}
        component={Paper}>
        <Table stickyHeader 
                aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell  align="left" font-weight="bolder" font-size="large">Number</TableCell>
              <TableCell  align="left"font-weight="bolder" font-size="large">Module Title</TableCell>
              <TableCell  align="left" font-weight="bolder" font-size="large" >Notes</TableCell>
              <TableCell  align="left" font-weight="bolder" font-size="large" >Video URL</TableCell>
              <TableCell  align="left" width="300" font-weight="bolder" font-size="large" >Action</TableCell>
             {/*<TableCell variant="head" align="left">Delete</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
        {APIDataM.data.map((row, index) => (
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
              <button className="userListEdit"><IconPencil /></button>
              </Link>
            
              <button className="userListDelete" onClick={() => handleDelete(row)}> <IconTrash />
              </button>
              <Link to="/newmodule">
               <button className="userAddButton"> <IconVocabulary /> </button>
              </Link>
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
