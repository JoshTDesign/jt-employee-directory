import React from "react";
import TableContainer from "./components/TableContainer";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
      <TableContainer>
        <h1>This is a test</h1>
        <EmployeeTable />
      </TableContainer>
  );
}

export default App;