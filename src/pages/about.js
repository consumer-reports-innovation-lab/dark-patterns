import React from "react";
import Team from "../components/about/Team";
import Goals from "../components/about/Goals";
import LookFamiliarAlt from "../components/LookFamiliarAlt";

const about = () => {
  return (
    <>
      <section id="about">
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
            <div className="col-2 offset-2 d-none-d-md-flex">
              {/* TODO Add scrollspy to wrapper for this page */}
              <nav id="aboutNav" className="navbar">
                <nav className="nav">
                  <span className="nav-link text-primary">On This Page</span>
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
