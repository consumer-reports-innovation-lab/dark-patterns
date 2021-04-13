import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import RelatedExample from "../common/components/RelatedExamples";
import LookFamiliar from "../common/components/LookFamiliar";

const shameExample = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <Link to="/shame" className="back-btn">
                View All
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="row">
                <div className="col-12">
                  <h2>Hidden "No" Option</h2>
                </div>
              </div>
              <div className="row  mt-5">
                <div className="col-4">
                  <h4>company</h4>
                  <p className="text-small">Instagram</p>
                </div>
                <div className="col-4">
                  <h4>Date</h4>
                  <p className="text-small">Feb 1, 2021</p>
                </div>
                <div className="col-4">
                  <h4>Industry</h4>
                  <p className="text-small">Social Media</p>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h4>Description</h4>
                  <p>
                    The user is pressured to turn on notifications, and there is
                    only the option for “not now” and “ok”. If the user does not
                    want to turn on notifications, there is not option for that,
                    and the app will continue to bother them about it.
                  </p>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h4>Harm Type(s)</h4>
                  <ul className="icon-list">
                    <li>
                      <StaticImage
                        src="../common/assets/logo-icon.svg"
                        alt=""
                        className="list-icon"
                      />
                      Stole my personal Information
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h4>Tags</h4>
                  <div className="tag">No Choice</div>
                  <div className="tag">Social Media</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 centered">
              <StaticImage src="https://via.placeholder.com/300x650" alt="" />
            </div>
          </div>
        </div>
      </section>
      <RelatedExample />
      <LookFamiliar />
    </>
  );
};

export default shameExample;
