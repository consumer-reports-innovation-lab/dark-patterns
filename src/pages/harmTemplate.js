import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import RelatedHarms from "../common/components/RelatedHarms";

const harmTemplate = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container mt-n5">
          <div className="row mb-4">
            <div className="col-12">
              <Link to="/harms" className="back-btn">
                View All Harms
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>“Stole my Personal Information”</h1>
              <p>
                Pellentesque at bibendum mauris, in porta nisi. Duis ornare ac
                metus et porttitor. Cras non commodo massa, et pretium turpis.
                Nam sit amet rhoncus nisi. Vivamus at imperdiet arcu.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 centered">
              <StaticImage
                src="https://via.placeholder.com/800x500"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 centered">
              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
              <Link to="/shame" className="btn btn-primary">
                Wall of shame
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedHarms />
    </>
  );
};

export default harmTemplate;
