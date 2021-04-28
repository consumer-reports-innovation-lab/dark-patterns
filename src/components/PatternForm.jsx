import React from "react";

const PatternForm = () => {
  const iFrameSrc = 'https://staging-darkpatterns.kinsta.cloud/'

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1>
              Report a<br />
              Dark Pattern
            </h1>
            <p>
              Notice a website or app up to something suspicious? Maybe you’ve
              felt forced into giving up personal details or discovered a hidden
              cost. Document and share your experience to help prevent other
              people from also being harmed.
            </p>
            <p>
              Your stories and screenshots will help pressure lawmakers to hold
              companies accountable for online abuse. Join the movement to call
              out corporations for taking what’s not theirs.
            </p>
            <p>
              Share your story here by uploading a screenshot (or a few!) of a
              dark pattern you’ve encountered. If you need multiple screenshots
              to tell the story, please upload in chronological order. Also,
              kindly remove any personal information when you share the example.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <hr/>
            <div className="bg-iframe aspect-5x7" >
            <iframe  src={iFrameSrc} title="Submit a dark pattern tip" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternForm;
