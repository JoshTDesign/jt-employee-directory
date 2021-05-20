import React from "react";
import "./style.css";
import samplePerson from "../../utils/samplePerson.js";


function EmployeeTable(props) {
  return (
    <tr>
        {samplePerson}
        <th>{props.image}</th>
        <th>{props.firstName} {props.lastName}</th>
        <th>{props.email}</th>
        <th>{props.phone}</th>
    </tr>

  );
}

export default EmployeeTable;