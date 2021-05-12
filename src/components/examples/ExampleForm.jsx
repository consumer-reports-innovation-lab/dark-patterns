import React, {useState} from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { createMediaFromFile, createDraft } from '../../common/wp/wpActions'
import {
  TextInput,
  TextArea,
  SelectInput,
  FileUpload,
  EmailInput,
  SwitchInput,
} from '../../common/fields'
import FormikDebug from '../../common/utils/FormikDebug'
import { useCategories } from '../../hooks/useCategories'
import { useIndustries } from '../../hooks/useIndustries'
import { sortOptions } from '../../common/utils/helpers'

const ValidationSchema = Yup.object().shape({
  description: Yup.string()
    .min(3, 'The description you entered is too short. Please Enter a longer description')
    .required('Please describe the pattern you are submitting'),
  affiliated_company: Yup.string()
    .required('Please enter the name of the affiliated company'),
})


const ExampleForm = () => {
  const [feedback, setFeedback] = useState(false)
  const { categories } = useCategories()
  const { industries } = useIndustries()
  const industryOptions = sortOptions(industries)
  const categoryOptions = sortOptions(categories)
  const initialValues = {
    industry: null,
    categories: null,
    featured_media: null,
    source_link: "",
    affiliated_company: "",
    description: "",
    optional_email: "",
    privacy_policy: false
  }

  const handleSubmit = (values) => {
    const { industry, categories, featuredImage, source_link, affiliated_company, description, optional_email } = values
    const draft = {
      title: `New submission... ${new Date().toLocaleDateString("en-US")}`,
      categories: categories ? [categories.value] : [],
      industry: industry ? [industry.value] : [],
      fields: {
        source_link,
        affiliated_company,
        description,
        optional_email
      }
    }
    try {

      if (featuredImage) {
        const uploadMedia = createMediaFromFile({ file: featuredImage[0], meta: {} })

        uploadMedia.then(media => {
          const uploadDraft = createDraft({
            featured_media: media.data.id,
            ...draft
          })

          uploadDraft.then(response => {
            console.log(response)
            return response
          })
        })
      }

      createDraft(draft).then(response => response)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {!feedback ? (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={(values, { resetForm }) => {
            const response = handleSubmit(values)
            response.then( response => {
              if (response.status === 201){
                console.log(response.status)
                resetForm()
              }
            })


          }}
        >
          {({ values, errors, touched, isSubmitting , setFieldValue }) =>  (
            <Form>

            <Field
                name="affiliated_company"
                type="text"
                component={TextInput}
                placeholder="Enter company name..."
                hint="The company, platform, product or service that you noticed doing shady stuff."
                label="Affiliated Company (Required)"
                className="mb-4"
              />

              <Field
                name="description"
                type="text"
                component={TextArea}
                placeholder="Describe in detail..."
                hint="Please explain what you experienced and what harm it caused you. If possible, please explain how we can try to recreate your experience."
                label="Describe this dark pattern (Required)"
                className="mb-4"
              />

              <Field
                name="source_link"
                type="text"
                component={TextInput}
                placeholder="Enter source link..."
                hint="Where should we go to try and recreate your experience?"
                label="Where did you find this dark pattern? (ex. Include source or link to website, app, tweet or post)"
                className="mb-4"
              />

              <Field
                name="industry"
                type="text"
                component={SelectInput}
                options={industryOptions}
                onChange={value => setFieldValue('industry', value)}
                hint="Choose from the most commonly effected industries."
                placeholder="Select industry..."
                label="Industry"
                className="mb-4"
              />

              <Field
                name="categories"
                type="text"
                component={SelectInput}
                options={categoryOptions}
                onChange={value => setFieldValue('categories', value)}
                hint="Choose from the categories of harms."
                placeholder="Select category..."
                label="What harm did this cause you?"
                className="mb-4"
              />

              <Field
                name="featuredImage"
                type="text"
                component={FileUpload}
                placeholder="..."
                hint=" If you don’t have an image, that’s OK."
                label="Screenshot Image"
                className="mb-4"
              />

              <Field
                name="optional_email"
                type="text"
                component={EmailInput}
                placeholder="Stay informed..."
                hint="You can optionally share your email so we can reach out if we have any questions. We won’t ever share your email or use it for any other purpose."
                className="mb-4"
                label="Email"
              />

              <Field
                name="privacy_policy"
                type="checkbox"
                component={SwitchInput}
                onChange={(e, value) => setFieldValue('privacy_policy', value.checked)}
                label=""
              >
                <span className="mt-n3" >By submitting this form, I agree to the terms of Consumer Reports’ <a href="https://www.consumerreports.org/cro/customerservice/privacy-policy/highlights/index.htm" target="_blank">Privacy Policy</a> and <a href="https://www.consumerreports.org/cro/2015/01/user-agreement/index.htm" target="_blank">User Agreement</a>.</span>
              </Field>

              <button
                type="submit"
                className="btn btn-primary my-5"
                disabled={ values.privacy_policy ? false : true }
                // onClick={() => setSubmitStatus(true)}
                >
                  Submit
              </button>

              {Object.entries(errors).length > 0 && (
                <ul className={ isSubmitting
                  ? 'border-start border-danger border-5 text-danger mb-5'
                  : 'd-none'
                }>
                  {Object.entries(errors).map(([key, value], i) => {
                    return <li key={key} >{value}</li>
                  })}
                </ul>
              )}

              <FormikDebug />
              { isSubmitting ? (
                <section className="d-flex">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-7">
                        <h3 className="highlighter">Your submission has been received.</h3>
                        <h4 className="ms-2 my-4 text-mid">Thank you for sharing a dark pattern with us.</h4>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <></>
              )
            }
            </Form>
          )}
        </Formik>


      ):(
        <div className="alert alert-warning">
          {feedback}
        </div>
      )}





    </>
  )
}

export default ExampleForm
