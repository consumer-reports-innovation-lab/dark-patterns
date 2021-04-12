import React from "react";
import { Link } from "gatsby";
import DarkPatterns from "../common/components/DarkPatterns";

const harms = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Harms of Dark Patterns</h1>
              <p>
                Pellentesque at bibendum mauris, in porta nisi. Duis ornare ac
                metus et porttitor. Cras non commodo massa, et pretium turpis.
                Nam sit amet rhoncus nisi. Vivamus at imperdiet arcu.
              </p>
              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
              <Link to="/shame" className="btn btn-primary">
                Wall of Shame
              </Link>
            </div>
          </div>
        </div>
      </section>
      <DarkPatterns></DarkPatterns>
    </>
  );
};

export default harms;
