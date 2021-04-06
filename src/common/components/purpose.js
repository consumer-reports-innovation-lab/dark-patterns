import React from "react";
import { Link } from "gatsby";

const purpose = () => {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Our Purpose</h3>
            <p>
              Pellentesque nulla est, aliquam rutrum quam ac, molestie venenatis
              lectus. Aliquam urna lectus, tempor a est sed, faucibus tincidunt
            </p>
            <Link to="/about" className="btn btn-primary">
              About Us
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <div className="fs-6">
              <p>
                Collect dark patterns database - Pellentesque at bibendum
                mauris, in porta
              </p>
              <p>Educate consumers and tech brands on good and bad practices</p>
              <p>Promote change Pellentesque at bibendum mauris, in porta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default purpose;
