import React from 'react'
import {Link} from "gatsby"

// TODO is there a way to set some of these styles based on URL to remove this component?
const LookFamiliarAlt = () => {
  return (
    <section >
      <div className="container">
        <div className="row ">
          <div className="col-12 centered ">
            <h1 className="text-white">See a Pattern?</h1>
          </div>
          <div className="col-12 centered">
            <Link to="/report" className="btn btn-primary">
              Report a Pattern
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LookFamiliarAlt
