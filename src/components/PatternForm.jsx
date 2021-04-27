import React from "react";

const PatternForm = () => {
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
          <div className="col-12 col-md-8">
            {/* <form>
              <div className="mb-5">
                <label htmlFor="uploadScreenShot" className="form-label">
                  Upload a Screenshot
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="uploadScreenShot"
                  aria-describedby="uploadScreenShot"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="sourceLink" className="form-label">
                  Source Link
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="sourceLink"
                  aria-describedby="sourceLink"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="industrySelect" className="form-label">
                  Industry
                </label>
                <select className="form-select" aria-label="Select Industry">
                  <option selected></option>
                  <option value="1">Smart Devices</option>
                  <option value="2">Social Media</option>
                  <option value="3">Financial & Insurance</option>
                  <option value="4">Health & Wellness</option>
                  <option value="5">Education</option>
                  <option value="6">Other</option>
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="harmSelect" className="form-label">
                  What harm did this cause you?
                </label>
                <select className="form-select" aria-label="Select Harm">
                  <option selected></option>
                  <option value="1">Bias & Discrimination</option>
                  <option value="2">Consent harm</option>
                  <option value="3">Economic loss</option>
                  <option value="4">Loss of control</option>
                  <option value="5">Loss of personal data & privacy</option>
                  <option value="6">Loss of trust</option>
                  <option value="7">Manipulation</option>
                  <option value="8">Social harm</option>
                  <option value="9">Other</option>
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="descriptionTextarea" className="form-label">
                  Describe this dark pattern (Optional)
                </label>
                <textarea
                  className="form-control"
                  id="descriptionTextarea"
                ></textarea>
              </div>
              <div className="form-check mb-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  By submitting this form, I agree to the terms of Consumer
                  Reports’ Privacy Policy and User Agreement.
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternForm;
