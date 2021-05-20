import React from "react";
import "./style.css";


function EmployeeTable(props) {
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
            <tr>
            <td>Stephen Curry</td>
            <td>27</td>
            <td>1,91</td>
            <td>Akron, OH</td>
            </tr>
            <tr>
            <td>Klay Thompson</td>
            <td>25</td>
            <td>2,01</td>
            <td>Los Angeles, CA</td>
            </tr>
        </tbody>
        </table>
  );
}

export default EmployeeTable;