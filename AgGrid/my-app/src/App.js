import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  // const [rowData] = useState([
  //   {make : 'Toyota', model: 'Celica', price: 35000},
  //   {make: 'Ford', model: 'Mondeo', price: 32000},
  //   {make: 'Porsche', model: 'Boxter', price: 72000}
  // ]);
  const [rowData, setRowData] = useState([]);
  useEffect(()=>{
    fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  const [columnDefs] = useState([
    {field: "make", sortable: true, filter: true },
    {field: "model", sortable: true, filter: true},
    {field: "price", sortable: true, filter: true},
  ]);

  return(
    <div className='ag-theme-alpine' style={{height: 400, width: 600}}>
      <AgGridReact 
        rowData={rowData} columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
};

export default App;
