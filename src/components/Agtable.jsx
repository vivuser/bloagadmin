import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const Agtable = () => {

    const [rowData, setRowData] = useState([
        { User: "Tesla",   Email: "Model Y", price: 64950, electric: true },
        { User: "Ford",    Email: "F-Series", price: 33850, electric: false },
        { User: "Toyota",  Email: "Corolla", price: 29600, electric: false },
        { User: "Mercedes",Email: "EQA", price: 48890, electric: true },
        { User: "Fiat",    Email: "500", price: 15774, electric: false },
        { User: "Nissan",  Email: "Juke", price: 20675, electric: false },
      ]);
      
      const [colDefs, setColDefs] = useState([
        { field: "User" },
        { field: "Email" },
        { field: "price" },
        { field: "electric" }
      ]);;

      return (
        <div  
        className="ag-theme-quartz"
        style={{ height: 500, width: 1000 }}>
          <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
   />
        </div>
      );


}

export default Agtable;