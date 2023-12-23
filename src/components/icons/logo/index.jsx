import React from "react";
import "./style.css";
import Rocket from "../../../assets/images/rocket.svg";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={Rocket} alt="" />
      <span className="Title">
        <h1>to</h1>
        <h1>do</h1>
      </span>
    </div>
  );
};

export default Logo;
