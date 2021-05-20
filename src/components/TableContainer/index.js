import React from "react";
import EmployeeTable from "./EmployeeTable";
import API from "../../utils/API"


function TableContainer(props) {
  return (
        <table>
        <thead>
            <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Position</th>
            <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <EmployeeTable />
        </tbody>
        </table>
  );
}

export default TableContainer;