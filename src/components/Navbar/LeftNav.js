import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./leftnav.css";

const LeftNav = () => {
  return (
    <div className="leftnav">
      <Link to="/"><h1 className="title">movieDB.</h1></Link>
    </div>
  );
};

export default LeftNav;
