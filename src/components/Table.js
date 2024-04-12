// components/Table.js
import React from 'react';
import { Table } from 'react-bootstrap';

const TableComponent = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>1990-01-01</td>
          <td>john@example.com</td>
          <td>********</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};