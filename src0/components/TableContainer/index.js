import React from "react";
import EmployeeTable from "../EmployeeTable";






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
           {props.children}
        </tbody>
        </table>
  );
}

export default TableContainer;