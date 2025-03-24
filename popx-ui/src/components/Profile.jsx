import React from "react";
import { FaCamera } from "react-icons/fa"; // Importing camera icon
import "../styles/Profile.css"; // Import CSS file for styling
import img from "../assets/img.png";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="acc">
                <h2 className="profile-heading">Account Settings</h2>
            </div>
            <div className="info">
                <div className="profile-info">
                    <div className="profile-image">
                        <img className="photo" src={img} alt="Profile" />
                        <span className="camera-icon">
                            <FaCamera size={16} />
                        </span>
                    </div>
                    <div className="profile-details">
                        <h3 className="profile-name">Marry Doe</h3>
                        <p className="profile-email">Marry@Gmail.Com</p>
                    </div>
                </div>
                <p className="profile-description">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                    Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
                </p>
                <hr className="dotted-line" />
            </div>
        </div>
    );
};

export default Profile;
