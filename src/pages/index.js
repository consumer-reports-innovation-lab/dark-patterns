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
            <div className="col-12 col-md-6">
              <h1 className="text-hero">Dark Patterns Tip Line</h1>
              <p>
                Every day, we’re exploited for profit through{" "}
                <strong>dark patterns</strong>: design tactics used in websites
                and apps to trick you into doing things you never meant to do.
              </p>
              <p className="text-small">
                <strong>
                  We need to take a stand against dark patterns — and you can
                  help. Join us as we fight back against companies using
                  manipulative dark patterns to steal our private information,
                  money, and time. You deserve respect, online and off.
                </strong>
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
          <div className="row centered">
            <div className="col-12 col-md-6 col-lg-6 mb-5 pb-5">
              <h2>Our Purpose</h2>
              <p>
                The Dark Patterns Tip Line is a platform that allows people to
                submit deceptive designs they see in everyday digital products
                and services. Through crowdsourcing human stories of digital
                manipulation and amplifying people’s voices, we will raise
                awareness of the real-life harms that result from deceptive
                designs. Your stories and screenshots will help pressure
                lawmakers to hold companies accountable for online abuse.
              </p>
              <Link to="/about" className="btn btn-primary">
                About Us
              </Link>
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-5 d-flex flex-column justify-content-center align-items-start">
              <ul className="icon-list">
                <li className="align-items-start mb-5">
                  <StaticImage
                    src="../common/assets/logo-icon.svg"
                    className="list-icon mt-2"
                  />
                  <div className="text-small">
                    <h4>Engage</h4>
                    <p>
                      Engage and encourage people to submit their stories of
                      dark patterns online.
                    </p>
                  </div>
                </li>
                <li className="align-items-start mb-5">
                  <StaticImage
                    src="../common/assets/logo-icon.svg"
                    className="list-icon mt-2"
                  />
                  <div className="text-small">
                    <h4>Inform</h4>
                    <p>
                      Inform the public on how to avoid devious design tactics
                      they may encounter in everyday use of online products and
                      services.
                    </p>
                  </div>
                </li>
                <li className="align-items-start mb-5">
                  <StaticImage
                    src="../common/assets/logo-icon.svg"
                    className="list-icon mt-2"
                  />
                  <div className="text-small">
                    <h4>Empower</h4>
                    <p>
                      Empower policymakers and advocates with evidence that
                      illustrates real-life harms of deception online.
                    </p>
                  </div>
                </li>
                <li className="align-items-start mb-5">
                  <StaticImage
                    src="../common/assets/logo-icon.svg"
                    className="list-icon mt-2"
                  />
                  <div className="text-small">
                    <h4>Change</h4>
                    <p>
                      Change the status quo by advocating for stronger consumer
                      protections and holding companies accountable.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Home.propTypes = {};

export default Home;
