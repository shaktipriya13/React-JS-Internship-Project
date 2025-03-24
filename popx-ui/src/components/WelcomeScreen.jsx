import React from "react";
import "../styles/WelcomeScreen.css";

const WelcomeScreen = () => {
    return (
        <div className="out">

            <div className="container">
                <div className="inner">

                    <h2>Welcome to PopX</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="create-btn">Create Account</button>
                    <button className="login-btn">Already Registered? Login</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
