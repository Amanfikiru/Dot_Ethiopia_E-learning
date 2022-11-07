import React, {useState, useEffect} from 'react'
import "./instructorList.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
//import { instructorRows } from "../../dummyData";
import axios from 'axios';



export const InstructorList = () => {    

    const[instlists, setInstlists] = useState([]);
    useEffect(() =>{
        axios.get("").then((response)=>{
        setInstlists(response)
        console.log(response)});
    }, []);

    const rows = [
        {
            id: instlists.id,
            firstname: instlists.firstname,
            lastname: instlists.lastname,
            grandfathername: instlists.grandfathername,
            gender: instlists.gender,
            level_of_study: instlists.level_of_study,
            field_of_study: instlists.field_of_study,
            address: instlists.address,
            country: instlists.country,
            city: instlists.city,
            area_of_expertise: instlists.area_of_expertise,
            description: instlists.description,
            email: instlists.email,
          }
        
    ]
    
    
    
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
        field: "username",
        headerName: "UserName",
        width: 200,
        },
        { field: "email", headerName: "Email", width: 200 },
        {
        field: "gender",
        headerName: "Gender",
        width: 120,
        },
        {
        field: "level_of_study",
        headerName: "Level of Study",
        width: 160,
        },
        {
        field: "field_of_study",
        headerName: "Field of Study",
        width: 160,
        },
        {
        field: "address",
        headerName: "Address",
        width: 160,
        },
        {
        field: "country",
        headerName: "Country",
        width: 160,
        },
        {
        field: "city",
        headerName: "City",
        width: 150,
        },
        {
        field: "area_of_expertise",
        headerName: "Area of Expertise",
        width: 150,
        },
        {
        field: "description",
        headerName: "Description",
        width: 160,
        },
        {
        field: "created_at",
        headerName: "Created at",
        width: 150,
        },
        {
        field: "updated_at",
        headerName: "Updated at",
        width: 150,
        },
    ];

    


    return (
        <>
        <table>
            <row>
                {}
            </row>
        </table>
            <div className="instructorList">
                
                <Link to={"/admin/instructor/create"}>
                    <button className="buttonaddtion">
                        Create New<i className='fa fa-arrows-alt-right'/></button>
                </Link>                   
                
                <DataGrid
                    rows={rows}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                />
            
            </div>
            
        </>
    );
}
    
