import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import {
  TextInput,
  TextArea,
  SelectInput,
  FileUpload,
  EmailInput,
} from '../../common/fields'
import FormikDebug from '../../common/utils/FormikDebug'
import { useCategories } from '../../hooks/useCategories'
import { useIndustries } from '../../hooks/useIndustries'
import { sortOptions } from '../../common/utils/helpers'

const ValidationSchema = Yup.object().shape({
  content: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
})


const ExampleForm = () => {
  const { categories } = useCategories()
  const { industries } = useIndustries()
  const industryOptions = sortOptions(industries)
  const categoryOptions = sortOptions(categories)
  const initialValues = {
    sourceLink: "",
    affiliatedCompany: "",
    description: "",
    industry: null,
    category: null,
    email: ""
  }

  const handleSubmit = (values) => {
    console.log(values)
    try {
      const token = process.env.GATSBY_REST_TOKEN
      fetch(`${process.env.GATSBY_REST_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          title: 'Lorem ipsum',
          content: 'Lorem ipsum dolor sit amet.',
          status: 'draft'
        })
      }).then(response => {
        return response.json()
      }).then(post => {
        console.log(post)
      })
    } catch (error) {

    }
  }

  return (
    <>
      <h1>Sandbox: Form</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values)
          resetForm()
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>

            {/* <Field
              name="featuredImage"
              type="text"
              component={FileUpload}
              placeholder="..."
              label="Featured Image"
              className="mb-4"
            /> */}

            <Field
              name="sourceLink"
              type="text"
              component={TextInput}
              placeholder="Enter source link..."
              hint="Where should we go to try and recreate your experience?"
              label="Source Link"
              className="mb-4"
            />

            <Field
              name="affiliatedCompany"
              type="text"
              component={TextInput}
              placeholder="Enter company name..."
              hint="The company, platform, product or service that you noticed doing shady stuff."
              label="Affiliated Company"
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
              name="category"
              type="text"
              component={SelectInput}
              options={categoryOptions}
              onChange={value => setFieldValue('category', value)}
              hint="Choose from the categories of harms."
              placeholder="Select category..."
              label="What harm did this cause you?"
              className="mb-4"
            />

            <Field
              name="description"
              type="text"
              component={TextArea}
              placeholder="Describe in detail..."
              hint="Please explain what you experienced in detail and what harm it caused you. If possible, please explain how we can try to recreate your experience."
              label="Describe this dark pattern (Optional)"
              className="mb-4"
            />

            <Field
              name="email"
              type="text"
              component={EmailInput}
              placeholder="Stay informed..."
              hint="Enter your email if you would like to stay informed."
              label="Email (Optional)"
            />

            <button type="submit" className="btn btn-primary">Submit</button>
            <FormikDebug />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ExampleForm
