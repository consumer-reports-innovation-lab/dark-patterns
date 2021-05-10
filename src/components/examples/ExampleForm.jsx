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
} from '../../common/fields'
// import FormikDebug from '../../common/utils/FormikDebug'
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
    title: `New submission... ${new Date().toLocaleDateString("en-US")}`,
    industry: null,
    categories: null,
    featured_media: null,
    source_link: "",
    affiliated_company: "",
    description: "",
    optional_email: ""
  }

  const handleSubmit = (values) => {
    const { industry, categories, featuredImage, source_link, affiliated_company, description, optional_email } = values

    try {
      // const token = process.env.GATSBY_REST_TOKEN
      const uploadMedia = createMediaFromFile({ file: featuredImage[0], meta: {} })

      uploadMedia.then(media => {
        const uploadDraft = createDraft({
          featured_media: media.data.id,
          categories: categories ? [categories.value] : [],
          industry: industry ? [industry.value] : [],
          fields: {
            source_link,
            affiliated_company,
            description,
            optional_email
          }
        })

        uploadDraft.then(response => {
          console.log(response)

        })
      })

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
            handleSubmit(values)
            resetForm()
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>

              <Field
                name="featuredImage"
                type="text"
                component={FileUpload}
                multiple
                placeholder="..."
                hint=" If you don’t have an image, that’s OK."
                label="Featured Image"
                className="mb-5"
              />

              <Field
                name="source_link"
                type="text"
                component={TextInput}
                placeholder="Enter source link..."
                hint="Where should we go to try and recreate your experience?"
                label="Source Link (ex. Link to website, app, tweet or post)"
                className="mb-5"
              />

              <Field
                name="affiliated_company"
                type="text"
                component={TextInput}
                placeholder="Enter company name..."
                hint="The company, platform, product or service that you noticed doing shady stuff."
                label="Affiliated Company"
                className="mb-5"
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
                className="mb-5"
              />

              <Field
                name="categories"
                type="text"
                component={SelectInput}
                options={categoryOptions}
                onChange={value => setFieldValue('category', value)}
                hint="Choose from the categories of harms."
                placeholder="Select category..."
                label="What harm did this cause you?"
                className="mb-5"
              />

              <Field
                name="description"
                type="text"
                component={TextArea}
                placeholder="Describe in detail..."
                hint="Please explain what you experienced and what harm it caused you. If possible, please explain how we can try to recreate your experience."
                label="Describe this dark pattern"
                className="mb-5"
              />

              <Field
                name="optional_email"
                type="text"
                component={EmailInput}
                placeholder="Stay informed..."
                hint="You can optionally share your email so we can reach out if we have any questions. We won’t ever share your email or use it for any other purpose."
                label="Email (Optional)"
              />

              <button
                type="submit"
                className="btn btn-primary my-5">
                  Submit
              </button>

              {Object.entries(errors).length > 0 && (

                <ul className="border-start border-danger border-5 text-danger mb-5">
                  {Object.entries(errors).map(([key, value], i) => {
                    return <li key={key} className={'text-small'}>{value}</li>
                  })}
                </ul>
              )}

              {/* <FormikDebug /> */}
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
