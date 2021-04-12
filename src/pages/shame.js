import React from "react";
import { Link } from "gatsby";

const Shame = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Wall of Shame</h1>
              <p>
                Pellentesque at bibendum mauris, in porta nisi. Duis ornare ac
                metus et porttitor. Cras non commodo massa, et pretium turpis.
                Nam sit amet rhoncus nisi. Vivamus at imperdiet arcu.
              </p>
              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <span>Sort By</span>Most Recent
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <h2>Harms</h2>
              <ul className="list-of-harms">
                <li>
                  <input
                    type="checkbox"
                    id="harmOne"
                    name="harmOne"
                    value="Bike"
                  />
                  <label for="harmOne">Stole my personal Information</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="harmTwo"
                    name="harmTwo"
                    value="Bike"
                  />
                  <label for="harmTwo">Charged me more money</label>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12 col-md-6 my-4">
                  <div className="card card-dark">
                    <div className="card-body">
                      <p className="card-date">04/02/2021</p>
                      <p className="card-title">
                        Instagram: No Option for “No”
                      </p>
                      <p className="card-text">
                        A brief summary - Pellentesque at bibendum mauris, in
                        porta nisi
                      </p>
                      <Link to="/harmTemplate" className="card-link">
                        Explore Dark Pattern
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 my-4">
                  <div className="card card-dark">
                    <div className="card-body">
                      <p className="card-date">04/02/2021</p>
                      <p className="card-title">
                        Instagram: No Option for “No”
                      </p>
                      <p className="card-text">
                        A brief summary - Pellentesque at bibendum mauris, in
                        porta nisi
                      </p>
                      <Link to="/harmTemplate" className="card-link">
                        Explore Dark Pattern
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 my-4">
                  <div className="card card-dark">
                    <div className="card-body">
                      <p className="card-date">04/02/2021</p>
                      <p className="card-title">
                        Instagram: No Option for “No”
                      </p>
                      <p className="card-text">
                        A brief summary - Pellentesque at bibendum mauris, in
                        porta nisi
                      </p>
                      <Link to="/harmTemplate" className="card-link">
                        Explore Dark Pattern
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shame;
