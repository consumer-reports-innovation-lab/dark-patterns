import React from "react";

const Examples = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Examples in Everyday Life</h3>
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
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="smart-devices"
                role="tabpanel"
                aria-labelledby="smart-devices-tab"
              >
                <div className="centered">
                  <span className="fs-3">Smart Devices</span>
                </div>
              </div>
              <div
                className="tab-pane "
                id="social-media"
                role="tabpanel"
                aria-labelledby="social-media-tab"
              >
                <div className="centered">
                  <span className="fs-3">Social Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
