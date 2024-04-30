import React, {useState} from 'react'
import "../styles/Login.css";
import {account} from '../config/Appwrite.js';
import {useNavigate} from 'react-router-dom';
import Navbar from "../components/Navbar";

const Login = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const loginFunc = async () => {
        const promise = account.createEmailPasswordSession(userData.email, userData.password)
        promise.then(function (response) {
            console.log(response); // Success
            navigate('/home-page')
        }, function (error) {
            alert(error);
        });
    }

    return (
        <div>
            <Navbar/>
            <div id="login-main" className={'login-page'}>
                <div id="login-form">
                    <h2 id="login-h2">Login</h2>
                    <input type="email" id="login-input" placeholder='Email'
                           onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                    <input type="text" id="login-input" placeholder='Password'
                           onChange={(e) => setUserData({...userData, password: e.target.value})}/>
                    <button onClick={loginFunc} id="login-btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login