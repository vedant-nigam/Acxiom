import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import checkAuth from '../../data/getToken';
import Logout from '../../component/Logout';

const paths = [
  {
    id: 1,
    path: "/vendor/your-items",
    label: "Your Items"
  },
  {
    id: 2,
    path: "/vendor/add-new-item",
    label: "Add New Item"
  },
  {
    id: 3,
    path: "/vendor/transactions",
    label: "Transactions"
  },
]

function MaintenanceMenuVendor() {
  const navigate = useNavigate();

  const funcYes = () => console.log("present");
  const funcNot = () => navigate("/");

  useEffect(() => {
    checkAuth(funcNot, funcYes)
  }, [])

  return (
    <div>
      <h2>Welcome Vendor</h2>
      <ul>
        {
          paths.map(e => {
            return <li key={e.id}><Link to={e.path}>{e.label}</Link></li>
          })
        }
      </ul>
      <Logout onClick={() => {
        navigate("/");
      }} />
    </div>
  );
}

export default MaintenanceMenuVendor;
