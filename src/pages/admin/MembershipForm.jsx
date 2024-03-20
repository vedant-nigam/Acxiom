import React, { useState } from 'react';

function MembershipForm() {
  const [membership, setMembership] = useState({
    name: '',
    price: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMembership(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add/Update Membership</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={membership.name} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={membership.price} onChange={handleChange} />
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" name="duration" value={membership.duration} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MembershipForm;
