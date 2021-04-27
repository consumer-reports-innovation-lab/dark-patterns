import React from "react";
import { Link } from "gatsby";

const RelatedExamples = () => {
  return (
    <section >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>More Harms/Examples</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 my-4">
            <div className="card card-light">
              <div className="card-body">
                <p className="card-date">04/02/2021</p>
                <p className="card-title">Instagram: No Option for “No”</p>
                <p className="card-text">
                  A brief summary - Pellentesque at bibendum mauris, in porta
                  nisi
                </p>
                <Link to="/shameExample" className="card-link">
                  Explore Dark Pattern
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedExamples;
