import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// import PropTypes from 'prop-types'

const FooterMenu = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <nav className="navbar navbar-expand-md justify-content-md-between">
          <StaticImage
            src="../../assets/global/cr-id-reversed.svg"
            alt="Consumer Reports"
            className="img-fluid "
            height={50}
          />
          <ul className="navbar-nav">
            <li className="nav-item content-center text-end">
              <span className="nav-link">
                &copy; Consumer Reports {new Date().getFullYear()}
              </span>
            </li>
            <li className="nav-item text-end">
              <Link to="/how-we-use-submission" className="nav-link">
                How We'll Use Your Submission
              </Link>
            </li>
            <li className="nav-item text-end">
              <a href="https://www.consumerreports.org/cro/2015/01/user-agreement/index.htm" className="nav-link" target="_blank">
                User Agreement
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

FooterMenu.propTypes = {};

export default FooterMenu;
