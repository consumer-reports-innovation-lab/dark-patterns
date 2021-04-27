import React from "react";
import { Link } from "gatsby";

const Sightings = () => {
  return (
    <>
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Sightings from the crowd</h1>
              <p>
                Frustrated people all over the world have found dark patterns on
                “trustworthy” websites and apps. Click around to see some
                examples of how these dark patterns hurt people, and better
                understand the techniques companies use to trick you into doing
                what they want.
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
          {/* <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <span>Sort By</span>Most Recent
            </div>
          </div> */}
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
                  <label htmlFor="harmOne">Stole my personal Information</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="harmTwo"
                    name="harmTwo"
                    value="Bike"
                  />
                  <label htmlFor="harmTwo">Charged me more money</label>
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
                      <Link to="/shameExample" className="card-link">
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
                      <Link to="/shameExample" className="card-link">
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
                      <Link to="/shameExample" className="card-link">
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

export default Sightings;
