import React from "react";
import Logo from "../images/logo-sml.gif";

const LeftCol = () => {
  return (
    <React.Fragment>
      <ul className="sidebar navbar-nav">
        /*<li className="nav-item ">
          <a href="" className="nav-link">
            <img src={Logo} />
          </a>
        </li>*/
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="pagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" href="login.html">
              Login
            </a>
            <a className="dropdown-item" href="register.html">
              Register
            </a>
            <a className="dropdown-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="dropdown-divider" />
            <h6 className="dropdown-header">Other Pages:</h6>
            <a className="dropdown-item" href="404.html">
              404 Page
            </a>
            <a className="dropdown-item" href="blank.html">
              Blank Page
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default LeftCol;
