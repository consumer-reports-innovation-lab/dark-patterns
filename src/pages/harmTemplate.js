import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import RelatedSightings from "../common/components/RelatedSightings";

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
            <div className="col-12 col-md-8 col-lg-7">
              <h1>Bias & Discrimination</h1>
              <p>
                A person who contributes user data to a product or service may
                experience unfair impacts based on demographic identifiers such
                as age, race, and gender. E.g.) discrimination in employment,
                insurance, housing, education, credit, etc.
              </p>
              <Link to="/shame" className="btn btn-primary">
                Report a Pattern
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light " id="exampleWrapper">
        <div className="container">
          <div className="row py-5 centered">
            <div className="col-12 col-md-5 p-md-4">
              <StaticImage
                src="https://via.placeholder.com/500x700"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 callout ms-lg-5">
              <p>
                A social networking app for gay, bi, trans, and queer people
                featured an ethnicity filter, which some argue can enforce
                racism by segregating matches in the app by skin color. In
                response to the #BlackLivesMatter movement, the app removed
                their ethnicity filter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <RelatedSightings />
    </>
  );
};

export default harmTemplate;
