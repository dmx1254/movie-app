import React from "react";
import { Link } from "react-router-dom";
import "./siderdrawer.css";

const Siderdrawer = ({ toggleBar, handleToggleNavBar }) => {
  const siderdrawerClasses = ["siderdrawer"];
  if (toggleBar) {
    siderdrawerClasses.push("sider");
  }
  return (
    <div className={siderdrawerClasses.join(" ")}>
      <div className="siderdrawer__sider-title">
        <h1 className="sidedrawer__title">movieDB.</h1>
        <i className="fas fa-times" onClick={handleToggleNavBar}></i>
      </div>
      <div className="siderdrawer__links">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/artistes">Artistes</Link>
          </li>
        </ul>
      </div>
      <div className="siderdrawer__social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
  );
};

export default Siderdrawer;
