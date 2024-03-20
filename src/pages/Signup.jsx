import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { credData } from '../data/creds';
import checkAuth from '../data/getToken';
import Button from '../component/Button';

const Radio = ({ value, selectedRole, handleRoleChange, label }) => {
    return (
        <label>
            <input
                type="radio"
                value={value}
                checked={selectedRole == value}
                onChange={handleRoleChange}
            />
            {label}
        </label>
    )
}

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleRouting = (role) => {
        if (role == '1') navigate("/maintenance/admin");
        else if (role == '2') navigate("/maintenance/vendor");
        else navigate("/maintenance/user");
    }

    const funcYes = () => handleRouting(window.localStorage.getItem("role"));
    const funcNot = () => console.log("not present")

    useEffect(() => {
        checkAuth(funcNot, funcYes)
    }, [])

    const handleEmailChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username,
            pass: password,
            role: selectedRole
        }
        credData.push(user);
        window.localStorage.setItem("role", selectedRole);
        if (selectedRole == '1') navigate("/maintenance/admin");
        else if (selectedRole == '2') navigate("/maintenance/vendor");
        else navigate("/maintenance/user");
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: 100 }}>Signup</h2>
            <form className='main' onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label className='lbl'>username:</label>
                    <input type="text" value={username} onChange={handleEmailChange} />
                </div>
                <div className='inputs'>
                    <label className='lbl'>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <h3>Select Your Role</h3>
                <Radio value={"1"} selectedRole={selectedRole} handleRoleChange={handleRoleChange} label={"Role 1"} />
                <br />
                <Radio value={"2"} selectedRole={selectedRole} handleRoleChange={handleRoleChange} label={"Role 2"} />
                <br />
                <Radio value={"3"} selectedRole={selectedRole} handleRoleChange={handleRoleChange} label={"Role 3"} />
                <br />
                <button className='custom-button' type="submit">Submit</button>
                <Button children={"Login"} onClick={() => navigate("/")} />
            </form>
        </div>
    );
}

export default Signup;
