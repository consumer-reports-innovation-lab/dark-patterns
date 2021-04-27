import React from 'react'
import {Link} from "gatsby"

const LookFamiliar = () => {
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-12 content-center ">
            <h1 className="text-white">Look Familiar?</h1>
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

export default LookFamiliar
