import React from 'react'
import PropTypes from 'prop-types'
import ExampleForm from './ExampleForm'

const PostExample = () => {
  // const iFrameSrc = 'https://staging-darkpatterns.kinsta.cloud/'

  return (
    <section className="pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1>Report a<br />Dark Pattern</h1>
            <p>Notice a website or app up to something suspicious? Maybe you’ve felt forced into giving up personal details or discovered hidden fees. Document and share your experience to help prevent other people from also being harmed.</p>
            <p>Sharing a dark pattern you spotted in the wild helps us learn more about interfaces and designs that impact real people. Your tips will help policymakers and enforcers hold companies accountable for their dishonest and harmful practices, and we may feature your submission on this site. Join the movement to call out corporations for taking what’s not theirs.</p>
            <p>We encourage uploading images or screenshots that show the dark pattern you’ve encountered. Please don’t include any personal information in your submission.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            {/* <iframe src={iFrameSrc} title="Submit a dark pattern tip" width="100%" /> */}
            <ExampleForm />

          </div>
        </div>
      </div>
    </section>
  )
}

PostExample.propTypes = {

}

export default PostExample
