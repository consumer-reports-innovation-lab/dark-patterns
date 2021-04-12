import React from 'react'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const FinancialInsurance = () => {
  return (
    <div className="container py-5">
      <div className="row centered ">
        <div className="col-12 col-md-6">
          <StaticImage
            src="../../assets/placeholder-example.png"
            alt="placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 text-center">
          <h3>financial Insurance</h3>
          <p>
            Contact tracing, mental health apps, fitness apps, diet and meal
            services
          </p>
          <Link to="/" className="btn btn-primary">
            Examples
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FinancialInsurance;
