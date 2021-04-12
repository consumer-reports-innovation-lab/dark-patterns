import React from "react";
import Team from "../common/components/about/Team";
import Goals from "../common/components/about/goals";

const about = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10">
              <h1>About</h1>
              <p>
                Why problem, why this matters, what you can do -Pellentesque at
                bibendum mauris, in porta nisi. Duis ornare ac metus et
                porttitor. Cras non commodo massa, et pretium turpis. Nam sit
                amet rhoncus nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Goals></Goals>
      <Team></Team>
    </>
  );
};

export default about;
