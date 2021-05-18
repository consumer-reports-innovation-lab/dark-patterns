import React from 'react'
// import PropTypes from 'prop-types'
import ContactForm from './ContactForm'

const ContactUs = () => {

  return (
    <section className="pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-xl-7">
            <h1>Get in touch</h1>
            <p>We’re here to help and answer any questions you might have about submitting to or supporting The Dark Patterns Tip Line.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

ContactUs.propTypes = {

}

export default ContactUs
