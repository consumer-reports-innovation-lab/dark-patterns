import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "gatsby"

const Intro = () => {
  return (
    <section>
      <div className="container">
        <div className="row d-lg-none mb-4">
          <div className="col-12">
            <h1 className="text-hero">Dark Patterns Tip Line</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="text-hero  d-none d-lg-inline-block">Dark Patterns Tip Line</h1>
            <p>
              Every day, we’re exploited for profit through{" "}
              <strong>dark patterns</strong>: design tactics used in websites and apps to persuade you into doing things you probably would not do otherwise.
              </p>
            <p className="text-mid">
              <strong>
                We need to take a stand against dark patterns—and you can help by reporting a dark pattern today. It will help us fight back against companies using manipulative dark patterns to take our private information, money, and time. You deserve respect, online and off.

                </strong>
            </p>

            <Link to="/report" className="btn btn-primary">
              Report a Pattern
              </Link>
          </div>
           <div className="col-12 col-md-6 d-none d-md-block position-relative">
              <div className="hero-graphic">
                <div className="phone-screen">
                  <div className="container-fluid px-0">
                    <div className="row mb-lg-5">
                      <div className="col-12 text-center">
                        <span className="text-white h3">Checkout</span>
                      </div>
                    </div>
                    <div className="row px-lg-5 my-3 my-lg-4">
                      <div className="col-8">
                        <span className="text-mono text-white">Subtotal</span>
                      </div>
                      <div className="col-4 text-end">
                        <span className="text-mono text-white">$22.10</span>
                      </div>
                    </div>
                    <div className="row px-lg-5 my-3 my-lg-4">
                      <div className="col-8">
                        <span className="text-mono text-white">Delivery fee</span>
                      </div>
                      <div className="col-4 text-end">
                        <span className="text-mono text-white">$1.49</span>
                      </div>
                    </div>
                    <div className="row px-lg-5 my-3 my-lg-4 phone-highlight position-relative">
                      <div className="col-8">
                        <span className="text-mono ">Tax and fees</span>
                      </div>
                      <div className="col-4 text-end">
                        <span className="text-mono ">$6.01</span>
                      </div>
                    </div>
                    <div className="row px-lg-5 my-3 my-lg-4 ">
                      <div className="col-8">
                        <span className="text-mono text-white">Driver tip</span>
                      </div>
                      <div className="col-4 text-end">
                        <span className="text-mono text-white">$5.92</span>
                      </div>
                    </div>
                    <div className="row px-lg-5">
                      <div className="col-12  border-bottom"></div>
                    </div>
                    <div className="row px-lg-5 my-4 my-lg-5">
                      <div className="col-6">
                        <span className="text-mono text-white"><strong>Total</strong></span>
                      </div>
                      <div className="col-6 text-end">
                        <span className="text-mono text-white"><strong>$35.52</strong></span>
                      </div>
                    </div>
                    <div className="row  bg-primary py-lg-3 justify-content-center">
                      <div className="col-10 text-center py-3">
                        <span className="text-mono pb-3 d-block "><strong>Service fee</strong></span>
                        <span className="text-mono">This 15% fee helps us cover operating costs</span>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Intro.propTypes = {

}

export default Intro
