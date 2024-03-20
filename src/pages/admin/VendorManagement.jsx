import React, { useState } from 'react';

function VendorManagement() {
  const [vendors, setVendors] = useState([]);

  return (
    <div>
      <h2>Vendor Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.category}</td>
              <td>{vendor.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorManagement;
