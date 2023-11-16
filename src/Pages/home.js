import React from "react";
import "./home.css";
import profilePic from "../assets/profile.JPG";

export default function Home() {
  return (
    <div className="header-container">
      <img className="header-image" src={profilePic} alt="Hailey Strauss" />
      <div className="header-content">
        <div>
          <div className="myName">Hailey Strauss</div>
          <div className="myTitle">Software Engineer</div>
          <div className="myTitleTwo">Fullstack developer</div>
        </div>
      </div>
      <div className="bar"></div>
    </div>
  );
}
