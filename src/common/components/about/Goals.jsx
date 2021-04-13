import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Goals = () => {
  return (
    <section className="bg-dark" id="our-goals">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2>Our Goals</h2>
            <ul className="icon-list">
              <li className="align-items-start">
                <StaticImage
                  src="../common/assets/logo-icon.svg"
                  className="list-icon mt-2"
                />
                <div>
                  <h3>Collect</h3>
                  <p>
                    Recognized dark patterns - Pellentesque at bibendum mauris,
                    in porta nisi duis ornare. Duis ornare ac metus et
                    porttitor.
                  </p>
                </div>
              </li>
              <li className="align-items-start">
                <StaticImage
                  src="../common/assets/logo-icon.svg"
                  className="list-icon mt-2"
                />
                <div>
                  <h3>Educate</h3>
                  <p>
                    Consumers & decision makers - bibendum mauris, in porta
                    nisi. Duis ornare ac metus et porttitor. Duis ornare ac
                    metus et porttitor.
                  </p>
                </div>
              </li>
              <li className="align-items-start">
                <StaticImage
                  src="../common/assets/logo-icon.svg"
                  className="list-icon mt-2"
                />
                <div>
                  <h3>Change</h3>
                  <p>
                    Pellentesque at bibendum mauris, in porta nisi. Duis ornare
                    ac metus et porttitor. Duis ornare ac metus et porttitor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
