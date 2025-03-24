import React from "react";
import "../styles/Login.css"; // Import CSS file
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Signin to your <br /> PopX account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <form>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter email address" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />

                    <Link to="/profile">
                        <button type="submit" className="login-btn">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
