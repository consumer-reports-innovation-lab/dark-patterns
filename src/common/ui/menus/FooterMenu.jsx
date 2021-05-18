import React from "react";
import { Link } from "gatsby";
// import PropTypes from 'prop-types'

const FooterMenu = () => {
  return (
    <div className="container">
      <div className="row py-5">

          <div className="col-12 col-md-7 col-lg-4 d-flex align-items-center">
            <span className="text-mono text-mid ">An experiment incubated by the <a className="text-mid" href="https://digital-lab.consumerreports.org/" target="_blank">CR Digital Lab</a></span>
          </div>
          <div className="col-12 col-md-5 col-lg-8">
            <ul className="navbar-nav">
              <li className="nav-item text-end">
                <span className="nav-link  me-lg-4">
                  &copy; {new Date().getFullYear()} Consumer Reports, Inc
                </span>
              </li>
              <li className="nav-item text-end">
                <Link to="/contact" className="nav-link">
                  Get in Touch
                </Link>
              </li>
              <li className="nav-item text-end">
                <Link to="/how-well-use-your-submission/" className="nav-link">
                  How We'll Use Your Submission
                </Link>
              </li>
              <li className="nav-item text-end">
                <a href="https://www.consumerreports.org/cro/2015/01/user-agreement/index.htm" className="nav-link" target="_blank">
                  User Agreement
                </a>
              </li>
          </ul>
          </div>


      </div>
    </div>
  );
};

FooterMenu.propTypes = {};

export default FooterMenu;
