import React, {useState} from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { createMediaFromFile, createDraft, getToken } from '../../common/wp/wpActions'
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
import LoadingComponent from '../../common/ui/LoadingComponent'

const ValidationSchema = Yup.object().shape({
  description: Yup.string()
    .min(3, 'The description you entered is too short. Please Enter a longer description')
    .required('Please describe the pattern you are submitting'),
  affiliated_company: Yup.string()
    .required('Please enter the name of the affiliated company'),
})


const ExampleForm = () => {
  const [loading, setLoading] = useState(false)
  const [postError, setPostError] = useState(false)
  const { categories } = useCategories()
  const { industries } = useIndustries()
  const industryOptions = sortOptions(industries)
  const categoryOptions = sortOptions(categories)
  const initialValues = {
    industry: null,
    categories: null,
    featured_media: null,
    source_link: "",
    affiliated_company: undefined,
    description: undefined,
    optional_email: "",
  }

  const handleSubmit = async ({values}) => {
    const { industry, categories, featuredImage, source_link, affiliated_company, description, optional_email } = values
    let draft = {
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
      setLoading(true)

      if (featuredImage) {
        const media = await createMediaFromFile({ file: featuredImage[0], meta: {} })
        draft = { ...draft, featured_media: media.data.id }
      }

      await createDraft(draft).then(response => {
        const statusCode = response.status
        const error = statusCode >= 400 && statusCode <= 500 ? `error:` : null
        if (error) {
          setPostError(true)
          setLoading(false)
        } else if (statusCode >= 200 && statusCode <= 300) {
          console.log(response)
          setPostError(false)
          setLoading(false)
        }
      })

      // resetForm()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({ values })
        }}
      >
        {({ values, dirty, errors, isSubmitting, submitCount, setFieldValue, resetForm }) =>  (
          <Form>
            {loading ? (
              <LoadingComponent />
            ):(
              <>
                {isSubmitting ? (
                  <section>
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-md-8 col-lg-7">
                          {postError ? (
                            <>
                              <h3 className="text-danger">Error:</h3>
                              <p>There was an error during form submission please try again.</p>
                              <button className="btn btn-primary" onClick={() => resetForm()}>Report another tip</button>
                            </>
                          ) : (
                            <>
                              <h3 className="highlighter">Your submission has been received.</h3>
                              <h4 className="ms-2 my-4 text-mid">Thank you for sharing a dark pattern with us.</h4>
                              <button className="btn btn-primary" onClick={() => resetForm()}>Report another tip</button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                ) : (
                  <>
                    <Field
                      name="affiliated_company"
                      type="text"
                      component={TextInput}
                      placeholder="Enter company name..."
                      hint="The company, platform, product or service that you noticed doing shady stuff."
                      label="Affiliated Company (Required)"
                      className="mb-5"
                    />

                    <Field
                      name="description"
                      type="text"
                      component={TextArea}
                      placeholder="Describe in detail..."
                      hint="Please explain what you experienced and what harm it caused you. If possible, please explain how we can try to recreate your experience."
                      label="Describe this dark pattern (Required)"
                      className="mb-5"
                    />

                    <Field
                      name="source_link"
                      type="text"
                      component={TextInput}
                      placeholder="Enter source link..."
                      hint="Where should we go to try and recreate your experience?"
                      label="Where did you find this dark pattern? (link to website, app, or post)"
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
                      className="mb-5"
                    />

                    <Field
                      name="categories"
                      type="text"
                      component={SelectInput}
                      options={categoryOptions}
                      onChange={value => setFieldValue('categories', value)}
                      hint="Choose from the categories of harms."
                      placeholder="Select category..."
                      label="What harm did this cause you? (Required)"
                      className="mb-5"
                    />

                    <Field
                      name="featuredImage"
                      type="text"
                      component={FileUpload}
                      placeholder="..."
                      hint=" If you don’t have an image, that’s OK."
                      label="Screenshot Image"
                      className="mb-5"
                    />

                    <Field
                      name="optional_email"
                      type="text"
                      component={EmailInput}
                      placeholder="For outreach in case we have questions"
                      hint="You can optionally share your email so we can reach out if we have any questions. We won’t share your email."
                      className="mb-5"
                      label="Email (Optional)"
                    />
                    <p className="mt-n3" >By submitting this form, I agree to the terms of Consumer Reports’ <a href="https://www.consumerreports.org/cro/customerservice/privacy-policy/highlights/index.htm" target="_blank">Privacy Policy</a> and <a href="https://www.consumerreports.org/cro/2015/01/user-agreement/index.htm" target="_blank">User Agreement</a>. Read more about <a href="/how-well-use-your-submission">how we'll use your submissions</a>.</p>

                    <button
                      type="submit"
                      className="btn btn-primary my-5"
                      disabled={dirty ? false : true}>
                      Submit
                    </button>

                    {Object.entries(errors).length > 0 && submitCount > 0 && (
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
            <FormikDebug />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ExampleForm
