import React, {useState} from 'react';
import '../styles/Login.css';
import TopBar from "./TopBar";
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home-page")
    };

    return (
        <>
            <div className="login-page-cover">
                <form className="login-page" onSubmit={handleLogin}>
                <TopBar/>
                    <div className="login-container">
                        <h1 className="login-header"> Login to Weather Tunes</h1>
                        <input
                            type="email"
                            className="login-page-email-input"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required/>
                        <input
                            type="password"
                            className="login-page-password-input"
                            placeholder="Password"

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
