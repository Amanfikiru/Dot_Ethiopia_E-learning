import React from 'react'
import "./instructorList.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,  } from "@material-ui/icons";
import { useState } from "react";
import { instructorRows } from "../../dummyData";



export const InstructorList = () => {
    const [data, setData] = useState(instructorRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    
    
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
        field: "profile",
        headerName: "profile",
        width: 200,
        renderCell: (params) => {
            return (
            <div className="instructorListUser">
                <img className="instructorListImg" src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
            );
        },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
        field: "status",
        headerName: "Status",
        width: 120,
        },
        {
        field: "lecturing",
        headerName: "lecturing",
        width: 160,
        },
        {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
            <>
                <Link to={"/admin/instructor/edit/" + params.row.id}>
                <button className="instructorListEdit">Edit</button>
                </Link>
                <DeleteOutline
                className="instructorListDelete"
                onClick={() => handleDelete(params.row.id)}
                />
            </>
            );
        },
        },
    ];

    return (
        <>
            <div className="instructorList">
                
                <Link to={"/admin/instructor/create"}>
                    <button className="buttonaddtion">
                        Create New<i className='fa fa-arrows-alt-right'/></button>
                </Link>                   
                
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                />
            
            </div>
            
        </>
    );
}
    
