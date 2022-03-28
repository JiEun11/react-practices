import React, { useState, useEffect, useRef } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import './App.scss';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  // const [rowData] = useState([
  //   {make : 'Toyota', model: 'Celica', price: 35000},
  //   {make: 'Ford', model: 'Mondeo', price: 32000},
  //   {make: 'Porsche', model: 'Boxter', price: 72000}
  // ]);
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

  useEffect(()=>{
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  const onButtonClick = e => {
    const selectedNodes = gridRef.current.api.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
    alert(`Selected nodes : ${selectedDataStringPresentation}`)
  }

  const [columnDefs] = useState([
    // {field: "make", sortable: true, filter: true },
    {field: "make", sortable: true, filter: true, checkboxSelection: true },
    {field: "model", sortable: true, filter: true},
    {field: "price", sortable: true, filter: true},
  ]);

  return(
    <div className='ag-theme-alpine' style={{height: 400, width: 600}}>
      <button onClick={onButtonClick}>Get selected rows</button>
      <AgGridReact 
        ref={gridRef}
        rowData={rowData} 
        columnDefs={columnDefs}
        rowSelection="multiple">
      </AgGridReact>
    </div>
  );
};

export default App;
