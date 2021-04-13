import React from "react";
import Team from "../common/components/about/Team";
import Goals from "../common/components/about/Goals";
import LookFamiliarAlt from "../common/components/LookFamiliarAlt";

const about = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>About</h1>
              <p>
                Why problem, why this matters, what you can do -Pellentesque at
                bibendum mauris, in porta nisi. Duis ornare ac metus et
                porttitor. Cras non commodo massa, et pretium turpis. Nam sit
                amet rhoncus nisi.
              </p>
            </div>
            <div className="col-4 d-none-d-md-flex">
              <nav
                id="navbar-example3"
                className="navbar navbar-light position-fixed"
              >
                <nav className="nav nav-pills flex-column">
                  <p>On This Page</p>
                  <a className="nav-link" href="#about">
                    About
                  </a>
                  <a className="nav-link" href="#our-goals">
                    Our Goals
                  </a>
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Goals />
      <Team />
      <LookFamiliarAlt />
    </>
  );
};

export default about;
