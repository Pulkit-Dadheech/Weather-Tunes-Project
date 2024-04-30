import React from 'react';
import "../styles/Navbar.css";
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate('/login')
    }

    const handleSignup=()=>{
        navigate('/signup')
    }

    return (
        <nav>
            <h1 id="nav-logo"><Link style={{textDecoration: "none", color: "black"}} to="/">Weather Tunes</Link></h1>

            <div id="nav-btn">
                <button id="nav-btn1" onClick={handleLogin}>Login
                </button>
                <button id="nav-btn1" onClick={handleSignup}>Signup
                </button>
            </div>
        </nav>
    )
}

export default Navbar