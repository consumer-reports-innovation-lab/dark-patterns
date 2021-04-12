import React from "react";
import { Link } from "gatsby";

const Shame = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1>Wall of Shame</h1>
            <p>
              Pellentesque at bibendum mauris, in porta nisi. Duis ornare ac
              metus et porttitor. Cras non commodo massa, et pretium turpis. Nam
              sit amet rhoncus nisi. Vivamus at imperdiet arcu.
            </p>
            <Link to="/report" className="btn btn-primary">
              Report a Pattern
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shame;
