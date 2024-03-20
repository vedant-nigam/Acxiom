import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import checkAuth from '../../data/getToken';
import Logout from '../../component/Logout';

const paths = [
  {
    id: 1,
    path: "/maintenance/membership",
    label: "Add/Update Membership"
  },
  {
    id: 2,
    path: "/maintenance/user",
    label: "Add/Update User"
  },
  {
    id: 3,
    path: "/maintenance/vendor",
    label: "Add/Update Vendor"
  },
  {
    id: 4,
    path: "/maintenance/user-management",
    label: "User Management"
  },
  {
    id: 5,
    path: "/maintenance/vendor-management",
    label: "Vendor Management"
  },
  {
    id: 6,
    path: "/maintenance/membership-assignment",
    label: "Membership Assignment"
  },
]

function MaintenanceMenu() {
  const navigate = useNavigate();

  const funcYes = () => console.log("present");
  const funcNot = () => navigate("/");

  useEffect(() => {
    checkAuth(funcNot, funcYes)
  }, [])

  return (
    <div>
      <h2>Maintenance Menu</h2>
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

export default MaintenanceMenu;
