import React, { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "yes",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Create your PopX account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name*</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Marry Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <label>Phone number*</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Marry Doe"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />

                    <label>Email address*</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Marry Doe"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password*</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Marry Doe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <label>Company name</label>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Marry Doe"
                        value={formData.companyName}
                        onChange={handleChange}
                    />

                    <label>Are you an Agency?*</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                checked={formData.agency === "yes"}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                checked={formData.agency === "no"}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>


                    <Link to="/profile">
                        <button type="submit">Create Account</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
