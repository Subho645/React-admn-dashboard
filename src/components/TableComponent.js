// TableComponent.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './kantabstyle.css'; // Import CSS file

const createData = (partName, partNumber, price, quantity, supplier) => {
    return { partName, partNumber, price, quantity, supplier };
  };
  
  const rows = [
    createData('Brake Pad', 'BP123', 45.99, 150, 'Supplier A'),
    createData('Oil Filter', 'OF456', 8.99, 300, 'Supplier B'),
    createData('Air Filter', 'AF789', 15.49, 200, 'Supplier C'),
    createData('Spark Plug', 'SP101', 5.99, 500, 'Supplier D'),
    createData('Windshield Wiper', 'WW202', 12.99, 250, 'Supplier E'),
  ];
  
  const TableComponent = () => (
    <TableContainer component={Paper} className="paper-container">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Part Name</TableCell>
            <TableCell align="right">Part Number</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Supplier</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.partNumber}>
              <TableCell component="th" scope="row">
                {row.partName}
              </TableCell>
              <TableCell align="right">{row.partNumber}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.supplier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
  export default TableComponent;