import React from "react";
import { Link } from "gatsby";
// import PropTypes from 'prop-types'

const PrimaryMenu = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light" id="mainnav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div>
            <span className="d-none d-md-inline">Dark Patterns</span> <span className="highlighter">Tip Line</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/harms" className="nav-link" activeClassName="active" partiallyActive={true}>
                Harms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sightings"
                className="nav-link"
                activeClassName="active"
                partiallyActive={true}
              >
                Sightings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" activeClassName="active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/report" className="nav-link" activeClassName="active">
                Report
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

PrimaryMenu.propTypes = {};

export default PrimaryMenu;
