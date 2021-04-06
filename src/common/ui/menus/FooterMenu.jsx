import React from "react";
import { Link } from "gatsby";
// import PropTypes from 'prop-types'

const FooterMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-md justify-content-md-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">
                &copy; Consumer Reports {new Date().getFullYear()}
              </span>
            </li>
            <li className="nav-item">
              <Link to="/privacy-policy" className="nav-link">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/TOS" className="nav-link">
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

FooterMenu.propTypes = {};

export default FooterMenu;
