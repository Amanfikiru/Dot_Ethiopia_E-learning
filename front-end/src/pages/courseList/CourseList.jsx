import "./courseList.css";
import MaterialTable from '@material-table/core'
import { useState } from "react";
import { userRows } from "../../dummyData";


export default function UserList() {
  const [data, setData] = useState(userRows)
  const columns = [
    { title: "ID", field: "id", width: 90, editable: false },
    {
      title: "Course Title", field: "Title",width: 300, validate: rowData => {
        if (rowData.Title === undefined || rowData.Title === "") {
          return "Required"
        } else if (rowData.Title.length < 3) {
          return "Title should contains atleast 3 chars"
        }
        return true
      }
    },
    {
      title: "Description", field: "Description",width: 350 , validate: rowData => {
        if (rowData.Description === undefined || rowData.Description === "") {
          return "Required"
        } else if (rowData.Description.length > 50 ) {
          return "Description should not contain more than 150 chars"
        }
        return true
      }
    },
    {
      title: "Total Enrolled", field: 'TotalEnrolled',width: 200, validate: rowData => {
        if (rowData.TotalEnrolled === undefined || rowData.TotalEnrolled === "") {
          return "Required"
        } 
        else
        return true
      }
    },
    

  ]


  return (
    <div className="App">
      <h1 align="center">Course Data</h1>
      
      <MaterialTable
        title=""
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data]
            updatedRows[index] = updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}
