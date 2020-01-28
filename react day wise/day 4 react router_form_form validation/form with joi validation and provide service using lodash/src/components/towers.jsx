import React from "react";

const Towers = () => {
  return (
    <React.Fragment>
      <div
        className="collapse navbar-collapse justify-content-start"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GBSGA/SitePages/Home.aspx"
              >
                Tower - GBSGA
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GBSP2P/SitePages/Home.aspx"
              >
                Tower - GBSP2P
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GBSO2C/SitePages/Home.aspx"
              >
                Tower - GBSO2C
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GBSMGT/SitePages/Home.aspx"
              >
                Tower - GBSMGT{" "}
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/iNext"
              >
                Tower - iNext
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GBSCMS/SitePages/Home.aspx"
              >
                Tower - GBSCMS
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GBSMI/SitePages/Home.aspx"
              >
                Tower - GBSMI
              </a>
              <a
                className="dropdown-item"
                href="http://mylilly.am.lilly.com/IE1/employee/Pages/EmployeeHome.aspx"
              >
                Tower - GTCORK
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GTCORK"
              >
                Tower - GBSTCC
              </a>
              <a
                className="dropdown-item"
                href="http://lilly-ema.rf.lilly.com/sites/GBSTCC/SitePages/Home.aspx"
              >
                Tower - GBSTCC
              </a>
              <a
                className="dropdown-item"
                href="/sites/EUSSCGeneral/default.aspx"
              >
                Tower - EUSSCGeneral{" "}
              </a>
              <a
                className="dropdown-item"
                href="http://lillynet.global.lilly.com/sites/EUSSCPortal/operations/SitePages/Home.aspx"
              >
                Tower - EUSSCPortal
              </a>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Towers;
