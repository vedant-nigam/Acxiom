import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { credData } from '../data/creds';
import checkAuth from '../data/getToken';
import Button from '../component/Button';
import "../index.css";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
        const user = credData.find(e => e.username == username);
        if (!user) {
            alert("User not found");
        }
        else if (user.pass != password) {
            alert("Password incorrect");
        }
        else {
            window.localStorage.setItem("role", user.role);
            handleRouting(user.role);
        }
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: 100 }}>Login</h2>
            <form className='main' onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label className='lbl'>username:</label>
                    <input type="text" value={username} onChange={handleEmailChange} />
                </div>
                <div className='inputs'>
                    <label className='lbl'>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className='custom-button' type="submit">Login</button>
                <Button children={"Sign up"} onClick={() => navigate("/signup")} />
            </form>
        </div>
    );
}

export default LoginPage;