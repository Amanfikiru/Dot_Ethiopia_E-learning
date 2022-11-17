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
    return (
        <div className="tableContainer">
        {/* {APIData.length === 0 ?  */}
        {/* <CircularProgress/> */}
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
            {/* {APIData.data.map((row, index) => ( */}
              <TableRow
                // key={row.id}
                // sx={{ border: 2, text:'center' } }
              >
                <TableCell component="th" scope="row">
                  {/* {index+1} */}
                </TableCell>
                <TableCell  align="left">title</TableCell>
                <TableCell align="left">description</TableCell>
                <TableCell align="left" sx={{cursor:"pointer"}}>
                  <Link to={"/courseEdit/" }> 
                  <button className="userListEdit"><IconPencil /></button>
                  </Link>
                
                  <button className="userListDelete"> <IconTrash />
                  </button>
                  
                </TableCell>
               
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    
      
        </div>
      );
      }
    