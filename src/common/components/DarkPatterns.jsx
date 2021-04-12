import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


const DarkPatterns = () => {
  return (
    <section className="bg-mid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card card-dark">
              <StaticImage
                src="https://via.placeholder.com/150"
                class="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-title">Stole my personal information</p>
                <p className="card-text">
                  A brief summary - Pellentesque at bibendum mauris, in porta
                  nisi.
                </p>
                <Link to="/harmTemplate" className="card-link">
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

export default DarkPatterns;
