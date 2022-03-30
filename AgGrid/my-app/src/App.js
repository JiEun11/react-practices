import React, { useCallback, useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
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
    {headerName: "Make", field: "make", checkboxSelection: true},
    {field: "model"},
    {field: "price"},
  ]);

  const defaultColDef = {
    sortable: true, 
    filter: true, 
    floatingFilter:true, 
    editable:true, 
    flex:1,

  }

  const onExportClick=useCallback(()=>{
    gridRef.current.api.exportDataAsCsv();
  },[]);


  return(
    <div className='ag-theme-alpine' style={{height: 400, width: 600}}>
      <button onClick={onButtonClick}>Get selected rows</button>
      <button onClick={onExportClick}>Download CSV export file</button>
      <AgGridReact 
        ref={gridRef}
        rowData={rowData} 
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        pagination={true}
        >
      </AgGridReact>
    </div>
  );
};

export default App;
