import React from "react";
import { Link } from "gatsby";

const RelatedSightings = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Sightings</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 my-4">
            <div className="card card-light">
              <div className="card-body">
                <p className="card-title">Instagram: No Option for “No”</p>
                <p className="card-text">
                  A brief summary - Pellentesque at bibendum mauris, in porta
                  nisi
                </p>
                <Link to="/harmTemplate" className="card-link">
                  Explore Dark Pattern
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 my-4">
            <div className="card card-light">
              <div className="card-body">
                <p className="card-title">Instagram: No Option for “No”</p>
                <p className="card-text">
                  A brief summary - Pellentesque at bibendum mauris, in porta
                  nisi
                </p>
                <Link to="/harmTemplate" className="card-link">
                  Explore Dark Pattern
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 my-4">
            <div className="card card-light">
              <div className="card-body">
                <p className="card-title">Instagram: No Option for “No”</p>
                <p className="card-text">
                  A brief summary - Pellentesque at bibendum mauris, in porta
                  nisi
                </p>
                <Link to="/harmTemplate" className="card-link">
                  Explore Dark Pattern
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 centered">
            <Link to="/harms" className="btn btn-primary">
              View All Examples
            </Link>
            <Link to="/report" className="btn btn-primary">
              Report a Pattern
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedSightings;
