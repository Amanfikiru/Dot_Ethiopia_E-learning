import React, {useState, useEffect} from 'react'
import "./instructorList.css";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
//import { instructorRows } from "../../dummyData";
import axios from 'axios';



export const InstructorList = () => {  
    
    const handleDelete = (rowData) =>{
        console.log("row",rowData)
        deleteData(rowData.id)
      }  
      const deleteData = async (id) =>{
        await axios.delete(`http://localhost:8000/api/courses/${id}`).then(data=>{
          console.log("DELETE", data)
        })
      }
    const[instlists, setInstlists] = useState([]);
   
    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/api/instructors")
            .then((data)=> 
            {
                setInstlists(data.data.data)
            }) 
    }, [])
    
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "firstname",  headerName: "First Name", width: 200,},
        { field: "lastname", headerName: "First Name", width: 200, },
        { field: "grandfathername", headerName: "First Name", width: 200, },
        { field: "email", headerName: "Email", width: 200 },
        { field: "gender", headerName: "Gender", width: 120,},
        { field: "level_of_study", headerName: "Level of Study", width: 160,},
        { field: "field_of_study", headerName: "Field of Study", width: 160, },
        { field: "address", headerName: "Address", width: 160,},
        { field: "country", headerName: "Country", width: 160,},
        { field: "city", headerName: "City", width: 150, },
        { field: "area_of_expertise", headerName: "Area of Expertise",  width: 150, },
        { field: "description", headerName: "Description", width: 160,},
        { field: "created_at", headerName: "Created at", width: 150, },
        { field: "updated_at", headerName: "Updated at", width: 150,},
        {field: "Action", headerName: "Action",width:120,
        renderCell: (params) => {
             return(
                <>
                    <Link to={"/admin/instructor/edit/" + instlists.id }> 
                    <button className="userListEdit">Edit</button>
                    </Link>
                
                    <DeleteOutline style={{cursor:"pointer"}}
                        
                        onClick={() => handleDelete()}/>
                </>
            )
        }}
    ];

    return (
        <>
        <div className="instructorList">
            
            <Link to={"/admin/instructor/create"} >
                <button className="buttonaddtion">
                    Create New<i className='fa fa-arrows-alt-right'/></button>
            </Link>                   
            
            <DataGrid
                rows={instlists}
                disableSelectionOnClick
                columns={columns}
                pageSize={100}
                checkboxSelection
            />
        
        </div>  
        </>
    );
}
    
