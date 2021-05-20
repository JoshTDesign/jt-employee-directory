import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (

    <tr>
      <td><img src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>



  );
}

export default EmployeeRow;
