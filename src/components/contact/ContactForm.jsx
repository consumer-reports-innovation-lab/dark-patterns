import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { createMessage } from '../../common/wp/wpActions'
import {
  EmailInput,
  TextArea,
} from '../../common/fields'
import LoadingComponent from '../../common/ui/LoadingComponent'

const ValidationSchema = Yup.object().shape({
  // description: Yup.string()
  //   .min(3, 'The description you entered is too short. Please Enter a longer description')
  //   .required('Please describe the pattern you are submitting')
})

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [postError, setPostError] = useState(false)
  const initialValues = {
    title: '',
    content: ''
  }

  const handleSubmit = async ({values}) => {
    try {
      setLoading(true)
      await createMessage(values).then(response => {
        const statusCode = response.status
        const error = statusCode >= 400 && statusCode <= 500 ? `error:` : null
        if (error) {
          setPostError(true)
        } else if (statusCode >= 200 && statusCode <= 300) {
          setPostError(false)
        }
      })
      setLoading(false)
    } catch (error) {

    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({ values })
      }}
     >
      {({ dirty, errors, isSubmitting }) => (
        <Form>
          {loading ? (
            <LoadingComponent />
          ) : (
            <>
              {isSubmitting ? (
                <div className="py-5">
                  {postError ? (
                    <>
                      <h3 className="text-danger">Error:</h3>
                      <p>There was an error please try again.</p>
                    </>
                  ) : (
                    <>
                      <h3 className="highlighter">Your message has been sent.</h3>
                      <h4 className="ms-2 my-4 text-mid">Thank you for sharing your feedback with us.</h4>
                    </>
                  )}
                </div>
              ) : (
                <>

                  <Field
                    name="content"
                    type="text"
                    component={TextArea}
                    placeholder=""
                    hint="Get in touch with us"
                    label="Message"
                  />

                  <button
                    type="submit"
                    disabled={dirty ? false : true}
                    className="btn btn-primary my-5">
                    Send
                  </button>

                  {dirty && (
                    <>
                      {Object.entries(errors).length > 0 && (
                        <div className='border-start border-danger border-5 px-3 text-danger mb-5'>
                          {Object.entries(errors).map(([key, value], i) => {
                            return <p key={key} >{value}</p>
                          })}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </Form>
       )}
     </Formik>
  )
}

ContactForm.propTypes = {

}

export default ContactForm
