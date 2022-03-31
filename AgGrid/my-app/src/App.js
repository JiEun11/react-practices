import React, { useCallback, useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
// import './App.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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

  // Enable Selection
  const onButtonClick = e => {
    const selectedNodes = gridRef.current.api.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
    alert(`Selected nodes : ${selectedDataStringPresentation}`)
  }

  const [columnDefs] = useState([
    // {field: "make", sortable: true, filter: true },
    {headerName: "Make", field: "make", checkboxSelection: true, tooltipField:"make"},
    {field: "model"},
    {field: "price"},
    {field: "price"}
  ]);

  const defaultColDef = {
    sortable: true, 
    filter: true, 
    floatingFilter:true, 
    editable:true
  }

  const onExportClick=useCallback(()=>{
    gridRef.current.api.exportDataAsCsv();
  },[]);


  return(
      <div className='ag-theme-alpine' style={{width: 1000, height: 500}}>
        <button onClick={onButtonClick}>Get selected rows</button>
        <button onClick={onExportClick}>Download CSV export file</button>
        <AgGridReact 
          ref={gridRef}
          rowData={rowData} 
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          enableBrowserTooltips={true}
          pagination={true}
          paginationAutoPageSize={true}
          >
        </AgGridReact>
      </div>
  );
};

export default App;
