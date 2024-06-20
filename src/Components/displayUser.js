import React from 'react';
import '../Assets/styles/tables.css';
const UserTable = () => {
  return (
    <table id="user-table" className="tables">
      <thead id="user-table-head">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody id="user-table-body"></tbody>
    </table>
  );
}

export default UserTable;
