import React, { useState } from 'react';

function VendorForm() {
  const [vendor, setVendor] = useState({
    name: '',
    category: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add/Update Vendor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={vendor.name} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={vendor.category} onChange={handleChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={vendor.location} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VendorForm;
