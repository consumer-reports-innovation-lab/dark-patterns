import React from "react";
import { Link } from "gatsby";

const DarkPatterns = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <p className="card-title">Bias & Discrimination</p>
                <p className="card-text">
                  A person who contributes user data to a product or service
                  experiences unfair impacts based on demographic identifiers
                  such as age, race, and gender.
                </p>
                <Link to="/harmTemplate" className="card-link">
                  Explore This Dark Pattern
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkPatterns;
