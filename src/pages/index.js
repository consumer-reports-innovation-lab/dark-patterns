import React from "react";
import { Link } from "gatsby";
import Examples from "../common/components/examples";
// import PropTypes from 'prop-types'

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1>Dark Patterns Tip Line</h1>
              <p>
                An online platform that allows consumers to submit deceptive
                design patterns they see in everyday products and services.
              </p>
              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Examples></Examples>
    </>
  );
};

index.propTypes = {};

export default index;
