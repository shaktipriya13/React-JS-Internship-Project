import React from "react";
import "../styles/WelcomeScreen.css";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
    return (
        <div className="out">

            <div className="container">
                <div className="inner">

                    <h2>Welcome to PopX</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <Link to="/signup">
                        <button className="create-btn">Create Account</button>
                    </Link>

                    <Link to="/login">
                        <button className="login-btn">Already Registered? Login</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
