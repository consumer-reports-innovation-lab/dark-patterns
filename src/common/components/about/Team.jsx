import React from "react";

const Team = () => {
  return (
    <section className="team-wrapper" id="team">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 ">
            <div className="row mb-4">
              <div className="col-12 text-center">
                <h2>Team</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 text-center">
                <h4>Ben Moskowitz</h4>
                <p>Director - Digital Lab, Consumer Reports</p>
              </div>
              <div className="col-12 col-md-6 text-center">
                <h4>Stephanie Nguyen</h4>
                <p>Investigative Research, Dark Patterns Tip Line</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
