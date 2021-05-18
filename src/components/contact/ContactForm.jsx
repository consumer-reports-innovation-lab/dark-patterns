import React from 'react'
// import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import {
  EmailInput,
  TextArea,
} from '../../common/fields'

const ContactForm = () => {

  return (
    <>
    <Formik
       initialValues={{ email: '', password: '' }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         touched,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>

          <Field
            name="optional_email"
            type="text"
            component={EmailInput}
            placeholder="For outreach in case we have questions"
            hint="You can optionally share your email so we can reach out if we have any questions. We won’t share your email."
            className="mb-4"
            label="Email (Optional)"
          />

          <Field
            name="description"
            type="text"
            component={TextArea}
            placeholder="Get in touch with us"
            hint="Get in touch with us"
          />

           <button type="submit" className="btn btn-primary my-5">
             Send
           </button>

         </form>
       )}
     </Formik>
    </>
  )
}

ContactForm.propTypes = {

}

export default ContactForm
