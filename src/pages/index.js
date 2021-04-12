import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import DemoExamples from "../common/components/DemoExamples/";
import PatternForm from "../common/components/PatternForm";
// import PropTypes from 'prop-types'

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
              <h1 className="text-hero">
                Dark Patterns
                <br />
                Tip Line
              </h1>
              <p>
                An online platform that allows consumers to submit deceptive
                design patterns they see in everyday products and services.
              </p>

              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
            </div>
          </div>
        </div>
      </section>
      <DemoExamples />
      <PatternForm />
      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2>Our Purpose</h2>
            </div>
            <div className="col-12 col-md-6">
              <p>
                Pellentesque nulla est, aliquam rutrum quam ac, molestie
                venenatis lectus. Aliquam urna lectus, tempor a est sed,
                faucibus tincidunt.
              </p>
              <p>
                Sed tempus leo sit amet tortor pellentesque, in ultricies dolor
                pretium. Nulla facilisi. In hac habitasse platea dictumst. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Fusce suscipit.
              </p>
              <Link to="/about" className="btn btn-primary">
                About Us
              </Link>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
              <StaticImage
                src="../common/assets/global/cr-id-reversed.svg"
                alt="Consumer Reports"
                className="img-fluid"
              />
              <div className="container ps-0">
                <div className="row">
                  <div className="col-12 ">
                    <div className="row my-4">
                      <div className="col-2 centered px-0">
                        <StaticImage
                          src="../common/assets/logo-icon.svg"
                          alt=""
                          className="list-icon"
                        />
                      </div>
                      <div className="col-10 text-small centered">
                        Collect dark patterns database - Pellentesque at
                        bibendum mauris, in porta
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-2 centered px-0">
                        <StaticImage
                          src="../common/assets/logo-icon.svg"
                          alt=""
                          className="list-icon"
                        />
                      </div>
                      <div className="col-10 text-small centered">
                        Educate consumers and tech brands on good and bad
                        practices
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-2 centered px-0">
                        <StaticImage
                          src="../common/assets/logo-icon.svg"
                          alt=""
                          className="list-icon"
                        />
                      </div>
                      <div className="col-10 text-small centered">
                        Promote change Pellentesque at bibendum mauris, in porta
                      </div>
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

Home.propTypes = {};

export default Home;
