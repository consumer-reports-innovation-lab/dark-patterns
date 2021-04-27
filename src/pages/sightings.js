import React from "react"
// import PropTypes from 'prop-types'
import { Formik, Field, Form, FieldArray } from "formik"
// import FormikDebug from "../common/utils/FormikDebug"
import {
  RadioInput,
  // TextInput,
  SwitchInput
} from "../common/fields"
import * as Yup from "yup"
import Intro from '../components/examples/Intro'
import ExampleCard from "../components/examples/ExampleCard"




const ExamplesPage = () => {
  const examples = [
    {
      id: '123',
      title: "Instagram: No Option for “No”",
      summary: "A brief summary - Pellentesque at bibendum mauris, in porta nisi",
      url: "/"
    }
  ]

  const categories = [
    {
      slug: 'blah',
      name: 'Blah'
    }
  ]
  const initialValues = {

  }

  return (
    <>
      <Intro />
      <section>
        <div className="container">
          {/* <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <span>Sort By</span>Most Recent
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 col-md-4">
              <Formik
                enableReinitialize
                initialValues={initialValues}
                // validationSchema={AuthorSchema}
                onSubmit={(values) => console.log(values)}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <h2>Harms</h2>
                    <ul className="list-of-harms">
                      {categories && categories.map(category => {
                        const { slug, name } = category

                        return (
                          <li key={category.slug}>
                            <Field
                              name={slug}
                              type="checkbox"
                              component={SwitchInput}
                              // toggle
                              // active={active}
                              // hint="Show examples in this category"
                              onChange={(e, value) =>
                                setFieldValue(slug, value.checked)
                              }
                              label={name}
                            />
                          </li>
                        )
                      })}
                    </ul>
                    {/* <FormikDebug /> */}
                  </Form>
                )}
              </Formik>
            </div>

            <div className="col-12 col-md-8">
              <div className="row">
                {examples && examples.map(example => {
                  const { id } = example
                  return (
                    <div key={id} className="col-12 col-md-6 my-4">
                      <ExampleCard example={example} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

ExamplesPage.propTypes = {

}

ExamplesPage.defaultProps = {

}

export default ExamplesPage
