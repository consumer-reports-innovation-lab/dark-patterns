import React from "react";
import SocialMedia from "./SocialMedia";
import SmartDevices from "./SmartDevices";
import HealthWellness from "./HealthWellness";
import FinancialInsuance from "./FinancialInsuance";

const DemoExamples = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Examples in Everyday Life</h2>
            </div>
            <div className="col-12">
              <ul
                className="nav nav-pills my-4 d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="smart-devices-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#smart-devices"
                    type="button"
                    role="tab"
                    aria-controls="smart-devices"
                    aria-selected="true"
                  >
                    Smart Devices
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="social-media-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#social-media"
                    type="button"
                    role="tab"
                    aria-controls="social-media"
                    aria-selected="false"
                  >
                    Social Media
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="financial-insurance-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#financial-insurance"
                    type="button"
                    role="tab"
                    aria-controls="financial-insurance"
                    aria-selected="false"
                  >
                    Financial Insurance
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="health-wellness-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#health-wellness"
                    type="button"
                    role="tab"
                    aria-controls="health-wellness"
                    aria-selected="false"
                  >
                    Health & Wellness
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="smart-devices"
                  role="tabpanel"
                  aria-labelledby="smart-devices-tab"
                >
                  <SmartDevices />
                </div>
                <div
                  className="tab-pane "
                  id="social-media"
                  role="tabpanel"
                  aria-labelledby="social-media-tab"
                >
                  <SocialMedia />
                </div>
                <div
                  className="tab-pane "
                  id="financial-insurance"
                  role="tabpanel"
                  aria-labelledby="financial-insurance-tab"
                >
                  <FinancialInsuance />
                </div>
                <div
                  className="tab-pane "
                  id="health-wellness"
                  role="tabpanel"
                  aria-labelledby="health-wellness-tab"
                >
                  <HealthWellness />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Examples in Everyday Life</h2>
            </div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Smart Devices"
                >
                  Smart Devices
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Social Media"
                >
                  Social Media
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Financial Insurance"
                >
                  Financial Insurance
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Health & Wellness"
                >
                  Health & Wellness
                </button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <SmartDevices />
                </div>
                <div className="carousel-item">
                  <SocialMedia />
                </div>
                <div className="carousel-item ">
                  <FinancialInsuance />
                </div>
                <div className="carousel-item">
                  <HealthWellness />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoExamples;
