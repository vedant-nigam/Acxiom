// MaintenanceMenu.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import checkAuth from '../data/getToken';
import Logout from '../component/Logout';

const paths = [
  {
    id: 1,
    path: "/user/vendors/all",
    label: "Vendor"
  },
  {
    id: 2,
    path: "/user/cart",
    label: "Cart"
  },
  {
    id: 3,
    path: "/user/wishlist",
    label: "Guest List"
  },
  {
    id: 4,
    path: "/user/orders",
    label: "Orders"
  },
]

function MaintenanceMenuUser() {
  const navigate = useNavigate();

  const funcYes = () => console.log("present");
  const funcNot = () => navigate("/");

  useEffect(() => {
    checkAuth(funcNot, funcYes)
  }, [])

  return (
    <div>
      <h2>Welcome User</h2>
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

export default MaintenanceMenuUser;
